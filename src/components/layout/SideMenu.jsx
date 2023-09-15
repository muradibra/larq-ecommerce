import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

function SideMenu() {
  const { isSideMenuOpen } = useSelector(store => store.side)

  return (
    <div className={`side-menu ${!isSideMenuOpen ? "isClosed" : "isOpen"}`}>
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
            <button className='explore-all-btn'>
              <Link to='/shop'>
                <span>Explore All</span>
                <AiOutlineArrowRight />
              </Link>
            </button>

            <ul>
              <li>
                <Link to='/accessories'>Filters & Accessories</Link>
              </li>
              <li>
                <Link to='/shop?shop=gift-sets'>Gift sets</Link>
              </li>
              <li>
                <Link to='/corporate-gifting'>Corporate gifting</Link>
              </li>
              <li>
                <Link to='/support'>FAQ</Link>
              </li>
              <li>
                <button onClick={() => {
                  localStorage.removeItem("isAuth")
                  setIsAuth(false)
                  navigate('/')
                }}
                >
                  Log out
                </button>
              </li>
            </ul>

          </div>

        </div>
      </div>
  )
}

export default SideMenu