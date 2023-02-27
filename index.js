
function parallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const speed = 0.5;
  
    window.addEventListener('scroll', function () {
      const yPos = -window.pageYOffset * speed;
      parallaxBg.style.transform = `translateY(${yPos}px)`;
    });
  }
  
  parallax();
  