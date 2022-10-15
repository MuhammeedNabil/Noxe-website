
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detailes() {
let [searchParams,setSearchParams]=useSearchParams();
let[detailes, setDetailes]=useState({});
let currentId  = searchParams.get('id');
let baseImgUrl = "https://image.tmdb.org/t/p/original/"

async function getTrendingDetailes(mediaType){
  let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${currentId}?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb`);
  setDetailes(data);
  console.log(data);
}

useEffect(() => {
  getTrendingDetailes("movie");
  getTrendingDetailes("tv");
}, [])


  return (
    <>
    <div className="row mt-5">
    <div className="col-md-5 movies">
        <img className='bg-transparent h-100 w-100' src={baseImgUrl+detailes.poster_path || baseImgUrl+detailes.backdrop_path} alt=""  />
    </div>
    <div className="col-md-7">
      <h1 className='h4'>{detailes.original_title}  {detailes.original_name}</h1>
      {/* <button className='btn btn-info'>{detailes.name}</button>
      <button className='btn btn-info'>{detailes.name}</button> */}
      <p>vote: {detailes.vote_average}</p>
      <p>vote count: {detailes.vote_count}</p>
      <p>popularity: {detailes.popularity}</p>
      <p>release date: {detailes.release_date} {detailes.first_air_date}</p>
      <span className='text-muted'>{detailes.overview}</span>
    </div>
    </div>
    </>
  );

}