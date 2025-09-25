import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const  ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('')
  const [showSearch,setShowSearch] = useState(false)
   const [cartItems, setCartItems] = useState(() => {
     const saved = localStorage.getItem("cartItems");
     return saved ? JSON.parse(saved) : {};
   });
   const navigate = useNavigate()

   // persist cartItems to localStorage on change
   useEffect(() => {
     localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);


    const addToCart = async (itemId, size) => {
      if(!size){
        toast.error('Select Product Size')
        return
      }
      let cartData = structuredClone(cartItems)

      if(cartData[itemId]){
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
      }
      setCartItems(cartData)

    };

const getCartCount = () => {
  let totalCount = 0;

  // loop through each product in cart
  for (const itemId in cartItems) {
    // loop through each size of that product
    for (const size in cartItems[itemId]) {
      if (cartItems[itemId][size] > 0) {
        totalCount += cartItems[itemId][size];
      }
    }
  }

  return totalCount;
};

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity > 0) {
      cartData[itemId][size] = quantity;
    } else {
      delete cartData[itemId][size]; // remove size entry if 0
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId]; // remove product if no sizes left
      }
    }

    setCartItems(cartData);
  };

const getCartAmount = () => {
  let totalAmount = 0 
  for(const items in cartItems){
    let iteminfo = products.find((product)=> product._id === items)
    for (const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0){
          totalAmount += iteminfo.price * cartItems[items][item]
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  return totalAmount;
}
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
