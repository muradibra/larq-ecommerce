import React from 'react'
import pithcer_video from '../../../../assets/videos/LARQ-Pitcher_Filter_View.webm'


function LongLastingFilters() {
    return (
        <div className='long-lasting-filters'>


            <div className='video-wrapper'>
                <video width="960" muted loop autoPlay playsInline aria-label="Animated video of showing how long lasting Larq filters are inserted and used" title="Long-lasting filters" className="cardBody_videoEl">
                    <source src={pithcer_video} />
                </video>
            </div>
            <div className='text'>
                <div className="title">
                    <h2>Long-lasting filters</h2>
                </div>
                <div className="description">
                    <p>LARQ Filters last up to 50% longer than leading brands, filtering 60 gallons of water before the next replacement.</p>
                    <p>One LARQ Filter replaces more than 450+ standard single-use bottles. Better for the planet and your wallet.</p>
                </div>
            </div>



        </div>
    )
}

export default LongLastingFilters