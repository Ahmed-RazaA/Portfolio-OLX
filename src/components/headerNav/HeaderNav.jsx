import React from 'react';
import "../headerNav/header-nav.css";
import { Link } from 'react-router-dom';



function HeaderNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="container header-nav-sm">
          {/* <a className="nav-link" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <b className='mt-1 ms-4'>ALL CATEGORIES</b> 
                </a>
                <ul className="dropdown-menu">
                  <div className='row d-flex'>
                    <div className='col-12 col-md-3'>
                      <li><a className="dropdown-item mb-2" href="#"> <b>Action</b> </a></li>
                      <li><Link className="dropdown-item" to="/categories-jewellary">Jewellary</Link></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </div>
                    <div className='col-12 col-md-3'>
                      <li><a className="dropdown-item mb-2" href="#"><b>Action</b></a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </div>
                    <div className='col-12 col-md-3'>
                      <li><a className="dropdown-item mb-2" href="#"><b>Action</b></a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </div>
                    <div className='col-12 col-md-3'>
                      <li><a className="dropdown-item mb-2" href="#"><b>Action</b></a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </div>
                  </div>

                </ul>


              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories-jewellary">Jewellary</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MotorCycles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TV-Video-Audio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tablets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Plots</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Houses</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderNav;
