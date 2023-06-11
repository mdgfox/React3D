import { useTypedSelector } from "./useTypedSelector";

export const useCarousel = () => useTypedSelector(state => state.carousel);