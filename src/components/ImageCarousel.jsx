import * as ReactDOMServer from "react-dom/server";

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import {person_1} from "../assets";
import {person_2} from "../assets";
import {person_3} from "../assets";

const ImageCarousel = () => {
    const slideContents = [person_1, person_2, person_3];

    return (
        <>
            {/* //Tablet & Mobile Swiper */}
            <Swiper
                // className="mobile-swiper"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                }}
                loop={true}
                draggable={true}
                grabCursor={true}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    }
                }}
            >
                {slideContents.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            style={{width: "100%", height: "100%"}}
                            src={item}
                            alt="Free Template by uicookies.com"
                            className="img-fluid"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* //Desktop Swiper */}
            {/*<Swiper*/}
            {/*    className="desktop-swiper"*/}
            {/*    // install Swiper modules*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
            {/*    spaceBetween={5}*/}
            {/*    slidesPerView={1}*/}
            {/*    navigation*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    loop={true}*/}
            {/*    draggable={true}*/}
            {/*    grabCursor={true}*/}
            {/*>*/}
            {/*    <SwiperSlide className="slider">*/}
            {/*        {slideContents.map((item, index) => (*/}
            {/*            <img*/}
            {/*                key={index}*/}
            {/*                style={{ maxWidth: "360px" }}*/}
            {/*                src={item}*/}
            {/*                alt="Free Template by uicookies.com"*/}
            {/*                className="img-fluid"*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide className="img-slider">*/}
            {/*        {slideContents.map((item, index) => (*/}
            {/*            <img*/}
            {/*                key={index}*/}
            {/*                style={{ maxWidth: "360px" }}*/}
            {/*                src={item}*/}
            {/*                alt="Free Template by uicookies.com"*/}
            {/*                className="img-fluid"*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}
        </>
    );
};

export default ImageCarousel;
