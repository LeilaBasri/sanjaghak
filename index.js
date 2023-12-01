$(document).ready(function () {

    $('.nav ul li ul li').hover(
        function () {

            $('.nav ul li ul li ul').css("display", "none");
            $('ul', this).css("display", "block");

        }
    );

});
