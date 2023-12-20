export default {};

export async function fetchSingleCountry(text: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${text}`);
  const data = await response.json();
  return data;
}

export async function fetchFilterByRegion(value: string) {
  const response = await fetch(`https://restcountries.com/v3.1/${value}`);
  const data = await response.json();
  return data;
}
