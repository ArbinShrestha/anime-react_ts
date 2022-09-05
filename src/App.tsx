import React, { useEffect, useState } from 'react';
// import NavBar from './components/NavBar'
import './App.css';

function App() {

  const [animeData, setAnimeData] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=20`)
    const resData = await res.json()
    setAnimeData(resData.data)
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className="header">
      {/* <NavBar /> */}
      <h1>MyAnimeList</h1>
      <div className="search-box">
        <input type="text" placeholder='Search your anime'/>
      </div>
     
    </div>
  );
}

export default App;
