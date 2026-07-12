const menu=document.querySelector('.menu');const nav=document.querySelector('.topbar nav');if(menu&&nav){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(matchMedia('(pointer:fine)').matches){document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1100px) rotateY(${x*5}deg) rotateX(${y*-5}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});const glow=document.querySelector('.pointer-glow');if(glow)addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true})}
const hero=document.querySelector('[data-parallax]');if(hero)addEventListener('scroll',()=>{hero.style.transform=`translateY(${Math.min(scrollY*.07,42)}px)`},{passive:true});
const canvas=document.getElementById('particles');if(canvas){const ctx=canvas.getContext('2d');let dots=[];function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);dots=Array.from({length:Math.min(75,Math.floor(innerWidth/17))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.15+.3,v:Math.random()*.18+.04,a:Math.random()*.32+.07}))}function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const d of dots){d.y-=d.v;if(d.y<-5){d.y=innerHeight+5;d.x=Math.random()*innerWidth}ctx.beginPath();ctx.fillStyle=`rgba(177,111,255,${d.a})`;ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}resize();addEventListener('resize',resize);draw()}
const backTop=document.querySelector('.back-to-top');
if(backTop){
  const updateBackTop=()=>backTop.classList.toggle('visible',window.scrollY>650);
  updateBackTop();
  window.addEventListener('scroll',updateBackTop,{passive:true});
  backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
document.querySelectorAll('.faq-list details').forEach(item=>{
  item.addEventListener('toggle',()=>{
    if(item.open){
      document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==item)other.open=false});
    }
  });
});

document.querySelectorAll('.capability-grid article').forEach((card,index)=>{
  card.style.transitionDelay=`${Math.min(index*35,210)}ms`;
});
