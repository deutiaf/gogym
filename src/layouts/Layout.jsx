import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div className='Layout'>
        <Hero/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout