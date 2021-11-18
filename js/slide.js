    var swiper = new Swiper(".slider", {      
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },      
    });

 var swiper = new Swiper(".products-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides:true,    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,            
      },
      450: {
          slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,            
      },          
      1024: {
        slidesPerView: 4,            
      },
    },
  });


