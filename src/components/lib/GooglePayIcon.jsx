import React from 'react'
import google_pay_icon from '../../assets/img/google.svg'

function GooglePayIcon() {
    return (
        <div className='icon google-pay-icon'>
            <div className='icon-wrapper'>
                <img src={google_pay_icon} alt="Google Pay" />
            </div>
            <span>Pay</span>
        </div>
    )
}

export default GooglePayIcon