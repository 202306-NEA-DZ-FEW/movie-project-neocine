import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function Cards({ title, overview, poster_path }) {
  const images = `https://image.tmdb.org/t/p/original${poster_path}`
  return (
    <Card sx={{ maxWidth: 180, background: "black" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
