import React, { useState,useEffect } from 'react'
import { NavLink,Link } from 'react-router-dom'
import './hero.scss'
import Carroussel from './Carroussel'

const Hero = ({data}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
      if(active){
        document.documentElement.style.overflow='hidden'
      }else if(!active){
        document.documentElement.style.overflow=''

      }
    
     
    }, [active])

    
    return (
   
        <header>
            <Carroussel img={data}/>
            <div className="hero-wrapper">
                <nav>
                    <div className='logo-hero'>GoGym</div>
                    <div className={`menu-mobile ${active?'menu-slide': ''}`}>
                    <ul className='menu-list-mobile'>
                            <li className="menu-item" onClick={()=>{setActive(false)}} ><NavLink to="/" className="menu-link">Home</NavLink></li>
                            <li className="menu-item" onClick={()=>{setActive(false)}}><NavLink to="/programs" className="menu-link">Fitness Programs</NavLink></li>
                            <li className="menu-item" onClick={()=>{setActive(false)}}><NavLink to="/timetable" className="menu-link">Timetable</NavLink></li>
                            <li className="menu-item" onClick={()=>{setActive(false)}}><NavLink to="/pricing" className="menu-link">Pricing</NavLink></li>
                            <li className="menu-item" onClick={()=>{setActive(false)}}><NavLink to="/contact" className="menu-link">Contact</NavLink></li>

                        </ul>
                    </div>
                    <div className='menu'>
                        <ul className='menu-list'>
                            <li className="menu-item"><NavLink to="/" className="menu-link">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/programs" className="menu-link">Fitness-Programs</NavLink></li>
                            <li className="menu-item"><NavLink to="/timetable" className="menu-link">Timetable</NavLink></li>
                            <li className="menu-item"><NavLink to="/pricing" className="menu-link">Pricing</NavLink></li>
                            <li className="menu-item"><NavLink to="/contact" className="menu-link">Contact</NavLink></li>

                        </ul>
                    </div>
                    <div className="menu-toggle">
                        <span className={`material-symbols-rounded ${active? 'hide-menu-toggle' : ''} `}  onClick={()=>{setActive(true)}}>menu</span>
                        <span className={`material-symbols-rounded close ${active?'':'hide-menu-toggle'}`}  onClick={()=>{setActive(false)}}>close</span>
                    </div>
                </nav>

                <div className="description">
                <h1>{data.data.h1}</h1>
                <p>
                    {data.data.text}
                </p>

                <Link to='#' className='join'>Join Now</Link>
                <i className='bx bxs-chevrons-down bx-fade-down' style={{color:'#cececece',fontSize:'2rem',marginTop:"1rem",display:`${active?'none':''}`}}  ></i>
            </div>
            </div>
            
        </header>
   
  )
}



export default Hero