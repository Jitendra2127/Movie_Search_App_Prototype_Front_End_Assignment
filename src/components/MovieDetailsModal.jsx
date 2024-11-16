import React from 'react'

const MovieDetailsModal = ({ movieDetailsModaldata, setMovieDetailsModaltoggle }) => {
    console.log(movieDetailsModaldata)
    return (
        <div className='fixed md:top-0 top-0    w-full bg-black/70   h-full z-[100]  flex overflow-auto'>
            <div className='  h-fit self-center md:mt-0 sm:mt-16 mt-20 shadow-2xl lg:w-3/4 w-[90%] bg-white rounded mx-auto p-2'>
                <div className='flex justify-end '>

                    <img src="/assets/cross_icon.png" alt="cross_icon" className='p-1 cursor-pointer hover:bg-gray-300 ' onClick={() => setMovieDetailsModaltoggle(false)} />
                </div>
                <div className=' md:flex   gap-4 *:w-full'>
                    <div>


                        <img src={`https://images.tmdb.org/t/p/w1280${movieDetailsModaldata.poster_path}`} alt={movieDetailsModaldata.original_title} className='md:h-96 h-52 w-full' />
                    </div>
                    <div className='space-y-1 '>

                        <MovieDetailsModalContent name="Title" value={movieDetailsModaldata.original_title}/>
                        <MovieDetailsModalContent name="Overview" value={movieDetailsModaldata.overview}/>
                        <MovieDetailsModalContent name="Release Date" value={movieDetailsModaldata.release_date}/>
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetailsModal


const MovieDetailsModalContent = ({name,value}) => {
    return (
        <>
            <div className={`space-x-2 border flex  items-center px-2 rounded-sm  ${name!=="Overview" && "bg-gray-100"}`}>
                <span className=' w-44 text-xl'>{name}:-</span>
                <span className='w-full'>{value.length>200?value.substring(0,200):value}</span>

            </div>
        </>
    )
} 
