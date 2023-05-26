import './footer.scss'
import { Link } from 'react-router-dom'
import applestore from '../../../public/img/applestore.PNG'
import playstore from '../../../public/img/playstore.PNG'


import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="news-letter">
            <h3>Newsletter</h3>
            <p>Stay up to date with our latest news and product</p>
            <form action="" method="post">
                <input type="email" name="" id="" placeholder='Your Email Address'/>
                <button type="submit">SUBSCRIBE</button>
            </form>
        </div>
        <div className="footer-description">
            <div className="location">
                <h4 className='logo-hero'>GoGym</h4>
                <p>location : <br /> 123 Rue Maple,<br /> Ville de Québec,<br /> Province de Québec,<br /> Code postal : G1X 2Y3,Canada.</p>
                <p>phone 1 : (514) 555-1234</p>
                <p>phone 2 : (416) 555-5678</p>
                <p>Mail : <a href="mailto:GoGym@gmail.com">GoGym@gmail.com</a> </p>
                <p><Link to='#'>Contact Us</Link></p>

            </div>

            <div className="menu-footer">
                        <h4>Menu</h4>
                        <ul className='menu-list'>
                            <li className="menu-item"><Link to="#" className="menu-link">Home</Link></li>
                            <li className="menu-item"><Link to="#" className="menu-link">Fitness-Programs</Link></li>
                            <li className="menu-item"><Link to="#" className="menu-link">Timetable</Link></li>
                            <li className="menu-item"><Link to="#" className="menu-link">Price</Link></li>
                            <li className="menu-item"><Link to="#" className="menu-link">Contact</Link></li>

                        </ul>
            </div>

            <div className="download">
                <h4>Get The App</h4>
                <div className="app-features">
                    <p>Features : </p>
                    <ul>
                        <li>Community and Social Networking</li>
                        <li>Workout Tracking</li>
                        <li>className Reservations</li>
                        <li>Nutrition Tracking</li>
                        <li>Real-time Schedule Access</li>
                    </ul>
                </div>
                <div className="appstore">
                    <h4>Download</h4>
                    <div className="stores">
                        <a href=""><img src={applestore} alt="" /></a>
                        <a href=""><img src={playstore} alt="" /></a>
                    </div>
                </div>
            </div>

            <div className="social">
                <h4>Our Socials</h4>
                <a href=""><i className='bx bxl-facebook-circle'></i></a>
                <a href=""><i className='bx bxl-instagram' ></i></a>
                <a href=""><i className='bx bxl-twitter' ></i></a>
                <a href=""><i className='bx bxl-snapchat' ></i></a>
            </div>
        </div>

        <div className="copyright">© 2023 GoGym. All rights reserved.

</div>
    </footer>
  )
}

export default Footer