import category_img1 from '../../../assets/img/category-img1.webp'
import category_img2 from '../../../assets/img/category-img2.webp'
import category_img3 from '../../../assets/img/category-img3.webp'
import category_img4 from '../../../assets/img/category-img4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../slices/productsSlice/productsSlice'
import FilterPurification from '../Shop/Filter Products/FilterPurification'
import FilterHome from '../Shop/Filter Products/FilterHome'
import FilterDrinkware from '../Shop/Filter Products/FilterDrinkware'
import PortabelPurificationSlogan from './PortabelPurificationSlogan';
import AtHomePurificationSlogan from './AtHomePurificationSlogan';
import OnTheGoHydrationSlogan from './OnTheGoHydrationSlogan';

function Shop() {
  const purificationRef = useRef(null)
  const homeRef = useRef(null)
  const drinkwareRef = useRef(null)
  const primaryRef = useRef(null)
  // const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const scrollToPurification = () => {
    if (purificationRef.current) {
      purificationRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToDrinkware = () => {
    if (drinkwareRef.current) {
      drinkwareRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='shop'>

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

      <PortabelPurificationSlogan />

      <div className='shopping-sections home' ref={homeRef}>
        <div className='description'>
          <h1 className='title'>Home</h1>
          <p className='subtitle'>Go beyond filtration with a unique 2-step filtration and purification process for pure-tasting water sip after sip.</p>
        </div>

        <div className='home-slider'>
          <FilterHome />

        </div>
      </div>

      <AtHomePurificationSlogan />

      <div className='shopping-sections drinkware' ref={drinkwareRef}>
        <div className='description'>
          <h1 className='title'>Drinkware</h1>
          <p className='subtitle'>Sip your hydration goals down with style and ease.</p>
        </div>

        <div className='drinkware-slider'>
          <FilterDrinkware />
        </div>
      </div>

      <OnTheGoHydrationSlogan />

    </div>
  )
}

export default Shop