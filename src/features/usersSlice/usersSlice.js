import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    success: false,
    errMessage: ""
}

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
    try {
        const res = await axios.get('http://localhost:3000/users')
        return res.data
    } catch (error) {
        return error.message
    }
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
            state.success = false
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.users = action.payload
                    state.isLoading = false
                    state.success = true
                }

            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false
                state.success = false
                state.errMessage = action.payload
            })
    }
})

export default userSlice.reducer