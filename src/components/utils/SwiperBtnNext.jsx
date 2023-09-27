import React from 'react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsArrowRight } from 'react-icons/bs';

function SwiperBtnNext() {
    const swiper = useSwiper();
    // const isOnLastSlide = swiper?.isEnd || false; // Check if on the last slide

    return (
        <div
            className='swiper-btn-next'
            // style={{
            //     display: isOnLastSlide ? 'none' : 'block',
            // }}
        >
            <button
                style={{
                    border: '1px solid #5a5e60',
                    backgroundColor: '#fff',
                    borderRadius: '50px',
                    padding: '5px',
                    fontSize: '18px',
                    width: '40px',
                    height: '40px',
                }}
                onClick={() => swiper.slideNext()}
            >
                <BsArrowRight />
            </button>
        </div>
    );
}

export default SwiperBtnNext;