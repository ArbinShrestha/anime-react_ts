
const getData = async ()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=20`)
    const resData = await res.json()
    console.log(resData)
}

getData()
