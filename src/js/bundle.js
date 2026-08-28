(()=>{var b_=Object.defineProperty;var w_=(i,A,t)=>A in i?b_(i,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[A]=t;var IA=(i,A,t)=>w_(i,typeof A!="symbol"?A+"":A,t);function Ai(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ld(i,A){i.prototype=Object.create(A.prototype),i.prototype.constructor=i,i.__proto__=A}var Xe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zs={duration:.5,overwrite:!1,delay:0},xh,ue,Dt,mn=1e8,bt=1/mn,lh=Math.PI*2,T_=lh/4,E_=0,cd=Math.sqrt,C_=Math.cos,P_=Math.sin,te=function(A){return typeof A=="string"},kt=function(A){return typeof A=="function"},ei=function(A){return typeof A=="number"},fa=function(A){return typeof A=="undefined"},zn=function(A){return typeof A=="object"},We=function(A){return A!==!1},vh=function(){return typeof window!="undefined"},ia=function(A){return kt(A)||te(A)},hd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ve=Array.isArray,R_=/random\([^)]+\)/g,I_=/,\s*/g,td=/(?:-?\.?\d|\.)+/gi,yh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sh=/[+-]=-?[.\d]+/,D_=/[^,'"\[\]\s]+/gi,L_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Fn,ch,Mh,Ke={},aa={},ud,fd=function(A){return(aa=Hr(A,Ke))&&ye},da=function(A,t){return console.warn("Invalid property",A,"set to",t,"Missing plugin? gsap.registerPlugin()")},Hs=function(A,t){return!t&&console.warn(A)},dd=function(A,t){return A&&(Ke[A]=t)&&aa&&(aa[A]=t)||Ke},ks=function(){return 0},N_={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},B_={suppressEvents:!0},bh={},bi=[],hh={},pd,Ve={},nh={},ed=30,sa=[],wh="",Th=function(A){var t=A[0],e,n;if(zn(t)||kt(t)||(A=[A]),!(e=(t._gsap||{}).harness)){for(n=sa.length;n--&&!sa[n].targetTest(t););e=sa[n]}for(n=A.length;n--;)A[n]&&(A[n]._gsap||(A[n]._gsap=new Rh(A[n],e)))||A.splice(n,1);return A},wi=function(A){return A._gsap||Th(gn(A))[0]._gsap},Eh=function(A,t,e){return(e=A[t])&&kt(e)?A[t]():fa(e)&&A.getAttribute&&A.getAttribute(t)||e},Le=function(A,t){return(A=A.split(",")).forEach(t)||A},Vt=function(A){return Math.round(A*1e5)/1e5||0},Lt=function(A){return Math.round(A*1e7)/1e7||0},or=function(A,t){var e=t.charAt(0),n=parseFloat(t.substr(2));return A=parseFloat(A),e==="+"?A+n:e==="-"?A-n:e==="*"?A*n:A/n},U_=function(A,t){for(var e=t.length,n=0;A.indexOf(t[n])<0&&++n<e;);return n<e},la=function(){var A=bi.length,t=bi.slice(0),e,n;for(hh={},bi.length=0,e=0;e<A;e++)n=t[e],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ch=function(A){return!!(A._initted||A._startAt||A.add)},md=function(A,t,e,n){bi.length&&!ue&&la(),A.render(t,e,n||!!(ue&&t<0&&Ch(A))),bi.length&&!ue&&la()},gd=function(A){var t=parseFloat(A);return(t||t===0)&&(A+"").match(D_).length<2?t:te(A)?A.trim():A},_d=function(A){return A},Qe=function(A,t){for(var e in t)e in A||(A[e]=t[e]);return A},F_=function(A){return function(t,e){for(var n in e)n in t||n==="duration"&&A||n==="ease"||(t[n]=e[n])}},Hr=function(A,t){for(var e in t)A[e]=t[e];return A},nd=function i(A,t){for(var e in t)e!=="__proto__"&&e!=="constructor"&&e!=="prototype"&&(A[e]=zn(t[e])?i(A[e]||(A[e]={}),t[e]):t[e]);return A},ca=function(A,t){var e={},n;for(n in A)n in t||(e[n]=A[n]);return e},Us=function(A){var t=A.parent||Nt,e=A.keyframes?F_(ve(A.keyframes)):Qe;if(We(A.inherit))for(;t;)e(A,t.vars.defaults),t=t.parent||t._dp;return A},O_=function(A,t){for(var e=A.length,n=e===t.length;n&&e--&&A[e]===t[e];);return e<0},xd=function(A,t,e,n,r){e===void 0&&(e="_first"),n===void 0&&(n="_last");var s=A[n],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=A[e],A[e]=t),t._next?t._next._prev=t:A[n]=t,t._prev=s,t.parent=t._dp=A,t},pa=function(A,t,e,n){e===void 0&&(e="_first"),n===void 0&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:A[e]===t&&(A[e]=s),s?s._prev=r:A[n]===t&&(A[n]=r),t._next=t._prev=t.parent=null},Ti=function(A,t){A.parent&&(!t||A.parent.autoRemoveChildren)&&A.parent.remove&&A.parent.remove(A),A._act=0},nr=function(A,t){if(A&&(!t||t._end>A._dur||t._start<0))for(var e=A;e;)e._dirty=1,e=e.parent;return A},z_=function(A){for(var t=A.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return A},uh=function(A,t,e,n){return A._startAt&&(ue?A._startAt.revert(ra):A.vars.immediateRender&&!A.vars.autoRevert||A._startAt.render(t,!0,n))},H_=function i(A){return!A||A._ts&&i(A.parent)},id=function(A){return A._repeat?kr(A._tTime,A=A.duration()+A._rDelay)*A:0},kr=function(A,t){var e=Math.floor(A=Lt(A/t));return A&&e===A?e-1:e},ha=function(A,t){return(A-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ma=function(A){return A._end=Lt(A._start+(A._tDur/Math.abs(A._ts||A._rts||bt)||0))},ga=function(A,t){var e=A._dp;return e&&e.smoothChildTiming&&A._ts&&(A._start=Lt(e._time-(A._ts>0?t/A._ts:((A._dirty?A.totalDuration():A._tDur)-t)/-A._ts)),ma(A),e._dirty||nr(e,A)),A},vd=function(A,t){var e;if((t._time||!t._dur&&t._initted||t._start<A._time&&(t._dur||!t.add))&&(e=ha(A.rawTime(),t),(!t._dur||Ws(0,t.totalDuration(),e)-t._tTime>bt)&&t.render(e,!0)),nr(A,t)._dp&&A._initted&&A._time>=A._dur&&A._ts){if(A._dur<A.duration())for(e=A;e._dp;)e.rawTime()>=0&&e.totalTime(e._tTime),e=e._dp;A._zTime=-bt}},On=function(A,t,e,n){return t.parent&&Ti(t),t._start=Lt((ei(e)?e:e||A!==Nt?pn(A,e,t):A._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xd(A,t,"_first","_last",A._sort?"_start":0),fh(t)||(A._recent=t),n||vd(A,t),A._ts<0&&ga(A,A._tTime),A},yd=function(A,t){return(Ke.ScrollTrigger||da("scrollTrigger",t))&&Ke.ScrollTrigger.create(t,A)},Sd=function(A,t,e,n,r){if(Lh(A,t,r),!A._initted)return 1;if(!e&&A._pt&&!ue&&(A._dur&&A.vars.lazy!==!1||!A._dur&&A.vars.lazy)&&pd!==Ge.frame)return bi.push(A),A._lazy=[r,n],1},k_=function i(A){var t=A.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},fh=function(A){var t=A.data;return t==="isFromStart"||t==="isStart"},V_=function(A,t,e,n){var r=A.ratio,s=t<0||!t&&(!A._start&&k_(A)&&!(!A._initted&&fh(A))||(A._ts<0||A._dp._ts<0)&&!fh(A))?0:1,o=A._rDelay,a=0,l,c,f;if(o&&A._repeat&&(a=Ws(0,A._tDur,t),c=kr(a,o),A._yoyo&&c&1&&(s=1-s),c!==kr(A._tTime,o)&&(r=1-s,A.vars.repeatRefresh&&A._initted&&A.invalidate())),s!==r||ue||n||A._zTime===bt||!t&&A._zTime){if(!A._initted&&Sd(A,t,n,e,a))return;for(f=A._zTime,A._zTime=t||(e?bt:0),e||(e=t&&!f),A.ratio=s,A._from&&(s=1-s),A._time=0,A._tTime=a,l=A._pt;l;)l.r(s,l.d),l=l._next;t<0&&uh(A,t,e,!0),A._onUpdate&&!e&&$e(A,"onUpdate"),a&&A._repeat&&!e&&A.parent&&$e(A,"onRepeat"),(t>=A._tDur||t<0)&&A.ratio===s&&(s&&Ti(A,1),!e&&!ue&&($e(A,s?"onComplete":"onReverseComplete",!0),A._prom&&A._prom()))}else A._zTime||(A._zTime=t)},G_=function(A,t,e){var n;if(e>t)for(n=A._first;n&&n._start<=e;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=A._last;n&&n._start>=e;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Vr=function(A,t,e,n){var r=A._repeat,s=Lt(t)||0,o=A._tTime/A._tDur;return o&&!n&&(A._time*=s/A._dur),A._dur=s,A._tDur=r?r<0?1e10:Lt(s*(r+1)+A._rDelay*r):s,o>0&&!n&&ga(A,A._tTime=A._tDur*o),A.parent&&ma(A),e||nr(A.parent,A),A},rd=function(A){return A instanceof xe?nr(A):Vr(A,A._dur)},W_={_start:0,endTime:ks,totalDuration:ks},pn=function i(A,t,e){var n=A.labels,r=A._recent||W_,s=A.duration()>=mn?r.endTime(!1):A._dur,o,a,l;return te(t)&&(isNaN(t)||t in n)?(a=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),a==="<"||a===">"?(o>=0&&(t=t.replace(/=/,"")),(a==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:e).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(a=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&e&&(a=a/100*(ve(e)?e[0]:e).totalDuration()),o>1?i(A,t.substr(0,o-1),e)+a:s+a)):t==null?s:+t},Fs=function(A,t,e){var n=ei(t[1]),r=(n?2:1)+(A<2?0:1),s=t[r],o,a;if(n&&(s.duration=t[1]),s.parent=e,A){for(o=s,a=e;a&&!("immediateRender"in o);)o=a.vars.defaults||{},a=We(a.vars.inherit)&&a.parent;s.immediateRender=We(o.immediateRender),A<2?s.runBackwards=1:s.startAt=t[r-1]}return new Zt(t[0],s,t[r+1])},Ei=function(A,t){return A||A===0?t(A):t},Ws=function(A,t,e){return e<A?A:e>t?t:e},fe=function(A,t){return!te(A)||!(t=L_.exec(A))?"":t[1]},X_=function(A,t,e){return Ei(e,function(n){return Ws(A,t,n)})},dh=[].slice,Md=function(A,t){return A&&zn(A)&&"length"in A&&(!t&&!A.length||A.length-1 in A&&zn(A[0]))&&!A.nodeType&&A!==Fn},q_=function(A,t,e){return e===void 0&&(e=[]),A.forEach(function(n){var r;return te(n)&&!t||Md(n,1)?(r=e).push.apply(r,gn(n)):e.push(n)})||e},gn=function(A,t,e){return Dt&&!t&&Dt.selector?Dt.selector(A):te(A)&&!e&&(ch||!Gr())?dh.call((t||Mh).querySelectorAll(A),0):ve(A)?q_(A,e):Md(A)?dh.call(A,0):A?[A]:[]},ph=function(A){return A=gn(A)[0]||Hs("Invalid scope")||{},function(t){var e=A.current||A.nativeElement||A;return gn(t,e.querySelectorAll?e:e===A?Hs("Invalid scope")||Mh.createElement("div"):A)}},bd=function(A){return A.sort(function(){return .5-Math.random()})},wd=function(A){if(kt(A))return A;var t=zn(A)?A:{each:A},e=ir(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},o=n>0&&n<1,a=isNaN(n)||o,l=t.axis,c=n,f=n;return te(n)?c=f={center:.5,edges:.5,end:1}[n]||0:!o&&a&&(c=n[0],f=n[1]),function(h,u,d){var g=(d||t).length,p=s[g],m,S,M,v,y,E,b,_,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,mn])[1],!w){for(b=-mn;b<(b=d[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(p=s[g]=[],m=a?Math.min(w,g)*c-.5:n%w,S=w===mn?0:a?g*f/w-.5:n/w|0,b=0,_=mn,E=0;E<g;E++)M=E%w-m,v=S-(E/w|0),p[E]=y=l?Math.abs(l==="y"?v:M):cd(M*M+v*v),y>b&&(b=y),y<_&&(_=y);n==="random"&&bd(p),p.max=b-_,p.min=_,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:l?l==="y"?g/w:w:Math.max(w,g/w))||0)*(n==="edges"?-1:1),p.b=g<0?r-g:r,p.u=fe(t.amount||t.each)||0,e=e&&g<0?r0(e):e}return g=(p[h]-p.min)/p.max||0,Lt(p.b+(e?e(g):g)*p.v)+p.u}},mh=function(A){var t=Math.pow(10,((A+"").split(".")[1]||"").length);return function(e){var n=Lt(Math.round(parseFloat(e)/A)*A*t);return(n-n%1)/t+(ei(e)?0:fe(e))}},Td=function(A,t){var e=ve(A),n,r;return!e&&zn(A)&&(n=e=A.radius||mn,A.values?(A=gn(A.values),(r=!ei(A[0]))&&(n*=n)):A=mh(A.increment)),Ei(t,e?kt(A)?function(s){return r=A(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),a=parseFloat(r?s.y:0),l=mn,c=0,f=A.length,h,u;f--;)r?(h=A[f].x-o,u=A[f].y-a,h=h*h+u*u):h=Math.abs(A[f]-o),h<l&&(l=h,c=f);return c=!n||l<=n?A[c]:s,r||c===s||ei(s)?c:c+fe(s)}:mh(A))},Ed=function(A,t,e,n){return Ei(ve(A)?!t:e===!0?!!(e=0):!n,function(){return ve(A)?A[~~(Math.random()*A.length)]:(e=e||1e-5)&&(n=e<1?Math.pow(10,(e+"").length-2):1)&&Math.floor(Math.round((A-e/2+Math.random()*(t-A+e*.99))/e)*e*n)/n})},Y_=function(){for(var A=arguments.length,t=new Array(A),e=0;e<A;e++)t[e]=arguments[e];return function(n){return t.reduce(function(r,s){return s(r)},n)}},Z_=function(A,t){return function(e){return A(parseFloat(e))+(t||fe(e))}},J_=function(A,t,e){return Pd(A,t,0,1,e)},Cd=function(A,t,e){return Ei(e,function(n){return A[~~t(n)]})},$_=function i(A,t,e){var n=t-A;return ve(A)?Cd(A,i(0,A.length),t):Ei(e,function(r){return(n+(r-A)%n)%n+A})},K_=function i(A,t,e){var n=t-A,r=n*2;return ve(A)?Cd(A,i(0,A.length-1),t):Ei(e,function(s){return s=(r+(s-A)%r)%r||0,A+(s>n?r-s:s)})},Wr=function(A){return A.replace(R_,function(t){var e=t.indexOf("[")+1,n=t.substring(e||7,e?t.indexOf("]"):t.length-1).split(I_);return Ed(e?n:+n[0],e?0:+n[1],+n[2]||1e-5)})},Pd=function(A,t,e,n,r){var s=t-A,o=n-e;return Ei(r,function(a){return e+((a-A)/s*o||0)})},Q_=function i(A,t,e,n){var r=isNaN(A+t)?0:function(u){return(1-u)*A+u*t};if(!r){var s=te(A),o={},a,l,c,f,h;if(e===!0&&(n=1)&&(e=null),s)A={p:A},t={p:t};else if(ve(A)&&!ve(t)){for(c=[],f=A.length,h=f-2,l=1;l<f;l++)c.push(i(A[l-1],A[l]));f--,r=function(d){d*=f;var g=Math.min(h,~~d);return c[g](d-g)},e=t}else n||(A=Hr(ve(A)?[]:{},A));if(!c){for(a in t)Ih.call(o,A,a,"get",t[a]);r=function(d){return Uh(d,o)||(s?A.p:A)}}}return Ei(e,r)},sd=function(A,t,e){var n=A.labels,r=mn,s,o,a;for(s in n)o=n[s]-t,o<0==!!e&&o&&r>(o=Math.abs(o))&&(a=s,r=o);return a},$e=function(A,t,e){var n=A.vars,r=n[t],s=Dt,o=A._ctx,a,l,c;if(r)return a=n[t+"Params"],l=n.callbackScope||A,e&&bi.length&&la(),o&&(Dt=o),c=a?r.apply(l,a):r.call(l),Dt=s,c},Ns=function(A){return Ti(A),A.scrollTrigger&&A.scrollTrigger.kill(!!ue),A.progress()<1&&$e(A,"onInterrupt"),A},zr,Rd=[],Id=function(A){if(A)if(A=!A.name&&A.default||A,vh()||A.headless){var t=A.name,e=kt(A),n=t&&!e&&A.init?function(){this._props=[]}:A,r={init:ks,render:Uh,add:Ih,kill:p0,modifier:d0,rawVars:0},s={targetTest:0,get:0,getSetter:_a,aliases:{},register:0};if(Gr(),A!==n){if(Ve[t])return;Qe(n,Qe(ca(A,r),s)),Hr(n.prototype,Hr(r,ca(A,s))),Ve[n.prop=t]=n,A.targetTest&&(sa.push(n),bh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dd(t,n),A.register&&A.register(ye,n,Ne)}else Rd.push(A)},Mt=255,Bs={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},ih=function(A,t,e){return A+=A<0?1:A>1?-1:0,(A*6<1?t+(e-t)*A*6:A<.5?e:A*3<2?t+(e-t)*(2/3-A)*6:t)*Mt+.5|0},Dd=function(A,t,e){var n=A?ei(A)?[A>>16,A>>8&Mt,A&Mt]:0:Bs.black,r,s,o,a,l,c,f,h,u,d;if(!n){if(A.substr(-1)===","&&(A=A.substr(0,A.length-1)),Bs[A])n=Bs[A];else if(A.charAt(0)==="#"){if(A.length<6&&(r=A.charAt(1),s=A.charAt(2),o=A.charAt(3),A="#"+r+r+s+s+o+o+(A.length===5?A.charAt(4)+A.charAt(4):"")),A.length===9)return n=parseInt(A.substr(1,6),16),[n>>16,n>>8&Mt,n&Mt,parseInt(A.substr(7),16)/255];A=parseInt(A.substr(1),16),n=[A>>16,A>>8&Mt,A&Mt]}else if(A.substr(0,3)==="hsl"){if(n=d=A.match(td),!t)a=+n[0]%360/360,l=+n[1]/100,c=+n[2]/100,s=c<=.5?c*(l+1):c+l-c*l,r=c*2-s,n.length>3&&(n[3]*=1),n[0]=ih(a+1/3,r,s),n[1]=ih(a,r,s),n[2]=ih(a-1/3,r,s);else if(~A.indexOf("="))return n=A.match(yh),e&&n.length<4&&(n[3]=1),n}else n=A.match(td)||Bs.transparent;n=n.map(Number)}return t&&!d&&(r=n[0]/Mt,s=n[1]/Mt,o=n[2]/Mt,f=Math.max(r,s,o),h=Math.min(r,s,o),c=(f+h)/2,f===h?a=l=0:(u=f-h,l=c>.5?u/(2-f-h):u/(f+h),a=f===r?(s-o)/u+(s<o?6:0):f===s?(o-r)/u+2:(r-s)/u+4,a*=60),n[0]=~~(a+.5),n[1]=~~(l*100+.5),n[2]=~~(c*100+.5)),e&&n.length<4&&(n[3]=1),n},Ld=function(A){var t=[],e=[],n=-1;return A.split(ti).forEach(function(r){var s=r.match(sr)||[];t.push.apply(t,s),e.push(n+=s.length+1)}),t.c=e,t},od=function(A,t,e){var n="",r=(A+n).match(ti),s=t?"hsla(":"rgba(",o=0,a,l,c,f;if(!r)return A;if(r=r.map(function(h){return(h=Dd(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),e&&(c=Ld(A),a=e.c,a.join(n)!==c.c.join(n)))for(l=A.replace(ti,"1").split(sr),f=l.length-1;o<f;o++)n+=l[o]+(~a.indexOf(o)?r.shift()||s+"0,0,0,0)":(c.length?c:r.length?r:e).shift());if(!l)for(l=A.split(ti),f=l.length-1;o<f;o++)n+=l[o]+r[o];return n+l[f]},ti=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",A;for(A in Bs)i+="|"+A+"\\b";return new RegExp(i+")","gi")})(),j_=/hsl[a]?\(/,Ph=function(A){var t=A.join(" "),e;if(ti.lastIndex=0,ti.test(t))return e=j_.test(t),A[1]=od(A[1],e),A[0]=od(A[0],e,Ld(A[1])),!0},Vs,Ge=(function(){var i=Date.now,A=500,t=33,e=i(),n=e,r=1e3/240,s=r,o=[],a,l,c,f,h,u,d=function g(p){var m=i()-n,S=p===!0,M,v,y,E;if((m>A||m<0)&&(e+=m-t),n+=m,y=n-e,M=y-s,(M>0||S)&&(E=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,s+=M+(M>=r?4:r-M),v=1),S||(a=l(g)),v)for(u=0;u<o.length;u++)o[u](y,h,E,p)};return f={time:0,frame:0,tick:function(){d(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){ud&&(!ch&&vh()&&(Fn=ch=window,Mh=Fn.document||{},Ke.gsap=ye,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(ye.version),fd(aa||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),Rd.forEach(Id)),c=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,a&&f.sleep(),l=c||function(p){return setTimeout(p,s-f.time*1e3+1|0)},Vs=1,d(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(a),Vs=0,l=ks},lagSmoothing:function(p,m){A=p||1/0,t=Math.min(m||33,A)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,m,S){var M=m?function(v,y,E,b){p(v,y,E,b),f.remove(M)}:p;return f.remove(p),o[S?"unshift":"push"](M),Gr(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&u>=m&&u--},_listeners:o},f})(),Gr=function(){return!Vs&&Ge.wake()},ht={},A0=/^[\d.\-M][\d.\-,\s]/,t0=/["']/g,e0=function(A){for(var t={},e=A.substr(1,A.length-3).split(":"),n=e[0],r=1,s=e.length,o,a,l;r<s;r++)a=e[r],o=r!==s-1?a.lastIndexOf(","):a.length,l=a.substr(0,o),t[n]=isNaN(l)?l.replace(t0,"").trim():+l,n=a.substr(o+1).trim();return t},n0=function(A){var t=A.indexOf("(")+1,e=A.indexOf(")"),n=A.indexOf("(",t);return A.substring(t,~n&&n<e?A.indexOf(")",e+1):e)},i0=function(A){var t=(A+"").split("("),e=ht[t[0]];return e&&t.length>1&&e.config?e.config.apply(null,~A.indexOf("{")?[e0(t[1])]:n0(A).split(",").map(gd)):ht._CE&&A0.test(A)?ht._CE("",A):e},r0=function(A){return function(t){return 1-A(1-t)}},ir=function(A,t){return A&&(kt(A)?A:ht[A]||i0(A))||t},ar=function(A,t,e,n){e===void 0&&(e=function(a){return 1-t(1-a)}),n===void 0&&(n=function(a){return a<.5?t(a*2)/2:1-t((1-a)*2)/2});var r={easeIn:t,easeOut:e,easeInOut:n},s;return Le(A,function(o){ht[o]=Ke[o]=r,ht[s=o.toLowerCase()]=e;for(var a in r)ht[s+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=ht[o+"."+a]=r[a]}),r},Nd=function(A){return function(t){return t<.5?(1-A(1-t*2))/2:.5+A((t-.5)*2)/2}},rh=function i(A,t,e){var n=t>=1?t:1,r=(e||(A?.3:.45))/(t<1?t:1),s=r/lh*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*P_((c-s)*r)+1},a=A==="out"?o:A==="in"?function(l){return 1-o(1-l)}:Nd(o);return r=lh/r,a.config=function(l,c){return i(A,l,c)},a},sh=function i(A,t){t===void 0&&(t=1.70158);var e=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=A==="out"?e:A==="in"?function(r){return 1-e(1-r)}:Nd(e);return n.config=function(r){return i(A,r)},n};Le("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,A){var t=A<5?A+1:A;ar(i+",Power"+(t-1),A?function(e){return Math.pow(e,t)}:function(e){return e},function(e){return 1-Math.pow(1-e,t)},function(e){return e<.5?Math.pow(e*2,t)/2:1-Math.pow((1-e)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;ar("Elastic",rh("in"),rh("out"),rh());(function(i,A){var t=1/A,e=2*t,n=2.5*t,r=function(o){return o<t?i*o*o:o<e?i*Math.pow(o-1.5/A,2)+.75:o<n?i*(o-=2.25/A)*o+.9375:i*Math.pow(o-2.625/A,2)+.984375};ar("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);ar("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ar("Circ",function(i){return-(cd(1-i*i)-1)});ar("Sine",function(i){return i===1?1:-C_(i*T_)+1});ar("Back",sh("in"),sh("out"),sh());ht.SteppedEase=ht.steps=Ke.SteppedEase={config:function(A,t){A===void 0&&(A=1);var e=1/A,n=A+(t?0:1),r=t?1:0,s=1-bt;return function(o){return((n*Ws(0,s,o)|0)+r)*e}}};zs.ease=ht["quad.out"];Le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return wh+=i+","+i+"Params,"});var Rh=function(A,t){this.id=E_++,A._gsap=this,this.target=A,this.harness=t,this.get=t?t.get:Eh,this.set=t?t.getSetter:_a},Gs=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vr(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Vs||Ge.wake()}var A=i.prototype;return A.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},A.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},A.totalDuration=function(e){return arguments.length?(this._dirty=0,Vr(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},A.totalTime=function(e,n){if(Gr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ga(this,e),!r._dp||r.parent||vd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),md(this,e,n)),this},A.time=function(e,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+id(this))%(this._dur+this._rDelay)||(e?this._dur:0),n):this._time},A.totalProgress=function(e,n){return arguments.length?this.totalTime(this.totalDuration()*e,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},A.progress=function(e,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+id(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},A.iteration=function(e,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*r,n):this._repeat?kr(this._tTime,r)+1:1},A.timeScale=function(e,n){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===e)return this;var r=this.parent&&this._ts?ha(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-bt?0:this._rts,this.totalTime(Ws(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),ma(this),z_(this)},A.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},A.startTime=function(e){if(arguments.length){this._start=Lt(e);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&On(n,this,this._start-this._delay),this}return this._start},A.endTime=function(e){return this._start+(We(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},A.rawTime=function(e){var n=this.parent||this._dp;return n?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ha(n.rawTime(e),this):this._tTime:this._tTime},A.revert=function(e){e===void 0&&(e=B_);var n=ue;return ue=e,Ch(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!=="nested"&&e.kill!==!1&&this.kill(),ue=n,this},A.globalTime=function(e){for(var n=this,r=arguments.length?e:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(e):r},A.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,rd(this)):this._repeat===-2?1/0:this._repeat},A.repeatDelay=function(e){if(arguments.length){var n=this._time;return this._rDelay=e,rd(this),n?this.time(n):this}return this._rDelay},A.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},A.seek=function(e,n){return this.totalTime(pn(this,e),We(n))},A.restart=function(e,n){return this.play().totalTime(e?-this._delay:0,We(n)),this._dur||(this._zTime=-bt),this},A.play=function(e,n){return e!=null&&this.seek(e,n),this.reversed(!1).paused(!1)},A.reverse=function(e,n){return e!=null&&this.seek(e||this.totalDuration(),n),this.reversed(!0).paused(!1)},A.pause=function(e,n){return e!=null&&this.seek(e,n),this.paused(!0)},A.resume=function(){return this.paused(!1)},A.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-bt:0)),this):this._rts<0},A.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},A.isActive=function(){var e=this.parent||this._dp,n=this._start,r;return!!(!e||this._ts&&this._initted&&e.isActive()&&(r=e.rawTime(!0))>=n&&r<this.endTime(!0)-bt)},A.eventCallback=function(e,n,r){var s=this.vars;return arguments.length>1?(n?(s[e]=n,r&&(s[e+"Params"]=r),e==="onUpdate"&&(this._onUpdate=n)):delete s[e],this):s[e]},A.then=function(e){var n=this,r=n._prom;return new Promise(function(s){var o=kt(e)?e:_d,a=function(){var c=n.then;n.then=null,r&&r(),kt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),s(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},A.kill=function(){Ns(this)},i})();Qe(Gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var xe=(function(i){ld(A,i);function A(e,n){var r;return e===void 0&&(e={}),r=i.call(this,e)||this,r.labels={},r.smoothChildTiming=!!e.smoothChildTiming,r.autoRemoveChildren=!!e.autoRemoveChildren,r._sort=We(e.sortChildren),Nt&&On(e.parent||Nt,Ai(r),n),e.reversed&&r.reverse(),e.paused&&r.paused(!0),e.scrollTrigger&&yd(Ai(r),e.scrollTrigger),r}var t=A.prototype;return t.to=function(n,r,s){return Fs(0,arguments,this),this},t.from=function(n,r,s){return Fs(1,arguments,this),this},t.fromTo=function(n,r,s,o){return Fs(2,arguments,this),this},t.set=function(n,r,s){return r.duration=0,r.parent=this,Us(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Zt(n,r,pn(this,s),1),this},t.call=function(n,r,s){return On(this,Zt.delayedCall(0,n,r),s)},t.staggerTo=function(n,r,s,o,a,l,c){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=c,s.parent=this,new Zt(n,s,pn(this,a)),this},t.staggerFrom=function(n,r,s,o,a,l,c){return s.runBackwards=1,Us(s).immediateRender=We(s.immediateRender),this.staggerTo(n,r,s,o,a,l,c)},t.staggerFromTo=function(n,r,s,o,a,l,c,f){return o.startAt=s,Us(o).immediateRender=We(o.immediateRender),this.staggerTo(n,r,o,a,l,c,f)},t.render=function(n,r,s){var o=this._time,a=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=n<=0?0:Lt(n),f=this._zTime<0!=n<0&&(this._initted||!l),h,u,d,g,p,m,S,M,v,y,E,b;if(this!==Nt&&c>a&&n>=0&&(c=a),c!==this._tTime||s||f){if(o!==this._time&&l&&(c+=this._time-o,n+=this._time-o),h=c,v=this._start,M=this._ts,m=!M,f&&(l||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,s);if(h=Lt(c%p),c===a?(g=this._repeat,h=l):(y=Lt(c/p),g=~~y,g&&g===y&&(h=l,g--),h>l&&(h=l)),y=kr(this._tTime,p),!o&&this._tTime&&y!==g&&this._tTime-y*p-this._dur<=0&&(y=g),E&&g&1&&(h=l-h,b=1),g!==y&&!this._lock){var _=E&&y&1,w=_===(E&&g&1);if(g<y&&(_=!_),o=_?0:c%l?l:c,this._lock=1,this.render(o||(b?0:Lt(g*p)),r,!l)._lock=0,this._tTime=c,!r&&this.parent&&$e(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,y=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,a=this._tDur,w&&(this._lock=2,o=_?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=G_(this,Lt(o),Lt(h)),S&&(c-=h-(h=S._start))),this._tTime=c,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&c&&l&&!r&&!y&&($e(this,"onStart"),this._tTime!==c))return this;if(h>=o&&n>=0)for(u=this._first;u;){if(d=u._next,(u._act||h>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(n,r,s);if(u.render(u._ts>0?(h-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(h-u._start)*u._ts,r,s),h!==this._time||!this._ts&&!m){S=0,d&&(c+=this._zTime=-bt);break}}u=d}else{u=this._last;for(var C=n<0?n:h;u;){if(d=u._prev,(u._act||C<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(n,r,s);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,r,s||ue&&Ch(u)),h!==this._time||!this._ts&&!m){S=0,d&&(c+=this._zTime=C?-bt:bt);break}}u=d}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-bt)._zTime=h>=o?1:-1,this._ts))return this._start=v,ma(this),this.render(n,r,s);this._onUpdate&&!r&&$e(this,"onUpdate",!0),(c===a&&this._tTime>=this.totalDuration()||!c&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(c===a&&this._ts>0||!c&&this._ts<0)&&Ti(this,1),!r&&!(n<0&&!o)&&(c||o||!a)&&($e(this,c===a&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var s=this;if(ei(r)||(r=pn(this,r,n)),!(n instanceof Gs)){if(ve(n))return n.forEach(function(o){return s.add(o,r)}),this;if(te(n))return this.addLabel(n,r);if(kt(n))n=Zt.delayedCall(0,n);else return this}return this!==n?On(this,n,r):this},t.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-mn);for(var a=[],l=this._first;l;)l._start>=o&&(l instanceof Zt?r&&a.push(l):(s&&a.push(l),n&&a.push.apply(a,l.getChildren(!0,r,s)))),l=l._next;return a},t.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},t.remove=function(n){return te(n)?this.removeLabel(n):kt(n)?this.killTweensOf(n):(n.parent===this&&pa(this,n),n===this._recent&&(this._recent=this._last),nr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Ge.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),i.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=pn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,s){var o=Zt.delayedCall(0,r||ks,s);return o.data="isPause",this._hasPause=1,On(this,o,pn(this,n))},t.removePause=function(n){var r=this._first;for(n=pn(this,n);r;)r._start===n&&r.data==="isPause"&&Ti(r),r=r._next},t.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),a=o.length;a--;)Mi!==o[a]&&o[a].kill(n,r);return this},t.getTweensOf=function(n,r){for(var s=[],o=gn(n),a=this._first,l=ei(r),c;a;)a instanceof Zt?U_(a._targets,o)&&(l?(!Mi||a._initted&&a._ts)&&a.globalTime(0)<=r&&a.globalTime(a.totalDuration())>r:!r||a.isActive())&&s.push(a):(c=a.getTweensOf(o,r)).length&&s.push.apply(s,c),a=a._next;return s},t.tweenTo=function(n,r){r=r||{};var s=this,o=pn(s,n),a=r,l=a.startAt,c=a.onStart,f=a.onStartParams,h=a.immediateRender,u,d=Zt.to(s,Qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||bt,onStart:function(){if(s.pause(),!u){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());d._dur!==p&&Vr(d,p,0,1).render(d._time,!0,!0),u=1}c&&c.apply(d,f||[])}},r));return h?d.render(0):d},t.tweenFromTo=function(n,r,s){return this.tweenTo(r,Qe({startAt:{time:pn(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),sd(this,pn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),sd(this,pn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(n,r,s){s===void 0&&(s=0);var o=this._first,a=this.labels,l;for(n=Lt(n);o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(l in a)a[l]>=s&&(a[l]+=n);return nr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return i.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nr(this)},t.totalDuration=function(n){var r=0,s=this,o=s._last,a=mn,l,c,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(f=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,On(s,o,c-o._delay,1)._lock=0):a=c,c<0&&o._ts&&(r-=c,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=Lt(c/s._ts),s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),a=0),o._end>r&&o._ts&&(r=o._end),o=l;Vr(s,s===Nt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},A.updateRoot=function(n){if(Nt._ts&&(md(Nt,ha(n,Nt)),pd=Ge.frame),Ge.frame>=ed){ed+=Xe.autoSleep||120;var r=Nt._first;if((!r||!r._ts)&&Xe.autoSleep&&Ge._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ge.sleep()}}},A})(Gs);Qe(xe.prototype,{_lock:0,_hasPause:0,_forcing:0});var s0=function(A,t,e,n,r,s,o){var a=new Ne(this._pt,A,t,0,1,Bh,null,r),l=0,c=0,f,h,u,d,g,p,m,S;for(a.b=e,a.e=n,e+="",n+="",(m=~n.indexOf("random("))&&(n=Wr(n)),s&&(S=[e,n],s(S,A,t),e=S[0],n=S[1]),h=e.match(eh)||[];f=eh.exec(n);)d=f[0],g=n.substring(l,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),d!==h[c++]&&(p=parseFloat(h[c-1])||0,a._pt={_next:a._pt,p:g||c===1?g:",",s:p,c:d.charAt(1)==="="?or(p,d)-p:parseFloat(d)-p,m:u&&u<4?Math.round:0},l=eh.lastIndex);return a.c=l<n.length?n.substring(l,n.length):"",a.fp=o,(Sh.test(n)||m)&&(a.e=0),this._pt=a,a},Ih=function(A,t,e,n,r,s,o,a,l,c){kt(n)&&(n=n(r||0,A,s));var f=A[t],h=e!=="get"?e:kt(f)?l?A[t.indexOf("set")||!kt(A["get"+t.substr(3)])?t:"get"+t.substr(3)](l):A[t]():f,u=kt(f)?l?h0:Fd:Nh,d;if(te(n)&&(~n.indexOf("random(")&&(n=Wr(n)),n.charAt(1)==="="&&(d=or(h,n)+(fe(h)||0),(d||d===0)&&(n=d))),!c||h!==n||gh)return!isNaN(h*n)&&n!==""?(d=new Ne(this._pt,A,t,+h||0,n-(h||0),typeof f=="boolean"?f0:Od,0,u),l&&(d.fp=l),o&&d.modifier(o,this,A),this._pt=d):(!f&&!(t in A)&&da(t,n),s0.call(this,A,t,h,n,u,a||Xe.stringFilter,l))},o0=function(A,t,e,n,r){if(kt(A)&&(A=Os(A,r,t,e,n)),!zn(A)||A.style&&A.nodeType||ve(A)||hd(A))return te(A)?Os(A,r,t,e,n):A;var s={},o;for(o in A)s[o]=Os(A[o],r,t,e,n);return s},Dh=function(A,t,e,n,r,s){var o,a,l,c;if(Ve[A]&&(o=new Ve[A]).init(r,o.rawVars?t[A]:o0(t[A],n,r,s,e),e,n,s)!==!1&&(e._pt=a=new Ne(e._pt,r,A,0,1,o.render,o,0,o.priority),e!==zr))for(l=e._ptLookup[e._targets.indexOf(r)],c=o._props.length;c--;)l[o._props[c]]=a;return o},Mi,gh,Lh=function i(A,t,e){var n=A.vars,r=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.runBackwards,f=n.yoyoEase,h=n.keyframes,u=n.autoRevert,d=A._dur,g=A._startAt,p=A._targets,m=A.parent,S=m&&m.data==="nested"?m.vars.targets:p,M=A._overwrite==="auto"&&!xh,v=A.timeline,y=n.easeReverse||f,E,b,_,w,C,I,D,W,k,U,H,L,V;if(v&&(!h||!r)&&(r="none"),A._ease=ir(r,zs.ease),A._rEase=y&&(ir(y)||A._ease),A._from=!v&&!!n.runBackwards,A._from&&(A.ratio=1),!v||h&&!n.stagger){if(W=p[0]?wi(p[0]).harness:0,L=W&&n[W.prop],E=ca(n,bh),g&&(g._zTime<0&&g.progress(1),t<0&&c&&o&&!u?g.render(-1,!0):g.revert(c&&d?ra:N_),g._lazy=0),s){if(Ti(A._startAt=Zt.set(p,Qe({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&We(a),startAt:null,delay:0,onUpdate:l&&function(){return $e(A,"onUpdate")},stagger:0},s))),A._startAt._dp=0,A._startAt._sat=A,t<0&&(ue||!o&&!u)&&A._startAt.revert(ra),o&&d&&t<=0&&e<=0){t&&(A._zTime=t);return}}else if(c&&d&&!g){if(t&&(o=!1),_=Qe({overwrite:!1,data:"isFromStart",lazy:o&&!g&&We(a),immediateRender:o,stagger:0,parent:m},E),L&&(_[W.prop]=L),Ti(A._startAt=Zt.set(p,_)),A._startAt._dp=0,A._startAt._sat=A,t<0&&(ue?A._startAt.revert(ra):A._startAt.render(-1,!0)),A._zTime=t,!o)i(A._startAt,bt,bt);else if(!t)return}for(A._pt=A._ptCache=0,a=d&&We(a)||a&&!d,b=0;b<p.length;b++){if(C=p[b],D=C._gsap||Th(p)[b]._gsap,A._ptLookup[b]=U={},hh[D.id]&&bi.length&&la(),H=S===p?b:S.indexOf(C),W&&(k=new W).init(C,L||E,A,H,S)!==!1&&(A._pt=w=new Ne(A._pt,C,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function($){U[$]=w}),k.priority&&(I=1)),!W||L)for(_ in E)Ve[_]&&(k=Dh(_,E,A,H,C,S))?k.priority&&(I=1):U[_]=w=Ih.call(A,C,_,"get",E[_],H,S,0,n.stringFilter);A._op&&A._op[b]&&A.kill(C,A._op[b]),M&&A._pt&&(Mi=A,Nt.killTweensOf(C,U,A.globalTime(t)),V=!A.parent,Mi=0),A._pt&&a&&(hh[D.id]=1)}I&&Fh(A),A._onInit&&A._onInit(A)}A._onUpdate=l,A._initted=(!A._op||A._pt)&&!V,h&&t<=0&&v.render(mn,!0,!0)},a0=function(A,t,e,n,r,s,o,a){var l=(A._pt&&A._ptCache||(A._ptCache={}))[t],c,f,h,u;if(!l)for(l=A._ptCache[t]=[],h=A._ptLookup,u=A._targets.length;u--;){if(c=h[u][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return gh=1,A.vars[t]="+=0",Lh(A,o),gh=0,a?Hs(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(u=l.length;u--;)f=l[u],c=f._pt||f,c.s=(n||n===0)&&!r?n:c.s+(n||0)+s*c.c,c.c=e-c.s,f.e&&(f.e=Vt(e)+fe(f.e)),f.b&&(f.b=c.s+fe(f.b))},l0=function(A,t){var e=A[0]?wi(A[0]).harness:0,n=e&&e.aliases,r,s,o,a;if(!n)return t;r=Hr({},t);for(s in n)if(s in r)for(a=n[s].split(","),o=a.length;o--;)r[a[o]]=r[s];return r},c0=function(A,t,e,n){var r=t.ease||n||"power1.inOut",s,o;if(ve(t))o=e[A]||(e[A]=[]),t.forEach(function(a,l){return o.push({t:l/(t.length-1)*100,v:a,e:r})});else for(s in t)o=e[s]||(e[s]=[]),s==="ease"||o.push({t:parseFloat(A),v:t[s],e:r})},Os=function(A,t,e,n,r){return kt(A)?A.call(t,e,n,r):te(A)&&~A.indexOf("random(")?Wr(A):A},Bd=wh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ud={};Le(Bd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ud[i]=1});var Zt=(function(i){ld(A,i);function A(e,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=i.call(this,s?n:Us(n))||this;var a=o.vars,l=a.duration,c=a.delay,f=a.immediateRender,h=a.stagger,u=a.overwrite,d=a.keyframes,g=a.defaults,p=a.scrollTrigger,m=n.parent||Nt,S=(ve(e)||hd(e)?ei(e[0]):"length"in n)?[e]:gn(e),M,v,y,E,b,_,w,C;if(o._targets=S.length?Th(S):Hs("GSAP target "+e+" not found. https://gsap.com",!Xe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,d||h||ia(l)||ia(c)){n=o.vars;var I=n.easeReverse||n.yoyoEase;if(M=o.timeline=new xe({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),M.kill(),M.parent=M._dp=Ai(o),M._start=0,h||ia(l)||ia(c)){if(E=S.length,w=h&&wd(h),zn(h))for(b in h)~Bd.indexOf(b)&&(C||(C={}),C[b]=h[b]);for(v=0;v<E;v++)y=ca(n,Ud),y.stagger=0,I&&(y.easeReverse=I),C&&Hr(y,C),_=S[v],y.duration=+Os(l,Ai(o),v,_,S),y.delay=(+Os(c,Ai(o),v,_,S)||0)-o._delay,!h&&E===1&&y.delay&&(o._delay=c=y.delay,o._start+=c,y.delay=0),M.to(_,y,w?w(v,_,S):0),M._ease=ht.none;M.duration()?l=c=0:o.timeline=0}else if(d){Us(Qe(M.vars.defaults,{ease:"none"})),M._ease=ir(d.ease||n.ease||"none");var D=0,W,k,U;if(ve(d))d.forEach(function(H){return M.to(S,H,">")}),M.duration();else{y={};for(b in d)b==="ease"||b==="easeEach"||c0(b,d[b],y,d.easeEach);for(b in y)for(W=y[b].sort(function(H,L){return H.t-L.t}),D=0,v=0;v<W.length;v++)k=W[v],U={ease:k.e,duration:(k.t-(v?W[v-1].t:0))/100*l},U[b]=k.v,M.to(S,U,D),D+=U.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||o.duration(l=M.duration())}else o.timeline=0;return u===!0&&!xh&&(Mi=Ai(o),Nt.killTweensOf(S),Mi=0),On(m,Ai(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!l&&!d&&o._start===Lt(m._time)&&We(f)&&H_(Ai(o))&&m.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-c)||0)),p&&yd(Ai(o),p),o}var t=A.prototype;return t.render=function(n,r,s){var o=this._time,a=this._tDur,l=this._dur,c=n<0,f=n>a-bt&&!c?a:n<bt?0:n,h,u,d,g,p,m,S,M;if(!l)V_(this,n,r,s);else if(f!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,M=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+n,r,s);if(h=Lt(f%g),f===a?(d=this._repeat,h=l):(p=Lt(f/g),d=~~p,d&&d===p?(h=l,d--):h>l&&(h=l)),m=this._yoyo&&d&1,m&&(h=l-h),p=kr(this._tTime,g),h===o&&!s&&this._initted&&d===p)return this._tTime=f,this;d!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=s=1,this.render(Lt(g*d),!0).invalidate()._lock=0)}if(!this._initted){if(Sd(this,c?n:h,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&d!==p))return this;if(l!==this._dur)return this.render(n,r,s)}if(this._rEase){var v=h<o;if(v!==this._inv){var y=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(v?-1:1)/y:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/l);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!p&&($e(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;M&&M.render(n<0?n:M._dur*M._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&uh(this,n,r,s),$e(this,"onUpdate")),this._repeat&&d!==p&&this.vars.onRepeat&&!r&&this.parent&&$e(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&uh(this,n,!0,!0),(n||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ti(this,1),!r&&!(c&&!o)&&(f||o||m)&&($e(this,f===a?"onComplete":"onReverseComplete",!0),this._prom&&!(f<a&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),i.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,s,o,a){Vs||Ge.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Lh(this,l),c=this._ease(l/this._dur),a0(this,n,r,s,o,c,l,a)?this.resetTo(n,r,s,o,1):(ga(this,0),this.parent||xd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ns(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ue),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Mi&&Mi.vars.overwrite!==!0)._first||Ns(this),this.parent&&s!==this.timeline.totalDuration()&&Vr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,a=n?gn(n):o,l=this._ptLookup,c=this._pt,f,h,u,d,g,p,m;if((!r||r==="all")&&O_(o,a))return r==="all"&&(this._pt=0),Ns(this);for(f=this._op=this._op||[],r!=="all"&&(te(r)&&(g={},Le(r,function(S){return g[S]=1}),r=g),r=l0(o,r)),m=o.length;m--;)if(~a.indexOf(o[m])){h=l[m],r==="all"?(f[m]=r,d=h,u={}):(u=f[m]=f[m]||{},d=r);for(g in d)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&pa(this,p,"_pt"),delete h[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&c&&Ns(this),this},A.to=function(n,r){return new A(n,r,arguments[2])},A.from=function(n,r){return Fs(1,arguments)},A.delayedCall=function(n,r,s,o){return new A(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},A.fromTo=function(n,r,s){return Fs(2,arguments)},A.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new A(n,r)},A.killTweensOf=function(n,r,s){return Nt.killTweensOf(n,r,s)},A})(Gs);Qe(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Le("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var A=new xe,t=dh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),A[i].apply(A,t)}});var Nh=function(A,t,e){return A[t]=e},Fd=function(A,t,e){return A[t](e)},h0=function(A,t,e,n){return A[t](n.fp,e)},u0=function(A,t,e){return A.setAttribute(t,e)},_a=function(A,t){return kt(A[t])?Fd:fa(A[t])&&A.setAttribute?u0:Nh},Od=function(A,t){return t.set(t.t,t.p,Math.round((t.s+t.c*A)*1e6)/1e6,t)},f0=function(A,t){return t.set(t.t,t.p,!!(t.s+t.c*A),t)},Bh=function(A,t){var e=t._pt,n="";if(!A&&t.b)n=t.b;else if(A===1&&t.e)n=t.e;else{for(;e;)n=e.p+(e.m?e.m(e.s+e.c*A):Math.round((e.s+e.c*A)*1e4)/1e4)+n,e=e._next;n+=t.c}t.set(t.t,t.p,n,t)},Uh=function(A,t){for(var e=t._pt;e;)e.r(A,e.d),e=e._next},d0=function(A,t,e,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(A,t,e),r=s},p0=function(A){for(var t=this._pt,e,n;t;)n=t._next,t.p===A&&!t.op||t.op===A?pa(this,t,"_pt"):t.dep||(e=1),t=n;return!e},m0=function(A,t,e,n){n.mSet(A,t,n.m.call(n.tween,e,n.mt),n)},Fh=function(A){for(var t=A._pt,e,n,r,s;t;){for(e=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:s=t,t=e}A._pt=r},Ne=(function(){function i(t,e,n,r,s,o,a,l,c){this.t=e,this.s=r,this.c=s,this.p=n,this.r=o||Od,this.d=a||this,this.set=l||Nh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var A=i.prototype;return A.modifier=function(e,n,r){this.mSet=this.mSet||this.set,this.set=m0,this.m=e,this.mt=r,this.tween=n},i})();Le(wh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return bh[i]=1});Ke.TweenMax=Ke.TweenLite=Zt;Ke.TimelineLite=Ke.TimelineMax=xe;Nt=new xe({sortChildren:!1,defaults:zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xe.stringFilter=Ph;var rr=[],oa={},g0=[],ad=0,_0=0,oh=function(A){return(oa[A]||g0).map(function(t){return t()})},_h=function(){var A=Date.now(),t=[];A-ad>2&&(oh("matchMediaInit"),rr.forEach(function(e){var n=e.queries,r=e.conditions,s,o,a,l;for(o in n)s=Fn.matchMedia(n[o]).matches,s&&(a=1),s!==r[o]&&(r[o]=s,l=1);l&&(e.revert(),a&&t.push(e))}),oh("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(n){return e.add(null,n)})}),ad=A,oh("matchMedia"))},zd=(function(){function i(t,e){this.selector=e&&ph(e),this.data=[],this._r=[],this.isReverted=!1,this.id=_0++,t&&this.add(t)}var A=i.prototype;return A.add=function(e,n,r){kt(e)&&(r=n,n=e,e=kt);var s=this,o=function(){var l=Dt,c=s.selector,f;return l&&l!==s&&l.data.push(s),r&&(s.selector=ph(r)),Dt=s,f=n.apply(s,arguments),kt(f)&&s._r.push(f),Dt=l,s.selector=c,s.isReverted=!1,f};return s.last=o,e===kt?o(s,function(a){return s.add(null,a)}):e?s[e]=o:o},A.ignore=function(e){var n=Dt;Dt=null,e(this),Dt=n},A.getTweens=function(){var e=[];return this.data.forEach(function(n){return n instanceof i?e.push.apply(e,n.getTweens()):n instanceof Zt&&!(n.parent&&n.parent.data==="nested")&&e.push(n)}),e},A.clear=function(){this._r.length=this.data.length=0},A.kill=function(e,n){var r=this;if(e?(function(){for(var o=r.getTweens(),a=r.data.length,l;a--;)l=r.data[a],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(e)}),a=r.data.length;a--;)l=r.data[a],l instanceof xe?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Zt)&&l.revert&&l.revert(e);r._r.forEach(function(c){return c(e,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=rr.length;s--;)rr[s].id===this.id&&rr.splice(s,1)},A.revert=function(e){this.kill(e||{})},i})(),x0=(function(){function i(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var A=i.prototype;return A.add=function(e,n,r){zn(e)||(e={matches:e});var s=new zd(0,r||this.scope),o=s.conditions={},a,l,c;Dt&&!s.selector&&(s.selector=Dt.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=e;for(l in e)l==="all"?c=1:(a=Fn.matchMedia(e[l]),a&&(rr.indexOf(s)<0&&rr.push(s),(o[l]=a.matches)&&(c=1),a.addListener?a.addListener(_h):a.addEventListener("change",_h)));return c&&n(s,function(f){return s.add(null,f)}),this},A.revert=function(e){this.kill(e||{})},A.kill=function(e){this.contexts.forEach(function(n){return n.kill(e,!0)})},i})(),ua={registerPlugin:function(){for(var A=arguments.length,t=new Array(A),e=0;e<A;e++)t[e]=arguments[e];t.forEach(function(n){return Id(n)})},timeline:function(A){return new xe(A)},getTweensOf:function(A,t){return Nt.getTweensOf(A,t)},getProperty:function(A,t,e,n){te(A)&&(A=gn(A)[0]);var r=wi(A||{}).get,s=e?_d:gd;return e==="native"&&(e=""),A&&(t?s((Ve[t]&&Ve[t].get||r)(A,t,e,n)):function(o,a,l){return s((Ve[o]&&Ve[o].get||r)(A,o,a,l))})},quickSetter:function(A,t,e){if(A=gn(A),A.length>1){var n=A.map(function(c){return ye.quickSetter(c,t,e)}),r=n.length;return function(c){for(var f=r;f--;)n[f](c)}}A=A[0]||{};var s=Ve[t],o=wi(A),a=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(c){var f=new s;zr._pt=0,f.init(A,e?c+e:c,zr,0,[A]),f.render(1,f),zr._pt&&Uh(1,zr)}:o.set(A,a);return s?l:function(c){return l(A,a,e?c+e:c,o,1)}},quickTo:function(A,t,e){var n,r=ye.to(A,Qe((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),e||{})),s=function(a,l,c){return r.resetTo(t,a,l,c)};return s.tween=r,s},isTweening:function(A){return Nt.getTweensOf(A,!0).length>0},defaults:function(A){return A&&A.ease&&(A.ease=ir(A.ease,zs.ease)),nd(zs,A||{})},config:function(A){return nd(Xe,A||{})},registerEffect:function(A){var t=A.name,e=A.effect,n=A.plugins,r=A.defaults,s=A.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Ve[o]&&!Ke[o]&&Hs(t+" effect requires "+o+" plugin.")}),nh[t]=function(o,a,l){return e(gn(o),Qe(a||{},r),l)},s&&(xe.prototype[t]=function(o,a,l){return this.add(nh[t](o,zn(a)?a:(l=a)&&{},this),l)})},registerEase:function(A,t){ht[A]=ir(t)},parseEase:function(A,t){return arguments.length?ir(A,t):ht},getById:function(A){return Nt.getById(A)},exportRoot:function(A,t){A===void 0&&(A={});var e=new xe(A),n,r;for(e.smoothChildTiming=We(A.smoothChildTiming),Nt.remove(e),e._dp=0,e._time=e._tTime=Nt._time,n=Nt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Zt&&n.vars.onComplete===n._targets[0]))&&On(e,n,n._start-n._delay),n=r;return On(Nt,e,0),e},context:function(A,t){return A?new zd(A,t):Dt},matchMedia:function(A){return new x0(A)},matchMediaRefresh:function(){return rr.forEach(function(A){var t=A.conditions,e,n;for(n in t)t[n]&&(t[n]=!1,e=1);e&&A.revert()})||_h()},addEventListener:function(A,t){var e=oa[A]||(oa[A]=[]);~e.indexOf(t)||e.push(t)},removeEventListener:function(A,t){var e=oa[A],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)},utils:{wrap:$_,wrapYoyo:K_,distribute:wd,random:Ed,snap:Td,normalize:J_,getUnit:fe,clamp:X_,splitColor:Dd,toArray:gn,selector:ph,mapRange:Pd,pipe:Y_,unitize:Z_,interpolate:Q_,shuffle:bd},install:fd,effects:nh,ticker:Ge,updateRoot:xe.updateRoot,plugins:Ve,globalTimeline:Nt,core:{PropTween:Ne,globals:dd,Tween:Zt,Timeline:xe,Animation:Gs,getCache:wi,_removeLinkedListItem:pa,reverting:function(){return ue},context:function(A){return A&&Dt&&(Dt.data.push(A),A._ctx=Dt),Dt},suppressOverwrites:function(A){return xh=A}}};Le("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ua[i]=Zt[i]});Ge.add(xe.updateRoot);zr=ua.to({},{duration:0});var v0=function(A,t){for(var e=A._pt;e&&e.p!==t&&e.op!==t&&e.fp!==t;)e=e._next;return e},y0=function(A,t){var e=A._targets,n,r,s;for(n in t)for(r=e.length;r--;)s=A._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=v0(s,n)),s&&s.modifier&&s.modifier(t[n],A,e[r],n))},ah=function(A,t){return{name:A,headless:1,rawVars:1,init:function(n,r,s){s._onInit=function(o){var a,l;if(te(r)&&(a={},Le(r,function(c){return a[c]=1}),r=a),t){a={};for(l in r)a[l]=t(r[l]);r=a}y0(o,r)}}}},ye=ua.registerPlugin({name:"attr",init:function(A,t,e,n,r){var s,o,a;this.tween=e;for(s in t)a=A.getAttribute(s)||"",o=this.add(A,"setAttribute",(a||0)+"",t[s],n,r,0,0,s),o.op=s,o.b=a,this._props.push(s)},render:function(A,t){for(var e=t._pt;e;)ue?e.set(e.t,e.p,e.b,e):e.r(A,e.d),e=e._next}},{name:"endArray",headless:1,init:function(A,t){for(var e=t.length;e--;)this.add(A,e,A[e]||0,t[e],0,0,0,0,0,1)}},ah("roundProps",mh),ah("modifiers"),ah("snap",Td))||ua;Zt.version=xe.version=ye.version="3.15.0";ud=1;vh()&&Gr();var S0=ht.Power0,M0=ht.Power1,b0=ht.Power2,w0=ht.Power3,T0=ht.Power4,E0=ht.Linear,C0=ht.Quad,P0=ht.Cubic,R0=ht.Quart,I0=ht.Quint,D0=ht.Strong,L0=ht.Elastic,N0=ht.Back,B0=ht.SteppedEase,U0=ht.Bounce,F0=ht.Sine,O0=ht.Expo,z0=ht.Circ;var Hd,Ci,qr,Gh,ur,H0,kd,Wh,k0=function(){return typeof window!="undefined"},ii={},hr=180/Math.PI,Yr=Math.PI/180,Xr=Math.atan2,Vd=1e8,Xh=/([A-Z])/g,V0=/(left|right|width|margin|padding|x)/i,G0=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zh=function(A,t){return t.set(t.t,t.p,Math.round((t.s+t.c*A)*1e4)/1e4+t.u,t)},W0=function(A,t){return t.set(t.t,t.p,A===1?t.e:Math.round((t.s+t.c*A)*1e4)/1e4+t.u,t)},X0=function(A,t){return t.set(t.t,t.p,A?Math.round((t.s+t.c*A)*1e4)/1e4+t.u:t.b,t)},q0=function(A,t){return t.set(t.t,t.p,A===1?t.e:A?Math.round((t.s+t.c*A)*1e4)/1e4+t.u:t.b,t)},Y0=function(A,t){var e=t.s+t.c*A;t.set(t.t,t.p,~~(e+(e<0?-.5:.5))+t.u,t)},$d=function(A,t){return t.set(t.t,t.p,A?t.e:t.b,t)},Kd=function(A,t){return t.set(t.t,t.p,A!==1?t.b:t.e,t)},Z0=function(A,t,e){return A.style[t]=e},J0=function(A,t,e){return A.style.setProperty(t,e)},$0=function(A,t,e){return A._gsap[t]=e},K0=function(A,t,e){return A._gsap.scaleX=A._gsap.scaleY=e},Q0=function(A,t,e,n,r){var s=A._gsap;s.scaleX=s.scaleY=e,s.renderTransform(r,s)},j0=function(A,t,e,n,r){var s=A._gsap;s[t]=e,s.renderTransform(r,s)},Bt="transform",qe=Bt+"Origin",Ax=function i(A,t){var e=this,n=this.target,r=n.style,s=n._gsap;if(A in ii&&r){if(this.tfm=this.tfm||{},A!=="transform")A=Hn[A]||A,~A.indexOf(",")?A.split(",").forEach(function(o){return e.tfm[o]=ni(n,o)}):this.tfm[A]=s.x?s[A]:ni(n,A),A===qe&&(this.tfm.zOrigin=s.zOrigin);else return Hn.transform.split(",").forEach(function(o){return i.call(e,o,t)});if(this.props.indexOf(Bt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(qe,t,"")),A=Bt}(r||t)&&this.props.push(A,t,r[A])},Qd=function(A){A.translate&&(A.removeProperty("translate"),A.removeProperty("scale"),A.removeProperty("rotate"))},tx=function(){var A=this.props,t=this.target,e=t.style,n=t._gsap,r,s;for(r=0;r<A.length;r+=3)A[r+1]?A[r+1]===2?t[A[r]](A[r+2]):t[A[r]]=A[r+2]:A[r+2]?e[A[r]]=A[r+2]:e.removeProperty(A[r].substr(0,2)==="--"?A[r]:A[r].replace(Xh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Wh(),(!r||!r.isStart)&&!e[Bt]&&(Qd(e),n.zOrigin&&e[qe]&&(e[qe]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},jd=function(A,t){var e={target:A,props:[],revert:tx,save:Ax};return A._gsap||ye.core.getCache(A),t&&A.style&&A.nodeType&&t.split(",").forEach(function(n){return e.save(n)}),e},Ap,Hh=function(A,t){var e=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),A):Ci.createElement(A);return e&&e.style?e:Ci.createElement(A)},je=function i(A,t,e){var n=getComputedStyle(A);return n[t]||n.getPropertyValue(t.replace(Xh,"-$1").toLowerCase())||n.getPropertyValue(t)||!e&&i(A,Zr(t)||t,1)||""},Gd="O,Moz,ms,Ms,Webkit".split(","),Zr=function(A,t,e){var n=t||ur,r=n.style,s=5;if(A in r&&!e)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1);s--&&!(Gd[s]+A in r););return s<0?null:(s===3?"ms":s>=0?Gd[s]:"")+A},kh=function(){k0()&&window.document&&(Hd=window,Ci=Hd.document,qr=Ci.documentElement,ur=Hh("div")||{style:{}},H0=Hh("div"),Bt=Zr(Bt),qe=Bt+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ap=!!Zr("perspective"),Wh=ye.core.reverting,Gh=1)},Wd=function(A){var t=A.ownerSVGElement,e=Hh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=A.cloneNode(!0),r;n.style.display="block",e.appendChild(n),qr.appendChild(e);try{r=n.getBBox()}catch{}return e.removeChild(n),qr.removeChild(e),r},Xd=function(A,t){for(var e=t.length;e--;)if(A.hasAttribute(t[e]))return A.getAttribute(t[e])},tp=function(A){var t,e;try{t=A.getBBox()}catch{t=Wd(A),e=1}return t&&(t.width||t.height)||e||(t=Wd(A)),t&&!t.width&&!t.x&&!t.y?{x:+Xd(A,["x","cx","x1"])||0,y:+Xd(A,["y","cy","y1"])||0,width:0,height:0}:t},ep=function(A){return!!(A.getCTM&&(!A.parentNode||A.ownerSVGElement)&&tp(A))},Ri=function(A,t){if(t){var e=A.style,n;t in ii&&t!==qe&&(t=Bt),e.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),e.removeProperty(n==="--"?t:t.replace(Xh,"-$1").toLowerCase())):e.removeAttribute(t)}},Pi=function(A,t,e,n,r,s){var o=new Ne(A._pt,t,e,0,1,s?Kd:$d);return A._pt=o,o.b=n,o.e=r,A._props.push(e),o},qd={deg:1,rad:1,turn:1},ex={grid:1,flex:1},Ii=function i(A,t,e,n){var r=parseFloat(e)||0,s=(e+"").trim().substr((r+"").length)||"px",o=ur.style,a=V0.test(t),l=A.tagName.toLowerCase()==="svg",c=(l?"client":"offset")+(a?"Width":"Height"),f=100,h=n==="px",u=n==="%",d,g,p,m;if(n===s||!r||qd[n]||qd[s])return r;if(s!=="px"&&!h&&(r=i(A,t,e,"px")),m=A.getCTM&&ep(A),(u||s==="%")&&(ii[t]||~t.indexOf("adius")))return d=m?A.getBBox()[a?"width":"height"]:A[c],Vt(u?r/d*f:r/100*d);if(o[a?"width":"height"]=f+(h?s:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&A.appendChild&&!l?A:A.parentNode,m&&(g=(A.ownerSVGElement||{}).parentNode),(!g||g===Ci||!g.appendChild)&&(g=Ci.body),p=g._gsap,p&&u&&p.width&&a&&p.time===Ge.time&&!p.uncache)return Vt(r/p.width*f);if(u&&(t==="height"||t==="width")){var S=A.style[t];A.style[t]=f+n,d=A[c],S?A.style[t]=S:Ri(A,t)}else(u||s==="%")&&!ex[je(g,"display")]&&(o.position=je(A,"position")),g===A&&(o.position="static"),g.appendChild(ur),d=ur[c],g.removeChild(ur),o.position="absolute";return a&&u&&(p=wi(g),p.time=Ge.time,p.width=g[c]),Vt(h?d*r/f:d&&r?f/d*r:0)},ni=function(A,t,e,n){var r;return Gh||kh(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ii[t]&&t!=="transform"?(r=Ys(A,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:va(je(A,qe))+" "+r.zOrigin+"px"):(r=A.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=xa[t]&&xa[t](A,t,e)||je(A,t)||Eh(A,t)||(t==="opacity"?1:0))),e&&!~(r+"").trim().indexOf(" ")?Ii(A,t,r,e)+e:r},nx=function(A,t,e,n){if(!e||e==="none"){var r=Zr(t,A,1),s=r&&je(A,r,1);s&&s!==e?(t=r,e=s):t==="borderColor"&&(e=je(A,"borderTopColor"))}var o=new Ne(this._pt,A.style,t,0,1,Bh),a=0,l=0,c,f,h,u,d,g,p,m,S,M,v,y;if(o.b=e,o.e=n,e+="",n+="",n.substring(0,6)==="var(--"&&(n=je(A,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=A.style[t],A.style[t]=n,n=je(A,t)||n,g?A.style[t]=g:Ri(A,t)),c=[e,n],Ph(c),e=c[0],n=c[1],h=e.match(sr)||[],y=n.match(sr)||[],y.length){for(;f=sr.exec(n);)p=f[0],S=n.substring(a,f.index),d?d=(d+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(d=1),p!==(g=h[l++]||"")&&(u=parseFloat(g)||0,v=g.substr((u+"").length),p.charAt(1)==="="&&(p=or(u,p)+v),m=parseFloat(p),M=p.substr((m+"").length),a=sr.lastIndex-M.length,M||(M=M||Xe.units[t]||v,a===n.length&&(n+=M,o.e+=M)),v!==M&&(u=Ii(A,t,g,M)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:u,c:m-u,m:d&&d<4||t==="zIndex"?Math.round:0});o.c=a<n.length?n.substring(a,n.length):""}else o.r=t==="display"&&n==="none"?Kd:$d;return Sh.test(n)&&(o.e=0),this._pt=o,o},Yd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ix=function(A){var t=A.split(" "),e=t[0],n=t[1]||"50%";return(e==="top"||e==="bottom"||n==="left"||n==="right")&&(A=e,e=n,n=A),t[0]=Yd[e]||e,t[1]=Yd[n]||n,t.join(" ")},rx=function(A,t){if(t.tween&&t.tween._time===t.tween._dur){var e=t.t,n=e.style,r=t.u,s=e._gsap,o,a,l;if(r==="all"||r===!0)n.cssText="",a=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],ii[o]&&(a=1,o=o==="transformOrigin"?qe:Bt),Ri(e,o);a&&(Ri(e,Bt),s&&(s.svg&&e.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ys(e,1),s.uncache=1,Qd(n)))}},xa={clearProps:function(A,t,e,n,r){if(r.data!=="isFromStart"){var s=A._pt=new Ne(A._pt,t,e,0,0,rx);return s.u=n,s.pr=-10,s.tween=r,A._props.push(e),1}}},qs=[1,0,0,1,0,0],np={},ip=function(A){return A==="matrix(1, 0, 0, 1, 0, 0)"||A==="none"||!A},Zd=function(A){var t=je(A,Bt);return ip(t)?qs:t.substr(7).match(yh).map(Vt)},qh=function(A,t){var e=A._gsap||wi(A),n=A.style,r=Zd(A),s,o,a,l;return e.svg&&A.getAttribute("transform")?(a=A.transform.baseVal.consolidate().matrix,r=[a.a,a.b,a.c,a.d,a.e,a.f],r.join(",")==="1,0,0,1,0,0"?qs:r):(r===qs&&!A.offsetParent&&A!==qr&&!e.svg&&(a=n.display,n.display="block",s=A.parentNode,(!s||!A.offsetParent&&!A.getBoundingClientRect().width)&&(l=1,o=A.nextElementSibling,qr.appendChild(A)),r=Zd(A),a?n.display=a:Ri(A,"display"),l&&(o?s.insertBefore(A,o):s?s.appendChild(A):qr.removeChild(A))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vh=function(A,t,e,n,r,s){var o=A._gsap,a=r||qh(A,!0),l=o.xOrigin||0,c=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,u=a[0],d=a[1],g=a[2],p=a[3],m=a[4],S=a[5],M=t.split(" "),v=parseFloat(M[0])||0,y=parseFloat(M[1])||0,E,b,_,w;e?a!==qs&&(b=u*p-d*g)&&(_=v*(p/b)+y*(-g/b)+(g*S-p*m)/b,w=v*(-d/b)+y*(u/b)-(u*S-d*m)/b,v=_,y=w):(E=tp(A),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),y=E.y+(~(M[1]||M[0]).indexOf("%")?y/100*E.height:y)),n||n!==!1&&o.smooth?(m=v-l,S=y-c,o.xOffset=f+(m*u+S*g)-m,o.yOffset=h+(m*d+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=y,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!e,A.style[qe]="0px 0px",s&&(Pi(s,o,"xOrigin",l,v),Pi(s,o,"yOrigin",c,y),Pi(s,o,"xOffset",f,o.xOffset),Pi(s,o,"yOffset",h,o.yOffset)),A.setAttribute("data-svg-origin",v+" "+y)},Ys=function(A,t){var e=A._gsap||new Rh(A);if("x"in e&&!t&&!e.uncache)return e;var n=A.style,r=e.scaleX<0,s="px",o="deg",a=getComputedStyle(A),l=je(A,qe)||"0",c,f,h,u,d,g,p,m,S,M,v,y,E,b,_,w,C,I,D,W,k,U,H,L,V,$,R,tA,lA,LA,WA,kA;return c=f=h=g=p=m=S=M=v=0,u=d=1,e.svg=!!(A.getCTM&&ep(A)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(n[Bt]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[Bt]!=="none"?a[Bt]:"")),n.scale=n.rotate=n.translate="none"),b=qh(A,e.svg),e.svg&&(e.uncache?(V=A.getBBox(),l=e.xOrigin-V.x+"px "+(e.yOrigin-V.y)+"px",L=""):L=!t&&A.getAttribute("data-svg-origin"),Vh(A,L||l,!!L||e.originIsAbsolute,e.smooth!==!1,b)),y=e.xOrigin||0,E=e.yOrigin||0,b!==qs&&(I=b[0],D=b[1],W=b[2],k=b[3],c=U=b[4],f=H=b[5],b.length===6?(u=Math.sqrt(I*I+D*D),d=Math.sqrt(k*k+W*W),g=I||D?Xr(D,I)*hr:0,S=W||k?Xr(W,k)*hr+g:0,S&&(d*=Math.abs(Math.cos(S*Yr))),e.svg&&(c-=y-(y*I+E*W),f-=E-(y*D+E*k))):(kA=b[6],LA=b[7],R=b[8],tA=b[9],lA=b[10],WA=b[11],c=b[12],f=b[13],h=b[14],_=Xr(kA,lA),p=_*hr,_&&(w=Math.cos(-_),C=Math.sin(-_),L=U*w+R*C,V=H*w+tA*C,$=kA*w+lA*C,R=U*-C+R*w,tA=H*-C+tA*w,lA=kA*-C+lA*w,WA=LA*-C+WA*w,U=L,H=V,kA=$),_=Xr(-W,lA),m=_*hr,_&&(w=Math.cos(-_),C=Math.sin(-_),L=I*w-R*C,V=D*w-tA*C,$=W*w-lA*C,WA=k*C+WA*w,I=L,D=V,W=$),_=Xr(D,I),g=_*hr,_&&(w=Math.cos(_),C=Math.sin(_),L=I*w+D*C,V=U*w+H*C,D=D*w-I*C,H=H*w-U*C,I=L,U=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),u=Vt(Math.sqrt(I*I+D*D+W*W)),d=Vt(Math.sqrt(H*H+kA*kA)),_=Xr(U,H),S=Math.abs(_)>2e-4?_*hr:0,v=WA?1/(WA<0?-WA:WA):0),e.svg&&(L=A.getAttribute("transform"),e.forceCSS=A.setAttribute("transform","")||!ip(je(A,Bt)),L&&A.setAttribute("transform",L))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(u*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(d*=-1,S+=S<=0?180:-180)),t=t||e.uncache,e.x=c-((e.xPercent=c&&(!t&&e.xPercent||(Math.round(A.offsetWidth/2)===Math.round(-c)?-50:0)))?A.offsetWidth*e.xPercent/100:0)+s,e.y=f-((e.yPercent=f&&(!t&&e.yPercent||(Math.round(A.offsetHeight/2)===Math.round(-f)?-50:0)))?A.offsetHeight*e.yPercent/100:0)+s,e.z=h+s,e.scaleX=Vt(u),e.scaleY=Vt(d),e.rotation=Vt(g)+o,e.rotationX=Vt(p)+o,e.rotationY=Vt(m)+o,e.skewX=S+o,e.skewY=M+o,e.transformPerspective=v+s,(e.zOrigin=parseFloat(l.split(" ")[2])||!t&&e.zOrigin||0)&&(n[qe]=va(l)),e.xOffset=e.yOffset=0,e.force3D=Xe.force3D,e.renderTransform=e.svg?ox:Ap?rp:sx,e.uncache=0,e},va=function(A){return(A=A.split(" "))[0]+" "+A[1]},Oh=function(A,t,e){var n=fe(t);return Vt(parseFloat(t)+parseFloat(Ii(A,"x",e+"px",n)))+n},sx=function(A,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rp(A,t)},lr="0deg",Xs="0px",cr=") ",rp=function(A,t){var e=t||this,n=e.xPercent,r=e.yPercent,s=e.x,o=e.y,a=e.z,l=e.rotation,c=e.rotationY,f=e.rotationX,h=e.skewX,u=e.skewY,d=e.scaleX,g=e.scaleY,p=e.transformPerspective,m=e.force3D,S=e.target,M=e.zOrigin,v="",y=m==="auto"&&A&&A!==1||m===!0;if(M&&(f!==lr||c!==lr)){var E=parseFloat(c)*Yr,b=Math.sin(E),_=Math.cos(E),w;E=parseFloat(f)*Yr,w=Math.cos(E),s=Oh(S,s,b*w*-M),o=Oh(S,o,-Math.sin(E)*-M),a=Oh(S,a,_*w*-M+M)}p!==Xs&&(v+="perspective("+p+cr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(y||s!==Xs||o!==Xs||a!==Xs)&&(v+=a!==Xs||y?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+cr),l!==lr&&(v+="rotate("+l+cr),c!==lr&&(v+="rotateY("+c+cr),f!==lr&&(v+="rotateX("+f+cr),(h!==lr||u!==lr)&&(v+="skew("+h+", "+u+cr),(d!==1||g!==1)&&(v+="scale("+d+", "+g+cr),S.style[Bt]=v||"translate(0, 0)"},ox=function(A,t){var e=t||this,n=e.xPercent,r=e.yPercent,s=e.x,o=e.y,a=e.rotation,l=e.skewX,c=e.skewY,f=e.scaleX,h=e.scaleY,u=e.target,d=e.xOrigin,g=e.yOrigin,p=e.xOffset,m=e.yOffset,S=e.forceCSS,M=parseFloat(s),v=parseFloat(o),y,E,b,_,w;a=parseFloat(a),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,a+=c),a||l?(a*=Yr,l*=Yr,y=Math.cos(a)*f,E=Math.sin(a)*f,b=Math.sin(a-l)*-h,_=Math.cos(a-l)*h,l&&(c*=Yr,w=Math.tan(l-c),w=Math.sqrt(1+w*w),b*=w,_*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),y*=w,E*=w)),y=Vt(y),E=Vt(E),b=Vt(b),_=Vt(_)):(y=f,_=h,E=b=0),(M&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=Ii(u,"x",s,"px"),v=Ii(u,"y",o,"px")),(d||g||p||m)&&(M=Vt(M+d-(d*y+g*b)+p),v=Vt(v+g-(d*E+g*_)+m)),(n||r)&&(w=u.getBBox(),M=Vt(M+n/100*w.width),v=Vt(v+r/100*w.height)),w="matrix("+y+","+E+","+b+","+_+","+M+","+v+")",u.setAttribute("transform",w),S&&(u.style[Bt]=w)},ax=function(A,t,e,n,r){var s=360,o=te(r),a=parseFloat(r)*(o&&~r.indexOf("rad")?hr:1),l=a-n,c=n+l+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),f==="cw"&&l<0?l=(l+s*Vd)%s-~~(l/s)*s:f==="ccw"&&l>0&&(l=(l-s*Vd)%s-~~(l/s)*s)),A._pt=h=new Ne(A._pt,t,e,n,l,W0),h.e=c,h.u="deg",A._props.push(e),h},Jd=function(A,t){for(var e in t)A[e]=t[e];return A},lx=function(A,t,e){var n=Jd({},e._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=e.style,o,a,l,c,f,h,u,d;n.svg?(l=e.getAttribute("transform"),e.setAttribute("transform",""),s[Bt]=t,o=Ys(e,1),Ri(e,Bt),e.setAttribute("transform",l)):(l=getComputedStyle(e)[Bt],s[Bt]=t,o=Ys(e,1),s[Bt]=l);for(a in ii)l=n[a],c=o[a],l!==c&&r.indexOf(a)<0&&(u=fe(l),d=fe(c),f=u!==d?Ii(e,a,l,d):parseFloat(l),h=parseFloat(c),A._pt=new Ne(A._pt,o,a,f,h-f,zh),A._pt.u=d||0,A._props.push(a));Jd(o,n)};Le("padding,margin,Width,Radius",function(i,A){var t="Top",e="Right",n="Bottom",r="Left",s=(A<3?[t,e,n,r]:[t+r,t+e,n+e,n+r]).map(function(o){return A<2?i+o:"border"+o+i});xa[A>1?"border"+i:i]=function(o,a,l,c,f){var h,u;if(arguments.length<4)return h=s.map(function(d){return ni(o,d,l)}),u=h.join(" "),u.split(h[0]).length===5?h[0]:u;h=(c+"").split(" "),u={},s.forEach(function(d,g){return u[d]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(a,u,f)}});var Yh={name:"css",register:kh,targetTest:function(A){return A.style&&A.nodeType},init:function(A,t,e,n,r){var s=this._props,o=A.style,a=e.vars.startAt,l,c,f,h,u,d,g,p,m,S,M,v,y,E,b,_,w;Gh||kh(),this.styles=this.styles||jd(A),_=this.styles.props,this.tween=e;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Ve[g]&&Dh(g,t,e,n,A,r)))){if(u=typeof c,d=xa[g],u==="function"&&(c=c.call(e,n,A,r),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=Wr(c)),d)d(this,A,g,c,e)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(A).getPropertyValue(g)+"").trim(),c+="",ti.lastIndex=0,ti.test(l)||(p=fe(l),m=fe(c),m?p!==m&&(l=Ii(A,g,l,m)+m):p&&(c+=p)),this.add(o,"setProperty",l,c,n,r,0,0,g),s.push(g),_.push(g,0,o[g]);else if(u!=="undefined"){if(a&&g in a?(l=typeof a[g]=="function"?a[g].call(e,n,A,r):a[g],te(l)&&~l.indexOf("random(")&&(l=Wr(l)),fe(l+"")||l==="auto"||(l+=Xe.units[g]||fe(ni(A,g))||""),(l+"").charAt(1)==="="&&(l=ni(A,g))):l=ni(A,g),h=parseFloat(l),S=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),S&&(c=c.substr(2)),f=parseFloat(c),g in Hn&&(g==="autoAlpha"&&(h===1&&ni(A,"visibility")==="hidden"&&f&&(h=0),_.push("visibility",0,o.visibility),Pi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Hn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in ii,M){if(this.styles.save(g),w=c,u==="string"&&c.substring(0,6)==="var(--"){if(c=je(A,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var C=A.style.perspective;A.style.perspective=c,c=je(A,"perspective"),C?A.style.perspective=C:Ri(A,"perspective")}f=parseFloat(c)}if(v||(y=A._gsap,y.renderTransform&&!t.parseTransform||Ys(A,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Ne(this._pt,o,Bt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Ne(this._pt,y,"scaleY",y.scaleY,(S?or(y.scaleY,S+f):f)-y.scaleY||0,zh),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){_.push(qe,0,o[qe]),c=ix(c),y.svg?Vh(A,c,0,E,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==y.zOrigin&&Pi(this,y,"zOrigin",y.zOrigin,m),Pi(this,o,g,va(l),va(c)));continue}else if(g==="svgOrigin"){Vh(A,c,1,E,0,this);continue}else if(g in np){ax(this,y,g,h,S?or(h,S+c):c);continue}else if(g==="smoothOrigin"){Pi(this,y,"smooth",y.smooth,c);continue}else if(g==="force3D"){y[g]=c;continue}else if(g==="transform"){lx(this,c,A);continue}}else g in o||(g=Zr(g)||g);if(M||(f||f===0)&&(h||h===0)&&!G0.test(c)&&g in o)p=(l+"").substr((h+"").length),f||(f=0),m=fe(c)||(g in Xe.units?Xe.units[g]:p),p!==m&&(h=Ii(A,g,l,m)),this._pt=new Ne(this._pt,M?y:o,g,h,(S?or(h,S+f):f)-h,!M&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Y0:zh),this._pt.u=m||0,M&&w!==c?(this._pt.b=l,this._pt.e=w,this._pt.r=q0):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=X0);else if(g in o)nx.call(this,A,g,l,S?S+c:c);else if(g in A)this.add(A,g,l||A[g],S?S+c:c,n,r);else if(g!=="parseTransform"){da(g,c);continue}M||(g in o?_.push(g,0,o[g]):typeof A[g]=="function"?_.push(g,2,A[g]()):_.push(g,1,l||A[g])),s.push(g)}}b&&Fh(this)},render:function(A,t){if(t.tween._time||!Wh())for(var e=t._pt;e;)e.r(A,e.d),e=e._next;else t.styles.revert()},get:ni,aliases:Hn,getSetter:function(A,t,e){var n=Hn[t];return n&&n.indexOf(",")<0&&(t=n),t in ii&&t!==qe&&(A._gsap.x||ni(A,"x"))?e&&kd===e?t==="scale"?K0:$0:(kd=e||{})&&(t==="scale"?Q0:j0):A.style&&!fa(A.style[t])?Z0:~t.indexOf("-")?J0:_a(A,t)},core:{_removeProperty:Ri,_getMatrix:qh}};ye.utils.checkPrefix=Zr;ye.core.getStyleSaver=jd;(function(i,A,t,e){var n=Le(i+","+A+","+t,function(r){ii[r]=1});Le(A,function(r){Xe.units[r]="deg",np[r]=1}),Hn[n[13]]=i+","+A,Le(e,function(r){var s=r.split(":");Hn[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Xe.units[i]="px"});ye.registerPlugin(Yh);var UA=ye.registerPlugin(Yh)||ye,t1=UA.core.Tween;function sp(i,A){for(var t=0;t<A.length;t++){var e=A[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function cx(i,A,t){return A&&sp(i.prototype,A),t&&sp(i,t),i}var de,Ma,hx,An,Di,Li,$r,ap,fr,Kr,lp,ri,wn,cp,hp=function(){return de||typeof window!="undefined"&&(de=window.gsap)&&de.registerPlugin&&de},up=1,Jr=[],nt=[],Tn=[],Js=Date.now,Zh=function(A,t){return t},ux=function(){var A=Kr.core,t=A.bridge||{},e=A._scrollers,n=A._proxies;e.push.apply(e,nt),n.push.apply(n,Tn),nt=e,Tn=n,Zh=function(s,o){return t[s](o)}},oi=function(A,t){return~Tn.indexOf(A)&&Tn[Tn.indexOf(A)+1][t]},$s=function(A){return!!~lp.indexOf(A)},Ue=function(A,t,e,n,r){return A.addEventListener(t,e,{passive:n!==!1,capture:!!r})},Be=function(A,t,e,n){return A.removeEventListener(t,e,!!n)},ya="scrollLeft",Sa="scrollTop",Jh=function(){return ri&&ri.isPressed||nt.cache++},ba=function(A,t){var e=function n(r){if(r||r===0){up&&(An.history.scrollRestoration="manual");var s=ri&&ri.isPressed;r=n.v=Math.round(r)||(ri&&ri.iOS?1:0),A(r),n.cacheID=nt.cache,s&&Zh("ss",r)}else(t||nt.cache!==n.cacheID||Zh("ref"))&&(n.cacheID=nt.cache,n.v=A());return n.v+n.offset};return e.offset=0,A&&e},Se={s:ya,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ba(function(i){return arguments.length?An.scrollTo(i,Kt.sc()):An.pageXOffset||Di[ya]||Li[ya]||$r[ya]||0})},Kt={s:Sa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Se,sc:ba(function(i){return arguments.length?An.scrollTo(Se.sc(),i):An.pageYOffset||Di[Sa]||Li[Sa]||$r[Sa]||0})},Fe=function(A,t){return(t&&t._ctx&&t._ctx.selector||de.utils.toArray)(A)[0]||(typeof A=="string"&&de.config().nullTargetWarn!==!1?console.warn("Element not found:",A):null)},fx=function(A,t){for(var e=t.length;e--;)if(t[e]===A||t[e].contains(A))return!0;return!1},si=function(A,t){var e=t.s,n=t.sc;$s(A)&&(A=Di.scrollingElement||Li);var r=nt.indexOf(A),s=n===Kt.sc?1:2;!~r&&(r=nt.push(A)-1),nt[r+s]||Ue(A,"scroll",Jh);var o=nt[r+s],a=o||(nt[r+s]=ba(oi(A,e),!0)||($s(A)?n:ba(function(l){return arguments.length?A[e]=l:A[e]})));return a.target=A,o||(a.smooth=de.getProperty(A,"scrollBehavior")==="smooth"),a},wa=function(A,t,e){var n=A,r=A,s=Js(),o=s,a=t||50,l=Math.max(500,a*3),c=function(d,g){var p=Js();g||p-s>a?(r=n,n=d,o=s,s=p):e?n+=d:n=r+(d-r)/(p-o)*(s-o)},f=function(){r=n=e?0:n,o=s=0},h=function(d){var g=o,p=r,m=Js();return(d||d===0)&&d!==n&&c(d),s===o||m-o>l?0:(n+(e?p:-p))/((e?m:s)-g)*1e3};return{update:c,reset:f,getVelocity:h}},Zs=function(A,t){return t&&!A._gsapAllow&&A.cancelable!==!1&&A.preventDefault(),A.changedTouches?A.changedTouches[0]:A},op=function(A){var t=Math.max.apply(Math,A),e=Math.min.apply(Math,A);return Math.abs(t)>=Math.abs(e)?t:e},fp=function(){Kr=de.core.globals().ScrollTrigger,Kr&&Kr.core&&ux()},dp=function(A){return de=A||hp(),!Ma&&de&&typeof document!="undefined"&&document.body&&(An=window,Di=document,Li=Di.documentElement,$r=Di.body,lp=[An,Di,Li,$r],hx=de.utils.clamp,cp=de.core.context||function(){},fr="onpointerenter"in $r?"pointer":"mouse",ap=Gt.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wn=Gt.eventTypes=("ontouchstart"in Li?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Li?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return up=0},500),Ma=1),Kr||fp(),Ma};Se.op=Kt;nt.cache=0;var Gt=(function(){function i(t){this.init(t)}var A=i.prototype;return A.init=function(e){Ma||dp(de)||console.warn("Please gsap.registerPlugin(Observer)"),Kr||fp();var n=e.tolerance,r=e.dragMinimum,s=e.type,o=e.target,a=e.lineHeight,l=e.debounce,c=e.preventDefault,f=e.onStop,h=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,g=e.event,p=e.onDragStart,m=e.onDragEnd,S=e.onDrag,M=e.onPress,v=e.onRelease,y=e.onRight,E=e.onLeft,b=e.onUp,_=e.onDown,w=e.onChangeX,C=e.onChangeY,I=e.onChange,D=e.onToggleX,W=e.onToggleY,k=e.onHover,U=e.onHoverEnd,H=e.onMove,L=e.ignoreCheck,V=e.isNormalizer,$=e.onGestureStart,R=e.onGestureEnd,tA=e.onWheel,lA=e.onEnable,LA=e.onDisable,WA=e.onClick,kA=e.scrollSpeed,K=e.capture,rA=e.allowClicks,iA=e.lockAxis,CA=e.onLockAxis;this.target=o=Fe(o)||Li,this.vars=e,u&&(u=de.utils.toArray(u)),n=n||1e-9,r=r||0,d=d||1,kA=kA||1,s=s||"wheel,touch,pointer",l=l!==!1,a||(a=parseFloat(An.getComputedStyle($r).lineHeight)||22);var VA,wA,ot,SA,XA,JA,ZA,Y=this,ut=0,_t=0,Tt=e.passive||!c&&e.passive!==!1,$A=si(o,Se),dt=si(o,Kt),B=$A(),Ot=dt(),YA=~s.indexOf("touch")&&!~s.indexOf("pointer")&&wn[0]==="pointerdown",P=$s(o),x=o.ownerDocument||Di,z=[0,0,0],X=[0,0,0],J=0,hA=function(){return J=Js()},aA=function(nA,OA){return(Y.event=nA)&&u&&fx(nA.target,u)||OA&&YA&&nA.pointerType!=="touch"||L&&L(nA,OA)},Q=function(){Y._vx.reset(),Y._vy.reset(),wA.pause(),f&&f(Y)},j=function(){var nA=Y.deltaX=op(z),OA=Y.deltaY=op(X),oA=Math.abs(nA)>=n,zA=Math.abs(OA)>=n;I&&(oA||zA)&&I(Y,nA,OA,z,X),oA&&(y&&Y.deltaX>0&&y(Y),E&&Y.deltaX<0&&E(Y),w&&w(Y),D&&Y.deltaX<0!=ut<0&&D(Y),ut=Y.deltaX,z[0]=z[1]=z[2]=0),zA&&(_&&Y.deltaY>0&&_(Y),b&&Y.deltaY<0&&b(Y),C&&C(Y),W&&Y.deltaY<0!=_t<0&&W(Y),_t=Y.deltaY,X[0]=X[1]=X[2]=0),(SA||ot)&&(H&&H(Y),ot&&(p&&ot===1&&p(Y),S&&S(Y),ot=0),SA=!1),JA&&!(JA=!1)&&CA&&CA(Y),XA&&(tA(Y),XA=!1),VA=0},dA=function(nA,OA,oA){z[oA]+=nA,X[oA]+=OA,Y._vx.update(nA),Y._vy.update(OA),l?VA||(VA=requestAnimationFrame(j)):j()},EA=function(nA,OA){iA&&!ZA&&(Y.axis=ZA=Math.abs(nA)>Math.abs(OA)?"x":"y",JA=!0),ZA!=="y"&&(z[2]+=nA,Y._vx.update(nA,!0)),ZA!=="x"&&(X[2]+=OA,Y._vy.update(OA,!0)),l?VA||(VA=requestAnimationFrame(j)):j()},pA=function(nA){if(!aA(nA,1)){nA=Zs(nA,c);var OA=nA.clientX,oA=nA.clientY,zA=OA-Y.x,PA=oA-Y.y,KA=Y.isDragging;Y.x=OA,Y.y=oA,(KA||(zA||PA)&&(Math.abs(Y.startX-OA)>=r||Math.abs(Y.startY-oA)>=r))&&(ot||(ot=KA?2:1),KA||(Y.isDragging=!0),EA(zA,PA))}},fA=Y.onPress=function(sA){aA(sA,1)||sA&&sA.button||(Y.axis=ZA=null,wA.pause(),Y.isPressed=!0,sA=Zs(sA),ut=_t=0,Y.startX=Y.x=sA.clientX,Y.startY=Y.y=sA.clientY,Y._vx.reset(),Y._vy.reset(),Ue(V?o:x,wn[1],pA,Tt,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},cA=Y.onRelease=function(sA){if(!aA(sA,1)){Be(V?o:x,wn[1],pA,!0);var nA=!isNaN(Y.y-Y.startY),OA=Y.isDragging,oA=OA&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),zA=Zs(sA);!oA&&nA&&(Y._vx.reset(),Y._vy.reset(),c&&rA&&de.delayedCall(.08,function(){if(Js()-J>300&&!sA.defaultPrevented){if(sA.target.click)sA.target.click();else if(x.createEvent){var PA=x.createEvent("MouseEvents");PA.initMouseEvent("click",!0,!0,An,1,zA.screenX,zA.screenY,zA.clientX,zA.clientY,!1,!1,!1,!1,0,null),sA.target.dispatchEvent(PA)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&OA&&!V&&wA.restart(!0),ot&&j(),m&&OA&&m(Y),v&&v(Y,oA)}},DA=function(nA){return nA.touches&&nA.touches.length>1&&(Y.isGesturing=!0)&&$(nA,Y.isDragging)},FA=function(){return(Y.isGesturing=!1)||R(Y)},N=function(nA){if(!aA(nA)){var OA=$A(),oA=dt();dA((OA-B)*kA,(oA-Ot)*kA,1),B=OA,Ot=oA,f&&wA.restart(!0)}},uA=function(nA){if(!aA(nA)){nA=Zs(nA,c),tA&&(XA=!0);var OA=(nA.deltaMode===1?a:nA.deltaMode===2?An.innerHeight:1)*d;dA(nA.deltaX*OA,nA.deltaY*OA,0),f&&!V&&wA.restart(!0)}},AA=function(nA){if(!aA(nA)){var OA=nA.clientX,oA=nA.clientY,zA=OA-Y.x,PA=oA-Y.y;Y.x=OA,Y.y=oA,SA=!0,f&&wA.restart(!0),(zA||PA)&&EA(zA,PA)}},mA=function(nA){Y.event=nA,k(Y)},gA=function(nA){Y.event=nA,U(Y)},eA=function(nA){return aA(nA)||Zs(nA,c)&&WA(Y)};wA=Y._dc=de.delayedCall(h||.25,Q).pause(),Y.deltaX=Y.deltaY=0,Y._vx=wa(0,50,!0),Y._vy=wa(0,50,!0),Y.scrollX=$A,Y.scrollY=dt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,cp(this),Y.enable=function(sA){return Y.isEnabled||(Ue(P?x:o,"scroll",Jh),s.indexOf("scroll")>=0&&Ue(P?x:o,"scroll",N,Tt,K),s.indexOf("wheel")>=0&&Ue(o,"wheel",uA,Tt,K),(s.indexOf("touch")>=0&&ap||s.indexOf("pointer")>=0)&&(Ue(o,wn[0],fA,Tt,K),Ue(x,wn[2],cA),Ue(x,wn[3],cA),rA&&Ue(o,"click",hA,!0,!0),WA&&Ue(o,"click",eA),$&&Ue(x,"gesturestart",DA),R&&Ue(x,"gestureend",FA),k&&Ue(o,fr+"enter",mA),U&&Ue(o,fr+"leave",gA),H&&Ue(o,fr+"move",AA)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=SA=ot=!1,Y._vx.reset(),Y._vy.reset(),B=$A(),Ot=dt(),sA&&sA.type&&fA(sA),lA&&lA(Y)),Y},Y.disable=function(){Y.isEnabled&&(Jr.filter(function(sA){return sA!==Y&&$s(sA.target)}).length||Be(P?x:o,"scroll",Jh),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Be(V?o:x,wn[1],pA,!0)),Be(P?x:o,"scroll",N,K),Be(o,"wheel",uA,K),Be(o,wn[0],fA,K),Be(x,wn[2],cA),Be(x,wn[3],cA),Be(o,"click",hA,!0),Be(o,"click",eA),Be(x,"gesturestart",DA),Be(x,"gestureend",FA),Be(o,fr+"enter",mA),Be(o,fr+"leave",gA),Be(o,fr+"move",AA),Y.isEnabled=Y.isPressed=Y.isDragging=!1,LA&&LA(Y))},Y.kill=Y.revert=function(){Y.disable();var sA=Jr.indexOf(Y);sA>=0&&Jr.splice(sA,1),ri===Y&&(ri=0)},Jr.push(Y),V&&$s(o)&&(ri=Y),Y.enable(g)},cx(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Gt.version="3.15.0";Gt.create=function(i){return new Gt(i)};Gt.register=dp;Gt.getAll=function(){return Jr.slice()};Gt.getById=function(i){return Jr.filter(function(A){return A.vars.id===i})[0]};hp()&&de.registerPlugin(Gt);var TA,ts,st,gt,nn,pt,lu,ka,co,no,Qs,Ta,Me,Wa,eu,ze,pp,mp,es,Dp,$h,Lp,Oe,nu,Np,Bp,Ni,iu,cu,ns,hu,io,ru,Kh,Ea=1,be=Date.now,Qh=be(),vn=0,js=0,gp=function(A,t,e){var n=en(A)&&(A.substr(0,6)==="clamp("||A.indexOf("max")>-1);return e["_"+t+"Clamp"]=n,n?A.substr(6,A.length-7):A},_p=function(A,t){return t&&(!en(A)||A.substr(0,6)!=="clamp(")?"clamp("+A+")":A},dx=function i(){return js&&requestAnimationFrame(i)},xp=function(){return Wa=1},vp=function(){return Wa=0},kn=function(A){return A},Ao=function(A){return Math.round(A*1e5)/1e5||0},Up=function(){return typeof window!="undefined"},Fp=function(){return TA||Up()&&(TA=window.gsap)&&TA.registerPlugin&&TA},xr=function(A){return!!~lu.indexOf(A)},Op=function(A){return(A==="Height"?hu:st["inner"+A])||nn["client"+A]||pt["client"+A]},zp=function(A){return oi(A,"getBoundingClientRect")||(xr(A)?function(){return Ha.width=st.innerWidth,Ha.height=hu,Ha}:function(){return ai(A)})},px=function(A,t,e){var n=e.d,r=e.d2,s=e.a;return(s=oi(A,"getBoundingClientRect"))?function(){return s()[n]}:function(){return(t?Op(r):A["client"+r])||0}},mx=function(A,t){return!t||~Tn.indexOf(A)?zp(A):function(){return Ha}},Vn=function(A,t){var e=t.s,n=t.d2,r=t.d,s=t.a;return Math.max(0,(e="scroll"+n)&&(s=oi(A,e))?s()-zp(A)()[r]:xr(A)?(nn[e]||pt[e])-Op(n):A[e]-A["offset"+n])},Ca=function(A,t){for(var e=0;e<es.length;e+=3)(!t||~t.indexOf(es[e+1]))&&A(es[e],es[e+1],es[e+2])},en=function(A){return typeof A=="string"},we=function(A){return typeof A=="function"},to=function(A){return typeof A=="number"},dr=function(A){return typeof A=="object"},Ks=function(A,t,e){return A&&A.progress(t?0:1)&&e&&A.pause()},Qr=function(A,t,e){if(A.enabled){var n=A._ctx?A._ctx.add(function(){return t(A,e)}):t(A,e);n&&n.totalTime&&(A.callbackAnimation=n)}},jr=Math.abs,Hp="left",kp="top",uu="right",fu="bottom",mr="width",gr="height",ro="Right",so="Left",oo="Top",ao="Bottom",Qt="padding",_n="margin",rs="Width",du="Height",ee="px",xn=function(A){return st.getComputedStyle(A.nodeType===Node.DOCUMENT_NODE?A.scrollingElement:A)},gx=function(A){var t=xn(A).position;A.style.position=t==="absolute"||t==="fixed"?t:"relative"},yp=function(A,t){for(var e in t)e in A||(A[e]=t[e]);return A},ai=function(A,t){var e=t&&xn(A)[eu]!=="matrix(1, 0, 0, 1, 0, 0)"&&TA.to(A,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=A.getBoundingClientRect?A.getBoundingClientRect():A.scrollingElement.getBoundingClientRect();return e&&e.progress(0).kill(),n},Va=function(A,t){var e=t.d2;return A["offset"+e]||A["client"+e]||0},Vp=function(A){var t=[],e=A.labels,n=A.duration(),r;for(r in e)t.push(e[r]/n);return t},_x=function(A){return function(t){return TA.utils.snap(Vp(A),t)}},pu=function(A){var t=TA.utils.snap(A),e=Array.isArray(A)&&A.slice(0).sort(function(n,r){return n-r});return e?function(n,r,s){s===void 0&&(s=.001);var o;if(!r)return t(n);if(r>0){for(n-=s,o=0;o<e.length;o++)if(e[o]>=n)return e[o];return e[o-1]}else for(o=e.length,n+=s;o--;)if(e[o]<=n)return e[o];return e[0]}:function(n,r,s){s===void 0&&(s=.001);var o=t(n);return!r||Math.abs(o-n)<s||o-n<0==r<0?o:t(r<0?n-A:n+A)}},xx=function(A){return function(t,e){return pu(Vp(A))(t,e.direction)}},Pa=function(A,t,e,n){return e.split(",").forEach(function(r){return A(t,r,n)})},ae=function(A,t,e,n,r){return A.addEventListener(t,e,{passive:!n,capture:!!r})},oe=function(A,t,e,n){return A.removeEventListener(t,e,!!n)},Ra=function(A,t,e){e=e&&e.wheelHandler,e&&(A(t,"wheel",e),A(t,"touchmove",e))},Sp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ia={toggleActions:"play",anticipatePin:0},Ga={top:0,left:0,center:.5,bottom:1,right:1},Ua=function(A,t){if(en(A)){var e=A.indexOf("="),n=~e?+(A.charAt(e-1)+1)*parseFloat(A.substr(e+1)):0;~e&&(A.indexOf("%")>e&&(n*=t/100),A=A.substr(0,e-1)),A=n+(A in Ga?Ga[A]*t:~A.indexOf("%")?parseFloat(A)*t/100:parseFloat(A)||0)}return A},Da=function(A,t,e,n,r,s,o,a){var l=r.startColor,c=r.endColor,f=r.fontSize,h=r.indent,u=r.fontWeight,d=gt.createElement("div"),g=xr(e)||oi(e,"pinType")==="fixed",p=A.indexOf("scroller")!==-1,m=g?pt:e.tagName==="IFRAME"?e.contentDocument.body:e,S=A.indexOf("start")!==-1,M=S?l:c,v="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||a)&&g?"fixed;":"absolute;"),(p||a||!g)&&(v+=(n===Kt?uu:fu)+":"+(s+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),d._isStart=S,d.setAttribute("class","gsap-marker-"+A+(t?" marker-"+t:"")),d.style.cssText=v,d.innerText=t||t===0?A+"-"+t:A,m.children[0]?m.insertBefore(d,m.children[0]):m.appendChild(d),d._offset=d["offset"+n.op.d2],Fa(d,0,n,S),d},Fa=function(A,t,e,n){var r={display:"block"},s=e[n?"os2":"p2"],o=e[n?"p2":"os2"];A._isFlipped=n,r[e.a+"Percent"]=n?-100:0,r[e.a]=n?"1px":0,r["border"+s+rs]=1,r["border"+o+rs]=0,r[e.p]=t+"px",TA.set(A,r)},it=[],su={},ho,Mp=function(){return be()-vn>34&&(ho||(ho=requestAnimationFrame(li)))},As=function(){(!Oe||!Oe.isPressed||Oe.startX>pt.clientWidth)&&(nt.cache++,Oe?ho||(ho=requestAnimationFrame(li)):li(),vn||yr("scrollStart"),vn=be())},jh=function(){Bp=st.innerWidth,Np=st.innerHeight},eo=function(A){nt.cache++,(A===!0||!Me&&!Lp&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!nu||Bp!==st.innerWidth||Math.abs(st.innerHeight-Np)>st.innerHeight*.25))&&ka.restart(!0)},vr={},vx=[],Gp=function i(){return oe(bA,"scrollEnd",i)||pr(!0)},yr=function(A){return vr[A]&&vr[A].map(function(t){return t()})||vx},tn=[],Wp=function(A){for(var t=0;t<tn.length;t+=5)(!A||tn[t+4]&&tn[t+4].query===A)&&(tn[t].style.cssText=tn[t+1],tn[t].getBBox&&tn[t].setAttribute("transform",tn[t+2]||""),tn[t+3].uncache=1)},Xp=function(){return nt.forEach(function(A){return we(A)&&++A.cacheID&&(A.rec=A())})},mu=function(A,t){var e;for(ze=0;ze<it.length;ze++)e=it[ze],e&&(!t||e._ctx===t)&&(A?e.kill(1):e.revert(!0,!0));io=!0,t&&Wp(t),t||yr("revert")},qp=function(A,t){nt.cache++,(t||!He)&&nt.forEach(function(e){return we(e)&&e.cacheID++&&(e.rec=0)}),en(A)&&(st.history.scrollRestoration=cu=A)},He,_r=0,bp,yx=function(){if(bp!==_r){var A=bp=_r;requestAnimationFrame(function(){return A===_r&&pr(!0)})}},Yp=function(){pt.appendChild(ns),hu=!Oe&&ns.offsetHeight||st.innerHeight,pt.removeChild(ns)},wp=function(A){return co(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=A?"none":"block"})},pr=function(A,t){if(nn=gt.documentElement,pt=gt.body,lu=[st,gt,nn,pt],vn&&!A&&!io){ae(bA,"scrollEnd",Gp);return}Yp(),He=bA.isRefreshing=!0,io||Xp();var e=yr("refreshInit");Dp&&bA.sort(),t||mu(),nt.forEach(function(n){we(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),it.slice(0).forEach(function(n){return n.refresh()}),io=!1,it.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",s=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-s),n.refresh()}}),ru=1,wp(!0),it.forEach(function(n){var r=Vn(n.scroller,n._dir),s=n.vars.end==="max"||n._endClamp&&n.end>r,o=n._startClamp&&n.start>=r;(s||o)&&n.setPositions(o?r-1:n.start,s?Math.max(o?r:n.start+1,r):n.end,!0)}),wp(!1),ru=0,e.forEach(function(n){return n&&n.render&&n.render(-1)}),nt.forEach(function(n){we(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),qp(cu,1),ka.pause(),_r++,He=2,li(2),it.forEach(function(n){return we(n.vars.onRefresh)&&n.vars.onRefresh(n)}),He=bA.isRefreshing=!1,yr("refresh")},ou=0,Oa=1,lo,li=function(A){if(A===2||!He&&!io){bA.isUpdating=!0,lo&&lo.update(0);var t=it.length,e=be(),n=e-Qh>=50,r=t&&it[0].scroll();if(Oa=ou>r?-1:1,He||(ou=r),n&&(vn&&!Wa&&e-vn>200&&(vn=0,yr("scrollEnd")),Qs=Qh,Qh=e),Oa<0){for(ze=t;ze-- >0;)it[ze]&&it[ze].update(0,n);Oa=1}else for(ze=0;ze<t;ze++)it[ze]&&it[ze].update(0,n);bA.isUpdating=!1}ho=0},au=[Hp,kp,fu,uu,_n+ao,_n+ro,_n+oo,_n+so,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],za=au.concat([mr,gr,"boxSizing","max"+rs,"max"+du,"position",_n,Qt,Qt+oo,Qt+ro,Qt+ao,Qt+so]),Sx=function(A,t,e){is(e);var n=A._gsap;if(n.spacerIsNative)is(n.spacerState);else if(A._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(A,t),r.removeChild(t))}A._gsap.swappedIn=!1},Au=function(A,t,e,n){if(!A._gsap.swappedIn){for(var r=au.length,s=t.style,o=A.style,a;r--;)a=au[r],s[a]=e[a];s.position=e.position==="absolute"?"absolute":"relative",e.display==="inline"&&(s.display="inline-block"),o[fu]=o[uu]="auto",s.flexBasis=e.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[mr]=Va(A,Se)+ee,s[gr]=Va(A,Kt)+ee,s[Qt]=o[_n]=o[kp]=o[Hp]="0",is(n),o[mr]=o["max"+rs]=e[mr],o[gr]=o["max"+du]=e[gr],o[Qt]=e[Qt],A.parentNode!==t&&(A.parentNode.insertBefore(t,A),t.appendChild(A)),A._gsap.swappedIn=!0}},Mx=/([A-Z])/g,is=function(A){if(A){var t=A.t.style,e=A.length,n=0,r,s;for((A.t._gsap||TA.core.getCache(A.t)).uncache=1;n<e;n+=2)s=A[n+1],r=A[n],s?t[r]=s:t[r]&&t.removeProperty(r.replace(Mx,"-$1").toLowerCase())}},La=function(A){for(var t=za.length,e=A.style,n=[],r=0;r<t;r++)n.push(za[r],e[za[r]]);return n.t=A,n},bx=function(A,t,e){for(var n=[],r=A.length,s=e?8:0,o;s<r;s+=2)o=A[s],n.push(o,o in t?t[o]:A[s+1]);return n.t=A.t,n},Ha={left:0,top:0},Tp=function(A,t,e,n,r,s,o,a,l,c,f,h,u,d){we(A)&&(A=A(a)),en(A)&&A.substr(0,3)==="max"&&(A=h+(A.charAt(4)==="="?Ua("0"+A.substr(3),e):0));var g=u?u.time():0,p,m,S;if(u&&u.seek(0),isNaN(A)||(A=+A),to(A))u&&(A=TA.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,h,A)),o&&Fa(o,e,n,!0);else{we(t)&&(t=t(a));var M=(A||"0").split(" "),v,y,E,b;S=Fe(t,a)||pt,v=ai(S)||{},(!v||!v.left&&!v.top)&&xn(S).display==="none"&&(b=S.style.display,S.style.display="block",v=ai(S),b?S.style.display=b:S.style.removeProperty("display")),y=Ua(M[0],v[n.d]),E=Ua(M[1]||"0",e),A=v[n.p]-l[n.p]-c+y+r-E,o&&Fa(o,E,n,e-E<20||o._isStart&&E>20),e-=e-E}if(d&&(a[d]=A||-.001,A<0&&(A=0)),s){var _=A+e,w=s._isStart;p="scroll"+n.d2,Fa(s,_,n,w&&_>20||!w&&(f?Math.max(pt[p],nn[p]):s.parentNode[p])<=_+1),f&&(l=ai(o),f&&(s.style[n.op.p]=l[n.op.p]-n.op.m-s._offset+ee))}return u&&S&&(p=ai(S),u.seek(h),m=ai(S),u._caScrollDist=p[n.p]-m[n.p],A=A/u._caScrollDist*h),u&&u.seek(g),u?A:Math.round(A)},wx=/(webkit|moz|length|cssText|inset)/i,Ep=function(A,t,e,n){if(A.parentNode!==t){var r=A.style,s,o;if(t===pt){A._stOrig=r.cssText,o=xn(A);for(s in o)!+s&&!wx.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=e,r.left=n}else r.cssText=A._stOrig;TA.core.getCache(A).uncache=1,t.appendChild(A)}},Zp=function(A,t,e){var n=t,r=n;return function(s){var o=Math.round(A());return o!==n&&o!==r&&Math.abs(o-n)>3&&Math.abs(o-r)>3&&(s=o,e&&e()),r=n,n=Math.round(s),n}},Na=function(A,t,e){var n={};n[t.p]="+="+e,TA.set(A,n)},Cp=function(A,t){var e=si(A,t),n="_scroll"+t.p2,r=function s(o,a,l,c,f){var h=s.tween,u=a.onComplete,d={};l=l||e();var g=Zp(e,l,function(){h.kill(),s.tween=0});return f=c&&f||0,c=c||o-l,h&&h.kill(),a[n]=o,a.inherit=!1,a.modifiers=d,d[n]=function(){return g(l+c*h.ratio+f*h.ratio*h.ratio)},a.onUpdate=function(){nt.cache++,s.tween&&li()},a.onComplete=function(){s.tween=0,u&&u.call(h)},h=s.tween=TA.to(A,a),h};return A[n]=e,e.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ae(A,"wheel",e.wheelHandler),bA.isTouch&&ae(A,"touchmove",e.wheelHandler),r},bA=(function(){function i(t,e){ts||i.register(TA)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),iu(this),this.init(t,e)}var A=i.prototype;return A.init=function(e,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!js){this.update=this.refresh=this.kill=kn;return}e=yp(en(e)||to(e)||e.nodeType?{trigger:e}:e,Ia);var r=e,s=r.onUpdate,o=r.toggleClass,a=r.id,l=r.onToggle,c=r.onRefresh,f=r.scrub,h=r.trigger,u=r.pin,d=r.pinSpacing,g=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,M=r.once,v=r.snap,y=r.pinReparent,E=r.pinSpacer,b=r.containerAnimation,_=r.fastScrollEnd,w=r.preventOverlaps,C=e.horizontal||e.containerAnimation&&e.horizontal!==!1?Se:Kt,I=!f&&f!==0,D=Fe(e.scroller||st),W=TA.core.getCache(D),k=xr(D),U=("pinType"in e?e.pinType:oi(D,"pinType")||k&&"fixed")==="fixed",H=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],L=I&&e.toggleActions.split(" "),V="markers"in e?e.markers:Ia.markers,$=k?0:parseFloat(xn(D)["border"+C.p2+rs])||0,R=this,tA=e.onRefreshInit&&function(){return e.onRefreshInit(R)},lA=px(D,k,C),LA=mx(D,k),WA=0,kA=0,K=0,rA=si(D,C),iA,CA,VA,wA,ot,SA,XA,JA,ZA,Y,ut,_t,Tt,$A,dt,B,Ot,YA,P,x,z,X,J,hA,aA,Q,j,dA,EA,pA,fA,cA,DA,FA,N,uA,AA,mA,gA;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=b?b.time.bind(b):rA,wA=rA(),R.vars=e,n=n||e.animation,"refreshPriority"in e&&(Dp=1,e.refreshPriority===-9999&&(lo=R)),W.tweenScroll=W.tweenScroll||{top:Cp(D,Kt),left:Cp(D,Se)},R.tweenTo=iA=W.tweenScroll[C.p],R.scrubDuration=function(oA){DA=to(oA)&&oA,DA?cA?cA.duration(oA):cA=TA.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:DA,paused:!0,onComplete:function(){return m&&m(R)}}):(cA&&cA.progress(1).kill(),cA=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&e.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(f),pA=0,a||(a=n.vars.id)),v&&((!dr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&TA.set(k?[pt,nn]:D,{scrollBehavior:"auto"}),nt.forEach(function(oA){return we(oA)&&oA.target===(k?gt.scrollingElement||nn:D)&&(oA.smooth=!1)}),VA=we(v.snapTo)?v.snapTo:v.snapTo==="labels"?_x(n):v.snapTo==="labelsDirectional"?xx(n):v.directional!==!1?function(oA,zA){return pu(v.snapTo)(oA,be()-kA<500?0:zA.direction)}:TA.utils.snap(v.snapTo),FA=v.duration||{min:.1,max:2},FA=dr(FA)?no(FA.min,FA.max):no(FA,FA),N=TA.delayedCall(v.delay||DA/2||.1,function(){var oA=rA(),zA=be()-kA<500,PA=iA.tween;if((zA||Math.abs(R.getVelocity())<10)&&!PA&&!Wa&&WA!==oA){var KA=(oA-SA)/$A,Jt=n&&!I?n.totalProgress():KA,rt=zA?0:(Jt-fA)/(be()-Qs)*1e3||0,Pt=TA.utils.clamp(-KA,1-KA,jr(rt/2)*rt/.185),re=KA+(v.inertia===!1?0:Pt),Rt,vt,ct=v,Ie=ct.onStart,Et=ct.onInterrupt,ge=ct.onComplete;if(Rt=VA(re,R),to(Rt)||(Rt=re),vt=Math.max(0,Math.round(SA+Rt*$A)),oA<=XA&&oA>=SA&&vt!==oA){if(PA&&!PA._initted&&PA.data<=jr(vt-oA))return;v.inertia===!1&&(Pt=Rt-KA),iA(vt,{duration:FA(jr(Math.max(jr(re-Jt),jr(Rt-Jt))*.185/rt/.05||0)),ease:v.ease||"power3",data:jr(vt-oA),onInterrupt:function(){return N.restart(!0)&&Et&&Qr(R,Et)},onComplete:function(){R.update(),WA=rA(),n&&!I&&(cA?cA.resetTo("totalProgress",Rt,n._tTime/n._tDur):n.progress(Rt)),pA=fA=n&&!I?n.totalProgress():R.progress,S&&S(R),ge&&Qr(R,ge)}},oA,Pt*$A,vt-oA-Pt*$A),Ie&&Qr(R,Ie,iA.tween)}}else R.isActive&&WA!==oA&&N.restart(!0)}).pause()),a&&(su[a]=R),h=R.trigger=Fe(h||u!==!0&&u),gA=h&&h._gsap&&h._gsap.stRevert,gA&&(gA=gA(R)),u=u===!0?h:Fe(u),en(o)&&(o={targets:h,className:o}),u&&(d===!1||d===_n||(d=!d&&u.parentNode&&u.parentNode.style&&xn(u.parentNode).display==="flex"?!1:Qt),R.pin=u,CA=TA.core.getCache(u),CA.spacer?dt=CA.pinState:(E&&(E=Fe(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),CA.spacerIsNative=!!E,E&&(CA.spacerState=La(E))),CA.spacer=YA=E||gt.createElement("div"),YA.classList.add("pin-spacer"),a&&YA.classList.add("pin-spacer-"+a),CA.pinState=dt=La(u)),e.force3D!==!1&&TA.set(u,{force3D:!0}),R.spacer=YA=CA.spacer,EA=xn(u),hA=EA[d+C.os2],x=TA.getProperty(u),z=TA.quickSetter(u,C.a,ee),Au(u,YA,EA),Ot=La(u)),V){_t=dr(V)?yp(V,Sp):Sp,Y=Da("scroller-start",a,D,C,_t,0),ut=Da("scroller-end",a,D,C,_t,0,Y),P=Y["offset"+C.op.d2];var eA=Fe(oi(D,"content")||D);JA=this.markerStart=Da("start",a,eA,C,_t,P,0,b),ZA=this.markerEnd=Da("end",a,eA,C,_t,P,0,b),b&&(mA=TA.quickSetter([JA,ZA],C.a,ee)),!U&&!(Tn.length&&oi(D,"fixedMarkers")===!0)&&(gx(k?pt:D),TA.set([Y,ut],{force3D:!0}),Q=TA.quickSetter(Y,C.a,ee),dA=TA.quickSetter(ut,C.a,ee))}if(b){var sA=b.vars.onUpdate,nA=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),sA&&sA.apply(b,nA||[])})}if(R.previous=function(){return it[it.indexOf(R)-1]},R.next=function(){return it[it.indexOf(R)+1]},R.revert=function(oA,zA){if(!zA)return R.kill(!0);var PA=oA!==!1||!R.enabled,KA=Me;PA!==R.isReverted&&(PA&&(uA=Math.max(rA(),R.scroll.rec||0),K=R.progress,AA=n&&n.progress()),JA&&[JA,ZA,Y,ut].forEach(function(Jt){return Jt.style.display=PA?"none":"block"}),PA&&(Me=R,R.update(PA)),u&&(!y||!R.isActive)&&(PA?Sx(u,YA,dt):Au(u,YA,xn(u),aA)),PA||R.update(PA),Me=KA,R.isReverted=PA)},R.refresh=function(oA,zA,PA,KA){if(!((Me||!R.enabled)&&!zA)){if(u&&oA&&vn){ae(i,"scrollEnd",Gp);return}!He&&tA&&tA(R),Me=R,iA.tween&&!PA&&(iA.tween.kill(),iA.tween=0),cA&&cA.pause(),g&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(xA){return xA.vars.immediateRender&&xA.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Jt=lA(),rt=LA(),Pt=b?b.duration():Vn(D,C),re=$A<=.01||!$A,Rt=0,vt=KA||0,ct=dr(PA)?PA.end:e.end,Ie=e.endTrigger||h,Et=dr(PA)?PA.start:e.start||(e.start===0||!h?0:u?"0 0":"0 100%"),ge=R.pinnedContainer=e.pinnedContainer&&Fe(e.pinnedContainer,R),De=h&&Math.max(0,it.indexOf(R))||0,$t=De,zt,Ae,Bn,Ur,se,Xt,fn,T,O,Z,G,q,_A;for(V&&dr(PA)&&(q=TA.getProperty(Y,C.p),_A=TA.getProperty(ut,C.p));$t-- >0;)Xt=it[$t],Xt.end||Xt.refresh(0,1)||(Me=R),fn=Xt.pin,fn&&(fn===h||fn===u||fn===ge)&&!Xt.isReverted&&(Z||(Z=[]),Z.unshift(Xt),Xt.revert(!0,!0)),Xt!==it[$t]&&(De--,$t--);for(we(Et)&&(Et=Et(R)),Et=gp(Et,"start",R),SA=Tp(Et,h,Jt,C,rA(),JA,Y,R,rt,$,U,Pt,b,R._startClamp&&"_startClamp")||(u?-.001:0),we(ct)&&(ct=ct(R)),en(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(en(Et)?Et.split(" ")[0]:"")+ct:(Rt=Ua(ct.substr(2),Jt),ct=en(Et)?Et:(b?TA.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,SA):SA)+Rt,Ie=h)),ct=gp(ct,"end",R),XA=Math.max(SA,Tp(ct||(Ie?"100% 0":Pt),Ie,Jt,C,rA()+Rt,ZA,ut,R,rt,$,U,Pt,b,R._endClamp&&"_endClamp"))||-.001,Rt=0,$t=De;$t--;)Xt=it[$t]||{},fn=Xt.pin,fn&&Xt.start-Xt._pinPush<=SA&&!b&&Xt.end>0&&(zt=Xt.end-(R._startClamp?Math.max(0,Xt.start):Xt.start),(fn===h&&Xt.start-Xt._pinPush<SA||fn===ge)&&isNaN(Et)&&(Rt+=zt*(1-Xt.progress)),fn===u&&(vt+=zt));if(SA+=Rt,XA+=Rt,R._startClamp&&(R._startClamp+=Rt),R._endClamp&&!He&&(R._endClamp=XA||-.001,XA=Math.min(XA,Vn(D,C))),$A=XA-SA||(SA-=.01)&&.001,re&&(K=TA.utils.clamp(0,1,TA.utils.normalize(SA,XA,uA))),R._pinPush=vt,JA&&Rt&&(zt={},zt[C.a]="+="+Rt,ge&&(zt[C.p]="-="+rA()),TA.set([JA,ZA],zt)),u&&!(ru&&R.end>=Vn(D,C)))zt=xn(u),Ur=C===Kt,Bn=rA(),X=parseFloat(x(C.a))+vt,!Pt&&XA>1&&(G=(k?gt.scrollingElement||nn:D).style,G={style:G,value:G["overflow"+C.a.toUpperCase()]},k&&xn(pt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+C.a.toUpperCase()]="scroll")),Au(u,YA,zt),Ot=La(u),Ae=ai(u,!0),T=U&&si(D,Ur?Se:Kt)(),d?(aA=[d+C.os2,$A+vt+ee],aA.t=YA,$t=d===Qt?Va(u,C)+$A+vt:0,$t&&(aA.push(C.d,$t+ee),YA.style.flexBasis!=="auto"&&(YA.style.flexBasis=$t+ee)),is(aA),ge&&it.forEach(function(xA){xA.pin===ge&&xA.vars.pinSpacing!==!1&&(xA._subPinOffset=!0)}),U&&rA(uA)):($t=Va(u,C),$t&&YA.style.flexBasis!=="auto"&&(YA.style.flexBasis=$t+ee)),U&&(se={top:Ae.top+(Ur?Bn-SA:T)+ee,left:Ae.left+(Ur?T:Bn-SA)+ee,boxSizing:"border-box",position:"fixed"},se[mr]=se["max"+rs]=Math.ceil(Ae.width)+ee,se[gr]=se["max"+du]=Math.ceil(Ae.height)+ee,se[_n]=se[_n+oo]=se[_n+ro]=se[_n+ao]=se[_n+so]="0",se[Qt]=zt[Qt],se[Qt+oo]=zt[Qt+oo],se[Qt+ro]=zt[Qt+ro],se[Qt+ao]=zt[Qt+ao],se[Qt+so]=zt[Qt+so],B=bx(dt,se,y),He&&rA(0)),n?(O=n._initted,$h(1),n.render(n.duration(),!0,!0),J=x(C.a)-X+$A+vt,j=Math.abs($A-J)>1,U&&j&&B.splice(B.length-2,2),n.render(0,!0,!0),O||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),$h(0)):J=$A,G&&(G.value?G.style["overflow"+C.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+C.a));else if(h&&rA()&&!b)for(Ae=h.parentNode;Ae&&Ae!==pt;)Ae._pinOffset&&(SA-=Ae._pinOffset,XA-=Ae._pinOffset),Ae=Ae.parentNode;Z&&Z.forEach(function(xA){return xA.revert(!1,!0)}),R.start=SA,R.end=XA,wA=ot=He?uA:rA(),!b&&!He&&(wA<uA&&rA(uA),R.scroll.rec=0),R.revert(!1,!0),kA=be(),N&&(WA=-1,N.restart(!0)),Me=0,n&&I&&(n._initted||AA)&&n.progress()!==AA&&n.progress(AA||0,!0).render(n.time(),!0,!0),(re||K!==R.progress||b||g||n&&!n._initted)&&(n&&!I&&(n._initted||K||n.vars.immediateRender!==!1)&&n.totalProgress(b&&SA<-.001&&!K?TA.utils.normalize(SA,XA,0):K,!0),R.progress=re||(wA-SA)/$A===K?0:K),u&&d&&(YA._pinOffset=Math.round(R.progress*J)),cA&&cA.invalidate(),isNaN(q)||(q-=TA.getProperty(Y,C.p),_A-=TA.getProperty(ut,C.p),Na(Y,C,q),Na(JA,C,q-(KA||0)),Na(ut,C,_A),Na(ZA,C,_A-(KA||0))),re&&!He&&R.update(),c&&!He&&!Tt&&(Tt=!0,c(R),Tt=!1)}},R.getVelocity=function(){return(rA()-ot)/(be()-Qs)*1e3||0},R.endAnimation=function(){Ks(R.callbackAnimation),n&&(cA?cA.progress(1):n.paused()?I||Ks(n,R.direction<0,1):Ks(n,n.reversed()))},R.labelToScroll=function(oA){return n&&n.labels&&(SA||R.refresh()||SA)+n.labels[oA]/n.duration()*$A||0},R.getTrailing=function(oA){var zA=it.indexOf(R),PA=R.direction>0?it.slice(0,zA).reverse():it.slice(zA+1);return(en(oA)?PA.filter(function(KA){return KA.vars.preventOverlaps===oA}):PA).filter(function(KA){return R.direction>0?KA.end<=SA:KA.start>=XA})},R.update=function(oA,zA,PA){if(!(b&&!PA&&!oA)){var KA=He===!0?uA:R.scroll(),Jt=oA?0:(KA-SA)/$A,rt=Jt<0?0:Jt>1?1:Jt||0,Pt=R.progress,re,Rt,vt,ct,Ie,Et,ge,De;if(zA&&(ot=wA,wA=b?rA():KA,v&&(fA=pA,pA=n&&!I?n.totalProgress():rt)),p&&u&&!Me&&!Ea&&vn&&(!rt&&SA<KA+(KA-ot)/(be()-Qs)*p?rt=1e-4:rt===1&&XA>KA+(KA-ot)/(be()-Qs)*p&&(rt=.9999)),rt!==Pt&&R.enabled){if(re=R.isActive=!!rt&&rt<1,Rt=!!Pt&&Pt<1,Et=re!==Rt,Ie=Et||!!rt!=!!Pt,R.direction=rt>Pt?1:-1,R.progress=rt,Ie&&!Me&&(vt=rt&&!Pt?0:rt===1?1:Pt===1?2:3,I&&(ct=!Et&&L[vt+1]!=="none"&&L[vt+1]||L[vt],De=n&&(ct==="complete"||ct==="reset"||ct in n))),w&&(Et||De)&&(De||f||!n)&&(we(w)?w(R):R.getTrailing(w).forEach(function(Bn){return Bn.endAnimation()})),I||(cA&&!Me&&!Ea?(cA._dp._time-cA._start!==cA._time&&cA.render(cA._dp._time-cA._start),cA.resetTo?cA.resetTo("totalProgress",rt,n._tTime/n._tDur):(cA.vars.totalProgress=rt,cA.invalidate().restart())):n&&n.totalProgress(rt,!!(Me&&(kA||oA)))),u){if(oA&&d&&(YA.style[d+C.os2]=hA),!U)z(Ao(X+J*rt));else if(Ie){if(ge=!oA&&rt>Pt&&XA+1>KA&&KA+1>=Vn(D,C),y)if(!oA&&(re||ge)){var $t=ai(u,!0),zt=KA-SA;Ep(u,pt,$t.top+(C===Kt?zt:0)+ee,$t.left+(C===Kt?0:zt)+ee)}else Ep(u,YA);is(re||ge?B:Ot),j&&rt<1&&re||z(X+(rt===1&&!ge?J:0))}}v&&!iA.tween&&!Me&&!Ea&&N.restart(!0),o&&(Et||M&&rt&&(rt<1||!Kh))&&co(o.targets).forEach(function(Bn){return Bn.classList[re||M?"add":"remove"](o.className)}),s&&!I&&!oA&&s(R),Ie&&!Me?(I&&(De&&(ct==="complete"?n.pause().totalProgress(1):ct==="reset"?n.restart(!0).pause():ct==="restart"?n.restart(!0):n[ct]()),s&&s(R)),(Et||!Kh)&&(l&&Et&&Qr(R,l),H[vt]&&Qr(R,H[vt]),M&&(rt===1?R.kill(!1,1):H[vt]=0),Et||(vt=rt===1?1:3,H[vt]&&Qr(R,H[vt]))),_&&!re&&Math.abs(R.getVelocity())>(to(_)?_:2500)&&(Ks(R.callbackAnimation),cA?cA.progress(1):Ks(n,ct==="reverse"?1:!rt,1))):I&&s&&!Me&&s(R)}if(dA){var Ae=b?KA/b.duration()*(b._caScrollDist||0):KA;Q(Ae+(Y._isFlipped?1:0)),dA(Ae)}mA&&mA(-KA/b.duration()*(b._caScrollDist||0))}},R.enable=function(oA,zA){R.enabled||(R.enabled=!0,ae(D,"resize",eo),k||ae(D,"scroll",As),tA&&ae(i,"refreshInit",tA),oA!==!1&&(R.progress=K=0,wA=ot=WA=rA()),zA!==!1&&R.refresh())},R.getTween=function(oA){return oA&&iA?iA.tween:cA},R.setPositions=function(oA,zA,PA,KA){if(b){var Jt=b.scrollTrigger,rt=b.duration(),Pt=Jt.end-Jt.start;oA=Jt.start+Pt*oA/rt,zA=Jt.start+Pt*zA/rt}R.refresh(!1,!1,{start:_p(oA,PA&&!!R._startClamp),end:_p(zA,PA&&!!R._endClamp)},KA),R.update()},R.adjustPinSpacing=function(oA){if(aA&&oA){var zA=aA.indexOf(C.d)+1;aA[zA]=parseFloat(aA[zA])+oA+ee,aA[1]=parseFloat(aA[1])+oA+ee,is(aA)}},R.disable=function(oA,zA){if(oA!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,zA||cA&&cA.pause(),uA=0,CA&&(CA.uncache=1),tA&&oe(i,"refreshInit",tA),N&&(N.pause(),iA.tween&&iA.tween.kill()&&(iA.tween=0)),!k)){for(var PA=it.length;PA--;)if(it[PA].scroller===D&&it[PA]!==R)return;oe(D,"resize",eo),k||oe(D,"scroll",As)}},R.kill=function(oA,zA){R.disable(oA,zA),cA&&!zA&&cA.kill(),a&&delete su[a];var PA=it.indexOf(R);PA>=0&&it.splice(PA,1),PA===ze&&Oa>0&&ze--,PA=0,it.forEach(function(KA){return KA.scroller===R.scroller&&(PA=1)}),PA||He||(R.scroll.rec=0),n&&(n.scrollTrigger=null,oA&&n.revert({kill:!1}),zA||n.kill()),JA&&[JA,ZA,Y,ut].forEach(function(KA){return KA.parentNode&&KA.parentNode.removeChild(KA)}),lo===R&&(lo=0),u&&(CA&&(CA.uncache=1),PA=0,it.forEach(function(KA){return KA.pin===u&&PA++}),PA||(CA.spacer=0)),e.onKill&&e.onKill(R)},it.push(R),R.enable(!1,!1),gA&&gA(R),n&&n.add&&!$A){var OA=R.update;R.update=function(){R.update=OA,nt.cache++,SA||XA||R.refresh()},TA.delayedCall(.01,R.update),$A=.01,SA=XA=0}else R.refresh();u&&yx()},i.register=function(e){return ts||(TA=e||Fp(),Up()&&window.document&&i.enable(),ts=js),ts},i.defaults=function(e){if(e)for(var n in e)Ia[n]=e[n];return Ia},i.disable=function(e,n){js=0,it.forEach(function(s){return s[n?"kill":"disable"](e)}),oe(st,"wheel",As),oe(gt,"scroll",As),clearInterval(Ta),oe(gt,"touchcancel",kn),oe(pt,"touchstart",kn),Pa(oe,gt,"pointerdown,touchstart,mousedown",xp),Pa(oe,gt,"pointerup,touchend,mouseup",vp),ka.kill(),Ca(oe);for(var r=0;r<nt.length;r+=3)Ra(oe,nt[r],nt[r+1]),Ra(oe,nt[r],nt[r+2])},i.enable=function(){if(st=window,gt=document,nn=gt.documentElement,pt=gt.body,TA){if(co=TA.utils.toArray,no=TA.utils.clamp,iu=TA.core.context||kn,$h=TA.core.suppressOverwrites||kn,cu=st.history.scrollRestoration||"auto",ou=st.pageYOffset||0,TA.core.globals("ScrollTrigger",i),pt){js=1,ns=document.createElement("div"),ns.style.height="100vh",ns.style.position="absolute",Yp(),dx(),Gt.register(TA),i.isTouch=Gt.isTouch,Ni=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nu=Gt.isTouch===1,ae(st,"wheel",As),lu=[st,gt,nn,pt],TA.matchMedia?(i.matchMedia=function(c){var f=TA.matchMedia(),h;for(h in c)f.add(h,c[h]);return f},TA.addEventListener("matchMediaInit",function(){Xp(),mu()}),TA.addEventListener("matchMediaRevert",function(){return Wp()}),TA.addEventListener("matchMedia",function(){pr(0,1),yr("matchMedia")}),TA.matchMedia().add("(orientation: portrait)",function(){return jh(),jh})):console.warn("Requires GSAP 3.11.0 or later"),jh(),ae(gt,"scroll",As);var e=pt.hasAttribute("style"),n=pt.style,r=n.borderTopStyle,s=TA.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ai(pt),Kt.m=Math.round(o.top+Kt.sc())||0,Se.m=Math.round(o.left+Se.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),e||(pt.setAttribute("style",""),pt.removeAttribute("style")),Ta=setInterval(Mp,250),TA.delayedCall(.5,function(){return Ea=0}),ae(gt,"touchcancel",kn),ae(pt,"touchstart",kn),Pa(ae,gt,"pointerdown,touchstart,mousedown",xp),Pa(ae,gt,"pointerup,touchend,mouseup",vp),eu=TA.utils.checkPrefix("transform"),za.push(eu),ts=be(),ka=TA.delayedCall(.2,pr).pause(),es=[gt,"visibilitychange",function(){var c=st.innerWidth,f=st.innerHeight;gt.hidden?(pp=c,mp=f):(pp!==c||mp!==f)&&eo()},gt,"DOMContentLoaded",pr,st,"load",pr,st,"resize",eo],Ca(ae),it.forEach(function(c){return c.enable(0,1)}),a=0;a<nt.length;a+=3)Ra(oe,nt[a],nt[a+1]),Ra(oe,nt[a],nt[a+2])}else if(gt){var l=function c(){i.enable(),gt.removeEventListener("DOMContentLoaded",c)};gt.addEventListener("DOMContentLoaded",l)}}},i.config=function(e){"limitCallbacks"in e&&(Kh=!!e.limitCallbacks);var n=e.syncInterval;n&&clearInterval(Ta)||(Ta=n)&&setInterval(Mp,n),"ignoreMobileResize"in e&&(nu=i.isTouch===1&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ca(oe)||Ca(ae,e.autoRefreshEvents||"none"),Lp=(e.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(e,n){var r=Fe(e),s=nt.indexOf(r),o=xr(r);~s&&nt.splice(s,o?6:2),n&&(o?Tn.unshift(st,n,pt,n,nn,n):Tn.unshift(r,n))},i.clearMatchMedia=function(e){it.forEach(function(n){return n._ctx&&n._ctx.query===e&&n._ctx.kill(!0,!0)})},i.isInViewport=function(e,n,r){var s=(en(e)?Fe(e):e).getBoundingClientRect(),o=s[r?mr:gr]*n||0;return r?s.right-o>0&&s.left+o<st.innerWidth:s.bottom-o>0&&s.top+o<st.innerHeight},i.positionInViewport=function(e,n,r){en(e)&&(e=Fe(e));var s=e.getBoundingClientRect(),o=s[r?mr:gr],a=n==null?o/2:n in Ga?Ga[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return r?(s.left+a)/st.innerWidth:(s.top+a)/st.innerHeight},i.killAll=function(e){if(it.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),e!==!0){var n=vr.killAll||[];vr={},n.forEach(function(r){return r()})}},i})();bA.version="3.15.0";bA.saveStyles=function(i){return i?co(i).forEach(function(A){if(A&&A.style){var t=tn.indexOf(A);t>=0&&tn.splice(t,5),tn.push(A,A.style.cssText,A.getBBox&&A.getAttribute("transform"),TA.core.getCache(A),iu())}}):tn};bA.revert=function(i,A){return mu(!i,A)};bA.create=function(i,A){return new bA(i,A)};bA.refresh=function(i){return i?eo(!0):(ts||bA.register())&&pr(!0)};bA.update=function(i){return++nt.cache&&li(i===!0?2:0)};bA.clearScrollMemory=qp;bA.maxScroll=function(i,A){return Vn(i,A?Se:Kt)};bA.getScrollFunc=function(i,A){return si(Fe(i),A?Se:Kt)};bA.getById=function(i){return su[i]};bA.getAll=function(){return it.filter(function(i){return i.vars.id!=="ScrollSmoother"})};bA.isScrolling=function(){return!!vn};bA.snapDirectional=pu;bA.addEventListener=function(i,A){var t=vr[i]||(vr[i]=[]);~t.indexOf(A)||t.push(A)};bA.removeEventListener=function(i,A){var t=vr[i],e=t&&t.indexOf(A);e>=0&&t.splice(e,1)};bA.batch=function(i,A){var t=[],e={},n=A.interval||.016,r=A.batchMax||1e9,s=function(l,c){var f=[],h=[],u=TA.delayedCall(n,function(){c(f,h),f=[],h=[]}).pause();return function(d){f.length||u.restart(!0),f.push(d.trigger),h.push(d),r<=f.length&&u.progress(1)}},o;for(o in A)e[o]=o.substr(0,2)==="on"&&we(A[o])&&o!=="onRefreshInit"?s(o,A[o]):A[o];return we(r)&&(r=r(),ae(bA,"refresh",function(){return r=A.batchMax()})),co(i).forEach(function(a){var l={};for(o in e)l[o]=e[o];l.trigger=a,t.push(bA.create(l))}),t};var Pp=function(A,t,e,n){return t>n?A(n):t<0&&A(0),e>n?(n-t)/(e-t):e<0?t/(t-e):1},tu=function i(A,t){t===!0?A.style.removeProperty("touch-action"):A.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",A===nn&&i(pt,t)},Ba={auto:1,scroll:1},Tx=function(A){var t=A.event,e=A.target,n=A.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||TA.core.getCache(r),o=be(),a;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==pt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ba[(a=xn(r)).overflowY]||Ba[a.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==e&&!xr(r)&&(Ba[(a=xn(r)).overflowY]||Ba[a.overflowX]),s._isScrollT=o}(s._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Jp=function(A,t,e,n){return Gt.create({target:A,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Tx,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return e&&ae(gt,Gt.eventTypes[0],Ip,!1,!0)},onDisable:function(){return oe(gt,Gt.eventTypes[0],Ip,!0)}})},Ex=/(input|label|select|textarea)/i,Rp,Ip=function(A){var t=Ex.test(A.target.tagName);(t||Rp)&&(A._gsapAllow=!0,Rp=t)},Cx=function(A){dr(A)||(A={}),A.preventDefault=A.isNormalizer=A.allowClicks=!0,A.type||(A.type="wheel,touch"),A.debounce=!!A.debounce,A.id=A.id||"normalizer";var t=A,e=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,s=t.onRelease,o,a,l=Fe(A.target)||nn,c=TA.core.globals().ScrollSmoother,f=c&&c.get(),h=Ni&&(A.content&&Fe(A.content)||f&&A.content!==!1&&!f.smooth()&&f.content()),u=si(l,Kt),d=si(l,Se),g=1,p=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,S=we(n)?function(){return n(o)}:function(){return n||2.8},M,v,y=Jp(l,A.type,!0,r),E=function(){return v=!1},b=kn,_=kn,w=function(){a=Vn(l,Kt),_=no(Ni?1:0,a),e&&(b=no(0,Vn(l,Se))),M=_r},C=function(){h._gsap.y=Ao(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},I=function(){if(v){requestAnimationFrame(E);var V=Ao(o.deltaY/2),$=_(u.v-V);if(h&&$!==u.v+u.offset){u.offset=$-u.v;var R=Ao((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",u.cacheID=nt.cache,li()}return!0}u.offset&&C(),v=!0},D,W,k,U,H=function(){w(),D.isActive()&&D.vars.scrollY>a&&(u()>a?D.progress(1)&&u(a):D.resetTo("scrollY",a))};return h&&TA.set(h,{y:"+=0"}),A.ignoreCheck=function(L){return Ni&&L.type==="touchmove"&&I(L)||g>1.05&&L.type!=="touchstart"||o.isGesturing||L.touches&&L.touches.length>1},A.onPress=function(){v=!1;var L=g;g=Ao((st.visualViewport&&st.visualViewport.scale||1)/p),D.pause(),L!==g&&tu(l,g>1.01?!0:e?!1:"x"),W=d(),k=u(),w(),M=_r},A.onRelease=A.onGestureStart=function(L,V){if(u.offset&&C(),!V)U.restart(!0);else{nt.cache++;var $=S(),R,tA;e&&(R=d(),tA=R+$*.05*-L.velocityX/.227,$*=Pp(d,R,tA,Vn(l,Se)),D.vars.scrollX=b(tA)),R=u(),tA=R+$*.05*-L.velocityY/.227,$*=Pp(u,R,tA,Vn(l,Kt)),D.vars.scrollY=_(tA),D.invalidate().duration($).play(.01),(Ni&&D.vars.scrollY>=a||R>=a-1)&&TA.to({},{onUpdate:H,duration:$})}s&&s(L)},A.onWheel=function(){D._ts&&D.pause(),be()-m>1e3&&(M=0,m=be())},A.onChange=function(L,V,$,R,tA){if(_r!==M&&w(),V&&e&&d(b(R[2]===V?W+(L.startX-L.x):d()+V-R[1])),$){u.offset&&C();var lA=tA[2]===$,LA=lA?k+L.startY-L.y:u()+$-tA[1],WA=_(LA);lA&&LA!==WA&&(k+=WA-LA),u(WA)}($||V)&&li()},A.onEnable=function(){tu(l,e?!1:"x"),bA.addEventListener("refresh",H),ae(st,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=d.smooth=!1),y.enable()},A.onDisable=function(){tu(l,!0),oe(st,"resize",H),bA.removeEventListener("refresh",H),y.kill()},A.lockAxis=A.lockAxis!==!1,o=new Gt(A),o.iOS=Ni,Ni&&!u()&&u(1),Ni&&TA.ticker.add(kn),U=o._dc,D=TA.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:e?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Zp(u,u(),function(){return D.pause()})},onUpdate:li,onComplete:U.vars.onComplete}),o};bA.sort=function(i){if(we(i))return it.sort(i);var A=st.pageYOffset||0;return bA.getAll().forEach(function(t){return t._sortY=t.trigger?A+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(i||function(t,e){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((e.vars.containerAnimation?1e6:e._sortY)+(e.vars.refreshPriority||0)*-1e6)})};bA.observe=function(i){return new Gt(i)};bA.normalizeScroll=function(i){if(typeof i=="undefined")return Oe;if(i===!0&&Oe)return Oe.enable();if(i===!1){Oe&&Oe.kill(),Oe=i;return}var A=i instanceof Gt?i:Cx(i);return Oe&&Oe.target===A.target&&Oe.kill(),xr(A.target)&&(Oe=A),A};bA.core={_getVelocityProp:wa,_inputObserver:Jp,_scrollers:nt,_proxies:Tn,bridge:{ss:function(){vn||yr("scrollStart"),vn=be()},ref:function(){return Me}}};Fp()&&TA.registerPlugin(bA);UA.registerPlugin(bA);var wt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,En="power3.out",Bi="power3.out",ss=1.25,uo=.6,$p=38,Kp=.1,Qp=.15,jp=.38,Am=.12,tm=.1,em=.08,nm=.6,im="top 82%";UA.defaults({ease:En,duration:.9});bA.config({ignoreMobileResize:!0});var rm="1.3.26";function am(i,A,t){return Math.max(i,Math.min(A,t))}function Px(i,A,t){return(1-t)*i+t*A}function Rx(i,A,t,e){return Px(i,A,1-Math.exp(-t*e))}function Ix(i,A){return(i%A+A)%A}var Dx=class{constructor(){IA(this,"isRunning",!1);IA(this,"value",0);IA(this,"from",0);IA(this,"to",0);IA(this,"currentTime",0);IA(this,"lerp");IA(this,"duration");IA(this,"easing");IA(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let A=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=am(0,this.currentTime/this.duration,1);A=e>=1;let n=A?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Rx(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,A=!0)):(this.value=this.to,A=!0);A&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,A)}stop(){this.isRunning=!1}fromTo(i,A,{lerp:t,duration:e,easing:n,onStart:r,onUpdate:s}){this.from=this.value=i,this.to=A,this.lerp=t,this.duration=e,this.easing=n,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=s}};function Lx(i,A){let t;return function(...e){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,e)},A)}}var Nx=class{constructor(i,A,{autoResize:t=!0,debounce:e=250}={}){IA(this,"width",0);IA(this,"height",0);IA(this,"scrollHeight",0);IA(this,"scrollWidth",0);IA(this,"debouncedResize");IA(this,"wrapperResizeObserver");IA(this,"contentResizeObserver");IA(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});IA(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});IA(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=A,t&&(this.debouncedResize=Lx(this.resize,e),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,A;(i=this.wrapperResizeObserver)==null||i.disconnect(),(A=this.contentResizeObserver)==null||A.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lm=class{constructor(){IA(this,"events",{})}emit(i,...A){var e;let t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)(e=t[n])==null||e.call(t,...A)}on(i,A){return this.events[i]?this.events[i].push(A):this.events[i]=[A],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(e=>A!==e)}}off(i,A){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(e=>A!==e)}destroy(){this.events={}}},Bx=100/6,Ui={passive:!1};function sm(i,A){return i===1?Bx:i===2?A:1}var Ux=class{constructor(i,A={wheelMultiplier:1,touchMultiplier:1}){IA(this,"touchStart",{x:0,y:0});IA(this,"lastDelta",{x:0,y:0});IA(this,"window",{width:0,height:0});IA(this,"emitter",new lm);IA(this,"onTouchStart",i=>{let{clientX:A,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=A,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});IA(this,"onTouchMove",i=>{let{clientX:A,clientY:t}=i.targetTouches?i.targetTouches[0]:i,e=-(A-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=A,this.touchStart.y=t,this.lastDelta={x:e,y:n},this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:i})});IA(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});IA(this,"onWheel",i=>{let{deltaX:A,deltaY:t,deltaMode:e}=i,n=sm(e,this.window.width),r=sm(e,this.window.height);A*=n,t*=r,A*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:A,deltaY:t,event:i})});IA(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=A,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ui),this.element.addEventListener("touchstart",this.onTouchStart,Ui),this.element.addEventListener("touchmove",this.onTouchMove,Ui),this.element.addEventListener("touchend",this.onTouchEnd,Ui)}on(i,A){return this.emitter.on(i,A)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ui),this.element.removeEventListener("touchstart",this.onTouchStart,Ui),this.element.removeEventListener("touchmove",this.onTouchMove,Ui),this.element.removeEventListener("touchend",this.onTouchEnd,Ui)}},om=i=>Math.min(1,1.001-2**(-10*i)),cm=class{constructor({wrapper:i=window,content:A=document.documentElement,eventsTarget:t=i,smoothWheel:e=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:s=1.7,duration:o,easing:a,lerp:l=.1,infinite:c=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:d=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:y=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:_=b,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){IA(this,"_isScrolling",!1);IA(this,"_isStopped",!1);IA(this,"_isLocked",!1);IA(this,"_preventNextNativeScrollEvent",!1);IA(this,"_resetVelocityTimeout",null);IA(this,"_rafId",null);IA(this,"_isDraggingSelection",!1);IA(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));IA(this,"isTouching");IA(this,"isIos");IA(this,"time",0);IA(this,"userData",{});IA(this,"lastVelocity",0);IA(this,"velocity",0);IA(this,"direction",0);IA(this,"options");IA(this,"targetScroll");IA(this,"animatedScroll");IA(this,"animate",new Dx);IA(this,"emitter",new lm);IA(this,"dimensions");IA(this,"virtualScroll");IA(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});IA(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});IA(this,"onTransitionEnd",i=>{var A;(A=i.propertyName)!=null&&A.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});IA(this,"onClick",i=>{let A=i.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),t=new URL(window.location.href);if(this.options.anchors){let e=A.find(n=>t.host===n.host&&t.pathname===n.pathname&&n.hash);if(e){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(e.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&A.some(e=>t.host===e.host&&t.pathname!==e.pathname)){this.reset();return}});IA(this,"onPointerDown",i=>{i.button===1&&this.reset()});IA(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:A,deltaY:t,event:e}=i;if(this.emitter.emit("virtual-scroll",{deltaX:A,deltaY:t,event:e}),e.ctrlKey||e.lenisStopPropagation)return;let n=e.type.includes("touch"),r=e.type.includes("wheel");if(n&&this.isIos&&(e.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(e)),this._isDraggingSelection)){e.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=e.type==="touchstart"||e.type==="touchmove";let s=A===0&&t===0;if(this.options.syncTouch&&n&&e.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}let o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&A===0;if(s||o)return;let a=e.composedPath();a=a.slice(0,a.indexOf(this.rootElement));let l=this.options.prevent,c=Math.abs(A)>=Math.abs(t)?"horizontal":"vertical";if(a.find(d=>{var g,p,m,S,M;return d instanceof HTMLElement&&(typeof l=="function"&&(l==null?void 0:l(d))||((g=d.hasAttribute)==null?void 0:g.call(d,"data-lenis-prevent"))||c==="vertical"&&((p=d.hasAttribute)==null?void 0:p.call(d,"data-lenis-prevent-vertical"))||c==="horizontal"&&((m=d.hasAttribute)==null?void 0:m.call(d,"data-lenis-prevent-horizontal"))||n&&((S=d.hasAttribute)==null?void 0:S.call(d,"data-lenis-prevent-touch"))||r&&((M=d.hasAttribute)==null?void 0:M.call(d,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(d,{deltaX:A,deltaY:t}))}))return;if(this.isStopped||this.isLocked){e.cancelable&&e.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),e.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(A)?t:A:this.options.gestureOrientation==="horizontal"&&(f=A),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(e.lenisStopPropagation=!0),e.cancelable&&e.preventDefault();let h=n&&this.options.syncTouch,u=n&&e.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});IA(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});IA(this,"raf",i=>{let A=i-(this.time||i);this.time=i,this.animate.advance(A*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rm,window.lenis||(window.lenis={}),window.lenis.version=rm,f==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof a!="function"?a=om:typeof a=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:A,eventsTarget:t,smoothWheel:e,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:s,duration:o,easing:a,lerp:l,infinite:c,gestureOrientation:h,orientation:f,touchMultiplier:u,wheelMultiplier:d,autoResize:g,prevent:p,virtualScroll:m,overscroll:S,autoRaf:M,anchors:v,autoToggle:y,allowNestedScroll:E,naiveDimensions:_,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new Nx(i,A,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ux(t,{touchMultiplier:u,wheelMultiplier:d}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,A){return this.emitter.on(i,A)}off(i,A){return this.emitter.off(i,A)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){var l;let A=window.getSelection();if(!A||A.isCollapsed||A.rangeCount===0)return!1;let t=(l=i.targetTouches[0])!=null?l:i.changedTouches[0];if(!t)return!1;let e=A.getRangeAt(0).getClientRects();if(e.length===0)return!1;let n=e[0],r=e[e.length-1],s=40,o=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=s,a=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=s;return o||a}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:A=0,immediate:t=!1,lock:e=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:s=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:a,onComplete:l,force:c=!1,userData:f}={}){if(this.prefersReducedMotion&&(n?t=!0:(r=1,s=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!c)return;let h=i,u=A;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let d=null;if(typeof h=="string"?(d=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),d||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(d=h),d){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?v.left:v.top}let g=d.getBoundingClientRect(),p=getComputedStyle(d),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(M)?0:M)}}if(typeof h=="number"){if(h+=u,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let d=h-this.animatedScroll;d>this.limit/2?h-=this.limit:d<-this.limit/2&&(h+=this.limit)}}else h=am(0,h,this.limit);if(h===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f!=null?f:{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=h),typeof s=="number"&&typeof o!="function"?o=om:typeof o=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,h,{duration:s,easing:o,lerp:r,onStart:()=>{e&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),n&&(this.targetScroll=d),g||this.emit(),g&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:A,deltaY:t}){var E;let e=Date.now();i._lenis||(i._lenis={});let n=i._lenis,r,s,o,a,l,c,f,h,u,d;if(e-((E=n.time)!=null?E:0)>2e3){n.time=Date.now();let b=window.getComputedStyle(i);if(n.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),s=["auto","overlay","scroll"].includes(b.overflowY),l=["auto"].includes(b.overscrollBehaviorX),c=["auto"].includes(b.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=s,!(r||s))return!1;f=i.scrollWidth,h=i.scrollHeight,u=i.clientWidth,d=i.clientHeight,o=f>u,a=h>d,n.isScrollableX=o,n.isScrollableY=a,n.scrollWidth=f,n.scrollHeight=h,n.clientWidth=u,n.clientHeight=d,n.hasOverscrollBehaviorX=l,n.hasOverscrollBehaviorY=c}else o=n.isScrollableX,a=n.isScrollableY,r=n.hasOverflowX,s=n.hasOverflowY,f=n.scrollWidth,h=n.scrollHeight,u=n.clientWidth,d=n.clientHeight,l=n.hasOverscrollBehaviorX,c=n.hasOverscrollBehaviorY;if(!(r&&o||s&&a))return!1;let g=Math.abs(A)>=Math.abs(t)?"horizontal":"vertical",p,m,S,M,v,y;if(g==="horizontal")p=Math.round(i.scrollLeft),m=f-u,S=A,M=r,v=o,y=l;else if(g==="vertical")p=Math.round(i.scrollTop),m=h-d,S=t,M=s,v=a,y=c;else return!1;return!y&&(p>=m||p<=0)?!0:(S>0?p<m:p>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var A,t;let i=this.options.wrapper;return this.isHorizontal?(A=i.scrollX)!=null?A:i.scrollLeft:(t=i.scrollY)!=null?t:i.scrollTop}get scroll(){return this.options.infinite?Ix(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var yn=null;function hm(){return wt?null:(yn=new cm({duration:1.43,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0,syncTouch:!1,touchMultiplier:1.6}),yn.on("scroll",bA.update),UA.ticker.add(i=>{yn.raf(i*1e3)}),UA.ticker.lagSmoothing(200,33),yn)}function um(){yn==null||yn.stop()}function fm(){yn==null||yn.start()}function dm(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",A=>{let t=i.getAttribute("href");if(!t||t==="#")return;let e=document.querySelector(t);e&&(A.preventDefault(),yn?yn.scrollTo(e,{offset:-80,duration:1.2}):e.scrollIntoView({behavior:"smooth",block:"start"}))})})}var gu=.6180339887;function pm(i=document){i.querySelectorAll("[data-stars]").forEach(A=>{if(A.childElementCount)return;let t=parseInt(A.dataset.stars,10)||24,e=document.createDocumentFragment();for(let n=0;n<t;n++){let r=(n+1)*gu%1,s=(n+1)*gu*gu*3%1,o=1+n%3*.6,a=document.createElement("span");a.style.left=(r*100).toFixed(2)+"%",a.style.top=(s*100).toFixed(2)+"%",a.style.width=o+"px",a.style.height=o+"px",a.style.setProperty("--o",(.25+n%5*.15).toFixed(2)),a.style.setProperty("--dur",3+n%4+"s"),a.style.setProperty("--delay",(n%7*.4).toFixed(1)+"s"),e.appendChild(a)}A.appendChild(e)})}var Fx=.1,mm=2.4;function gm(i={}){let{onReveal:A}=i,t=document.getElementById("preloader");if(!t)return A==null||A(),Promise.resolve();let e=t.querySelector(".pre-dot"),n=t.querySelector(".pre-ring"),r=t.querySelector(".pre-mark"),s=t.querySelectorAll(".pre-mark rect"),o=t.querySelector(".pre-word"),a=t.querySelectorAll(".pre-word span"),l=t.querySelector(".preloader__bar i");return wt||new URLSearchParams(location.search).has("noloader")?(UA.set(t,{display:"none"}),document.body.classList.remove("is-loading"),A==null||A(),Promise.resolve()):new Promise(f=>{let h=UA.timeline({defaults:{ease:"power3.out"},onComplete:()=>{t.style.display="none",f()}});UA.set(r,{opacity:0}),UA.set(s,{scaleY:0}),UA.set(a,{opacity:0}),UA.set(t,{clipPath:"inset(0% 0% 0% 0%)"}),h.from(e,{scale:0,duration:.4,ease:"back.out(2.2)"}),h.fromTo(n,{scale:.25,opacity:0},{scale:1,opacity:1,duration:.34},.24).to(n,{scale:1.9,opacity:0,duration:.5},.5),h.to(e,{scale:0,opacity:0,duration:.26,ease:"power2.in"},.7).set(r,{opacity:1},.74).to(s,{scaleY:1,duration:.55,ease:"power4.out",stagger:{each:.042,from:"center"}},.74),h.to(o,{width:"auto",paddingLeft:"0.9rem",duration:.62,ease:"expo.out"},1.2).fromTo(a,{opacity:0,color:"#8a8a8a"},{opacity:1,color:"#ffffff",duration:.2,ease:"power2.out",stagger:Fx},1.28),h.to(l,{scaleX:1,duration:1.8,ease:"power1.inOut"},.15),h.to(t.querySelector(".preloader__bar"),{opacity:0,duration:.2},mm).to(t,{clipPath:"inset(0% 0% 100% 0%)",duration:.42,ease:"power2.in",onStart:()=>{document.body.classList.remove("is-loading"),A==null||A()}},mm)})}function Xa(i){if(!i||i.dataset.split==="done")return Array.from((i==null?void 0:i.querySelectorAll(".word__i"))||[]);let A=Array.from(i.childNodes),t=document.createDocumentFragment();return A.forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE&&e.tagName==="BR"){t.appendChild(e.cloneNode(!0));return}(e.textContent||"").split(/(\s+)/).forEach(r=>{if(!r)return;if(/^\s+$/.test(r)){t.appendChild(document.createTextNode(" "));return}let s=document.createElement("span");s.className="word";let o=document.createElement("span");o.className="word__i",o.textContent=r,s.appendChild(o),t.appendChild(s)})}),i.replaceChildren(t),i.dataset.split="done",Array.from(i.querySelectorAll(".word__i"))}var Ox=[{id:"why",grid:".bento__grid"},{id:"support",grid:".tiers__grid"},{id:"solutions",grid:".products__grid",children:[".product__icon",".product__title",".product__text",".product__link"],scaleIn:".product__icon"},{id:"industries",grid:".industries__grid",nested:".industry__list"},{id:"faq",rows:[".faq__list"]},{id:"portal",rows:[".portal__grid"],sequence:[{sel:".portal__brandmark",at:0,scale:.6},{sel:".portal__card-title",at:.17}]},{id:"contact",glow:".edge-glow--bottom"}],zx="#hero",_m=(i,A=document)=>Array.from(A.querySelectorAll(i)).filter(t=>!t.closest(zx));function xu(i,{stagger:A=Kp,at:t=0}={}){let e=UA.timeline();return e.fromTo(i,{y:20,filter:"blur(7px)"},{y:0,filter:"blur(0px)",duration:uo,ease:Bi,stagger:A},t).fromTo(i,{opacity:0},{opacity:1,duration:ss,ease:En,stagger:A},t),e}function _u(i,A,t,e=0){return i.fromTo(A,{y:$p},{y:0,duration:uo,ease:Bi,stagger:t},e).fromTo(A,{opacity:0},{opacity:1,duration:ss,ease:En,stagger:t},e),i}function Fi(i,A,t=im){bA.create({trigger:i,start:t,once:!0,onEnter:A})}function xm(){if(wt){UA.set("[data-reveal], [data-split]",{opacity:1,y:0,filter:"none"});return}let i=new Set;_m("[data-split]").forEach(A=>{let t=Xa(A);UA.set(A,{opacity:1}),Fi(A,()=>xu(t))}),Ox.forEach(A=>{let t=document.getElementById(A.id);if(t){if(A.grid){let e=t.querySelector(A.grid),n=e?Array.from(e.querySelectorAll("[data-reveal]")):[];n.length&&(n.forEach(r=>i.add(r)),Fi(e,()=>_u(UA.timeline(),n,{each:jp,grid:"auto",from:"start"}))),A.children&&n.length&&n.forEach(r=>{let s=A.children.map(o=>r.querySelector(o)).filter(Boolean);s.length&&Fi(r,()=>{let o=UA.timeline();o.fromTo(s,{opacity:0,y:8},{opacity:1,y:0,duration:.7,ease:En,stagger:em},.1);let a=A.scaleIn&&r.querySelector(A.scaleIn);a&&o.fromTo(a,{scale:nm},{scale:1,duration:.45,ease:Bi},.1)})}),A.nested&&n.length&&n.forEach(r=>{let s=r.querySelector(A.nested),o=s?Array.from(s.children):[];o.length&&Fi(r,()=>{UA.timeline().fromTo(o,{opacity:0,y:10},{opacity:1,y:0,duration:.7,ease:En,stagger:tm},.2)})})}if((A.rows||[]).forEach(e=>{let n=t.querySelector(e),r=n?Array.from(n.children):[];r.length&&(r.forEach(s=>i.add(s)),Fi(n,()=>_u(UA.timeline(),r,Am)))}),A.sequence){let e=A.sequence.map(n=>({...n,el:t.querySelector(n.sel)})).filter(n=>n.el);e.length&&Fi(e[0].el.closest("[data-reveal]")||t,()=>{let n=UA.timeline();e.forEach(r=>{n.fromTo(r.el,{opacity:0,...r.scale?{scale:r.scale}:{}},{opacity:1,...r.scale?{scale:1}:{},duration:.5,ease:Bi},r.at)})})}if(A.glow){let e=t.querySelector(A.glow);e&&Fi(t,()=>UA.fromTo(e,{opacity:.18},{opacity:1,duration:.85,ease:"power2.inOut"}))}}}),_m("[data-reveal]").forEach(A=>{i.has(A)||Fi(A,()=>_u(UA.timeline(),[A],0))}),bA.refresh()}function vm(){let i=document.getElementById("hero");if(!i)return;let A=i.querySelector(".badge"),t=i.querySelector(".hero__title"),e=i.querySelector(".hero__lead"),n=i.querySelector(".hero__actions"),r=i.querySelector(".circuit"),s=i.querySelector(".beam"),o=i.querySelector(".grid-bg"),a=document.querySelectorAll("#nav .nav__item, #nav .nav__actions > *"),l=t?Xa(t):[];if(wt){UA.set([A,t,e,n,r],{opacity:1,y:0,filter:"none"}),UA.set(l,{opacity:1,y:0,filter:"none"});return}[A,e,n].forEach(f=>f&&f.removeAttribute("data-reveal")),t==null||t.removeAttribute("data-split"),UA.set(t,{opacity:1});let c=UA.timeline();return c.fromTo(s,{opacity:.35},{opacity:1,duration:.7,ease:"power2.out"},0),c.fromTo(o,{opacity:0},{opacity:1,duration:1.6,ease:En},.1),a.length&&c.fromTo(a,{opacity:0,y:8},{opacity:1,y:0,duration:.5,ease:Bi,stagger:.083},.21),c.fromTo(A,{y:14,opacity:0},{y:0,opacity:1,duration:uo,ease:Bi},.25),c.add(xu(l,{stagger:Qp}),.42),c.fromTo(e,{y:18,opacity:0},{y:0,opacity:1,duration:ss,ease:En},1.1),c.fromTo(n,{y:16,opacity:0},{y:0,opacity:1,duration:ss,ease:En},1.35),c.fromTo(r,{y:40,opacity:0},{y:0,opacity:1,duration:1.4,ease:En},1.35),c}var vu=78,Hx=330;function ym(){let i=document.getElementById("circuit"),A=document.getElementById("circuitPulses");if(!i||!A)return;let t=i.querySelectorAll(".circuit__trace");if(!t.length)return;let e=document.createElementNS("http://www.w3.org/2000/svg","g"),[n,r]=[1440,380],s=4;if(t.forEach(l=>{let c=l.getPointAtLength(l.getTotalLength());if(c.x<=s||c.x>=n-s||c.y<=s||c.y>=r-s)return;let h=document.createElementNS("http://www.w3.org/2000/svg","circle");h.setAttribute("cx",c.x),h.setAttribute("cy",c.y),h.setAttribute("r","3"),h.setAttribute("class","circuit__pad"),e.appendChild(h)}),A.parentNode.insertBefore(e,A),wt)return;let o=[];t.forEach((l,c)=>{let f=l.getTotalLength(),h=l.cloneNode(!1);h.setAttribute("class","circuit__pulse circuit__pulse--halo");let u=l.cloneNode(!1);u.setAttribute("class","circuit__pulse");let d=[h,u];d.forEach(m=>{m.style.strokeDasharray=`${vu} ${f}`,m.style.strokeDashoffset=vu,A.appendChild(m)});let g=f/Hx,p=UA.timeline({repeat:-1,repeatDelay:1.1+c%3*.45,delay:c*.34});p.fromTo(d,{strokeDashoffset:vu},{strokeDashoffset:-f,duration:g,ease:"none"}),o.push(p)}),bA.create({trigger:i,start:"top bottom",end:"bottom top",onToggle:l=>o.forEach(c=>l.isActive?c.play():c.pause())});let a=i.querySelector(".circuit__chip");a&&UA.to(a,{"--chip-glow":1,duration:2.4,repeat:-1,yoyo:!0,ease:"sine.inOut"})}var yu=.6180339887,Sm=6,Mm=.46,qa=.46,bm=.42;function wm(){let i=document.querySelectorAll("[data-embers]");i.length&&i.forEach(A=>{let t=document.createElement("div");t.className="embers",t.setAttribute("aria-hidden","true");let e=[];for(let s=0;s<Sm;s++){let o=document.createElement("span");o.className="ember",o.style.left=((s+1)*yu%1*86+7).toFixed(2)+"%",o.style.setProperty("--h",(13+s%3*4).toFixed(0)+"%");let a=74+(s+1)*yu*yu*3%1*14;o.style.top=a.toFixed(2)+"%",e.push({el:o}),t.appendChild(o)}if(A.appendChild(t),wt)return;let n=A.offsetHeight*Mm,r=UA.timeline({repeat:-1,paused:!0});e.forEach((s,o)=>{let a=o*bm;r.fromTo(s.el,{y:0,scaleY:.55,opacity:0},{y:()=>-n,scaleY:1.35,duration:qa,ease:"power1.out"},a).to(s.el,{opacity:.95,duration:qa*.3,ease:"power2.out"},a).to(s.el,{opacity:0,duration:qa*.55,ease:"power2.in"},a+qa*.45)}),r.set({},{},Sm*bm),bA.addEventListener("refresh",()=>{n=A.offsetHeight*Mm}),bA.create({trigger:A,start:"top bottom",end:"bottom top",onToggle:s=>s.isActive?r.play():r.pause(),onRefresh:s=>s.isActive?r.play():r.pause()})})}var Su=90,kx=240;function Vx(i){let A=i.querySelector(".art-traces");if(!A)return null;let t=Array.from(A.querySelectorAll("path"));if(!t.length)return null;let e=UA.timeline({repeat:-1,paused:!0});return t.forEach((n,r)=>{let s=n.getTotalLength(),o=n.cloneNode(!1);o.setAttribute("class","art-traces__pulse art-traces__pulse--halo");let a=n.cloneNode(!1);a.setAttribute("class","art-traces__pulse"),[o,a].forEach(l=>{l.style.strokeDasharray=`${Su} ${s}`,l.style.strokeDashoffset=String(Su),A.appendChild(l)}),e.fromTo([o,a],{strokeDashoffset:Su},{strokeDashoffset:-s,duration:s/kx,ease:"none"},r*.55)}),e.set({},{},t.length*.55+1.2),e}function Gx(i){let A=Array.from(i.querySelectorAll("[data-len]"));if(!A.length)return null;let t=A[0].getTotalLength();if(!t)return null;A.forEach(n=>{let r=Number(n.dataset.len);n.style.strokeDasharray=`${r} ${t-r}`,n.style.strokeDashoffset=String(r)});let e={p:0};return UA.to(e,{p:t,duration:Number(i.dataset.dur)||12,ease:"none",repeat:-1,paused:!0,onUpdate(){for(let n of A)n.style.strokeDashoffset=String(Number(n.dataset.len)-e.p)}})}function Wx(i){let A=i.querySelector(".art-guard");if(!A)return[];let t=Array.from(A.querySelectorAll("[data-orbit]")).map(Gx).filter(Boolean),e=A.querySelector(".art-guard__rings");e&&t.push(UA.fromTo(e,{transformOrigin:"50% 50%",scale:1},{scale:1.012,duration:4.5,ease:"sine.inOut",yoyo:!0,repeat:-1,paused:!0}));let n=A.querySelector(".art-guard__bolt");return n&&t.push(UA.fromTo(n,{opacity:.86},{opacity:1,duration:3.1,ease:"sine.inOut",yoyo:!0,repeat:-1,paused:!0})),t}function Tm(){let i=document.getElementById("why");if(!i)return;if(wt){i.classList.add("is-static");return}let A=[Vx(i),...Wx(i)].filter(Boolean);A.length&&bA.create({trigger:i,start:"top bottom",end:"bottom top",onToggle:t=>A.forEach(e=>t.isActive?e.play():e.pause()),onRefresh:t=>A.forEach(e=>t.isActive?e.play():e.pause())})}var Xx=.85,qx=80;function Em(){let i=document.getElementById("hero"),A=(i==null?void 0:i.offsetHeight)||0;return A?A*Xx:qx}function Cm(){let i=document.getElementById("nav"),A=document.getElementById("burger"),t=document.getElementById("navSheet");if(!i)return;let e=!1,n=l=>{l!==e&&(e=l,i.classList.toggle("is-pill",l),document.documentElement.classList.toggle("is-nav-pill",l))},r=!1,s=Em(),o=()=>{r=!1,n(window.scrollY>s)},a=()=>{r||(r=!0,requestAnimationFrame(o))};if(window.addEventListener("scroll",a,{passive:!0}),bA.addEventListener("refresh",()=>{s=Em(),o()}),o(),A&&t){let l=()=>{i.classList.remove("is-open"),t.classList.remove("is-open"),A.setAttribute("aria-expanded","false"),document.body.style.overflow=""};A.addEventListener("click",()=>{let c=!t.classList.contains("is-open");i.classList.toggle("is-open",c),t.classList.toggle("is-open",c),A.setAttribute("aria-expanded",String(c)),document.body.style.overflow=c?"hidden":""}),t.querySelectorAll("a").forEach(c=>c.addEventListener("click",l)),window.addEventListener("keydown",c=>{c.key==="Escape"&&l()})}}var Yx=[{label:"Structured Cabling",bg:"#e8f4fb",fg:"#0b6ea3",icon:"cable"},{label:"IT Infrastructure",bg:"#eef1fb",fg:"#3d51a8",icon:"server"},{label:"Video Surveillance",bg:"#fdf0ec",fg:"#b2542f",icon:"camera"},{label:"Unified Communication",bg:"#eefaf3",fg:"#2f7d54",icon:"phone"},{label:"Public Address",bg:"#fdf6e6",fg:"#a67c1e",icon:"speaker"},{label:"Access Control",bg:"#f4eefb",fg:"#7040a3",icon:"lock"},{label:"Time Attendance",bg:"#eaf6f8",fg:"#25798a",icon:"clock"},{label:"Network & Wi-Fi",bg:"#e8f4fb",fg:"#0b6ea3",icon:"wifi"},{label:"Server & Storage",bg:"#eef1fb",fg:"#3d51a8",icon:"server"},{label:"Firewall & Security",bg:"#fdeeee",fg:"#a83f3f",icon:"shield"},{label:"IT Support & AMC",bg:"#eefaf3",fg:"#2f7d54",icon:"support"},{label:"CCTV Systems",bg:"#fdf0ec",fg:"#b2542f",icon:"camera"}],Zx={cable:'<path d="M4 3v18M9 3v18M14 3v18M19 3v18"/>',server:'<rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/>',camera:'<path d="M3 7.5 15 4v13L3 13.5z"/><circle cx="19" cy="10.5" r="2.4"/>',phone:'<path d="M4.5 5.5c0 8 6 14 14 14l2-3.4-4.2-2.2-2 2a14.6 14.6 0 0 1-6.2-6.2l2-2L7.9 3.5 4.5 5.5Z"/>',speaker:'<path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4Z"/><path d="M16.5 9a4.5 4.5 0 0 1 0 6"/>',lock:'<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.4 2"/>',wifi:'<path d="M2.5 8.5a15 15 0 0 1 19 0M6 12.5a10 10 0 0 1 12 0M9.5 16.5a5 5 0 0 1 5 0"/><circle cx="12" cy="20" r="1.1" fill="currentColor" stroke="none"/>',shield:'<path d="M12 2.5 20 6v6c0 5-3.4 8.6-8 10.5C7.4 20.6 4 17 4 12V6l8-3.5Z"/>',support:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.2"/><path d="M6 6l3.6 3.6M18 6l-3.6 3.6M6 18l3.6-3.6M18 18l-3.6-3.6"/>'};function Jx({label:i,bg:A,fg:t,icon:e}){return`<span class="chip">
    <span class="chip__icon" style="--chip-bg:${A};--chip-fg:${t}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round">${Zx[e]||""}</svg>
    </span>${i}</span>`}function $x(i,A){return i.slice(A).concat(i.slice(0,A))}function Pm(){let i=document.getElementById("capabilityMarquee");if(!i)return;let A=i.querySelectorAll(".marquee__track"),t=[];if(A.forEach((n,r)=>{let o=$x(Yx,r*4).map(Jx).join("");n.innerHTML=o;let a=()=>{let c=n.parentElement.offsetWidth;n.innerHTML=o;let f=n.scrollWidth,h=1;for(;h<2||f*h<c*2;)n.insertAdjacentHTML("beforeend",o),h++;let u=n.scrollWidth/h,d=parseFloat(n.dataset.speed)||38,g=parseFloat(n.dataset.dir)||-1;return UA.fromTo(n,{x:g<0?0:-u},{x:g<0?-u:0,duration:u/d,ease:"none",repeat:-1})},l=wt?null:a();t.push({track:n,rebuild:()=>{l==null||l.kill(),l=a()},get tween(){return l}})}),wt)return;bA.create({trigger:i,start:"top bottom",end:"bottom top",onToggle:n=>t.forEach(r=>{var s,o;return n.isActive?(s=r.tween)==null?void 0:s.play():(o=r.tween)==null?void 0:o.pause()})});let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>t.forEach(n=>n.rebuild()),240)})}function Rm(){let i=document.getElementById("faqList");if(!i)return;let A=Array.from(i.querySelectorAll(".faq__item")),t=wt?0:.55,e=s=>s.querySelector(".faq__a");A.forEach(s=>{let o=e(s);UA.set(o,{height:s.classList.contains("is-open")?"auto":0})});let n=s=>{s.classList.contains("is-open")&&(s.classList.remove("is-open"),s.querySelector(".faq__q").setAttribute("aria-expanded","false"),UA.to(e(s),{height:0,duration:t,ease:"power2.inOut",onComplete:()=>bA.refresh()}))},r=s=>{s.classList.add("is-open"),s.querySelector(".faq__q").setAttribute("aria-expanded","true"),UA.to(e(s),{height:"auto",duration:t,ease:"power2.out",onComplete:()=>bA.refresh()})};A.forEach(s=>{s.querySelector(".faq__q").addEventListener("click",()=>{let o=s.classList.contains("is-open");A.forEach(n),o||r(s)})})}var Kx={amc:{suffix:"/ AMC",labels:["Single site \xB7 business hours","Multi-site \xB7 extended cover","Regional estate \xB7 24/7"]},project:{suffix:"/ project",labels:["Single site \xB7 fixed scope","Multi-site \xB7 phased rollout","Regional estate \xB7 programme"]}};function Im(){let i=document.getElementById("tierToggle");if(!i)return;let A=Array.from(i.querySelectorAll("button")),t=Array.from(document.querySelectorAll(".tier")),e=n=>{let r=Kx[n];r&&t.forEach((s,o)=>{let a=s.querySelector(".tier__label"),l=s.querySelector(".tier__suffix");if(wt){a&&(a.textContent=r.labels[o]),l&&(l.textContent=r.suffix);return}UA.timeline({delay:o*.05}).to([a,l],{opacity:0,y:-6,duration:.18,ease:"power2.in"}).add(()=>{a&&(a.textContent=r.labels[o]),l&&(l.textContent=r.suffix)}).fromTo([a,l],{opacity:0,y:6},{opacity:1,y:0,duration:.32,ease:"power2.out"})})};A.forEach((n,r)=>{n.addEventListener("click",()=>{A.forEach(s=>s.classList.toggle("is-active",s===n)),i.classList.toggle("is-b",r===1),e(n.dataset.mode)})})}var Qx="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/n8///8AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/n+//+PYAAAAAAAAAB/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP/////////gAAAAeA/P/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQP+5////////8Af/94f+B//////+AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////9gD+f///////////////n8AA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////9////j4AP/3////////////////D///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4EAx//z/////wC///////////////////n///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgeHgHAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ/8Az/Hw/////gH///////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAPk/gA8B/gAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///OAA//////AH///////////////////////8AAAAAAAAAAAAAAAAjgxAAAAAAAAAAH4AMB3gAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgf///8/+f////wAAP////////////////////4cAAAAAAAAAAAAAAACB///+AAAAAAAAAADwAAAwAAAAAAAAAAAAAAfB/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///2P/j///AAAB/////////////////////4AAAAAAAAAAAAAB8Ofg///AAAAAAAAAAAAAAAAAAAAAAADAAAAAAAA///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAAH///P///wAAAAP/////////////////////wAAAAAAAAAAAAAG/8/gAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3gAAP//uADf//AAAP//////////////////////4AAAAAAAAAAAAAAF///+AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/x/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAD/4fAA//P/////gH///////////////////////8AAAAAAAAAAAAAABH53/DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEfg/gB4x3P///4B////////////////////////gQAAAAAAAAAAAAAAAD/wfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHv4AAAGPAwAAAGH9//AAAf//////////////////////8wAAAAAAAAAAAAAAAH+8Af4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/wAGAAAAfwHA/If/8AAADAf/////////////////////AAAAAAAAAAAAAAAAP/wHnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAGAAAAAAAA///sAAAD////////////////////////8AAAAAAAAAAAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//DgAAAAAAAP8AX/////AAAF///////////////////////AwAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAB//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zg4AHgAeB9wf/wH998PwAAAB//////////////////////wCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/gAAAAAAAAAAAAAH9////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfYA//AHAB89/gAPwAAAABAAAAB4AAH//////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//gAAAAAAAAAAABeB7/////+gAAAAAAAAAABwIAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHD//gf/AH/8AQP8AAb4AAAAAAAAAA//////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAAAAAAAAAAAB/////////3AAAAAAAAAAAf5/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////4QA/yfh//+///AAAAAAAAAA//////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAMAAB///////////4AAAAAAAAABj//PwnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAH9/DAB+H/D/////wAAAAAAAAAB////////////////+gPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAD////////////AAAAAAAAAAAH//kA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAA8H8//7/AAAAAAAAAAA/////////////////cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAADf///////////AAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAAAAAAG//////////+HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AAAAAAAAHAP7gAAAAAAAAAAAAAAAB///////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAH//////////EgAAAAAAAAAACABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///gAAAPwAf/D//AP8HzzAAAAAAAAAAH//////////////7/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAD//P/////////gP+HwAAHwAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YAAEPABfwP/wH+P/v/wAAAAAAAAAH/////////////b4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAAAB8AAAB//3/////////A////+AAf/4AAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//5/zBg/oDj/o/+A/xf/v/gAAAAAAAAAP/////////////z+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAQAEADD///////////7///f//9n//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4/9/jx/AH//x8AH/H/+B+AAAAAAAAAA//////////////34AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAD/4GDAP//////////////////////gAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/+D////n+AB/+HgA/8H/zt/gAAAAAAAAP//////////////xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAP/gIH4D/////////////////////3AAAAD//P/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//w/////H8AB/4YAD/7/////gAAAAAAAA///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8AAAAAB/8PPP+D/////////////////////0AAAAH//z/4AAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAP+A//////4AB4H8AP/5////7vAAAAAAAD6f///////////h/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAAf/j+P//z/////////////////////gDgc2P////gAAAAAAAAAAAAAAH/////////h///////////////n//AAAAAAf///AD//A4AAAAAB////////qAAAAAAAAAAAAHAP//////////////////////////////////9gP////wAA4A+ADgAAAAAAAAAAAAAAAAAAAAAfgAAAAAAAAD////////////4AAAAAAAAACf3vgAAAAAAAAAAAAAAAP//////AAAH/wA///////++AAAAAAAAA///////////fx/AAAAAAgAAAAAAAAAAAAAAB5OgAAAAAAAAAAD/4AAAA//+H///0//////////////////////z/////////9//+IAAAAAAAAAAAAAAAAAA////FwAAAAAAAAAYAAAAAAD////wAAP/wA////z///v8AAAAAAP5//////////zEB+AAAAAAAAAAAAAAAAAAAAAvd34AAAAAAAAAAAAAAAAB//4f///z///////////////////////////////////+AAAAAAAAAAAAAAAAAD///////4AAAAAAAB4EAAAP//////8AA/+AAB///x///7MAAAAAD5///////////9/4AAAAAAAAAAAAAAAAAAACp/7//AAAAAAAAAAAAAHAAAH//D////////////////////////////////////////4AAAAAAAAAAAAAAAAAf/////////gAAAB5vww8AB//////+oBh/4AAB4BUB////4AAAAAP8n////////////wAAAAAAAAAAAAAAAAAAAR////xOAAAAAAAAAAAAHYAA//+f////////////////////////////////////////gAAA8f//AAAAAAAAAD///////////gB50//zH/AB//////sAPiD/AAH+AAJ////gAAAAAPh////////////4AAAAAAAAAAAAAAAAAAAZ7/////8AAAAAAA4AAAAD/8AP/w/////////////////////////////////////////7//+A///8AAAAAAAA////////////wP9//////8AB//+B/wH/g/8cAH/AQD///4AAAAAAAH///////////8AAAAAAAAAAAAAAAAAAAi///////3+AAAAAHwAAAAH/+A//AA////////////////////////////////////////v///D///+H/////4AAAAAAAAAAAAAAAAAAAAAAAA4AD4P+d+A/AGD+AB//fAAA////////gAAAAAAAAAAB///////////////////hYAAAAAAAAAf//////x/8HAAAfAA8BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAA//4E///8/wAQPwB////AAAf/////8AAAAAAAAACAP///////////////////+GgAAAAAAAAAf/+B//yPAAQAAAIABwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAA///4AD/+AQAAB6AD//gjAAAf/////wAAAAAAAAAH//////////////////////AAAAAAAAAAAD/8B/wAAAAAAAAAAPgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////4AAAAAAAAAAAAAAAAAAAAAAAAADgAAAAjAAAHwAD/8D/AAAB////+DgAAAAAAAD//////////////////////wAAAAAAAAAAAB/h/wAAAAAAAAAAB8AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAOAAAGAAH/4f8AAAO////4AAAAAAAAAf/////////////////////+AAAAAAAAAAAAH+P8AAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi/////AAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAoAAAAMB////gAAADv///gAAAAAAAAD//////////////////////wAAAAAAAAwAAAf8PwAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAf///8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEf///4AAEABv///AAAAAAAAA//////////////////////8AAAAAAAAA8AAD/wAAAAAAAAAAAU+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAP/wP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcr///+AAB4AP///4AAAAAAAQv/////3//m/////////////kAAAAAAAAA/4A+DAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOgB2////4AAP8A////4AAAAAAAH/////4HIAD////////////4AAAAAAAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMIAEf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwY/////4AAP4P////wAAAAAH9/////+AQAAB////////////gAAAB/wAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf//wgAAAfw/////gAAAAAf///////wAAAH///////////+AAAAf/AAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAB//v//////////////////////////////////x/wAD/////4AAAAAA/////4AAAAAAAP////gAAAAAAAAAAB////8AH////g8B////////////////////////////////////////////////////////////////t+AAB8AABhR//////////////////////////////////8P/4AP7X///wAAAAAC7////wAAAAAAAA///4AAAAAAAAAAAH////4B////+B//////////////////////////////////////////////////////////////////4AAAAAAAAAD/////////////////////////////////3gf/wAAAP///AAAAAAG////4AAAAAAAAD//4AAAAAAAAAAAB/////Af/////g//////////////////////////////////////////////////////////////////8AAAAAAAAAH///////////////////////////////9fAP/D8AAAH///AAAAAAf////4AAAAAAAAB/4AAAAAAAAAAAAe////4H/////////////////////////////////////////////////////////////////////////wAAAB+AAAL/////////////////////////////////gADwAAZAAP+P6AAAAAA////+AAAAAAAAAAcAAAAAAAAAAAAPf///4A//////////////////////////////////////////////////////////////////////////AAAAAEAA7//////////////////////////////////AAAAAAAAAf+HgAAAAAB////QAAAAAAAAAAAAAAAAAAAAAAD////+Af//////////////////////////////////////////////////////////////////////////AAAAAAAH/////////////////////////////////+AAAA+AAAAAj+CAAAAAAB///+AAAAAAAAAAAAAAAAAAAAAAB3////gD/////////////////////////////////////////////////////////////////////////7+AAAAAAA//////////////////////////////////wAAAHgEPgIAD+AAAAAAAH///wAAAAAAAAAAAAAAAAAAAAAAH////4AP//////////////////////////////////////////////////////////////////8P/////AwAAAAAAH/////////////////////////////////+AAAAAAw//4AAcAAAAAAAF///AAAAAAAAAAAAAAAAGAAAAAH/////wAf//////////////////////////////////////////////////////////////////x/////AAAAAAAAA//////////////////////////////////wAAAAADB//4AAAAAAAAAAP//4AAAAAAAAAAAAAAAAAAAAAA//////AB////////////////////////////////////////////////////////////////gD/P////gAAAAAAAAD/////////////////////////////////+AAAAAAAH//wAAAAAAAAAAf//gAAAAAAAAAAAAAAAAAAAAAD/////4AH///////////////////////////////////////////////////////////////8AfA////wAAAAAAAAAD//////g9n////////////////////////wAAAAAAA///8AAAAAAAAAAPf+AAAAAAAAAAAAAAAAAAAAAAP/////gAf///////////////////////////////////////////////////////////////AAwH///8AAAAAAAAAAPf////5/wD///////////////////////+AAAAAAAB///8AAAAAAAAAAB/wAAAAAAAAAAAAAAAAAAAAAAf////+AB///////////////////////////////////////////////////////////////4AAB///+AAAAAAAAAAOPv////H/UD///////////////////////4AAAAAAAH///wAEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAGAABv/////gB/4A///////////////////////////////////////////////////////////8AAAf+YBgAAAAAAAAAB4ef///8/ggAA+/////////////////////AAAAAAAAP//+AAYAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAF//////AAAABv//////////////////////////////////////////////////////////gAAH4QAAAAAAAAAAAAAAA///+A4AAAAH////////////////////8AAAAAAAB///8ADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////4AABA/////////////////////////////////////////////////////////w/+AAB/AAAAAAAAAAAAAAAAH///wIAAAAAH////////////////////wAAAAAAAP///4AfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAABf/3///AAH////////////////////////////////////////////////////////AEAAH+AAf8AAAAAAAAAAAAAAAAOd7/wAAAAAADK///////////////////gAAAAAAB///+YB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAD/4P//wACf///////////////////////////////////////////////////////wAAADAAAD/jAAAAAAAAAAAAAAAAAQ/8IAAAAAAHv///////////////////4AAAAAAH////w/8AAAAAAAAAAAAAAAAAAAAAAAAAAALgAAAP+A//8AAd///////////////////////////////////////////////////////8AAAAAAAAf4AAAAAAAAAAAAAAAAAAB/jgAAAAAABJ///////////////////wAAAAAAD////v/4AAAAAAAAAAAAAAAAAAAAAAAAAAx8AAAAHgB//wAAA///////////////////////////////////////////////////////AAAAAAAAH/gAAAAAAAAAAAAAAAAAAPwoAAAAAAAPT///////////////////AAAAAAAH//////8AAAAAAAAAAAAAAAAAAAAAAAAACPgAAAAAAH/+BAAH//////////////////////////////////////////////////////8AAAAAAAD/+wAAAAAAAAAAAAAAAAAB8NoAAAAAAARv//////////////////+AAAAAAAP//////oAAAAAAAAAAAAAAAAAAAAAAAAAG/+AAAAAMP/4IA4f/////////////////////////////////////////////////////+AAAAAAAAf//AAAAAAAAAAAAAAAAAAfgqAAAAAAAAcf//////////////////54AAAAAA///////gAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAHwf/gAHx//////////////////////////////////////////////////////gAAAAAAAD//4AAAAAAAAAAAAAAAAAHwAAAAAAAAAArf////////////////////AAAAAD//////2AAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAuA//AA///////////////////////////////////////////////////////8AAAAAAAA///gAAAAAAAAAAAAAAAAB4AAAAAAAAAACj/////////////////////AAABgP//////wAAAAAAAAAAAAAAAAAAAAAAAAADfgAAAAH+D/wAD///////////////////////////////////////////////////////gAAAAAAAH//9AAAAAAAAAAAAAAAAAfgAAAAAAAAAAA1////////////////////+AAAEA///////4AAAAAAAAAAAAAAAAAAAAAAAAAH+AAAAAfg/wAAP//////////////////////////////////////////////////////4AAAAAAAAf//kAAAAAAAAAAAAAAAAfgAAAAAAAAAAADq/////////////////////gAAAH///////wAAAAAAAAAAAAAAAAAAAAAAAAAr/gAAAB8bcAAA//////////////////////////////////////////////////////+AAAAAAAAB//8AAAAAAAAAAAAAAAAHAAAAAAAAAAAAADb/////////////////////gAAB////////AAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAABu5AAAD//////////////////////////////////////////////////////gAAAAAAAAP//wAAAAAAAAAAAAAAACgKAAAAAAAAAAAAW///////////////////////wAf////////QAAAAAAAAAAAAAAAAAAAAAAAN4/8AAAAGBAAAAv/////////////////////////////////////////////////////4WAAAAAAAAf//gAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAf//////////////////////Af/////////8AAAAAAAAAAAAAAAAAAAAAAB/gP4AAAAeIAAeH//////////////////////////////////////////////////////wAAAAAAAAB//+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////////8A//////////gAAAAAAAAAAAAAAAAAAAAAAD/E/4AAAB+GAP////////////////////////////////////////////////////////4IAAAAAAAH/8AAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAeP//////////////////////wB/////////3gAAAAAAAAAAAAAAAAAAAAAH/wA/gAAAH9+f/////////////////////////////////////////////////////////seAgAAAAAf/gAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA4M//////////////////////AH////////x8wAAAAAAAAAAAAAAAAAAAAAP/AH/AAAO/////////////////////////////////////////////////////////////L8GAAAAAA/+AAAAAAAAAAAAAADAAAAAAAAAAAAAAAABAr/////////////////////8Af//////////gAAAAAAAAAAAAAAAAAAAAAf+F/+AAP///////////////////////////////////////////////////////////////94AAAAAD/4AAAAAAAAAAAAAAQAAAAAAAAAAAAAAAACAX/////////////////////zA//////////+AAAAAAAAAAAAAAAAAAAAAB/4f/3AH////////////////////////////////////////////////////////////////jwAAAAAP4AAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAEAf/////////////////////wD//////////wAAAAAAAAAAAAAAAAAAAAAH/A//+Af////////////////////////////////////////////////////////////////fAAAAAAfgAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAIBf/////////////////////AH//////////wAAAAAAAAAAAAAAAAAAAAB/8D//4D////////////////////////////////////////////////////////////////94AAAAAB+AAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAD//////////////////////A//////////8AAAAAAAAAAAAAAAAAAAAAFwB///Af////////////////////////////////////////////////////////////////3gAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////////+L//////////IAAAAAAAAAAAAAAAAAAAAAMAAb/gC////////////////////////////////////////////////////////////////+PAAAAAAcAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////////////////+DgAAAAAAAAAAAAAAAAAAAAAAAD//w/////////////////////////////////////////////////////////////////w8AAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP///////////////////////////////wOAAAAAAAAAAAAAAAAAAAAAAAAf9of/////////////////////////////////////////////////////////////////D4AAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj//////////////////////////////8BwAAAAAAAAAAAAAAAAAAAAAAADwAD/////////////////////////////////////////////////////////////////8PgAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////AAAAOAAAAAAAAAAAAAAAAAAAAAAAAQAAP/////////////////////////////////////////////////////////////////w+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfz//////////////////////////4B4AB2AAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////////////////////////////////////////////////////////D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfH//////////////////////////gB4AP+4AAAAAAAAAAAAAAAAAAAAAAAAY//////////////////////////////////////////////////////////////////8PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/H/////////////////////////g/gAA//gAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////////////////////////////////g4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAev////////////////////////4f+AAH/+AAAAAAAAAAAAAAAAAAAAAAAPD//////////////////////////////////////////////////////////////////+DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI/////////////////////////P/wAAf/8AAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////////////5/wgAH//oAAAAAAAAAAAAAAAAAAAAAAH///////////////////////////////////////////////////////////////////+AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPf//////////////////////////8AAY9ZgAAAAAAAAAAAAAAAAAAAAAAB///////////////////////////////////////////////////////////////////wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd////////////////////////7//gAAABHAAAAAAAAAAAAAAAAAAAAAAABf/////////////////////////////////////////////////////////////////+AOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////f/+QBAAYsAAAAAAAAAAAAAAAAAAAAAAAD//////////////////wf////8Z////////////////////////////////////////wA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////B/wf/////AH////////////////////////////////////////AGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////////////////5Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////4/4Af////wAf///////////////////////////////////////4AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////////////+////4EgAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////AHgD////8AB////////////////////////////////////////AAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////////////////7/4AAAAAAAAAAAAAAAAAAAAAAAAAAAA//////h///////wB/Af///+AAP///////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////////////9///4L+AAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////+H///////AB//////4AP///////////////////////////////////////+ABYAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////////////+D/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////4D//////0ADwP////AB////////////////////////////////////////wABwAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////////////////g+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gP//////AAIAP///4Af///////////////////////////////////////+AAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////////////wDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////D/A//////4AAAAH///4Af///////////////////////////////////////wAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////wAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gH+Af/////gAAAAP///gB///////////////////////////////////////+AAD/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/uH//n4AP+AP////8AAAAAP//+AD///////////////////////////////////////wAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////4AAA/4Af////gAAAAAP//4AH/////////////////////////////////////z8AAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////gAAh/wAf///+AAAAAAP//wAD////////////////////////////////////+AAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////+AAOB/gAf///4AAAAAA///gAP////////////////////////////////////wAAACBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////4AAYD/gA////wAAEAAB///ABn///////////////////////////////////8AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////AABgH/gA////AA/+AAP//+AEP///////////////////////////////////gAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAH/gH////Af/6AB///8AAf//////////////////////////////////+AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////////OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAYAD/gf/+/B////v////wAA///////////////////////////////9///4AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////AAAHwAD/h//AIP/////////gD////////////////////////////////D///AAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AAAOAAPxH/MA//////////+AP///////////////////////////////4f//wAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AIAA8AAGAH+BP//////////4Av//////////////////////////////8D+/8AAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///4AwADgAAcA/4A3//////////AB///////////////////////////////geA/gAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////gAAAOAAA4A/gC//////////8AB//////////////////////////////sAgB8AAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////AAAAAAACAB+gB//////////gAH/////////////////////////////+AEAP8AAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////3gAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAH///4AAAAAAAYAD/gf/////////+AAf/////////////////////////////4AAA/4AAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///AAAAAAENAAnNA//////////4AB//////////////////////////////wAAH/wAAABHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////+AAAAAAAAAAAAAAAAAAAAAAABAAAAAAAB///8AAAAAB/gAA/AB//////////gAH//////////////////////////////4QAB/gAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///AAAAAAA+AAA6QH//////////wAf//////////////////////////////H8AD/AAACP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsf/4AAACHgA4AAHgIP//////////gA////////////////////////////////wAH8AAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/IAAP7//gAgAABAAn4/3f//////g////////////////////////////////4AB/wAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAA////8AAAAAAAAHg+D///////////////////////////////////////+AAD/AAAP/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////wAgAAAAAEAAAP///////////////////////////////////////wAAP+AAB//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAD/////gAAAAAAAAAAA///////////////////////////////////////+AAA/wAAn/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwQ/////+AAAAAB8AAAOD///////////////////////////////////////wAAD/AH//+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////4AAAAAAwAAD4P//////////////////////////////////////+AAAfgA///QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////AAAAAAAAAAAA///////////////////////////////////////8AABsAP4cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////4AAAAAAAAAAAH///////////////////////////////////////8AAAAD0X4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIf//////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////gAAAAAAAAAAAf///////////////////////////////////////wAAAABPuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////AAAAAAAAAAAB////////////////////////////////////////gAAADp8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////AAAAAAAAAAAP///////////////////////////////////////+AAAAfmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////kAAAHAAAAAA////////////////////////////////////////8AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////+AAD/AAAAAH////////////////////////////////////////4AAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////AAf+AAAAAf////////////////////////////////////////gAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+///////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////8AB//gAAAD////////////////////////////////////////9gAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f//////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////4AH//8ADgP////////////////////////////////////////4AAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg///////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////+Af//+B+X/////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////B///////////////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H///////////v//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////+P/////////////v/////////////////////////////////wAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwf/////////+gAd/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////+H/////////////////////////////////0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg////////2N+ABD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////9///////wf/////////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHT////////AB0AAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////////////////+A/////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAOP///////4AAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD////////////////////v//////4B/////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcP//////+AAAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAABACA////////////////////+9//////wH/////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4f//////wAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAH////////////////////93//////AP////////////////////////////////0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg//////8AAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQH/////////////////////7P/////+A/////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/B//////gAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////gf/////4Af///////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+D/////+AAAAAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////A//////wA////////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8H/////4AAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////8D//////wA/T/////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4H/////gAAAAAAPwiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////////4H//////AAQP/////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf/////AAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////////////gP/////+AAAf////////////////////////////8AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGB/////8AAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////////////A//////5gAR/////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcB/////gAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////+B//////sADAP////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4D////+AAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////4D//////4AcAAgAD////////////////////////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgH////wAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////wP//////AD4AAAAH////////////////////////AwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAP////AAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////////Af/////8AfgAAAAf///////////////////////gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAf///8AAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////+A//////53/AAAAA///////////////////////+A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcA////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////////4B/////////gAAAA///////////////////////wDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////gD/////////gAAAB//////////v///////////8AOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD///8AAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////+AP/////////AAAAD3////////+////////////gA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///wAAAAAB5/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////+Af////////+AAAAA/////////7//////////7gADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///AAAAAAOH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////////////8B/////////8AAAA//////////x//////////gAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAABgB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////4H/////////wAAAB/v//////96H/////////4AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAIA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////gf////////+AAAAD/f//////iAf///////v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///gAAD/gAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////B/////////wAAAAH5//////4AA///////wOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAA///+AAAf+AAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////8D////////+AAAAAOH//////gAD//////4AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///8AAB/wAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////wH////////sAAAAAAf/////+AAH//////gDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///4AAH+AAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////AP///////+AAAAAAB//////wAAH/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAA////wAA/4AAAAQAMoAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////////////8Af///////wAAAAAAH/////+AAAv/////gB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAB////AAD/gAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////wA////////AAAAAAAf/////AAAA/////+APgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAD///+AAf+AAAAAAB/wAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////AB///////8AAAAAAB/////4AAAD/////4B+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AD/oAAAAAAL/4AAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////+AH///////AAAAAAAH/////gAAAL/////gHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///8Dv+AAAADAP//hwAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////8AP//////4AAAAAAAf////8AAAAP////+AOAAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////4AAAAPgAMAHgAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////8A///////gAAAAAAA/////AAAAAf////+AAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////gAAAAAAAgAAQAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////wB//////wAAAAAAAD////4AAAAB/////4AAAAAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////gD/////+AAAAAAAAP////AAAAAH/////wAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////4AAAAAAAAAAAAgAAAAAAAAAAAAAAAAIAAAD/////////////////////////+AH/////4AAAAAAAA////wAAAAAf/////gAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////////////4Bf////gAAAAAAAAB////AAAAAD+f////AAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAB//////////////////////////wA////4AAAAAAAAAH///oAAAAAPh////+AAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/h//gAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAH//////////////////////////AD////AAAAAAAAAAf//+AAAAAA8D////8AAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////////////8gP///8AAAAAAAAAA///AAAAAAAAP////4AAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////gAAAAAAAAAEAAAAAAAAAAAAAAAAAIAAD//////////////////////////8B////AAAAAAAAAAD//8AAAAAAAA/////wAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///+AAAAAAAAAAAAAAAAAAAAAAAAAAACAAAf//////////////////////////4D///gAAAAAAAAAAH//wAAAAAAAD/////AAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AAAAAAAAAAgAAAAAAAAAAAAAAAAAAAB///////////////////////////4P//wAAAAAAAAAAAf//AAAAAAAAH////8AAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////wf/+AAAAAAAAAAAA//8AAAAAAAAf////4AAAABzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//+AAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAP///////////////////////////h//AAAAAAAAAAAAD//wAAAAAAAB/////gAAAADVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////////////H/wAAAAAAAAAAAAP//AAAAAAAAD////+AAAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf/AAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAD///////////////////////////+fgAAAAAAAAAAAAAf/8AAAAACAAfn///4AAAABgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////+8AAAAAAAAAAAAAB//wAAAAAAAAcf///gAAAADAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////4AAAAOAAAAAAAAAH//AAAAAAAABwP//+AAAAAIgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAHIAAAIAAAAAAAAAAAAAAAAAAAAA////////////////////////////gAAAAAAAAAAAAAAP/4AAAAAAAAHAP//4AAAAEArgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA4gAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////8AAAMAAAAAAAAAAAf/gAAAAAQAAcAf//gAAAAQQGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAODwAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////4AAHgAAAAAAAAAAB/+AAAAABAABgB//8AAAAABwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAH8/wAAAAAAAAAAAAAAAAAAAAAAAAH///////////////////////////wA/+AAAAAAAAAAAD/4AAAAAAAAGAF//AAAAAAHDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAD/3/AAEYAAAAAAAAAAAAAAAAAAAAAP///////////////////////////h//4AAAAAAAAAAAP/gAAAAAAAA4AH/4AAAABAakAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAf/f/8HxAAAAAAAAAAAAAAAAAAAAAAf//////////////////////////////gAAAAAAAAAAA/+AAAAAAAADAAH8AAAAAEAaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3wAAB/5////AAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////+AAAAAAAAAAAB/gAAAAAAAAUAAHAAAAAAgB0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgAAH/j////wAAAAAAAAAAAAAAAAAAAAAB//////////////////////////////4AAAAAAAAAAAH+IAAAAAAAAwAA+AAAAAEAMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfA+A//P////gAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////AAAAAAAAAAAAf4wAAAAAAADAADgAAAAAgAYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9PeH//////+AAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////8AAAAAAAAAAAA+HAAAAAAAAPAAMAAAAAMAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4d///////yAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////gAAAAAAAAAAADweAAAAAAAB8AAgAAAAAAABHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+F7///////+AAAAAAAAAAAAAAAAAAAAAB/////////////////////////////+AAAAAAAAAAAAHB8AAAAAAAB4AAAAAAAAAAN/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H////////8AAAAAAAAAAAAAAAAAAAAAH/////////////////////////////wAAAAAAAAAAAAAHwAAAAAAADgAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwP////////4AAAAAAAAAAAAAAAAAAAAAX////////////////////////////+AAAAAAAAAAAAAAfgAAAAAAAPAAAAAAAAAAWfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////wAAAAAAAAAAAAAAAAAAAAAP////////////////////////////4AAAAAAAAAAAAAB+AAAAAAAAcAAAAAAAEABB7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////+AAAAAAAAAAAAAAAAAAAAAAf////////////////////////////AAAAAAAAAAAAAAH4AAAAAAAA+AAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////AAAAAAAAAAAAAAAAAAAAAAf///////////////////////////8AAAAAAAAAAAAAAfAAAAAAAAB8AAAAAAHgAQeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////+AAAAAAAAAAAAAAAAAAAAAA/////8Af////////////////////gAAAAAAAAAAAAAA4AAAAAAAAH4AAAAAA+AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////7/AAAAAAAAAAAAAAAAAAAAA/////gA////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAD+AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////gAAAAAAAAAAAAAAAAAAAB////gAB////////////////////wAAAAAAAAAAAAAAAAAAAAAGAA/gAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////gAAAAAAAAAAAAAAAAAAAD/wHwAAH////////////////////AAAAAAAAAAAAAAAAAAAAAAfwD/AAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////AAAAAAAAAAAAAAAAAAAAD4AAAAAP///////////////////4AAAAAAAAAAAAAAAAAAAAAA/gP8AAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////+AAAAAAAAAAAAAAAAAAAACAAAAAAaH//////////////////AAAAAAAAAAAAAAAAAAAAAAB+A/wAAAAP/4AAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAL/////////////////4AAAAAAAAAAAAAAAAAAAAAAD8B/AAQAA/8AAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////AAAAAAAAAAAAAAAAAAAAAAAH4H8AAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAI/////////////////4AAAAAAAAAAAAAAAAAAAAAAAP4PwAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////AAAAAAAAAAAAAAAAAAAAAAAAfw/AAAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////4AAAAAAAAAAAAAAAAAAAAAAAQ/h+AAAH//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////AAAAAAAAAAAAAAAAAAAAAAAAD/D8AAA///wAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////wAAAAAAAAAAAAAAAAAAAAAAAAD/jwABD//+AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////+AAAAAAAAAAAAAAAAAAAAAAAAAH/jgAPv//8AABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////wAAAAAAAAAAAAAAAAAAAAAAAAEf+AAA////8CAMDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAQ/+EAD////wftgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////9AAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////gAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAP///4H/8AcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////uAAAAAAAAAAAAAAAAAAAAAAAAAAIA///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAH/4AA////AQAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAA/////////////9wAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAD///8AAAAEBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////j8AAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAH///wAAAAgEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxAAAAf/////////////P3gAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAf///AweAAAX+CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////2+/wAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////+AAAAAAAAAAAAAAAAAAAAAAAAAABD/4ABf//wDn4AAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////+/n/wAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAEP/hAR//+Af8wAwAfwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////3//gAAAAAAAAAAAAAAAAAAAAAAAAB//////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAf+cAH//4B+AMABh/APgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////7//AAAAAAAAAAAAAAAAAAAAAAAAAH//////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8QAf//wH8AAAAAED/gAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF////////////////54AAAAAAAAAAAAAAAAAAAAAAAAP/////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAj//zB//+A/4AAAADwf/8AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////////4AAAAAAAAAAAAAAAAAAAAAAAf/////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAABH/4MBO/wDzwAA/gfz//8AAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////4AAAAAAAAAAAAAAAAAAAAAAA//////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAApfgPPADxXA/f//+AAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////wAAAAAAAAAAAAAAAAAAAAAAB/////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAA6AO8AGAEDf///+AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////////gAAAAAAAAAAAAAAAAAAAAAAD/////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/4AAACAAw6AAAAIf////AAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////////AAAAAAAAAAAAAAAAAAAAAAAH////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAADDgAAAAA////+AABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////////AAAAAAAAAAAAAAAAAAAAAAAP////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAAAAAMLAAAAAAP///8AAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////wAAAAAAAAAAAAAAAAAAAAAA////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAwMAAAAAAH///4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////wAAAAAAAAAAAAAAAAAAAAAB////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAADAQAAAAgAH///gAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////AAAAAAAAAAAAAAAAAAAAAAH////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAgAAAAAAAAEIAf///w/4AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////8AAAAAAAAAAAAAAAAAAAAAAf///////////9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAgA////weABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////4AAAAAAAAAAAAAAAAAAAAAB////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4EAAAAAAAAAAGAD////gAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////gAAAAAAAAAAAAAAAAAAAAAD////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8+AAAAAAAAAAAAH///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////////////////////+AAAAAAAAAAAAAAAAAAAAAAH////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9gAAAAAAACAAAP///AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////4AAAAAAAAAAAAAAAAAAAAAAf///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAAAAIAQAAG///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////gAAAAAAAAAAAAAAAAAAAAAB////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//AAAAAEABAAA//+D8AAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////////+AAAAAAAAAAAAAAAAAAAAAAD////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf7kwICcAAAAADj/wD4AAABhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////wAAAAAAAAAAAAAAAAAAAAAAP///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU+5/gPgAAAAAD/AHwAAAFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////AAAAAAAAAAAAAAAAAAAAAAB////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAB4AAAAAAP8AfgAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////////////4AAAAAAAAAAAAAAAAAAAAAAH////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAA/EAAAAiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////////AAAAAAAAAAAAAAAAAAAAAAAP///////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgDgAAAAAAAAAB/gAAADkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////8AAAAAAAAAAAAAAAAAAAAAAA////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAMAAAAAAAAAAD8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////gAAAAAAAAAAAAAAAAAAAAAAD////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////////////4AAAAAAAAAAAAAAAAAAAAAAAH////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAMAAAAAAAADACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////////AAAAAAAAAAAAAAAAAAAAAAAAf///////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////8AAAAAAAAAAAAAAAAAAAAAAAB////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8gAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////gAAAAAAAAAAAAAAAAAAAAAAAH////////////gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChwAAAMAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////+AAAAAAAAAAAAAAAAAAAAAAAAf///////////+ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH9IAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////wAAAAAAAAAAAAAAAAAAAAAAAD////////////4AAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//gAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////+AAAAAAAAAAAAAAAAAAAAAAAAf////////////gAIAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////gAAAAAAAAAAAAAAAAAAAAAAAD////////////+AAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//gAB8AAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////+AAAAAAAAAAAAAAAAAAAAAAAAP////////////4AAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+AAHwAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////4AAAAAAAAAAAAAAAAAAAAAAAB/////////////gAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQH//6AA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////gAAAAAAAAAAAAAAAAAAAAAAAH/////////////AAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg///MAB+AAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////+AAAAAAAAAAAAAAAAAAAAAAAAf////////////8AAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/B//8AAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////4AAAAAAAAAAAAAAAAAAAAAAAB/////////////wAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9n//gAAf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////gAAAAAAAAAAAAAAAAAAAAAAAP/////////////AAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////gAB/4AAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////+AAAAAAAAAAAAAAAAAAAAAAAA/////////////4AAP+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////AAP/gAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////4AAAAAAAAAAAAAAAAAAAAAAAD/////////////AAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////AA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////gAAAAAAAAAAAAAAAAAAAAAAAP////////////4AD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ//////AD/8AAAAAAAAAAgAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////+AAAAAAAAAAAAAAAAAAAAAAAA/////////////AAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE//////+AP/wAAAAAAAAAAgAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////4AAAAAAAAAAAAAAAAAAAAAAAH////////////wAA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7///////B//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////AAAAAAAAAAAAAAAAAAAAAAAAf///////////8AAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////+H/+AAAAAAAAAAAAAAAgAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////+AAAAAAAAAAAAAAAAAAAAAAAB////////////AAAf/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////8AAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////gAAAAAAAAAAAAAAAAAAAAAAAD///////////4AAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////gAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////+AAAAAAAAAAAAAAAAAAAAAAAAP///////////AAAH//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////4AAAAAAAAAAAAAAAAAAAAAAAAf//////////4AAAP/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////gAAAAAAAAAAAAAAAAAAAAAAAA//////////+AAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////+AAAAAAAAAAAAAAAAAAAAAAAAD//////////4AAAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////////8AAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////wAAAAAAAAAAAAAAAAAAAAAAAAH/////////+AAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////AAAAAAAAAAAAAAAAAAAAAAAAAf/////////4AAAA//gAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////4AAAAAAAAAAAAAAAAAAAAAAAAA//////////gAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////gAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////AAAAAAAAAAAAAAAAAAAAAAAAAD//////////AAAAf/wAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////////AAAAAAAMEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////4AAAAAAAAAAAAAAAAAAAAAAAAAH/////////8AAAD//AAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////////+AAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////gAAAAAAAAAAAAAAAAAAAAAAAAAP/////////wAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////4AAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////+AAAAAAAAAAAAAAAAAAAAAAAAAA//////////AAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL////////////////gAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////gAAAAAAAAAAAAAAAAAAAAAAAAAB/////////8AAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////AAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAH/////////4AAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////gAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////+AAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////4AAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////gAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////8AAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////gAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////wAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////8AAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR//////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////AH/////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////gAB/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/////9//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///+AAAA////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////gAAAD////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///4AAAAH+//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAPz//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//hoAAAAAef/////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////f/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAABx//////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/////8P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAGE/////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAz/////4AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////AAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIf////4AAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAf////gAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////+AAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////4AAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////gAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////+AAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///+gAAAAAAAAAAAPHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5/AAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDwAAAAAAAAAAAAH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAIAAAAAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///58AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4MAAAAAAAAAAAwOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAH9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY///4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABn///yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEf//+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAAAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPoAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAH+AAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvf//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8AAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKb/wAAAtwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXL8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHcPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFt/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABV/AAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//4AAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADB6hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAYAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfsoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//AAAAAAAAAAAAAAAAAAAAAf/wAB/4AAAAAAAf/OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///gAAAAAAAAAAAAIAAfz3+f///AP/8AAACPgH////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD//wAAAAAAAAAAAAAB/////////////wAAH//A//////mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD////wAAAAAAAAAAA//////////////x/8///////////+AAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6////////AAAAAAAA/////////////////////////////zwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////8AAAAH///////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////4AAAD////////////////////////////////wBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAP/////////////AAAAf/////////////////////////////////9xwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4B/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAH/////////////8AAAH////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPx//9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAf/////////////AAAD//////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/n//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAD/7D/////////////+AAh///////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB/P//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAACAAAAAAwAB///f////////////8AAf////////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+f//AAAAAAAAAAAAAAAAAAAAAAAAAAIDAACIB/gf/8wHCAAf//////////////////gL/////////////////////////////////////////8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AD4//8AAAAAAAAAAAAAAAAAAAAAAAAANwHAAD///////g/8A///////////////////8A//////////////////////////////////////////5//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//z//8AAAAAAAAAAAAAAAAAAAAAAABw+AAAf///////////////////////////////gH/////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///P//gAAAAAAAAAAAAAAAAAAAAAAH/j///P///////////////////////////////4Af/////////////////////////////////////////////+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY44AAAAAAAAAPIP8P/8AAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////////////////AH///////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9wAAAAAAAAAADPg//+AAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////4T///////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBwAAAAAAAA/gH//wAAAAAAAAAAAAAAAAAAAAEAP/////////////////////////////////////j///////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAADPgAAAAAeAAD///wAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////////////8f/////////////////////////////////////////////+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAA///f/7/zgAXgD0B////yAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAADAf//////8B/+CP/////4AAAAAAAAAAAAAAAAAAEAH/////////////////////////////////////////////////////////////////////////////////////7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh/IGHAAAAAD//////////////////8AAAAAAAAAAAAAAAAAABgAA/////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAgAHgAAcDwAAAD//////////////////+AAAAAAAAAAAAAAAAAABAHP/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAgAAf//wPAAAAB/////////////////3AAAAAAAAAAAAAAAAAAAAB/////////////////////////////////////////////////////////////////////////////////////4gAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////wAAAAA/////////////////AAAAAAAAAAAAAAAAAAAAAf/////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAf/////////////////9/////////////////8AAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAAAB/////////////////////////////////////4AAAAAAAAAAAAAAAAAAB////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAACT/////////////////////////////////////AAAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAA4////////////////////////////////////8AAAAAAAAAAAAAAAAAAB//////////////////////////////////////////////////////////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAGAP///////////////////////////////8AAAAAAAAAAAAAAAAAAAAAB///////////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAx+AAEA////////////////////////////////+AAAAAAAAAAAAAAAAAAAAH////////////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAAD///AP//////////////////////////////////8AAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////////////gH/AAAAAAAAAAAAAAAf///////////////////////////////////8B//8AAAAAAAAAAAD8AAAAD//////////////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAAAAAAAAAAD/////////////////////////////////z/4AAAAAAAAAAAAAD//gAAA//////////////////////////////////////////////////////////////////////////////////////////////8bwAAAAAAAAAAAAAAAAD//////////////////////////////////B//AAAA+AAAAAAAB//+AAAH/////////////////////////////////////////////////////////////////////////////////////////////v/2AAAAAAAAAAAAAD8AAD//////////////////////////////////gAAAAB/AAAAAAAAH//8AAAH/////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAf/AAAA/////////////////////////////////4AAAA/jgAAAAAAA///4AAD+AD//////////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAAAAAAAAD/gAAAB//////////////////////////////////8AB4HwAAAAAAD///wAAAAYB/////////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAwAA/////////////////////////////////+AAAABgAPAAAB///8AAAAABAAA///////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////AAAAMAB8AAH///4AAAAAAP/////////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////ABgAAx/wAB//gAAAAAB////////////////////////////////////////////////////////////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAAAf///////////////////////////////////////AAAAAAAAAAAAAH9/////////////////////////////////////////////////////////////////////////////////////////////4AAAAAAAAAAAAAAAAPwAB//////////////////////////////////////////8AAAAAAAAAAAP///////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////4AAAAAAAAAAH////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAIAf/////////////////////////////////////////gAAAAAD//4B/////////////////////////////////////////////////////////////////////////////////////////////////+AAAAAAAAAAAAAAAAAAAAH//////////////////////////////////////////8AAB////D/////////////////////////////////////////////////////////////////////////////////////////////////4HwAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////gAD/////////////////////////////////////////////////////////////////////////////////////////////////////////+AAAAAAAAAB/gAAAAD/////////////////////////////////////////////wD///////////////////////////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAB///Dj////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gAAAAAAAAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",jx=Uint8Array.from(atob(Qx),i=>i.charCodeAt(0));function Ya(i,A){let t=Math.min(1023,Math.max(0,Math.floor((i+180)/360*1024))),n=Math.min(511,Math.max(0,Math.floor((90-A)/180*512)))*1024+t;return(jx[n>>3]&128>>(n&7))!==0}var os=Math.PI/180,Av=7.5,Mu=3.4,tv=[{lon:55.27,lat:25.2},{lon:58.55,lat:23.61},{lon:76.27,lat:9.93}],Za=null;function ev(i,A){if(Za)return Za;let t=[];for(let e=0;e<i;e++){let n=90-(e+.5)/i*180,r=Math.max(1,Math.round(A*Math.cos(n*os)));for(let s=0;s<r;s++){let o=-180+s/r*360;if(!Ya(o,n))continue;let a=n*os;t.push(o,Math.sin(a),Math.cos(a))}}return Za=new Float32Array(t),Za}function nv(i,A){let t=((i/Mu+A*.37)%1+1)%1,e=t<.5?t*2:(1-t)*2;return e*e*(3-2*e)}function iv(i,A={}){let{lon0:t=34,lat0:e=12,rows:n=58,equator:r=116}=A,s=document.createElement("canvas"),o=s.getContext("2d");if(!o)return;i.appendChild(s);let a=ev(n,r),l=0,c=0,f=1,h=()=>{let M=i.getBoundingClientRect();return!M.width||!M.height?!1:(f=Math.min(window.devicePixelRatio||1,2),l=M.width,c=M.height,s.width=Math.round(l*f),s.height=Math.round(c*f),s.style.width=`${l}px`,s.style.height=`${c}px`,o.setTransform(f,0,0,f,0,0),!0)},u=(M,v)=>{if(!l||!c)return;o.clearRect(0,0,l,c);let y=Math.min(l,c)/2*.94,E=l/2,b=c/2,_=e*os,w=Math.sin(_),C=Math.cos(_);o.fillStyle="#b9b9cc";for(let I=0;I<a.length;I+=3){let D=(a[I]-v)*os,W=a[I+1],k=a[I+2],U=Math.cos(D),H=w*W+C*k*U;if(H<=0)continue;let L=E+k*Math.sin(D)*y,V=b-(C*W-w*k*U)*y,$=.0125*y*(.45+.55*H);o.globalAlpha=.22+.55*H,o.beginPath(),o.arc(L,V,$,0,Math.PI*2),o.fill()}tv.forEach((I,D)=>{let W=I.lat*os,k=(I.lon-v)*os,U=Math.sin(W),H=Math.cos(W),L=Math.cos(k),V=w*U+C*H*L;if(V<=0)return;let $=E+H*Math.sin(k)*y,R=b-(C*U-w*H*L)*y,tA=nv(M,D)*Math.min(1,V*2.2);if(tA<=.01)return;let lA=.026*y,LA=o.createRadialGradient($,R,0,$,R,lA*5.5);LA.addColorStop(0,`rgba(214,242,255,${.5*tA})`),LA.addColorStop(.35,`rgba(0,149,218,${.34*tA})`),LA.addColorStop(1,"rgba(0,149,218,0)"),o.globalAlpha=1,o.fillStyle=LA,o.beginPath(),o.arc($,R,lA*5.5,0,Math.PI*2),o.fill(),o.globalAlpha=tA*.75,o.strokeStyle="rgba(84,197,208,0.9)",o.lineWidth=Math.max(1,y*.004),o.beginPath(),o.arc($,R,lA*2.1,0,Math.PI*2),o.stroke(),o.globalAlpha=tA,o.fillStyle="#eaf7ff",o.beginPath(),o.arc($,R,lA,0,Math.PI*2),o.fill(),o.fillStyle="#b9b9cc"}),o.globalAlpha=1};if(h(),wt){u(Mu*.25,t),new ResizeObserver(()=>{h()&&u(Mu*.25,t)}).observe(i);return}let d=0,g=!1,p=(M,v)=>{d+=v/1e3,u(d,t+d*Av)},m=()=>{g||(g=!0,UA.ticker.add(p))},S=()=>{g&&(g=!1,UA.ticker.remove(p))};bA.create({trigger:i,start:"top bottom",end:"bottom top",onToggle:M=>M.isActive?m():S(),onRefresh:M=>M.isActive?m():S()}),new ResizeObserver(()=>h()).observe(i)}function Dm(i=document){i.querySelectorAll("[data-mini-globe]").forEach(A=>{A.childElementCount||iv(A)})}var eg=0,sf=1,ng=2;var Wo=1,ig=2,Ts=3,gi=0,me=1,Jn=2,$n=0,Cr=1,Es=2,of=3,af=4,rg=5;var Xi=100,sg=101,og=102,ag=103,lg=104,cg=200,hg=201,ug=202,fg=203,_l=204,xl=205,dg=206,pg=207,mg=208,gg=209,_g=210,xg=211,vg=212,yg=213,Sg=214,vl=0,yl=1,Sl=2,Pr=3,Ml=4,bl=5,wl=6,Tl=7,lf=0,Mg=1,bg=2,Dn=0,cf=1,hf=2,uf=3,ff=4,df=5,pf=6,mf=7;var gf=300,Qi=301,Dr=302,oc=303,ac=304,Xo=306,El=1e3,Xn=1001,Cl=1002,ce=1003,wg=1004;var qo=1005;var pe=1006,lc=1007;var ji=1008;var un=1009,_f=1010,xf=1011,Cs=1012,cc=1013,Ln=1014,Nn=1015,Kn=1016,hc=1017,uc=1018,Ps=1020,vf=35902,yf=35899,Sf=1021,Mf=1022,bn=1023,qn=1026,Ar=1027,bf=1028,fc=1029,tr=1030,dc=1031;var pc=1033,Yo=33776,Zo=33777,Jo=33778,$o=33779,mc=35840,gc=35841,_c=35842,xc=35843,vc=36196,yc=37492,Sc=37496,Mc=37488,bc=37489,Ko=37490,wc=37491,Tc=37808,Ec=37809,Cc=37810,Pc=37811,Rc=37812,Ic=37813,Dc=37814,Lc=37815,Nc=37816,Bc=37817,Uc=37818,Fc=37819,Oc=37820,zc=37821,Hc=36492,kc=36494,Vc=36495,Gc=36283,Wc=36284,Qo=36285,Xc=36286;var yo=2300,Pl=2301,gl=2302,$u=2303,Ku=2400,Qu=2401,ju=2402;var Tg=3200;var wf=0,Eg=1,xi="",on="srgb",So="srgb-linear",Mo="linear",mt="srgb";var Tr=7680;var Af=519,Cg=512,Pg=513,Rg=514,qc=515,Ig=516,Dg=517,Yc=518,Lg=519,tf=35044;var Tf="300 es",In=2e3,bo=2001;function rv(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}function sv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ng(){let i=wo("canvas");return i.style.display="block",i}var Lm={},ys=null;function Ef(...i){let A="THREE."+i.shift();ys?ys("log",A,...i):console.log(A,...i)}function Bg(i){let A=i[0];if(typeof A=="string"&&A.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function HA(...i){i=Bg(i);let A="THREE."+i.shift();if(ys)ys("warn",A,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(A)):console.warn(A,...i)}}function qA(...i){i=Bg(i);let A="THREE."+i.shift();if(ys)ys("error",A,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(A)):console.error(A,...i)}}function Er(...i){let A=i.join(" ");A in Lm||(Lm[A]=!0,HA(...i))}function Ug(i,A,t){return new Promise(function(e,n){function r(){switch(i.clientWaitSync(A,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:e()}}setTimeout(r,t)})}var Fg={[vl]:yl,[Sl]:wl,[Ml]:Tl,[Pr]:bl,[yl]:vl,[wl]:Sl,[Tl]:Ml,[bl]:Pr},Yn=class{addEventListener(A,t){this._listeners===void 0&&(this._listeners={});let e=this._listeners;e[A]===void 0&&(e[A]=[]),e[A].indexOf(t)===-1&&e[A].push(t)}hasEventListener(A,t){let e=this._listeners;return e===void 0?!1:e[A]!==void 0&&e[A].indexOf(t)!==-1}removeEventListener(A,t){let e=this._listeners;if(e===void 0)return;let n=e[A];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(A){let t=this._listeners;if(t===void 0)return;let e=t[A.type];if(e!==void 0){A.target=this;let n=e.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,A);A.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bu=Math.PI/180,Rl=180/Math.PI;function jo(){let i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[A&255]+Te[A>>8&255]+"-"+Te[A>>16&15|64]+Te[A>>24&255]+"-"+Te[t&63|128]+Te[t>>8&255]+"-"+Te[t>>16&255]+Te[t>>24&255]+Te[e&255]+Te[e>>8&255]+Te[e>>16&255]+Te[e>>24&255]).toLowerCase()}function at(i,A,t){return Math.max(A,Math.min(t,i))}function ov(i,A){return(i%A+A)%A}function wu(i,A,t){return(1-t)*i+t*A}function fo(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lf=class Lf{constructor(A=0,t=0){this.x=A,this.y=t}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,t){return this.x=A,this.y=t,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){let t=this.x,e=this.y,n=A.elements;return this.x=n[0]*t+n[3]*e+n[6],this.y=n[1]*t+n[4]*e+n[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,t){return this.x=at(this.x,A.x,t.x),this.y=at(this.y,A.y,t.y),this}clampScalar(A,t){return this.x=at(this.x,A,t),this.y=at(this.y,A,t),this}clampLength(A,t){let e=this.length();return this.divideScalar(e||1).multiplyScalar(at(e,A,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){let t=Math.sqrt(this.lengthSq()*A.lengthSq());if(t===0)return Math.PI/2;let e=this.dot(A)/t;return Math.acos(at(e,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let t=this.x-A.x,e=this.y-A.y;return t*t+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this}lerpVectors(A,t,e){return this.x=A.x+(t.x-A.x)*e,this.y=A.y+(t.y-A.y)*e,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this}rotateAround(A,t){let e=Math.cos(t),n=Math.sin(t),r=this.x-A.x,s=this.y-A.y;return this.x=r*e-s*n+A.x,this.y=r*n+s*e+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lf.prototype.isVector2=!0;var GA=Lf,Zn=class{constructor(A=0,t=0,e=0,n=1){this.isQuaternion=!0,this._x=A,this._y=t,this._z=e,this._w=n}static slerpFlat(A,t,e,n,r,s,o){let a=e[n+0],l=e[n+1],c=e[n+2],f=e[n+3],h=r[s+0],u=r[s+1],d=r[s+2],g=r[s+3];if(f!==g||a!==h||l!==u||c!==d){let p=a*h+l*u+c*d+f*g;p<0&&(h=-h,u=-u,d=-d,g=-g,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),M=Math.sin(S);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M,a=a*m+h*o,l=l*m+u*o,c=c*m+d*o,f=f*m+g*o}else{a=a*m+h*o,l=l*m+u*o,c=c*m+d*o,f=f*m+g*o;let S=1/Math.sqrt(a*a+l*l+c*c+f*f);a*=S,l*=S,c*=S,f*=S}}A[t]=a,A[t+1]=l,A[t+2]=c,A[t+3]=f}static multiplyQuaternionsFlat(A,t,e,n,r,s){let o=e[n],a=e[n+1],l=e[n+2],c=e[n+3],f=r[s],h=r[s+1],u=r[s+2],d=r[s+3];return A[t]=o*d+c*f+a*u-l*h,A[t+1]=a*d+c*h+l*f-o*u,A[t+2]=l*d+c*u+o*h-a*f,A[t+3]=c*d-o*f-a*h-l*u,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,t,e,n){return this._x=A,this._y=t,this._z=e,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,t=!0){let e=A._x,n=A._y,r=A._z,s=A._order,o=Math.cos,a=Math.sin,l=o(e/2),c=o(n/2),f=o(r/2),h=a(e/2),u=a(n/2),d=a(r/2);switch(s){case"XYZ":this._x=h*c*f+l*u*d,this._y=l*u*f-h*c*d,this._z=l*c*d+h*u*f,this._w=l*c*f-h*u*d;break;case"YXZ":this._x=h*c*f+l*u*d,this._y=l*u*f-h*c*d,this._z=l*c*d-h*u*f,this._w=l*c*f+h*u*d;break;case"ZXY":this._x=h*c*f-l*u*d,this._y=l*u*f+h*c*d,this._z=l*c*d+h*u*f,this._w=l*c*f-h*u*d;break;case"ZYX":this._x=h*c*f-l*u*d,this._y=l*u*f+h*c*d,this._z=l*c*d-h*u*f,this._w=l*c*f+h*u*d;break;case"YZX":this._x=h*c*f+l*u*d,this._y=l*u*f+h*c*d,this._z=l*c*d-h*u*f,this._w=l*c*f-h*u*d;break;case"XZY":this._x=h*c*f-l*u*d,this._y=l*u*f-h*c*d,this._z=l*c*d+h*u*f,this._w=l*c*f+h*u*d;break;default:HA("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,t){let e=t/2,n=Math.sin(e);return this._x=A.x*n,this._y=A.y*n,this._z=A.z*n,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(A){let t=A.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10],h=e+o+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(c-a)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(e>o&&e>f){let u=2*Math.sqrt(1+e-o-f);this._w=(c-a)/u,this._x=.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-e-f);this._w=(r-l)/u,this._x=(n+s)/u,this._y=.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+f-e-o);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(a+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(A,t){let e=A.dot(t)+1;return e<1e-8?(e=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=e):(this._x=0,this._y=-A.z,this._z=A.y,this._w=e)):(this._x=A.y*t.z-A.z*t.y,this._y=A.z*t.x-A.x*t.z,this._z=A.x*t.y-A.y*t.x,this._w=e),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(at(this.dot(A),-1,1)))}rotateTowards(A,t){let e=this.angleTo(A);if(e===0)return this;let n=Math.min(1,t/e);return this.slerp(A,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,t){let e=A._x,n=A._y,r=A._z,s=A._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=e*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-e*l,this._z=r*c+s*l+e*a-n*o,this._w=s*c-e*o-n*a-r*l,this._onChangeCallback(),this}slerp(A,t){let e=A._x,n=A._y,r=A._z,s=A._w,o=this.dot(A);o<0&&(e=-e,n=-n,r=-r,s=-s,o=-o);let a=1-t;if(o<.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+e*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+e*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(A,t,e){return this.copy(A).slerp(t,e)}random(){let A=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e);return this.set(n*Math.sin(A),n*Math.cos(A),r*Math.sin(t),r*Math.cos(t))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,t=0){return this._x=A[t],this._y=A[t+1],this._z=A[t+2],this._w=A[t+3],this._onChangeCallback(),this}toArray(A=[],t=0){return A[t]=this._x,A[t+1]=this._y,A[t+2]=this._z,A[t+3]=this._w,A}fromBufferAttribute(A,t){return this._x=A.getX(t),this._y=A.getY(t),this._z=A.getZ(t),this._w=A.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nf=class Nf{constructor(A=0,t=0,e=0){this.x=A,this.y=t,this.z=e}set(A,t,e){return e===void 0&&(e=this.z),this.x=A,this.y=t,this.z=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this.z=A.z+t.z,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this.z+=A.z*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this.z=A.z-t.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,t){return this.x=A.x*t.x,this.y=A.y*t.y,this.z=A.z*t.z,this}applyEuler(A){return this.applyQuaternion(Nm.setFromEuler(A))}applyAxisAngle(A,t){return this.applyQuaternion(Nm.setFromAxisAngle(A,t))}applyMatrix3(A){let t=this.x,e=this.y,n=this.z,r=A.elements;return this.x=r[0]*t+r[3]*e+r[6]*n,this.y=r[1]*t+r[4]*e+r[7]*n,this.z=r[2]*t+r[5]*e+r[8]*n,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){let t=this.x,e=this.y,n=this.z,r=A.elements,s=1/(r[3]*t+r[7]*e+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*e+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*e+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*e+r[10]*n+r[14])*s,this}applyQuaternion(A){let t=this.x,e=this.y,n=this.z,r=A.x,s=A.y,o=A.z,a=A.w,l=2*(s*n-o*e),c=2*(o*t-r*n),f=2*(r*e-s*t);return this.x=t+a*l+s*f-o*c,this.y=e+a*c+o*l-r*f,this.z=n+a*f+r*c-s*l,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){let t=this.x,e=this.y,n=this.z,r=A.elements;return this.x=r[0]*t+r[4]*e+r[8]*n,this.y=r[1]*t+r[5]*e+r[9]*n,this.z=r[2]*t+r[6]*e+r[10]*n,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,t){return this.x=at(this.x,A.x,t.x),this.y=at(this.y,A.y,t.y),this.z=at(this.z,A.z,t.z),this}clampScalar(A,t){return this.x=at(this.x,A,t),this.y=at(this.y,A,t),this.z=at(this.z,A,t),this}clampLength(A,t){let e=this.length();return this.divideScalar(e||1).multiplyScalar(at(e,A,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this.z+=(A.z-this.z)*t,this}lerpVectors(A,t,e){return this.x=A.x+(t.x-A.x)*e,this.y=A.y+(t.y-A.y)*e,this.z=A.z+(t.z-A.z)*e,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,t){let e=A.x,n=A.y,r=A.z,s=t.x,o=t.y,a=t.z;return this.x=n*a-r*o,this.y=r*s-e*a,this.z=e*o-n*s,this}projectOnVector(A){let t=A.lengthSq();if(t===0)return this.set(0,0,0);let e=A.dot(this)/t;return this.copy(A).multiplyScalar(e)}projectOnPlane(A){return Tu.copy(this).projectOnVector(A),this.sub(Tu)}reflect(A){return this.sub(Tu.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){let t=Math.sqrt(this.lengthSq()*A.lengthSq());if(t===0)return Math.PI/2;let e=this.dot(A)/t;return Math.acos(at(e,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let t=this.x-A.x,e=this.y-A.y,n=this.z-A.z;return t*t+e*e+n*n}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,t,e){let n=Math.sin(t)*A;return this.x=n*Math.sin(e),this.y=Math.cos(t)*A,this.z=n*Math.cos(e),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,t,e){return this.x=A*Math.sin(t),this.y=e,this.z=A*Math.cos(t),this}setFromMatrixPosition(A){let t=A.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(A){let t=this.setFromMatrixColumn(A,0).length(),e=this.setFromMatrixColumn(A,1).length(),n=this.setFromMatrixColumn(A,2).length();return this.x=t,this.y=e,this.z=n,this}setFromMatrixColumn(A,t){return this.fromArray(A.elements,t*4)}setFromMatrix3Column(A,t){return this.fromArray(A.elements,t*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this.z=A[t+2],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A[t+2]=this.z,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this.z=A.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let A=Math.random()*Math.PI*2,t=Math.random()*2-1,e=Math.sqrt(1-t*t);return this.x=e*Math.cos(A),this.y=t,this.z=e*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nf.prototype.isVector3=!0;var F=Nf,Tu=new F,Nm=new Zn,Bf=class Bf{constructor(A,t,e,n,r,s,o,a,l){this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,t,e,n,r,s,o,a,l)}set(A,t,e,n,r,s,o,a,l){let c=this.elements;return c[0]=A,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=e,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){let t=this.elements,e=A.elements;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],this}extractBasis(A,t,e){return A.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(A){let t=A.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,t){let e=A.elements,n=t.elements,r=this.elements,s=e[0],o=e[3],a=e[6],l=e[1],c=e[4],f=e[7],h=e[2],u=e[5],d=e[8],g=n[0],p=n[3],m=n[6],S=n[1],M=n[4],v=n[7],y=n[2],E=n[5],b=n[8];return r[0]=s*g+o*S+a*y,r[3]=s*p+o*M+a*E,r[6]=s*m+o*v+a*b,r[1]=l*g+c*S+f*y,r[4]=l*p+c*M+f*E,r[7]=l*m+c*v+f*b,r[2]=h*g+u*S+d*y,r[5]=h*p+u*M+d*E,r[8]=h*m+u*v+d*b,this}multiplyScalar(A){let t=this.elements;return t[0]*=A,t[3]*=A,t[6]*=A,t[1]*=A,t[4]*=A,t[7]*=A,t[2]*=A,t[5]*=A,t[8]*=A,this}determinant(){let A=this.elements,t=A[0],e=A[1],n=A[2],r=A[3],s=A[4],o=A[5],a=A[6],l=A[7],c=A[8];return t*s*c-t*o*l-e*r*c+e*o*a+n*r*l-n*s*a}invert(){let A=this.elements,t=A[0],e=A[1],n=A[2],r=A[3],s=A[4],o=A[5],a=A[6],l=A[7],c=A[8],f=c*s-o*l,h=o*a-c*r,u=l*r-s*a,d=t*f+e*h+n*u;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/d;return A[0]=f*g,A[1]=(n*l-c*e)*g,A[2]=(o*e-n*s)*g,A[3]=h*g,A[4]=(c*t-n*a)*g,A[5]=(n*r-o*t)*g,A[6]=u*g,A[7]=(e*a-l*t)*g,A[8]=(s*t-e*r)*g,this}transpose(){let A,t=this.elements;return A=t[1],t[1]=t[3],t[3]=A,A=t[2],t[2]=t[6],t[6]=A,A=t[5],t[5]=t[7],t[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){let t=this.elements;return A[0]=t[0],A[1]=t[3],A[2]=t[6],A[3]=t[1],A[4]=t[4],A[5]=t[7],A[6]=t[2],A[7]=t[5],A[8]=t[8],this}setUvTransform(A,t,e,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(e*a,e*l,-e*(a*s+l*o)+s+A,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(A,t){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eu.makeScale(A,t)),this}rotate(A){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eu.makeRotation(-A)),this}translate(A,t){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eu.makeTranslation(A,t)),this}makeTranslation(A,t){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,t,0,0,1),this}makeRotation(A){let t=Math.cos(A),e=Math.sin(A);return this.set(t,-e,0,e,t,0,0,0,1),this}makeScale(A,t){return this.set(A,0,0,0,t,0,0,0,1),this}equals(A){let t=this.elements,e=A.elements;for(let n=0;n<9;n++)if(t[n]!==e[n])return!1;return!0}fromArray(A,t=0){for(let e=0;e<9;e++)this.elements[e]=A[e+t];return this}toArray(A=[],t=0){let e=this.elements;return A[t]=e[0],A[t+1]=e[1],A[t+2]=e[2],A[t+3]=e[3],A[t+4]=e[4],A[t+5]=e[5],A[t+6]=e[6],A[t+7]=e[7],A[t+8]=e[8],A}clone(){return new this.constructor().fromArray(this.elements)}};Bf.prototype.isMatrix3=!0;var QA=Bf,Eu=new QA,Bm=new QA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new QA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function av(){let i={enabled:!0,workingColorSpace:So,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===mt&&(n.r=mi(n.r),n.g=mi(n.g),n.b=mi(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===mt&&(n.r=vs(n.r),n.g=vs(n.g),n.b=vs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xi?Mo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(n,r)}},A=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],e=[.3127,.329];return i.define({[So]:{primaries:A,whitePoint:e,transfer:Mo,toXYZ:Bm,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:A,whitePoint:e,transfer:mt,toXYZ:Bm,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var lt=av();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,Il=class{static getDataURL(A,t="image/png"){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement=="undefined")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{as===void 0&&(as=wo("canvas")),as.width=A.width,as.height=A.height;let n=as.getContext("2d");A instanceof ImageData?n.putImageData(A,0,0):n.drawImage(A,0,0,A.width,A.height),e=as}return e.toDataURL(t)}static sRGBToLinear(A){if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let t=wo("canvas");t.width=A.width,t.height=A.height;let e=t.getContext("2d");e.drawImage(A,0,0,A.width,A.height);let n=e.getImageData(0,0,A.width,A.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=mi(r[s]/255)*255;return e.putImageData(n,0,0),t}else if(A.data){let t=A.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(mi(t[e]/255)*255):t[e]=mi(t[e]);return{data:t,width:A.width,height:A.height}}else return HA("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}},lv=0,Ss=class{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=jo(),this.data=A,this.dataReady=!0,this.version=0}getSize(A){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?A.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?A.set(t.displayWidth,t.displayHeight,0):t!==null?A.set(t.width,t.height,t.depth||0):A.set(0,0,0),A}set needsUpdate(A){A===!0&&this.version++}toJSON(A){let t=A===void 0||typeof A=="string";if(!t&&A.images[this.uuid]!==void 0)return A.images[this.uuid];let e={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(Cu(n[s].image)):r.push(Cu(n[s]))}else r=Cu(n);e.url=r}return t||(A.images[this.uuid]=e),e}};function Cu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(HA("Texture: Unable to serialize Texture."),{})}var cv=0,Pu=new F,Ze=class i extends Yn{constructor(A=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,e=Xn,n=Xn,r=pe,s=ji,o=bn,a=un,l=i.DEFAULT_ANISOTROPY,c=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=jo(),this.name="",this.source=new Ss(A),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=e,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new GA(0,0),this.repeat=new GA(1,1),this.center=new GA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new QA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(A&&A.depth&&A.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(A,t){this.updateRanges.push({start:A,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.normalized=A.normalized,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.renderTarget=A.renderTarget,this.isRenderTargetTexture=A.isRenderTargetTexture,this.isArrayTexture=A.isArrayTexture,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}setValues(A){for(let t in A){let e=A[t];if(e===void 0){HA(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){HA(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&e&&n.isVector2&&e.isVector2||n&&e&&n.isVector3&&e.isVector3||n&&e&&n.isMatrix3&&e.isMatrix3?n.copy(e):this[t]=e}}toJSON(A){let t=A===void 0||typeof A=="string";if(!t&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];let e={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),t||(A.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==gf)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case El:A.x=A.x-Math.floor(A.x);break;case Xn:A.x=A.x<0?0:1;break;case Cl:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case El:A.y=A.y-Math.floor(A.y);break;case Xn:A.y=A.y<0?0:1;break;case Cl:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gf;Ze.DEFAULT_ANISOTROPY=1;var Uf=class Uf{constructor(A=0,t=0,e=0,n=1){this.x=A,this.y=t,this.z=e,this.w=n}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,t,e,n){return this.x=A,this.y=t,this.z=e,this.w=n,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,t){switch(A){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,t){return this.x=A.x+t.x,this.y=A.y+t.y,this.z=A.z+t.z,this.w=A.w+t.w,this}addScaledVector(A,t){return this.x+=A.x*t,this.y+=A.y*t,this.z+=A.z*t,this.w+=A.w*t,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,t){return this.x=A.x-t.x,this.y=A.y-t.y,this.z=A.z-t.z,this.w=A.w-t.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){let t=this.x,e=this.y,n=this.z,r=this.w,s=A.elements;return this.x=s[0]*t+s[4]*e+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*e+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*e+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*e+s[11]*n+s[15]*r,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);let t=Math.sqrt(1-A.w*A.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/t,this.y=A.y/t,this.z=A.z/t),this}setAxisAngleFromRotationMatrix(A){let t,e,n,r,a=A.elements,l=a[0],c=a[4],f=a[8],h=a[1],u=a[5],d=a[9],g=a[2],p=a[6],m=a[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(d-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(d+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(u+1)/2,y=(m+1)/2,E=(c+h)/4,b=(f+g)/4,_=(d+p)/4;return M>v&&M>y?M<.01?(e=0,n=.707106781,r=.707106781):(e=Math.sqrt(M),n=E/e,r=b/e):v>y?v<.01?(e=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),e=E/n,r=_/n):y<.01?(e=.707106781,n=.707106781,r=0):(r=Math.sqrt(y),e=b/r,n=_/r),this.set(e,n,r,t),this}let S=Math.sqrt((p-d)*(p-d)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(S)<.001&&(S=1),this.x=(p-d)/S,this.y=(f-g)/S,this.z=(h-c)/S,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(A){let t=A.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,t){return this.x=at(this.x,A.x,t.x),this.y=at(this.y,A.y,t.y),this.z=at(this.z,A.z,t.z),this.w=at(this.w,A.w,t.w),this}clampScalar(A,t){return this.x=at(this.x,A,t),this.y=at(this.y,A,t),this.z=at(this.z,A,t),this.w=at(this.w,A,t),this}clampLength(A,t){let e=this.length();return this.divideScalar(e||1).multiplyScalar(at(e,A,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,t){return this.x+=(A.x-this.x)*t,this.y+=(A.y-this.y)*t,this.z+=(A.z-this.z)*t,this.w+=(A.w-this.w)*t,this}lerpVectors(A,t,e){return this.x=A.x+(t.x-A.x)*e,this.y=A.y+(t.y-A.y)*e,this.z=A.z+(t.z-A.z)*e,this.w=A.w+(t.w-A.w)*e,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,t=0){return this.x=A[t],this.y=A[t+1],this.z=A[t+2],this.w=A[t+3],this}toArray(A=[],t=0){return A[t]=this.x,A[t+1]=this.y,A[t+2]=this.z,A[t+3]=this.w,A}fromBufferAttribute(A,t){return this.x=A.getX(t),this.y=A.getY(t),this.z=A.getZ(t),this.w=A.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uf.prototype.isVector4=!0;var Ft=Uf,Dl=class extends Yn{constructor(A=1,t=1,e={}){super(),e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},e),this.isRenderTarget=!0,this.width=A,this.height=t,this.depth=e.depth,this.scissor=new Ft(0,0,A,t),this.scissorTest=!1,this.viewport=new Ft(0,0,A,t),this.textures=[];let n={width:A,height:t,depth:e.depth},r=new Ze(n),s=e.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(e),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=e.depthTexture,this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture}_setTextureOptions(A={}){let t={minFilter:pe,generateMipmaps:!1,flipY:!1,internalFormat:null};A.mapping!==void 0&&(t.mapping=A.mapping),A.wrapS!==void 0&&(t.wrapS=A.wrapS),A.wrapT!==void 0&&(t.wrapT=A.wrapT),A.wrapR!==void 0&&(t.wrapR=A.wrapR),A.magFilter!==void 0&&(t.magFilter=A.magFilter),A.minFilter!==void 0&&(t.minFilter=A.minFilter),A.format!==void 0&&(t.format=A.format),A.type!==void 0&&(t.type=A.type),A.anisotropy!==void 0&&(t.anisotropy=A.anisotropy),A.colorSpace!==void 0&&(t.colorSpace=A.colorSpace),A.flipY!==void 0&&(t.flipY=A.flipY),A.generateMipmaps!==void 0&&(t.generateMipmaps=A.generateMipmaps),A.internalFormat!==void 0&&(t.internalFormat=A.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}set depthTexture(A){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),A!==null&&(A.renderTarget=this),this._depthTexture=A}get depthTexture(){return this._depthTexture}setSize(A,t,e=1){if(this.width!==A||this.height!==t||this.depth!==e){this.width=A,this.height=t,this.depth=e;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=A,this.textures[n].image.height=t,this.textures[n].image.depth=e,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,A,t),this.scissor.set(0,0,A,t)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let t=0,e=A.textures.length;t<e;t++){this.textures[t]=A.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},A.textures[t].image);this.textures[t].source=new Ss(n)}return this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this.multiview=A.multiview,this.useArrayDepthTexture=A.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Dl{constructor(A=1,t=1,e={}){super(A,t,e),this.isWebGLRenderTarget=!0}},To=class extends Ze{constructor(A=null,t=1,e=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:t,height:e,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ll=class extends Ze{constructor(A=null,t=1,e=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:t,height:e,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class sc{constructor(A,t,e,n,r,s,o,a,l,c,f,h,u,d,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,t,e,n,r,s,o,a,l,c,f,h,u,d,g,p)}set(A,t,e,n,r,s,o,a,l,c,f,h,u,d,g,p){let m=this.elements;return m[0]=A,m[4]=t,m[8]=e,m[12]=n,m[1]=r,m[5]=s,m[9]=o,m[13]=a,m[2]=l,m[6]=c,m[10]=f,m[14]=h,m[3]=u,m[7]=d,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(A){let t=this.elements,e=A.elements;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],this}copyPosition(A){let t=this.elements,e=A.elements;return t[12]=e[12],t[13]=e[13],t[14]=e[14],this}setFromMatrix3(A){let t=A.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(A,t,e){return this.determinantAffine()===0?(A.set(1,0,0),t.set(0,1,0),e.set(0,0,1),this):(A.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this)}makeBasis(A,t,e){return this.set(A.x,t.x,e.x,0,A.y,t.y,e.y,0,A.z,t.z,e.z,0,0,0,0,1),this}extractRotation(A){if(A.determinantAffine()===0)return this.identity();let t=this.elements,e=A.elements,n=1/ls.setFromMatrixColumn(A,0).length(),r=1/ls.setFromMatrixColumn(A,1).length(),s=1/ls.setFromMatrixColumn(A,2).length();return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=0,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=0,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(A){let t=this.elements,e=A.x,n=A.y,r=A.z,s=Math.cos(e),o=Math.sin(e),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),f=Math.sin(r);if(A.order==="XYZ"){let h=s*c,u=s*f,d=o*c,g=o*f;t[0]=a*c,t[4]=-a*f,t[8]=l,t[1]=u+d*l,t[5]=h-g*l,t[9]=-o*a,t[2]=g-h*l,t[6]=d+u*l,t[10]=s*a}else if(A.order==="YXZ"){let h=a*c,u=a*f,d=l*c,g=l*f;t[0]=h+g*o,t[4]=d*o-u,t[8]=s*l,t[1]=s*f,t[5]=s*c,t[9]=-o,t[2]=u*o-d,t[6]=g+h*o,t[10]=s*a}else if(A.order==="ZXY"){let h=a*c,u=a*f,d=l*c,g=l*f;t[0]=h-g*o,t[4]=-s*f,t[8]=d+u*o,t[1]=u+d*o,t[5]=s*c,t[9]=g-h*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(A.order==="ZYX"){let h=s*c,u=s*f,d=o*c,g=o*f;t[0]=a*c,t[4]=d*l-u,t[8]=h*l+g,t[1]=a*f,t[5]=g*l+h,t[9]=u*l-d,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(A.order==="YZX"){let h=s*a,u=s*l,d=o*a,g=o*l;t[0]=a*c,t[4]=g-h*f,t[8]=d*f+u,t[1]=f,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*f+d,t[10]=h-g*f}else if(A.order==="XZY"){let h=s*a,u=s*l,d=o*a,g=o*l;t[0]=a*c,t[4]=-f,t[8]=l*c,t[1]=h*f+g,t[5]=s*c,t[9]=u*f-d,t[2]=d*f-u,t[6]=o*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(A){return this.compose(hv,A,uv)}lookAt(A,t,e){let n=this.elements;return rn.subVectors(A,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Oi.crossVectors(e,rn),Oi.lengthSq()===0&&(Math.abs(e.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Oi.crossVectors(e,rn)),Oi.normalize(),Ja.crossVectors(rn,Oi),n[0]=Oi.x,n[4]=Ja.x,n[8]=rn.x,n[1]=Oi.y,n[5]=Ja.y,n[9]=rn.y,n[2]=Oi.z,n[6]=Ja.z,n[10]=rn.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,t){let e=A.elements,n=t.elements,r=this.elements,s=e[0],o=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],u=e[13],d=e[2],g=e[6],p=e[10],m=e[14],S=e[3],M=e[7],v=e[11],y=e[15],E=n[0],b=n[4],_=n[8],w=n[12],C=n[1],I=n[5],D=n[9],W=n[13],k=n[2],U=n[6],H=n[10],L=n[14],V=n[3],$=n[7],R=n[11],tA=n[15];return r[0]=s*E+o*C+a*k+l*V,r[4]=s*b+o*I+a*U+l*$,r[8]=s*_+o*D+a*H+l*R,r[12]=s*w+o*W+a*L+l*tA,r[1]=c*E+f*C+h*k+u*V,r[5]=c*b+f*I+h*U+u*$,r[9]=c*_+f*D+h*H+u*R,r[13]=c*w+f*W+h*L+u*tA,r[2]=d*E+g*C+p*k+m*V,r[6]=d*b+g*I+p*U+m*$,r[10]=d*_+g*D+p*H+m*R,r[14]=d*w+g*W+p*L+m*tA,r[3]=S*E+M*C+v*k+y*V,r[7]=S*b+M*I+v*U+y*$,r[11]=S*_+M*D+v*H+y*R,r[15]=S*w+M*W+v*L+y*tA,this}multiplyScalar(A){let t=this.elements;return t[0]*=A,t[4]*=A,t[8]*=A,t[12]*=A,t[1]*=A,t[5]*=A,t[9]*=A,t[13]*=A,t[2]*=A,t[6]*=A,t[10]*=A,t[14]*=A,t[3]*=A,t[7]*=A,t[11]*=A,t[15]*=A,this}determinant(){let A=this.elements,t=A[0],e=A[4],n=A[8],r=A[12],s=A[1],o=A[5],a=A[9],l=A[13],c=A[2],f=A[6],h=A[10],u=A[14],d=A[3],g=A[7],p=A[11],m=A[15],S=a*u-l*h,M=o*u-l*f,v=o*h-a*f,y=s*u-l*c,E=s*h-a*c,b=s*f-o*c;return t*(g*S-p*M+m*v)-e*(d*S-p*y+m*E)+n*(d*M-g*y+m*b)-r*(d*v-g*E+p*b)}determinantAffine(){let A=this.elements,t=A[0],e=A[4],n=A[8],r=A[1],s=A[5],o=A[9],a=A[2],l=A[6],c=A[10];return t*(s*c-o*l)-e*(r*c-o*a)+n*(r*l-s*a)}transpose(){let A=this.elements,t;return t=A[1],A[1]=A[4],A[4]=t,t=A[2],A[2]=A[8],A[8]=t,t=A[6],A[6]=A[9],A[9]=t,t=A[3],A[3]=A[12],A[12]=t,t=A[7],A[7]=A[13],A[13]=t,t=A[11],A[11]=A[14],A[14]=t,this}setPosition(A,t,e){let n=this.elements;return A.isVector3?(n[12]=A.x,n[13]=A.y,n[14]=A.z):(n[12]=A,n[13]=t,n[14]=e),this}invert(){let A=this.elements,t=A[0],e=A[1],n=A[2],r=A[3],s=A[4],o=A[5],a=A[6],l=A[7],c=A[8],f=A[9],h=A[10],u=A[11],d=A[12],g=A[13],p=A[14],m=A[15],S=t*o-e*s,M=t*a-n*s,v=t*l-r*s,y=e*a-n*o,E=e*l-r*o,b=n*l-r*a,_=c*g-f*d,w=c*p-h*d,C=c*m-u*d,I=f*p-h*g,D=f*m-u*g,W=h*m-u*p,k=S*W-M*D+v*I+y*C-E*w+b*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/k;return A[0]=(o*W-a*D+l*I)*U,A[1]=(n*D-e*W-r*I)*U,A[2]=(g*b-p*E+m*y)*U,A[3]=(h*E-f*b-u*y)*U,A[4]=(a*C-s*W-l*w)*U,A[5]=(t*W-n*C+r*w)*U,A[6]=(p*v-d*b-m*M)*U,A[7]=(c*b-h*v+u*M)*U,A[8]=(s*D-o*C+l*_)*U,A[9]=(e*C-t*D-r*_)*U,A[10]=(d*E-g*v+m*S)*U,A[11]=(f*v-c*E-u*S)*U,A[12]=(o*w-s*I-a*_)*U,A[13]=(t*I-e*w+n*_)*U,A[14]=(g*M-d*y-p*S)*U,A[15]=(c*y-f*M+h*S)*U,this}scale(A){let t=this.elements,e=A.x,n=A.y,r=A.z;return t[0]*=e,t[4]*=n,t[8]*=r,t[1]*=e,t[5]*=n,t[9]*=r,t[2]*=e,t[6]*=n,t[10]*=r,t[3]*=e,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let A=this.elements,t=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],e=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],n=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(t,e,n))}makeTranslation(A,t,e){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,t,0,0,1,e,0,0,0,1),this}makeRotationX(A){let t=Math.cos(A),e=Math.sin(A);return this.set(1,0,0,0,0,t,-e,0,0,e,t,0,0,0,0,1),this}makeRotationY(A){let t=Math.cos(A),e=Math.sin(A);return this.set(t,0,e,0,0,1,0,0,-e,0,t,0,0,0,0,1),this}makeRotationZ(A){let t=Math.cos(A),e=Math.sin(A);return this.set(t,-e,0,0,e,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,t){let e=Math.cos(t),n=Math.sin(t),r=1-e,s=A.x,o=A.y,a=A.z,l=r*s,c=r*o;return this.set(l*s+e,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+e,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+e,0,0,0,0,1),this}makeScale(A,t,e){return this.set(A,0,0,0,0,t,0,0,0,0,e,0,0,0,0,1),this}makeShear(A,t,e,n,r,s){return this.set(1,e,r,0,A,1,s,0,t,n,1,0,0,0,0,1),this}compose(A,t,e){let n=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,l=r+r,c=s+s,f=o+o,h=r*l,u=r*c,d=r*f,g=s*c,p=s*f,m=o*f,S=a*l,M=a*c,v=a*f,y=e.x,E=e.y,b=e.z;return n[0]=(1-(g+m))*y,n[1]=(u+v)*y,n[2]=(d-M)*y,n[3]=0,n[4]=(u-v)*E,n[5]=(1-(h+m))*E,n[6]=(p+S)*E,n[7]=0,n[8]=(d+M)*b,n[9]=(p-S)*b,n[10]=(1-(h+g))*b,n[11]=0,n[12]=A.x,n[13]=A.y,n[14]=A.z,n[15]=1,this}decompose(A,t,e){let n=this.elements;A.x=n[12],A.y=n[13],A.z=n[14];let r=this.determinantAffine();if(r===0)return e.set(1,1,1),t.identity(),this;let s=ls.set(n[0],n[1],n[2]).length(),o=ls.set(n[4],n[5],n[6]).length(),a=ls.set(n[8],n[9],n[10]).length();r<0&&(s=-s),Cn.copy(this);let l=1/s,c=1/o,f=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),e.x=s,e.y=o,e.z=a,this}makePerspective(A,t,e,n,r,s,o=In,a=!1){let l=this.elements,c=2*r/(t-A),f=2*r/(e-n),h=(t+A)/(t-A),u=(e+n)/(e-n),d,g;if(a)d=r/(s-r),g=s*r/(s-r);else if(o===In)d=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===bo)d=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(A,t,e,n,r,s,o=In,a=!1){let l=this.elements,c=2/(t-A),f=2/(e-n),h=-(t+A)/(t-A),u=-(e+n)/(e-n),d,g;if(a)d=1/(s-r),g=s/(s-r);else if(o===In)d=-2/(s-r),g=-(s+r)/(s-r);else if(o===bo)d=-1/(s-r),g=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(A){let t=this.elements,e=A.elements;for(let n=0;n<16;n++)if(t[n]!==e[n])return!1;return!0}fromArray(A,t=0){for(let e=0;e<16;e++)this.elements[e]=A[e+t];return this}toArray(A=[],t=0){let e=this.elements;return A[t]=e[0],A[t+1]=e[1],A[t+2]=e[2],A[t+3]=e[3],A[t+4]=e[4],A[t+5]=e[5],A[t+6]=e[6],A[t+7]=e[7],A[t+8]=e[8],A[t+9]=e[9],A[t+10]=e[10],A[t+11]=e[11],A[t+12]=e[12],A[t+13]=e[13],A[t+14]=e[14],A[t+15]=e[15],A}};sc.prototype.isMatrix4=!0;var Ut=sc,ls=new F,Cn=new Ut,hv=new F(0,0,0),uv=new F(1,1,1),Oi=new F,Ja=new F,rn=new F,Fm=new Ut,Om=new Zn,qi=class i{constructor(A=0,t=0,e=0,n=i.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=t,this._z=e,this._order=n}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,t,e,n=this._order){return this._x=A,this._y=t,this._z=e,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,t=this._order,e=!0){let n=A.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],f=n[2],h=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,u),this._y=0);break;default:HA("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,e===!0&&this._onChangeCallback(),this}setFromQuaternion(A,t,e){return Fm.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Fm,t,e)}setFromVector3(A,t=this._order){return this.set(A.x,A.y,A.z,t)}reorder(A){return Om.setFromEuler(this),this.setFromQuaternion(Om,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],t=0){return A[t]=this._x,A[t+1]=this._y,A[t+2]=this._z,A[t+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}},fv=0,zm=new F,cs=new Zn,ci=new Ut,$a=new F,po=new F,dv=new F,pv=new Zn,Hm=new F(1,0,0),km=new F(0,1,0),Vm=new F(0,0,1),Gm={type:"added"},mv={type:"removed"},hs={type:"childadded",child:null},Ru={type:"childremoved",child:null},cn=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let A=new F,t=new qi,e=new Zn,n=new F(1,1,1);function r(){e.setFromEuler(t,!1)}function s(){t.setFromQuaternion(e,void 0,!1)}t._onChange(r),e._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ut},normalMatrix:{value:new QA}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,t){this.quaternion.setFromAxisAngle(A,t)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,t){return cs.setFromAxisAngle(A,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(A,t){return cs.setFromAxisAngle(A,t),this.quaternion.premultiply(cs),this}rotateX(A){return this.rotateOnAxis(Hm,A)}rotateY(A){return this.rotateOnAxis(km,A)}rotateZ(A){return this.rotateOnAxis(Vm,A)}translateOnAxis(A,t){return zm.copy(A).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(A){return this.translateOnAxis(Hm,A)}translateY(A){return this.translateOnAxis(km,A)}translateZ(A){return this.translateOnAxis(Vm,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(A,t,e){A.isVector3?$a.copy(A):$a.set(A,t,e);let n=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(po,$a,this.up):ci.lookAt($a,po,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),cs.setFromRotationMatrix(ci),this.quaternion.premultiply(cs.invert()))}add(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return A===this?(qA("Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Gm),hs.child=A,this.dispatchEvent(hs),hs.child=null):qA("Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(A);return t!==-1&&(A.parent=null,this.children.splice(t,1),A.dispatchEvent(mv),Ru.child=A,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),ci.multiply(A.parent.matrixWorld)),A.applyMatrix4(ci),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Gm),hs.child=A,this.dispatchEvent(hs),hs.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,t){if(this[A]===t)return this;for(let e=0,n=this.children.length;e<n;e++){let s=this.children[e].getObjectByProperty(A,t);if(s!==void 0)return s}}getObjectsByProperty(A,t,e=[]){this[A]===t&&e.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(A,t,e);return e}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,A,dv),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,pv,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return A.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(A){A(this);let t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);let t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].traverseVisible(A)}traverseAncestors(A){let t=this.parent;t!==null&&(A(t),t.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let A=this.pivot;if(A!==null){let t=A.x,e=A.y,n=A.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*e-r[8]*n,r[13]+=e-r[1]*t-r[5]*e-r[9]*n,r[14]+=n-r[2]*t-r[6]*e-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);let t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].updateMatrixWorld(A)}updateWorldMatrix(A,t,e=!1){let n=this.parent;if(A===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,e)}}toJSON(A){let t=A===void 0||typeof A=="string",e={};t&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(A),n.indirectTexture=this._indirectTexture.toJSON(A),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(A)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(A.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let f=a[l];r(A.shapes,f)}else r(A.shapes,a)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(A.materials,this.material[a]));n.material=o}else n.material=r(A.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(A).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(A.animations,a))}}if(t){let o=s(A.geometries),a=s(A.materials),l=s(A.textures),c=s(A.images),f=s(A.shapes),h=s(A.skeletons),u=s(A.animations),d=s(A.nodes);o.length>0&&(e.geometries=o),a.length>0&&(e.materials=a),l.length>0&&(e.textures=l),c.length>0&&(e.images=c),f.length>0&&(e.shapes=f),h.length>0&&(e.skeletons=h),u.length>0&&(e.animations=u),d.length>0&&(e.nodes=d)}return e.object=n,e;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(A){return new this.constructor().copy(this,A)}copy(A,t=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.pivot=A.pivot!==null?A.pivot.clone():null,this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.static=A.static,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),t===!0)for(let e=0;e<A.children.length;e++){let n=A.children[e];this.add(n.clone())}return this}};cn.DEFAULT_UP=new F(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gv={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){let t=this._hand;if(t)for(let e of A.hand.values())this._getHandJoint(t,e)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,t,e){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(A&&t.session.visibilityState!=="visible-blurred"){if(l&&A.hand){s=!0;for(let g of A.hand.values()){let p=t.getJointPose(g,e),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=c.position.distanceTo(f.position),u=.02,d=.005;l.inputState.pinching&&h>u+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&h<=u-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else a!==null&&A.gripSpace&&(r=t.getPose(A.gripSpace,e),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:A,target:this})));o!==null&&(n=t.getPose(A.targetRaySpace,e),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return o!==null&&(o.visible=n!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(A,t){if(A.joints[t.jointName]===void 0){let e=new pi;e.matrixAutoUpdate=!1,e.visible=!1,A.joints[t.jointName]=e,A.add(e)}return A.joints[t.jointName]}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Iu(i,A,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(A-i)*6*t:t<1/2?A:t<2/3?i+(A-i)*6*(2/3-t):i}var At=class{constructor(A,t,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,t,e)}set(A,t,e){if(t===void 0&&e===void 0){let n=A;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(A,t,e);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,t=on){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(A,t,e,n=lt.workingColorSpace){return this.r=A,this.g=t,this.b=e,lt.colorSpaceToWorking(this,n),this}setHSL(A,t,e,n=lt.workingColorSpace){if(A=ov(A,1),t=at(t,0,1),e=at(e,0,1),t===0)this.r=this.g=this.b=e;else{let r=e<=.5?e*(1+t):e+t-e*t,s=2*e-r;this.r=Iu(s,r,A+1/3),this.g=Iu(s,r,A),this.b=Iu(s,r,A-1/3)}return lt.colorSpaceToWorking(this,n),this}setStyle(A,t=on){function e(r){r!==void 0&&parseFloat(r)<1&&HA("Color: Alpha component of "+A+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(A)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:HA("Color: Unknown color model "+A)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(A)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);HA("Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,t);return this}setColorName(A,t=on){let e=Og[A.toLowerCase()];return e!==void 0?this.setHex(e,t):HA("Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=mi(A.r),this.g=mi(A.g),this.b=mi(A.b),this}copyLinearToSRGB(A){return this.r=vs(A.r),this.g=vs(A.g),this.b=vs(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=on){return lt.workingToColorSpace(Ee.copy(this),A),Math.round(at(Ee.r*255,0,255))*65536+Math.round(at(Ee.g*255,0,255))*256+Math.round(at(Ee.b*255,0,255))}getHexString(A=on){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,t=lt.workingColorSpace){lt.workingToColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,r=Ee.b,s=Math.max(e,n,r),o=Math.min(e,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let f=s-o;switch(l=c<=.5?f/(s+o):f/(2-s-o),s){case e:a=(n-r)/f+(n<r?6:0);break;case n:a=(r-e)/f+2;break;case r:a=(e-n)/f+4;break}a/=6}return A.h=a,A.s=l,A.l=c,A}getRGB(A,t=lt.workingColorSpace){return lt.workingToColorSpace(Ee.copy(this),t),A.r=Ee.r,A.g=Ee.g,A.b=Ee.b,A}getStyle(A=on){lt.workingToColorSpace(Ee.copy(this),A);let t=Ee.r,e=Ee.g,n=Ee.b;return A!==on?`color(${A} ${t.toFixed(3)} ${e.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(e*255)},${Math.round(n*255)})`}offsetHSL(A,t,e){return this.getHSL(zi),this.setHSL(zi.h+A,zi.s+t,zi.l+e)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,t){return this.r=A.r+t.r,this.g=A.g+t.g,this.b=A.b+t.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,t){return this.r+=(A.r-this.r)*t,this.g+=(A.g-this.g)*t,this.b+=(A.b-this.b)*t,this}lerpColors(A,t,e){return this.r=A.r+(t.r-A.r)*e,this.g=A.g+(t.g-A.g)*e,this.b=A.b+(t.b-A.b)*e,this}lerpHSL(A,t){this.getHSL(zi),A.getHSL(Ka);let e=wu(zi.h,Ka.h,t),n=wu(zi.s,Ka.s,t),r=wu(zi.l,Ka.l,t);return this.setHSL(e,n,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){let t=this.r,e=this.g,n=this.b,r=A.elements;return this.r=r[0]*t+r[3]*e+r[6]*n,this.g=r[1]*t+r[4]*e+r[7]*n,this.b=r[2]*t+r[5]*e+r[8]*n,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,t=0){return this.r=A[t],this.g=A[t+1],this.b=A[t+2],this}toArray(A=[],t=0){return A[t]=this.r,A[t+1]=this.g,A[t+2]=this.b,A}fromBufferAttribute(A,t){return this.r=A.getX(t),this.g=A.getY(t),this.b=A.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new At;At.NAMES=Og;var Co=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,t){return super.copy(A,t),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){let t=super.toJSON(A);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new F,hi=new F,Du=new F,ui=new F,us=new F,fs=new F,Wm=new F,Lu=new F,Nu=new F,Bu=new F,Uu=new Ft,Fu=new Ft,Ou=new Ft,Wi=class i{constructor(A=new F,t=new F,e=new F){this.a=A,this.b=t,this.c=e}static getNormal(A,t,e,n){n.subVectors(e,t),Pn.subVectors(A,t),n.cross(Pn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(A,t,e,n,r){Pn.subVectors(n,t),hi.subVectors(e,t),Du.subVectors(A,t);let s=Pn.dot(Pn),o=Pn.dot(hi),a=Pn.dot(Du),l=hi.dot(hi),c=hi.dot(Du),f=s*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(l*a-o*c)*h,d=(s*c-o*a)*h;return r.set(1-u-d,d,u)}static containsPoint(A,t,e,n){return this.getBarycoord(A,t,e,n,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(A,t,e,n,r,s,o,a){return this.getBarycoord(A,t,e,n,ui)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,ui.x),a.addScaledVector(s,ui.y),a.addScaledVector(o,ui.z),a)}static getInterpolatedAttribute(A,t,e,n,r,s){return Uu.setScalar(0),Fu.setScalar(0),Ou.setScalar(0),Uu.fromBufferAttribute(A,t),Fu.fromBufferAttribute(A,e),Ou.fromBufferAttribute(A,n),s.setScalar(0),s.addScaledVector(Uu,r.x),s.addScaledVector(Fu,r.y),s.addScaledVector(Ou,r.z),s}static isFrontFacing(A,t,e,n){return Pn.subVectors(e,t),hi.subVectors(A,t),Pn.cross(hi).dot(n)<0}set(A,t,e){return this.a.copy(A),this.b.copy(t),this.c.copy(e),this}setFromPointsAndIndices(A,t,e,n){return this.a.copy(A[t]),this.b.copy(A[e]),this.c.copy(A[n]),this}setFromAttributeAndIndices(A,t,e,n){return this.a.fromBufferAttribute(A,t),this.b.fromBufferAttribute(A,e),this.c.fromBufferAttribute(A,n),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Pn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Pn.cross(hi).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return i.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,t){return i.getBarycoord(A,this.a,this.b,this.c,t)}getInterpolation(A,t,e,n,r){return i.getInterpolation(A,this.a,this.b,this.c,t,e,n,r)}containsPoint(A){return i.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return i.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,t){let e=this.a,n=this.b,r=this.c,s,o;us.subVectors(n,e),fs.subVectors(r,e),Lu.subVectors(A,e);let a=us.dot(Lu),l=fs.dot(Lu);if(a<=0&&l<=0)return t.copy(e);Nu.subVectors(A,n);let c=us.dot(Nu),f=fs.dot(Nu);if(c>=0&&f<=c)return t.copy(n);let h=a*f-c*l;if(h<=0&&a>=0&&c<=0)return s=a/(a-c),t.copy(e).addScaledVector(us,s);Bu.subVectors(A,r);let u=us.dot(Bu),d=fs.dot(Bu);if(d>=0&&u<=d)return t.copy(r);let g=u*l-a*d;if(g<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(e).addScaledVector(fs,o);let p=c*d-u*f;if(p<=0&&f-c>=0&&u-d>=0)return Wm.subVectors(r,n),o=(f-c)/(f-c+(u-d)),t.copy(n).addScaledVector(Wm,o);let m=1/(p+g+h);return s=g*m,o=h*m,t.copy(e).addScaledVector(us,s).addScaledVector(fs,o)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}},Yi=class{constructor(A=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=t}set(A,t){return this.min.copy(A),this.max.copy(t),this}setFromArray(A){this.makeEmpty();for(let t=0,e=A.length;t<e;t+=3)this.expandByPoint(Rn.fromArray(A,t));return this}setFromBufferAttribute(A){this.makeEmpty();for(let t=0,e=A.count;t<e;t++)this.expandByPoint(Rn.fromBufferAttribute(A,t));return this}setFromPoints(A){this.makeEmpty();for(let t=0,e=A.length;t<e;t++)this.expandByPoint(A[t]);return this}setFromCenterAndSize(A,t){let e=Rn.copy(t).multiplyScalar(.5);return this.min.copy(A).sub(e),this.max.copy(A).add(e),this}setFromObject(A,t=!1){return this.makeEmpty(),this.expandByObject(A,t)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,t=!1){A.updateWorldMatrix(!1,!1);let e=A.geometry;if(e!==void 0){let r=e.getAttribute("position");if(t===!0&&r!==void 0&&A.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)A.isMesh===!0?A.getVertexPosition(s,Rn):Rn.fromBufferAttribute(r,s),Rn.applyMatrix4(A.matrixWorld),this.expandByPoint(Rn);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),Qa.copy(A.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)),Qa.applyMatrix4(A.matrixWorld),this.union(Qa)}let n=A.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,t){return t.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Rn),Rn.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let t,e;return A.normal.x>0?(t=A.normal.x*this.min.x,e=A.normal.x*this.max.x):(t=A.normal.x*this.max.x,e=A.normal.x*this.min.x),A.normal.y>0?(t+=A.normal.y*this.min.y,e+=A.normal.y*this.max.y):(t+=A.normal.y*this.max.y,e+=A.normal.y*this.min.y),A.normal.z>0?(t+=A.normal.z*this.min.z,e+=A.normal.z*this.max.z):(t+=A.normal.z*this.max.z,e+=A.normal.z*this.min.z),t<=-A.constant&&e>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(mo),ja.subVectors(this.max,mo),ds.subVectors(A.a,mo),ps.subVectors(A.b,mo),ms.subVectors(A.c,mo),Hi.subVectors(ps,ds),ki.subVectors(ms,ps),Sr.subVectors(ds,ms);let t=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-Sr.z,Sr.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,Sr.z,0,-Sr.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-Sr.y,Sr.x,0];return!zu(t,ds,ps,ms,ja)||(t=[1,0,0,0,1,0,0,0,1],!zu(t,ds,ps,ms,ja))?!1:(Al.crossVectors(Hi,ki),t=[Al.x,Al.y,Al.z],zu(t,ds,ps,ms,ja))}clampPoint(A,t){return t.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Rn).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Rn).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(fi),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(A){return this.min.fromArray(A.min),this.max.fromArray(A.max),this}},fi=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,Qa=new Yi,ds=new F,ps=new F,ms=new F,Hi=new F,ki=new F,Sr=new F,mo=new F,ja=new F,Al=new F,Mr=new F;function zu(i,A,t,e,n){for(let r=0,s=i.length-3;r<=s;r+=3){Mr.fromArray(i,r);let o=n.x*Math.abs(Mr.x)+n.y*Math.abs(Mr.y)+n.z*Math.abs(Mr.z),a=A.dot(Mr),l=t.dot(Mr),c=e.dot(Mr);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}var jt=new F,tl=new GA,_v=0,an=class extends Yn{constructor(A,t,e=!1){if(super(),Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=A,this.itemSize=t,this.count=A!==void 0?A.length/t:0,this.normalized=e,this.usage=tf,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,t){this.updateRanges.push({start:A,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,t,e){A*=this.itemSize,e*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[A+n]=t.array[e+n];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let t=0,e=this.count;t<e;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(A),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,e=this.count;t<e;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(A),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(A){for(let t=0,e=this.count;t<e;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(A),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(A){for(let t=0,e=this.count;t<e;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(A),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(A){for(let t=0,e=this.count;t<e;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(A),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(A,t=0){return this.array.set(A,t),this}getComponent(A,t){let e=this.array[A*this.itemSize+t];return this.normalized&&(e=fo(e,this.array)),e}setComponent(A,t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[A*this.itemSize+t]=e,this}getX(A){let t=this.array[A*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(A,t){return this.normalized&&(t=Ye(t,this.array)),this.array[A*this.itemSize]=t,this}getY(A){let t=this.array[A*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(A,t){return this.normalized&&(t=Ye(t,this.array)),this.array[A*this.itemSize+1]=t,this}getZ(A){let t=this.array[A*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(A,t){return this.normalized&&(t=Ye(t,this.array)),this.array[A*this.itemSize+2]=t,this}getW(A){let t=this.array[A*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(A,t){return this.normalized&&(t=Ye(t,this.array)),this.array[A*this.itemSize+3]=t,this}setXY(A,t,e){return A*=this.itemSize,this.normalized&&(t=Ye(t,this.array),e=Ye(e,this.array)),this.array[A+0]=t,this.array[A+1]=e,this}setXYZ(A,t,e,n){return A*=this.itemSize,this.normalized&&(t=Ye(t,this.array),e=Ye(e,this.array),n=Ye(n,this.array)),this.array[A+0]=t,this.array[A+1]=e,this.array[A+2]=n,this}setXYZW(A,t,e,n,r){return A*=this.itemSize,this.normalized&&(t=Ye(t,this.array),e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[A+0]=t,this.array[A+1]=e,this.array[A+2]=n,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==tf&&(A.usage=this.usage),A}dispose(){this.dispatchEvent({type:"dispose"})}};var Po=class extends an{constructor(A,t,e){super(new Uint16Array(A),t,e)}};var Ro=class extends an{constructor(A,t,e){super(new Uint32Array(A),t,e)}};var Wt=class extends an{constructor(A,t,e){super(new Float32Array(A),t,e)}},xv=new Yi,go=new F,Hu=new F,Rr=class{constructor(A=new F,t=-1){this.isSphere=!0,this.center=A,this.radius=t}set(A,t){return this.center.copy(A),this.radius=t,this}setFromPoints(A,t){let e=this.center;t!==void 0?e.copy(t):xv.setFromPoints(A).getCenter(e);let n=0;for(let r=0,s=A.length;r<s;r++)n=Math.max(n,e.distanceToSquared(A[r]));return this.radius=Math.sqrt(n),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){let t=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=t*t}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,t){let e=this.center.distanceToSquared(A);return t.copy(A),e>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;go.subVectors(A,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(go,n/e),this.radius+=n}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Hu.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(go.copy(A.center).add(Hu)),this.expandByPoint(go.copy(A.center).sub(Hu))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(A){return this.radius=A.radius,this.center.fromArray(A.center),this}},vv=0,Sn=new Ut,ku=new cn,gs=new F,sn=new Yi,_o=new Yi,le=new F,ke=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(rv(A)?Ro:Po)(A,1):this.index=A,this}setIndirect(A,t=0){return this.indirect=A,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,t){return this.attributes[A]=t,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,t,e=0){this.groups.push({start:A,count:t,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(A,t){this.drawRange.start=A,this.drawRange.count=t}applyMatrix4(A){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(A),t.needsUpdate=!0);let e=this.attributes.normal;if(e!==void 0){let r=new QA().getNormalMatrix(A);e.applyNormalMatrix(r),e.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(A),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(A){return Sn.makeRotationFromQuaternion(A),this.applyMatrix4(Sn),this}rotateX(A){return Sn.makeRotationX(A),this.applyMatrix4(Sn),this}rotateY(A){return Sn.makeRotationY(A),this.applyMatrix4(Sn),this}rotateZ(A){return Sn.makeRotationZ(A),this.applyMatrix4(Sn),this}translate(A,t,e){return Sn.makeTranslation(A,t,e),this.applyMatrix4(Sn),this}scale(A,t,e){return Sn.makeScale(A,t,e),this.applyMatrix4(Sn),this}lookAt(A){return ku.lookAt(A),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(A){let t=this.getAttribute("position");if(t===void 0){let e=[];for(let n=0,r=A.length;n<r;n++){let s=A[n];e.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Wt(e,3))}else{let e=Math.min(A.length,t.count);for(let n=0;n<e;n++){let r=A[n];t.setXYZ(n,r.x,r.y,r.z||0)}A.length>t.count&&HA("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let A=this.attributes.position,t=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){qA("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),t)for(let e=0,n=t.length;e<n;e++){let r=t[e];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qA('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);let A=this.attributes.position,t=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){qA("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(A){let e=this.boundingSphere.center;if(sn.setFromBufferAttribute(A),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(sn.min,_o.min),sn.expandByPoint(le),le.addVectors(sn.max,_o.max),sn.expandByPoint(le)):(sn.expandByPoint(_o.min),sn.expandByPoint(_o.max))}sn.getCenter(e);let n=0;for(let r=0,s=A.count;r<s;r++)le.fromBufferAttribute(A,r),n=Math.max(n,e.distanceToSquared(le));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)le.fromBufferAttribute(o,l),a&&(gs.fromBufferAttribute(A,l),le.add(gs)),n=Math.max(n,e.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qA('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let A=this.index,t=this.attributes;if(A===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qA("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let e=t.position,n=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==e.count)&&(s=new an(new Float32Array(4*e.count),4),this.setAttribute("tangent",s));let o=[],a=[];for(let _=0;_<e.count;_++)o[_]=new F,a[_]=new F;let l=new F,c=new F,f=new F,h=new GA,u=new GA,d=new GA,g=new F,p=new F;function m(_,w,C){l.fromBufferAttribute(e,_),c.fromBufferAttribute(e,w),f.fromBufferAttribute(e,C),h.fromBufferAttribute(r,_),u.fromBufferAttribute(r,w),d.fromBufferAttribute(r,C),c.sub(l),f.sub(l),u.sub(h),d.sub(h);let I=1/(u.x*d.y-d.x*u.y);isFinite(I)&&(g.copy(c).multiplyScalar(d.y).addScaledVector(f,-u.y).multiplyScalar(I),p.copy(f).multiplyScalar(u.x).addScaledVector(c,-d.x).multiplyScalar(I),o[_].add(g),o[w].add(g),o[C].add(g),a[_].add(p),a[w].add(p),a[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:A.count}]);for(let _=0,w=S.length;_<w;++_){let C=S[_],I=C.start,D=C.count;for(let W=I,k=I+D;W<k;W+=3)m(A.getX(W+0),A.getX(W+1),A.getX(W+2))}let M=new F,v=new F,y=new F,E=new F;function b(_){y.fromBufferAttribute(n,_),E.copy(y);let w=o[_];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),v.crossVectors(E,w);let I=v.dot(a[_])<0?-1:1;s.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,w=S.length;_<w;++_){let C=S[_],I=C.start,D=C.count;for(let W=I,k=I+D;W<k;W+=3)b(A.getX(W+0)),b(A.getX(W+1)),b(A.getX(W+2))}this._transformed=!0}computeVertexNormals(){let A=this.index,t=this.getAttribute("position");if(t!==void 0){let e=this.getAttribute("normal");if(e===void 0||e.count!==t.count)e=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",e);else for(let h=0,u=e.count;h<u;h++)e.setXYZ(h,0,0,0);let n=new F,r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F;if(A)for(let h=0,u=A.count;h<u;h+=3){let d=A.getX(h+0),g=A.getX(h+1),p=A.getX(h+2);n.fromBufferAttribute(t,d),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),c.subVectors(s,r),f.subVectors(n,r),c.cross(f),o.fromBufferAttribute(e,d),a.fromBufferAttribute(e,g),l.fromBufferAttribute(e,p),o.add(c),a.add(c),l.add(c),e.setXYZ(d,o.x,o.y,o.z),e.setXYZ(g,a.x,a.y,a.z),e.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),c.subVectors(s,r),f.subVectors(n,r),c.cross(f),e.setXYZ(h+0,c.x,c.y,c.z),e.setXYZ(h+1,c.x,c.y,c.z),e.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){let A=this.attributes.normal;for(let t=0,e=A.count;t<e;t++)le.fromBufferAttribute(A,t),le.normalize(),A.setXYZ(t,le.x,le.y,le.z)}toNonIndexed(){function A(o,a){let l=o.array,c=o.itemSize,f=o.normalized,h=new l.constructor(a.length*c),u=0,d=0;for(let g=0,p=a.length;g<p;g++){o.isInterleavedBufferAttribute?u=a[g]*o.data.stride+o.offset:u=a[g]*c;for(let m=0;m<c;m++)h[d++]=l[u++]}return new an(h,c,f)}if(this.index===null)return HA("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,e=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=A(a,e);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,f=l.length;c<f;c++){let h=l[c],u=A(h,e);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let A={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(A[l]=a[l]);return A}A.data={attributes:{}};let t=this.index;t!==null&&(A.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let e=this.attributes;for(let a in e){let l=e[a];A.data.attributes[a]=l.toJSON(A.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let f=0,h=l.length;f<h;f++){let u=l[f];c.push(u.toJSON(A.data))}c.length>0&&(n[a]=c,r=!0)}r&&(A.data.morphAttributes=n,A.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(A.data.boundingSphere=o.toJSON()),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=A.name;let e=A.index;e!==null&&this.setIndex(e.clone());let n=A.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=A.morphAttributes;for(let l in r){let c=[],f=r[l];for(let h=0,u=f.length;h<u;h++)c.push(f[h].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=A.morphTargetsRelative;let s=A.groups;for(let l=0,c=s.length;l<c;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=A.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=A.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this._transformed=A._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yv=0,Zi=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Cr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(let t in A){let e=A[t];if(e===void 0){HA(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){HA(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(e):n&&n.isVector2&&e&&e.isVector2||n&&n.isEuler&&e&&e.isEuler||n&&n.isVector3&&e&&e.isVector3?n.copy(e):this[t]=e}}toJSON(A){let t=A===void 0||typeof A=="string";t&&(A={textures:{},images:{}});let e={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(e.sheenColorMap=this.sheenColorMap.toJSON(A).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(e.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(A).uuid),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(A).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(A).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(A).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(A).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(A).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(e.blending=this.blending),this.side!==gi&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==_l&&(e.blendSrc=this.blendSrc),this.blendDst!==xl&&(e.blendDst=this.blendDst),this.blendEquation!==Xi&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(e.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.allowOverride===!1&&(e.allowOverride=!1),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(A.textures),s=n(A.images);r.length>0&&(e.textures=r),s.length>0&&(e.images=s)}return e}fromJSON(A,t){if(A.uuid!==void 0&&(this.uuid=A.uuid),A.name!==void 0&&(this.name=A.name),A.color!==void 0&&this.color!==void 0&&this.color.setHex(A.color),A.roughness!==void 0&&(this.roughness=A.roughness),A.metalness!==void 0&&(this.metalness=A.metalness),A.sheen!==void 0&&(this.sheen=A.sheen),A.sheenColor!==void 0&&(this.sheenColor=new At().setHex(A.sheenColor)),A.sheenRoughness!==void 0&&(this.sheenRoughness=A.sheenRoughness),A.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(A.emissive),A.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(A.specular),A.specularIntensity!==void 0&&(this.specularIntensity=A.specularIntensity),A.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(A.specularColor),A.shininess!==void 0&&(this.shininess=A.shininess),A.clearcoat!==void 0&&(this.clearcoat=A.clearcoat),A.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=A.clearcoatRoughness),A.dispersion!==void 0&&(this.dispersion=A.dispersion),A.iridescence!==void 0&&(this.iridescence=A.iridescence),A.iridescenceIOR!==void 0&&(this.iridescenceIOR=A.iridescenceIOR),A.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=A.iridescenceThicknessRange),A.transmission!==void 0&&(this.transmission=A.transmission),A.thickness!==void 0&&(this.thickness=A.thickness),A.attenuationDistance!==void 0&&(this.attenuationDistance=A.attenuationDistance),A.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(A.attenuationColor),A.anisotropy!==void 0&&(this.anisotropy=A.anisotropy),A.anisotropyRotation!==void 0&&(this.anisotropyRotation=A.anisotropyRotation),A.fog!==void 0&&(this.fog=A.fog),A.flatShading!==void 0&&(this.flatShading=A.flatShading),A.blending!==void 0&&(this.blending=A.blending),A.combine!==void 0&&(this.combine=A.combine),A.side!==void 0&&(this.side=A.side),A.shadowSide!==void 0&&(this.shadowSide=A.shadowSide),A.opacity!==void 0&&(this.opacity=A.opacity),A.transparent!==void 0&&(this.transparent=A.transparent),A.alphaTest!==void 0&&(this.alphaTest=A.alphaTest),A.alphaHash!==void 0&&(this.alphaHash=A.alphaHash),A.depthFunc!==void 0&&(this.depthFunc=A.depthFunc),A.depthTest!==void 0&&(this.depthTest=A.depthTest),A.depthWrite!==void 0&&(this.depthWrite=A.depthWrite),A.colorWrite!==void 0&&(this.colorWrite=A.colorWrite),A.blendSrc!==void 0&&(this.blendSrc=A.blendSrc),A.blendDst!==void 0&&(this.blendDst=A.blendDst),A.blendEquation!==void 0&&(this.blendEquation=A.blendEquation),A.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=A.blendSrcAlpha),A.blendDstAlpha!==void 0&&(this.blendDstAlpha=A.blendDstAlpha),A.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=A.blendEquationAlpha),A.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(A.blendColor),A.blendAlpha!==void 0&&(this.blendAlpha=A.blendAlpha),A.stencilWriteMask!==void 0&&(this.stencilWriteMask=A.stencilWriteMask),A.stencilFunc!==void 0&&(this.stencilFunc=A.stencilFunc),A.stencilRef!==void 0&&(this.stencilRef=A.stencilRef),A.stencilFuncMask!==void 0&&(this.stencilFuncMask=A.stencilFuncMask),A.stencilFail!==void 0&&(this.stencilFail=A.stencilFail),A.stencilZFail!==void 0&&(this.stencilZFail=A.stencilZFail),A.stencilZPass!==void 0&&(this.stencilZPass=A.stencilZPass),A.stencilWrite!==void 0&&(this.stencilWrite=A.stencilWrite),A.wireframe!==void 0&&(this.wireframe=A.wireframe),A.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=A.wireframeLinewidth),A.wireframeLinecap!==void 0&&(this.wireframeLinecap=A.wireframeLinecap),A.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=A.wireframeLinejoin),A.rotation!==void 0&&(this.rotation=A.rotation),A.linewidth!==void 0&&(this.linewidth=A.linewidth),A.dashSize!==void 0&&(this.dashSize=A.dashSize),A.gapSize!==void 0&&(this.gapSize=A.gapSize),A.scale!==void 0&&(this.scale=A.scale),A.polygonOffset!==void 0&&(this.polygonOffset=A.polygonOffset),A.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=A.polygonOffsetFactor),A.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=A.polygonOffsetUnits),A.dithering!==void 0&&(this.dithering=A.dithering),A.alphaToCoverage!==void 0&&(this.alphaToCoverage=A.alphaToCoverage),A.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=A.premultipliedAlpha),A.forceSinglePass!==void 0&&(this.forceSinglePass=A.forceSinglePass),A.allowOverride!==void 0&&(this.allowOverride=A.allowOverride),A.visible!==void 0&&(this.visible=A.visible),A.toneMapped!==void 0&&(this.toneMapped=A.toneMapped),A.userData!==void 0&&(this.userData=A.userData),A.vertexColors!==void 0&&(typeof A.vertexColors=="number"?this.vertexColors=A.vertexColors>0:this.vertexColors=A.vertexColors),A.size!==void 0&&(this.size=A.size),A.sizeAttenuation!==void 0&&(this.sizeAttenuation=A.sizeAttenuation),A.map!==void 0&&(this.map=t[A.map]||null),A.matcap!==void 0&&(this.matcap=t[A.matcap]||null),A.alphaMap!==void 0&&(this.alphaMap=t[A.alphaMap]||null),A.bumpMap!==void 0&&(this.bumpMap=t[A.bumpMap]||null),A.bumpScale!==void 0&&(this.bumpScale=A.bumpScale),A.normalMap!==void 0&&(this.normalMap=t[A.normalMap]||null),A.normalMapType!==void 0&&(this.normalMapType=A.normalMapType),A.normalScale!==void 0){let e=A.normalScale;Array.isArray(e)===!1&&(e=[e,e]),this.normalScale=new GA().fromArray(e)}return A.displacementMap!==void 0&&(this.displacementMap=t[A.displacementMap]||null),A.displacementScale!==void 0&&(this.displacementScale=A.displacementScale),A.displacementBias!==void 0&&(this.displacementBias=A.displacementBias),A.roughnessMap!==void 0&&(this.roughnessMap=t[A.roughnessMap]||null),A.metalnessMap!==void 0&&(this.metalnessMap=t[A.metalnessMap]||null),A.emissiveMap!==void 0&&(this.emissiveMap=t[A.emissiveMap]||null),A.emissiveIntensity!==void 0&&(this.emissiveIntensity=A.emissiveIntensity),A.specularMap!==void 0&&(this.specularMap=t[A.specularMap]||null),A.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[A.specularIntensityMap]||null),A.specularColorMap!==void 0&&(this.specularColorMap=t[A.specularColorMap]||null),A.envMap!==void 0&&(this.envMap=t[A.envMap]||null),A.envMapRotation!==void 0&&this.envMapRotation.fromArray(A.envMapRotation),A.envMapIntensity!==void 0&&(this.envMapIntensity=A.envMapIntensity),A.reflectivity!==void 0&&(this.reflectivity=A.reflectivity),A.refractionRatio!==void 0&&(this.refractionRatio=A.refractionRatio),A.lightMap!==void 0&&(this.lightMap=t[A.lightMap]||null),A.lightMapIntensity!==void 0&&(this.lightMapIntensity=A.lightMapIntensity),A.aoMap!==void 0&&(this.aoMap=t[A.aoMap]||null),A.aoMapIntensity!==void 0&&(this.aoMapIntensity=A.aoMapIntensity),A.gradientMap!==void 0&&(this.gradientMap=t[A.gradientMap]||null),A.clearcoatMap!==void 0&&(this.clearcoatMap=t[A.clearcoatMap]||null),A.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[A.clearcoatRoughnessMap]||null),A.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[A.clearcoatNormalMap]||null),A.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new GA().fromArray(A.clearcoatNormalScale)),A.iridescenceMap!==void 0&&(this.iridescenceMap=t[A.iridescenceMap]||null),A.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[A.iridescenceThicknessMap]||null),A.transmissionMap!==void 0&&(this.transmissionMap=t[A.transmissionMap]||null),A.thicknessMap!==void 0&&(this.thicknessMap=t[A.thicknessMap]||null),A.anisotropyMap!==void 0&&(this.anisotropyMap=t[A.anisotropyMap]||null),A.sheenColorMap!==void 0&&(this.sheenColorMap=t[A.sheenColorMap]||null),A.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[A.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;let t=A.clippingPlanes,e=null;if(t!==null){let n=t.length;e=new Array(n);for(let r=0;r!==n;++r)e[r]=t[r].clone()}return this.clippingPlanes=e,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.allowOverride=A.allowOverride,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}};var di=new F,Vu=new F,el=new F,Vi=new F,Gu=new F,nl=new F,Wu=new F,Io=class{constructor(A=new F,t=new F(0,0,-1)){this.origin=A,this.direction=t}set(A,t){return this.origin.copy(A),this.direction.copy(t),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,t){return t.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,di)),this}closestPointToPoint(A,t){t.subVectors(A,this.origin);let e=t.dot(this.direction);return e<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){let t=di.subVectors(A,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(A):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(A))}distanceSqToSegment(A,t,e,n){Vu.copy(A).add(t).multiplyScalar(.5),el.copy(t).sub(A).normalize(),Vi.copy(this.origin).sub(Vu);let r=A.distanceTo(t)*.5,s=-this.direction.dot(el),o=Vi.dot(this.direction),a=-Vi.dot(el),l=Vi.lengthSq(),c=Math.abs(1-s*s),f,h,u,d;if(c>0)if(f=s*a-o,h=s*o-a,d=r*c,f>=0)if(h>=-d)if(h<=d){let g=1/c;f*=g,h*=g,u=f*(f+s*h+2*o)+h*(s*f+h+2*a)+l}else h=r,f=Math.max(0,-(s*h+o)),u=-f*f+h*(h+2*a)+l;else h=-r,f=Math.max(0,-(s*h+o)),u=-f*f+h*(h+2*a)+l;else h<=-d?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-a),r),u=-f*f+h*(h+2*a)+l):h<=d?(f=0,h=Math.min(Math.max(-r,-a),r),u=h*(h+2*a)+l):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-a),r),u=-f*f+h*(h+2*a)+l);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),u=-f*f+h*(h+2*a)+l;return e&&e.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Vu).addScaledVector(el,h),u}intersectSphere(A,t){di.subVectors(A.center,this.origin);let e=di.dot(this.direction),n=di.dot(di)-e*e,r=A.radius*A.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=e-s,a=e+s;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(A){return A.radius<0?!1:this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){let t=A.normal.dot(this.direction);if(t===0)return A.distanceToPoint(this.origin)===0?0:null;let e=-(this.origin.dot(A.normal)+A.constant)/t;return e>=0?e:null}intersectPlane(A,t){let e=this.distanceToPlane(A);return e===null?null:this.at(e,t)}intersectsPlane(A){let t=A.distanceToPoint(this.origin);return t===0||A.normal.dot(this.direction)*t<0}intersectBox(A,t){let e,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(e=(A.min.x-h.x)*l,n=(A.max.x-h.x)*l):(e=(A.max.x-h.x)*l,n=(A.min.x-h.x)*l),c>=0?(r=(A.min.y-h.y)*c,s=(A.max.y-h.y)*c):(r=(A.max.y-h.y)*c,s=(A.min.y-h.y)*c),e>s||r>n||((r>e||isNaN(e))&&(e=r),(s<n||isNaN(n))&&(n=s),f>=0?(o=(A.min.z-h.z)*f,a=(A.max.z-h.z)*f):(o=(A.max.z-h.z)*f,a=(A.min.z-h.z)*f),e>a||o>n)||((o>e||e!==e)&&(e=o),(a<n||n!==n)&&(n=a),n<0)?null:this.at(e>=0?e:n,t)}intersectsBox(A){return this.intersectBox(A,di)!==null}intersectTriangle(A,t,e,n,r){Gu.subVectors(t,A),nl.subVectors(e,A),Wu.crossVectors(Gu,nl);let s=this.direction.dot(Wu),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Vi.subVectors(this.origin,A);let a=o*this.direction.dot(nl.crossVectors(Vi,nl));if(a<0)return null;let l=o*this.direction.dot(Gu.cross(Vi));if(l<0||a+l>s)return null;let c=-o*Vi.dot(Wu);return c<0?null:this.at(c/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Do=class extends Zi{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}},Xm=new Ut,br=new Io,il=new Rr,qm=new F,rl=new F,sl=new F,ol=new F,Xu=new F,al=new F,Ym=new F,ll=new F,Pe=class extends cn{constructor(A=new ke,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(A,t){return super.copy(A,t),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(A,t){let e=this.geometry,n=e.attributes.position,r=e.morphAttributes.position,s=e.morphTargetsRelative;t.fromBufferAttribute(n,A);let o=this.morphTargetInfluences;if(r&&o){al.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],f=r[a];c!==0&&(Xu.fromBufferAttribute(f,A),s?al.addScaledVector(Xu,c):al.addScaledVector(Xu.sub(t),c))}t.add(al)}return t}raycast(A,t){let e=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),il.copy(e.boundingSphere),il.applyMatrix4(r),br.copy(A.ray).recast(A.near),!(il.containsPoint(br.origin)===!1&&(br.intersectSphere(il,qm)===null||br.origin.distanceToSquared(qm)>(A.far-A.near)**2))&&(Xm.copy(r).invert(),br.copy(A.ray).applyMatrix4(Xm),!(e.boundingBox!==null&&br.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(A,t,br)))}_computeIntersections(A,t,e){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){let p=h[d],m=s[p.materialIndex],S=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let v=S,y=M;v<y;v+=3){let E=o.getX(v),b=o.getX(v+1),_=o.getX(v+2);n=cl(this,m,A,e,l,c,f,E,b,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let d=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){let S=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);n=cl(this,s,A,e,l,c,f,S,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){let p=h[d],m=s[p.materialIndex],S=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=S,y=M;v<y;v+=3){let E=v,b=v+1,_=v+2;n=cl(this,m,A,e,l,c,f,E,b,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let d=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){let S=p,M=p+1,v=p+2;n=cl(this,s,A,e,l,c,f,S,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function Sv(i,A,t,e,n,r,s,o){let a;if(A.side===me?a=e.intersectTriangle(s,r,n,!0,o):a=e.intersectTriangle(n,r,s,A.side===gi,o),a===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ll);return l<t.near||l>t.far?null:{distance:l,point:ll.clone(),object:i}}function cl(i,A,t,e,n,r,s,o,a,l){i.getVertexPosition(o,rl),i.getVertexPosition(a,sl),i.getVertexPosition(l,ol);let c=Sv(i,A,t,e,rl,sl,ol,Ym);if(c){let f=new F;Wi.getBarycoord(Ym,rl,sl,ol,f),n&&(c.uv=Wi.getInterpolatedAttribute(n,o,a,l,f,new GA)),r&&(c.uv1=Wi.getInterpolatedAttribute(r,o,a,l,f,new GA)),s&&(c.normal=Wi.getInterpolatedAttribute(s,o,a,l,f,new F),c.normal.dot(e.direction)>0&&c.normal.multiplyScalar(-1));let h={a:o,b:a,c:l,normal:new F,materialIndex:0};Wi.getNormal(rl,sl,ol,h.normal),c.face=h,c.barycoord=f}return c}var Nl=class extends Ze{constructor(A=null,t=1,e=1,n,r,s,o,a,l=ce,c=ce,f,h){super(null,s,o,a,l,c,n,r,f,h),this.isDataTexture=!0,this.image={data:A,width:t,height:e},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qu=new F,Mv=new F,bv=new QA,Wn=class{constructor(A=new F(1,0,0),t=0){this.isPlane=!0,this.normal=A,this.constant=t}set(A,t){return this.normal.copy(A),this.constant=t,this}setComponents(A,t,e,n){return this.normal.set(A,t,e),this.constant=n,this}setFromNormalAndCoplanarPoint(A,t){return this.normal.copy(A),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(A,t,e){let n=qu.subVectors(e,t).cross(Mv.subVectors(A,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){let A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,t){return t.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,t,e=!0){let n=A.delta(qu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(A.start)===0?t.copy(A.start):null;let s=-(A.start.dot(this.normal)+this.constant)/r;return e===!0&&(s<0||s>1)?null:t.copy(A.start).addScaledVector(n,s)}intersectsLine(A){let t=this.distanceToPoint(A.start),e=this.distanceToPoint(A.end);return t<0&&e>0||e<0&&t>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,t){let e=t||bv.getNormalMatrix(A),n=this.coplanarPoint(qu).applyMatrix4(A),r=this.normal.applyMatrix3(e).normalize();return this.constant=-n.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}},wr=new Rr,wv=new GA(.5,.5),hl=new F,Lo=class{constructor(A=new Wn,t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn){this.planes=[A,t,e,n,r,s]}set(A,t,e,n,r,s){let o=this.planes;return o[0].copy(A),o[1].copy(t),o[2].copy(e),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(A){let t=this.planes;for(let e=0;e<6;e++)t[e].copy(A.planes[e]);return this}setFromProjectionMatrix(A,t=In,e=!1){let n=this.planes,r=A.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],u=r[7],d=r[8],g=r[9],p=r[10],m=r[11],S=r[12],M=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,u-c,m-d,y-S).normalize(),n[1].setComponents(l+s,u+c,m+d,y+S).normalize(),n[2].setComponents(l+o,u+f,m+g,y+M).normalize(),n[3].setComponents(l-o,u-f,m-g,y-M).normalize(),e)n[4].setComponents(a,h,p,v).normalize(),n[5].setComponents(l-a,u-h,m-p,y-v).normalize();else if(n[4].setComponents(l-a,u-h,m-p,y-v).normalize(),t===In)n[5].setComponents(l+a,u+h,m+p,y+v).normalize();else if(t===bo)n[5].setComponents(a,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),wr.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{let t=A.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(A){wr.center.set(0,0,0);let t=wv.distanceTo(A.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(A.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(A){let t=this.planes,e=A.center,n=-A.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<n)return!1;return!0}intersectsBox(A){let t=this.planes;for(let e=0;e<6;e++){let n=t[e];if(hl.x=n.normal.x>0?A.max.x:A.min.x,hl.y=n.normal.y>0?A.max.y:A.min.y,hl.z=n.normal.z>0?A.max.z:A.min.z,n.distanceToPoint(hl)<0)return!1}return!0}containsPoint(A){let t=this.planes;for(let e=0;e<6;e++)if(t[e].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bl=class extends Zi{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}},Zm=new Ut,ef=new Io,ul=new Rr,fl=new F,No=class extends cn{constructor(A=new ke,t=new Bl){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(A,t){return super.copy(A,t),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,t){let e=this.geometry,n=this.matrixWorld,r=A.params.Points.threshold,s=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),ul.copy(e.boundingSphere),ul.applyMatrix4(n),ul.radius+=r,A.ray.intersectsSphere(ul)===!1)return;Zm.copy(n).invert(),ef.copy(A.ray).applyMatrix4(Zm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=e.index,f=e.attributes.position;if(l!==null){let h=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);for(let d=h,g=u;d<g;d++){let p=l.getX(d);fl.fromBufferAttribute(f,p),Jm(fl,p,a,n,A,t,this)}}else{let h=Math.max(0,s.start),u=Math.min(f.count,s.start+s.count);for(let d=h,g=u;d<g;d++)fl.fromBufferAttribute(f,d),Jm(fl,d,a,n,A,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jm(i,A,t,e,n,r,s){let o=ef.distanceSqToPoint(i);if(o<t){let a=new F;ef.closestPointToPoint(i,a),a.applyMatrix4(e);let l=n.ray.origin.distanceTo(a);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:A,face:null,faceIndex:null,barycoord:null,object:s})}}var Bo=class extends Ze{constructor(A=[],t=Qi,e,n,r,s,o,a,l,c){super(A,t,e,n,r,s,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}};var _i=class extends Ze{constructor(A,t,e=Ln,n,r,s,o=ce,a=ce,l,c=qn,f=1){if(c!==qn&&c!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:A,height:t,depth:f};super(h,n,r,s,o,a,c,e,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.source=new Ss(Object.assign({},A.image)),this.compareFunction=A.compareFunction,this}toJSON(A){let t=super.toJSON(A);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ul=class extends _i{constructor(A,t=Ln,e=Qi,n,r,s=ce,o=ce,a,l=qn){let c={width:A,height:A,depth:1},f=[c,c,c,c,c,c];super(A,A,t,e,n,r,s,o,a,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(A){this.image=A}},Uo=class extends Ze{constructor(A=null){super(),this.sourceTexture=A,this.isExternalTexture=!0}copy(A){return super.copy(A),this.sourceTexture=A.sourceTexture,this}},bs=class i extends ke{constructor(A=1,t=1,e=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:t,depth:e,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],f=[],h=0,u=0;d("z","y","x",-1,-1,e,t,A,s,r,0),d("z","y","x",1,-1,e,t,-A,s,r,1),d("x","z","y",1,1,A,e,t,n,s,2),d("x","z","y",1,-1,A,e,-t,n,s,3),d("x","y","z",1,-1,A,t,e,n,r,4),d("x","y","z",-1,-1,A,t,-e,n,r,5),this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(f,2));function d(g,p,m,S,M,v,y,E,b,_,w){let C=v/b,I=y/_,D=v/2,W=y/2,k=E/2,U=b+1,H=_+1,L=0,V=0,$=new F;for(let R=0;R<H;R++){let tA=R*I-W;for(let lA=0;lA<U;lA++){let LA=lA*C-D;$[g]=LA*S,$[p]=tA*M,$[m]=k,l.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=E>0?1:-1,c.push($.x,$.y,$.z),f.push(lA/b),f.push(1-R/_),L+=1}}for(let R=0;R<_;R++)for(let tA=0;tA<b;tA++){let lA=h+tA+U*R,LA=h+tA+U*(R+1),WA=h+(tA+1)+U*(R+1),kA=h+(tA+1)+U*R;a.push(lA,LA,kA),a.push(LA,WA,kA),V+=6}o.addGroup(u,V,w),u+=V,h+=L}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new i(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){HA("Curve: .getPoint() not implemented.")}getPointAt(A,t){let e=this.getUtoTmapping(A);return this.getPoint(e,t)}getPoints(A=5){let t=[];for(let e=0;e<=A;e++)t.push(this.getPoint(e/A));return t}getSpacedPoints(A=5){let t=[];for(let e=0;e<=A;e++)t.push(this.getPointAt(e/A));return t}getLength(){let A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],e,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=A;s++)e=this.getPoint(s/A),r+=e.distanceTo(n),t.push(r),n=e;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,t=null){let e=this.getLengths(),n=0,r=e.length,s;t?s=t:s=A*e[r-1];let o=0,a=r-1,l;for(;o<=a;)if(n=Math.floor(o+(a-o)/2),l=e[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,e[n]===s)return n/(r-1);let c=e[n],h=e[n+1]-c,u=(s-c)/h;return(n+u)/(r-1)}getTangent(A,t){let n=A-1e-4,r=A+1e-4;n<0&&(n=0),r>1&&(r=1);let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new GA:new F);return a.copy(o).sub(s).normalize(),a}getTangentAt(A,t){let e=this.getUtoTmapping(A);return this.getTangent(e,t)}computeFrenetFrames(A,t=!1){let e=new F,n=[],r=[],s=[],o=new F,a=new Ut;for(let u=0;u<=A;u++){let d=u/A;n[u]=this.getTangentAt(d,new F)}r[0]=new F,s[0]=new F;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),f=Math.abs(n[0].y),h=Math.abs(n[0].z);c<=l&&(l=c,e.set(1,0,0)),f<=l&&(l=f,e.set(0,1,0)),h<=l&&e.set(0,0,1),o.crossVectors(n[0],e).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=A;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(at(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(o,d))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(at(r[0].dot(r[A]),-1,1));u/=A,n[0].dot(o.crossVectors(r[0],r[A]))>0&&(u=-u);for(let d=1;d<=A;d++)r[d].applyMatrix4(a.makeRotationAxis(n[d],u*d)),s[d].crossVectors(n[d],r[d])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){let A={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}},Fo=class extends Mn{constructor(A=0,t=0,e=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=A,this.aY=t,this.xRadius=e,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(A,t=new GA){let e=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+A*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=a-this.aX,u=l-this.aY;a=h*c-u*f+this.aX,l=h*f+u*c+this.aY}return e.set(a,l)}copy(A){return super.copy(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}toJSON(){let A=super.toJSON();return A.aX=this.aX,A.aY=this.aY,A.xRadius=this.xRadius,A.yRadius=this.yRadius,A.aStartAngle=this.aStartAngle,A.aEndAngle=this.aEndAngle,A.aClockwise=this.aClockwise,A.aRotation=this.aRotation,A}fromJSON(A){return super.fromJSON(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}},Fl=class extends Fo{constructor(A,t,e,n,r,s){super(A,t,e,e,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Cf(){let i=0,A=0,t=0,e=0;function n(r,s,o,a){i=r,A=o,t=-3*r+3*s-2*o-a,e=2*r-2*s+o+a}return{initCatmullRom:function(r,s,o,a,l){n(s,o,l*(o-r),l*(a-s))},initNonuniformCatmullRom:function(r,s,o,a,l,c,f){let h=(s-r)/l-(o-r)/(l+c)+(o-s)/c,u=(o-s)/c-(a-s)/(c+f)+(a-o)/f;h*=c,u*=c,n(s,o,h,u)},calc:function(r){let s=r*r,o=s*r;return i+A*r+t*s+e*o}}}var $m=new F,Km=new F,Yu=new Cf,Zu=new Cf,Ju=new Cf,Ol=class extends Mn{constructor(A=[],t=!1,e="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=A,this.closed=t,this.curveType=e,this.tension=n}getPoint(A,t=new F){let e=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*A,o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let l,c;this.closed||o>0?l=n[(o-1)%r]:(Km.subVectors(n[0],n[1]).add(n[0]),l=Km);let f=n[o%r],h=n[(o+1)%r];if(this.closed||o+2<r?c=n[(o+2)%r]:($m.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=$m),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,d=Math.pow(l.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u),p=Math.pow(h.distanceToSquared(c),u);g<1e-4&&(g=1),d<1e-4&&(d=g),p<1e-4&&(p=g),Yu.initNonuniformCatmullRom(l.x,f.x,h.x,c.x,d,g,p),Zu.initNonuniformCatmullRom(l.y,f.y,h.y,c.y,d,g,p),Ju.initNonuniformCatmullRom(l.z,f.z,h.z,c.z,d,g,p)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(l.x,f.x,h.x,c.x,this.tension),Zu.initCatmullRom(l.y,f.y,h.y,c.y,this.tension),Ju.initCatmullRom(l.z,f.z,h.z,c.z,this.tension));return e.set(Yu.calc(a),Zu.calc(a),Ju.calc(a)),e}copy(A){super.copy(A),this.points=[];for(let t=0,e=A.points.length;t<e;t++){let n=A.points[t];this.points.push(n.clone())}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}toJSON(){let A=super.toJSON();A.points=[];for(let t=0,e=this.points.length;t<e;t++){let n=this.points[t];A.points.push(n.toArray())}return A.closed=this.closed,A.curveType=this.curveType,A.tension=this.tension,A}fromJSON(A){super.fromJSON(A),this.points=[];for(let t=0,e=A.points.length;t<e;t++){let n=A.points[t];this.points.push(new F().fromArray(n))}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}};function Qm(i,A,t,e,n){let r=(e-A)*.5,s=(n-t)*.5,o=i*i,a=i*o;return(2*t-2*e+r+s)*a+(-3*t+3*e-2*r-s)*o+r*i+t}function Tv(i,A){let t=1-i;return t*t*A}function Ev(i,A){return 2*(1-i)*i*A}function Cv(i,A){return i*i*A}function xo(i,A,t,e){return Tv(i,A)+Ev(i,t)+Cv(i,e)}function Pv(i,A){let t=1-i;return t*t*t*A}function Rv(i,A){let t=1-i;return 3*t*t*i*A}function Iv(i,A){return 3*(1-i)*i*i*A}function Dv(i,A){return i*i*i*A}function vo(i,A,t,e,n){return Pv(i,A)+Rv(i,t)+Iv(i,e)+Dv(i,n)}var zl=class extends Mn{constructor(A=new GA,t=new GA,e=new GA,n=new GA){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=A,this.v1=t,this.v2=e,this.v3=n}getPoint(A,t=new GA){let e=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return e.set(vo(A,n.x,r.x,s.x,o.x),vo(A,n.y,r.y,s.y,o.y)),e}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){let A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}},Hl=class extends Mn{constructor(A=new F,t=new F,e=new F,n=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=A,this.v1=t,this.v2=e,this.v3=n}getPoint(A,t=new F){let e=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return e.set(vo(A,n.x,r.x,s.x,o.x),vo(A,n.y,r.y,s.y,o.y),vo(A,n.z,r.z,s.z,o.z)),e}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){let A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}},kl=class extends Mn{constructor(A=new GA,t=new GA){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=A,this.v2=t}getPoint(A,t=new GA){let e=t;return A===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(A).add(this.v1)),e}getPointAt(A,t){return this.getPoint(A,t)}getTangent(A,t=new GA){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(A,t){return this.getTangent(A,t)}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){let A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}},Vl=class extends Mn{constructor(A=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=A,this.v2=t}getPoint(A,t=new F){let e=t;return A===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(A).add(this.v1)),e}getPointAt(A,t){return this.getPoint(A,t)}getTangent(A,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(A,t){return this.getTangent(A,t)}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){let A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}},Gl=class extends Mn{constructor(A=new GA,t=new GA,e=new GA){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=A,this.v1=t,this.v2=e}getPoint(A,t=new GA){let e=t,n=this.v0,r=this.v1,s=this.v2;return e.set(xo(A,n.x,r.x,s.x),xo(A,n.y,r.y,s.y)),e}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){let A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}},Ir=class extends Mn{constructor(A=new F,t=new F,e=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=A,this.v1=t,this.v2=e}getPoint(A,t=new F){let e=t,n=this.v0,r=this.v1,s=this.v2;return e.set(xo(A,n.x,r.x,s.x),xo(A,n.y,r.y,s.y),xo(A,n.z,r.z,s.z)),e}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){let A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}},Wl=class extends Mn{constructor(A=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=A}getPoint(A,t=new GA){let e=t,n=this.points,r=(n.length-1)*A,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],f=n[s>n.length-3?n.length-1:s+2];return e.set(Qm(o,a.x,l.x,c.x,f.x),Qm(o,a.y,l.y,c.y,f.y)),e}copy(A){super.copy(A),this.points=[];for(let t=0,e=A.points.length;t<e;t++){let n=A.points[t];this.points.push(n.clone())}return this}toJSON(){let A=super.toJSON();A.points=[];for(let t=0,e=this.points.length;t<e;t++){let n=this.points[t];A.points.push(n.toArray())}return A}fromJSON(A){super.fromJSON(A),this.points=[];for(let t=0,e=A.points.length;t<e;t++){let n=A.points[t];this.points.push(new GA().fromArray(n))}return this}},Lv=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Ol,CubicBezierCurve:zl,CubicBezierCurve3:Hl,EllipseCurve:Fo,LineCurve:kl,LineCurve3:Vl,QuadraticBezierCurve:Gl,QuadraticBezierCurve3:Ir,SplineCurve:Wl});var Oo=class i extends ke{constructor(A=1,t=1,e=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:t,widthSegments:e,heightSegments:n};let r=A/2,s=t/2,o=Math.floor(e),a=Math.floor(n),l=o+1,c=a+1,f=A/o,h=t/a,u=[],d=[],g=[],p=[];for(let m=0;m<c;m++){let S=m*h-s;for(let M=0;M<l;M++){let v=M*f-r;d.push(v,-S,0),g.push(0,0,1),p.push(M/o),p.push(1-m/a)}}for(let m=0;m<a;m++)for(let S=0;S<o;S++){let M=S+l*m,v=S+l*(m+1),y=S+1+l*(m+1),E=S+1+l*m;u.push(M,v,E),u.push(v,y,E)}this.setIndex(u),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(p,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new i(A.width,A.height,A.widthSegments,A.heightSegments)}};var ws=class i extends ke{constructor(A=1,t=32,e=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:t,heightSegments:e,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),e=Math.max(2,Math.floor(e));let a=Math.min(s+o,Math.PI),l=0,c=[],f=new F,h=new F,u=[],d=[],g=[],p=[];for(let m=0;m<=e;m++){let S=[],M=m/e,v=s+M*o,y=A*Math.cos(v),E=Math.sqrt(A*A-y*y),b=0;m===0&&s===0?b=.5/t:m===e&&a===Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=n+w*r;f.x=-E*Math.cos(C),f.y=y,f.z=E*Math.sin(C),d.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(w+b,1-M),S.push(l++)}c.push(S)}for(let m=0;m<e;m++)for(let S=0;S<t;S++){let M=c[m][S+1],v=c[m][S],y=c[m+1][S],E=c[m+1][S+1];(m!==0||s>0)&&u.push(M,v,E),(m!==e-1||a<Math.PI)&&u.push(v,y,E)}this.setIndex(u),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(p,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new i(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}};var zo=class i extends ke{constructor(A=new Ir(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,e=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:A,tubularSegments:t,radius:e,radialSegments:n,closed:r};let s=A.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new F,a=new F,l=new GA,c=new F,f=[],h=[],u=[],d=[];g(),this.setIndex(d),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),S(),m()}function p(M){c=A.getPointAt(M/t,c);let v=s.normals[M],y=s.binormals[M];for(let E=0;E<=n;E++){let b=E/n*Math.PI*2,_=Math.sin(b),w=-Math.cos(b);a.x=w*v.x+_*y.x,a.y=w*v.y+_*y.y,a.z=w*v.z+_*y.z,a.normalize(),h.push(a.x,a.y,a.z),o.x=c.x+e*a.x,o.y=c.y+e*a.y,o.z=c.z+e*a.z,f.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=t;M++)for(let v=1;v<=n;v++){let y=(n+1)*(M-1)+(v-1),E=(n+1)*M+(v-1),b=(n+1)*M+v,_=(n+1)*(M-1)+v;d.push(y,E,_),d.push(E,b,_)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=n;v++)l.x=M/t,l.y=v/n,u.push(l.x,l.y)}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}toJSON(){let A=super.toJSON();return A.path=this.parameters.path.toJSON(),A}static fromJSON(A){return new i(new Lv[A.path.type]().fromJSON(A.path),A.tubularSegments,A.radius,A.radialSegments,A.closed)}};function Lr(i){let A={};for(let t in i){A[t]={};for(let e in i[t]){let n=i[t][e];if(jm(n))n.isRenderTargetTexture?(HA("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[t][e]=null):A[t][e]=n.clone();else if(Array.isArray(n))if(jm(n[0])){let r=[];for(let s=0,o=n.length;s<o;s++)r[s]=n[s].clone();A[t][e]=r}else A[t][e]=n.slice();else A[t][e]=n}}return A}function Re(i){let A={};for(let t=0;t<i.length;t++){let e=Lr(i[t]);for(let n in e)A[n]=e[n]}return A}function jm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nv(i){let A=[];for(let t=0;t<i.length;t++)A.push(i[t].clone());return A}function Pf(i){let A=i.getRenderTarget();return A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:lt.workingColorSpace}var zg={clone:Lr,merge:Re},Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,he=class extends Zi{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Lr(A.uniforms),this.uniformsGroups=Nv(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this.defaultAttributeValues=Object.assign({},A.defaultAttributeValues),this.index0AttributeName=A.index0AttributeName,this.uniformsNeedUpdate=A.uniformsNeedUpdate,this}toJSON(A){let t=super.toJSON(A);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let e={};for(let n in this.extensions)this.extensions[n]===!0&&(e[n]=!0);return Object.keys(e).length>0&&(t.extensions=e),t}fromJSON(A,t){if(super.fromJSON(A,t),A.uniforms!==void 0)for(let e in A.uniforms){let n=A.uniforms[e];switch(this.uniforms[e]={},n.type){case"t":this.uniforms[e].value=t[n.value]||null;break;case"c":this.uniforms[e].value=new At().setHex(n.value);break;case"v2":this.uniforms[e].value=new GA().fromArray(n.value);break;case"v3":this.uniforms[e].value=new F().fromArray(n.value);break;case"v4":this.uniforms[e].value=new Ft().fromArray(n.value);break;case"m3":this.uniforms[e].value=new QA().fromArray(n.value);break;case"m4":this.uniforms[e].value=new Ut().fromArray(n.value);break;default:this.uniforms[e].value=n.value}}if(A.defines!==void 0&&(this.defines=A.defines),A.vertexShader!==void 0&&(this.vertexShader=A.vertexShader),A.fragmentShader!==void 0&&(this.fragmentShader=A.fragmentShader),A.glslVersion!==void 0&&(this.glslVersion=A.glslVersion),A.extensions!==void 0)for(let e in A.extensions)this.extensions[e]=A.extensions[e];return A.lights!==void 0&&(this.lights=A.lights),A.clipping!==void 0&&(this.clipping=A.clipping),this}},Xl=class extends he{constructor(A){super(A),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ql=class extends Zi{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}},Yl=class extends Zi{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}};function dl(i,A){return!i||i.constructor===A?i:typeof A.BYTES_PER_ELEMENT=="number"?new A(i):Array.prototype.slice.call(i)}var Ji=class{constructor(A,t,e,n){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(e),this.sampleValues=t,this.valueSize=e,this.settings=null,this.DefaultSettings_={}}evaluate(A){let t=this.parameterPositions,e=this._cachedIndex,n=t[e],r=t[e-1];e:{A:{let s;t:{n:if(!(A<n)){for(let o=e+2;;){if(n===void 0){if(A<r)break n;return e=t.length,this._cachedIndex=e,this.copySampleValue_(e-1)}if(e===o)break;if(r=n,n=t[++e],A<n)break A}s=t.length;break t}if(!(A>=r)){let o=t[1];A<o&&(e=2,r=o);for(let a=e-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(e===a)break;if(n=r,r=t[--e-1],A>=r)break A}s=e,e=0;break t}break e}for(;e<s;){let o=e+s>>>1;A<t[o]?s=o:e=o+1}if(n=t[e],r=t[e-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return e=t.length,this._cachedIndex=e,this.copySampleValue_(e-1)}this._cachedIndex=e,this.intervalChanged_(e,r,n)}return this.interpolate_(e,r,A,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){let t=this.resultBuffer,e=this.sampleValues,n=this.valueSize,r=A*n;for(let s=0;s!==n;++s)t[s]=e[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zl=class extends Ji{constructor(A,t,e,n){super(A,t,e,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(A,t,e){let n=this.parameterPositions,r=A-2,s=A+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Qu:r=A,o=2*t-e;break;case ju:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=A,o=e}if(a===void 0)switch(this.getSettings_().endingEnd){case Qu:s=A,a=2*e-t;break;case ju:s=1,a=e+n[1]-n[0];break;default:s=A-1,a=t}let l=(e-t)*.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-e),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(A,t,e,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=A*o,l=a-o,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,d=(e-t)/(n-t),g=d*d,p=g*d,m=-h*p+2*h*g-h*d,S=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*d+1,M=(-1-u)*p+(1.5+u)*g+.5*d,v=u*p-u*g;for(let y=0;y!==o;++y)r[y]=m*s[c+y]+S*s[l+y]+M*s[a+y]+v*s[f+y];return r}},Jl=class extends Ji{constructor(A,t,e,n){super(A,t,e,n)}interpolate_(A,t,e,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=A*o,l=a-o,c=(e-t)/(n-t),f=1-c;for(let h=0;h!==o;++h)r[h]=s[l+h]*f+s[a+h]*c;return r}},$l=class extends Ji{constructor(A,t,e,n){super(A,t,e,n)}interpolate_(A){return this.copySampleValue_(A-1)}},Kl=class extends Ji{interpolate_(A,t,e,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=A*o,l=a-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let d=(e-t)/(n-t),g=1-d;for(let p=0;p!==o;++p)r[p]=s[l+p]*g+s[a+p]*d;return r}let h=o*2,u=A-1;for(let d=0;d!==o;++d){let g=s[l+d],p=s[a+d],m=u*h+d*2,S=f[m],M=f[m+1],v=A*h+d*2,y=c[v],E=c[v+1],b=(e-t)/(n-t),_,w,C,I,D;for(let W=0;W<8;W++){_=b*b,w=_*b,C=1-b,I=C*C,D=I*C;let U=D*t+3*I*b*S+3*C*_*y+w*n-e;if(Math.abs(U)<1e-10)break;let H=3*I*(S-t)+6*C*b*(y-S)+3*_*(n-y);if(Math.abs(H)<1e-10)break;b=b-U/H,b=Math.max(0,Math.min(1,b))}r[d]=D*g+3*I*b*M+3*C*_*E+w*p}return r}},hn=class{constructor(A,t,e,n){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=dl(t,this.TimeBufferType),this.values=dl(e,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(A){let t=A.constructor,e;if(t.toJSON!==this.toJSON)e=t.toJSON(A);else{e={name:A.name,times:dl(A.times,Array),values:dl(A.values,Array)};let n=A.getInterpolation();n!==A.DefaultInterpolation&&(e.interpolation=n)}return e.type=A.ValueTypeName,e}InterpolantFactoryMethodDiscrete(A){return new $l(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new Jl(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new Zl(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodBezier(A){let t=new Kl(this.times,this.values,this.getValueSize(),A);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(A){let t;switch(A){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Pl:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case $u:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(e);return HA("KeyframeTrack:",e),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Pl;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return $u}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){let t=this.times;for(let e=0,n=t.length;e!==n;++e)t[e]+=A}return this}scale(A){if(A!==1){let t=this.times;for(let e=0,n=t.length;e!==n;++e)t[e]*=A}return this}trim(A,t){let e=this.times,n=e.length,r=0,s=n-1;for(;r!==n&&e[r]<A;)++r;for(;s!==-1&&e[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=e.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let A=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qA("KeyframeTrack: Invalid value size in track.",this),A=!1);let e=this.times,n=this.values,r=e.length;r===0&&(qA("KeyframeTrack: Track is empty.",this),A=!1);let s=null;for(let o=0;o!==r;o++){let a=e[o];if(typeof a=="number"&&isNaN(a)){qA("KeyframeTrack: Time is not a valid number.",this,o,a),A=!1;break}if(s!==null&&s>a){qA("KeyframeTrack: Out of order keys.",this,o,a,s),A=!1;break}s=a}if(n!==void 0&&sv(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){qA("KeyframeTrack: Value is not a valid number.",this,o,l),A=!1;break}}return A}optimize(){let A=this.times.slice(),t=this.values.slice(),e=this.getValueSize(),n=this.getInterpolation()===gl,r=A.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=A[o],c=A[o+1];if(l!==c&&(o!==1||l!==A[0]))if(n)a=!0;else{let f=o*e,h=f-e,u=f+e;for(let d=0;d!==e;++d){let g=t[f+d];if(g!==t[h+d]||g!==t[u+d]){a=!0;break}}}if(a){if(o!==s){A[s]=A[o];let f=o*e,h=s*e;for(let u=0;u!==e;++u)t[h+u]=t[f+u]}++s}}if(r>0){A[s]=A[r];for(let o=r*e,a=s*e,l=0;l!==e;++l)t[a+l]=t[o+l];++s}return s!==A.length?(this.times=A.slice(0,s),this.values=t.slice(0,s*e)):(this.times=A,this.values=t),this}clone(){let A=this.times.slice(),t=this.values.slice(),e=this.constructor,n=new e(this.name,A,t);return n.createInterpolant=this.createInterpolant,n}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Pl;var $i=class extends hn{constructor(A,t,e){super(A,t,e)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=yo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends hn{constructor(A,t,e,n){super(A,t,e,n)}};Ql.prototype.ValueTypeName="color";var jl=class extends hn{constructor(A,t,e,n){super(A,t,e,n)}};jl.prototype.ValueTypeName="number";var Ac=class extends Ji{constructor(A,t,e,n){super(A,t,e,n)}interpolate_(A,t,e,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(e-t)/(n-t),l=A*o;for(let c=l+o;l!==c;l+=4)Zn.slerpFlat(r,0,s,l-o,s,l,a);return r}},Ho=class extends hn{constructor(A,t,e,n){super(A,t,e,n)}InterpolantFactoryMethodLinear(A){return new Ac(this.times,this.values,this.getValueSize(),A)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends hn{constructor(A,t,e){super(A,t,e)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=yo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends hn{constructor(A,t,e,n){super(A,t,e,n)}};tc.prototype.ValueTypeName="vector";var ec=class{constructor(A,t,e){let n=this,r=!1,s=0,o=0,a,l=[];this.onStart=void 0,this.onLoad=A,this.onProgress=t,this.onError=e,this._abortController=null,this.itemStart=function(c){o++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,o),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);return f!==-1&&l.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=l.length;f<h;f+=2){let u=l[f],d=l[f+1];if(u.global&&(u.lastIndex=0),u.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hg=new ec,nc=class{constructor(A){this.manager=A!==void 0?A:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(A,t){let e=this;return new Promise(function(n,r){e.load(A,n,t,r)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}abort(){return this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pl=new F,ml=new Zn,Gn=new F,ko=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(A,t){return super.copy(A,t),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorld.decompose(pl,ml,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Gn.set(1,1,1)).invert()}updateWorldMatrix(A,t,e=!1){super.updateWorldMatrix(A,t,e),this.matrixWorld.decompose(pl,ml,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new F,Ag=new GA,tg=new GA,Ce=class extends ko{constructor(A=50,t=1,e=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=e,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,t){return super.copy(A,t),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){let t=.5*this.getFilmHeight()/A;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let A=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,t,e){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-A/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-A/Gi.z)}getViewSize(A,t){return this.getViewBounds(A,Ag,tg),t.subVectors(tg,Ag)}setViewOffset(A,t,e,n,r,s){this.aspect=A/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=t,this.view.offsetX=e,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=this.near,t=A*Math.tan(bu*.5*this.fov)/this.zoom,e=2*t,n=this.aspect*e,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/a,t-=s.offsetY*e/l,n*=s.width/a,e*=s.height/l}let o=this.filmOffset;o!==0&&(r+=A*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-e,A,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let t=super.toJSON(A);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vo=class extends ko{constructor(A=-1,t=1,e=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=t,this.top=e,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,t){return super.copy(A,t),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,t,e,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=t,this.view.offsetX=e,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=e-A,s=e+A,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let t=super.toJSON(A);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var _s=-90,xs=1,ic=class extends cn{constructor(A,t,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ce(_s,xs,A,t);n.layers=this.layers,this.add(n);let r=new Ce(_s,xs,A,t);r.layers=this.layers,this.add(r);let s=new Ce(_s,xs,A,t);s.layers=this.layers,this.add(s);let o=new Ce(_s,xs,A,t);o.layers=this.layers,this.add(o);let a=new Ce(_s,xs,A,t);a.layers=this.layers,this.add(a);let l=new Ce(_s,xs,A,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let A=this.coordinateSystem,t=this.children.concat(),[e,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(A===In)e.up.set(0,1,0),e.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(A===bo)e.up.set(0,-1,0),e.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(let l of t)this.add(l),l.updateMatrixWorld()}update(A,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:e,activeMipmapLevel:n}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,a,l,c]=this.children,f=A.getRenderTarget(),h=A.getActiveCubeFace(),u=A.getActiveMipmapLevel(),d=A.xr.enabled;A.xr.enabled=!1;let g=e.texture.generateMipmaps;e.texture.generateMipmaps=!1;let p=!1;A.isWebGLRenderer===!0?p=A.state.buffers.depth.getReversed():p=A.reversedDepthBuffer,A.setRenderTarget(e,0,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,r),A.setRenderTarget(e,1,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,s),A.setRenderTarget(e,2,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,o),A.setRenderTarget(e,3,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,a),A.setRenderTarget(e,4,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,l),e.texture.generateMipmaps=g,A.setRenderTarget(e,5,n),p&&A.autoClear===!1&&A.clearDepth(),A.render(t,c),A.setRenderTarget(f,h,u),A.xr.enabled=d,e.texture.needsPMREMUpdate=!0}},rc=class extends Ce{constructor(A=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=A}};var Rf="\\[\\]\\.:\\/",Fv=new RegExp("["+Rf+"]","g"),If="[^"+Rf+"]",Ov="[^"+Rf.replace("\\.","")+"]",zv=/((?:WC+[\/:])*)/.source.replace("WC",If),Hv=/(WCOD+)?/.source.replace("WCOD",Ov),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),Gv=new RegExp("^"+zv+Hv+kv+Vv+"$"),Wv=["material","materials","bones","map"],nf=class{constructor(A,t,e){let n=e||It.parseTrackName(t);this._targetGroup=A,this._bindings=A.subscribe_(t,n)}getValue(A,t){this.bind();let e=this._targetGroup.nCachedObjects_,n=this._bindings[e];n!==void 0&&n.getValue(A,t)}setValue(A,t){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=e.length;n!==r;++n)e[n].setValue(A,t)}bind(){let A=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=A.length;t!==e;++t)A[t].bind()}unbind(){let A=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=A.length;t!==e;++t)A[t].unbind()}},It=class i{constructor(A,t,e){this.path=t,this.parsedPath=e||i.parseTrackName(t),this.node=i.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,t,e){return A&&A.isAnimationObjectGroup?new i.Composite(A,t,e):new i(A,t,e)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(Fv,"")}static parseTrackName(A){let t=Gv.exec(A);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+A);let e={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=e.nodeName&&e.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=e.nodeName.substring(n+1);Wv.indexOf(r)!==-1&&(e.nodeName=e.nodeName.substring(0,n),e.objectName=r)}if(e.propertyName===null||e.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+A);return e}static findNode(A,t){if(t===void 0||t===""||t==="."||t===-1||t===A.name||t===A.uuid)return A;if(A.skeleton){let e=A.skeleton.getBoneByName(t);if(e!==void 0)return e}if(A.children){let e=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=e(o.children);if(a)return a}return null},n=e(A.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,t){A[t]=this.targetObject[this.propertyName]}_getValue_array(A,t){let e=this.resolvedProperty;for(let n=0,r=e.length;n!==r;++n)A[t++]=e[n]}_getValue_arrayElement(A,t){A[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,t){this.resolvedProperty.toArray(A,t)}_setValue_direct(A,t){this.targetObject[this.propertyName]=A[t]}_setValue_direct_setNeedsUpdate(A,t){this.targetObject[this.propertyName]=A[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,t){this.targetObject[this.propertyName]=A[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,t){let e=this.resolvedProperty;for(let n=0,r=e.length;n!==r;++n)e[n]=A[t++]}_setValue_array_setNeedsUpdate(A,t){let e=this.resolvedProperty;for(let n=0,r=e.length;n!==r;++n)e[n]=A[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,t){let e=this.resolvedProperty;for(let n=0,r=e.length;n!==r;++n)e[n]=A[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,t){this.resolvedProperty[this.propertyIndex]=A[t]}_setValue_arrayElement_setNeedsUpdate(A,t){this.resolvedProperty[this.propertyIndex]=A[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,t){this.resolvedProperty[this.propertyIndex]=A[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,t){this.resolvedProperty.fromArray(A,t)}_setValue_fromArray_setNeedsUpdate(A,t){this.resolvedProperty.fromArray(A,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,t){this.resolvedProperty.fromArray(A,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,t){this.bind(),this.getValue(A,t)}_setValue_unbound(A,t){this.bind(),this.setValue(A,t)}bind(){let A=this.node,t=this.parsedPath,e=t.objectName,n=t.propertyName,r=t.propertyIndex;if(A||(A=i.findNode(this.rootNode,t.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){HA("PropertyBinding: No target node found for track: "+this.path+".");return}if(e){let l=t.objectIndex;switch(e){case"materials":if(!A.material){qA("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){qA("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){qA("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let c=0;c<A.length;c++)if(A[c].name===l){l=c;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){qA("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){qA("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[e]===void 0){qA("PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[e]}if(l!==void 0){if(A[l]===void 0){qA("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[l]}}let s=A[n];if(s===void 0){let l=t.nodeName;qA("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",A);return}let o=this.Versioning.None;this.targetObject=A,A.isMaterial===!0?o=this.Versioning.NeedsUpdate:A.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!A.geometry){qA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){qA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[r]!==void 0&&(r=A.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=nf;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);var Go=class{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,HA("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();A=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=A}return A}};var Ff=class Ff{constructor(A,t,e,n){this.elements=[1,0,0,1],A!==void 0&&this.set(A,t,e,n)}identity(){return this.set(1,0,0,1),this}fromArray(A,t=0){for(let e=0;e<4;e++)this.elements[e]=A[e+t];return this}set(A,t,e,n){let r=this.elements;return r[0]=A,r[2]=t,r[1]=e,r[3]=n,this}};Ff.prototype.isMatrix2=!0;var rf=Ff;function Df(i,A,t,e){let n=Xv(e);switch(t){case Sf:return i*A;case bf:return i*A/n.components*n.byteLength;case fc:return i*A/n.components*n.byteLength;case tr:return i*A*2/n.components*n.byteLength;case dc:return i*A*2/n.components*n.byteLength;case Mf:return i*A*3/n.components*n.byteLength;case bn:return i*A*4/n.components*n.byteLength;case pc:return i*A*4/n.components*n.byteLength;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*8;case Jo:case $o:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case gc:case xc:return Math.max(i,16)*Math.max(A,8)/4;case mc:case _c:return Math.max(i,8)*Math.max(A,8)/2;case vc:case yc:case Mc:case bc:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*8;case Sc:case Ko:case wc:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((A+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((A+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((A+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((A+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((A+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((A+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((A+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((A+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((A+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((A+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((A+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((A+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((A+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((A+11)/12)*16;case Hc:case kc:case Vc:return Math.ceil(i/4)*Math.ceil(A/4)*16;case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(A/4)*8;case Qo:case Xc:return Math.ceil(i/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xv(i){switch(i){case un:case _f:return{byteLength:1,components:1};case Cs:case xf:case Kn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Ln:case cc:case Nn:return{byteLength:4,components:1};case vf:case yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window!="undefined"&&(window.__THREE__?HA("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function l_(){let i=null,A=!1,t=null,e=null;function n(r,s){t(r,s),e=i.requestAnimationFrame(n)}return{start:function(){A!==!0&&t!==null&&i!==null&&(e=i.requestAnimationFrame(n),A=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(e),A=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yv(i){let A=new WeakMap;function t(o,a){let l=o.array,c=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(a,h),i.bufferData(a,l,c),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function e(o,a,l){let c=a.array,f=a.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,c);else{f.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<f.length;u++){let d=f[h],g=f[u];g.start<=d.start+d.count+1?d.count=Math.max(d.count,g.start+g.count-d.start):(++h,f[h]=g)}f.length=h+1;for(let u=0,d=f.length;u<d;u++){let g=f[u];i.bufferSubData(l,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}a.clearUpdateRanges()}a.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),A.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let a=A.get(o);a&&(i.deleteBuffer(a.buffer),A.delete(o))}function s(o,a){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=A.get(o);(!c||c.version<o.version)&&A.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=A.get(o);if(l===void 0)A.set(o,t(o,a));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(l.buffer,o,a),l.version=o.version}}return{get:n,remove:r,update:s}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Zv,alphahash_pars_fragment:Jv,alphamap_fragment:$v,alphamap_pars_fragment:Kv,alphatest_fragment:Qv,alphatest_pars_fragment:jv,aomap_fragment:Ay,aomap_pars_fragment:ty,batching_pars_vertex:ey,batching_vertex:ny,begin_vertex:iy,beginnormal_vertex:ry,bsdfs:sy,iridescence_fragment:oy,bumpmap_pars_fragment:ay,clipping_planes_fragment:ly,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:uy,color_fragment:fy,color_pars_fragment:dy,color_pars_vertex:py,color_vertex:my,common:gy,cube_uv_reflection_fragment:_y,defaultnormal_vertex:xy,displacementmap_pars_vertex:vy,displacementmap_vertex:yy,emissivemap_fragment:Sy,emissivemap_pars_fragment:My,colorspace_fragment:by,colorspace_pars_fragment:wy,envmap_fragment:Ty,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Cy,envmap_pars_vertex:Py,envmap_physical_pars_fragment:Hy,envmap_vertex:Ry,fog_vertex:Iy,fog_pars_vertex:Dy,fog_fragment:Ly,fog_pars_fragment:Ny,gradientmap_pars_fragment:By,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Oy,lights_pars_begin:zy,lights_toon_fragment:ky,lights_toon_pars_fragment:Vy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:qy,lights_fragment_begin:Yy,lights_fragment_maps:Zy,lights_fragment_end:Jy,lightprobes_pars_fragment:$y,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:AS,map_fragment:tS,map_pars_fragment:eS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:oS,morphcolor_vertex:aS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:hS,normal_fragment_begin:uS,normal_fragment_maps:fS,normal_pars_fragment:dS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:_S,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:vS,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:MS,premultiplied_alpha_fragment:bS,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:ES,roughnessmap_fragment:CS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:IS,shadowmap_vertex:DS,shadowmask_pars_fragment:LS,skinbase_vertex:NS,skinning_pars_vertex:BS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:zS,tonemapping_fragment:HS,tonemapping_pars_fragment:kS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:WS,uv_pars_vertex:XS,uv_vertex:qS,worldpos_vertex:YS,background_vert:ZS,background_frag:JS,backgroundCube_vert:$S,backgroundCube_frag:KS,cube_vert:QS,cube_frag:jS,depth_vert:AM,depth_frag:tM,distance_vert:eM,distance_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:hM,meshmatcap_vert:uM,meshmatcap_frag:fM,meshnormal_vert:dM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:vM,meshtoon_frag:yM,points_vert:SM,points_frag:MM,shadow_vert:bM,shadow_frag:wM,sprite_vert:TM,sprite_frag:EM},vA={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new QA},alphaMap:{value:null},alphaMapTransform:{value:new QA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new QA}},envmap:{envMap:{value:null},envMapRotation:{value:new QA},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new QA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new QA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new QA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new QA},normalScale:{value:new GA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new QA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new QA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new QA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new QA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new QA},alphaTest:{value:0},uvTransform:{value:new QA}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new GA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new QA},alphaMap:{value:null},alphaMapTransform:{value:new QA},alphaTest:{value:0}}},jn={basic:{uniforms:Re([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Re([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,vA.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Re([vA.common,vA.specularmap,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,vA.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Re([vA.common,vA.envmap,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.roughnessmap,vA.metalnessmap,vA.fog,vA.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Re([vA.common,vA.aomap,vA.lightmap,vA.emissivemap,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.gradientmap,vA.fog,vA.lights,{emissive:{value:new At(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Re([vA.common,vA.bumpmap,vA.normalmap,vA.displacementmap,vA.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Re([vA.points,vA.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Re([vA.common,vA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Re([vA.common,vA.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Re([vA.common,vA.bumpmap,vA.normalmap,vA.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Re([vA.sprite,vA.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new QA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new QA}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Re([vA.common,vA.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Re([vA.lights,vA.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};jn.physical={uniforms:Re([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new QA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new QA},clearcoatNormalScale:{value:new GA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new QA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new QA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new QA},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new QA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new QA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new QA},transmissionSamplerSize:{value:new GA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new QA},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new QA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new QA},anisotropyVector:{value:new GA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new QA}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Zc={r:0,b:0,g:0},CM=new Ut,c_=new QA;c_.set(-1,0,0,0,1,0,0,0,1);function PM(i,A,t,e,n,r){let s=new At(0),o=n===!0?0:1,a,l,c=null,f=0,h=null;function u(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=A.get(M,v)}return M}function d(S){let M=!1,v=u(S);v===null?p(s,o):v&&v.isColor&&(p(v,1),M=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,M){let v=u(M);v&&(v.isCubeTexture||v.mapping===Xo)?(l===void 0&&(l=new Pe(new bs(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:Lr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),e.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(c_),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,(c!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new Pe(new Oo(2,2),new he({name:"BackgroundMaterial",uniforms:Lr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),e.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,a.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,c=v,f=v.version,h=i.toneMapping),a.layers.enableAll(),S.unshift(a,a.geometry,a.material,0,0,null))}function p(S,M){S.getRGB(Zc,Pf(i)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,M,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,M=1){s.set(S),o=M,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(s,o)},render:d,addToRenderList:g,dispose:m}}function RM(i,A){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),e={},n=h(null),r=n,s=!1;function o(I,D,W,k,U){let H=!1,L=f(I,k,W,D);r!==L&&(r=L,l(r.object)),H=u(I,k,W,U),H&&d(I,k,W,U),U!==null&&A.update(U,i.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,v(I,D,W,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,A.get(U).buffer))}function a(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function c(I){return i.deleteVertexArray(I)}function f(I,D,W,k){let U=k.wireframe===!0,H=e[D.id];H===void 0&&(H={},e[D.id]=H);let L=I.isInstancedMesh===!0?I.id:0,V=H[L];V===void 0&&(V={},H[L]=V);let $=V[W.id];$===void 0&&($={},V[W.id]=$);let R=$[U];return R===void 0&&(R=h(a()),$[U]=R),R}function h(I){let D=[],W=[],k=[];for(let U=0;U<t;U++)D[U]=0,W[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:k,object:I,attributes:{},index:null}}function u(I,D,W,k){let U=r.attributes,H=D.attributes,L=0,V=W.getAttributes();for(let $ in V)if(V[$].location>=0){let tA=U[$],lA=H[$];if(lA===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(lA=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(lA=I.instanceColor)),tA===void 0||tA.attribute!==lA||lA&&tA.data!==lA.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function d(I,D,W,k){let U={},H=D.attributes,L=0,V=W.getAttributes();for(let $ in V)if(V[$].location>=0){let tA=H[$];tA===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(tA=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(tA=I.instanceColor));let lA={};lA.attribute=tA,tA&&tA.data&&(lA.data=tA.data),U[$]=lA,L++}r.attributes=U,r.attributesNum=L,r.index=k}function g(){let I=r.newAttributes;for(let D=0,W=I.length;D<W;D++)I[D]=0}function p(I){m(I,0)}function m(I,D){let W=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;W[I]=1,k[I]===0&&(i.enableVertexAttribArray(I),k[I]=1),U[I]!==D&&(i.vertexAttribDivisor(I,D),U[I]=D)}function S(){let I=r.newAttributes,D=r.enabledAttributes;for(let W=0,k=D.length;W<k;W++)D[W]!==I[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function M(I,D,W,k,U,H,L){L===!0?i.vertexAttribIPointer(I,D,W,U,H):i.vertexAttribPointer(I,D,W,k,U,H)}function v(I,D,W,k){g();let U=k.attributes,H=W.getAttributes(),L=D.defaultAttributeValues;for(let V in H){let $=H[V];if($.location>=0){let R=U[V];if(R===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(R=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(R=I.instanceColor)),R!==void 0){let tA=R.normalized,lA=R.itemSize,LA=A.get(R);if(LA===void 0)continue;let WA=LA.buffer,kA=LA.type,K=LA.bytesPerElement,rA=kA===i.INT||kA===i.UNSIGNED_INT||R.gpuType===cc;if(R.isInterleavedBufferAttribute){let iA=R.data,CA=iA.stride,VA=R.offset;if(iA.isInstancedInterleavedBuffer){for(let wA=0;wA<$.locationSize;wA++)m($.location+wA,iA.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let wA=0;wA<$.locationSize;wA++)p($.location+wA);i.bindBuffer(i.ARRAY_BUFFER,WA);for(let wA=0;wA<$.locationSize;wA++)M($.location+wA,lA/$.locationSize,kA,tA,CA*K,(VA+lA/$.locationSize*wA)*K,rA)}else{if(R.isInstancedBufferAttribute){for(let iA=0;iA<$.locationSize;iA++)m($.location+iA,R.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let iA=0;iA<$.locationSize;iA++)p($.location+iA);i.bindBuffer(i.ARRAY_BUFFER,WA);for(let iA=0;iA<$.locationSize;iA++)M($.location+iA,lA/$.locationSize,kA,tA,lA*K,lA/$.locationSize*iA*K,rA)}}else if(L!==void 0){let tA=L[V];if(tA!==void 0)switch(tA.length){case 2:i.vertexAttrib2fv($.location,tA);break;case 3:i.vertexAttrib3fv($.location,tA);break;case 4:i.vertexAttrib4fv($.location,tA);break;default:i.vertexAttrib1fv($.location,tA)}}}}S()}function y(){w();for(let I in e){let D=e[I];for(let W in D){let k=D[W];for(let U in k){let H=k[U];for(let L in H)c(H[L].object),delete H[L];delete k[U]}}delete e[I]}}function E(I){if(e[I.id]===void 0)return;let D=e[I.id];for(let W in D){let k=D[W];for(let U in k){let H=k[U];for(let L in H)c(H[L].object),delete H[L];delete k[U]}}delete e[I.id]}function b(I){for(let D in e){let W=e[D];for(let k in W){let U=W[k];if(U[I.id]===void 0)continue;let H=U[I.id];for(let L in H)c(H[L].object),delete H[L];delete U[I.id]}}}function _(I){for(let D in e){let W=e[D],k=I.isInstancedMesh===!0?I.id:0,U=W[k];if(U!==void 0){for(let H in U){let L=U[H];for(let V in L)c(L[V].object),delete L[V];delete U[H]}delete W[k],Object.keys(W).length===0&&delete e[D]}}}function w(){C(),s=!0,r!==n&&(r=n,l(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function IM(i,A,t){let e;function n(a){e=a}function r(a,l){i.drawArrays(e,a,l),t.update(l,e,1)}function s(a,l,c){c!==0&&(i.drawArraysInstanced(e,a,l,c),t.update(l,e,c))}function o(a,l,c){if(c===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,a,0,l,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,e,1)}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function DM(i,A,t,e){let n;function r(){if(n!==void 0)return n;if(A.has("EXT_texture_filter_anisotropic")===!0){let b=A.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==bn&&e.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let _=b===Kn&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(b!==un&&e.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Nn&&!_)}function a(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",c=a(l);c!==l&&(HA("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&A.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&HA("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:E}}function LM(i){let A=this,t=null,e=0,n=!1,r=!1,s=new Wn,o=new QA,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||e!==0||n;return n=h,e=f.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,u){let d=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!n||d===null||d.length===0||r&&!p)r?c(null):l();else{let S=r?0:e,M=S*4,v=m.clippingState||null;a.value=v,v=c(d,h,M,u);for(let y=0;y!==M;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=e>0),A.numPlanes=e,A.numIntersection=0}function c(f,h,u,d){let g=f!==null?f.length:0,p=null;if(g!==0){if(p=a.value,d!==!0||p===null){let m=u+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=u;M!==g;++M,v+=4)s.copy(f[M]).applyMatrix4(S,o),s.normal.toArray(p,v),p[v+3]=s.constant}a.value=p,a.needsUpdate=!0}return A.numPlanes=g,A.numIntersection=0,p}}var er=4,kg=[.125,.215,.35,.446,.526,.582],Nr=20,NM=256,Aa=new Vo,Vg=new At,Of=null,zf=0,Hf=0,kf=!1,BM=new F,$c=class{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(A,t=0,e=.1,n=100,r={}){let{size:s=256,position:o=BM}=r;Of=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(A,e,n,a,o),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(A,t=null){return this._fromTexture(A,t)}fromCubemap(A,t=null){return this._fromTexture(A,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodMeshes.length;A++)this._lodMeshes[A].geometry.dispose()}_cleanup(A){this._renderer.setRenderTarget(Of,zf,Hf),this._renderer.xr.enabled=kf,A.scissorTest=!1,Rs(A,0,0,A.width,A.height)}_fromTexture(A,t){A.mapping===Qi||A.mapping===Dr?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Of=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let e=t||this._allocateTargets();return this._textureToCubeUV(A,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){let A=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,e={magFilter:pe,minFilter:pe,generateMipmaps:!1,type:Kn,format:bn,colorSpace:So,depthBuffer:!1},n=Gg(A,t,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(A,t,e);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UM(r)),this._blurMaterial=OM(r,A,t),this._ggxMaterial=FM(r,A,t)}return n}_compileMaterial(A){let t=new Pe(new ke,A);this._renderer.compile(t,Aa)}_sceneToCubeUV(A,t,e,n,r){let a=new Ce(90,1,t,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Vg),f.toneMapping=Dn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new bs,new Do({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,m=!1,S=A.background;S?S.isColor&&(p.color.copy(S),A.background=null,m=!0):(p.color.copy(Vg),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(a.up.set(0,l[M],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+c[M],r.y,r.z)):v===1?(a.up.set(0,0,l[M]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+c[M],r.z)):(a.up.set(0,l[M],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+c[M]));let y=this._cubeSize;Rs(n,v*y,M>2?y:0,y,y),f.setRenderTarget(n),m&&f.render(g,a),f.render(A,a)}f.toneMapping=u,f.autoClear=h,A.background=S}_textureToCubeUV(A,t){let e=this._renderer,n=A.mapping===Qi||A.mapping===Dr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());let r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=A;let a=this._cubeSize;Rs(t,0,0,3*a,2*a),e.setRenderTarget(t),e.render(s,Aa)}_applyPMREM(A){let t=this._renderer,e=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(A,r-1,r);t.autoClear=e}_applyGGXFilter(A,t,e){let n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[e];o.material=s;let a=s.uniforms,l=e/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-c*c),h=0+l*1.25,u=f*h,{_lodMax:d}=this,g=this._sizeLods[e],p=3*g*(e>d-er?e-d+er:0),m=4*(this._cubeSize-g);a.envMap.value=A.texture,a.roughness.value=u,a.mipInt.value=d-t,Rs(r,p,m,3*g,2*g),n.setRenderTarget(r),n.render(o,Aa),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=d-e,Rs(A,p,m,3*g,2*g),n.setRenderTarget(A),n.render(o,Aa)}_blur(A,t,e,n,r){let s=this._pingPongRenderTarget;this._halfBlur(A,s,t,e,n,"latitudinal",r),this._halfBlur(s,A,e,e,n,"longitudinal",r)}_halfBlur(A,t,e,n,r,s,o){let a=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&qA("blur direction must be either latitudinal or longitudinal!");let c=3,f=this._lodMeshes[n];f.material=l;let h=l.uniforms,u=this._sizeLods[e]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Nr-1),g=r/d,p=isFinite(r)?1+Math.floor(c*g):Nr;p>Nr&&HA(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);let m=[],S=0;for(let b=0;b<Nr;++b){let _=b/g,w=Math.exp(-_*_/2);m.push(w),b===0?S+=w:b<p&&(S+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;h.envMap.value=A.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:M}=this;h.dTheta.value=d,h.mipInt.value=M-e;let v=this._sizeLods[n],y=3*v*(n>M-er?n-M+er:0),E=4*(this._cubeSize-v);Rs(t,y,E,3*v,2*v),a.setRenderTarget(t),a.render(f,Aa)}};function UM(i){let A=[],t=[],e=[],n=i,r=i-er+1+kg.length;for(let s=0;s<r;s++){let o=Math.pow(2,n);A.push(o);let a=1/o;s>i-er?a=kg[s-i+er-1]:s===0&&(a=0),t.push(a);let l=1/(o-2),c=-l,f=1+l,h=[c,c,f,c,f,f,c,c,f,f,c,f],u=6,d=6,g=3,p=2,m=1,S=new Float32Array(g*d*u),M=new Float32Array(p*d*u),v=new Float32Array(m*d*u);for(let E=0;E<u;E++){let b=E%3*2/3-1,_=E>2?0:-1,w=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];S.set(w,g*d*E),M.set(h,p*d*E);let C=[E,E,E,E,E,E];v.set(C,m*d*E)}let y=new ke;y.setAttribute("position",new an(S,g)),y.setAttribute("uv",new an(M,p)),y.setAttribute("faceIndex",new an(v,m)),e.push(new Pe(y,null)),n>er&&n--}return{lodMeshes:e,sizeLods:A,sigmas:t}}function Gg(i,A,t){let e=new ln(i,A,t);return e.texture.mapping=Xo,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Rs(i,A,t,e,n){i.viewport.set(A,t,e,n),i.scissor.set(A,t,e,n)}function FM(i,A,t){return new he({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NM,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function OM(i,A,t){let e=new Float32Array(Nr),n=new F(0,1,0);return new he({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Wg(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Xg(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kc=class extends ln{constructor(A=1,t={}){super(A,A,t),this.isWebGLCubeRenderTarget=!0;let e={width:A,height:A,depth:1},n=[e,e,e,e,e,e];this.texture=new Bo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(A,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let e={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bs(5,5,5),r=new he({name:"CubemapFromEquirect",uniforms:Lr(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:me,blending:$n});r.uniforms.tEquirect.value=t;let s=new Pe(n,r),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=pe),new ic(1,10,this).update(A,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(A,t=!0,e=!0,n=!0){let r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(t,e,n);A.setRenderTarget(r)}};function zM(i){let A=new WeakMap,t=new WeakMap,e=null;function n(h,u=!1){return h==null?null:u?s(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===oc||u===ac)if(A.has(h)){let d=A.get(h).texture;return o(d,h.mapping)}else{let d=h.image;if(d&&d.height>0){let g=new Kc(d.height);return g.fromEquirectangularTexture(i,h),A.set(h,g),h.addEventListener("dispose",l),o(g.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let u=h.mapping,d=u===oc||u===ac,g=u===Qi||u===Dr;if(d||g){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return e===null&&(e=new $c(i)),p=d?e.fromEquirectangular(h,p):e.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let S=h.image;return d&&S&&S.height>0||g&&S&&a(S)?(e===null&&(e=new $c(i)),p=d?e.fromEquirectangular(h):e.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",c),p.texture):null}}}return h}function o(h,u){return u===oc?h.mapping=Qi:u===ac&&(h.mapping=Dr),h}function a(h){let u=0,d=6;for(let g=0;g<d;g++)h[g]!==void 0&&u++;return u===d}function l(h){let u=h.target;u.removeEventListener("dispose",l);let d=A.get(u);d!==void 0&&(A.delete(u),d.dispose())}function c(h){let u=h.target;u.removeEventListener("dispose",c);let d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function f(){A=new WeakMap,t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:f}}function HM(i){let A={};function t(e){if(A[e]!==void 0)return A[e];let n=i.getExtension(e);return A[e]=n,n}return{has:function(e){return t(e)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(e){let n=t(e);return n===null&&Er("WebGLRenderer: "+e+" extension not supported."),n}}}function kM(i,A,t,e){let n={},r=new WeakMap;function s(f){let h=f.target;h.index!==null&&A.remove(h.index);for(let d in h.attributes)A.remove(h.attributes[d]);h.removeEventListener("dispose",s),delete n[h.id];let u=r.get(h);u&&(A.remove(u),r.delete(h)),e.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function a(f){let h=f.attributes;for(let u in h)A.update(h[u],i.ARRAY_BUFFER)}function l(f){let h=[],u=f.index,d=f.attributes.position,g=0;if(d===void 0)return;if(u!==null){let S=u.array;g=u.version;for(let M=0,v=S.length;M<v;M+=3){let y=S[M+0],E=S[M+1],b=S[M+2];h.push(y,E,E,b,b,y)}}else{let S=d.array;g=d.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let y=M+0,E=M+1,b=M+2;h.push(y,E,E,b,b,y)}}let p=new(d.count>=65535?Ro:Po)(h,1);p.version=g;let m=r.get(f);m&&A.remove(m),r.set(f,p)}function c(f){let h=r.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:a,getWireframeAttribute:c}}function VM(i,A,t){let e;function n(f){e=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function a(f,h){i.drawElements(e,h,r,f*s),t.update(h,e,1)}function l(f,h,u){u!==0&&(i.drawElementsInstanced(e,h,r,f*s,u),t.update(h,e,u))}function c(f,h,u){if(u===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,h,0,r,f,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p];t.update(g,e,1)}this.setMode=n,this.setIndex=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function GM(i){let A={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function e(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qA("WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:A,render:t,programs:null,autoReset:!0,reset:n,update:e}}function WM(i,A,t){let e=new WeakMap,n=new Ft;function r(s,o,a){let l=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0,h=e.get(o);if(h===void 0||h.count!==f){let w=function(){b.dispose(),e.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let u=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;u===!0&&(M=1),d===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,y=1;v>A.maxTextureSize&&(y=Math.ceil(v/A.maxTextureSize),v=A.maxTextureSize);let E=new Float32Array(v*y*4*f),b=new To(E,v,y,f);b.type=Nn,b.needsUpdate=!0;let _=M*4;for(let C=0;C<f;C++){let I=p[C],D=m[C],W=S[C],k=v*y*4*C;for(let U=0;U<I.count;U++){let H=U*_;u===!0&&(n.fromBufferAttribute(I,U),E[k+H+0]=n.x,E[k+H+1]=n.y,E[k+H+2]=n.z,E[k+H+3]=0),d===!0&&(n.fromBufferAttribute(D,U),E[k+H+4]=n.x,E[k+H+5]=n.y,E[k+H+6]=n.z,E[k+H+7]=0),g===!0&&(n.fromBufferAttribute(W,U),E[k+H+8]=n.x,E[k+H+9]=n.y,E[k+H+10]=n.z,E[k+H+11]=W.itemSize===4?n.w:1)}}h={count:f,texture:b,size:new GA(v,y)},e.set(o,h),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let g=0;g<l.length;g++)u+=l[g];let d=o.morphTargetsRelative?1:1-u;a.getUniforms().setValue(i,"morphTargetBaseInfluence",d),a.getUniforms().setValue(i,"morphTargetInfluences",l)}a.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function XM(i,A,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,f=l.geometry,h=A.get(l,f);if(r.get(h)!==c&&(A.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var qM={[cf]:"LINEAR_TONE_MAPPING",[hf]:"REINHARD_TONE_MAPPING",[uf]:"CINEON_TONE_MAPPING",[ff]:"ACES_FILMIC_TONE_MAPPING",[pf]:"AGX_TONE_MAPPING",[mf]:"NEUTRAL_TONE_MAPPING",[df]:"CUSTOM_TONE_MAPPING"};function YM(i,A,t,e,n,r){let s=new ln(A,t,{type:i,depthBuffer:n,stencilBuffer:r,samples:e?4:0,depthTexture:n?new _i(A,t):void 0}),o=new ln(A,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),a=new ke;a.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let l=new Xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pe(a,l),f=new Vo(-1,1,1,-1,0,1),h=null,u=null,d=!1,g,p=null,m=[],S=!1;this.setSize=function(M,v){s.setSize(M,v),o.setSize(M,v);for(let y=0;y<m.length;y++){let E=m[y];E.setSize&&E.setSize(M,v)}},this.setEffects=function(M){m=M,S=m.length>0&&m[0].isRenderPass===!0;let v=s.width,y=s.height;for(let E=0;E<m.length;E++){let b=m[E];b.setSize&&b.setSize(v,y)}},this.begin=function(M,v){if(d||M.toneMapping===Dn&&m.length===0)return!1;if(p=v,v!==null){let y=v.width,E=v.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return S===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=Dn,!0},this.hasRenderPass=function(){return S},this.end=function(M,v){M.toneMapping=g,d=!0;let y=s,E=o;for(let b=0;b<m.length;b++){let _=m[b];if(_.enabled!==!1&&(_.render(M,E,y,v),_.needsSwap!==!1)){let w=y;y=E,E=w}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},lt.getTransfer(h)===mt&&(l.defines.SRGB_TRANSFER="");let b=qM[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(p),M.render(c,f),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var h_=new Ze,Wf=new _i(1,1),u_=new To,f_=new Ll,d_=new Bo,qg=[],Yg=[],Zg=new Float32Array(16),Jg=new Float32Array(9),$g=new Float32Array(4);function Ds(i,A,t){let e=i[0];if(e<=0||e>0)return i;let n=A*t,r=qg[n];if(r===void 0&&(r=new Float32Array(n),qg[n]=r),A!==0){e.toArray(r,0);for(let s=1,o=0;s!==A;++s)o+=t,i[s].toArray(r,o)}return r}function ne(i,A){if(i.length!==A.length)return!1;for(let t=0,e=i.length;t<e;t++)if(i[t]!==A[t])return!1;return!0}function ie(i,A){for(let t=0,e=A.length;t<e;t++)i[t]=A[t]}function Ah(i,A){let t=Yg[A];t===void 0&&(t=new Int32Array(A),Yg[A]=t);for(let e=0;e!==A;++e)t[e]=i.allocateTextureUnit();return t}function ZM(i,A){let t=this.cache;t[0]!==A&&(i.uniform1f(this.addr,A),t[0]=A)}function JM(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(i.uniform2f(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(ne(t,A))return;i.uniform2fv(this.addr,A),ie(t,A)}}function $M(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(i.uniform3f(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else if(A.r!==void 0)(t[0]!==A.r||t[1]!==A.g||t[2]!==A.b)&&(i.uniform3f(this.addr,A.r,A.g,A.b),t[0]=A.r,t[1]=A.g,t[2]=A.b);else{if(ne(t,A))return;i.uniform3fv(this.addr,A),ie(t,A)}}function KM(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(i.uniform4f(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(ne(t,A))return;i.uniform4fv(this.addr,A),ie(t,A)}}function QM(i,A){let t=this.cache,e=A.elements;if(e===void 0){if(ne(t,A))return;i.uniformMatrix2fv(this.addr,!1,A),ie(t,A)}else{if(ne(t,e))return;$g.set(e),i.uniformMatrix2fv(this.addr,!1,$g),ie(t,e)}}function jM(i,A){let t=this.cache,e=A.elements;if(e===void 0){if(ne(t,A))return;i.uniformMatrix3fv(this.addr,!1,A),ie(t,A)}else{if(ne(t,e))return;Jg.set(e),i.uniformMatrix3fv(this.addr,!1,Jg),ie(t,e)}}function Ab(i,A){let t=this.cache,e=A.elements;if(e===void 0){if(ne(t,A))return;i.uniformMatrix4fv(this.addr,!1,A),ie(t,A)}else{if(ne(t,e))return;Zg.set(e),i.uniformMatrix4fv(this.addr,!1,Zg),ie(t,e)}}function tb(i,A){let t=this.cache;t[0]!==A&&(i.uniform1i(this.addr,A),t[0]=A)}function eb(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(i.uniform2i(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(ne(t,A))return;i.uniform2iv(this.addr,A),ie(t,A)}}function nb(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(i.uniform3i(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else{if(ne(t,A))return;i.uniform3iv(this.addr,A),ie(t,A)}}function ib(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(i.uniform4i(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(ne(t,A))return;i.uniform4iv(this.addr,A),ie(t,A)}}function rb(i,A){let t=this.cache;t[0]!==A&&(i.uniform1ui(this.addr,A),t[0]=A)}function sb(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y)&&(i.uniform2ui(this.addr,A.x,A.y),t[0]=A.x,t[1]=A.y);else{if(ne(t,A))return;i.uniform2uiv(this.addr,A),ie(t,A)}}function ob(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z)&&(i.uniform3ui(this.addr,A.x,A.y,A.z),t[0]=A.x,t[1]=A.y,t[2]=A.z);else{if(ne(t,A))return;i.uniform3uiv(this.addr,A),ie(t,A)}}function ab(i,A){let t=this.cache;if(A.x!==void 0)(t[0]!==A.x||t[1]!==A.y||t[2]!==A.z||t[3]!==A.w)&&(i.uniform4ui(this.addr,A.x,A.y,A.z,A.w),t[0]=A.x,t[1]=A.y,t[2]=A.z,t[3]=A.w);else{if(ne(t,A))return;i.uniform4uiv(this.addr,A),ie(t,A)}}function lb(i,A,t){let e=this.cache,n=t.allocateTextureUnit();e[0]!==n&&(i.uniform1i(this.addr,n),e[0]=n);let r;this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=t.isReversedDepthBuffer()?Yc:qc,r=Wf):r=h_,t.setTexture2D(A||r,n)}function cb(i,A,t){let e=this.cache,n=t.allocateTextureUnit();e[0]!==n&&(i.uniform1i(this.addr,n),e[0]=n),t.setTexture3D(A||f_,n)}function hb(i,A,t){let e=this.cache,n=t.allocateTextureUnit();e[0]!==n&&(i.uniform1i(this.addr,n),e[0]=n),t.setTextureCube(A||d_,n)}function ub(i,A,t){let e=this.cache,n=t.allocateTextureUnit();e[0]!==n&&(i.uniform1i(this.addr,n),e[0]=n),t.setTexture2DArray(A||u_,n)}function fb(i){switch(i){case 5126:return ZM;case 35664:return JM;case 35665:return $M;case 35666:return KM;case 35674:return QM;case 35675:return jM;case 35676:return Ab;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}function db(i,A){i.uniform1fv(this.addr,A)}function pb(i,A){let t=Ds(A,this.size,2);i.uniform2fv(this.addr,t)}function mb(i,A){let t=Ds(A,this.size,3);i.uniform3fv(this.addr,t)}function gb(i,A){let t=Ds(A,this.size,4);i.uniform4fv(this.addr,t)}function _b(i,A){let t=Ds(A,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xb(i,A){let t=Ds(A,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vb(i,A){let t=Ds(A,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yb(i,A){i.uniform1iv(this.addr,A)}function Sb(i,A){i.uniform2iv(this.addr,A)}function Mb(i,A){i.uniform3iv(this.addr,A)}function bb(i,A){i.uniform4iv(this.addr,A)}function wb(i,A){i.uniform1uiv(this.addr,A)}function Tb(i,A){i.uniform2uiv(this.addr,A)}function Eb(i,A){i.uniform3uiv(this.addr,A)}function Cb(i,A){i.uniform4uiv(this.addr,A)}function Pb(i,A,t){let e=this.cache,n=A.length,r=Ah(t,n);ne(e,r)||(i.uniform1iv(this.addr,r),ie(e,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=Wf:s=h_;for(let o=0;o!==n;++o)t.setTexture2D(A[o]||s,r[o])}function Rb(i,A,t){let e=this.cache,n=A.length,r=Ah(t,n);ne(e,r)||(i.uniform1iv(this.addr,r),ie(e,r));for(let s=0;s!==n;++s)t.setTexture3D(A[s]||f_,r[s])}function Ib(i,A,t){let e=this.cache,n=A.length,r=Ah(t,n);ne(e,r)||(i.uniform1iv(this.addr,r),ie(e,r));for(let s=0;s!==n;++s)t.setTextureCube(A[s]||d_,r[s])}function Db(i,A,t){let e=this.cache,n=A.length,r=Ah(t,n);ne(e,r)||(i.uniform1iv(this.addr,r),ie(e,r));for(let s=0;s!==n;++s)t.setTexture2DArray(A[s]||u_,r[s])}function Lb(i){switch(i){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Eb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Db}}var Xf=class{constructor(A,t,e){this.id=A,this.addr=e,this.cache=[],this.type=t.type,this.setValue=fb(t.type)}},qf=class{constructor(A,t,e){this.id=A,this.addr=e,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lb(t.type)}},Yf=class{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,t,e){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(A,t[o.id],e)}}},Vf=/(\w+)(\])?(\[|\.)?/g;function Kg(i,A){i.seq.push(A),i.map[A.id]=A}function Nb(i,A,t){let e=i.name,n=e.length;for(Vf.lastIndex=0;;){let r=Vf.exec(e),s=Vf.lastIndex,o=r[1],a=r[2]==="]",l=r[3];if(a&&(o=o|0),l===void 0||l==="["&&s+2===n){Kg(t,l===void 0?new Xf(o,i,A):new qf(o,i,A));break}else{let f=t.map[o];f===void 0&&(f=new Yf(o),Kg(t,f)),t=f}}}var Is=class{constructor(A,t){this.seq=[],this.map={};let e=A.getProgramParameter(t,A.ACTIVE_UNIFORMS);for(let s=0;s<e;++s){let o=A.getActiveUniform(t,s),a=A.getUniformLocation(t,o.name);Nb(o,a,this)}let n=[],r=[];for(let s of this.seq)s.type===A.SAMPLER_2D_SHADOW||s.type===A.SAMPLER_CUBE_SHADOW||s.type===A.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(A,t,e,n){let r=this.map[t];r!==void 0&&r.setValue(A,e,n)}setOptional(A,t,e){let n=t[e];n!==void 0&&this.setValue(A,e,n)}static upload(A,t,e,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=e[o.id];a.needsUpdate!==!1&&o.setValue(A,a.value,n)}}static seqWithValue(A,t){let e=[];for(let n=0,r=A.length;n!==r;++n){let s=A[n];s.id in t&&e.push(s)}return e}};function Qg(i,A,t){let e=i.createShader(A);return i.shaderSource(e,t),i.compileShader(e),e}var Bb=37297,Ub=0;function Fb(i,A){let t=i.split(`
`),e=[],n=Math.max(A-6,0),r=Math.min(A+6,t.length);for(let s=n;s<r;s++){let o=s+1;e.push(`${o===A?">":" "} ${o}: ${t[s]}`)}return e.join(`
`)}var jg=new QA;function Ob(i){lt._getMatrix(jg,lt.workingColorSpace,i);let A=`mat3( ${jg.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Mo:return[A,"LinearTransferOETF"];case mt:return[A,"sRGBTransferOETF"];default:return HA("WebGLProgram: Unsupported color space: ",i),[A,"LinearTransferOETF"]}}function A_(i,A,t){let e=i.getShaderParameter(A,i.COMPILE_STATUS),r=(i.getShaderInfoLog(A)||"").trim();if(e&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fb(i.getShaderSource(A),o)}else return r}function zb(i,A){let t=Ob(A);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Hb={[cf]:"Linear",[hf]:"Reinhard",[uf]:"Cineon",[ff]:"ACESFilmic",[pf]:"AgX",[mf]:"Neutral",[df]:"Custom"};function kb(i,A){let t=Hb[A];return t===void 0?(HA("WebGLProgram: Unsupported toneMapping:",A),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jc=new F;function Vb(){lt.getLuminanceCoefficients(Jc);let i=Jc.x.toFixed(4),A=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${A}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Wb(i){let A=[];for(let t in i){let e=i[t];e!==!1&&A.push("#define "+t+" "+e)}return A.join(`
`)}function Xb(i,A){let t={},e=i.getProgramParameter(A,i.ACTIVE_ATTRIBUTES);for(let n=0;n<e;n++){let r=i.getActiveAttrib(A,n),s=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(A,s),locationSize:o}}return t}function ea(i){return i!==""}function t_(i,A){let t=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function e_(i,A){return i.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}var qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(i){return i.replace(qb,Zb)}var Yb=new Map;function Zb(i,A){let t=tt[A];if(t===void 0){let e=Yb.get(A);if(e!==void 0)t=tt[e],HA('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,e);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+A+">")}return Zf(t)}var Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(i){return i.replace(Jb,$b)}function $b(i,A,t,e){let n="";for(let r=parseInt(A);r<parseInt(t);r++)n+=e.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function i_(i){let A=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?A+=`
#define HIGH_PRECISION`:i.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}var Kb={[Wo]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function Qb(i){return Kb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jb={[Qi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};function Aw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var tw={[Dr]:"ENVMAP_MODE_REFRACTION"};function ew(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nw={[lf]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function iw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nw[i.combine]||"ENVMAP_BLENDING_NONE"}function rw(i){let A=i.envMapCubeUVHeight;if(A===null)return null;let t=Math.log2(A)-2,e=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:e,maxMip:t}}function sw(i,A,t,e){let n=i.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,a=Qb(t),l=Aw(t),c=ew(t),f=iw(t),h=rw(t),u=Gb(t),d=Wb(r),g=n.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ea).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(p=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Dn?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,zb("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),s=Zf(s),s=t_(s,t),s=e_(s,t),o=Zf(o),o=t_(o,t),o=e_(o,t),s=n_(s),o=n_(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=S+p+s,v=S+m+o,y=Qg(n,n.VERTEX_SHADER,M),E=Qg(n,n.FRAGMENT_SHADER,v);n.attachShader(g,y),n.attachShader(g,E),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function b(I){if(i.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",W=n.getShaderInfoLog(y)||"",k=n.getShaderInfoLog(E)||"",U=D.trim(),H=W.trim(),L=k.trim(),V=!0,$=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,g,y,E);else{let R=A_(n,y,"vertex"),tA=A_(n,E,"fragment");qA("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+R+`
`+tA)}else U!==""?HA("WebGLProgram: Program Info Log:",U):(H===""||L==="")&&($=!1);$&&(I.diagnostics={runnable:V,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:L,prefix:m}})}n.deleteShader(y),n.deleteShader(E),_=new Is(n,g),w=Xb(n,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(g,Bb)),C},this.destroy=function(){e.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ub++,this.cacheKey=A,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}var ow=0,Jf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A,t,e){let n=this._getShaderCacheForMaterial(A);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(e)===!1&&(n.add(e),e.usedTimes++),this}remove(A){let t=this.materialCache.get(A);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(A),this}getVertexShaderStage(A){return this._getShaderStage(A.vertexShader)}getFragmentShaderStage(A){return this._getShaderStage(A.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){let t=this.materialCache,e=t.get(A);return e===void 0&&(e=new Set,t.set(A,e)),e}_getShaderStage(A){let t=this.shaderCache,e=t.get(A);return e===void 0&&(e=new $f(A),t.set(A,e)),e}},$f=class{constructor(A){this.id=ow++,this.code=A,this.usedTimes=0}};function aw(i){return i===tr||i===Ko||i===Qo}function lw(i,A,t,e,n,r){let s=new Eo,o=new Jf,a=new Set,l=[],c=new Map,f=e.logarithmicDepthBuffer,h=e.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return a.add(_),_===0?"uv":`uv${_}`}function g(_,w,C,I,D,W){let k=I.fog,U=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=A.get(_.envMap||H,L),$=V&&V.mapping===Xo?V.image.height:null,R=u[_.type];_.precision!==null&&(h=e.getMaxPrecision(_.precision),h!==_.precision&&HA("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tA=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,lA=tA!==void 0?tA.length:0,LA=0;U.morphAttributes.position!==void 0&&(LA=1),U.morphAttributes.normal!==void 0&&(LA=2),U.morphAttributes.color!==void 0&&(LA=3);let WA,kA,K,rA;if(R){let nA=jn[R];WA=nA.vertexShader,kA=nA.fragmentShader}else{WA=_.vertexShader,kA=_.fragmentShader;let nA=o.getVertexShaderStage(_),OA=o.getFragmentShaderStage(_);o.update(_,nA,OA),K=nA.id,rA=OA.id}let iA=i.getRenderTarget(),CA=i.state.buffers.depth.getReversed(),VA=D.isInstancedMesh===!0,wA=D.isBatchedMesh===!0,ot=!!_.map,SA=!!_.matcap,XA=!!V,JA=!!_.aoMap,ZA=!!_.lightMap,Y=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,_t=!!_.displacementMap,Tt=!!_.emissiveMap,$A=!!_.metalnessMap,dt=!!_.roughnessMap,B=_.anisotropy>0,Ot=_.clearcoat>0,YA=_.dispersion>0,P=_.iridescence>0,x=_.sheen>0,z=_.transmission>0,X=B&&!!_.anisotropyMap,J=Ot&&!!_.clearcoatMap,hA=Ot&&!!_.clearcoatNormalMap,aA=Ot&&!!_.clearcoatRoughnessMap,Q=P&&!!_.iridescenceMap,j=P&&!!_.iridescenceThicknessMap,dA=x&&!!_.sheenColorMap,EA=x&&!!_.sheenRoughnessMap,pA=!!_.specularMap,fA=!!_.specularColorMap,cA=!!_.specularIntensityMap,DA=z&&!!_.transmissionMap,FA=z&&!!_.thicknessMap,N=!!_.gradientMap,uA=!!_.alphaMap,AA=_.alphaTest>0,mA=!!_.alphaHash,gA=!!_.extensions,eA=Dn;_.toneMapped&&(iA===null||iA.isXRRenderTarget===!0)&&(eA=i.toneMapping);let sA={shaderID:R,shaderType:_.type,shaderName:_.name,vertexShader:WA,fragmentShader:kA,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:rA,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:wA,batchingColor:wA&&D._colorsTexture!==null,instancing:VA,instancingColor:VA&&D.instanceColor!==null,instancingMorph:VA&&D.morphTexture!==null,outputColorSpace:iA===null?i.outputColorSpace:iA.isXRRenderTarget===!0?iA.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:SA,envMap:XA,envMapMode:XA&&V.mapping,envMapCubeUVHeight:$,aoMap:JA,lightMap:ZA,bumpMap:Y,normalMap:ut,displacementMap:_t,emissiveMap:Tt,normalMapObjectSpace:ut&&_.normalMapType===Eg,normalMapTangentSpace:ut&&_.normalMapType===wf,packedNormalMap:ut&&_.normalMapType===wf&&aw(_.normalMap.format),metalnessMap:$A,roughnessMap:dt,anisotropy:B,anisotropyMap:X,clearcoat:Ot,clearcoatMap:J,clearcoatNormalMap:hA,clearcoatRoughnessMap:aA,dispersion:YA,iridescence:P,iridescenceMap:Q,iridescenceThicknessMap:j,sheen:x,sheenColorMap:dA,sheenRoughnessMap:EA,specularMap:pA,specularColorMap:fA,specularIntensityMap:cA,transmission:z,transmissionMap:DA,thicknessMap:FA,gradientMap:N,opaque:_.transparent===!1&&_.blending===Cr&&_.alphaToCoverage===!1,alphaMap:uA,alphaTest:AA,alphaHash:mA,combine:_.combine,mapUv:ot&&d(_.map.channel),aoMapUv:JA&&d(_.aoMap.channel),lightMapUv:ZA&&d(_.lightMap.channel),bumpMapUv:Y&&d(_.bumpMap.channel),normalMapUv:ut&&d(_.normalMap.channel),displacementMapUv:_t&&d(_.displacementMap.channel),emissiveMapUv:Tt&&d(_.emissiveMap.channel),metalnessMapUv:$A&&d(_.metalnessMap.channel),roughnessMapUv:dt&&d(_.roughnessMap.channel),anisotropyMapUv:X&&d(_.anisotropyMap.channel),clearcoatMapUv:J&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:hA&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:aA&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:dA&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:EA&&d(_.sheenRoughnessMap.channel),specularMapUv:pA&&d(_.specularMap.channel),specularColorMapUv:fA&&d(_.specularColorMap.channel),specularIntensityMapUv:cA&&d(_.specularIntensityMap.channel),transmissionMapUv:DA&&d(_.transmissionMap.channel),thicknessMapUv:FA&&d(_.thicknessMap.channel),alphaMapUv:uA&&d(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ut||B),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ot||uA),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:CA,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:lA,morphTextureStride:LA,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:eA,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:Tt&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jn,flipSided:_.side===me,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gA&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gA&&_.extensions.multiDraw===!0||wA)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return sA.vertexUv1s=a.has(1),sA.vertexUv2s=a.has(2),sA.vertexUv3s=a.has(3),a.clear(),sA}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(w,_),S(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function M(_){let w=u[_.type],C;if(w){let I=jn[w];C=zg.clone(I.uniforms)}else C=_.uniforms;return C}function v(_,w){let C=c.get(w);return C!==void 0?++C.usedTimes:(C=new sw(i,w,_,n),l.push(C),c.set(w,C)),C}function y(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),c.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:b}}function cw(){let i=new WeakMap;function A(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{has:A,get:t,remove:e,update:n,dispose:r}}function hw(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.material.id!==A.material.id?i.material.id-A.material.id:i.materialVariant!==A.materialVariant?i.materialVariant-A.materialVariant:i.z!==A.z?i.z-A.z:i.id-A.id}function r_(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.z!==A.z?A.z-i.z:i.id-A.id}function s_(){let i=[],A=0,t=[],e=[],n=[];function r(){A=0,t.length=0,e.length=0,n.length=0}function s(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,d,g,p,m){let S=i[A];return S===void 0?(S={id:h.id,object:h,geometry:u,material:d,materialVariant:s(h),groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},i[A]=S):(S.id=h.id,S.object=h,S.geometry=u,S.material=d,S.materialVariant=s(h),S.groupOrder=g,S.renderOrder=h.renderOrder,S.z=p,S.group=m),A++,S}function a(h,u,d,g,p,m){let S=o(h,u,d,g,p,m);d.transmission>0?e.push(S):d.transparent===!0?n.push(S):t.push(S)}function l(h,u,d,g,p,m){let S=o(h,u,d,g,p,m);d.transmission>0?e.unshift(S):d.transparent===!0?n.unshift(S):t.unshift(S)}function c(h,u,d){t.length>1&&t.sort(h||hw),e.length>1&&e.sort(u||r_),n.length>1&&n.sort(u||r_),d&&(t.reverse(),e.reverse(),n.reverse())}function f(){for(let h=A,u=i.length;h<u;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:e,transparent:n,init:r,push:a,unshift:l,finish:f,sort:c}}function uw(){let i=new WeakMap;function A(e,n){let r=i.get(e),s;return r===void 0?(s=new s_,i.set(e,[s])):n>=r.length?(s=new s_,r.push(s)):s=r[n],s}function t(){i=new WeakMap}return{get:A,dispose:t}}function fw(){let i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let t;switch(A.type){case"DirectionalLight":t={direction:new F,color:new At};break;case"SpotLight":t={position:new F,direction:new F,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new F,halfWidth:new F,halfHeight:new F};break}return i[A.id]=t,t}}}function dw(){let i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let t;switch(A.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new GA};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new GA};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new GA,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[A.id]=t,t}}}var pw=0;function mw(i,A){return(A.castShadow?2:0)-(i.castShadow?2:0)+(A.map?1:0)-(i.map?1:0)}function gw(i){let A=new fw,t=dw(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)e.probe.push(new F);let n=new F,r=new Ut,s=new Ut;function o(l){let c=0,f=0,h=0;for(let w=0;w<9;w++)e.probe[w].set(0,0,0);let u=0,d=0,g=0,p=0,m=0,S=0,M=0,v=0,y=0,E=0,b=0;l.sort(mw);for(let w=0,C=l.length;w<C;w++){let I=l[w],D=I.color,W=I.intensity,k=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===tr?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=D.r*W,f+=D.g*W,h+=D.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)e.probe[H].addScaledVector(I.sh.coefficients[H],W);b++}else if(I.isDirectionalLight){let H=A.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let L=I.shadow,V=t.get(I);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,e.directionalShadow[u]=V,e.directionalShadowMap[u]=U,e.directionalShadowMatrix[u]=I.shadow.matrix,S++}e.directional[u]=H,u++}else if(I.isSpotLight){let H=A.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(D).multiplyScalar(W),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,e.spot[g]=H;let L=I.shadow;if(I.map&&(e.spotLightMap[y]=I.map,y++,L.updateMatrices(I),I.castShadow&&E++),e.spotLightMatrix[g]=L.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,e.spotShadow[g]=V,e.spotShadowMap[g]=U,v++}g++}else if(I.isRectAreaLight){let H=A.get(I);H.color.copy(D).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),e.rectArea[p]=H,p++}else if(I.isPointLight){let H=A.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let L=I.shadow,V=t.get(I);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,V.shadowCameraNear=L.camera.near,V.shadowCameraFar=L.camera.far,e.pointShadow[d]=V,e.pointShadowMap[d]=U,e.pointShadowMatrix[d]=I.shadow.matrix,M++}e.point[d]=H,d++}else if(I.isHemisphereLight){let H=A.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),e.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=vA.LTC_FLOAT_1,e.rectAreaLTC2=vA.LTC_FLOAT_2):(e.rectAreaLTC1=vA.LTC_HALF_1,e.rectAreaLTC2=vA.LTC_HALF_2)),e.ambient[0]=c,e.ambient[1]=f,e.ambient[2]=h;let _=e.hash;(_.directionalLength!==u||_.pointLength!==d||_.spotLength!==g||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==S||_.numPointShadows!==M||_.numSpotShadows!==v||_.numSpotMaps!==y||_.numLightProbes!==b)&&(e.directional.length=u,e.spot.length=g,e.rectArea.length=p,e.point.length=d,e.hemi.length=m,e.directionalShadow.length=S,e.directionalShadowMap.length=S,e.pointShadow.length=M,e.pointShadowMap.length=M,e.spotShadow.length=v,e.spotShadowMap.length=v,e.directionalShadowMatrix.length=S,e.pointShadowMatrix.length=M,e.spotLightMatrix.length=v+y-E,e.spotLightMap.length=y,e.numSpotLightShadowsWithMaps=E,e.numLightProbes=b,_.directionalLength=u,_.pointLength=d,_.spotLength=g,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=S,_.numPointShadows=M,_.numSpotShadows=v,_.numSpotMaps=y,_.numLightProbes=b,e.version=pw++)}function a(l,c){let f=0,h=0,u=0,d=0,g=0,p=c.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){let M=l[m];if(M.isDirectionalLight){let v=e.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),f++}else if(M.isSpotLight){let v=e.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),u++}else if(M.isRectAreaLight){let v=e.rectArea[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(M.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){let v=e.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){let v=e.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:a,state:e}}function o_(i){let A=new gw(i),t=[],e=[],n=[];function r(h){f.camera=h,t.length=0,e.length=0,n.length=0}function s(h){t.push(h)}function o(h){e.push(h)}function a(h){n.push(h)}function l(){A.setup(t)}function c(h){A.setupView(t,h)}let f={lightsArray:t,shadowsArray:e,lightProbeGridArray:n,camera:null,lights:A,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:a}}function _w(i){let A=new WeakMap;function t(n,r=0){let s=A.get(n),o;return s===void 0?(o=new o_(i),A.set(n,[o])):r>=s.length?(o=new o_(i),s.push(o)):o=s[r],o}function e(){A=new WeakMap}return{get:t,dispose:e}}var xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yw=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Sw=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],a_=new Ut,ta=new F,Gf=new F;function Mw(i,A,t){let e=new Lo,n=new GA,r=new GA,s=new Ft,o=new ql,a=new Yl,l={},c=t.maxTextureSize,f={[gi]:me,[me]:gi,[Jn]:Jn},h=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new GA},radius:{value:4}},vertexShader:xw,fragmentShader:vw}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let d=new ke;d.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Pe(d,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let m=this.type;this.render=function(E,b,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ig&&(HA("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wo);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending($n),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let W=m!==this.type;W&&b.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=E.length;k<U;k++){let H=E[k],L=H.shadow;if(L===void 0){HA("WebGLShadowMap:",H,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);let V=L.getFrameExtents();n.multiply(V),r.copy(L.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/V.x),n.x=r.x*V.x,L.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/V.y),n.y=r.y*V.y,L.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=$,L.map===null||W===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ts){if(H.isPointLight){HA("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new ln(n.x,n.y,{format:tr,type:Kn,minFilter:pe,magFilter:pe,generateMipmaps:!1}),L.map.texture.name=H.name+".shadowMap",L.map.depthTexture=new _i(n.x,n.y,Nn),L.map.depthTexture.name=H.name+".shadowMapDepth",L.map.depthTexture.format=qn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=ce,L.map.depthTexture.magFilter=ce}else H.isPointLight?(L.map=new Kc(n.x),L.map.depthTexture=new Ul(n.x,Ln)):(L.map=new ln(n.x,n.y),L.map.depthTexture=new _i(n.x,n.y,Ln)),L.map.depthTexture.name=H.name+".shadowMap",L.map.depthTexture.format=qn,this.type===Wo?(L.map.depthTexture.compareFunction=$?Yc:qc,L.map.depthTexture.minFilter=pe,L.map.depthTexture.magFilter=pe):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=ce,L.map.depthTexture.magFilter=ce);L.camera.updateProjectionMatrix()}let R=L.map.isWebGLCubeRenderTarget?6:1;for(let tA=0;tA<R;tA++){if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,tA),i.clear();else{tA===0&&(i.setRenderTarget(L.map),i.clear());let lA=L.getViewport(tA);s.set(r.x*lA.x,r.y*lA.y,r.x*lA.z,r.y*lA.w),D.viewport(s)}if(H.isPointLight){let lA=L.camera,LA=L.matrix,WA=H.distance||lA.far;WA!==lA.far&&(lA.far=WA,lA.updateProjectionMatrix()),ta.setFromMatrixPosition(H.matrixWorld),lA.position.copy(ta),Gf.copy(lA.position),Gf.add(yw[tA]),lA.up.copy(Sw[tA]),lA.lookAt(Gf),lA.updateMatrixWorld(),LA.makeTranslation(-ta.x,-ta.y,-ta.z),a_.multiplyMatrices(lA.projectionMatrix,lA.matrixWorldInverse),L._frustum.setFromProjectionMatrix(a_,lA.coordinateSystem,lA.reversedDepth)}else L.updateMatrices(H);e=L.getFrustum(),v(b,_,L.camera,H,this.type)}L.isPointLightShadow!==!0&&this.type===Ts&&S(L,_),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,C,I)};function S(E,b){let _=A.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ln(n.x,n.y,{format:tr,type:Kn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,_,h,g,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,_,u,g,null)}function M(E,b,_,w){let C=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?a:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let D=C.uuid,W=b.uuid,k=l[D];k===void 0&&(k={},l[D]=k);let U=k[W];U===void 0&&(U=C.clone(),k[W]=U,b.addEventListener("dispose",y)),C=U}if(C.visible=b.visible,C.wireframe=b.wireframe,w===Ts?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=_}return C}function v(E,b,_,w,C){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ts)&&(!E.frustumCulled||e.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let W=A.update(E),k=E.material;if(Array.isArray(k)){let U=W.groups;for(let H=0,L=U.length;H<L;H++){let V=U[H],$=k[V.materialIndex];if($&&$.visible){let R=M(E,$,w,C);E.onBeforeShadow(i,E,b,_,W,R,V),i.renderBufferDirect(_,null,W,R,E,V),E.onAfterShadow(i,E,b,_,W,R,V)}}}else if(k.visible){let U=M(E,k,w,C);E.onBeforeShadow(i,E,b,_,W,U,null),i.renderBufferDirect(_,null,W,U,E,null),E.onAfterShadow(i,E,b,_,W,U,null)}}let D=E.children;for(let W=0,k=D.length;W<k;W++)v(D[W],b,_,w,C)}function y(E){E.target.removeEventListener("dispose",y);for(let _ in l){let w=l[_],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function bw(i,A){function t(){let N=!1,uA=new Ft,AA=null,mA=new Ft(0,0,0,0);return{setMask:function(gA){AA!==gA&&!N&&(i.colorMask(gA,gA,gA,gA),AA=gA)},setLocked:function(gA){N=gA},setClear:function(gA,eA,sA,nA,OA){OA===!0&&(gA*=nA,eA*=nA,sA*=nA),uA.set(gA,eA,sA,nA),mA.equals(uA)===!1&&(i.clearColor(gA,eA,sA,nA),mA.copy(uA))},reset:function(){N=!1,AA=null,mA.set(-1,0,0,0)}}}function e(){let N=!1,uA=!1,AA=null,mA=null,gA=null;return{setReversed:function(eA){if(uA!==eA){let sA=A.get("EXT_clip_control");eA?sA.clipControlEXT(sA.LOWER_LEFT_EXT,sA.ZERO_TO_ONE_EXT):sA.clipControlEXT(sA.LOWER_LEFT_EXT,sA.NEGATIVE_ONE_TO_ONE_EXT),uA=eA;let nA=gA;gA=null,this.setClear(nA)}},getReversed:function(){return uA},setTest:function(eA){eA?iA(i.DEPTH_TEST):CA(i.DEPTH_TEST)},setMask:function(eA){AA!==eA&&!N&&(i.depthMask(eA),AA=eA)},setFunc:function(eA){if(uA&&(eA=Fg[eA]),mA!==eA){switch(eA){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mA=eA}},setLocked:function(eA){N=eA},setClear:function(eA){gA!==eA&&(gA=eA,uA&&(eA=1-eA),i.clearDepth(eA))},reset:function(){N=!1,AA=null,mA=null,gA=null,uA=!1}}}function n(){let N=!1,uA=null,AA=null,mA=null,gA=null,eA=null,sA=null,nA=null,OA=null;return{setTest:function(oA){N||(oA?iA(i.STENCIL_TEST):CA(i.STENCIL_TEST))},setMask:function(oA){uA!==oA&&!N&&(i.stencilMask(oA),uA=oA)},setFunc:function(oA,zA,PA){(AA!==oA||mA!==zA||gA!==PA)&&(i.stencilFunc(oA,zA,PA),AA=oA,mA=zA,gA=PA)},setOp:function(oA,zA,PA){(eA!==oA||sA!==zA||nA!==PA)&&(i.stencilOp(oA,zA,PA),eA=oA,sA=zA,nA=PA)},setLocked:function(oA){N=oA},setClear:function(oA){OA!==oA&&(i.clearStencil(oA),OA=oA)},reset:function(){N=!1,uA=null,AA=null,mA=null,gA=null,eA=null,sA=null,nA=null,OA=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},f={},h={},u=new WeakMap,d=[],g=null,p=!1,m=null,S=null,M=null,v=null,y=null,E=null,b=null,_=new At(0,0,0),w=0,C=!1,I=null,D=null,W=null,k=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,V=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),L=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),L=V>=2);let R=null,tA={},lA=i.getParameter(i.SCISSOR_BOX),LA=i.getParameter(i.VIEWPORT),WA=new Ft().fromArray(lA),kA=new Ft().fromArray(LA);function K(N,uA,AA,mA){let gA=new Uint8Array(4),eA=i.createTexture();i.bindTexture(N,eA),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let sA=0;sA<AA;sA++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(uA,0,i.RGBA,1,1,mA,0,i.RGBA,i.UNSIGNED_BYTE,gA):i.texImage2D(uA+sA,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gA);return eA}let rA={};rA[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),rA[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rA[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rA[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),iA(i.DEPTH_TEST),s.setFunc(Pr),Y(!1),ut(sf),iA(i.CULL_FACE),JA($n);function iA(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function CA(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function VA(N,uA){return h[N]!==uA?(i.bindFramebuffer(N,uA),h[N]=uA,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=uA),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=uA),!0):!1}function wA(N,uA){let AA=d,mA=!1;if(N){AA=u.get(uA),AA===void 0&&(AA=[],u.set(uA,AA));let gA=N.textures;if(AA.length!==gA.length||AA[0]!==i.COLOR_ATTACHMENT0){for(let eA=0,sA=gA.length;eA<sA;eA++)AA[eA]=i.COLOR_ATTACHMENT0+eA;AA.length=gA.length,mA=!0}}else AA[0]!==i.BACK&&(AA[0]=i.BACK,mA=!0);mA&&i.drawBuffers(AA)}function ot(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let SA={[Xi]:i.FUNC_ADD,[sg]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};SA[ag]=i.MIN,SA[lg]=i.MAX;let XA={[cg]:i.ZERO,[hg]:i.ONE,[ug]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[mg]:i.DST_COLOR,[dg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[pg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[vg]:i.ONE_MINUS_CONSTANT_COLOR,[yg]:i.CONSTANT_ALPHA,[Sg]:i.ONE_MINUS_CONSTANT_ALPHA};function JA(N,uA,AA,mA,gA,eA,sA,nA,OA,oA){if(N===$n){p===!0&&(CA(i.BLEND),p=!1);return}if(p===!1&&(iA(i.BLEND),p=!0),N!==rg){if(N!==m||oA!==C){if((S!==Xi||y!==Xi)&&(i.blendEquation(i.FUNC_ADD),S=Xi,y=Xi),oA)switch(N){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qA("WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case of:qA("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:qA("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qA("WebGLState: Invalid blending: ",N);break}M=null,v=null,E=null,b=null,_.set(0,0,0),w=0,m=N,C=oA}return}gA=gA||uA,eA=eA||AA,sA=sA||mA,(uA!==S||gA!==y)&&(i.blendEquationSeparate(SA[uA],SA[gA]),S=uA,y=gA),(AA!==M||mA!==v||eA!==E||sA!==b)&&(i.blendFuncSeparate(XA[AA],XA[mA],XA[eA],XA[sA]),M=AA,v=mA,E=eA,b=sA),(nA.equals(_)===!1||OA!==w)&&(i.blendColor(nA.r,nA.g,nA.b,OA),_.copy(nA),w=OA),m=N,C=!1}function ZA(N,uA){N.side===Jn?CA(i.CULL_FACE):iA(i.CULL_FACE);let AA=N.side===me;uA&&(AA=!AA),Y(AA),N.blending===Cr&&N.transparent===!1?JA($n):JA(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);let mA=N.stencilWrite;o.setTest(mA),mA&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?iA(i.SAMPLE_ALPHA_TO_COVERAGE):CA(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function ut(N){N!==eg?(iA(i.CULL_FACE),N!==D&&(N===sf?i.cullFace(i.BACK):N===ng?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):CA(i.CULL_FACE),D=N}function _t(N){N!==W&&(L&&i.lineWidth(N),W=N)}function Tt(N,uA,AA){N?(iA(i.POLYGON_OFFSET_FILL),(k!==uA||U!==AA)&&(k=uA,U=AA,s.getReversed()&&(uA=-uA),i.polygonOffset(uA,AA))):CA(i.POLYGON_OFFSET_FILL)}function $A(N){N?iA(i.SCISSOR_TEST):CA(i.SCISSOR_TEST)}function dt(N){N===void 0&&(N=i.TEXTURE0+H-1),R!==N&&(i.activeTexture(N),R=N)}function B(N,uA,AA){AA===void 0&&(R===null?AA=i.TEXTURE0+H-1:AA=R);let mA=tA[AA];mA===void 0&&(mA={type:void 0,texture:void 0},tA[AA]=mA),(mA.type!==N||mA.texture!==uA)&&(R!==AA&&(i.activeTexture(AA),R=AA),i.bindTexture(N,uA||rA[N]),mA.type=N,mA.texture=uA)}function Ot(){let N=tA[R];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function YA(){try{i.compressedTexImage2D(...arguments)}catch(N){qA("WebGLState:",N)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(N){qA("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){qA("WebGLState:",N)}}function z(){try{i.texSubImage3D(...arguments)}catch(N){qA("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){qA("WebGLState:",N)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(N){qA("WebGLState:",N)}}function hA(){try{i.texStorage2D(...arguments)}catch(N){qA("WebGLState:",N)}}function aA(){try{i.texStorage3D(...arguments)}catch(N){qA("WebGLState:",N)}}function Q(){try{i.texImage2D(...arguments)}catch(N){qA("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){qA("WebGLState:",N)}}function dA(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function EA(N,uA){f[N]!==uA&&(i.pixelStorei(N,uA),f[N]=uA)}function pA(N){WA.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),WA.copy(N))}function fA(N){kA.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),kA.copy(N))}function cA(N,uA){let AA=l.get(uA);AA===void 0&&(AA=new WeakMap,l.set(uA,AA));let mA=AA.get(N);mA===void 0&&(mA=i.getUniformBlockIndex(uA,N.name),AA.set(N,mA))}function DA(N,uA){let mA=l.get(uA).get(N);a.get(uA)!==mA&&(i.uniformBlockBinding(uA,mA,N.__bindingPointIndex),a.set(uA,mA))}function FA(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},f={},R=null,tA={},h={},u=new WeakMap,d=[],g=null,p=!1,m=null,S=null,M=null,v=null,y=null,E=null,b=null,_=new At(0,0,0),w=0,C=!1,I=null,D=null,W=null,k=null,U=null,WA.set(0,0,i.canvas.width,i.canvas.height),kA.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:iA,disable:CA,bindFramebuffer:VA,drawBuffers:wA,useProgram:ot,setBlending:JA,setMaterial:ZA,setFlipSided:Y,setCullFace:ut,setLineWidth:_t,setPolygonOffset:Tt,setScissorTest:$A,activeTexture:dt,bindTexture:B,unbindTexture:Ot,compressedTexImage2D:YA,compressedTexImage3D:P,texImage2D:Q,texImage3D:j,pixelStorei:EA,getParameter:dA,updateUBOMapping:cA,uniformBlockBinding:DA,texStorage2D:hA,texStorage3D:aA,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:pA,viewport:fA,reset:FA}}function ww(i,A,t,e,n,r,s){let o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new GA,c=new WeakMap,f=new Set,h,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,x){return d?new OffscreenCanvas(P,x):wo("canvas")}function p(P,x,z){let X=1,J=YA(P);if((J.width>z||J.height>z)&&(X=z/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let hA=Math.floor(X*J.width),aA=Math.floor(X*J.height);h===void 0&&(h=g(hA,aA));let Q=x?g(hA,aA):h;return Q.width=hA,Q.height=aA,Q.getContext("2d").drawImage(P,0,0,hA,aA),HA("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+hA+"x"+aA+")."),Q}else return"data"in P&&HA("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,x,z,X,J,hA=!1){if(P!==null){if(i[P]!==void 0)return i[P];HA("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let aA;X&&(aA=A.get("EXT_texture_norm16"),aA||HA("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&aA&&(Q=aA.R16_EXT),z===i.SHORT&&aA&&(Q=aA.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&aA&&(Q=aA.RG16_EXT),z===i.SHORT&&aA&&(Q=aA.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&aA&&(Q=aA.RGB16_EXT),z===i.SHORT&&aA&&(Q=aA.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let j=hA?Mo:lt.getTransfer(J);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=j===mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&aA&&(Q=aA.RGBA16_EXT),z===i.SHORT&&aA&&(Q=aA.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&A.get("EXT_color_buffer_float"),Q}function y(P,x){let z;return P?x===null||x===Ln||x===Ps?z=i.DEPTH24_STENCIL8:x===Nn?z=i.DEPTH32F_STENCIL8:x===Cs&&(z=i.DEPTH24_STENCIL8,HA("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ln||x===Ps?z=i.DEPTH_COMPONENT24:x===Nn?z=i.DEPTH_COMPONENT32F:x===Cs&&(z=i.DEPTH_COMPONENT16),z}function E(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ce&&P.minFilter!==pe?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function b(P){let x=P.target;x.removeEventListener("dispose",b),w(x),x.isVideoTexture&&c.delete(x),x.isHTMLTexture&&f.delete(x)}function _(P){let x=P.target;x.removeEventListener("dispose",_),I(x)}function w(P){let x=e.get(P);if(x.__webglInit===void 0)return;let z=P.source,X=u.get(z);if(X){let J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(P),Object.keys(X).length===0&&u.delete(z)}e.remove(P)}function C(P){let x=e.get(P);i.deleteTexture(x.__webglTexture);let z=P.source,X=u.get(z);delete X[x.__cacheKey],s.memory.textures--}function I(P){let x=e.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),e.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[X][J]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=P.textures;for(let X=0,J=z.length;X<J;X++){let hA=e.get(z[X]);hA.__webglTexture&&(i.deleteTexture(hA.__webglTexture),s.memory.textures--),e.remove(z[X])}e.remove(P)}let D=0;function W(){D=0}function k(){return D}function U(P){D=P}function H(){let P=D;return P>=n.maxTextures&&HA("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),D+=1,P}function L(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function V(P,x){let z=e.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let X=P.image;if(X===null)HA("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)HA("WebGLRenderer: Texture marked for update but image is incomplete");else{CA(z,P,x);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function $(P,x){let z=e.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){CA(z,P,x);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function R(P,x){let z=e.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){CA(z,P,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function tA(P,x){let z=e.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){VA(z,P,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let lA={[El]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},LA={[ce]:i.NEAREST,[wg]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[pe]:i.LINEAR,[lc]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},WA={[Cg]:i.NEVER,[Lg]:i.ALWAYS,[Pg]:i.LESS,[qc]:i.LEQUAL,[Rg]:i.EQUAL,[Yc]:i.GEQUAL,[Ig]:i.GREATER,[Dg]:i.NOTEQUAL};function kA(P,x){if(x.type===Nn&&A.has("OES_texture_float_linear")===!1&&(x.magFilter===pe||x.magFilter===lc||x.magFilter===qo||x.magFilter===ji||x.minFilter===pe||x.minFilter===lc||x.minFilter===qo||x.minFilter===ji)&&HA("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,lA[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,lA[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,lA[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,LA[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,LA[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,WA[x.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ce||x.minFilter!==qo&&x.minFilter!==ji||x.type===Nn&&A.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||e.get(x).__currentAnisotropy){let z=A.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),e.get(x).__currentAnisotropy=x.anisotropy}}}function K(P,x){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",b));let X=x.source,J=u.get(X);J===void 0&&(J={},u.set(X,J));let hA=L(x);if(hA!==P.__cacheKey){J[hA]===void 0&&(J[hA]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),J[hA].usedTimes++;let aA=J[P.__cacheKey];aA!==void 0&&(J[P.__cacheKey].usedTimes--,aA.usedTimes===0&&C(x)),P.__cacheKey=hA,P.__webglTexture=J[hA].texture}return z}function rA(P,x,z){return Math.floor(Math.floor(P/z)/x)}function iA(P,x,z,X){let hA=P.updateRanges;if(hA.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,X,x.data);else{hA.sort((EA,pA)=>EA.start-pA.start);let aA=0;for(let EA=1;EA<hA.length;EA++){let pA=hA[aA],fA=hA[EA],cA=pA.start+pA.count,DA=rA(fA.start,x.width,4),FA=rA(pA.start,x.width,4);fA.start<=cA+1&&DA===FA&&rA(fA.start+fA.count-1,x.width,4)===DA?pA.count=Math.max(pA.count,fA.start+fA.count-pA.start):(++aA,hA[aA]=fA)}hA.length=aA+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),dA=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let EA=0,pA=hA.length;EA<pA;EA++){let fA=hA[EA],cA=Math.floor(fA.start/4),DA=Math.ceil(fA.count/4),FA=cA%x.width,N=Math.floor(cA/x.width),uA=DA,AA=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,FA),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,FA,N,uA,AA,z,X,x.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,dA)}}function CA(P,x,z){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let J=K(P,x),hA=x.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+z);let aA=e.get(hA);if(hA.version!==aA.__version||J===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let AA=lt.getPrimaries(lt.workingColorSpace),mA=x.colorSpace===xi?null:lt.getPrimaries(x.colorSpace),gA=x.colorSpace===xi||AA===mA?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gA)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=p(x.image,!1,n.maxTextureSize);j=Ot(x,j);let dA=r.convert(x.format,x.colorSpace),EA=r.convert(x.type),pA=v(x.internalFormat,dA,EA,x.normalized,x.colorSpace,x.isVideoTexture);kA(X,x);let fA,cA=x.mipmaps,DA=x.isVideoTexture!==!0,FA=aA.__version===void 0||J===!0,N=hA.dataReady,uA=E(x,j);if(x.isDepthTexture)pA=y(x.format===Ar,x.type),FA&&(DA?t.texStorage2D(i.TEXTURE_2D,1,pA,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,pA,j.width,j.height,0,dA,EA,null));else if(x.isDataTexture)if(cA.length>0){DA&&FA&&t.texStorage2D(i.TEXTURE_2D,uA,pA,cA[0].width,cA[0].height);for(let AA=0,mA=cA.length;AA<mA;AA++)fA=cA[AA],DA?N&&t.texSubImage2D(i.TEXTURE_2D,AA,0,0,fA.width,fA.height,dA,EA,fA.data):t.texImage2D(i.TEXTURE_2D,AA,pA,fA.width,fA.height,0,dA,EA,fA.data);x.generateMipmaps=!1}else DA?(FA&&t.texStorage2D(i.TEXTURE_2D,uA,pA,j.width,j.height),N&&iA(x,j,dA,EA)):t.texImage2D(i.TEXTURE_2D,0,pA,j.width,j.height,0,dA,EA,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){DA&&FA&&t.texStorage3D(i.TEXTURE_2D_ARRAY,uA,pA,cA[0].width,cA[0].height,j.depth);for(let AA=0,mA=cA.length;AA<mA;AA++)if(fA=cA[AA],x.format!==bn)if(dA!==null)if(DA){if(N)if(x.layerUpdates.size>0){let gA=Df(fA.width,fA.height,x.format,x.type);for(let eA of x.layerUpdates){let sA=fA.data.subarray(eA*gA/fA.data.BYTES_PER_ELEMENT,(eA+1)*gA/fA.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,AA,0,0,eA,fA.width,fA.height,1,dA,sA)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,AA,0,0,0,fA.width,fA.height,j.depth,dA,fA.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,AA,pA,fA.width,fA.height,j.depth,0,fA.data,0,0);else HA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else DA?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,AA,0,0,0,fA.width,fA.height,j.depth,dA,EA,fA.data):t.texImage3D(i.TEXTURE_2D_ARRAY,AA,pA,fA.width,fA.height,j.depth,0,dA,EA,fA.data)}else{DA&&FA&&t.texStorage2D(i.TEXTURE_2D,uA,pA,cA[0].width,cA[0].height);for(let AA=0,mA=cA.length;AA<mA;AA++)fA=cA[AA],x.format!==bn?dA!==null?DA?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,AA,0,0,fA.width,fA.height,dA,fA.data):t.compressedTexImage2D(i.TEXTURE_2D,AA,pA,fA.width,fA.height,0,fA.data):HA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):DA?N&&t.texSubImage2D(i.TEXTURE_2D,AA,0,0,fA.width,fA.height,dA,EA,fA.data):t.texImage2D(i.TEXTURE_2D,AA,pA,fA.width,fA.height,0,dA,EA,fA.data)}else if(x.isDataArrayTexture)if(DA){if(FA&&t.texStorage3D(i.TEXTURE_2D_ARRAY,uA,pA,j.width,j.height,j.depth),N)if(x.layerUpdates.size>0){let AA=Df(j.width,j.height,x.format,x.type);for(let mA of x.layerUpdates){let gA=j.data.subarray(mA*AA/j.data.BYTES_PER_ELEMENT,(mA+1)*AA/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mA,j.width,j.height,1,dA,EA,gA)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dA,EA,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pA,j.width,j.height,j.depth,0,dA,EA,j.data);else if(x.isData3DTexture)DA?(FA&&t.texStorage3D(i.TEXTURE_3D,uA,pA,j.width,j.height,j.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dA,EA,j.data)):t.texImage3D(i.TEXTURE_3D,0,pA,j.width,j.height,j.depth,0,dA,EA,j.data);else if(x.isFramebufferTexture){if(FA)if(DA)t.texStorage2D(i.TEXTURE_2D,uA,pA,j.width,j.height);else{let AA=j.width,mA=j.height;for(let gA=0;gA<uA;gA++)t.texImage2D(i.TEXTURE_2D,gA,pA,AA,mA,0,dA,EA,null),AA>>=1,mA>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let AA=i.canvas;if(AA.hasAttribute("layoutsubtree")||AA.setAttribute("layoutsubtree","true"),j.parentNode!==AA){AA.appendChild(j),f.add(x),AA.onpaint=mA=>{let gA=mA.changedElements;for(let eA of f)gA.includes(eA.image)&&(eA.needsUpdate=!0)},AA.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let gA=i.RGBA,eA=i.RGBA,sA=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gA,eA,sA,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(cA.length>0){if(DA&&FA){let AA=YA(cA[0]);t.texStorage2D(i.TEXTURE_2D,uA,pA,AA.width,AA.height)}for(let AA=0,mA=cA.length;AA<mA;AA++)fA=cA[AA],DA?N&&t.texSubImage2D(i.TEXTURE_2D,AA,0,0,dA,EA,fA):t.texImage2D(i.TEXTURE_2D,AA,pA,dA,EA,fA);x.generateMipmaps=!1}else if(DA){if(FA){let AA=YA(j);t.texStorage2D(i.TEXTURE_2D,uA,pA,AA.width,AA.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,dA,EA,j)}else t.texImage2D(i.TEXTURE_2D,0,pA,dA,EA,j);m(x)&&S(X),aA.__version=hA.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function VA(P,x,z){if(x.image.length!==6)return;let X=K(P,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let hA=e.get(J);if(J.version!==hA.__version||X===!0){t.activeTexture(i.TEXTURE0+z);let aA=lt.getPrimaries(lt.workingColorSpace),Q=x.colorSpace===xi?null:lt.getPrimaries(x.colorSpace),j=x.colorSpace===xi||aA===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let dA=x.isCompressedTexture||x.image[0].isCompressedTexture,EA=x.image[0]&&x.image[0].isDataTexture,pA=[];for(let eA=0;eA<6;eA++)!dA&&!EA?pA[eA]=p(x.image[eA],!0,n.maxCubemapSize):pA[eA]=EA?x.image[eA].image:x.image[eA],pA[eA]=Ot(x,pA[eA]);let fA=pA[0],cA=r.convert(x.format,x.colorSpace),DA=r.convert(x.type),FA=v(x.internalFormat,cA,DA,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,uA=hA.__version===void 0||X===!0,AA=J.dataReady,mA=E(x,fA);kA(i.TEXTURE_CUBE_MAP,x);let gA;if(dA){N&&uA&&t.texStorage2D(i.TEXTURE_CUBE_MAP,mA,FA,fA.width,fA.height);for(let eA=0;eA<6;eA++){gA=pA[eA].mipmaps;for(let sA=0;sA<gA.length;sA++){let nA=gA[sA];x.format!==bn?cA!==null?N?AA&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA,0,0,nA.width,nA.height,cA,nA.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA,FA,nA.width,nA.height,0,nA.data):HA("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?AA&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA,0,0,nA.width,nA.height,cA,DA,nA.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA,FA,nA.width,nA.height,0,cA,DA,nA.data)}}}else{if(gA=x.mipmaps,N&&uA){gA.length>0&&mA++;let eA=YA(pA[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,mA,FA,eA.width,eA.height)}for(let eA=0;eA<6;eA++)if(EA){N?AA&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0,0,0,pA[eA].width,pA[eA].height,cA,DA,pA[eA].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0,FA,pA[eA].width,pA[eA].height,0,cA,DA,pA[eA].data);for(let sA=0;sA<gA.length;sA++){let OA=gA[sA].image[eA].image;N?AA&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA+1,0,0,OA.width,OA.height,cA,DA,OA.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA+1,FA,OA.width,OA.height,0,cA,DA,OA.data)}}else{N?AA&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0,0,0,cA,DA,pA[eA]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0,FA,cA,DA,pA[eA]);for(let sA=0;sA<gA.length;sA++){let nA=gA[sA];N?AA&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA+1,0,0,cA,DA,nA.image[eA]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+eA,sA+1,FA,cA,DA,nA.image[eA])}}}m(x)&&S(i.TEXTURE_CUBE_MAP),hA.__version=J.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function wA(P,x,z,X,J,hA){let aA=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),j=v(z.internalFormat,aA,Q,z.normalized,z.colorSpace),dA=e.get(x),EA=e.get(z);if(EA.__renderTarget=x,!dA.__hasExternalTextures){let pA=Math.max(1,x.width>>hA),fA=Math.max(1,x.height>>hA);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,hA,j,pA,fA,x.depth,0,aA,Q,null):t.texImage2D(J,hA,j,pA,fA,0,aA,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,EA.__webglTexture,0,$A(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,EA.__webglTexture,hA),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(P,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,hA=y(x.stencilBuffer,J),aA=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$A(x),hA,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,$A(x),hA,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,hA,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,aA,i.RENDERBUFFER,P)}else{let X=x.textures;for(let J=0;J<X.length;J++){let hA=X[J],aA=r.convert(hA.format,hA.colorSpace),Q=r.convert(hA.type),j=v(hA.internalFormat,aA,Q,hA.normalized,hA.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$A(x),j,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,$A(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function SA(P,x,z){let X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=e.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",b)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kA(i.TEXTURE_CUBE_MAP,x.depthTexture);let dA=r.convert(x.depthTexture.format),EA=r.convert(x.depthTexture.type),pA;x.depthTexture.format===qn?pA=i.DEPTH_COMPONENT24:x.depthTexture.format===Ar&&(pA=i.DEPTH24_STENCIL8);for(let fA=0;fA<6;fA++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fA,0,pA,x.width,x.height,0,dA,EA,null)}}else V(x.depthTexture,0);let hA=J.__webglTexture,aA=$A(x),Q=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=x.depthTexture.format===Ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===qn)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,hA,0,aA):i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,hA,0);else if(x.depthTexture.format===Ar)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,hA,0,aA):i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,hA,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function XA(P){let x=e.get(P),z=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)SA(x.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?SA(x.__webglFramebuffer[0],P,0):SA(x.__webglFramebuffer,P,0)}else if(z){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),ot(x.__webglDepthbuffer[X],P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,hA=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,hA),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,hA)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ot(x.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,hA=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,hA),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,hA)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function JA(P,x,z){let X=e.get(P);x!==void 0&&wA(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&XA(P)}function ZA(P){let x=P.texture,z=e.get(P),X=e.get(x);P.addEventListener("dispose",_);let J=P.textures,hA=P.isWebGLCubeRenderTarget===!0,aA=J.length>1;if(aA||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,s.memory.textures++),hA){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let j=0;j<x.mipmaps.length;j++)z.__webglFramebuffer[Q][j]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(aA)for(let Q=0,j=J.length;Q<j;Q++){let dA=e.get(J[Q]);dA.__webglTexture===void 0&&(dA.__webglTexture=i.createTexture(),s.memory.textures++)}if(P.samples>0&&dt(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let j=J[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let dA=r.convert(j.format,j.colorSpace),EA=r.convert(j.type),pA=v(j.internalFormat,dA,EA,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),fA=$A(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,fA,pA,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(hA){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),kA(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)wA(z.__webglFramebuffer[Q][j],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else wA(z.__webglFramebuffer[Q],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(aA){for(let Q=0,j=J.length;Q<j;Q++){let dA=J[Q],EA=e.get(dA),pA=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pA=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pA,EA.__webglTexture),kA(pA,dA),wA(z.__webglFramebuffer,P,dA,i.COLOR_ATTACHMENT0+Q,pA,0),m(dA)&&S(pA)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),kA(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)wA(z.__webglFramebuffer[j],P,x,i.COLOR_ATTACHMENT0,Q,j);else wA(z.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,Q,0);m(x)&&S(Q),t.unbindTexture()}P.depthBuffer&&XA(P)}function Y(P){let x=P.textures;for(let z=0,X=x.length;z<X;z++){let J=x[z];if(m(J)){let hA=M(P),aA=e.get(J).__webglTexture;t.bindTexture(hA,aA),S(hA),t.unbindTexture()}}}let ut=[],_t=[];function Tt(P){if(P.samples>0){if(dt(P)===!1){let x=P.textures,z=P.width,X=P.height,J=i.COLOR_BUFFER_BIT,hA=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,aA=e.get(P),Q=x.length>1;if(Q)for(let dA=0;dA<x.length;dA++)t.bindFramebuffer(i.FRAMEBUFFER,aA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dA,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,aA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dA,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,aA.__webglMultisampledFramebuffer);let j=P.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,aA.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,aA.__webglFramebuffer);for(let dA=0;dA<x.length;dA++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,aA.__webglColorRenderbuffer[dA]);let EA=e.get(x[dA]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,EA,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,J,i.NEAREST),a===!0&&(ut.length=0,_t.length=0,ut.push(i.COLOR_ATTACHMENT0+dA),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ut.push(hA),_t.push(hA),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let dA=0;dA<x.length;dA++){t.bindFramebuffer(i.FRAMEBUFFER,aA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dA,i.RENDERBUFFER,aA.__webglColorRenderbuffer[dA]);let EA=e.get(x[dA]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,aA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dA,i.TEXTURE_2D,EA,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,aA.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&a){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $A(P){return Math.min(n.maxSamples,P.samples)}function dt(P){let x=e.get(P);return P.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(P){let x=s.render.frame;c.get(P)!==x&&(c.set(P,x),P.update())}function Ot(P,x){let z=P.colorSpace,X=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==So&&z!==xi&&(lt.getTransfer(z)===mt?(X!==bn||J!==un)&&HA("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qA("WebGLTextures: Unsupported texture color space:",z)),x}function YA(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=R,this.setTextureCube=tA,this.rebindTextures=JA,this.setupRenderTarget=ZA,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=XA,this.setupFrameBufferTexture=wA,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tw(i,A){function t(e,n=xi){let r,s=lt.getTransfer(n);if(e===un)return i.UNSIGNED_BYTE;if(e===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(e===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(e===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(e===yf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(e===_f)return i.BYTE;if(e===xf)return i.SHORT;if(e===Cs)return i.UNSIGNED_SHORT;if(e===cc)return i.INT;if(e===Ln)return i.UNSIGNED_INT;if(e===Nn)return i.FLOAT;if(e===Kn)return i.HALF_FLOAT;if(e===Sf)return i.ALPHA;if(e===Mf)return i.RGB;if(e===bn)return i.RGBA;if(e===qn)return i.DEPTH_COMPONENT;if(e===Ar)return i.DEPTH_STENCIL;if(e===bf)return i.RED;if(e===fc)return i.RED_INTEGER;if(e===tr)return i.RG;if(e===dc)return i.RG_INTEGER;if(e===pc)return i.RGBA_INTEGER;if(e===Yo||e===Zo||e===Jo||e===$o)if(s===mt)if(r=A.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(e===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=A.get("WEBGL_compressed_texture_s3tc"),r!==null){if(e===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===mc||e===gc||e===_c||e===xc)if(r=A.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(e===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===vc||e===yc||e===Sc||e===Mc||e===bc||e===Ko||e===wc)if(r=A.get("WEBGL_compressed_texture_etc"),r!==null){if(e===vc||e===yc)return s===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(e===Sc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(e===Mc)return r.COMPRESSED_R11_EAC;if(e===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(e===Ko)return r.COMPRESSED_RG11_EAC;if(e===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(e===Tc||e===Ec||e===Cc||e===Pc||e===Rc||e===Ic||e===Dc||e===Lc||e===Nc||e===Bc||e===Uc||e===Fc||e===Oc||e===zc)if(r=A.get("WEBGL_compressed_texture_astc"),r!==null){if(e===Tc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Ec)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Cc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===Pc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===Rc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===Ic)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===Dc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===Lc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===Nc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===Bc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===Uc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===Fc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===Oc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===zc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===Hc||e===kc||e===Vc)if(r=A.get("EXT_texture_compression_bptc"),r!==null){if(e===Hc)return s===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===Gc||e===Wc||e===Qo||e===Xc)if(r=A.get("EXT_texture_compression_rgtc"),r!==null){if(e===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(e===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===Ps?i.UNSIGNED_INT_24_8:i[e]!==void 0?i[e]:null}return{convert:t}}var Ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,t){if(this.texture===null){let e=new Uo(A.texture);(A.depthNear!==t.depthNear||A.depthFar!==t.depthFar)&&(this.depthNear=A.depthNear,this.depthFar=A.depthFar),this.texture=e}}getMesh(A){if(this.texture!==null&&this.mesh===null){let t=A.cameras[0].viewport,e=new he({vertexShader:Ew,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Oo(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qf=class extends Yn{constructor(A,t){super();let e=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,f=null,h=null,u=null,d=null,g=typeof XRWebGLBinding!="undefined",p=new Kf,m={},S=t.getContextAttributes(),M=null,v=null,y=[],E=[],b=new GA,_=null,w=new Ce;w.viewport=new Ft;let C=new Ce;C.viewport=new Ft;let I=[w,C],D=new rc,W=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rA=y[K];return rA===void 0&&(rA=new Ms,y[K]=rA),rA.getTargetRaySpace()},this.getControllerGrip=function(K){let rA=y[K];return rA===void 0&&(rA=new Ms,y[K]=rA),rA.getGripSpace()},this.getHand=function(K){let rA=y[K];return rA===void 0&&(rA=new Ms,y[K]=rA),rA.getHandSpace()};function U(K){let rA=E.indexOf(K.inputSource);if(rA===-1)return;let iA=y[rA];iA!==void 0&&(iA.update(K.inputSource,K.frame,l||s),iA.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",L);for(let K=0;K<y.length;K++){let rA=E[K];rA!==null&&(E[K]=null,y[K].disconnect(rA))}W=null,k=null,p.reset();for(let K in m)delete m[K];A.setRenderTarget(M),u=null,h=null,f=null,n=null,v=null,kA.stop(),e.isPresenting=!1,A.setPixelRatio(_),A.setSize(b.width,b.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,e.isPresenting===!0&&HA("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,e.isPresenting===!0&&HA("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(n,t)),f},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=A.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",H),n.addEventListener("inputsourceschange",L),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=A.getPixelRatio(),A.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let iA=null,CA=null,VA=null;S.depth&&(VA=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,iA=S.stencil?Ar:qn,CA=S.stencil?Ps:Ln);let wA={colorFormat:t.RGBA8,depthFormat:VA,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(wA),n.updateRenderState({layers:[h]}),A.setPixelRatio(1),A.setSize(h.textureWidth,h.textureHeight,!1),v=new ln(h.textureWidth,h.textureHeight,{format:bn,type:un,depthTexture:new _i(h.textureWidth,h.textureHeight,CA,void 0,void 0,void 0,void 0,void 0,void 0,iA),stencilBuffer:S.stencil,colorSpace:A.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let iA={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,iA),n.updateRenderState({baseLayer:u}),A.setPixelRatio(1),A.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new ln(u.framebufferWidth,u.framebufferHeight,{format:bn,type:un,colorSpace:A.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),kA.setContext(n),kA.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(K){for(let rA=0;rA<K.removed.length;rA++){let iA=K.removed[rA],CA=E.indexOf(iA);CA>=0&&(E[CA]=null,y[CA].disconnect(iA))}for(let rA=0;rA<K.added.length;rA++){let iA=K.added[rA],CA=E.indexOf(iA);if(CA===-1){for(let wA=0;wA<y.length;wA++)if(wA>=E.length){E.push(iA),CA=wA;break}else if(E[wA]===null){E[wA]=iA,CA=wA;break}if(CA===-1)break}let VA=y[CA];VA&&VA.connect(iA)}}let V=new F,$=new F;function R(K,rA,iA){V.setFromMatrixPosition(rA.matrixWorld),$.setFromMatrixPosition(iA.matrixWorld);let CA=V.distanceTo($),VA=rA.projectionMatrix.elements,wA=iA.projectionMatrix.elements,ot=VA[14]/(VA[10]-1),SA=VA[14]/(VA[10]+1),XA=(VA[9]+1)/VA[5],JA=(VA[9]-1)/VA[5],ZA=(VA[8]-1)/VA[0],Y=(wA[8]+1)/wA[0],ut=ot*ZA,_t=ot*Y,Tt=CA/(-ZA+Y),$A=Tt*-ZA;if(rA.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($A),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),VA[10]===-1)K.projectionMatrix.copy(rA.projectionMatrix),K.projectionMatrixInverse.copy(rA.projectionMatrixInverse);else{let dt=ot+Tt,B=SA+Tt,Ot=ut-$A,YA=_t+(CA-$A),P=XA*SA/B*dt,x=JA*SA/B*dt;K.projectionMatrix.makePerspective(Ot,YA,P,x,dt,B),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tA(K,rA){rA===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rA.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let rA=K.near,iA=K.far;p.texture!==null&&(p.depthNear>0&&(rA=p.depthNear),p.depthFar>0&&(iA=p.depthFar)),D.near=C.near=w.near=rA,D.far=C.far=w.far=iA,(W!==D.near||k!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),W=D.near,k=D.far),D.layers.mask=K.layers.mask|6,w.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let CA=K.parent,VA=D.cameras;tA(D,CA);for(let wA=0;wA<VA.length;wA++)tA(VA[wA],CA);VA.length===2?R(D,w,C):D.projectionMatrix.copy(w.projectionMatrix),lA(K,D,CA)};function lA(K,rA,iA){iA===null?K.matrix.copy(rA.matrixWorld):(K.matrix.copy(iA.matrixWorld),K.matrix.invert(),K.matrix.multiply(rA.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rA.projectionMatrix),K.projectionMatrixInverse.copy(rA.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&u===null))return a},this.setFoveation=function(K){a=K,h!==null&&(h.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return m[K]};let LA=null;function WA(K,rA){if(c=rA.getViewerPose(l||s),d=rA,c!==null){let iA=c.views;u!==null&&(A.setRenderTargetFramebuffer(v,u.framebuffer),A.setRenderTarget(v));let CA=!1;iA.length!==D.cameras.length&&(D.cameras.length=0,CA=!0);for(let SA=0;SA<iA.length;SA++){let XA=iA[SA],JA=null;if(u!==null)JA=u.getViewport(XA);else{let Y=f.getViewSubImage(h,XA);JA=Y.viewport,SA===0&&(A.setRenderTargetTextures(v,Y.colorTexture,Y.depthStencilTexture),A.setRenderTarget(v))}let ZA=I[SA];ZA===void 0&&(ZA=new Ce,ZA.layers.enable(SA),ZA.viewport=new Ft,I[SA]=ZA),ZA.matrix.fromArray(XA.transform.matrix),ZA.matrix.decompose(ZA.position,ZA.quaternion,ZA.scale),ZA.projectionMatrix.fromArray(XA.projectionMatrix),ZA.projectionMatrixInverse.copy(ZA.projectionMatrix).invert(),ZA.viewport.set(JA.x,JA.y,JA.width,JA.height),SA===0&&(D.matrix.copy(ZA.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),CA===!0&&D.cameras.push(ZA)}let VA=n.enabledFeatures;if(VA&&VA.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){f=e.getBinding();let SA=f.getDepthInformation(iA[0]);SA&&SA.isValid&&SA.texture&&p.init(SA,n.renderState)}if(VA&&VA.includes("camera-access")&&g){A.state.unbindTexture(),f=e.getBinding();for(let SA=0;SA<iA.length;SA++){let XA=iA[SA].camera;if(XA){let JA=m[XA];JA||(JA=new Uo,m[XA]=JA);let ZA=f.getCameraImage(XA);JA.sourceTexture=ZA}}}}for(let iA=0;iA<y.length;iA++){let CA=E[iA],VA=y[iA];CA!==null&&VA!==void 0&&VA.update(CA,rA,l||s)}LA&&LA(K,rA),rA.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:rA}),d=null}let kA=new l_;kA.setAnimationLoop(WA),this.setAnimationLoop=function(K){LA=K},this.dispose=function(){}}},Pw=new Ut,p_=new QA;p_.set(-1,0,0,0,1,0,0,0,1);function Rw(i,A){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function e(p,m){m.color.getRGB(p.fogColor.value,Pf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,S,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,S,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===me&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===me&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=A.get(m),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(p_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===me&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let S=A.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Iw(i,A,t,e){let n={},r={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,y){let E=y.program;e.uniformBlockBinding(v,E)}function l(v,y){let E=n[v.id];E===void 0&&(p(v),E=c(v),n[v.id]=E,v.addEventListener("dispose",S));let b=y.program;e.updateUBOMapping(v,b);let _=A.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function c(v){let y=f();v.__bindingPointIndex=y;let E=i.createBuffer(),b=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function f(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return qA("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let y=n[v.id],E=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,w=E.length;_<w;_++){let C=E[_];if(Array.isArray(C))for(let I=0,D=C.length;I<D;I++)u(C[I],_,I,b);else u(C,_,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,y,E,b){if(g(v,y,E,b)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let I=0;I<w.length;I++){let D=w[I],W=m(D);d(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function d(v,y,E){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,E)}function g(v,y,E,b){let _=v.value,w=y+"_"+E;if(b[w]===void 0)return typeof _=="number"||typeof _=="boolean"?b[w]=_:ArrayBuffer.isView(_)?b[w]=_.slice():b[w]=_.clone(),!0;{let C=b[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return b[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function p(v){let y=v.uniforms,E=0,b=16;for(let w=0,C=y.length;w<C;w++){let I=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,W=I.length;D<W;D++){let k=I[D],U=Array.isArray(k.value)?k.value:[k.value];for(let H=0,L=U.length;H<L;H++){let V=U[H],$=m(V),R=E%b,tA=R%$.boundary,lA=R+tA;E+=tA,lA!==0&&b-lA<$.storage&&(E+=b-lA),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=$.storage}}}let _=E%b;return _>0&&(E+=b-_),v.__size=E,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?HA("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):HA("WebGLRenderer: Unsupported uniform value type.",v),y}function S(v){let y=v.target;y.removeEventListener("dispose",S);let E=s.indexOf(y.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function M(){for(let v in n)i.deleteBuffer(n[v]);s=[],n={},r={}}return{bind:a,update:l,dispose:M}}var Dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Lw(){return Qn===null&&(Qn=new Nl(Dw,16,16,tr,Kn),Qn.name="DFG_LUT",Qn.minFilter=pe,Qn.magFilter=pe,Qn.wrapS=Xn,Qn.wrapT=Xn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var Qc=class{constructor(A={}){let{canvas:t=Ng(),context:e=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=un}=A;this.isWebGLRenderer=!0;let d;if(e!==null){if(typeof WebGLRenderingContext!="undefined"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=e.getContextAttributes().alpha}else d=s;let g=u,p=new Set([pc,dc,fc]),m=new Set([un,Ln,Cs,Ps,hc,uc]),S=new Uint32Array(4),M=new Int32Array(4),v=new F,y=null,E=null,b=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,D=null,W=null,k=null,U=null;this._outputColorSpace=on;let H=0,L=0,V=null,$=-1,R=null,tA=new Ft,lA=new Ft,LA=null,WA=new At(0),kA=0,K=t.width,rA=t.height,iA=1,CA=null,VA=null,wA=new Ft(0,0,K,rA),ot=new Ft(0,0,K,rA),SA=!1,XA=new Lo,JA=!1,ZA=!1,Y=new Ut,ut=new F,_t=new Ft,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$A=!1;function dt(){return V===null?iA:1}let B=e;function Ot(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",OA,!1),t.addEventListener("webglcontextrestored",oA,!1),t.addEventListener("webglcontextcreationerror",zA,!1),B===null){let O="webgl2";if(B=Ot(O,T),B===null)throw Ot(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw qA("WebGLRenderer: "+T.message),T}let YA,P,x,z,X,J,hA,aA,Q,j,dA,EA,pA,fA,cA,DA,FA,N,uA,AA,mA,gA,eA;function sA(){YA=new HM(B),YA.init(),mA=new Tw(B,YA),P=new DM(B,YA,A,mA),x=new bw(B,YA),P.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),W=B.createFramebuffer(),k=B.createFramebuffer(),U=B.createFramebuffer(),z=new GM(B),X=new cw,J=new ww(B,YA,x,X,P,mA,z),hA=new zM(C),aA=new Yv(B),gA=new RM(B,aA),Q=new kM(B,aA,z,gA),j=new XM(B,Q,aA,gA,z),N=new WM(B,P,J),cA=new LM(X),dA=new lw(C,hA,YA,P,gA,cA),EA=new Rw(C,X),pA=new uw,fA=new _w(YA),FA=new PM(C,hA,x,j,d,a),DA=new Mw(C,j,P),eA=new Iw(B,z,P,x),uA=new IM(B,YA,z),AA=new VM(B,YA,z),z.programs=dA.programs,C.capabilities=P,C.extensions=YA,C.properties=X,C.renderLists=pA,C.shadowMap=DA,C.state=x,C.info=z}sA(),g!==un&&(w=new YM(g,t.width,t.height,o,n,r));let nA=new Qf(C,B);this.xr=nA,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=YA.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=YA.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return iA},this.setPixelRatio=function(T){T!==void 0&&(iA=T,this.setSize(K,rA,!1))},this.getSize=function(T){return T.set(K,rA)},this.setSize=function(T,O,Z=!0){if(nA.isPresenting){HA("WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,rA=O,t.width=Math.floor(T*iA),t.height=Math.floor(O*iA),Z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(K*iA,rA*iA).floor()},this.setDrawingBufferSize=function(T,O,Z){K=T,rA=O,iA=Z,t.width=Math.floor(T*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===un){qA("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){HA("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tA)},this.getViewport=function(T){return T.copy(wA)},this.setViewport=function(T,O,Z,G){T.isVector4?wA.set(T.x,T.y,T.z,T.w):wA.set(T,O,Z,G),x.viewport(tA.copy(wA).multiplyScalar(iA).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,O,Z,G){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,O,Z,G),x.scissor(lA.copy(ot).multiplyScalar(iA).round())},this.getScissorTest=function(){return SA},this.setScissorTest=function(T){x.setScissorTest(SA=T)},this.setOpaqueSort=function(T){CA=T},this.setTransparentSort=function(T){VA=T},this.getClearColor=function(T){return T.copy(FA.getClearColor())},this.setClearColor=function(){FA.setClearColor(...arguments)},this.getClearAlpha=function(){return FA.getClearAlpha()},this.setClearAlpha=function(){FA.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Z=!0){let G=0;if(T){let q=!1;if(V!==null){let _A=V.texture.format;q=p.has(_A)}if(q){let _A=V.texture.type,xA=m.has(_A),yA=FA.getClearColor(),RA=FA.getClearAlpha(),NA=yA.r,jA=yA.g,et=yA.b;xA?(S[0]=NA,S[1]=jA,S[2]=et,S[3]=RA,B.clearBufferuiv(B.COLOR,0,S)):(M[0]=NA,M[1]=jA,M[2]=et,M[3]=RA,B.clearBufferiv(B.COLOR,0,M))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",OA,!1),t.removeEventListener("webglcontextrestored",oA,!1),t.removeEventListener("webglcontextcreationerror",zA,!1),FA.dispose(),pA.dispose(),fA.dispose(),X.dispose(),hA.dispose(),j.dispose(),gA.dispose(),eA.dispose(),dA.dispose(),nA.dispose(),nA.removeEventListener("sessionstart",Rt),nA.removeEventListener("sessionend",vt),ct.stop()};function OA(T){T.preventDefault(),Ef("WebGLRenderer: Context Lost."),I=!0}function oA(){Ef("WebGLRenderer: Context Restored."),I=!1;let T=z.autoReset,O=DA.enabled,Z=DA.autoUpdate,G=DA.needsUpdate,q=DA.type;sA(),z.autoReset=T,DA.enabled=O,DA.autoUpdate=Z,DA.needsUpdate=G,DA.type=q}function zA(T){qA("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function PA(T){let O=T.target;O.removeEventListener("dispose",PA),KA(O)}function KA(T){Jt(T),X.remove(T)}function Jt(T){let O=X.get(T).programs;O!==void 0&&(O.forEach(function(Z){dA.releaseProgram(Z)}),T.isShaderMaterial&&dA.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Z,G,q,_A){O===null&&(O=Tt);let xA=q.isMesh&&q.matrixWorld.determinantAffine()<0,yA=se(T,O,Z,G,q);x.setMaterial(G,xA);let RA=Z.index,NA=1;if(G.wireframe===!0){if(RA=Q.getWireframeAttribute(Z),RA===void 0)return;NA=2}let jA=Z.drawRange,et=Z.attributes.position,BA=jA.start*NA,xt=(jA.start+jA.count)*NA;_A!==null&&(BA=Math.max(BA,_A.start*NA),xt=Math.min(xt,(_A.start+_A.count)*NA)),RA!==null?(BA=Math.max(BA,0),xt=Math.min(xt,RA.count)):et!=null&&(BA=Math.max(BA,0),xt=Math.min(xt,et.count));let qt=xt-BA;if(qt<0||qt===1/0)return;gA.setup(q,G,yA,Z,RA);let Ht,yt=uA;if(RA!==null&&(Ht=aA.get(RA),yt=AA,yt.setIndex(Ht)),q.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*dt()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(q.isLine){let _e=G.linewidth;_e===void 0&&(_e=1),x.setLineWidth(_e*dt()),q.isLineSegments?yt.setMode(B.LINES):q.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else q.isPoints?yt.setMode(B.POINTS):q.isSprite&&yt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(YA.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let _e=q._multiDrawStarts,MA=q._multiDrawCounts,Je=q._multiDrawCount,ft=RA?aA.get(RA).bytesPerElement:1,dn=X.get(G).currentProgram.getUniforms();for(let Un=0;Un<Je;Un++)dn.setValue(B,"_gl_DrawID",Un),yt.render(_e[Un]/ft,MA[Un])}else if(q.isInstancedMesh)yt.renderInstances(BA,qt,q.count);else if(Z.isInstancedBufferGeometry){let _e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,MA=Math.min(Z.instanceCount,_e);yt.renderInstances(BA,qt,MA)}else yt.render(BA,qt)};function rt(T,O,Z){T.transparent===!0&&T.side===Jn&&T.forceSinglePass===!1?(T.side=me,T.needsUpdate=!0,zt(T,O,Z),T.side=gi,T.needsUpdate=!0,zt(T,O,Z),T.side=Jn):zt(T,O,Z)}this.compile=function(T,O,Z=null){Z===null&&(Z=T),E=fA.get(Z),E.init(O),_.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights();let G=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let _A=q.material;if(_A)if(Array.isArray(_A))for(let xA=0;xA<_A.length;xA++){let yA=_A[xA];rt(yA,Z,q),G.add(yA)}else rt(_A,Z,q),G.add(_A)}),E=_.pop(),G},this.compileAsync=function(T,O,Z=null){let G=this.compile(T,O,Z);return new Promise(q=>{function _A(){if(G.forEach(function(xA){X.get(xA).currentProgram.isReady()&&G.delete(xA)}),G.size===0){q(T);return}setTimeout(_A,10)}YA.get("KHR_parallel_shader_compile")!==null?_A():setTimeout(_A,10)})};let Pt=null;function re(T){Pt&&Pt(T)}function Rt(){ct.stop()}function vt(){ct.start()}let ct=new l_;ct.setAnimationLoop(re),typeof self!="undefined"&&ct.setContext(self),this.setAnimationLoop=function(T){Pt=T,nA.setAnimationLoop(T),T===null?ct.stop():ct.start()},nA.addEventListener("sessionstart",Rt),nA.addEventListener("sessionend",vt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){qA("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,O);let Z=nA.enabled===!0&&nA.isPresenting===!0,G=w!==null&&(V===null||Z)&&w.begin(C,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nA.enabled===!0&&nA.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(nA.cameraAutoUpdate===!0&&nA.updateCamera(O),O=nA.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,O,V),E=fA.get(T,_.length),E.init(O),E.state.textureUnits=J.getTextureUnits(),_.push(E),Y.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),XA.setFromProjectionMatrix(Y,In,O.reversedDepth),ZA=this.localClippingEnabled,JA=cA.init(this.clippingPlanes,ZA),y=pA.get(T,b.length),y.init(),b.push(y),nA.enabled===!0&&nA.isPresenting===!0){let xA=C.xr.getDepthSensingMesh();xA!==null&&Ie(xA,O,-1/0,C.sortObjects)}Ie(T,O,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(CA,VA,O.reversedDepth),$A=nA.enabled===!1||nA.isPresenting===!1||nA.hasDepthSensing()===!1,$A&&FA.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),JA===!0&&cA.beginShadows();let q=E.state.shadowsArray;if(DA.render(q,T,O),JA===!0&&cA.endShadows(),(G&&w.hasRenderPass())===!1){let xA=y.opaque,yA=y.transmissive;if(E.setupLights(),O.isArrayCamera){let RA=O.cameras;if(yA.length>0)for(let NA=0,jA=RA.length;NA<jA;NA++){let et=RA[NA];ge(xA,yA,T,et)}$A&&FA.render(T);for(let NA=0,jA=RA.length;NA<jA;NA++){let et=RA[NA];Et(y,T,et,et.viewport)}}else yA.length>0&&ge(xA,yA,T,O),$A&&FA.render(T),Et(y,T,O)}V!==null&&L===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),G&&w.end(C),T.isScene===!0&&T.onAfterRender(C,T,O),gA.resetDefaultState(),$=-1,R=null,_.pop(),_.length>0?(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),JA===!0&&cA.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,D!==null&&D.renderEnd()};function Ie(T,O,Z,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||XA.intersectsSprite(T)){G&&_t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);let xA=j.update(T),yA=T.material;yA.visible&&y.push(T,xA,yA,Z,_t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||XA.intersectsObject(T))){let xA=j.update(T),yA=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_t.copy(T.boundingSphere.center)):(xA.boundingSphere===null&&xA.computeBoundingSphere(),_t.copy(xA.boundingSphere.center)),_t.applyMatrix4(T.matrixWorld).applyMatrix4(Y)),Array.isArray(yA)){let RA=xA.groups;for(let NA=0,jA=RA.length;NA<jA;NA++){let et=RA[NA],BA=yA[et.materialIndex];BA&&BA.visible&&y.push(T,xA,BA,Z,_t.z,et)}}else yA.visible&&y.push(T,xA,yA,Z,_t.z,null)}}let _A=T.children;for(let xA=0,yA=_A.length;xA<yA;xA++)Ie(_A[xA],O,Z,G)}function Et(T,O,Z,G){let{opaque:q,transmissive:_A,transparent:xA}=T;E.setupLightsView(Z),JA===!0&&cA.setGlobalState(C.clippingPlanes,Z),G&&x.viewport(tA.copy(G)),q.length>0&&De(q,O,Z),_A.length>0&&De(_A,O,Z),xA.length>0&&De(xA,O,Z),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ge(T,O,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let BA=YA.has("EXT_color_buffer_half_float")||YA.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:BA?Kn:un,minFilter:ji,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let _A=E.state.transmissionRenderTarget[G.id],xA=G.viewport||tA;_A.setSize(xA.z*C.transmissionResolutionScale,xA.w*C.transmissionResolutionScale);let yA=C.getRenderTarget(),RA=C.getActiveCubeFace(),NA=C.getActiveMipmapLevel();C.setRenderTarget(_A),C.getClearColor(WA),kA=C.getClearAlpha(),kA<1&&C.setClearColor(16777215,.5),C.clear(),$A&&FA.render(Z);let jA=C.toneMapping;C.toneMapping=Dn;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),JA===!0&&cA.setGlobalState(C.clippingPlanes,G),De(T,Z,G),J.updateMultisampleRenderTarget(_A),J.updateRenderTargetMipmap(_A),YA.has("WEBGL_multisampled_render_to_texture")===!1){let BA=!1;for(let xt=0,qt=O.length;xt<qt;xt++){let Ht=O[xt],{object:yt,geometry:_e,material:MA,group:Je}=Ht;if(MA.side===Jn&&yt.layers.test(G.layers)){let ft=MA.side;MA.side=me,MA.needsUpdate=!0,$t(yt,Z,G,_e,MA,Je),MA.side=ft,MA.needsUpdate=!0,BA=!0}}BA===!0&&(J.updateMultisampleRenderTarget(_A),J.updateRenderTargetMipmap(_A))}C.setRenderTarget(yA,RA,NA),C.setClearColor(WA,kA),et!==void 0&&(G.viewport=et),C.toneMapping=jA}function De(T,O,Z){let G=O.isScene===!0?O.overrideMaterial:null;for(let q=0,_A=T.length;q<_A;q++){let xA=T[q],{object:yA,geometry:RA,group:NA}=xA,jA=xA.material;jA.allowOverride===!0&&G!==null&&(jA=G),yA.layers.test(Z.layers)&&$t(yA,O,Z,RA,jA,NA)}}function $t(T,O,Z,G,q,_A){T.onBeforeRender(C,O,Z,G,q,_A),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(C,O,Z,G,T,_A),q.transparent===!0&&q.side===Jn&&q.forceSinglePass===!1?(q.side=me,q.needsUpdate=!0,C.renderBufferDirect(Z,O,G,q,T,_A),q.side=gi,q.needsUpdate=!0,C.renderBufferDirect(Z,O,G,q,T,_A),q.side=Jn):C.renderBufferDirect(Z,O,G,q,T,_A),T.onAfterRender(C,O,Z,G,q,_A)}function zt(T,O,Z){O.isScene!==!0&&(O=Tt);let G=X.get(T),q=E.state.lights,_A=E.state.shadowsArray,xA=q.state.version,yA=dA.getParameters(T,q.state,_A,O,Z,E.state.lightProbeGridArray),RA=dA.getProgramCacheKey(yA),NA=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let jA=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=hA.get(T.envMap||G.environment,jA),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,NA===void 0&&(T.addEventListener("dispose",PA),NA=new Map,G.programs=NA);let et=NA.get(RA);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===xA)return Bn(T,yA),et}else yA.uniforms=dA.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,yA),T.onBeforeCompile(yA,C),et=dA.acquireProgram(yA,RA),NA.set(RA,et),G.uniforms=yA.uniforms;let BA=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(BA.clippingPlanes=cA.uniform),Bn(T,yA),G.needsLights=fn(T),G.lightsStateVersion=xA,G.needsLights&&(BA.ambientLightColor.value=q.state.ambient,BA.lightProbe.value=q.state.probe,BA.directionalLights.value=q.state.directional,BA.directionalLightShadows.value=q.state.directionalShadow,BA.spotLights.value=q.state.spot,BA.spotLightShadows.value=q.state.spotShadow,BA.rectAreaLights.value=q.state.rectArea,BA.ltc_1.value=q.state.rectAreaLTC1,BA.ltc_2.value=q.state.rectAreaLTC2,BA.pointLights.value=q.state.point,BA.pointLightShadows.value=q.state.pointShadow,BA.hemisphereLights.value=q.state.hemi,BA.directionalShadowMatrix.value=q.state.directionalShadowMatrix,BA.spotLightMatrix.value=q.state.spotLightMatrix,BA.spotLightMap.value=q.state.spotLightMap,BA.pointShadowMatrix.value=q.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function Ae(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Is.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Bn(T,O){let Z=X.get(T);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Ur(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Z=0,G=T.length;Z<G;Z++){let q=T[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function se(T,O,Z,G,q){O.isScene!==!0&&(O=Tt),J.resetTextureUnits();let _A=O.fog,xA=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,yA=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:lt.workingColorSpace,RA=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,NA=hA.get(G.envMap||xA,RA),jA=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),BA=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,qt=!!Z.morphAttributes.color,Ht=Dn;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ht=C.toneMapping);let yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_e=yt!==void 0?yt.length:0,MA=X.get(G),Je=E.state.lights;if(JA===!0&&(ZA===!0||T!==R)){let Ct=T===R&&G.id===$;cA.setState(G,T,Ct)}let ft=!1;G.version===MA.__version?(MA.needsLights&&MA.lightsStateVersion!==Je.state.version||MA.outputColorSpace!==yA||q.isBatchedMesh&&MA.batching===!1||!q.isBatchedMesh&&MA.batching===!0||q.isBatchedMesh&&MA.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&MA.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&MA.instancing===!1||!q.isInstancedMesh&&MA.instancing===!0||q.isSkinnedMesh&&MA.skinning===!1||!q.isSkinnedMesh&&MA.skinning===!0||q.isInstancedMesh&&MA.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&MA.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&MA.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&MA.instancingMorph===!1&&q.morphTexture!==null||MA.envMap!==NA||G.fog===!0&&MA.fog!==_A||MA.numClippingPlanes!==void 0&&(MA.numClippingPlanes!==cA.numPlanes||MA.numIntersection!==cA.numIntersection)||MA.vertexAlphas!==jA||MA.vertexTangents!==et||MA.morphTargets!==BA||MA.morphNormals!==xt||MA.morphColors!==qt||MA.toneMapping!==Ht||MA.morphTargetsCount!==_e||!!MA.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,MA.__version=G.version);let dn=MA.currentProgram;ft===!0&&(dn=zt(G,O,q),D&&G.isNodeMaterial&&D.onUpdateProgram(G,dn,MA));let Un=!1,vi=!1,Fr=!1,St=dn.getUniforms(),Yt=MA.uniforms;if(x.useProgram(dn.program)&&(Un=!0,vi=!0,Fr=!0),G.id!==$&&($=G.id,vi=!0),MA.needsLights){let Ct=Ur(E.state.lightProbeGridArray,q);MA.lightProbeGrid!==Ct&&(MA.lightProbeGrid=Ct,vi=!0)}if(Un||R!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(B,"projectionMatrix",T.projectionMatrix),St.setValue(B,"viewMatrix",T.matrixWorldInverse);let Si=St.map.cameraPosition;Si!==void 0&&Si.setValue(B,ut.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,vi=!0,Fr=!0)}if(MA.needsLights&&(Je.state.directionalShadowMap.length>0&&St.setValue(B,"directionalShadowMap",Je.state.directionalShadowMap,J),Je.state.spotShadowMap.length>0&&St.setValue(B,"spotShadowMap",Je.state.spotShadowMap,J),Je.state.pointShadowMap.length>0&&St.setValue(B,"pointShadowMap",Je.state.pointShadowMap,J)),q.isSkinnedMesh){St.setOptional(B,q,"bindMatrix"),St.setOptional(B,q,"bindMatrixInverse");let Ct=q.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),St.setValue(B,"boneTexture",Ct.boneTexture,J))}q.isBatchedMesh&&(St.setOptional(B,q,"batchingTexture"),St.setValue(B,"batchingTexture",q._matricesTexture,J),St.setOptional(B,q,"batchingIdTexture"),St.setValue(B,"batchingIdTexture",q._indirectTexture,J),St.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&St.setValue(B,"batchingColorTexture",q._colorsTexture,J));let yi=Z.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&N.update(q,Z,dn),(vi||MA.receiveShadow!==q.receiveShadow)&&(MA.receiveShadow=q.receiveShadow,St.setValue(B,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Lw()),vi){if(St.setValue(B,"toneMappingExposure",C.toneMappingExposure),MA.needsLights&&Xt(Yt,Fr),_A&&G.fog===!0&&EA.refreshFogUniforms(Yt,_A),EA.refreshMaterialUniforms(Yt,G,iA,rA,E.state.transmissionRenderTarget[T.id]),MA.needsLights&&MA.lightProbeGrid){let Ct=MA.lightProbeGrid;Yt.probesSH.value=Ct.texture,Yt.probesMin.value.copy(Ct.boundingBox.min),Yt.probesMax.value.copy(Ct.boundingBox.max),Yt.probesResolution.value.copy(Ct.resolution)}Is.upload(B,Ae(MA),Yt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Is.upload(B,Ae(MA),Yt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(B,"center",q.center),St.setValue(B,"modelViewMatrix",q.modelViewMatrix),St.setValue(B,"normalMatrix",q.normalMatrix),St.setValue(B,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){let Ct=G.uniformsGroups;for(let Si=0,Or=Ct.length;Si<Or;Si++){let Ad=Ct[Si];eA.update(Ad,dn),eA.bind(Ad,dn)}}return dn}function Xt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function fn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,O,Z){let G=X.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=O,X.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Z=X.get(T);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Z=0){V=T,H=O,L=Z;let G=null,q=!1,_A=!1;if(T){let yA=X.get(T);if(yA.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,yA.__webglFramebuffer),tA.copy(T.viewport),lA.copy(T.scissor),LA=T.scissorTest,x.viewport(tA),x.scissor(lA),x.setScissorTest(LA),$=-1;return}else if(yA.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(yA.__hasExternalTextures)J.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let jA=T.depthTexture;if(yA.__boundDepthTexture!==jA){if(jA!==null&&X.has(jA)&&(T.width!==jA.image.width||T.height!==jA.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let RA=T.texture;(RA.isData3DTexture||RA.isDataArrayTexture||RA.isCompressedArrayTexture)&&(_A=!0);let NA=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(NA[O])?G=NA[O][Z]:G=NA[O],q=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?G=X.get(T).__webglMultisampledFramebuffer:Array.isArray(NA)?G=NA[Z]:G=NA,tA.copy(T.viewport),lA.copy(T.scissor),LA=T.scissorTest}else tA.copy(wA).multiplyScalar(iA).floor(),lA.copy(ot).multiplyScalar(iA).floor(),LA=SA;if(Z!==0&&(G=W),x.bindFramebuffer(B.FRAMEBUFFER,G)&&x.drawBuffers(T,G),x.viewport(tA),x.scissor(lA),x.setScissorTest(LA),q){let yA=X.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,yA.__webglTexture,Z)}else if(_A){let yA=O;for(let RA=0;RA<T.textures.length;RA++){let NA=X.get(T.textures[RA]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+RA,NA.__webglTexture,Z,yA)}}else if(T!==null&&Z!==0){let yA=X.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yA.__webglTexture,Z)}$=-1},this.readRenderTargetPixels=function(T,O,Z,G,q,_A,xA,yA=0){if(!(T&&T.isWebGLRenderTarget)){qA("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let RA=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xA!==void 0&&(RA=RA[xA]),RA){x.bindFramebuffer(B.FRAMEBUFFER,RA);try{let NA=T.textures[yA],jA=NA.format,et=NA.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yA),!P.textureFormatReadable(jA)){qA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(et)){qA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&Z>=0&&Z<=T.height-q&&B.readPixels(O,Z,G,q,mA.convert(jA),mA.convert(et),_A)}finally{let NA=V!==null?X.get(V).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,NA)}}},this.readRenderTargetPixelsAsync=async function(T,O,Z,G,q,_A,xA,yA=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let RA=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xA!==void 0&&(RA=RA[xA]),RA)if(O>=0&&O<=T.width-G&&Z>=0&&Z<=T.height-q){x.bindFramebuffer(B.FRAMEBUFFER,RA);let NA=T.textures[yA],jA=NA.format,et=NA.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yA),!P.textureFormatReadable(jA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let BA=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,BA),B.bufferData(B.PIXEL_PACK_BUFFER,_A.byteLength,B.STREAM_READ),B.readPixels(O,Z,G,q,mA.convert(jA),mA.convert(et),0);let xt=V!==null?X.get(V).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,xt);let qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ug(B,qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,BA),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_A),B.deleteBuffer(BA),B.deleteSync(qt),_A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Z=0){let G=Math.pow(2,-Z),q=Math.floor(T.image.width*G),_A=Math.floor(T.image.height*G),xA=O!==null?O.x:0,yA=O!==null?O.y:0;J.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,xA,yA,q,_A),x.unbindTexture()},this.copyTextureToTexture=function(T,O,Z=null,G=null,q=0,_A=0){let xA,yA,RA,NA,jA,et,BA,xt,qt,Ht=T.isCompressedTexture?T.mipmaps[_A]:T.image;if(Z!==null)xA=Z.max.x-Z.min.x,yA=Z.max.y-Z.min.y,RA=Z.isBox3?Z.max.z-Z.min.z:1,NA=Z.min.x,jA=Z.min.y,et=Z.isBox3?Z.min.z:0;else{let Yt=Math.pow(2,-q);xA=Math.floor(Ht.width*Yt),yA=Math.floor(Ht.height*Yt),T.isDataArrayTexture?RA=Ht.depth:T.isData3DTexture?RA=Math.floor(Ht.depth*Yt):RA=1,NA=0,jA=0,et=0}G!==null?(BA=G.x,xt=G.y,qt=G.z):(BA=0,xt=0,qt=0);let yt=mA.convert(O.format),_e=mA.convert(O.type),MA;O.isData3DTexture?(J.setTexture3D(O,0),MA=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),MA=B.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),MA=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let Je=x.getParameter(B.UNPACK_ROW_LENGTH),ft=x.getParameter(B.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(B.UNPACK_SKIP_PIXELS),Un=x.getParameter(B.UNPACK_SKIP_ROWS),vi=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,NA),x.pixelStorei(B.UNPACK_SKIP_ROWS,jA),x.pixelStorei(B.UNPACK_SKIP_IMAGES,et);let Fr=T.isDataArrayTexture||T.isData3DTexture,St=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Yt=X.get(T),yi=X.get(O),Ct=X.get(Yt.__renderTarget),Si=X.get(yi.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,Ct.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Or=0;Or<RA;Or++)Fr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(T).__webglTexture,q,et+Or),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(O).__webglTexture,_A,qt+Or)),B.blitFramebuffer(NA,jA,xA,yA,BA,xt,xA,yA,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||X.has(T)){let Yt=X.get(T),yi=X.get(O);x.bindFramebuffer(B.READ_FRAMEBUFFER,k),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ct=0;Ct<RA;Ct++)Fr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,q,et+Ct):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,q),St?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yi.__webglTexture,_A,qt+Ct):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yi.__webglTexture,_A),q!==0?B.blitFramebuffer(NA,jA,xA,yA,BA,xt,xA,yA,B.COLOR_BUFFER_BIT,B.NEAREST):St?B.copyTexSubImage3D(MA,_A,BA,xt,qt+Ct,NA,jA,xA,yA):B.copyTexSubImage2D(MA,_A,BA,xt,NA,jA,xA,yA);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else St?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(MA,_A,BA,xt,qt,xA,yA,RA,yt,_e,Ht.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(MA,_A,BA,xt,qt,xA,yA,RA,yt,Ht.data):B.texSubImage3D(MA,_A,BA,xt,qt,xA,yA,RA,yt,_e,Ht):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_A,BA,xt,xA,yA,yt,_e,Ht.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_A,BA,xt,Ht.width,Ht.height,yt,Ht.data):B.texSubImage2D(B.TEXTURE_2D,_A,BA,xt,xA,yA,yt,_e,Ht);x.pixelStorei(B.UNPACK_ROW_LENGTH,Je),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(B.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(B.UNPACK_SKIP_ROWS,Un),x.pixelStorei(B.UNPACK_SKIP_IMAGES,vi),_A===0&&O.generateMipmaps&&B.generateMipmap(MA),x.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){H=0,L=0,V=null,x.reset(),gA.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(A),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Br=1,m_=96,Bw=200,v_=32,Uw=5.8,Fw=.0122,Ow=.0142,zw=.034,Hw=-110*Math.PI/180,kw=.155,g_=1.6,Vw=1.1,__=i=>i/(2*Math.tan(v_*Math.PI/360)),na=[{name:"Dubai, UAE",lon:55.27,lat:25.2},{name:"Muscat, Oman",lon:58.55,lat:23.61},{name:"Ernakulam, India",lon:76.27,lat:9.93}];function jf(i,A){let t=getComputedStyle(document.documentElement).getPropertyValue(i).trim();return new At(t||A)}function th(i,A,t=Br){let e=(90-A)*(Math.PI/180),n=(i+180)*(Math.PI/180);return new F(-t*Math.sin(e)*Math.cos(n),t*Math.cos(e),t*Math.sin(e)*Math.sin(n))}var Gw=`
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vFacing;

  uniform float uPixelRatio;
  uniform float uScale;

  void main() {
    vColor = aColor;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

    // How square-on this dot is to the camera. Dots near the limb are
    // seen at a grazing angle, so they shrink and dim - which is what
    // gives the reference its soft edge falloff.
    vec3 worldNormal = normalize(mat3(modelMatrix) * normalize(position));
    vec3 toCamera = normalize(cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz);
    vFacing = clamp(dot(worldNormal, toCamera), 0.0, 1.0);

    // aSize is a world-space diameter. uScale carries the perspective
    // term height / (2 * tan(fov/2)), so size / -z lands in pixels.
    gl_PointSize = aSize * uScale * uPixelRatio * (0.55 + 0.45 * vFacing) / -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`,Ww=`
  varying vec3 vColor;
  varying float vFacing;

  void main() {
    // Round, softly antialiased point.
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float alpha = smoothstep(0.5, 0.36, d);
    if (alpha < 0.01) discard;

    // Fade dots away as they turn past the limb.
    alpha *= smoothstep(0.0, 0.35, vFacing);

    gl_FragColor = vec4(vColor, alpha);
  }
`,x_=`
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Xw=`
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uInner;
  uniform vec3 uOuter;
  uniform float uPower;
  uniform float uStrength;
  uniform float uTopBias;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    vec3 n = normalize(vNormal);

    // Rendered on the back faces, so the rim - where the surface turns
    // away - is where intensity peaks.
    float rim = 1.0 - abs(dot(n, viewDir));
    float i = pow(clamp(rim, 0.0, 1.0), uPower);

    // The reference is lit from above: the halo is strongest over the
    // northern limb and falls off toward the bottom of the sphere.
    float top = smoothstep(-0.9, 0.8, n.y);
    i *= mix(1.0, 0.35 + 0.85 * top, uTopBias);

    // Two-stop ramp: hot near the limb, cooler as it spreads outward.
    vec3 col = mix(uOuter, uInner, smoothstep(0.25, 0.95, i));

    gl_FragColor = vec4(col, i * uStrength);
  }
`,qw=`
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uTop;
  uniform vec3 uBottom;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    float facing = clamp(dot(normalize(vNormal), viewDir), 0.0, 1.0);

    // Slightly lifted toward the top of the sphere, deepening toward
    // the limb - matches the sampled #13081f body with its lighter crown.
    float v = smoothstep(-0.6, 0.9, normalize(vNormal).y);
    vec3 col = mix(uBottom, uTop, v);
    col *= 0.45 + 0.55 * facing;

    gl_FragColor = vec4(col, 1.0);
  }
`;function y_(){let i=document.getElementById("globeCanvas");if(!i)return null;let A;try{A=new Qc({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(L){return console.warn("WebGL unavailable, falling back to the CSS halo.",L),null}let t=jf("--accent","#0095da"),e=jf("--accent-2","#54c5d0"),n=jf("--accent-hot","#d6f2ff"),r=()=>({w:i.clientWidth||1,h:i.clientHeight||1}),{w:s,h:o}=r();A.setSize(s,o,!1),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.setClearColor(0,0),i.appendChild(A.domElement);let a=new Co,l=new Ce(v_,s/o,.1,100);l.position.set(0,0,Uw);let c=new pi;c.rotation.z=-.28,a.add(c);let f=new Pe(new ws(Br*.985,64,48),new he({vertexShader:x_,fragmentShader:qw,uniforms:{uTop:{value:new At("#341a4c")},uBottom:{value:new At("#12081d")}}}));c.add(f);let h=[],u=[],d=[],g=new At("#e8e8f0"),p=new At("#aeaec4");for(let L=0;L<m_;L++){let V=90-(L+.5)/m_*180,$=Math.max(1,Math.round(Bw*Math.cos(V*Math.PI/180)));for(let R=0;R<$;R++){let tA=-180+R/$*360;if(!Ya(tA,V))continue;let lA=th(tA,V);h.push(lA.x,lA.y,lA.z);let LA=L%2===0?g:p;u.push(LA.r,LA.g,LA.b),d.push(L%3===0?Ow:Fw)}}na.forEach(L=>{let V=th(L.lon,L.lat,Br*1.004);h.push(V.x,V.y,V.z),u.push(t.r,t.g,t.b),d.push(zw)});let m=new ke;m.setAttribute("position",new Wt(h,3)),m.setAttribute("aColor",new Wt(u,3)),m.setAttribute("aSize",new Wt(d,1));let S=new he({vertexShader:Gw,fragmentShader:Ww,transparent:!0,depthWrite:!1,uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uScale:{value:__(o)}}}),M=new No(m,S);c.add(M);let v=120,y=[];for(let L=0;L<na.length;L++){let V=na[L],$=na[(L+1)%na.length],R=th(V.lon,V.lat,Br*1.004),tA=th($.lon,$.lat,Br*1.004),lA=R.clone().add(tA).multiplyScalar(.5),LA=1+.28*R.distanceTo(tA);lA.setLength(Br*LA);let WA=new Ir(R,lA,tA),kA=new zo(WA,v,.0055,6,!1),K=new he({transparent:!0,depthWrite:!1,blending:Es,uniforms:{uHead:{value:-1},uRest:{value:t.clone()},uHot:{value:n.clone()}},vertexShader:`
        varying float vU;
        void main() {
          // TubeGeometry lays u along the tube's length.
          vU = uv.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vU;
        uniform float uHead;
        uniform vec3 uRest;
        uniform vec3 uHot;

        void main() {
          // Faint standing path so the route reads even between signals.
          float base = 0.10;

          // A short bright head with a tail behind it, so the signal has a
          // direction rather than just blinking on.
          float d = uHead - vU;
          float head = smoothstep(0.16, 0.0, abs(d)) * step(-0.02, d);
          float tail = smoothstep(0.34, 0.0, d) * step(0.0, d) * 0.4;
          float lit = clamp(head + tail, 0.0, 1.0);

          vec3 col = mix(uRest, uHot, lit);
          float alpha = base + lit * 0.9;

          // uHead is parked outside 0..1 between signals; nothing lit then.
          gl_FragColor = vec4(col, alpha);
        }
      `}),rA=new Pe(kA,K);c.add(rA),y.push(K)}let E=new Pe(new ws(Br,64,48),new he({vertexShader:x_,fragmentShader:Xw,uniforms:{uInner:{value:t.clone()},uOuter:{value:e.clone()},uPower:{value:4.2},uStrength:{value:1.45},uTopBias:{value:.85}},side:me,blending:Es,transparent:!0,depthWrite:!1}));E.scale.setScalar(1.1),c.add(E);let b={x:0,y:0},_={x:0,y:0},w=!0;wt||window.addEventListener("pointermove",L=>{_.x=(L.clientX/window.innerWidth-.5)*2,_.y=(L.clientY/window.innerHeight-.5)*2},{passive:!0});let C=i.closest("section");C&&bA.create({trigger:C,start:"top bottom",end:"bottom top",onToggle:L=>{w=L.isActive},onRefresh:L=>{w=L.isActive}});let I=new Go,D=0,W=0,k=()=>{if(!w)return;let L=I.getDelta();if(wt||(D+=L*kw),b.x+=(_.x-b.x)*.045,b.y+=(_.y-b.y)*.045,c.rotation.y=Hw+D+b.x*.22,c.rotation.x=b.y*.12,y.length&&!wt){W+=L;let V=g_+Vw,$=V*y.length,R=W%$,tA=Math.floor(R/V),lA=R%V/g_;y.forEach((LA,WA)=>{if(WA!==tA||lA>1){LA.uniforms.uHead.value=-1;return}LA.uniforms.uHead.value=lA*lA*(3-2*lA)})}A.render(a,l)};UA.ticker.add(k);let U=()=>{let{w:L,h:V}=r();A.setSize(L,V,!1),l.aspect=L/V,l.updateProjectionMatrix(),S.uniforms.uScale.value=__(V),S.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2)},H=new ResizeObserver(U);return H.observe(i),{destroy(){UA.ticker.remove(k),H.disconnect(),m.dispose(),S.dispose(),A.dispose(),i.replaceChildren()}}}var Ls=()=>new Promise(i=>requestAnimationFrame(()=>i()));async function S_(){var t;window.__appslineBooted=!0,pm(),Dm();let i=hm();dm(),um(),window.__appsline={gsap:UA,ScrollTrigger:bA,lenis:i};let A=gm({onReveal:()=>{fm(),vm()}});await Ls(),Cm(),await Ls(),Pm(),await Ls(),Rm(),Im(),await Ls(),ym(),wm(),Tm(),await Ls(),xm(),await Ls(),bA.refresh(),await A,requestAnimationFrame(()=>{try{y_()}catch(e){console.warn("Globe failed to initialise:",e)}}),(t=document.fonts)!=null&&t.ready&&document.fonts.ready.then(()=>bA.refresh())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S_,{once:!0}):S_();var M_;window.addEventListener("resize",()=>{clearTimeout(M_),M_=setTimeout(()=>bA.refresh(),260)});})();
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
