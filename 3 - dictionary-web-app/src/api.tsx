import axios from "axios";

export default {};

const BASE_URL_ENGLISH = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

export async function fetchData(value: string) {
  const { data } = await axios.get(`${BASE_URL_ENGLISH + value}`);
  return data;
}
