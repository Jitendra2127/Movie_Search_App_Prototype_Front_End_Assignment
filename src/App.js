import './App.css';
import Navbar from './components/Navbar';
import Moviecard from './components/Moviecard';
import { useEffect, useState, useCallback } from 'react';
import MovieDetailsModal from './components/MovieDetailsModal';

function App() {
  const [MovieDetailsModaltoggle, setMovieDetailsModaltoggle] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);
  const [movieDetailsModaldata, setMovieDetailsModaldata] = useState({});
  const [searchvalue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchmoviesdata = useCallback(async () => {
    setLoading(true);
    try {
      const baseUrl = 'https://api.themoviedb.org/3';
      const apiKey = '085d13f576c29cc4b93359be832b5007';
      const url = searchvalue.length > 0
        ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchvalue)}`
        : `${baseUrl}/movie/popular?api_key=${apiKey}`;

      const fetchdata = await fetch(url);
      const jsondata = await fetchdata.json();
      
      if (jsondata.results) {
        setMoviesData(jsondata.results);
      } else {
        setMoviesData([]);
      }

      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [searchvalue]);

  useEffect(() => {
    fetchmoviesdata();
  }, [fetchmoviesdata]);

  return (
    <div className=''>
      <Navbar searchvalue={searchvalue} setSearchValue={setSearchValue} />

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 lg:px-20 sm:px-6 px-2 md:pt-24 pt-16 pb-4'>
          {moviesdata.length > 0 ? (
            moviesdata.map((movie) => (
              <Moviecard
                key={movie.id}
                setMovieDetailsModaltoggle={setMovieDetailsModaltoggle}
                setMovieDetailsModaldata={setMovieDetailsModaldata}
                movieData={movie}
              />
            ))
          ) : (
            <p className='w-[70rem] text-center'>
              No data found for this particular search "{searchvalue}"
            </p>
          )}
        </div>
      )}

      {MovieDetailsModaltoggle && (
        <MovieDetailsModal
          setMovieDetailsModaltoggle={setMovieDetailsModaltoggle}
          movieDetailsModaldata={movieDetailsModaldata}
        />
      )}
    </div>
  );
}

export default App;
