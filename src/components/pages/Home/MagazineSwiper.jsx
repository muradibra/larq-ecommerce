import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import useScreenWidth from '../../../hooks/useScreenWidth'
import magazine_img1 from '../../../assets/img/magazine-img1.webp'
import magazine_img2 from '../../../assets/img/magazine-img2.webp'
import magazine_img3 from '../../../assets/img/magazine-img3.webp'
import magazine_img4 from '../../../assets/img/magazine-img4.webp'
import magazine_img5 from '../../../assets/img/magazine-img5.jpg'
import magazine_img6 from '../../../assets/img/magazine-img6.jpg'
import magazine_img7 from '../../../assets/img/magazine-img7.jpg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function MagazineSwiper() {
    const { screenSize } = useScreenWidth()
    const swiperRef = useRef(null);
    const swiper = useSwiper({ swiperRef });

    return (
        <Swiper
            modules={[Scrollbar, Navigation]}
            scrollbar={{ draggable: true }}
            spaceBetween={100}
            slidesPerView={1.1}
            navigation={{  // Use Swiper's built-in navigation
                prevEl: '.swiper-btn-prev',
                nextEl: '.swiper-btn-next',
            }}
            ref={swiperRef}
            breakpoints={{
                700: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                940: {
                    slidesPerView: 2,
                    spaceBetween: 60
                },
                1200: {
                    slidesPerView: 2.5,
                },
                1380: {
                    slidesPerView: 3,
                },
                1450: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }}
        >
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

            {
                screenSize >= 1440 &&
                <div>
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
                </div>
            }



        </Swiper>
    )
}

export default MagazineSwiper