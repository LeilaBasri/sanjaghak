$(document).ready(function () {
    $(".open-cart").click(function () {
        $(".open-cart").toggleClass("active-cart");
        $(".cart").fadeToggle();
    })
    $(".sale-timeout-counter").startTimer();
    $('.selectpicker').selectpicker({
        size: 10
    });
    $("#owl-example").owlCarousel();
    $(".fancybox").fancybox();
    $(".zoom").elevateZoom();
})