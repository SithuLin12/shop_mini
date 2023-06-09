import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Master({children,card,setCard}) {
  return (
    <div>
        <div>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg">
    {/* Container wrapper */}
    <div className="container-fluid pr-4 pl-4">
      {/* Toggle button */}
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        <div className="d-flex">
          <Link to='/' type="button" className="btn btn-warning me-3 text-white">
            <span className="fa fa-home" />
            <span className="ml-1">Home</span>
          </Link>
          <Link to='/about' type="button" className="btn btn-warning me-3 text-white">
            <span className="fa fa-home" />
            <span className="ml-1">Products</span>
          </Link>
          <Link to='/card' type="button" className="btn btn-outline-warning me-3 text-white">
            <i className="fas fa-shopping-cart" />
            <span className="ml-1" />
            <small className="badge badge-danger">{card.length}</small>
          </Link>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
  {children}
</div>
    </div>
  )
}

export default Master