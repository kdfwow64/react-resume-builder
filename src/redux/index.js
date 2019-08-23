// action types

import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, API_CALL_CHANGE } from '../constants';

// reducer with initial state
const initialState = {
	fetching: false,
	server_data: {
		id: 0,
		profile: {},
		address: {},
		education: [{}],
		workHistory: [{}],
		skills: [{}]
	},
	error: null
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case API_CALL_REQUEST:
			console.log('API_CALL_REQUEST');
			return { ...state, fetching: true, error: null };
		case API_CALL_SUCCESS:
			console.log('API_CALL_SUCCESS');
			return { ...state, fetching: false, server_data: action.server_data };
		case API_CALL_FAILURE:
			console.log('API_CALL_FAILURE');
			return { ...state, fetching: false, server_data: null, error: action.error };
		case API_CALL_CHANGE:
			console.log('API_CALL_CHANGE');
			if (action.index !== undefined) {
				console.log('array');
				let index = action.index;
				let jsonValue1 = {};
				jsonValue1[action.name] = action.value;

				console.log(jsonValue1);
				let arrayValue = state.server_data[action.field];
				let obj = state.server_data[action.field][index];
				console.log(obj);
				arrayValue[index] = { ...obj, ...jsonValue1 };
				console.log(arrayValue);
				let jsonValue = {};
				jsonValue[action.field] = arrayValue;
				console.log(jsonValue);
				return {
					...state,
					server_data: {
						...state.server_data,
						...jsonValue
					}
				};
			} else {
				console.log('object');
				let jsonValue1 = {};
				jsonValue1[action.name] = action.value;

				console.log(jsonValue1);
				let jsonValue = {};
				jsonValue[action.field] = { ...state.server_data[action.field], ...jsonValue1 };
				console.log(jsonValue);
				return {
					...state,
					server_data: {
						...state.server_data,
						...jsonValue
					}
				};
			}
		default:
			return state;
	}
}
