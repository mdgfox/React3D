import { configureStore } from "@reduxjs/toolkit";
import { carouselSlice } from "./carousel/carousel.slice";

export const store = configureStore({
    reducer: {
        carousel: carouselSlice.reducer,
    },
});

export type TypeRootState = ReturnType<typeof store.getState>;