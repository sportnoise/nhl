import $ from "jquery";
import tippy from 'tippy.js';
import Swiper from './swiper.js';

window.jQuery = $;
window.$ = $;

import a from './jquery.mousewheel.js';
import b from './jquery.jscrollpane.js';

$(function() {

    // Раскрытие меню на мобиле
    $('.menu-top-btn').click(function(){

        $('.menu-mobile').addClass('menu-mobile_open');
        $('body').css({'overflow': 'hidden'});
    });

    $('.menu-mobile__close').click(function(){

        $('.menu-mobile').removeClass('menu-mobile_open');
        $('body').css({'overflow': 'auto'});
    });

    // Показать / Скрыть Выбор региона
    $('.header-top__region-selection').click(function(){

        $('.region-select').slideToggle();
    });

    $('.region-select__close').click(function(){

        $('.region-select').slideUp();
    });

    // Показать / Скрыть Поиск
    $('.header-bottom__search').click(function(){

        $('.search-form').slideToggle();
    });

    $('.search-form__close').click(function(){

        $('.search-form').slideUp();
    });

    // Полоса прокрутки
    if ($(window).width() > 575)
    {
        $('.scroll-pane').jScrollPane({autoReinitialise: true});
    }

    // Подсказки
    tippy('[data-tippy-content]', {
        delay: [800, 200],
        allowHTML: true,
    });

    // Прокрутка На верх
    $(".to-top").bind('click', function(e){

        e.preventDefault();

        $('body,html').animate({scrollTop: 0}, 1000);    
    });

    // Вкладки
    $('.tabs-panel_active a').click(function(){

        let elem = $(this).parent('.tabs-panel');

        elem.find('.tabs-panel__link_active').removeClass('tabs-panel__link_active');
        $(this).addClass('tabs-panel__link_active');

        $('#' + elem.data('for')).find('.tabs-items__item_active').removeClass('tabs-items__item_active');
        $('#' + $(this).data('id')).addClass('tabs-items__item_active');

        return false;
    });

    $('.tabs-num_active a').click(function(){

        let elem = $(this).parent('.tabs-num');

        elem.find('.tabs-num__link_active').removeClass('tabs-num__link_active');
        $(this).addClass('tabs-num__link_active');

        $('#' + elem.data('for')).find('.tabs-items__item_active').removeClass('tabs-items__item_active');
        $('#' + $(this).data('id')).addClass('tabs-items__item_active');

        return false;
    });

    // Главный слайдер
    $('.slider-index__progressbar-count_last').text('0' + $('.slider-index__item').length);

    let mainSlider = new Swiper('.slider-index__slider', {
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 1,
        slideActiveClass: 'slider-index__item_active',
        breakpoints: {
            576: {
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.slider-index__progressbar',
            type: 'progressbar',
            progressbarFillClass: 'slider-index__progressbar-full'
        },
        navigation: {
            nextEl: '.slider-index__next',
            prevEl: '.slider-index__prev',
        },
    });

    // Линия фотографий
    if ($(window).width() > 767)
    {
        new Swiper('.face-line', {
            loop: true,
            simulateTouch: false,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 0,
            },
            width: 2560,
            speed: 60000,
        });
    }
});