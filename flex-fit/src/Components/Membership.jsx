import React from 'react'

const Membership = () => {
  return (
    <div className='grid w-full m-auto md:pl-20 p-4 py-16 bg-gray-800'>
        <h2 className='mb-3 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            Membership
        </h2>
        <div className='md:block'>
            <div>
                <img />
                <h3 className='text-white'>
                  Basic
                </h3>
            </div>
        </div>
        <div>
            <div>
                <img />
                <h3 className='text-white'>
                  Enthusiast
                </h3>
            </div>
            <div>
            <div>
                <img />
                <h3 className='text-white'>
                  Gym Rat
                </h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Membership