import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../../../config';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../../features/shopItemSlice/shopItemSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function ProductDetails() {
  const { slug } = useParams()
  const { item } = useSelector(store => store.shopItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductDetails(slug))
  }, [])

  // console.log(state)

  return (
    <div className='product-details' >
      {
        item.map(product => (
          <div className='product-details-inner' key={product.id}>
            <div className='product-swiper'>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                spaceBetween={25}
                slidesPerView={1}

              >
                {
                  product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className='img-wrapper'>
                        <img src={img} alt="img" />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>

            <div className='product-info'>
              <div className="product-title">
                <h1>{product.title}</h1>
              </div>

              <div className='product-price'>
                <span>${product.price}</span>
              </div>

              <div className=''>

              </div>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductDetails