import React from 'react'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import review_strategist from '../../../assets/img/review-strategist.png'
import review_oprah from '../../../assets/img/review-oprah.png'
import review_digTrends from '../../../assets/img/review-dig-trends.png'
import review_bestProd from '../../../assets/img/review-best-prod.png'

function ReviewSwiper() {
    return (
        <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={45}
            slidesPerView={1.3}
            breakpoints={{
                800: {
                    slidesPerView: 2
                },
                1190: {
                    slidesPerView: 3
                },
                1440: {
                    slidesPerView: 4,
                    width: 1100
                }
            }}
        >
            {/* <SwiperBtnPrev /> */}
            <SwiperSlide>
                <div className='slide-inner'>
                    <p>What’s the Next Status Water Bottle? Three of our experts named the LARQ bottle as one to watch.</p>
                    <div className='reviewer'>
                        <img src={review_strategist} alt="Review" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='slide-inner'>
                    <p>The result is that every glass of water tastes crisp and fresh.</p>
                    <div className='reviewer'>
                        <img src={review_oprah} alt="Review" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='slide-inner'>
                    <p>LARQ's PureVis™ water pitcher erased my fears about drinking water from the tap.</p>
                    <div className='reviewer'>
                        <img src={review_digTrends} alt="Review" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='slide-inner'>
                    <p>You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis™.</p>
                    <div className='reviewer'>
                        <img src={review_bestProd} alt="Review" />
                    </div>
                </div>
            </SwiperSlide>

            {/* <SwiperBtnNext /> */}
        </Swiper>
    )
}

export default ReviewSwiper