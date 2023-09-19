import "@/styles/slider.module.css"
import "@/styles/globals.css"
import { fetcher } from "../../util/API"
import Layout from "@/components/Layout"

export default function App({ Component, pageProps, genresMovie }) {
  return (
    <Layout>
      {(genresMovie) => <Component {...pageProps} genresMovie={genresMovie} />}
    </Layout>
  )
}
