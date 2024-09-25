import { useState} from "react"

const MovieList=({title,plot,like,rating})=>{


const [likes,setLike]=useState(0)
const liked=()=>{
    setLike((likes)=>likes+1)}
    

return(
<div>
 <h3>Movie Name:{title}</h3>
 <p>Plot{plot}</p>
 <button onClick={liked}>Like:{likes}</button> <br />
 <p>{rating}</p>
</div>

)


}

export default MovieList