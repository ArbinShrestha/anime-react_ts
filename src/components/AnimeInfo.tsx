import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
// import { Popover,OverlayTrigger,Button, Row,Col,Card } from "react-bootstrap"

type AnimeInfon = {
  title: string;
  source: string;
  rank: string;
  score: number;
  popularity: number;
  members: string;
  status: string;
  rating: number;
  duration: number;
  images: { jpg: { large_image_url: string } };
};

type animeinfoProps = {
  animeinfo: AnimeInfon;
};

const AnimeInfo = (props: animeinfoProps): ReactJSXElement => {
  const { animeinfo }: animeinfoProps = props;

  return (
    <>
      {/* <div className="anime-content">  */}
      {/* <h3>{animeinfo.title}</h3>
          <img src={animeinfo.images.jpg.large_image_url} alt="image" /> <br/> */}
      <div className="anime-info">
        <h6>#Rank : {animeinfo.rank}</h6>
        <h6>#Score: {animeinfo.score}</h6>
        <h6>#Popularity: {animeinfo.popularity}</h6> <hr /> <br />
        <h6>#Members: {animeinfo.members}</h6>
        <h6>#Source: {animeinfo.source}</h6>
        <h6>#Duration: {animeinfo.duration}</h6>
        <h6>#Status: {animeinfo.status}</h6>
        <h6>#Rating: {animeinfo.rating}</h6>
      </div>
      {/* </div>  */}
    </>
  );
};

export default AnimeInfo;

{
  /* <Row>
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
      </Row>    */
}
