import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function HomeSection({ showHomeSection }) {
    return (
        <div className={`home-section ${showHomeSection ? 'show-home' : ''}`}>
            <div className="home-section-content">

                <div className='secondary-links'>
                    <button className='explore-home-btn'>
                        <Link to='/shop'>
                            <span>Explore Home</span>
                            <AiOutlineArrowRight />
                        </Link>
                    </button>

                    <ul className='first-links'>
                        <li>
                            <Link to='/accessories'>
                                Filters & Accessories
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop?shop=gift-sets'>
                                Gift sets
                            </Link>
                        </li>
                        <li>
                            <Link to='/corporate-gifting'>
                                Corporate gifting
                            </Link>
                        </li>
                    </ul>

                    <ul className='second-links'>
                        <li>LEARN MORE</li>
                        <li>
                            <Link to='/technology'>
                                PureVis technology
                            </Link>
                        </li>
                        <li>
                            <Link to='/technology'>
                                Nano zero technology
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='home-products'>
                    <Link to='/product/larq-pitcher-purevis-monaco-blue'>
                        <div
                            className='home-product-img home-product-img1'
                        // onClick={() => navigate('/product/larq-pitcher-purevis-monaco-blue')}
                        >
                            {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                            <div className='text'>
                                <h4>LARQ Pitcher PureVis™</h4>
                                {/* <p>Monaco Blue</p> */}
                                <span>From $99</span>
                            </div>
                        </div>
                    </Link>

                    <Link to='/product/larq-pitcher-purevis-pure-white'>
                        <div
                            className='home-product-img home-product-img2'
                        // onClick={() => navigate('/product/larq-pitcher-purevis-pure-white')}
                        >
                            {/* <div className='sideImg1'>11
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                            <div className='text'>
                                <h4>LARQ Pitcher PureVis™</h4>
                                {/* <p>Pure white</p> */}
                                <span>From $89</span>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default HomeSection