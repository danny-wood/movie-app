import http from "./httpService";
import { tmdbApiUrlV3 } from "../config.json";

const apiUrl = `${tmdbApiUrlV3}/person`;

export async function getPerson(id) {
  const response = await http.get(`${apiUrl}/${id}`);
  return response.data;
}

export async function getPeople() {
  const response = await http.get(`${apiUrl}/popular`);
  return response.data;
}

export default {
  getPerson,
  getPeople,
};
