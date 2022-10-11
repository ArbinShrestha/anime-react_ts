import { Outlet, Link, Route,Routes} from "react-router-dom";
import Anime from "../../pages/anime"
const Navbars_test = () => {
  return (

    // <!-- Navbar -->
    
    <nav className="navbar navbar-expand-lg bg-light">
      
        <div className="container-fluid">
          
          <a className="navbar-brand" href="/">MyAnimeList</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Routes>
                  <Route path="../../pages/anime" element={<Anime />} />
                   <Link className="nav-link" aria-current="page" to="/anime">Anime</Link>
               </Routes>                  
              </li>
              <Outlet />
              <li className="nav-item">
                <Link className="nav-link" to="/manga">Manga</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/community">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/industry">Industry</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/watch">Watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read">Read</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/help">Help</a>
              </li>
             
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/signin">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>

  )
}

export default Navbars_test