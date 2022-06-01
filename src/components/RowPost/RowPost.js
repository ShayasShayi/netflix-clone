import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constant'
import './RowPost.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response=>{
          setMovies(response.data.results);
      })
    }, [])
    const handleMovieClick = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length > 0){
                setUrlId(response.data.results[0])
            }else{
                console.log('empty array')
            }
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            { movies.map(obj =>
                <img onClick={()=>handleMovieClick(obj.id)} className={props.isSmall?'small-poster':'poster'} alt='poster' src={obj?imageUrl+obj.backdrop_path:''} />
                )}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost