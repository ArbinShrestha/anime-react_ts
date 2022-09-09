import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type AnimeLists = {
  images: { jpg: { large_image_url: string } },
  title: string;
  title_japanese: string;
  synopsis: string;
  mal_id: number
};

type animelistProps = {
  animelist: Array<AnimeLists>,
  setanimeinfo: Function  //change "any" state of setanimeinfo
  animecomponent: Function
  handlelist: Function
};

const AnimeList = (props: animelistProps): ReactJSXElement => {
  const { animelist,setanimeinfo,animecomponent,handlelist }:animelistProps = props;
  const AddToList =  animecomponent
  return (
    <>
      {animelist
        ? animelist.map((anime: AnimeLists, index) => {

            return (
              <div
                className="card"
                key={index}
                onClick={()=>setanimeinfo(anime)}                
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="animeImage"
                  className="src"
                />

                <div className="animeInfo">
                  <h4>{anime.title}</h4>
                  <div className="overlay" onClick={()=>handlelist(anime)}>
                    <h4>{anime.title_japanese}</h4>
                    <h3>SYNOPSIS</h3>
                    <div className="synopsis">
                      <p>{anime.synopsis}</p>
                    </div>
                      <AddToList  />
                  </div>
                </div>
              </div>
            );
          })
        : "Not found"}
    </>
  );
};

export default AnimeList;
