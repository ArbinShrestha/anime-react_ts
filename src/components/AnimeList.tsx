import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Card, Button, CardGroup } from 'react-bootstrap'


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
  // children: React.ReactNode
};

const AnimeList = (props: animelistProps): ReactJSXElement => {
  const { animelist,setanimeinfo,animecomponent,handlelist }:animelistProps = props;
  const AddToList =  animecomponent
  return (
    <>
    <CardGroup>
      {animelist
        ? animelist.map((anime: AnimeLists, index) => {

            return (
              
                <Card 
                  key={index}
                  onClick={()=>setanimeinfo(anime)}
                 >
                  <Card.Img variant="top" src={anime.images.jpg.large_image_url} />
                  <Card.Body onClick={()=>handlelist(anime)}>
                    <Card.Title>{anime.title}</Card.Title>
                    <Card.Text>
                    This is anime synopsis{/* {anime.synopsis} */}
                    </Card.Text>
                    <Button variant="primary"><AddToList /></Button>
                  </Card.Body>
                </Card>
              
              // <div
              //   className="card"
              //   key={index}
              //   onClick={()=>setanimeinfo(anime)}                
              // >
              //   <img
              //     src={anime.images.jpg.large_image_url}
              //     alt="animeImage"
              //     className="src"
              //   />

              //   <div className="animeInfo">
              //     <h4>{anime.title}</h4>
              //     <div className="overlay" onClick={()=>handlelist(anime)}>
              //       <h4>{anime.title_japanese}</h4>
              //       <h3>SYNOPSIS</h3>
              //       <div className="synopsis">
              //         <p>{anime.synopsis}</p>
              //       </div>
              //         <AddToList  />
              //     </div>
              //   </div>
              // </div>
            );
          })
        : "Not found"}
        </CardGroup>
    </>
  );
};

export default AnimeList;
