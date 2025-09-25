import React, { useContext, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  // Automatically show search bar if navigated from Navbar with state
  useEffect(() => {
    if (
      location.pathname.includes("collection") &&
      location.state?.showSearch
    ) {
      setShowSearch(true);
    }
  }, [location, setShowSearch]);

  if (!(showSearch && location.pathname.includes("collection"))) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </div>
  );
}
