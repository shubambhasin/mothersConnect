import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await instance.get("/posts");
    console.log(response);
    if (response.data.posts.length !== 0) return response.data.posts;
    else return null;
  } catch (error) {
    console.log(error);
  }
});

export const sendPost = createAsyncThunk("posts/sendPost", async (post) => {
  try {
    console.log(post);
    const response = await instance.post("/posts", post);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export const updateLikes = createAsyncThunk(
  "posts/updateLikes",
  async (post) => {
    try {
      console.log(post._id);
      const response = await instance.post(`/posts/${post._id}/like`, post);
      console.log(response);
      if(response.data.success)
      {
        return response.data.updatedPosts;
      }
      else{
        return response.data.updatedPosts;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],

    status: null,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload !== null ? action.payload : [];
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateLikes.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateLikes.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload !== null ? action.payload : [];
    },
    [updateLikes.rejected]: (state, action) => {
      state.status = "failed";
      state.posts = state.posts.map((post) => post);
    },
  },
});

export default postSlice.reducer;
