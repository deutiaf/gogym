import React from 'react'
import applestore from '../../../public/img/applestore.png'
import playstore from '../../../public/img/playstore.png'
import phone from '../../../public/img/phone.png'


const Download = () => {
  return (
    <section className="download">
        <h1>Get Our App</h1>
        <p>Achieve your fitness goals with our innovative mobile app. Get personalized
             workout programs, live training sessions, progress tracking, and more. Download
              now and take your fitness journey to the next level
        </p>
        <div className="features">
            <div className="feat">
                <h3>Features : </h3>
                <ul>
                        <li>- Community and Social Networking</li>
                        <li>- Workout Tracking</li>
                        <li>- className Reservations</li>
                        <li>- Nutrition Tracking</li>
                        <li>- Real-time Schedule Access</li>
                </ul>

                 <div className="appstore">
                    <h4>Download</h4>
                    <div className="stores">
                        <a href=""><img src={applestore} alt="" /></a>
                        <a href=""><img src={playstore} alt="" /></a>
                    </div>
                </div>                
            </div>
            <img src={phone} alt="" />
        </div>
    </section>
    )
}

export default Download