//burger-menu
const burger = document.querySelector('.menu-wrapper');
const menu = document.querySelector('header nav ul')

if(burger){
    burger.addEventListener('click', () => {
        document.querySelector('.hamburger-menu').classList.toggle('animate');
        menu.classList.toggle('menu-active');
    })
}

const url = window.location.href;
const footerTitle = document.querySelector('.footer-mobile h3');
const footerContactsList = document.querySelector('.footer__contacts-list-mobile');
const footerIframe = document.querySelector('.footer-mobile iframe');

if(url.indexOf('contacts') != -1){
    footerTitle.remove();
    footerContactsList.remove();
    footerIframe.remove();
}



const teamButtons = Array.from(document.querySelectorAll('.eclipse-circle'))
const teamItems = Array.from(document.querySelectorAll('.our-team__item'))
const modalClose = Array.from(document.querySelectorAll('.our-team__modal-content__wrapper img'))
const html = document.querySelector('html')

if(teamButtons.length > 0){
    teamButtons.forEach((el) => {
        el.addEventListener('click', () => {
            teamItems.forEach((elem) =>{
                elem.childNodes[9].classList.add('active')
                elem.childNodes[9].childNodes[1].classList.add('active')
            })
            html.classList.add('locked')
        })
    })
    modalClose.forEach((el) => {
        el.addEventListener('click', () => {
            teamItems.forEach((elem) => {
                elem.childNodes[9].classList.remove('active')
                elem.childNodes[9].childNodes[1].classList.remove('active')
            })
            html.classList.remove('locked')
        })
    })
}



const slide = Array.from(document.querySelectorAll('.reviews__slider__slide'))
let swiper
const investmentsSlides = Array.from(document.querySelectorAll(".tourist-destination__item"))
let investSwiper
const advantagesSlides = Array.from(document.querySelectorAll('.advantages__item'))
let advantagesSwiper

if(slide.length > 0){
if(slide.length < 3){
    swiper = new Swiper('.reviews__slider', {
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.review__slider__button-next',
            prevEl: '.review__slider__button-prev'
        }
    })
}
else if(slide.length === 3){
    swiper = new Swiper('.reviews__slider', {
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        loop: true, 
        loopedSlides: 1,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.review__slider__button-next',
            prevEl: '.review__slider__button-prev'
        }
    })
}
else if (slide.length > 3){
    swiper = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        loop: true, 
        loopedSlides: 2,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.review__slider__button-next',
            prevEl: '.review__slider__button-prev'
        }
    })
}
}


if(investmentsSlides.length > 0){
if(investmentsSlides.length < 3){
investSwiper = new Swiper('.tourist-destination__slider', {
    spaceBetween: 40,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints:{
        320:
        {slidesPerView: 1},
        801: {slidesPerView: 2},
    },
})
}
else if(investmentsSlides.length === 3){
investSwiper = new Swiper('.tourist-destination__slider', {
    spaceBetween: 40,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints:{
        320:
        {slidesPerView: 1},
        801: {slidesPerView: 2},
    },
})
}
else if(investmentsSlides.length > 3){
investSwiper = new Swiper('.tourist-destination__slider', {
    spaceBetween: 40,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints:{
        320:
        {slidesPerView: 1},
        801: {slidesPerView: 2},
    },
})
}}

if(advantagesSlides.length > 0){
    if(advantagesSlides.length < 3){
    advantagesSwiper = new Swiper('.advantages-slider', {
        spaceBetween: 40,
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints:{
            320:
            {slidesPerView: 1},
            801: {slidesPerView: 2},
        },
    })
    }
    else if (advantagesSlides.length === 3){
    advantagesSwiper = new Swiper('.advantages-slider', {
        spaceBetween: 40,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints:{
        320:
        {slidesPerView: 1},
        801: {slidesPerView: 2},
    },
    })
    }
    else if (advantagesSlides.length > 3){
        advantagesSwiper = new Swiper('.advantages-slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints:{
                320:
                {slidesPerView: 1},
                801: {slidesPerView: 2},
            },
        })
    }
}















