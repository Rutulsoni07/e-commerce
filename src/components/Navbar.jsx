import {assets} from "../assets/assets"
import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";


export default function Navbar() {

    const [visible, setVisible]= useState(false)
     const { setShowSearch ,getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5  font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-800 ">
        <NavLink to="/" className="flex flex-col item-center gap-1 ">
          <p>HOME</p>
          <hr className=" border-none h-[1.5px] bg-gray-700  hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col item-center gap-1">
          <p>COLLECTION</p>
          <hr className="border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col item-center gap-1">
          <p>ABOUT</p>
          <hr className=" border-none h-[1.5px]  bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col item-center gap-1">
          <p>CONTACT</p>
          <hr className=" border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5  cursor-pointer"
          onClick={() => {
            setShowSearch(true);
            // navigate("/Collection");
          }}
          alt=""
        />

        <div className="relative group">
          <Link to='/logIn'>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>

          <div className="absolute group-hover:block hidden dropdown-menu  right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="rounded-full bg-black absolute right-[-5px] bottom-[-5px] w-4  text-center leading-4 text-white text-sm aspect-square ">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* small devides */}
      <div
        onClick={() => setVisible(false)}
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}


