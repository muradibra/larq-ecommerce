import React from 'react'
import RefillSvg from '../../lib/RefillSvg'
import SmartSipSvg from '../../lib/SmartSipSvg'
import HydrationSupportSvg from '../../lib/HydrationSupportSvg'

function Features() {
    return (
        <div className="features-content">

            <div className='features-section'>

                <div className="features-img">
                    <RefillSvg />
                </div>

                <div className='features-section-text'>
                    <h3 className='features-section-title'>
                        Say yes to refills
                    </h3>

                    <span className="features-section-description">
                        Save money and make single-use water bottles a thing of the past.
                    </span>
                </div>

            </div>

            <div className='features-section'>

                <div className="features-img">
                    <SmartSipSvg />
                </div>

                <div className='features-section-text'>
                    <h3 className='features-section-title'>
                        A smart way to sip
                    </h3>

                    <span className="features-section-description">
                        PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
                    </span>
                </div>

            </div>

            <div className='features-section'>

                <div className="features-img">
                    <HydrationSupportSvg />
                </div>

                <div className='features-section-text'>
                    <h3 className='features-section-title'>
                        Hydrate with purpose
                    </h3>

                    <span className="features-section-description">
                        A portion of proceeds supports environmental and clean water projects worldwide.
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Features