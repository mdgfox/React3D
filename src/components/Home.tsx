import { FC } from "react";
import Carousel from "./Carousel";

const Home: FC = () => {
    return (
        <div className="m-20">
            <h1 className="text-7xl text-center">Carousel</h1>
            <Carousel/>
        </div>
    )
}

export default Home;