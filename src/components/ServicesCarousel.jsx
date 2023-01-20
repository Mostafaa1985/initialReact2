// import Swiper core and required modules


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { img_1 } from "../assets";
import { img_2 } from "../assets";
import { img_3 } from "../assets";
import CustomSlider from "./customSlider/CustomSlider";
import React from "react";

const ServicesCarousel = () => {
    const slideContents = [
        {
            img: img_1,
            title: "Service Title Here",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: img_2,
            title: "Service Title Here",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: img_3,
            title: "Service Title Here",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: img_1,
            title: "Service Title Here",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: img_2,
            title: "Service Title Here",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        }
    ];

    return (
        <>
            <CustomSlider sliderName='firstIndexSlider'>
                {slideContents.map((item, index) => (
                    <>
                        <img
                            src={item.img}
                            className="img-fluid"
                            alt="Free Template by uicookies.com"
                        />
                        <div className="p-4">
                            <h4 className="text-black">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </>
                ))}
            </CustomSlider>
            {/* Mobile Swiper */}
            {/*<Swiper*/}
            {/*    // className="mobile-swiper"*/}
            {/*    // install Swiper modules*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
            {/*    spaceBetween={10}*/}
            {/*    slidesPerView={1}*/}
            {/*    navigation*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    loop={true}*/}
            {/*    draggable={true}*/}
            {/*    grabCursor={true}*/}
            {/*    breakpoints={{*/}
            {/*        460: {*/}
            {/*            slidesPerView: 2,*/}
            {/*        },*/}

            {/*        780: {*/}
            {/*            slidesPerView: 3,*/}
            {/*        },*/}
            {/*    }}>*/}
            {/*    {slideContents.map((item, index) => (*/}
            {/*        <SwiperSlide key={index}>*/}
            {/*            <img*/}
            {/*                src={item.img}*/}
            {/*                className="img-fluid"*/}
            {/*                alt="Free Template by uicookies.com"*/}
            {/*            />*/}
            {/*            <div className="p-4">*/}
            {/*                <h4 className="text-black">{item.title}</h4>*/}
            {/*                <p>{item.text}</p>*/}
            {/*            </div>*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
            {/* Desktop Swiper */}
            {/*<Swiper*/}
            {/*    className="desktop-swiper"*/}
            {/*    // install Swiper modules*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
            {/*    spaceBetween={10}*/}
            {/*    slidesPerView={1}*/}
            {/*    navigation*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    loop={true}*/}
            {/*    draggable={true}*/}
            {/*    grabCursor={true}>*/}
            {/*    <SwiperSlide className="slider">*/}
            {/*        {slideContents.map((item, index) => (*/}
            {/*            <div>*/}
            {/*                <img*/}
            {/*                    src={item.img}*/}
            {/*                    className="img-fluid"*/}
            {/*                    alt="Free Template by uicookies.com"*/}
            {/*                />*/}
            {/*                <div className="p-4">*/}
            {/*                    <h4 className="text-black">{item.title}</h4>*/}
            {/*                    <p>{item.text}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide className="slider">*/}
            {/*        {slideContents.map((item, index) => (*/}
            {/*            <div key={index}>*/}
            {/*                <img*/}
            {/*                    src={item.img}*/}
            {/*                    className="img-fluid"*/}
            {/*                    alt="Free Template by uicookies.com"*/}
            {/*                />*/}
            {/*                <div className="p-4">*/}
            {/*                    <h4 className="text-black">{item.title}</h4>*/}
            {/*                    <p>{item.text}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}
        </>
    );
};

export default ServicesCarousel;
