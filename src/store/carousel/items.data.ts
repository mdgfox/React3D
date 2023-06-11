import { ICarouselItem } from "./types";

const getImageUrl = (path: string) => `http://localhost:3000/${path}` 

export const items: Array<ICarouselItem> = [
    {id: 1, image: getImageUrl('carousel/1.jpg')},
    {id: 2, image: getImageUrl('carousel/2.jpg')},
    {id: 3, image: getImageUrl('carousel/3.jpg')},
];