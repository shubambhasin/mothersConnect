import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    isDarkmode: false,
  },
  reducers: {
    toggleDarkmode: (state) => {
      return {
        ...state,
        isDarkmode: !state.isDarkmode,
      };
    },
    setTheme: (state, action) => {
      return {
        ...state,
        isDarkmode: action.payload,
      };
    },
  },
});

export const { toggleDarkmode, setTheme } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
