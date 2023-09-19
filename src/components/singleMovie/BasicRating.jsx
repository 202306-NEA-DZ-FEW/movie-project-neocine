import React from "react"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"

export default function BasicRating({ movie }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "inline-block",
      }}
    >
      <Typography component="legend">|| {movie.runtime} min</Typography>
      <Rating name="read-only" value={movie.popularity / 20} readOnly />
    </Box>
  )
}
