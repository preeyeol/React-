import MovieList from "./MovieList";

const MovieCard=({movies})=>{
 return(
<div>
    {movies.map((movie,index)=>(
        <MovieList key={index}
        title={movie.title}
        plot={movie.plot}
        like={movie.like}
        rating={movie.rating}/>
    ))}
</div>
 )

}

export default MovieCard