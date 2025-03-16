import React from 'react'
import Detailes from '../Detailes/Detailes'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Movies from '../Movies/Movies'
import Navbar from '../Navbar/Navbar'
import Notfound from '../Notfound/Notfound'
import People from '../People/People'
import Register from '../Register/Register'
import { Route, Routes } from 'react-router-dom';
import Tvshow from '../Tvshow/Tvshow'

export default function App() {
  // Simplified version without auth
  return (
    <>
    <Navbar />
    <div className="container mb-5 pt-5">
    <Routes>
      <Route path='home' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='detailes' element={<Detailes/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='movies' element={<Movies/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
      <Route path='people' element={<People/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='tvshow' element={<Tvshow/>}></Route>
    </Routes>
    </div>
    </>
  )
}
