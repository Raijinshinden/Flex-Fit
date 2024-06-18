import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full md:px-20 p-4 py-16 bg-gray-800'>
        <h1 className='mb-5 bg-gray-700 py-4 text-3xl rounded-full font-bold text-center text-amber-500'>
            Contact
        </h1>
        <form 
        action='https://getform.io/f/zazkqdeb' 
        method='POST' 
        encType='multiport/form-data'
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-amber-500'>Name</label>
                    <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type='text' 
                    name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-amber-500'>Phone</label>
                    <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    name='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-amber-500'>Email</label>
                <input 
                className='border-2 rounded-lg p-3 flex border-gray-300' 
                type='email' 
                name='name' />    
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-amber-500'>Subject</label>
                <input 
                className='border-2 rounded-lg p-3 flex border-gray-300' 
                type='text' 
                name='subject' />    
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-amber-500'>Message</label>
                <textarea 
                className='border-2 rounded-lg p-3 border-gray-300' 
                rows='10' 
                name='message' />    
            </div>
            <button 
            className='bg-amber-500 text-white font-bold mt-4 w-full p-4 rounded-lg hover:bg-white hover:text-amber-500 transition delay-75 hover:ease-in-out'
            >
                Send Message    
            </button> 
        </form>
    </div>
  )
}

export default Contact