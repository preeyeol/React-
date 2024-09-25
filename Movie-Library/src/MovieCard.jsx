import MovieList from "./MovieList";

const MovieCard=({movies})=>{
 return(
<div className="card">
    {movies.map((movie,index)=>(
        <MovieList key={index}
        poster={movie.poster}
        title={movie.title}
        plot={movie.plot}
        like={movie.like}
        rating={movie.rating}/>
    ))}
</div>
 )

}

export default MovieCard