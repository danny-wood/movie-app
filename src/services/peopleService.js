import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiUrl = `${tmdbApiUrlV3}/person`;

export async function getPeople() {
  const response = await http.get(`${apiUrl}/popular`);
  return response.data;
}

export default {
  getPeople,
};
