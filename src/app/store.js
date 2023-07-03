import { configureStore } from "@reduxjs/toolkit";
import slideReducer from '../features/Slices/SliderSlice'

export const store = configureStore({
    reducer: {
        slider: slideReducer
    }
})