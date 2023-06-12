import useActions from "@/hooks/useActions";
import { FC } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

const Navigation: FC = () => {
    const {nextSlide, prevSlide} = useActions();
    return (
        <div className="mt-10 w-1/2 flex items-center gap-10 justify-center mx-auto">
            <button onClick={() => prevSlide()} className="transition-colors duration-300 hover:text-dark-red"><AiFillCaretLeft size={40}/></button>
            <button onClick={() => nextSlide()} className="transition-colors duration-300 hover:text-dark-red"><AiFillCaretRight size={40}/></button>
        </div>
    );
}

export default Navigation;