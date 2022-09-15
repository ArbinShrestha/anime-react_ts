import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { Card, Row,Col } from "react-bootstrap"

type AnimeInfon = {
  title:  string,
  source: string,
  rank  : string,
  score: number,
  popularity: number,
  members: string,
  status: string,
  rating: number,
  duration: number, 
  images: { jpg: { large_image_url: string } },
}

type animeinfoProps = {
  animeinfo:  AnimeInfon, 
}

 const AnimeInfo = (props: animeinfoProps):ReactJSXElement => {
  const { animeinfo }:animeinfoProps = props

  return (
    <>
      <Row>
        <Col xd={5} md={3}>
          <Card>
            <Card.Img src={animeinfo.images.jpg.large_image_url} alt="image" />
            <Card.Body>
              <Card.Text>
              <h6>#Rank : {animeinfo.rank}</h6>
              <h6>#Score: {animeinfo.score}</h6>
              <h6>#Popularity: {animeinfo.popularity}</h6> <hr/> <br/>
              <h6>#Members: {animeinfo.members}</h6>
              <h6>#Source: {animeinfo.source}</h6>
              <h6>#Duration: {animeinfo.duration}</h6>
              <h6>#Status: {animeinfo.status}</h6>
              <h6>#Rating: {animeinfo.rating}</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>   
    </>
    )
}

export default AnimeInfo



{/* <div className="anime-content"> 
<h6>{animeinfo.title}</h3>
<img src={animeinfo.images.jpg.large_image_url} alt="image" /> <br/>
<div className="info">
   <h3>#Rank : {animeinfo.rank}</h3>
   <h3>#Score: {animeinfo.score}</h3>
   <h3>#Popularity: {animeinfo.popularity}</h3> <hr/> <br/>
   <h4>#Members: {animeinfo.members}</h4>
   <h4>#Source: {animeinfo.source}</h4>
   <h4>#Duration: {animeinfo.duration}</h4>
   <h4>#Status: {animeinfo.status}</h4>
   <h4>#Rating: {animeinfo.rating}</h4>
</div>
</div> */}