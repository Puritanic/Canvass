import axios from 'axios';
import * as types from './types';

/* eslint-disable no-underscore-dangle */

const startFetchUser = response => ({
  type: types.FETCH_USER,
  payload: response
});

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch(startFetchUser(res.data));
};

export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/payment', token);

  dispatch({ type: types.FETCH_USER, payload: res.data });
};
