var c,ctx,bird,pipe;
function setup(){
  c=document.getElementById("myCanvas");
  ctx.c.getContext("2d");
  bird=new player();
  pipe=new pipe();
  c.addEventListener("click",bird.flap);
  pipe.reset();
  start();
}
function start(){
  bird.fall();
  bird.deathTest();
  pipe.move();
  if(pipe.x<=0)
    pipe.reset();
  bird.draw();
  pipe.draw();
  if(!bird.dead)
    window.requestAnimationFrame(start);
}
