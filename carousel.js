
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 4,
        perMove: 1,
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 1500,
        pauseOnHover: true,
        type: 'loop',
        autoWidth: true,

        breakpoints: {
            640: {
                perPage: 2,
                gap: '.7rem',
                //height: '6rem',
                pagination: false,
                arrows: false,
                autoplay: true,
                interval: 2000,
                pauseOnHover: true,
                type: 'loop',


            },
            480: {
                perPage: 1,
                gap: '.7rem',
                //height: '6rem',
                pagination: false,
                arrows: false,
                autoplay: true,
                interval: 2000,
                pauseOnHover: true,
                type: 'loop',


            },
        },
    });
    splide.mount();
});

