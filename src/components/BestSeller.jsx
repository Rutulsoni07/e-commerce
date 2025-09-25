import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import ProductItems from './ProductItems'
import Title from "./Title";
export default function BestSeller() {
    const {products} = useContext(ShopContext)
    const [BestSeller, setBestSeller] = useState([])

    useEffect(()=>{
    const BestProduct = products.filter((item)=>(item.BestSeller))
    setBestSeller(BestProduct.slice(0,5)) 
    },[products])
  return (
    <div className='my-10'>
     <div className='text-center text-3xl py-8'>
        <h1 className='text-3xl mb-5  font-thin'>
         <Title text1={"BEST"} text2={"SELLER"} />
        </h1>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorum aut labore  maxime dolorem `!</p>
     </div>
     <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
      {products.map((item,index)=>(
        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price }/>
      ))}
     </div>
    </div>
  )
}
