import React from 'react'
import traditional_vs_larq_pitcher from '../../../../assets/videos/Traditional_vs_LARQ_Pitcher.mp4' 

function TraditionalVsLarq() {
    return (
        <div className='traditional-vs-larq'>
            <h1>Traditional vs LARQ Pitcher</h1>
            <div className='underline'></div>

            <div className='video-player'>
                <video controls>
                    <source src={traditional_vs_larq_pitcher} />
                    {/* <source src='https://www.youtube.com/watch?v=LmhKUsAjkXM&ab_channel=LARQ' type='video/mp4' /> */}
                </video>
            </div>

        </div>
    )
}

export default TraditionalVsLarq