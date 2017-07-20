import 'normalize.css'
import './styles/style.scss'
import readWords from './words.json'

window.onload = function () {
  // get all the words preseted in json
  let words = readWords.words;

  // get a random number
  let getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // set a default num for record repeated random number
  var oldNO = 0;

  let getWords = () => {
    let newNO = getRandom(words.length - 1, 0);

    if (oldNO == newNO) {
      getWords();
    } else {
      document.getElementsByTagName('h2')[0].innerText = words[newNO];
      oldNO = newNO;
    }
  }

  // getWords();
  document.getElementsByTagName('h2')[0].onclick = () => {
    getWords();
  }

}
