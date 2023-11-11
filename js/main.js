Array.from(document.querySelectorAll('.copyright')).forEach(el => el.innerHTML = `© ${new Date().getFullYear()}`)

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
  // const phone = document.querySelector('.mobile-tel-list');

  // document.addEventListener('click', (e) => {
  //   const withinBoundaries = e.composedPath().includes(phone);
  //   console.log(phone.classList.contains('-show'))
  //   console.log(e.target.classList.contains)
  //   if (!withinBoundaries && phone.classList.contains('-show')) {
  //     phone.classList.remove('-show')
  //   }
  // })

  document.querySelector('.btn-header-tel').addEventListener('click', function() {
    if(this.nextSibling.nextElementSibling.classList.contains('-show'))
      this.nextSibling.nextElementSibling.classList.remove('-show')
    else
      this.nextSibling.nextElementSibling.classList.add('-show')
  })

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