import './App.css';
import Navbar from './components/Navbar';
import Moviecard from './components/Moviecard';
import { useEffect, useState } from 'react';
import MovieDetailsModal from './components/MovieDetailsModal';

function App() {
  const [MovieDetailsModaltoggle, setMovieDetailsModaltoggle] = useState(false);
  const [moviesdata, setMoviesData] = useState([])
  const [movieDetailsModaldata, setMovieDetailsModaldata] = useState({});
  const [searchvalue, setSearchValue] = useState("");
  const fetchmoviesdata = async () => {
    try {
      const baseUrl = 'https://api.themoviedb.org/3';
      const apiKey = '085d13f576c29cc4b93359be832b5007';
      const url = searchvalue.length > 0
        ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchvalue)}`
        : `${baseUrl}/movie/popular?api_key=${apiKey}`;

      const fetchdata = await fetch(url);
      const jsondata = await fetchdata.json();
      setMoviesData(jsondata.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchmoviesdata();
  }, [searchvalue])

  return (

    <div className=''>
      <Navbar searchvalue={searchvalue} setSearchValue={setSearchValue} />

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  md:gap-4 gap-2 lg:px-20 sm:px-6 px-2 md:pt-24 pt-16 pb-4'>
        {
          moviesdata.length > 0 ? moviesdata.map((movie) => (
            <Moviecard
              setMovieDetailsModaltoggle={setMovieDetailsModaltoggle}
              setMovieDetailsModaldata={setMovieDetailsModaldata}
              movieData={movie}

            />
          )) :
            <p className='  w-[70rem] text-center'>Not Data found for this particular search "{searchvalue}"</p>
        }
      </div>

      {
        MovieDetailsModaltoggle &&
        <MovieDetailsModal setMovieDetailsModaltoggle={setMovieDetailsModaltoggle} movieDetailsModaldata={movieDetailsModaldata} />
      }


    </div>
  );
}

export default App;
