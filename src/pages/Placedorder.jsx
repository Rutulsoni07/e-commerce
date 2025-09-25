import React, {  useState } from 'react'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../contexts/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function Placedorder() {
  const [method ,setMethod] = useState('cod')
  const navigate = useNavigate()
    return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <h1>DELIVERY INFORMATION</h1>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <input
          type="Email"
          placeholder="Email address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <input
          type="number"
          placeholder="Enter Number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          
          {/*payment method  */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "razorpay" ? "bg-green-400" : ""
                } `}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-auto">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
