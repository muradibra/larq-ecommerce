import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../slices/sideMenuSlice/sideMenuSlice'
import usersReducer from '../slices/usersSlice/usersSlice'
import productsReducer from '../slices/productsSlice/productsSlice'
import shopItemReducer from '../slices/shopItemSlice/shopItemSlice'
// import cartReducer from '../slices/cartSlice/cartSlice'
import cartDataReducer from '../slices/cartDataSlice/cartDataSlice'

export const store = configureStore({
    reducer: {
        side: sideMenuReducer,
        users: usersReducer,
        products: productsReducer,
        shopItem: shopItemReducer,
        // cart: cartReducer,
        cartData: cartDataReducer,
    }
})