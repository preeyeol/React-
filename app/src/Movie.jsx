const MovieList=( {movie})=>{
    return(

<div className="profile">
    <h1>List Of Movies</h1>
    <ul>
    {movie.map((movie, index) => (
        <li key={index}>
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
</div>
    )
}

export default MovieList