import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../slices/sideMenuSlice/sideMenuSlice'
import usersReducer from '../slices/usersSlice/usersSlice'
import productsReducer from '../slices/productsSlice/productsSlice'
import shopItemReducer from '../slices/shopItemSlice/shopItemSlice'
import cartDataReducer from '../slices/cartDataSlice/cartDataSlice'
import stepReducer from '../slices/stepSlice/stepSlice'

export const store = configureStore({
    reducer: {
        side: sideMenuReducer,
        users: usersReducer,
        products: productsReducer,
        shopItem: shopItemReducer,
        cartData: cartDataReducer,
        step: stepReducer,
    }
})