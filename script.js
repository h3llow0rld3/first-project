setTimeout(() => {
  let title = document.getElementById('title');

  title.classList.add('rotate');
  title.style.transition = '4s';

  setTimeout(() => {
    title.style.transition = '0.3s';
  }, 4000);
}, 0);


var sound = new Howl({
  src: ['screamer.mp3'],
  volume: 40,
});

function screamer() {
  let img = document.getElementById('screamer');

  document.body.style.backgroundImage = 'none';
  
  for (let el of document.body.querySelectorAll('*:not(img)')) {
    el.remove();
  }
  sound.play();
  
  document.body.style.backgroundColor = 'black';

  setTimeout(() => {
    img.hidden = false;
  }, 1170);
}

