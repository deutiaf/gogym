import React, { useEffect } from 'react'
import './carroussel.scss'

const Carroussel = () => {

    useEffect(() => {
      const TimerId= setInterval(()=>{
        document.querySelector('.carroussel').classList.toggle('slide')
      },10000)
    
      return () => {
        clearInterval(TimerId)
      }
    }, [])
    
  return (
    <div className='carroussel-container'>
    <div className='carroussel'>
        <div className='carroussel1'></div>
        <div className='carroussel2'></div>
    </div>
    <div className="filter"></div>
    </div>
  )
}

export default Carroussel