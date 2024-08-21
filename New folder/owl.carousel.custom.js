// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         margin: 10,
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         items: 1,
//         onInitialized: addTimestampsToDots,
//         onChanged: addTimestampsToDots
//     });
//     function  addTimestampsToDots(event){
//         var baseTime = new Date();
//         $('.owl-dot').each(function(index , element){
//             var timestamp = new Date(baseTime.getTime() + index * 60000).toLocaleDateString();
//             $(element).html('<span>' + '</span>');
//         });

//     }
// });
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // Ensure the loop is disabled to avoid repeat
        margin:1, // Margin between items
        dots: true, // Show pagination dots
        nav:false,
        slidesPerView: 1,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Autoplay interval in milliseconds
        mouseDrag: false,
        fluidSpeed: 0,
        smartSpeed: 500,
        clickable: true,
        responsiveClass: true,

    });

 
});

