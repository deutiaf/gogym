import React from 'react'

const Whyus = () => {
  return (
    <section className='whyus'>
        <div className="filter"></div>
        <h2>Why Us</h2>
        <div className="whyus-wrapper">
            <ul>
                <li>
                    <div className="icon"><span class="material-symbols-rounded">av_timer</span></div>
                    <div className="whyus-content">
                        <h3>Time Flexibility</h3>
                        <p>We understand that your schedule may be hectic, which is why GoGym offers
                             flexible workout times. Our extended opening hours accommodate various 
                             schedules, allowing you to fit your workouts into your busy lifestyle.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="icon"><span class="material-symbols-rounded">fitness_center</span></div>
                    <div className="whyus-content">
                        <h3>State-of-the-Art Facilities</h3>
                        <p>
                        Experience a workout like no other with our cutting-edge equipment and 
                        modern facilities designed to elevate your fitness journey.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="icon"><span class="material-symbols-rounded">restaurant_menu</span></div>
                    <div className="whyus-content">
                        <h3>Nutritional Guidance and Meal Planning</h3>
                        <p>
                        Receive expert advice from our nutrition specialists who will assist you in
                         creating personalized meal plans that align with your fitness goals, ensuring
                          a holistic approach to your well-being.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="icon"><span class="material-symbols-rounded">child_care</span></div>
                    <div className="whyus-content">
                        <h3>Childcare Services</h3>
                        <p>
                          We understand the challenges of balancing fitness and childcare
                           responsibilities. That's why we offer convenient on-site childcare
                            services, allowing you to focus on your workout with peace of mind.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="icon"><span class="material-symbols-rounded">sports</span></div>
                    <div className="whyus-content">
                        <h3>Expert Personal Trainers</h3>
                       <p>
                           Our team of highly skilled and certified personal trainers are dedicated to helping
                            you achieve your fitness goals. Benefit from their expertise, personalized guidance, 
                            and ongoing support throughout your fitness journey.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="icon"><span class="material-symbols-rounded">groups</span></div>
                    <div className="whyus-content">
                        <h3>Community Atmosphere</h3>
                       <p>
                       Join a supportive and motivating community of like-minded individuals who 
                       inspire each other to reach new heights in their fitness journeys.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
    )
}

export default Whyus