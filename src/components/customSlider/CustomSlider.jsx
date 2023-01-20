// import Swiper core and required modules
import React from "react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './customSlider.css';

// helper function
import {firstIndexSlider,secondIndexSlider} from "./SliderPagination";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CustomSlider = (props) => {
    const slider = props.sliderName
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    type: 'custom',
                    renderCustom: (swiper, current, total) => {
                        if(slider === 'firstIndexSlider') return firstIndexSlider(swiper, current, total)
                        if(slider === 'secondIndexSlider') return secondIndexSlider(swiper, current, total)
                    }
                }}
                loop={true}
                draggable={true}
                grabCursor={true}
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }}
            >
                {React.Children.map(props.children, child => (
                    <SwiperSlide>
                        {React.cloneElement(child)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CustomSlider;
