import { useEffect, useState } from "react";
import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import AnimeList from "./components/AnimeList";
import AddToList from "./components/AddToList";
import { AnimeLists } from "./components/AnimeList";
import { RemoveFromList } from "./components/RemoveFromList";

function App() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState<AnimeLists[]>([]);

  const addTo = (anime: AnimeLists) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom = (anime: AnimeLists) => {
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
      <div className="header">
        {/* <NavBar /> */}
        <h1>MyAnimeList</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
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
      </div>
    </>
  );
}

export default App;
