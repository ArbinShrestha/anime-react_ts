import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type AnimeLists = {
  images: { jpg: { large_image_url: string } },
  title: string;
};

type animelistProps = {
  animelist: Array<AnimeLists>,
  setanimeinfo: (value: any) => void  //change "any" state of setanimeinfo

};

const AnimeList = (props: animelistProps): ReactJSXElement => {
  const { animelist,setanimeinfo }:animelistProps = props;
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
                  <div className="overlay">
                    
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
