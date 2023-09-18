import React from "react"
import Poster from "@/components/singleMovie/Poster"
import { fetcher } from "../../../util/API"
import TrailerActorContainer from "@/components/singleMovie/Container"
import ActorPages from "@/components/singleActor/ActorPages"
import Moviecards from "@/components/singleMovie/similarMovies"
import CardsSlider from "@/components/CardsSlider"

export default function ActorPage({ actor, similar }) {
  const relatedMovies = similar.cast.map((result) => result)
  const array2 = relatedMovies.slice(0, 20)
  console.log("this is actor", actor)
  return (
    <div>
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
            borderRadius: "20px",
          }}
        >
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
              style={{
                marginRight: "20px",
                flex: "0 0 auto",
                width: "300px",
                borderRadius: "20px",
              }}
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
            padding: "10px",
            opacity: 0.8,
            borderRadius: "20px",
          }}
        >
          <div
            className="cardContainer"
            style={{
              background: "#333",
              marginLeft: "20%",
            }}
          >
            <h2>Similar:</h2>
            <CardsSlider className="MoviepageSlider" movies={array2} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Define the getServerSideProps function to fetch data for a specific actor
export async function getServerSideProps(context) {
  const { actorId } = context.query

  const actor = await fetcher(`person/${actorId}?language=en-US`)
  const similar = await fetcher(
    `person/${actorId}/movie_credits?language=en-US`,
  )

  return {
    props: {
      actor: actor,
      similar: similar,
    },
  }
}
