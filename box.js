class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':0.1,
        'density':0.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.image=loadImage("Assets/SingleGift.png");
    this.visibility=255;
    //this.scale=3;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    scale(2,1.4);   
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);       
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
