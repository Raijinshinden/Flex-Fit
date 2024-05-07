import React from 'react'

const Membership = () => {
  return (
    <div className='grid w-full m-auto md:pl-20 p-4 py-16 bg-gray-800'>
        <h2 className='mb-10 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            Membership
        </h2>
        <div className='flex justify-evenly gap-5'>
            <div className='bg-gray-700 rounded-xl px-4'>
                <img />
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Basic
                </h3>
                <p className='text-center text-white'>
                    This is our most basic package.<br/>
                    For people looking for a casual gym experience.  
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    You can take one trial class<br/> 
                    for free every month.
                  </li>
                </ul>
                <button></button>
            </div>
            <div className='bg-gray-700 rounded-xl px-4'>
                <img />
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Enthusiast
                </h3>
                <p className='text-center text-white'>
                    This package is for people who are looking<br/>
                    to get more out of their <br/>
                    gym experience.
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    You can take one trial class<br/> 
                    for free every month.
                  </li>
                  <li>
                    Free access to our paid carpark.
                  </li>
                </ul>
                <button></button>
            </div>
            <div className='bg-gray-700 rounded-xl px-4'>
                <img />
                <h3 className='text-white text-2xl text-center font-bold my-2'>
                  Gym Rat
                </h3>
                <p className='text-center text-white'>
                    This package is for people who spend <br/>
                    their whole lives at the gym.  
                </p>
                <ul className='my-2 text-center text-white list-inside list-disc'>
                  <li >
                    24/7 access to gym.
                  </li>
                  <li >
                    You can take one trial class<br/> 
                    for free every month.
                  </li>
                </ul>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default Membership