import { takeLatest, call, put, takeEvery, delay, fork, select } from 'redux-saga/effects';
import axios from 'axios';
import {
	API_CALL_REQUEST,
	API_CALL_SUCCESS,
	API_CALL_FAILURE,
	SERVER_URL,
	POST_SERVER_URL,
	X_API_KEY,
	API_CALL_UPDATE,
	API_UPDATE_FAILURE,
	API_UPDATE_SUCCESS
} from '../constants';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
	const response = yield call(fetchServerData);

	const server_data = response.data;
	yield put({ type: API_CALL_SUCCESS, server_data });
	yield takeLatest(API_CALL_REQUEST, workerSaga);
	yield takeLatest(API_CALL_UPDATE, updateSaga);
}

function fetchServerData() {
	return axios({
		method: 'get',
		url: SERVER_URL
	});
}

function updateData(field, id, json) {
	if (id !== null) {
		return axios({
			method: 'patch',
			headers: { 'x-api-key': X_API_KEY, 'Content-Type': 'application/json' },
			url: `${POST_SERVER_URL}/${field}/${id}`,
			data: json
		});
	} else {
		return axios({
			method: 'patch',
			headers: { 'x-api-key': X_API_KEY, 'Content-Type': 'application/json' },
			url: `${POST_SERVER_URL}/${field}`,
			data: json
		});
	}
}

function* updateSaga(action) {
	try {
		const response = yield call(updateData, action.payload.field, action.payload.id, action.payload.json);
		// dispatch a success action to the store with the new dog
		yield put({ type: API_UPDATE_SUCCESS, success: true });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: API_UPDATE_FAILURE, success: false, error });
	}
}
// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
	try {
		const response = yield call(fetchServerData);
		const server_data = response.data;

		// dispatch a success action to the store with the new dog
		yield put({ type: API_CALL_SUCCESS, server_data });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: API_CALL_FAILURE, error });
	}
}
