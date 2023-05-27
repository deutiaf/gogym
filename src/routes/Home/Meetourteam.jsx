import React from 'react'
import coach1 from '../../../public/img/coach1.jpg'
import coach2 from '../../../public/img/coach2.jpg'
import coach3 from '../../../public/img/coach3.jpg'

const Meetourteam = () => {
  return (
        <section className="meetourteam">
          <hr className='coach-line'/>  
            <h1>Our Coachs</h1>
            <div className="coachs">
                <div className="coach">
                    <img src={coach2} alt="coach2" />
                    <h3>Lenny Holland</h3>
                    <p>
                    Meet Coach Lenny, our nutrition and wellness coach. With personalized advice
                     and balanced meal plans, Coach Lenny will support you in your transformation
                      journey and help you adopt a healthy lifestyle.
                    </p>
                </div>
                <div className="coach">
                    <img src={coach1} alt="coach1" />
                    <h3>Henry Ndouman</h3>
                    <p>
                    Introducing Coach Henry, a specialist in functional training and muscle
                     strengthening. With customized programs and advanced techniques, Coach Henry
                      will help you build strength and agility.
                    </p>
                </div>
                <div className="coach">
                    <img src={coach3} alt="coach3" />
                    <h3>Rose Domus</h3>
                    <p>Meet Coach Rose Domus, our passionate fitness expert dedicated to improving
                         physical fitness. With a personalized approach, Coach Rose Domus will guide
                          you to achieve your fitness goals and transform your body.
                          </p>
                </div>
            </div>
        </section>
    )
}

export default Meetourteam