range=
function pipes(){
  this.x=c.width;
  this.h=0;
  this.draw=function(){
    ctx.fillRect(this.x,0,20,this.h);
    ctx.fillRect(this.x,this.h-pipeSpace,20,c.height-(h+20));
  }
  this.move=function(){
    this.x--;
  }
  this.reset=function(){
    this.x=c.width;
    this.h=Math.random()*((c.width-40)+20);
  }
}
