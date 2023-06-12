import { FC } from "react";
import Carousel from "./Carousel";

const Home: FC = () => {
    return (
        <div className="m-5">
            <h1 className="text-7xl text-center text-dark-gold">My Sandbox</h1>
            <Carousel type={'3D'}/>
            <Carousel type={'2D'}/>
        </div>
    )
}

export default Home;