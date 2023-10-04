import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ApastropheSvg from '../../../lib/ApastropheSvg'
import { Navigation, Scrollbar } from 'swiper/modules'
import useScreenWidth from '../../../../hooks/useScreenWidth'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function QuotesSwiper() {
    const {screenSize} = useScreenWidth()

    return (
        <div className='quotes-swiper'>
            <Swiper
                modules={[ Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{  // Use Swiper's built-in navigation
                    prevEl: '.swiper-btn-prev',
                    nextEl: '.swiper-btn-next',
                }}
            >
                <SwiperSlide>
                    <div className='slide-inner'>
                        <div className="quote-body">
                            <ApastropheSvg color="#F3756D" />
                            <div className="quote-text">
                                A huge plus for people who want a sustainable water bottle alternative that doesn't require constant scrubbing to keep water tasting great.
                            </div>
                        </div>
                        <div className="quote-author">
                            TIME
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner">
                        <div className="quote-body">
                            <ApastropheSvg color="#F3756D   " />
                            <div className="quote-text">
                                Cut down trips to the store and the amount of plastic you are using with this self-cleaning water bottle that purifies water by eliminating up to 99.99% of E.coli.
                            </div>
                        </div>
                        <div className="quote-author">
                            CNN UNDERSCORED
                        </div>
                    </div>
                </SwiperSlide>

                {
                    screenSize >= 960 &&
                    <div className='quotes-swiper-buttons'>
                        <div className='swiper-btn-prev'>
                            <button>
                                <BsArrowLeft />
                            </button>
                        </div>
                        <div className='swiper-btn-next'>
                            <button>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                }
            </Swiper>
        </div>
    )
}

export default QuotesSwiper