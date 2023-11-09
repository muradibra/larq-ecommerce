import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ShopAllSection({ showShopAllSection }) {
    return (
        <div className={`shop-all-section ${showShopAllSection ? 'show' : ''}`}>
            <div className="shop-all-section-content">

                <div className='secondary-links'>
                    <button className='explore-all-btn'>
                        <Link to='/shop'>
                            <span>Explore All</span>
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

                <div className='technologies'>
                    <div className='sideImg sideImg1-clean'>
                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                        <div className='text'>
                            <h3>Purification</h3>
                            <span>Filter or purify water on the go.</span>
                        </div>
                    </div>

                    <div className='sideImg sideImg2-clean'>
                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                        <div className='text'>
                            <h3>Home</h3>
                            <span>Equip your home with Nano Zero filtration.</span>
                        </div>
                    </div>

                    <div className='sideImg sideImg3-clean'>
                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                        <div className='text'>
                            <h3>Drinkware</h3>
                            <span>Hydrate effortlessly on the go.</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShopAllSection