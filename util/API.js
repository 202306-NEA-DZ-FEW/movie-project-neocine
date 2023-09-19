export async function fetcher(apiRoute) {
  const url = "https://api.themoviedb.org/3/" + apiRoute
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MThmNTFkMjdhMjczNzk4YmE4MDVjMjQ2Y2YzMDhmMyIsInN1YiI6IjY1MDMwZjRmZTBjYTdmMDBhZTQwNjRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x8yx_DbvpkN6H83lLCes9R22Np8Vf5gEZehbJ7TW6ZU",
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
