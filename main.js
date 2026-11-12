(function(){
var mb=document.getElementById('mb'),nv=document.getElementById('nav');
if(mb&&nv){mb.addEventListener('click',function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nv.addEventListener('click',function(e){if(e.target.tagName==='A'){nv.classList.remove('open');mb.setAttribute('aria-expanded',false)}})}
var fm=document.getElementById('f');
if(fm){fm.addEventListener('submit',function(e){e.preventDefault();var b=encodeURIComponent('Nombre: '+fm.n.value+'\nContacto: '+fm.c.value+'\n\n'+fm.m.value);
document.getElementById('ok').style.display='block';location.href='mailto:captursioficial@gmail.com?subject='+encodeURIComponent('Consulta desde la web')+'&body='+b})}
var ts=[].slice.call(document.querySelectorAll('.yr'));
function pick(t){ts.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});t.focus()}
ts.forEach(function(t,i){t.addEventListener('click',function(){pick(t)});t.addEventListener('keydown',function(e){if(e.key==='ArrowRight')pick(ts[(i+1)%ts.length]);if(e.key==='ArrowLeft')pick(ts[(i+ts.length-1)%ts.length])})});
})();