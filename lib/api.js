export default async function getJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random', {method: 'GET', headers: {'Content-Type': 'application/json'}})
    const data = await res.json()
    return data.value
}