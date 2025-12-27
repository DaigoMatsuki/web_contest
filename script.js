const video = document.querySelector('.top-video');
const img = document.querySelector('.unblur');

let ticking = false;

function onScrollUpdate() {
  const scrollY = window.scrollY || window.pageYOffset;
  const maxBlur = 20;

  const blurVideo = Math.min(scrollY / 20, maxBlur);
  if (video) {
    video.style.willChange = 'filter, opacity';
    video.style.filter = `blur(${blurVideo}px)`;
  }

  if (img) {
    const blurImg = Math.max(maxBlur - scrollY / 20, 0);
    const minOpacity = 0.4;
    const maxOpacity = 1;
    let opacity = minOpacity + scrollY / 100;
    opacity = Math.min(opacity, maxOpacity);
    img.style.filter = `blur(${blurImg}px)`;
    img.style.opacity = opacity;
  }
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScrollUpdate();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', () => {
  onScrollUpdate();
  if (video) {
    video.muted = true;
    video.setAttribute('playsinline', '');
    try { video.play(); } catch (e) {}
  }
});
