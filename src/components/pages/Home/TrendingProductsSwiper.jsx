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
    // <Swiper
    //   modules={[Scrollbar, Navigation]}
    //   scrollbar={{ draggable: true }}
    //   spaceBetween={40}
    //   slidesPerView={3}
    //   navigation={{  // Use Swiper's built-in navigation
    //     prevEl: '.swiper-btn-prev',
    //     nextEl: '.swiper-btn-next',
    //     // disabledClass: ''
    //   }}
    //   ref={swiperRef}
    //   breakpoints={{
    //     // 300: {
    //     //   slidesPerView: 1
    //     // },
    //     // 350: {
    //     //   slidesPerView: 1
    //     // },
    //     // 600: {
    //     //   slidesPerView: 1
    //     // },
    //     // 700: {
    //     //   slidesPerView: 1.5
    //     // },
    //     // 780: {
    //     //   slidesPerView: 2
    //     // },
    //     // 940: {
    //     //   slidesPerView: 2
    //     // },
    //     // 1100: {
    //     //   slidesPerView: 2.5
    //     // },
    //     // 1350: {
    //     //   slidesPerView: 3
    //     // }
    //   }}
    // >
    //   {
    //     products.slice(0, 6).map(item => (
    //       <SwiperSlide key={nanoid()}>
    //         <Link to={`/product/${item.slug}`}>
    //           <div className='slide-inner'>
    //             <div className='img-wrapper'>
    //               <img src={item.main_img_url} alt="" />
    //             </div>

    //             <div className='product-text'>
    //               <h3 className='product-title'>{item.title}</h3>
    //               <span className='product-color'>{item.color}</span>
    //             </div>
    //             <div className='color-swiper-wrapper'>

    //               <Swiper
    //                 modules={[Navigation]}
    //                 // scrollbar={{ draggable: true }}
    //                 navigation={{ clickable: true }}
    //                 spaceBetween={45}
    //                 slidesPerView={1.1}
    //                 breakpoints={{

    //                   //   800: {
    //                   //     slidesPerView: 2
    //                   //   },
    //                   //   1190: {
    //                   //     slidesPerView: 3
    //                   //   },
    //                   //   1440: {
    //                   //     slidesPerView: 4,
    //                   //     width: 1100
    //                   //   }
    //                 }}
    //               >
    //                 {/* <SwiperBtnPrev /> */}
    //                 {/* {
    //                     item.images.map((img, innerIndex) => (
    //                       <SwiperSlide >
    //                         <div className='color-wrapper'>
    //                           <img src={img} alt="color" />
    //                         </div>
    //                       </SwiperSlide>
    //                     ))
    //                   } */}
    //                 {/* <SwiperBtnNext /> */}
    //               </Swiper>

    //               <div className='product-price'>
    //                 From &nbsp;
    //                 {
    //                   item.discounted_price ?
    //                     <span>
    //                       <del>${item.price}</del> &nbsp;
    //                       ${item.discounted_price}
    //                     </span>
    //                     :
    //                     `$${item.price}`
    //                 }
    //               </div>
    //             </div>
    //           </div>
    //         </Link>
    //       </SwiperSlide>
    //     ))
    //   }

    //   <div className='swiper-btn-prev'>
    //     <button>
    //       <BsArrowLeft />
    //     </button>
    //   </div>
    //   <div className='swiper-btn-next'>
    //     <button>
    //       <BsArrowRight />
    //     </button>
    //   </div>
    // </Swiper>

    <Swiper
      modules={[Scrollbar, Navigation]}
      scrollbar={{ draggable: true }}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
      }}
      ref={swiperRef}
      breakpoints={{
        300: {
          slidesPerView: 1
        },
        350: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 1
        },
        700: {
          slidesPerView: 1.5
        },
        780: {
          slidesPerView: 2
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
      {
        products.slice(0, 6).map(item => (
          <SwiperSlide key={nanoid()}>
            <Link to={`/product/${item.slug}`}>
              <div className="slide-inner">
                <div className='img-wrapper'>
                  <img src={item.main_img_url} alt="" />
                </div>

                <div className='product-text'>
                  <h3 className='product-title'>{item.title}</h3>
                  <span className='product-color'>{item.color}</span>
                </div>

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
            </Link>
          </SwiperSlide>
        ))
      }
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