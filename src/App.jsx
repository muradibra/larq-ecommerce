import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Header from './components/layout/Header'
import Login from './components/pages/Login/Login'
import { AppContext } from './context/AppContext'
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
import ContactUs from './components/pages/ContactUs/ContactUs'
import Press from './components/pages/Press/Press'
import OurStory from './components/pages/OurStory/OurStory'
import Support from './components/pages/Support/Support'
import ProductFaqs from './components/pages/Support/components/ProductFaqs'
import CheckOut from './components/pages/CheckOut/CheckOut'
import CheckOutHeader from './components/pages/CheckOut/CheckOutHeader'
import PageNotFound from './components/pages/NotFound/PageNotFound'
import Technology from './components/pages/Technology/Technology'

function App() {
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(localStorage.isAuth)
  const location = useLocation()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  const isCheckoutPage = location.pathname === '/checkout';

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

        <div>
          {isCheckoutPage ? <CheckOutHeader /> : <Header />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:slug' element={<ProductDetails />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/press' element={<Press />} />
            <Route path='/our-story' element={<OurStory />} />
            <Route path='/support' element={<Support />} />
            <Route path='/support/:slug' element={<ProductFaqs />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/support/*' element={<PageNotFound />} />
          </Routes>
          {isCheckoutPage ? null : <Footer />}

          {/* <Footer /> */}
        </div>
        {/* // : */}
        {/* <Routes> */}
        {/* </Routes> */}

        {/* } */}

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