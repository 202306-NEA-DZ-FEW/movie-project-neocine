import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import Image from "next/image"
import GernresList from "./GenresList"
import { MoviesList } from "./MoviesList"
import Drawer from "@mui/material/Drawer"

// search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

const DrawerWrapper = styled(Box)(({ theme }) => ({
  width: "250px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "250px",
  },
}))

export default function Navbar({ movieGenresList, movieslist, onSearch }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const results = await onSearch(searchQuery)
    setSearchResults(results)
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "black",
          display: "flex",
          alignItems: "space-between",
        }}
      >
        <Toolbar>
          <div>
            <Image
              src="/../../logo.svg"
              layout="responsive"
              width={100}
              height={100}
              alt="NeoCine Logo"
            />
          </div>
          <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
            <HomeBtn />

            <GernresList Genres={movieGenresList} tag={"Genres"} />

            <MoviesList />

            <ActorsBtn />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
            />
          </Search>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          ></StyledMenu>
        </Toolbar>
      </AppBar>
      <DrawerWrapper>
        <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
          <div
            role="presentation"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          </div>
        </Drawer>
      </DrawerWrapper>
    </Box>
  )
}

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

export function ActorsBtn() {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "black",
          "&:hover": {
            backgroundColor: "#F5C518",
            color: "white",
          },
        }}
      >
        Actors
      </Button>
    </div>
  )
}
export function HomeBtn() {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "black",
          "&:hover": {
            backgroundColor: "#F5C518",
            color: "white",
          },
        }}
      >
        Home
      </Button>
    </div>
  )
}