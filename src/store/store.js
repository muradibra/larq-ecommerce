import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../features/sideMenuSlice/sideMenuSlice'
import usersReducer from '../features/usersSlice/usersSlice'
import productsReducer from '../features/productsSlice/productsSlice'

export const store = configureStore({
    reducer: {
        side: sideMenuReducer,
        users: usersReducer,
        products: productsReducer,
    }
})