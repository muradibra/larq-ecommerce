import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Header from './components/layout/Header'
import Login from './components/pages/Login/Login'
import { AppContext } from './context/appContext'
import './assets/css/styles.scss'
import 'swiper/css/bundle'
import Footer from './components/layout/Footer'
import Shop from './components/pages/Shop/Shop'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.isAuth)

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <div>
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
            </Routes>
        }


      </div>
    </AppContext.Provider>

  )
}

export default App