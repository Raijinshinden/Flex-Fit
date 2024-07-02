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

      <div className='col-start-1 row-start-2 mx-12 space-y-6 lg:grid grid-cols-4 grid-rows-8 gap-8'>
        <div className='md:col-span-2 row-span-1'>
          <img src='/images/man-weights.jpg' className='size-96 md:w-full rounded-lg h-full mt-6'/>
        </div>
        <div className='row-start-1 row-span-1 col-start-3 col-span-2 mt-6'>
          <p className='bg-gray-700 rounded-lg p-3 text-xl text-white'>
            Flex-Fit was founded with the idea that people should be able to exercise whenever they want to.<br/> 
            Because Flex-Fit is a 24/7 gym, our members are able to come exercise whenever they have free time.<br/> 
            At Flex-Fit, our overall goal is to instill in our members self-confidence, 
          </p>
        </div>
        <div className='row-start-2 row-span-1 col-start-1 col-span-2'>
          <p className='items-start bg-gray-700 rounded-lg p-3 text-xl text-white'>
                At Flex-Fit, you will find only the most state-of-the-art equipment that is readily available to the public.
                Our Gyms are also <span className='text-amber-500 font-bold'>CAMERA-FREE</span> environments, so our members never have to worry about videos of themselves being
                uploaded to the internet without their permission.
                Flex-Fit also has a number of facilities besides our gym that are available to our higher level members.   
          </p>
        </div>
        <div className='row-start-2 row-span-1 col-start-3 col-span-2'>
          <img src=''/>
        </div>
        <div className='row-start-3 row-span-1 col-start-1 col-span-4'>
          <p className='items-start bg-gray-700 rounded-lg p-3 block text-xl text-white'>
              These facilities include...
          </p>
        </div>
        <div className='row-start-4 row-span-1 col-start-1 col-span-2'>
          <img src='/images/Spa.jpg' className='rounded-lg'/>
        </div>
        <div className='row-start-4 row-span-1 col-start-3 col-span-2 bg-gray-700 rounded-lg p-3 text-xl'>
          <h2 className='underline font-bold text-amber-500'>Luxury Spa</h2>
          <p className='text-white'>

          </p>
        </div>
        <div className='row-start-5 row-span-1 col-start-1 col-span-2 bg-gray-700 rounded-lg p-3 text-xl'>
        <h2 className='underline font-bold text-amber-500'>Gynasium</h2>
          <p className='text-white'>

          </p>
        </div>
        <div className='row-start-5 row-span-1 col-start-3 col-span-2'>
          <img src='/images/Gym.jpg'/>
        </div>
        <div className='row-start-6 row-span-1 col-start-1 col-span-2'>
          <img src='/images/Olympic-pool.jpg'/>
        </div>
        <div className='row-start-6 row-span-1 col-start-3 col-span-2 bg-gray-700 rounded-lg p-3 text-xl'>
          <h2 className='underline font-bold text-amber-500'>Swimming Pool</h2>
          <p className='text-white'>

          </p>
        </div>
        <div className='row-start-7 row-span-1 col-start-1 col-span-2 bg-gray-700 rounded-lg p-3 text-xl'>
          <h2 className='underline font-bold text-amber-500'>Rock Climbing Center</h2>
            <p className='text-white'>

            </p>
        </div>
        <div className='row-start-7 row-span-1 col-start-3 col-span-2'>
          <img src=''/>
        </div>
        <div className='row-start-8 row-span-1 col-start-1 col-span-2'>
          <img src=''/>
        </div>
        <div className='row-start-8 row-span-1 col-start-3 col-span-2 bg-gray-700 rounded-lg p-3 text-xl'>
          <h2 className='underline font-bold text-amber-500'>Rock Climbing Center</h2>
              <p className='text-white'>

              </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default About