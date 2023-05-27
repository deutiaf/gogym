import React from 'react'
import service1 from '../../../public/img/service1.jpg'
import service2 from '../../../public/img/service2.jpg'

const Services = () => {
  return (
    <section className='services'>
        <h2>Our Programs</h2>
        <p>Discover our carefully curated programs tailored to meet your unique needs.
             Whether you're a passionate beginner or a seasoned expert, our programs are designed
              to help you achieve your goals. Explore our selection of professional training, personal
               development, creative, and more programs. Each program is expertly crafted with 
               high-quality resources, practical exercises, and personalized support to empower
                you on your journey to success. Join our dynamic and engaging community and start
                your path to success today!
            </p>
            <div className="service-wrapper">
            <div className="service1">
            <div className="service-left">
                <h3>01</h3>
                <h3> Boxing </h3>

                <p> 
                Unleash your inner champion with our dynamic "Boxing" program at GoGym. Led by passionate instructors, this exhilarating program enhances fitness, coordination, and confidence through boxing techniques. Experience a mix of boxing exercises, cardio, and strength training, improving agility, speed, and endurance. Get energized, burn calories, and strengthen your body. Join us for stress release, toning, or to learn boxing basics. Elevate your fitness, boost confidence, and discover the power of boxing at GoGym.  
                </p>
            </div>
        
            <div className="service-right">
                <div className="service-hero">
                    <img src={service1} alt="boxer" />
                </div>
            </div>
        </div>


        <div className="service2">
            <div className="service-left">
                <h3>02</h3>
                <h3>Yoga and Pilates </h3>

                <p> 
                Provide a space for members to improve flexibility, balance, and mind-body connection through yoga and Pilates classes. These disciplines promote relaxation, core strength, and improved posture.

                </p>
            </div>
        
            <div className="service-right">
                <div className="service-hero">
                    <img src={service2} alt="yoga" />
                </div>
            </div>
        </div>

            </div>
        
        
        <a href="programs">more...</a>
    </section>
  )
}

export default Services