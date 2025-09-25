import React, { useState } from 'react'

export default function LogIn() {
  const [currentState, setCurrentState] = useState('LogIn')

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
  }


  return (
    <form onClick={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-2">
        <p className="text-3xl">{currentState}</p>
        <hr className="borer-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "LogIn" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'LogIn'?
          <p onClick={()=>setCurrentState('SignUp')}  className='cursor-pointer'>Create Account</p> :
          <p onClick={()=> setCurrentState('LogIn')} className='cursor-pointer'> Login Account</p>
        }
      </div>
      <button className='bg-black text-white py-2 px-8 mt-4 font-light'>{currentState === 'LogIn' ? 'Sign In' : 'SignUp' }</button>
    </form>
  );
}
