import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Intro() {

    const navigate = useNavigate()

    return (
        <div className='home-main-img'>
            <div className='text'>
                <h1>One touch is all it takes</h1>
                <p>To zap away odor with PureVis™.</p>

                <button onClick={() => navigate('/shop')}>
                    Shop Now
                    <BsArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Intro