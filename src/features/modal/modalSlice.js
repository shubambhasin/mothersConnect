import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state) => {
      return {
        ...state,
        showModal: true,
      };
    },
    hideModal: (state) => {
      return {
        ...state,
        showModal: false,
      };
    },
  },
});

export const { hideModal, showModal } = modalSlice.reducer;
export default modalSlice.reducer;
