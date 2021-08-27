import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        // token: JSON.parse(localStorage?.getItem('socialMediaUser')).token || null,
        token: null,
        currentUser: {
            name: "",
            email: "",
            usernmail: ""
        },
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {

    },
    extraReducers: {

    }

})


export default authSlice.reducer