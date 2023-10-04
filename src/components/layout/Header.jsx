import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai'
import Logo from '../lib/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, toggleSideMenu } from '../../slices/sideMenuSlice/sideMenuSlice';
import { AppContext } from '../../context/appContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
// import Cart from '../lib/Cart';
// import sideImg1_clean from '../../assets/img/sideImg1-clean.jpg'
// import sideImg2_clean from '../../assets/img/sideImg2-clean.jpg'
// import sideImg3_clean from '../../assets/img/sideImg3-clean.jpg'


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
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cartData } = useSelector(store => store.cartData)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        }
        if (!isSideMenuOpen) {
            window.addEventListener('scroll', handleScroll);
        }

        // return () => {
        if (isSideMenuOpen) {
            window.removeEventListener('scroll', handleScroll);
            setVisible(true)
        }
        // };
    }, [prevScrollPos]);

    const getCartLength = () => {
        if (cartData.length) {
            return cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
        }
    }

    const handleCartIconClick = () => {
        dispatch(toggleCart());
        setIsCartVisible(!isCartVisible)
        // document.querySelector('.header').classList.add("visible")
        // document.querySelector('.header').classList.remove("hidden")
    };

    const logOut = () => {
        localStorage.removeItem("isAuth")
        setIsAuth(false)
        navigate('/')
        toast.loading("You are logged out!")
    }

    return (
        <div className={`header ${visible ? 'visible' : 'hidden'}`}>

            <div className="header-content">
                <div
                    className='icon'
                    onClick={() => {
                        dispatch(toggleSideMenu())
                        document.querySelector(".header").classList.add("visible")
                    }}
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
                        }, 80)}
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
                            }, 80)
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
                                    <div
                                        className='product-img product-img1'
                                        onClick={() => navigate('/product/larq-bottle-purevis-monaco-blue')}
                                    >
                                        <div className='sideImg1'>
                                            {/* <img src={sideImg1_clean} alt="" /> */}
                                        </div>
                                        <div className='text'>
                                            <h4>LARQ Bottle PureVis™</h4>
                                            <span>From $99</span>
                                        </div>
                                    </div>

                                    <div
                                        className='product-img product-img2'
                                        onClick={() => navigate('/product/larq-bottle-movement-purevis-monaco-blue')}
                                    >
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Movement...</h4>
                                            <span>From $89</span>
                                        </div>
                                    </div>

                                    <div
                                        className='product-img product-img3'
                                        onClick={() => navigate('/product/larq-bottle-filtered-obsidian-black')}
                                    >
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
                            }, 80)
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
                                    <div
                                        className='home-product-img home-product-img1'
                                        onClick={() => navigate('/product/larq-pitcher-purevis-monaco-blue')}
                                    >
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Pitcher PureVis™</h4>
                                            <p>Monaco Blue</p>
                                            <span>From $99</span>
                                        </div>
                                    </div>

                                    <div
                                        className='home-product-img home-product-img2'
                                        onClick={() => navigate('/product/larq-pitcher-purevis-pure-white')}
                                    >
                                        {/* <div className='sideImg1'>11
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
                            }, 80)
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
                                    <div
                                        className='drinkware-product-img drinkware-product-img1'
                                        onClick={() => navigate('/product/larq-bottle-swig-top-obsidian-black')}
                                    >
                                        {/* <Link to={'/product/larq-bottle-swig-top-obsidian-black'}> */}
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Swig Top</h4>
                                            <span>From $99</span>
                                        </div>
                                        {/* </Link> */}
                                    </div>

                                    <div
                                        className='drinkware-product-img drinkware-product-img2'
                                        onClick={() => navigate('/product/larq-bottle-flip-top-obsidian-black')}
                                    >
                                        {/* <Link to={'/product/larq-bottle-flip-top-obsidian-black'}> */}
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Flip Top</h4>
                                            <span>From $89</span>
                                        </div>
                                        {/* </Link> */}
                                    </div>

                                    <div
                                        className='drinkware-product-img drinkware-product-img3'
                                        onClick={() => navigate('/product/larq-bottle-twist-top-monaco-blue')}
                                    >
                                        {/* <Link to={'/product/larq-bottle-twist-top-monaco-blue'}> */}
                                        {/* <div className='sideImg1'>
                                            <img src={sideImg1_clean} alt="" />
                                        </div> */}
                                        <div className='text'>
                                            <h4>LARQ Bottle Twist Top</h4>
                                            <span>From $89</span>
                                        </div>
                                        {/* </Link> */}
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
                    <li onClick={() => logOut()}>
                        LOG OUT
                    </li>
                    <li
                        className='cart-length'
                        onClick={() => dispatch(toggleCart())}
                    >
                        CART
                        {
                            cartData.length > 0 &&
                            <span>{getCartLength()}</span>
                        }

                    </li>
                </ul>

                <div
                    className='icon'
                    onClick={handleCartIconClick}
                >
                    <BsCart3 />
                    {
                        cartData.length > 0 &&
                        <span className='cart-length'>
                            {
                                getCartLength()
                            }
                        </span>
                    }
                </div>
            </div>


            {/* <div className='hovers'>
                
            </div> */}



        </div>
    );
};

export default Header;


