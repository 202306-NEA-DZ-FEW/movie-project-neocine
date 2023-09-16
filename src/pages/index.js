import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Cards from "../components/Card/Cards"
import { fetcher } from "../../util/API"

export default function Home({ latestMovie }) {
  return (
    <>
      {latestMovie.results.map((movie, index) => {
        return (
          <div key={index}>
            <Cards {...movie} />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const data = await fetcher("trending/movie/day?language=en-US")

  return {
    props: {
      latestMovie: data,
    },
  }
}
