//
import React, { useState, useEffect } from "react"
import Cards from "../../components/Cards"
import Moviescredits from "../Moviescredits"
import Image from "next/image"

const ActorPage = () => {
  const [actor, setActor] = useState({
    name: "",
    profile_path: "",
    gender: 0,
    popularity: 0,
    birthday: "",
    biography: "",
  })

  useEffect(() => {
    // Fetch data for a single actor here
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/search/person?api_key=65e21a6acffd40b8b9411689bfb53e82&query=Bruce Willis"
      const options = {
        headers: {
          accept: "application/json",
        },
      }

      const response = await fetch(url, options)
      const data = await response.json()

      // Assuming the API returns an array of actors, you can choose the first actor
      if (data.results && data.results.length > 0) {
        setActor(data.results[0])
      }
    }

    fetchData()
  }, [])
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div
        style={{
          background: "#333",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "20px",
          opacity: 0.8,
          margin: "10px",
        }}
      >
        {actor.profile_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt={actor.name}
            style={{ marginRight: "20px", flex: "0 0 auto", width: "300px" }}
          />
        )}
        <div style={{ flex: "1" }}>
          {actor.name && <h1>{actor.name}</h1>}
          {actor.gender !== undefined && (
            <p>Gender: {actor.gender === 1 ? "Female" : "Male"}</p>
          )}
          {actor.popularity !== undefined && (
            <p>Popularity: {actor.popularity}</p>
          )}
          {actor.birthday && <p>Birthday: {actor.birthday}</p>}
          {actor.biography && <p>Biography: {actor.biography}</p>}
        </div>
      </div>

      <div
        style={{
          background: "#333",
          color: "white",
          padding: "20px",
          opacity: 0.8,
          textAlign: "center",
        }}
      >
        <h3>Movies:</h3>
      </div>
    </div>
  )
}

export default ActorPage
