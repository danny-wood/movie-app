import axios from "axios";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // If this is an unexpected error then log it.
    console.log(error);
    //logger.log(error);
    //toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
