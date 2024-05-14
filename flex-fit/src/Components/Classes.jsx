import React from 'react'

const Classes = () => { 
  return (
    <div className='grid w-full md:px-10 py-10 bg-gray-800 overflow-hidden' id='classes'>
        <h2 className='sm:col-start-1 row-start-1 mb-3 mx-3 md:mb-3 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            Classes
        </h2>
        <div className='sm:col-start-1 row-start-2 mx-3 md:flex justify-evenly gap-x-2'>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 bg-gray-700 rounded-xl'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2 px-3'>
              Aerobics
            </h3>
            <p>
              Our aerobics classes allows our members to exercise and stretch in a relaxed and peaceful manner.
            </p>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 bg-gray-700 rounded-xl'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2 px-3'>
              Boxing
            </h3>
            <p>
              Our boxing classes give our members an amazing workout, as they can focus on during some padwork with their training partners,
              or engage in some light sparing with with of our trained instructors.
            </p>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 bg-gray-700 rounded-xl px-2'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2 px-3'>
              Karate
            </h3>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 bg-gray-700 rounded-xl px-2'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2 px-3'>
              Kickboxing
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Classes