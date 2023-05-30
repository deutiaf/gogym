import React from 'react'
import Download from '../Home/Download'
import { Link } from 'react-router-dom'
import '../../layouts/Footer/footer.scss'
import './contact.scss'
import { initMap } from '../../services/googleMap'

const Contact = () => {
  return (
    <section className='contact ' onLoad={initMap} >
      <div className='contact-wrapper'>
        <div className='contact-details foot'>
          <div className="location">
                  <h4 className='logo-hero'>GoGym</h4>
                  <p>location : <br /> 123 Rue Maple,<br /> Ville de Québec,<br /> Province de Québec,<br /> Code postal : G1X 2Y3,Canada.</p>
                  <p>phone 1 : (514) 555-1234</p>
                  <p>phone 2 : (416) 555-5678</p>
                  <p>Mail : <a href="mailto:GoGym@gmail.com">GoGym@gmail.com</a> </p>
                  <p><Link to='#'>Contact Us</Link></p>

              </div>
              <div className="social">
                <h4>Our Socials</h4>
                <a href=""><i className='bx bxl-facebook-circle'></i></a>
                <a href=""><i className='bx bxl-instagram' ></i></a>
                <a href=""><i className='bx bxl-twitter' ></i></a>
                <a href=""><i className='bx bxl-snapchat' ></i></a>
            </div>
        </div>
        <div  id="map" style={{width: "50%", height: "300px"}}></div>


      </div>
      <Download/>
    </section>
    )
}

export default Contact