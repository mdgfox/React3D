"use client"

import { FC } from "react"
import { ICarouselItem } from "@/store/carousel/types"
import Image from 'next/image'
import cn from 'clsx'
import { useCarousel } from "@/hooks/useCarousel"
import useActions from "@/hooks/useActions"

interface Props {
    item: ICarouselItem;
}

const CarouselItem: FC<Props> = ({item}) => {
    const {currentId} = useCarousel();
    const {changeCurrentId} = useActions();
    const isActive = currentId === item.id;

    return (
        <div className={
            cn("mx-14", 
                isActive ? 'w-1/2' : 'w-1/4',
            )
        }>
            <button onClick={() => changeCurrentId(item.id)}>
                <Image className="rounded-xl shadow-lg owerflow-hidden" src={item.image} alt='' width={700} height={394}/>
            </button>
            <div 
                className={cn(
                    "mx-auto mt-5 bg-red-aqua h-1 rounded transition-all duration-500 ease-in-out",
                    isActive ? 'w-1/2' : 'w-0'
                )}
            />
        </div>
       
        
    );
}

export default CarouselItem