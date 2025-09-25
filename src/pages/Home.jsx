import React from 'react'
import Hero from '../components/Hero'
import LatestContext from '../components/LatestContext'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletterbox from '../components/Newsletterbox'
export default function Home() {
  return (
    <div>
        <Hero/>
        <LatestContext/>
        <BestSeller/>
        <OurPolicy/>
        <Newsletterbox/>
    </div>
  )
}
