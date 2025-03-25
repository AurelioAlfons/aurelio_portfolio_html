// Smooth scroll with offset
function applyScrollOffset() {
    document.querySelectorAll('a.scroll-offset').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        const offset = -window.innerHeight / 8;
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
  
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }
  
  // Load navbar and attach behavior
  fetch('widget/navbar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
      applyScrollOffset();
  
      let lastScrollTop = 0;
      const navbar = document.querySelector('.custom-navbar');
  
      window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          navbar.style.top = "-100px";
          navbar.classList.remove('scrolled');
        } else {
          navbar.style.top = "0";
          navbar.classList.add('scrolled');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      });
  
      window.addEventListener("scroll", () => {
        if (window.scrollY < 50) {
          navbar.classList.remove('scrolled');
        }
      });
  
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function () {
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            $('.navbar-collapse').collapse('hide');
          }
        });
      });
    });
  
  document.addEventListener("DOMContentLoaded", applyScrollOffset);
  
  // About section toggle
  const aboutWrapper = document.querySelector('.about-wrapper');
  const aboutCircle = document.getElementById('about-circle');
  const expandWrapper = document.querySelector('.about-expand-wrapper');
  
  aboutWrapper.addEventListener('click', () => {
    aboutCircle.classList.toggle('show');
    expandWrapper.classList.toggle('open');
  });
  