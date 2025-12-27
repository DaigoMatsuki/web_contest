const video = document.querySelector('.top-video');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxBlur = 20; 

  
  const blur = Math.min(scrollY / 20, maxBlur);

  video.style.filter = `blur(${blur}px)`;
});

const img = document.querySelector('.unblur');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const maxBlur = 20;      
  const minOpacity = 0;  
  const maxOpacity = 1;    

  // ぼかしを減らす
  const blur = Math.max(maxBlur - scrollY / 20, 0);

  // 透明度を増やす（minOpacity → maxOpacity）
  let opacity = minOpacity + scrollY / 100;
  opacity = Math.min(opacity, maxOpacity);

  img.style.filter = `blur(${blur}px)`;
  img.style.opacity = opacity;
});

window.addEventListener('scroll', updateImage);
document.addEventListener('DOMContentLoaded', updateImage);
