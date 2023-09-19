import * as React from "react"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

export default function Buttons({ btext }) {
  return (
    <Button sx={{ background: "#F5C518", color: "black" }} variant="contained">
      {btext}
    </Button>
  )
}
