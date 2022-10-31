let title = document.getElementById('title');

title.classList.add('rotate');
title.style.transition = '4s';

setTimeout(() => {
  title.style.transition = '0.3s';
  title.style.transition = '';
}, 4000);

let mouseDown = false;

let img = document.getElementById('screamer');

let resizeImg = function() {
  let cloneTitleHeight = document.documentElement.clientHeight;
  let cloneTitleWidth = document.documentElement.clientWidth;
  
  img.style.left = Math.round(cloneTitleWidth / 2 - img.offsetWidth / 2) + 'px';
  img.style.top = Math.round(cloneTitleHeight / 2 - img.offsetHeight / 2) + 'px';
}

document.body.onresize = resizeImg;

var sound = new Howl({
  src: ['screamer.mp3'],
  volume: 40,
});

function screamer() {
  document.body.style.backgroundImage = 'none';
  
  for (let el of document.body.querySelectorAll('*:not(img)')) {
    el.remove();
  }
  sound.play();
  
  document.body.style.backgroundColor = 'black';

  setTimeout(() => {
    img.hidden = false;
    resizeImg();
  }, 1170);
}
