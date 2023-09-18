// pages/actor/[actorId].js
import React from "react"
import { fetcher } from "../../util/API"
import Image from "next/image"
export default function ActorPage({ actor, movies }) {
  return (
    <>
      <Image src={actor.profileImage} alt={actor.name} />
      <br />
      <h2>Movies Participated In:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}
export async function getServerSideProps(context) {
  const { actorId } = context.query

  const actor = await fetcher(`/actor/${actorId}?language=en-US`)
  const movies = await fetcher(`/actor/${actorId}/movies?language=en-US`)
  return {
    props: {
      actor: actor,
      movies: movies,
    },
  }
}

// import React from "react"
// import { useRouter } from "next/router"
// import ActorPage from "@/components/singleActor/ActorPage"

// const ActorPageWrapper = () => {
//   const router = useRouter()
//   const { actorId } = router.query

//   return (
//     <div>
//       <ActorPage actorId={actorId} />
//     </div>
//   )
// }

// export default ActorPageWrapper
