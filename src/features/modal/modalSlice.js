import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
  },
  reducers: {
    toggleModal: (state) => {
      return {
        ...state,
        showModal: !state.showModal,
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

export const { hideModal,toggleModal } = modalSlice.actions
export default modalSlice.reducer;
