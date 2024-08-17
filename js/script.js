/*=============== HOME INDICATOR ===============*/
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('#homeCarouselAutoplaying');

  const homeIndicator1 = document.querySelector('.js-indicator-1');
  const homeIndicator2 = document.querySelector('.js-indicator-2');
  const homeIndicator3 = document.querySelector('.js-indicator-3');
  function updateIndicators() {
    homeIndicator1.classList.remove('indicator-active');
    homeIndicator2.classList.remove('indicator-active');
    homeIndicator3.classList.remove('indicator-active');

    const activeItem = document.querySelector('.home-carousel-item.active');
    
    if (activeItem.classList.contains('js-carousel-item-1')) {
      homeIndicator1.classList.add('indicator-active');
    } else if (activeItem.classList.contains('js-carousel-item-2')) {
      homeIndicator2.classList.add('indicator-active');
    } else if (activeItem.classList.contains('js-carousel-item-3')) {
      homeIndicator3.classList.add('indicator-active');
    }
  }

  carousel.addEventListener('slide.bs.carousel', updateIndicators);
});

/*=============== PORTFOLIO BUTTON ACTIVE ===============*/

document.querySelectorAll('.js-project-name').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.js-project-name').forEach(btn => {
      if (btn.classList.contains('active')) {
        btn.classList.add('project-name-active');
      } else {
        btn.classList.remove('project-name-active');
      }
    });
  });
});


/*=============== Founder INDICATOR ===============*/
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('#founderCarouselAutoplaying');

  const founderIndicator1 = document.querySelector('.js-founder-indicator-1');
  const founderIndicator2 = document.querySelector('.js-founder-indicator-2');
  const founderIndicator3 = document.querySelector('.js-founder-indicator-3');
  function updateIndicators() {
    founderIndicator1.classList.remove('indicator-active');
    founderIndicator2.classList.remove('indicator-active');
    founderIndicator3.classList.remove('indicator-active');

    const activeItem = document.querySelector('.founder-carousel-item.active');
    
    if (activeItem.classList.contains('js-founder-carousel-item-1')) {
      founderIndicator1.classList.add('indicator-active');
    } else if (activeItem.classList.contains('js-founder-carousel-item-2')) {
      founderIndicator2.classList.add('indicator-active');
    } else if (activeItem.classList.contains('js-founder-carousel-item-3')) {
      founderIndicator3.classList.add('indicator-active');
    }
  }

  carousel.addEventListener('slide.bs.carousel', updateIndicators);
});