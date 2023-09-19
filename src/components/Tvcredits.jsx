import React, { useState, useEffect } from "react"
import { fetcher } from "../../util/API"
import Cards from "./Cards"

const Tvcredits = ({ actor_id }) => {
  const [credits, setCredits] = useState([])
  const apiRoute = `person/${actor_id}/tv_credits?language=en-US`
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
          <h2>Similar Tv Shows</h2>
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

export default Tvcredits
