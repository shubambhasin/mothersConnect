import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { darkmodeSlice } from "../features/darkmode/darkmodeSlice";
import { homeSlice } from "../features/home/homeSlice";
import { modalSlice } from "../features/modal/modalSlice";
import { postSlice } from "../features/posts/postSlice";
import { userSlice } from "../features/user/userSlice";
import { allUserSlice } from "../features/whoToFollow/allUserSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    darkmode: darkmodeSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
    posts: postSlice.reducer,
    home: homeSlice.reducer,
    allUsers: allUserSlice.reducer,
  },
});
