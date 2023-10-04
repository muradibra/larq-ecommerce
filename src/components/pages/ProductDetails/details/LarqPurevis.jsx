import React from 'react'
import useScreenWidth from '../../../../hooks/useScreenWidth'
import FiltrationForAllSvg from '../../../lib/FiltrationForAllSvg'
import PureTastingWaterSvg from '../../../lib/PureTastingWaterSvg'

function LarqPurevis() {
    const {screenSize} = useScreenWidth()

    return (
        <div className='larq-bottle-purevis'>
            {
                screenSize >= 960 ?
                    <div className='desktop'>
                        <div className='left'>
                            <div className='tech'>
                                <h1>LARQ Bottle PureVis™</h1>
                            </div>
                            <div className='vacuum-insulation'>
                                <FiltrationForAllSvg />
                                <h2>Filtration for all</h2>
                                <span>
                                    Keeps your water hot for 12 hours and cold for 24 hours.
                                </span>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='center-img-wrapper'>
                                <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,h_1400/v1651000144/assets/spa/v2/content/explore/larq-bottle-purevis/insulated_mb_desktop.png" alt="center" />
                            </div>
                        </div>
                        <div className='right'>
                            <PureTastingWaterSvg />
                            <h2>PureVis™ technology</h2>
                            <span>
                                Proprietary PureVis™ technology eliminates up to 99% of bio-contaminants such as E.coli from your water and bottle.
                            </span>
                        </div>
                    </div>
                    :
                    <div className="mobile">
                        <div className='tech'>
                            <h1>LARQ Bottle PureVis™</h1>
                        </div>

                        <div className='center-img-wrapper'>
                            <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,h_1400/v1651000144/assets/spa/v2/content/explore/larq-bottle-purevis/insulated_mb_desktop.png" alt="center" />
                        </div>

                        <div className='vacuum-insulation'>
                            <FiltrationForAllSvg />
                            <h2>Double-wall vacuum insulation</h2>
                            <span>
                                Keeps your water hot for 12 hours and cold for 24 hours.
                            </span>
                        </div>

                        <div className='right'>
                            <PureTastingWaterSvg />
                            <h2>PureVis™ technology</h2>
                            <span>
                                Proprietary PureVis™ technology eliminates up to 99% of bio-contaminants such as E.coli from your water and bottle.
                            </span>
                        </div>

                    </div>
            }
        </div>
    )
}

export default LarqPurevis