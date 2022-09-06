import React, { useEffect, useState } from 'react';
import './App.css';
import AnimeList from './components/AnimeList';

function App() {

  const [search, setSearch]= useState('Naruto')
  const [animeData, setAnimeData] = useState([])

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json()
    setAnimeData(resData.data)
  }

  useEffect(()=>{
    getData()
  },[search])

  
  return (
    <>
      <div className="header">
      {/* <NavBar /> */}
      <h1>MyAnimeList</h1>
      <div className="search-box">
        <input type="text" placeholder='Search your anime' onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      </div>

      <div className="container">
        <div className="animeInfo">
          
        </div>
          <div className="anime-row">
            <h2 className="text-heading">Anime</h2>
            <div className="row">
              <AnimeList animelist={animeData} />
            </div>
          </div>
      </div>
     
   
    </>
  );
}

export default App;
