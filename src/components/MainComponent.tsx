import Carousel from "./MainComponent/Carousel"
import Navbars_test from "./MainComponent/Navbars_test"
import Searchbar from "./MainComponent/Searchbar"


const MainComponent = () => {
  return (         
         <>
         <img src={'/anime/3.jpg'} id="bg" className="w-100" alt="" />
            <Navbars_test />
            <br /> 
            <Searchbar />
            <br/>
            <Carousel />
            <br />
        </>
        
    )
}

export default MainComponent