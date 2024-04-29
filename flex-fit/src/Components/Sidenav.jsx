import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

function Sidenav() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-6 right-5 z-[99] fill-amber-500 h-4 w-4 hover:cursor-pointer hover:bg-white hover:rounded md:hidden'/>
        {
            nav ? (
                <div className='absolute w-full h-screen bg-gray-800/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} 
                      href="#main" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineHome size={20} />
                      <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav}  
                      href="#work" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <GrProjects size={20} />
                      <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#projects" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineProject size={20} />
                      <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#main" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <BsPerson size={20} />
                      <span className='pl-4'>Resume</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#contact" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineMail size={20} />
                      <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (
                ''
            )}
            </div>
  );
};

export default Sidenav