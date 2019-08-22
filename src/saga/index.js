import { takeLatest, call, put, takeEvery, delay, fork, select } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, SERVER_URL } from '../constants';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
	console.log('saga watchersaga');
	const response = yield call(fetchServerData);

	const server_data = response.data;
	// console.log(server_data);
	// const dog = response.data.message;

	// dispatch a success action to the store with the new dog
	yield put({ type: API_CALL_SUCCESS, server_data });
	yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
// function fetchDog() {
// 	return axios({
// 		method: 'get',
// 		url: 'https://dog.ceo/api/breeds/image/random'
// 	});
// }

function fetchServerData() {
	return axios({
		method: 'get',
		url: SERVER_URL
	});
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
	try {
		console.log('workersaga');
		const response = yield call(fetchServerData);
		const server_data = response.data;

		// dispatch a success action to the store with the new dog
		yield put({ type: API_CALL_SUCCESS, server_data });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: API_CALL_FAILURE, error });
	}
}

// const delay = ms => new Promise(res => setTimeout(res, ms));

// const delay = ms =>
// 	new Promise(res => {
// 		return setTimeout(console.log("sdfsdf"), ms);
// 	});
// function* helloSaga() {
// 	console.log("hello saga");
// }

// function* incrementAsync() {
// 	yield delay(1000);
// 	yield put({ type: "INCREMENT" });
// }

// export function* watchIncrementAsync() {
// 	yield takeEvery("INCREMENT_ASYNC", incrementAsync);
// }
