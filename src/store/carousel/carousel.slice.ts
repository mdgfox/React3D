import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { ICarousel } from "./types";
import { items } from "./items.data";

const initialState: ICarousel = {
    currentId: 2,
    items,
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        nextSlide: (state) => {
            const nextId = state.currentId + 1;
            const nextItem = state.items.some(item=> item.id === nextId);

            if(!nextItem) return;

            state.currentId = nextId;
        },
        prevSlide: (state) => {
            const prevId = state.currentId - 1;
            if(!prevId) return;

            const prevItem = state.items.some(item=> item.id === prevId);
            if(!prevItem) return;

            state.currentId = prevId;
        },
        changeCurrentId: (state, action: PayloadAction<number>) => {
            state.currentId = action.payload;
        }
        
    }
});