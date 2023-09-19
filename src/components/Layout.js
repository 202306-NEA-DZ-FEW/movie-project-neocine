import { useEffect, useState } from "react"
import { fetcher } from "../../util/API"
import Navbar from "@/components/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const [genresMovie, setGenresMovie] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  const [selectedGenreId, setSelectedGenreId] = useState(null)

  const onSearch = async (query) => {
    try {
      const response = await fetcher(
        `search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
      )

      if (response.results && Array.isArray(response.results)) {
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
      <Footer />
    </div>
  )
}

export default Layout
