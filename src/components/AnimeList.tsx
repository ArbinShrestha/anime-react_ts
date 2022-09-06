import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type AnimeList = {
  images: {jpg: {large_image_url: string}}
    title: string,
}

type animelistProps = {
    animelist: Array<AnimeList>
}

const AnimeList = (props: animelistProps): ReactJSXElement => {
  const {animelist} = props;
  return (
    <>
      {/* {console.log("list of anime>>>>>>>",animelist)} */}
      {animelist
        ? animelist.map((anime: AnimeList) => {
            console.log("anime>>>>>>>>>", anime);
            // console.log("anime>>>>>>>>>", index);

            return (
              <div className="card">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="animeImage"
                  className="src"
                />
                
                <div className="animeInfo">
                  <h4>{anime.title}</h4>
                </div>
              </div>
            );
          })
        : "Not found"}
    </>
  );
};

export default AnimeList;
