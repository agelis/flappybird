function Bird(){
 this.x=80;
 this.y=height/2;
 this.size=40;
 this.gravity=0.3;
 this.velocity=0;
 this.force=-8;
 this.color=color(0,10,200);
 this.up=function(){
  this.velocity+=this.force;
 }
 this.update=function(){
  this.velocity+=this.gravity;
  //this.velocity+=0.8;
  this.y+=this.velocity;
  
  if (this.y>height){
   this.y=height;
   this.velocity=0;
  }
  if (this.y<0){
   this.y=0;
   this.velocity=0;
  }
 }
 this.display=function(){
  fill(this.color);
  ellipse(this.x,this.y,this.size,this.size);
 }
}