import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { carouselSlice } from "@/store/carousel/carousel.slice";
import { useMemo } from "react";

const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(carouselSlice.actions, dispatch), [dispatch]);
}

export default useActions;