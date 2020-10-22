import axios from "axios";
import * as actions from "../entities/api";

const api = ({ dispatch, getState }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  next(action);

  const { url, method, data, onSuccess, onLoading, onError } = action.payload;
  if (onLoading) dispatch({ type: onLoading });

  try {
    const response = await axios({
      baseURL: "http://localhost:5000/api",
      url,
      method,
      data,
    });

    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    if (onError) dispatch({ type: onError, payload: error.message });

    dispatch({ type: actions.apiCallFailed.type, payload: error.message });
  }
};

export default api;
