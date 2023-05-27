import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Price = () => {

    const [basic, setBasic] = useState(true)

    const style1={
        backgroundColor:basic?'hsla(0,0%,10%)':'',
        color:basic?'hsla(0,0%,100%)':''
    }
    const style2={
        backgroundColor:!basic?'hsla(0,0%,10%)':'',
        color:!basic?'hsla(0,0%,100%)':''
    }
  return (
    <section className="pricing">
        <h2>Pricing</h2>
        <div className='button'><button onClick={()=>{setBasic(true)}} style={style1}>Basic</button> <button style={style2} onClick={()=>{setBasic(false)}}>Premium</button> </div>
        <div className="pricing-wrapper">

            <div className="card1">                
                <div className={`detail1 ${basic ?'show-basic':''}`}>
                    <h3>Gym Membership</h3>
                    <h4>Basic Menbership</h4> 

                    <span>(Access to gym facilities only)</span>
                    <ul>
                        <li>Monthly: <span>$50</span></li>
                        <li>Quarterly: <span>$130</span> (save <span>$20)</span></li>
                        <li>Annual: <span>480$</span> (save <span>$120)</span></li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Unlimited gym access during operating hours.</li>
                        <li>Complimentary fitness assessment and personalized workout plan.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

                <div className={`detail2 ${!basic ?'show-basic':''}`}>
                    <h3>Gym Membership</h3>
                    <h4>Premium Membership</h4>

                    <span>(Access to gym facilities, group classes, and additional perks)</span>
                    <ul>
                        <li>Monthly: <span>$80</span></li>
                        <li>Quarterly: <span>$210</span> (save <span>$30</span>)</li>
                        <li>Annual: <span>780$</span> (save <span>$120</span>)</li>
                    </ul>
                    <h4>Benefits:</h4>
                    <ul>
                        <li>Unlimited gym access, including peak hours.</li>
                        <li>Access to all group classes.</li>
                        <li>Complimentary towel service.</li>
                        <li>Priority booking for special events and workshops.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

            </div>


            <div className="card1 card2">                
                <div className={`detail1 ${basic ?'show-basic':''}`}>
                    <h3>Student Memberships</h3>
                    <h4>Basic Membership</h4> 

                    <span>(Access to gym facilities only)</span>
                    <ul>
                        <li>Monthly: <span>$30</span></li>
                        <li>Quarterly: <span>$100</span> (save <span>$20)</span></li>
                        <li>Annual: <span>420$</span> (save <span>$120)</span></li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Unlimited gym access during operating hours.</li>
                        <li>Complimentary fitness assessment and personalized workout plan.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

                <div className={`detail2 ${basic ?'':'show-basic'}`}>
                    <h3>Student Memberships</h3>
                    <h4>Premium Membership</h4>

                    <span>(Access to gym facilities, group classes, and additional perks)</span>
                    <ul>
                        <li>Monthly: <span>$50</span></li>
                        <li>Quarterly: <span>$150</span> (save <span>$30</span>)</li>
                        <li>Annual: <span>650$</span> (save <span>$120</span>)</li>
                    </ul>
                    <h4>Benefits:</h4>
                    <ul>
                        <li>Unlimited gym access, including peak hours.</li>
                        <li>Access to all group classes.</li>
                        <li>Complimentary towel service.</li>
                        <li>Priority booking for special events and workshops.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

            </div>


            <div className="card1 card3">                
                <div className={`detail1 ${basic ?'show-basic':''}`}>
                    <h3>Family Memberships</h3>
                    <h4>Basic Membership</h4> 

                    <span>(Access to gym facilities only)</span>
                    <ul>
                        <li>Monthly: <span>$90</span></li>
                        <li>Quarterly: <span>$300</span> (save <span>$25)</span></li>
                        <li>Annual: <span>1020$</span> (save <span>$100)</span></li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Access to gym facilities for all family members.</li>
                        <li>Unlimited gym access during operating hours.</li>
                        <li>Complimentary fitness assessment and personalized workout plan.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

                <div className={`detail2 ${basic ?'':'show-basic'}`}>
                    <h3>Family Memberships</h3>
                    <h4>Premium Membership</h4>

                    <span>(Access to gym facilities, group classes, and additional perks)</span>
                    <ul>
                        
                        <li>Monthly: <span>$140</span></li>
                        <li>Quarterly: <span>$450</span> (save <span>$40</span>)</li>
                        <li>Annual: <span>1350$</span> (save <span>$130</span>)</li>
                    </ul>
                    <h4>Benefits:</h4>
                    <ul>
                    <li>Family-friendly classes and activities.</li>
                        <li>Access to gym facilities for all family members.</li>
                        <li>Unlimited gym access, including peak hours.</li>
                        <li>Access to all group classes.</li>
                        <li>Complimentary towel service.</li>
                        <li>Priority booking for special events and workshops.</li>
                    </ul>
                    <Link to='/subscribe' className='join'>subscribe</Link>

                </div>

            </div>
        </div>
<Link to="/pricing">See More...</Link>
    </section>
    )
}

export default Price