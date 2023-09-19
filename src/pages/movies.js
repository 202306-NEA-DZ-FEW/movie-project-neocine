import { Grid } from "@mui/material"
import { fetcher } from "../../util/API"
import Cards from "@/components/Cards"
import Link from "next/link"
import styles from "../styles/movies.module.css"
import SearchBar from "@/components/Searchbar"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Movies = ({ latestMovie, selectedGenre }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const router = useRouter()
  const { genre, search, list } = router.query

  const [movies, setMovies] = useState([])

  const handleSearch = async (searchTerm) => {
    const defaultApiRoute = `search/movie?query=${searchTerm}&include_adult=false&language=en-US`

    const apiRoute = genre
      ? `search/movie?query=${searchTerm}&include_adult=false&language=en-US&with_genres=${genre}`
      : defaultApiRoute

    const data = await fetcher(apiRoute)
    setSearchResults(data.results)
  }

  const fetchMoviesByList = async (movieList) => {
    try {
      const apiRoute = `/movie/${movieList}?language=en-US`
      const data = await fetcher(apiRoute)
      setMovies(data.results)
    } catch (error) {
      console.error("Error fetching movies:", error)
      setMovies([])
    }
  }

  useEffect(() => {
    if (list) {
      fetchMoviesByList(list)
    }
  }, [list])

  useEffect(() => {
    if (!genre) {
      handleSearch(searchTerm)
    }
  }, [searchTerm, genre])

  const genreFilteredMovies = genre
    ? latestMovie.results.filter((movie) =>
        movie.genre_ids.includes(parseInt(genre)),
      )
    : latestMovie.results

  let filteredMovies

  if (genre) {
    filteredMovies = latestMovie.results.filter((movie) => {
      const includesGenre = !genre || movie.genre_ids.includes(parseInt(genre))

      const includesSearch =
        !searchTerm ||
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())

      return includesGenre && includesSearch
    })
  } else {
    filteredMovies = searchTerm ? searchResults : genreFilteredMovies
  }

  if (list) {
    filteredMovies = movies
    console.log(movies)
  }

  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={setSearchTerm} placeh={"Search Movies..."} />

      <Grid container spacing={2}>
        {filteredMovies.map((movie) => {
          return (
            <Grid key={movie.id} item md={3} className={styles.gridItem}>
              <Link href={`/${movie.id}`}>
                <Cards {...movie} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export default Movies

export async function getStaticProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  return {
    props: {
      latestMovie: data,
    },
  }
}
