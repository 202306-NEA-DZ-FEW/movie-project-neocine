import React, { useState, useEffect } from "react"
import { styled, alpha } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import EditIcon from "@mui/icons-material/Edit"
import Divider from "@mui/material/Divider"
import ArchiveIcon from "@mui/icons-material/Archive"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Box } from "@mui/material"
import { fetcher } from "../../util/API"
import { useRouter } from "next/router"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export function MoviesList() {
  const router = useRouter()
  const { list } = router.query
  const [movies, setMovies] = useState("")
  const [selectedMovieList, setSelectedMovieList] = useState(
    list || "top_rated",
  )

  const handleListSelect = (selectedMovieList) => {
    router.push(`/movies?list=${selectedMovieList}`)
    setAnchorEl(null)
  }

  useEffect(() => {
    setSelectedMovieList(list || "top_rated")
  }, [list])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          background: "black",
          "&:hover": {
            backgroundColor: "#F5C518",
            color: "white",
          },
        }}
      >
        Movies
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleListSelect("popular")}>Popular</MenuItem>
        <MenuItem onClick={() => handleListSelect("top_rated")}>
          Top Rated
        </MenuItem>
        <MenuItem onClick={() => handleListSelect("now_playing")}>
          Now Playing
        </MenuItem>
        <MenuItem onClick={() => handleListSelect("upcoming")}>
          Upcoming
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
