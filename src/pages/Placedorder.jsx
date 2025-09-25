import React, { useState } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

export default function Placedorder() {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  const handlePlaceOrder = () => {
    // Check if any field is empty
    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) {
      setError("⚠️ Please fill up all required fields.");
      return;
    }

    // if everything is filled
    navigate("/orders");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />

        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />

        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            name="zipcode"
            placeholder="Zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          type="number"
          name="phone"
          placeholder="Enter Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 font-bold uppercase  text-sm">{error}</p>}
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

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

          {/* Place order button */}
          <div className="w-full text-end mt-8">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
