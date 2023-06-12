"use client"
import { useCarousel } from "@/hooks/useCarousel"
import { FC, useMemo } from "react";
import Navigation from "./Navigation";
import Carousel3DItem from "./3D/Carouse3DItem";
import { CarouselType } from "@/store/carousel/types";
import CarouselItem from "./2D/CarouselItem";

const Carousel: FC<{type: CarouselType}> = ({type}) => {
    const {items} = useCarousel();

    const render = useMemo(() => {
        if(!items.length) {
            return (<div>Elements Not Found</div>);
        }
        const itemComponents = items.map((item) => {
            return type === '3D' ? <Carousel3DItem key={item.id} item={item}/> : <CarouselItem  key={item.id} item={item}/>;
        });
        
        return itemComponents;
    }, []);
    
    return (
        <section className="mt-5">
            <h2 className="text-4xl text-center text-dark-gold">{type} Carousel</h2>
            <div className="flex items-center justify-around mt-5">
                {render}
            </div>
            <Navigation/>
        </section>
    )
}

export default Carousel