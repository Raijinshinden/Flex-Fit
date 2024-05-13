import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-col w-full md:px-20 p-4 py-16 bg-gray-800' id='about'>
      <div className='rounded-full bg-gray-700'>
        <h2 className='text-center font-bold text-3xl text-amber-500 py-4'>About Us</h2>
      </div>

      <div className='mt-3'>
        <img src='' className='float-right'/>
        <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
            Flex-Fit was founded with the idea that people should be able to exercise whenever they want to. 
            Because Flex-Fit is a 24/7 gym, our members are able to come exercise whenever they have free time.
            At Flex-Fit, you will find only the most state-of-the-art equipment that is readily available to the public.
            Flex-Fit also has a number of facilities besides our gym that are available to our higher level members.
            These facilities include...

            Luxury Spa
        </p>
      </div>
      <p>
        
      </p>
    </div>
    </>
  )
}

export default About