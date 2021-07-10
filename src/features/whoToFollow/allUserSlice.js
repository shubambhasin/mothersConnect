import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";

export const getAllUsersList = createAsyncThunk(
  "user/getAllUsersList",
  async () => {
    try {
      const response = await instance.get(`/profiles/`);
      console.log(response);
    } catch {}
  }
);

export const getParticularUser = createAsyncThunk(
  "user/getParticularUser",
  async (id) => {
    try {
      const response = await instance.get(`/profiles/${id}`);
      console.log("get particularUser*********", response);
      if (response.data.user.length !== 0) return response.data.user;
      else return null;
    } catch {}
  }
);

export const allUserSlice = createSlice({
  name: "allUserSlicw",
  initialState: {
    totalUsers: [],
    particularUser: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getParticularUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getParticularUser.fulfilled]: (state, action) => {
      state.particularUser = action.payload;
      state.status = "success";
    },
    [getParticularUser.rejected]: (state, action) => {
      state.particularUser = [];
      state.status = "failed";
    },
  },
});

export default allUserSlice.reducer;
