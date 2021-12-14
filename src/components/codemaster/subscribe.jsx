import React from 'react'

export default () => (
    <div className='container mx-auto py-8 md:flex-row flex-col flex justify-center bg-gray-800 rounded px-6'>
        <div>
            <p className='mb-3 text-gray-400 capitalize'>Subscribe now to notify when we add new course</p>
            <input type="text" className='py-4 px-3 block rounded bg-gray-700 w-full shadow-md border border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none' style={{ maxWidth: '500px' }} placeholder='Enter Your Email...' />
        </div>
        <button type='button' className='md:ml-4 mt-3 md:mt-0 py-4 px-14 bg-green-500 rounded shadow-md md:self-end'>Subscribe</button>
    </div>
)