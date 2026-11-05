(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const il="180",Xi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vh=0,Wl=1,Gh=2,Eu=1,Wh=2,In=3,kn=0,Bt=1,sn=2,Zn=0,qi=1,ao=2,Xl=3,ql=4,Xh=5,ui=100,qh=101,jh=102,Yh=103,Kh=104,Zh=200,$h=201,Jh=202,Qh=203,oo=204,lo=205,ed=206,td=207,nd=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,co=0,uo=1,ho=2,Zi=3,fo=4,po=5,mo=6,go=7,Tu=0,cd=1,ud=2,$n=0,hd=1,dd=2,fd=3,Au=4,pd=5,md=6,gd=7,jl="attached",_d="detached",wu=300,$i=301,Ji=302,_o=303,vo=304,Jr=306,Qi=1e3,Kn=1001,Wr=1002,Ot=1003,Ru=1004,As=1005,Wt=1006,Or=1007,Un=1008,bn=1009,Cu=1010,Pu=1011,Is=1012,sl=1013,pi=1014,an=1015,qs=1016,rl=1017,al=1018,Ns=1020,Lu=35902,Du=35899,Iu=1021,Nu=1022,Jt=1023,Us=1026,Os=1027,ol=1028,ll=1029,Uu=1030,cl=1031,ul=1033,Fr=33776,kr=33777,Br=33778,zr=33779,xo=35840,bo=35841,yo=35842,Mo=35843,So=36196,Eo=37492,To=37496,Ao=37808,wo=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Do=37814,Io=37815,No=37816,Uo=37817,Oo=37818,Fo=37819,ko=37820,Bo=37821,zo=36492,Ho=36494,Vo=36495,Go=36283,Wo=36284,Xo=36285,qo=36286,Fs=2300,ks=2301,fa=2302,Yl=2400,Kl=2401,Zl=2402,vd=2500,xd=0,Ou=1,jo=2,bd=3200,yd=3201,Fu=0,Md=1,Yn="",dt="srgb",Lt="srgb-linear",Xr="linear",it="srgb",xi=7680,$l=519,Sd=512,Ed=513,Td=514,ku=515,Ad=516,wd=517,Rd=518,Cd=519,qr=35044,Jl="300 es",vn=2e3,jr=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Ps=Math.PI/180,es=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function hl(s,e){return(s%e+e)%e}function Pd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ld(s,e,t){return s!==e?(t-s)/(e-s):0}function Ls(s,e,t){return(1-t)*s+t*e}function Dd(s,e,t,n){return Ls(s,e,1-Math.exp(-t*n))}function Id(s,e=1){return e-Math.abs(hl(s,e*2)-e)}function Nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Od(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fd(s,e){return s+Math.random()*(e-s)}function kd(s){return s*(.5-Math.random())}function Bd(s){s!==void 0&&(Ql=s);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(s){return s*Ps}function Hd(s){return s*es}function Vd(s){return(s&s-1)===0&&s!==0}function Gd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Bu={DEG2RAD:Ps,RAD2DEG:es,generateUUID:ln,clamp:Ge,euclideanModulo:hl,mapLinear:Pd,inverseLerp:Ld,lerp:Ls,damp:Dd,pingpong:Id,smoothstep:Nd,smootherstep:Ud,randInt:Od,randFloat:Fd,randFloatSpread:kd,seededRandom:Bd,degToRad:zd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:Qe,denormalize:rn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*_,b=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),w=Math.atan2(T,f*b);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const x=o*b;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new L,ec=new yn;class ze{constructor(e,t,n,i,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],b=i[1],v=i[4],x=i[7],T=i[2],w=i[5],C=i[8];return r[0]=a*_+o*b+l*T,r[3]=a*m+o*v+l*w,r[6]=a*f+o*x+l*C,r[1]=c*_+u*b+h*T,r[4]=c*m+u*v+h*w,r[7]=c*f+u*x+h*C,r[2]=d*_+p*b+g*T,r[5]=d*m+p*v+g*w,r[8]=d*f+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new ze;function zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){const s=Bs("canvas");return s.style.display="block",s}const tc={};function zs(s){s in tc||(tc[s]=!0,console.warn(s))}function jd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const nc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const s={enabled:!0,workingColorSpace:Lt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?Xr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Lt]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),s}const je=Yd();function Fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class Kd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Bs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zd=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ga(i[a].image)):r.push(ga(i[a]))}else r=ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0;const _a=new L;class bt extends gi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Kn,i=Kn,r=Wt,a=Un,o=Jt,l=bn,c=bt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ln(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=wu;bt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(p+1)/2,T=(f+1)/2,w=(u+d)/4,C=(h+_)/4,D=(g+m)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=C/n):x>T?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=D/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new bt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hu extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),tr.subVectors(this.max,ps),yi.subVectors(e.a,ps),Mi.subVectors(e.b,ps),Si.subVectors(e.c,ps),zn.subVectors(Mi,yi),Hn.subVectors(Si,Mi),ni.subVectors(yi,Si);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!va(t,yi,Mi,Si,tr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,yi,Mi,Si,tr))?!1:(nr.crossVectors(zn,Hn),t=[nr.x,nr.y,nr.z],va(t,yi,Mi,Si,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,er=new Sn,yi=new L,Mi=new L,Si=new L,zn=new L,Hn=new L,ni=new L,ps=new L,tr=new L,nr=new L,ii=new L;function va(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ef=new Sn,ms=new L,xa=new L;class En{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(xa)),this.expandByPoint(ms.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new L,ba=new L,ir=new L,Vn=new L,ya=new L,sr=new L,Ma=new L;class as{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=Vn.dot(this.direction),l=-Vn.dot(ir),c=Vn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ba).addScaledVector(ir,d),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,r){ya.subVectors(t,e),sr.subVectors(n,e),Ma.crossVectors(ya,sr);let a=this.direction.dot(Ma),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(sr.crossVectors(Vn,sr));if(l<0)return null;const c=o*this.direction.dot(ya.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(Ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,u,h,d,p,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,p,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Gn.crossVectors(n,Vt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Gn.crossVectors(n,Vt)),Gn.normalize(),rr.crossVectors(Vt,Gn),i[0]=Gn.x,i[4]=rr.x,i[8]=Vt.x,i[1]=Gn.y,i[5]=rr.y,i[9]=Vt.y,i[2]=Gn.z,i[6]=rr.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],v=n[7],x=n[11],T=n[15],w=i[0],C=i[4],D=i[8],S=i[12],E=i[1],R=i[5],F=i[9],z=i[13],q=i[2],G=i[6],X=i[10],K=i[14],H=i[3],ne=i[7],ie=i[11],oe=i[15];return r[0]=a*w+o*E+l*q+c*H,r[4]=a*C+o*R+l*G+c*ne,r[8]=a*D+o*F+l*X+c*ie,r[12]=a*S+o*z+l*K+c*oe,r[1]=u*w+h*E+d*q+p*H,r[5]=u*C+h*R+d*G+p*ne,r[9]=u*D+h*F+d*X+p*ie,r[13]=u*S+h*z+d*K+p*oe,r[2]=g*w+_*E+m*q+f*H,r[6]=g*C+_*R+m*G+f*ne,r[10]=g*D+_*F+m*X+f*ie,r[14]=g*S+_*z+m*K+f*oe,r[3]=b*w+v*E+x*q+T*H,r[7]=b*C+v*R+x*G+T*ne,r[11]=b*D+v*F+x*X+T*ie,r[15]=b*S+v*z+x*K+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=h*m*c-_*d*c+_*l*p-o*m*p-h*l*f+o*d*f,v=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,x=u*_*c-g*h*c+g*o*p-a*_*p-u*o*f+a*h*f,T=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,w=t*b+n*v+i*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*C,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*C,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=v*C,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*C,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*f-t*l*f)*C,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*C,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=T*C,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,b=l*c,v=l*u,x=l*h,T=n.x,w=n.y,C=n.z;return i[0]=(1-(_+f))*T,i[1]=(p+x)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(p-x)*w,i[5]=(1-(d+f))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+v)*C,i[9]=(m-b)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=vn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===jr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=vn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===vn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===jr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new L,tn=new Fe,tf=new L(0,0,0),nf=new L(1,1,1),Gn=new L,rr=new L,Vt=new L,sc=new Fe,rc=new yn;class Mn{constructor(e=0,t=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const ac=new L,Ti=new yn,Cn=new Fe,ar=new L,gs=new L,rf=new L,af=new yn,oc=new L(1,0,0),lc=new L(0,1,0),cc=new L(0,0,1),uc={type:"added"},of={type:"removed"},Ai={type:"childadded",child:null},Sa={type:"childremoved",child:null};class ct extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new L,t=new Mn,n=new yn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,ar,this.up):Cn.lookAt(ar,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new L(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new L,Pn=new L,Ea=new L,Ln=new L,wi=new L,Ri=new L,hc=new L,Ta=new L,Aa=new L,wa=new L,Ra=new $e,Ca=new $e,Pa=new $e;class $t{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),Pn.subVectors(n,t),Ea.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Pn),l=nn.dot(Ea),c=Pn.dot(Pn),u=Pn.dot(Ea),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Ca,r.y),a.addScaledVector(Pa,r.z),a}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),Pn.subVectors(e,t),nn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;wi.subVectors(i,n),Ri.subVectors(r,n),Ta.subVectors(e,n);const l=wi.dot(Ta),c=Ri.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,i);const u=wi.dot(Aa),h=Ri.dot(Aa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(wi,a);wa.subVectors(e,r);const p=wi.dot(wa),g=Ri.dot(wa);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ri,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return hc.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(hc,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},or={h:0,s:0,l:0};function La(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=hl(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=La(a,r,e+1/3),this.g=La(a,r,e),this.b=La(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return je.workingToColorSpace(Ct.copy(this),e),Math.round(Ge(Ct.r*255,0,255))*65536+Math.round(Ge(Ct.g*255,0,255))*256+Math.round(Ge(Ct.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=dt){je.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(or);const n=Ls(Wn.h,or.h,t),i=Ls(Wn.s,or.s,t),r=Ls(Wn.l,or.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ne;Ne.NAMES=Vu;let lf=0;class cn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=qi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new L,lr=new be;let cf=0;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qr,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qr&&(e.usage=this.usage),e}}class Gu extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uf=0;const Yt=new Fe,Da=new ct,Ci=new L,Gt=new Sn,_s=new Sn,At=new L;class Et extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Wu:Gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Gt.min,_s.min),Gt.expandByPoint(At),At.addVectors(Gt.max,_s.max),Gt.expandByPoint(At)):(Gt.expandByPoint(_s.min),Gt.expandByPoint(_s.max))}Gt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),At.add(Ci)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,u=new L,h=new L,d=new be,p=new be,g=new be,_=new L,m=new L;function f(D,S,E){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[D].add(_),o[S].add(_),o[E].add(_),l[D].add(m),l[S].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){const E=b[D],R=E.start,F=E.count;for(let z=R,q=R+F;z<q;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new L,x=new L,T=new L,w=new L;function C(D){T.fromBufferAttribute(i,D),w.copy(T);const S=o[D];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(w,S);const R=x.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,R)}for(let D=0,S=b.length;D<S;++D){const E=b[D],R=E.start,F=E.count;for(let z=R,q=R+F;z<q;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new Fe,si=new as,cr=new En,fc=new L,ur=new L,hr=new L,dr=new L,Ia=new L,fr=new L,pc=new L,pr=new L;class Pt extends ct{constructor(e=new Et,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ia.fromBufferAttribute(h,e),a?fr.addScaledVector(Ia,u):fr.addScaledVector(Ia.sub(t),u))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(cr.containsPoint(si.origin)===!1&&(si.intersectSphere(cr,fc)===null||si.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(r).invert(),si.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=v;x<T;x+=3){const w=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);i=mr(this,f,e,n,c,u,h,w,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=mr(this,a,e,n,c,u,h,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=v;x<T;x+=3){const w=x,C=x+1,D=x+2;i=mr(this,f,e,n,c,u,h,w,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,v=m+1,x=m+2;i=mr(this,a,e,n,c,u,h,b,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function hf(s,e,t,n,i,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===kn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:s}}function mr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ur),s.getVertexPosition(l,hr),s.getVertexPosition(c,dr);const u=hf(s,e,t,n,ur,hr,dr,pc);if(u){const h=new L;$t.getBarycoord(pc,ur,hr,dr,h),i&&(u.uv=$t.getInterpolatedAttribute(i,o,l,c,h,new be)),r&&(u.uv1=$t.getInterpolatedAttribute(r,o,l,c,h,new be)),a&&(u.normal=$t.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};$t.getNormal(ur,hr,dr,d.normal),u.face=d,u.barycoord=h}return u}class js extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function g(_,m,f,b,v,x,T,w,C,D,S){const E=x/C,R=T/D,F=x/2,z=T/2,q=w/2,G=C+1,X=D+1;let K=0,H=0;const ne=new L;for(let ie=0;ie<X;ie++){const oe=ie*R-z;for(let Oe=0;Oe<G;Oe++){const Ye=Oe*E-F;ne[_]=Ye*b,ne[m]=oe*v,ne[f]=q,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Oe/C),h.push(1-ie/D),K+=1}}for(let ie=0;ie<D;ie++)for(let oe=0;oe<C;oe++){const Oe=d+oe+G*ie,Ye=d+oe+G*(ie+1),Ke=d+(oe+1)+G*(ie+1),Re=d+(oe+1)+G*ie;l.push(Oe,Ye,Re),l.push(Ye,Ke,Re),H+=6}o.addGroup(p,H,S),p+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=ts(s[t]);for(const i in n)e[i]=n[i]}return e}function df(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const ff={clone:ts,merge:Nt};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new L,mc=new be,gc=new be;class Ut extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class gf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(Pi,Li,e,t);i.layers=this.layers,this.add(i);const r=new Ut(Pi,Li,e,t);r.layers=this.layers,this.add(r);const a=new Ut(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new Ut(Pi,Li,e,t);o.layers=this.layers,this.add(o);const l=new Ut(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends bt{constructor(e=[],t=$i,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new js(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new Pt(i,r),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Wt),new gf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class on extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xf extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qr,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new L;class Hs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ku extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Di;const vs=new L,Ii=new L,Ni=new L,Ui=new be,xs=new be,Zu=new Fe,gr=new L,bs=new L,_r=new L,_c=new be,Ua=new be,vc=new be;class bf extends ct{constructor(e=new Ku){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yu(t,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Hs(n,3,0,!1)),Di.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Di,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),Zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ni.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;vr(gr.set(-.5,-.5,0),Ni,a,Ii,i,r),vr(bs.set(.5,-.5,0),Ni,a,Ii,i,r),vr(_r.set(.5,.5,0),Ni,a,Ii,i,r),_c.set(0,0),Ua.set(1,0),vc.set(1,1);let o=e.ray.intersectTriangle(gr,bs,_r,!1,vs);if(o===null&&(vr(bs.set(-.5,.5,0),Ni,a,Ii,i,r),Ua.set(0,1),o=e.ray.intersectTriangle(gr,_r,bs,!1,vs),o===null))return;const l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:$t.getInterpolation(vs,gr,bs,_r,_c,Ua,vc,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vr(s,e,t,n,i,r){Ui.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(xs.x=r*Ui.x-i*Ui.y,xs.y=i*Ui.x+r*Ui.y):xs.copy(Ui),s.copy(e),s.x+=xs.x,s.y+=xs.y,s.applyMatrix4(Zu)}const xc=new L,bc=new $e,yc=new $e,yf=new L,Mc=new Fe,xr=new L,Oa=new En,Sc=new Fe,Fa=new as;class Mf extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingBox.expandByPoint(xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingSphere.expandByPoint(xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(Sc.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(Sc),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bc.fromBufferAttribute(i.attributes.skinIndex,e),yc.fromBufferAttribute(i.attributes.skinWeight,e),xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yc.getComponent(r);if(a!==0){const o=bc.getComponent(r);Mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yf.copy(xc).applyMatrix4(Mc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $u extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ju extends bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ot,u=Ot,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ec=new Fe,Sf=new Fe;class pl{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Sf;Ec.multiplyMatrices(o,t[r]),Ec.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,Jt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $u),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Yo extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new Fe,Tc=new Fe,br=[],Ac=new Sn,Ef=new Fe,ys=new Pt,Ms=new En;class Qu extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ef)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Ac.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Ms.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Oi),Tc.multiplyMatrices(n,Oi),ys.matrixWorld=Tc,ys.raycast(e,br);for(let a=0,o=br.length;a<o;a++){const l=br[a];l.instanceId=r,l.object=this,t.push(l)}br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(i*this.count),i,this.count,ol,an));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new L,Tf=new L,Af=new ze;class jn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ka.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Af.getNormalMatrix(e),i=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new En,wf=new be(.5,.5),yr=new L;class ml{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],b=r[12],v=r[13],x=r[14],T=r[15];if(i[0].setComponents(c-a,p-u,f-g,T-b).normalize(),i[1].setComponents(c+a,p+u,f+g,T+b).normalize(),i[2].setComponents(c+o,p+h,f+_,T+v).normalize(),i[3].setComponents(c-o,p-h,f-_,T-v).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,p-d,f-m,T-x).normalize();else if(i[4].setComponents(c-l,p-d,f-m,T-x).normalize(),t===vn)i[5].setComponents(c+l,p+d,f+m,T+x).normalize();else if(t===jr)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=wf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qr extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new L,Kr=new L,wc=new Fe,Ss=new as,Mr=new En,Ba=new L,Rc=new L;class Ys extends ct{constructor(e=new Et,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yr.fromBufferAttribute(t,i-1),Kr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yr.distanceTo(Kr);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;wc.copy(i).invert(),Ss.copy(e.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),b=u.getX(_+1),v=Sr(this,e,Ss,l,f,b,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Sr(this,e,Ss,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Sr(this,e,Ss,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Sr(this,e,Ss,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Yr.fromBufferAttribute(o,i),Kr.fromBufferAttribute(o,r),t.distanceSqToSegment(Yr,Kr,Ba,Rc)>n)return;Ba.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:Rc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cc=new L,Pc=new L;class Rf extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Pc);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cf extends Ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gl extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new Fe,Ko=new as,Er=new En,Tr=new L;class eh extends ct{constructor(e=new Et,t=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;Lc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(Lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Tr.fromBufferAttribute(h,m),Dc(Tr,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Tr.fromBufferAttribute(h,g),Dc(Tr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dc(s,e,t,n,i,r,a){const o=Ko.distanceSqToPoint(s);if(o<t){const l=new L;Ko.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pf extends bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class th extends bt{constructor(e,t,n=pi,i,r,a,o=Ot,l=Ot,c,u=Us,h=1){if(u!==Us&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nh extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ea extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const v=new L,x=new L,T=new L;for(let w=0;w<t.length;w+=3)p(t[w+0],v),p(t[w+1],x),p(t[w+2],T),l(v,x,T,b)}function l(b,v,x,T){const w=T+1,C=[];for(let D=0;D<=w;D++){C[D]=[];const S=b.clone().lerp(x,D/w),E=v.clone().lerp(x,D/w),R=w-D;for(let F=0;F<=R;F++)F===0&&D===w?C[D][F]=S:C[D][F]=S.clone().lerp(E,F/R)}for(let D=0;D<w;D++)for(let S=0;S<2*(w-D)-1;S++){const E=Math.floor(S/2);S%2===0?(d(C[D][E+1]),d(C[D+1][E]),d(C[D][E])):(d(C[D][E+1]),d(C[D+1][E+1]),d(C[D+1][E]))}}function c(b){const v=new L;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(b),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function u(){const b=new L;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];const x=m(b)/2/Math.PI+.5,T=f(b)/Math.PI+.5;a.push(x,1-T)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const v=a[b+0],x=a[b+2],T=a[b+4],w=Math.max(v,x,T),C=Math.min(v,x,T);w>.9&&C<.1&&(v<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,v){const x=b*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const b=new L,v=new L,x=new L,T=new L,w=new be,C=new be,D=new be;for(let S=0,E=0;S<r.length;S+=9,E+=6){b.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),D.set(a[E+4],a[E+5]),T.copy(b).add(v).add(x).divideScalar(3);const R=m(T);_(w,E+0,b,R),_(C,E+2,v,R),_(D,E+4,x,R)}}function _(b,v,x,T){T<0&&b.x===1&&(a[v]=b.x-1),x.x===0&&x.z===0&&(a[v]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.vertices,e.indices,e.radius,e.details)}}class _l extends ea{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class vl extends ea{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vl(e.radius,e.detail)}}class ta extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const b=f*d-a;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const v=b+c*f,x=b+c*(f+1),T=b+1+c*(f+1),w=b+1+c*f;p.push(v,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class xl extends Et{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,p=new L,g=new be;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const b=f+m,v=b,x=b+n+1,T=b+n+2,w=b+1;o.push(v,x,w),o.push(x,T,w)}}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bl extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const b=[],v=f/n;let x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const w=T/t;h.x=-e*Math.cos(i+w*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+w*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-v),b.push(c++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const v=u[f][b+1],x=u[f][b],T=u[f+1][b],w=u[f+1][b+1];(f!==0||a>0)&&p.push(v,x,w),(f!==n-1||l<Math.PI)&&p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ks extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tn extends Ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lf extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Df extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ar(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function If(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Nf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ic(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function ih(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Uf extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kl:r=e,o=2*t-n;break;case Zl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kl:a=e,l=2*n-t;break;case Zl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+b*a[c+T]+v*a[l+T]+x*a[h+T];return r}}class Of extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Ff extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&If(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ks;class os extends dn{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Fs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class sh extends dn{constructor(e,t,n,i){super(e,t,n,i)}}sh.prototype.ValueTypeName="color";class ns extends dn{constructor(e,t,n,i){super(e,t,n,i)}}ns.prototype.ValueTypeName="number";class kf extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class is extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends dn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends dn{constructor(e,t,n,i){super(e,t,n,i)}}ss.prototype.ValueTypeName="vector";class Bf{constructor(e="",t=-1,n=[],i=vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Nf(l);l=Ic(l,1,u),c=Ic(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ns(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];ih(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const v=d[g];m.push(v.time),f.push(v.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(ss,p+".position",d,"pos",i),n(is,p+".quaternion",d,"rot",i),n(ss,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function zf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return sh;case"quaternion":return is;case"bool":case"boolean":return os;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Hf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zf(s.type);if(s.times===void 0){const t=[],n=[];ih(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const On={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Gf=new Vf;class _i{constructor(e){this.manager=e!==void 0?e:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class Wf extends Error{constructor(e,t){super(e),this.response=t}}class Zr extends _i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=On.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){b();function b(){h.read().then(({done:v,value:x})=>{if(v)f.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,C=u.length;w<C;w++){const D=u[w];D.onProgress&&D.onProgress(T)}f.enqueue(x),b()}},v=>{f.error(v)})}}});return new Response(m)}else throw new Wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{On.add(`file:${e}`,c);const u=Dn[e];delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=new WeakMap;class Xf extends _i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=On.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Fi.get(a);h===void 0&&(h=[],Fi.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Bs("img");function l(){u(),t&&t(this);const h=Fi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Fi.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),On.remove(`image:${e}`);const d=Fi.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(h)}Fi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),On.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class rh extends _i{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new Xf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class na extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const za=new Fe,Nc=new L,Uc=new L;class yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qf extends yl{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jf extends na{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oc=new Fe,Es=new L,Ha=new L;class Yf extends yl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Ha.copy(n.position),Ha.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ha),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,n.coordinateSystem,n.reversedDepth)}}class ah extends na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ml extends qu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kf extends yl{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Kf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zf extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ds{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Va=new WeakMap;class $f extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=On.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Va.has(a)===!0)i&&i(Va.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return On.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Va.set(l,c),On.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});On.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sl="\\[\\]\\.:\\/",Qf=new RegExp("["+Sl+"]","g"),El="[^"+Sl+"]",e1="[^"+Sl.replace("\\.","")+"]",t1=/((?:WC+[\/:])*)/.source.replace("WC",El),n1=/(WCOD+)?/.source.replace("WCOD",e1),i1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),s1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),r1=new RegExp("^"+t1+n1+i1+s1+"$"),a1=["material","materials","bones","map"];class o1{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){const t=r1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);a1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=o1;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fc=new Fe;class l1{constructor(e,t,n=0,i=1/0){this.ray=new as(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,n=[]){return Zo(e,this,n,t),n.sort(kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zo(e[i],this,n,t);return n.sort(kc),n}}function kc(s,e){return s.distance-e.distance}function Zo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Zo(r[a],e,t,!0)}}class Bc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class c1 extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zc(s,e,t,n){const i=u1(n);switch(t){case Iu:return s*e;case ol:return s*e/i.components*i.byteLength;case ll:return s*e/i.components*i.byteLength;case Uu:return s*e*2/i.components*i.byteLength;case cl:return s*e*2/i.components*i.byteLength;case Nu:return s*e*3/i.components*i.byteLength;case Jt:return s*e*4/i.components*i.byteLength;case ul:return s*e*4/i.components*i.byteLength;case Fr:case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bo:case Mo:return Math.max(s,16)*Math.max(e,8)/4;case xo:case yo:return Math.max(s,8)*Math.max(e,8)/2;case So:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zo:case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Go:case Wo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xo:case qo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(s){switch(s){case bn:case Cu:return{byteLength:1,components:1};case Is:case Pu:case qs:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case pi:case sl:case an:return{byteLength:4,components:1};case Lu:case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function lh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function h1(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U1=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,u0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Z0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,vp=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Lp=`#define NORMAL
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
}`,Dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
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
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Up=`#define STANDARD
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
}`,Op=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Fp=`#define TOON
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
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Bp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:d1,alphahash_pars_fragment:f1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:g1,alphatest_pars_fragment:_1,aomap_fragment:v1,aomap_pars_fragment:x1,batching_pars_vertex:b1,batching_vertex:y1,begin_vertex:M1,beginnormal_vertex:S1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:A1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:P1,color_fragment:L1,color_pars_fragment:D1,color_pars_vertex:I1,color_vertex:N1,common:U1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:F1,displacementmap_pars_vertex:k1,displacementmap_vertex:B1,emissivemap_fragment:z1,emissivemap_pars_fragment:H1,colorspace_fragment:V1,colorspace_pars_fragment:G1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:s0,envmap_vertex:Y1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:$1,fog_pars_fragment:J1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:u0,lights_fragment_begin:h0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:b0,map_particle_pars_fragment:y0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:E0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:w0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:I0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:k0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:H0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Y0,shadowmap_vertex:K0,shadowmask_pars_fragment:Z0,skinbase_vertex:$0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:hp,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:bp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:Ep,meshbasic_vert:Tp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Lp,meshnormal_frag:Dp,meshphong_vert:Ip,meshphong_frag:Np,meshphysical_vert:Up,meshphysical_frag:Op,meshtoon_vert:Fp,meshtoon_frag:kp,points_vert:Bp,points_frag:zp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Wp},ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},gn={basic:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([ae.points,ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([ae.common,ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([ae.sprite,ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Nt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Nt([ae.lights,ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gn.physical={uniforms:Nt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const wr={r:0,b:0,g:0},ai=new Mn,Xp=new Fe;function qp(s,e,t,n,i,r,a){const o=new Ne(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?f(o,l):T&&T.isColor&&(f(T,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Jr)?(u===void 0&&(u=new Pt(new js(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ts(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(ai)),u.material.toneMapped=je.getTransfer(T.colorSpace)!==it,(h!==T||d!==T.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pt(new ta(2,2),new Jn({name:"BackgroundMaterial",uniforms:ts(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==it,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,x){v.getRGB(wr,Xu(s)),n.buffers.color.setClear(wr.r,wr.g,wr.b,x,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:_,addToRenderList:m,dispose:b}}function jp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(E,R,F,z,q){let G=!1;const X=h(z,F,R);r!==X&&(r=X,c(r.object)),G=p(E,z,F,q),G&&g(E,z,F,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(E,R,F,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,R,F){const z=F.wireframe===!0;let q=n[E.id];q===void 0&&(q={},n[E.id]=q);let G=q[R.id];G===void 0&&(G={},q[R.id]=G);let X=G[z];return X===void 0&&(X=d(l()),G[z]=X),X}function d(E){const R=[],F=[],z=[];for(let q=0;q<t;q++)R[q]=0,F[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,R,F,z){const q=r.attributes,G=R.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){const ie=q[H];let oe=G[H];if(oe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(E,R,F,z){const q={},G=R.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){let ie=G[H];ie===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),q[H]=oe,X++}r.attributes=q,r.attributesNum=X,r.index=z}function _(){const E=r.newAttributes;for(let R=0,F=E.length;R<F;R++)E[R]=0}function m(E){f(E,0)}function f(E,R){const F=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;F[E]=1,z[E]===0&&(s.enableVertexAttribArray(E),z[E]=1),q[E]!==R&&(s.vertexAttribDivisor(E,R),q[E]=R)}function b(){const E=r.newAttributes,R=r.enabledAttributes;for(let F=0,z=R.length;F<z;F++)R[F]!==E[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function v(E,R,F,z,q,G,X){X===!0?s.vertexAttribIPointer(E,R,F,q,G):s.vertexAttribPointer(E,R,F,z,q,G)}function x(E,R,F,z){_();const q=z.attributes,G=F.getAttributes(),X=R.defaultAttributeValues;for(const K in G){const H=G[K];if(H.location>=0){let ne=q[K];if(ne===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const ie=ne.normalized,oe=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const Ye=Oe.buffer,Ke=Oe.type,Re=Oe.bytesPerElement,j=Ke===s.INT||Ke===s.UNSIGNED_INT||ne.gpuType===sl;if(ne.isInterleavedBufferAttribute){const Z=ne.data,he=Z.stride,Ce=ne.offset;if(Z.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)f(H.location+ve,Z.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ve=0;ve<H.locationSize;ve++)v(H.location+ve,oe/H.locationSize,Ke,ie,he*Re,(Ce+oe/H.locationSize*ve)*Re,j)}else{if(ne.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,ne.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Z=0;Z<H.locationSize;Z++)v(H.location+Z,oe/H.locationSize,Ke,ie,oe*Re,oe/H.locationSize*Z*Re,j)}}else if(X!==void 0){const ie=X[K];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(H.location,ie);break;case 3:s.vertexAttrib3fv(H.location,ie);break;case 4:s.vertexAttrib4fv(H.location,ie);break;default:s.vertexAttrib1fv(H.location,ie)}}}}b()}function T(){D();for(const E in n){const R=n[E];for(const F in R){const z=R[F];for(const q in z)u(z[q].object),delete z[q];delete R[F]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const R=n[E.id];for(const F in R){const z=R[F];for(const q in z)u(z[q].object),delete z[q];delete R[F]}delete n[E.id]}function C(E){for(const R in n){const F=n[R];if(F[E.id]===void 0)continue;const z=F[E.id];for(const q in z)u(z[q].object),delete z[q];delete F[E.id]}}function D(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Yp(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Jt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==an&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function Zp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,v=b*4;let x=f.clippingState||null;l.value=x,x=u(g,d,v,p);for(let T=0;T!==v;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $p(s){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=$i:o===vo&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _f(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gi=4,Hc=[.125,.215,.35,.446,.526,.582],hi=20,Ga=new Ml,Vc=new Ne;let Wa=null,Xa=0,qa=0,ja=!1;const ci=(1+Math.sqrt(5))/2,ki=1/ci,Gc=[new L(-ci,ki,0),new L(ci,ki,0),new L(-ki,0,ci),new L(ki,0,ci),new L(0,ci,-ki),new L(0,ci,ki),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Jp=new L;class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Jp}=r;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:qs,format:Jt,colorSpace:Lt,depthBuffer:!1},i=Xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=em(r,e,t)}return i}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,i,r){const l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Vc),h.toneMapping=$n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new xn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new Pt(new js,_);let f=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,f=!0):(_.color.copy(Vc),f=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const T=this._cubeSize;Rr(i,x*T,v>2?T:0,T,T),h.setRenderTarget(i),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gc[(i-r-1)%Gc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let b=0;for(let C=0;C<hi;++C){const D=C/_,S=Math.exp(-D*D/2);f.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],T=3*x*(i>v-Gi?i-v+Gi:0),w=4*(this._cubeSize-x);Rr(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Ga)}}function Qp(s){const e=[],t=[],n=[];let i=s;const r=s-Gi+1+Hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gi?l=Hc[a-s+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,D=w>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(S,_*g*w),v.set(d,m*g*w);const E=[w,w,w,w,w,w];x.set(E,f*g*w)}const T=new Et;T.setAttribute("position",new wt(b,_)),T.setAttribute("uv",new wt(v,m)),T.setAttribute("faceIndex",new wt(x,f)),e.push(T),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xc(s,e,t){const n=new mi(s,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function em(s,e,t){const n=new Float32Array(hi),i=new L(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function qc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function tm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===vo,u=l===$i||l===Ji;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Wc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Wc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function im(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let v=0,x=b.length;v<x;v+=3){const T=b[v+0],w=b[v+1],C=b[v+2];d.push(T,w,w,C,C,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const T=v+0,w=v+1,C=v+2;d.push(T,w,w,C,C,T)}}else return;const m=new(zu(d)?Wu:Gu)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sm(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function am(s,e,t){const n=new WeakMap,i=new $e;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*h),D=new Hu(C,T,w,h);D.type=an,D.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const F=f[R],z=b[R],q=v[R],G=T*w*4*R;for(let X=0;X<F.count;X++){const K=X*S;g===!0&&(i.fromBufferAttribute(F,X),C[G+K+0]=i.x,C[G+K+1]=i.y,C[G+K+2]=i.z,C[G+K+3]=0),_===!0&&(i.fromBufferAttribute(z,X),C[G+K+4]=i.x,C[G+K+5]=i.y,C[G+K+6]=i.z,C[G+K+7]=0),m===!0&&(i.fromBufferAttribute(q,X),C[G+K+8]=i.x,C[G+K+9]=i.y,C[G+K+10]=i.z,C[G+K+11]=q.itemSize===4?i.w:1)}}d={count:h,texture:D,size:new be(T,w)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function om(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ch=new bt,Yc=new th(1,1),uh=new Hu,hh=new Qd,dh=new ju,Kc=[],Zc=[],$c=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function cs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Kc[i];if(r===void 0&&(r=new Float32Array(i),Kc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ia(s,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function lm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function dm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Qc.set(n),s.uniformMatrix2fv(this.addr,!1,Qc),St(t,n)}}function fm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Jc.set(n),s.uniformMatrix3fv(this.addr,!1,Jc),St(t,n)}}function pm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),St(t,n)}}function mm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yc.compareFunction=ku,r=Yc):r=ch,t.setTexture2D(e||r,i)}function Em(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hh,i)}function Tm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dh,i)}function Am(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uh,i)}function wm(s){switch(s){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return hm;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return bm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Rm(s,e){s.uniform1fv(this.addr,e)}function Cm(s,e){const t=cs(e,this.size,2);s.uniform2fv(this.addr,t)}function Pm(s,e){const t=cs(e,this.size,3);s.uniform3fv(this.addr,t)}function Lm(s,e){const t=cs(e,this.size,4);s.uniform4fv(this.addr,t)}function Dm(s,e){const t=cs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Im(s,e){const t=cs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Nm(s,e){const t=cs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Um(s,e){s.uniform1iv(this.addr,e)}function Om(s,e){s.uniform2iv(this.addr,e)}function Fm(s,e){s.uniform3iv(this.addr,e)}function km(s,e){s.uniform4iv(this.addr,e)}function Bm(s,e){s.uniform1uiv(this.addr,e)}function zm(s,e){s.uniform2uiv(this.addr,e)}function Hm(s,e){s.uniform3uiv(this.addr,e)}function Vm(s,e){s.uniform4uiv(this.addr,e)}function Gm(s,e,t){const n=this.cache,i=e.length,r=ia(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ch,r[a])}function Wm(s,e,t){const n=this.cache,i=e.length,r=ia(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hh,r[a])}function Xm(s,e,t){const n=this.cache,i=e.length,r=ia(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||dh,r[a])}function qm(s,e,t){const n=this.cache,i=e.length,r=ia(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uh,r[a])}function jm(s){switch(s){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return km;case 5125:return Bm;case 36294:return zm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function eu(s,e){s.seq.push(e),s.map[e.id]=e}function $m(s,e,t){const n=s.name,i=n.length;for(Ya.lastIndex=0;;){const r=Ya.exec(n),a=Ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){eu(t,c===void 0?new Ym(o,s,e):new Km(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Zm(o),eu(t,h)),t=h}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);$m(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function tu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Jm=37297;let Qm=0;function e2(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nu=new ze;function t2(s){je._getMatrix(nu,je.workingColorSpace,s);const e=`mat3( ${nu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Xr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function iu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+e2(s.getShaderSource(e),o)}else return r}function n2(s,e){const t=t2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i2(s,e){let t;switch(e){case hd:t="Linear";break;case dd:t="Reinhard";break;case fd:t="Cineon";break;case Au:t="ACESFilmic";break;case md:t="AgX";break;case gd:t="Neutral";break;case pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new L;function s2(){je.getLuminanceCoefficients(Cr);const s=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function a2(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o2(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ws(s){return s!==""}function su(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(s){return s.replace(l2,u2)}const c2=new Map;function u2(s,e){let t=Ve[e];if(t===void 0){const n=c2.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(s){return s.replace(h2,d2)}function d2(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ou(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function p2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Ji:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m2(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ji&&(e="ENVMAP_MODE_REFRACTION"),e}function g2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tu:e="ENVMAP_BLENDING_MULTIPLY";break;case cd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function _2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v2(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=f2(t),c=p2(t),u=m2(t),h=g2(t),d=_2(t),p=r2(t),g=a2(r),_=i.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),f.length>0&&(f+=`
`)):(m=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),f=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$n?i2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,n2("linearToOutputTexel",t.outputColorSpace),s2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),a=$o(a),a=su(a,t),a=ru(a,t),o=$o(o),o=su(o,t),o=ru(o,t),a=au(a),o=au(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=b+m+a,x=b+f+o,T=tu(i,i.VERTEX_SHADER,v),w=tu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(T)||"",q=i.getShaderInfoLog(w)||"",G=F.trim(),X=z.trim(),K=q.trim();let H=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,w);else{const ie=iu(i,T,"vertex"),oe=iu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+ie+`
`+oe)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||K==="")&&(ne=!1);ne&&(R.diagnostics={runnable:H,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:f}})}i.deleteShader(T),i.deleteShader(w),D=new Hr(i,_),S=o2(i,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,Jm)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let x2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y2(e),t.set(e,n)),n}}class y2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function M2(s,e,t,n,i,r,a){const o=new fl,l=new b2,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,R,F,z){const q=F.fog,G=z.geometry,X=S.isMeshStandardMaterial?F.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=K&&K.mapping===Jr?K.image.height:null,ne=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=ie!==void 0?ie.length:0;let Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let Ye,Ke,Re,j;if(ne){const Je=gn[ne];Ye=Je.vertexShader,Ke=Je.fragmentShader}else Ye=S.vertexShader,Ke=S.fragmentShader,l.update(S),Re=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const Z=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,We=!!S.map,pt=!!S.matcap,P=!!K,ke=!!S.aoMap,Le=!!S.lightMap,Ee=!!S.bumpMap,fe=!!S.normalMap,tt=!!S.displacementMap,me=!!S.emissiveMap,He=!!S.metalnessMap,Tt=!!S.roughnessMap,mt=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,O=S.iridescence>0,W=S.sheen>0,$=S.transmission>0,V=mt&&!!S.anisotropyMap,Se=A&&!!S.clearcoatMap,se=A&&!!S.clearcoatNormalMap,xe=A&&!!S.clearcoatRoughnessMap,ye=O&&!!S.iridescenceMap,ee=O&&!!S.iridescenceThicknessMap,ue=W&&!!S.sheenColorMap,De=W&&!!S.sheenRoughnessMap,Me=!!S.specularMap,le=!!S.specularColorMap,Be=!!S.specularIntensityMap,I=$&&!!S.transmissionMap,te=$&&!!S.thicknessMap,re=!!S.gradientMap,pe=!!S.alphaMap,J=S.alphaTest>0,Y=!!S.alphaHash,_e=!!S.extensions;let Ue=$n;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const at={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:Ke,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Lt,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:pt,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:H,aoMap:ke,lightMap:Le,bumpMap:Ee,normalMap:fe,displacementMap:d&&tt,emissiveMap:me,normalMapObjectSpace:fe&&S.normalMapType===Md,normalMapTangentSpace:fe&&S.normalMapType===Fu,metalnessMap:He,roughnessMap:Tt,anisotropy:mt,anisotropyMap:V,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:y,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:Me,specularColorMap:le,specularIntensityMap:Be,transmission:$,transmissionMap:I,thicknessMap:te,gradientMap:re,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:Y,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:ke&&_(S.aoMap.channel),lightMapUv:Le&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:fe&&_(S.normalMap.channel),displacementMapUv:tt&&_(S.displacementMap.channel),emissiveMapUv:me&&_(S.emissiveMap.channel),metalnessMapUv:He&&_(S.metalnessMap.channel),roughnessMapUv:Tt&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:Be&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(fe||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(We||pe),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)E.push(R),E.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(b(E,S),v(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function b(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const E=g[S.type];let R;if(E){const F=gn[E];R=ff.clone(F.uniforms)}else R=S.uniforms;return R}function T(S,E){let R;for(let F=0,z=u.length;F<z;F++){const q=u[F];if(q.cacheKey===E){R=q,++R.usedTimes;break}}return R===void 0&&(R=new v2(s,E,S,r),u.push(R)),R}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function S2(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function E2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||E2),n.length>1&&n.sort(d||lu),i.length>1&&i.sort(d||lu)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function T2(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new cu,s.set(n,[a])):i>=r.length?(a=new cu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function A2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function w2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let R2=0;function C2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function P2(s){const e=new A2,t=w2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Fe,a=new Fe;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,v=0,x=0,T=0,w=0,C=0;c.sort(C2);for(let S=0,E=c.length;S<E;S++){const R=c[S],F=R.color,z=R.intensity,q=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*z,h+=F.g*z,d+=F.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);C++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=X,p++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const K=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,K.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=G,x++}_++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=C,n.version=R2++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const v=c[f];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function uu(s){const e=new P2(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function L2(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new uu(s),e.set(i,[o])):r>=a.length?(o=new uu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const D2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N2(s,e,t){let n=new ml;const i=new be,r=new be,a=new $e,o=new Lf({depthPacking:yd}),l=new Df,c={},u=t.maxTextureSize,h={[kn]:Bt,[Bt]:kn,[sn]:sn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:D2,fragmentShader:I2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let f=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=f!==In&&this.type===In,q=f===In&&this.type!==In;for(let G=0,X=w.length;G<X;G++){const K=w[G],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ne.x),i.x=r.x*ne.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ne.y),i.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||z===!0||q===!0){const oe=this.type!==In?{minFilter:Ot,magFilter:Ot}:{};H.map!==null&&H.map.dispose(),H.map=new mi(i.x,i.y,oe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ie=H.getViewportCount();for(let oe=0;oe<ie;oe++){const Oe=H.getViewport(oe);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),F.viewport(a),H.updateMatrices(K,oe),n=H.getFrustum(),x(C,D,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===In&&b(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,R)};function b(w,C){const D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,D,p,_,null)}function v(w,C,D,S){let E=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=D.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=E.uuid,z=C.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let G=q[z];G===void 0&&(G=E.clone(),q[z]=G,C.addEventListener("dispose",T)),E=G}if(E.visible=C.visible,E.wireframe=C.wireframe,S===In?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=s.properties.get(E);F.light=D}return E}function x(w,C,D,S,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===In)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=e.update(w),q=w.material;if(Array.isArray(q)){const G=z.groups;for(let X=0,K=G.length;X<K;X++){const H=G[X],ne=q[H.materialIndex];if(ne&&ne.visible){const ie=v(w,ne,S,E);w.onBeforeShadow(s,w,C,D,z,ie,H),s.renderBufferDirect(D,null,z,ie,w,H),w.onAfterShadow(s,w,C,D,z,ie,H)}}}else if(q.visible){const G=v(w,q,S,E);w.onBeforeShadow(s,w,C,D,z,G,null),s.renderBufferDirect(D,null,z,G,w,null),w.onAfterShadow(s,w,C,D,z,G,null)}}const F=w.children;for(let z=0,q=F.length;z<q;z++)x(F[z],C,D,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const D in c){const S=c[D],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const U2={[co]:uo,[ho]:mo,[fo]:go,[Zi]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:Zi};function O2(s,e){function t(){let I=!1;const te=new $e;let re=null;const pe=new $e(0,0,0,0);return{setMask:function(J){re!==J&&!I&&(s.colorMask(J,J,J,J),re=J)},setLocked:function(J){I=J},setClear:function(J,Y,_e,Ue,at){at===!0&&(J*=Ue,Y*=Ue,_e*=Ue),te.set(J,Y,_e,Ue),pe.equals(te)===!1&&(s.clearColor(J,Y,_e,Ue),pe.copy(te))},reset:function(){I=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,te=!1,re=null,pe=null,J=null;return{setReversed:function(Y){if(te!==Y){const _e=e.get("EXT_clip_control");Y?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),te=Y;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(Y){Y?Z(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Y){re!==Y&&!I&&(s.depthMask(Y),re=Y)},setFunc:function(Y){if(te&&(Y=U2[Y]),pe!==Y){switch(Y){case co:s.depthFunc(s.NEVER);break;case uo:s.depthFunc(s.ALWAYS);break;case ho:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case fo:s.depthFunc(s.EQUAL);break;case po:s.depthFunc(s.GEQUAL);break;case mo:s.depthFunc(s.GREATER);break;case go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Y}},setLocked:function(Y){I=Y},setClear:function(Y){J!==Y&&(te&&(Y=1-Y),s.clearDepth(Y),J=Y)},reset:function(){I=!1,re=null,pe=null,J=null,te=!1}}}function i(){let I=!1,te=null,re=null,pe=null,J=null,Y=null,_e=null,Ue=null,at=null;return{setTest:function(Je){I||(Je?Z(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Je){te!==Je&&!I&&(s.stencilMask(Je),te=Je)},setFunc:function(Je,An,pn){(re!==Je||pe!==An||J!==pn)&&(s.stencilFunc(Je,An,pn),re=Je,pe=An,J=pn)},setOp:function(Je,An,pn){(Y!==Je||_e!==An||Ue!==pn)&&(s.stencilOp(Je,An,pn),Y=Je,_e=An,Ue=pn)},setLocked:function(Je){I=Je},setClear:function(Je){at!==Je&&(s.clearStencil(Je),at=Je)},reset:function(){I=!1,te=null,re=null,pe=null,J=null,Y=null,_e=null,Ue=null,at=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,v=null,x=null,T=null,w=null,C=new Ne(0,0,0),D=0,S=!1,E=null,R=null,F=null,z=null,q=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let ne=null,ie={};const oe=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Ye=new $e().fromArray(oe),Ke=new $e().fromArray(Oe);function Re(I,te,re,pe){const J=new Uint8Array(4),Y=s.createTexture();s.bindTexture(I,Y),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<re;_e++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return Y}const j={};j[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(Zi),Ee(!1),fe(Wl),Z(s.CULL_FACE),ke(Zn);function Z(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function he(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ce(I,te){return h[I]!==te?(s.bindFramebuffer(I,te),h[I]=te,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=te),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ve(I,te){let re=p,pe=!1;if(I){re=d.get(te),re===void 0&&(re=[],d.set(te,re));const J=I.textures;if(re.length!==J.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,_e=J.length;Y<_e;Y++)re[Y]=s.COLOR_ATTACHMENT0+Y;re.length=J.length,pe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,pe=!0);pe&&s.drawBuffers(re)}function We(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const pt={[ui]:s.FUNC_ADD,[qh]:s.FUNC_SUBTRACT,[jh]:s.FUNC_REVERSE_SUBTRACT};pt[Yh]=s.MIN,pt[Kh]=s.MAX;const P={[Zh]:s.ZERO,[$h]:s.ONE,[Jh]:s.SRC_COLOR,[oo]:s.SRC_ALPHA,[sd]:s.SRC_ALPHA_SATURATE,[nd]:s.DST_COLOR,[ed]:s.DST_ALPHA,[Qh]:s.ONE_MINUS_SRC_COLOR,[lo]:s.ONE_MINUS_SRC_ALPHA,[id]:s.ONE_MINUS_DST_COLOR,[td]:s.ONE_MINUS_DST_ALPHA,[rd]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[od]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function ke(I,te,re,pe,J,Y,_e,Ue,at,Je){if(I===Zn){_===!0&&(he(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),I!==Xh){if(I!==m||Je!==S){if((f!==ui||x!==ui)&&(s.blendEquation(s.FUNC_ADD),f=ui,x=ui),Je)switch(I){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ao:s.blendFunc(s.ONE,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,v=null,T=null,w=null,C.set(0,0,0),D=0,m=I,S=Je}return}J=J||te,Y=Y||re,_e=_e||pe,(te!==f||J!==x)&&(s.blendEquationSeparate(pt[te],pt[J]),f=te,x=J),(re!==b||pe!==v||Y!==T||_e!==w)&&(s.blendFuncSeparate(P[re],P[pe],P[Y],P[_e]),b=re,v=pe,T=Y,w=_e),(Ue.equals(C)===!1||at!==D)&&(s.blendColor(Ue.r,Ue.g,Ue.b,at),C.copy(Ue),D=at),m=I,S=!1}function Le(I,te){I.side===sn?he(s.CULL_FACE):Z(s.CULL_FACE);let re=I.side===Bt;te&&(re=!re),Ee(re),I.blending===qi&&I.transparent===!1?ke(Zn):ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(I){E!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),E=I)}function fe(I){I!==Vh?(Z(s.CULL_FACE),I!==R&&(I===Wl?s.cullFace(s.BACK):I===Gh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),R=I}function tt(I){I!==F&&(X&&s.lineWidth(I),F=I)}function me(I,te,re){I?(Z(s.POLYGON_OFFSET_FILL),(z!==te||q!==re)&&(s.polygonOffset(te,re),z=te,q=re)):he(s.POLYGON_OFFSET_FILL)}function He(I){I?Z(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function Tt(I){I===void 0&&(I=s.TEXTURE0+G-1),ne!==I&&(s.activeTexture(I),ne=I)}function mt(I,te,re){re===void 0&&(ne===null?re=s.TEXTURE0+G-1:re=ne);let pe=ie[re];pe===void 0&&(pe={type:void 0,texture:void 0},ie[re]=pe),(pe.type!==I||pe.texture!==te)&&(ne!==re&&(s.activeTexture(re),ne=re),s.bindTexture(I,te||j[I]),pe.type=I,pe.texture=te)}function A(){const I=ie[ne];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Ye.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function De(I){Ke.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function Me(I,te){let re=c.get(te);re===void 0&&(re=new WeakMap,c.set(te,re));let pe=re.get(I);pe===void 0&&(pe=s.getUniformBlockIndex(te,I.name),re.set(I,pe))}function le(I,te){const pe=c.get(te).get(I);l.get(te)!==pe&&(s.uniformBlockBinding(te,pe,I.__bindingPointIndex),l.set(te,pe))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,ie={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,v=null,x=null,T=null,w=null,C=new Ne(0,0,0),D=0,S=!1,E=null,R=null,F=null,z=null,q=null,Ye.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:he,bindFramebuffer:Ce,drawBuffers:ve,useProgram:We,setBlending:ke,setMaterial:Le,setFlipSided:Ee,setCullFace:fe,setLineWidth:tt,setPolygonOffset:me,setScissorTest:He,activeTexture:Tt,bindTexture:mt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:ye,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:se,texStorage3D:xe,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:ue,viewport:De,reset:Be}}function F2(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Bs("canvas")}function _(A,y,O){let W=1;const $=mt(A);if(($.width>O||$.height>O)&&(W=O/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const V=Math.floor(W*$.width),Se=Math.floor(W*$.height);h===void 0&&(h=g(V,Se));const se=y?g(V,Se):h;return se.width=V,se.height=Se,se.getContext("2d").drawImage(A,0,0,V,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+Se+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,y,O,W,$=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=y;if(y===s.RED&&(O===s.FLOAT&&(V=s.R32F),O===s.HALF_FLOAT&&(V=s.R16F),O===s.UNSIGNED_BYTE&&(V=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.R8UI),O===s.UNSIGNED_SHORT&&(V=s.R16UI),O===s.UNSIGNED_INT&&(V=s.R32UI),O===s.BYTE&&(V=s.R8I),O===s.SHORT&&(V=s.R16I),O===s.INT&&(V=s.R32I)),y===s.RG&&(O===s.FLOAT&&(V=s.RG32F),O===s.HALF_FLOAT&&(V=s.RG16F),O===s.UNSIGNED_BYTE&&(V=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RG8UI),O===s.UNSIGNED_SHORT&&(V=s.RG16UI),O===s.UNSIGNED_INT&&(V=s.RG32UI),O===s.BYTE&&(V=s.RG8I),O===s.SHORT&&(V=s.RG16I),O===s.INT&&(V=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGB8UI),O===s.UNSIGNED_SHORT&&(V=s.RGB16UI),O===s.UNSIGNED_INT&&(V=s.RGB32UI),O===s.BYTE&&(V=s.RGB8I),O===s.SHORT&&(V=s.RGB16I),O===s.INT&&(V=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),O===s.UNSIGNED_INT&&(V=s.RGBA32UI),O===s.BYTE&&(V=s.RGBA8I),O===s.SHORT&&(V=s.RGBA16I),O===s.INT&&(V=s.RGBA32I)),y===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),y===s.RGBA){const Se=$?Xr:je.getTransfer(W);O===s.FLOAT&&(V=s.RGBA32F),O===s.HALF_FLOAT&&(V=s.RGBA16F),O===s.UNSIGNED_BYTE&&(V=Se===it?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(A,y){let O;return A?y===null||y===pi||y===Ns?O=s.DEPTH24_STENCIL8:y===an?O=s.DEPTH32F_STENCIL8:y===Is&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===pi||y===Ns?O=s.DEPTH_COMPONENT24:y===an?O=s.DEPTH_COMPONENT32F:y===Is&&(O=s.DEPTH_COMPONENT16),O}function T(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){const y=A.target;y.removeEventListener("dispose",w),D(y),y.isVideoTexture&&u.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),E(y)}function D(A){const y=n.get(A);if(y.__webglInit===void 0)return;const O=A.source,W=d.get(O);if(W){const $=W[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(A),Object.keys(W).length===0&&d.delete(O)}n.remove(A)}function S(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const O=A.source,W=d.get(O);delete W[y.__cacheKey],a.memory.textures--}function E(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let $=0;$<y.__webglFramebuffer[W].length;$++)s.deleteFramebuffer(y.__webglFramebuffer[W][$]);else s.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)s.deleteFramebuffer(y.__webglFramebuffer[W]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let W=0,$=O.length;W<$;W++){const V=n.get(O[W]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(A)}let R=0;function F(){R=0}function z(){const A=R;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function q(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function G(A,y){const O=n.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,A,y);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function X(A,y){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){j(O,A,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function K(A,y){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){j(O,A,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function H(A,y){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Z(O,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const ne={[Qi]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},ie={[Ot]:s.NEAREST,[Ru]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},oe={[Sd]:s.NEVER,[Cd]:s.ALWAYS,[Ed]:s.LESS,[ku]:s.LEQUAL,[Td]:s.EQUAL,[Rd]:s.GEQUAL,[Ad]:s.GREATER,[wd]:s.NOTEQUAL};function Oe(A,y){if(y.type===an&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Or||y.magFilter===As||y.magFilter===Un||y.minFilter===Wt||y.minFilter===Or||y.minFilter===As||y.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ne[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ne[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ne[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ie[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==As&&y.minFilter!==Un||y.type===an&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));const W=y.source;let $=d.get(W);$===void 0&&($={},d.set(W,$));const V=q(y);if(V!==A.__cacheKey){$[V]===void 0&&($[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[V].usedTimes++;const Se=$[A.__cacheKey];Se!==void 0&&($[A.__cacheKey].usedTimes--,Se.usedTimes===0&&S(y)),A.__cacheKey=V,A.__webglTexture=$[V].texture}return O}function Ke(A,y,O){return Math.floor(Math.floor(A/O)/y)}function Re(A,y,O,W){const V=A.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,O,W,y.data);else{V.sort((ee,ue)=>ee.start-ue.start);let Se=0;for(let ee=1;ee<V.length;ee++){const ue=V[Se],De=V[ee],Me=ue.start+ue.count,le=Ke(De.start,y.width,4),Be=Ke(ue.start,y.width,4);De.start<=Me+1&&le===Be&&Ke(De.start+De.count-1,y.width,4)===le?ue.count=Math.max(ue.count,De.start+De.count-ue.start):(++Se,V[Se]=De)}V.length=Se+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ee=0,ue=V.length;ee<ue;ee++){const De=V[ee],Me=Math.floor(De.start/4),le=Math.ceil(De.count/4),Be=Me%y.width,I=Math.floor(Me/y.width),te=le,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Be,I,te,re,O,W,y.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function j(A,y,O){let W=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=s.TEXTURE_3D);const $=Ye(A,y),V=y.source;t.bindTexture(W,A.__webglTexture,s.TEXTURE0+O);const Se=n.get(V);if(V.version!==Se.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const se=je.getPrimaries(je.workingColorSpace),xe=y.colorSpace===Yn?null:je.getPrimaries(y.colorSpace),ye=y.colorSpace===Yn||se===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=_(y.image,!1,i.maxTextureSize);ee=Tt(y,ee);const ue=r.convert(y.format,y.colorSpace),De=r.convert(y.type);let Me=v(y.internalFormat,ue,De,y.colorSpace,y.isVideoTexture);Oe(W,y);let le;const Be=y.mipmaps,I=y.isVideoTexture!==!0,te=Se.__version===void 0||$===!0,re=V.dataReady,pe=T(y,ee);if(y.isDepthTexture)Me=x(y.format===Os,y.type),te&&(I?t.texStorage2D(s.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,ue,De,null));else if(y.isDataTexture)if(Be.length>0){I&&te&&t.texStorage2D(s.TEXTURE_2D,pe,Me,Be[0].width,Be[0].height);for(let J=0,Y=Be.length;J<Y;J++)le=Be[J],I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,De,le.data):t.texImage2D(s.TEXTURE_2D,J,Me,le.width,le.height,0,ue,De,le.data);y.generateMipmaps=!1}else I?(te&&t.texStorage2D(s.TEXTURE_2D,pe,Me,ee.width,ee.height),re&&Re(y,ee,ue,De)):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,ue,De,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Me,Be[0].width,Be[0].height,ee.depth);for(let J=0,Y=Be.length;J<Y;J++)if(le=Be[J],y.format!==Jt)if(ue!==null)if(I){if(re)if(y.layerUpdates.size>0){const _e=zc(le.width,le.height,y.format,y.type);for(const Ue of y.layerUpdates){const at=le.data.subarray(Ue*_e/le.data.BYTES_PER_ELEMENT,(Ue+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Ue,le.width,le.height,1,ue,at)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,ee.depth,ue,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Me,le.width,le.height,ee.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,ee.depth,ue,De,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Me,le.width,le.height,ee.depth,0,ue,De,le.data)}else{I&&te&&t.texStorage2D(s.TEXTURE_2D,pe,Me,Be[0].width,Be[0].height);for(let J=0,Y=Be.length;J<Y;J++)le=Be[J],y.format!==Jt?ue!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,ue,De,le.data):t.texImage2D(s.TEXTURE_2D,J,Me,le.width,le.height,0,ue,De,le.data)}else if(y.isDataArrayTexture)if(I){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Me,ee.width,ee.height,ee.depth),re)if(y.layerUpdates.size>0){const J=zc(ee.width,ee.height,y.format,y.type);for(const Y of y.layerUpdates){const _e=ee.data.subarray(Y*J/ee.data.BYTES_PER_ELEMENT,(Y+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ue,De,_e)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(y.isData3DTexture)I?(te&&t.texStorage3D(s.TEXTURE_3D,pe,Me,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(y.isFramebufferTexture){if(te)if(I)t.texStorage2D(s.TEXTURE_2D,pe,Me,ee.width,ee.height);else{let J=ee.width,Y=ee.height;for(let _e=0;_e<pe;_e++)t.texImage2D(s.TEXTURE_2D,_e,Me,J,Y,0,ue,De,null),J>>=1,Y>>=1}}else if(Be.length>0){if(I&&te){const J=mt(Be[0]);t.texStorage2D(s.TEXTURE_2D,pe,Me,J.width,J.height)}for(let J=0,Y=Be.length;J<Y;J++)le=Be[J],I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ue,De,le):t.texImage2D(s.TEXTURE_2D,J,Me,ue,De,le);y.generateMipmaps=!1}else if(I){if(te){const J=mt(ee);t.texStorage2D(s.TEXTURE_2D,pe,Me,J.width,J.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,De,ee)}else t.texImage2D(s.TEXTURE_2D,0,Me,ue,De,ee);m(y)&&f(W),Se.__version=V.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Z(A,y,O){if(y.image.length!==6)return;const W=Ye(A,y),$=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const V=n.get($);if($.version!==V.__version||W===!0){t.activeTexture(s.TEXTURE0+O);const Se=je.getPrimaries(je.workingColorSpace),se=y.colorSpace===Yn?null:je.getPrimaries(y.colorSpace),xe=y.colorSpace===Yn||Se===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!ye&&!ee?ue[Y]=_(y.image[Y],!0,i.maxCubemapSize):ue[Y]=ee?y.image[Y].image:y.image[Y],ue[Y]=Tt(y,ue[Y]);const De=ue[0],Me=r.convert(y.format,y.colorSpace),le=r.convert(y.type),Be=v(y.internalFormat,Me,le,y.colorSpace),I=y.isVideoTexture!==!0,te=V.__version===void 0||W===!0,re=$.dataReady;let pe=T(y,De);Oe(s.TEXTURE_CUBE_MAP,y);let J;if(ye){I&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Be,De.width,De.height);for(let Y=0;Y<6;Y++){J=ue[Y].mipmaps;for(let _e=0;_e<J.length;_e++){const Ue=J[_e];y.format!==Jt?Me!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ue.width,Ue.height,Me,le,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Be,Ue.width,Ue.height,0,Me,le,Ue.data)}}}else{if(J=y.mipmaps,I&&te){J.length>0&&pe++;const Y=mt(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,Me,le,ue[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,ue[Y].width,ue[Y].height,0,Me,le,ue[Y].data);for(let _e=0;_e<J.length;_e++){const at=J[_e].image[Y].image;I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,at.width,at.height,Me,le,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Be,at.width,at.height,0,Me,le,at.data)}}else{I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me,le,ue[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,Me,le,ue[Y]);for(let _e=0;_e<J.length;_e++){const Ue=J[_e];I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Me,le,Ue.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Be,Me,le,Ue.image[Y])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),V.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function he(A,y,O,W,$,V){const Se=r.convert(O.format,O.colorSpace),se=r.convert(O.type),xe=v(O.internalFormat,Se,se,O.colorSpace),ye=n.get(y),ee=n.get(O);if(ee.__renderTarget=y,!ye.__hasExternalTextures){const ue=Math.max(1,y.width>>V),De=Math.max(1,y.height>>V);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,V,xe,ue,De,y.depth,0,Se,se,null):t.texImage2D($,V,xe,ue,De,0,Se,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,$,ee.__webglTexture,0,tt(y)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,$,ee.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(A,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const W=y.depthTexture,$=W&&W.isDepthTexture?W.type:null,V=x(y.stencilBuffer,$),Se=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=tt(y);me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,V,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,V,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,V,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,A)}else{const W=y.textures;for(let $=0;$<W.length;$++){const V=W[$],Se=r.convert(V.format,V.colorSpace),se=r.convert(V.type),xe=v(V.internalFormat,Se,se,V.colorSpace),ye=tt(y);O&&me(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,xe,y.width,y.height):me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,xe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const $=W.__webglTexture,V=tt(y);if(y.depthTexture.format===Us)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(y.depthTexture.format===Os)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(A){const y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=W}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=A.texture.mipmaps;W&&W.length>0?ve(y.__webglFramebuffer[0],A):ve(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=s.createRenderbuffer(),Ce(y.__webglDepthbuffer[W],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,V)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ce(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(A,y,O){const W=n.get(A);y!==void 0&&he(W.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&We(A)}function P(A){const y=A.texture,O=n.get(A),W=n.get(y);A.addEventListener("dispose",C);const $=A.textures,V=A.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=y.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let xe=0;xe<y.mipmaps.length;xe++)O.__webglFramebuffer[se][xe]=s.createFramebuffer()}else O.__webglFramebuffer[se]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)O.__webglFramebuffer[se]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Se)for(let se=0,xe=$.length;se<xe;se++){const ye=n.get($[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const xe=$[se];O.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const ye=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ue=v(xe.internalFormat,ye,ee,xe.colorSpace,A.isXRRenderTarget===!0),De=tt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ue,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,O.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(O.__webglFramebuffer[se][xe],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else he(O.__webglFramebuffer[se],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,xe=$.length;se<xe;se++){const ye=$[se],ee=n.get(ye);let ue=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Oe(ue,ye),he(O.__webglFramebuffer,A,ye,s.COLOR_ATTACHMENT0+se,ue,0),m(ye)&&f(ue)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,W.__webglTexture),Oe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)he(O.__webglFramebuffer[xe],A,y,s.COLOR_ATTACHMENT0,se,xe);else he(O.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,se,0);m(y)&&f(se),t.unbindTexture()}A.depthBuffer&&We(A)}function ke(A){const y=A.textures;for(let O=0,W=y.length;O<W;O++){const $=y[O];if(m($)){const V=b(A),Se=n.get($).__webglTexture;t.bindTexture(V,Se),f(V),t.unbindTexture()}}}const Le=[],Ee=[];function fe(A){if(A.samples>0){if(me(A)===!1){const y=A.textures,O=A.width,W=A.height;let $=s.COLOR_BUFFER_BIT;const V=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(A),se=y.length>1;if(se)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=n.get(y[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,O,W,0,0,O,W,$,s.NEAREST),l===!0&&(Le.length=0,Ee.length=0,Le.push(s.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Le.push(V),Ee.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=n.get(y[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function tt(A){return Math.min(i.maxSamples,A.samples)}function me(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function He(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Tt(A,y){const O=A.colorSpace,W=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Lt&&O!==Yn&&(je.getTransfer(O)===it?(W!==Jt||$!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=he,this.useMultisampledRTT=me}function k2(s,e){function t(n,i=Yn){let r;const a=je.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return s.BYTE;if(n===Pu)return s.SHORT;if(n===Is)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===qs)return s.HALF_FLOAT;if(n===Iu)return s.ALPHA;if(n===Nu)return s.RGB;if(n===Jt)return s.RGBA;if(n===Us)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===ol)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===Uu)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===ul)return s.RGBA_INTEGER;if(n===Fr||n===kr||n===Br||n===zr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===bo||n===yo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Eo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===Eo)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===No||n===Uo||n===Oo||n===Fo||n===ko||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Ho||n===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
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

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:B2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V2 extends gi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new H2,f={},b=t.getContextAttributes();let v=null,x=null;const T=[],w=[],C=new be;let D=null;const S=new Ut;S.viewport=new $e;const E=new Ut;E.viewport=new $e;const R=[S,E],F=new Jf;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=T[j];return Z===void 0&&(Z=new Na,T[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=T[j];return Z===void 0&&(Z=new Na,T[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=T[j];return Z===void 0&&(Z=new Na,T[j]=Z),Z.getHandSpace()};function G(j){const Z=w.indexOf(j.inputSource);if(Z===-1)return;const he=T[Z];he!==void 0&&(he.update(j.inputSource,j.frame,c||a),he.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let j=0;j<T.length;j++){const Z=w[j];Z!==null&&(w[j]=null,T[j].disconnect(Z))}z=null,q=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(v),p=null,d=null,h=null,i=null,x=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ce=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?Os:Us,Ce=b.stencil?Ns:pi);const We={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new mi(d.textureWidth,d.textureHeight,{format:Jt,type:bn,depthTexture:new th(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new mi(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(j){for(let Z=0;Z<j.removed.length;Z++){const he=j.removed[Z],Ce=w.indexOf(he);Ce>=0&&(w[Ce]=null,T[Ce].disconnect(he))}for(let Z=0;Z<j.added.length;Z++){const he=j.added[Z];let Ce=w.indexOf(he);if(Ce===-1){for(let We=0;We<T.length;We++)if(We>=w.length){w.push(he),Ce=We;break}else if(w[We]===null){w[We]=he,Ce=We;break}if(Ce===-1)break}const ve=T[Ce];ve&&ve.connect(he)}}const H=new L,ne=new L;function ie(j,Z,he){H.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(he.matrixWorld);const Ce=H.distanceTo(ne),ve=Z.projectionMatrix.elements,We=he.projectionMatrix.elements,pt=ve[14]/(ve[10]-1),P=ve[14]/(ve[10]+1),ke=(ve[9]+1)/ve[5],Le=(ve[9]-1)/ve[5],Ee=(ve[8]-1)/ve[0],fe=(We[8]+1)/We[0],tt=pt*Ee,me=pt*fe,He=Ce/(-Ee+fe),Tt=He*-Ee;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(He),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const mt=pt+He,A=P+He,y=tt-Tt,O=me+(Ce-Tt),W=ke*P/A*mt,$=Le*P/A*mt;j.projectionMatrix.makePerspective(y,O,W,$,mt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oe(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Z=j.near,he=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),F.near=E.near=S.near=Z,F.far=E.far=S.far=he,(z!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,q=F.far),F.layers.mask=j.layers.mask|6,S.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Ce=j.parent,ve=F.cameras;oe(F,Ce);for(let We=0;We<ve.length;We++)oe(ve[We],Ce);ve.length===2?ie(F,S,E):F.projectionMatrix.copy(S.projectionMatrix),Oe(j,F,Ce)};function Oe(j,Z,he){he===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=es*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return f[j]};let Ye=null;function Ke(j,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ce=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let P=0;P<he.length;P++){const ke=he[P];let Le=null;if(p!==null)Le=p.getViewport(ke);else{const fe=h.getViewSubImage(d,ke);Le=fe.viewport,P===0&&(e.setRenderTargetTextures(x,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(x))}let Ee=R[P];Ee===void 0&&(Ee=new Ut,Ee.layers.enable(P),Ee.viewport=new $e,R[P]=Ee),Ee.matrix.fromArray(ke.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ke.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Le.x,Le.y,Le.width,Le.height),P===0&&(F.matrix.copy(Ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(Ee)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const P=h.getDepthInformation(he[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<he.length;P++){const ke=he[P].camera;if(ke){let Le=f[ke];Le||(Le=new nh,f[ke]=Le);const Ee=h.getCameraImage(ke);Le.sourceTexture=Ee}}}}for(let he=0;he<T.length;he++){const Ce=w[he],ve=T[he];Ce!==null&&ve!==void 0&&ve.update(Ce,Z,c||a)}Ye&&Ye(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Re=new lh;Re.setAnimationLoop(Ke),this.setAnimationLoop=function(j){Ye=j},this.dispose=function(){}}}const oi=new Mn,G2=new Fe;function W2(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,oi.copy(x),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(G2.makeRotationFromEuler(oi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X2(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=i[b.id];x===void 0&&(g(b),x=u(b),i[b.id]=x,b.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(b,T);const w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const v=h();b.__bindingPointIndex=v;const x=s.createBuffer(),T=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=i[b.id],x=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,C=x.length;w<C;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,E=D.length;S<E;S++){const R=D[S];if(p(R,w,S,T)===!0){const F=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let G=0;G<z.length;G++){const X=z[G],K=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+q,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,v,x,T){const w=b.value,C=v+"_"+x;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const D=T[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return T[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(b){const v=b.uniforms;let x=0;const T=16;for(let C=0,D=v.length;C<D;C++){const S=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,R=S.length;E<R;E++){const F=S[E],z=Array.isArray(F.value)?F.value:[F.value];for(let q=0,G=z.length;q<G;q++){const X=z[q],K=_(X),H=x%T,ne=H%K.boundary,ie=H+ne;x+=ne,ie!==0&&T-ie<K.storage&&(x+=T-ie),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=K.storage}}}const w=x%T;return w>0&&(x+=T-w),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class q2{constructor(e={}){const{canvas:t=qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=dt;let w=0,C=0,D=null,S=-1,E=null;const R=new $e,F=new $e;let z=null;const q=new Ne(0);let G=0,X=t.width,K=t.height,H=1,ne=null,ie=null;const oe=new $e(0,0,X,K),Oe=new $e(0,0,X,K);let Ye=!1;const Ke=new ml;let Re=!1,j=!1;const Z=new Fe,he=new L,Ce=new $e,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function pt(){return D===null?H:1}let P=n;function ke(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){const N="webgl2";if(P=ke(N,M),P===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Le,Ee,fe,tt,me,He,Tt,mt,A,y,O,W,$,V,Se,se,xe,ye,ee,ue,De,Me,le,Be;function I(){Le=new nm(P),Le.init(),Me=new k2(P,Le),Ee=new Kp(P,Le,e,Me),fe=new O2(P,Le),Ee.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),tt=new rm(P),me=new S2,He=new F2(P,Le,fe,me,Ee,Me,tt),Tt=new $p(x),mt=new tm(x),A=new h1(P),le=new jp(P,A),y=new im(P,A,tt,le),O=new om(P,y,A,tt),ee=new am(P,Ee,He),se=new Zp(me),W=new M2(x,Tt,mt,Le,Ee,le,se),$=new W2(x,me),V=new T2,Se=new L2(Le),ye=new qp(x,Tt,mt,fe,O,p,l),xe=new N2(x,O,Ee),Be=new X2(P,tt,Ee,fe),ue=new Yp(P,Le,tt),De=new sm(P,Le,tt),tt.programs=W.programs,x.capabilities=Ee,x.extensions=Le,x.properties=me,x.renderLists=V,x.shadowMap=xe,x.state=fe,x.info=tt}I();const te=new V2(x,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(X,K,!1))},this.getSize=function(M){return M.set(X,K)},this.setSize=function(M,N,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,K=N,t.width=Math.floor(M*H),t.height=Math.floor(N*H),k===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(M,N,k){X=M,K=N,H=k,t.width=Math.floor(M*k),t.height=Math.floor(N*k),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,N,k,B){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,N,k,B),fe.viewport(R.copy(oe).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,N,k,B){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,N,k,B),fe.scissor(F.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){fe.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){ie=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,k=!0){let B=0;if(M){let U=!1;if(D!==null){const Q=D.texture.format;U=Q===ul||Q===cl||Q===ll}if(U){const Q=D.texture.type,ce=Q===bn||Q===pi||Q===Is||Q===Ns||Q===rl||Q===al,ge=ye.getClearColor(),de=ye.getClearAlpha(),Pe=ge.r,Ie=ge.g,Te=ge.b;ce?(g[0]=Pe,g[1]=Ie,g[2]=Te,g[3]=de,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Pe,_[1]=Ie,_[2]=Te,_[3]=de,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}N&&(B|=P.DEPTH_BUFFER_BIT),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ye.dispose(),V.dispose(),Se.dispose(),me.dispose(),Tt.dispose(),mt.dispose(),O.dispose(),le.dispose(),Be.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",pn),te.removeEventListener("sessionend",kl),ei.stop()};function re(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=tt.autoReset,N=xe.enabled,k=xe.autoUpdate,B=xe.needsUpdate,U=xe.type;I(),tt.autoReset=M,xe.enabled=N,xe.autoUpdate=k,xe.needsUpdate=B,xe.type=U}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const N=M.target;N.removeEventListener("dispose",Y),_e(N)}function _e(M){Ue(M),me.remove(M)}function Ue(M){const N=me.get(M).programs;N!==void 0&&(N.forEach(function(k){W.releaseProgram(k)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,k,B,U,Q){N===null&&(N=ve);const ce=U.isMesh&&U.matrixWorld.determinant()<0,ge=Oh(M,N,k,B,U);fe.setMaterial(B,ce);let de=k.index,Pe=1;if(B.wireframe===!0){if(de=y.getWireframeAttribute(k),de===void 0)return;Pe=2}const Ie=k.drawRange,Te=k.attributes.position;let qe=Ie.start*Pe,nt=(Ie.start+Ie.count)*Pe;Q!==null&&(qe=Math.max(qe,Q.start*Pe),nt=Math.min(nt,(Q.start+Q.count)*Pe)),de!==null?(qe=Math.max(qe,0),nt=Math.min(nt,de.count)):Te!=null&&(qe=Math.max(qe,0),nt=Math.min(nt,Te.count));const ft=nt-qe;if(ft<0||ft===1/0)return;le.setup(U,B,ge,k,de);let ot,rt=ue;if(de!==null&&(ot=A.get(de),rt=De,rt.setIndex(ot)),U.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*pt()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(U.isLine){let we=B.linewidth;we===void 0&&(we=1),fe.setLineWidth(we*pt()),U.isLineSegments?rt.setMode(P.LINES):U.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else U.isPoints?rt.setMode(P.POINTS):U.isSprite&&rt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))rt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,ut=U._multiDrawCounts,Ze=U._multiDrawCount,zt=de?A.get(de).bytesPerElement:1,vi=me.get(B).currentProgram.getUniforms();for(let Ht=0;Ht<Ze;Ht++)vi.setValue(P,"_gl_DrawID",Ht),rt.render(we[Ht]/zt,ut[Ht])}else if(U.isInstancedMesh)rt.renderInstances(qe,ft,U.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ut=Math.min(k.instanceCount,we);rt.renderInstances(qe,ft,ut)}else rt.render(qe,ft)};function at(M,N,k){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,Qs(M,N,k),M.side=kn,M.needsUpdate=!0,Qs(M,N,k),M.side=sn):Qs(M,N,k)}this.compile=function(M,N,k=null){k===null&&(k=M),f=Se.get(k),f.init(N),v.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const ge=Q[ce];at(ge,k,U),B.add(ge)}else at(Q,k,U),B.add(Q)}),f=v.pop(),B},this.compileAsync=function(M,N,k=null){const B=this.compile(M,N,k);return new Promise(U=>{function Q(){if(B.forEach(function(ce){me.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){U(M);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Je=null;function An(M){Je&&Je(M)}function pn(){ei.stop()}function kl(){ei.start()}const ei=new lh;ei.setAnimationLoop(An),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(M){Je=M,te.setAnimationLoop(M),M===null?ei.stop():ei.start()},te.addEventListener("sessionstart",pn),te.addEventListener("sessionend",kl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,D),f=Se.get(M,v.length),f.init(N),v.push(f),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ke.setFromProjectionMatrix(Z,vn,N.reversedDepth),j=this.localClippingEnabled,Re=se.init(this.clippingPlanes,j),m=V.get(M,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&ha(Q,N,-1/0,x.sortObjects)}ha(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ie),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&ye.addToRenderList(m,M),this.info.render.frame++,Re===!0&&se.beginShadows();const k=f.state.shadowsArray;xe.render(k,M,N),Re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let ce=0,ge=Q.length;ce<ge;ce++){const de=Q[ce];zl(B,U,M,de)}We&&ye.render(M);for(let ce=0,ge=Q.length;ce<ge;ce++){const de=Q[ce];Bl(m,M,de,de.viewport)}}else U.length>0&&zl(B,U,M,N),We&&ye.render(M),Bl(m,M,N);D!==null&&C===0&&(He.updateMultisampleRenderTarget(D),He.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(x,M,N),le.resetDefaultState(),S=-1,E=null,v.pop(),v.length>0?(f=v[v.length-1],Re===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ha(M,N,k,B){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ke.intersectsSprite(M)){B&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const ce=O.update(M),ge=M.material;ge.visible&&m.push(M,ce,ge,k,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ke.intersectsObject(M))){const ce=O.update(M),ge=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ce.copy(ce.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const de=ce.groups;for(let Pe=0,Ie=de.length;Pe<Ie;Pe++){const Te=de[Pe],qe=ge[Te.materialIndex];qe&&qe.visible&&m.push(M,ce,qe,k,Ce.z,Te)}}else ge.visible&&m.push(M,ce,ge,k,Ce.z,null)}}const Q=M.children;for(let ce=0,ge=Q.length;ce<ge;ce++)ha(Q[ce],N,k,B)}function Bl(M,N,k,B){const U=M.opaque,Q=M.transmissive,ce=M.transparent;f.setupLightsView(k),Re===!0&&se.setGlobalState(x.clippingPlanes,k),B&&fe.viewport(R.copy(B)),U.length>0&&Js(U,N,k),Q.length>0&&Js(Q,N,k),ce.length>0&&Js(ce,N,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function zl(M,N,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new mi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?qs:bn,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],ce=B.viewport||R;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const ge=x.getRenderTarget(),de=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(q),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),We&&ye.render(k);const Ie=x.toneMapping;x.toneMapping=$n;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Re===!0&&se.setGlobalState(x.clippingPlanes,B),Js(M,k,B),He.updateMultisampleRenderTarget(Q),He.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let nt=0,ft=N.length;nt<ft;nt++){const ot=N[nt],rt=ot.object,we=ot.geometry,ut=ot.material,Ze=ot.group;if(ut.side===sn&&rt.layers.test(B.layers)){const zt=ut.side;ut.side=Bt,ut.needsUpdate=!0,Hl(rt,k,B,we,ut,Ze),ut.side=zt,ut.needsUpdate=!0,qe=!0}}qe===!0&&(He.updateMultisampleRenderTarget(Q),He.updateRenderTargetMipmap(Q))}x.setRenderTarget(ge,de,Pe),x.setClearColor(q,G),Te!==void 0&&(B.viewport=Te),x.toneMapping=Ie}function Js(M,N,k){const B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const ce=M[U],ge=ce.object,de=ce.geometry,Pe=ce.group;let Ie=ce.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),ge.layers.test(k.layers)&&Hl(ge,N,k,de,Ie,Pe)}}function Hl(M,N,k,B,U,Q){M.onBeforeRender(x,N,k,B,U,Q),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,N,k,B,M,Q),U.transparent===!0&&U.side===sn&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,x.renderBufferDirect(k,N,B,U,M,Q),U.side=kn,U.needsUpdate=!0,x.renderBufferDirect(k,N,B,U,M,Q),U.side=sn):x.renderBufferDirect(k,N,B,U,M,Q),M.onAfterRender(x,N,k,B,U,Q)}function Qs(M,N,k){N.isScene!==!0&&(N=ve);const B=me.get(M),U=f.state.lights,Q=f.state.shadowsArray,ce=U.state.version,ge=W.getParameters(M,U.state,Q,N,k),de=W.getProgramCacheKey(ge);let Pe=B.programs;B.environment=M.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(M.isMeshStandardMaterial?mt:Tt).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",Y),Pe=new Map,B.programs=Pe);let Ie=Pe.get(de);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===ce)return Gl(M,ge),Ie}else ge.uniforms=W.getUniforms(M),M.onBeforeCompile(ge,x),Ie=W.acquireProgram(ge,de),Pe.set(de,Ie),B.uniforms=ge.uniforms;const Te=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=se.uniform),Gl(M,ge),B.needsLights=kh(M),B.lightsStateVersion=ce,B.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function Vl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Gl(M,N){const k=me.get(M);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Oh(M,N,k,B,U){N.isScene!==!0&&(N=ve),He.resetTextureUnits();const Q=N.fog,ce=B.isMeshStandardMaterial?N.environment:null,ge=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Lt,de=(B.isMeshStandardMaterial?mt:Tt).get(B.envMap||ce),Pe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,nt=!!k.morphAttributes.color;let ft=$n;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=x.toneMapping);const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=ot!==void 0?ot.length:0,we=me.get(B),ut=f.state.lights;if(Re===!0&&(j===!0||M!==E)){const Dt=M===E&&B.id===S;se.setState(B,M,Dt)}let Ze=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ut.state.version||we.outputColorSpace!==ge||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==de||B.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==se.numPlanes||we.numIntersection!==se.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Ie||we.morphTargets!==Te||we.morphNormals!==qe||we.morphColors!==nt||we.toneMapping!==ft||we.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,we.__version=B.version);let zt=we.currentProgram;Ze===!0&&(zt=Qs(B,N,U));let vi=!1,Ht=!1,fs=!1;const ht=zt.getUniforms(),qt=we.uniforms;if(fe.useProgram(zt.program)&&(vi=!0,Ht=!0,fs=!0),B.id!==S&&(S=B.id,Ht=!0),vi||E!==M){fe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",M.projectionMatrix),ht.setValue(P,"viewMatrix",M.matrixWorldInverse);const Ft=ht.map.cameraPosition;Ft!==void 0&&Ft.setValue(P,he.setFromMatrixPosition(M.matrixWorld)),Ee.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ht=!0,fs=!0)}if(U.isSkinnedMesh){ht.setOptional(P,U,"bindMatrix"),ht.setOptional(P,U,"bindMatrixInverse");const Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(P,"boneTexture",Dt.boneTexture,He))}U.isBatchedMesh&&(ht.setOptional(P,U,"batchingTexture"),ht.setValue(P,"batchingTexture",U._matricesTexture,He),ht.setOptional(P,U,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",U._indirectTexture,He),ht.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",U._colorsTexture,He));const jt=k.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&ee.update(U,k,zt),(Ht||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,ht.setValue(P,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qt.envMap.value=de,qt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(qt.envMapIntensity.value=N.environmentIntensity),Ht&&(ht.setValue(P,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Fh(qt,fs),Q&&B.fog===!0&&$.refreshFogUniforms(qt,Q),$.refreshMaterialUniforms(qt,B,H,K,f.state.transmissionRenderTarget[M.id]),Hr.upload(P,Vl(we),qt,He)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hr.upload(P,Vl(we),qt,He),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(P,"center",U.center),ht.setValue(P,"modelViewMatrix",U.modelViewMatrix),ht.setValue(P,"normalMatrix",U.normalMatrix),ht.setValue(P,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dt=B.uniformsGroups;for(let Ft=0,da=Dt.length;Ft<da;Ft++){const ti=Dt[Ft];Be.update(ti,zt),Be.bind(ti,zt)}}return zt}function Fh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function kh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,k){const B=me.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),me.get(M.texture).__webglTexture=N,me.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const k=me.get(M);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Bh=P.createFramebuffer();this.setRenderTarget=function(M,N=0,k=0){D=M,w=N,C=k;let B=!0,U=null,Q=!1,ce=!1;if(M){const de=me.get(M);if(de.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(de.__hasExternalTextures)He.rebindTextures(M,me.get(M.texture).__webglTexture,me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Ie=me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?U=Ie[N][k]:U=Ie[N],Q=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?U=me.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[k]:U=Ie,R.copy(M.viewport),F.copy(M.scissor),z=M.scissorTest}else R.copy(oe).multiplyScalar(H).floor(),F.copy(Oe).multiplyScalar(H).floor(),z=Ye;if(k!==0&&(U=Bh),fe.bindFramebuffer(P.FRAMEBUFFER,U)&&B&&fe.drawBuffers(M,U),fe.viewport(R),fe.scissor(F),fe.setScissorTest(z),Q){const de=me.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,k)}else if(ce){const de=N;for(let Pe=0;Pe<M.textures.length;Pe++){const Ie=me.get(M.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,k,de)}}else if(M!==null&&k!==0){const de=me.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(M,N,k,B,U,Q,ce,ge=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){fe.bindFramebuffer(P.FRAMEBUFFER,de);try{const Pe=M.textures[ge],Ie=Pe.format,Te=Pe.type;if(!Ee.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-B&&k>=0&&k<=M.height-U&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(N,k,B,U,Me.convert(Ie),Me.convert(Te),Q))}finally{const Pe=D!==null?me.get(D).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,N,k,B,U,Q,ce,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(N>=0&&N<=M.width-B&&k>=0&&k<=M.height-U){fe.bindFramebuffer(P.FRAMEBUFFER,de);const Pe=M.textures[ge],Ie=Pe.format,Te=Pe.type;if(!Ee.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(N,k,B,U,Me.convert(Ie),Me.convert(Te),0);const nt=D!==null?me.get(D).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,nt);const ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jd(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(qe),P.deleteSync(ft),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,k=0){const B=Math.pow(2,-k),U=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),ce=N!==null?N.x:0,ge=N!==null?N.y:0;He.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ce,ge,U,Q),fe.unbindTexture()};const zh=P.createFramebuffer(),Hh=P.createFramebuffer();this.copyTextureToTexture=function(M,N,k=null,B=null,U=0,Q=null){Q===null&&(U!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ce,ge,de,Pe,Ie,Te,qe,nt,ft;const ot=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(k!==null)ce=k.max.x-k.min.x,ge=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ie=k.min.y,Te=k.isBox3?k.min.z:0;else{const jt=Math.pow(2,-U);ce=Math.floor(ot.width*jt),ge=Math.floor(ot.height*jt),M.isDataArrayTexture?de=ot.depth:M.isData3DTexture?de=Math.floor(ot.depth*jt):de=1,Pe=0,Ie=0,Te=0}B!==null?(qe=B.x,nt=B.y,ft=B.z):(qe=0,nt=0,ft=0);const rt=Me.convert(N.format),we=Me.convert(N.type);let ut;N.isData3DTexture?(He.setTexture3D(N,0),ut=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(He.setTexture2DArray(N,0),ut=P.TEXTURE_2D_ARRAY):(He.setTexture2D(N,0),ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),zt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ht=P.getParameter(P.UNPACK_SKIP_ROWS),fs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const ht=M.isDataArrayTexture||M.isData3DTexture,qt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const jt=me.get(M),Dt=me.get(N),Ft=me.get(jt.__renderTarget),da=me.get(Dt.__renderTarget);fe.bindFramebuffer(P.READ_FRAMEBUFFER,Ft.__webglFramebuffer),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let ti=0;ti<de;ti++)ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(M).__webglTexture,U,Te+ti),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(N).__webglTexture,Q,ft+ti)),P.blitFramebuffer(Pe,Ie,ce,ge,qe,nt,ce,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||me.has(M)){const jt=me.get(M),Dt=me.get(N);fe.bindFramebuffer(P.READ_FRAMEBUFFER,zh),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hh);for(let Ft=0;Ft<de;Ft++)ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,U,Te+Ft):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,U),qt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,Q,ft+Ft):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,Q),U!==0?P.blitFramebuffer(Pe,Ie,ce,ge,qe,nt,ce,ge,P.COLOR_BUFFER_BIT,P.NEAREST):qt?P.copyTexSubImage3D(ut,Q,qe,nt,ft+Ft,Pe,Ie,ce,ge):P.copyTexSubImage2D(ut,Q,qe,nt,Pe,Ie,ce,ge);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else qt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(ut,Q,qe,nt,ft,ce,ge,de,rt,we,ot.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(ut,Q,qe,nt,ft,ce,ge,de,rt,ot.data):P.texSubImage3D(ut,Q,qe,nt,ft,ce,ge,de,rt,we,ot):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,qe,nt,ce,ge,rt,we,ot.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,qe,nt,ot.width,ot.height,rt,ot.data):P.texSubImage2D(P.TEXTURE_2D,Q,qe,nt,ce,ge,rt,we,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,fs),Q===0&&N.generateMipmaps&&P.generateMipmap(ut),fe.unbindTexture()},this.initRenderTarget=function(M){me.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,fe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const hu={type:"change"},Al={type:"start"},fh={type:"end"},Pr=new as,du=new jn,j2=Math.cos(70*Bu.DEG2RAD),vt=new L,kt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ka=1e-6;class Y2 extends c1{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new yn,this._lastTargetPosition=new L,this._quat=new yn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bc,this._sphericalDelta=new Bc,this._scale=1,this._panOffset=new L,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new L,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z2.bind(this),this._onPointerDown=K2.bind(this),this._onPointerUp=$2.bind(this),this._onContextMenu=s3.bind(this),this._onMouseWheel=e3.bind(this),this._onKeyDown=t3.bind(this),this._onTouchStart=n3.bind(this),this._onTouchMove=i3.bind(this),this._onMouseDown=J2.bind(this),this._onMouseMove=Q2.bind(this),this._interceptControlDown=r3.bind(this),this._interceptControlUp=a3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=kt:n>Math.PI&&(n-=kt),i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=vt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pr.origin.copy(this.object.position),Pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pr.direction))<j2?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pr.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ka||this._lastTargetPosition.distanceToSquared(this.target)>Ka?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;vt.copy(i).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function K2(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Z2(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function $2(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fh),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function J2(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=st.DOLLY;break;case Xi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}break;case Xi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Al)}function Q2(s){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function e3(s){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(s.preventDefault(),this.dispatchEvent(Al),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(fh))}function t3(s){this.enabled!==!1&&this._handleKeyDown(s)}function n3(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=st.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=st.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Al)}function i3(s){switch(this._trackPointer(s),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=st.NONE}}function s3(s){this.enabled!==!1&&s.preventDefault()}function r3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fu(s,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jo||e===Ou){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class o3 extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new d3(t)}),this.register(function(t){return new f3(t)}),this.register(function(t){return new M3(t)}),this.register(function(t){return new S3(t)}),this.register(function(t){return new E3(t)}),this.register(function(t){return new m3(t)}),this.register(function(t){return new g3(t)}),this.register(function(t){return new _3(t)}),this.register(function(t){return new v3(t)}),this.register(function(t){return new h3(t)}),this.register(function(t){return new x3(t)}),this.register(function(t){return new p3(t)}),this.register(function(t){return new y3(t)}),this.register(function(t){return new b3(t)}),this.register(function(t){return new c3(t)}),this.register(function(t){return new T3(t)}),this.register(function(t){return new A3(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ds.extractUrlBase(e);a=Ds.resolveURL(c,this.path)}else a=Ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Zr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ph){try{a[Xe.KHR_BINARY_GLTF]=new w3(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new z3(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new u3;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new R3(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new C3;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new P3;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function l3(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class c3{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Lt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new oh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ah(u),c.distance=h;break;case"spot":c=new jf(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class u3{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class h3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class d3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(r)}}class f3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class p3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class m3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class g3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class _3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],Lt),Promise.all(r)}}class v3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class x3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class b3{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class y3{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class M3{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class S3{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class E3{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class T3{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class A3{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Kt.TRIANGLES&&c.mode!==Kt.TRIANGLE_STRIP&&c.mode!==Kt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new Fe,m=new L,f=new yn,b=new L(1,1,1),v=new Qu(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,f,b));for(const x in l)if(x==="_COLOR_0"){const T=l[x];v.instanceColor=new Yo(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ct.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const ph="glTF",Ts=12,pu={JSON:1313821514,BIN:5130562};class w3{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ts),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ph)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ts,r=new DataView(e,Ts);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===pu.JSON){const c=new Uint8Array(e,Ts+a,o);this.content=n.decode(c)}else if(l===pu.BIN){const c=Ts+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Jo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Jo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Yi[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},o,c,Lt,d)})})}}class C3{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class P3{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class mh extends Zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,b=1-m,v=f-d+h;for(let x=0;x!==o;x++){const T=a[_+x+o],w=a[_+x+l]*u,C=a[g+x+o],D=a[g+x]*u;r[x]=b*T+v*w+m*C+f*D}return r}}const L3=new yn;class D3 extends mh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return L3.fromArray(r).normalize().toArray(r),r}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:Ot,9729:Wt,9984:Ru,9985:Or,9986:As,9987:Un},gu={33071:Kn,33648:Wr,10497:Qi},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},I3={CUBICSPLINE:void 0,LINEAR:ks,STEP:Fs},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N3(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function li(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U3(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function O3(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function F3(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ja(t.attributes):e=s.indices+":"+Ja(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ja(s.targets[n]);return e}function Ja(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k3(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const B3=new Fe;class z3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new l3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new rh(this.options.manager):this.textureLoader=new $f(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return li(r,o,i),mn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ds.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Za[i.type],o=Yi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new wt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Za[i.type],c=Yi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(b);v||(_=new c(o,f*p,i.count*p/u),v=new Yu(_,p/u),t.cache.add(b,v)),m=new Hs(v,l,d%p/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new wt(_,l,g);if(i.sparse!==void 0){const f=Za.SCALAR,b=Yi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new b(a[1],v,i.sparse.count*f),w=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=T.length;C<D;C++){const S=T[C];if(m.setX(S,w[C*l]),l>=2&&m.setY(S,w[C*l+1]),l>=3&&m.setZ(S,w[C*l+2]),l>=4&&m.setW(S,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=mu[d.magFilter]||Wt,u.minFilter=mu[d.minFilter]||Un,u.wrapS=gu[d.wrapS]||Qi,u.wrapT=gu[d.wrapT]||Qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==Wt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(Ds.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),mn(h,a),h.userData.mimeType=a.mimeType||k3(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gl,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qr,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ks}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=i[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Lt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);const u=r.alphaMode||$a.OPAQUE;if(u===$a.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$a.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==xn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==xn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==xn){const h=r.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],Lt)}return r.emissiveTexture!==void 0&&a!==xn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),mn(h,r),t.associations.set(h,{materials:e}),r.extensions&&li(i,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return _u(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=F3(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=_u(new Et,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?N3(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=a[p];let f;const b=c[p];if(m.mode===Kt.TRIANGLES||m.mode===Kt.TRIANGLE_STRIP||m.mode===Kt.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Mf(_,b):new Pt(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Kt.TRIANGLE_STRIP?f.geometry=fu(f.geometry,Ou):m.mode===Kt.TRIANGLE_FAN&&(f.geometry=fu(f.geometry,jo));else if(m.mode===Kt.LINES)f=new Rf(_,b);else if(m.mode===Kt.LINE_STRIP)f=new Ys(_,b);else if(m.mode===Kt.LINE_LOOP)f=new Cf(_,b);else if(m.mode===Kt.POINTS)f=new eh(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&O3(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),mn(f,r),m.extensions&&li(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&li(i,h[0],r),h[0];const d=new on;r.extensions&&li(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Bu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let v=0,x=d.length;v<x;v++){const T=d[v],w=p[v],C=g[v],D=_[v],S=m[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=n._createAnimationTracks(T,w,C,D,S);if(E)for(let R=0;R<E.length;R++)f.push(E[R])}const b=new Bf(r,void 0,f);return mn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,B3)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $u:c.length>1?u=new on:c.length===1?u=c[0]:u=new ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),mn(u,r),r.extensions&&li(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new on;n.name&&(r.name=i.createUniqueName(n.name)),mn(r,n),n.extensions&&li(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof cn||d instanceof bt)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];qn[r.path]===qn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(qn[r.path]){case qn.weights:c=ns;break;case qn.rotation:c=is;break;case qn.translation:case qn.scale:c=ss;break;default:n.itemSize===1?c=ns:c=ss;break}const u=i.interpolation!==void 0?I3[i.interpolation]:ks,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+qn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?D3:mh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function H3(s,e,t){const n=e.attributes,i=new Sn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=Qo(Yi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Qo(Yi[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new En;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function _u(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Jo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),mn(s,e),H3(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?U3(s,e.targets,t):s})}const Qa=new WeakMap;class V3 extends _i{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Zr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,dt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Lt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qa.has(e)){const l=Qa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Qa.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new wt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new wt(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==dt)return;const n=new Ne;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),je.colorSpaceToWorking(n,dt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Zr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=G3.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function G3(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const p=t(h,d,new Int8Array(l),c),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,p;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const m in u){const f=self[h[m]];let b,v;if(c.useUniqueIDs)v=u[m],b=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[u[m]]),v===-1)continue;b=o.GetAttribute(d,v)}const x=i(a,o,d,m,f,b);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,l){const u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const p=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:p,itemSize:1}}function i(a,o,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,_=g*u.BYTES_PER_ELEMENT,m=r(a,u),f=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,h,m,_,f);const b=new u(a.HEAPF32.buffer,f,g).slice();return a._free(f),{name:c,array:b,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Bn=[{id:"sun",name:"Sonne",type:"Stern",radius:696340,au:0,period:0,phase:0,viewRadius:4,color:16757035,texture:"sun"},{id:"mercury",name:"Merkur",type:"Gesteinsplanet",radius:2439.7,au:.387,period:87.97,phase:1.3,viewRadius:.34,color:11905696,texture:"mercury"},{id:"venus",name:"Venus",type:"Gesteinsplanet",radius:6051.8,au:.723,period:224.7,phase:2.3,viewRadius:.62,color:15124370,texture:"venus_atmosphere"},{id:"earth",name:"Erde",type:"Gesteinsplanet",radius:6371,au:1,period:365.25,phase:3.9,viewRadius:.66,color:7317983,texture:"earth"},{id:"mars",name:"Mars",type:"Gesteinsplanet",radius:3389.5,au:1.524,period:687,phase:5.1,viewRadius:.48,color:13465424,texture:"mars"},{id:"jupiter",name:"Jupiter",type:"Gasriese",radius:69911,au:5.203,period:4331,phase:.7,viewRadius:1.55,color:14002818,texture:"jupiter"},{id:"saturn",name:"Saturn",type:"Gasriese",radius:58232,au:9.537,period:10747,phase:2.8,viewRadius:1.3,color:15191699,texture:"saturn"},{id:"uranus",name:"Uranus",type:"Eisriese",radius:25362,au:19.191,period:30589,phase:4.4,viewRadius:.95,color:10410205,texture:"uranus"},{id:"neptune",name:"Neptun",type:"Eisriese",radius:24622,au:30.069,period:59800,phase:5.7,viewRadius:.91,color:5406432,texture:"neptune"}],gh=[0,7,10,13,16,22,29,36,43],wl=[{id:"moon",name:"Mond",type:"Erdmond",parent:"earth",radius:1737.4,orbitKm:384400,period:27.3217,phase:1.8,viewRadius:.24,viewOrbit:2.1,texture:"moon",tidallyLocked:!0},{id:"io",name:"Io",type:"Jupitermond",parent:"jupiter",radius:1821.6,orbitKm:421700,period:1.769,phase:2.6,viewRadius:.27,viewOrbit:2.35,texture:"io"},{id:"europa",name:"Europa",type:"Jupitermond",parent:"jupiter",radius:1560.8,orbitKm:671100,period:3.551,phase:1.1,viewRadius:.26,viewOrbit:3.25,texture:"europa"},{id:"ganymede",name:"Ganymed",type:"Jupitermond",parent:"jupiter",radius:2634.1,orbitKm:1070400,period:7.155,phase:4.2,viewRadius:.37,viewOrbit:4.25,texture:"ganymede"},{id:"callisto",name:"Kallisto",type:"Jupitermond",parent:"jupiter",radius:2410.3,orbitKm:1882700,period:16.689,phase:5.8,viewRadius:.35,viewOrbit:5.35,texture:"callisto"}],el=[{id:"iss",name:"ISS",type:"Raumstation",kind:"craft",parent:"earth",model:"iss",viewRadius:.18,realRadius:9e-5},{id:"webb",name:"James Webb",type:"Weltraumteleskop",kind:"craft",parent:"earth",model:"webb",viewRadius:.22,realRadius:.001},{id:"voyager1",name:"Voyager 1",type:"Raumsonde",kind:"craft",model:"voyager",viewRadius:.4,realRadius:.02,au:160,phase:2.2},{id:"voyager2",name:"Voyager 2",type:"Raumsonde",kind:"craft",model:"voyager",viewRadius:.4,realRadius:.02,au:135,phase:5.4}];function vu(s){return Math.PI-s}const _h=[{id:"ceres",name:"Ceres",type:"Zwergplanet",kind:"dwarf",model:"ceres",radius:469.7,au:2.77,period:1681,phase:2.15,viewRadius:.38,viewOrbit:19,region:"main_belt"},{id:"pluto",name:"Pluto",type:"Zwergplanet",kind:"dwarf",model:"pluto",radius:1188.3,au:39.48,period:90560,phase:1.1,viewRadius:.52,viewOrbit:52,region:"kuiper_belt"}],Rl=[{id:"main_belt",name:"Asteroidengürtel",type:"Bereich",kind:"region",after:"mars",auMin:2.2,auMax:3.2,viewMin:17.5,viewMax:20.3,viewRadius:1.5,realRadius:28,phase:2.2},{id:"kuiper_belt",name:"Kuipergürtel",type:"Bereich",kind:"region",after:"neptune",auMin:30,auMax:50,viewMin:46,viewMax:62,viewRadius:5,realRadius:250,phase:1.15}],Vs={main_belt:{de:["Asteroidenhauptgürtel",`Zwischen Mars und Jupiter umrunden viele überwiegend felsige Körper die Sonne. Der Hauptgürtel liegt ungefähr zwischen 2,2 und 3,2 astronomischen Einheiten (AE). Eine AE ist der mittlere Abstand zwischen Erde und Sonne.

Ceres ist der grösste Körper des Hauptgürtels und ein Zwergplanet. Die meisten Asteroiden sind viel kleiner. Trotz ihrer grossen Zahl sind die Körper in Wirklichkeit sehr weit voneinander entfernt; der Raum dazwischen ist überwiegend leer.

Die hier gezeigten Brocken sind stark vergrösserte, frei erzeugte Stellvertreter. Ihre scheinbare Grösse, Anzahl und Dichte sind keine Messung.`],en:["Main asteroid belt",`Many mostly rocky bodies orbit the Sun between Mars and Jupiter. The main belt lies roughly 2.2 to 3.2 astronomical units (AU) from the Sun. One AU is the average Earth–Sun distance.

Ceres is the largest body in the main belt and a dwarf planet. Most asteroids are much smaller. Despite their large number, real objects are far apart, with mostly empty space between them.

The rocks shown here are greatly enlarged, procedurally generated stand-ins. Their apparent sizes, numbers and density are not measurements.`],url:"https://science.nasa.gov/mission/dawn/faq/"},kuiper_belt:{de:["Kuipergürtel",`Der Kuipergürtel ist eine weitläufige Region jenseits von Neptun. Sein Hauptbereich erstreckt sich ungefähr von 30 bis 50 astronomischen Einheiten (AE) von der Sonne.

Viele seiner Körper enthalten Eis und Gestein; zu ihnen gehört Pluto. Sie sind Überreste aus der Frühzeit des Sonnensystems. Der Gürtel ist räumlich dick, nicht bloss ein flacher Ring.

Die hellen Körper hier sind stark vergrösserte, frei erzeugte Stellvertreter. Die sichtbare Dichte und Grösse sind kein realistischer Massstab; die tatsächlichen Abstände sind enorm.`],en:["Kuiper Belt",`The Kuiper Belt is a vast region beyond Neptune. Its main part extends roughly 30 to 50 astronomical units (AU) from the Sun.

Many of its bodies contain ice and rock; Pluto is one of them. They are remnants of the early solar system. The belt is a thick region in space, not just a flat ring.

The bright bodies shown here are greatly enlarged, procedurally generated stand-ins. Their apparent density and size are not to scale; real separations are enormous.`],url:"https://science.nasa.gov/solar-system/kuiper-belt/facts/"},ceres:{de:["Ceres",`Ceres ist ein Zwergplanet und der grösste Körper im Asteroidenhauptgürtel. Seine Oberfläche ist stark verkraterte, dunkle Gesteinslandschaft mit auffälligen hellen Ablagerungen.

Die Raumsonde Dawn untersuchte Ceres aus einer Umlaufbahn. Einige helle Stellen enthalten Salze und liefern Hinweise auf frühere oder anhaltende Prozesse im Inneren.

Die 3D-Oberfläche beruht auf einem NASA-Modell. Seine Bahn und Position hier sind vereinfacht und nicht datumsgenau.`],en:["Ceres",`Ceres is a dwarf planet and the largest body in the main asteroid belt. Its dark, heavily cratered surface contains striking bright deposits.

The Dawn spacecraft studied Ceres from orbit. Some bright spots contain salts and provide clues to past or ongoing activity in its interior.

The 3D surface uses a NASA model. Its orbit and position here are simplified and not date-accurate.`],url:"https://science.nasa.gov/dwarf-planets/ceres/"},pluto:{de:["Pluto",`Pluto ist ein Zwergplanet im Kuipergürtel. Die Raumsonde New Horizons entdeckte 2015 eine vielfältige Eiswelt mit Gebirgen, Ebenen und der hellen herzförmigen Region Tombaugh Regio.

Seine tatsächliche Bahn ist stark elliptisch und gegenüber der Planetenebene geneigt; Pluto braucht etwa 248 Erdenjahre für einen Sonnenumlauf. Sein grösster Mond heisst Charon.

Das NASA-Modell ist eine vereinfachte Oberflächendarstellung; Pluto wurde nicht überall gleich gut aufgenommen. Die hier gezeigte Kreisbahn und Position sind nicht datumsgenau.`],en:["Pluto",`Pluto is a dwarf planet in the Kuiper Belt. In 2015, New Horizons revealed a varied icy world with mountains, plains and the bright heart-shaped Tombaugh Regio.

Its actual orbit is strongly elliptical and tilted relative to the planets; Pluto takes about 248 Earth years to orbit the Sun. Its largest moon is Charon.

The NASA model is a simplified surface representation; not all of Pluto was imaged equally well. The circular orbit and position shown here are not date-accurate.`],url:"https://science.nasa.gov/dwarf-planets/pluto/facts/"},moon:{de:["Der Mond",`Der Mond ist der natürliche Begleiter der Erde. Seine stark verkraterte Oberfläche trägt dunkle Ebenen aus erstarrter Lava.

Er umrundet die Erde in etwa 27,3 Tagen und dreht sich in derselben Zeit einmal um seine Achse. Deshalb ist der Erde annähernd dieselbe Seite zugewandt; kleine Schwankungen erlauben Einblicke über ihren Rand.

Die Mondphasen entstehen durch den wechselnden Blick auf die von der Sonne beleuchtete Hälfte. Der Mond trägt auch zu den Gezeiten auf der Erde bei. Die Mondposition beruht auf Ephemeriden; die eingezeichnete Bahn und die Ausrichtung der Oberfläche sind vereinfacht.`],en:["The Moon",`The Moon is Earth’s natural companion. Its heavily cratered surface has dark plains of solidified lava.

It orbits Earth in about 27.3 days and rotates once on its axis in the same time. This means roughly the same side faces Earth; small variations let us see a little around its edges.

Lunar phases arise as our view of its sunlit half changes. The Moon also contributes to Earth’s tides. The Moon’s position uses ephemerides; its drawn orbit and surface orientation are simplified.`],url:"https://science.nasa.gov/moon/facts/"},sun:{de:["Sonne","Die Sonne ist der Stern im Zentrum unseres Sonnensystems. In ihrem Inneren entsteht durch Kernfusion Energie."],en:["Sun","The Sun is the star at the centre of our solar system. Nuclear fusion in its core releases energy."],url:"https://science.nasa.gov/sun/"},mercury:{de:["Merkur","Merkur ist der sonnennächste und kleinste Planet unseres Sonnensystems. Seine Oberfläche ist stark verkratert."],en:["Mercury","Mercury is the closest planet to the Sun and the smallest planet in our solar system. Its surface is heavily cratered."],url:"https://science.nasa.gov/mercury/"},venus:{de:["Venus","Venus ist von einer dichten Atmosphäre umgeben. Ein ausgeprägter Treibhauseffekt macht sie zum heissesten Planeten."],en:["Venus","Venus is wrapped in a dense atmosphere. A powerful greenhouse effect makes it the hottest planet."],url:"https://science.nasa.gov/venus/"},earth:{de:["Erde","Die Erde ist unser Heimatplanet. Auf ihrer Oberfläche gibt es ausgedehnte Ozeane aus flüssigem Wasser."],en:["Earth","Earth is our home planet. Vast oceans of liquid water cover much of its surface."],url:"https://science.nasa.gov/earth/"},mars:{de:["Mars","Mars ist eine kalte Wüstenwelt. Eisenminerale in seinem Staub verleihen ihm seine rötliche Farbe."],en:["Mars","Mars is a cold desert world. Iron minerals in its dust give it a reddish colour."],url:"https://science.nasa.gov/mars/"},jupiter:{de:["Jupiter","Jupiter ist der grösste Planet unseres Sonnensystems. Seine sichtbare Atmosphäre besteht überwiegend aus Wasserstoff und Helium."],en:["Jupiter","Jupiter is the largest planet in our solar system. Its atmosphere is made mostly of hydrogen and helium."],url:"https://science.nasa.gov/jupiter/"},saturn:{de:["Saturn","Saturn ist ein Gasriese mit einem ausgedehnten Ringsystem. Die Ringe bestehen vor allem aus Eis- und Gesteinsteilchen."],en:["Saturn","Saturn is a gas giant with an extensive ring system. Its rings are made mostly of particles of ice and rock."],url:"https://science.nasa.gov/saturn/"},uranus:{de:["Uranus","Uranus ist ein Eisriese und rotiert nahezu auf der Seite. Methan in seiner Atmosphäre trägt zu seiner blaugrünen Farbe bei."],en:["Uranus","Uranus is an ice giant that rotates almost on its side. Methane in its atmosphere contributes to its blue-green colour."],url:"https://science.nasa.gov/uranus/"},neptune:{de:["Neptun","Neptun ist der äusserste Planet unseres Sonnensystems. In seiner Atmosphäre wehen sehr schnelle Winde."],en:["Neptune","Neptune is the outermost planet in our solar system. Extremely fast winds blow through its atmosphere."],url:"https://science.nasa.gov/neptune/"},io:{de:["Io","Io ist ein Jupitermond und die vulkanisch aktivste Welt unseres Sonnensystems. Gezeitenkräfte tragen zu seiner inneren Erwärmung bei."],en:["Io","Io is a moon of Jupiter and the most volcanically active world in our solar system. Tidal forces contribute to its internal heating."],url:"https://science.nasa.gov/jupiter/jupiter-moons/io/"},europa:{de:["Europa","Unter Europas eisiger Oberfläche vermuten Forschende einen globalen Ozean. Der Jupitermond ist ein wichtiges Ziel der Astrobiologie."],en:["Europa","Scientists infer a global ocean beneath Europa’s icy surface. This moon of Jupiter is an important target for astrobiology."],url:"https://science.nasa.gov/jupiter/jupiter-moons/europa/"},ganymede:{de:["Ganymed","Ganymed ist der grösste Mond des Sonnensystems und grösser als Merkur. Er besitzt ein eigenes Magnetfeld."],en:["Ganymede","Ganymede is the largest moon in the solar system, larger than Mercury. It has its own magnetic field."],url:"https://science.nasa.gov/jupiter/jupiter-moons/ganymede/facts/"},callisto:{de:["Kallisto","Kallisto ist ein stark verkraterter Jupitermond. Seine Oberfläche bewahrt Spuren einer langen Einschlagsgeschichte."],en:["Callisto","Callisto is a heavily cratered moon of Jupiter. Its surface preserves evidence of a long history of impacts."],url:"https://science.nasa.gov/jupiter/jupiter-moons/callisto/"},iss:{de:["Internationale Raumstation","Die ISS ist ein internationales Forschungslabor im Erdorbit. Sie ist seit November 2000 ununterbrochen bewohnt."],en:["International Space Station","The ISS is an international research laboratory in Earth orbit. It has been continuously occupied since November 2000."],url:"https://www.nasa.gov/international-space-station/space-station-facts-and-figures/"},webb:{de:["James-Webb-Weltraumteleskop","Webb beobachtet das Universum vor allem im Infrarotlicht. Es bewegt sich auf einer Bahn um den Sonne-Erde-Lagrangepunkt L2."],en:["James Webb Space Telescope","Webb observes the universe mainly in infrared light. It travels in an orbit around the Sun–Earth Lagrange point L2."],url:"https://science.nasa.gov/mission/webb/"},voyager1:{de:["Voyager 1","Voyager 1 startete 1977 und flog an Jupiter und Saturn vorbei. 2012 überschritt die Sonde die Heliopause und erreichte den interstellaren Raum."],en:["Voyager 1","Voyager 1 launched in 1977 and flew past Jupiter and Saturn. In 2012 it crossed the heliopause into interstellar space."],url:"https://science.nasa.gov/mission/voyager/voyager-1/"},voyager2:{de:["Voyager 2","Voyager 2 startete 1977 und besuchte Jupiter, Saturn, Uranus und Neptun. Die Sonde befindet sich im interstellaren Raum."],en:["Voyager 2","Voyager 2 launched in 1977 and visited Jupiter, Saturn, Uranus and Neptune. The probe is in interstellar space."],url:"https://science.nasa.gov/mission/voyager/voyager-2/"}},W3={sun:[`Sie enthält den grössten Teil der Masse des Sonnensystems. Ihr Licht benötigt etwa acht Minuten bis zur Erde.

An der Oberfläche zeigen dunklere Sonnenflecken Bereiche starker Magnetfelder. Die Aktivität der Sonne beeinflusst auch die Umgebung der Erde.`,`It contains most of the mass in the solar system. Its light takes about eight minutes to reach Earth.

Darker sunspots mark areas of strong magnetic fields. Solar activity also affects the environment around Earth.`],mercury:[`Ein Merkurjahr dauert nur 88 Erdtage. Trotzdem ist Merkur nicht der heisseste Planet: Seine sehr dünne Gashülle hält Wärme kaum fest.

Am Tag kann es etwa 430 °C heiss werden, nachts ungefähr −180 °C. In dauerhaft schattigen Polkratern gibt es Hinweise auf Wassereis.`,`A Mercury year lasts just 88 Earth days. Even so, Mercury is not the hottest planet: its extremely thin envelope of gas retains little heat.

Daytime temperatures can reach about 430 °C and fall to roughly −180 °C at night. Permanently shadowed polar craters hold evidence of water ice.`],venus:[`Ihre Atmosphäre besteht überwiegend aus Kohlendioxid und ist von Wolken aus Schwefelsäure umgeben. An der Oberfläche herrschen etwa 465 °C und ein enormer Druck.

Venus ist ähnlich gross wie die Erde, dreht sich aber sehr langsam und in entgegengesetzter Richtung zu den meisten Planeten.`,`Its atmosphere is mostly carbon dioxide, with clouds of sulfuric acid. At the surface, temperatures reach about 465 °C and the pressure is immense.

Venus is similar in size to Earth, but it rotates very slowly and in the opposite direction to most planets.`],earth:[`Die Atmosphäre und das Magnetfeld schützen die Oberfläche vor einem Teil der Strahlung und den geladenen Teilchen aus dem All. Wasser zirkuliert zwischen Ozean, Atmosphäre und Land.

Die Erde ist der einzige bekannte Ort, an dem Leben nachgewiesen ist. Ihr natürlicher Mond beeinflusst unter anderem die Gezeiten.`,`The atmosphere and magnetic field protect the surface from some radiation and charged particles from space. Water circulates between ocean, atmosphere and land.

Earth is the only known place where life has been confirmed. Its natural Moon contributes to the tides.`],mars:[`Seine dünne Atmosphäre besteht vor allem aus Kohlendioxid. Spuren früherer Flüsse und Seen zeigen, dass einst Wasser über die Oberfläche floss.

Heute ist Wasser vor allem als Eis vorhanden. Roboter untersuchen den Boden, das Klima und die Frage, ob Mars früher lebensfreundliche Bedingungen bot.`,`Its thin atmosphere is mostly carbon dioxide. Traces of ancient rivers and lakes show that water once flowed across the surface.

Today water is found mainly as ice. Robotic explorers study the ground, climate and whether Mars once had conditions suitable for life.`],jupiter:[`Er hat keine feste Oberfläche wie die Erde. In seiner Atmosphäre bilden sich Wolkenbänder und langlebige Stürme; der Grosse Rote Fleck ist ein besonders bekanntes Beispiel.

Jupiter besitzt ein starkes Magnetfeld und zahlreiche Monde. Vier grosse Monde – Io, Europa, Ganymed und Kallisto – lassen sich hier erkunden.`,`It has no solid surface like Earth. Cloud bands and long-lived storms form in its atmosphere; the Great Red Spot is a famous example.

Jupiter has a powerful magnetic field and many moons. Four large moons – Io, Europa, Ganymede and Callisto – can be explored here.`],saturn:[`Obwohl die Ringe sehr breit sind, bestehen sie aus unzähligen einzelnen Teilchen und sind im Verhältnis zu ihrer Breite sehr dünn. Saturn selbst besteht grösstenteils aus Wasserstoff und Helium.

Zu seinen Monden gehören Titan mit seiner dichten Atmosphäre und Enceladus, der Wasserteilchen ins All ausstösst.`,`Although the rings are extremely broad, they consist of countless individual particles and are very thin relative to their width. Saturn itself is mostly hydrogen and helium.

Its moons include Titan, with its dense atmosphere, and Enceladus, which sprays water particles into space.`],uranus:[`Seine Rotationsachse ist um etwa 98 Grad geneigt; deshalb erleben seine Pole lange, extreme Jahreszeiten. Ein Umlauf um die Sonne dauert rund 84 Erdenjahre.

Auch Uranus besitzt Ringe, die jedoch viel weniger auffällig sind als diejenigen des Saturn.`,`Its rotation axis is tilted by about 98 degrees, giving its poles long, extreme seasons. One orbit around the Sun takes about 84 Earth years.

Uranus also has rings, though they are much less conspicuous than Saturn’s.`],neptune:[`Der Eisriese benötigt rund 165 Erdenjahre für einen Sonnenumlauf. Methan in seiner Atmosphäre absorbiert rotes Licht und trägt zur bläulichen Erscheinung bei.

Trotz der grossen Sonnenferne entstehen dort heftige Stürme. Voyager 2 flog 1989 als bislang einzige Sonde an Neptun vorbei.`,`The ice giant takes about 165 Earth years to orbit the Sun. Methane in its atmosphere absorbs red light and contributes to its blue appearance.

Despite its great distance from the Sun, powerful storms form there. Voyager 2 flew past Neptune in 1989 and remains the only spacecraft to have done so.`],io:[`Jupiters Schwerkraft und die Wechselwirkung mit benachbarten Monden halten Ios Bahn leicht elliptisch. Dadurch wird sein Inneres immer wieder verformt und erwärmt.

Vulkane schleudern Material über die Oberfläche. Die auffälligen Farben stehen unter anderem mit Schwefel und seinen Verbindungen in Zusammenhang.`,`Jupiter’s gravity and interactions with neighbouring moons keep Io’s orbit slightly elliptical. As a result, its interior is repeatedly flexed and heated.

Volcanoes eject material across the surface. Its striking colours are associated in part with sulfur and sulfur compounds.`],europa:[`Messungen der Raumsonde Galileo sprechen für eine elektrisch leitende Schicht unter dem Eis – wahrscheinlich salziges Wasser. Die Existenz des Ozeans gilt als gut begründet, ist aber noch nicht direkt bestätigt.

Gezeitenkräfte könnten Wärme liefern. Ob Europa Bedingungen für Leben bietet, wird erforscht; Leben wurde dort bisher nicht nachgewiesen.`,`Measurements by the Galileo spacecraft point to an electrically conducting layer beneath the ice – probably salty water. The ocean is strongly supported by evidence but has not yet been directly confirmed.

Tidal forces may supply heat. Scientists are investigating whether Europa could support life; no life has been detected there.`],ganymede:[`Seine Oberfläche zeigt sowohl dunkle, alte Kraterlandschaften als auch hellere, von Rillen durchzogene Gebiete. Unter einer Eisschale könnte ein Ozean liegen.

Ganymed, Europa und Io stehen in einer Bahnresonanz: Während Ganymed Jupiter einmal umrundet, schafft Europa ungefähr zwei und Io vier Umläufe.`,`Its surface has both dark, ancient cratered terrain and brighter grooved regions. An ocean may lie beneath an icy shell.

Ganymede, Europa and Io are in an orbital resonance: while Ganymede circles Jupiter once, Europa completes about two orbits and Io four.`],callisto:[`Viele seiner Krater sind über sehr lange Zeit erhalten geblieben; das deutet auf eine alte Oberfläche mit vergleichsweise wenig Erneuerung hin.

Kallisto besteht aus Gestein und Eis. Messungen deuten darauf hin, dass sich tief unter seiner Oberfläche möglicherweise ein salziger Ozean befindet.`,`Many of its craters have survived for a very long time, suggesting an old surface with comparatively little renewal.

Callisto is made of rock and ice. Measurements suggest that a salty ocean may exist deep beneath its surface.`],iss:[`Sie umkreist die Erde in etwa 90 Minuten. Die Schwerelosigkeit an Bord entsteht vor allem dadurch, dass Station und Besatzung gemeinsam ständig frei um die Erde fallen.

Astronautinnen und Astronauten forschen dort unter anderem zu Werkstoffen, Biologie und dem menschlichen Körper. Die dargestellte Station und ihre Position sind vereinfacht.`,`It circles Earth in about 90 minutes. The weightlessness on board arises mainly because the station and its crew are continuously falling freely around Earth together.

Crew members research materials, biology and the human body, among other topics. The station and position shown here are simplified.`],webb:[`Ein grosser Sonnenschutz hält die empfindlichen Instrumente kalt. So können sie schwaches Infrarotlicht untersuchen, etwa von frühen Galaxien, Sternentstehungsgebieten und Exoplaneten.

Webb umkreist L2 etwa 1,5 Millionen Kilometer von der Erde entfernt. Die hier gezeigte Bahn ist schematisch und nicht aktuell.`,`A large sunshield keeps its sensitive instruments cold. This helps them study faint infrared light from early galaxies, star-forming regions and exoplanets.

Webb orbits L2 about 1.5 million kilometres from Earth. The orbit shown here is schematic and not current.`],voyager1:[`Beim Vorbeiflug an Saturn untersuchte sie auch den Mond Titan. Ihre Bahn führte sie danach aus der Ebene der Planeten heraus.

An Bord befindet sich die Golden Record mit Bildern und Klängen der Erde. Ihre Position in dieser App ist ein illustrativer Punkt, keine Live-Messung.`,`During its Saturn encounter it also studied the moon Titan. Its trajectory then carried it out of the plane of the planets.

It carries the Golden Record, containing images and sounds of Earth. Its position in this app is illustrative, not a live measurement.`],voyager2:[`Sie ist die einzige Sonde, die Uranus und Neptun aus der Nähe besucht hat. Im Jahr 2018 überschritt sie die Heliopause und erreichte den interstellaren Raum.

Auch Voyager 2 trägt eine Golden Record. Ihre Position in dieser App ist schematisch; beide Voyager-Ziele verwenden dasselbe 3D-Modell.`,`It is the only spacecraft to have visited Uranus and Neptune up close. In 2018 it crossed the heliopause into interstellar space.

Voyager 2 also carries a Golden Record. Its position in this app is schematic; both Voyager destinations use the same 3D model.`]};for(const[s,e]of Object.entries(W3))Vs[s].de[1]+=`

`+e[0],Vs[s].en[1]+=`

`+e[1];const Lr={de:{ganymede:"GANYMED",moduleLabel:"Europa: Gezeitenheizung",languageLabel:"Sprache auswählen",back:"← Zurück zu Europa",kicker:"EUROPA · INTERAKTIVES LERNMODUL",title:"Gezeitenheizung",subtitle:"Wie Jupiter einen eisigen Mond von innen erwärmen kann",badge:"SCHEMATISCH · STARK ÜBERHÖHT · KEINE ECHTZEIT",orbit:"EUROPAS BAHN",detail:"EUROPA IM SCHNITT · MODELL",jupiter:"Jupiter",europa:"Europa",near:"Jupiter näher",far:"Jupiter ferner",ice:"Eis",ocean:"Ozean?",rock:"Gestein",flex:"Gezeitenwirkung",heat:"Wärme*",pause:"Ⅱ Pause",play:"▶ Abspielen",phase:"Position auf der Bahn",hint:"Ziehe den Regler, um eine Position zu untersuchen.",storyTitle:"Ein Mond wird durchgeknetet",story:"Europa bewegt sich auf einer leicht elliptischen Bahn. Näher an Jupiter ist der Unterschied zwischen dessen Anziehung auf der nahen und der fernen Seite stärker. Europa wird etwas stärker verformt; weiter entfernt lässt diese Wirkung nach. Die wiederholte Verformung kann im Inneren Wärme erzeugen.",resTitle:"Warum bleibt die Bahn elliptisch?",res:"Io, Europa und Ganymed beeinflussen einander durch ihre Schwerkraft. Ihre Bahnresonanz erhält Europas kleine Exzentrizität: Während Ganymed Jupiter einmal umrundet, schafft Europa ungefähr zwei und Io vier Umläufe.",evidenceTitle:"Was wissen wir – und was nicht?",evidence:"Galileos Magnetmessungen und die Eisoberfläche liefern starke Hinweise auf einen Ozean unter dem Eis; direkt bestätigt ist er noch nicht. Hydrothermale Aktivität am Meeresboden ist eine Möglichkeit, aber nicht nachgewiesen. Leben wurde auf Europa nicht gefunden.",warning:"Bahnform, Mondgrösse, Verformung und Wärme sind stark übertrieben. Die Zeitskala ist frei gewählt; der Schnitt zeigt ein mögliches Inneres, keine Messung.",sources:"Wissenschaftliche Grundlagen",source1:"NASA · Europa: Fakten ↗",source2:"ESA · Bahnresonanz ↗",statusNear:"Näher an Jupiter · Gezeitenwirkung stärker",statusFar:"Weiter von Jupiter · Gezeitenwirkung schwächer"},en:{ganymede:"GANYMEDE",moduleLabel:"Europa: tidal heating",languageLabel:"Choose language",back:"← Back to Europa",kicker:"EUROPA · INTERACTIVE LEARNING MODULE",title:"Tidal heating",subtitle:"How Jupiter may warm an icy moon from within",badge:"SCHEMATIC · GREATLY EXAGGERATED · NOT REAL TIME",orbit:"EUROPA’S ORBIT",detail:"EUROPA CUTAWAY · MODEL",jupiter:"Jupiter",europa:"Europa",near:"Nearer Jupiter",far:"Farther from Jupiter",ice:"Ice",ocean:"Ocean?",rock:"Rock",flex:"Tidal effect",heat:"Heat*",pause:"Ⅱ Pause",play:"▶ Play",phase:"Position in orbit",hint:"Drag the slider to explore a position.",storyTitle:"A moon flexed by gravity",story:"Europa follows a slightly elliptical orbit. Closer to Jupiter, the difference between its pull on the near and far sides is stronger. Europa flexes slightly more; farther away, the effect weakens. Repeated flexing can generate heat inside the moon.",resTitle:"Why does the orbit remain elliptical?",res:"Io, Europa and Ganymede pull on one another. Their orbital resonance maintains Europa’s small eccentricity: for each orbit of Ganymede, Europa completes about two and Io four.",evidenceTitle:"What do we know – and what remains uncertain?",evidence:"Galileo’s magnetic measurements and the icy surface provide strong evidence for an ocean beneath the ice, but it has not been directly confirmed. Hydrothermal activity on the seafloor is possible, not established. No life has been found on Europa.",warning:"The orbit shape, moon size, deformation and heat are greatly exaggerated. The timescale is illustrative; the cutaway is a possible interior, not a measurement.",sources:"Scientific sources",source1:"NASA · Europa facts ↗",source2:"ESA · orbital resonance ↗",statusNear:"Nearer Jupiter · stronger tidal effect",statusFar:"Farther from Jupiter · weaker tidal effect"}};function X3({onClose:s}){const e=document.createElement("section");e.className="tidal-module",e.hidden=!0,e.setAttribute("aria-label","Europa: Gezeitenheizung / tidal heating"),e.innerHTML='<div class="tidal-shell"><header class="tidal-header"><button class="tidal-back"></button><div class="tidal-lang" role="group" aria-label="Sprache / Language"><button data-tidal-lang="de" aria-pressed="true">DE</button><button data-tidal-lang="en" aria-pressed="false">EN</button></div></header><div class="tidal-body"><div class="tidal-visual"><div class="tidal-title"><div class="tidal-kicker"></div><h1></h1><p class="tidal-subtitle"></p></div><div class="tidal-canvas-wrap"><canvas aria-label="Schematische animierte Europa-Bahn und überhöhte Verformung"></canvas><div class="tidal-badge"></div></div><div class="tidal-controls"><div class="tidal-control-top"><button class="tidal-play"></button><output class="tidal-status" aria-live="off"></output></div><label><span class="tidal-phase"></span><input class="tidal-slider" type="range" min="0" max="1000" value="0" step="1"></label><div class="tidal-axis"><span class="tidal-near"></span><span class="tidal-far"></span><span class="tidal-near"></span></div><div class="tidal-hint"></div></div></div><aside class="tidal-reading"><div class="tidal-index">01 / EUROPA</div><h2 class="tidal-story-title"></h2><p class="tidal-story"></p><div class="tidal-divider"></div><h3 class="tidal-res-title"></h3><p class="tidal-res"></p><div class="tidal-resonance"><span>IO <b>4</b></span><span>EUROPA <b>2</b></span><span class="tidal-ganymede">GANYMED <b>1</b></span></div><h3 class="tidal-evidence-title"></h3><p class="tidal-evidence"></p><div class="tidal-warning"></div><div class="tidal-sources"><span></span><a href="https://science.nasa.gov/jupiter/jupiter-moons/europa/europa-facts/" target="_blank" rel="noopener noreferrer"></a><a href="https://www.esa.int/ESA_Multimedia/Videos/2021/07/The_orbits_of_the_Galilean_moons" target="_blank" rel="noopener noreferrer"></a></div></aside></div></div>',document.body.append(e);const t=e.querySelector("canvas"),n=t.getContext("2d"),i=e.querySelector(".tidal-slider"),r=e.querySelector(".tidal-play"),a=e.querySelector(".tidal-status");let o="de",l=0,c=!0,u=0,h=0;function d(b,v){e.querySelector(b).textContent=v}function p(){const b=Lr[o];e.lang=o,e.setAttribute("aria-label",b.moduleLabel),e.querySelector(".tidal-lang").setAttribute("aria-label",b.languageLabel),e.querySelector(".tidal-ganymede").firstChild.nodeValue=b.ganymede+" ",t.setAttribute("aria-label",o==="de"?"Schematische animierte Europa-Bahn und überhöhte Verformung":"Schematic animated Europa orbit and exaggerated deformation");for(const[v,x]of[[".tidal-back","back"],[".tidal-kicker","kicker"],[".tidal-title h1","title"],[".tidal-subtitle","subtitle"],[".tidal-badge","badge"],[".tidal-phase","phase"],[".tidal-hint","hint"],[".tidal-story-title","storyTitle"],[".tidal-story","story"],[".tidal-res-title","resTitle"],[".tidal-res","res"],[".tidal-evidence-title","evidenceTitle"],[".tidal-evidence","evidence"],[".tidal-warning","warning"],[".tidal-sources span","sources"],[".tidal-sources a:nth-of-type(1)","source1"],[".tidal-sources a:nth-of-type(2)","source2"]])d(v,b[x]);e.querySelectorAll(".tidal-near").forEach(v=>v.textContent=b.near),d(".tidal-far",b.far),i.setAttribute("aria-label",b.phase),e.querySelectorAll("[data-tidal-lang]").forEach(v=>v.setAttribute("aria-pressed",String(v.dataset.tidalLang===o))),g(),_()}function g(){const b=Lr[o];r.textContent=c?b.pause:b.play,r.setAttribute("aria-label",c?b.pause:b.play);const v=(1+Math.cos(l))/2;a.textContent=v>=.5?b.statusNear:b.statusFar,i.value=Math.round(l/(Math.PI*2)*1e3)%1001}function _(){if(e.hidden)return;const b=t.getBoundingClientRect();if(!b.width||!b.height)return;const v=Math.min(devicePixelRatio||1,1.5),x=b.width,T=b.height;(t.width!==Math.round(x*v)||t.height!==Math.round(T*v))&&(t.width=Math.round(x*v),t.height=Math.round(T*v)),n.setTransform(v,0,0,v,0,0),n.clearRect(0,0,x,T);const w=Lr[o],C=x<580,D=C?x*.28:x*.26,S=T*.54,E=Math.min(x*(C?.19:.16),T*.34),R=E*.68,z=D-E*.23,q=S,G=D-E*Math.cos(l),X=S+R*Math.sin(l),K=(1+Math.cos(l))/2,H=(ke,Le,Ee,fe,tt,me=1)=>{n.beginPath(),n.strokeStyle=tt,n.lineWidth=me,n.moveTo(ke,Le),n.lineTo(Ee,fe),n.stroke()},ne=(ke,Le,Ee,fe="center",tt="#a8bdcb")=>{n.fillStyle=tt,n.font=`600 ${C?9:10}px DM Sans, sans-serif`,n.textAlign=fe,n.fillText(ke,Le,Ee)};for(let ke=0;ke<85;ke++){let Le=(ke*71+31)%997/997*x,Ee=(ke*113+17)%613/613*T;n.fillStyle=ke%6===0?"#a7d2dc88":"#a8bfd944",n.fillRect(Le,Ee,ke%8===0?1.7:1,1)}n.setLineDash([3,5]),n.strokeStyle="#84a4b466",n.lineWidth=1,n.beginPath(),n.ellipse(D,S,E,R,0,0,Math.PI*2),n.stroke(),n.setLineDash([]);const ie=Math.max(14,Math.min(26,E*.25));let oe=n.createRadialGradient(z-ie*.35,q-ie*.4,ie*.1,z,q,ie);oe.addColorStop(0,"#f6d6a8"),oe.addColorStop(.55,"#bc8865"),oe.addColorStop(1,"#513c35"),n.fillStyle=oe,n.beginPath(),n.arc(z,q,ie,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(z,q,ie,0,Math.PI*2),n.clip();for(let ke=-3;ke<=3;ke++)H(z-ie,q+ke*ie*.25,z+ie,q+ke*ie*.25,ke%2?"#78544988":"#e8c2a077",ie*.09);n.restore(),ne(w.jupiter,z,q+ie+15);const Oe=Math.max(5,Math.min(10,E*.1));n.fillStyle="#d9ded6",n.beginPath(),n.arc(G,X,Oe,0,Math.PI*2),n.fill(),n.strokeStyle="#b8e7ef",n.lineWidth=1,n.stroke(),ne(w.europa,G,X-Oe-7),ne(w.orbit,D,Math.max(19,S-R-21),"center","#8eb6c4");const Ye=C?x*.69:x*.72,Ke=T*.53,Re=Math.min(x*(C?.15:.16),T*.31),j=1+.2*K;ne(w.detail,Ye,Math.max(19,Ke-Re*1.2-24),"center","#8eb6c4"),n.save(),n.translate(Ye,Ke),n.scale(j,1/Math.sqrt(j));const Z=n.createRadialGradient(0,0,Re*.35,0,0,Re*1.35);Z.addColorStop(0,`rgba(255,130,67,${.15+.25*K})`),Z.addColorStop(1,"rgba(255,110,40,0)"),n.fillStyle=Z,n.beginPath(),n.arc(0,0,Re*1.35,0,Math.PI*2),n.fill(),n.fillStyle="#d4e8e7",n.beginPath(),n.arc(0,0,Re,0,Math.PI*2),n.fill(),n.fillStyle="#376d86",n.beginPath(),n.arc(0,0,Re*.83,0,Math.PI*2),n.fill(),n.fillStyle="#54403d",n.beginPath(),n.arc(0,0,Re*.55,0,Math.PI*2),n.fill();const he=n.createRadialGradient(-Re*.13,-Re*.13,0,0,0,Re*.5);he.addColorStop(0,`rgba(255,${Math.round(150+K*45)},80,.95)`),he.addColorStop(1,"rgba(110,47,38,.65)"),n.fillStyle=he,n.beginPath(),n.arc(0,0,Re*.49,0,Math.PI*2),n.fill(),n.restore(),ne(w.heat,Ye,Ke+3,"center","#fff3d7");const Ce=Math.min(x-10,Ye+Re*1.22),ve=Ke-Re*.62;ne(w.ice,Ce,ve,"left"),ne(w.ocean,Ce,ve+16,"left","#7cc6e0"),ne(w.rock,Ce,ve+32,"left","#edb190");const We=Math.min(T-21,Ke+Re*1.2+24),pt=Math.max(10,Ye-Re),P=Math.min(Re*2,x-pt-15);n.fillStyle="#293d4b",n.fillRect(pt,We,P,3),n.fillStyle="#f1a978",n.fillRect(pt,We,P*(.2+.8*K),3),ne(w.flex,pt,We-7,"left","#cfb5a5")}function m(b){e.hidden||(h&&c&&(l=(l+(b-h)/18e3*Math.PI*2)%(Math.PI*2),g()),h=b,_(),u=requestAnimationFrame(m))}r.addEventListener("click",()=>{c=!c,h=0,g()}),i.addEventListener("input",()=>{l=Number(i.value)/1e3*Math.PI*2,c=!1,h=0,g(),_()}),e.querySelectorAll("[data-tidal-lang]").forEach(b=>b.addEventListener("click",()=>{o=b.dataset.tidalLang,p()})),e.querySelector(".tidal-back").addEventListener("click",()=>f());function f(){e.hidden||(e.hidden=!0,document.querySelector("main").inert=!1,cancelAnimationFrame(u),u=0,s())}return window.addEventListener("resize",()=>_()),window.addEventListener("keydown",b=>{!e.hidden&&b.key==="Escape"&&(b.stopImmediatePropagation(),f())},!0),{open(b="de"){o=Lr[b]?b:"de",l=0,c=!0,h=0,e.hidden=!1,document.querySelector("main").inert=!0,e.scrollTop=0,p(),u=requestAnimationFrame(m),e.querySelector(".tidal-back").focus()},close:f,isOpen(){return!e.hidden}}}const Dr={de:{module:"Erde und Mond: Gezeiten",langLabel:"Sprache auswählen",back:"← Zurück zur Erkundung",kicker:"ERDE & MOND · INTERAKTIVES LERNMODUL",title:"Ebbe und Flut",subtitle:"Wie der Mond zwei idealisierte Flutberge entstehen lässt",badge:"SCHEMATISCH · FORM UND ZEIT STARK ÜBERHÖHT",earth:"Erde",moon:"Mond",near:"Mondseite",far:"Gegenseite",marker:"Beispielort",phase:"Mondposition",pause:"Ⅱ Pause",play:"▶ Abspielen",hint:"Pfeile: Gezeitenwirkung relativ zum Erdzentrum. Regler bewegen, um die Animation zu pausieren.",high:"Beispielort: im idealisierten Flutberg",low:"Beispielort: zwischen den Flutbergen",head:"Warum zwei Flutberge?",intro:"Der Mond zieht an der ganzen Erde. Seine Anziehung ist auf der nahen Seite etwas stärker und auf der fernen Seite etwas schwächer als am Erdzentrum. Im mit der Erde mitfallenden Bezugssystem ergibt dieser Unterschied eine Gezeitenwirkung, die in beide Richtungen entlang der Erde–Mond-Achse auseinanderzieht.",rotationTitle:"Ein einfacher Gedankenversuch",rotation:"In diesem Modell bedeckt ein zusammenhängender Ozean die Erde. Zwei stark überhöhte Wasserberge zeigen zum Mond und von ihm weg. Die Erde dreht sich darunter; der markierte Beispielort passiert beide Berge. Das ist ein Idealbild, keine Vorhersage für einen Ort.",realTitle:"Die wirklichen Gezeiten",real:"Küsten, Kontinente, Meerestiefe und die Eigenbewegung des Wassers verändern Zeitpunkt und Höhe. Auch die Sonne wirkt mit. Manche Küsten erleben zwei ungleiche Hochwasser pro Tag, andere eines; lokale Gezeitentabellen sind entscheidend.",warning:"Grösse, Abstände und Flutberge sind überzeichnet. Erdrotation und Mondumlauf sind für die Animation vereinfacht und nicht in Echtzeit; die Sonne wird hier nicht dargestellt.",sources:"Wissenschaftliche Grundlagen",source1:"NOAA · Zwei Flutberge ↗",source2:"NOAA · Lokale Hochwasser ↗",canvas:"Schematische Erde und Mond mit zwei überhöhten Flutbergen und einem rotierenden Beispielort"},en:{module:"Earth and Moon: tides",langLabel:"Choose language",back:"← Back to exploration",kicker:"EARTH & MOON · INTERACTIVE LEARNING MODULE",title:"Ocean tides",subtitle:"How the Moon produces two idealised tidal bulges",badge:"SCHEMATIC · SHAPE AND TIME GREATLY EXAGGERATED",earth:"Earth",moon:"Moon",near:"Near side",far:"Far side",marker:"Example location",phase:"Moon position",pause:"Ⅱ Pause",play:"▶ Play",hint:"Arrows: tidal effect relative to Earth’s centre. Move the slider to pause the animation.",high:"Example location: inside an idealised bulge",low:"Example location: between the tidal bulges",head:"Why two tidal bulges?",intro:"The Moon pulls on the whole Earth. Its attraction is slightly stronger on the near side and slightly weaker on the far side than at Earth’s centre. In a frame falling with Earth, this difference creates a tidal effect that stretches in both directions along the Earth–Moon axis.",rotationTitle:"A simple thought experiment",rotation:"In this model a continuous ocean covers Earth. Two greatly exaggerated bulges point towards and away from the Moon. Earth rotates underneath; the marked example location passes both bulges. This is an idealisation, not a forecast for any location.",realTitle:"Tides in the real world",real:"Coasts, continents, ocean depth and the movement of water change the timing and height. The Sun also contributes. Some coasts experience two unequal high tides a day, others one; local tide tables are essential.",warning:"Sizes, distances and bulges are exaggerated. Earth’s rotation and the Moon’s orbit are simplified for the animation and are not in real time; the Sun is not shown here.",sources:"Scientific sources",source1:"NOAA · The two bulges ↗",source2:"NOAA · Local high tides ↗",canvas:"Schematic Earth and Moon with two exaggerated tidal bulges and a rotating example location"}};function q3({onClose:s}){const e=document.createElement("section");e.className="tidal-module earth-tides-module",e.hidden=!0,e.innerHTML='<div class="tidal-shell"><header class="tidal-header"><button class="tidal-back"></button><div class="tidal-lang" role="group"><button data-earth-lang="de" aria-pressed="true">DE</button><button data-earth-lang="en" aria-pressed="false">EN</button></div></header><div class="tidal-body"><div class="tidal-visual"><div class="tidal-title"><div class="tidal-kicker"></div><h1></h1><p class="tidal-subtitle"></p></div><div class="tidal-canvas-wrap earth-tides-canvas"><canvas></canvas><div class="tidal-badge"></div></div><div class="tidal-controls"><div class="tidal-control-top"><button class="tidal-play"></button><output class="tidal-status" aria-live="off"></output></div><label><span class="tidal-phase"></span><input class="tidal-slider" type="range" min="0" max="1000" step="1" value="0"></label><div class="tidal-hint"></div></div></div><aside class="tidal-reading"><div class="tidal-index">02 / EARTH · MOON</div><h2 class="earth-head"></h2><p class="earth-intro"></p><div class="tidal-divider"></div><h3 class="earth-rotation-title"></h3><p class="earth-rotation"></p><h3 class="earth-real-title"></h3><p class="earth-real"></p><div class="tidal-warning"></div><div class="tidal-sources"><span></span><a href="https://oceanservice.noaa.gov/education/tutorial_tides/tides03_gravity.html" target="_blank" rel="noopener noreferrer"></a><a href="https://oceanservice.noaa.gov/facts/high-tide.html" target="_blank" rel="noopener noreferrer"></a></div></aside></div></div>',document.body.append(e);const t=e.querySelector("canvas"),n=t.getContext("2d"),i=e.querySelector(".tidal-slider"),r=e.querySelector(".tidal-play"),a=e.querySelector(".tidal-status");let o="de",l=0,c=!0,u=0,h=0;const d=(b,v)=>{e.querySelector(b).textContent=v};function p(){const b=Dr[o];e.lang=o,e.setAttribute("aria-label",b.module),e.querySelector(".tidal-lang").setAttribute("aria-label",b.langLabel),t.setAttribute("aria-label",b.canvas),i.setAttribute("aria-label",b.phase);for(const[v,x]of[[".tidal-back","back"],[".tidal-kicker","kicker"],[".tidal-title h1","title"],[".tidal-subtitle","subtitle"],[".tidal-badge","badge"],[".tidal-phase","phase"],[".tidal-hint","hint"],[".earth-head","head"],[".earth-intro","intro"],[".earth-rotation-title","rotationTitle"],[".earth-rotation","rotation"],[".earth-real-title","realTitle"],[".earth-real","real"],[".tidal-warning","warning"],[".tidal-sources span","sources"],[".tidal-sources a:nth-of-type(1)","source1"],[".tidal-sources a:nth-of-type(2)","source2"]])d(v,b[x]);e.querySelectorAll("[data-earth-lang]").forEach(v=>v.setAttribute("aria-pressed",String(v.dataset.earthLang===o))),g(),_()}function g(){const b=Dr[o];r.textContent=c?b.pause:b.play,r.setAttribute("aria-label",c?b.pause:b.play);const v=4*l+.5;a.textContent=Math.abs(Math.cos(v-l))>.72?b.high:b.low,i.value=Math.round(l/(Math.PI*2)*1e3)%1001}function _(){if(e.hidden)return;const b=t.getBoundingClientRect();if(!b.width||!b.height)return;const v=Math.min(devicePixelRatio||1,1.5),x=b.width,T=b.height;(t.width!==Math.round(x*v)||t.height!==Math.round(T*v))&&(t.width=Math.round(x*v),t.height=Math.round(T*v)),n.setTransform(v,0,0,v,0,0),n.clearRect(0,0,x,T);const w=Dr[o],C=x<580,D=x*.5,S=T*.5,E=Math.min(x*.34,T*.36),R=Math.min(E*.48,C?58:87),F=Math.max(8,R*.19),z=D+Math.cos(l)*E,q=S+Math.sin(l)*E,G=l*4+.5,X=(oe,Oe,Ye,Ke="center",Re="#b6d2dc")=>{n.font=`600 ${C?9:11}px DM Sans, sans-serif`,n.textAlign=Ke,n.fillStyle=Re,n.fillText(oe,Oe,Ye)};for(let oe=0;oe<85;oe++)n.fillStyle=oe%7===0?"#c9e8ec88":"#99bdcc55",n.fillRect((oe*67+23)%997/997*x,(oe*109+47)%613/613*T,oe%9===0?1.5:1,1);n.setLineDash([3,6]),n.strokeStyle="#7897a755",n.lineWidth=1,n.beginPath(),n.arc(D,S,E,0,Math.PI*2),n.stroke(),n.setLineDash([]),n.save(),n.translate(D,S),n.rotate(l),n.beginPath(),n.ellipse(0,0,R*1.38,R*1.04,0,0,Math.PI*2),n.fillStyle="#56cbe077",n.fill(),n.strokeStyle="#9ce7f4",n.lineWidth=1.5,n.stroke(),n.restore();let K=n.createRadialGradient(D-R*.35,S-R*.45,R*.1,D,S,R);K.addColorStop(0,"#64b7dc"),K.addColorStop(.6,"#1c6798"),K.addColorStop(1,"#0b2946"),n.fillStyle=K,n.beginPath(),n.arc(D,S,R,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(D,S,R,0,Math.PI*2),n.clip(),n.translate(D,S),n.rotate(G),n.fillStyle="#a1bb9bbd",n.beginPath(),n.moveTo(-R*.48,-R*.58),n.bezierCurveTo(-R*.15,-R*.7,R*.06,-R*.4,-R*.09,-R*.18),n.bezierCurveTo(-R*.28,R*.02,-R*.05,R*.18,-R*.35,R*.35),n.bezierCurveTo(-R*.59,R*.22,-R*.68,-R*.15,-R*.48,-R*.58),n.fill(),n.beginPath(),n.ellipse(R*.35,R*.34,R*.2,R*.3,.35,0,Math.PI*2),n.fill(),n.restore();const H=D+Math.cos(G)*R,ne=S+Math.sin(G)*R;n.beginPath(),n.arc(H,ne,4,0,Math.PI*2),n.fillStyle="#ffe7ac",n.fill(),n.lineWidth=1.5,n.strokeStyle="#0a1c2a",n.stroke();let ie=n.createRadialGradient(z-F*.4,q-F*.4,1,z,q,F);ie.addColorStop(0,"#f2f1e8"),ie.addColorStop(1,"#8d929a"),n.beginPath(),n.arc(z,q,F,0,Math.PI*2),n.fillStyle=ie,n.fill(),X(w.moon,z,Math.max(16,q-F-8)),X(w.earth,D,S+R+17),X(w.marker,Math.max(50,Math.min(x-50,H)),Math.max(18,ne-10),"center","#ffe4aa"),n.save(),n.translate(D,S),n.rotate(l),n.strokeStyle="#d6faff",n.lineWidth=1.5;for(const oe of[-1,1])n.beginPath(),n.moveTo(oe*R*1.08,0),n.lineTo(oe*R*1.45,0),n.moveTo(oe*R*1.35,-4),n.lineTo(oe*R*1.45,0),n.lineTo(oe*R*1.35,4),n.stroke();n.restore()}function m(b){e.hidden||(u&&c&&(l=(l+(b-u)/24e3*Math.PI*2)%(Math.PI*2),g()),u=b,_(),h=requestAnimationFrame(m))}r.addEventListener("click",()=>{c=!c,u=0,g()}),i.addEventListener("input",()=>{l=Number(i.value)/1e3*Math.PI*2,c=!1,u=0,g(),_()}),e.querySelectorAll("[data-earth-lang]").forEach(b=>b.addEventListener("click",()=>{o=b.dataset.earthLang,p()}));function f(){e.hidden||(e.hidden=!0,document.querySelector("main").inert=!1,cancelAnimationFrame(h),h=0,s())}return e.querySelector(".tidal-back").addEventListener("click",f),window.addEventListener("resize",_),window.addEventListener("keydown",b=>{!e.hidden&&b.key==="Escape"&&(b.stopImmediatePropagation(),f())},!0),{open(b="de"){o=Dr[b]?b:"de",l=0,c=!0,u=0,e.hidden=!1,document.querySelector("main").inert=!0,e.scrollTop=0,p(),h=requestAnimationFrame(m),e.querySelector(".tidal-back").focus()},close:f,isOpen(){return!e.hidden}}}function j3(s,e){const t=matchMedia("(pointer: coarse)").matches||innerWidth<=700,i=(o=>()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296))(20261029),r=new _l(1,1),a=r.attributes.position;for(let o=0;o<a.count;o++){const l=a.getX(o),c=a.getY(o),u=a.getZ(o),h=.83+.18*Math.sin(l*13+c*11+u*17);a.setXYZ(o,l*h,c*h*.75,u*h*1.12)}return r.computeVertexNormals(),s.map((o,l)=>{const c=t?l===0?600:450:l===0?1500:1100,u=new Ks({color:l===0?12164483:10863313,roughness:1}),h=new Qu(r,u,c);h.instanceMatrix.setUsage(qr),h.frustumCulled=!1;const d=Array.from({length:c},()=>({r:Math.sqrt(i()),a:i()*Math.PI*2,y:(i()+i()+i()-1.5)/1.5,scale:.35+Math.pow(i(),2)*1.2,rx:i()*Math.PI,ry:i()*Math.PI,rz:i()*Math.PI,tint:i()})),p=new ct,g=new Ne;d.forEach((m,f)=>{g.setHSL(l===0?.075:.55,.12,.42+m.tint*.28),h.setColorAt(f,g)}),e.add(h);function _(m){const f=m==="real"?o.auMin*100:o.viewMin,b=m==="real"?o.auMax*100:o.viewMax,v=(b-f)*(l===0?.11:.16),x=m==="real"?l===0?.36:5.5:l===0?.045:.15;d.forEach((T,w)=>{const C=f+(b-f)*T.r;p.position.set(Math.cos(T.a)*C,T.y*v,Math.sin(T.a)*C),p.rotation.set(T.rx,T.ry,T.rz),p.scale.setScalar(x*T.scale),p.updateMatrix(),h.setMatrixAt(w,p.matrix)}),h.instanceMatrix.needsUpdate=!0,h.rotation.y=0}return{data:o,instances:h,setScale:_}})}const Y3=1213220174;function K3(s){const e=s instanceof Uint8Array?s:new Uint8Array(s),t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(t.getUint32(0,!0)!==Y3)throw new Error("not a Naelos Ephemeris table");const n=t.getUint8(4);if(n!==2)throw new Error(`unsupported table format ${n}`);const i=t.getUint8(5),r=t.getFloat64(6,!0),a=t.getFloat64(14,!0);let o=22;const l=new Map;for(let c=0;c<i;c++){const u=t.getUint16(o,!0),h=t.getUint8(o+2),d=t.getUint8(o+3),p=t.getUint8(o+4),g=t.getFloat64(o+5,!0),_=t.getFloat64(o+13,!0),m=t.getUint32(o+21,!0),f=t.getFloat64(o+25,!0),b=t.getUint32(o+33,!0);o+=37;const v=$3(e,o,o+b,m,d,p,f);o+=b,l.set(u,{id:u,frame:h,degree:d,segmentDays:g,t0:_,segments:m,coeffs:v})}return{start:r,end:a,series:l}}function Z3(s,e){const t=[];for(let n=0;n<=s;n++){let i=0;if(e&&n>e)for(;2**i*e*e<n*n;)i++;t.push(i)}return t}function xu(s,e){let t=0,n=1,i;do i=s[e.pos++],t+=(i&127)*n,n*=128;while(i&128);return t%2===0?t/2:-(t+1)/2}function $3(s,e,t,n,i,r,a){const o=i+1,l=Z3(i,r),c=Math.max(...l),u=l.map(f=>2**(c-f)),h=l.map(f=>a/2**f),d=new Float64Array(n*3*o),p=new Float64Array(o),g=[0,0,0],_=[0,0,0],m={pos:e};for(let f=0;f<n;f++){for(let b=0;b<3;b++){let v=0,x=0;for(let D=1;D<o;D++){p[D]=xu(s,m);const S=p[D]*u[D];x+=S,v+=D%2===0?S:-S}const T=xu(s,m),w=f===0?T*u[0]:g[b]-v+T;p[0]=w/u[0],_[b]=w+x;const C=(f*3+b)*o;for(let D=0;D<o;D++)d[C+D]=p[D]*h[D]}g[0]=_[0],g[1]=_[1],g[2]=_[2]}if(m.pos!==t)throw new Error("table payload length mismatch");return d}function J3(s,e){return e>=s.t0-1e-9&&e<=s.t0+s.segments*s.segmentDays+1e-9}function Q3(s,e,t,n){const{degree:i,segmentDays:r,t0:a,segments:o,coeffs:l}=s;if(!J3(s,e))throw new RangeError(`series ${s.id} covers TDB JD ${a} to ${a+o*r}, not ${e}`);let c=Math.floor((e-a)/r);c<0?c=0:c>=o&&(c=o-1);const u=2*(e-(a+c*r))/r-1,h=i+1;for(let d=0;d<3;d++){const p=(c*3+d)*h;let g=0,_=0;for(let m=i;m>=1;m--){const f=2*u*g-_+l[p+m];_=g,g=f}t[d]=u*g-_+l[p]}}const vh={years:400,days:146097};function e5(s,e,t,n,i){let r=s,a=e;a<=2&&(r-=1,a+=12);let o=0;{const l=Math.floor(r/100);o=2-l+Math.floor(l/4)}return Math.floor(365.25*(r+4716))+Math.floor(30.6001*(a+1))+t+o-1524.5+n/24}function t5(s,e,t,n,i){const r=vh,a=s<-4e3?Math.ceil((-4e3-s)/r.years):0;return e5(s+a*r.years,e,t,n)-a*r.days}function di(s,e,t,n=0){return t5(s,e,t,n)}function tl(s,e){const t=e,n=vh,i=s<0?Math.ceil(-s/n.days)+1:0,r=s+.5+i*n.days,a=Math.floor(r),o=r-a;let l=a;{const m=Math.floor((a-186721625e-2)/36524.25);l=a+1+m-Math.floor(m/4)}const c=l+1524,u=Math.floor((c-122.1)/365.25),h=Math.floor(365.25*u),d=Math.floor((c-h)/30.6001),p=c-h-Math.floor(30.6001*d),g=d<14?d-1:d-13;return{year:(g>2?u-4716:u-4715)-i*n.years,month:g,day:p,hour:o*24,calendar:t}}const Gs=[["ne-m13200.bin",-30990455e-1,-30636165e-1,1],["ne-m13100.bin",-30636165e-1,-30270925e-1,1],["ne-m13000.bin",-30270925e-1,-29905685e-1,1],["ne-m12900.bin",-29905685e-1,-29540445e-1,1],["ne-m12800.bin",-29540445e-1,-29175195e-1,1],["ne-m12700.bin",-29175195e-1,-28809955e-1,1],["ne-m12600.bin",-28809955e-1,-28444715e-1,1],["ne-m12500.bin",-28444715e-1,-28079475e-1,1],["ne-m12400.bin",-28079475e-1,-27714225e-1,1],["ne-m12300.bin",-27714225e-1,-27348985e-1,1],["ne-m12200.bin",-27348985e-1,-26983745e-1,1],["ne-m12100.bin",-26983745e-1,-26618505e-1,1],["ne-m12000.bin",-26618505e-1,-26253255e-1,1],["ne-m11900.bin",-26253255e-1,-25888015e-1,1],["ne-m11800.bin",-25888015e-1,-25522775e-1,1],["ne-m11700.bin",-25522775e-1,-25157535e-1,1],["ne-m11600.bin",-25157535e-1,-24792285e-1,1],["ne-m11500.bin",-24792285e-1,-24427045e-1,1],["ne-m11400.bin",-24427045e-1,-24061805e-1,1],["ne-m11300.bin",-24061805e-1,-23696565e-1,1],["ne-m11200.bin",-23696565e-1,-23331315e-1,1],["ne-m11100.bin",-23331315e-1,-22966075e-1,1],["ne-m11000.bin",-22966075e-1,-22600835e-1,1],["ne-m10900.bin",-22600835e-1,-22235595e-1,1],["ne-m10800.bin",-22235595e-1,-21870345e-1,1],["ne-m10700.bin",-21870345e-1,-21505105e-1,1],["ne-m10600.bin",-21505105e-1,-21139865e-1,1],["ne-m10500.bin",-21139865e-1,-20774625e-1,1],["ne-m10400.bin",-20774625e-1,-20409375e-1,1],["ne-m10300.bin",-20409375e-1,-20044135e-1,1],["ne-m10200.bin",-20044135e-1,-19678895e-1,1],["ne-m10100.bin",-19678895e-1,-19313655e-1,1],["ne-m10000.bin",-19313655e-1,-18948405e-1,1],["ne-m9900.bin",-18948405e-1,-18583165e-1,1],["ne-m9800.bin",-18583165e-1,-18217925e-1,1],["ne-m9700.bin",-18217925e-1,-17852685e-1,1],["ne-m9600.bin",-17852685e-1,-17487435e-1,1],["ne-m9500.bin",-17487435e-1,-17122195e-1,1],["ne-m9400.bin",-17122195e-1,-16756955e-1,1],["ne-m9300.bin",-16756955e-1,-16391715e-1,1],["ne-m9200.bin",-16391715e-1,-16026465e-1,1],["ne-m9100.bin",-16026465e-1,-15661225e-1,1],["ne-m9000.bin",-15661225e-1,-15295985e-1,1],["ne-m8900.bin",-15295985e-1,-14930745e-1,1],["ne-m8800.bin",-14930745e-1,-14565495e-1,1],["ne-m8700.bin",-14565495e-1,-14200255e-1,1],["ne-m8600.bin",-14200255e-1,-13835015e-1,1],["ne-m8500.bin",-13835015e-1,-13469775e-1,1],["ne-m8400.bin",-13469775e-1,-13104525e-1,1],["ne-m8300.bin",-13104525e-1,-12739285e-1,1],["ne-m8200.bin",-12739285e-1,-12374045e-1,1],["ne-m8100.bin",-12374045e-1,-12008805e-1,1],["ne-m8000.bin",-12008805e-1,-11643555e-1,1],["ne-m7900.bin",-11643555e-1,-11278315e-1,1],["ne-m7800.bin",-11278315e-1,-10913075e-1,1],["ne-m7700.bin",-10913075e-1,-10547835e-1,1],["ne-m7600.bin",-10547835e-1,-10182585e-1,1],["ne-m7500.bin",-10182585e-1,-981734.5,1],["ne-m7400.bin",-981734.5,-945210.5,1],["ne-m7300.bin",-945210.5,-908686.5,1],["ne-m7200.bin",-908686.5,-872161.5,1],["ne-m7100.bin",-872161.5,-835637.5,1],["ne-m7000.bin",-835637.5,-799113.5,1],["ne-m6900.bin",-799113.5,-762589.5,1],["ne-m6800.bin",-762589.5,-726064.5,1],["ne-m6700.bin",-726064.5,-689540.5,1],["ne-m6600.bin",-689540.5,-653016.5,1],["ne-m6500.bin",-653016.5,-616492.5,1],["ne-m6400.bin",-616492.5,-579967.5,1],["ne-m6300.bin",-579967.5,-543443.5,1],["ne-m6200.bin",-543443.5,-506919.5,1],["ne-m6100.bin",-506919.5,-470395.5,1],["ne-m6000.bin",-470395.5,-433870.5,1],["ne-m5900.bin",-433870.5,-397346.5,1],["ne-m5800.bin",-397346.5,-360822.5,1],["ne-m5700.bin",-360822.5,-324298.5,1],["ne-m5600.bin",-324298.5,-287773.5,1],["ne-m5500.bin",-287773.5,-251249.5,1],["ne-m5400.bin",-251249.5,-214725.5,1],["ne-m5300.bin",-214725.5,-178201.5,1],["ne-m5200.bin",-178201.5,-141676.5,1],["ne-m5100.bin",-141676.5,-105152.5,1],["ne-m5000.bin",-105152.5,-68628.5,1],["ne-m4900.bin",-68628.5,-32104.5,1],["ne-m4800.bin",-32104.5,4420.5,1],["ne-m4700.bin",4420.5,40944.5,1],["ne-m4600.bin",40944.5,77468.5,1],["ne-m4500.bin",77468.5,113992.5,1],["ne-m4400.bin",113992.5,150517.5,1],["ne-m4300.bin",150517.5,187041.5,1],["ne-m4200.bin",187041.5,223565.5,1],["ne-m4100.bin",223565.5,260089.5,1],["ne-m4000.bin",260089.5,296614.5,1],["ne-m3900.bin",296614.5,333138.5,1],["ne-m3800.bin",333138.5,369662.5,1],["ne-m3700.bin",369662.5,406186.5,1],["ne-m3600.bin",406186.5,442711.5,1],["ne-m3500.bin",442711.5,479235.5,1],["ne-m3400.bin",479235.5,515759.5,1],["ne-m3300.bin",515759.5,552283.5,1],["ne-m3200.bin",552283.5,588808.5,1],["ne-m3100.bin",588808.5,625332.5,1],["ne-m3000.bin",625332.5,661856.5,1],["ne-m2900.bin",661856.5,698380.5,1],["ne-m2800.bin",698380.5,734905.5,1],["ne-m2700.bin",734905.5,771429.5,1],["ne-m2600.bin",771429.5,807953.5,1],["ne-m2500.bin",807953.5,844477.5,1],["ne-m2400.bin",844477.5,881002.5,1],["ne-m2300.bin",881002.5,917526.5,1],["ne-m2200.bin",917526.5,954050.5,1],["ne-m2100.bin",954050.5,990574.5,1],["ne-m2000.bin",990574.5,10270995e-1,1],["ne-m1900.bin",10270995e-1,10636235e-1,1],["ne-m1800.bin",10636235e-1,11001475e-1,1],["ne-m1700.bin",11001475e-1,11366715e-1,1],["ne-m1600.bin",11366715e-1,11731965e-1,1],["ne-m1500.bin",11731965e-1,12097205e-1,1],["ne-m1400.bin",12097205e-1,12462445e-1,1],["ne-m1300.bin",12462445e-1,12827685e-1,1],["ne-m1200.bin",12827685e-1,13192935e-1,1],["ne-m1100.bin",13192935e-1,13558175e-1,1],["ne-m1000.bin",13558175e-1,13923415e-1,1],["ne-m0900.bin",13923415e-1,14288655e-1,1],["ne-m0800.bin",14288655e-1,14653905e-1,1],["ne-m0700.bin",14653905e-1,15019145e-1,1],["ne-m0600.bin",15019145e-1,15384385e-1,1],["ne-m0500.bin",15384385e-1,15749625e-1,1],["ne-m0400.bin",15749625e-1,16114875e-1,1],["ne-m0300.bin",16114875e-1,16480115e-1,1],["ne-m0200.bin",16480115e-1,16845355e-1,1],["ne-m0100.bin",16845355e-1,17210595e-1,1],["ne-0.bin",17210595e-1,17575845e-1,1],["ne-100.bin",17575845e-1,17941085e-1,1],["ne-200.bin",17941085e-1,18306325e-1,1],["ne-300.bin",18306325e-1,18671565e-1,1],["ne-400.bin",18671565e-1,19036815e-1,1],["ne-500.bin",19036815e-1,19402055e-1,1],["ne-600.bin",19402055e-1,19767295e-1,1],["ne-700.bin",19767295e-1,20132535e-1,1],["ne-800.bin",20132535e-1,20497785e-1,1],["ne-900.bin",20497785e-1,20863025e-1,1],["ne-1000.bin",20863025e-1,21228265e-1,1],["ne-1100.bin",21228265e-1,21593505e-1,1],["ne-1200.bin",21593505e-1,21958755e-1,1],["ne-1300.bin",21958755e-1,22323995e-1,1],["ne-1400.bin",22323995e-1,22689235e-1,1],["ne-1500.bin",22689235e-1,22871945e-1,1],["ne-1550.bin",22871945e-1,23054475e-1,0],["ne-1600.bin",23054475e-1,23419725e-1,0],["ne-1700.bin",23419725e-1,23784965e-1,0],["ne-1800.bin",23784965e-1,24150205e-1,0],["ne-1900.bin",24150205e-1,24515445e-1,0],["ne-2000.bin",24515445e-1,24880695e-1,0],["ne-2100.bin",24880695e-1,25245935e-1,0],["ne-2200.bin",25245935e-1,25611175e-1,0],["ne-2300.bin",25611175e-1,25976415e-1,0],["ne-2400.bin",25976415e-1,26341665e-1,0],["ne-2500.bin",26341665e-1,26706905e-1,0],["ne-2600.bin",26706905e-1,26886025e-1,0],["ne-2649.bin",26886025e-1,27072145e-1,1],["ne-2700.bin",27072145e-1,27437385e-1,1],["ne-2800.bin",27437385e-1,27802635e-1,1],["ne-2900.bin",27802635e-1,28167875e-1,1],["ne-3000.bin",28167875e-1,28533115e-1,1],["ne-3100.bin",28533115e-1,28898355e-1,1],["ne-3200.bin",28898355e-1,29263605e-1,1],["ne-3300.bin",29263605e-1,29628845e-1,1],["ne-3400.bin",29628845e-1,29994085e-1,1],["ne-3500.bin",29994085e-1,30359325e-1,1],["ne-3600.bin",30359325e-1,30724575e-1,1],["ne-3700.bin",30724575e-1,31089815e-1,1],["ne-3800.bin",31089815e-1,31455055e-1,1],["ne-3900.bin",31455055e-1,31820295e-1,1],["ne-4000.bin",31820295e-1,32185545e-1,1],["ne-4100.bin",32185545e-1,32550785e-1,1],["ne-4200.bin",32550785e-1,32916025e-1,1],["ne-4300.bin",32916025e-1,33281265e-1,1],["ne-4400.bin",33281265e-1,33646515e-1,1],["ne-4500.bin",33646515e-1,34011755e-1,1],["ne-4600.bin",34011755e-1,34376995e-1,1],["ne-4700.bin",34376995e-1,34742235e-1,1],["ne-4800.bin",34742235e-1,35107485e-1,1],["ne-4900.bin",35107485e-1,35472725e-1,1],["ne-5000.bin",35472725e-1,35837965e-1,1],["ne-5100.bin",35837965e-1,36203205e-1,1],["ne-5200.bin",36203205e-1,36568455e-1,1],["ne-5300.bin",36568455e-1,36933695e-1,1],["ne-5400.bin",36933695e-1,37298935e-1,1],["ne-5500.bin",37298935e-1,37664175e-1,1],["ne-5600.bin",37664175e-1,38029425e-1,1],["ne-5700.bin",38029425e-1,38394665e-1,1],["ne-5800.bin",38394665e-1,38759905e-1,1],["ne-5900.bin",38759905e-1,39125145e-1,1],["ne-6000.bin",39125145e-1,39490395e-1,1],["ne-6100.bin",39490395e-1,39855635e-1,1],["ne-6200.bin",39855635e-1,40220875e-1,1],["ne-6300.bin",40220875e-1,40586115e-1,1],["ne-6400.bin",40586115e-1,40951365e-1,1],["ne-6500.bin",40951365e-1,41316605e-1,1],["ne-6600.bin",41316605e-1,41681845e-1,1],["ne-6700.bin",41681845e-1,42047085e-1,1],["ne-6800.bin",42047085e-1,42412335e-1,1],["ne-6900.bin",42412335e-1,42777575e-1,1],["ne-7000.bin",42777575e-1,43142815e-1,1],["ne-7100.bin",43142815e-1,43508055e-1,1],["ne-7200.bin",43508055e-1,43873305e-1,1],["ne-7300.bin",43873305e-1,44238545e-1,1],["ne-7400.bin",44238545e-1,44603785e-1,1],["ne-7500.bin",44603785e-1,44969025e-1,1],["ne-7600.bin",44969025e-1,45334275e-1,1],["ne-7700.bin",45334275e-1,45699515e-1,1],["ne-7800.bin",45699515e-1,46064755e-1,1],["ne-7900.bin",46064755e-1,46429995e-1,1],["ne-8000.bin",46429995e-1,46795245e-1,1],["ne-8100.bin",46795245e-1,47160485e-1,1],["ne-8200.bin",47160485e-1,47525725e-1,1],["ne-8300.bin",47525725e-1,47890965e-1,1],["ne-8400.bin",47890965e-1,48256215e-1,1],["ne-8500.bin",48256215e-1,48621455e-1,1],["ne-8600.bin",48621455e-1,48986695e-1,1],["ne-8700.bin",48986695e-1,49351935e-1,1],["ne-8800.bin",49351935e-1,49717185e-1,1],["ne-8900.bin",49717185e-1,50082425e-1,1],["ne-9000.bin",50082425e-1,50447665e-1,1],["ne-9100.bin",50447665e-1,50812905e-1,1],["ne-9200.bin",50812905e-1,51178155e-1,1],["ne-9300.bin",51178155e-1,51543395e-1,1],["ne-9400.bin",51543395e-1,51908635e-1,1],["ne-9500.bin",51908635e-1,52273875e-1,1],["ne-9600.bin",52273875e-1,52639125e-1,1],["ne-9700.bin",52639125e-1,53004365e-1,1],["ne-9800.bin",53004365e-1,53369605e-1,1],["ne-9900.bin",53369605e-1,53734845e-1,1],["ne-10000.bin",53734845e-1,54100095e-1,1],["ne-10100.bin",54100095e-1,54465335e-1,1],["ne-10200.bin",54465335e-1,54830575e-1,1],["ne-10300.bin",54830575e-1,55195815e-1,1],["ne-10400.bin",55195815e-1,55561065e-1,1],["ne-10500.bin",55561065e-1,55926305e-1,1],["ne-10600.bin",55926305e-1,56291545e-1,1],["ne-10700.bin",56291545e-1,56656785e-1,1],["ne-10800.bin",56656785e-1,57022035e-1,1],["ne-10900.bin",57022035e-1,57387275e-1,1],["ne-11000.bin",57387275e-1,57752515e-1,1],["ne-11100.bin",57752515e-1,58117755e-1,1],["ne-11200.bin",58117755e-1,58483005e-1,1],["ne-11300.bin",58483005e-1,58848245e-1,1],["ne-11400.bin",58848245e-1,59213485e-1,1],["ne-11500.bin",59213485e-1,59578725e-1,1],["ne-11600.bin",59578725e-1,59943975e-1,1],["ne-11700.bin",59943975e-1,60309215e-1,1],["ne-11800.bin",60309215e-1,60674455e-1,1],["ne-11900.bin",60674455e-1,61039695e-1,1],["ne-12000.bin",61039695e-1,61404945e-1,1],["ne-12100.bin",61404945e-1,61770185e-1,1],["ne-12200.bin",61770185e-1,62135425e-1,1],["ne-12300.bin",62135425e-1,62500665e-1,1],["ne-12400.bin",62500665e-1,62865915e-1,1],["ne-12500.bin",62865915e-1,63231155e-1,1],["ne-12600.bin",63231155e-1,63596395e-1,1],["ne-12700.bin",63596395e-1,63961635e-1,1],["ne-12800.bin",63961635e-1,64326885e-1,1],["ne-12900.bin",64326885e-1,64692125e-1,1],["ne-13000.bin",64692125e-1,65057365e-1,1],["ne-13100.bin",65057365e-1,65422605e-1,1],["ne-13200.bin",65422605e-1,65787855e-1,1],["ne-13300.bin",65787855e-1,66153095e-1,1],["ne-13400.bin",66153095e-1,66518335e-1,1],["ne-13500.bin",66518335e-1,66883575e-1,1],["ne-13600.bin",66883575e-1,67248825e-1,1],["ne-13700.bin",67248825e-1,67614065e-1,1],["ne-13800.bin",67614065e-1,67979305e-1,1],["ne-13900.bin",67979305e-1,68344545e-1,1],["ne-14000.bin",68344545e-1,68709795e-1,1],["ne-14100.bin",68709795e-1,69075035e-1,1],["ne-14200.bin",69075035e-1,69440275e-1,1],["ne-14300.bin",69440275e-1,69805515e-1,1],["ne-14400.bin",69805515e-1,70170765e-1,1],["ne-14500.bin",70170765e-1,70536005e-1,1],["ne-14600.bin",70536005e-1,70901245e-1,1],["ne-14700.bin",70901245e-1,71266485e-1,1],["ne-14800.bin",71266485e-1,71631735e-1,1],["ne-14900.bin",71631735e-1,71996975e-1,1],["ne-15000.bin",71996975e-1,72362215e-1,1],["ne-15100.bin",72362215e-1,72727455e-1,1],["ne-15200.bin",72727455e-1,73092705e-1,1],["ne-15300.bin",73092705e-1,73457945e-1,1],["ne-15400.bin",73457945e-1,73823185e-1,1],["ne-15500.bin",73823185e-1,74188425e-1,1],["ne-15600.bin",74188425e-1,74553675e-1,1],["ne-15700.bin",74553675e-1,74918915e-1,1],["ne-15800.bin",74918915e-1,75284155e-1,1],["ne-15900.bin",75284155e-1,75649395e-1,1],["ne-16000.bin",75649395e-1,76014645e-1,1],["ne-16100.bin",76014645e-1,76379885e-1,1],["ne-16200.bin",76379885e-1,76745125e-1,1],["ne-16300.bin",76745125e-1,77110365e-1,1],["ne-16400.bin",77110365e-1,77475615e-1,1],["ne-16500.bin",77475615e-1,77840855e-1,1],["ne-16600.bin",77840855e-1,78206095e-1,1],["ne-16700.bin",78206095e-1,78571335e-1,1],["ne-16800.bin",78571335e-1,78936585e-1,1],["ne-16900.bin",78936585e-1,79301825e-1,1],["ne-17000.bin",79301825e-1,79667065e-1,1],["ne-17100.bin",79667065e-1,79990665e-1,1]],Cl=228682025e-2,Pl=91.3125,xh=[198.1631,197.6942,197.2255,196.757,196.2887,195.8207,195.3529,194.8853,194.4179,193.9508,193.4838,193.0172,192.5507,192.0845,191.6185,191.1528,190.6873,190.222,189.757,189.2922,188.8276,188.3633,187.8993,187.4355,186.972,186.5087,186.0456,185.5828,185.1203,184.658,184.196,183.7343,183.2728,182.8116,182.3506,181.8899,181.4295,180.9693,180.5095,180.0499,179.5905,179.1315,178.6727,178.2142,177.756,177.298,176.8404,176.383,175.9259,175.4691,175.0126,174.5564,174.1005,173.6449,173.1896,172.7345,172.2798,171.8254,171.3713,170.9174,170.4639,170.0107,169.5578,169.1052,168.6529,168.2009,167.7493,167.298,166.8469,166.3962,165.9458,165.4958,165.046,164.5966,164.1475,163.6988,163.2503,162.8022,162.3545,161.907,161.4599,161.0132,160.5668,160.1207,159.6749,159.2295,158.7845,158.3398,157.8954,157.4514,157.0078,156.5645,156.1215,155.6789,155.2367,154.7948,154.3533,153.9121,153.4713,153.0309,152.5908,152.1511,151.7118,151.2728,150.8342,150.396,149.9581,149.5207,149.0836,148.6469,148.2105,147.7746,147.339,146.9039,146.4691,146.0347,145.6007,145.1671,144.7338,144.301,143.8686,143.4365,143.0049,142.5737,142.1428,141.7124,141.2824,140.8528,140.4235,139.9947,139.5664,139.1384,138.7108,138.2837,137.857,137.4306,137.0048,136.5793,136.1543,135.7296,135.3054,134.8817,134.4584,134.0355,133.613,133.1909,132.7693,132.3482,131.9275,131.5072,131.0873,130.6679,130.249,129.8305,129.4124,128.9948,128.5777,128.161,127.7447,127.3289,126.9136,126.4987,126.0843,125.6703,125.2568,124.8438,124.4312,124.0191,123.6075,123.1963,122.7856,122.3754,121.9657,121.5564,121.1476,120.7393,120.3315,119.9242,119.5173,119.111,118.7051,118.2997,117.8948,117.4904,117.0865,116.683,116.2801,115.8777,115.4758,115.0743,114.6734,114.273,113.8731,113.4737,113.0748,112.6764,112.2785,111.8811,111.4843,111.0879,110.6921,110.2968,109.9021,109.5078,109.1141,108.7209,108.3282,107.936,107.5444,107.1533,106.7628,106.3728,105.9833,105.5944,105.206,104.8182,104.4309,104.0442,103.658,103.2724,102.8874,102.5029,102.119,101.7356,101.3528,100.9706,100.5889,100.2078,99.8274,99.4474,99.0681,98.6893,98.3112,97.9336,97.5566,97.1802,96.8044,96.4292,96.0546,95.6806,95.3072,94.9345,94.5623,94.1907,93.8198,93.4494,93.0797,92.7106,92.3421,91.9743,91.6071,91.2405,90.8745,90.5092,90.1445,89.7804,89.417,89.0543,88.6921,88.3307,87.9698,87.6097,87.2501,86.8913,86.5331,86.1755,85.8187,85.4624,85.1069,84.752,84.3978,84.0443,83.6914,83.3393,82.9878,82.637,82.2868,81.9374,81.5887,81.2406,80.8933,80.5466,80.2006,79.8554,79.5108,79.167,78.8239,78.4814,78.1397,77.7987,77.4584,77.1189,76.78,76.4419,76.1046,75.7679,75.432,75.0968,74.7623,74.4286,74.0956,73.7634,73.4319,73.1012,72.7712,72.4419,72.1134,71.7857,71.4587,71.1325,70.8071,70.4824,70.1585,69.8353,69.513,69.1914,68.8705,68.5505,68.2312,67.9127,67.595,67.2781,66.962,66.6467,66.3322,66.0184,65.7055,65.3934,65.082,64.7715,64.4618,64.1529,63.8448,63.5375,63.2311,62.9254,62.6206,62.3166,62.0135,61.7111,61.4096,61.1089,60.8091,60.5101,60.2119,59.9146,59.6181,59.3225,59.0277,58.7338,58.4407,58.1485,57.8572,57.5667,57.277,56.9883,56.7004,56.4133,56.1272,55.8419,55.5574,55.2739,54.9913,54.7095,54.4286,54.1486,53.8695,53.5913,53.314,53.0375,52.762,52.4874,52.2136,51.9408,51.6689,51.3979,51.1278,50.8587,50.5904,50.3231,50.0567,49.7912,49.5266,49.263,49.0003,48.7385,48.4776,48.2177,47.9588,47.7008,47.4437,47.1876,46.9324,46.6781,46.4249,46.1725,45.9212,45.6708,45.4213,45.1729,44.9253,44.6788,44.4332,44.1886,43.944,43.7014,43.4597,43.219,42.9793,42.7405,42.5027,42.2659,42.0301,41.7953,41.5614,41.3285,41.0965,40.8656,40.6356,40.4065,40.1785,39.9514,39.7253,39.5001,39.276,39.0527,38.8305,38.6092,38.3889,38.1695,37.9511,37.7337,37.5172,37.3017,37.0871,36.8736,36.6609,36.4493,36.2385,36.0288,35.82,35.6122,35.4053,35.1994,34.9944,34.7904,34.5873,34.3852,34.184,33.9838,33.7846,33.5863,33.3889,33.1925,32.9971,32.8026,32.609,32.4164,32.2248,32.0341,31.8443,31.6555,31.4676,31.2807,31.0947,30.9096,30.7255,30.5424,30.3601,30.1789,29.9985,29.8191,29.6406,29.4631,29.2865,29.1109,28.9362,28.7624,28.5896,28.4177,28.2467,28.0767,27.9075,27.7394,27.5721,27.4058,27.2404,27.076,26.9125,26.7499,26.5882,26.4275,26.2677,26.1088,25.9509,25.7938,25.6377,25.4826,25.3283,25.175,25.0226,24.8711,24.7205,24.5709,24.4221,24.2743,24.1275,23.9815,23.8364,23.6923,23.5491,23.4068,23.2654,23.125,22.9854,22.8468,22.709,22.5722,22.4363,22.3013,22.1673,22.0341,21.9018,21.7705,21.6401,21.5105,21.3819,21.2542,21.1274,21.0015,20.8765,20.7524,20.6292,20.5069,20.3855,20.265,20.1454,20.0268,19.909,19.7921,19.6761,19.5611,19.4469,19.3336,19.2212,19.1097,18.9991,18.8894,18.7806,18.6727,18.5657,18.4596,18.3543,18.25,18.1465,18.044,17.9423,17.8415,17.7416,17.6426,17.5445,17.4473,17.351,17.2555,17.1609,17.0672,16.9744,16.8825,16.7915,16.7013,16.6121,16.5237,16.4362,16.3496,16.2638,16.1789,16.095,16.0118,15.9296,15.8483,15.7678,15.6882,15.6094,15.5316,15.4546,15.3785,15.3033,15.2289,15.1554,15.0828,15.011,14.9401,14.8701,14.801,14.7327,14.6653,14.5988,14.5331,14.4683,14.4043,14.3413,14.279,14.2177,14.1572,14.0976,14.0388,13.9809,13.9238,13.8677,13.8123,13.7579,13.7043,13.6515,13.5996,13.5486,13.4984,13.4491,13.4006,13.353,13.3062,13.2603,13.2152,13.171,13.1277,13.0852,13.0435,13.0027,12.9627,12.9236,12.8854,12.8479,12.8114,12.7757,12.7408,12.7067,12.6736,12.6412,12.6097,12.579,12.5492,12.5202,12.4921,12.4648,12.4384,12.4127,12.388,12.364,12.3409,12.3186,12.2972,12.2766,12.2569,12.2379,12.2198,12.2026,12.1861,12.1705,12.1558,12.1418,12.1287,12.1165,12.105,12.0944,12.0846,12.0757,12.0675,12.0602,12.0537,12.0481,12.0432,12.0392,12.036,12.0337,12.0321,12.0314,12.0315,12.0324,12.0342,12.0367,12.0401,12.0443,12.0493,12.0551,12.0618,12.0683,12.0765,12.0856,12.0955,12.1061,12.1176,12.1298,12.1429,12.1566,12.1712,12.1865,12.2025,12.2193,12.2368,12.255,12.2739,12.2936,12.314,12.335,12.3568,12.3792,12.4023,12.4261,12.4505,12.4756,12.5013,12.5277,12.5547,12.5824,12.6106,12.6395,12.669,12.6991,12.7297,12.761,12.7928,12.8253,12.8582,12.8918,12.9258,12.9605,12.9956,13.0313,13.0675,13.1043,13.1415,13.1793,13.2175,13.2562,13.2954,13.3351,13.3753,13.4159,13.457,13.4985,13.5404,13.5828,13.6256,13.6688,13.7125,13.7565,13.801,13.8458,13.891,13.9366,13.9826,14.0289,14.0756,14.1227,14.17,14.2177,14.2658,14.3142,14.3628,14.4118,14.4611,14.5107,14.5606,14.6107,14.6611,14.7118,14.7628,14.814,14.8654,14.9171,14.969,15.0211,15.0735,15.126,15.1788,15.2318,15.2849,15.3383,15.3918,15.4455,15.4993,15.5533,15.6075,15.6617,15.7162,15.7707,15.8254,15.8802,15.9351,15.99,16.0451,16.1003,16.1555,16.2109,16.2662,16.3217,16.3772,16.4327,16.4883,16.5439,16.5995,16.6551,16.7108,16.7664,16.8221,16.8777,16.9333,16.9889,17.0444,17.1,17.1554,17.2108,17.2662,17.3215,17.3767,17.4318,17.4869,17.5418,17.5967,17.6514,17.706,17.7605,17.8149,17.8691,17.9232,17.9771,18.0309,18.0845,18.138,18.1912,18.2443,18.2972,18.3499,18.4024,18.4546,18.5067,18.5585,18.6101,18.6614,18.7125,18.7634,18.8139,18.8642,18.9143,18.964,19.0135,19.0627,19.1115,19.1601,19.2083,19.2562,19.3038,19.351,19.3979,19.4445,19.4906,19.5365,19.5819,19.627,19.6716,19.7159,19.7598,19.8033,19.8463,19.889,19.9312,19.973,20.0143,20.0552,20.0956,20.1356,20.175,20.2141,20.2526,20.2906,20.3282,20.3652,20.4017,20.4377,20.4732,20.5082,20.5426,20.5764,20.6097,20.6425,20.6746,20.7062,20.7373,20.7677,20.7975,20.8268,20.8554,20.8834,20.9108,20.9375,20.9637,20.9891,21.014,21.0381,21.0616,21.0845,21.1066,21.1281,21.1488,21.1689,21.1883,21.2069,21.2249,21.2421,21.2585,21.2743,21.2893,21.3035,21.3169,21.3296,21.3416,21.3527,21.363,21.3726,21.3813,21.3893,21.3964,21.4027,21.4081,21.4128,21.4165,21.4195,21.4215,21.4227,21.423,21.4225,21.421,21.4187,21.4155,21.4113,21.4063,21.4003,21.3934,21.3855,21.3767,21.367,21.3563,21.3446,21.332,21.3184,21.3038,21.2882,21.2717,21.2541,21.2355,21.2159,21.1952,21.1735,21.1508,21.127,21.1022,21.0764,21.0494,21.0214,20.9923,20.9621,20.9308,20.8984,20.8649,20.8303,20.7946,20.7577,20.7197,20.6805,20.6402,20.5988,20.5562,20.5124,20.4674,20.4212,20.3739,20.3253,20.2756,20.2246,20.1724,20.119,20.0643,20.0084,19.9513,19.8929,19.8332,19.7723,19.7101,19.6466,19.5818,19.5157,19.4483,19.3796,19.3096,19.2383,19.1656,19.0916,19.0162,18.9395,18.8615,18.782,18.7012,18.619,18.5355,18.4505,18.3641,18.2764,18.1874,18.0974,18.0066,17.915,17.823,17.7306,17.6381,17.5456,17.4533,17.3614,17.2702,17.1796,17.09,17.0015,16.9143,16.8286,16.7446,16.6624,16.5821,16.5041,16.4285,16.3554,16.2851,16.2176,16.1533,16.0922,16.0346,15.9806,15.9304,15.8843,15.8423,15.8046,15.7715,15.7431,15.7196,15.7011,15.6879,15.6802,15.678,15.6816,15.6905,15.7045,15.7233,15.7463,15.7734,15.8041,15.838,15.8749,15.9143,15.956,15.9994,16.0444,16.0905,16.1374,16.1846,16.232,16.279,16.3254,16.3707,16.4147,16.457,16.4971,16.5348,16.5698,16.6015,16.6298,16.6541,16.6743,16.6898,16.7004,16.7057,16.7053,16.6989,16.6862,16.6667,16.6401,16.6061,16.5642,16.5142,16.4558,16.3892,16.3147,16.2327,16.1433,16.047,15.944,15.8347,15.7193,15.5981,15.4715,15.3397,15.2031,15.062,14.9166,14.7673,14.6144,14.4581,14.2989,14.1369,13.9725,13.8061,13.6378,13.468,13.2971,13.1253,12.9529,12.7802,12.6076,12.4353,12.2637,12.093,11.9235,11.7556,11.5896,11.4257,11.2644,11.1057,10.9502,10.7991,10.6506,10.5057,10.3646,10.2271,10.0932,9.963,9.8364,9.7134,9.594,9.4783,9.3661,9.2575,9.1524,9.0509,8.953,8.8587,8.7678,8.6805,8.5967,8.5164,8.4396,8.3663,8.2965,8.2302,8.1673,8.1079,8.0519,7.9994,7.9502,7.9046,7.8623,7.8234,7.7879,7.7558,7.727,7.7017,7.6797,7.661,7.6457,7.6337,7.625,7.6197,7.6175,7.6185,7.6227,7.6299,7.6401,7.6533,7.6694,7.6884,7.7102,7.7347,7.762,7.7919,7.8245,7.8596,7.8972,7.9373,7.9798,8.0246,8.0718,8.1212,8.1729,8.2267,8.2826,8.3405,8.4005,8.4624,8.5262,8.5919,8.6594,8.7287,8.7996,8.8722,8.9464,9.0222,9.0994,9.1781,9.2582,9.3407,9.4234,9.5067,9.5899,9.6725,9.7537,9.8328,9.9093,9.9824,10.0515,10.1159,10.175,10.2281,10.2745,10.3136,10.3447,10.3671,10.3803,10.3834,10.376,10.3562,10.3257,10.2846,10.2338,10.1746,10.1082,10.0358,9.9584,9.8774,9.7937,9.7087,9.6234,9.5391,9.457,9.3781,9.3036,9.2348,9.1727,9.1187,9.0737,9.039,9.0152,9.0009,8.9943,8.9934,8.9964,9.0016,9.0069,9.0106,9.0108,9.0056,8.9932,8.9717,8.9393,8.8941,8.8343,8.7579,8.6632,8.5483,8.4113,8.2493,8.0632,7.8534,7.622,7.3711,7.1027,6.8188,6.5214,6.2127,5.8946,5.5692,5.2385,4.9046,4.5695,4.2353,3.9039,3.5775,3.258,2.9476,2.6481,2.3618,2.0901,1.8327,1.5889,1.3581,1.1397,.9328,.7368,.5511,.3749,.2076,.0485,-.1031,-.248,-.3867,-.52,-.6485,-.7729,-.894,-1.0124,-1.1298,-1.2448,-1.3585,-1.4709,-1.582,-1.6919,-1.8006,-1.9081,-2.0145,-2.1198,-2.224,-2.3272,-2.4293,-2.5305,-2.6306,-2.7299,-2.8282,-2.9257,-3.0223,-3.1181,-3.2131,-3.3073,-3.4002,-3.4916,-3.5809,-3.6678,-3.7517,-3.8324,-3.9093,-3.9821,-4.0503,-4.1135,-4.1713,-4.2232,-4.2689,-4.3079,-4.3398,-4.3642,-4.3806,-4.3886,-4.3878,-4.3781,-4.3602,-4.3353,-4.3045,-4.2689,-4.2294,-4.1872,-4.1435,-4.0991,-4.0553,-4.0131,-3.9736,-3.9379,-3.907,-3.8821,-3.8641,-3.8542,-3.8535,-3.863,-3.8849,-3.9178,-3.9616,-4.0149,-4.0763,-4.1445,-4.2179,-4.2953,-4.3751,-4.4561,-4.5368,-4.6157,-4.6915,-4.7628,-4.8282,-4.8863,-4.9357,-4.9749,-5.0026,-5.0174,-5.0168,-5.0017,-4.9712,-4.9253,-4.8643,-4.7883,-4.6974,-4.5919,-4.472,-4.3378,-4.1894,-4.0271,-3.851,-3.6614,-3.4583,-3.2419,-3.0125,-2.7702,-2.5152,-2.2476,-1.9676,-1.6755,-1.3722,-1.0586,-.7356,-.4042,-.0653,.2801,.631,.9867,1.346,1.7081,2.0719,2.4367,2.8014,3.1651,3.5268,3.8856,4.2406,4.5908,4.9342,5.2722,5.604,5.9304,6.2517,6.5685,6.8815,7.191,7.4977,7.8021,8.1047,8.4061,8.7068,9.0073,9.3082,9.6101,9.9135,10.2188,10.5268,10.8378,11.1524,11.471,11.7931,12.1181,12.4454,12.7744,13.1044,13.4348,13.765,14.0944,14.4224,14.7483,15.0715,15.3915,15.7075,16.019,16.3254,16.626,16.9202,17.2075,17.4881,17.7596,18.0232,18.2789,18.527,18.7677,19.0012,19.2276,19.4472,19.6602,19.8667,20.067,20.2612,20.4496,20.6323,20.8096,20.9816,21.1485,21.3106,21.468,21.622,21.7707,21.9151,22.0553,22.1912,22.3229,22.4503,22.5735,22.6924,22.8071,22.9176,23.0238,23.1259,23.2237,23.3173,23.4067,23.492,23.573,23.6499,23.7226,23.7912,23.8556,23.916,23.9725,24.025,24.0738,24.119,24.1605,24.1986,24.2332,24.2646,24.2928,24.3178,24.3399,24.3591,24.3754,24.389,24.4,24.4084,24.4144,24.4181,24.4195,24.4188,24.4161,24.4114,24.4049,24.3967,24.3869,24.3757,24.363,24.349,24.3339,24.3177,24.3005,24.2825,24.2637,24.2443,24.2243,24.204,24.1832,24.1633,24.1424,24.1219,24.1024,24.0844,24.0684,24.0549,24.0445,24.0376,24.0349,24.0369,24.044,24.0568,24.0759,24.1017,24.1347,24.1756,24.2248,24.2829,24.3503,24.4287,24.5164,24.6136,24.7196,24.8335,24.9544,25.0816,25.2143,25.3516,25.4926,25.6365,25.7826,25.9299,26.0777,26.2251,26.3713,26.5155,26.6568,26.7943,26.9274,27.0541,27.1759,27.2919,27.4028,27.5088,27.6106,27.7086,27.8031,27.8947,27.9839,28.0711,28.1567,28.2413,28.3252,28.409,28.4931,28.5779,28.664,28.7517,28.8416,28.9351,29.0305,29.1279,29.2264,29.3251,29.4229,29.519,29.6123,29.7019,29.7868,29.8661,29.9389,30.004,30.0613,30.1124,30.1595,30.2047,30.2504,30.2985,30.3514,30.4113,30.4803,30.5606,30.6544,30.7639,30.8903,31.0316,31.1851,31.348,31.5175,31.6909,31.8653,32.038,32.2062,32.3672,32.5182,32.6563,32.7798,32.8896,32.9875,33.0753,33.1547,33.2274,33.2953,33.3601,33.4235,33.4874,33.5534,33.6234,33.6988,33.7807,33.8695,33.9661,34.0711,34.1853,34.3092,34.4437,34.5893,34.7468,34.9169,35.0992,35.296,35.5051,35.7253,35.955,36.1929,36.4374,36.6871,36.9407,37.1967,37.4535,37.7099,37.9643,38.2156,38.4642,38.7109,38.9563,39.2012,39.4463,39.6923,39.9398,40.1896,40.4424,40.6988,40.9606,41.2539,41.5515,41.8525,42.1562,42.4617,42.7683,43.0751,43.3805,43.6897,43.9684,44.2077,44.4924,44.7542,45.0061,45.2173,45.4865,45.7503,45.9911,46.1968,46.466,46.7418,47.0077,47.2478,47.5281,47.793,48.0438,48.2559,48.5447,48.8518,49.109,49.3194,49.5971,49.8684,50.1126,50.3093,50.5465,50.776,50.9842,51.1614,51.3869,51.6105,51.8185,51.968,52.1743,52.3789,52.5809,52.7445,52.9652,53.2319,53.4415,53.5941,53.7937,53.9522,54.0897,54.1961,54.3474,54.4987,54.6375,54.7229,54.876,55.0055,55.1155,55.1982,55.3271,55.4689,55.5861,55.6727,55.8236,55.9747,56.0968,56.1641,56.3034,56.4359,56.5714,56.6791,56.8618,57.0563,57.2282,57.3749,57.5728,57.7806,57.9647,58.1136,58.3154,58.5514,58.7476,58.9048,59.1291,59.3695,59.5912,59.7669,59.9928,60.2147,60.4058,60.5682,60.7946,61.0394,61.2535,61.4139,61.6346,61.8226,62.0023,62.1259,62.3005,62.4863,62.6598,62.8001,62.9711,63.1542,63.2866,63.3481,63.4702,63.5739,63.6651,63.718,63.831,63.9118,63.9804,64.011,64.093,64.1618,64.2112,64.2254,64.3029,64.3758,64.4149,64.4182,64.4745,64.531,64.5486,64.5418,64.5746,64.6221,64.6503,64.6406,64.6896,64.7591,64.7961,64.7947,64.8466,64.9208,64.9938,65.0423,65.1483,65.2562,65.3439,65.3735,65.4603,65.5508,65.6299,65.6785,65.7803,65.8635,65.95,65.9886,66.0726,66.1722,66.2407,66.2474,66.3252,66.4019,66.4755,66.5097,66.6068,66.6986,66.7701,66.813,66.9098,67.0324,67.1263,67.1761,67.2848,67.3946,67.4881,67.5392,67.6465,67.7649,67.8648,67.9602,68.1092,68.2739,68.3994,68.4673,68.5961,68.7193,68.8262,68.8718,68.9699,69.0546,69.1117,69.1384,69.2224,69.3085,69.356,69.3372,69.3628,69.4112,69.4201,69.3569,69.3584,69.3584,69.3478,69.2881,69.2939,69.2839,69.2478,69.1873,69.2034,69.2102,69.216,69.1718,69.1765,69.1976,69.1827,69.1253,69.138,69.1468,69.138,69.0907,69.1095,69.1359,69.1702,69.2089,69.3102,69.3908,69.4022,69.3727,69.4141,69.4561,69.4988,69.542,69.5859,69.6304,69.6755,69.7213,69.7676,69.8146,69.8622,69.9104,69.9593,70.0087,70.0588,70.1095,70.1608,70.2127,70.2652,70.3184,70.3721,70.4265,70.4815,70.5372,70.5934,70.6503,70.7077,70.7658,70.8245,70.8839,70.9438,71.0043,71.0655,71.1273,71.1897,71.2527,71.3164,71.3806,71.4455,71.511,71.5771,71.6438,71.7111,71.7791,71.8476,71.9168,71.9866,72.057,72.1281,72.1997,72.272,72.3448,72.4183,72.4924,72.5671,72.6424,72.7184,72.7949,72.8721,72.9499,73.0283,73.1073,73.1869,73.2672,73.348,73.4295,73.5116,73.5943,73.6776,73.7615,73.8461,73.9312,74.017,74.1034,74.1904,74.278,74.3662,74.455,74.5445,74.6345,74.7252,74.8165,74.9084,75.0009,75.094,75.1877,75.2821,75.377,75.4726,75.5688,75.6656,75.763,75.861,75.9596,76.0588,76.1587,76.2591,76.3602,76.4619,76.5642,76.6671,76.7706,76.8747,76.9795,77.0848,77.1908,77.2974,77.4046,77.5123,77.6207,77.7298,77.8394,77.9496,78.0605,78.1719,78.284,78.3967,78.5099,78.6238,78.7383,78.8534,78.9692,79.0855,79.2024,79.32,79.4381,79.5569,79.6763,79.7963,79.9169,80.0381,80.1599,80.2823,80.4053,80.529,80.6532,80.7781,80.9036,81.0296,81.1563,81.2836,81.4115,81.54,81.6691,81.7988,81.9292,82.0601,82.1916,82.3238,82.4565,82.5899,82.7239,82.8584,82.9936,83.1294,83.2658,83.4028,83.5404,83.6787,83.8175,83.9569,84.097,84.2376,84.3789,84.5207,84.6632,84.8063,84.9499,85.0942,85.2391,85.3846,85.5307,85.6774,85.8247,85.9726,86.1211,86.2703,86.42,86.5703,86.7213,86.8728,87.025,87.1777,87.3311,87.4851,87.6396,87.7948,87.9506,88.107,88.264,88.4216,88.5798,88.7386,88.898,89.058,89.2186,89.3798,89.5416,89.704,89.8671,90.0307,90.1949,90.3598,90.5252,90.6912,90.8579,91.0251,91.193,91.3614,91.5305,91.7002,91.8704,92.0413,92.2128,92.3848,92.5575,92.7308,92.9046,93.0791,93.2542,93.4299,93.6062,93.7831,93.9605,94.1386,94.3173,94.4966,94.6765,94.857,95.0381,95.2198,95.4021,95.585,95.7685,95.9526,96.1373,96.3226,96.5085,96.695,96.8821,97.0698,97.2581,97.447,97.6365,97.8266,98.0173,98.2086,98.4005,98.593,98.7861,98.9798,99.1741,99.369,99.5645,99.7606,99.9573,100.1546,100.3525,100.551,100.7501,100.9498,101.1501,101.351,101.5525,101.7546,101.9572,102.1605,102.3644,102.5689,102.774,102.9796,103.1859,103.3928,103.6003,103.8083,104.017,104.2263,104.4361,104.6466,104.8576,105.0693,105.2815,105.4944,105.7078,105.9219,106.1365,106.3517,106.5676,106.784,107.001,107.2186,107.4369,107.6557,107.8751,108.0951,108.3157,108.5369,108.7587,108.9811,109.2041,109.4276,109.6518,109.8766,110.102,110.3279,110.5545,110.7816,111.0094,111.2377,111.4667,111.6962,111.9263,112.1571,112.3884,112.6203,112.8528,113.0859,113.3196,113.5539,113.7888,114.0242,114.2603,114.497,114.7342,114.9721,115.2106,115.4496,115.6892,115.9295,116.1703,116.4117,116.6537,116.8963,117.1395,117.3833,117.6277,117.8727,118.1182,118.3644,118.6111,118.8585,119.1064,119.3549,119.6041,119.8538,120.1041,120.355,120.6065,120.8586,121.1112,121.3645,121.6184,121.8728,122.1279,122.3835,122.6397,122.8965,123.1539,123.4119,123.6705,123.9297,124.1895,124.4499,124.7108,124.9724,125.2345,125.4972,125.7605,126.0244,126.2889,126.554,126.8197,127.086,127.3528,127.6203,127.8883,128.1569,128.4262,128.696,128.9664,129.2374,129.5089,129.7811,130.0539,130.3272,130.6011,130.8756,131.1508,131.4265,131.7027,131.9796,132.2571,132.5351,132.8138,133.093,133.3728,133.6533,133.9342,134.2158,134.498,134.7808,135.0641,135.348,135.6326,135.9177,136.2034,136.4897,136.7765,137.064,137.3521,137.6407,137.9299,138.2197,138.5101,138.8011,139.0927,139.3848,139.6776,139.9709,140.2648,140.5593,140.8544,141.1501,141.4464,141.7432,142.0406,142.3387,142.6373,142.9365,143.2362,143.5366,143.8376,144.1391,144.4412,144.7439,145.0472,145.3511,145.6555,145.9606,146.2662,146.5724,146.8792,147.1866,147.4946,147.8032,148.1123,148.422,148.7323,149.0432,149.3547,149.6668,149.9794,150.2926,150.6064,150.9208,151.2358,151.5514,151.8675,152.1843,152.5016,152.8195,153.138,153.457,153.7767,154.0969,154.4177,154.7391,155.0611,155.3836,155.7068,156.0305,156.3548,156.6797,157.0052,157.3312,157.6579,157.9851,158.3129,158.6413,158.9703,159.2998,159.6299,159.9607,160.2919,160.6238,160.9563,161.2893,161.6229,161.9571,162.2919,162.6273,162.9632,163.2997,163.6368,163.9745,164.3128,164.6516,164.9911,165.3311,165.6717,166.0128,166.3546,166.6969,167.0398,167.3833,167.7274,168.072,168.4173,168.7631,169.1094,169.4564,169.804,170.1521,170.5008,170.8501,171.1999,171.5504,171.9014,172.253,172.6052,172.9579,173.3113,173.6652,174.0197,174.3747,174.7304,175.0866,175.4434,175.8008,176.1588,176.5173,176.8764,177.2361,177.5964,177.9572,178.3187,178.6807,179.0433,179.4064,179.7702,180.1345,180.4994,180.8648,181.2309,181.5975,181.9647,182.3325,182.7008,183.0698,183.4393,183.8093,184.18,184.5512,184.9231,185.2954,185.6684,186.0419,186.4161,186.7907,187.166,187.5419,187.9183,188.2953,188.6728,189.051,189.4297,189.809,190.1889,190.5693,190.9503,191.3319,191.7141,192.0968,192.4801,192.864,193.2485,193.6335,194.0192,194.4054,194.7921,195.1795,195.5674,195.9559,196.3449,196.7345,197.1248,197.5155,197.9069,198.2988,198.6913,199.0844,199.478,199.8723,200.2671,200.6624,201.0584,201.4549,201.852,202.2496,202.6478,203.0466,203.446,203.846,204.2465,204.6476,205.0493,205.4515,205.8543,206.2577,206.6616,207.0662,207.4713,207.8769,208.2832,208.69,209.0973,209.5053,209.9138,210.3229,210.7326,211.1428,211.5536,211.965,212.377,212.7895,213.2026,213.6162,214.0305,214.4453,214.8606,215.2766,215.6931,216.1102,216.5278,216.9461,217.3649,217.7842,218.2042,218.6247,219.0457,219.4674,219.8896,220.3124,220.7357,221.1596,221.5841,222.0092,222.4348,222.861,223.2878,223.7151,224.143,224.5715,225.0005,225.4301,225.8603,226.291,226.7223,227.1542,227.5866,228.0197,228.4532,228.8874,229.3221,229.7574,230.1932,230.6297,231.0666,231.5042,231.9423,232.381,232.8203,233.2601,233.7005,234.1414,234.583,235.025,235.4677,235.9109,236.3547,236.7991,237.244,237.6895,238.1355,238.5822,239.0293,239.4771,239.9254,240.3743,240.8237,241.2738,241.7243,242.1755,242.6272,243.0795,243.5323,243.9857,244.4397,244.8942,245.3493,245.805,246.2612,246.718,247.1754,247.6333,248.0918,248.5509,249.0105,249.4707,249.9314,250.3927,250.8546,251.317,251.78,252.2436,252.7077,253.1724,253.6377,254.1035,254.5699,255.0368,255.5043,255.9724,256.441,256.9102,257.38,257.8503,258.3212,258.7927,259.2647,259.7372,260.2104,260.6841,261.1583,261.6332,262.1086,262.5845,263.061,263.5381,264.0157,264.4939,264.9727,265.452,265.9319,266.4123,266.8933,267.3749,267.857,268.3397,268.8229,269.3067,269.7911,270.276,270.7615,271.2476,271.7342,272.2214,272.7091,273.1974,273.6863,274.1757,274.6656,275.1562,275.6473,276.1389,276.6311,277.1239,277.6172,278.1111,278.6056,279.1006,279.5962,280.0923,280.589,281.0862,281.584,282.0824,282.5813,283.0808,283.5809,284.0815,284.5826,285.0843,285.5866,286.0894,286.5928,287.0968,287.6013,288.1064,288.612,289.1182,289.6249,290.1322,290.6401,291.1485,291.6575,292.167,292.6771,293.1877,293.6989,294.2107,294.723,295.2359,295.7493,296.2633,296.7778,297.2929,297.8086,298.3248,298.8416,299.3589,299.8768,300.3952,300.9142,301.4337,301.9538,302.4745,302.9957,303.5175,304.0398,304.5627,305.0861,305.6101,306.1347,306.6598,307.1854,307.7117,308.2384,308.7658,309.2936,309.8221,310.3511,310.8806,311.4107,311.9413,312.4726,313.0043,313.5366,314.0695,314.6029,315.1369,315.6714,316.2065,316.7422,317.2784,317.8151,318.3524,318.8903,319.4287,319.9676,320.5071,321.0472,321.5878,322.129,322.6707,323.213,323.7558,324.2992,324.8432,325.3876,325.9327,326.4783,327.0244,327.5711,328.1184,328.6662,329.2145,329.7634,330.3129,330.8629,331.4135,331.9646,332.5162,333.0685,333.6212,334.1745,334.7284,335.2828,335.8378,336.3933,336.9494,337.506,338.0632,338.6209,339.1792,339.738,340.2974,340.8573,341.4178,341.9789,342.5404,343.1026,343.6652,344.2285,344.7923,345.3566,345.9215,346.4869,347.0529,347.6194,348.1865,348.7541,349.3223,349.891,350.4603,351.0301,351.6005,352.1714,352.7429,353.3149,353.8874,354.4606,355.0342,355.6084,356.1832,356.7585,357.3343,357.9108,358.4877,359.0652,359.6433,360.2218,360.801,361.3807,361.9609,362.5417,363.123,363.7049,364.2873,364.8703,365.4538,366.0379,366.6225,367.2077,367.7934,368.3797,368.9665,369.5538,370.1417,370.7301,371.3191,371.9087,372.4987,373.0894,373.6805,374.2723,374.8645,375.4573,376.0507,376.6446,377.239,377.834,378.4296,379.0256,379.6223,380.2194,380.8172,381.4154,382.0142,382.6136,383.2135,383.8139,384.4149,385.0164,385.6185,386.2211,386.8243,387.428,388.0323,388.6371,389.2424,389.8483,390.4547,391.0617,391.6692,392.2773,392.8859,393.495,394.1047,394.7149,395.3257,395.937,396.5489,397.1613,397.7742,398.3877,399.0018,399.6163,400.2315,400.8471,401.4633,402.0801,402.6974,403.3152,403.9336,404.5525,405.1719,405.7919,406.4125,407.0336,407.6552,408.2773,408.9,409.5233,410.1471,410.7714,411.3963,412.0217,412.6477,413.2742,413.9012,414.5288,415.1569,415.7855,416.4147,417.0445,417.6748,418.3056,418.9369,419.5688,420.2013,420.8343,421.4678,422.1018,422.7364,423.3716,424.0073,424.6435,425.2802,425.9175,426.5554,427.1937,427.8327,428.4721,429.1121,429.7526,430.3937,431.0353,431.6775,432.3202,432.9634,433.6071,434.2514,434.8963,435.5417,436.1876,436.834,437.481,438.1286,438.7766,439.4252,440.0744,440.7241,441.3743,442.025,442.6763,443.3282,443.9805,444.6335,445.2869,445.9409,446.5954,447.2505,447.906,448.5622,449.2188,449.876,450.5338,451.1921,451.8509,452.5102,453.1701,453.8305,454.4915,455.153,455.815,456.4775,457.1406,457.8043,458.4684,459.1332,459.7984,460.4642,461.1305,461.7973,462.4647,463.1326,463.8011,464.4701,465.1396,465.8096,466.4802,467.1514,467.823,468.4952,469.1679,469.8412,470.515,471.1893,471.8642,472.5396,473.2155,473.892,474.569,475.2465,475.9246,476.6032,477.2823,477.962,478.6422,479.3229,480.0042,480.686,481.3683,482.0512,482.7346,483.4185,484.103,484.788,485.4735,486.1596,486.8461,487.5333,488.2209,488.9091,489.5978,490.2871,490.9769,491.6672,492.358,493.0494,493.7413,494.4338,495.1268,495.8203,496.5143,497.2089,497.904,498.5996,499.2958,499.9924,500.6897,501.3874,502.0857,502.7845,503.4839,504.1837,504.8842,505.5851,506.2866,506.9885,507.6911,508.3941,509.0977,509.8018,510.5065,511.2117,511.9174,512.6236,513.3304,514.0376,514.7455,515.4538,516.1627,516.8721,517.582,518.2925,519.0035,519.715,520.4271,521.1397,521.8528,522.5664,523.2806,523.9953,524.7105,525.4262,526.1425,526.8593,527.5767,528.2945,529.0129,529.7318,530.4513,531.1713,531.8918,532.6128,533.3343,534.0564,534.779,535.5022,536.2258,536.95,537.6747,538.4,539.1257,539.852,540.5789,541.3062,542.0341,542.7625,543.4914,544.2209,544.9508,545.6813,546.4124,547.1439,547.876,548.6086,549.3418,550.0754,550.8096,551.5443,552.2795,553.0153,553.7516,554.4884,555.2257,555.9636,556.702,557.4409,558.1803,558.9203,559.6608,560.4018,561.1433,561.8854,562.6279,563.371,564.1147,564.8588,565.6035,566.3487,567.0944,567.8407,568.5874,569.3347,570.0825,570.8309,571.5797,572.3291,573.079,573.8295,574.5804,575.3319,576.0839,576.8364,577.5895,578.343,579.0971,579.8517,580.6069,581.3625,582.1187,582.8754,583.6326,584.3904,585.1487,585.9074,586.6668,587.4266,588.1869,588.9478,589.7092,590.4711,591.2336,591.9965,592.76,593.524,594.2885,595.0536,595.8191,596.5852,597.3518,598.119,598.8866,599.6548,600.4235,601.1927,601.9624,602.7326,603.5034,604.2747,605.0465,605.8188,606.5917,607.365,608.1389,608.9133,609.6883,610.4637,611.2397,612.0161,612.7931,613.5707,614.3487,615.1273,615.9063,616.6859,617.466,618.2467,619.0278,619.8095,620.5917,621.3744,622.1576,622.9413,623.7256,624.5104,625.2957,626.0815,626.8678,627.6547,628.442,629.2299,630.0183,630.8072,631.5967,632.3866,633.1771,633.9681,634.7596,635.5516,636.3441,637.1372,637.9307,638.7248,639.5194,640.3145,641.1102,641.9063,642.703,643.5002,644.2979,645.0961,645.8948,646.6941,647.4938,648.2941,649.0949,649.8962,650.698,651.5004,652.3032,653.1066,653.9105,654.7149,655.5198,656.3252,657.1312,657.9376,658.7446,659.5521,660.3601,661.1686,661.9776,662.7872,663.5972,664.4078,665.2189,666.0305,666.8426,667.6552,668.4684,669.282,670.0962,670.9109,671.7261,672.5418,673.358,674.1747,674.992,675.8097,676.628,677.4468,678.2661,679.0859,679.9062,680.727,681.5484,682.3703,683.1926,684.0155,684.8389,685.6628,686.4872,687.3122,688.1376,688.9636,689.79,690.617,691.4445,692.2725,693.101,693.9301,694.7596,695.5896,696.4202,697.2513,698.0828,698.9149,699.7475,700.5806,701.4143,702.2484,703.083,703.9182,704.7539,705.59,706.4267,707.2639,708.1016,708.9398,709.7785,710.6178,711.4575,712.2978,713.1385,713.9798,714.8216,715.6639,716.5067,717.35,718.1938,719.0381,719.883,720.7283,721.5742,722.4205,723.2674,724.1148,724.9626,725.811,726.6599,727.5094,728.3593,729.2097,730.0606,730.9121,731.764,732.6165,733.4694,734.3229,735.1769,736.0314,736.8864,737.7419,738.5979,739.4544,740.3114,741.169,742.027,742.8855,743.7446,744.6041,745.4642,746.3248,747.1859,748.0474,748.9095,749.7721,750.6352,751.4988,752.3629,753.2276,754.0927,754.9583,755.8245,756.6911,757.5582,758.4259,759.294,760.1627,761.0319,761.9016,762.7717,763.6424,764.5136,765.3853,766.2575,767.1302,768.0034,768.8771,769.7513,770.626,771.5013,772.377,773.2532,774.13,775.0072,775.8849,776.7632,777.6419,778.5212,779.4009,780.2812,781.162,782.0432,782.925,783.8073,784.6901,785.5733,786.4571,787.3414,788.2262,789.1115,789.9973,790.8836,791.7704,792.6577,793.5455,794.4338,795.3226,796.2119,797.1017,797.992,798.8828,799.7742,800.666,801.5583,802.4511,803.3444,804.2383,805.1326,806.0274,806.9227,807.8186,808.7149,809.6117,810.5091,811.4069,812.3052,813.2041,814.1034,815.0032,815.9036,816.8044,817.7057,818.6076,819.5099,820.4127,821.3161,822.2199,823.1242,824.0291,824.9344,825.8402,826.7466,827.6534,828.5607,829.4686,830.3769,831.2857,832.1951,833.1049,834.0152,834.926,835.8374,836.7492,837.6615,838.5743,839.4876,840.4014,841.3158,842.2306,843.1459,844.0617,844.978,845.8948,846.8121,847.7299,848.6482,849.567,850.4863,851.4061,852.3263,853.2471,854.1684,855.0902,856.0125,856.9352,857.8585,858.7823,859.7065,860.6313,861.5565,862.4823,863.4085,864.3353,865.2625,866.1902,867.1185,868.0472,868.9764,869.9061,870.8363,871.7671,872.6983,873.63,874.5622,875.4948,876.428,877.3617,878.2959,879.2306,880.1657,881.1014,882.0375,882.9742,883.9113,884.849,885.7871,886.7257,887.6649,888.6045,889.5446,890.4852,891.4263,892.3679,893.31,894.2526,895.1956,896.1392,897.0833,898.0278,898.9729,899.9184,900.8645,901.811,902.758,903.7055,904.6535,905.602,906.551,907.5005,908.4505,909.401,910.3519,911.3034,912.2553,913.2078,914.1607,915.1141,916.068,917.0225,917.9774,918.9327,919.8886,920.845,921.8019,922.7592,923.7171,924.6754,925.6343,926.5936,927.5534,928.5137,929.4745,930.4358,931.3976,932.3598,933.3226,934.2858,935.2496,936.2138,937.1785,938.1437,939.1095,940.0756,941.0423,942.0095,942.9772,943.9453,944.914,945.8831,946.8527,947.8228,948.7934,949.7645,950.7361,951.7081,952.6807,953.6537,954.6273,955.6013,956.5758,957.5508,958.5263,959.5023,960.4787,961.4557,962.4331,963.4111,964.3895,965.3684,966.3478,967.3277,968.308,969.2889,970.2702,971.2521,972.2344,973.2172,974.2005,975.1843,976.1686,977.1533,978.1386,979.1243,980.1105,981.0972,982.0844,983.0721,984.0603,985.0489,986.038,987.0277,988.0178,989.0084,989.9995,990.991,991.9831,992.9756,993.9687,994.9622,995.9562,996.9506,997.9456,998.9411,999.937,1000.9334,1001.9303,1002.9277,1003.9256,1004.924,1005.9228,1006.9222,1007.922,1008.9223,1009.9231,1010.9244,1011.9261,1012.9284,1013.9311,1014.9343,1015.938,1016.9422,1017.9468,1018.952,1019.9576,1020.9637,1021.9703,1022.9774,1023.985,1024.993,1026.0016,1027.0106,1028.0201,1029.0301,1030.0405,1031.0515,1032.0629,1033.0748,1034.0872,1035.1001,1036.1135,1037.1273,1038.1416,1039.1564,1040.1717,1041.1875,1042.2038,1043.2205,1044.2377,1045.2554,1046.2736,1047.2923,1048.3114,1049.331,1050.3512,1051.3718,1052.3928,1053.4144,1054.4364,1055.4589,1056.4819,1057.5054,1058.5294,1059.5538,1060.5787,1061.6041,1062.63,1063.6564,1064.6832,1065.7105,1066.7383,1067.7666,1068.7954,1069.8246,1070.8544,1071.8846,1072.9152,1073.9464,1074.978,1076.0102,1077.0428,1078.0759,1079.1094,1080.1435,1081.178,1082.213,1083.2485,1084.2844,1085.3208,1086.3578,1087.3951,1088.433,1089.4714,1090.5102,1091.5495,1092.5893,1093.6296,1094.6703,1095.7115,1096.7532,1097.7954,1098.838,1099.8812,1100.9248,1101.9689,1103.0134,1104.0585,1105.104,1106.15,1107.1965,1108.2434,1109.2908,1110.3387,1111.3871,1112.436,1113.4853,1114.5351,1115.5854,1116.6362,1117.6874,1118.7392,1119.7913,1120.844,1121.8972,1122.9508,1124.0049,1125.0595,1126.1145,1127.17,1128.226,1129.2825,1130.3395,1131.3969,1132.4548,1133.5132,1134.572,1135.6314,1136.6912,1137.7515,1138.8122,1139.8734,1140.9352,1141.9973,1143.06,1144.1231,1145.1867,1146.2508,1147.3153,1148.3804,1149.4459,1150.5119,1151.5783,1152.6452,1153.7126,1154.7805,1155.8488,1156.9177,1157.9869,1159.0567,1160.1269,1161.1977,1162.2688,1163.3405,1164.4126,1165.4852,1166.5583,1167.6319,1168.7059,1169.7804,1170.8553,1171.9308,1173.0067,1174.0831,1175.1599,1176.2373,1177.3151,1178.3933,1179.4721,1180.5513,1181.631,1182.7112,1183.7918,1184.8729,1185.9545,1187.0365,1188.119,1189.202,1190.2855,1191.3694,1192.4538,1193.5387,1194.6241,1195.7099,1196.7962,1197.8829,1198.9701,1200.0578,1201.146,1202.2347,1203.3238,1204.4133,1205.5034,1206.5939,1207.6849,1208.7764,1209.8683,1210.9607,1212.0536,1213.1469,1214.2407,1215.335,1216.4297,1217.525,1218.6207,1219.7168,1220.8134,1221.9105,1223.0081,1224.1061,1225.2046,1226.3036,1227.403,1228.5029,1229.6033,1230.7042,1231.8055,1232.9072,1234.0095,1235.1122,1236.2154,1237.319,1238.4232,1239.5277,1240.6328,1241.7383,1242.8443,1243.9508,1245.0577,1246.1651,1247.273,1248.3813,1249.4901,1250.5993,1251.7091,1252.8193,1253.9299,1255.041,1256.1526,1257.2647,1258.3772,1259.4902,1260.6037,1261.7176,1262.832,1263.9469,1265.0622,1266.178,1267.2942,1268.4109,1269.5281,1270.6458,1271.7639,1272.8825,1274.0015,1275.1211,1276.241,1277.3615,1278.4824,1279.6038,1280.7256,1281.8479,1282.9707,1284.0939,1285.2176,1286.3418,1287.4664,1288.5915,1289.7171,1290.8431,1291.9696,1293.0965,1294.2239,1295.3518,1296.4801,1297.6089,1298.7382,1299.8679,1300.9981,1302.1288,1303.2599,1304.3915,1305.5236,1306.6561,1307.789,1308.9225,1310.0564,1311.1907,1312.3256,1313.4609,1314.5966,1315.7328,1316.8695,1318.0066,1319.1442,1320.2823,1321.4208,1322.5598,1323.6993,1324.8392,1325.9795,1327.1204,1328.2617,1329.4034,1330.5457,1331.6883,1332.8315,1333.9751,1335.1191,1336.2637,1337.4087,1338.5541,1339.7,1340.8464,1341.9932,1343.1405,1344.2883,1345.4365,1346.5851,1347.7343,1348.8839,1350.0339,1351.1844,1352.3354,1353.4868,1354.6387,1355.7911,1356.9439,1358.0972,1359.2509,1360.4051,1361.5597,1362.7149,1363.8704,1365.0265,1366.1829,1367.3399,1368.4973,1369.6552,1370.8135,1371.9723,1373.1315,1374.2912,1375.4514,1376.612,1377.7731,1378.9346,1380.0966,1381.259,1382.4219,1383.5853,1384.7491,1385.9134,1387.0781,1388.2433,1389.409,1390.5751,1391.7417,1392.9087,1394.0762,1395.2441,1396.4125,1397.5814,1398.7507,1399.9205,1401.0907,1402.2614,1403.4325,1404.6041,1405.7761,1406.9487,1408.1216,1409.295,1410.4689,1411.6432,1412.818,1413.9933,1415.169,1416.3451,1417.5218,1418.6988,1419.8763,1421.0543,1422.2328,1423.4116,1424.591,1425.7708,1426.951,1428.1318,1429.3129,1430.4945,1431.6766,1432.8591,1434.0421,1435.2256,1436.4095,1437.5938,1438.7786,1439.9639,1441.1496,1442.3357,1443.5224,1444.7094,1445.897,1447.0849,1448.2734,1449.4623,1450.6516,1451.8414,1453.0316,1454.2223,1455.4135,1456.6051,1457.7972,1458.9897,1460.1826,1461.3761,1462.5699,1463.7643,1464.959,1466.1543,1467.35,1468.5461,1469.7427,1470.9397,1472.1372,1473.3351,1474.5335,1475.7324,1476.9317,1478.1314,1479.3316,1480.5323,1481.7334,1482.935,1484.137,1485.3394,1486.5423,1487.7457,1488.9495,1490.1538,1491.3585,1492.5637,1493.7693,1494.9754,1496.1819,1497.3888,1498.5963,1499.8041,1501.0125,1502.2212,1503.4304,1504.6401,1505.8502,1507.0608,1508.2718,1509.4833,1510.6952,1511.9076,1513.1204,1514.3337,1515.5474,1516.7616,1517.9762,1519.1912,1520.4068,1521.6227,1522.8391,1524.056,1525.2733,1526.4911,1527.7093,1528.9279,1530.147,1531.3666,1532.5866,1533.807,1535.0279,1536.2493,1537.4711,1538.6933,1539.916,1541.1391,1542.3627,1543.5868,1544.8112,1546.0362,1547.2615,1548.4874,1549.7136,1550.9404,1552.1675,1553.3951,1554.6232,1555.8517,1557.0806,1558.31,1559.5399,1560.7702,1562.0009,1563.2321,1564.4637,1565.6958,1566.9283,1568.1613,1569.3947,1570.6286,1571.8629,1573.0976,1574.3328,1575.5685,1576.8046,1578.0411,1579.2781,1580.5155,1581.7534,1582.9917,1584.2304,1585.4696,1586.7093,1587.9494,1589.1899,1590.4309,1591.6723,1592.9142,1594.1565,1595.3993,1596.6425,1597.8862,1599.1302,1600.3748,1601.6198,1602.8652,1604.1111,1605.3574,1606.6041,1607.8513,1609.099,1610.3471,1611.5956,1612.8446,1614.094,1615.3439,1616.5942,1617.8449,1619.0961,1620.3477,1621.5998,1622.8523,1624.1053,1625.3587,1626.6125,1627.8668,1629.1216,1630.3767,1631.6324,1632.8884,1634.1449,1635.4019,1636.6592,1637.9171,1639.1753,1640.434,1641.6932,1642.9528,1644.2128,1645.4733,1646.7342,1647.9956,1649.2573,1650.5196,1651.7823,1653.0454,1654.3089,1655.5729,1656.8374,1658.1023,1659.3676,1660.6334,1661.8996,1663.1662,1664.4333,1665.7008,1666.9688,1668.2372,1669.506,1670.7753,1672.045,1673.3152,1674.5858,1675.8568,1677.1283,1678.4002,1679.6726,1680.9454,1682.2186,1683.4923,1684.7664,1686.041,1687.316,1688.5914,1689.8673,1691.1436,1692.4203,1693.6975,1694.9751,1696.2532,1697.5317,1698.8106,1700.09,1701.3698,1702.6501,1703.9307,1705.2119,1706.4934,1707.7754,1709.0579,1710.3408,1711.6241,1712.9078,1714.192,1715.4766,1716.7617,1718.0472,1719.3331,1720.6195,1721.9063,1723.1936,1724.4812,1725.7694,1727.0579,1728.3469,1729.6363,1730.9262,1732.2165,1733.5072,1734.7984,1736.09,1737.382,1738.6745,1739.9674,1741.2608,1742.5546,1743.8488,1745.1434,1746.4385,1747.7341,1749.03,1750.3264,1751.6233,1752.9205,1754.2182,1755.5164,1756.8149,1758.1139,1759.4134,1760.7132,1762.0135,1763.3143,1764.6155,1765.9171,1767.2191,1768.5216,1769.8245,1771.1278,1772.4316,1773.7358,1775.0405,1776.3456,1777.6511,1778.957,1780.2634,1781.5702,1782.8774,1784.1851,1785.4932,1786.8018,1788.1107,1789.4202,1790.73,1792.0403,1793.351,1794.6621,1795.9737,1797.2857,1798.5981,1799.911,1801.2243,1802.538,1803.8522,1805.1668,1806.4818,1807.7972,1809.1131,1810.4295,1811.7462,1813.0634,1814.381,1815.699,1817.0175,1818.3364,1819.6558,1820.9755,1822.2957,1823.6164,1824.9374,1826.2589,1827.5808,1828.9032,1830.226,1831.5492,1832.8728,1834.1969,1835.5214,1836.8463,1838.1717,1839.4975,1840.8237,1842.1503,1843.4774,1844.8049,1846.1329,1847.4612,1848.79,1850.1193,1851.4489,1852.779,1854.1095,1855.4404,1856.7718,1858.1036,1859.4358,1860.7685,1862.1016,1863.4351,1864.769,1866.1034,1867.4382,1868.7734,1870.1091,1871.4452,1872.7817,1874.1186,1875.456,1876.7938,1878.132,1879.4706,1880.8097,1882.1492,1883.4891,1884.8295,1886.1703,1887.5115,1888.8531,1890.1952,1891.5376,1892.8806,1894.2239,1895.5677,1896.9119,1898.2565,1899.6015,1900.947,1902.2929],n5=-3101e3,i5=1826.25,s5=[733566.476,733078.181,732590.048,732102.078,731614.27,731126.625,730639.142,730151.822,729664.664,729177.669,728690.836,728204.166,727717.658,727231.313,726745.13,726259.11,725773.252,725287.556,724802.024,724316.653,723831.446,723346.4,722861.517,722376.797,721892.239,721407.844,720923.611,720439.541,719955.633,719471.888,718988.305,718504.885,718021.627,717538.532,717055.599,716572.828,716090.221,715607.775,715125.492,714643.372,714161.414,713679.619,713197.986,712716.516,712235.208,711754.063,711273.08,710792.259,710311.602,709831.106,709350.773,708870.603,708390.595,707910.75,707431.067,706951.547,706472.189,705992.993,705513.96,705035.09,704556.382,704077.837,703599.454,703121.234,702643.176,702165.28,701687.548,701209.977,700732.569,700255.324,699778.241,699301.321,698824.563,698347.967,697871.535,697395.264,696919.156,696443.211,695967.428,695491.808,695016.35,694541.054,694065.921,693590.951,693116.143,692641.498,692167.015,691692.694,691218.537,690744.541,690270.708,689797.038,689323.53,688850.184,688377.002,687903.981,687431.123,686958.428,686485.895,686013.525,685541.317,685069.271,684597.388,684125.668,683654.11,683182.714,682711.482,682240.411,681769.503,681298.758,680828.175,680357.754,679887.496,679417.401,678947.468,678477.698,678008.09,677538.644,677069.361,676600.241,676131.283,675662.487,675193.854,674725.384,674257.076,673788.931,673320.948,672853.127,672385.469,671917.974,671450.641,670983.47,670516.462,670049.617,669582.934,669116.413,668650.055,668183.86,667717.827,667251.957,666786.249,666320.703,665855.32,665390.1,664925.042,664460.146,663995.413,663530.843,663066.435,662602.189,662138.106,661674.186,661210.428,660746.832,660283.399,659820.129,659357.021,658894.075,658431.292,657968.672,657506.214,657043.918,656581.785,656119.815,655658.007,655196.361,654734.878,654273.558,653812.4,653351.404,652890.571,652429.901,651969.392,651509.047,651048.864,650588.843,650128.985,649669.29,649209.757,648750.386,648291.178,647832.133,647373.25,646914.529,646455.971,645997.576,645539.342,645081.272,644623.364,644165.618,643708.035,643250.615,642793.357,642336.261,641879.328,641422.558,640965.949,640509.504,640053.221,639597.1,639141.142,638685.347,638229.714,637774.243,637318.935,636863.789,636408.806,635953.986,635499.328,635044.832,634590.499,634136.328,633682.32,633228.475,632774.792,632321.271,631867.913,631414.717,630961.684,630508.814,630056.106,629603.56,629151.177,628698.956,628246.898,627795.003,627343.27,626891.699,626440.291,625989.045,625537.962,625087.042,624636.283,624185.688,623735.255,623284.984,622834.876,622384.93,621935.147,621485.527,621036.069,620586.773,620137.64,619688.669,619239.861,618791.215,618342.732,617894.412,617446.253,616998.258,616550.425,616102.754,615655.246,615207.9,614760.717,614313.697,613866.838,613420.143,612973.61,612527.239,612081.031,611634.985,611189.102,610743.381,610297.823,609852.428,609407.194,608962.124,608517.216,608072.47,607627.887,607183.466,606739.208,606295.112,605851.179,605407.408,604963.8,604520.355,604077.071,603633.951,603190.993,602748.197,602305.564,601863.093,601420.785,600978.639,600536.656,600094.835,599653.177,599211.681,598770.348,598329.178,597888.169,597447.324,597006.64,596566.12,596125.762,595685.566,595245.533,594805.662,594365.954,593926.408,593487.025,593047.804,592608.746,592169.85,591731.117,591292.546,590854.138,590415.892,589977.809,589539.888,589102.13,588664.535,588227.101,587789.831,587352.722,586915.777,586478.993,586042.373,585605.914,585169.619,584733.485,584297.515,583861.707,583426.061,582990.578,582555.257,582120.099,581685.103,581250.27,580815.599,580381.091,579946.745,579512.562,579078.541,578644.683,578210.987,577777.454,577344.083,576910.875,576477.829,576044.946,575612.225,575179.667,574747.271,574315.037,573882.967,573451.058,573019.313,572587.729,572156.309,571725.05,571293.955,570863.021,570432.251,570001.642,569571.197,569140.913,568710.792,568280.834,567851.038,567421.405,566991.934,566562.626,566133.48,565704.497,565275.676,564847.018,564418.522,563990.189,563562.018,563134.01,562706.164,562278.481,561850.96,561423.601,560996.406,560569.372,560142.502,559715.793,559289.247,558862.864,558436.643,558010.585,557584.689,557158.956,556733.385,556307.977,555882.731,555457.648,555032.727,554607.968,554183.373,553758.939,553334.668,552910.56,552486.614,552062.831,551639.21,551215.752,550792.456,550369.323,549946.352,549523.543,549100.898,548678.414,548256.093,547833.935,547411.939,546990.106,546568.435,546146.927,545725.581,545304.397,544883.377,544462.518,544041.822,543621.289,543200.918,542780.71,542360.664,541940.781,541521.06,541101.501,540682.105,540262.872,539843.801,539424.893,539006.147,538587.564,538169.143,537750.884,537332.788,536914.855,536497.084,536079.476,535662.03,535244.747,534827.626,534410.667,533993.871,533577.238,533160.767,532744.459,532328.313,531912.329,531496.508,531080.85,530665.354,530250.021,529834.85,529419.841,529004.996,528590.312,528175.791,527761.433,527347.237,526933.204,526519.333,526105.624,525692.078,525278.695,524865.474,524452.416,524039.52,523626.786,523214.215,522801.807,522389.561,521977.478,521565.557,521153.798,520742.202,520330.769,519919.498,519508.389,519097.443,518686.66,518276.039,517865.581,517455.285,517045.151,516635.18,516225.372,515815.726,515406.243,514996.922,514587.763,514178.767,513769.934,513361.263,512952.754,512544.408,512136.225,511728.204,511320.345,510912.65,510505.116,510097.745,509690.537,509283.491,508876.607,508469.886,508063.328,507656.932,507250.698,506844.627,506438.719,506032.973,505627.389,505221.968,504816.71,504411.614,504006.681,503601.91,503197.301,502792.855,502388.572,501984.451,501580.492,501176.696,500773.063,500369.592,499966.283,499563.137,499160.154,498757.333,498354.674,497952.178,497549.845,497147.674,496745.665,496343.819,495942.136,495540.615,495139.256,494738.06,494337.027,493936.156,493535.447,493134.901,492734.518,492334.296,491934.238,491534.342,491134.608,490735.037,490335.629,489936.383,489537.299,489138.378,488739.62,488341.024,487942.59,487544.319,487146.211,486748.265,486350.481,485952.86,485555.402,485158.105,484760.972,484364.001,483967.192,483570.546,483174.063,482777.742,482381.583,481985.587,481589.754,481194.082,480798.574,480403.228,480008.044,479613.023,479218.165,478823.469,478428.935,478034.564,477640.355,477246.309,476852.426,476458.705,476065.146,475671.75,475278.517,474885.445,474492.537,474099.791,473707.207,473314.786,472922.528,472530.432,472138.498,471746.727,471355.118,470963.672,470572.389,470181.268,469790.309,469399.513,469008.879,468618.408,468228.1,467837.953,467447.97,467058.149,466668.49,466278.994,465889.661,465500.489,465111.481,464722.635,464333.951,463945.43,463557.071,463168.875,462780.842,462392.971,462005.262,461617.716,461230.332,460843.111,460456.052,460069.156,459682.423,459295.852,458909.443,458523.197,458137.113,457751.192,457365.434,456979.837,456594.404,456209.133,455824.024,455439.078,455054.294,454669.673,454285.214,453900.918,453516.785,453132.814,452749.005,452365.359,451981.875,451598.554,451215.395,450832.399,450449.566,450066.894,449684.386,449302.04,448919.856,448537.835,448155.976,447774.28,447392.746,447011.375,446630.167,446249.12,445868.237,445487.516,445106.957,444726.561,444346.327,443966.256,443586.347,443206.601,442827.017,442447.596,442068.338,441689.241,441310.308,440931.536,440552.928,440174.482,439796.198,439418.077,439040.118,438662.322,438284.688,437907.217,437529.908,437152.762,436775.778,436398.957,436022.299,435645.802,435269.469,434893.297,434517.289,434141.443,433765.759,433390.238,433014.879,432639.683,432264.649,431889.778,431515.069,431140.523,430766.139,430391.918,430017.859,429643.963,429270.229,428896.658,428523.249,428150.003,427776.92,427403.998,427031.24,426658.643,426286.21,425913.938,425541.83,425169.884,424798.1,424426.479,424055.02,423683.724,423312.59,422941.619,422570.81,422200.164,421829.68,421459.359,421089.2,420719.204,420349.37,419979.699,419610.19,419240.844,418871.66,418502.639,418133.78,417765.084,417396.55,417028.179,416659.97,416291.924,415924.04,415556.319,415188.76,414821.364,414454.13,414087.059,413720.15,413353.404,412986.82,412620.399,412254.14,411888.044,411522.11,411156.339,410790.73,410425.284,410060,409694.879,409329.92,408965.123,408600.49,408236.018,407871.71,407507.563,407143.58,406779.758,406416.1,406052.603,405689.269,405326.098,404963.089,404600.243,404237.559,403875.038,403512.679,403150.483,402788.449,402426.578,402064.869,401703.323,401341.939,400980.718,400619.659,400258.763,399898.029,399537.457,399177.049,398816.802,398456.718,398096.797,397737.038,397377.442,397018.008,396658.737,396299.628,395940.682,395581.898,395223.277,394864.818,394506.522,394148.388,393790.416,393432.608,393074.961,392717.477,392360.156,392002.997,391646.001,391289.167,390932.496,390575.987,390219.641,389863.457,389507.435,389151.577,388795.88,388440.346,388084.975,387729.766,387374.72,387019.836,386665.115,386310.556,385956.16,385601.926,385247.854,384893.945,384540.199,384186.615,383833.194,383479.935,383126.839,382773.905,382421.133,382068.525,381716.078,381363.794,381011.673,380659.714,380307.918,379956.284,379604.813,379253.504,378902.357,378551.373,378200.552,377849.893,377499.397,377149.063,376798.892,376448.883,376099.036,375749.352,375399.831,375050.472,374701.276,374352.242,374003.371,373654.662,373306.115,372957.731,372609.51,372261.451,371913.555,371565.821,371218.249,370870.841,370523.594,370176.51,369829.589,369482.83,369136.234,368789.8,368443.528,368097.419,367751.473,367405.689,367060.068,366714.609,366369.312,366024.178,365679.207,365334.398,364989.752,364645.268,364300.946,363956.787,363612.791,363268.957,362925.286,362581.777,362238.43,361895.246,361552.225,361209.366,360866.67,360524.136,360181.764,359839.555,359497.509,359155.625,358813.904,358472.345,358130.948,357789.714,357448.643,357107.734,356766.988,356426.404,356085.982,355745.723,355405.627,355065.693,354725.921,354386.312,354046.866,353707.582,353368.461,353029.502,352690.705,352352.071,352013.6,351675.291,351337.144,350999.16,350661.339,350323.68,349986.184,349648.85,349311.678,348974.669,348637.823,348301.139,347964.617,347628.258,347292.062,346956.028,346620.156,346284.447,345948.901,345613.517,345278.296,344943.237,344608.34,344273.606,343939.035,343604.626,343270.379,342936.295,342602.374,342268.615,341935.018,341601.584,341268.313,340935.204,340602.257,340269.473,339936.852,339604.393,339272.096,338939.962,338607.991,338276.182,337944.535,337613.051,337281.73,336950.571,336619.574,336288.74,335958.069,335627.56,335297.213,334967.029,334637.008,334307.149,333977.452,333647.918,333318.547,332989.338,332660.291,332331.407,332002.686,331674.127,331345.73,331017.496,330689.425,330361.516,330033.769,329706.185,329378.764,329051.505,328724.408,328397.474,328070.703,327744.094,327417.647,327091.363,326765.241,326439.282,326113.486,325787.852,325462.38,325137.071,324811.925,324486.941,324162.119,323837.46,323512.964,323188.63,322864.458,322540.449,322216.602,321892.918,321569.397,321246.038,320922.841,320599.807,320276.936,319954.227,319631.68,319309.296,318987.074,318665.015,318343.119,318021.385,317699.813,317378.404,317057.158,316736.074,316415.152,316094.393,315773.796,315453.362,315133.091,314812.982,314493.035,314173.251,313853.629,313534.17,313214.874,312895.74,312576.768,312257.959,311939.313,311620.828,311302.507,310984.348,310666.351,310348.517,310030.846,309713.336,309395.99,309078.806,308761.784,308444.925,308128.229,307811.694,307495.323,307179.114,306863.067,306547.183,306231.462,305915.902,305600.506,305285.272,304970.2,304655.291,304340.544,304025.96,303711.539,303397.28,303083.183,302769.249,302455.477,302141.868,301828.422,301515.138,301202.016,300889.057,300576.26,300263.626,299951.154,299638.845,299326.699,299014.715,298702.893,298391.234,298079.737,297768.403,297457.232,297146.222,296835.376,296524.692,296214.17,295903.811,295593.614,295283.58,294973.709,294663.999,294354.453,294045.069,293735.847,293426.788,293117.891,292809.157,292500.585,292192.176,291883.93,291575.846,291267.924,290960.165,290652.568,290345.134,290037.862,289730.753,289423.807,289117.022,288810.401,288503.942,288197.645,287891.511,287585.539,287279.73,286974.083,286668.599,286363.278,286058.118,285753.122,285448.288,285143.616,284839.107,284534.76,284230.576,283926.554,283622.695,283318.998,283015.464,282712.093,282408.883,282105.837,281802.953,281500.231,281197.672,280895.275,280593.041,280290.969,279989.06,279687.313,279385.729,279084.308,278783.048,278481.952,278181.018,277880.246,277579.637,277279.19,276978.906,276678.784,276378.825,276079.028,275779.394,275479.922,275180.613,274881.467,274582.482,274283.661,273985.001,273686.505,273388.171,273089.999,272791.99,272494.143,272196.459,271898.937,271601.578,271304.381,271007.347,270710.475,270413.766,270117.219,269820.835,269524.613,269228.554,268932.658,268636.923,268341.352,268045.942,267750.696,267455.611,267160.69,266865.931,266571.334,266276.9,265982.628,265688.519,265394.572,265100.788,264807.166,264513.707,264220.41,263927.276,263634.304,263341.495,263048.848,262756.364,262464.042,262171.883,261879.886,261588.052,261296.38,261004.871,260713.524,260422.34,260131.318,259840.459,259549.762,259259.228,258968.856,258678.647,258388.6,258098.716,257808.994,257519.435,257230.038,256940.804,256651.732,256362.823,256074.076,255785.492,255497.07,255208.811,254920.714,254632.78,254345.008,254057.399,253769.952,253482.668,253195.546,252908.587,252621.79,252335.156,252048.684,251762.375,251476.228,251190.244,250904.422,250618.763,250333.266,250047.932,249762.76,249477.751,249192.904,248908.22,248623.698,248339.339,248055.142,247771.108,247487.236,247203.527,246919.98,246636.596,246353.374,246070.315,245787.418,245504.684,245222.112,244939.703,244657.456,244375.372,244093.45,243811.69,243530.094,243248.659,242967.388,242686.278,242405.332,242124.547,241843.925,241563.466,241283.169,241003.035,240723.063,240443.254,240163.607,239884.123,239604.801,239325.642,239046.645,238767.811,238489.139,238210.63,237932.283,237654.098,237376.077,237098.217,236820.521,236542.986,236265.614,235988.405,235711.358,235434.474,235157.752,234881.193,234604.796,234328.562,234052.49,233776.581,233500.834,233225.249,232949.828,232674.568,232399.472,232124.537,231849.765,231575.156,231300.709,231026.425,230752.303,230478.344,230204.547,229930.913,229657.441,229384.131,229110.985,228838,228565.178,228292.519,228020.022,227747.688,227475.516,227203.507,226931.66,226659.976,226388.454,226117.094,225845.898,225574.863,225303.991,225033.282,224762.735,224492.351,224222.129,223952.07,223682.173,223412.438,223142.867,222873.457,222604.21,222335.126,222066.204,221797.445,221528.848,221260.414,220992.142,220724.032,220456.086,220188.301,219920.679,219653.22,219385.923,219118.789,218851.817,218585.008,218318.361,218051.876,217785.554,217519.395,217253.398,216987.564,216721.892,216456.383,216191.036,215925.851,215660.829,215395.97,215131.273,214866.739,214602.367,214338.158,214074.111,213810.226,213546.504,213282.945,213019.548,212756.314,212493.242,212230.333,211967.586,211705.001,211442.579,211180.32,210918.223,210656.289,210394.517,210132.907,209871.461,209610.176,209349.054,209088.095,208827.298,208566.664,208306.192,208045.882,207785.735,207525.751,207265.929,207006.27,206746.773,206487.438,206228.266,205969.257,205710.41,205451.726,205193.204,204934.844,204676.648,204418.613,204160.741,203903.032,203645.485,203388.101,203130.879,202873.819,202616.922,202360.188,202103.616,201847.207,201590.96,201334.875,201078.953,200823.194,200567.597,200312.163,200056.891,199801.781,199546.834,199292.05,199037.428,198782.968,198528.672,198274.537,198020.565,197766.756,197513.109,197259.624,197006.302,196753.143,196500.146,196247.312,195994.64,195742.13,195489.783,195237.599,194985.577,194733.718,194482.021,194230.486,193979.114,193727.905,193476.858,193225.973,192975.251,192724.692,192474.295,192224.061,191973.989,191724.079,191474.332,191224.748,190975.326,190726.066,190476.97,190228.035,189979.263,189730.654,189482.207,189233.922,188985.8,188737.841,188490.044,188242.409,187994.937,187747.628,187500.481,187253.497,187006.675,186760.015,186513.518,186267.184,186021.012,185775.002,185529.155,185283.471,185037.949,184792.589,184547.392,184302.358,184057.486,183812.777,183568.23,183323.845,183079.623,182835.564,182591.667,182347.932,182104.36,181860.951,181617.704,181374.619,181131.697,180888.938,180646.341,180403.906,180161.634,179919.525,179677.578,179435.793,179194.171,178952.712,178711.415,178470.281,178229.309,177988.499,177747.852,177507.368,177267.046,177026.886,176786.889,176547.055,176307.383,176067.873,175828.526,175589.342,175350.32,175111.46,174872.763,174634.229,174395.857,174157.647,173919.6,173681.716,173443.994,173206.434,172969.037,172731.803,172494.731,172257.821,172021.074,171784.49,171548.068,171311.808,171075.711,170839.777,170604.004,170368.395,170132.948,169897.663,169662.541,169427.582,169192.785,168958.15,168723.678,168489.369,168255.222,168021.237,167787.415,167553.756,167320.259,167086.924,166853.752,166620.743,166387.896,166155.211,165922.689,165690.33,165458.133,165226.098,164994.226,164762.516,164530.969,164299.585,164068.363,163837.303,163606.406,163375.672,163145.1,162914.69,162684.443,162454.359,162224.437,161994.677,161765.08,161535.645,161306.373,161077.264,160848.317,160619.532,160390.91,160162.451,159934.154,159706.019,159478.047,159250.238,159022.59,158795.106,158567.784,158340.624,158113.627,157886.793,157660.121,157433.611,157207.264,156981.08,156755.057,156529.198,156303.501,156077.966,155852.594,155627.385,155402.338,155177.453,154952.731,154728.171,154503.774,154279.54,154055.468,153831.558,153607.811,153384.227,153160.804,152937.545,152714.448,152491.513,152268.741,152046.132,151823.685,151601.4,151379.278,151157.318,150935.521,150713.887,150492.415,150271.105,150049.958,149828.973,149608.151,149387.492,149166.995,148946.66,148726.488,148506.478,148286.631,148066.947,147847.425,147628.065,147408.868,147189.833,146970.961,146752.252,146533.705,146315.32,146097.098,145879.038,145661.141,145443.407,145225.835,145008.425,144791.178,144574.093,144357.171,144140.412,143923.815,143707.38,143491.108,143274.998,143059.051,142843.267,142627.645,142412.185,142196.888,141981.753,141766.781,141551.972,141337.324,141122.84,140908.518,140694.358,140480.361,140266.526,140052.854,139839.345,139625.998,139412.813,139199.791,138986.931,138774.234,138561.7,138349.327,138137.118,137925.071,137713.186,137501.464,137289.904,137078.507,136867.273,136656.2,136445.291,136234.544,136023.959,135813.537,135603.277,135393.18,135183.246,134973.474,134763.864,134554.417,134345.132,134136.01,133927.05,133718.253,133509.619,133301.147,133092.837,132884.69,132676.705,132468.883,132261.223,132053.726,131846.392,131639.219,131432.21,131225.363,131018.678,130812.156,130605.796,130399.599,130193.565,129987.692,129781.983,129576.436,129371.051,129165.829,128960.769,128755.872,128551.137,128346.565,128142.156,127937.908,127733.824,127529.902,127326.142,127122.545,126919.11,126715.838,126512.728,126309.781,126106.997,125904.375,125701.915,125499.618,125297.483,125095.511,124893.701,124692.054,124490.569,124289.247,124088.088,123887.09,123686.256,123485.584,123285.074,123084.727,122884.542,122684.52,122484.66,122284.963,122085.429,121886.056,121686.847,121487.8,121288.915,121090.193,120891.633,120693.236,120495.001,120296.929,120099.019,119901.272,119703.688,119506.265,119309.006,119111.909,118914.974,118718.202,118521.592,118325.145,118128.86,117932.738,117736.778,117540.981,117345.346,117149.874,116954.565,116759.417,116564.433,116369.611,116174.951,115980.454,115786.119,115591.947,115397.937,115204.09,115010.405,114816.883,114623.523,114430.326,114237.292,114044.419,113851.71,113659.162,113466.778,113274.556,113082.496,112890.599,112698.864,112507.292,112315.882,112124.635,111933.55,111742.628,111551.868,111361.271,111170.836,110980.564,110790.455,110600.507,110410.723,110221.101,110031.641,109842.344,109653.209,109464.237,109275.427,109086.78,108898.295,108709.973,108521.813,108333.816,108145.981,107958.309,107770.799,107583.452,107396.267,107209.245,107022.386,106835.688,106649.154,106462.781,106276.572,106090.524,105904.64,105718.918,105533.358,105347.961,105162.726,104977.654,104792.744,104607.997,104423.412,104238.99,104054.73,103870.633,103686.698,103502.926,103319.316,103135.869,102952.584,102769.462,102586.502,102403.705,102221.07,102038.598,101856.288,101674.141,101492.157,101310.334,101128.675,100947.177,100765.843,100584.67,100403.661,100222.813,100042.129,99861.606,99681.247,99501.049,99321.015,99141.143,98961.433,98781.886,98602.501,98423.279,98244.219,98065.322,97886.587,97708.015,97529.605,97351.358,97173.273,96995.351,96817.591,96639.994,96462.559,96285.287,96108.177,95931.23,95754.445,95577.823,95401.363,95225.066,95048.931,94872.959,94697.149,94521.502,94346.017,94170.695,93995.535,93820.538,93645.703,93471.031,93296.521,93122.174,92947.989,92773.967,92600.107,92426.41,92252.875,92079.503,91906.293,91733.246,91560.361,91387.639,91215.079,91042.682,90870.447,90698.375,90526.465,90354.718,90183.133,90011.711,89840.451,89669.354,89498.419,89327.647,89157.037,88986.59,88816.305,88646.183,88476.223,88306.426,88136.791,87967.318,87798.009,87628.861,87459.877,87291.054,87122.395,86953.897,86785.563,86617.39,86449.381,86281.533,86113.849,85946.326,85778.966,85611.769,85444.734,85277.862,85111.152,84944.605,84778.22,84611.998,84445.938,84280.041,84114.306,83948.734,83783.324,83618.077,83452.992,83288.07,83123.31,82958.713,82794.278,82630.006,82465.896,82301.949,82138.164,81974.542,81811.082,81647.784,81484.65,81321.677,81158.868,80996.22,80833.735,80671.413,80509.253,80347.256,80185.421,80023.749,79862.239,79700.892,79539.707,79378.685,79217.825,79057.128,78896.593,78736.221,78576.011,78415.964,78256.079,78096.356,77936.797,77777.399,77618.165,77459.092,77300.182,77141.435,76982.85,76824.428,76666.168,76508.071,76350.136,76192.364,76034.754,75877.307,75720.022,75562.9,75405.94,75249.143,75092.508,74936.035,74779.726,74623.578,74467.594,74311.771,74156.111,74000.614,73845.279,73690.107,73535.097,73380.25,73225.565,73071.043,72916.683,72762.486,72608.451,72454.578,72300.869,72147.321,71993.936,71840.714,71687.654,71534.757,71382.022,71229.45,71077.04,70924.793,70772.708,70620.786,70469.026,70317.428,70165.994,70014.721,69863.612,69712.664,69561.879,69411.257,69260.797,69110.5,68960.365,68810.393,68660.583,68510.936,68361.451,68212.128,68062.969,67913.971,67765.136,67616.464,67467.954,67319.607,67171.422,67023.4,66875.54,66727.843,66580.308,66432.935,66285.726,66138.678,65991.793,65845.071,65698.511,65552.114,65405.879,65259.807,65113.897,64968.15,64822.565,64677.142,64531.883,64386.785,64241.85,64097.078,63952.468,63808.021,63663.736,63519.614,63375.654,63231.856,63088.222,62944.749,62801.439,62658.292,62515.307,62372.485,62229.825,62087.328,61944.993,61802.821,61660.811,61518.963,61377.278,61235.756,61094.396,60953.199,60812.164,60671.292,60530.582,60390.035,60249.65,60109.427,59969.367,59829.47,59689.735,59550.163,59410.753,59271.506,59132.421,58993.498,58854.739,58716.141,58577.706,58439.434,58301.324,58163.377,58025.592,57887.97,57750.51,57613.212,57476.077,57339.105,57202.295,57065.648,56929.163,56792.841,56656.681,56520.683,56384.849,56249.176,56113.666,55978.319,55843.134,55708.112,55573.252,55438.555,55304.02,55169.647,55035.437,54901.39,54767.505,54633.783,54500.223,54366.826,54233.591,54100.518,53967.608,53834.861,53702.276,53569.854,53437.594,53305.497,53173.562,53041.789,52910.179,52778.732,52647.447,52516.325,52385.365,52254.568,52123.933,51993.46,51863.15,51733.003,51603.018,51473.196,51343.536,51214.039,51084.704,50955.531,50826.521,50697.674,50568.989,50440.467,50312.107,50183.909,50055.875,49928.002,49800.292,49672.745,49545.36,49418.138,49291.078,49164.18,49037.445,48910.873,48784.463,48658.216,48532.131,48406.209,48280.449,48154.851,48029.416,47904.144,47779.034,47654.087,47529.302,47404.679,47280.22,47155.922,47031.787,46907.815,46784.005,46660.358,46536.873,46413.55,46290.39,46167.393,46044.558,45921.886,45799.376,45677.028,45554.843,45432.821,45310.961,45189.264,45067.729,44946.356,44825.147,44704.099,44583.214,44462.492,44341.932,44221.535,44101.3,43981.227,43861.317,43741.57,43621.985,43502.563,43383.303,43264.205,43145.27,43026.498,42907.888,42789.441,42671.156,42553.033,42435.073,42317.276,42199.641,42082.169,41964.859,41847.711,41730.727,41613.904,41497.244,41380.747,41264.412,41148.239,41032.23,40916.382,40800.697,40685.175,40569.815,40454.617,40339.583,40224.71,40110,39995.453,39881.068,39766.845,39652.786,39538.888,39425.153,39311.581,39198.171,39084.923,38971.839,38858.916,38746.156,38633.559,38521.124,38408.851,38296.742,38184.794,38073.009,37961.387,37849.927,37738.629,37627.495,37516.522,37405.712,37295.065,37184.58,37074.257,36964.097,36854.1,36744.265,36634.593,36525.083,36415.735,36306.55,36197.528,36088.668,35979.951,35871.297,35762.698,35654.156,35545.672,35437.247,35328.884,35220.583,35112.347,35004.176,34896.073,34788.038,34680.074,34572.182,34464.363,34356.62,34248.952,34141.363,34033.854,33926.426,33819.08,33711.819,33604.643,33497.555,33390.555,33283.646,33176.829,33070.105,32963.476,32856.944,32750.509,32644.174,32537.941,32431.81,32325.783,32219.862,32114.048,32008.343,31902.748,31797.265,31691.896,31586.641,31481.503,31376.483,31271.582,31166.803,31062.146,30957.613,30853.206,30748.926,30644.775,30540.754,30436.865,30333.109,30229.489,30126.004,30022.658,29919.451,29816.385,29713.462,29610.683,29508.049,29405.563,29303.225,29201.038,29099.002,28997.12,28895.392,28793.821,28692.408,28591.154,28490.062,28389.132,28288.365,28187.765,28087.332,27987.067,27886.972,27787.05,27687.3,27587.726,27488.327,27389.107,27290.066,27191.206,27092.528,26994.035,26895.727,26797.606,26699.674,26601.932,26504.382,26407.025,26309.862,26212.896,26116.128,26019.559,25923.192,25827.026,25731.065,25635.309,25539.76,25444.42,25349.29,25254.371,25159.666,25065.176,24970.902,24876.845,24783.008,24689.392,24595.998,24502.829,24409.884,24317.167,24224.678,24132.42,24040.393,23948.599,23857.04,23765.717,23674.632,23583.786,23493.181,23402.819,23312.7,23222.827,23133.201,23043.823,22954.695,22865.819,22777.196,22688.828,22600.716,22512.862,22425.267,22337.932,22250.86,22164.052,22077.51,21991.234,21905.227,21819.49,21734.024,21648.832,21563.914,21479.272,21394.908,21310.823,21227.019,21143.498,21060.26,20977.307,20894.642,20812.265,20730.177,20648.382,20566.879,20485.671,20404.759,20324.111,20243.58,20163.152,20082.829,20002.611,19922.5,19842.497,19762.604,19682.822,19603.151,19523.594,19444.152,19364.825,19285.615,19206.524,19127.553,19048.703,18969.975,18891.371,18812.891,18734.538,18656.313,18578.216,18500.249,18422.413,18344.711,18267.142,18189.708,18112.411,18035.251,17958.231,17881.351,17804.612,17728.017,17651.566,17575.26,17499.101,17423.09,17347.229,17271.518,17195.959,17120.554,17045.302,16970.207,16895.269,16820.489,16745.869,16671.41,16597.113,16522.98,16449.011,16375.209,16301.573,16228.107,16154.811,16081.686,16008.733,15935.954,15863.351,15790.923,15718.674,15646.603,15574.713,15503.004,15431.479,15360.137,15288.981,15218.011,15147.229,15076.637,15006.235,14936.026,14866.009,14796.187,14726.56,14657.131,14587.899,14518.868,14450.037,14381.408,14312.983,14244.763,14176.749,14108.941,14041.343,13973.954,13906.777,13839.812,13773.061,13706.525,13640.205,13574.103,13508.219,13442.556,13377.115,13311.896,13246.901,13182.132,13117.589,13053.274,12989.188,12925.333,12861.709,12798.319,12735.163,12672.243,12609.559,12547.114,12484.908,12422.943,12361.22,12299.741,12238.506,12177.517,12116.775,12056.282,11996.039,11936.046,11876.306,11816.82,11757.589,11698.614,11639.896,11581.438,11523.238,11465.298,11407.614,11350.183,11293.001,11236.066,11179.375,11122.925,11066.712,11010.734,10954.988,10899.47,10844.178,10789.109,10734.259,10679.625,10625.206,10570.996,10516.994,10463.197,10409.601,10356.204,10303.002,10249.992,10197.172,10144.538,10092.087,10039.817,9987.724,9935.805,9884.058,9832.478,9781.064,9729.812,9678.719,9627.783,9576.999,9526.366,9475.88,9425.537,9375.336,9325.273,9275.345,9225.549,9175.881,9126.34,9076.922,9027.623,8978.441,8929.374,8880.417,8831.567,8782.823,8734.18,8685.637,8637.189,8588.833,8540.567,8492.388,8444.293,8396.278,8348.341,8300.478,8252.687,8204.965,8157.308,8109.714,8062.179,8014.7,7967.275,7919.9,7872.573,7825.29,7778.049,7730.846,7683.678,7636.542,7589.436,7542.356,7495.299,7448.263,7401.243,7354.238,7307.244,7260.258,7213.277,7166.298,7119.319,7072.335,7025.345,6978.344,6931.33,6884.301,6837.252,6790.181,6743.086,6695.962,6648.807,6601.617,6554.391,6507.125,6459.819,6412.478,6365.106,6317.705,6270.281,6222.836,6175.374,6127.9,6080.416,6032.927,5985.437,5937.949,5890.467,5842.995,5795.536,5748.095,5700.675,5653.279,5605.913,5558.578,5511.28,5464.022,5416.807,5369.64,5322.524,5275.463,5228.461,5181.521,5134.648,5087.844,5041.115,4994.463,4947.892,4901.407,4855.011,4808.707,4762.499,4716.392,4670.389,4624.494,4578.71,4533.041,4487.491,4442.065,4396.764,4351.594,4306.559,4261.661,4216.905,4172.294,4127.832,4083.523,4039.371,3995.38,3951.553,3907.894,3864.406,3821.094,3777.962,3735.012,3692.25,3649.678,3607.3,3565.121,3523.143,3481.372,3439.809,3398.46,3357.328,3316.417,3275.73,3235.272,3195.045,3155.055,3115.304,3075.796,3036.536,2997.527,2958.772,2920.275,2882.041,2844.073,2806.375,2768.95,2731.802,2694.936,2658.354,2622.061,2586.06,2550.355,2514.95,2479.849,2445.056,2410.573,2376.406,2342.557,2309.03,2275.83,2242.96,2210.424,2178.226,2146.368,2114.856,2083.693,2052.882,2022.428,1992.334,1962.603,1933.241,1904.25,1875.634,1847.397,1819.543,1792.076,1764.999,1738.316,1712.031,1686.147,1660.669,1635.6,1610.938,1586.677,1562.813,1539.339,1516.25,1493.54,1471.204,1449.236,1427.63,1406.38,1385.482,1364.929,1344.716,1324.837,1305.287,1286.059,1267.149,1248.55,1230.257,1212.264,1194.567,1177.158,1160.033,1143.185,1126.61,1110.301,1094.253,1078.461,1062.918,1047.618,1032.558,1017.73,1003.13,988.752,974.591,960.641,946.896,933.352,920.002,906.841,893.864,881.066,868.44,855.981,843.684,831.544,819.554,807.71,796.006,784.436,772.995,761.677,750.478,739.391,728.411,717.533,706.751,696.059,685.453,674.926,664.475,654.097,643.79,633.55,623.375,613.262,603.208,593.21,583.267,573.374,563.53,553.731,543.975,534.258,524.579,514.935,505.322,495.738,486.18,476.646,467.132,457.636,448.155,438.687,429.228,419.777,410.329,400.883,391.435,381.983,372.524,363.056,353.575,344.079,334.565,325.03,315.472,305.887,296.274,286.629,276.959,267.275,257.59,247.916,238.264,228.648,219.079,209.569,200.131,190.776,181.518],r5=2685e3,a5=9131.25,o5=[1832.379,1966.886,2105.616,2248.492,2395.436,2546.373,2701.223,2859.954,3022.725,3189.558,3360.454,3535.412,3714.432,3897.516,4084.661,4275.869,4471.14,4670.473,4873.869,5081.327,5292.847,5508.431,5728.076,5951.784,6179.555,6411.388,6647.284,6887.242,7131.263,7379.346,7631.491,7887.7,8147.97,8412.304,8680.699,8953.157,9229.678,9510.261,9794.907,10083.615,10376.386,10673.219,10974.115,11279.073,11588.094,11901.177,12218.323,12539.531,12864.802,13194.135,13527.531,13864.989,14206.51,14552.093,14901.739,15255.447,15613.218,15975.051,16340.947,16710.906,17084.926,17463.01,17845.155,18231.364,18621.635,19015.968,19414.364,19816.822,20223.343,20633.926,21048.572,21467.281,21890.052,22316.885,22747.781,23182.739,23621.76,24064.844,24511.99,24963.198,25418.469,25877.802,26341.198,26808.657,27280.178,27755.761,28235.407,28719.116,29206.887,29698.72,30194.616,30694.575,31198.596,31706.68,32218.826,32735.034,33255.305,33779.639,34308.035,34840.493,35377.015,35917.598,36462.244,37010.953,37563.724,38120.558,38681.454,39246.412,39815.434,40388.517,40965.664,41546.872,42132.143,42721.477,43314.873,43912.332,44513.853,45119.437,45729.083,46342.792,46960.563,47582.397,48208.293,48838.252,49472.274,50110.357,50752.504,51398.713,52048.984,52703.318,53361.714,54024.173,54690.695,55361.278,56035.925,56714.634,57397.405,58084.239,58775.136,59470.095,60169.116,60872.2,61579.347,62290.556,63005.827,63725.161,64448.558,65176.017,65907.538,66643.122,67382.769,68126.478,68874.25,69626.084,70381.98,71141.94,71905.961,72674.045,73446.192,74222.401,75002.673,75787.007,76575.404,77367.863,78164.385,78964.969,79769.616,80578.325,81391.097,82207.932,83028.828,83853.788,84682.81,85515.894,86353.041,87194.25,88039.522,88888.857,89742.254,90599.713,91461.235,92326.819,93196.466,94070.176,94947.948,95829.782,96715.679,97605.639,98499.661,99397.746,100299.893,101206.102,102116.375,103030.709,103949.106,104871.566,105798.088,106728.673,107663.32,108602.03,109544.802,110491.637,111442.534,112397.494,113356.516,114319.601,115286.748,116257.958,117233.231,118212.565,119195.963,120183.423,121174.945,122170.53,123170.178,124173.888,125181.66,126193.495,127209.393,128229.353,129253.375,130281.46,131313.608,132349.818,133390.09,134434.426,135482.823,136535.283,137591.806,138652.391,139717.039,140785.749,141858.522,142935.357,144016.255,145101.215,146190.238,147283.323,148380.471,149481.682,150586.954,151696.29,152809.688,153927.148,155048.671,156174.257,157303.905,158437.615,159575.388,160717.224,161863.122,163013.082,164167.105,165325.191,166487.339,167653.55,168823.823,169998.159,171176.557,172359.017,173545.541,174736.126,175930.775,177129.485,178332.259,179539.095,180749.993,181964.954,183183.977,184407.063,185634.212,186865.422,188100.696,189340.032,190583.43,191830.891,193082.415,194338.001,195597.65,196861.361,198129.134,199400.97,200676.869,201956.83,203240.854,204528.94,205821.089,207117.3,208417.574,209721.91,211030.309,212342.77,213659.294,214979.88,216304.529,217633.241,218966.015,220302.851,221643.75,222988.712,224337.736,225690.822,227047.971,228409.183,229774.457,231143.794,232517.193,233894.654,235276.178,236661.765,238051.414,239445.126,240842.9,242244.737,243650.637,245060.598,246474.623,247892.71,249314.859,250741.071,252171.345,253605.682,255044.082,256486.544,257933.068,259383.655,260838.305,262297.017,263759.792,265226.629,266697.529,268172.491,269651.515,271134.603,272621.752,274112.965,275608.24,277107.577,278610.977,280118.439,281629.964,283145.551,284665.201,286188.914,287716.689,289248.526,290784.426,292324.389,293868.414,295416.502,296968.652,298524.864,300085.14,301649.477,303217.878,304790.34,306366.866,307947.453,309532.104,311120.817,312713.592,314310.43,315911.33,317516.293,319125.319,320738.407,322355.557,323976.77,325602.046,327231.384,328864.785,330502.248,332143.773,333789.362,335439.012,337092.726,338750.501,340412.34,342078.24,343748.204,345422.23,347100.318,348782.469,350468.682,352158.958,353853.297,355551.698,357254.162,358960.688,360671.276,362385.927,364104.641,365827.417,367554.256,369285.157,371020.121,372759.147,374502.236,376249.388,378000.601,379755.878,381515.217,383278.618,385046.082,386817.609,388593.198,390372.849,392156.563,393944.34,395736.179,397532.081,399332.045,401136.072,402944.161,404756.313,406572.527,408392.804,410217.144,412045.545,413878.01,415714.537,417555.126,419399.778,421248.493,423101.27,424958.11,426819.012,428683.976,430553.004,432426.093,434303.246,436184.46,438069.738,439959.078,441852.48,443749.945,445651.472,447557.062,449466.715,451380.43,453298.207,455220.047,457145.95,459075.915,461009.943,462948.033,464890.186,466836.401,468786.679,470741.019,472699.422,474661.887,476628.415,478599.006,480573.659,482552.374,484535.152,486521.993,488512.896,490507.861,492506.889,494509.98,496517.133,498528.349,500543.627,502562.968,504586.372,506613.837,508645.366,510680.957,512720.61,514764.326,516812.105,518863.946,520919.849,522979.815,525043.844,527111.935,529184.089,531260.305,533340.584,535424.925,537513.329,539605.796,541702.325,543802.916,545907.57,548016.286,550129.065,552245.907,554366.811,556491.778,558620.807,560753.899,562891.053,565032.27,567177.549,569326.891,571480.295,573637.762,575799.292,577964.884,580134.538,582308.255,584486.035,586667.877,588853.781,591043.749,593237.778,595435.87,597638.025,599844.243,602054.522,604268.865,606487.27,608709.737,610936.267,613166.86,615401.515,617640.232,619883.012,622129.855,624380.76,626635.728,628894.758,631157.851,633425.006,635696.224,637971.505,640250.848,642534.253,644821.721,647113.252,649408.845,651708.5,654012.218,656319.999,658631.842,660947.748,663267.716,665591.747,667919.84,670251.996,672588.215,674928.496,677272.839,679621.245,681973.714,684330.245,686690.839,689055.495,691424.214,693796.995,696173.839,698554.745,700939.714,703328.745,705721.839,708118.996,710520.215,712925.496,715334.84,717748.247,720165.716,722587.248,725012.842,727442.499,729876.218,732314,734755.844,737201.751,739651.721,742105.753,744563.847,747026.004,749492.224,751962.506,754436.851,756915.258,759397.728,761884.26,764374.855,766869.512,769368.232];function eo(s,e,t,n){const i=s.length-1,r=(n-e)/t;let a=Math.floor(r);a<1?a=1:a>i-2&&(a=i-2);const o=r-a,l=s[a-1],c=s[a],u=s[a+1],h=s[a+2],d=(u-l)/2,p=(h-c)/2,g=o*o,_=g*o;return(2*_-3*g+1)*c+(_-2*g+o)*d+(-2*_+3*g)*u+(_-g)*p}const l5=Cl+Pl,c5=Cl+(xh.length-2)*Pl;function bh(s){return s<l5?eo(s5,n5,i5,s):s>c5?eo(o5,r5,a5,s):eo(xh,Cl,Pl,s)}Gs[0][1];Gs[Gs.length-1][2];function u5(s,e){const t=l=>1+Math.abs(bh(l))/86400,n=Math.min(s,e),i=Math.max(s,e),r=n-t(n),a=i+t(i);return Gs.filter(([,l,c],u)=>(u===0?-1/0:l)<=a&&(u===Gs.length-1?1/0:c)>r).map(([l])=>l)}const sa=di(-8e3,1,1),ra=di(2101,1,1)-1/1440,to=1495978707e-1,h5=81.3005682214972,Ir=23.439291111*Math.PI/180,Bi=new Map,Nr=new Map;async function d5(s){return Bi.has(s)?Bi.get(s):(Nr.has(s)||Nr.set(s,fetch(`./ephemeris/${s}`).then(e=>{if(!e.ok)throw new Error(`Ephemeris ${s}: ${e.status}`);return e.arrayBuffer()}).then(e=>{const t=K3(e);for(Bi.set(s,t);Bi.size>4;)Bi.delete(Bi.keys().next().value);return t}).finally(()=>Nr.delete(s))),Nr.get(s))}function f5(s,e){const t=[0,0,0];return Q3(s,e,t),t}function no(s){return{x:s[0]/to,y:(-Math.sin(Ir)*s[1]+Math.cos(Ir)*s[2])/to,z:(Math.cos(Ir)*s[1]+Math.sin(Ir)*s[2])/to}}function bu(s,e){return s.map((t,n)=>t-e[n])}async function p5(s){if(s<sa||s>ra)throw new RangeError("outside time range");const e=s+bh(s)/86400,n=(await Promise.all(u5(s,s).map(d5))).find(u=>u.start<=e&&e<u.end);if(!n)throw new Error("ephemeris table not available");const i=u=>{const h=n.series.get(u);if(!h)throw new Error(`missing body ${u}`);return f5(h,e)},r=i(0),a=i(1),o=i(200),l=o.map((u,h)=>u-a[h]/(1+h5)),c={sun:{x:0,y:0,z:0},earth:no(bu(l,r)),moon:no(a)};for(const[u,h]of[["mercury",2],["venus",3],["mars",4],["jupiter",5],["saturn",6],["uranus",7],["neptune",8]])c[u]=no(bu(i(h),r));return c}function m5(s,e,t,n,i,r){for(const c of[s,t,n,i,r])if(!Number.isInteger(c))throw new Error("invalid date");if(s<1||t<1||t>12||n<1||n>31||i<0||i>23||r<0||r>59)throw new Error("invalid date");const a=e==="bc"?1-s:s,o=di(a,t,n,i+r/60),l=tl(o,"gregorian");if(l.year!==a||l.month!==t||l.day!==n||o<sa||o>ra)throw new Error("invalid or out-of-range date");return o}const Ur={de:{title:"Zeitreise",open:"Zeit",close:"Schliessen",now:"Heute / jetzt",apply:"Datum setzen",year:"Jahr",month:"Monat",day:"Tag",hour:"Stunde",minute:"Minute",bc:"v. Chr.",ad:"n. Chr.",speed:"Geschwindigkeit",back:"◀ Rückwärts",pause:"Ⅱ Pause",forward:"Vorwärts ▶",invalid:"Ungültiges Datum. Bereich: 8001 v. Chr. bis 2100 n. Chr.",loading:"Ephemeriden werden geladen …",failed:"Daten konnten nicht geladen werden. Bitte erneut versuchen.",note:"UTC / UT; vor 1582 zurückgerechneter gregorianischer Kalender. Kein Jahr 0. Planeten und Mond: JPL DE440/DE441; sehr alte Mondpositionen durch ungewisse Erdrotation weniger sicher. Andere Monde, Zwergplaneten, Gürtel und Raumfahrzeuge sind schematisch; Sonden erscheinen erst ab Missionsstart. Bahnlinien sind idealisierte Kreise.",dayRate:"Tage pro Sekunde",source:"NASA/JPL · DE440/DE441 ↗"},en:{title:"Time travel",open:"Time",close:"Close",now:"Today / now",apply:"Set date",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",bc:"BC",ad:"AD",speed:"Speed",back:"◀ Backward",pause:"Ⅱ Pause",forward:"Forward ▶",invalid:"Invalid date. Range: 8001 BC to AD 2100.",loading:"Loading ephemeris data …",failed:"Data could not be loaded. Please try again.",note:"UTC / UT; proleptic Gregorian calendar before 1582. There is no year 0. Planets and Moon: JPL DE440/DE441; the ancient Moon is less certain because Earth rotation is uncertain. Other moons, dwarf planets, belts and spacecraft are schematic; spacecraft appear only after launch. Orbit lines are idealised circles.",dayRate:"days per second",source:"NASA/JPL · DE440/DE441 ↗"}};function g5({getJD:s,onDate:e,onRate:t,onOpen:n}){const i=document.createElement("section");i.className="time-panel",i.hidden=!0,i.setAttribute("aria-label","Zeitreise"),i.innerHTML='<div class="time-heading"><strong class="time-title"></strong><div class="time-langs"><button type="button" data-time-lang="de">DE</button><button type="button" data-time-lang="en">EN</button></div><button type="button" class="time-close">×</button></div><output class="time-current"></output><form class="time-form"><label class="time-year"><span></span><input name="year" type="number" min="1" max="8001" required inputmode="numeric"></label><label class="time-era"><span>Ära / Era</span><select name="era"><option value="bc"></option><option value="ad"></option></select></label><label><span class="time-month"></span><input name="month" type="number" min="1" max="12" required inputmode="numeric"></label><label><span class="time-day"></span><input name="day" type="number" min="1" max="31" required inputmode="numeric"></label><label><span class="time-hour"></span><input name="hour" type="number" min="0" max="23" required inputmode="numeric"></label><label><span class="time-minute"></span><input name="minute" type="number" min="0" max="59" required inputmode="numeric"></label><div class="time-actions"><button type="submit" class="time-apply"></button><button type="button" class="time-now"></button></div></form><div class="time-speed"><label><span></span><select><option value="1">1</option><option value="30">30</option><option value="365">365</option><option value="36525">36525</option></select></label><div class="time-direction"><button class="time-back" type="button"></button><button class="time-pause" type="button"></button><button class="time-forward" type="button"></button></div></div><div class="time-status" role="status"></div><p class="time-note"></p><a href="https://ssd.jpl.nasa.gov/planets/eph_export.html" target="_blank" rel="noopener noreferrer"></a>',document.querySelector("main").append(i);let r="de",a=0;const o=i.querySelector("form"),l=i.querySelector(".time-speed select"),c=i.querySelector(".time-current"),u=i.querySelector(".time-status"),h=(v,x)=>i.querySelector(v).textContent=x;function d(){const v=Ur[r];i.lang=r,i.setAttribute("aria-label",v.title);for(const[x,T]of[[".time-title","title"],[".time-year span","year"],[".time-month","month"],[".time-day","day"],[".time-hour","hour"],[".time-minute","minute"],[".time-apply","apply"],[".time-now","now"],[".time-back","back"],[".time-pause","pause"],[".time-forward","forward"],[".time-note","note"],[".time-panel a","source"]])h(x,v[T]);i.querySelector(".time-speed label span").textContent=`${v.speed} (${v.dayRate})`,i.querySelector("[value=bc]").textContent=v.bc,i.querySelector("[value=ad]").textContent=v.ad,i.querySelector(".time-close").setAttribute("aria-label",v.close),i.querySelector(".time-speed select").setAttribute("aria-label",`${v.speed} (${v.dayRate})`),i.querySelectorAll("[data-time-lang]").forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.timeLang===r))),p()}function p(){const v=tl(Math.round(s()*1440)/1440,"gregorian"),x=Ur[r],T=Math.min(1439,Math.max(0,Math.round(v.hour*60))),w=C=>String(C).padStart(2,"0");c.textContent=`${w(v.day)}.${w(v.month)}.${v.year<=0?1-v.year:v.year} ${v.year<=0?x.bc:x.ad} · ${w(Math.floor(T/60))}:${w(T%60)} UT`,document.querySelector(".time-readout").textContent=c.textContent}function g(){const v=tl(Math.round(s()*1440)/1440,"gregorian"),x=Math.round(v.hour*60);o.elements.year.value=v.year<=0?1-v.year:v.year,o.elements.era.value=v.year<=0?"bc":"ad",o.elements.month.value=v.month,o.elements.day.value=v.day,o.elements.hour.value=Math.floor(x/60),o.elements.minute.value=x%60}function _(v){a=v,i.querySelectorAll(".time-direction button").forEach(x=>x.setAttribute("aria-pressed",String(x.classList.contains("time-back")&&v<0||x.classList.contains("time-pause")&&v===0||x.classList.contains("time-forward")&&v>0))),t(v*Number(l.value))}function m(v){u.textContent=v?Ur[r][v]:"",document.querySelector(".time-load-status").textContent=v?Ur[r][v]:""}o.addEventListener("submit",v=>{v.preventDefault();try{const x=o.elements,T=m5(Number(x.year.value),x.era.value,Number(x.month.value),Number(x.day.value),Number(x.hour.value),Number(x.minute.value));_(0),m("loading"),e(T).then(()=>{m(""),p(),g()}).catch(()=>m("failed"))}catch{m("invalid")}}),i.querySelector(".time-now").onclick=()=>{_(0),m("loading"),e(24405875e-1+Date.now()/864e5).then(()=>{m(""),p(),g()}).catch(()=>m("failed"))},i.querySelector(".time-back").onclick=()=>_(-1),i.querySelector(".time-pause").onclick=()=>_(0),i.querySelector(".time-forward").onclick=()=>_(1),l.onchange=()=>_(a),i.querySelectorAll("[data-time-lang]").forEach(v=>v.onclick=()=>{r=v.dataset.timeLang,d()}),i.querySelector(".time-close").onclick=()=>f();function f(){i.hidden=!0,document.querySelectorAll(".time-open").forEach(v=>v.setAttribute("aria-expanded","false"))}function b(){n(),i.hidden=!1,g(),d(),document.querySelectorAll(".time-open").forEach(v=>v.setAttribute("aria-expanded","true")),i.querySelector(".time-close").focus()}return document.querySelectorAll(".time-open").forEach(v=>v.onclick=()=>i.hidden?b():f()),d(),_(0),{update:p,close:f,open:b,message:m,stop(){_(0)},isOpen:()=>!i.hidden}}const _5=document.querySelector("#app");_5.innerHTML=`<main><div id="scene" aria-label="Interaktive 3D-Ansicht des Sonnensystems"></div><div class="shade"></div><header><a class="brand" href="#" aria-label="Cosmos Explorer Start"><span class="brand-mark">✳</span><span><b>SOLARION</b><small>COSMOS EXPLORER</small></span></a><div class="header-right"><button class="time-open desktop-time" aria-expanded="false">◷ Zeitreise</button><span class="live"><i></i> ZEITMODELL</span><button class="help" aria-label="Bedienung anzeigen">?</button></div></header><section class="intro"><div class="eyebrow"><span></span> EINE REISE DURCH UNSERE NACHBARSCHAFT</div><h1>Das Sonnensystem<span>.</span></h1><p>Acht Planeten. Ein Stern. Unendlich viel zu entdecken.</p></section><aside class="panel" id="destination-panel"><div class="panel-top"><div><div class="overline">NAVIGATION</div><h2>Wohin geht die Reise?</h2></div><span class="panel-icon">↗</span></div><label class="search"><span>⌕</span><input id="search" placeholder="Himmelskörper suchen" autocomplete="off" aria-label="Himmelskörper suchen"><kbd>⌘ K</kbd></label><div class="list-label"><span>UNSER SONNENSYSTEM</span><span>22 ZIELE</span></div><div class="body-list" id="body-list"></div><div class="no-results" hidden>Kein Himmelskörper gefunden.</div></aside><div class="bottom"><div class="scale-block"><span class="overline">MASSSTAB</span><div class="scale-switch" role="group" aria-label="Massstab"><button class="active" data-scale="overview">Entdecken</button><button data-scale="real">Realistisch</button></div></div><div class="scale-description"><span class="scale-title">ENTDECKERANSICHT</span><span class="scale-copy">Grössen und Abstände für die Übersicht angepasst</span></div><div class="bottom-actions"><button id="reset" title="Zur Übersicht">⌂ <span>Übersicht</span></button><button id="pause" title="Animation pausieren">Ⅱ <span>Pause</span></button></div></div><div class="real-guide" hidden><span class="overline">REALISTISCHER MASSSTAB</span><strong>Viel Raum zum Entdecken.</strong><p>Die echten Abstände sind riesig. Wähle ein Ziel und fliege direkt dorthin.</p><div><button data-go="jupiter">Jupiter erkunden ↗</button><button data-go="europa">Europa entdecken ↗</button><button id="dismiss-guide">Frei erkunden</button></div></div><div class="belt-note">GÜRTELKÖRPER VERGRÖSSERT · DICHTE SCHEMATISCH</div><div id="labels"></div><div class="scene-hint">ZIEHEN ZUM DREHEN <span>·</span> SCROLLEN ZUM ZOOMEN</div><div class="selected"><span class="overline">AUSGEWÄHLTES ZIEL</span><div id="selected-name">Sonnensystem</div><span id="selected-detail">Freie Erkundung</span><button class="info-open" hidden>ⓘ &nbsp; Wissen · DE / EN</button><button class="tidal-open" hidden>✦ &nbsp; Europas Gezeitenheizung</button><button class="earth-tides-open" hidden>✦ &nbsp; Ebbe und Flut erkunden</button><div class="system-links" hidden aria-label="Jupiter und seine Monde"><button data-go="jupiter">Jupiter</button><button data-go="io">Io</button><button data-go="europa">Europa</button><button data-go="ganymede">Ganymed</button><button data-go="callisto">Kallisto</button></div><div class="belt-links" hidden aria-label="Gürtel und Zwergplaneten"><button data-go="main_belt">Asteroidengürtel</button><button data-go="ceres">Ceres</button><button data-go="kuiper_belt">Kuipergürtel</button><button data-go="pluto">Pluto</button></div><div class="craft-links" hidden aria-label="Raumfahrtziele"><button data-go="earth">Erde</button><button data-go="moon">Mond</button><button data-go="iss">ISS</button><button data-go="webb">James Webb</button><button data-go="voyager1">Voyager 1</button><button data-go="voyager2">Voyager 2</button></div></div><div class="info-modal" hidden><section class="info-card" role="region" aria-labelledby="info-title"><div class="info-heading"><span class="overline">COSMOS EXPLORER · INFO</span><button class="info-close" aria-label="Schliessen / Close">×</button></div><label class="info-destination"><span>ZIEL / DESTINATION</span><select aria-label="Ziel auswählen / Choose destination"></select></label><div class="info-languages" role="group" aria-label="Sprache / Language"><button data-lang="de" aria-pressed="true">DE</button><button data-lang="en" aria-pressed="false">EN</button></div><h2 id="info-title"></h2><p id="info-text"></p><button class="tidal-info-open" hidden>✦ &nbsp; Gezeitenheizung erkunden</button><button class="earth-tides-info-open" hidden>✦ &nbsp; Ebbe und Flut erkunden</button><a id="info-source" target="_blank" rel="noopener noreferrer">Quelle / Source ↗</a><div class="info-note"></div></section></div><button class="time-open time-readout" aria-label="Zeitreise öffnen" aria-expanded="false"></button><div class="time-load-status" role="status"></div><div class="mobile-toolbar" aria-label="Mobile Steuerung"><button class="mobile-destinations" aria-controls="destination-panel" aria-expanded="false">☰ <span>Ziele</span></button><span class="mobile-current" aria-live="polite">Sonnensystem</span><button class="time-open mobile-time" aria-expanded="false">◷ Zeit</button><button class="mobile-information" aria-controls="info-title" aria-expanded="false" disabled>ⓘ <span>Wissen</span></button></div><div class="modal" hidden><div class="modal-card"><button class="close" aria-label="Schliessen">×</button><span class="overline">SO FUNKTIONIERT'S</span><h2>Das All erkunden</h2><p>Ziehe mit Maus oder einem Finger, um die Ansicht zu drehen. Zoome mit dem Mausrad oder mit zwei Fingern. Wähle links ein Ziel, um dorthin zu fliegen.</p><p>Im realistischen Massstab stimmen die Grössen und mittleren Abstände der Himmelskörper im Verhältnis zueinander. Die Zielauswahl hilft, die winzigen Ziele zu finden.</p><p>Die Bahnlinien sind vereinfachte Kreise. Die Zeitreise berechnet Planeten und Mond anhand von Ephemeriden; andere Körper sind schematisch. Raumfahrzeuge und Gürtelkörper sind stark vergrössert; die sichtbare Dichte der Gürtel ist schematisch.</p><p>Webb liegt schematisch auf einer Bahn um L2 ausserhalb des Erdschattens. Voyager 1 und 2 teilen dasselbe Modell.</p><a href="https://www.nasa.gov/nasa-brand-center/images-and-media/" target="_blank" rel="noopener">3D-Modelle: NASA 3D Resources ↗</a><br><a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noopener">Planetentexturen: Solar System Scope · CC BY 4.0 ↗</a><br><a href="https://svs.gsfc.nasa.gov/4720/" target="_blank" rel="noopener">Mondkarte: NASA Scientific Visualization Studio ↗</a></div></div></main>`;const yh=document.querySelector("#scene"),Ll=document.querySelector("#labels");let Qt;try{Qt=new q2({antialias:!matchMedia("(pointer: coarse)").matches,powerPreference:"high-performance"})}catch(s){throw yh.innerHTML='<div class="webgl-error">Die 3D-Ansicht konnte nicht gestartet werden. Bitte prüfe, ob dein Browser WebGL unterstützt.</div>',s}Qt.setPixelRatio(Math.min(devicePixelRatio,matchMedia("(pointer: coarse)").matches?1.25:1.75));Qt.setSize(innerWidth,innerHeight);Qt.outputColorSpace=dt;Qt.toneMapping=Au;Qt.toneMappingExposure=1.35;yh.append(Qt.domElement);const Xt=new xf,lt=new Ut(45,innerWidth/innerHeight,1e-5,12e4);lt.position.set(0,45,60);const un=new Y2(lt,Qt.domElement);un.enableDamping=!0;un.dampingFactor=.07;un.minDistance=1e-5;un.maxDistance=15e3;un.enablePan=!0;Xt.add(new Zf(8886463,.32));const v5=new ah(16777215,2.5,0,0);Xt.add(v5);const Mh=new rh,aa=s=>`./${s}`,Sh=Mh.load(aa("textures/stars_milky_way.jpg"));Sh.colorSpace=dt;Xt.background=Sh;const Eh=new Et,Th=[];for(let s=0;s<1800;s++){const e=new L().randomDirection().multiplyScalar(1e4);Th.push(e.x,e.y,e.z)}Eh.setAttribute("position",new yt(Th,3));Xt.add(new eh(Eh,new gl({color:16777215,size:3,sizeAttenuation:!1,transparent:!0,opacity:.5})));const x5=new bl(1,48,32),gt=[],Rs=new on;Xt.add(Rs);const b5={};for(const s of[...Bn,...wl]){const e=Mh.load(aa(`textures/${s.texture}.jpg`));e.colorSpace=dt,b5[s.id]=e;const t=s.id==="sun"?new xn({map:e,color:16765835}):new Ks({map:e,roughness:1}),n=new Pt(x5,t);n.rotation.z=s.tidallyLocked?0:.045,Xt.add(n);let i=null;if(s.id==="saturn"||s.id==="uranus"){const a=new xl(1.3,s.id==="saturn"?2.25:1.65,96),o=a.attributes.position,l=a.attributes.uv;for(let c=0;c<o.count;c++){const u=Math.hypot(o.getX(c),o.getY(c));l.setXY(c,(u-1.3)/(s.id==="saturn"?.95:.35),.5)}i=new Pt(a,new xn({color:s.id==="saturn"?14336916:10601411,side:sn,transparent:!0,opacity:s.id==="saturn"?.63:.23})),i.rotation.x=-Math.PI/2+.22,n.add(i)}const r=document.createElement("button");r.className="planet-label",r.textContent=s.name,r.addEventListener("click",()=>Qn(s.id)),Ll.append(r),gt.push({b:s,mesh:n,label:r})}const Ah=new V3;Ah.setDecoderPath(aa("draco/"));const y5=new o3().setDRACOLoader(Ah),io=new Map,fi=new oh(14412287,1.5);fi.layers.set(1);fi.visible=!1;Xt.add(fi);lt.layers.enable(1);for(const s of[..._h,...el]){const e=new on;e.userData.bodyId=s.id;const t=new Pt(new vl(.7),new xn({color:10149095,wireframe:!0}));e.add(t),Xt.add(e);const n=document.createElement("button");if(n.className="planet-label craft-label",n.textContent=s.name,n.addEventListener("click",()=>Qn(s.id)),Ll.append(n),gt.push({b:s,mesh:e,label:n}),!io.has(s.model)){const i=s.model==="iss"&&(matchMedia("(pointer: coarse)").matches||innerWidth<=700);io.set(s.model,y5.loadAsync(aa(`models/${i?"iss-mobile":s.model}.glb`)))}io.get(s.model).then(i=>{const r=i.scene.clone(!0);r.traverse(h=>h.layers.enable(1)),r.updateMatrixWorld(!0);const a=new Sn().setFromObject(r),o=a.getSize(new L),l=a.getCenter(new L),c=Math.max(o.x,o.y,o.z);if(!Number.isFinite(c)||c<=0)throw new Error("Invalid model bounds");const u=new on;r.position.sub(l),u.add(r),u.scale.setScalar(2/c),e.remove(t),t.geometry.dispose(),t.material.dispose(),e.add(u)}).catch(i=>{console.error(`3D-Modell ${s.name} konnte nicht geladen werden`,i),n.title="Vereinfachter Platzhalter: Modell nicht geladen"})}const Dl=j3(Rl,Xt);for(const s of Rl){const e=new on;Xt.add(e);const t=document.createElement("button");t.className="planet-label belt-label",t.textContent=s.name,t.addEventListener("click",()=>Qn(s.id)),Ll.append(t),gt.push({b:s,mesh:e,label:t})}function wh(){Dl.forEach(s=>s.setScale(xt))}const Il=new bf(new Ku({map:M5(),color:16752685,transparent:!0,blending:ao,depthWrite:!1,opacity:.65}));Xt.add(Il);function M5(){const s=document.createElement("canvas");s.width=s.height=256;const e=s.getContext("2d"),t=e.createRadialGradient(128,128,18,128,128,128);return t.addColorStop(0,"rgba(255,230,170,.7)"),t.addColorStop(.25,"rgba(255,150,40,.3)"),t.addColorStop(1,"rgba(255,100,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Pf(s)}const Nl=wl.map(s=>{const e=new Ys(new Et,new Qr({color:11061462,transparent:!0,opacity:.35,depthWrite:!1}));return Xt.add(e),{b:s,line:e}});let xt="overview",Ae=null,oa=!1,us=24405875e-1+Date.now()/864e5,zi=us-2451545,so=performance.now(),Nn=null,Vr=new L,Hi=null,_n=0,ro=!1,Cs=0,nl=0;const yu={iss:di(1998,11,20),webb:di(2021,12,25),voyager1:di(1977,9,5),voyager2:di(1977,8,20)},Wi=s=>!yu[s.id]||us>=yu[s.id];function Ws(s){return s.kind==="region"||s.kind==="craft"?xt==="real"?s.realRadius:s.viewRadius:xt==="real"?s.radius/1495978707e-3:s.viewRadius}function Rh(s){return xt==="real"?Bn[s].au*100:gh[s]}function Ch(){for(;Rs.children.length;){const s=Rs.children[0];Rs.remove(s),s.geometry.dispose(),s.material.dispose()}for(let s=1;s<Bn.length;s++){const e=Rh(s),t=[];for(let n=0;n<=256;n++){let i=n/256*Math.PI*2;t.push(new L(Math.cos(i)*e,0,Math.sin(i)*e))}Rs.add(new Ys(new Et().setFromPoints(t),new Qr({color:6321294,transparent:!0,opacity:.25})))}}function Ph(s){return xt==="real"?s.orbitKm/1495978707e-3:s.viewOrbit}function $s(){gt.forEach(({b:e,mesh:t},n)=>{if(t.visible=!!Hi&&Wi(e),e.kind==="region"){const i=xt==="real"?(e.auMin+e.auMax)*50:(e.viewMin+e.viewMax)/2;t.position.set(Math.cos(e.phase)*i,0,Math.sin(e.phase)*i)}else if(e.kind==="dwarf"){const i=xt==="real"?e.au*100:e.viewOrbit,r=e.phase+zi/e.period*Math.PI*2;t.position.set(Math.cos(r)*i,0,Math.sin(r)*i)}else if(e.kind==="craft")if(e.parent){const i=gt.find(r=>r.b.id==="earth").mesh.position;if(e.id==="iss"){const r=zi*.13,a=xt==="real"?6791/1495978707e-3:1.08;t.position.copy(i).add(new L(Math.cos(r)*a,Math.sin(r)*a*.35,Math.sin(r)*a))}else{const r=i.clone().normalize(),a=xt==="real"?15e5/1495978707e-3:2.9,o=xt==="real"?.18:.55,l=.8+zi*.004,c=new L(-r.z,0,r.x);t.position.copy(i).addScaledVector(r,a).addScaledVector(c,Math.cos(l)*o),t.position.y+=Math.sin(l)*o}}else{const i=xt==="real"?e.au*100:e.id==="voyager1"?55:61;t.position.set(Math.cos(e.phase)*i,(e.id==="voyager1"?1:-1)*i*.12,Math.sin(e.phase)*i)}else if(e.parent){const i=gt.find(r=>r.b.id===e.parent).mesh;if(e.id==="moon"&&Hi){const r=Hi.moon,a=new L(r.x,r.y,r.z),o=a.length();a.multiplyScalar(xt==="real"?100:e.viewOrbit*o/(384400/1495978707e-1)/o),t.position.copy(i.position).add(a),t.rotation.y=vu(Math.atan2(a.z,a.x))}else{const r=e.phase+zi/e.period*Math.PI*2*.015,a=Ph(e);t.position.copy(i.position).add(new L(Math.cos(r)*a,0,Math.sin(r)*a)),e.tidallyLocked&&(t.rotation.y=vu(r))}}else if(Hi&&e.id!=="sun"){const i=Hi[e.id],r=new L(i.x,i.y,i.z),a=xt==="real"?100:gh[n]/e.au;t.position.copy(r.multiplyScalar(a))}else if(e.id==="sun")t.position.set(0,0,0);else{const i=e.phase+(e.period?zi/e.period*Math.PI*2:0),r=Rh(n);t.position.set(Math.cos(i)*r,0,Math.sin(i)*r)}t.scale.setScalar(Ws(e))}),document.querySelectorAll(".body-row").forEach(e=>{const t=gt.find(n=>n.b.id===e.dataset.id);e.disabled=!!t&&!Wi(t.b),e.title=e.disabled?"Vor Missionsstart nicht verfügbar / Unavailable before launch":""}),document.querySelectorAll(".info-destination option").forEach(e=>{const t=gt.find(n=>n.b.id===e.value);e.disabled=!!t&&!Wi(t.b)}),document.querySelectorAll(".craft-links [data-go]").forEach(e=>{const t=gt.find(n=>n.b.id===e.dataset.go);e.disabled=!!t&&!Wi(t.b)}),Nl.forEach(({b:e,line:t})=>t.position.copy(gt.find(n=>n.b.id===e.parent).mesh.position));const s=Ws(Bn[0]);Il.scale.setScalar(s*7)}function Lh(){Nl.forEach(({b:s,line:e})=>{const t=Ph(s),n=[];for(let i=0;i<=128;i++){const r=i/128*Math.PI*2;n.push(new L(Math.cos(r)*t,0,Math.sin(r)*t))}e.geometry.dispose(),e.geometry=new Et().setFromPoints(n)})}function la(){document.querySelector(".real-guide").hidden=xt!=="real"||!!Ae||oa,document.querySelector(".info-open").hidden=!Ae||!Vs[Ae.b.id],document.querySelector(".tidal-open").hidden=Ae?.b.id!=="europa",document.querySelector(".tidal-info-open").hidden=Ae?.b.id!=="europa";const s=!!Ae&&["earth","moon"].includes(Ae.b.id);document.querySelector(".earth-tides-open").hidden=!s,document.querySelector(".earth-tides-info-open").hidden=!s;const e=!!Ae&&(Ae.b.id==="jupiter"||Ae.b.parent==="jupiter");document.querySelector(".belt-links").hidden=!Ae||!(Ae.b.kind==="region"||Ae.b.kind==="dwarf"),Dl.forEach(t=>t.instances.visible=!(xt==="real"&&Ae?.b.kind==="dwarf")),document.querySelector(".craft-links").hidden=!Ae||!(Ae.b.kind==="craft"||Ae.b.id==="earth"||Ae.b.id==="moon"),document.querySelector(".system-links").hidden=!e,Nl.forEach(({b:t,line:n})=>n.visible=!!Ae&&(Ae.b.id===t.parent||Ae.b.id===t.id||Ae.b.parent===t.parent))}function S5(){const s=lt.position.distanceTo(un.target);let e=1/0;for(const{b:i,mesh:r}of gt)i.kind!=="region"&&(e=Math.min(e,Math.max(0,lt.position.distanceTo(r.position)-Ws(i))));const t=Math.max(1e-6,Math.min(s/1e3,e/4));Math.abs(lt.near-t)>t*.01&&(lt.near=t,lt.updateProjectionMatrix());const n=gt[0].mesh;Il.position.copy(n.position).add(n.position.clone().sub(lt.position).normalize().multiplyScalar(Ws(Bn[0])*1.05))}function Qn(s){const e=document.body.classList.contains("mobile-nav-open");hs(!1),e&&matchMedia("(max-width:700px)").matches&&ca.focus();const t=gt.find(a=>a.b.id===s);if(!t||!Wi(t.b))return;Ae=t,gt.forEach(a=>a.label.classList.toggle("active-target",a===t)),$s();const n=Ws(t.b),i=t.b.kind==="region"?new L(0,1.15,1).normalize():s==="iss"?t.mesh.position.clone().sub(gt.find(a=>a.b.id==="earth").mesh.position).normalize().add(new L(0,.3,0)).normalize():t.b.parent||s==="jupiter"||t.b.kind==="craft"||t.b.kind==="dwarf"?t.mesh.position.clone().negate().normalize().add(new L(0,.3,0)).normalize():new L(1,.45,1).normalize();if(t.b.kind==="craft"){const a=s==="iss"?new L(1,.4,.3):s==="webb"?new L(.3,1,.45):new L(.35,1,.45);t.mesh.quaternion.setFromUnitVectors(a.normalize(),i)}let r=t.mesh.position.clone().addScaledVector(i,n*(t.b.kind==="craft"?(s.startsWith("voyager")?2.7:4.2)*Math.max(1,.85/lt.aspect):s==="saturn"?8:6));Nn={start:performance.now(),fromCamera:lt.position.clone(),fromTarget:un.target.clone(),offset:r.sub(t.mesh.position)},Vr.copy(t.mesh.position),document.querySelector("#selected-name").textContent=t.b.name,document.querySelector(".mobile-current").textContent=t.b.name,document.querySelector(".mobile-information").disabled=!Vs[s],document.querySelector("#selected-detail").textContent=t.b.type+(t.b.kind==="region"?" · Körper stark vergrössert · schematisch":t.b.kind==="craft"?(s==="iss"?" · Erdorbit schematisch":s==="webb"?" · Halo um L2 schematisch":" · Position schematisch")+" · Modell vergrössert":t.b.parent?t.b.parent==="earth"?" · Erdmond · Ephemeride":" · Umläuft Jupiter · schematisch":t.b.au?` · ${t.b.au.toLocaleString("de-CH")} AE von der Sonne`:" · Zentrum unseres Sonnensystems"),document.querySelectorAll(".body-row").forEach(a=>a.classList.toggle("chosen",a.dataset.id===s)),la(),fn.hidden||(Ol(),ua())}function Ul(){fn.hidden||ds(!1),hs(!1),Ae=null,gt.forEach(s=>s.label.classList.remove("active-target")),document.querySelector(".mobile-current").textContent="Sonnensystem",document.querySelector(".mobile-information").disabled=!0,oa=!1,Nn={start:performance.now(),fromCamera:lt.position.clone(),fromTarget:un.target.clone(),absolute:xt==="real"?new L(0,3300,4200):new L(0,45,60)},document.querySelector("#selected-name").textContent="Sonnensystem",document.querySelector("#selected-detail").textContent="Freie Erkundung",document.querySelectorAll(".body-row").forEach(s=>s.classList.remove("chosen")),la()}function E5(s){xt=s,oa=!1,document.querySelectorAll("[data-scale]").forEach(e=>e.classList.toggle("active",e.dataset.scale===s)),document.querySelector(".scale-title").textContent=s==="real"?"REALISTISCHER MASSSTAB":"ENTDECKERANSICHT",document.querySelector(".scale-copy").textContent=s==="real"?"Planeten massstäblich · Gürtelkörper und Raumfahrzeuge vergrössert":"Grössen und Abstände für die Übersicht angepasst",Ch(),Lh(),wh(),$s(),Ae?Qn(Ae.b.id):Ul()}const T5=document.querySelector("#body-list"),Dh=[...Bn.flatMap(s=>[s,...wl.filter(e=>e.parent===s.id),...el.filter(e=>e.parent===s.id),...Rl.filter(e=>e.after===s.id).flatMap(e=>[e,..._h.filter(t=>t.region===e.id)])]),...el.filter(s=>!s.parent)];Dh.forEach((s,e)=>{const t=document.createElement("button");t.className="body-row"+(s.parent?" satellite-row":"")+(s.kind==="craft"?" craft-row":"")+(s.kind==="region"||s.kind==="dwarf"?" belt-row":""),t.dataset.id=s.id,t.innerHTML=`<span class="row-number">${s.parent?"↳":s.kind==="craft"||s.kind==="dwarf"||s.kind==="region"?"✦":String(Bn.indexOf(s)+1).padStart(2,"0")}</span><span class="planet-dot ${s.id}"></span><span class="row-text"><b>${s.name}</b><small>${s.type}</small></span><span class="row-arrow">↗</span>`,t.addEventListener("click",()=>Qn(s.id)),T5.append(t)});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",()=>Qn(s.dataset.go)));document.querySelector("#dismiss-guide").addEventListener("click",()=>{oa=!0,la()});document.querySelector("#search").addEventListener("input",s=>{let e=s.target.value.toLocaleLowerCase("de"),t=0;document.querySelectorAll(".body-row").forEach(n=>{let i=(n.textContent+" "+(n.dataset.id==="webb"?"jwst james webb weltraumteleskop":n.dataset.id==="moon"?"moon erdmond mond luna":n.dataset.id==="main_belt"?"asteroid belt hauptgürtel asteroiden":n.dataset.id==="kuiper_belt"?"kuiper belt kbo":"")).toLocaleLowerCase("de").includes(e);n.hidden=!i,i&&t++}),document.querySelector(".no-results").hidden=t>0});document.querySelectorAll("[data-scale]").forEach(s=>s.addEventListener("click",()=>E5(s.dataset.scale)));document.querySelector("#reset").addEventListener("click",Ul);document.querySelector("#pause").addEventListener("click",()=>{_n?hn.stop():hn.open()});let Zt="de";const fn=document.querySelector(".info-modal"),rs=document.querySelector(".info-open"),$r=document.querySelector(".info-destination select"),ca=document.querySelector(".mobile-destinations"),Xs=document.querySelector(".mobile-information");function hs(s){document.body.classList.toggle("mobile-nav-open",s),ca.setAttribute("aria-expanded",String(s))}ca.addEventListener("click",()=>{fn.hidden||ds(!1),hs(!document.body.classList.contains("mobile-nav-open"))});Xs.addEventListener("click",()=>{fn.hidden?(hs(!1),rs.click()):ds()});for(const s of Dh){const e=document.createElement("option");e.value=s.id,e.textContent=s.name,$r.append(e)}$r.addEventListener("change",()=>Qn($r.value));function Ol(){if(!Ae)return;const s=Vs[Ae.b.id];s&&($r.value=Ae.b.id,document.querySelector(".info-card").scrollTop=0,document.querySelector("#info-title").textContent=s[Zt][0],document.querySelector("#info-text").textContent=s[Zt][1],document.querySelector("#info-text").lang=Zt,document.querySelector("#info-title").lang=Zt,document.querySelector(".earth-tides-info-open").textContent=Zt==="de"?"✦  Ebbe und Flut erkunden":"✦  Explore ocean tides",document.querySelector(".tidal-info-open").textContent=Zt==="de"?"✦  Gezeitenheizung erkunden":"✦  Explore tidal heating",document.querySelector("#info-source").href=s.url,document.querySelector("#info-source").textContent=Zt==="de"?"Quelle: NASA ↗":"Source: NASA ↗",document.querySelector(".info-note").textContent=Zt==="de"?Bn.some(e=>e.id===Ae.b.id)||Ae.b.id==="moon"?"Position: Ephemeride; Oberfläche und Bahnlinie vereinfacht.":"Position und Darstellung sind schematisch.":Bn.some(e=>e.id===Ae.b.id)||Ae.b.id==="moon"?"Position: ephemeris; surface and orbit line simplified.":"Position and visuals are schematic.",document.querySelectorAll("[data-lang]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.lang===Zt))))}function ua(){if(lt.clearViewOffset(),lt.zoom=1,!fn.hidden){const s=document.querySelector(".info-card").getBoundingClientRect();let e=innerWidth/2,t=innerHeight/2;innerWidth>=1e3?(e=(document.querySelector(".panel").getBoundingClientRect().right+s.left)/2,lt.zoom=.8):(t=(Math.min(170,innerHeight*.2)+s.top)/2,lt.zoom=.65),lt.setViewOffset(innerWidth,innerHeight,innerWidth/2-e,innerHeight/2-t,innerWidth,innerHeight)}lt.updateProjectionMatrix()}function ds(s=!0){fn.hidden=!0,document.body.classList.remove("info-visible"),rs.setAttribute("aria-expanded","false"),Xs.setAttribute("aria-expanded","false"),ua(),s&&(matchMedia("(max-width:700px)").matches?Xs:rs).focus()}rs.setAttribute("aria-expanded","false");rs.addEventListener("click",()=>{Ol(),fn.hidden=!1,document.body.classList.add("info-visible"),rs.setAttribute("aria-expanded","true"),Xs.setAttribute("aria-expanded","true"),ua(),document.querySelector(".info-close").focus()});document.querySelector(".info-close").addEventListener("click",ds);document.querySelectorAll("[data-lang]").forEach(s=>s.addEventListener("click",()=>{Zt=s.dataset.lang,Ol()}));window.addEventListener("keydown",s=>{s.key==="Escape"&&!fn.hidden&&ds()});const Ih=X3({onClose:()=>{document.querySelector(fn.hidden?".tidal-open":".tidal-info-open").focus()}});document.querySelectorAll(".tidal-open,.tidal-info-open").forEach(s=>s.addEventListener("click",()=>Ih.open(Zt)));const Nh=q3({onClose:()=>{document.querySelector(fn.hidden?".earth-tides-open":".earth-tides-info-open").focus()}});document.querySelectorAll(".earth-tides-open,.earth-tides-info-open").forEach(s=>s.addEventListener("click",()=>Nh.open(Zt)));async function Fl(s){const e=++nl,t=await p5(s);e===nl&&(us=s,zi=s-2451545,Hi=t,Ae&&!Wi(Ae.b)&&Ul(),$s(),hn.update(),(s===sa&&_n<0||s===ra&&_n>0)&&hn.stop())}const hn=g5({getJD:()=>us,onDate:Fl,onRate:s=>{s===0&&nl++,_n=s,Cs=0;const e=document.querySelector("#pause");e.innerHTML=s?"Ⅱ <span>Pause</span>":"◷ <span>Zeitreise</span>",e.setAttribute("aria-label",s?"Animation pausieren":"Zeitreise öffnen")},onOpen:()=>{fn.hidden||ds(!1),hs(!1)}});ca.addEventListener("click",()=>hn.close());Xs.addEventListener("click",()=>hn.close());const Ki=document.querySelector(".modal");document.querySelector(".help").onclick=()=>Ki.hidden=!1;document.querySelector(".close").onclick=()=>Ki.hidden=!0;Ki.onclick=s=>{s.target===Ki&&(Ki.hidden=!0)};window.addEventListener("keydown",s=>{(s.ctrlKey||s.metaKey)&&s.key.toLowerCase()==="k"&&(s.preventDefault(),matchMedia("(max-width:700px)").matches&&hs(!0),document.querySelector("#search").focus()),s.key==="Escape"&&(Ki.hidden=!0)});const Mu=new l1,Su=new be;let Gr=null;Qt.domElement.addEventListener("pointerdown",s=>Gr=[s.clientX,s.clientY]);Qt.domElement.addEventListener("pointerup",s=>{if(!Gr||Math.hypot(s.clientX-Gr[0],s.clientY-Gr[1])>5)return;Su.set(s.clientX/innerWidth*2-1,-s.clientY/innerHeight*2+1),Mu.setFromCamera(Su,lt);let e=Mu.intersectObjects(gt.filter(t=>t.mesh.visible).map(t=>t.mesh),!0)[0];if(e){let t=e.object;for(;t&&!gt.some(i=>i.mesh===t);)t=t.parent;let n=gt.find(i=>i.mesh===t);n&&Qn(n.b.id)}});window.addEventListener("resize",()=>{lt.aspect=innerWidth/innerHeight,Qt.setSize(innerWidth,innerHeight),ua()});Ch();Lh();wh();$s();la();hn.message("loading");Fl(us).then(()=>hn.message("")).catch(()=>hn.message("failed"));function Uh(s){if(requestAnimationFrame(Uh),Ih.isOpen()||Nh.isOpen()){so=s;return}let e=Math.min((s-so)/1e3,.1);if(so=s,_n&&!ro&&(Cs+=e,Cs>=.1)){const t=Cs*_n;Cs=0,ro=!0,Fl(Math.max(sa,Math.min(ra,us+t))).catch(()=>{hn.stop(),hn.message("failed")}).finally(()=>{ro=!1})}if($s(),_n&&gt.forEach(({b:t,mesh:n})=>{t.kind!=="craft"&&t.kind!=="region"&&!t.tidallyLocked&&(n.rotation.y+=e*.025*Math.sign(_n))}),Nn){let t=Math.min((s-Nn.start)/1200,1),n=1-Math.pow(1-t,3),i=Ae?Ae.mesh.position:new L,r=Ae?i.clone().add(Nn.offset):Nn.absolute;lt.position.lerpVectors(Nn.fromCamera,r,n),un.target.lerpVectors(Nn.fromTarget,i,n),t===1&&(Nn=null,Ae&&Vr.copy(Ae.mesh.position))}else if(Ae){const t=Ae.mesh.position.clone().sub(Vr);lt.position.add(t),un.target.add(t),Vr.copy(Ae.mesh.position)}_n&&Dl.forEach(t=>t.instances.rotation.y+=e*.0015*Math.sign(_n)),un.update(),fi.visible=!!Ae&&Ae.b.id==="iss",fi.visible&&(fi.position.copy(lt.position),fi.target=Ae.mesh),S5(),Qt.render(Xt,lt),gt.forEach(({b:t,mesh:n,label:i})=>{let r=n.position.clone().project(lt),a=n.visible&&r.z<1&&r.z>-1&&Math.abs(r.x)<1&&Math.abs(r.y)<1&&(t.kind==="craft"||t.kind==="region"?Ae?.b.id===t.id:(!t.parent||!!Ae&&(Ae.b.id===t.parent||Ae.b.id===t.id))&&(xt==="overview"||Ae?.b.id===t.id||t.parent&&Ae?.b.id===t.parent));i.style.display=a?"block":"none",i.style.transform=`translate(${(r.x*.5+.5)*innerWidth}px,${(-r.y*.5+.5)*innerHeight+12}px) translate(-50%,0)`})}requestAnimationFrame(Uh);
