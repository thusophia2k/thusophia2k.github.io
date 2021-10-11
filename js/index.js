$(document).ready(function () {
    $('.button-search').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-wrapper').toggleClass('hide');
    });
    //hide box seach when click outside
    $('body').on('click', function (event) {
        if ($('.button-search').has(event.target).length === 0 && !$('.button-search').is(event.target) && $('.nav-wrapper').has(event.target).length === 0 && !$('.nav-wrapper').is(event.target)) {
            if ($('.nav-wrapper').hasClass('hide') === false) {
                $('.nav-wrapper').toggleClass('hide');
                $('.button-search').toggleClass('active');
            }
        }
    });
    $('#slider').nivoSlider({
        effect: 'random',
        slices: 20,
        boxCols: 20,
        boxRows: 10,
        animSpeed: 500,
        pauseTime: 3000
    });
    $('#slider1').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 10,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000
    });
})

$(document).ready(function () {
    var offset = 250, // At what pixels show Back to Top Button
        scrollDuration = 400; // Duration of scrolling to top
    scrollDuration1 = 5; // Duration of scrolling to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#back-top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
        } else {
            $('#back-top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
        }
    });
    // Smooth animation when scrolling
    $('#back-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, scrollDuration);
    });
    $("#view-more").click(function () {
        $('html, body').animate({
            scrollTop: $("#page-about").offset().top
        }, 2000);
    });
    $("#view-more1").click(function () {
        $('html, body').animate({
            scrollTop: $("#page-about").offset().top
        }, 2000);
    });
    $("#view-more2").click(function () {
        $('html, body').animate({
            scrollTop: $("#page-about").offset().top
        }, 2000);
    });
    $("#view-more3").click(function () {
        $('html, body').animate({
            scrollTop: $("#page-about").offset().top
        }, 2000);
    });
    $('.clients-wrapper').hover(function () {
        $('.clients-wrapper').toggleClass("active")
        $(this).toggleClass("active");
    });
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
