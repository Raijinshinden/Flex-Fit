import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-800'>
        <nav className='flex justify-between items-center w-[92%]'>
            <div className='text-5xl font-bold text-amber-500 hover:cursor-pointer'>
                Flex-Fit
            </div>
            <div>
                <ul className='flex items-center gap-[4vw]'>
                    <li>
                        <a className='text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Home</a>
                    </li>
                    <li>
                        <a className='text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>About</a>
                    </li>
                    <li>
                        <a className='text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Classes</a>
                    </li>
                    <li>
                        <a className='text-xl ml- p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:border-amber-500' href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar