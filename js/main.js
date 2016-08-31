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

// var hoverParent = $('.scene-block ul li'),
//     hoverChild = $('.hover-block');
// hoverParent.hover(
//     function(){
//         $(".scene-block").find('.hover-block').css('display', 'block');
//     }
// );

// $(function(){
//     $('.scene-block ul li').hover(function(){
//       $('.hover-block').show(1000);
//        },
//        function(){
//         $('.hover-block').hide(1000);
//           });
// });
// when hover on li in class left center-block, z-index add 1000
$(function(){
    $('.left-center-block ul li').mouseover(function(){
      $(this).parents('.left-center-block').css('z-index', '1000');
  });
});
$(function(){
    $('.left-center-block ul li').mouseout(function(){
      $(this).parents('.left-center-block').css('z-index', '100');
  });
});

$(function(){
    $('.right-center-block ul li').mouseover(function(){
      $(this).parents('.right-center-block').css('z-index', '10000');
  });
});
$(function(){
    $('.right-center-block ul li').mouseout(function(){
      $(this).parents('.right-center-block').css('z-index', '100');
  });
});