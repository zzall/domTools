export function loadImage(o){return loadPromises[o]?loadPromises[o]:loadPromises[o]=new Promise(((n,e)=>{const r=document.createElement("img");r.src=o,r.onload=function(){n(r)},r.onerror=function(o){r.onload=null,e(o)}}))}