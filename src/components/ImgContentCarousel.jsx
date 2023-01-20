// import Swiper core and required modules


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { person_1 } from "../assets";
import { person_2 } from "../assets";
import { person_3 } from "../assets";
import CustomSlider from "./customSlider/CustomSlider";
import React from "react";

const ImgContentCarousel = () => {
    const slideContents = [
        {
            img: person_1,
            title: "James Carl",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: person_2,
            title: "Craig Smith",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: person_3,
            title: "Peter Wood",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: person_1,
            title: "James Carl",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
            img: person_2,
            title: "Craig Smith",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        }
    ];

    return (
        <>
            {/* Mobile Swiper */}
            {/*<Swiper*/}
            {/*    className="mobile-swiper"*/}
            {/*    style={{ paddingLeft: "0.35rem", paddingRight: "0.35rem" }}*/}
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
            {/*            <div className="p-4 border border-top-0">*/}
            {/*                <h4 className="text-black">{item.title}</h4>*/}
            {/*                <p>{item.text}</p>*/}
            {/*            </div>*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
            <CustomSlider sliderName='firstIndexSlider'>
                {slideContents.map((item) => (
                    <>
                        <img
                            src={item.img}
                            style={{width: "100%", height: "100%"}}
                            className="img-fluid"
                            alt="Free Template by uicookies.com"
                        />
                        <div className="p-4 border border-top-0">
                            <h4 className="text-black">{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </>
                ))}
            </CustomSlider>
            {/* Desktop Swiper */}
            {/*<Swiper*/}
            {/*    className="desktop-swiper"*/}
            {/*    style={{ paddingLeft: "0.35rem", paddingRight: "0.35rem" }}*/}
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
            {/*                    style={{ maxWidth: "360px" }}*/}
            {/*                    src={item.img}*/}
            {/*                    className="img-fluid"*/}
            {/*                    alt="Free Template by uicookies.com"*/}
            {/*                />*/}
            {/*                <div className="p-4 border border-top-0">*/}
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
            {/*                    style={{ maxWidth: "360px" }}*/}
            {/*                    src={item.img}*/}
            {/*                    className="img-fluid"*/}
            {/*                    alt="Free Template by uicookies.com"*/}
            {/*                />*/}
            {/*                <div className="p-4 border border-top-0">*/}
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

export default ImgContentCarousel;
