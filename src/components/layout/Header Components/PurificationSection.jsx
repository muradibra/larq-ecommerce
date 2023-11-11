import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

function PurificationSection({ showPurificationSection }) {
    

    return (
        <div className={`purification-section ${showPurificationSection ? 'show-purification' : ''}`}>
            <div className="purification-section-content">

                <div className='secondary-links'>
                    <button className='explore-purification-btn'>
                        <Link to='/shop'>
                            <span>Explore Purification</span>
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

                <div className='products'>
                    <Link to='/product/larq-bottle-purevis-monaco-blue'>
                        <div
                            className='product-img product-img1'
                        // onClick={() => navigate('/product/larq-bottle-purevis-monaco-blue')}
                        >
                            <div className='sideImg1'>
                            </div>
                            <div className='text'>
                                <h4>LARQ Bottle PureVis™</h4>
                                <span>From $99</span>
                            </div>
                        </div>
                    </Link>

                    <Link to='/product/larq-bottle-movement-purevis-monaco-blue'>
                        <div
                            className='product-img product-img2'
                        // onClick={() => navigate('/product/larq-bottle-movement-purevis-monaco-blue')}
                        >
                            <div className='text'>
                                <h4>LARQ Bottle Movement...</h4>
                                <span>From $89</span>
                            </div>
                        </div>
                    </Link>

                    <Link to='/product/larq-bottle-filtered-obsidian-black'>

                        <div
                            className='product-img product-img3'
                        // onClick={() => navigate('/product/larq-bottle-filtered-obsidian-black')}
                        >
                            <div className='text'>
                                <h4>LARQ Bottle Filtered</h4>
                                <span>From <del>$58</del> $49.95</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default PurificationSection