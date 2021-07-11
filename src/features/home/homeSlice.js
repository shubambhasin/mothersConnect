import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";

export const getPostsForHome = createAsyncThunk(
  "home/getPostsForHome",
  async () => {
    try {
      const response = await instance.get("/home");
      return response.data.posts;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const getUsersToFollow = createAsyncThunk(
  "home/getUsersToFollow",
  async () => {
    try {
      const response = await instance.get("/users");
      if(response.data.success)
      {
        return response.data.users;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const updateFollow = createAsyncThunk(
  "posts/updateFollow",
  async (user) => {
    try {

      const response = await instance.post('/users/follow', user);
      console.log(response);
      if(response.data.success)
      {
        return response.data.updatedUsers;
      }
      else{
        return response.data.updatedUsers;
      }
    } catch (error) {
      console.log(error);
    }
  }
);


export const homeSlice = createSlice({
  name: "home",
  initialState: {
    posts: [],
    users: [],
    status: null,
  },
  reducers: {

  },
  extraReducers: {
    [getPostsForHome.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPostsForHome.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getPostsForHome.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getUsersToFollow.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsersToFollow.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsersToFollow.rejected]: (state, action) => {
      state.users = state.users.map((user) => user);
    },
    [updateFollow.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateFollow.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [updateFollow.rejected]: (state, action) => {
      state.users = state.users.map((user) => user);
    },
  },
});

export default homeSlice.reducer;
