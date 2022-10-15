import React, { useEffect, useState } from 'react'
import styles from './Tvshow.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Tvshow() {
  let [trendingTvShow,setTrendingTvShow]=useState([]);
  let baseImgUrl = "https://image.tmdb.org/t/p/original/"
    async function getTrendingItems(mediaType){
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb`);
      setTrendingTvShow(data.results);
    }
  
    let navigate = useNavigate()
    function goToDetailes(id){
      navigate({
        pathname:"/detailes",
        search:`?id=${id}`
      })
    };
  
    useEffect(() => {
      getTrendingItems("tv");
    }, [])
    
    return (
      <>

  
  
      <div className="row  mt-5">
        <div className="col-md-4 mt-5">
          <div className={`${styles.linedec} w-25 mb-2`}></div>
          <h4>Trending</h4>
          <h4 className='my-2'>Tv shows</h4>
          <h4>To Watch Now</h4>
          <p className='text-muted'>Most Watched Tv shows by days</p>
          <div className={`${styles.linedec} mt-2`}></div>
        </div>
        {trendingTvShow.map((tv)=>
        <div onClick={()=>goToDetailes(tv.id)} key={tv.id} className="col-md-2">
          <div className="Tv">
          <div className='position-relative'>
          <img className='w-100 position-relative' src={baseImgUrl+tv.poster_path} alt=""  /><div className={`bg-info ${styles.ratePos}`}>{tv.vote_average.toFixed(1)}</div>
          </div>
            <h1 className='h6 mb-4 mt-2'>{tv.name}</h1>
          </div>
        </div>)}
      </div>
      </>
    )
}
