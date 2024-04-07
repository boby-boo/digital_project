import './index.html';
import './index.scss';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import accordion from './scripts/accordion';
import menu from './scripts/menu';
import slider from './scripts/slider';

window.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    accordion('.footer-list__item h3', '.footer-list__item ul');
    menu('.header-button', '.header-mobile');
    slider(
        '.swiper',
        '.project-counter',
        '.project-btn__prev-btn',
        '.project-btn__next-btn',
    );
});
