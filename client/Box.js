class Box {
  constructor(x,y,w,h,options) {
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    this.label = options;
    World.add(world, this.body)
  }
  

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rect(0,0,this.w,this.h);
    pop();
  }
}