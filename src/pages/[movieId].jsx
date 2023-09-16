import React from "react"
import Poster from "@/components/singleMovie/Poster"
import { fetcher } from "../../util/API"
import Container from "@/components/singleMovie/Container"

export default function MoviePage({ movie, credits, trailer }) {
  const video = trailer.results.find((result) => result)

  return (
    <>
      <Poster movie={movie} />
      <br></br>
      <Container movie={movie} actors={credits} video={video} />
    </>
  )
}

// Define the getServerSideProps function to fetch data for a specific movie
export async function getServerSideProps(context) {
  const { movieId } = context.query

  const movie = await fetcher(`/movie/${movieId}?language=en-US`)
  const credits = await fetcher(`/movie/${movieId}/credits?language=en-US`)
  const trailer = await fetcher(`/movie/${movieId}/videos?language=en-US`)
  return {
    props: {
      movie: movie,
      credits: credits,
      trailer: trailer,
    },
  }
}
