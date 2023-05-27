import React, { useEffect } from 'react'
import './carroussel.scss'

const Carroussel = ({img}) => {

    useEffect(() => {
      const TimerId= setInterval(()=>{
        document.querySelector('.carroussel').classList.toggle('slide')
      },10000)
    
      return () => {
        clearInterval(TimerId)
      }
    }, [])

    const style={
      backgroundImage:`url(${Object.values(img.data.img1)[0]})`
    }   
    const style2={
      backgroundImage:`url(${Object.values(img.data.img2)[0]})`
    } 

  return (
    <div className='carroussel-container'>
    <div className='carroussel'>
        <div className='carroussel1' style={style}></div>
        <div className='carroussel2' style={style2}></div>
    </div>
    <div className="filter"></div>
    </div>
  )
}

export default Carroussel