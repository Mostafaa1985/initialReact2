export const firstIndexSlider = (swiper, current, total) => {
    const activeItem = '<span id="dgggr" class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>'
    const item = '<span class="swiper-pagination-bullet"></span>'
    const hiddenItem = '<span class="swiper-pagination-bullet" hidden></span>'
    let text = '<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">'


    if (swiper.params.slidesPerView === 3) {
        if (current === 1 || current === 2 || current === 3) {
            text += hiddenItem
            text += activeItem
            text += hiddenItem
            text += item
            text += hiddenItem
        } else {
            text += hiddenItem
            text += item
            text += hiddenItem
            text += activeItem
            text += hiddenItem
        }
    }
    if (swiper.params.slidesPerView === 2) {
        if (current === 1 || current === 2) {
            text += activeItem
            text += hiddenItem
            text += item
            text += hiddenItem
            text += item
        } else if (current === 3 || current === 4) {
            text += item
            text += hiddenItem
            text += activeItem
            text += hiddenItem
            text += item
        } else if (current === 5 || current === 6) {
            text += item
            text += hiddenItem
            text += item
            text += hiddenItem
            text += activeItem
        }
    }
    if (swiper.params.slidesPerView === 1) {
        for (let i = 1; i < 6; i++) {
            if (current === i) {
                text += activeItem
            } else {
                text += item
            }
        }
    }

    text += '</div>'

    return text;
};

export const secondIndexSlider = (swiper, current, total) => {
    const activeItem = '<span id="dgggr" class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>'
    const item = '<span class="swiper-pagination-bullet"></span>'
    const hiddenItem = '<span class="swiper-pagination-bullet" hidden></span>'
    let text = '<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">'


    if (swiper.params.slidesPerView === 3) {
        if (current === 1 || current === 2|| current === 3) {
            text += activeItem
            text += hiddenItem
            text += hiddenItem
            text += item
        } else if (current === 4) {
            text += item
            text += hiddenItem
            text += hiddenItem
            text += activeItem
        }
    }
    if (swiper.params.slidesPerView === 2) {
        if (current === 1 || current === 2) {
            text += activeItem
            text += hiddenItem
            text += hiddenItem
            text += item
        } else if (current === 3 || current === 4) {
            text += item
            text += hiddenItem
            text += hiddenItem
            text += activeItem
        }
    }
    if (swiper.params.slidesPerView === 1) {
        for (let i = 1; i < 5; i++) {
            if (current === i) {
                text += activeItem
            } else {
                text += item
            }
        }
    }

    text += '</div>'

    return text;
};


