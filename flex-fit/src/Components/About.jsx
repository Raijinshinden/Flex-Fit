import React from 'react'

const About = () => {
  return (
    <>
    <div className='grid-cols-2 grid-rows-7 w-full md:px-10 py-10 bg-gray-800 overflow-hidden' id='about'>
      <div className='rounded-full bg-gray-700'>
      <h2 className='sm:col-start-1 row-auto mb-2 mx-3 md:mb-2 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            About Us
        </h2>
      </div>


      <div className='flex justify-center items-center'>
        <div className='sm:flex justify-between justify-items-center mx-3'>
          <div className='mt-3 bg-gray-700 w-40'>
          <img src='/images/man-weights.jpg' className='size-96 float-right rounded-lg h-full object-cover'/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white text-wrap'>
                Flex-Fit was founded with the idea that people should be able to exercise whenever they want to.<br/> 
                Because Flex-Fit is a 24/7 gym, our members are able to come exercise whenever they have free time.<br/> 
                At Flex-Fit, our overall goal is to instill in our members self-confidence, 
            </p>
          </div>
          <div className='pt-3'>
            <img src='' className=''/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                At Flex-Fit, you will find only the most state-of-the-art equipment that is readily available to the public.
                Our Gyms are also <span className='text-amber-500 font-bold'>CAMERA-FREE</span> environments, so our members never have to worry about videos of themselves being
                uploaded to the internet without their permission.
                Flex-Fit also has a number of facilities besides our gym that are available to our higher level members.   
            </p>
          </div>
          <div className='pt-3'>
            <img src='' className=''/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                These facilities include...
            </p>
          </div>
          <div className='pt-3'>
            <img src='/images/Spa.jpg' className='rounded-lg'/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                Luxury Spa
            </p>
          </div>
          <div className='pt-3'>
            <img src='/images/Gym.jpg' className='rounded-lg'/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                Gymnasium
            </p>
          </div>
          <div className='pt-3'>
            <img src='' className=''/>
            <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                Rock climbing Wall
            </p>
          </div>
          <div className='pt-3'>
            <img src='/images/Olympic-pool.jpg' className='rounded-lg'/>
            <p className='items-start col-start-2 row-start-7 bg-gray-700 rounded-lg p-3 block text-xl text-white'>
                Olympic Swimming Pool
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About