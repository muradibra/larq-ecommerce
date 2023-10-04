import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Header from './components/layout/Header'
import Login from './components/pages/Login/Login'
import { AppContext } from './context/appContext'
import './assets/css/styles.scss'
import 'swiper/css/bundle'
import Footer from './components/layout/Footer'
import Shop from './components/pages/Shop/Shop'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from './slices/cartDataSlice/cartDataSlice'
import SideMenu from './components/layout/SideMenu'
import Cart from './components/lib/Cart'
import ScrollToTop from './components/lib/ScrollToTop'
import useScreenWidth from './hooks/useScreenWidth'
import axios from 'axios'
import { apiUrl } from './config'
import { Toaster } from 'react-hot-toast'
import Register from './components/pages/Register/Register'

function App() {
  const dispatch = useDispatch()

  const [isAuth, setIsAuth] = useState(localStorage.isAuth)

  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <div>
        <Toaster
          position='top-center'
          containerClassName='hot-toast'
          toastOptions={{
            duration: "300",
          }}
        />
        <SideMenu />
        <Cart />
        <ScrollToTop />

        {
          isAuth ?
            <div>
              <Header />

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product/:slug' element={<ProductDetails />} />
              </Routes>
              <Footer />
            </div>
            :
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
        }

        {/* <div>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:slug' element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div> */}


      </div>
    </AppContext.Provider>

  )
}

export default App