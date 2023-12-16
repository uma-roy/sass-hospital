const navItems = document.getElementById('nav-items');
const openNavBtn = document.querySelector('.open-nav-btn');
const closeNavBtn = document.querySelector('.close-nav-btn');

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)

// Close Nav menu when menu items clicked 
if (window.innerWidth < 1024) {
  document.querySelectorAll('#nav-items li a').forEach(navItems => {
    navItems.addEventListener('click', () => {
      closeNav();
    })
  })
}

// Change navbar style when scroll 
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Testimonials
// Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive Breackpoints
    breakpoints: {
        // When windows >= 600px
        600: {
            slidesPerView: 2,
        },

        // When windows >= 1024px
        1024: {
            slidesPerView: 3,
        }
    }
  });