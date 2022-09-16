import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import AnimeList from "./components/AnimeList";
import AddToList from "./components/AddToList";
import { AnimeLists } from "./components/AnimeList";
import { RemoveFromList } from "./components/RemoveFromList";
import Container from "react-bootstrap/Container";
import Navbars from "./components/Navbars";
// import Carousels from "./components/Carousels";

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
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <Navbars setSearch={setSearch} />

      {/* <Carousels /> */}

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
           {myAnimeList.length > 0 ? (<AnimeList
            animeinfo={animeInfo}
            animelist={myAnimeList}
            setanimeinfo={setAnimeInfo}
            animecomponent={RemoveFromList}
            handlelist={(anime: AnimeLists) => removeFrom(anime)}
          />) : "No Anime in my list"}
        </div>

        {/* {animeInfo && <AnimeInfo animeinfo={animeInfo} />} */}
      </Container>
    </>
  );
}

export default App;
