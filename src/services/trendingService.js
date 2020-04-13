import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

// https://developers.themoviedb.org/3/trending/get-trending
export function getTrending(media_type = "all", time_window = "day") {
  return http.get(`${tmdbApiUrlV3}/${media_type}/${time_window}`);
}

export default {
  getTrendingMovies,
};
