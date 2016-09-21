// For lenguage list
$(function () {
    $('.lenguage-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('lenguage-list-active');
        }
    });
});
$(function () {
    $('.hidden-menu .language-item a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('active-lenguage');
        }
    });
});
// for main menu
$(function () {
    $('.list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('list-menu-active');
        }
    });
});

// for pagination on poster page
$(function () {
    $('.list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('list-menu-active');
        }
    });
});

// for Russevent_bilet_more slider
var swiper_main = new Swiper('.swiper-container-bilet-more', {
    nextButton: '.swiper-button-bilet-more-next',
    prevButton: '.swiper-button-bilet-more-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});

// mobile slider
var swiper_main = new Swiper('.swiper-container-bilet-more-mobile', {
    paginationClickable: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});
// // on scene2 hover left-block
// $(".left-center-block .left-ceter").hover(
//   function() {
//     $(this).parent(".left-center-block").addClass("left-hover")
//   }, function() {
//     $(this).parent(".left-center-block").removeClass("left-hover")
//   }
// );
// // on scene2 hover rigth-block
// $(".right-center-block .right-ceter").hover(
//   function() {
//     $(this).parent(".right-center-block").addClass("right-hover")
//   }, function() {
//     $(this).parent(".right-center-block").removeClass("right-hover")
//   }
// );