$(document).ready(function(){

  // 사이트멥 클릭 이벤트

  $(".header .container button.btn-bar").on("click", function(){
      $(".sitemap").addClass("active");
      $(".background-black").addClass("active");
      $('html, body').css({overflow: 'hidden'});
      
  });

  $(".sitemap .close-btn").on("click", function(){
      $(".sitemap").removeClass("active");
      $(".background-black").removeClass("active");
      $('html, body').css({'overflow': 'visible', 'height': 'none'});

  });

  $(".sitemap ul li a.intro").on("click", function(){
      $(".sitemap ul li a.intro").toggleClass("active")
      $(".sitemap ul .intro-li .intro-menu").toggleClass("active");
  });

  // sol-wrap 애니매이션 효과
  $(".sol-wrap .container .sol-top .btn-package").addClass("active");
  $(".sol-wrap .container .sol-top .btn-box button.btn-freeExper").addClass("active");
  $(".sol-wrap .container .sol-top .btn-box button.btn-inquiry").addClass("active");

  // 인크루트웍스 슬라이드
  var swiper = new Swiper('.workSwiper', {
      direction: 'horizontal',
      loop: true,
      speed: 1000,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  //윈도우 리사이즈
  $(window).resize(function(){
    if($(this).width() > 768){
      $('.sitemap').removeClass('active');
      $(".background-black").removeClass("active");
      $('html, body').css({overflow: 'visible'});
    }
  });

  //탑 버튼
  $('.top-btn').click(function(){
    $('html,body').animate({scrollTop:0},100);
  });
});