import React from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'

function Home() {
  return (
    <div className='overflow-x-hidden'>
    <Carousel/>
    <Category/>
    <MidBanner/>
    <Features/>
    </div>
  )
}

export default Home