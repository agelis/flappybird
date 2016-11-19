var bird;
var pipes=[];

function setup() {
  createCanvas(500,700);
  bird=new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.display();
  bird.update();
  
  if (frameCount%100===0){
   pipes.push(new Pipe());
  }
  for (var i=pipes.length-1;i>=0;i--){
  pipes[i].display();
  pipes[i].update();
  if (pipes[i].offscreen()){
   pipes.splice(i,1);
  }
  }
}

function keyPressed(){
 bird.up();
}