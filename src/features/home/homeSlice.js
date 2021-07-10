import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";

export const getPostsForHome = createAsyncThunk(
  "home/getPostsForHome",
  async () => {
    try {
      const response = await instance.get("/home");
      console.log("get posts fro home",response)
      
      return response.data.posts;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const handleLikes = createAsyncThunk(
    "home/handleLikes",
    async(postId, userId) => {
        
    }
)

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    posts: [],
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
  },
});

export default homeSlice.reducer;
