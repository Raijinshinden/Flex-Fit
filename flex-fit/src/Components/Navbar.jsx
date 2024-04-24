import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-gray-800 mb-4'>
        <div className='text-4xl font-bold text-amber-500'>
            Flex-Fit
        </div>
        <ul className='flex flex-row mr-4'>
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