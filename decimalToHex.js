function decimalToHex(n){
    hexObj = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }
    let hex = ''
    let quot = n;
    let rem;

    while(rem !== 0){
        rem = quot % 16
        if(rem >= 10){
            rem = hexObj[rem]
        }

        hex = rem + hex

        quot = Math.floor(quot / 16)
    }
    if (hex.charAt(0) === '0') {
        hex = hex.slice(1);
    }
    return hex || 0
}

console.log(decimalToHex(63)) //prints 3F

//ALTERNATIVELY
function decimalToHex(n) {
    let hex = '';
    while (n > 0) {
      let rem = n % 16;
      if (rem < 10) {
        hex = rem + hex;
      } else {
        hex = String.fromCharCode(rem - 10 + 'A'.charCodeAt(0)) + hex;
      }
      n = Math.floor(n / 16);
    }
    return hex || '0'; // return '0' if n is 0
  }