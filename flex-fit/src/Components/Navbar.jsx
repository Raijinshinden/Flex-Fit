import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <header className='bg-gray-800 h-15'>
        <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
            <div className='text-5xl font-bold text-amber-500 hover:cursor-pointer'>
                Flex-Fit
            </div>
            <div className='md:static absolute bg-gray-800 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[7vw] gap-8'>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#'>Home</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#'>About</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#'>Classes</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#'>Trial</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-white hover:text-amber-500'>Contact Us</button>
                <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden'/>
            </div>

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20}/>
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar