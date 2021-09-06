$(function(){
    

    $('.heroes_slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor:'.heroes_slider_text',
        prevArrow:'<button class=" slick-btn slick-prev"><img src="/images/arr_left.png" alt="prev"></button>',
        nextArrow:'<button class=" slick-btn slick-next"><img src="/images/arr_right.png" alt="prev"></button>',
      });
      $('.heroes_slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.heroes_slider_img',
        arrows:false,
        
      });
});