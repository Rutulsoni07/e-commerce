import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cum quidem expedita qui provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas veritatis assumenda porro nisi
          necessitatibus.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+123456789</li>
          <li>youremail@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm ">
          Copyright 2025@ forever.com - All rights reserved.
        </p>
      </div>
    </div>
  );
}
