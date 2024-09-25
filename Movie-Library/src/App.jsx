import { useEffect } from "react"

const App=()=>{

  const [movies, setMovies] = useState([]);
  const [sortByRating, setSortByRating] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/movies');
        const data = await response.json();
        const formattedMovies = data.data.map(movie => ({
          title: movie.title,
          description: movie.description,
          rating: 0,
          likes: 0
        }));
        setMovies(formattedMovies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  return(
<>

    </>
)

}

export default App