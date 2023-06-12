export interface ICarouselItem {
    id: number;
    image: string;
}


export interface ICarousel {
    currentId: number;
    items: Array<ICarouselItem>;
}

export type CarouselType = '2D' | '3D';