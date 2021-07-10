import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { darkmodeSlice } from "../features/darkmode/darkmodeSlice";
import { homeSlice } from "../features/home/homeSlice";
import { postSlice } from "../features/posts/postSlice";
import { toastSlice } from "../features/toast/toastSlice";
import { userSlice } from "../features/user/userSlice";
import {allUserSlice} from "../features/whoToFollow/allUserSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    darkmode: darkmodeSlice.reducer,
    toast: toastSlice.reducer,
    user: userSlice.reducer,
    posts: postSlice.reducer,
    home: homeSlice.reducer,
    allUsers: allUserSlice.reducer
  },
});
