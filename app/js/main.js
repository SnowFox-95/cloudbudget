const swiper = new Swiper(".slider", {
    slidePerView:3,
    spaceBetween: 30,
    freemode:true,
    loop: true, /* зацикленность слайдера */
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, /* автовоспроизведение */
    
  });