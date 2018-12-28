function player(){
  this.x=20;
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
  this.flap=function(){
    this.vel=-3;
  }
