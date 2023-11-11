import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai'
import Logo from '../lib/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, toggleSideMenu } from '../../slices/sideMenuSlice/sideMenuSlice';
import { AppContext } from '../../context/AppContext';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ShopAllSection from './Header Components/ShopAllSection';
import PurificationSection from './Header Components/PurificationSection';
import HomeSection from './Header Components/HomeSection';
import DrinkwareSection from './Header Components/DrinkwareSection';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch()
    const { isSideMenuOpen } = useSelector(store => store.side)
    const { setIsAuth } = useContext(AppContext)
    const navigate = useNavigate()
    const cartRef = useRef()
    const [showShopAllSection, setShowShopAllSection] = useState(false);
    const [showPurificationSection, setShowPurificationSection] = useState(false);
    const [showHomeSection, setShowHomeSection] = useState(false);
    const [showDrinkwareSection, setShowDrinkwareSection] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cartData } = useSelector(store => store.cartData)

    // const location = useLocation();

    // const [state, setState] = useState(`${location.pathname}`);

    // useEffect(() => {
    //     console.log(state)
    //     setState(location.pathname);
    // }, [location.pathname])

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
        navigate('/login')
        toast.loading("You are logged out!")
    }

    const logIn = () => {
        // toast.success("You are logged in!")
        navigate("/login")
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
                        <ShopAllSection showShopAllSection={showShopAllSection} />
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

                        <PurificationSection showPurificationSection={showPurificationSection} />

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

                        <HomeSection showHomeSection={showHomeSection} />


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

                        <DrinkwareSection showDrinkwareSection={showDrinkwareSection} />


                    </li>
                </ul>

                <Logo />

                <ul className='navigation'>
                    <li>
                        <Link to="/technology">
                            TECHNOLOGY
                        </Link>

                    </li>
                    <li>
                        <Link to="/support">
                            FAQ
                        </Link>

                    </li>
                    <li >
                        {
                            localStorage.isAuth ?
                                <span
                                    onClick={() => logOut()}
                                >
                                    LOG OUT
                                </span>
                                :
                                <span
                                    onClick={() => logIn()}
                                >
                                    LOG IN
                                </span>

                        }

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

        </div>
    );
};

export default Header;


