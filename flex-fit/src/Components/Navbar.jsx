import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-800 h-15'>
        <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
            <div className='text-5xl font-bold text-amber-500 hover:cursor-pointer'>
                Flex-Fit
            </div>
            <div className='absolute bg-gray-800 min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col items-center gap-[7vw]'>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Home</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>About</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Classes</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar