import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { apiUrl } from "../../config"

const initialState = {
    shopItem: [],
    isLoading: false,
    success: false
}

export const fetchProductDetails = createAsyncThunk("details/fetch", async (slug) => {
    try {
        const resp = await axios.get(`${apiUrl}/products?slug=${slug}`)
        return resp.data
    } catch (err) {
        return err.message
    }
})

export const shopItemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
            state.shopItem = action.payload
        })
        builder.addCase(fetchProductDetails.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })
    }
})

export default shopItemSlice.reducer