import axios, { AxiosRequestConfig } from "axios";

export default {};

export async function fetchQuote() {
  const { data } = await axios.get(`https://api.quotable.io/random`);
  return data;
}

export async function fetchTimer() {
  try {
    
    const response = await fetch(`https://worldtimeapi.org/api/ip`);
    ;
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}



//  -- get world time api
