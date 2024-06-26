import React from 'react'

const About = () => {
  return (
    <>
    <div className='grid-cols-2 grid-rows-7 w-full md:px-10 py-10 bg-gray-800 overflow-hidden' id='about'>
      <div className='rounded-full bg-gray-700 mx-3'>
      <h2 className='sm:col-start-1 row-auto  mx-3 md:mb-2 bg-gray-700 text-center rounded-full text-3xl font-bold text-amber-500 py-4'>
            About Us
        </h2>
      </div>

      <div className='sm:col-start-1 row-start-2 mx-12  lg:grid grid-cols-4 grid-rows-7 gap-10'>
        <div className='col-span-2 row-span-1'>
          <img src='/images/man-weights.jpg' className='size-96 sm:w-full md:float-right rounded-lg h-full'/>
          <div>
            <p className='col-start-3 col-span-2 bg-gray-700 rounded-lg p-3 text-xl text-white'>
                Flex-Fit was founded with the idea that people should be able to exercise whenever they want to.<br/> 
                Because Flex-Fit is a 24/7 gym, our members are able to come exercise whenever they have free time.<br/> 
                At Flex-Fit, our overall goal is to instill in our members self-confidence, 
            </p>
          </div>
          

        </div>
      </div>
    </div>
  </>
  )
}

export default About