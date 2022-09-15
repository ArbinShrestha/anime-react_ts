import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import AnimeList from "./components/AnimeList";
import AddToList from "./components/AddToList";
import { AnimeLists } from "./components/AnimeList";
import { RemoveFromList } from "./components/RemoveFromList";
import Container from 'react-bootstrap/Container';
import Navbars from "./components/Navbars";
<<<<<<< HEAD
=======
import Popovers from "./components/Popovers";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TriggerExample from "./components/TriggerExample";
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad



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
      `https://api.jikan.moe/v4/anime?q=${search}&limit=15`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  

  return (
    <>
      <Navbars setSearch={setSearch}/>
        {/* <div className="search-box">
          <input
            type="text"
            placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div> */}
    
<<<<<<< HEAD
     <Container>
        {/* <div className="animeInfo">
          {animeInfo && <AnimeInfo animeinfo={animeInfo} />}
=======
     <Container
      style={{padding: '10px'}}
     >
       {/* {animeInfo && <AnimeInfo animeinfo={animeInfo} />} */}
        {/* <div className="animeInfo">
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad
        </div> */}
        {/* <div className="anime-row">
          <h2 className="text-heading">Anime</h2> */}
          {/* <div className="row"> */}
<<<<<<< HEAD
         
=======
          {/* <h2>Anime List</h2>   
            <AnimeList
              animelist={animeData}
              setanimeinfo={setAnimeInfo}
              animecomponent={AddToList}
              handlelist={(anime: AnimeLists) => addTo(anime)}
            /> */}
          <h2>Anime List</h2>   
>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad
            <AnimeList
              // animeinfo={animeInfo}
              animelist={animeData}
              setanimeinfo={setAnimeInfo}
              animecomponent={AddToList}
              handlelist={(anime: AnimeLists) => addTo(anime)}
            />
<<<<<<< HEAD
           
=======

>>>>>>> 050cb8035d1f86ed9287b5f950c96bbcefc1b3ad
          {/* </div> */}
          <h2 className="text-heading">My List</h2>
          <div>
            <AnimeList
              // animeinfo={animeInfo}
              animelist={myAnimeList}
              setanimeinfo={setAnimeInfo}
              animecomponent={RemoveFromList}
              handlelist={(anime: AnimeLists) => removeFrom(anime)}
            />
          </div>
          {/* {animeInfo && 
            <OverlayTrigger trigger='click' placement='right' overlay={popover} >
              <AnimeInfo animeinfo={animeInfo} />
            </OverlayTrigger>
          } */}
          <TriggerExample />
          {animeInfo && <AnimeInfo animeinfo={animeInfo} />}
        
      </Container>
    </>
  );
}

export default App;
