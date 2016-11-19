function Pipe(){
 this.top=random(height/2);
 this.bottom=random(height/2);
 this.x=width
 this.w=40;
 this.speed=3;
 this.color=color(random(40,150),random(40,150),random(40,150));
 this.offscreen=function(){
  return (this.x<-this.w)
 }
 this.display=function(){
  fill(this.color);
  rect(this.x,0,this.w,this.top)
  rect(this.x,height-this.bottom,this.w,height)
 }
 this.update=function(){
  this.x-=this.speed;
 }
 
 
}