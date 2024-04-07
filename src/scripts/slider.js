import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = (
    sliderSelector,
    elementSelector,
    prevBtnSelector,
    nextBtnSelector,
) => {
    return new Swiper(sliderSelector, {
        speed: 400,
        watchSlidesProgress: true,
        direction: 'horizontal',
        effect: 'fade',
        pagination: {
            el: elementSelector,
            type: 'fraction',
            formatFractionCurrent: num => {
                return num > 9 ? num : '0' + num;
            },
            formatFractionTotal: num => {
                return num > 9 ? num : '0' + num;
            },
            renderFraction: function (currentClass, totalClass) {
                return (
                    '<span class="' +
                    currentClass +
                    '">' +
                    '</span>' +
                    '<span class="project-counter__decoration"></span>' +
                    '<span class="' +
                    totalClass +
                    '">' +
                    '</span>'
                );
            },
        },
        autoplay: {
            delay: 3000,
        },
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        parallax: false,

        navigation: {
            nextEl: nextBtnSelector,
            prevEl: prevBtnSelector,
        },
    });
};

export default slider;
