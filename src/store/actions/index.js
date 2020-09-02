import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./types";

const getData = (payload) => {
  return {
    type: GET_DATA,
    payload,
  };
};

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailure = (payload) => {
  return {
    type: GET_DATA_FAILURE,
    payload,
  };
};

export default {
  getData,
  getDataSuccess,
  getDataFailure,
};
