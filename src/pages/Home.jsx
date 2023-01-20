import React from "react";
import HeroSection from "../components/HeroSection";
import SubscribeSection from "../components/SubscribeSection";
import CardCarousel from "../components/CardCarousel";
import ServicesCard from "../components/ServicesCard";
import ImagesSection from "../components/ImagesSection";
import GetInTouchSection from "../components/GetInTouchSection";
import CustomSlider from "../components/customSlider/CustomSlider";

import {person_1, person_2, person_3} from "../assets";

const slideContents = [person_1, person_2, person_3, person_1, person_2];

const Home = () => {
    return (
        <>
            <HeroSection titleText={"Create Good Free Templates"}/>
            <section className="probootstrap-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <CustomSlider sliderName='firstIndexSlider'>
                                {slideContents.map((item, index) => (
                                    <img
                                        key={index}
                                        style={{width: "100%", height: "100%"}}
                                        src={item}
                                        alt="Free Template by uicookies.com"
                                        className="img-fluid"
                                    />
                                ))}
                            </CustomSlider>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h4 className="text-black">
                                Move Forward. Create Beautiful Templates.
                            </h4>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                        </div>
                    </div>
                    <ServicesCard className={"col-lg-4 col-md-6"}/>
                </div>
            </section>
            <SubscribeSection/>
            <section className="probootstrap-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <CardCarousel/>
                        </div>
                    </div>
                </div>
            </section>
            <ImagesSection/>
            <GetInTouchSection/>
        </>
    );
};

export default Home;

