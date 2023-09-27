import React from 'react'
import as_seen_in_1 from '../../../assets/img/as-seen-in-1.webp'
import as_seen_in_2 from '../../../assets/img/as-seen-in-2.webp'
import as_seen_in_3 from '../../../assets/img/as-seen-in-3.webp'
import as_seen_in_4 from '../../../assets/img/as-seen-in-4.webp'
import as_seen_in_5 from '../../../assets/img/as-seen-in-5.webp'
import as_seen_in_6 from '../../../assets/img/as-seen-in-6.webp'
import as_seen_in_7 from '../../../assets/img/as-seen-in-7.webp'

function AsSeenIn() {
    return (
        <div className='as-seen-in'>
            <h1>As Seen In</h1>
            <div className='grid'>
                <div className='img-wrapper'>
                    <img src={as_seen_in_1} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_2} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_3} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_4} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_5} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_6} alt="" />
                </div>
                <div className='img-wrapper'>
                    <img src={as_seen_in_7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AsSeenIn