//poster component
// import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
// import CardContent from "@mui/material/CardContent"
// import CardMedia from "@mui/material/CardMedia"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
import * as React from "react"
import SimpleContainer from "./poster_components/SimpleContainer"

export default function Poster({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

  return (
    <>
      <SimpleContainer
        productionCompany={movie.production_companies}
        movie={movie}
        image={imageUrl}
      ></SimpleContainer>
    </>
  )
}
