let outputEl = document.getElementById('output');

let submitBtnEl = document.getElementById('submitBtn');

submitBtnEl.addEventListener('click', function () {
  function extractWords(sentence, num) {
    if (sentence === '') {
      alert('Enter sentence');
      return;
    }
    let sentenceArr = sentence.split(' ');
    let newSentence = sentenceArr.splice(0, num).join(' ');
    document.getElementById('output').innerHTML = newSentence;
  }

  let textInputEl = document.getElementById('textInput');
  let numWordsEl = document.getElementById('numWords');
  let sentence = textInputEl.value;
  console.log(sentence);
  extractWords(sentence, numWordsEl.value);
});
