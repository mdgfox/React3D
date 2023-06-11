export interface ICarouselItem {
    id: number;
    image: string;
}


export interface ICarousel {
    currentId: number;
    items: Array<ICarouselItem>;
}