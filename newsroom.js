let newsroomSLider = new Swiper('[data-slider="newsroom"]', {
    slidesPerView: 1,
    autoplay: {
        delay: 10000
    },
    speed: 800,
    loop: true,
    pagination: {
        el: '.newsroom_slider-pagination',
        clickable: true,
    },
});