import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { productId } = useParams();
  const { products , currency, addToCart } = useContext(ShopContext);
  const [ProductData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size,setSize] = useState('')

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return ProductData ? (
    <div className="border-t-2 transition-opacity ease-in duration-500 pt-10 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* product images */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {ProductData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                key={index}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{ProductData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {ProductData.price}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {ProductData.description}
          </p>
          <div>
            <p>Select Size</p>
            <div className="flex gap-2">
              {ProductData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border bg-gray-100 py-2 px-4 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(ProductData._id , size)} className="bg-black text-white mt-5 px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash On Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & review  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commmerce website is an online platform facilitates the buying
            and selling of products or services over the internet. It serves as
            a virtual marketplace where businesses and individuals can showcase
            their products, interact with customers, and conduct transactions
            without the need for a physical presence.E-commerce websites have
            gained immense popularity due to their convenience , accessibility
            and the global react they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detalied descriptions, images, prices, and any available
            variations.Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      {/* display related products */}
              <RelatedProducts category={ProductData.category} subCategory={ProductData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
