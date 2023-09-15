import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineArrowRight, AiFillStar } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules'
import review_strategist from '../../../assets/img/review-strategist.png'
import review_oprah from '../../../assets/img/review-oprah.png'
import review_digTrends from '../../../assets/img/review-dig-trends.png'
import review_bestProd from '../../../assets/img/review-best-prod.png'
import previewImg1 from '../../../assets/img/sideImg1-clean.jpg'
import previewImg2 from '../../../assets/img/sideImg2-clean.jpg'
import previewImg3 from '../../../assets/img/sideImg3-clean.jpg'
import RefillSvg from '../../utils/RefillSvg'
import SmartSipSvg from '../../utils/SmartSipSvg'
import HydrationSupportSvg from '../../utils/HydrationSupportSvg'
import { fetchProducts } from '../../../features/productsSlice/productsSlice'
import SwiperBtnPrev from '../../utils/SwiperBtnPrev'
import SwiperBtnNext from '../../utils/SwiperBtnNext'
import { nanoid } from '@reduxjs/toolkit'
import magazine_img1 from '../../../assets/img/magazine-img1.webp'
import magazine_img2 from '../../../assets/img/magazine-img2.webp'
import magazine_img3 from '../../../assets/img/magazine-img3.webp'
import magazine_img4 from '../../../assets/img/magazine-img4.webp'
import magazine_img5 from '../../../assets/img/magazine-img5.jpg'
import magazine_img6 from '../../../assets/img/magazine-img6.jpg'
import magazine_img7 from '../../../assets/img/magazine-img7.jpg'
import SideMenu from '../../layout/SideMenu'
// import { AppContext } from '../../../context/appContext'


function Home() {
  // const { setIsAuth } = useContext(AppContext)
  const { isSideMenuOpen } = useSelector(store => store.side)
  const { products } = useSelector(store => store.products)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  // console.log(products);

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add('menu-open');
      document.querySelector(".header").classList.add("visible")
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isSideMenuOpen]);


  return (
    <div className='home'>
      {/* <div className={`side-menu ${!isSideMenuOpen ? "isClosed" : "isOpen"}`}>
        <div className='side-menu-content'>

          <div className="nav-items">

            <div className='nav-item purification-sec'>

              <div className='nav-item-text purification-text'>
                <p>Purification</p>
                <span>Filter or purify the water on the go.</span>
              </div>

              <div className='nav-item-bgImg sideImg1'></div>

            </div>

            <div className='nav-item home-sec'>

              <div className='nav-item-text home-text'>
                <p>Home</p>
                <span>Equip your home with Nano Zero filtration.</span>
              </div>

              <div className='nav-item-bgImg sideImg2'></div>

            </div>

            <div className='nav-item drinkware-sec'>

              <div className='nav-item-text drinkware-text'>
                <p>Drinkware</p>
                <span>Hydrate effortlessly on the go.</span>
              </div>

              <div className='nav-item-bgImg sideImg3'></div>

            </div>

          </div>

          <div className='secondary-links'>
            <button className='explore-all-btn'>
              <Link to='/shop'>
                <span>Explore All</span>
                <AiOutlineArrowRight />
              </Link>
            </button>

            <ul>
              <li>
                <Link to='/accessories'>Filters & Accessories</Link>
              </li>
              <li>
                <Link to='/shop?shop=gift-sets'>Gift sets</Link>
              </li>
              <li>
                <Link to='/corporate-gifting'>Corporate gifting</Link>
              </li>
              <li>
                <Link to='/support'>FAQ</Link>
              </li>
              <li>
                <button onClick={() => {
                  localStorage.removeItem("isAuth")
                  setIsAuth(false)
                  navigate('/')
                }}
                >
                  Log out
                </button>
              </li>
            </ul>

          </div>

        </div>
      </div> */}
      <SideMenu />

      {/* <div className="content-container"> */}
      <div className='home-main-img'>
        <div className='text'>
          <h1>One touch is all it takes</h1>
          <p>To zap away odor with PureVis™.</p>

          <button onClick={() => navigate('/shop')}>
            Shop Now
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      <div className='reviews-wrapper'>

        <div className='rating'>

          <div className='reviews'>
            <h3 className='rating-title'>Brilliant</h3>
            <div className='rating-stars'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <span className='rating-total'>
              <Link>based on 7366 reviews</Link>
            </span>
          </div>

          <div className='all-reviews-btn'>
            <button>
              All reviews
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className='review-swiper-wrapper'>
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={45}
            slidesPerView={1.3}
            breakpoints={{
              800: {
                slidesPerView: 2
              },
              1190: {
                slidesPerView: 3
              },
              1440: {
                slidesPerView: 4,
                width: 1100
              }
            }}
          >
            {/* <SwiperBtnPrev /> */}
            <SwiperSlide>
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
            </SwiperSlide>

            {/* <SwiperBtnNext /> */}
          </Swiper>
        </div>

      </div>

      <div className='shop-previews-wrapper'>
        <h1>Shop</h1>

        <div className='shop-previews'>

          <Link to='/shop?shop=purification' className='shop-for-purification'>
            <div className='shop-preview-img'>
              <img src={previewImg1} alt="" />
            </div>

            <div className='shop-preview-text'>
              <h3 className='shop-preview-title'>Purification</h3>
              <span className='shop-preview-link'>Shop now</span>
            </div>
          </Link>

          <Link to='/shop?shop=home' className='shop-for-purification'>
            <div className='shop-preview-img'>
              <img src={previewImg2} alt="" />
            </div>

            <div className='shop-preview-text'>
              <h3 className='shop-preview-title'>Home</h3>
              <span className='shop-preview-link'>Shop now</span>
            </div>
          </Link>

          <Link to='/shop?shop=drinkware' className='shop-for-purification'>
            <div className='shop-preview-img'>
              <img src={previewImg3} alt="" />
            </div>

            <div className='shop-preview-text'>
              <h3 className='shop-preview-title'>Drinkware</h3>
              <span className='shop-preview-link'>Shop now</span>
            </div>
          </Link>

        </div>

      </div>

      <div className="features-wrapper">
        <div className="features-content">

          <div className='features-section'>

            <div className="features-img">
              <RefillSvg />
            </div>

            <div className='features-section-text'>
              <h3 className='features-section-title'>
                Say yes to refills
              </h3>

              <span className="features-section-description">
                Save money and make single-use water bottles a thing of the past.
              </span>
            </div>

          </div>

          <div className='features-section'>

            <div className="features-img">
              <SmartSipSvg />
            </div>

            <div className='features-section-text'>
              <h3 className='features-section-title'>
                A smart way to sip
              </h3>

              <span className="features-section-description">
                PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
              </span>
            </div>

          </div>

          <div className='features-section'>

            <div className="features-img">
              <HydrationSupportSvg />
            </div>

            <div className='features-section-text'>
              <h3 className='features-section-title'>
                Hydrate with purpose
              </h3>

              <span className="features-section-description">
                A portion of proceeds supports environmental and clean water projects worldwide.
              </span>
            </div>

          </div>

        </div>
      </div>

      <div className='products-swiper-wrapper'>
        <h1 className='trending'>Now trending</h1>
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={45}
          slidesPerView={1.3}
          breakpoints={{
            800: {
              slidesPerView: 2
            },
            1190: {
              slidesPerView: 3
            },
            1440: {
              slidesPerView: 4,
              width: 1100
            }
          }}
        >
          <SwiperBtnPrev />
          {
            products.slice(0, 6).map(item => (
              <SwiperSlide key={nanoid()}>
                {/* {console.log('products map',nanoid())} */}
                <Link to={`product/${item.slug}`}>
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
                        slidesPerView={4}
                      // breakpoints={{
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
                      // }}
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
          <SwiperBtnNext />


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
        </Swiper>
      </div>

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

          <div className='magazine-swiper'>
            <Swiper
              modules={[Scrollbar]}
              scrollbar={{ draggable: true }}
              spaceBetween={400}
              slidesPerView={1.4}
              breakpoints={{
                700: {
                  slidesPerView: 1.7,
                  spaceBetween: 200
                },
                780: {
                  slidesPerView: 2
                },
                1067: {
                  slidesPerView: 2.5
                },
                1250: {
                  slidesPerView: 3
                },
                1440: {
                  slidesPerView: 3.5,
                  width: 1100,
                  spaceBetween: 440
                }
              }}
            >
              <SwiperBtnPrev />
              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/im-a-nutritionist-and-i-only-use-filtered-water-heres-why/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img1} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>I’m a nutritionist, and I only use filtered water. Here’s why.</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/this-is-how-much-plastic-youre-eating-per-week/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img2} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>This is how much plastic you're eating per week</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/how-clean-is-new-york-tap-water/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img3} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>How clean is New York Tap Water?</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/dangers-of-pfas/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img4} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>How to remove PFAS, PFOA, PFOS from tap water</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/how-clean-is-london-tap-water/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img5} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>How clean is London tap water?</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/wellness/how-to-clean-your-reusable-water-bottle/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img6} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>How to clean your reusable water bottle (if you don’t have a self-cleaning one)</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='slide-inner'>
                  <Link
                    to="https://basq.livelarq.com/design/what-is-japandi-interior-design/"
                    target='_blank'
                  >
                    <div className='magazine-img-wrapper'>
                      <img src={magazine_img7} alt="" />
                    </div>

                    <div className='magazine-description'>
                      <p>What is Japandi Interior Design?</p>
                      <span>Read more</span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>



              <SwiperBtnNext />
            </Swiper>
          </div>

        </div>
      </div>

    </div >
  )
}

export default Home