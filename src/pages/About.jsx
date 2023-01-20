import HeroSection from "../components/HeroSection";
import ServicesCard from "../components/ServicesCard";
import SubscribeSection from "../components/SubscribeSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Title from "../components/Title";
import ImgContentCarousel from "../components/ImgContentCarousel";
import React from "react";



const About = () => {
    return (
        <>
            <HeroSection titleText={"A Good Company"} />
            <section className="probootstrap-section">
                <div className="container">
                    <Title title={"The Team"} />
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <ImgContentCarousel />
                        </div>
                    </div>
                    <Title title={"Our Services"} className={"pt-5"} />
                    <ServicesCard className={"col-lg-4 col-md-6"} />
                </div>
            </section>
            <SubscribeSection />
            <GetInTouchSection />
        </>
    );
};

export default About;
