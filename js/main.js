// 메인 컨텐츠 
function runAnimations() {
  // 메인 컨텐츠 애니메이션
  const timeline = gsap.timeline();
  timeline.to(".main-title p", { opacity: 1, duration: 1 });
  timeline.to(".text-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=0.5");
  timeline.to(".text-red", { color: "#FF0000", duration: 1.5 }, "-=0.5");
  timeline.to(".text-left", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=1");
  timeline.to(".main-button button", { opacity: 1, duration: 1 },)
  timeline.to(".main-button button", { backgroundColor: "#FF0000", color: "#FFFFFF", duration: 1.5 }, "-=0.5");
}
// 로딩 화면을 처리하고 애니메이션을 실행하는 함수
function handleLoadingScreen() {
  const logo = document.getElementById('logo');
  const loadingScreen = document.getElementById('loading-screen');
  const leftCurtain = document.querySelector('.left');
  const rightCurtain = document.querySelector('.right');
  const content = document.getElementById('content');
  // 로고 등장 애니메이션
  gsap.to(logo, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      // 로고 1초 유지
      setTimeout(() => {
        // 로고 사라지는 애니메이션
        gsap.to(logo, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // 로고 애니메이션 이후에 커튼 애니메이션 시작
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
                // 커튼 애니메이션이 완료되면 로딩 화면을 DOM에서 제거
                loadingScreen.remove();

                // 메인 컨텐츠가 나타나도록 페이드 인
                gsap.to(content, {
                  opacity: 1,
                  duration: 0.1,
                  ease: "power2.inOut",
                  onComplete: () => {
                    // 메인 컨텐츠 애니메이션 실행
                    runAnimations();
                  }
                });
              }
            });
          }
        });
      }, 1000); // 로고 1초 유지
    }
  });
}

// 스와이퍼
function initSwiper() {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
  });
}

// se2 애니메이션
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function initSection2Animation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      start: 'center center',
      end: '120%',
      // scrub: 2,
      ease: 'none',
      pin: true,
      // markers: true
    }
  });

  timeline
    .set(".se2-con1-textbox", { opacity: 0, y: -50 })
    .set(".se2-con1-img", { opacity: 0, y: 50 })
    .set(".se2-con2-img", { opacity: 0, x: 50 })
    .set(".se2-con3-textbox", { opacity: 0, y: -50 })
    .set(".se2-con3-textbox2", { opacity: 0, y: 50 })

    .to(".se2-con1-textbox", { opacity: 1, duration: 0.5, y: 0 })
    .to(".se2-con1-img", { opacity: 1, duration: 0.5, y: 0 })
    .to(".se2-con2-img", { opacity: 1, duration: 0.5, x: 0 })
    .to(".se2-con3-textbox", { opacity: 1, duration: 0.5, y: 0 })
    .to(".se2-con3-textbox2", { opacity: 1, duration: 0.5, y: 0 })
    .to(".se2-con3-text2 p", {
      text: {
        value: "our mission is to <span class='se2-red'>win</span>, and only <span class='se2-red'>win</span>. that's what we do<span class='blink'>.</span>",
      },
      duration: 2,
      ease: "none",
      onUpdate: function () {
        const progress = this.progress(); // progress() 메서드 참조
        if (progress > 0.8) { // 진행 상태에 따라 색상 변경
          document.querySelectorAll(".se2-red").forEach(el => {
            el.style.color = "#FF0000";
          });
        }
        //gsap버전
        // if (progress > 0.8) {
        //   gsap.to(".se2-red", { color: "#FF0000", duration: 1 });
        // }
      },
      onComplete: function () {
        gsap.to(".blink", {
          opacity: 0,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    });
}

// 햄버거 메뉴
function initHamburgerMenu() {
  document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('menu_active');
    document.getElementById('submenubox').classList.toggle('menu_active');
  });
}

// se3 애니메이션
function initSection3Animation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section3',
      start: 'top top',
      end: '200%',
      scrub: 2,
      ease: 'none',
      pin: true,
      // markers: true
    }
  });

  timeline
    .set(".se3-main-text", { opacity: 0, x: -50 })
    .set(".se3-red", { opacity: 0, x: -50 })
    .set(".se3-main1", { opacity: 0, x: -50 })
    .set(".se3-imgtext", { opacity: 0, y: -50 })
    .set(".se3-main2", { opacity: 0, x: 50 })
    .set(".se3-sub-maintext", { opacity: 0, x: -50 })
    .set(".match", { opacity: 0, y: 50 })

    .to(".se3-main-text", { opacity: 1, duration: 1, x: 0 })
    .to(".se3-red", { opacity: 1, duration: 1, x: 0 })
    .to(".se3-main1", { opacity: 1, duration: 1, x: 0 })
    .to(".se3-imgtext", { opacity: 1, duration: 1, y: 0 })
    .to(".se3-main2", { opacity: 1, duration: 1, x: 0, })
    .to(".se3-sub-maintext", { opacity: 1, duration: 1, x: 0 })
    .to(".match:first-of-type", {
      opacity: 0.4,
      duration: 0.5,
      y: 0
    })
    .to(".match:not(:first-of-type)", {
      opacity: 1,
      duration: 0.5,
      y: 0,
      stagger: 0.5,
    })
}


document.addEventListener('DOMContentLoaded', function () {
  handleLoadingScreen();
  initSwiper();
  initSection2Animation();
  initHamburgerMenu();
  initSection3Animation();
});