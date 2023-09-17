import { useEffect, useState } from "react"
import { fetcher } from "../../util/API"
import Navbar from "@/components/Navbar"

const Layout = ({ children }) => {
  const [genresMovie, setGenresMovie] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetcher("genre/movie/list?language=en")
      setGenresMovie(response)
    }

    fetchData()
  }, [])

  const onSearch = async (query) => {
    try {
      const response = await fetcher(
        `search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
      )

      if (response.results && Array.isArray(response.results)) {
        // Assuming the API response contains an array of results
        return response.results
      }
    } catch (error) {
      console.error("Error fetching search results:", error)
      return []
    }
  }

  return (
    <div>
      <Navbar movieGenresList={genresMovie} onSearch={onSearch} />
      {children(genresMovie, searchResults)}
    </div>
  )
}

export default Layout