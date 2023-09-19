//actor avatar component
import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Link from "next/link"

export default function SizeAvatars({ array }) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s, text-shadow 0.3s",
  }

  const hoverStyle = {
    color: "#Fcff09",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  }
  return (
    <div className="actorsnamePic">
      <Stack direction="row" sx={{ gap: "4%" }} spacing={1}>
        {array.map((actor, index) => (
          <Link
            key={index}
            href={`/actor/${actor.id}`}
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
          >
            <div key={actor.id}>
              <Avatar
                alt={actor.name}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                sx={{ width: 56, height: 56, margin: "20px" }}
              />
              <span>{actor.name}</span>
            </div>
          </Link>
        ))}
      </Stack>
    </div>
  )
}
