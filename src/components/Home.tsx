"use client"
import { FC } from "react";
import Carousel from "./Carousel";
import ThemeSwitcher from "./ThemeSwitcher";
import { PortalCarousel } from "./3D/portals/PortalCarousel";

const Home: FC = () => {
    return (
        <div className="p-5 text-gray-500 bg-light dark:text-white dark:bg-dark">
            <h1 className="text-7xl text-center text-dark-gold">My Sandbox</h1>

            <ThemeSwitcher/>

            <Carousel type={'3D'}/>
            <Carousel type={'2D'}/>
            
            <PortalCarousel />
        </div>
    )
}

export default Home;