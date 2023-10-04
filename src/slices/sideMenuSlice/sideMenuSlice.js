import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideMenuOpen: false,
    isCartOpen: false,
}

export const sideMenuSlice = createSlice({
    name: 'side',
    initialState,
    reducers: {
        toggleSideMenu: (state) => {
            state.isSideMenuOpen = !state.isSideMenuOpen
            document.querySelector(".header").classList.add("visible")
            document.querySelector(".header").classList.remove("hidden")
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        }
    }
})

export const { toggleSideMenu, toggleCart } = sideMenuSlice.actions

export default sideMenuSlice.reducer