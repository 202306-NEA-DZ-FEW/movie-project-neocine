import { Grid } from "@mui/material"
import { fetcher } from "../../../util/API"
import Cards from "@/components/Cards"
import Link from "next/link"
import styles from "@/styles/movies.module.css"
import SearchBar from "@/components/Searchbar"
import { useState, useEffect } from "react"

const Actors = ({ latestactor }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  // search/person?query=1&include_adult=false&langua
  const handleSearch = async (searchTerm) => {
    const apiRoute = `search/person?query=${searchTerm}&include_adult=false&language=en-US`
    const data = await fetcher(apiRoute)
    setSearchResults(data.results)
  }
  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm])
  const actorsToDisplay = searchTerm ? searchResults : latestactor.results
  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={setSearchTerm} placeh={"Search Actors..."} />

      <Grid container spacing={2}>
        {actorsToDisplay.map((actor) => {
          return (
            <Grid key={actor.id} item md={3} className={styles.gridItem}>
              <Link href={`/actor/${actor.id}`}>
                <Cards
                  title={actor.name}
                  poster_path={actor.profile_path}
                  popularity={actor.popularity}
                ></Cards>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export default Actors

export async function getStaticProps() {
  const data = await fetcher("person/popular?language=en-US&page=1")
  return {
    props: {
      latestactor: data,
    },
  }
}
