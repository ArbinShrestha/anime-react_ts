

const Searchbar = () => {
  return (
    <section className="search-bar">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <form action="">
            <div>
              <div className="input-group">
                <input type="search" placeholder="Search for Animes" className="form-control" />
                <div className="input-group-append">
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <a className="dropdown-item" href="#"><i className="fa-solid fa-image"></i>Image</a>
                    <a className="dropdown-item" href="#"><i className="fa-solid fa-camera"></i>Camera</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <hr className="dropdown-divider"/>
                    <a className="dropdown-item" href="#"><i className="fa-solid fa-video"></i>Video</a>
                  </ul>
                </div>
              </div>
              <div className="input-group-append">
                <button type="submit" className="btn btn-link"><i className="fa fa-search" aria-hidden="true"></i></button>
              </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Searchbar