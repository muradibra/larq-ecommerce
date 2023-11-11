import React, { useEffect } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function DrinkwareSection({ showDrinkwareSection }) {

    // useEffect(() => {
    //     console.log(state)
    //     setState(location.pathname);
    // }, [location.pathname])

    return (
        <div className={`drinkware-section ${showDrinkwareSection ? 'show-drinkware' : ''}`}>
            <div className="drinkware-section-content">

                <div className='secondary-links'>
                    <button className='explore-drinkware-btn'>
                        <Link to='/shop'>
                            <span>Explore drinkware</span>
                            <AiOutlineArrowRight />
                        </Link>
                    </button>

                    <ul className='first-links'>
                        <li>
                            <Link to='/accessories'>
                                Accessories
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

                <div className='drinkware-products'>
                    <Link to={'/product/larq-bottle-swig-top-obsidian-black'}>
                        <div
                            className='drinkware-product-img drinkware-product-img1'
                        // onClick={() => navigate('/product/larq-bottle-swig-top-obsidian-black')}
                        >
                            {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                            <div className='text'>
                                <h4>LARQ Bottle Swig Top</h4>
                                <span>From $99</span>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/product/larq-bottle-flip-top-obsidian-black'}>
                        <div
                            className='drinkware-product-img drinkware-product-img2'
                        // onClick={() => navigate('/product/larq-bottle-flip-top-obsidian-black')}
                        >
                            {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                            <div className='text'>
                                <h4>LARQ Bottle Flip Top</h4>
                                <span>From $89</span>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/product/larq-bottle-twist-top-monaco-blue'}>
                        <div
                            className='drinkware-product-img drinkware-product-img3'
                        // onClick={() => navigate('/product/larq-bottle-twist-top-monaco-blue')}
                        >
                            {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                            <div className='text'>
                                <h4>LARQ Bottle Twist Top</h4>
                                <span>From $89</span>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default DrinkwareSection