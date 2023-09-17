import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai'
import Logo from '../lib/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, toggleSideMenu } from '../../features/sideMenuSlice/sideMenuSlice';
import { AppContext } from '../../context/appContext';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';


const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch()
    const { isSideMenuOpen, isCartOpen } = useSelector(store => store.side)
    const { setIsAuth } = useContext(AppContext)
    const navigate = useNavigate()
    const cartRef = useRef()
    const [showShopAllSection, setShowShopAllSection] = useState(false);
    const [showPurificationSection, setShowPurificationSection] = useState(false);
    const [showHomeSection, setShowHomeSection] = useState(false);
    const [showDrinkwareSection, setShowDrinkwareSection] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        }
        // if (!isSideMenuOpen) {
        window.addEventListener('scroll', handleScroll);
        // }

        return () => {
            // if (isSideMenuOpen) {
            window.removeEventListener('scroll', handleScroll);
            // }
        };
    }, [prevScrollPos]);

    

    const handleCartIconClick = () => {
        dispatch(toggleCart());
    };

    return (
        <div className={`header ${visible ? 'visible' : 'hidden'}`}>
            <Cart />
            
            <div className="header-content">
                <div
                    className='icon'
                    onClick={() => dispatch(toggleSideMenu())}
                >
                    {
                        isSideMenuOpen ?
                            <AiOutlineClose />
                            :
                            <FaBars />
                    }
                </div>

                <ul className='navigation'>
                    <li
                        className='hover-shop-all'
                        onMouseEnter={() => setShowShopAllSection(true)}
                        onMouseLeave={() => setTimeout(() => {
                            setShowShopAllSection(false)
                        }, 50)}
                    >
                        <Link to='/shop'>
                            SHOP ALL
                        </Link>

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
                    </li>

                    <li
                        className='hover-purification'
                        onMouseEnter={() => setShowPurificationSection(true)}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setShowPurificationSection(false)
                            }, 50)
                        }
                        }
                    >
                        <Link to='/shop?shop=purification'>
                            PURIFICATION
                        </Link>

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
                                    <div className='product-img product-img1'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle PureVis™</h4>
                                            <span>From $99</span>
                                        </div>
                                    </div>

                                    <div className='product-img product-img2'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Movement...</h4>
                                            <span>From $89</span>
                                        </div>
                                    </div>

                                    <div className='product-img product-img3'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Filtered</h4>
                                            <span>From <del>$58</del> $49.95</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </li>

                    <li
                        className='hover-home'
                        onMouseEnter={() => setShowHomeSection(true)}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setShowHomeSection(false)
                            }, 50)
                        }}
                    >
                        <Link to='/shop?shop=home'>
                            HOME
                        </Link>

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
                                    <div className='home-product-img home-product-img1'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Pitcher PureVis™</h4>
                                            <p>Monaco Blue</p>
                                            <span>From $99</span>
                                        </div>
                                    </div>

                                    <div className='home-product-img home-product-img2'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Pitcher PureVis™</h4>
                                            <p>Pure white</p>
                                            <span>From $89</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </li>


                    <li
                        className='hover-drinkware'
                        onMouseEnter={() => setShowDrinkwareSection(true)}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setShowDrinkwareSection(false)
                            }, 50)
                        }}
                    >
                        <Link to='/shop?shop=drinkware'>
                            DRINKWARE
                        </Link>

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
                                    <div className='drinkware-product-img drinkware-product-img1'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Swig Top</h4>
                                            <span>From $99</span>
                                        </div>
                                    </div>

                                    <div className='drinkware-product-img drinkware-product-img2'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Flip Top</h4>
                                            <span>From $89</span>
                                        </div>
                                    </div>

                                    <div className='drinkware-product-img drinkware-product-img3'>
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Twist Top</h4>
                                            <span>From $89</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </li>
                </ul>

                <Logo />

                <ul className='navigation'>
                    <li>TECHNOLOGY</li>
                    <li>FAQ</li>
                    <li onClick={() => {
                        localStorage.removeItem("isAuth")
                        setIsAuth(false)
                        navigate('/')
                    }}
                    >
                        LOG OUT
                    </li>
                    <li onClick={() => dispatch(toggleCart())}>CART</li>
                </ul>

                <div
                    className='icon'
                    onClick={handleCartIconClick}
                >
                    <BsCart3 />
                </div>
            </div>


            {/* <div className='hovers'>
                
            </div> */}



        </div>
    );
};

export default Header;


