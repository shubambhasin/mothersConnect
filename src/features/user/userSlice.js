import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/Axios";
import { notify } from "../../services/notification";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (user, thunkAPI) => {
    try {
      const response = await instance.post("/signup", {
        ...user,
      });

      console.log(response);
      let data = response.data;
      console.log("data", data);
      if (response.status === 200) {
        localStorage.setItem(
          "socialMediaUser",
          JSON.stringify({
            isUserLoggedIn: true,
            token: data.token,
            name: data.name,
            _id: data._id,
          })
        );

        return { ...data, username: data.name };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (user, thunkAPI) => {
    try {
      notify("Signing in...⏳")
      const response = await instance.post("/signin", {
        ...user,
      });
      
      console.log(response);
      let data = response.data;
      console.log("data", data);
      if (response.status === 200) {
        notify("Signing in successful...✅")
        localStorage.setItem(
          "socialMediaUser",
          JSON.stringify({
            isUserLoggedIn: true,
            token: data.token,
            name: data.name,
            _id: data._id,
          })
        );

        return { ...data, username: data.name };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const userFromLocalStorage = JSON.parse(
  localStorage.getItem("socialMediaUser")
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: userFromLocalStorage?.name || null,
    token: userFromLocalStorage?.token || null,
    _id: userFromLocalStorage?._id || null,
    login: userFromLocalStorage?.isUserLoggedIn || false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    totalUsers: [],
  },
  reducers: {
  
    logout: (state) => {
      localStorage.removeItem("socialMediaUser");
      return {
        ...state,
        username: null,
        token: null,
        _id: null
      };
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.login = true;
      state.email = payload.email;
      state.token = payload.token;
      state.username = payload.name;
      state._id = payload._id
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.login = true
      state.email = payload.email;
      state.token = payload.token;
      state.username = payload.name;
      state._id = payload._id
    },
    [signinUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
