// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var horn_sytle = document.getElementById('horn-select');
  var style;
  horn_sytle.addEventListener('change', (event) => {
    style = event.target.value;
    var image = document.querySelector('img');
    var sound = document.querySelector('.hidden');
    image.setAttribute('src', 'assets/images/' + style + '.svg');
    image.setAttribute('alt', style);
    sound.setAttribute('src', 'assets/audio/' + style + '.mp3');
  });

  var volume_control = document.getElementById('volume');
  volume_control.addEventListener('change', (event) => {
    var volume = Number(event.target.value);
    var vol_icon = document.querySelector('#volume-controls img');
    if (volume == 0) {
      vol_icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
      vol_icon.setAttribute('alt', 'Volume level 0');
    }
    else if (volume < 33) {
      vol_icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
      vol_icon.setAttribute('alt', 'Volume level 1');
    }
    else if (volume < 67) {
      vol_icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
      vol_icon.setAttribute('alt', 'Volume level 2');
    }
    else {
      vol_icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
      vol_icon.setAttribute('alt', 'Volume level 3');
    }
    var sound = document.querySelector('.hidden');
    sound.volume = volume * 0.01;
  });

  const play_button = document.querySelector('button');
  play_button.addEventListener('click', () => {
    let sound = document.querySelector('.hidden');
    sound.play();
    if (style == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}