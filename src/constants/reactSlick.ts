export default {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
    responsive: [
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            },
        },

    ],
};