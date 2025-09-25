import React from 'react'
import { assets } from "../assets/assets";
import Newsletterbox from '../components/Newsletterbox';
export default function Contact() {
  return (
    <div>
      <div className="text-center  text-2xl pt-10 border-t ">
        <h1>CONTACT US</h1>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600"> Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington,USA
          </p>
          <p className="text-gray-500">
            Tel:+0123456789 <br />
            Email:admin@gmail.com
          </p>
          <p className="text-gray-600 font-semibold text-xl">Carrers at Forever</p>
          <p className="text-gray-500">
            Learn more about our team and job openings.
          </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white trnasition-all duration-500">
              Explore Jobs
            </button>
        </div>
      </div>

      <Newsletterbox/>
    </div>
  );
}
