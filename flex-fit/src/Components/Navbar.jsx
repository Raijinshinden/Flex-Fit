const Navbar = () => {

  return (
    <header className='invisible md:visible w-full z-[99] bg-gray-600 h-15 fixed'>
        <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
            <div className=' text-5xl font-bold text-amber-500 hover:cursor-pointer'>
                Flex-Fit
            </div>
            <div className='md:static absolute bg-gray-600 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[7vw] gap-8'>
                    <li>
                        <a className='border-rounded text-xl p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#home'>Home</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#about'>About</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#classes'>Classes</a>
                    </li>
                    <li>
                        <a className='border-rounded text-xl p-2 text-amber-500 hover:bg-white hover:text-amber-600 hover:border-solid hover:border-2 hover:rounded-xl hover:border-amber-500' href='#membership'>Membership</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <button className='bg-amber-500 text-white text-xl px-5 py-2 mx-5 rounded-full hover:bg-white hover:text-amber-500 transition delay-100 hover:ease-in-out max-md:hidden'><a href="#contact">Contact Us</a></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar