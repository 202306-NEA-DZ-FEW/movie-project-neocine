import React, { useState, useEffect } from "react"
import { fetcher } from "../../util/API"
import Cards from "./Cards"

const Moviescredits = ({ actor_id }) => {
  const [credits, setCredits] = useState([])
  const apiRoute = `person/88/movie_credits?language=en-US `
  const fetchCredits = async () => {
    const data = await fetcher(apiRoute)
    console.log(data.cast)
    setCredits(data.cast)
  }
  useEffect(() => {
    fetchCredits()
  }, [])
  {
    if (credits) {
      return (
        <div>
          <h2>Similar movies</h2>
          {credits.map((credit, index) => (
            <div key={index}>
              {credit.title}
              <Cards
                name={credit.title}
                overview={credit.overview}
                poster_path={credit.poster_path}
              />
            </div>
          ))}
        </div>
      )
    } else {
      return ""
    }
  }
}

export default Moviescredits
