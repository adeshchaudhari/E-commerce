import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Mail</h1>
        <p>Subscribe To Our Newsletter to Stay Updated</p>

        <div>
            <input type='email' placeholder='Your Email-Id'/>
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default Newsletter