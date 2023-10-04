import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function ProductImagesSwiper({product}) {
    return (
        <div className='product-images-swiper'>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={25}
                slidesPerView={1}
            >
                {
                    product.skus.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='img-wrapper'>
                                <img src={item.img_url} alt="img" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ProductImagesSwiper