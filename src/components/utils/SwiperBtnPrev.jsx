import React from 'react'
import { useSwiper } from 'swiper/react'
import { BsArrowLeft } from 'react-icons/bs'


function SwiperBtnPrev() {
    const swiper = useSwiper()
    // const isOnFirstSlide = swiper?.isBeginning || false; // Check if on the first slide

    return (
        <div
            className='swiper-btn-prev'
            // style={{
            //     display: isOnFirstSlide ? "none" : "block"
            // }}
        >
            <button
                style={{
                    border: "1px solid #5a5e60",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    fontSize: "18px",
                    padding: "5px",
                    width: "40px",
                    height: "40px",
                }}
                // disabled={swiper.isBeginning}
                onClick={() => swiper.slidePrev()}
            >
                <BsArrowLeft />
            </button>
        </div>
    )
}

export default SwiperBtnPrev