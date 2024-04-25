import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-800 h-15'>
        <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
            <div className='text-5xl font-bold text-amber-500 hover:cursor-pointer'>
                Flex-Fit
            </div>
            <div className='md:static absolute bg-gray-800 md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[7vw] gap-8'>
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