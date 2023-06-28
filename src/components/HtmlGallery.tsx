import { useCarousel } from "@/hooks/useCarousel";
import { FC, useMemo } from "react";

const HtmlGallery: FC = () => {
    const {items} = useCarousel();
    
    const images = useMemo(() => {
        return items.map(item => {
            return (
                <article className="relative left-0 max-w-[80px] hover:max-w-none rounded-2xl h-96 overflow-hidden shadow-md flex-[0.25] transition ease-in-out duration-500 hover:flex-[2] hover:font-bold hover:cursor-pointer hover:rounded-xl">
                    <figure>
                        <img
                            className="h-96"
                            src={item.image}
                            alt={item.id.toString()}
                            title={item.id.toString()}
                        />
                    </figure>
                </article>
            );
        });
    }, [items]);
    return (
        <span className="grid place-items-center">
            <section className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
                {images}
            </section>
        </span>
    );
}

export default HtmlGallery;