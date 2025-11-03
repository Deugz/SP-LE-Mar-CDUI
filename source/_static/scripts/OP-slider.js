(()=>{
const s=document.getElementById('OP-stage'),c=[...s.querySelectorAll('.OP-card')],p=document.getElementById('OP-prev'),n=document.getElementById('OP-next');
let a=0,t=c.length;
function r(){c.forEach((e,i)=>{let d=i-a,m=Math.abs(d),x=d<0?-30*m:30*m;e.style.transform=`translateX(${x}px) scale(${1-.04*m})`;e.style.opacity=1-.3*m;e.style.zIndex=t-m})}
function g(d){a=(a+d+t)%t;r()}
p.onclick=()=>g(-1);n.onclick=()=>g(1);
window.onkeydown=e=>{if(e.key=='ArrowLeft')g(-1);if(e.key=='ArrowRight')g(1)};
r();
})();