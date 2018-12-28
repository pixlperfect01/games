function player(){
  this.x=50;
  this.y=75;
  this.dx=this.x+10;
  this.dy=this.y+10;
  this.dead=false;
  this.score=0;
  this.vel=0;
  this.draw=function(){
    ctx.beginPath();
    ctx.fillStyle="FFFF00";
    ctx.arc(this.dx,this.dy,10,0,2*Math.PI);
    ctx.fill();
  }
  this.fall=function(){
    this.y+=this.vel;
    this.vel-=.2;
  }
  this.flap=function(){
    this.vel=-3;
  }
  this.deathTest=function(){
    if(this.x>=pipe.x&&this.x<=pipe.x+20&&((this.y>=pipe.h-pipeSpace)||(this.y>=pipe.h)))
      this.dead=true;
  }
}
