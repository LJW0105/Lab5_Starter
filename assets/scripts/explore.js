// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;
  var select = document.querySelector('select');
  var voices = [];
  var utterance = new SpeechSynthesisUtterance();
  var image = document.querySelector('img');
  

  function populateVoice() {
    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  }

  setTimeout(() => {
    voices = synth.getVoices();
    populateVoice();
  }, 100);

  var text = document.getElementById('text-to-speak');
  text.addEventListener('input', (event) => {
    utterance.text = event.target.value;
  });

  var play_button = document.querySelector('button');
  play_button.addEventListener('click', () => {
    var selectedOption = select.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
    if (synth.speaking == true) {
      image.setAttribute('src', 'assets/images/smiling-open.png');
    }
  });

  utterance.addEventListener('end', () => {
    image.setAttribute('src', 'assets/images/smiling.png');
  });

}