import React from 'react'
import { BsChevronDoubleRight } from 'react-icons/bs'
import amazon_pay_icon from '../../assets/img/amazon3.png'
import amazon_transparent from '../../assets/img/amazon-icon-transparent.png'
{/* <img src="https://m.media-amazon.com/images/G/01/AmazonPay/Maxo/PWA_dark-en_US._CB620220074_.svg" alt='Amazon' /> */ }

function AmazonIcon() {
    return (
        <div className='icon amazon-icon-wrapper'>
            <div className="amazon-icon">
                <img src={amazon_transparent} alt="Amazon" />

            </div>
            {/* <div className='amazon-icon'>
                <img src={amazon_transparent} alt="Amazon" />
            </div>

            <div className='chevron-icon'>
                <BsChevronDoubleRight />
            </div> */}
        </div>
    )
}

export default AmazonIcon