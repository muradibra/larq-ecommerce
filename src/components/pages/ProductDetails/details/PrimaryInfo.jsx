import React from 'react'
import { PiWarningCircleFill } from 'react-icons/pi'

function PrimaryInfo({product}) {
    return (
        <div className='primary-info'>
            <div className="product-title">
                <h1>{product.title}</h1>
            </div>

            <div className='product-price'>
                <span>${product.price}</span>
                <span className='by-credit'>
                    <span className=''>{product.payment_by_credit}</span>
                    <PiWarningCircleFill />
                </span>
            </div>

            <div className='reviews'>
                {product.stars} <span>{product.review_count}</span>
            </div>
        </div>
    )
}

export default PrimaryInfo