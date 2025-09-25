import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Placedorder from './pages/Placedorder'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Search from './components/Search'
 import { ToastContainer, toast } from "react-toastify";
import Orders from './pages/Orders'
function App() {

  return (
    <div  id="scroll-container" data-scroll-container>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer/>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/place-order" element={<Placedorder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App
