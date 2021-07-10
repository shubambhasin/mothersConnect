import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toastNotification",
  initialState: {
    showToast: false,
    toastMessage: "",
  },
  reducers: {
    showToast: (state, action) => {
      return {
        ...state,
        showToast: true,
        toastMessage: action.payload,
      };
    },
    hideToast: (state, action) => {
        return {
          ...state,
          showToast: false,
          toastMessage: "",
        };
      },
  },
  extraReducers: {},
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
