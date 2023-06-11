import { useCarousel } from "@/hooks/useCarousel"
import { FC } from "react";
import Navigation from "./Navigation";
import Carousel3DItem from "./3D/Carouse3DItem";

const Carousel: FC = () => {
    const {items} = useCarousel();
    
    return (
        <section className="mt-10">
            <div className="flex items-center justify-between">
                {items.length ? items.map(item => <Carousel3DItem key={item.id} item={item}/>) : <div>Elements Not Found</div>}
                
            </div>
            <Navigation/>
        </section>
    )
}

export default Carousel