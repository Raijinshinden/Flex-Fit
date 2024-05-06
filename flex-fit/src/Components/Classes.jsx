import React from 'react'

const Classes = () => { 
  return (
    <div className='grid w-full m-auto md:pl-20 p-4 py-16 bg-gray-800'>
        <h2 className='mb-3 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            Classes
        </h2>
        <div className='flex justify-evenly gap-x-2 md:block'>
          <div className='bg-gray-700 rounded-xl px-2'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2 px-3'>
              Aerobics
            </h3>
          </div>
          <div className='bg-gray-700 rounded-xl'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2'>
              Boxing
            </h3>
          </div>
          <div className='bg-gray-700 rounded-xl px-2'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2'>
              Karate
            </h3>
          </div>
          <div className='bg-gray-700 rounded-xl px-2'>
            <img />
            <h3 className='text-white text-2xl font-bold my-2'>
              Kickboxing
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Classes