import React from 'react'

export default function Newsletterbox() {
    const onsubmit=(e)=>{
     e.preventDefault()
      
    }
  return (
    <div className='text-center'>

        <p className='text-gray-800 font-medium text-2xl'>Subscribe now  & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, repellat?</p>

        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' onsubmit={onsubmit}>
            <input type="email" placeholder='Enter your email' className='w-full outline-none sm:flex-1' required  />
            <button className='bg-black text-white text-xs px-10 py-5 ' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
