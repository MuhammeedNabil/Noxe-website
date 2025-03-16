/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
    <nav className={`${styles.bg} navbar navbar-expand-lg fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Noxe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Always show navigation items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='movies'>Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='tvshow'>Tv show</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='people'>People</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="icons d-flex align-items-center">
              <i className="fa-brands fa-facebook mx-2"></i>
              <i className="fa-brands fa-spotify"></i>
              <i className="fa-brands fa-instagram mx-2"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to='login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='register'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
