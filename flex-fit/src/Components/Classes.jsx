import React from 'react'

const Classes = () => { 
  return (
    <div className='grid w-full md:px-10 py-10 bg-gray-800 overflow-hidden' id='classes'>
        <h2 className='sm:col-start-1 row-start-1 mb-6 mx-3 md:mb-3 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            Classes
        </h2>
        <div className='sm:col-start-1 row-start-2 mx-3 md:flex justify-evenly gap-x-2'>
          <div className='w-3/12 shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 mb-6 bg-gray-700 rounded-xl max-w-md:'>
            <img src='/images/aerobics.jpg' className='p-2'/>
            <h3 className='text-white text-2xl text-center font-bold my-2 px-3'>
              Aerobics
            </h3>
            <p className='text-white p-2'>
              Our aerobics classes allows our members to exercise and stretch in a relaxed and peaceful manner.
            </p>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 mb-6 bg-gray-700 rounded-xl'>
            <img src='/images/boxing.jpg' className='p-2'/>
            <h3 className='text-white text-2xl text-center  font-bold my-2 px-3'>
              Boxing
            </h3>
            <p className='text-white p-2'>
              Our boxing classes give our members an amazing workout, as they can focus on during some padwork with their training partners,
              or engage in some light sparing with with of our trained instructors.
            </p>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 mb-6 bg-gray-700 rounded-xl px-2'>
            <img src='/images/karate.jpg' className='p-2'/>
            <h3 className='text-white text-2xl text-center font-bold my-2 px-3'>
              Karate
            </h3>
            <p className='text-white p-2'>
              We over both traditional and full-contact forms of karate here at Flex-Fit. Our classes are offered daily and are designed for members of
              varying skill levels, so you will be able to find a class that is right for you.
            </p>
          </div>
          <div className='shadow-2xl hover:shadow-black hover:cursor-pointer sm:col-start-1 row-start-2 bg-gray-700 rounded-xl px-2'>
            <img src='/images/kickboxing.jpg' className='p-2'/>
            <h3 className='text-white text-2xl text-center font-bold my-2 px-3'>
              Kickboxing
            </h3>
            <p className='text-white p-2'>
              Kickboxing is one of our most popular classes here at Flex-Fit. Members are able to get a great workout which is not only good for their cardio,
              but also helps to build and tone their muscles.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Classes