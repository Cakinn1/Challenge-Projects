




export async function fetchApi () {
const response = await fetch(`https://api.adviceslip.com/advice`)
return await response.json()
}