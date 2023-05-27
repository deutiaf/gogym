import React from 'react'
import story1 from '../../../public/img/story1.jpg'

const Story = () => {
  return (
    <section className='story'>
        <h2> Empowering Lives through Fitness and Beyond</h2>
        <div className="story-wrapper">
        <div className="story-left">
        <p> From its humble beginnings, Gogym has undergone a remarkable evolution, 
            ransitioning from a simple gym to a transformative hub of accomplishment.
             Founded by a fitness enthusiast, Gogym was established with a bold vision: to provide
              the community with a space where individuals could push their limits and achieve their 
              fitness goals. Over the years, Gogym has earned the trust and admiration of its members 
              through its unwavering commitment to excellence, unwavering support, and nurturing
               community. Today, Gogym has become more than just a gym; it is a sanctuary where dreams
                come to life, bodies transform, and minds flourish. Whether you seek a fresh start or
                 a personal challenge, Gogym offers you the opportunity to become the best version 
                 of yourself. Join us and be part of this incredible story of evolution, perseverance, 
                 and success at Gogym.
        </p>
        </div>
        
        <div className="story-right">
            <div className="story-hero">
                <img src={story1} alt="athlete" />
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default Story