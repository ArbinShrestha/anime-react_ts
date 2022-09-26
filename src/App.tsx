import { useEffect, useState } from "react";
import "./App.css";
import AnimeList from "./components/ListComponent/AnimeList";
import AddToList from "./components/ListComponent/AddToList";
import { AnimeLists } from "./components/ListComponent/AnimeList";
import { RemoveFromList } from "./components/ListComponent/RemoveFromList";
import Container from "react-bootstrap/Container";
import Navbars from "./components/MainComponent/Navbars";
import Navbars_test from "./components/MainComponent/Navbars_test";
import Searchbar from "./components/MainComponent/Searchbar";
import { Carousel } from "react-bootstrap";

function App() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState<AnimeLists[]>([]);

  const addTo: Function = (anime: AnimeLists): void => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom: Function = (anime: AnimeLists): void => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <Navbars_test />
      <br /> 
      <Searchbar />
      <br />
      <Carousel />
      {/* <Navbars setSearch={setSearch} /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <Container style={{ padding: "10px" }}>
        <h2>Anime List</h2>
        <AnimeList
          animeinfo={animeInfo}
          animelist={animeData}
          setanimeinfo={setAnimeInfo}
          animecomponent={AddToList}
          handlelist={(anime: AnimeLists) => addTo(anime)}
        />

        <h2 className="text-heading">My List</h2>

        <div>
          {myAnimeList.length > 0 ? (
            <AnimeList
              animeinfo={animeInfo}
              animelist={myAnimeList}
              setanimeinfo={setAnimeInfo}
              animecomponent={RemoveFromList}
              handlelist={(anime: AnimeLists) => removeFrom(anime)}
            />
          ) : (
            "No Anime in my list"
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
