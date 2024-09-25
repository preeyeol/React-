import { useState} from "react"

const MovieList=({title,plot,like,rating,poster})=>{


const [likes,setLike]=useState(0)
const liked=()=>{
    setLike((likes)=>likes+1)}
    

return(
<div className="flip-card">
    <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={`${poster}`} alt="img" />
    </div>
    <div className="flip-card-back">
 <h3>Movie Name:{title}</h3>
 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Plot{plot}</p>
 <button onClick={liked}>Like:{likes}</button> <br />
 <p>{rating}</p>
    </div>
    </div>
</div>

)


}

export default MovieList