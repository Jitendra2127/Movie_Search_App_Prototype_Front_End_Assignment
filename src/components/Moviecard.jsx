import React from 'react'

const Moviecard = ({movieData,setMovieDetailsModaltoggle,setMovieDetailsModaldata}) => {
    const handlemoviecard=()=>{
        setMovieDetailsModaltoggle(true)
        setMovieDetailsModaldata(movieData)
    }
    return (
        <div  className=' border border-gray-300 hover:bg-gray-100 shadow-xl sm:space-y-4 space-y-2 sm:px-2 px-1 sm:py-4 py-1 rounded hover:scale-105 duration-200 cursor-pointer' onClick={()=>handlemoviecard()}>
            <div className=' rounded overflow-hidden'>

                <img src={`https://images.tmdb.org/t/p/w1280${movieData.poster_path}`} alt={movieData.title} className='  w-full' />
            </div>
            <div>

            <p className='text-center sm:text-xl'>{movieData.title}</p>
            </div>

        </div>
    )
}

export default Moviecard
