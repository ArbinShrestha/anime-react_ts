import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

type AnimeInfon = {
  title:  string,
  source: string,
  rank  : string,
  score: number,
  popularity: number,
  members: string,
  status: boolean,
  rating: number,
  duration: number, 
  images: { jpg: { large_image_url: string } },
}

type animeinfoProps = {
  animeinfo:  AnimeInfon, 
}

 const AnimeInfo = (props: animeinfoProps):ReactJSXElement => {
  const { animeinfo }:animeinfoProps = props
  // const {title,images,rank}:AnimeInfon = animeinfo
  // const { anime }:AnimeInfo = props.animeinfo

  return (
    <>
        <div className="anime-content"> 
           <h3>{animeinfo.title}</h3>
           <img src={animeinfo.images.jpg.large_image_url} alt="image" /> <br/>
           <div className="info">
              <h3>#Rank: {animeinfo.rank}</h3>
              <h3>#Score: {animeinfo.score}</h3>
              <h3>#Popularity: {animeinfo.popularity}</h3> <hr/> <br/>

           </div>
        </div>
      </>
    )
}

export default AnimeInfo