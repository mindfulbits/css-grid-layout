!function(){for(var e,o=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=t.length,s=window.console=window.console||{};i--;)s[e=t[i]]||(s[e]=o)}(),$(".no-js--osa").addClass("owl-slide-animated").removeClass("no-js--osa"),$("#owl-carousel-hero").on("initialized.owl.carousel",()=>{setTimeout(()=>{$(".owl-item.active .owl-slide-animated").addClass("is-transitioned"),$("section").show()},200)});const $owlCarousel=$("#owl-carousel-hero").owlCarousel({items:1,rtl:!1,animateOut:"fadeOut",animateIn:"fadeIn",nav:!0,dots:!0,loop:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,margin:0,navText:['<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>','<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>']});function setOwlDotsPosition(){doDotsCalculations($(".owl-item.active .owl-slide-text"))}function doDotsCalculations(e){}$owlCarousel.on("changed.owl.carousel",e=>{$(".owl-slide-animated").removeClass("is-transitioned");const o=$(".owl-item").eq(e.item.index);o.find(".owl-slide-animated").addClass("is-transitioned"),doDotsCalculations(o.find(".owl-slide-text"))}),$owlCarousel.on("resize.owl.carousel",()=>{setTimeout(()=>{setOwlDotsPosition()},50)}),setOwlDotsPosition(),$("#owl-carousel-intrest").owlCarousel({items:3,slideBy:3,margin:20,smartSpeed:100,rtl:!1,nav:!0,dots:!0,loop:!0,URLhashListener:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0,dots:!1},600:{items:2,nav:!0,dots:!1},1e3:{items:3,nav:!0,loop:!0}},navText:['<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>','<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>']}),$("#owl-carousel-current").owlCarousel({items:1,rtl:!1,animateOut:"fadeOut",animateIn:"fadeIn",nav:!0,dots:!1,loop:!0,autoplay:!1,navText:['<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>','<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>']});