import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function OurMission() {
    return (
        <div className='our-mission'>
            <div className='bg-img-wrapper'>
                <div className="text">

                    <div className="title">Our mission</div>
                    <div className="headline">
                        <h2>Drink brilliantly</h2>
                    </div>
                    <div className="description">
                        We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.
                    </div>
                    <div className="learn-more">
                        <button>
                            Learn more
                            <BsArrowRight />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurMission