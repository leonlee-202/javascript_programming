const Rectangle = require('./4-rectangle').Rectangle

class square extends Rectangle {
  constructor(size) {
    super(size,size)
  }
}

module.exports = square