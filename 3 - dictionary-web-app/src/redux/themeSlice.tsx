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

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isDarkModeTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { isDarkModeTheme } = themeSlice.actions;
export default themeSlice.reducer;
