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
        <AiOutlineMenu onClick={handleNav} className='bg-gray-600 size-14 p-2 rounded-full fixed top-5 right-3 z-[99] fill-amber-500 hover:cursor-pointer hover:bg-white hover:rounded-full transition delay-100 hover:ease-in-out md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-gray-800/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} 
                      href="#home" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-amber-500 shadow-amber-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineHome size={30} className='fill-white' />
                      <span className='pl-4 text-white font-bold'>Home</span>
                    </a>
                    <a onClick={handleNav}  
                      href="#about" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-amber-500 shadow-amber-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <GrProjects size={30} className='fill-white' />
                      <span className='pl-4 text-white font-bold'>About</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#classes" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-amber-500 shadow-amber-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineProject size={30} className='fill-white' />
                      <span className='pl-4 text-white font-bold'>Classes</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#membership" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-amber-500 shadow-amber-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <BsPerson size={30} className='fill-white' />
                      <span className='pl-4 text-white font-bold'>Membership</span>
                    </a>
                    <a onClick={handleNav} 
                      href="#contact" 
                      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-amber-500 shadow-amber-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                      <AiOutlineMail size={30} className='fill-white' />
                      <span className='pl-4 text-white font-bold'>Contact</span>
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