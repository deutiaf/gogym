import React, { useState,useEffect } from 'react'
import { NavLink,Link } from 'react-router-dom'
import './hero.scss'
import Carroussel from './Carroussel'

const Hero = () => {

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
            <Carroussel/>
            <div className="hero-wrapper">
                <nav>
                    <div className='logo-hero'>GoGym</div>
                    <div className={`menu-mobile ${active?'menu-slide': ''}`}>
                    <ul className='menu-list-mobile'>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Fitness Programs</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Timetable</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Price</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Contact</NavLink></li>

                        </ul>
                    </div>
                    <div className='menu'>
                        <ul className='menu-list'>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Fitness-Programs</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Timetable</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Price</NavLink></li>
                            <li className="menu-item"><NavLink to="#" className="menu-link">Contact</NavLink></li>

                        </ul>
                    </div>
                    <div className="menu-toggle">
                        <span className={`material-symbols-rounded ${active? 'hide-menu-toggle' : ''} `}  onClick={()=>{setActive(true)}}>menu</span>
                        <span className={`material-symbols-rounded close ${active?'':'hide-menu-toggle'}`}  onClick={()=>{setActive(false)}}>close</span>
                    </div>
                </nav>

                <div className="description">
                <h1>Unleash Your Inner Champion</h1>
                <p>
                    Here, you will find inspiration to live an active and healthy lifestyle. Whether you're a seasoned
                    athlete or a passionate enthusiast, we have everything you need to achieve your goals and push your
                    limits.
                </p>

                <Link to='#' className='join'>Join Now</Link>
            </div>
            </div>
            
        </header>
   
  )
}

export default Hero