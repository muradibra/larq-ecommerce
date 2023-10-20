import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect } from 'react'
import { toggleSideMenu } from '../../slices/sideMenuSlice/sideMenuSlice'
import { AppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

function SideMenu() {
  const { isSideMenuOpen } = useSelector(store => store.side)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setIsAuth } = useContext(AppContext)


  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add('menu-open');
      document.querySelector(".header").classList.add("visible")
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isSideMenuOpen]);

  const logOut = () => {
    localStorage.removeItem("isAuth")
    setIsAuth(false)
    toast.loading("You are logged out!")
    dispatch(toggleSideMenu())
    navigate('/login')
  }
  const logIn = () => {
    // toast.success("You are logged in!")
    dispatch(toggleSideMenu())
    navigate("/login")
  }

  return (
    <div className={`side-menu ${!isSideMenuOpen ? "isClosed" : "isOpen"}`}>
      {/* <button onClick={() => dispatch(toggleSideMenu())}>Close</button> */}
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
          <button
            className='explore-all-btn'
            onClick={() => {
              navigate('/shop')
              dispatch(toggleSideMenu())
            }}
          >
            <Link to='/shop'>
              <span>Explore All</span>
              <AiOutlineArrowRight />
            </Link>
          </button>

          <ul>
            <li>
              <Link onClick={() => dispatch(toggleSideMenu())} to='/accessories'>Filters & Accessories</Link>
            </li>
            <li>
              <Link onClick={() => dispatch(toggleSideMenu())} to='/shop?shop=gift-sets'>Gift sets</Link>
            </li>
            <li>
              <Link onClick={() => dispatch(toggleSideMenu())} to='/corporate-gifting'>Corporate gifting</Link>
            </li>
            <li>
              <Link onClick={() => dispatch(toggleSideMenu())} to='/support'>FAQ</Link>
            </li>
            <li>
              <button

              >
                {
                  localStorage.isAuth ?
                    <span
                      onClick={() => logOut()}
                    >
                      Log out
                    </span>
                    :
                    <span
                      onClick={() => logIn()}
                    >
                      Log in
                    </span>
                }
              </button>
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default SideMenu