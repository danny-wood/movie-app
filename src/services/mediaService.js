import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiMovieUrl = `${tmdbApiUrlV3}/movie`;
const apiDiscoverUrl = `${tmdbApiUrlV3}/discover`;
const apiTvUrl = `${tmdbApiUrlV3}/tv`;

// https://developers.themoviedb.org/3/movies/get-movie-details
export async function getMovie(id) {
  // TODO: Move this into it's own function so we can delay api requests to test loading state of components.
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await http.get(`${apiMovieUrl}/${id}`);
  return response.data;
}

export async function getMovies() {
  const response = await http.get(`${apiDiscoverUrl}/movie`);
  return response.data;
}

export async function getUpcomingMovies() {
  const response = await http.get(`${apiMovieUrl}/upcoming`);
  return response.data;
}

export async function getTvShow(id) {
  const response = await http.get(`${apiTvUrl}/${id}`);
  return response.data;
}

export async function getTVShows() {
  const response = await http.get(`${apiDiscoverUrl}/tv`);
  return response.data;
}

export default {
  getMovie,
  getMovies,
  getUpcomingMovies,
  getTvShow,
  getTVShows,
};
