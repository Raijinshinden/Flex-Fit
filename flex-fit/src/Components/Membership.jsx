import React from 'react'

const Membership = () => {
  return (
    <div className='w-full sm:px-5 sm:py-5 md:px-10 py-10 bg-gray-800 overflow-hidden'id='membership'>
        <h2 className='sm:col-start-1 row-start-1 mb-6 ml-3 mr-10 md:mt-10 md:mb-20 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4' >
            Membership
        </h2>
        <div className='sm:justify-center md:flex justify-evenly gap-3'>
            <div className='h-full py-1 sm:mb-6 sm:w-3/4 sm:ml-16 md:w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer transition delay-75 hover:ease-in-out sm:col-start-1 row-start-2'>
              <img src='/images/gym-basic.jpg' className='rounded-xl mt-3 h-80'/>
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Basic
                </h3>
                <p className='text-center text-white'>
                    This is our most basic package<br/>
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
                <div className='p-2 m-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl '>
                  $50.00
                </div>
            </div>
            <div className='h-full py-1 sm:mb-6 sm:w-3/4 sm:ml-16 md:w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer transition delay-75 hover:ease-in-out sm:col-start-1 row-start-3 mx-3'>
              <img src='/images/gym-enthusiast.jpg' className='rounded-xl mt-3'/>
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
                <div className='p-2 m-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl'>
                  $75.00
                </div>
            </div>
            <div className='h-full py-1 sm:mb-6 sm:w-3/4 sm:ml-16 md:w-4/12 bg-gray-700 rounded-xl px-4 shadow-2xl hover:shadow-black hover:cursor-pointer transition delay-75 hover:ease-in-out sm:col-start-1 row-start-4 mx-3'>
              <img src='/images/gym-rat.jpg' className='rounded-xl mt-3'/>
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
                    Take multiple trial classes for free <br/>
                    every month.
                  </li>
                  <li>
                    Free training with our personal trainers.
                  </li>
                </ul>
                <div className='p-2 m-6 bg-amber-500 rounded-lg text-center font-bold text-white text-4xl'>
                  $100.00
                </div>
            </div>
        </div>
    </div>
  )
}

export default Membership