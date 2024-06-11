// 메인 컨텐츠 
function runAnimations() {
  // 메인 컨텐츠 애니메이션
  const timeline = gsap.timeline();
  timeline.to(".main-title p", { opacity: 1, duration: 1 });
  timeline.to(".text-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" },"-=0.5");
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

document.addEventListener('DOMContentLoaded', function () {
  handleLoadingScreen();
});