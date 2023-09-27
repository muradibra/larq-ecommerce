import React, { useEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { fetchProducts } from '../../../slices/productsSlice/productsSlice'
import Intro from './Intro'
import Rating from './Rating'
import ReviewSwiper from './ReviewSwiper'
import ShopPreviews from './ShopPreviews'
import Features from './Features'
import OurMission from './OurMission'
import MagazineSwiper from './MagazineSwiper'
import TrendingProductsSwiper from './TrendingProductsSwiper';
// import SwiperBtnPrev from '../../utils/SwiperBtnPrev'
// import SwiperBtnNext from '../../utils/SwiperBtnNext'


function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className='home'>

      <Intro />

      <div className='reviews-wrapper'>

        <Rating />

        <div className='review-swiper-wrapper'>
          <ReviewSwiper />
        </div>

      </div>

      <div className='shop-previews-wrapper'>
        <h1>Shop</h1>

        <ShopPreviews />
      </div>

      <div className="features-wrapper">
        <Features />
      </div>

      <div className='products-swiper-wrapper'>
        <h1 className='trending'>Now trending</h1>

        <TrendingProductsSwiper />
      </div>

      <OurMission />

      <div className='basq-magazines'>
        <div className='explore-basq'>

          <div className='explore-wrapper'>

            <div className='title-and-description'>
              <h1>basq magazine</h1>
              <span>Take a peek at our online magazine where we cover everything from water to travel and wellness.
              </span>
            </div>

            <div className='explore-button'>
              <button>
                <Link>
                  Explore basq
                  <BsArrowRight />
                </Link>
              </button>
            </div>
          </div>

          <div className='magazine-swiper-wrapper'>
            <MagazineSwiper />
          </div>

        </div>
      </div>

    </div >
  )
}

export default Home