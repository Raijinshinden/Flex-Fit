import React from 'react'

const Membership = () => {
  return (
    <div className='w-full sm:px-5 sm:py-5 md:px-10 py-10 bg-gray-800 overflow-hidden'id='membership'>
        <h2 className='sm:col-start-1 row-start-1 mb-3 ml-3 mr-10 md:mb-3 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4' >
            Membership
        </h2>
        <div className='sm:justify-center md:flex justify-evenly'>
            <div className='h-full w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2'>
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Basic
                </h3>
                <p className='text-center text-white'>
                    This is our most basic package
                    for people looking for a casual gym experience.  
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    Free branded water bottle.
                  </li>
                  <li>
                    You can take one trial class 
                    for free every month.
                  </li>
                </ul>
                <div className='p-2 my-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl'>
                  $50.00
                </div>
            </div>
            <div className='h-full w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-3 mx-3'>
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Enthusiast
                </h3>
                <p className='text-center text-white'>
                    This package is for people who are looking<br/>
                    to get more out of their 
                    gym experience.
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    You can take one trial class
                    for free every month.
                  </li>
                  <li>
                    Free access to our paid carpark.
                  </li>
                </ul>
                <div className='p-2 my-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl'>
                  $75.00
                </div>
            </div>
            <div className='h-full w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-4 mx-3'>
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Gym Rat
                </h3>
                <p className='text-center text-white'>
                    This package is for people who spend 
                    their whole lives at the gym.  
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    Take multiple trial classes
                    for free every month.
                  </li>
                  <li>
                    Free training with our personal trainers.
                  </li>
                </ul>
                <div className='p-2 my-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl'>
                  $100.00
                </div>
            </div>
        </div>
    </div>
  )
}

export default Membership