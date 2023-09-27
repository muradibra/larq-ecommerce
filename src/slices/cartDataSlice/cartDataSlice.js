import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

const initialState = {
    cartData: [],
    success: false,
    isLoading: false
}

export const getCart = createAsyncThunk("cart/get", async () => {
    try {
        const resp = await axios.get(`${apiUrl}/cart`)
        return resp.data
    } catch (err) {
        return err
    }
})

export const addToCart = createAsyncThunk("cart/post", async (obj) => {
    try {
        const resp = await axios.post(`${apiUrl}/cart`, obj)
        return resp.data
    } catch (err) {
        return err
    }
})

export const updateCart = createAsyncThunk("cartData/put", async (updatedProduct) => {
    try {
        const resp = await axios.patch(`${apiUrl}/cart/${updatedProduct.id}`, updatedProduct)
        // console.log("put request", resp.data)
        return resp.data
    } catch (err) {
        return err
    }
})

export const deleteCartItem = createAsyncThunk("cartData/delete", async (id) => {
    try {
        const resp = await axios.delete(`${apiUrl}/cart/${id}`)
        return id
    } catch (err) {
        return err
    }
})

export const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCart.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
            state.cartData = [...state.cartData, ...action.payload]
        })
        builder.addCase(getCart.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })

        builder.addCase(addToCart.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true

            state.cartData = [...state.cartData, action.payload];
        })
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })

        builder.addCase(updateCart.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true

            const updatedProductIndex = state.cartData.findIndex(item => item.id === action.payload.id)

            if (updatedProductIndex !== -1) {
                state.cartData[updatedProductIndex].quantity = action.payload.quantity
            }

            // state.cartData = [...state.cartData, action.payload]
            // console.log(action.payload)
        })
        builder.addCase(updateCart.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })

        builder.addCase(deleteCartItem.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteCartItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
            state.cartData = state.cartData.filter(item => item.id !== action.payload)
        })
        builder.addCase(deleteCartItem.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })
    }
})

export default cartDataSlice.reducer