import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { PiWarningCircleFill } from 'react-icons/pi'

function PrimaryInfo({ product }) {
    return (
        <div className='primary-info'>
            <div className="product-title">
                <h1>{product.title}</h1>
            </div>

            <div className='product-price'>
                <span>${product.price}</span>
                <span className='by-credit'>
                    <span>Or 4 interest-free installments of ${product.discounted_price ? product.discounted_price / 4 : product.price / 4}</span>
                    <PiWarningCircleFill />
                </span>
            </div>

            <div className='reviews'>
                {
                    product.stars > 4 ?
                    <span>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </span>
                    : ""
                }
                <span>{product.review_count}</span>
            </div>
        </div>
    )
}

export default PrimaryInfo