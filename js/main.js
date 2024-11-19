var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }  
});


$(document).ready(function () {
  $(".plus").click(function(){
    if($(this).prev().val()<20)
    {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
  });
  $(".minus").click(function(){
    if($(this).next().val()<20)
    {
      $(this).next().val(+$(this).next().val() - 1);
    }
  });
});