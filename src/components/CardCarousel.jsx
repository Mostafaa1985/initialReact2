import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomSlider from "./customSlider/CustomSlider";
import React from "react";

const CardCarousel = () => {
    const cardsContent = [
        {
            icon: "oi oi-person",
            title: "For People Like You",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-monitor",
            title: "Web Development",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-location",
            title: "Free Bootsrap 4",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            icon: "oi oi-pencil",
            title: "For People Like You",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
    ];


    return (
        <>
            <CustomSlider sliderName='secondIndexSlider'>
                {cardsContent.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                        className={""}
                    />
                ))}
            </CustomSlider>
        </>
    );
};

export default CardCarousel;
