import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity , navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData); //  update state
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <h1>Your Cart</h1>
        <div>
          {cartData.map((item, index) => {
            const productData = products.find((p) => p._id === item._id);

            if (!productData) return null;

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    className="w-16 sm:w-20"
                    alt=""
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-500">
                        {item.size}
                      </p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  min={1}
                  defaultValue={item.quantity}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className=" bg-black text-white text-sm my-8 px-8 py-3">
            <button onClick={()=> navigate('/place-order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
