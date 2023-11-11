import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tech_swiper_img1 from './../../../assets/img/tech-swiper-img1.png'
import tech_swiper_img2 from './../../../assets/img/tech-swiper-img2.png'
import tech_swiper_img3 from './../../../assets/img/tech-swiper-img3.webp'
import BrilliantlyClean from '../../lib/BrilliantlyClean'
import SelfCleaning from '../../lib/SelfCleaning'
import PreventBacteria from '../../lib/PreventBacteria'
import PureTastingWaterSvg from '../../lib/PureTastingWaterSvg'
import LongLastingFIlters from '../../lib/LongLastingFIlters'
import FilterTracking from '../../lib/FilterTracking'
import HydrationTracking from '../../lib/HydrationTracking'

function TechSwiper({ scrollToNanoZero, scrollToPurevis, scrollToHydration }) {
    return (
        <div className='slider-wrapper'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                initialSlide={1}
                centeredSlides={window.innerWidth >= 724}
                breakpoints={{
                    724: {
                        slidesPerView: 1.3
                    },
                    900: {
                        slidesPerView: 1.8  
                    },
                    1000: {
                        slidesPerView: 2
                    },
                    1150: {
                        slidesPerView: 2.5
                    },
                    1400: {
                        slidesPerView: 2.8
                    }
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner">
                        <div className="img-wrapper card-media">
                            <img src={tech_swiper_img1} alt="PureVis" />
                        </div>
                        <div className='card-body'>
                            <h2 className='card-title'>PureVis™</h2>
                            <div className="card-content">
                                <div className="card-content-inner">
                                    <div className="card-text">
                                        Proprietary PureVis™ technology improves the quality of your water at home and on the go.
                                    </div>
                                    <div className="card-features">
                                        <div className='icon'>
                                            <BrilliantlyClean />
                                            <span>Brilliantly clean water</span>
                                        </div>
                                        <div className='icon'>
                                            <SelfCleaning />
                                            <span>Self-cleaning</span>
                                        </div>
                                        <div className='icon'>
                                            <PreventBacteria />
                                            <span>Prevents bio-contaminant growth</span>
                                        </div>

                                    </div>
                                    <div className="card-actions">
                                        <button onClick={scrollToPurevis}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-inner">
                        <div className="img-wrapper card-media">
                            <img src={tech_swiper_img2} alt="PureVis" />
                        </div>
                        <div className='card-body'>
                            <h2 className='card-title'>Nano Zero</h2>
                            <div className="card-content">
                                <div className="card-content-inner">
                                    <div className="card-text">
                                        A new age of filtration is here. Enjoy crisp drinking water at home and on the go.
                                    </div>
                                    <div className="card-features">
                                        <div className='icon'>
                                            <PureTastingWaterSvg />
                                            <span>Pure-tasting water</span>
                                        </div>
                                        <div className='icon'>
                                            <PreventBacteria />
                                            <span>Eliminate contaminants</span>
                                        </div>
                                        <div className='icon'>
                                            <LongLastingFIlters />
                                            <span>Long-lasting filters</span>
                                        </div>

                                    </div>
                                    <div className="card-actions">
                                        <button onClick={scrollToNanoZero}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-inner">
                        <div className="img-wrapper card-media">
                            <img src={tech_swiper_img3} alt="PureVis" />
                        </div>
                        <div className='card-body'>
                            <h2 className='card-title'>Smart Hydration</h2>
                            <div className="card-content">
                                <div className="card-content-inner">
                                    <div className="card-text">
                                        Track your household water consumption, filter life, and more.
                                    </div>
                                    <div className="card-features">
                                        <div className='icon'>
                                            <FilterTracking />
                                            <span>Intelligent filter tracking</span>
                                        </div>
                                        <div className='icon'>
                                            <HydrationTracking />
                                            <span>Hydration tracking</span>
                                        </div>
                                        <div className='icon'>
                                            <HydrationTracking />
                                            <span>Carbon footprint tracking</span>
                                        </div>

                                    </div>
                                    <div className="card-actions">
                                        <button onClick={scrollToHydration}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default TechSwiper