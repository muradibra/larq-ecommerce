import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";
const initialState = {
    products: [],
    isLoading: false,
    success: false,
    errMessage: ""
}

export const fetchProducts = createAsyncThunk('products/get', async () => {
    try {
        const res = await axios.get(`${apiUrl}/products`)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
            state.success = false
        }),
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.products = action.payload
                    state.isLoading = false
                    state.success = true
                }

            }),
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.success = false
                state.errMessage = action.payload
            })
    }
})

export default productsSlice.reducer