import Head from "next/head"
import Image from "next/image"
import Cards from "@/components/Cards"
import { fetcher } from "../../util/API"
import Slider from "@/components/Slider"
import CardsSlider from "@/components/CardsSlider"
import styles from "@/styles/Home.module.css"

export default function Home({ latestMovie }) {
  const latestThreeMovies = latestMovie.results.slice(0, 3)
  const latestFiveMovies = latestMovie.results.slice(0, 60)

  return (
    <>
      <div className={styles.test}>
        <div className={styles.titles}>
          <Slider movies={latestThreeMovies} />
        </div>

        <h1 className={styles.titles}>Latest Movies :</h1>
        <div className={styles.smallSlider}>
          <CardsSlider movies={latestFiveMovies} />
        </div>
        <h1 className={styles.titles}>Popular Movies :</h1>
        <div className={styles.smallSlider}>
          <CardsSlider movies={latestFiveMovies} />
        </div>
      </div>
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
