import React, { useState , useEffect } from 'react'
import Detailes from '../Detailes/Detailes'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Movies from '../Movies/Movies'
import Navbar from '../Navbar/Navbar'
import Notfound from '../Notfound/Notfound'
import People from '../People/People'
import Register from '../Register/Register'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Tvshow from '../Tvshow/Tvshow'
import jwtDecode from 'jwt-decode'

export default function App() {
  const [userData , setUserData] = useState(null);
  let navigate=useNavigate();

  function saveUserData (){
    let encoded = localStorage.getItem('userToken');
    let decoded = jwtDecode(encoded);
    setUserData(decoded);
    console.log(decoded);
  };

  useEffect(() => {
    if (localStorage.getItem('userToken') != null){
      saveUserData();
    }
  }, []);

  function logout (){
    navigate ('/login');
    localStorage.removeItem('userToken');
    saveUserData(null);
  };

  function ProtectedRoute(props){
    if (localStorage.getItem('userToken') == null){
      return <Navigate to='/login'/>
    }
    else{
      return props.children;
    }
  };

  return (
    <>
    <Navbar userData={userData} logout={logout}/>
    <div className="container mb-5 pt-5">
    <Routes>
      <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
      <Route path='detailes' element={<Detailes/>}></Route>
      <Route path='login' element={<Login saveUserData={saveUserData}/>}></Route>
      <Route path='movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}></Route>
      <Route path='*' element={<Notfound userData={userData}/>}></Route>
      <Route path='people' element={<ProtectedRoute><People/></ProtectedRoute>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='tvshow' element={<ProtectedRoute><Tvshow/></ProtectedRoute>}></Route>
    </Routes>
    </div>
    </>
  )
}
