import React from 'react'
import {assets} from "../assets/assets"
import Newsletterbox from '../components/Newsletterbox';
export default function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <h1>ABOUT US</h1>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
           Forever was born out of a passion for inovation and a desire to revolutionize the way people shop online.Our journey began with a simple idea: to provide a platform where customers can easiy discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we're worked tirelessly to curate a diverse selection fo high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <p className="text-gray-800 font-bold">Our Mission</p>
          <p>Our mission at Forever is to empower customers with choice ,convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <h1>WHY CHOOSE US</h1>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Quality Assurance:</b>
          <p  className='text-gray-600'>
            We meticulosly select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Convenirnvce:</b>
          <p className='text-gray-600'>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <Newsletterbox />
    </div>
  );
}
