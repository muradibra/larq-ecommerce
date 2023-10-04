import React from 'react'
import useScreenWidth from '../../../../hooks/useScreenWidth'
import FiltrationForAllSvg from '../../../lib/FiltrationForAllSvg'
import PureTastingWaterSvg from '../../../lib/PureTastingWaterSvg'
import ChemicalFreeSvg from '../../../lib/ChemicalFreeSvg'
import BrilliantlyClean from '../../../lib/BrilliantlyClean'

function PurevisTech() {
    const { screenSize } = useScreenWidth()

    return (
        <div className='purevis-tech'>
            {
                screenSize >= 960 ?
                    <div className='desktop'>
                        <div className='left'>
                            <div className='tech'>
                                <h1>PureVis™ technology</h1>
                                <p>Proprietary PureVis™ technology improves the quality of your water at home and on the go.</p>
                            </div>
                            <div className='chemical-free'>
                                <ChemicalFreeSvg />
                                <h2>Chemical free</h2>
                                <span>
                                    Non-toxic way to clean your water and bottle.
                                </span>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='center-img-wrapper'>
                                <img src="https://res.cloudinary.com/larq/image/upload/q_auto/f_auto,w_800/v1679301459/pitcher/PureVisBlackImage.png" alt="center" />
                            </div>
                        </div>
                        <div className='right'>
                            <BrilliantlyClean />
                            <h2>Brilliantly clean</h2>
                            <span>
                                PureVis™ activates at the touch or self-cleans in the background to help keep your water cleaner.
                            </span>
                        </div>
                    </div>
                    :
                    <div className="mobile">
                        <div className='tech'>
                            <h1>PureVis™ technology</h1>
                            <p>Proprietary PureVis™ technology improves the quality of your water at home and on the go.</p>
                        </div>

                        <div className='center-img-wrapper'>
                            <img src="https://res.cloudinary.com/larq/image/upload/q_auto/f_auto,w_800/v1679301459/pitcher/PureVisBlackImage.png" alt="center" />
                        </div>

                        <div className='chemical-free'>
                            <ChemicalFreeSvg />
                            <h2>Chemical free</h2>
                            <span>
                                Non-toxic way to clean your water and bottle.
                            </span>
                        </div>

                        <div className='right'>
                            <BrilliantlyClean />
                            <h2>Brilliantly clean</h2>
                            <span>
                                PureVis™ activates at the touch or self-cleans in the background to help keep your water cleaner.
                            </span>
                        </div>

                    </div>
            }
        </div>
    )
}

export default PurevisTech