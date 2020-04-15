import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiUrl = `${tmdbApiUrlV3}/movie`;

// https://developers.themoviedb.org/3/movies/get-movie-details
export async function getMovie(id) {
  // TODO: Move this into it's own function so we can delay api requests to test loading state of components.
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await http.get(`${apiUrl}/${id}`);

  return response.data;
}

export default {
  getMovie,
};
