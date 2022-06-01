import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constant'
import { banner_api } from '../../url';

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
      axios.get(banner_api).then((response)=>{
          setMovie(response.data.results[0])
      })
    },[])
    return (
        <div 
        style={{backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie? movie.name:''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner