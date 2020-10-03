const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symb = '';
    let phrase = '';
    let para ='';
     for(let i=0;i< expr.length; i=i+2){
      if(expr[i] === '*'){
        phrase += ' ';
        i = i+8;
      }else{
        para = i+1 === expr.length ? expr[i] : expr[i]+expr[i+1];
        if(para === '10'){
            symb += '.';
        }else if(para === '11'){
            symb += '-';
        }
      }
      if((i+2) % 10 === 0 && expr[i] !== '*'){
        phrase += MORSE_TABLE[symb];
        symb = '';
      }
  }
  return phrase;
}

module.exports = {
    decode
}