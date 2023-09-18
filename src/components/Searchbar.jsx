import { InputAdornment, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import styles from "@/styles/movieSearchBar.module.css"

export default function SearchBar({ onSearch, placeh = "Search..." }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      maxWidth="xs"
      sx={{ mt: 20 }}
      className={styles.formContainer}
    >
      <TextField
        id="search"
        type="search"
        placeholder={placeh}
        // label="Search"
        value={searchTerm}
        className={styles.textField}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon className={styles.searchIcon} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}
