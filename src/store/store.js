import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../features/sideMenuSlice/sideMenuSlice'
import usersReducer from '../features/usersSlice/usersSlice'
import productsReducer from '../features/productsSlice/productsSlice'
import shopItemReducer from '../features/shopItemSlice/shopItemSlice'

export const store = configureStore({
    reducer: {
        side: sideMenuReducer,
        users: usersReducer,
        products: productsReducer,
        shopItem: shopItemReducer,
    }
})