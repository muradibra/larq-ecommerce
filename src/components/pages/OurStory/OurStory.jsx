import React from 'react'
import img_1 from '../../../assets/img/our-story-img1.webp'
import img_2 from '../../../assets/img/our-story-img2.jpg'
import insta_1 from '../../../assets/img/insta_1.jpg'
import insta_2 from '../../../assets/img/insta_2.jpg'
import insta_3 from '../../../assets/img/insta_3.jpg'
import insta_4 from '../../../assets/img/insta_4.jpg'
import { ImInstagram } from 'react-icons/im'
import { Link } from 'react-router-dom'

function OurStory() {
    return (
        <div className='our-story'>
            {/* <div className='founders'>
                <div className='murad'>
                    <div className='founders-text'>
                        <h1 className='title'>Hi, we are LARQ</h1>
                        <p className='description'>LARQ began with a simple vision where innovative technology can be combined with inspirational design to help people access pristine drinking water easily and sustainably.</p>
                    </div>
                </div>
            </div> */}
            <div className="founders ">
                <div className="heroContainer">
                    <div className="heroContent">
                        <h1 className="heroContent_title">Hi, we are LARQ</h1>
                        <p className="heroContent_text">LARQ began with a simple vision where innovative technology can be combined with inspirational design to help people access pristine drinking water easily and sustainably.</p>
                    </div>
                </div>
            </div>

            <div className='inspiring-change'>
                <div className='title-wrapper'>
                    <h2 className='title'>Inspiring change</h2>
                </div>

                <div className='inspiring-change-content'>
                    <div className='drink-brilliantly'>
                        <div className='img-wrapper'>
                            <img src={img_1} alt="" />
                        </div>
                        <div className='text'>
                            <h2>You are what you drink. So drink brilliantly</h2>

                            <p>LARQ’s approach to product innovation is driven by a single purpose - we make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.</p>

                            <p>Our award winning lineup of hydration products improves water quality, taste and overall convenience so reaching for that single-use bottle is never a better option.</p>
                        </div>
                    </div>

                    <div className='drink-with-purpose'>
                        <div className='img-wrapper'>
                            <img src={img_2} alt="" />
                        </div>
                        <div className='text'>
                            <h2>Drink with a purpose</h2>

                            <p>Committed to sustainability, a portion of every LARQ purchase gives back, funding environmental nonprofits around the world as well as bringing safe drinking water to billions of people worldwide—because access to clean drinkable water is not a privilege, it's a right.</p>


                        </div>
                    </div>
                </div>
            </div>

            <div className="hashtag-drink-brilliantly">
                <h2>#DrinkBrilliantly</h2>
            </div>

            <div className='for-insta'>
                <div className="insta-feed-head">
                    <p>Share a photo of your LARQ Bottle for the chance to be featured! <strong>@livelarq</strong> <strong>#DrinkBrilliantly</strong></p>
                </div>

                <div className='photos-wrapper'>
                    <div className='image'>
                        <img src={insta_1} alt="Shop the bottle" />
                        <div className='img-overlay'>
                            <div className='overlay-icon'>
                                <ImInstagram />
                            </div>
                            <Link to="/product/larq-bottle-purevis-monaco-blue">SHOP THE BOTTLE</Link>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={insta_2} alt="Shop the bottle" />
                        <div className='img-overlay'>
                            <div className='overlay-icon'>
                                <ImInstagram />
                            </div>
                            <Link to="/product/larq-bottle-purevis-monaco-blue">SHOP THE BOTTLE</Link>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={insta_3} alt="Shop the bottle" />
                        <div className='img-overlay'>
                            <div className='overlay-icon'>
                                <ImInstagram />
                            </div>
                            <Link to="/product/larq-bottle-purevis-monaco-blue">SHOP THE BOTTLE</Link>
                        </div>
                    </div>
                    <div className='image visible-later'>
                        <img src={insta_4} alt="Shop the bottle" />
                        <div className='img-overlay'>
                            <div className='overlay-icon'>
                                <ImInstagram />
                            </div>
                            <Link to="/product/larq-bottle-purevis-monaco-blue">SHOP THE BOTTLE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory