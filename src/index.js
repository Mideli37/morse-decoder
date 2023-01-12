const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let words = [];
  words = expr.split(['**********']);
    
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].replaceAll('11', '-').replaceAll('10', '.');
    words[i] = words[i].replaceAll('00', ' ');
    let singleWord = '';
    for (let j = words[i].length - 1; j >= 0; j -= 5) {
      char = words[i].slice(j - 4, j + 1);
      for (const k in MORSE_TABLE) {
        if (k === char.trim()) {
          latinChar = MORSE_TABLE[k];
          singleWord = latinChar + singleWord;
        }
      }
    }
    words[i] = singleWord;
  }

  words = words.join(' ');
  console.info(words);
  return words;
}

module.exports = {
  decode,
};
