$('#owl-carousel-current').owlCarousel({
    items: 1,
    rtl: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    dots: false,
    loop: true,
    autoplay: false,
    navText: [
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
      ]
});