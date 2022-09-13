import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import AnimeList from "./components/AnimeList";
import AddToList from "./components/AddToList";
import { AnimeLists } from "./components/AnimeList";
import { RemoveFromList } from "./components/RemoveFromList";
import Container from 'react-bootstrap/Container';
import Navbars from "./components/Navbars";


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
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <Navbars />
        <div className="search-box">
          <input
            type="text"
            placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
    
     <Container>
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeinfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animelist={animeData}
              setanimeinfo={setAnimeInfo}
              animecomponent={AddToList}
              handlelist={(anime: AnimeLists) => addTo(anime)}
            />
          </div>
          <h2 className="text-heading">My List</h2>
          <div className="row">
            <AnimeList
              animelist={myAnimeList}
              setanimeinfo={setAnimeInfo}
              animecomponent={RemoveFromList}
              handlelist={(anime: AnimeLists) => removeFrom(anime)}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
