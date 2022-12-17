
$(function () {
    $('.header__btn').on('click', function (){
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function (){
        $('.rightside-menu').addClass('rightside-menu--close')
    })
})

$('.top__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});