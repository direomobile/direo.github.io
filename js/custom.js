$(document).ready(function () {

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $(".text--01").offset().top
        }, 250);
    });

    $("#pricing").click(function () {
        $('html, body').animate({
            scrollTop: $(".pricing-01").offset().top
        }, 250);
    });
    
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $(".cta_form-03").offset().top
        }, 250);
    });


    $('submitButton').click(function(){

        // Prepare
        var data = $(this).serialize();
        // Request

        // hide prior errors, disable inputs while we're submitting
        $("#contactFormError").hide();
        $("#contactForm input").prop('disabled', true);
        // Manipulate the dom
    });
    
});