import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return { ...state, isLoading: true, isError: false };
		case "FETCH_SUCCESS":
			return { ...state, isLoading: false, isError: false, data: action.payload };
		case "FETCH_FAILURE":
			return { ...state, isLoading: false, isError: true };
		default:
			throw new Error();
	}
};

const useHackerNewsApi = (initData, initUrl) => {
	const [url, setUrl] = useState(initUrl);

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initData
	});

	useEffect(() => {
		let didCancel = false;
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" });
			try {
				const result = await axios(url);
				if (!didCancel) {
					dispatch({ type: "FETCH_SUCCESS", payload: result.data });
				}
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: "FETCH_FAILURE" });
				}
			}
		};

		fetchData();

		return () => {
			didCancel = true;
		};
	}, [url]);

	const doFetch = url => {
		setUrl(url);
	};

	return { ...state, doFetch };
};

export default useHackerNewsApi;
