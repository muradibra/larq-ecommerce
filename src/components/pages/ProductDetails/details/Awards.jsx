import React from 'react'
import red_dot_award from '../../../../assets/img/red_dot_award.svg'
import dezeen_2019_award from '../../../../assets/img/dezeen_2019_award.png'
import ces_inovation_award from '../../../../assets/img/ces_inovation_award.svg'

function Awards() {
    return (
        <div className='awards'>
            <div className="text">
                <h1>Awards</h1>
                <p>Brilliantly clean water from an award-winning bottle. That’s LARQ.</p>
            </div>

            <div className="award-cards">
                <div className='award-card'>
                    <img src={red_dot_award} alt="" />
                </div>
                <div className='award-card'>
                    <img src={dezeen_2019_award} alt="" />
                </div>
                <div className='award-card'>
                    <img src={ces_inovation_award} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Awards