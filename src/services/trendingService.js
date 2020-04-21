import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiUrl = `${tmdbApiUrlV3}/trending`;

// https://developers.themoviedb.org/3/trending/get-trending
export async function getTrending(media_type = "all", time_window = "day") {
  // TODO: Move this into it's own function so we can delay api requests to test loading state of components.
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await http.get(`${apiUrl}/${media_type}/${time_window}`);
  return response.data;
}

export default {
  getTrending,
};
