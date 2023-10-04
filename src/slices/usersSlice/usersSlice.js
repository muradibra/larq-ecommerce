import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

const initialState = {
    users: [],
    isLoading: false,
    success: false,
    errMessage: ""
}

export const fetchUsers = createAsyncThunk("user/get", async () => {
    try {
        const resp = await axios.get(`${apiUrl}/users`)
        return resp.data
    } catch (err) {
        return err.message
    }
})

export const addUser = createAsyncThunk("user/post", async (obj) => {
    try {
        const resp = await axios.post(`${apiUrl}/users`, obj)
        return resp.data
    } catch (err) {
        return err.message
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
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.users = action.payload
                state.isLoading = false
                state.success = true
            }

        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.success = false
            state.errMessage = action.payload
        })

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true
            state.success = false
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
            state.users = [...state.users, action.payload]
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false,
            state.success = false
        })
    }
})

export default userSlice.reducer