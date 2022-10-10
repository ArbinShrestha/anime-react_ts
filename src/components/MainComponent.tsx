import Carousel from "./MainComponent/Carousel"
import Navbars_test from "./MainComponent/Navbars_test"
import Searchbar from "./MainComponent/Searchbar"


const MainComponent = () => {
  return (         
         <div className="mainComponent">
            <Navbars_test />
            <br /> 
            <Searchbar />
            <br/>
            <Carousel />
            <br />
            
         </div>
        
    )
}

export default MainComponent