let t,e,s,i,r,o,u,n,a,f,d,l,h,g,P,c,B,b,p,w,v,m,U;export function work_last_created(){P.Work()}export function last_needs_memory(){return!c.byteLength}export function update_last_memory(t){P.UpdateMemory(t)}function exOp(){switch(t&31){case 0:P.lastNode=P.lastNode.firstChild;break;case 1:P.lastNode=P.lastNode.nextSibling;break;case 2:P.lastNode=P.lastNode.parentNode;break;case 3:P.nodes[P.view.getUint32(P.u8BufPos,true)]=P.lastNode;P.u8BufPos+=4;break;case 4:P.lastNode=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4;break;case 5:return true;case 6:P.lastNode=P.createFullElement();break;case 7:if(t&32){b=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{b=P.lastNode}if(t&64){e=P.decodeU32();for(r=0;r<e;r++){b.appendChild(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}}else{b.appendChild(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}break;case 8:if(t&32){b=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{b=P.lastNode}if(t&64){e=P.decodeU32();p=[];for(r=0;r<e;r++){p.push(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}b.replaceWith(...p)}else{b.replaceWith(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}break;case 9:if(t&32){b=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{b=P.lastNode}if(t&64){e=P.decodeU32();p=[];for(r=0;r<e;r++){p.push(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}b.after(...p)}else{b.after(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}break;case 10:if(t&32){b=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{b=P.lastNode}if(t&64){e=P.decodeU32();p=[];for(r=0;r<e;r++){p.push(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}b.before(...p)}else{b.before(P.nodes[P.view.getUint32(P.u8BufPos,true)]);P.u8BufPos+=4}break;case 11:if(t&32){P.nodes[P.view.getUint32(P.u8BufPos,true)].remove();P.u8BufPos+=4}else{P.lastNode.remove()}break;case 12:P.lastNode=document.createTextNode(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)));P.u8BufPos+=2;if(t&32){P.nodes[P.view.getUint32(P.u8BufPos,true)]=P.lastNode;P.u8BufPos+=4}break;case 13:P.lastNode=P.createElement();if(t&32){P.nodes[P.view.getUint32(P.u8BufPos,true)]=P.lastNode;P.u8BufPos+=4}break;case 14:if(t&32){m=P.view.getUint32(P.u8BufPos,true);P.u8BufPos+=4;P.nodes[m].textContent=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2}else{P.lastNode.textContent=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2}break;case 15:if(t&32){w=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{w=P.lastNode}if(t&64){i=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2;if(t&128){s=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2;w.setAttributeNS(s,i,P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)))}else{w.setAttribute(i,P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)))}P.u8BufPos+=2}else{if(t&128){s=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2;w.setAttributeNS(s,k[P.view.getUint8(P.u8BufPos++)],P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)))}else{w.setAttribute(k[P.view.getUint8(P.u8BufPos++)],P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)))}P.u8BufPos+=2}break;case 16:if(t&32){w=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{w=P.lastNode}if(t&64){if(t&128){i=P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true));P.u8BufPos+=2;w.removeAttributeNS(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)),i);P.u8BufPos+=2}else{w.removeAttribute(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)));P.u8BufPos+=2}}else{if(t&128){i=k[P.view.getUint8(P.u8BufPos++)];w.removeAttributeNS(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)),i)}else{w.removeAttribute(k[P.view.getUint8(P.u8BufPos++)])}}break;case 17:if(t&32){w=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{w=P.lastNode}w.style.setProperty(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)),P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos+2,true)));P.u8BufPos+=4;break;case 18:if(t&32){w=P.nodes[P.view.getUint32(P.u8BufPos,true)];P.u8BufPos+=4}else{w=P.lastNode}w.style.removeProperty(P.strings.substring(P.strPos,P.strPos+=P.view.getUint16(P.u8BufPos,true)));P.u8BufPos+=2;break;case 19:if(t&32){const o=P.view.getUint32(P.u8BufPos,true);P.lastNode=P.nodes[o].cloneNode(true);P.u8BufPos+=4}else{P.lastNode=P.lastNode.cloneNode(true)}if(t&64){P.nodes[P.view.getUint32(P.u8BufPos,true)]=P.lastNode;P.u8BufPos+=4}break;case 20:if(t&32){w=P.nodes[P.view.getUint32(P.u8BufPos,true)].cloneNode(true).firstChild;P.u8BufPos+=4}else{w=P.lastNode.cloneNode(true).firstChild}for(;w!==null;w=w.nextSibling){if(P.view.getUint8(P.u8BufPos++)===1){P.nodes[P.view.getUint32(P.u8BufPos,true)]=w;P.u8BufPos+=4}}break;default:break}}export class JsInterpreter{constructor(t,e,s,i,r){this.lastNode;this.nodes=[];this.parents=[];this.UpdateMemory(t);this.last_start_pos;this.metadata_ptr=e;this.ptr_ptr=s;this.str_ptr_ptr=i;this.str_len_ptr=r;this.strings="";this.strPos=0;this.decoder=new TextDecoder;this.idSize=1;P=this}NeedsMemory(){return this.view.buffer.byteLength===0}UpdateMemory(t){this.view=new DataView(t.buffer);c=t.buffer}Work(){B=this.view.getUint8(this.metadata_ptr);if(B&1){this.last_start_pos=this.view.getUint32(this.ptr_ptr,true)}this.u8BufPos=this.last_start_pos;if(B&2){e=this.view.getUint32(this.str_len_ptr,true);n=this.view.getUint32(this.str_ptr_ptr,true);if(e<100){if(B&4){this.strings=this.batchedAsciiDecode(n,e)}else{this.strings=this.utf8Decode(n,e)}}else{this.strings=this.decoder.decode(new DataView(this.view.buffer,n,e))}this.strPos=0}for(;;){t=this.view.getUint32(this.u8BufPos,true);this.u8BufPos+=4;if(exOp())return;t>>>=8;if(exOp())return;t>>>=8;if(exOp())return;t>>>=8;if(exOp())return}}createElement(){u=this.view.getUint8(this.u8BufPos++);switch(u){case 255:u=document.createElement(N[this.view.getUint8(this.u8BufPos++)],this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)));this.u8BufPos+=2;return u;case 254:u=document.createElement(this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)));this.u8BufPos+=2;return u;case 253:u=this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true));this.u8BufPos+=2;u=document.createElementNS(this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)),u);this.u8BufPos+=2;return u;default:return document.createElement(N[u])}}createFullElement(){const t=this.decodeMaybeIdByteBool(),e=this.createElement();h=this.view.getUint8(this.u8BufPos++);for(r=0;r<h;r++){i=this.view.getUint8(this.u8BufPos++);switch(i){case 255:i=k[this.view.getUint8(this.u8BufPos++)];e.setAttributeNS(this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)),i);this.u8BufPos+=2;break;case 254:i=this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true));this.u8BufPos+=2;e.setAttribute(i,this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)));this.u8BufPos+=2;break;case 253:i=this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true));this.u8BufPos+=2;s=this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true));this.u8BufPos+=2;o=this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true));this.u8BufPos+=2;e.setAttributeNS(s,i,o);break;default:e.setAttribute(k[i],this.strings.substring(this.strPos,this.strPos+=this.view.getUint16(this.u8BufPos,true)));this.u8BufPos+=2;break}}const u=this.view.getUint8(this.u8BufPos++);for(let n=0;n<u;n++){e.appendChild(this.createFullElement())}if(t!==null){this.nodes[t]=e}return e}decodeMaybeIdByteBool(){if(this.view.getUint8(this.u8BufPos++)===0){return null}else{const t=this.view.getUint32(this.u8BufPos,true);this.u8BufPos+=4;return t}}decodeU32(){this.u8BufPos+=4;return this.view.getUint32(this.u8BufPos-4,true)}SetNode(t,e){this.nodes[t]=e}GetNode(t){return this.nodes[t]}utf8Decode(t,e){a=t;f=a+e;d="";while(a<f){l=this.view.getUint8(a++);if((l&128)===0){d+=String.fromCharCode(l)}else if((l&224)===192){d+=String.fromCharCode((l&31)<<6|this.view.getUint8(a++)&63)}else if((l&240)===224){d+=String.fromCharCode((l&31)<<12|(this.view.getUint8(a++)&63)<<6|this.view.getUint8(a++)&63)}else if((l&248)===240){let s=(l&7)<<18|(this.view.getUint8(a++)&63)<<12|(this.view.getUint8(a++)&63)<<6|this.view.getUint8(a++)&63;if(s>65535){s-=65536;d+=String.fromCharCode(s>>>10&1023|55296);s=56320|s&1023}d+=String.fromCharCode(s)}else{d+=String.fromCharCode(l)}}return d}batchedAsciiDecode(t,e){a=t;f=a+e;d="";g=a+(e/4|0)*4;while(a<g){l=this.view.getUint32(a);d+=String.fromCharCode(l>>24,(l&16711680)>>16,(l&65280)>>8,l&255);a+=4}while(a<f){d+=String.fromCharCode(this.view.getUint8(a++))}return d}}const N=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","portal","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"];const k=["accept-charset","accept","accesskey","action","align","allow","alt","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription","async","autocapitalize","autocomplete","autofocus","autoplay","background","bgcolor","border","buffered","capture","challenge","charset","checked","cite","class","code","codebase","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","crossorigin","csp","data","datetime","decoding","default","defer","dir","dirname","disabled","download","draggable","enctype","enterkeyhint","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","importance","inputmode","integrity","intrinsicsize","ismap","itemprop","keytype","kind","label","lang","language","list","loading","loop","low","manifest","max","maxlength","media","method","min","minlength","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","referrerpolicy","rel","required","reversed","role","rows","rowspan","sandbox","scope","scoped","selected","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","summary","tabindex","target","title","translate","type","usemap","value","width","wrap"];