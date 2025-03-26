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
      print() {
        if (this.width && this.height) {
          for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
          }
        }
      }
    }
    
   
    const rect1 = new Rectangle(9, 15)
    rect1.print();
    const rect2 = new Rectangle(3, 4);
    console.log(rect2);
   
