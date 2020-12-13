class paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.width=33;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);       
    }
    display(){
    // push();
    var pos = this.body.position;
     var angle=this.body.angle;
     rotate(angle);
     fill("red");
     imageMode(RADIUS);
     //strokeWeight(4);
     //stroke("white");
     
     image(this.image,pos.x, pos.y, this.r , this.r);
    // pop();
     }

    
  };

 