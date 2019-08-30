$('#owl-carousel-intrest').owlCarousel({
    items:3,
    slideBy: 3,
    margin:20,
    smartSpeed: 100,
    rtl: false,
    nav: true,
    dots: true,
    loop: true,
    URLhashListener: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:2,
            nav:true,
            dots:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    },
    navText: [
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
    ]
});




