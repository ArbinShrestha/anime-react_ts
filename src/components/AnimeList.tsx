import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import AnimeInfo from "./AnimeInfo";

export type AnimeLists = {
  images: { jpg: { large_image_url: string } };
  title: string;
  title_japanese: string;
  synopsis: string;
  mal_id: number;
};

type animelistProps = {
  animelist: Array<AnimeLists>;
  setanimeinfo: Function;
  animecomponent: Function;
  handlelist: Function;
  animeinfo: any;
};

const AnimeList = (props: animelistProps): ReactJSXElement => {
  const {
    animelist,
    setanimeinfo,
    animecomponent,
    handlelist,
    animeinfo,
  }: animelistProps = props;
  
  const AddToList = animecomponent;

  return (
    <>
      <Container>
        <Row>
          {animelist
            ? animelist.map((anime: AnimeLists, index) => {
                return (
                  <Col xd={5} md={3}>
                    <Card
                      key={index}
                      onMouseOver={() => setanimeinfo(anime)}
                      onMouseLeave={() => setanimeinfo(false)}
                    >
                      {animeinfo && <AnimeInfo animeinfo={animeinfo} />}

                      <Card.Img
                        src={anime.images.jpg.large_image_url}
                        alt="animeImage"
                      />
                      <Card.Body>
                        <Card.Title>{anime.title}</Card.Title>
                        <Card.Text>
                          <p>Anime Details</p>
                        </Card.Text>
                        <Button
                          onClick={() => handlelist(anime)}
                          variant="primary"
                        >
                          <AddToList />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : "Not found"}
        </Row>
      </Container>
    </>
  );
};

export default AnimeList;

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
