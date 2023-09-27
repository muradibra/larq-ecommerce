import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Rating() {
    return (
        <div className='rating'>
            <div className='reviews'>
                <h3 className='rating-title'>Brilliant</h3>
                <div className='rating-stars'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <span className='rating-total'>
                    <Link>based on 7366 reviews</Link>
                </span>
            </div>

            <div className='all-reviews-btn'>
                <button>
                    All reviews
                    <BsArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Rating