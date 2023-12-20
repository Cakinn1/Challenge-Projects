import { createSlice } from "@reduxjs/toolkit";

export interface Theme {
  theme: ThemeProps;
}

interface ThemeProps {
  isDarkMode: boolean;
}

const initialState: ThemeProps = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeState: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { themeState } = themeSlice.actions;
export default themeSlice.reducer;
