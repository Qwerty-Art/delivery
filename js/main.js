const swiper = new Swiper('.rew-sl', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  margin: 20,
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.rew-sl-next',
    prevEl: '.rew-sl-prev',
  },


});

(function () {
  // const modal = document.querySelector('.wrap-box-modal');

  // document.addEventListener('click', (e) => {
  //   const withinBoundaries = e.composedPath().includes(modal);
  //   console.log(modal.classList.contains('-show'))
  //   if (!withinBoundaries && modal.classList.contains('-show')) {
  //     modal.classList.remove('-show')
  //   }
  // })


  Array.from(document.querySelectorAll('.header-btn')).forEach(el => {
    el.addEventListener('click', () => {
      document.querySelector('.wrap-box-modal').classList.add('-show')
    })
  })

  Array.from(document.querySelectorAll('.box-delivery-btn')).forEach(el => {
    el.addEventListener('click', () => {
      document.querySelector('.wrap-box-modal').classList.add('-show')
    })
  })

  document.querySelector('.modal-form .btn-close').addEventListener('click', () => {
    document.querySelector('.wrap-box-modal').classList.remove('-show')
  })
})()