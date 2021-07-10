import { createSlice} from "@reduxjs/toolkit"

export const profileSlice = createSlice({

    name: "profile",
    initialState:{
        userDetails: [],
        posts:[]
    },
    reducer: {

    },
    extraReducers: {
        
    }

})

export default profileSlice.reducer