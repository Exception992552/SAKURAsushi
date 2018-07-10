$(document).ready(function() {
	
$('.slider-offer').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    items:1,
    navText:false,
    smartSpeed:900

    // responsive:{
    //     1200: {
    //     	items: 1
    //     }
    // }
});

$('.slider-order').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:true,
    items:3,
    navText:false,
    smartSpeed:900,
    responsive:{
        1200: {
        	items: 3
         }
     }
});


$('.slider-souce').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:true,
    items:4,
    navText:false,
    smartSpeed:900,
    responsive:{
        1200: {
            items: 4
         }
     }
});

$('.slider-drinks').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:true,
    items:3,
    navText:false,
    smartSpeed:900,
    responsive:{
        1200: {
            items: 3
         }
     }
});

// ymaps.ready(function(){
//      var myMap = new ymaps.Map('map', {
//             center: [55.751574, 37.573856],
//             zoom: 9
//         })
// });



new WOW().init({
    offset:1
});

$("a[href*='#'].link-menu").mPageScroll2id({
 scrollingEasing: "easeOutQuint"
});
$("a[href*='#'].link-down").mPageScroll2id({
 scrollingEasing: "easeOutQuint"
});

});
