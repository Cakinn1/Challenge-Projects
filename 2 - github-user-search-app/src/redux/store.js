import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './feature/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice
  },
})