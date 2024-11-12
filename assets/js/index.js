$(document).ready(function(){
  //스와이퍼 슬라이드
  var swiper = new Swiper('.companySwiper', {

      direction: 'horizontal',
      loop: true,
      speed: 800,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  //탑 버튼
  $('.fixed-bottom').click(function(){
    $('html,body').animate({scrollTop:0},100);
  });
});