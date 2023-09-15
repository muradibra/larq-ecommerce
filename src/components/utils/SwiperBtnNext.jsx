import React from 'react'
import { useSwiper } from 'swiper/react'
import { BsArrowRight } from 'react-icons/bs'


function SwiperBtnNext() {
    const swiper = useSwiper()
    // const isOnLastSlide = swiper?.isEnd || false

    return (
        <div
            className='swiper-btn-next'
            // style={{
            //     position: "relative",
            //     // display: isOnLastSlide ? "none": "block"
            // }}
        >
            <button
                style={{
                    border: "1px solid #5a5e60",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    padding: "5px",
                    fontSize: "18px",
                    width: "40px",
                    height: "40px",
                    // position: "absolute",
                    // zIndex: "999",
                    // right: "0",
                    // bottom: "200px"
                }}
                onClick={() => swiper.slideNext()}
            >
                <BsArrowRight />
            </button>
        </div>
    )
}

export default SwiperBtnNext