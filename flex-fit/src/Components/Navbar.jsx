import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-gray-800  hover:cursor-pointer'>
        <div className='text-4xl font-bold text-amber-500'>
            Flex-Fit
        </div>
        <ul className='flex text-amber-500 hover:cursor-pointer'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Classes
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
  )
}

export default Navbar