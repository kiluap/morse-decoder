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
    let arrChar = [];
    let strMorse = '';
    let str = '';
    arrChar = expr.match(/.{1,10}/g);
    for (let i = 0; i < arrChar.length; i++){
        let arrMorse = arrChar[i].match(/.{1,2}/g)
        if (arrChar[i] === '**********'){
           str += ' '; 
           continue; 
        } 
        for (let j = 0; j < arrMorse.length; j++){
            if (arrMorse[j] === '10') strMorse +='.';
            if (arrMorse[j] ==='11') strMorse +='-';
        }
        str += MORSE_TABLE[strMorse];
        strMorse = '';
    }
    return str;

}

module.exports = {
    decode
}