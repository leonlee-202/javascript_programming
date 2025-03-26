class Rectangle{
    constructor(h, w){
        this.height = h;
        this.width = w;
        if (w > 0 || h > 0){
            this.height = h;
            this.width = w;
        } else {
          this.height = null;
          this.width = null;
        }
      }

}

const myRectangle = new Rectangle(9, 4);
let h =  myRectangle.height;
 let w =myRectangle.width;
console.log(h)
console.log(w)