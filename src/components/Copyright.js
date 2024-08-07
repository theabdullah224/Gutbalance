import React from 'react'
import './copyright.css'
function Copyright() {
  return (
    <div className='copyright'>
        <p className='cpp text-lg'>© 2024 Relume. All rights reserved.</p>
        <div>
            <a  className='canchor text-lg' href="/privacypolicy">Privacy Policy</a>
            <a className='canchor text-lg' href="/termsofservices">Terms of Service</a>
            <a  className='canchor text-lg' href="/cookiesetting">Cookies Settings</a>
        </div>
    </div>
  )
}

export default Copyright
