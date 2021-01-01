class Ball {
    constructor(x, y) {
      var options = {
        'density':5,
        'friction': 1
      };
      this.body = Bodies.circle(x, y, 40, options);
      this.image=loadImage("Assets/SingleGift.png");
      //this.scale=5;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
     // pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      scale(4,4);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      //console.log(this.position.x);
      //console.log(pos.x);
      imageMode(CENTER)
      image(this.image,0,0,40,40)
      pop();
    };
  };