import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/form';
import changeModalState from './modules/changeModalState';
import closeModal from './modules/closeModal';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-09-11';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_img_more', 'inline-block');
    closeModal('.popup_engineer');
    closeModal('.popup');
    closeModal('.popup_calc');
    closeModal('.popup_calc_profile');
    closeModal('.popup_calc_end');
    
   
    forms(modalState, '[data-modal]');
    timer('.container1', deadline);
    images();
    
});

