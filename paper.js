class Paper {
    constructor(x, y,width,height) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("pink");
      image(this.image,0, 0, 30, 30);
      pop();
    }
  };