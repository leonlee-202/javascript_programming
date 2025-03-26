const squaredef = require('./5-square').square;

class square extends squaredef {
    charPrint(c) {
        const char = c || 'X';
        for (let i = 0; i < this.height; i++) {
          console.log(char.repeat(this.width));
        }
      }
}


module.exports = square;