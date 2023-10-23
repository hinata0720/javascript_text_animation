// JavaScript
// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
  opacity: [0, 1],
}

const fadeOptions = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);