import React from "react";
import HeroSection from "../Component/UI/HeroSection";
import Reviews from "../Component/UI/Reviews";
import Features from "../Component/UI/Features";
import Work from "../Component/UI/Work";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Features />
            <Work />
            <Reviews />
        </>
    );
};

export default Home;
