import React from "react"
import Cards from "../Cards"

export default function Moviecards({ array }) {
  return (
    <>
      <div className="moviecards-container">
        {array.map((film, index) => (
          <Cards
            key={index}
            title={film.title}
            overview={film.overview.slice(0, 200)}
            poster_path={film.poster_path}
          ></Cards>
        ))}
      </div>
    </>
  )
}
