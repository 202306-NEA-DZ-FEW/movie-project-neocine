import Navbar from "@/components/Navbar"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document({ movieGenresList }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Navbar movieGenresList={movieGenresList}/> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export async function getStaticProps() {
  const genresData = await fetcher("genre/movie/list?language=en")
  return {
    props: {
      props: { movieGenresList: genresData },
    },
  }
}
