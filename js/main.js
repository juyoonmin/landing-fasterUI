document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');
    const loadingScreen = document.getElementById('loading-screen');
    const leftCurtain = document.querySelector('.left');
    const rightCurtain = document.querySelector('.right');
    const content = document.getElementById('content');
  
    // Animate the logo appearance
    gsap.to(logo, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Hold the logo for a short duration
        setTimeout(() => {
          // Animate the logo disappearance
          gsap.to(logo, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              // Animate the curtains after the logo animation
              gsap.to(leftCurtain, {
                x: '-100%',
                duration: 1.5,
                ease: "power2.inOut"
              });
  
              gsap.to(rightCurtain, {
                x: '100%',
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                  leftCurtain.style.display = 'none';
                  rightCurtain.style.display = 'none';
                  logo.style.display = 'none';
                  // Fade in the content
                  gsap.to(content, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                      // Remove the loading screen from the DOM
                      loadingScreen.remove();
                    }
                  });
                }
              });
            }
          });
        }, 1000); // Hold logo for 1 second before disappearing
      }
    });
  });