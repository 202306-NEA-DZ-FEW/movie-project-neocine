import React from "react"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Skeleton from "@mui/material/Skeleton"
import Rating from "@mui/material/Rating"
import Link from "next/link"
function SmallCards({
  title,
  vote_average,
  release_date,
  backdrop_path,
  loading,
  name,
  id,
}) {
  const imageSrc = `https://image.tmdb.org/t/p/original${backdrop_path}`
  const linkStyle = {
    textDecoration: "none",
    color: "#F5C518",
  }

  const hoverStyle = {
    color: "#F7FF33",
    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)",
  }
  return (
    <Grid container wrap="nowrap">
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        {loading ? (
          <>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </>
        ) : (
          <>
            <Link
              href={`/${id}`}
              style={linkStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
            >
              <img
                style={{ width: 200, height: 118 }}
                alt={title}
                src={imageSrc}
              />
              <Box sx={{ pr: 1 }}>
                <Typography gutterBottom variant="body2">
                  {title || name}
                </Typography>
                <Typography display="block" variant="caption" color="white">
                  <Rating
                    sx={{ color: "yellow", fontSize: "1.2rem" }}
                    name="read-only"
                    value={vote_average / 2}
                    readOnly
                  />{" "}
                  {release_date}
                </Typography>
              </Box>
            </Link>
          </>
        )}
      </Box>
    </Grid>
  )
}

SmallCards.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  loading: PropTypes.bool,
}

export default SmallCards
