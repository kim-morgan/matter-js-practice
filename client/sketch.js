let Engine = Matter.Engine,
// Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];
let ground;

let hp = 1;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  let options = {
    isStatic: true
  }

  const sock = io();
 
  ground = new Floor(200, height, width, 10, options);
  World.add(world, ground);

  // Matter.Events.on(engine, "collisionStart", 
  // (event) => {console.log(event.pairs[0].bodyA);
  //   console.log(event.pairs[0].bodyB);
  //   World.remove(world, event.pairs[0].bodyB)
  // boxes.pop();}
  // );

}

function mousePressed() {
  let options = {
    label: "box"
  }
  boxes.push(new Box(mouseX, mouseY, 50, 50, options));
}

function draw() {
  background(51);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  ground.show();
  
}