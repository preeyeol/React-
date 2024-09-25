import "./App.css"
import { useEffect,useState} from "react"

import MovieCard from "./MovieCard";

const App=()=>{

  const [movies, setMovies] = useState([]);

  const [sortByRating, setSortByRating] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/movies');
        const data = await response.json();
        const formattedMovies = data.map(movie => ({
          title: movie.title,
          plot: movie.plot,
          rating: movie.rating,
          poster:movie.poster,
          likes: 0
        }));
        console.log(data)
     
       setMovies(formattedMovies);

      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };


    fetchMovies();

  }, []);

 const sorting=()=>{
    setSortByRating(movies.sort((a,b)=>b.rating-a.rating))
  }

  return(
<div className="container">
  <div >
<h1 >Movie Lists</h1>
<div className="movie">
 <button onClick={sorting}>Sort by Rating</button> <br />
<MovieCard movies={movies}/>
</div>
</div>
    </div>
)

}

export default App