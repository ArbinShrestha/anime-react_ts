import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
<<<<<<< HEAD
import { Card, Button, CardGroup } from 'react-bootstrap'
=======
import { Card, Button, Row,Col,Container,Popover, OverlayTrigger} from 'react-bootstrap'
import AnimeInfo from "./AnimeInfo";
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad


export type AnimeLists = {
  images: { jpg: { large_image_url: string } },
  title: string;
  title_japanese: string;
  synopsis: string;
  mal_id: number
};

type animelistProps = {
  animelist: Array<AnimeLists>,
  setanimeinfo: Function  
  animecomponent: Function
  handlelist: Function
<<<<<<< HEAD
  // children: React.ReactNode
=======
  // animeinfo: any
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad
};


const AnimeList = (props: animelistProps): ReactJSXElement => {
  const { animelist,setanimeinfo,animecomponent, handlelist }:animelistProps = props;
  const AddToList =  animecomponent
  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3">Popover right</Popover.Header>
  //     <Popover.Body>
  //       <AnimeInfo animeinfo={animeinfo} />
  //     </Popover.Body>
  //   </Popover>
  // );
  return (
    <>
<<<<<<< HEAD
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
=======
    <Container >
   <Row>   
      {animelist
      ? animelist.map((anime: AnimeLists, index) => {
          return (
            
          <Col xd={5} md={3} >
            {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}> */}
            <Card 
              key={index}    
              onClick={()=>setanimeinfo(anime)}
                       
              >
                <Card.Img  src={anime.images.jpg.large_image_url} alt="animeImage" />
                <Card.Body >
                  <Card.Title>{anime.title}</Card.Title>
                  <Card.Text>
                    <p>Anime Details</p>
                  </Card.Text>
                  <Button onClick={()=>handlelist(anime)}  variant="primary"><AddToList /></Button>
                </Card.Body>
            </Card>  
            {/* </OverlayTrigger> */}
          </Col>  
            
          );
          
        })
        : "Not found"}  
        </Row>              
        </Container>
       
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad
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