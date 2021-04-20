$(document).ready(function(){
  $(window).scroll(function(){
      if (this.scrollY > 20){
        $('.navbar').addClass("sticky");
      }else{
        $('.navbar').removeClass("sticky");
    }

  
  });

  var typed = new Typed(".typing", {
    strings: ["front-End Developer", "ReactJs Developer", "Back-end Developer", "freelancer", ],
    typeSpeed: 70,
    BackSpeed: 60,
    loop: true
  });

  // toggle menu/navbar
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  })

  //owl-carousel

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoPlayHoverPause: true,
    responsive:{
      0:{
        item: 1,
        nav: false
      },
      600:{
        item: 2,
        nav: false
      },
      1000:{
        item: 3,
        nav: false

      }
    }
  })
});


