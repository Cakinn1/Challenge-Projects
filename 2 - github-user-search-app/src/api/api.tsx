export async function fetchApi(inputValue: string) {
  const response = await fetch(`https://api.github.com/users/${inputValue}`);
  return await response.json();
}
