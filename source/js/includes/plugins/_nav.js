// grab an element
var myElement = document.querySelector("#nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
  "offset": 0,
  "tolerance": 5
});
headroom.init();

//https://codepen.io/vailjoy/pen/zNpdmb

$('.toggle').click(function(){
    $('#nav').toggleClass('menu-open');
});
$('#nav a').click(function(){
    $('#nav').toggleClass('menu-open');
});    