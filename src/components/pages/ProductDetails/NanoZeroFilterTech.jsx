import React from 'react'
import FiltrationForAllSvg from '../../lib/FiltrationForAllSvg'
import useScreenWidth from '../../../hooks/useScreenWidth'
import PureTastingWaterSvg from '../../lib/PureTastingWaterSvg'

function NanoZeroFilterTech() {
    const { screenSize } = useScreenWidth()

    return (
        <div className='filter-tech'>

            {
                screenSize >= 960 ?
                    <div className='desktop'>
                        <div className='left'>
                            <div className='nano-zero-tech'>
                                <h1>Nano Zero filter technology</h1>
                                <span>A new age of filtration is here. Enjoy crisp drinking water at home.</span>
                            </div>
                            <div className='filtration-for-all'>
                                <FiltrationForAllSvg />
                                <h2>Filtration for all</h2>
                                <span>
                                    Our filters are independently tested to NSF/ANSI 42, 53, and 401 standards against a wide range of harsh contaminants.
                                </span>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='center-img-wrapper'>
                                <img src="https://res.cloudinary.com/larq/image/upload/v1679342098/q_auto/pitcher/pitcher-larq-product-page-nano-section.png" alt="center" />
                            </div>
                        </div>
                        <div className='right'>
                            <PureTastingWaterSvg />
                            <h2>Pure-tasting water</h2>
                            <span>
                                Pure-tasting water provides better-tasting coffee, tea, smoothies—everything—for a healthier, more sustainable lifestyle. Don’t settle for anything less.
                            </span>
                        </div>
                    </div>
                    :
                    <div className="mobile">
                        <div className='nano-zero-tech'>
                            <h1>Nano Zero filter technology</h1>
                            <span>A new age of filtration is here. Enjoy crisp drinking water at home.</span>
                        </div>

                        <div className='center-img-wrapper'>
                            <img src="https://res.cloudinary.com/larq/image/upload/v1679342098/q_auto/pitcher/pitcher-larq-product-page-nano-section.png" alt="center" />
                        </div>

                        <div className='filtration-for-all'>
                            <FiltrationForAllSvg />
                            <h2>Filtration for all</h2>
                            <span>
                                Our filters are independently tested to NSF/ANSI 42, 53, and 401 standards against a wide range of harsh contaminants.
                            </span>
                        </div>

                        <div className='right'>
                            <PureTastingWaterSvg />
                            <h2>Pure-tasting water</h2>
                            <span>
                                Pure-tasting water provides better-tasting coffee, tea, smoothies—everything—for a healthier, more sustainable lifestyle. Don’t settle for anything less.
                            </span>
                        </div>

                    </div>
            }
        </div>
    )
}

export default NanoZeroFilterTech