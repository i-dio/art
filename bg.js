r=Math.random,S=Math.sin,p=[];
for(i=12;i--;) {
  d=document.body.appendChild(document.createElement('div'));
  d.className='p';
  d.innerText='♟♞♝♜♛♚'[r()*6|0];
  z=.5+r();                     // profondeur
  d.sx=.2+r()*.8*z; d.sy=.2+r()*.8*z;
  d.ax=5+r()*10*z; d.ay=5+r()*10*z;
  d.o=r()*6;
  d.style.cssText=`left:${r()*innerWidth}px;top:${r()*innerHeight}px;font-size:${1+z}em;opacity:${.3+z/2}`;
  p.push(d);

  // interaction touch / click
  d.addEventListener('pointerdown',e=>{
    d.style.transform=`translate(${d.ax*S(scrollY*d.sx+d.o)+10}px,${d.ay*S(scrollY*d.sy+d.o+1.57)+10}px)`;
  });
  d.addEventListener('pointerup',e=>{
    d.style.transform=`translate(${d.ax*S(scrollY*d.sx+d.o)}px,${d.ay*S(scrollY*d.sy+d.o+1.57)}px)`;
  });
}

addEventListener('scroll',()=>{
  for(i=12;i--;){
    e=p[i];
    s=scrollY*i*.01;
    e.style.transform=`translate(${e.ax*S(s*e.sx+e.o)}px,${e.ay*S(s*e.sy+e.o+1.57)}px)`;
  }
});
