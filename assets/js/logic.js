$(document).ready(function () {

    // hide menu 
    $('.menu').hide();

    // when + clicked...
    $('#plus').on('click', function () {

        // hide +
        $('#plus').hide();

        // show menu
        $('.menu').show();

    });

    // when x clicked...
    $('#X').on('click', function () {

        // hide menu
        $('.menu').hide();

        // show +
        $('#plus').show();
    });

});