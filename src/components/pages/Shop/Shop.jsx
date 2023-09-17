import SideMenu from '../../layout/SideMenu'
import category_img1 from '../../../assets/img/category-img1.webp'
import category_img2 from '../../../assets/img/category-img2.webp'
import category_img3 from '../../../assets/img/category-img3.webp'
import category_img4 from '../../../assets/img/category-img4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../features/productsSlice/productsSlice'
import FilterPurification from '../../Filter Products/FilterPurification'
import FilterHome from '../../Filter Products/FilterHome'
import FilterDrinkware from '../../Filter Products/FilterDrinkware'
import sideImg1_clean from '../../../assets/img/sideImg1-clean.jpg'
import sideImg2_clean from '../../../assets/img/sideImg2-clean.jpg'
import sideImg3_clean from '../../../assets/img/sideImg3-clean.jpg'

function Shop() {
  const purificationRef = useRef(null)
  const homeRef = useRef(null)
  const drinkwareRef = useRef(null)
  const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

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

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView()
    }
  }

  const scrollToDrinkware = () => {
    if (drinkwareRef.current) {
      drinkwareRef.current.scrollIntoView()
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

        <div className='categories'>

          <div
            className='category category-1'
            onClick={scrollToPurification}
          >
            <div className="category-img-wrapper">
              <img src={category_img1} alt="Purification" />
            </div>
            <p>Purification</p>
          </div>

          <div
            className='category category-2'
            onClick={scrollToHome}
          >
            <div className="category-img-wrapper">
              <img src={category_img2} alt="Home" />
            </div>
            <p>Home</p>

          </div>

          <div
            className='category category-3'
            onClick={scrollToDrinkware}
          >
            <div className="category-img-wrapper">
              <img src={category_img3} alt="Drinkware" />
            </div>
            <p>Drinkware</p>
          </div>

          <div className='category category-4'>
            <div className="category-img-wrapper">
              <img src={category_img4} alt="Gift Sets" />
            </div>
            <p>Gift Sets</p>
          </div>

        </div>
      </div>

      <div className='shopping-sections purification' ref={purificationRef}>
        <div className='description'>
          <h1 className='title'>Purification</h1>
          <p className='subtitle'>PureVis™ and Nano Zero Filter technology improve the quality of your water at home and on the go.</p>
        </div>

        <div className='purification-slider'>
          <FilterPurification />
        </div>

      </div>

      <div className="slogan portable-purification">

        <div className='content-card bg-1'>
          <div className="content-card-label">
            Portable purification
          </div>
          <h2 className='content-card-title'>
            Make refills a breeze
          </h2>
          <p className='content-card-description'>
            PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
          </p>
        </div>

        <div className='media-card'>
          <img src={sideImg1_clean} alt="Portable Purification" />
        </div>
      </div>

      <div className='shopping-sections home' ref={homeRef}>
        <div className='description'>
          <h1 className='title'>Home</h1>
          <p className='subtitle'>Go beyond filtration with a unique 2-step filtration and purification process for pure-tasting water sip after sip.</p>
        </div>

        <div className='home-slider'>
          <FilterHome />

        </div>
      </div>

      <div className="slogan at-home-purification">

        <div className='content-card bg-2'>
          <div className="content-card-label">
            At-home purification
          </div>
          <h2 className='content-card-title'>
            Who said practical had to be boring?
          </h2>
          <p className='content-card-description'>
            Nano Zero Filter technology delivers better-tasting coffee, tea, smoothies—everything—and looks good doing it.
          </p>
        </div>

        <div className='media-card'>
          <img src={sideImg2_clean} alt="Portable Purification" />
        </div>
      </div>


      <div className='shopping-sections drinkware' ref={drinkwareRef}>
        <div className='description'>
          <h1 className='title'>Drinkware</h1>
          <p className='subtitle'>Sip your hydration goals down with style and ease.</p>
        </div>

        <div className='drinkware-slider'>
          <FilterDrinkware />
        </div>
      </div>

      <div className="slogan on-the-go-hydration">

        <div className='content-card bg-3'>
          <div className="content-card-label">
            On-the-go hydration
          </div>
          <h2 className='content-card-title'>
            Hydration never looked so good
          </h2>
          <p className='content-card-description'>
            Stylish and sustainable. We'll drink to that.
          </p>
        </div>

        <div className='media-card'>
          <img src={sideImg3_clean} alt="Portable Purification" />
        </div>
      </div>

    </div>
  )
}

export default Shop