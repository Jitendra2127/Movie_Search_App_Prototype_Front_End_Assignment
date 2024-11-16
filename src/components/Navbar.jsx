import React from 'react'

const Navbar = ({ searchvalue, setSearchValue }) => {
    return (
        <div className='flex fixed top-0 w-full z-10 lg:px-20 sm:px-6 px-2  *:w-full py-2 rounded justify-between items-center bg-gray-100'>
            <div className='md:block hidden'><img src="/assets/FLUID.png" alt="cross_icon" className='h-16 rounded w-1/2' onClick={(e) => setSearchValue("")} /></div>
            <div className=' '>
                <div className='   gap-2 rounded flex w-full   items-center '>
                    <div className='w-full relative '>

                        <input type="text" placeholder='Search here by movie title' value={searchvalue || ""} onChange={(e) => setSearchValue(e.target.value)} className=' border border-transparent hover:border-gray-400 w-full py-2 px-10 rounded outline-none' />
                        <div className=' absolute top-2 left-2   '>

                            <img src="/assets/search_icon.png" alt="search_icon" className='h-6' />
                        </div>
                        {
                            searchvalue &&
                            <div className='  absolute top-2 right-2 cursor-pointer  '>

                                <img src="/assets/cross_icon.png" alt="cross_icon" className='h-6' onClick={(e) => setSearchValue("")} />
                            </div>
                        }

                    </div>



                </div>

            </div>
            <div className='text-right lg:block hidden '>
                <ul className=' flex   justify-end gap-2 items-center *:border-b hover:border-transparent *:cursor-pointer *:px-2  *:rounded *:text-xl  hover:*:bg-white '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar
