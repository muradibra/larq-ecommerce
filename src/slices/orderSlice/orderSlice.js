import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

const initialState = {
    orders: [],
    isLoading: false,
    success: false
}

export const placeOrder = createAsyncThunk('orders/post', async (obj) => {
    try {
        const resp = await axios.post(`${apiUrl}/orders`, obj)
        return resp.data;
    } catch (err) {
        return err
    }
})

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(placeOrder.pending, (state, action) => {
            state.isLoading = true;
            state.success = false
        })
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
            state.orders = [...state.orders, action.payload]
        })
        builder.addCase(placeOrder.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
        })
    }
})

export default orderSlice.reducer