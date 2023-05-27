import React, { useEffect } from 'react'
import { Outlet, useHref } from 'react-router-dom'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import heroData from '../data/heroData'



const Layout = () => {

  
  const link =useHref()
  let data=undefined
 
    heroData.map((val)=>{
      if(val.path==link){
        data =val
      }
    })
  
    
  
  return (
    <div className='Layout'>
        <Hero data={data}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout