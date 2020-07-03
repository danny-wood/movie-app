import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiSearchUrl = `${tmdbApiUrlV3}/search`;

export async function multiSearch(searchTerm, page = 1) {
  const response = await http.get(
    `${apiSearchUrl}/multi?query=${searchTerm}&page=${page}`
  );
  return response.data;
}

export default {
  multiSearch,
};
