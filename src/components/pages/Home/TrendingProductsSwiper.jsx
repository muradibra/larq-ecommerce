import { nanoid } from '@reduxjs/toolkit';
import React, { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

function TrendingProductsSwiper() {
    const swiperRef = useRef(null);
    const swiper = useSwiper({ swiperRef });
    const { products } = useSelector(store => store.products)

    return (
        <Swiper
            modules={[Scrollbar, Navigation]}
            scrollbar={{ draggable: true }}
            spaceBetween={45}
            slidesPerView={1.3}
            navigation={{  // Use Swiper's built-in navigation
                prevEl: '.swiper-btn-prev',
                nextEl: '.swiper-btn-next',
            }}
            ref={swiperRef}
            breakpoints={{
                700: {
                    slidesPerView: 1.5
                },
                780: {
                    slidesPerView: 1.8
                },
                940: {
                    slidesPerView: 2
                },
                1100: {
                    slidesPerView: 2.5
                },
                1350: {
                    slidesPerView: 3
                }
            }}
        >
            {/* <SwiperBtnPrev /> */}
            {
                products.slice(0, 6).map(item => (
                    <SwiperSlide key={nanoid()}>
                        {/* {console.log('products map',nanoid())} */}
                        <Link to={`/product/${item.slug}`}>
                            <div className='slide-inner'>
                                <div className='img-wrapper'>
                                    <img src={item.main_img_url} alt="" />
                                </div>

                                <div className='product-text'>
                                    <h3 className='product-title'>{item.title}</h3>
                                    <span className='product-color'>{item.color}</span>
                                </div>
                                <div className='color-swiper-wrapper'>

                                    <Swiper
                                        modules={[Navigation]}
                                        // scrollbar={{ draggable: true }}
                                        navigation={{ clickable: true }}
                                        spaceBetween={45}
                                        slidesPerView={1.1}
                                        breakpoints={{

                                            //   800: {
                                            //     slidesPerView: 2
                                            //   },
                                            //   1190: {
                                            //     slidesPerView: 3
                                            //   },
                                            //   1440: {
                                            //     slidesPerView: 4,
                                            //     width: 1100
                                            //   }
                                        }}
                                    >
                                        {/* <SwiperBtnPrev /> */}
                                        {/* {
                        item.images.map((img, innerIndex) => (
                          <SwiperSlide >
                            <div className='color-wrapper'>
                              <img src={img} alt="color" />
                            </div>
                          </SwiperSlide>
                        ))
                      } */}
                                        {/* <SwiperBtnNext /> */}
                                    </Swiper>

                                    <div className='product-price'>
                                        From &nbsp;
                                        {
                                            item.discounted_price ?
                                                <span>
                                                    <del>${item.price}</del> &nbsp;
                                                    ${item.discounted_price}
                                                </span>
                                                :
                                                `$${item.price}`
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* <div>

                </div> */}
                    </SwiperSlide>
                ))
            }
            {/* <SwiperBtnNext /> */}


            {/* <SwiperSlide>
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
          </SwiperSlide> */}

            {/* <SwiperBtnNext /> */}
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
        </Swiper>
    )
}

export default TrendingProductsSwiper