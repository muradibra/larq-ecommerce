import SideMenu from '../../layout/SideMenu'
import category_img1 from '../../../assets/img/category-img1.webp'
import category_img2 from '../../../assets/img/category-img2.webp'
import category_img3 from '../../../assets/img/category-img3.webp'
import category_img4 from '../../../assets/img/category-img4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules'
import {Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Shop() {
  const purificationRef = useRef(null)
  const dispatch = useDispatch()
  // const purificationProducts = productsv2.filter(item => item.shop === "purification")
  // console.log("purification", purificationProducts[0].purification);

  // const scrollToPurification = () => {
  //   const purificationDiv = document.getElementById('purification');
  //   if (purificationDiv) {
  //     purificationDiv.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])



  const scrollToPurification = () => {
    if (purificationRef.current) {
      purificationRef.current.scrollIntoView()
    }
  }


  return (
    <div className='shop'>
      <SideMenu />

      <div className='shop-all'>
        <div className='head-content'>
          <h1 className='head-title'>Shop All</h1>
          <p className='head-subtitle'>Discover a world of brilliant hydration</p>
        </div>
        <div className='test'>
          <div className='categories'>

            <div className='category category-1' >
              <Link to="#" >
                <div className="category-img-wrapper" onClick={scrollToPurification}>
                  <img src={category_img1} alt="Purification" />
                </div>
                <p>Purification</p>
              </Link>
            </div>

            <div className='category category-2'>
              <Link>
                <div className="category-img-wrapper">
                  <img src={category_img2} alt="Home" />
                </div>
                <p>Home</p>
              </Link>

            </div>

            <div className='category category-3'>
              <Link>
                <div className="category-img-wrapper">
                  <img src={category_img3} alt="Drinkware" />
                </div>
                <p>Drinkware</p>
              </Link>
            </div>

            <div className='category category-4'>
              <Link>
                <div className="category-img-wrapper">
                  <img src={category_img4} alt="Gift Sets" />
                </div>
                <p>Gift Sets</p>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className='purification' ref={purificationRef}>
        <div className='description'>
          <h1 className='title'>Purifcation</h1>
          <p className='subtitle'>PureVis™ and Nano Zero Filter technology improve the quality of your water at home and on the go.</p>
        </div>

        <div className='purification-slider'>
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1.2}
            breakpoints={{
              724: {
                slidesPerView: 1.4
              },
              960: {
                slidesPerView: 2.1
              },
              1280: {
                slidesPerView: 3
              }
            }}
          >
            
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Shop