$(document).ready(function () {
    function handleInputFocusBlur(input, translateY, scale, top) {
        input.focus(function () {
            $(this).siblings('.form-label').css('transform', 'translateY(' + translateY + ') scale(' + scale + ')');
            $(this).siblings('.form-label').css('top', top);
        });

        input.blur(function () {
            if (!$(this).val()) {
                $(this).siblings('.form-label').css('transform', 'translateY(0) scale(1)');
                $(this).siblings('.form-label').css('top', '12px');
            }
        });
    }

    handleInputFocusBlur($('.contactForm .cst_input'), '-50%', '0.75', '0');
    handleInputFocusBlur($('.contactForm .cst_textarea'), '-50%', '0.75', '-10px');

    $('.serviceSection .rightSide .item .box').hover(
        function () {
            $(this).addClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    );

    var sticky = $('.header'),
        scroll = $(window).scrollTop();
    if (scroll >= 10) {
        sticky.addClass('header_fixed');
        sticky.find("#mainLogo").attr('src', 'assest/images/logo.png');
    }
});

$(document).on("click", ".header .navbar-toggler", function () {
    $(this).find("i").toggleClass("fas fa-bars fas fa-times");
    if ($("body").find(".navFix").length > 0) {
        $("body").find(".navFix").remove();
        $("body").find(".header").removeClass("nav-header");
        $("body").removeClass("overflow-hidden");
    } else {
        $("body").append("<div class='navFix'></div>");
        $("body").find(".header").addClass("nav-header");
        $("body").addClass("overflow-hidden");
    }
});

$(document).on("click", ".navFix", function () {
    $(this).remove();
    $(".header .navbar-toggler").find("i").toggleClass("fas fa-times fas fa-bars");
    $("#headerNavbar").removeClass("show");
    $("body").find(".header").removeClass("nav-header");
    $("body").removeClass("overflow-hidden");
});

$('.header .navbar-nav .nav-item.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
});

$('.header .navbar-nav .nav-item.dropdown').on('click', function (e) {
    e.stopPropagation();
});

$(window).scroll(function () {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 10) {
        sticky.addClass('header_fixed');
        sticky.find("#mainLogo").attr('src', 'assest/images/logo.png');
    } else {
        sticky.removeClass('header_fixed');
        sticky.find("#mainLogo").attr('src', 'assest/images/white_logo.png');
    }
});

var phoneInput = $("#phone");
const intl_phoneInput = document.querySelector("#phone");
initializeIntlTelInput(phoneInput);

function initializeIntlTelInput() {
    phoneInput.siblings('.form-label').css('transform', 'translateY(-50%) scale(0.75)');
    phoneInput.siblings('.form-label').css('top', '0');

    window.intlTelInput(intl_phoneInput, {
        utilsScript: "../intlTelInput/js/utils.js",
    });

    var selectedCountryData = window.intlTelInput(intl_phoneInput, 'getSelectedCountryData');
    var maxLength = selectedCountryData.selectedCountryData.dialCode.length + 15;
    phoneInput.attr('maxlength', maxLength);
    var dialCode = selectedCountryData.selectedCountryData.dialCode;
    phoneInput.val("+" + dialCode + " ");
}

phoneInput.on('input', function (event) {
    var inputValue = $(this).val().replace(/[^0-9]/g, '');
    phoneInput.val("+" + inputValue);
});

phoneInput.on('countrychange', function () {
    var selectedCountryData = window.intlTelInput(intl_phoneInput, 'getSelectedCountryData');
    var maxLength = selectedCountryData.selectedCountryData.dialCode.length + 15;
    phoneInput.attr('maxlength', maxLength);
    var dialCode = selectedCountryData.selectedCountryData.dialCode;
    phoneInput.val("+" + dialCode + " ");
});


$("#submitContactForm").on("click", function () {
    // var isValid = phoneInput.intlTelInput("isValidNumber");

    // if (isValid || phoneInput.val() == "") {
    //     alert("Valid phone number!");
    // } else {
    //     alert("Invalid phone number!");
    // }
});