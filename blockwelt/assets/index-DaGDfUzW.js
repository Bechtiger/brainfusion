(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="160",vf=0,ol=1,xf=2,nu=1,Mf=2,Un=3,ai=0,Ye=1,rn=2,ei=0,fr=1,Ro=2,ll=3,cl=4,Sf=5,vi=100,yf=101,Ef=102,ul=103,fl=104,Tf=200,bf=201,Af=202,wf=203,Co=204,Lo=205,Rf=206,Cf=207,Lf=208,Pf=209,Df=210,Uf=211,If=212,Nf=213,Ff=214,Of=0,Bf=1,zf=2,fa=3,Gf=4,Hf=5,kf=6,Vf=7,iu=0,Wf=1,Xf=2,ni=0,qf=1,Yf=2,Kf=3,$f=4,Zf=5,jf=6,ru=300,gr=301,_r=302,Po=303,Do=304,Ea=306,Uo=1e3,vn=1001,Io=1002,Re=1003,hl=1004,Va=1005,tn=1006,Jf=1007,Yr=1008,ii=1009,Qf=1010,th=1011,Xo=1012,su=1013,Jn=1014,Qn=1015,Kr=1016,au=1017,ou=1018,Si=1020,eh=1021,xn=1023,nh=1024,ih=1025,yi=1026,vr=1027,rh=1028,lu=1029,sh=1030,cu=1031,uu=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,dl=35840,pl=35841,ml=35842,gl=35843,fu=36196,_l=37492,vl=37496,xl=37808,Ml=37809,Sl=37810,yl=37811,El=37812,Tl=37813,bl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Ll=37819,Pl=37820,Dl=37821,Ka=36492,Ul=36494,Il=36495,ah=36283,Nl=36284,Fl=36285,Ol=36286,hu=3e3,Ei=3001,oh=3200,lh=3201,ch=0,uh=1,fn="",Ce="srgb",Hn="srgb-linear",qo="display-p3",Ta="display-p3-linear",ha="linear",le="srgb",da="rec709",pa="p3",zi=7680,Bl=519,fh=512,hh=513,dh=514,du=515,ph=516,mh=517,gh=518,_h=519,No=35044,pu=35048,zl="300 es",Fo=1035,On=2e3,ma=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Oo=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function vh(n,t){return(n%t+t)%t}function $a(n,t,e){return(1-e)*n+e*t}function Gl(n){return(n&n-1)===0&&n!==0}function Bo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,r,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],g=i[5],x=i[8],S=r[0],m=r[3],f=r[6],E=r[1],v=r[4],_=r[7],T=r[2],p=r[5],y=r[8];return s[0]=o*S+a*E+l*T,s[3]=o*m+a*v+l*p,s[6]=o*f+a*_+l*y,s[1]=c*S+u*E+h*T,s[4]=c*m+u*v+h*p,s[7]=c*f+u*_+h*y,s[2]=d*S+g*E+x*T,s[5]=d*m+g*v+x*p,s[8]=d*f+g*_+x*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,g=c*s-o*l,x=e*h+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=h*S,t[1]=(r*c-u*i)*S,t[2]=(a*i-r*o)*S,t[3]=d*S,t[4]=(u*e-r*l)*S,t[5]=(r*s-a*e)*S,t[6]=g*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new $t;function mu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xh(){const n=ga("canvas");return n.style.display="block",n}const Hl={};function Hr(n){n in Hl||(Hl[n]=!0,console.warn(n))}const kl=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vl=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[Hn]:{transfer:ha,primaries:da,toReference:n=>n,fromReference:n=>n},[Ce]:{transfer:le,primaries:da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ta]:{transfer:ha,primaries:pa,toReference:n=>n.applyMatrix3(Vl),fromReference:n=>n.applyMatrix3(kl)},[qo]:{transfer:le,primaries:pa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vl),fromReference:n=>n.applyMatrix3(kl).convertLinearToSRGB()}},Mh=new Set([Hn,Ta]),ie={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=gs[t].toReference,r=gs[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return gs[n].primaries},getTransfer:function(n){return n===fn?ha:gs[n].transfer}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=ga("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hr(e[i]/255)*255):e[i]=hr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class _u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ja(r[o].image)):s.push(Ja(r[o]))}else s=Ja(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ke extends yr{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=vn,r=vn,s=tn,o=Yr,a=xn,l=ii,c=Ke.DEFAULT_ANISOTROPY,u=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ri(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ei?Ce:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uo:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uo:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?Ei:hu}set encoding(t){Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?Ce:fn}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=ru;Ke.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,i=0,r=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(g+1)/2,T=(f+1)/2,p=(u+d)/4,y=(h+S)/4,P=(x+m)/4;return v>_&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=p/i,s=y/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=p/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=P/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-x)*(m-x)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(h-S)/E,this.z=(d-u)/E,this.w=Math.acos((c+g+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends yr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?Ce:fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vu extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],S=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=x,t[e+3]=S;return}if(h!==S||l!==d||c!==g||u!==x){let m=1-a;const f=l*d+c*g+u*x+h*S,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),p=Math.atan2(T,f*E);m=Math.sin(m*p)/T,a=Math.sin(a*p)/T}const _=a*E;if(l=l*m+d*_,c=c*m+g*_,u=u*m+x*_,h=h*m+S*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return t[e]=a*x+u*h+l*g-c*d,t[e+1]=l*x+u*d+c*h-a*g,t[e+2]=c*x+u*g+a*d-l*h,t[e+3]=u*x-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*g*x,this._y=c*g*h-d*u*x,this._z=c*u*x+d*g*h,this._w=c*u*h-d*g*x;break;case"YXZ":this._x=d*u*h+c*g*x,this._y=c*g*h-d*u*x,this._z=c*u*x-d*g*h,this._w=c*u*h+d*g*x;break;case"ZXY":this._x=d*u*h-c*g*x,this._y=c*g*h+d*u*x,this._z=c*u*x+d*g*h,this._w=c*u*h-d*g*x;break;case"ZYX":this._x=d*u*h-c*g*x,this._y=c*g*h+d*u*x,this._z=c*u*x-d*g*h,this._w=c*u*h+d*g*x;break;case"YZX":this._x=d*u*h+c*g*x,this._y=c*g*h+d*u*x,this._z=c*u*x-d*g*h,this._w=c*u*h-d*g*x;break;case"XZY":this._x=d*u*h-c*g*x,this._y=c*g*h-d*u*x,this._z=c*u*x+d*g*h,this._w=c*u*h+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new G,Wl=new Er;class Ni{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),vs.subVectors(this.max,Pr),Hi.subVectors(t.a,Pr),ki.subVectors(t.b,Pr),Vi.subVectors(t.c,Pr),qn.subVectors(ki,Hi),Yn.subVectors(Vi,ki),fi.subVectors(Hi,Vi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-fi.z,fi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,fi.z,0,-fi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-fi.y,fi.x,0];return!to(e,Hi,ki,Vi,vs)||(e=[1,0,0,0,1,0,0,0,1],!to(e,Hi,ki,Vi,vs))?!1:(xs.crossVectors(qn,Yn),e=[xs.x,xs.y,xs.z],to(e,Hi,ki,Vi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new G,new G,new G,new G,new G,new G,new G,new G],dn=new G,_s=new Ni,Hi=new G,ki=new G,Vi=new G,qn=new G,Yn=new G,fi=new G,Pr=new G,vs=new G,xs=new G,hi=new G;function to(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hi.fromArray(n,s);const a=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bh=new Ni,Dr=new G,eo=new G;class Fi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(eo)),this.expandByPoint(Dr.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new G,no=new G,Ms=new G,Kn=new G,io=new G,Ss=new G,ro=new G;class ba{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){no.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(no);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ms),a=Kn.dot(this.direction),l=-Kn.dot(Ms),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,d,g,x;if(u>0)if(h=o*l-a,d=o*a-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const S=1/u;h*=S,d*=S,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(no).addScaledVector(Ms,d),g}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,i,r,s){io.subVectors(e,t),Ss.subVectors(i,t),ro.crossVectors(io,Ss);let o=this.direction.dot(ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(Ss.crossVectors(Kn,Ss));if(l<0)return null;const c=a*this.direction.dot(io.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(ro);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,c,u,h,d,g,x,S,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,d,g,x,S,m)}set(t,e,i,r,s,o,a,l,c,u,h,d,g,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,g=o*h,x=a*u,S=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=g+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,g=l*h,x=c*u,S=c*h;e[0]=d+S*a,e[4]=x*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=g*a-x,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,g=l*h,x=c*u,S=c*h;e[0]=d-S*a,e[4]=-o*h,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*u,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,g=o*h,x=a*u,S=a*h;e[0]=l*u,e[4]=x*c-g,e[8]=d*c+S,e[1]=l*h,e[5]=S*c+d,e[9]=g*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=S-d*h,e[8]=x*h+g,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*h+x,e[10]=d-S*h}else if(t.order==="XZY"){const d=o*l,g=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+S,e[5]=o*u,e[9]=g*h-x,e[2]=x*h-g,e[6]=a*u,e[10]=S*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ah,t,wh)}lookAt(t,e,i){const r=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),$n.crossVectors(i,Je),$n.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),$n.crossVectors(i,Je)),$n.normalize(),ys.crossVectors(Je,$n),r[0]=$n.x,r[4]=ys.x,r[8]=Je.x,r[1]=$n.y,r[5]=ys.y,r[9]=Je.y,r[2]=$n.z,r[6]=ys.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],g=i[13],x=i[2],S=i[6],m=i[10],f=i[14],E=i[3],v=i[7],_=i[11],T=i[15],p=r[0],y=r[4],P=r[8],M=r[12],b=r[1],L=r[5],F=r[9],$=r[13],D=r[2],B=r[6],z=r[10],q=r[14],H=r[3],O=r[7],V=r[11],Y=r[15];return s[0]=o*p+a*b+l*D+c*H,s[4]=o*y+a*L+l*B+c*O,s[8]=o*P+a*F+l*z+c*V,s[12]=o*M+a*$+l*q+c*Y,s[1]=u*p+h*b+d*D+g*H,s[5]=u*y+h*L+d*B+g*O,s[9]=u*P+h*F+d*z+g*V,s[13]=u*M+h*$+d*q+g*Y,s[2]=x*p+S*b+m*D+f*H,s[6]=x*y+S*L+m*B+f*O,s[10]=x*P+S*F+m*z+f*V,s[14]=x*M+S*$+m*q+f*Y,s[3]=E*p+v*b+_*D+T*H,s[7]=E*y+v*L+_*B+T*O,s[11]=E*P+v*F+_*z+T*V,s[15]=E*M+v*$+_*q+T*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],g=t[14],x=t[3],S=t[7],m=t[11],f=t[15];return x*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+S*(+e*l*g-e*c*d+s*o*d-r*o*g+r*c*u-s*l*u)+m*(+e*c*h-e*a*g-s*o*h+i*o*g+s*a*u-i*c*u)+f*(-r*a*u-e*l*h+e*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],g=t[11],x=t[12],S=t[13],m=t[14],f=t[15],E=h*m*c-S*d*c+S*l*g-a*m*g-h*l*f+a*d*f,v=x*d*c-u*m*c-x*l*g+o*m*g+u*l*f-o*d*f,_=u*S*c-x*h*c+x*a*g-o*S*g-u*a*f+o*h*f,T=x*h*l-u*S*l-x*a*d+o*S*d+u*a*m-o*h*m,p=e*E+i*v+r*_+s*T;if(p===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/p;return t[0]=E*y,t[1]=(S*d*s-h*m*s-S*r*g+i*m*g+h*r*f-i*d*f)*y,t[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*f+i*l*f)*y,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*y,t[4]=v*y,t[5]=(u*m*s-x*d*s+x*r*g-e*m*g-u*r*f+e*d*f)*y,t[6]=(x*l*s-o*m*s-x*r*c+e*m*c+o*r*f-e*l*f)*y,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*g+e*l*g)*y,t[8]=_*y,t[9]=(x*h*s-u*S*s-x*i*g+e*S*g+u*i*f-e*h*f)*y,t[10]=(o*S*s-x*a*s+x*i*c-e*S*c-o*i*f+e*a*f)*y,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*g-e*a*g)*y,t[12]=T*y,t[13]=(u*S*r-x*h*r+x*i*d-e*S*d-u*i*m+e*h*m)*y,t[14]=(x*a*r-o*S*r-x*i*l+e*S*l+o*i*m-e*a*m)*y,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*d+e*a*d)*y,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,g=s*u,x=s*h,S=o*u,m=o*h,f=a*h,E=l*c,v=l*u,_=l*h,T=i.x,p=i.y,y=i.z;return r[0]=(1-(S+f))*T,r[1]=(g+_)*T,r[2]=(x-v)*T,r[3]=0,r[4]=(g-_)*p,r[5]=(1-(d+f))*p,r[6]=(m+E)*p,r[7]=0,r[8]=(x+v)*y,r[9]=(m-E)*y,r[10]=(1-(d+S))*y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const c=1/s,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=On){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let g,x;if(a===On)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ma)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=On){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*c,g=(i+r)*u;let x,S;if(a===On)x=(o+s)*h,S=-2*h;else if(a===ma)x=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new G,pn=new pe,Ah=new G(0,0,0),wh=new G(1,1,1),$n=new G,ys=new G,Je=new G,Xl=new pe,ql=new Er;class Aa{constructor(t=0,e=0,i=0,r=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const Yl=new G,Xi=new Er,Ln=new pe,Es=new G,Ur=new G,Ch=new G,Lh=new Er,Kl=new G(1,0,0),$l=new G(0,1,0),Zl=new G(0,0,1),Ph={type:"added"},Dh={type:"removed"};class Pe extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new G,e=new Aa,i=new Er,r=new G(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Es.copy(t):Es.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ur,Es,this.up):Ln.lookAt(Es,Ur,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new G(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new G,Pn=new G,so=new G,Dn=new G,qi=new G,Yi=new G,jl=new G,ao=new G,oo=new G,lo=new G;let Ts=!1;class en{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){mn.subVectors(r,e),Pn.subVectors(i,e),so.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Pn),l=mn.dot(so),c=Pn.dot(Pn),u=Pn.dot(so),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,i,r,s,o,a,l){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(t,e,i,r){return mn.subVectors(i,e),Pn.subVectors(t,e),mn.cross(Pn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),mn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),en.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return en.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),Yi.subVectors(s,i),ao.subVectors(t,i);const l=qi.dot(ao),c=Yi.dot(ao);if(l<=0&&c<=0)return e.copy(i);oo.subVectors(t,r);const u=qi.dot(oo),h=Yi.dot(oo);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(qi,o);lo.subVectors(t,s);const g=qi.dot(lo),x=Yi.dot(lo);if(x>=0&&g<=x)return e.copy(s);const S=g*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Yi,a);const m=u*x-g*h;if(m<=0&&h-u>=0&&g-x>=0)return jl.subVectors(s,r),a=(h-u)/(h-u+(g-x)),e.copy(r).addScaledVector(jl,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function co(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=vh(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=co(o,s,t+1/3),this.g=co(o,s,t),this.b=co(o,s,t-1/3)}return ie.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const i=xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ie.fromWorkingColorSpace(Be.copy(this),t),Math.round(Xe(Be.r*255,0,255))*65536+Math.round(Xe(Be.g*255,0,255))*256+Math.round(Xe(Be.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Be.copy(this),e);const i=Be.r,r=Be.g,s=Be.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ce){ie.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,r=Be.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(bs);const i=$a(Zn.h,bs.h,e),r=$a(Zn.s,bs.s,e),s=$a(Zn.l,bs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Vt;Vt.NAMES=xu;let Uh=0;class Oi extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=fr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Lo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Co&&(i.blendSrc=this.blendSrc),this.blendDst!==Lo&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ve extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new G,As=new jt;class $e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),r=re(r,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class Mu extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Su extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ih=0;const cn=new pe,uo=new Pe,Ki=new G,Qe=new Ni,Ir=new Ni,we=new G;class Ee extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?Su:Mu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Qe.min,Ir.min),Qe.expandByPoint(we),we.addVectors(Qe.max,Ir.max),Qe.expandByPoint(we)):(Qe.expandByPoint(Ir.min),Qe.expandByPoint(Ir.max))}Qe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),we.add(Ki)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new G,u[b]=new G;const h=new G,d=new G,g=new G,x=new jt,S=new jt,m=new jt,f=new G,E=new G;function v(b,L,F){h.fromArray(r,b*3),d.fromArray(r,L*3),g.fromArray(r,F*3),x.fromArray(o,b*2),S.fromArray(o,L*2),m.fromArray(o,F*2),d.sub(h),g.sub(h),S.sub(x),m.sub(x);const $=1/(S.x*m.y-m.x*S.y);isFinite($)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(g,-S.y).multiplyScalar($),E.copy(g).multiplyScalar(S.x).addScaledVector(d,-m.x).multiplyScalar($),c[b].add(f),c[L].add(f),c[F].add(f),u[b].add(E),u[L].add(E),u[F].add(E))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let b=0,L=_.length;b<L;++b){const F=_[b],$=F.start,D=F.count;for(let B=$,z=$+D;B<z;B+=3)v(i[B+0],i[B+1],i[B+2])}const T=new G,p=new G,y=new G,P=new G;function M(b){y.fromArray(s,b*3),P.copy(y);const L=c[b];T.copy(L),T.sub(y.multiplyScalar(y.dot(L))).normalize(),p.crossVectors(P,L);const $=p.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=$}for(let b=0,L=_.length;b<L;++b){const F=_[b],$=F.start,D=F.count;for(let B=$,z=$+D;B<z;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*u;for(let f=0;f<u;f++)d[x++]=c[g++]}return new $e(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=t(d,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new pe,di=new ba,ws=new Fi,Ql=new G,$i=new G,Zi=new G,ji=new G,fo=new G,Rs=new G,Cs=new jt,Ls=new jt,Ps=new jt,tc=new G,ec=new G,nc=new G,Ds=new G,Us=new G;class Le extends Pe{constructor(t=new Ee,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fo.fromBufferAttribute(h,t),o?Rs.addScaledVector(fo,u):Rs.addScaledVector(fo.sub(e),u))}e.add(Rs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(ws.containsPoint(di.origin)===!1&&(di.intersectSphere(ws,Ql)===null||di.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(s).invert(),di.copy(t.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],E=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let _=E,T=v;_<T;_+=3){const p=a.getX(_),y=a.getX(_+1),P=a.getX(_+2);r=Is(this,f,t,i,c,u,h,p,y,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=x,f=S;m<f;m+=3){const E=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Is(this,o,t,i,c,u,h,E,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],E=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let _=E,T=v;_<T;_+=3){const p=_,y=_+1,P=_+2;r=Is(this,f,t,i,c,u,h,p,y,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=x,f=S;m<f;m+=3){const E=m,v=m+1,_=m+2;r=Is(this,o,t,i,c,u,h,E,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Nh(n,t,e,i,r,s,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ai,a),l===null)return null;Us.copy(a),Us.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:n}}function Is(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,$i),n.getVertexPosition(l,Zi),n.getVertexPosition(c,ji);const u=Nh(n,t,e,i,$i,Zi,ji,Ds);if(u){r&&(Cs.fromBufferAttribute(r,a),Ls.fromBufferAttribute(r,l),Ps.fromBufferAttribute(r,c),u.uv=en.getInterpolation(Ds,$i,Zi,ji,Cs,Ls,Ps,new jt)),s&&(Cs.fromBufferAttribute(s,a),Ls.fromBufferAttribute(s,l),Ps.fromBufferAttribute(s,c),u.uv1=en.getInterpolation(Ds,$i,Zi,ji,Cs,Ls,Ps,new jt),u.uv2=u.uv1),o&&(tc.fromBufferAttribute(o,a),ec.fromBufferAttribute(o,l),nc.fromBufferAttribute(o,c),u.normal=en.getInterpolation(Ds,$i,Zi,ji,tc,ec,nc,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};en.getNormal($i,Zi,ji,h.normal),u.face=h}return u}class Xn extends Ee{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,i,e,t,o,s,0),x("z","y","x",1,-1,i,e,-t,o,s,1),x("x","z","y",1,1,t,i,e,r,o,2),x("x","z","y",1,-1,t,i,-e,r,o,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function x(S,m,f,E,v,_,T,p,y,P,M){const b=_/y,L=T/P,F=_/2,$=T/2,D=p/2,B=y+1,z=P+1;let q=0,H=0;const O=new G;for(let V=0;V<z;V++){const Y=V*L-$;for(let k=0;k<B;k++){const N=k*b-F;O[S]=N*E,O[m]=Y*v,O[f]=D,c.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[f]=p>0?1:-1,u.push(O.x,O.y,O.z),h.push(k/y),h.push(1-V/P),q+=1}}for(let V=0;V<P;V++)for(let Y=0;Y<y;Y++){const k=d+Y+B*V,N=d+Y+B*(V+1),tt=d+(Y+1)+B*(V+1),st=d+(Y+1)+B*V;l.push(k,N,st),l.push(N,tt,st),H+=6}a.addGroup(g,H,M),g+=H,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=xr(n[e]);for(const r in i)t[r]=i[r]}return t}function Fh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yu(n){return n.getRenderTarget()===null?n.outputColorSpace:ie.workingColorSpace}const Oh={clone:xr,merge:He};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Eu extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Eu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Gh extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const s=new un(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const o=new un(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new un(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new un(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new un(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,g),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Tu extends Ke{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hh extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?Ce:fn),this.texture=new Tu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:ei});s.uniforms.tEquirect.value=e;const o=new Le(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=tn),new Gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ho=new G,kh=new G,Vh=new $t;class mi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ho.subVectors(i,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vh.getNormalMatrix(t),r=this.coplanarPoint(ho).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Fi,Ns=new G;class bu{constructor(t=new mi,e=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],g=r[8],x=r[9],S=r[10],m=r[11],f=r[12],E=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,m-g,_-f).normalize(),i[1].setComponents(l+s,d+c,m+g,_+f).normalize(),i[2].setComponents(l+o,d+u,m+x,_+E).normalize(),i[3].setComponents(l-o,d-u,m-x,_-E).normalize(),i[4].setComponents(l-a,d-h,m-S,_-v).normalize(),e===On)i[5].setComponents(l+a,d+h,m+S,_+v).normalize();else if(e===ma)i[5].setComponents(a,h,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ns.x=r.normal.x>0?t.max.x:t.min.x,Ns.y=r.normal.y>0?t.max.y:t.min.y,Ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Wh(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,g=h.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,h,d),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,u,h){const d=u.array,g=u._updateRange,x=u.updateRanges;if(n.bindBuffer(h,c),g.count===-1&&x.length===0&&n.bufferSubData(h,0,d),x.length!==0){for(let S=0,m=x.length;S<m;S++){const f=x[S];e?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}g.count!==-1&&(e?n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class dr extends Ee{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,g=[],x=[],S=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let v=0;v<c;v++){const _=v*h-s;x.push(_,-E,0),S.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const v=E+c*f,_=E+c*(f+1),T=E+1+c*(f+1),p=E+1+c*f;g.push(v,_,p),g.push(_,T,p)}this.setIndex(g),this.setAttribute("position",new ve(x,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rd=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ed=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Xd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,am=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,um=`#define NORMAL
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
}`,fm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hm=`#define PHONG
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
}`,dm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Sm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Em=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wt={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Kh,alphatest_fragment:$h,alphatest_pars_fragment:Zh,aomap_fragment:jh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:rd,bumpmap_pars_fragment:sd,clipping_planes_fragment:ad,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:ud,color_pars_fragment:fd,color_pars_vertex:hd,color_vertex:dd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:Sd,colorspace_pars_fragment:yd,envmap_fragment:Ed,envmap_common_pars_fragment:Td,envmap_pars_fragment:bd,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Bd,envmap_vertex:wd,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Ld,fog_pars_fragment:Pd,gradientmap_pars_fragment:Dd,lightmap_fragment:Ud,lightmap_pars_fragment:Id,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Hd,lights_phong_pars_fragment:kd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:jd,map_fragment:Jd,map_pars_fragment:Qd,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphcolor_vertex:rp,morphnormal_vertex:sp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:up,normal_pars_vertex:fp,normal_vertex:hp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:yp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:wp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Lp,skinning_pars_vertex:Pp,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Ip,specularmap_pars_fragment:Np,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:Gp,uv_pars_vertex:Hp,uv_vertex:kp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:Kp,cube_frag:$p,depth_vert:Zp,depth_frag:jp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:rm,meshbasic_frag:sm,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:um,meshnormal_frag:fm,meshphong_vert:hm,meshphong_frag:dm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:ym,sprite_frag:Em},_t={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Sn={basic:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:He([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:He([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:He([_t.points,_t.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:He([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:He([_t.common,_t.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:He([_t.sprite,_t.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:He([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:He([_t.lights,_t.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Sn.physical={uniforms:He([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Fs={r:0,b:0,g:0};function Tm(n,t,e,i,r,s,o){const a=new Vt(0);let l=s===!0?0:1,c,u,h=null,d=0,g=null;function x(m,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?S(a,l):v&&v.isColor&&(S(v,1),E=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ea)?(u===void 0&&(u=new Le(new Xn(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:xr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,p,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ie.getTransfer(v.colorSpace)!==le,(h!==v||d!==v.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Le(new dr(2,2),new wi({name:"BackgroundMaterial",uniforms:xr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,f){m.getRGB(Fs,yu(n)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:x}}function bm(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,B,z,q,H){let O=!1;if(o){const V=S(q,z,B);c!==V&&(c=V,g(c.object)),O=f(D,q,z,H),O&&E(D,q,z,H)}else{const V=B.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==V)&&(c.geometry=q.id,c.program=z.id,c.wireframe=V,O=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,P(D,B,z,q),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function S(D,B,z){const q=z.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let O=H[B.id];O===void 0&&(O={},H[B.id]=O);let V=O[q];return V===void 0&&(V=m(d()),O[q]=V),V}function m(D){const B=[],z=[],q=[];for(let H=0;H<r;H++)B[H]=0,z[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:q,object:D,attributes:{},index:null}}function f(D,B,z,q){const H=c.attributes,O=B.attributes;let V=0;const Y=z.getAttributes();for(const k in Y)if(Y[k].location>=0){const tt=H[k];let st=O[k];if(st===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;V++}return c.attributesNum!==V||c.index!==q}function E(D,B,z,q){const H={},O=B.attributes;let V=0;const Y=z.getAttributes();for(const k in Y)if(Y[k].location>=0){let tt=O[k];tt===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));const st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),H[k]=st,V++}c.attributes=H,c.attributesNum=V,c.index=q}function v(){const D=c.newAttributes;for(let B=0,z=D.length;B<z;B++)D[B]=0}function _(D){T(D,0)}function T(D,B){const z=c.newAttributes,q=c.enabledAttributes,H=c.attributeDivisors;z[D]=1,q[D]===0&&(n.enableVertexAttribArray(D),q[D]=1),H[D]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),H[D]=B)}function p(){const D=c.newAttributes,B=c.enabledAttributes;for(let z=0,q=B.length;z<q;z++)B[z]!==D[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function y(D,B,z,q,H,O,V){V===!0?n.vertexAttribIPointer(D,B,z,H,O):n.vertexAttribPointer(D,B,z,q,H,O)}function P(D,B,z,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const H=q.attributes,O=z.getAttributes(),V=B.defaultAttributeValues;for(const Y in O){const k=O[Y];if(k.location>=0){let N=H[Y];if(N===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const tt=N.normalized,st=N.itemSize,pt=e.get(N);if(pt===void 0)continue;const mt=pt.buffer,vt=pt.type,Z=pt.bytesPerElement,U=i.isWebGL2===!0&&(vt===n.INT||vt===n.UNSIGNED_INT||N.gpuType===su);if(N.isInterleavedBufferAttribute){const K=N.data,w=K.stride,it=N.offset;if(K.isInstancedInterleavedBuffer){for(let W=0;W<k.locationSize;W++)T(k.location+W,K.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let W=0;W<k.locationSize;W++)_(k.location+W);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let W=0;W<k.locationSize;W++)y(k.location+W,st/k.locationSize,vt,tt,w*Z,(it+st/k.locationSize*W)*Z,U)}else{if(N.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)T(k.location+K,N.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let K=0;K<k.locationSize;K++)_(k.location+K);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let K=0;K<k.locationSize;K++)y(k.location+K,st/k.locationSize,vt,tt,st*Z,st/k.locationSize*K*Z,U)}}else if(V!==void 0){const tt=V[Y];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(k.location,tt);break;case 3:n.vertexAttrib3fv(k.location,tt);break;case 4:n.vertexAttrib4fv(k.location,tt);break;default:n.vertexAttrib1fv(k.location,tt)}}}}p()}function M(){F();for(const D in a){const B=a[D];for(const z in B){const q=B[z];for(const H in q)x(q[H].object),delete q[H];delete B[z]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const z in B){const q=B[z];for(const H in q)x(q[H].object),delete q[H];delete B[z]}delete a[D.id]}function L(D){for(const B in a){const z=a[B];if(z[D.id]===void 0)continue;const q=z[D.id];for(const H in q)x(q[H].object),delete q[H];delete z[D.id]}}function F(){$(),u=!0,c!==l&&(c=l,g(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:_,disableUnusedAttributes:p}}function Am(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let g,x;if(r)g=n,x="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<d;x++)this.render(u[x],h[x]);else{g.multiDrawArraysWEBGL(s,u,0,h,0,d);let x=0;for(let S=0;S<d;S++)x+=h[S];e.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wm(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=o||t.has("OES_texture_float"),T=v&&_,p=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:p}}function Rm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new mi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,v=E*4;let _=f.clippingState||null;l.value=_,_=u(x,d,v,g);for(let T=0;T!==v;++T)_[T]=e[T];f.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,g,x){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=g+S*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=g;v!==S;++v,_+=4)o.copy(h[v]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function Cm(n){let t=new WeakMap;function e(o,a){return a===Po?o.mapping=gr:a===Do&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Po||a===Do)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hh(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Lm extends Eu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lr=4,ic=[.125,.215,.35,.446,.526,.582],xi=20,po=new Lm,rc=new Vt;let mo=null,go=0,_o=0;const gi=(1+Math.sqrt(5))/2,tr=1/gi,sc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,gi,tr),new G(0,gi,-tr),new G(tr,0,gi),new G(-tr,0,gi),new G(gi,tr,0),new G(-gi,tr,0)];class ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Kr,format:xn,colorSpace:Hn,depthBuffer:!1},r=oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Dm(s,t,e)}return r}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,i,r){const a=new un(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rc),u.toneMapping=ni,u.autoClear=!1;const g=new Ve({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),x=new Le(new Xn,g);let S=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,S=!0):(g.color.copy(rc),S=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Os(r,E*v,f>2?v:0,v,v),u.setRenderTarget(r),S&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===gr||t.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,po)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sc[(r-1)%sc.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Le(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*xi-1),S=s/x,m=isFinite(s)?1+Math.floor(u*S):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const f=[];let E=0;for(let y=0;y<xi;++y){const P=y/S,M=Math.exp(-P*P/2);f.push(M),y===0?E+=M:y<m&&(E+=2*M)}for(let y=0;y<f.length;y++)f[y]=f[y]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const _=this._sizeLods[r],T=3*_*(r>v-lr?r-v+lr:0),p=4*(this._cubeSize-_);Os(e,T,p,3*_,2*_),l.setRenderTarget(e),l.render(h,po)}}function Pm(n){const t=[],e=[],i=[];let r=n;const s=n-lr+1+ic.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-lr?l=ic[o-n+lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,x=6,S=3,m=2,f=1,E=new Float32Array(S*x*g),v=new Float32Array(m*x*g),_=new Float32Array(f*x*g);for(let p=0;p<g;p++){const y=p%3*2/3-1,P=p>2?0:-1,M=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];E.set(M,S*x*p),v.set(d,m*x*p);const b=[p,p,p,p,p,p];_.set(b,f*x*p)}const T=new Ee;T.setAttribute("position",new $e(E,S)),T.setAttribute("uv",new $e(v,m)),T.setAttribute("faceIndex",new $e(_,f)),t.push(T),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function oc(n,t,e){const i=new Ai(n,t,e);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Dm(n,t,e){const i=new Float32Array(xi),r=new G(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lc(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cc(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}function Um(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Po||l===Do,u=l===gr||l===_r;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ac(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new ac(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Im(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nm(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);for(const x in d.morphAttributes){const S=d.morphAttributes[x];for(let m=0,f=S.length;m<f;m++)t.remove(S[m])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(t.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)t.update(d[x],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const S=g[x];for(let m=0,f=S.length;m<f;m++)t.update(S[m],n.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,x=h.attributes.position;let S=0;if(g!==null){const E=g.array;S=g.version;for(let v=0,_=E.length;v<_;v+=3){const T=E[v+0],p=E[v+1],y=E[v+2];d.push(T,p,p,y,y,T)}}else if(x!==void 0){const E=x.array;S=x.version;for(let v=0,_=E.length/3-1;v<_;v+=3){const T=v+0,p=v+1,y=v+2;d.push(T,p,p,y,y,T)}}else return;const m=new(mu(d)?Su:Mu)(d,1);m.version=S;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fm(n,t,e,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,x){n.drawElements(s,x,a,g*l),e.update(x,s,1)}function h(g,x,S){if(S===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,g*l,S),e.update(x,s,S)}function d(g,x,S){if(S===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<S;f++)this.render(g[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,g,0,S);let f=0;for(let E=0;E<S;E++)f+=x[E];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Om(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Bm(n,t){return n[0]-t[0]}function zm(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Gm(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ne,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=x!==void 0?x.length:0;let m=s.get(u);if(m===void 0||m.count!==S){let B=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var g=B;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,p=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),T===!0&&(M=3);let b=u.attributes.position.count*M,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const F=new Float32Array(b*L*4*S),$=new vu(F,b,L,S);$.type=Qn,$.needsUpdate=!0;const D=M*4;for(let z=0;z<S;z++){const q=p[z],H=y[z],O=P[z],V=b*L*4*z;for(let Y=0;Y<q.count;Y++){const k=Y*D;v===!0&&(o.fromBufferAttribute(q,Y),F[V+k+0]=o.x,F[V+k+1]=o.y,F[V+k+2]=o.z,F[V+k+3]=0),_===!0&&(o.fromBufferAttribute(H,Y),F[V+k+4]=o.x,F[V+k+5]=o.y,F[V+k+6]=o.z,F[V+k+7]=0),T===!0&&(o.fromBufferAttribute(O,Y),F[V+k+8]=o.x,F[V+k+9]=o.y,F[V+k+10]=o.z,F[V+k+11]=O.itemSize===4?o.w:1)}}m={count:S,texture:$,size:new jt(b,L)},s.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let S=i[u.id];if(S===void 0||S.length!==x){S=[];for(let _=0;_<x;_++)S[_]=[_,0];i[u.id]=S}for(let _=0;_<x;_++){const T=S[_];T[0]=_,T[1]=d[_]}S.sort(zm);for(let _=0;_<8;_++)_<x&&S[_][1]?(a[_][0]=S[_][0],a[_][1]=S[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Bm);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let _=0;_<8;_++){const T=a[_],p=T[0],y=T[1];p!==Number.MAX_SAFE_INTEGER&&y?(m&&u.getAttribute("morphTarget"+_)!==m[p]&&u.setAttribute("morphTarget"+_,m[p]),f&&u.getAttribute("morphNormal"+_)!==f[p]&&u.setAttribute("morphNormal"+_,f[p]),r[_]=y,E+=y):(m&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const v=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Hm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class wu extends Ke{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:yi,u!==yi&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yi&&(i=Jn),i===void 0&&u===vr&&(i=Si),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ru=new Ke,Cu=new wu(1,1);Cu.compareFunction=du;const Lu=new vu,Pu=new Th,Du=new Tu,uc=[],fc=[],hc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function Tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=uc[r];if(s===void 0&&(s=new Float32Array(r),uc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wa(n,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function km(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function Wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function Xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function qm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;pc.set(i),n.uniformMatrix2fv(this.addr,!1,pc),be(e,i)}}function Ym(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;dc.set(i),n.uniformMatrix3fv(this.addr,!1,dc),be(e,i)}}function Km(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;hc.set(i),n.uniformMatrix4fv(this.addr,!1,hc),be(e,i)}}function $m(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function Jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function Qm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function n0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function i0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Cu:Ru;e.setTexture2D(t||s,r)}function r0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Pu,r)}function s0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Du,r)}function a0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Lu,r)}function o0(n){switch(n){case 5126:return km;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Km;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return jm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(n,t){n.uniform1fv(this.addr,t)}function c0(n,t){const e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function u0(n,t){const e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function f0(n,t){const e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function h0(n,t){const e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d0(n,t){const e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p0(n,t){const e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function m0(n,t){n.uniform1iv(this.addr,t)}function g0(n,t){n.uniform2iv(this.addr,t)}function _0(n,t){n.uniform3iv(this.addr,t)}function v0(n,t){n.uniform4iv(this.addr,t)}function x0(n,t){n.uniform1uiv(this.addr,t)}function M0(n,t){n.uniform2uiv(this.addr,t)}function S0(n,t){n.uniform3uiv(this.addr,t)}function y0(n,t){n.uniform4uiv(this.addr,t)}function E0(n,t,e){const i=this.cache,r=t.length,s=wa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ru,s[o])}function T0(n,t,e){const i=this.cache,r=t.length,s=wa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pu,s[o])}function b0(n,t,e){const i=this.cache,r=t.length,s=wa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Du,s[o])}function A0(n,t,e){const i=this.cache,r=t.length,s=wa(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Lu,s[o])}function w0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return u0;case 35666:return f0;case 35674:return h0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return x0;case 36294:return M0;case 36295:return S0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return A0}}class R0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}}class C0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function mc(n,t){n.seq.push(t),n.map[t.id]=t}function P0(n,t,e){const i=n.name,r=i.length;for(vo.lastIndex=0;;){const s=vo.exec(i),o=vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mc(e,c===void 0?new R0(a,n,t):new C0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new L0(a),mc(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);P0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function gc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const D0=37297;let U0=0;function I0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function N0(n){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(n);let i;switch(t===e?i="":t===pa&&e===da?i="LinearDisplayP3ToLinearSRGB":t===da&&e===pa&&(i="LinearSRGBToLinearDisplayP3"),n){case Hn:case Ta:return[i,"LinearTransferOETF"];case Ce:case qo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _c(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+I0(n.getShaderSource(t),o)}else return r}function F0(n,t){const e=N0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function O0(n,t){let e;switch(t){case qf:e="Linear";break;case Yf:e="Reinhard";break;case Kf:e="OptimizedCineon";break;case $f:e="ACESFilmic";break;case jf:e="AgX";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function B0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)}function G0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function H0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function cr(n){return n!==""}function vc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(n){return n.replace(k0,W0)}const V0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W0(n,t){let e=Wt[t];if(e===void 0){const i=V0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zo(e)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(n){return n.replace(X0,q0)}function q0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:t="ENVMAP_TYPE_CUBE";break;case Ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function j0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function J0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Y0(e),c=K0(e),u=$0(e),h=Z0(e),d=j0(e),g=e.isWebGL2?"":B0(e),x=z0(e),S=G0(s),m=r.createProgram();let f,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cr).join(`
`),f.length>0&&(f+=`
`),E=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cr).join(`
`),E.length>0&&(E+=`
`)):(f=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),E=[g,Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=zo(o),o=vc(o,e),o=xc(o,e),a=zo(a),a=vc(a,e),a=xc(a,e),o=Mc(o),a=Mc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const _=v+f+o,T=v+E+a,p=gc(r,r.VERTEX_SHADER,_),y=gc(r,r.FRAGMENT_SHADER,T);r.attachShader(m,p),r.attachShader(m,y),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(F){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(p).trim(),B=r.getShaderInfoLog(y).trim();let z=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,p,y);else{const H=_c(r,p,"vertex"),O=_c(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+H+`
`+O)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||B==="")&&(q=!1);q&&(F.diagnostics={runnable:z,programLog:$,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:E}})}r.deleteShader(p),r.deleteShader(y),M=new sa(r,m),b=H0(r,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(m,D0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=p,this.fragmentShader=y,this}let Q0=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new eg(t),e.set(t,i)),i}}class eg{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}}function ng(n,t,e,i,r,s,o){const a=new Yo,l=new tg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return M===0?"uv":`uv${M}`}function m(M,b,L,F,$){const D=F.fog,B=$.geometry,z=M.isMeshStandardMaterial?F.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),H=q&&q.mapping===Ea?q.image.height:null,O=x[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const V=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=V!==void 0?V.length:0;let k=0;B.morphAttributes.position!==void 0&&(k=1),B.morphAttributes.normal!==void 0&&(k=2),B.morphAttributes.color!==void 0&&(k=3);let N,tt,st,pt;if(O){const Jt=Sn[O];N=Jt.vertexShader,tt=Jt.fragmentShader}else N=M.vertexShader,tt=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),pt=l.getFragmentShaderID(M);const mt=n.getRenderTarget(),vt=$.isInstancedMesh===!0,Z=$.isBatchedMesh===!0,U=!!M.map,K=!!M.matcap,w=!!q,it=!!M.aoMap,W=!!M.lightMap,rt=!!M.bumpMap,at=!!M.normalMap,wt=!!M.displacementMap,yt=!!M.emissiveMap,C=!!M.metalnessMap,A=!!M.roughnessMap,j=M.anisotropy>0,ut=M.clearcoat>0,ct=M.iridescence>0,lt=M.sheen>0,bt=M.transmission>0,xt=j&&!!M.anisotropyMap,St=ut&&!!M.clearcoatMap,Ut=ut&&!!M.clearcoatNormalMap,Ht=ut&&!!M.clearcoatRoughnessMap,J=ct&&!!M.iridescenceMap,Rt=ct&&!!M.iridescenceThicknessMap,It=lt&&!!M.sheenColorMap,Tt=lt&&!!M.sheenRoughnessMap,gt=!!M.specularMap,Mt=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Zt=bt&&!!M.transmissionMap,Qt=bt&&!!M.thicknessMap,Ot=!!M.gradientMap,ft=!!M.alphaMap,I=M.alphaTest>0,ht=!!M.alphaHash,dt=!!M.extensions,At=!!B.attributes.uv1,Ct=!!B.attributes.uv2,te=!!B.attributes.uv3;let ee=ni;return M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ee=n.toneMapping),{isWebGL2:u,shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:N,fragmentShader:tt,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:pt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Z,instancing:vt,instancingColor:vt&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Hn,map:U,matcap:K,envMap:w,envMapMode:w&&q.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:W,bumpMap:rt,normalMap:at,displacementMap:d&&wt,emissiveMap:yt,normalMapObjectSpace:at&&M.normalMapType===uh,normalMapTangentSpace:at&&M.normalMapType===ch,metalnessMap:C,roughnessMap:A,anisotropy:j,anisotropyMap:xt,clearcoat:ut,clearcoatMap:St,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Ht,iridescence:ct,iridescenceMap:J,iridescenceThicknessMap:Rt,sheen:lt,sheenColorMap:It,sheenRoughnessMap:Tt,specularMap:gt,specularColorMap:Mt,specularIntensityMap:Ft,transmission:bt,transmissionMap:Zt,thicknessMap:Qt,gradientMap:Ot,opaque:M.transparent===!1&&M.blending===fr,alphaMap:ft,alphaTest:I,alphaHash:ht,combine:M.combine,mapUv:U&&S(M.map.channel),aoMapUv:it&&S(M.aoMap.channel),lightMapUv:W&&S(M.lightMap.channel),bumpMapUv:rt&&S(M.bumpMap.channel),normalMapUv:at&&S(M.normalMap.channel),displacementMapUv:wt&&S(M.displacementMap.channel),emissiveMapUv:yt&&S(M.emissiveMap.channel),metalnessMapUv:C&&S(M.metalnessMap.channel),roughnessMapUv:A&&S(M.roughnessMap.channel),anisotropyMapUv:xt&&S(M.anisotropyMap.channel),clearcoatMapUv:St&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&S(M.sheenRoughnessMap.channel),specularMapUv:gt&&S(M.specularMap.channel),specularColorMapUv:Mt&&S(M.specularColorMap.channel),specularIntensityMapUv:Ft&&S(M.specularIntensityMap.channel),transmissionMapUv:Zt&&S(M.transmissionMap.channel),thicknessMapUv:Qt&&S(M.thicknessMap.channel),alphaMapUv:ft&&S(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:Ct,vertexUv3s:te,pointsUvs:$.isPoints===!0&&!!B.attributes.uv&&(U||ft),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,useLegacyLights:n._useLegacyLights,decodeVideoTexture:U&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:dt&&M.extensions.derivatives===!0,extensionFragDepth:dt&&M.extensions.fragDepth===!0,extensionDrawBuffers:dt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function _(M){const b=x[M.type];let L;if(b){const F=Sn[b];L=Oh.clone(F.uniforms)}else L=M.uniforms;return L}function T(M,b){let L;for(let F=0,$=c.length;F<$;F++){const D=c[F];if(D.cacheKey===b){L=D,++L.usedTimes;break}}return L===void 0&&(L=new J0(n,b,M,s),c.push(L)),L}function p(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function y(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:p,releaseShaderCache:y,programs:c,dispose:P}}function ig(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function rg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ec(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,g,x,S,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:S,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=S,f.group=m),t++,f}function a(h,d,g,x,S,m){const f=o(h,d,g,x,S,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):e.push(f)}function l(h,d,g,x,S,m){const f=o(h,d,g,x,S,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||rg),i.length>1&&i.sort(d||yc),r.length>1&&r.sort(d||yc)}function u(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ec,n.set(i,[o])):r>=s.length?(o=new Ec,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ag(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Vt};break;case"SpotLight":e={position:new G,direction:new G,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function og(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lg=0;function cg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ug(n,t){const e=new ag,i=og(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new pe,a=new pe;function l(u,h){let d=0,g=0,x=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let S=0,m=0,f=0,E=0,v=0,_=0,T=0,p=0,y=0,P=0,M=0;u.sort(cg);const b=h===!0?Math.PI:1;for(let F=0,$=u.length;F<$;F++){const D=u[F],B=D.color,z=D.intensity,q=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*z*b,g+=B.g*z*b,x+=B.b*z*b;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],z);M++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const V=D.shadow,Y=i.get(D);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=H,r.directionalShadowMatrix[S]=D.shadow.matrix,_++}r.directional[S]=O,S++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(B).multiplyScalar(z*b),O.distance=q,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[f]=O;const V=D.shadow;if(D.map&&(r.spotLightMap[y]=D.map,y++,V.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[f]=V.matrix,D.castShadow){const Y=i.get(D);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.spotShadow[f]=Y,r.spotShadowMap[f]=H,p++}f++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(B).multiplyScalar(z),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=O,E++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*b),O.distance=D.distance,O.decay=D.decay,D.castShadow){const V=D.shadow,Y=i.get(D);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=D.shadow.matrix,T++}r.point[m]=O,m++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(z*b),O.groundColor.copy(D.groundColor).multiplyScalar(z*b),r.hemi[v]=O,v++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_FLOAT_1,r.rectAreaLTC2=_t.LTC_FLOAT_2):(r.rectAreaLTC1=_t.LTC_HALF_1,r.rectAreaLTC2=_t.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_FLOAT_1,r.rectAreaLTC2=_t.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_HALF_1,r.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==S||L.pointLength!==m||L.spotLength!==f||L.rectAreaLength!==E||L.hemiLength!==v||L.numDirectionalShadows!==_||L.numPointShadows!==T||L.numSpotShadows!==p||L.numSpotMaps!==y||L.numLightProbes!==M)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=p,r.spotShadowMap.length=p,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=p+y-P,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=M,L.directionalLength=S,L.pointLength=m,L.spotLength=f,L.rectAreaLength=E,L.hemiLength=v,L.numDirectionalShadows=_,L.numPointShadows=T,L.numSpotShadows=p,L.numSpotMaps=y,L.numLightProbes=M,r.version=lg++)}function c(u,h){let d=0,g=0,x=0,S=0,m=0;const f=h.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const _=u[E];if(_.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(_.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),x++}else if(_.isRectAreaLight){const T=r.rectArea[S];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(_.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),g++}else if(_.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Tc(n,t){const e=new ug(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fg(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Tc(n,t),e.set(s,[l])):o>=a.length?(l=new Tc(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class hg extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(n,t,e){let i=new bu;const r=new jt,s=new jt,o=new Ne,a=new hg({depthPacking:lh}),l=new dg,c={},u=e.maxTextureSize,h={[ai]:Ye,[Ye]:ai,[rn]:rn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ee;x.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Le(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let f=this.type;this.render=function(p,y,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||p.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=f!==Un&&this.type===Un,D=f===Un&&this.type!==Un;for(let B=0,z=p.length;B<z;B++){const q=p[B],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const O=H.getFrameExtents();if(r.multiply(O),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,H.mapSize.y=s.y)),H.map===null||$===!0||D===!0){const Y=this.type!==Un?{minFilter:Re,magFilter:Re}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(r.x,r.y,Y),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const V=H.getViewportCount();for(let Y=0;Y<V;Y++){const k=H.getViewport(Y);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),F.viewport(o),H.updateMatrices(q,Y),i=H.getFrustum(),_(y,P,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&E(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,L)};function E(p,y){const P=t.update(S);d.defines.VSM_SAMPLES!==p.blurSamples&&(d.defines.VSM_SAMPLES=p.blurSamples,g.defines.VSM_SAMPLES=p.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=p.map.texture,d.uniforms.resolution.value=p.mapSize,d.uniforms.radius.value=p.radius,n.setRenderTarget(p.mapPass),n.clear(),n.renderBufferDirect(y,null,P,d,S,null),g.uniforms.shadow_pass.value=p.mapPass.texture,g.uniforms.resolution.value=p.mapSize,g.uniforms.radius.value=p.radius,n.setRenderTarget(p.map),n.clear(),n.renderBufferDirect(y,null,P,g,S,null)}function v(p,y,P,M){let b=null;const L=P.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const F=b.uuid,$=y.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let B=D[$];B===void 0&&(B=b.clone(),D[$]=B,y.addEventListener("dispose",T)),b=B}if(b.visible=y.visible,b.wireframe=y.wireframe,M===Un?b.side=y.shadowSide!==null?y.shadowSide:y.side:b.side=y.shadowSide!==null?y.shadowSide:h[y.side],b.alphaMap=y.alphaMap,b.alphaTest=y.alphaTest,b.map=y.map,b.clipShadows=y.clipShadows,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.displacementMap=y.displacementMap,b.displacementScale=y.displacementScale,b.displacementBias=y.displacementBias,b.wireframeLinewidth=y.wireframeLinewidth,b.linewidth=y.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=n.properties.get(b);F.light=P}return b}function _(p,y,P,M,b){if(p.visible===!1)return;if(p.layers.test(y.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&b===Un)&&(!p.frustumCulled||i.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,p.matrixWorld);const $=t.update(p),D=p.material;if(Array.isArray(D)){const B=$.groups;for(let z=0,q=B.length;z<q;z++){const H=B[z],O=D[H.materialIndex];if(O&&O.visible){const V=v(p,O,M,b);p.onBeforeShadow(n,p,y,P,$,V,H),n.renderBufferDirect(P,null,$,V,p,H),p.onAfterShadow(n,p,y,P,$,V,H)}}}else if(D.visible){const B=v(p,D,M,b);p.onBeforeShadow(n,p,y,P,$,B,null),n.renderBufferDirect(P,null,$,B,p,null),p.onAfterShadow(n,p,y,P,$,B,null)}}const F=p.children;for(let $=0,D=F.length;$<D;$++)_(F[$],y,P,M,b)}function T(p){p.target.removeEventListener("dispose",T);for(const P in c){const M=c[P],b=p.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function _g(n,t,e){const i=e.isWebGL2;function r(){let I=!1;const ht=new Ne;let dt=null;const At=new Ne(0,0,0,0);return{setMask:function(Ct){dt!==Ct&&!I&&(n.colorMask(Ct,Ct,Ct,Ct),dt=Ct)},setLocked:function(Ct){I=Ct},setClear:function(Ct,te,ee,oe,Jt){Jt===!0&&(Ct*=oe,te*=oe,ee*=oe),ht.set(Ct,te,ee,oe),At.equals(ht)===!1&&(n.clearColor(Ct,te,ee,oe),At.copy(ht))},reset:function(){I=!1,dt=null,At.set(-1,0,0,0)}}}function s(){let I=!1,ht=null,dt=null,At=null;return{setTest:function(Ct){Ct?Z(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Ct){ht!==Ct&&!I&&(n.depthMask(Ct),ht=Ct)},setFunc:function(Ct){if(dt!==Ct){switch(Ct){case Of:n.depthFunc(n.NEVER);break;case Bf:n.depthFunc(n.ALWAYS);break;case zf:n.depthFunc(n.LESS);break;case fa:n.depthFunc(n.LEQUAL);break;case Gf:n.depthFunc(n.EQUAL);break;case Hf:n.depthFunc(n.GEQUAL);break;case kf:n.depthFunc(n.GREATER);break;case Vf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=Ct}},setLocked:function(Ct){I=Ct},setClear:function(Ct){At!==Ct&&(n.clearDepth(Ct),At=Ct)},reset:function(){I=!1,ht=null,dt=null,At=null}}}function o(){let I=!1,ht=null,dt=null,At=null,Ct=null,te=null,ee=null,oe=null,Jt=null;return{setTest:function(Dt){I||(Dt?Z(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(Dt){ht!==Dt&&!I&&(n.stencilMask(Dt),ht=Dt)},setFunc:function(Dt,ne,se){(dt!==Dt||At!==ne||Ct!==se)&&(n.stencilFunc(Dt,ne,se),dt=Dt,At=ne,Ct=se)},setOp:function(Dt,ne,se){(te!==Dt||ee!==ne||oe!==se)&&(n.stencilOp(Dt,ne,se),te=Dt,ee=ne,oe=se)},setLocked:function(Dt){I=Dt},setClear:function(Dt){Jt!==Dt&&(n.clearStencil(Dt),Jt=Dt)},reset:function(){I=!1,ht=null,dt=null,At=null,Ct=null,te=null,ee=null,oe=null,Jt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},g={},x=new WeakMap,S=[],m=null,f=!1,E=null,v=null,_=null,T=null,p=null,y=null,P=null,M=new Vt(0,0,0),b=0,L=!1,F=null,$=null,D=null,B=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=O>=2);let Y=null,k={};const N=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),st=new Ne().fromArray(N),pt=new Ne().fromArray(tt);function mt(I,ht,dt,At){const Ct=new Uint8Array(4),te=n.createTexture();n.bindTexture(I,te),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<dt;ee++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(ht+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return te}const vt={};vt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(vt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(n.DEPTH_TEST),l.setFunc(fa),yt(!1),C(ol),Z(n.CULL_FACE),at(ei);function Z(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function U(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function K(I,ht){return g[I]!==ht?(n.bindFramebuffer(I,ht),g[I]=ht,i&&(I===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ht),I===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function w(I,ht){let dt=S,At=!1;if(I)if(dt=x.get(ht),dt===void 0&&(dt=[],x.set(ht,dt)),I.isWebGLMultipleRenderTargets){const Ct=I.texture;if(dt.length!==Ct.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let te=0,ee=Ct.length;te<ee;te++)dt[te]=n.COLOR_ATTACHMENT0+te;dt.length=Ct.length,At=!0}}else dt[0]!==n.COLOR_ATTACHMENT0&&(dt[0]=n.COLOR_ATTACHMENT0,At=!0);else dt[0]!==n.BACK&&(dt[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function it(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const W={[vi]:n.FUNC_ADD,[yf]:n.FUNC_SUBTRACT,[Ef]:n.FUNC_REVERSE_SUBTRACT};if(i)W[ul]=n.MIN,W[fl]=n.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(W[ul]=I.MIN_EXT,W[fl]=I.MAX_EXT)}const rt={[Tf]:n.ZERO,[bf]:n.ONE,[Af]:n.SRC_COLOR,[Co]:n.SRC_ALPHA,[Df]:n.SRC_ALPHA_SATURATE,[Lf]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[wf]:n.ONE_MINUS_SRC_COLOR,[Lo]:n.ONE_MINUS_SRC_ALPHA,[Pf]:n.ONE_MINUS_DST_COLOR,[Cf]:n.ONE_MINUS_DST_ALPHA,[Uf]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Nf]:n.CONSTANT_ALPHA,[Ff]:n.ONE_MINUS_CONSTANT_ALPHA};function at(I,ht,dt,At,Ct,te,ee,oe,Jt,Dt){if(I===ei){f===!0&&(U(n.BLEND),f=!1);return}if(f===!1&&(Z(n.BLEND),f=!0),I!==Sf){if(I!==E||Dt!==L){if((v!==vi||p!==vi)&&(n.blendEquation(n.FUNC_ADD),v=vi,p=vi),Dt)switch(I){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ro:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ro:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,T=null,y=null,P=null,M.set(0,0,0),b=0,E=I,L=Dt}return}Ct=Ct||ht,te=te||dt,ee=ee||At,(ht!==v||Ct!==p)&&(n.blendEquationSeparate(W[ht],W[Ct]),v=ht,p=Ct),(dt!==_||At!==T||te!==y||ee!==P)&&(n.blendFuncSeparate(rt[dt],rt[At],rt[te],rt[ee]),_=dt,T=At,y=te,P=ee),(oe.equals(M)===!1||Jt!==b)&&(n.blendColor(oe.r,oe.g,oe.b,Jt),M.copy(oe),b=Jt),E=I,L=!1}function wt(I,ht){I.side===rn?U(n.CULL_FACE):Z(n.CULL_FACE);let dt=I.side===Ye;ht&&(dt=!dt),yt(dt),I.blending===fr&&I.transparent===!1?at(ei):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const At=I.stencilWrite;c.setTest(At),At&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),j(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(I){F!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),F=I)}function C(I){I!==vf?(Z(n.CULL_FACE),I!==$&&(I===ol?n.cullFace(n.BACK):I===xf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),$=I}function A(I){I!==D&&(H&&n.lineWidth(I),D=I)}function j(I,ht,dt){I?(Z(n.POLYGON_OFFSET_FILL),(B!==ht||z!==dt)&&(n.polygonOffset(ht,dt),B=ht,z=dt)):U(n.POLYGON_OFFSET_FILL)}function ut(I){I?Z(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function ct(I){I===void 0&&(I=n.TEXTURE0+q-1),Y!==I&&(n.activeTexture(I),Y=I)}function lt(I,ht,dt){dt===void 0&&(Y===null?dt=n.TEXTURE0+q-1:dt=Y);let At=k[dt];At===void 0&&(At={type:void 0,texture:void 0},k[dt]=At),(At.type!==I||At.texture!==ht)&&(Y!==dt&&(n.activeTexture(dt),Y=dt),n.bindTexture(I,ht||vt[I]),At.type=I,At.texture=ht)}function bt(){const I=k[Y];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function xt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){st.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function Zt(I){pt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),pt.copy(I))}function Qt(I,ht){let dt=h.get(ht);dt===void 0&&(dt=new WeakMap,h.set(ht,dt));let At=dt.get(I);At===void 0&&(At=n.getUniformBlockIndex(ht,I.name),dt.set(I,At))}function Ot(I,ht){const At=h.get(ht).get(I);u.get(ht)!==At&&(n.uniformBlockBinding(ht,At,I.__bindingPointIndex),u.set(ht,At))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Y=null,k={},g={},x=new WeakMap,S=[],m=null,f=!1,E=null,v=null,_=null,T=null,p=null,y=null,P=null,M=new Vt(0,0,0),b=0,L=!1,F=null,$=null,D=null,B=null,z=null,st.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:U,bindFramebuffer:K,drawBuffers:w,useProgram:it,setBlending:at,setMaterial:wt,setFlipSided:yt,setCullFace:C,setLineWidth:A,setPolygonOffset:j,setScissorTest:ut,activeTexture:ct,bindTexture:lt,unbindTexture:bt,compressedTexImage2D:xt,compressedTexImage3D:St,texImage2D:gt,texImage3D:Mt,updateUBOMapping:Qt,uniformBlockBinding:Ot,texStorage2D:It,texStorage3D:Tt,texSubImage2D:Ut,texSubImage3D:Ht,compressedTexSubImage2D:J,compressedTexSubImage3D:Rt,scissor:Ft,viewport:Zt,reset:ft}}function vg(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,A){return g?new OffscreenCanvas(C,A):ga("canvas")}function S(C,A,j,ut){let ct=1;if((C.width>ut||C.height>ut)&&(ct=ut/Math.max(C.width,C.height)),ct<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const lt=A?Bo:Math.floor,bt=lt(ct*C.width),xt=lt(ct*C.height);h===void 0&&(h=x(bt,xt));const St=j?x(bt,xt):h;return St.width=bt,St.height=xt,St.getContext("2d").drawImage(C,0,0,bt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+bt+"x"+xt+")."),St}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Gl(C.width)&&Gl(C.height)}function f(C){return a?!1:C.wrapS!==vn||C.wrapT!==vn||C.minFilter!==Re&&C.minFilter!==tn}function E(C,A){return C.generateMipmaps&&A&&C.minFilter!==Re&&C.minFilter!==tn}function v(C){n.generateMipmap(C)}function _(C,A,j,ut,ct=!1){if(a===!1)return A;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt=A;if(A===n.RED&&(j===n.FLOAT&&(lt=n.R32F),j===n.HALF_FLOAT&&(lt=n.R16F),j===n.UNSIGNED_BYTE&&(lt=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(lt=n.R8UI),j===n.UNSIGNED_SHORT&&(lt=n.R16UI),j===n.UNSIGNED_INT&&(lt=n.R32UI),j===n.BYTE&&(lt=n.R8I),j===n.SHORT&&(lt=n.R16I),j===n.INT&&(lt=n.R32I)),A===n.RG&&(j===n.FLOAT&&(lt=n.RG32F),j===n.HALF_FLOAT&&(lt=n.RG16F),j===n.UNSIGNED_BYTE&&(lt=n.RG8)),A===n.RGBA){const bt=ct?ha:ie.getTransfer(ut);j===n.FLOAT&&(lt=n.RGBA32F),j===n.HALF_FLOAT&&(lt=n.RGBA16F),j===n.UNSIGNED_BYTE&&(lt=bt===le?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function T(C,A,j){return E(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Re&&C.minFilter!==tn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function p(C){return C===Re||C===hl||C===Va?n.NEAREST:n.LINEAR}function y(C){const A=C.target;A.removeEventListener("dispose",y),M(A),A.isVideoTexture&&u.delete(A)}function P(C){const A=C.target;A.removeEventListener("dispose",P),L(A)}function M(C){const A=i.get(C);if(A.__webglInit===void 0)return;const j=C.source,ut=d.get(j);if(ut){const ct=ut[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&b(C),Object.keys(ut).length===0&&d.delete(j)}i.remove(C)}function b(C){const A=i.get(C);n.deleteTexture(A.__webglTexture);const j=C.source,ut=d.get(j);delete ut[A.__cacheKey],o.memory.textures--}function L(C){const A=C.texture,j=i.get(C),ut=i.get(A);if(ut.__webglTexture!==void 0&&(n.deleteTexture(ut.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(j.__webglFramebuffer[ct]))for(let lt=0;lt<j.__webglFramebuffer[ct].length;lt++)n.deleteFramebuffer(j.__webglFramebuffer[ct][lt]);else n.deleteFramebuffer(j.__webglFramebuffer[ct]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ct])}else{if(Array.isArray(j.__webglFramebuffer))for(let ct=0;ct<j.__webglFramebuffer.length;ct++)n.deleteFramebuffer(j.__webglFramebuffer[ct]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ct=0;ct<j.__webglColorRenderbuffer.length;ct++)j.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ct]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ct=0,lt=A.length;ct<lt;ct++){const bt=i.get(A[ct]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(A[ct])}i.remove(A),i.remove(C)}let F=0;function $(){F=0}function D(){const C=F;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function B(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function z(C,A){const j=i.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const ut=C.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(j,C,A);return}}e.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function q(C,A){const j=i.get(C);if(C.version>0&&j.__version!==C.version){st(j,C,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function H(C,A){const j=i.get(C);if(C.version>0&&j.__version!==C.version){st(j,C,A);return}e.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function O(C,A){const j=i.get(C);if(C.version>0&&j.__version!==C.version){pt(j,C,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}const V={[Uo]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},Y={[Re]:n.NEAREST,[hl]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[Yr]:n.LINEAR_MIPMAP_LINEAR},k={[fh]:n.NEVER,[_h]:n.ALWAYS,[hh]:n.LESS,[du]:n.LEQUAL,[dh]:n.EQUAL,[gh]:n.GEQUAL,[ph]:n.GREATER,[mh]:n.NOTEQUAL};function N(C,A,j){if(j?(n.texParameteri(C,n.TEXTURE_WRAP_S,V[A.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,V[A.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,V[A.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Y[A.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Y[A.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==vn||A.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,p(A.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,p(A.minFilter)),A.minFilter!==Re&&A.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,k[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Re||A.minFilter!==Va&&A.minFilter!==Yr||A.type===Qn&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Kr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(C,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function tt(C,A){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",y));const ut=A.source;let ct=d.get(ut);ct===void 0&&(ct={},d.set(ut,ct));const lt=B(A);if(lt!==C.__cacheKey){ct[lt]===void 0&&(ct[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ct[lt].usedTimes++;const bt=ct[C.__cacheKey];bt!==void 0&&(ct[C.__cacheKey].usedTimes--,bt.usedTimes===0&&b(A)),C.__cacheKey=lt,C.__webglTexture=ct[lt].texture}return j}function st(C,A,j){let ut=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=n.TEXTURE_3D);const ct=tt(C,A),lt=A.source;e.bindTexture(ut,C.__webglTexture,n.TEXTURE0+j);const bt=i.get(lt);if(lt.version!==bt.__version||ct===!0){e.activeTexture(n.TEXTURE0+j);const xt=ie.getPrimaries(ie.workingColorSpace),St=A.colorSpace===fn?null:ie.getPrimaries(A.colorSpace),Ut=A.colorSpace===fn||xt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Ht=f(A)&&m(A.image)===!1;let J=S(A.image,Ht,!1,r.maxTextureSize);J=yt(A,J);const Rt=m(J)||a,It=s.convert(A.format,A.colorSpace);let Tt=s.convert(A.type),gt=_(A.internalFormat,It,Tt,A.colorSpace,A.isVideoTexture);N(ut,A,Rt);let Mt;const Ft=A.mipmaps,Zt=a&&A.isVideoTexture!==!0&&gt!==fu,Qt=bt.__version===void 0||ct===!0,Ot=T(A,J,Rt);if(A.isDepthTexture)gt=n.DEPTH_COMPONENT,a?A.type===Qn?gt=n.DEPTH_COMPONENT32F:A.type===Jn?gt=n.DEPTH_COMPONENT24:A.type===Si?gt=n.DEPTH24_STENCIL8:gt=n.DEPTH_COMPONENT16:A.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===yi&&gt===n.DEPTH_COMPONENT&&A.type!==Xo&&A.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Jn,Tt=s.convert(A.type)),A.format===vr&&gt===n.DEPTH_COMPONENT&&(gt=n.DEPTH_STENCIL,A.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Si,Tt=s.convert(A.type))),Qt&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,gt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,gt,J.width,J.height,0,It,Tt,null));else if(A.isDataTexture)if(Ft.length>0&&Rt){Zt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Ot,gt,Ft[0].width,Ft[0].height);for(let ft=0,I=Ft.length;ft<I;ft++)Mt=Ft[ft],Zt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,It,Tt,Mt.data):e.texImage2D(n.TEXTURE_2D,ft,gt,Mt.width,Mt.height,0,It,Tt,Mt.data);A.generateMipmaps=!1}else Zt?(Qt&&e.texStorage2D(n.TEXTURE_2D,Ot,gt,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,It,Tt,J.data)):e.texImage2D(n.TEXTURE_2D,0,gt,J.width,J.height,0,It,Tt,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Zt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,gt,Ft[0].width,Ft[0].height,J.depth);for(let ft=0,I=Ft.length;ft<I;ft++)Mt=Ft[ft],A.format!==xn?It!==null?Zt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,J.depth,It,Mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,gt,Mt.width,Mt.height,J.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,J.depth,It,Tt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,gt,Mt.width,Mt.height,J.depth,0,It,Tt,Mt.data)}else{Zt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Ot,gt,Ft[0].width,Ft[0].height);for(let ft=0,I=Ft.length;ft<I;ft++)Mt=Ft[ft],A.format!==xn?It!==null?Zt?e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,It,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,gt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,It,Tt,Mt.data):e.texImage2D(n.TEXTURE_2D,ft,gt,Mt.width,Mt.height,0,It,Tt,Mt.data)}else if(A.isDataArrayTexture)Zt?(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,gt,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,It,Tt,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,J.width,J.height,J.depth,0,It,Tt,J.data);else if(A.isData3DTexture)Zt?(Qt&&e.texStorage3D(n.TEXTURE_3D,Ot,gt,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,It,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,gt,J.width,J.height,J.depth,0,It,Tt,J.data);else if(A.isFramebufferTexture){if(Qt)if(Zt)e.texStorage2D(n.TEXTURE_2D,Ot,gt,J.width,J.height);else{let ft=J.width,I=J.height;for(let ht=0;ht<Ot;ht++)e.texImage2D(n.TEXTURE_2D,ht,gt,ft,I,0,It,Tt,null),ft>>=1,I>>=1}}else if(Ft.length>0&&Rt){Zt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Ot,gt,Ft[0].width,Ft[0].height);for(let ft=0,I=Ft.length;ft<I;ft++)Mt=Ft[ft],Zt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,It,Tt,Mt):e.texImage2D(n.TEXTURE_2D,ft,gt,It,Tt,Mt);A.generateMipmaps=!1}else Zt?(Qt&&e.texStorage2D(n.TEXTURE_2D,Ot,gt,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Tt,J)):e.texImage2D(n.TEXTURE_2D,0,gt,It,Tt,J);E(A,Rt)&&v(ut),bt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function pt(C,A,j){if(A.image.length!==6)return;const ut=tt(C,A),ct=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+j);const lt=i.get(ct);if(ct.version!==lt.__version||ut===!0){e.activeTexture(n.TEXTURE0+j);const bt=ie.getPrimaries(ie.workingColorSpace),xt=A.colorSpace===fn?null:ie.getPrimaries(A.colorSpace),St=A.colorSpace===fn||bt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Ht=A.image[0]&&A.image[0].isDataTexture,J=[];for(let ft=0;ft<6;ft++)!Ut&&!Ht?J[ft]=S(A.image[ft],!1,!0,r.maxCubemapSize):J[ft]=Ht?A.image[ft].image:A.image[ft],J[ft]=yt(A,J[ft]);const Rt=J[0],It=m(Rt)||a,Tt=s.convert(A.format,A.colorSpace),gt=s.convert(A.type),Mt=_(A.internalFormat,Tt,gt,A.colorSpace),Ft=a&&A.isVideoTexture!==!0,Zt=lt.__version===void 0||ut===!0;let Qt=T(A,Rt,It);N(n.TEXTURE_CUBE_MAP,A,It);let Ot;if(Ut){Ft&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Qt,Mt,Rt.width,Rt.height);for(let ft=0;ft<6;ft++){Ot=J[ft].mipmaps;for(let I=0;I<Ot.length;I++){const ht=Ot[I];A.format!==xn?Tt!==null?Ft?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,0,0,ht.width,ht.height,Tt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,Mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,0,0,ht.width,ht.height,Tt,gt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,Mt,ht.width,ht.height,0,Tt,gt,ht.data)}}}else{Ot=A.mipmaps,Ft&&Zt&&(Ot.length>0&&Qt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Qt,Mt,J[0].width,J[0].height));for(let ft=0;ft<6;ft++)if(Ht){Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,J[ft].width,J[ft].height,Tt,gt,J[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Mt,J[ft].width,J[ft].height,0,Tt,gt,J[ft].data);for(let I=0;I<Ot.length;I++){const dt=Ot[I].image[ft].image;Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,0,0,dt.width,dt.height,Tt,gt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,Mt,dt.width,dt.height,0,Tt,gt,dt.data)}}else{Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Tt,gt,J[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Mt,Tt,gt,J[ft]);for(let I=0;I<Ot.length;I++){const ht=Ot[I];Ft?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,0,0,Tt,gt,ht.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,Mt,Tt,gt,ht.image[ft])}}}E(A,It)&&v(n.TEXTURE_CUBE_MAP),lt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function mt(C,A,j,ut,ct,lt){const bt=s.convert(j.format,j.colorSpace),xt=s.convert(j.type),St=_(j.internalFormat,bt,xt,j.colorSpace);if(!i.get(A).__hasExternalTextures){const Ht=Math.max(1,A.width>>lt),J=Math.max(1,A.height>>lt);ct===n.TEXTURE_3D||ct===n.TEXTURE_2D_ARRAY?e.texImage3D(ct,lt,St,Ht,J,A.depth,0,bt,xt,null):e.texImage2D(ct,lt,St,Ht,J,0,bt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),at(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,ct,i.get(j).__webglTexture,0,rt(A)):(ct===n.TEXTURE_2D||ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,ct,i.get(j).__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(C,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ut=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||at(A)){const ct=A.depthTexture;ct&&ct.isDepthTexture&&(ct.type===Qn?ut=n.DEPTH_COMPONENT32F:ct.type===Jn&&(ut=n.DEPTH_COMPONENT24));const lt=rt(A);at(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ut,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ut,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ut,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const ut=rt(A);j&&at(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,n.DEPTH24_STENCIL8,A.width,A.height):at(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const ut=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ct=0;ct<ut.length;ct++){const lt=ut[ct],bt=s.convert(lt.format,lt.colorSpace),xt=s.convert(lt.type),St=_(lt.internalFormat,bt,xt,lt.colorSpace),Ut=rt(A);j&&at(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,A.width,A.height):at(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,St,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,St,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const ut=i.get(A.depthTexture).__webglTexture,ct=rt(A);if(A.depthTexture.format===yi)at(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(A.depthTexture.format===vr)at(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function U(C){const A=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Z(A.__webglFramebuffer,C)}else if(j){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]=n.createRenderbuffer(),vt(A.__webglDepthbuffer[ut],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),vt(A.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function K(C,A,j){const ut=i.get(C);A!==void 0&&mt(ut.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&U(C)}function w(C){const A=C.texture,j=i.get(C),ut=i.get(A);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=A.version,o.memory.textures++);const ct=C.isWebGLCubeRenderTarget===!0,lt=C.isWebGLMultipleRenderTargets===!0,bt=m(C)||a;if(ct){j.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[xt]=[];for(let St=0;St<A.mipmaps.length;St++)j.__webglFramebuffer[xt][St]=n.createFramebuffer()}else j.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)j.__webglFramebuffer[xt]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(lt)if(r.drawBuffers){const xt=C.texture;for(let St=0,Ut=xt.length;St<Ut;St++){const Ht=i.get(xt[St]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&at(C)===!1){const xt=lt?A:[A];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let St=0;St<xt.length;St++){const Ut=xt[St];j.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[St]);const Ht=s.convert(Ut.format,Ut.colorSpace),J=s.convert(Ut.type),Rt=_(Ut.internalFormat,Ht,J,Ut.colorSpace,C.isXRRenderTarget===!0),It=rt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,Rt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,j.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),N(n.TEXTURE_CUBE_MAP,A,bt);for(let xt=0;xt<6;xt++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)mt(j.__webglFramebuffer[xt][St],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else mt(j.__webglFramebuffer[xt],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);E(A,bt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const xt=C.texture;for(let St=0,Ut=xt.length;St<Ut;St++){const Ht=xt[St],J=i.get(Ht);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),N(n.TEXTURE_2D,Ht,bt),mt(j.__webglFramebuffer,C,Ht,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),E(Ht,bt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ut.__webglTexture),N(xt,A,bt),a&&A.mipmaps&&A.mipmaps.length>0)for(let St=0;St<A.mipmaps.length;St++)mt(j.__webglFramebuffer[St],C,A,n.COLOR_ATTACHMENT0,xt,St);else mt(j.__webglFramebuffer,C,A,n.COLOR_ATTACHMENT0,xt,0);E(A,bt)&&v(xt),e.unbindTexture()}C.depthBuffer&&U(C)}function it(C){const A=m(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ut=0,ct=j.length;ut<ct;ut++){const lt=j[ut];if(E(lt,A)){const bt=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(lt).__webglTexture;e.bindTexture(bt,xt),v(bt),e.unbindTexture()}}}function W(C){if(a&&C.samples>0&&at(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,ut=C.height;let ct=n.COLOR_BUFFER_BIT;const lt=[],bt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),St=C.isWebGLMultipleRenderTargets===!0;if(St)for(let Ut=0;Ut<A.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){lt.push(n.COLOR_ATTACHMENT0+Ut),C.depthBuffer&&lt.push(bt);const Ht=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Ht===!1&&(C.depthBuffer&&(ct|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ct|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ut]),Ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),St){const J=i.get(A[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,j,ut,0,0,j,ut,ct,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Ut=0;Ut<A.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ut]);const Ht=i.get(A[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(r.maxSamples,C.samples)}function at(C){const A=i.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(C){const A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function yt(C,A){const j=C.colorSpace,ut=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Fo||j!==Hn&&j!==fn&&(ie.getTransfer(j)===le?a===!1?t.has("EXT_sRGB")===!0&&ut===xn?(C.format=Fo,C.minFilter=tn,C.generateMipmaps=!1):A=gu.sRGBToLinear(A):(ut!==xn||ct!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=K,this.setupRenderTarget=w,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=at}function xg(n,t,e){const i=e.isWebGL2;function r(s,o=fn){let a;const l=ie.getTransfer(o);if(s===ii)return n.UNSIGNED_BYTE;if(s===au)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Qf)return n.BYTE;if(s===th)return n.SHORT;if(s===Xo)return n.UNSIGNED_SHORT;if(s===su)return n.INT;if(s===Jn)return n.UNSIGNED_INT;if(s===Qn)return n.FLOAT;if(s===Kr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===eh)return n.ALPHA;if(s===xn)return n.RGBA;if(s===nh)return n.LUMINANCE;if(s===ih)return n.LUMINANCE_ALPHA;if(s===yi)return n.DEPTH_COMPONENT;if(s===vr)return n.DEPTH_STENCIL;if(s===Fo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rh)return n.RED;if(s===lu)return n.RED_INTEGER;if(s===sh)return n.RG;if(s===cu)return n.RG_INTEGER;if(s===uu)return n.RGBA_INTEGER;if(s===Wa||s===Xa||s===qa||s===Ya)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dl||s===pl||s===ml||s===gl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_l||s===vl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_l)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xl||s===Ml||s===Sl||s===yl||s===El||s===Tl||s===bl||s===Al||s===wl||s===Rl||s===Cl||s===Ll||s===Pl||s===Dl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ml)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===El)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Al)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ll)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka||s===Ul||s===Il)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ka)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ah||s===Nl||s===Fl||s===Ol)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Si?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Mg extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ti extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sg={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ti;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class yg extends yr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,x=null;const S=e.getContextAttributes();let m=null,f=null;const E=[],v=[],_=new jt;let T=null;const p=new un;p.layers.enable(1),p.viewport=new Ne;const y=new un;y.layers.enable(2),y.viewport=new Ne;const P=[p,y],M=new Mg;M.layers.enable(1),M.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let tt=E[N];return tt===void 0&&(tt=new xo,E[N]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(N){let tt=E[N];return tt===void 0&&(tt=new xo,E[N]=tt),tt.getGripSpace()},this.getHand=function(N){let tt=E[N];return tt===void 0&&(tt=new xo,E[N]=tt),tt.getHandSpace()};function F(N){const tt=v.indexOf(N.inputSource);if(tt===-1)return;const st=E[tt];st!==void 0&&(st.update(N.inputSource,N.frame,c||o),st.dispatchEvent({type:N.type,data:N.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",D);for(let N=0;N<E.length;N++){const tt=v[N];tt!==null&&(v[N]=null,E[N].disconnect(tt))}b=null,L=null,t.setRenderTarget(m),g=null,d=null,h=null,r=null,f=null,k.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",D),S.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Ai(g.framebufferWidth,g.framebufferHeight,{format:xn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let tt=null,st=null,pt=null;S.depth&&(pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=S.stencil?vr:yi,st=S.stencil?Si:Jn);const mt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(mt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Ai(d.textureWidth,d.textureHeight,{format:xn,type:ii,depthTexture:new wu(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0});const vt=t.properties.get(f);vt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(N){for(let tt=0;tt<N.removed.length;tt++){const st=N.removed[tt],pt=v.indexOf(st);pt>=0&&(v[pt]=null,E[pt].disconnect(st))}for(let tt=0;tt<N.added.length;tt++){const st=N.added[tt];let pt=v.indexOf(st);if(pt===-1){for(let vt=0;vt<E.length;vt++)if(vt>=v.length){v.push(st),pt=vt;break}else if(v[vt]===null){v[vt]=st,pt=vt;break}if(pt===-1)break}const mt=E[pt];mt&&mt.connect(st)}}const B=new G,z=new G;function q(N,tt,st){B.setFromMatrixPosition(tt.matrixWorld),z.setFromMatrixPosition(st.matrixWorld);const pt=B.distanceTo(z),mt=tt.projectionMatrix.elements,vt=st.projectionMatrix.elements,Z=mt[14]/(mt[10]-1),U=mt[14]/(mt[10]+1),K=(mt[9]+1)/mt[5],w=(mt[9]-1)/mt[5],it=(mt[8]-1)/mt[0],W=(vt[8]+1)/vt[0],rt=Z*it,at=Z*W,wt=pt/(-it+W),yt=wt*-it;tt.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(yt),N.translateZ(wt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const C=Z+wt,A=U+wt,j=rt-yt,ut=at+(pt-yt),ct=K*U/A*C,lt=w*U/A*C;N.projectionMatrix.makePerspective(j,ut,ct,lt,C,A),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function H(N,tt){tt===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(tt.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;M.near=y.near=p.near=N.near,M.far=y.far=p.far=N.far,(b!==M.near||L!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,L=M.far);const tt=N.parent,st=M.cameras;H(M,tt);for(let pt=0;pt<st.length;pt++)H(st[pt],tt);st.length===2?q(M,p,y):M.projectionMatrix.copy(p.projectionMatrix),O(N,M,tt)};function O(N,tt,st){st===null?N.matrix.copy(tt.matrixWorld):(N.matrix.copy(st.matrixWorld),N.matrix.invert(),N.matrix.multiply(tt.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(tt.projectionMatrix),N.projectionMatrixInverse.copy(tt.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Oo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=N)};let V=null;function Y(N,tt){if(u=tt.getViewerPose(c||o),x=tt,u!==null){const st=u.views;g!==null&&(t.setRenderTargetFramebuffer(f,g.framebuffer),t.setRenderTarget(f));let pt=!1;st.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let mt=0;mt<st.length;mt++){const vt=st[mt];let Z=null;if(g!==null)Z=g.getViewport(vt);else{const K=h.getViewSubImage(d,vt);Z=K.viewport,mt===0&&(t.setRenderTargetTextures(f,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(f))}let U=P[mt];U===void 0&&(U=new un,U.layers.enable(mt),U.viewport=new Ne,P[mt]=U),U.matrix.fromArray(vt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(vt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Z.x,Z.y,Z.width,Z.height),mt===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(U)}}for(let st=0;st<E.length;st++){const pt=v[st],mt=E[st];pt!==null&&mt!==void 0&&mt.update(pt,tt,c||o)}V&&V(N,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),x=null}const k=new Au;k.setAnimationLoop(Y),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}}function Eg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,yu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tg(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const _=v.program;i.uniformBlockBinding(E,_)}function c(E,v){let _=r[E.id];_===void 0&&(x(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(E,T);const p=t.render.frame;s[E.id]!==p&&(d(E),s[E.id]=p)}function u(E){const v=h();E.__bindingPointIndex=v;const _=n.createBuffer(),T=E.__size,p=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,p),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=r[E.id],_=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let p=0,y=_.length;p<y;p++){const P=Array.isArray(_[p])?_[p]:[_[p]];for(let M=0,b=P.length;M<b;M++){const L=P[M];if(g(L,p,M,T)===!0){const F=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let B=0;B<$.length;B++){const z=$[B],q=S(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,F+D,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,v,_,T){const p=E.value,y=v+"_"+_;if(T[y]===void 0)return typeof p=="number"||typeof p=="boolean"?T[y]=p:T[y]=p.clone(),!0;{const P=T[y];if(typeof p=="number"||typeof p=="boolean"){if(P!==p)return T[y]=p,!0}else if(P.equals(p)===!1)return P.copy(p),!0}return!1}function x(E){const v=E.uniforms;let _=0;const T=16;for(let y=0,P=v.length;y<P;y++){const M=Array.isArray(v[y])?v[y]:[v[y]];for(let b=0,L=M.length;b<L;b++){const F=M[b],$=Array.isArray(F.value)?F.value:[F.value];for(let D=0,B=$.length;D<B;D++){const z=$[D],q=S(z),H=_%T;H!==0&&T-H<q.boundary&&(_+=T-H),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=q.storage}}}const p=_%T;return p>0&&(_+=T-p),E.__size=_,E.__cache={},this}function S(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Uu{constructor(t={}){const{canvas:e=xh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),x=new Int32Array(4);let S=null,m=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let _=!1,T=0,p=0,y=null,P=-1,M=null;const b=new Ne,L=new Ne;let F=null;const $=new Vt(0);let D=0,B=e.width,z=e.height,q=1,H=null,O=null;const V=new Ne(0,0,B,z),Y=new Ne(0,0,B,z);let k=!1;const N=new bu;let tt=!1,st=!1,pt=null;const mt=new pe,vt=new jt,Z=new G,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return y===null?q:1}let w=i;function it(R,X){for(let et=0;et<R.length;et++){const nt=R[et],Q=e.getContext(nt,X);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ht,!1),w===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),w=it(X,R),w===null)throw it(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let W,rt,at,wt,yt,C,A,j,ut,ct,lt,bt,xt,St,Ut,Ht,J,Rt,It,Tt,gt,Mt,Ft,Zt;function Qt(){W=new Im(w),rt=new wm(w,W,t),W.init(rt),Mt=new xg(w,W,rt),at=new _g(w,W,rt),wt=new Om(w),yt=new ig,C=new vg(w,W,at,yt,rt,Mt,wt),A=new Cm(v),j=new Um(v),ut=new Wh(w,rt),Ft=new bm(w,W,ut,rt),ct=new Nm(w,ut,wt,Ft),lt=new Hm(w,ct,ut,wt),It=new Gm(w,rt,C),Ht=new Rm(yt),bt=new ng(v,A,j,W,rt,Ft,Ht),xt=new Eg(v,yt),St=new sg,Ut=new fg(W,rt),Rt=new Tm(v,A,j,at,lt,d,l),J=new gg(v,lt,rt),Zt=new Tg(w,wt,rt,at),Tt=new Am(w,W,wt,rt),gt=new Fm(w,W,wt,rt),wt.programs=bt.programs,v.capabilities=rt,v.extensions=W,v.properties=yt,v.renderLists=St,v.shadowMap=J,v.state=at,v.info=wt}Qt();const Ot=new yg(v,w);this.xr=Ot,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const R=W.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=W.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(B,z,!1))},this.getSize=function(R){return R.set(B,z)},this.setSize=function(R,X,et=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,z=X,e.width=Math.floor(R*q),e.height=Math.floor(X*q),et===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(B*q,z*q).floor()},this.setDrawingBufferSize=function(R,X,et){B=R,z=X,q=et,e.width=Math.floor(R*et),e.height=Math.floor(X*et),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,X,et,nt){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,X,et,nt),at.viewport(b.copy(V).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(Y)},this.setScissor=function(R,X,et,nt){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,X,et,nt),at.scissor(L.copy(Y).multiplyScalar(q).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(R){at.setScissorTest(k=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(R=!0,X=!0,et=!0){let nt=0;if(R){let Q=!1;if(y!==null){const Et=y.texture.format;Q=Et===uu||Et===cu||Et===lu}if(Q){const Et=y.texture.type,Lt=Et===ii||Et===Jn||Et===Xo||Et===Si||Et===au||Et===ou,Nt=Rt.getClearColor(),Bt=Rt.getClearAlpha(),Xt=Nt.r,Gt=Nt.g,kt=Nt.b;Lt?(g[0]=Xt,g[1]=Gt,g[2]=kt,g[3]=Bt,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=Xt,x[1]=Gt,x[2]=kt,x[3]=Bt,w.clearBufferiv(w.COLOR,0,x))}else nt|=w.COLOR_BUFFER_BIT}X&&(nt|=w.DEPTH_BUFFER_BIT),et&&(nt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),St.dispose(),Ut.dispose(),yt.dispose(),A.dispose(),j.dispose(),lt.dispose(),Ft.dispose(),Zt.dispose(),bt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Jt),Ot.removeEventListener("sessionend",Dt),pt&&(pt.dispose(),pt=null),ne.stop()};function ft(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const R=wt.autoReset,X=J.enabled,et=J.autoUpdate,nt=J.needsUpdate,Q=J.type;Qt(),wt.autoReset=R,J.enabled=X,J.autoUpdate=et,J.needsUpdate=nt,J.type=Q}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){const X=R.target;X.removeEventListener("dispose",dt),At(X)}function At(R){Ct(R),yt.remove(R)}function Ct(R){const X=yt.get(R).programs;X!==void 0&&(X.forEach(function(et){bt.releaseProgram(et)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,et,nt,Q,Et){X===null&&(X=U);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Nt=pf(R,X,et,nt,Q);at.setMaterial(nt,Lt);let Bt=et.index,Xt=1;if(nt.wireframe===!0){if(Bt=ct.getWireframeAttribute(et),Bt===void 0)return;Xt=2}const Gt=et.drawRange,kt=et.attributes.position;let ge=Gt.start*Xt,je=(Gt.start+Gt.count)*Xt;Et!==null&&(ge=Math.max(ge,Et.start*Xt),je=Math.min(je,(Et.start+Et.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),je=Math.min(je,Bt.count)):kt!=null&&(ge=Math.max(ge,0),je=Math.min(je,kt.count));const Ae=je-ge;if(Ae<0||Ae===1/0)return;Ft.setup(Q,nt,Nt,et,Bt);let wn,fe=Tt;if(Bt!==null&&(wn=ut.get(Bt),fe=gt,fe.setIndex(wn)),Q.isMesh)nt.wireframe===!0?(at.setLineWidth(nt.wireframeLinewidth*K()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(Q.isLine){let Kt=nt.linewidth;Kt===void 0&&(Kt=1),at.setLineWidth(Kt*K()),Q.isLineSegments?fe.setMode(w.LINES):Q.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else Q.isPoints?fe.setMode(w.POINTS):Q.isSprite&&fe.setMode(w.TRIANGLES);if(Q.isBatchedMesh)fe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)fe.renderInstances(ge,Ae,Q.count);else if(et.isInstancedBufferGeometry){const Kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,za=Math.min(et.instanceCount,Kt);fe.renderInstances(ge,Ae,za)}else fe.render(ge,Ae)};function te(R,X,et){R.transparent===!0&&R.side===rn&&R.forceSinglePass===!1?(R.side=Ye,R.needsUpdate=!0,ms(R,X,et),R.side=ai,R.needsUpdate=!0,ms(R,X,et),R.side=rn):ms(R,X,et)}this.compile=function(R,X,et=null){et===null&&(et=R),m=Ut.get(et),m.init(),E.push(m),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),R!==et&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(v._useLegacyLights);const nt=new Set;return R.traverse(function(Q){const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){const Nt=Et[Lt];te(Nt,et,Q),nt.add(Nt)}else te(Et,et,Q),nt.add(Et)}),E.pop(),m=null,nt},this.compileAsync=function(R,X,et=null){const nt=this.compile(R,X,et);return new Promise(Q=>{function Et(){if(nt.forEach(function(Lt){yt.get(Lt).currentProgram.isReady()&&nt.delete(Lt)}),nt.size===0){Q(R);return}setTimeout(Et,10)}W.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ee=null;function oe(R){ee&&ee(R)}function Jt(){ne.stop()}function Dt(){ne.start()}const ne=new Au;ne.setAnimationLoop(oe),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(R){ee=R,Ot.setAnimationLoop(R),R===null?ne.stop():ne.start()},Ot.addEventListener("sessionstart",Jt),Ot.addEventListener("sessionend",Dt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(X),X=Ot.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,y),m=Ut.get(R,E.length),m.init(),E.push(m),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),N.setFromProjectionMatrix(mt),st=this.localClippingEnabled,tt=Ht.init(this.clippingPlanes,st),S=St.get(R,f.length),S.init(),f.push(S),se(R,X,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(H,O),this.info.render.frame++,tt===!0&&Ht.beginShadows();const et=m.state.shadowsArray;if(J.render(et,R,X),tt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(S,R),m.setupLights(v._useLegacyLights),X.isArrayCamera){const nt=X.cameras;for(let Q=0,Et=nt.length;Q<Et;Q++){const Lt=nt[Q];hn(S,R,Lt,Lt.viewport)}}else hn(S,R,X);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(v,R,X),Ft.resetDefaultState(),P=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function se(R,X,et,nt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){nt&&Z.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Lt=lt.update(R),Nt=R.material;Nt.visible&&S.push(R,Lt,Nt,et,Z.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){const Lt=lt.update(R),Nt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Z.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Z.copy(Lt.boundingSphere.center)),Z.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Nt)){const Bt=Lt.groups;for(let Xt=0,Gt=Bt.length;Xt<Gt;Xt++){const kt=Bt[Xt],ge=Nt[kt.materialIndex];ge&&ge.visible&&S.push(R,Lt,ge,et,Z.z,kt)}}else Nt.visible&&S.push(R,Lt,Nt,et,Z.z,null)}}const Et=R.children;for(let Lt=0,Nt=Et.length;Lt<Nt;Lt++)se(Et[Lt],X,et,nt)}function hn(R,X,et,nt){const Q=R.opaque,Et=R.transmissive,Lt=R.transparent;m.setupLightsView(et),tt===!0&&Ht.setGlobalState(v.clippingPlanes,et),Et.length>0&&ds(Q,Et,X,et),nt&&at.viewport(b.copy(nt)),Q.length>0&&ps(Q,X,et),Et.length>0&&ps(Et,X,et),Lt.length>0&&ps(Lt,X,et),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function ds(R,X,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const Et=rt.isWebGL2;pt===null&&(pt=new Ai(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?Kr:ii,minFilter:Yr,samples:Et?4:0})),v.getDrawingBufferSize(vt),Et?pt.setSize(vt.x,vt.y):pt.setSize(Bo(vt.x),Bo(vt.y));const Lt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor($),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Nt=v.toneMapping;v.toneMapping=ni,ps(R,et,nt),C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt);let Bt=!1;for(let Xt=0,Gt=X.length;Xt<Gt;Xt++){const kt=X[Xt],ge=kt.object,je=kt.geometry,Ae=kt.material,wn=kt.group;if(Ae.side===rn&&ge.layers.test(nt.layers)){const fe=Ae.side;Ae.side=Ye,Ae.needsUpdate=!0,nl(ge,et,nt,je,Ae,wn),Ae.side=fe,Ae.needsUpdate=!0,Bt=!0}}Bt===!0&&(C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt)),v.setRenderTarget(Lt),v.setClearColor($,D),v.toneMapping=Nt}function ps(R,X,et){const nt=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Et=R.length;Q<Et;Q++){const Lt=R[Q],Nt=Lt.object,Bt=Lt.geometry,Xt=nt===null?Lt.material:nt,Gt=Lt.group;Nt.layers.test(et.layers)&&nl(Nt,X,et,Bt,Xt,Gt)}}function nl(R,X,et,nt,Q,Et){R.onBeforeRender(v,X,et,nt,Q,Et),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(v,X,et,nt,R,Et),Q.transparent===!0&&Q.side===rn&&Q.forceSinglePass===!1?(Q.side=Ye,Q.needsUpdate=!0,v.renderBufferDirect(et,X,nt,Q,R,Et),Q.side=ai,Q.needsUpdate=!0,v.renderBufferDirect(et,X,nt,Q,R,Et),Q.side=rn):v.renderBufferDirect(et,X,nt,Q,R,Et),R.onAfterRender(v,X,et,nt,Q,Et)}function ms(R,X,et){X.isScene!==!0&&(X=U);const nt=yt.get(R),Q=m.state.lights,Et=m.state.shadowsArray,Lt=Q.state.version,Nt=bt.getParameters(R,Q.state,Et,X,et),Bt=bt.getProgramCacheKey(Nt);let Xt=nt.programs;nt.environment=R.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(R.isMeshStandardMaterial?j:A).get(R.envMap||nt.environment),Xt===void 0&&(R.addEventListener("dispose",dt),Xt=new Map,nt.programs=Xt);let Gt=Xt.get(Bt);if(Gt!==void 0){if(nt.currentProgram===Gt&&nt.lightsStateVersion===Lt)return rl(R,Nt),Gt}else Nt.uniforms=bt.getUniforms(R),R.onBuild(et,Nt,v),R.onBeforeCompile(Nt,v),Gt=bt.acquireProgram(Nt,Bt),Xt.set(Bt,Gt),nt.uniforms=Nt.uniforms;const kt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),rl(R,Nt),nt.needsLights=gf(R),nt.lightsStateVersion=Lt,nt.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMap.value=Q.state.directionalShadowMap,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotShadowMap.value=Q.state.spotShadowMap,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMap.value=Q.state.pointShadowMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=Gt,nt.uniformsList=null,Gt}function il(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=sa.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function rl(R,X){const et=yt.get(R);et.outputColorSpace=X.outputColorSpace,et.batching=X.batching,et.instancing=X.instancing,et.instancingColor=X.instancingColor,et.skinning=X.skinning,et.morphTargets=X.morphTargets,et.morphNormals=X.morphNormals,et.morphColors=X.morphColors,et.morphTargetsCount=X.morphTargetsCount,et.numClippingPlanes=X.numClippingPlanes,et.numIntersection=X.numClipIntersection,et.vertexAlphas=X.vertexAlphas,et.vertexTangents=X.vertexTangents,et.toneMapping=X.toneMapping}function pf(R,X,et,nt,Q){X.isScene!==!0&&(X=U),C.resetTextureUnits();const Et=X.fog,Lt=nt.isMeshStandardMaterial?X.environment:null,Nt=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Hn,Bt=(nt.isMeshStandardMaterial?j:A).get(nt.envMap||Lt),Xt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Gt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),kt=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,je=!!et.morphAttributes.color;let Ae=ni;nt.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const wn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,fe=wn!==void 0?wn.length:0,Kt=yt.get(nt),za=m.state.lights;if(tt===!0&&(st===!0||R!==M)){const ln=R===M&&nt.id===P;Ht.setState(nt,R,ln)}let me=!1;nt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==za.state.version||Kt.outputColorSpace!==Nt||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Kt.envMap!==Bt||nt.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==Gt||Kt.morphTargets!==kt||Kt.morphNormals!==ge||Kt.morphColors!==je||Kt.toneMapping!==Ae||rt.isWebGL2===!0&&Kt.morphTargetsCount!==fe)&&(me=!0):(me=!0,Kt.__version=nt.version);let ci=Kt.currentProgram;me===!0&&(ci=ms(nt,X,Q));let sl=!1,Lr=!1,Ga=!1;const Fe=ci.getUniforms(),ui=Kt.uniforms;if(at.useProgram(ci.program)&&(sl=!0,Lr=!0,Ga=!0),nt.id!==P&&(P=nt.id,Lr=!0),sl||M!==R){Fe.setValue(w,"projectionMatrix",R.projectionMatrix),Fe.setValue(w,"viewMatrix",R.matrixWorldInverse);const ln=Fe.map.cameraPosition;ln!==void 0&&ln.setValue(w,Z.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&Fe.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Fe.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Lr=!0,Ga=!0)}if(Q.isSkinnedMesh){Fe.setOptional(w,Q,"bindMatrix"),Fe.setOptional(w,Q,"bindMatrixInverse");const ln=Q.skeleton;ln&&(rt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Fe.setValue(w,"boneTexture",ln.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(Fe.setOptional(w,Q,"batchingTexture"),Fe.setValue(w,"batchingTexture",Q._matricesTexture,C));const Ha=et.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&rt.isWebGL2===!0)&&It.update(Q,et,ci),(Lr||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,Fe.setValue(w,"receiveShadow",Q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ui.envMap.value=Bt,ui.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Lr&&(Fe.setValue(w,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&mf(ui,Ga),Et&&nt.fog===!0&&xt.refreshFogUniforms(ui,Et),xt.refreshMaterialUniforms(ui,nt,q,z,pt),sa.upload(w,il(Kt),ui,C)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(sa.upload(w,il(Kt),ui,C),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Fe.setValue(w,"center",Q.center),Fe.setValue(w,"modelViewMatrix",Q.modelViewMatrix),Fe.setValue(w,"normalMatrix",Q.normalMatrix),Fe.setValue(w,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const ln=nt.uniformsGroups;for(let ka=0,_f=ln.length;ka<_f;ka++)if(rt.isWebGL2){const al=ln[ka];Zt.update(al,ci),Zt.bind(al,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function mf(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function gf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,X,et){yt.get(R.texture).__webglTexture=X,yt.get(R.depthTexture).__webglTexture=et;const nt=yt.get(R);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const et=yt.get(R);et.__webglFramebuffer=X,et.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,et=0){y=R,T=X,p=et;let nt=!0,Q=null,Et=!1,Lt=!1;if(R){const Bt=yt.get(R);Bt.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(w.FRAMEBUFFER,null),nt=!1):Bt.__webglFramebuffer===void 0?C.setupRenderTarget(R):Bt.__hasExternalTextures&&C.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);const Gt=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[X])?Q=Gt[X][et]:Q=Gt[X],Et=!0):rt.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?Q=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?Q=Gt[et]:Q=Gt,b.copy(R.viewport),L.copy(R.scissor),F=R.scissorTest}else b.copy(V).multiplyScalar(q).floor(),L.copy(Y).multiplyScalar(q).floor(),F=k;if(at.bindFramebuffer(w.FRAMEBUFFER,Q)&&rt.drawBuffers&&nt&&at.drawBuffers(R,Q),at.viewport(b),at.scissor(L),at.setScissorTest(F),Et){const Bt=yt.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+X,Bt.__webglTexture,et)}else if(Lt){const Bt=yt.get(R.texture),Xt=X||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Bt.__webglTexture,et||0,Xt)}P=-1},this.readRenderTargetPixels=function(R,X,et,nt,Q,Et,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){at.bindFramebuffer(w.FRAMEBUFFER,Nt);try{const Bt=R.texture,Xt=Bt.format,Gt=Bt.type;if(Xt!==xn&&Mt.convert(Xt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Gt===Kr&&(W.has("EXT_color_buffer_half_float")||rt.isWebGL2&&W.has("EXT_color_buffer_float"));if(Gt!==ii&&Mt.convert(Gt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===Qn&&(rt.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-nt&&et>=0&&et<=R.height-Q&&w.readPixels(X,et,nt,Q,Mt.convert(Xt),Mt.convert(Gt),Et)}finally{const Bt=y!==null?yt.get(y).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(R,X,et=0){const nt=Math.pow(2,-et),Q=Math.floor(X.image.width*nt),Et=Math.floor(X.image.height*nt);C.setTexture2D(X,0),w.copyTexSubImage2D(w.TEXTURE_2D,et,0,0,R.x,R.y,Q,Et),at.unbindTexture()},this.copyTextureToTexture=function(R,X,et,nt=0){const Q=X.image.width,Et=X.image.height,Lt=Mt.convert(et.format),Nt=Mt.convert(et.type);C.setTexture2D(et,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,et.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,et.unpackAlignment),X.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,nt,R.x,R.y,Q,Et,Lt,Nt,X.image.data):X.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,nt,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Lt,X.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,nt,R.x,R.y,Lt,Nt,X.image),nt===0&&et.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(R,X,et,nt,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=R.max.x-R.min.x+1,Lt=R.max.y-R.min.y+1,Nt=R.max.z-R.min.z+1,Bt=Mt.convert(nt.format),Xt=Mt.convert(nt.type);let Gt;if(nt.isData3DTexture)C.setTexture3D(nt,0),Gt=w.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)C.setTexture2DArray(nt,0),Gt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,nt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,nt.unpackAlignment);const kt=w.getParameter(w.UNPACK_ROW_LENGTH),ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),je=w.getParameter(w.UNPACK_SKIP_PIXELS),Ae=w.getParameter(w.UNPACK_SKIP_ROWS),wn=w.getParameter(w.UNPACK_SKIP_IMAGES),fe=et.isCompressedTexture?et.mipmaps[Q]:et.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,fe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,R.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,R.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,R.min.z),et.isDataTexture||et.isData3DTexture?w.texSubImage3D(Gt,Q,X.x,X.y,X.z,Et,Lt,Nt,Bt,Xt,fe.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(Gt,Q,X.x,X.y,X.z,Et,Lt,Nt,Bt,fe.data)):w.texSubImage3D(Gt,Q,X.x,X.y,X.z,Et,Lt,Nt,Bt,Xt,fe),w.pixelStorei(w.UNPACK_ROW_LENGTH,kt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,je),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wn),Q===0&&nt.generateMipmaps&&w.generateMipmap(Gt),at.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),at.unbindTexture()},this.resetState=function(){T=0,p=0,y=null,at.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qo?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?Ei:hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?Ce:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class bg extends Uu{}bg.prototype.isWebGL1Renderer=!0;class $o{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new $o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ag extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class wg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new G;class _a{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),r=re(r,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Iu extends Oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let er;const Nr=new G,nr=new G,ir=new G,rr=new jt,Fr=new jt,Nu=new pe,Bs=new G,Or=new G,zs=new G,bc=new jt,Mo=new jt,Ac=new jt;class Rg extends Pe{constructor(t=new Iu){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wg(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new _a(i,3,0,!1)),er.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new jt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Gs(Bs.set(-.5,-.5,0),ir,o,nr,r,s),Gs(Or.set(.5,-.5,0),ir,o,nr,r,s),Gs(zs.set(.5,.5,0),ir,o,nr,r,s),bc.set(0,0),Mo.set(1,0),Ac.set(1,1);let a=t.ray.intersectTriangle(Bs,Or,zs,!1,Nr);if(a===null&&(Gs(Or.set(-.5,.5,0),ir,o,nr,r,s),Mo.set(0,1),a=t.ray.intersectTriangle(Bs,zs,Or,!1,Nr),a===null))return;const l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:en.getInterpolation(Nr,Bs,Or,zs,bc,Mo,Ac,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(n,t,e,i,r,s){rr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Fr.x=s*rr.x-r*rr.y,Fr.y=r*rr.x+s*rr.y):Fr.copy(rr),n.copy(t),n.x+=Fr.x,n.y+=Fr.y,n.applyMatrix4(Nu)}class wc extends $e{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const sr=new pe,Rc=new pe,Hs=[],Cc=new Ni,Cg=new pe,Br=new Le,zr=new Fi;class Fu extends Le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Cg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sr),Cc.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(Cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sr),zr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),t.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sr),Rc.multiplyMatrices(i,sr),Br.matrixWorld=Rc,Br.raycast(t,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=s,l.object=this,e.push(l)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ra extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lc=new G,Pc=new G,Dc=new pe,So=new ba,ks=new Fi;class Ou extends Pe{constructor(t=new Ee,e=new Ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Lc.fromBufferAttribute(e,r-1),Pc.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Lc.distanceTo(Pc);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,t.ray.intersectsSphere(ks)===!1)return;Dc.copy(r).invert(),So.copy(t.ray).applyMatrix4(Dc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,u=new G,h=new G,d=new G,g=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const f=Math.max(0,o.start),E=Math.min(x.count,o.start+o.count);for(let v=f,_=E-1;v<_;v+=g){const T=x.getX(v),p=x.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,p),So.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=f,_=E-1;v<_;v+=g){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),So.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const p=t.ray.origin.distanceTo(d);p<t.near||p>t.far||e.push({distance:p,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Uc=new G,Ic=new G;class Bu extends Ou{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Uc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uc.distanceTo(Ic);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zo extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nc=new pe,Go=new ba,Vs=new Fi,Ws=new G;class zu extends Pe{constructor(t=new Ee,e=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,t.ray.intersectsSphere(Vs)===!1)return;Nc.copy(r).invert(),Go.copy(t.ray).applyMatrix4(Nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=d,S=g;x<S;x++){const m=c.getX(x);Ws.fromBufferAttribute(h,m),Fc(Ws,m,l,r,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,S=g;x<S;x++)Ws.fromBufferAttribute(h,x),Fc(Ws,x,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,t,e,i,r,s,o){const a=Go.distanceSqToPoint(n);if(a<e){const l=new G;Go.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class kr extends Ke{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Xs=new G,qs=new G,yo=new G,Ys=new en;class Lg extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(ra*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},g=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:S,b:m,c:f}=Ys;if(S.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ys.getNormal(yo),h[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const v=(E+1)%3,_=h[E],T=h[v],p=Ys[u[E]],y=Ys[u[v]],P=`${_}_${T}`,M=`${T}_${_}`;M in d&&d[M]?(yo.dot(d[M].normal)<=s&&(g.push(p.x,p.y,p.z),g.push(y.x,y.y,y.z)),d[M]=null):P in d||(d[P]={index0:c[E],index1:c[v],normal:yo.clone()})}}for(const x in d)if(d[x]){const{index0:S,index1:m}=d[x];Xs.fromBufferAttribute(a,S),qs.fromBufferAttribute(a,m),g.push(Xs.x,Xs.y,Xs.z),g.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new ve(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class jo extends Ee{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,d=new G,g=[],x=[],S=[],m=[];for(let f=0;f<=i;f++){const E=[],v=f/i;let _=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const p=T/e;h.x=-t*Math.cos(r+p*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(r+p*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(p+_,1-v),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){const v=u[f][E+1],_=u[f][E],T=u[f+1][E],p=u[f+1][E+1];(f!==0||o>0)&&g.push(v,_,p),(f!==i-1||l<Math.PI)&&g.push(_,T,p)}this.setIndex(g),this.setAttribute("position",new ve(x,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jo extends Ee{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new G,h=new G,d=new G;for(let g=0;g<=i;g++)for(let x=0;x<=r;x++){const S=x/r*s,m=g/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(S),h.y=(t+e*Math.cos(m))*Math.sin(S),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=r;x++){const S=(r+1)*g+x-1,m=(r+1)*(g-1)+x-1,f=(r+1)*(g-1)+x,E=(r+1)*g+x;o.push(S,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pg{constructor(t,e,i=0,r=1/0){this.ray=new ba(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ho(t,this,i,e),i.sort(Oc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Ho(t[r],this,i,e);return i.sort(Oc),i}}function Oc(n,t){return n.distance-t.distance}function Ho(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Ho(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);const qt=128,ot=16,We=20,Dg=240,Eo=typeof location<"u"?parseInt(new URLSearchParams(location.search).get("dist"),10):NaN,jn=Eo>=2&&Eo<=10?Eo:6,Ug=2,Ig=1,Ng=2,yn=48,Fg=.5,de=0,An=1,Ri=2,Se=3,kn=4,En=5,Ci=6,si=7,br=8,an=9,Ar=10,oi=11,rs=12,ss=13,as=14,os=15,ls=16,va=17,Gu=18,Hu=19,ku=20,Qo=21,nn=22,Mn=23,on=24,Li=25,Ca=26,La=27,Pa=28,Da=29,Ua=30,wr=31,Vn=32,Rr=33,cs=34,us=35,fs=36,Vu=n=>n>=va&&n<=Qo,$r=n=>n===on||n===Li||n===Vn||n===Rr,Ia=n=>n===cs||n===us||n===fs,xa=n=>n!==de&&n!==an&&n!==Mn&&n!==Li&&n!==Rr&&!Vu(n),_n=n=>xa(n)&&n!==Ci&&n!==nn&&n!==on&&n!==wr&&n!==Vn&&!Ia(n),Ze=xa,To=n=>n===Mn?14:0,Fn={[An]:[0,1,2],[Ri]:[2,2,2],[Se]:[3,3,3],[kn]:[4,4,4],[En]:[6,5,6],[Ci]:[7,7,7],[si]:[8,8,8],[br]:[9,9,9],[an]:[10,10,10],[Ar]:[11,11,11],[oi]:[11,23,2],[rs]:[13,12,13],[ss]:[14,14,14],[as]:[15,15,15],[os]:[16,16,16],[ls]:[17,17,17],[nn]:[24,24,24],[Mn]:[25,25,25],[on]:[26,26,26],[Li]:[26,26,26],[Ca]:[27,27,27],[La]:[28,28,28],[Pa]:[29,29,29],[Da]:[30,30,30],[Ua]:[31,31,31],[wr]:[32,32,32],[Vn]:[33,33,33],[Rr]:[33,33,33],[cs]:[3,3,3],[us]:[8,8,8],[fs]:[27,27,27]},Og={[va]:18,[Gu]:19,[Hu]:20,[ku]:21,[Qo]:22},De=[An,Ri,Se,En,si,nn,Mn,on,br],aa={[An]:"Gras",[Ri]:"Erde",[Se]:"Stein",[kn]:"Sand",[En]:"Holz",[si]:"Bretter",[br]:"Ziegel",[Ar]:"Schnee",[Ci]:"Laub",[oi]:"Schneegras",[rs]:"Kaktus",[ss]:"Kohle",[as]:"Eisen",[os]:"Gold",[ls]:"Diamant",[nn]:"Glas",[Mn]:"Fackel",[on]:"Tür",[Ca]:"Steinziegel",[La]:"Moosziegel",[Pa]:"Marmor",[Da]:"Steinplatten",[Ua]:"Dunkelholz",[wr]:"Eisengitter",[Vn]:"Gittertür",[cs]:"Steintreppe",[us]:"Holztreppe",[fs]:"Ziegeltreppe"},Wu=[An,Ri,Se,kn,En,si,br,Ar,Ci,oi,rs,ss,as,os,ls,nn,Mn,on,Ca,La,Pa,Da,Ua,wr,Vn,cs,us,fs],Bc={[An]:6986554,[Ri]:8018490,[Se]:9079434,[kn]:14208928,[En]:7034166,[Ci]:4880949,[si]:12028498,[br]:10901578,[Ar]:15659766,[oi]:15659766,[rs]:5212730,[ss]:3158064,[as]:13148282,[os]:15255626,[ls]:7332064,[an]:3829456,[nn]:12574954,[Mn]:16757818,[on]:9071162,[Li]:9071162,[Ca]:8684680,[La]:7308392,[Pa]:15265008,[Da]:10132126,[Ua]:5916210,[wr]:10134188,[Vn]:10134188,[Rr]:10134188,[cs]:9079434,[us]:12028498,[fs]:8684680},Bg=0,pr=1,Zr=2,Pi=3,jr=4,Mr=5,zg=["Ozean","Ebene","Wald","Wüste","Schnee","Gebirge"],ce=16,ko=34;let Na=20260612;const Di=()=>Na;function Xu(n){Na=n|0}function Ui(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ks(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)+Na;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function In(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519)+Na;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}const Vr=n=>n*n*(3-2*n);function Gg(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=Ks(e,i),a=Ks(e+1,i),l=Ks(e,i+1),c=Ks(e+1,i+1),u=Vr(r),h=Vr(s);return o+(a-o)*u+(l-o)*h+(o-a-l+c)*u*h}function Jr(n,t){let e=0,i=.5,r=1;for(let s=0;s<4;s++)e+=i*Gg(n*r,t*r),i*=.5,r*=2;return e}function Hg(n,t,e){const i=Math.floor(n),r=Math.floor(t),s=Math.floor(e),o=n-i,a=t-r,l=e-s,c=Vr(o),u=Vr(a),h=Vr(l),d=(T,p,y)=>T+(p-T)*y,g=In(i,r,s),x=In(i+1,r,s),S=In(i,r+1,s),m=In(i+1,r+1,s),f=In(i,r,s+1),E=In(i+1,r,s+1),v=In(i,r+1,s+1),_=In(i+1,r+1,s+1);return d(d(d(g,x,c),d(S,m,c),u),d(d(f,E,c),d(v,_,c),u),h)}function bo(n,t,e){let i=0,r=.5,s=1;for(let o=0;o<3;o++)i+=r*Hg(n*s,t*s,e*s),r*=.5,s*=2;return i}const Vo=[{name:"Hütte",r:2,h:5,flat:2,found:!0,villagers:2,biomes:[pr,Zr,jr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,si);const i=Math.abs(t)===2||Math.abs(e)===2,r=Math.abs(t)===2&&Math.abs(e)===2;for(let s=1;s<=3;s++)n(t,s,e,i?r?En:si:de);n(t,4,e,En)}n(-2,2,0,nn),n(2,2,0,nn),n(0,2,-2,nn),n(0,1,2,on,1),n(0,2,2,on,3),n(1,1,-1,Mn)}},{name:"Ruine",r:3,h:4,flat:3,found:!0,villagers:0,biomes:null,build(n,t){for(let e=-3;e<=3;e++)for(let i=-3;i<=3;i++)if(n(e,0,i,Se),Math.abs(e)===3||Math.abs(i)===3)for(let s=1;s<=3;s++){const o=t()<.9-s*.25,a=t()<.3;o&&n(e,s,i,a?br:Se)}else t()<.07&&n(e,1,i,Se)}},{name:"Turm",r:2,h:8,flat:2,found:!0,villagers:1,biomes:[pr,Pi,Mr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,Se);const i=Math.abs(t)===2||Math.abs(e)===2;for(let r=1;r<=5;r++)n(t,r,e,i?Se:de);n(t,6,e,Se)}n(0,1,2,de),n(0,2,2,de),n(-2,3,0,nn),n(2,3,0,nn),n(0,3,-2,nn);for(const[t,e]of[[-2,-2],[2,-2],[-2,2],[2,2],[0,-2],[0,2],[-2,0],[2,0]])n(t,7,e,Se);n(0,7,0,Mn)}},{name:"Brunnen",r:1,h:4,flat:1,found:!1,villagers:1,biomes:[pr,Zr,Pi],build(n){for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,0,e,t===0&&e===0?an:Se);n(0,-1,0,an),n(0,-2,0,Se);for(const[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n(t,1,e,En),n(t,2,e,En);for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,3,e,si)}}],kg=Math.max(...Vo.map(n=>n.r)),Ao=ot*ot*qt,he=(n,t,e)=>t*ot*ot+e*ot+n,_e=(n,t)=>n+","+t,ue=n=>Math.floor(n/ot),ye=n=>(n%ot+ot)%ot,qe=new Map,Ti=new Map;function Ue(n,t){return qe.get(_e(n,t))}function Vg(n,t){const e={cx:n,cz:t,vox:new Uint8Array(Ao),meta:new Uint8Array(Ao),light:new Uint8Array(Ao),state:"empty",dirty:!1};return qe.set(_e(n,t),e),e}function Yt(n,t,e){if(t<0||t>=qt)return de;const i=qe.get(_e(ue(n),ue(e)));return!i||i.state==="empty"?de:i.vox[he(ye(n),t,ye(e))]}function Wg(n,t,e,i){if(t<0||t>=qt)return;const r=qe.get(_e(ue(n),ue(e)));r&&(r.vox[he(ye(n),t,ye(e))]=i)}const qu=(n,t,e)=>t>=0&&t<qt;function mr(n,t,e){if(t<0||t>=qt)return 0;const i=qe.get(_e(ue(n),ue(e)));return!i||i.state==="empty"?0:i.meta[he(ye(n),t,ye(e))]}function Xg(n,t,e,i){if(t<0||t>=qt)return;const r=qe.get(_e(ue(n),ue(e)));r&&(r.meta[he(ye(n),t,ye(e))]=i)}function Tn(n,t,e){if(t>=qt)return 240;if(t<0)return 0;const i=qe.get(_e(ue(n),ue(e)));return!i||i.state==="empty"?0:i.light[he(ye(n),t,ye(e))]}function zc(n,t,e,i){if(t<0||t>=qt)return;const r=qe.get(_e(ue(n),ue(e)));r&&(r.light[he(ye(n),t,ye(e))]=i)}function qg(n,t,e,i,r=0){if(t<0||t>=qt)return;const s=_e(ue(n),ue(e));let o=Ti.get(s);o||(o=new Map,Ti.set(s,o)),o.set(he(ye(n),t,ye(e)),i|r<<8)}function Wn(n,t,e,i,r=0){Wg(n,t,e,i),Xg(n,t,e,r),qg(n,t,e,i,r)}function Yg(n){const t=Ti.get(_e(n.cx,n.cz));if(t)for(const[e,i]of t)n.vox[e]=i&255,n.meta[e]=i>>8&255}function Yu(n){n!==void 0&&Xu(n),qe.clear(),Ti.clear(),Zu()}function Qr(n,t,e){if(e<=We)return Bg;if(e>We+22)return Mr;const i=Jr(n*.022+100,t*.022+100)/.9375,r=Jr(n*.022+500,t*.022+500)/.9375;return i<.35?jr:i>.62&&r<.5?Pi:r>.55?Zr:pr}let Wr=.42,oa=.64,Ku=NaN;const $u=(n,t)=>Jr(n*.0125+10,t*.0125+10);function Zu(){const n=[];for(let t=0;t<320;t+=4)for(let e=0;e<320;e+=4)n.push($u(t,e));n.sort((t,e)=>t-e),Wr=n[Math.floor(n.length*.3)],oa=n[Math.floor(n.length*.95)],oa-Wr<.05&&(oa=Wr+.05),Ku=Di()}function Kg(){Ku!==Di()&&Zu()}function ju(n,t){Kg();const e=$u(n,t),i=Math.max(0,Math.min(1,(e-Wr)/(oa-Wr))),r=(Jr(n*.06,t*.06)/.9375-.5)*7,s=i>.8?Math.pow((i-.8)/.2,1.3)*30:0;return Math.floor(We+i*26+r+s)}function ts(n,t){let e=ju(n,t);return e<1&&(e=1),e>qt-6&&(e=qt-6),e}function Ju(n,t,e){return e||t===Pi?kn:t===jr?oi:t===Mr?n>We+30?Ar:n>We+20?Se:An:An}function _i(n,t,e,i,r){const s=Math.floor(n-i),o=Math.floor(n+i),a=Math.floor(t),l=Math.floor(t+r-.001),c=Math.floor(e-i),u=Math.floor(e+i);for(let h=s;h<=o;h++)for(let d=a;d<=l;d++)for(let g=c;g<=u;g++)if(Ze(Yt(h,d,g)))return!0;return!1}function $g(n){const t=n.vox;t.fill(de);const e=n.cx*ot,i=n.cz*ot;for(let r=0;r<ot;r++)for(let s=0;s<ot;s++){const o=e+r,a=i+s,l=ts(o,a),c=Qr(o,a,l),u=l<=We+1&&c!==Mr;for(let h=0;h<=l;h++){let d;h===l?d=Ju(l,c,u):h>l-3?d=c===Pi||u?kn:c===Mr?Se:Ri:d=Se,t[he(r,h,s)]=d}for(let h=l+1;h<=We;h++)t[he(r,h,s)]=an}for(let r=0;r<ot;r++)for(let s=0;s<ot;s++){const o=e+r,a=i+s;let l=qt-1;for(;l>0&&t[he(r,l,s)]===de;)l--;for(let c=2;c<l-1;c++){const u=t[he(r,c,s)];if(u!==Se&&u!==Ri)continue;const h=bo(o*.055,c*.085,a*.055),d=bo(o*.055+40,c*.085+40,a*.055+40),g=bo(o*.028+9,c*.05+9,a*.028+9);if(Math.abs(h-.5)<.066&&Math.abs(d-.5)<.066||g>.82){t[he(r,c,s)]=de;continue}if(u===Se){const x=In(o*7,c*7,a*7);c<10&&x<.002?t[he(r,c,s)]=ls:c<18&&x<.005?t[he(r,c,s)]=os:c<32&&x<.009?t[he(r,c,s)]=as:x<.015&&(t[he(r,c,s)]=ss)}}}jg(n),Zg(n),Yg(n),n.state="generated",n.dirty=!1}function Xr(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2246822519)^Di()|0;return Ui(i)}function Gr(n,t,e,i,r,s){if(e<0||e>=qt||ue(t)!==n.cx||ue(i)!==n.cz)return;const o=he(ye(t),e,ye(i));s&&n.vox[o]!==de||(n.vox[o]=r)}function Qu(n,t){const e=Xr(n,t,9);if(e()>=Fg)return null;const i=Vo[Math.floor(e()*Vo.length)],r=i.r+1,s=n*yn+r+Math.floor(e()*(yn-2*r)),o=t*yn+r+Math.floor(e()*(yn-2*r)),a=ts(s,o);if(a<=We+1||a+i.h>=qt-1)return null;const l=Qr(s,o,a);if(i.biomes&&!i.biomes.includes(l))return null;let c=a,u=a;for(const[h,d]of[[-i.r,-i.r],[i.r,-i.r],[-i.r,i.r],[i.r,i.r]]){const g=ts(s+h,o+d);g<c&&(c=g),g>u&&(u=g)}return u-c>i.flat||c<=We?null:{def:i,ax:s,az:o,baseY:a}}function Zg(n){const t=n.cx*ot,e=n.cz*ot,i=kg,r=Math.floor((t-i)/yn),s=Math.floor((t+ot-1+i)/yn),o=Math.floor((e-i)/yn),a=Math.floor((e+ot-1+i)/yn);for(let l=r;l<=s;l++)for(let c=o;c<=a;c++){const u=Qu(l,c);if(!u)continue;const{def:h,ax:d,az:g,baseY:x}=u;if(d+h.r<t||d-h.r>=t+ot||g+h.r<e||g-h.r>=e+ot)continue;const S=(m,f,E,v,_=0)=>{const T=d+m,p=x+f,y=g+E;if(p<0||p>=qt||ue(T)!==n.cx||ue(y)!==n.cz)return;const P=he(ye(T),p,ye(y));n.vox[P]=v,n.meta[P]=_};if(h.build(S,Xr(d,g,11)),h.found)for(let m=-h.r;m<=h.r;m++)for(let f=-h.r;f<=h.r;f++){const E=d+m,v=g+f;if(ue(E)!==n.cx||ue(v)!==n.cz)continue;const _=ye(E),T=ye(v);for(let p=1;p<=6;p++){const y=x-p;if(y<1)break;const P=he(_,y,T);if(Ze(n.vox[P]))break;n.vox[P]=Se}}}}const $s=2;function jg(n){const t=n.cx*ot,e=n.cz*ot;for(let i=t-$s;i<t+ot+$s;i++)for(let r=e-$s;r<e+ot+$s;r++){const s=ts(i,r);if(s<=We)continue;const o=Qr(i,r,s),a=s<=We+1&&o!==Mr,l=Ju(s,o,a);if(o===Pi&&l===kn){const x=Xr(i,r,1);if(x()<.02){const S=2+Math.floor(x()*2);for(let m=1;m<=S;m++)Gr(n,i,s+m,r,rs,!0)}continue}if(l!==An&&l!==oi)continue;const c=o===Zr?.02:o===pr?.004:o===jr?.006:.0015,u=Xr(i,r,1);if(u()>=c)continue;const h=o===jr,d=4+Math.floor(u()*3);for(let x=1;x<=d;x++)Gr(n,i,s+x,r,En,!1);const g=s+d;for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)for(let m=0;m<=2;m++){const f=Math.abs(x)+Math.abs(S)+m,E=u()>.08;f<=3&&!(x===0&&S===0&&m<1)&&E&&Gr(n,i+x,g+m,r+S,Ci,!0)}Gr(n,i,g+2,r,Ci,!0),h&&Gr(n,i,g+3,r,Ar,!0)}for(let i=0;i<ot;i++)for(let r=0;r<ot;r++){const s=t+i,o=e+r,a=ts(s,o);if(a<=We||n.vox[he(i,a+1,r)]!==de)continue;const l=n.vox[he(i,a,r)],c=Qr(s,o,a);let u=0;const h=Xr(s,o,2);if(l===An){const d=h();d<.1?u=va:d<.13?u=Gu:d<.16?u=Hu:d<.175&&(u=ku)}else l===oi?h()<.05&&(u=va):l===kn&&c===Pi&&h()<.02&&(u=Qo);u&&(n.vox[he(i,a+1,r)]=u)}}const Ma=1337,hs=document.createElement("canvas");hs.width=ce*ko;hs.height=ce;const Gc=hs.getContext("2d"),li=(n,t,e,i)=>{Gc.fillStyle=i,Gc.fillRect(n*ce+t,e,1,1)};function xe(n,t,e,i){const r=Ui(Ma+n*991);for(let s=0;s<ce;s++)for(let o=0;o<ce;o++){let[a,l,c]=t;if(c+=(r()-.5)*e,i){const u=i(o,s,r);if(u===null)continue;u&&(a=u[0],l=u[1],c=u[2]+(r()-.5)*e)}li(n,o,s,`hsl(${a},${l}%,${c}%)`)}}function Fa(n,t){const e=Ui(Ma+n*131);for(let r=0;r<ce;r++)for(let s=0;s<ce;s++)li(n,s,r,`hsl(220,4%,${46+(e()-.5)*10}%)`);const i=Ui(Ma+n*977);for(let r=0;r<11;r++){const s=1+Math.floor(i()*13),o=1+Math.floor(i()*13);for(const[a,l]of[[0,0],[1,0],[0,1],[1,1]])li(n,s+a,o+l,t)}}function Bi(n,t){for(let e=0;e<ce;e++)for(let i=0;i<ce;i++){const r=t(i,e);r&&li(n,i,e,r)}}xe(0,[105,45,38],12);xe(1,[28,42,32],10,(n,t,e)=>t<4?[105,45,36]:t<5&&e()<.5?[105,45,34]:0);xe(2,[28,42,32],12);xe(3,[220,4,46],10,(n,t,e)=>e()<.06?[220,4,30]:0);xe(4,[48,55,72],8);xe(5,[28,50,26],8,n=>n%5===0?[28,50,18]:0);xe(6,[35,45,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))%3===0?[35,45,28]:0);xe(7,[110,48,28],14,(n,t,e)=>e()<.1?[110,50,18]:0);xe(8,[32,48,46],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[32,40,30]:0);xe(9,[8,55,42],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[20,20,75]:0);xe(10,[214,70,52],8);xe(11,[205,25,93],4);xe(23,[28,42,32],10,(n,t,e)=>t<5?[205,20,92]:t<7&&e()<.5?[205,20,88]:0);xe(12,[110,40,36],8,n=>n===2||n===8||n===13?[110,45,26]:n===5||n===11?[110,38,44]:0);xe(13,[110,42,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))>6?[110,45,30]:0);Fa(14,"#202024");Fa(15,"#c8a078");Fa(16,"#e8c84a");Fa(17,"#5fd8e0");Bi(18,(n,t)=>t<5?null:[3,6,8,11,13].includes(n)&&t>3+n*7%4?`hsl(100,45%,${30+n%3*6}%)`:null);Bi(19,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(0,70%,55%)":null);Bi(20,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(50,85%,55%)":null);Bi(21,(n,t)=>n>=7&&n<=8&&t>=8?"hsl(40,15%,82%)":t>=4&&t<=8&&n>=4&&n<=11&&Math.abs(n-7.5)+Math.abs(t-6)<4?"hsl(0,55%,45%)":null);Bi(22,(n,t)=>{const e=Math.abs(n-8)+Math.abs(t-10)<5&&(n+t)%2===0;return t>5&&e?"hsl(30,40%,32%)":null});(()=>{for(let t=0;t<ce;t++)for(let e=0;e<ce;e++)e===0||t===0||e===ce-1||t===ce-1?li(24,e,t,"hsl(200,28%,80%)"):(e-t===3||e-t===4)&&e<9&&li(24,e,t,"hsl(200,45%,92%)")})();(()=>{const t=Ui(Ma+3275);for(let e=0;e<ce;e++)for(let i=0;i<ce;i++)i>=6&&i<=9&&(e>=7?li(25,i,e,`hsl(28,52%,${30+(t()-.5)*10}%)`):e>=2&&e<=6&&li(25,i,e,`hsl(${34+t()*16},92%,${56+(t()-.5)*16}%)`))})();xe(26,[30,46,38],8,(n,t)=>n<=1||n>=14||t<=1||t>=14||n>=6&&n<=9&&(t===7||t===8)?[30,40,26]:n===12&&t>=7&&t<=9?[44,25,78]:0);xe(27,[220,5,52],8,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[220,6,34]:0);xe(28,[220,5,50],8,(n,t,e)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?e()<.3?[110,30,30]:[220,6,32]:e()<.16?[110,32,36]:0);xe(29,[210,10,88],4,(n,t)=>(n+t*2)%13===0?[215,14,74]:(n*2+t)%11===0?[210,12,80]:0);xe(30,[220,4,58],6,(n,t)=>n%8===0||t%8===0?[220,5,38]:0);xe(31,[24,40,22],5,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[24,36,13]:0);Bi(32,(n,t)=>n===2||n===3||n===7||n===8||n===12||n===13||(t===7||t===8)?`hsl(210,6%,${52+(n*5+t*3)%3*4}%)`:null);Bi(33,(n,t)=>{const e=n<=1||n>=14||t<=1||t>=14,i=n===4||n===5||n===10||n===11||t===7||t===8;return e?"hsl(210,8%,42%)":i?`hsl(210,6%,${54+(n*5+t*3)%3*4}%)`:null});const la=hs,Mi=new kr(hs);Mi.magFilter=Re;Mi.minFilter=Re;Mi.colorSpace=Ce;function ca(n,t,e){const i=(n*ce+.5)/(ce*ko),r=((n+1)*ce-.5)/(ce*ko),s=.5/ce,o=(ce-.5)/ce;return[i+(r-i)*t,s+(o-s)*e]}const tf={uDayBright:{value:1}};function Jg(n){tf.uDayBright.value=n}function Zs(n){return n.onBeforeCompile=t=>{t.uniforms.uDayBright=tf.uDayBright,t.fragmentShader=`uniform float uDayBright;
`+t.fragmentShader.replace("#include <color_fragment>",`#ifdef USE_COLOR
         float _sky = vColor.r, _blk = vColor.g, _ao = vColor.b;
         float _lit = max(_sky * uDayBright, _blk);
         _lit = max(_lit, 0.05);          // minimaler Ambient -> nie komplett schwarz
         diffuseColor.rgb *= _lit * _ao;
       #endif`)},n.customProgramCacheKey=()=>"bw-light-v1",n}function Qg(){const n=Zs(new Ve({map:Mi,vertexColors:!0})),t=Zs(new Ve({map:Mi,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1})),e=Zs(new Ve({map:Mi,vertexColors:!0,alphaTest:.5,side:rn})),i=Zs(new Ve({map:Mi,vertexColors:!0,alphaTest:.5,side:rn}));return{matSolid:n,matWater:t,matPlant:e,matGlass:i}}const Hc=[{dir:[-1,0,0],sh:.72,c:[[0,1,0,0,1],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,1,0]]},{dir:[1,0,0],sh:.72,c:[[1,1,1,0,1],[1,0,1,0,0],[1,1,0,1,1],[1,0,0,1,0]]},{dir:[0,-1,0],sh:.5,c:[[1,0,1,1,0],[0,0,1,0,0],[1,0,0,1,1],[0,0,0,0,1]]},{dir:[0,1,0],sh:1,c:[[0,1,1,1,1],[1,1,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]},{dir:[0,0,-1],sh:.86,c:[[1,0,0,0,0],[0,0,0,1,0],[1,1,0,0,1],[0,1,0,1,1]]},{dir:[0,0,1],sh:.86,c:[[0,0,1,0,0],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,1,1]]}],kc=[.42,.62,.8,1],t_=[[[0,0,0],[1,0,1],[0,1,0],[1,1,1]],[[1,0,0],[0,0,1],[1,1,0],[0,1,1]]];function Vc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,u=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[u]=r[u]?1:-1;const g=Ze(Yt(s+h[0],o+h[1],a+h[2]))?1:0,x=Ze(Yt(s+d[0],o+d[1],a+d[2]))?1:0,S=Ze(Yt(s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]))?1:0;return g&&x?0:3-(g+x+S)}function Wc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,u=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[u]=r[u]?1:-1;const g=[[s,o,a],[s+h[0],o+h[1],a+h[2]],[s+d[0],o+d[1],a+d[2]],[s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]]];let x=0,S=0,m=0;for(const[f,E,v]of g){if(_n(Yt(f,E,v)))continue;const _=Tn(f,E,v);x+=_>>4,S+=_&15,m++}if(m===0){const f=Tn(s,o,a);return[f>>4,f&15]}return[x/m,S/m]}const js=["solid","water","plant","glass"];function ar(n,t,e,i,r,s,o,a,l){const c=n.p.length/3,u=[t,e,i,r],h=[[0,0],[1,0],[0,1],[1,1]];for(let d=0;d<4;d++){n.p.push(u[d][0],u[d][1],u[d][2]);const g=ca(s,h[d][0],h[d][1]);n.u.push(g[0],g[1]),n.c.push(o,a,l)}n.i.push(c,c+1,c+2,c+2,c+1,c+3)}function Js(n,t,e,i,r,s,o,a,l,c,u){const h=Tn(l,c,u),d=(h>>4)/15,g=(h&15)/15;ar(n,[t,e,o],[r,e,o],[t,s,o],[r,s,o],a,d,g,.86),ar(n,[r,e,i],[t,e,i],[r,s,i],[t,s,i],a,d,g,.86),ar(n,[r,e,o],[r,e,i],[r,s,o],[r,s,i],a,d,g,.72),ar(n,[t,e,i],[t,e,o],[t,s,i],[t,s,o],a,d,g,.72),ar(n,[t,s,o],[r,s,o],[t,s,i],[r,s,i],a,d,g,1),ar(n,[t,e,i],[r,e,i],[t,e,o],[r,e,o],a,d,g,.5)}function e_({scene:n,materials:t}){const{matSolid:e,matWater:i,matPlant:r,matGlass:s}=t,o={solid:e,water:i,plant:r,glass:s},a={};function l(g,x){const S=_e(g,x),m=a[S];if(m)for(const f of js)m[f]&&(n.remove(m[f]),m[f].geometry.dispose());delete a[S]}function c(){for(const g in a){const x=a[g];for(const S of js)x[S]&&(n.remove(x[S]),x[S].geometry.dispose());delete a[g]}}function u(g,x){const S=_e(g,x),m=a[S];if(m)for(const y of js)m[y]&&(n.remove(m[y]),m[y].geometry.dispose());const f=Ue(g,x);if(!f||f.state==="empty"){delete a[S];return}const E=f.vox,v={solid:{p:[],u:[],c:[],i:[]},water:{p:[],u:[],c:[],i:[]},plant:{p:[],u:[],c:[],i:[]},glass:{p:[],u:[],c:[],i:[]}},_=g*ot,T=x*ot;for(let y=0;y<ot;y++)for(let P=0;P<ot;P++)for(let M=0;M<qt;M++){const b=E[he(y,M,P)];if(b===de)continue;const L=_+y,F=T+P;if(Vu(b)){const H=Og[b],O=v.plant,V=Tn(L,M,F),Y=(V>>4)/15,k=(V&15)/15;for(const N of t_){const tt=O.p.length/3,st=[[0,0],[1,0],[0,1],[1,1]];for(let pt=0;pt<4;pt++){const mt=N[pt];O.p.push(L+.04+mt[0]*.92,M+mt[1],F+.04+mt[2]*.92);const vt=ca(H,st[pt][0],st[pt][1]);O.u.push(vt[0],vt[1]),O.c.push(Y,k,.9)}O.i.push(tt,tt+1,tt+2,tt+2,tt+1,tt+3)}continue}if(b===Mn){Js(v.plant,L+.44,M,F+.44,L+.56,M+.62,F+.56,Fn[Mn][0],L,M,F);continue}if($r(b)){const H=mr(L,M,F),O=(H&1)===1,V=b===Li||b===Rr;let Y,k,N,tt;V?O?(Y=L,k=L+.18,N=F,tt=F+1):(N=F,tt=F+.18,Y=L,k=L+1):O?(N=F+.41,tt=F+.59,Y=L,k=L+1):(Y=L+.41,k=L+.59,N=F,tt=F+1),Js(v.plant,Y,M,N,k,M+1,tt,Fn[b][0],L,M,F);continue}if(Ia(b)){const H=mr(L,M,F)&3,O=Fn[b][1];Js(v.plant,L,M,F,L+1,M+.5,F+1,O,L,M,F);let V=L,Y=L+1,k=F,N=F+1;H===0?N=F+.5:H===1?V=L+.5:H===2?k=F+.5:Y=L+.5,Js(v.plant,V,M+.5,k,Y,M+1,N,O,L,M,F);continue}if(b===nn||b===wr){const H=v.glass,[O,V,Y]=Fn[b];for(let k=0;k<6;k++){const N=Hc[k],tt=Yt(L+N.dir[0],M+N.dir[1],F+N.dir[2]);if(_n(tt)||tt===b)continue;const st=N.dir[1]===1?O:N.dir[1]===-1?Y:V,pt=H.p.length/3,mt=[];for(const vt of N.c){H.p.push(L+vt[0],M+vt[1],F+vt[2]);const Z=ca(st,vt[3],vt[4]);H.u.push(Z[0],Z[1]);const U=Vc(L,M,F,N.dir,vt);mt.push(U);const K=N.sh*kc[U],[w,it]=Wc(L,M,F,N.dir,vt);H.c.push(w/15,it/15,K)}mt[0]+mt[3]>mt[1]+mt[2]?H.i.push(pt,pt+1,pt+3,pt,pt+3,pt+2):H.i.push(pt,pt+1,pt+2,pt+2,pt+1,pt+3)}continue}const $=b===an,D=$?v.water:v.solid,[B,z,q]=Fn[b];for(let H=0;H<6;H++){const O=Hc[H],V=Yt(L+O.dir[0],M+O.dir[1],F+O.dir[2]);if(!($?V===de:!_n(V)&&V!==b))continue;const k=O.dir[1]===1?B:O.dir[1]===-1?q:z,N=D.p.length/3,tt=[];for(const st of O.c){D.p.push(L+st[0],M+st[1],F+st[2]);const pt=ca(k,st[3],st[4]);D.u.push(pt[0],pt[1]);const mt=$?3:Vc(L,M,F,O.dir,st);tt.push(mt);const vt=O.sh*kc[mt],[Z,U]=Wc(L,M,F,O.dir,st);D.c.push(Z/15,U/15,vt)}tt[0]+tt[3]>tt[1]+tt[2]?D.i.push(N,N+1,N+3,N,N+3,N+2):D.i.push(N,N+1,N+2,N+2,N+1,N+3)}}const p={solid:null,water:null,plant:null,glass:null};for(const y of js){const P=v[y];if(!P.i.length)continue;const M=new Ee;M.setAttribute("position",new ve(P.p,3)),M.setAttribute("uv",new ve(P.u,2)),M.setAttribute("color",new ve(P.c,3)),M.setIndex(P.i);const b=new Le(M,o[y]);n.add(b),p[y]=b}a[S]=p,f.state="meshed",f.dirty=!1}function h(g,x){const S=Ue(g,x);S&&S.state==="meshed"&&u(g,x)}function d(g,x){const S=Math.floor(g/ot),m=Math.floor(x/ot);u(S,m);const f=(g%ot+ot)%ot,E=(x%ot+ot)%ot;f===0&&h(S-1,m),f===ot-1&&h(S+1,m),E===0&&h(S,m-1),E===ot-1&&h(S,m+1)}return{rebuildAt:d,buildChunk:u,disposeChunk:l,disposeAll:c,chunkMeshes:a}}const gn=15;function n_(){let n=new Set;const t=(_,T)=>n.add(_e(ue(_),ue(T))),e=(_,T,p)=>Tn(_,T,p)>>4,i=(_,T,p)=>Tn(_,T,p)&15,r=(_,T,p,y)=>zc(_,T,p,y<<4|Tn(_,T,p)&15),s=(_,T,p,y)=>zc(_,T,p,Tn(_,T,p)&240|y);let o=[],a=[],l=[];const c=(_,T)=>{const p=Ue(ue(_),ue(T));return p&&p.state!=="empty"};function u(_,T,p,y){y<=0||T<0||T>=qt||c(_,p)&&(_n(Yt(_,T,p))||e(_,T,p)>=y||(r(_,T,p,y),t(_,p),o.push(_),a.push(T),l.push(p)))}function h(){let _=0;for(;_<o.length;){const T=o[_],p=a[_],y=l[_];_++;const P=e(T,p,y);if(P<=1)continue;const M=P-1;u(T-1,p,y,M),u(T+1,p,y,M),u(T,p,y-1,M),u(T,p,y+1,M),u(T,p+1,y,M),u(T,p-1,y,P===gn?gn:M)}o=[],a=[],l=[]}function d(_,T,p,y){y<=0||T<0||T>=qt||c(_,p)&&(_n(Yt(_,T,p))||i(_,T,p)>=y||(s(_,T,p,y),t(_,p),o.push(_),a.push(T),l.push(p)))}function g(){let _=0;for(;_<o.length;){const T=o[_],p=a[_],y=l[_];_++;const P=i(T,p,y)-1;d(T-1,p,y,P),d(T+1,p,y,P),d(T,p,y-1,P),d(T,p,y+1,P),d(T,p+1,y,P),d(T,p-1,y,P)}o=[],a=[],l=[]}function x(_,T){const p=Ue(_,T);if(!p)return new Set;n=new Set,n.add(_e(_,T));const y=_*ot,P=T*ot,M=new Array(9);for(let Z=-1;Z<=1;Z++)for(let U=-1;U<=1;U++)M[(Z+1)*3+(U+1)]=Ue(_+U,T+Z);const b=(Z,U)=>{const K=Math.floor(Z/ot)-_,w=Math.floor(U/ot)-T;return K<-1||K>1||w<-1||w>1?null:M[(w+1)*3+(K+1)]},L=(Z,U,K)=>U*ot*ot+(K%ot+ot)%ot*ot+(Z%ot+ot)%ot,F=(Z,U,K)=>{if(U<0||U>=qt)return U<0;const w=b(Z,K);return!w||w.state==="empty"?!0:_n(w.vox[L(Z,U,K)])},$=(Z,U,K)=>{if(U>=qt)return gn;if(U<0)return 0;const w=b(Z,K);return!w||w.state==="empty"?0:w.light[L(Z,U,K)]>>4},D=(Z,U,K,w)=>{const it=b(Z,K);if(!it)return;const W=L(Z,U,K);it.light[W]=it.light[W]&15|w<<4,it!==p&&n.add(_e(it.cx,it.cz))},B=[],z=[],q=[],H=(Z,U,K,w)=>w>0&&U>=0&&U<qt&&!F(Z,U,K)&&$(Z,U,K)<w,O=(Z,U,K,w)=>H(Z-1,U,K,w-1)||H(Z+1,U,K,w-1)||H(Z,U,K-1,w-1)||H(Z,U,K+1,w-1)||H(Z,U+1,K,w-1)||H(Z,U-1,K,w===gn?gn:w-1),V=ot+2,Y=new Int16Array(V*V).fill(-1),k=(Z,U)=>(U+1)*V+(Z+1);for(let Z=0;Z<ot;Z++)for(let U=0;U<ot;U++){let K=!0,w=-1;for(let it=qt-1;it>=0;it--){const W=it*ot*ot+U*ot+Z;_n(p.vox[W])&&(K=!1,w<0&&(w=it)),p.light[W]=p.light[W]&15|(K?gn:0)<<4}Y[k(Z,U)]=w}const N=(Z,U)=>{const K=y+Z,w=P+U;let it=-1;for(let W=qt-1;W>=0;W--)if(F(K,W,w)){it=W;break}Y[k(Z,U)]=it};for(let Z=-1;Z<=ot;Z++)N(Z,-1),N(Z,ot);for(let Z=0;Z<ot;Z++)N(-1,Z),N(ot,Z);let tt=-1;for(let Z=0;Z<ot;Z++)for(let U=0;U<ot;U++){const K=Math.max(Y[k(Z,U)],Y[k(Z-1,U)],Y[k(Z+1,U)],Y[k(Z,U-1)],Y[k(Z,U+1)]);K>tt&&(tt=K);const w=y+Z,it=P+U,W=Math.min(K+1,qt-1);for(let rt=0;rt<=W;rt++){const at=p.light[rt*ot*ot+U*ot+Z]>>4;at<=1||O(w,rt,it,at)&&(B.push(w),z.push(rt),q.push(it))}}const st=Math.min(tt+1,qt-1);for(let Z=0;Z<=st;Z++)for(let U=0;U<ot;U++)pt(y-1,Z,P+U,y,Z,P+U),pt(y+ot,Z,P+U,y+ot-1,Z,P+U),pt(y+U,Z,P-1,y+U,Z,P),pt(y+U,Z,P+ot,y+U,Z,P+ot-1);function pt(Z,U,K,w,it,W){if(F(Z,U,K))return;const rt=$(Z,U,K);rt<=1||F(w,it,W)||$(w,it,W)>=rt-1||(B.push(Z),z.push(U),q.push(K))}const mt=(Z,U,K,w)=>{w<=0||U<0||U>=qt||F(Z,U,K)||$(Z,U,K)>=w||(D(Z,U,K,w),B.push(Z),z.push(U),q.push(K))};let vt=0;for(;vt<B.length;){const Z=B[vt],U=z[vt],K=q[vt];vt++;const w=$(Z,U,K);if(w<=1)continue;const it=w-1;mt(Z-1,U,K,it),mt(Z+1,U,K,it),mt(Z,U,K-1,it),mt(Z,U,K+1,it),mt(Z,U+1,K,it),mt(Z,U-1,K,w===gn?gn:it)}return n}function S(_,T){const p=Ue(_,T);if(!p)return new Set;n=new Set,n.add(_e(_,T));const y=_*ot,P=T*ot,M=ot*ot;for(let L=0;L<p.vox.length;L++){const F=To(p.vox[L]);if(!F)continue;const $=L/M|0,D=L%M,B=y+D%ot,z=P+(D/ot|0);(p.light[L]&15)<F&&(p.light[L]=p.light[L]&240|F,o.push(B),a.push($),l.push(z))}const b=(L,F,$,D,B)=>{if(!(!L||L.state==="empty"))for(let z=0;z<qt;z++)for(let q=0;q<ot;q++){const H=F(q),O=$(q),V=L.light[z*M+O*ot+H]&15;if(V<=1)continue;const Y=z*M+B(q)*ot+D(q);(p.light[Y]&15)>=V-1||_n(p.vox[Y])||(o.push(L.cx*ot+H),a.push(z),l.push(L.cz*ot+O))}};return b(Ue(_-1,T),()=>ot-1,L=>L,()=>0,L=>L),b(Ue(_+1,T),()=>0,L=>L,()=>ot-1,L=>L),b(Ue(_,T-1),L=>L,()=>ot-1,L=>L,()=>0),b(Ue(_,T+1),L=>L,()=>0,L=>L,()=>ot-1),g(),n}function m(_,T,p){const y=e(_,T,p);if(y===0)return;r(_,T,p,0),t(_,p);const P=[_],M=[T],b=[p],L=[y],F=[],$=[],D=[];let B=0;for(;B<P.length;){const z=P[B],q=M[B],H=b[B],O=L[B];B++;const V=[[z-1,q,H,!1],[z+1,q,H,!1],[z,q,H-1,!1],[z,q,H+1,!1],[z,q+1,H,!1],[z,q-1,H,!0]];for(const[Y,k,N,tt]of V){if(k<0||k>=qt||!c(Y,N))continue;const st=e(Y,k,N);st!==0&&(st<O||tt&&O===gn?(r(Y,k,N,0),t(Y,N),P.push(Y),M.push(k),b.push(N),L.push(st)):(F.push(Y),$.push(k),D.push(N)))}}for(let z=0;z<F.length;z++)o.push(F[z]),a.push($[z]),l.push(D[z]);h()}function f(_,T,p){let y=0;e(_,T+1,p)===gn&&!_n(Yt(_,T+1,p))&&(y=gn);for(const[P,M,b]of[[_-1,T,p],[_+1,T,p],[_,T,p-1],[_,T,p+1],[_,T+1,p],[_,T-1,p]]){const L=e(P,M,b)-1;L>y&&(y=L)}y>0&&(r(_,T,p,y),t(_,p),o.push(_),a.push(T),l.push(p),h())}function E(_,T,p){const y=i(_,T,p);if(y===0)return;s(_,T,p,0),t(_,p);const P=[_],M=[T],b=[p],L=[y],F=[],$=[],D=[];let B=0;for(;B<P.length;){const z=P[B],q=M[B],H=b[B],O=L[B];B++;for(const[V,Y,k]of[[z-1,q,H],[z+1,q,H],[z,q,H-1],[z,q,H+1],[z,q+1,H],[z,q-1,H]]){if(Y<0||Y>=qt||!c(V,k))continue;const N=i(V,Y,k);N!==0&&(N<O?(s(V,Y,k,0),t(V,k),P.push(V),M.push(Y),b.push(k),L.push(N)):(F.push(V),$.push(Y),D.push(k)))}}for(let z=0;z<F.length;z++)o.push(F[z]),a.push($[z]),l.push(D[z]);g()}function v(_,T,p,y,P){n=new Set;const M=_n(y),b=_n(P);b&&!M?m(_,T,p):!b&&M&&f(_,T,p);const L=To(y),F=To(P);if(F>L?(s(_,T,p,F),t(_,p),o.push(_),a.push(T),l.push(p),g()):F<L&&E(_,T,p),!b&&M){let $=0;for(const[D,B,z]of[[_-1,T,p],[_+1,T,p],[_,T,p-1],[_,T,p+1],[_,T+1,p],[_,T-1,p]]){const q=i(D,B,z)-1;q>$&&($=q)}$>i(_,T,p)&&(s(_,T,p,$),t(_,p),o.push(_),a.push(T),l.push(p),g())}return n}return{computeChunkSkylight:x,seedChunkBlocklight:S,relight:v,getSky:e,getBlk:i}}function i_({mesher:n,light:t}){const e=E=>Math.floor(E/ot),i=(E,v,_,T)=>Math.max(Math.abs(E-_),Math.abs(v-T));let r=[],s=NaN,o=NaN,a=!1;const l=E=>{a=E};function c(E,v){let _=Ue(E,v);_||(_=Vg(E,v)),_.state==="empty"&&$g(_)}function u(E,v){const _=Ue(E,v);if(!_||_.state!=="generated")return;const T=t.computeChunkSkylight(E,v),p=t.seedChunkBlocklight(E,v);_.state="lit";for(const y of[T,p])for(const P of y){const M=qe.get(P);M&&M.state==="meshed"&&(M.dirty=!0)}}const h=E=>E&&(E.state==="lit"||E.state==="meshed");function d(E,v){for(let _=-1;_<=1;_++)for(let T=-1;T<=1;T++)if(!h(Ue(E+_,v+T)))return!1;return!0}function g(E,v){const _=e(E),T=e(v);s=_,o=T;for(const[y,P]of qe)i(P.cx,P.cz,_,T)>jn+2&&(n.disposeChunk(P.cx,P.cz),qe.delete(y));const p=jn+1;r=[];for(let y=_-p;y<=_+p;y++)for(let P=T-p;P<=T+p;P++){const M=Ue(y,P);(!M||M.state==="empty")&&r.push([y,P])}r.sort((y,P)=>i(y[0],y[1],_,T)-i(P[0],P[1],_,T))}function x(E,v){const _=e(E),T=e(v),p=jn+1;let y=a?1:1/0,P=0;for(;r.length&&P<Ug&&y>0;){const[L,F]=r.shift();c(L,F),P++,y--}const M=[];for(let L=_-p;L<=_+p;L++)for(let F=T-p;F<=T+p;F++){const $=Ue(L,F);$&&$.state==="generated"&&M.push([L,F])}M.sort((L,F)=>i(L[0],L[1],_,T)-i(F[0],F[1],_,T));for(let L=0;L<Ig&&L<M.length&&y>0;L++)u(M[L][0],M[L][1]),y--;const b=[];for(let L=_-jn;L<=_+jn;L++)for(let F=T-jn;F<=T+jn;F++){const $=Ue(L,F);!$||$.state==="empty"||$.state==="generated"||($.state==="lit"||$.dirty)&&d(L,F)&&b.push([L,F])}b.sort((L,F)=>i(L[0],L[1],_,T)-i(F[0],F[1],_,T));for(let L=0;L<Ng&&L<b.length&&y>0;L++)n.buildChunk(b[L][0],b[L][1]),y--}function S(E,v){const _=e(E),T=e(v);(_!==s||T!==o)&&g(E,v),x(E,v)}function m(E,v,_=3){const T=e(E),p=e(v);for(let y=T-_-1;y<=T+_+1;y++)for(let P=p-_-1;P<=p+_+1;P++)c(y,P);for(let y=T-_-1;y<=T+_+1;y++)for(let P=p-_-1;P<=p+_+1;P++)u(y,P);for(let y=T-_;y<=T+_;y++)for(let P=p-_;P<=p+_;P++)d(y,P)&&n.buildChunk(y,P);s=NaN}return{update:S,ensureAround:g,tick:x,warmup:m,loadedCount:()=>qe.size,setVRMode:l}}const Qs=8,ta=8;function r_({camera:n,ctx:t}){const e={pos:new G(Qs+.5,qt,ta+.5),vel:new G,yaw:Math.PI*.25,pitch:-.1,onGround:!1,fly:!1,W:.3,H:1.8,EYE:1.62};let i=0,r=!1,s=0,o=!1,a=!1;const l=E=>_i(E.x,E.y,E.z,e.W,e.H);function c(){const E=Math.floor(e.pos.y),v=Math.floor(e.pos.x-e.W),_=Math.floor(e.pos.x+e.W),T=Math.floor(e.pos.z-e.W),p=Math.floor(e.pos.z+e.W);for(let y=v;y<=_;y++)for(let P=T;P<=p;P++)if(Ia(Yt(y,E,P)))return!0;return!1}function u(E,v){if(v)if(e.pos[E]+=v,l(e.pos)){if(E!=="y"&&!e.fly&&(e.onGround&&c()||a)){const T=e.pos.y;if(e.pos.y=Math.floor(T)+1.001,!l(e.pos)){e.vel.y=0;return}e.pos.y=T}const _=Math.sign(v);E==="x"&&(e.pos.x=_>0?Math.floor(e.pos.x+e.W)-e.W-.001:Math.floor(e.pos.x-e.W)+1+e.W+.001),E==="z"&&(e.pos.z=_>0?Math.floor(e.pos.z+e.W)-e.W-.001:Math.floor(e.pos.z-e.W)+1+e.W+.001),E==="y"&&(_>0?e.pos.y=Math.floor(e.pos.y+e.H)-e.H-.001:(e.pos.y=Math.floor(e.pos.y)+1.001,e.onGround=!0),e.vel.y=0)}else E==="y"&&v<0&&(e.onGround=!1)}function h(){for(let v=0;v<=48;v++)for(let _=-v;_<=v;_++)for(let T=-v;T<=v;T++){if(Math.max(Math.abs(_),Math.abs(T))!==v)continue;const p=Qs+_,y=ta+T;let P=qt-1;for(;P>0&&Yt(p,P,y)===0;)P--;if(P>We&&Ze(Yt(p,P,y)))return{x:p,y:P,z:y}}let E=qt-1;for(;E>0&&Yt(Qs,E,ta)===0;)E--;return{x:Qs,y:E,z:ta}}function d(E){if(E){e.pos.set(E[0],E[1],E[2]),e.yaw=E[3]??e.yaw,e.pitch=E[4]??e.pitch,e.vel.set(0,0,0);return}const v=h();e.pos.set(v.x+.5,v.y+1.01,v.z+.5),e.vel.set(0,0,0)}function g(E){const v={step:null,land:null,splash:!1},_=t.keys,T=e.fly?12:5.4;let p=0,y=0;_.KeyW&&(y-=1),_.KeyS&&(y+=1),_.KeyA&&(p-=1),_.KeyD&&(p+=1);const P=Math.hypot(p,y)||1,M=Math.sin(e.yaw),b=Math.cos(e.yaw);let L=(p*b+y*M)/P*T,F=(y*b-p*M)/P*T;if(t.vrMove&&(L=t.vrMove.x*T,F=t.vrMove.z*T),e.fly){e.vel.y=0;const $=Math.cos(e.pitch),D=Math.sin(e.pitch),B=-y/P,z=p/P;let q=(B*-M*$+z*b)*T,H=(B*-b*$-z*M)*T,O=B*D*T;t.vrMove&&(q=t.vrMove.x*T,O=(t.vrMove.y||0)*T,H=t.vrMove.z*T),_.Space&&(O=T),(_.ShiftLeft||_.ShiftRight)&&(O=-T),u("x",q*E),u("z",H*E),u("y",O*E)}else{s=e.vel.y,o=e.onGround,e.vel.y-=28*E,_.Space&&e.onGround&&(e.vel.y=8.6,e.onGround=!1);const $=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y+.5),Math.floor(e.pos.z))===an;$&&!r&&s<-3&&(v.splash=!0),r=$,a=$,$&&(e.vel.y=Math.max(e.vel.y,-3),_.Space&&(e.vel.y=3.2)),u("x",L*E*($?.6:1)),u("z",F*E*($?.6:1)),u("y",e.vel.y*E),!o&&e.onGround&&s<-7&&(v.land=-s-7),e.onGround&&(L||F)&&!$?(i+=Math.hypot(L,F)*E,i>2.2&&(i=0,v.step=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y-.5),Math.floor(e.pos.z)))):i=0,e.pos.y<-20&&d(null)}return v}function x(E,v,_,T){let p=Math.floor(E),y=Math.floor(v),P=Math.floor(_);const M=Math.sign(T.x),b=Math.sign(T.y),L=Math.sign(T.z),F=Math.abs(1/T.x),$=Math.abs(1/T.y),D=Math.abs(1/T.z);let B=(M>0?p+1-E:E-p)*F,z=(b>0?y+1-v:v-y)*$,q=(L>0?P+1-_:_-P)*D,H=0,O=0,V=0,Y=0;for(let k=0;k<140;k++){if(B<z&&B<q){if(B>8)break;Y=B,p+=M,H=-M,O=0,V=0,B+=F}else if(z<q){if(z>8)break;Y=z,y+=b,O=-b,H=0,V=0,z+=$}else{if(q>8)break;Y=q,P+=L,V=-L,H=0,O=0,q+=D}const N=Yt(p,y,P);if(N!==0&&N!==an&&!(N>=17&&N<=21))return{x:p,y,z:P,nx:H,ny:O,nz:V,dist:Y}}return null}const S=new G,m=new G;function f(){return n.getWorldPosition(S),n.getWorldDirection(m),x(S.x,S.y,S.z,m)}return{player:e,update:g,raycast:f,raycastFrom:x,spawnPlayer:d,moveAxis:u,boxCollides:l}}const ea=220;function s_({scene:n}){const t=new Pe,e=new Fu(new Xn(.16,.16,.16),new Ve({vertexColors:!1}),ea);e.instanceMatrix.setUsage(pu),n.add(e);const i=[];for(let o=0;o<ea;o++)i.push({life:0,x:0,y:0,z:0,vx:0,vy:0,vz:0}),t.scale.set(0,0,0),t.position.set(0,-999,0),t.updateMatrix(),e.setMatrixAt(o,t.matrix),e.setColorAt(o,new Vt(16777215));e.instanceMatrix.needsUpdate=!0;function r(o,a,l,c,u,h,d){const g=new Vt(c);let x=0;for(let S=0;S<ea&&x<u;S++){if(i[S].life>0)continue;const m=i[S];m.life=.5+Math.random()*.4,m.x=o,m.y=a,m.z=l,m.vx=(Math.random()-.5)*h,m.vz=(Math.random()-.5)*h,m.vy=d+Math.random()*d,e.setColorAt(S,g),x++}e.instanceColor.needsUpdate=!0}function s(o){let a=!1;for(let l=0;l<ea;l++){const c=i[l];if(!(c.life<=0)){if(a=!0,c.life-=o,c.vy-=14*o,c.x+=c.vx*o,c.y+=c.vy*o,c.z+=c.vz*o,Ze(Yt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(c.vy=Math.abs(c.vy)*.3,c.y+=.02,c.vx*=.5,c.vz*=.5),c.life<=0)t.position.set(0,-999,0),t.scale.set(0,0,0);else{const u=Math.min(1,c.life*3);t.position.set(c.x,c.y,c.z),t.scale.set(u,u,u)}t.updateMatrix(),e.setMatrixAt(l,t.matrix)}}a&&(e.instanceMatrix.needsUpdate=!0)}return{spawn:r,update:s}}function a_({ctx:n,player:t}){let e=null,i=null,r=null,s=null,o=!1,a=null,l=null,c=null,u=null,h=null,d=!0,g=0,x=null;const S=()=>r||e.destination;function m(){if(e){e.state==="suspended"&&e.resume();return}try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}e&&(i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=2e4,i.connect(e.destination),r=e.createGain(),r.gain.value=1,r.connect(i),s=e.createGain(),s.gain.value=1,s.connect(i),F())}const f=U=>{const K=e.sampleRate*U,w=e.createBuffer(1,K,e.sampleRate),it=w.getChannelData(0);for(let W=0;W<K;W++)it[W]=Math.random()*2-1;return w};function E(U,K,w,it){if(!e)return;const W=e.sampleRate*U,rt=e.createBuffer(1,W,e.sampleRate),at=rt.getChannelData(0);for(let A=0;A<W;A++)at[A]=(Math.random()*2-1)*(1-A/W);const wt=e.createBufferSource();wt.buffer=rt;const yt=e.createBiquadFilter();yt.type="bandpass",yt.frequency.value=K,yt.Q.value=it||1;const C=e.createGain();C.gain.value=w,wt.connect(yt),yt.connect(C),C.connect(S()),wt.start()}function v(U,K,w){if(!e)return;const it=e.createOscillator(),W=e.createGain();it.type="triangle",it.frequency.setValueAtTime(U,e.currentTime),it.frequency.exponentialRampToValueAtTime(U*.55,e.currentTime+K),W.gain.setValueAtTime(w,e.currentTime),W.gain.exponentialRampToValueAtTime(.001,e.currentTime+K),it.connect(W),W.connect(S()),it.start(),it.stop(e.currentTime+K)}const _={3:1400,8:1400,4:500,2:420,1:480,11:520,10:600,5:800,7:800,6:2200,12:900,13:1300,14:1500,15:1500,16:1700,26:1400,27:1350,28:1550,29:1400,30:800,31:2600,32:2400,33:2400,34:1400,35:800,36:1400},T=U=>{E(.13,_[U]||700,.45,1.2),v((_[U]||700)*.25,.08,.12)},p=U=>{v(170,.09,.3),E(.05,(_[U]||700)*.8,.15,2)},y=U=>{E(.06,(_[U]||500)*.6+Math.random()*120,.12,.8)},P=U=>{E(.12,300,Math.min(.5,.1+U*.04),.7),v(90,.1,.2)},M=()=>{E(.25,900,.3,.5),E(.35,400,.2,.5)};function b(){if(!e||x)return;const U=e.createBufferSource();U.buffer=f(2),U.loop=!0;const K=e.createBiquadFilter();K.type="lowpass",K.frequency.value=2600;const w=e.createGain();w.gain.value=.05,U.connect(K),K.connect(w),w.connect(s),U.start(),x=U}function L(){if(x){try{x.stop()}catch{}x=null}}function F(){if(!e||o)return;const U=e.createBufferSource();U.buffer=f(3),U.loop=!0,l=e.createBiquadFilter(),l.type="lowpass",l.frequency.value=440,a=e.createGain(),a.gain.value=.04,U.connect(l),l.connect(a),a.connect(s),U.start();const K=e.createOscillator();K.frequency.value=.07;const w=e.createGain();w.gain.value=.03,K.connect(w),w.connect(a.gain),K.start(),c=e.createGain(),c.gain.value=0,c.connect(s);const it=e.createOscillator();it.type="sine",it.frequency.value=62;const W=e.createOscillator();W.type="sine",W.frequency.value=65.5,it.connect(c),W.connect(c),it.start(),W.start(),h=e.createDelay(),h.delayTime.value=.3;const rt=e.createGain();rt.gain.value=.36,h.connect(rt),rt.connect(h),h.connect(s),u=e.createGain(),u.gain.value=d?.5:0,u.connect(s),o=!0,setInterval(pt,260)}function $(){const U=e.currentTime,K=2200+Math.random()*1500,w=2+(Math.random()*3|0);for(let it=0;it<w;it++){const W=e.createOscillator(),rt=e.createGain(),at=U+it*.085,wt=K*(1+(Math.random()-.35)*.35);W.type="sine",W.frequency.setValueAtTime(wt,at),W.frequency.exponentialRampToValueAtTime(wt*1.5,at+.05),rt.gain.setValueAtTime(1e-4,at),rt.gain.linearRampToValueAtTime(.11,at+.012),rt.gain.exponentialRampToValueAtTime(8e-4,at+.09),W.connect(rt),rt.connect(s),W.start(at),W.stop(at+.11)}}function D(){const U=e.currentTime,K=4200+Math.random()*900;for(let w=0;w<3;w++){const it=e.createOscillator(),W=e.createGain(),rt=U+w*.07;it.type="square",it.frequency.value=K,W.gain.setValueAtTime(1e-4,rt),W.gain.linearRampToValueAtTime(.035,rt+.005),W.gain.exponentialRampToValueAtTime(8e-4,rt+.03),it.connect(W),W.connect(s),it.start(rt),it.stop(rt+.04)}}function B(){const U=e.currentTime,K=e.createOscillator(),w=e.createGain(),it=e.createBiquadFilter();it.type="bandpass",it.frequency.value=1400,it.Q.value=3,K.type="sine",K.frequency.setValueAtTime(1700,U),K.frequency.exponentialRampToValueAtTime(700,U+.12),w.gain.setValueAtTime(1e-4,U),w.gain.linearRampToValueAtTime(.16,U+.008),w.gain.exponentialRampToValueAtTime(8e-4,U+.13),K.connect(it),it.connect(w),w.connect(s),h&&w.connect(h),K.start(U),K.stop(U+.15)}function z(){const U=e.currentTime,K=e.createOscillator(),w=e.createGain();K.type="sine",K.frequency.setValueAtTime(300+Math.random()*200,U),K.frequency.exponentialRampToValueAtTime(900,U+.12),w.gain.setValueAtTime(1e-4,U),w.gain.linearRampToValueAtTime(.06,U+.02),w.gain.exponentialRampToValueAtTime(8e-4,U+.13),K.connect(w),w.connect(s),K.start(U),K.stop(U+.15)}function q(){const U=e.currentTime,K=e.createBufferSource();K.buffer=f(1.4);const w=e.createBiquadFilter();w.type="lowpass",w.frequency.setValueAtTime(400,U),w.frequency.exponentialRampToValueAtTime(90,U+1.3);const it=e.createGain();it.gain.setValueAtTime(1e-4,U),it.gain.linearRampToValueAtTime(.5,U+.08),it.gain.exponentialRampToValueAtTime(8e-4,U+1.4),K.connect(w),w.connect(it),it.connect(s),K.start(U),K.stop(U+1.5)}function H(U,K){if(!e)return;const w=.5*(1-K/22);if(w<=.02)return;const it=e.currentTime;if(U==="sheep"){const W=e.createOscillator(),rt=e.createGain(),at=e.createOscillator(),wt=e.createGain();W.type="sawtooth",W.frequency.setValueAtTime(360,it),W.frequency.linearRampToValueAtTime(300,it+.45),at.frequency.value=18,wt.gain.value=14,at.connect(wt),wt.connect(W.frequency),at.start(it),at.stop(it+.5);const yt=e.createBiquadFilter();yt.type="lowpass",yt.frequency.value=1100,rt.gain.setValueAtTime(1e-4,it),rt.gain.linearRampToValueAtTime(w*.5,it+.04),rt.gain.exponentialRampToValueAtTime(8e-4,it+.5),W.connect(yt),yt.connect(rt),rt.connect(s),W.start(it),W.stop(it+.52)}else if(U==="pig")for(let W=0;W<2;W++){const rt=it+W*.13,at=e.createBufferSource();at.buffer=f(.12);const wt=e.createBiquadFilter();wt.type="lowpass",wt.frequency.value=320;const yt=e.createGain();yt.gain.setValueAtTime(1e-4,rt),yt.gain.linearRampToValueAtTime(w*.6,rt+.01),yt.gain.exponentialRampToValueAtTime(8e-4,rt+.1),at.connect(wt),wt.connect(yt),yt.connect(s),at.start(rt),at.stop(rt+.12)}else if(U==="zombie"){const W=e.createOscillator(),rt=e.createGain(),at=e.createBiquadFilter();W.type="sawtooth",W.frequency.setValueAtTime(105,it),W.frequency.linearRampToValueAtTime(68,it+.7);const wt=e.createOscillator(),yt=e.createGain();wt.frequency.value=9,yt.gain.value=16,wt.connect(yt),yt.connect(W.frequency),wt.start(it),wt.stop(it+.8),at.type="lowpass",at.frequency.value=360,rt.gain.setValueAtTime(1e-4,it),rt.gain.linearRampToValueAtTime(w*.6,it+.09),rt.gain.exponentialRampToValueAtTime(8e-4,it+.75),W.connect(at),at.connect(rt),rt.connect(s),W.start(it),W.stop(it+.8)}else if(U==="villager")for(let W=0;W<2;W++){const rt=it+W*.17,at=e.createOscillator(),wt=e.createGain(),yt=e.createBiquadFilter();at.type="triangle",at.frequency.setValueAtTime(W?185:235,rt),at.frequency.linearRampToValueAtTime(W?160:210,rt+.12),yt.type="lowpass",yt.frequency.value=700,wt.gain.setValueAtTime(1e-4,rt),wt.gain.linearRampToValueAtTime(w*.4,rt+.03),wt.gain.exponentialRampToValueAtTime(8e-4,rt+.16),at.connect(yt),yt.connect(wt),wt.connect(s),at.start(rt),at.stop(rt+.18)}else for(let W=0;W<3;W++){const rt=it+W*.08,at=e.createOscillator(),wt=e.createGain();at.type="triangle",at.frequency.setValueAtTime(1600-W*250,rt),wt.gain.setValueAtTime(1e-4,rt),wt.gain.linearRampToValueAtTime(w*.4,rt+.008),wt.gain.exponentialRampToValueAtTime(8e-4,rt+.05),at.connect(wt),wt.connect(s),at.start(rt),at.stop(rt+.06)}}const O=()=>{v(110,.16,.5),E(.16,420,.35,.8)},V=[0,2,4,7,9,12,14,16],Y=174.6,k=U=>Y*Math.pow(2,U/12);function N(U,K,w){const it=e.currentTime,W=e.createOscillator(),rt=e.createBiquadFilter(),at=e.createGain();W.type="triangle",W.frequency.value=k(U),rt.type="lowpass",rt.frequency.value=850,at.gain.setValueAtTime(1e-4,it),at.gain.linearRampToValueAtTime(w,it+1.6),at.gain.linearRampToValueAtTime(1e-4,it+K),W.connect(rt),rt.connect(at),at.connect(u),W.start(it),W.stop(it+K+.1)}function tt(U,K){const w=e.currentTime,it=e.createOscillator(),W=e.createGain();it.type="sine",it.frequency.value=k(U),W.gain.setValueAtTime(1e-4,w),W.gain.linearRampToValueAtTime(K,w+.03),W.gain.exponentialRampToValueAtTime(8e-4,w+.9),it.connect(W),W.connect(u),it.start(w),it.stop(w+1)}function st(){if(d){if(g++,g%30===0){const U=V[Math.random()*3|0];N(U,9,.05),N(U+(Math.random()<.5?4:7),9,.045),N(U+12,9,.03)}g%6===0&&Math.random()<.45&&tt(V[Math.random()*V.length|0]+12,.05)}}function pt(){if(!e||!o||!n.locked)return;const U=e.currentTime,K=n.curHeadWater?0:n.curUnderground?.012:(.04+Math.max(0,t.pos.y-We)*.0016)*(n.weather==="rain"?1.5:1);a.gain.setTargetAtTime(Math.max(0,Math.min(.13,K)),U,.6),l.frequency.setTargetAtTime(n.curUnderground?180:n.weather==="rain"?950:460,U,.6),c.gain.setTargetAtTime(n.curUnderground?.05:0,U,.9),!n.curUnderground&&!n.curHeadWater&&(n.curIsDay&&(n.curBiome===Zr||n.curBiome===pr)&&n.weather!=="rain"&&Math.random()<.1&&$(),!n.curIsDay&&Math.random()<.15&&D(),n.weather==="rain"&&Math.random()<.014&&q()),n.curUnderground&&Math.random()<.05&&B(),n.curHeadWater&&Math.random()<.16&&z(),st()}function mt(){d=!d,u&&u.gain.setTargetAtTime(d?.5:0,e.currentTime,.3)}function vt(U){i&&i.frequency.setTargetAtTime(U?700:2e4,e.currentTime,.25)}return{audioInit:m,sndBreak:T,sndPlace:p,sndStep:y,sndLand:P,sndSplash:M,sndHit:O,startRainSound:b,stopRainSound:L,animalSound:H,toggleMusic:mt,setMuffle:vt,isMusicOn:()=>d}}const Xc=30,o_=70,l_=8,qc=12,c_=34,u_=70,f_=18,h_=14,d_=10,p_=140;function m_(n,t,e,i){const r=l=>!Ze(l)&&l!==an;if(!r(Yt(n,t,e))||!r(Yt(n,t+1,e))||!Ze(Yt(n,t-1,e)))return!1;const s=Tn(n,t,e),o=s>>4;return(s&15)<4&&(o<6||!i)}function g_(n,t,e=2){const i=Math.floor(n/yn),r=Math.floor(t/yn),s=[];for(let o=i-e;o<=i+e;o++)for(let a=r-e;a<=r+e;a++){const l=Qu(o,a);l&&l.def.villagers>0&&s.push({key:o+","+a,...l})}return s}const Yc={sheep:{hw:.42,h:1.2,spd:1.5,skittish:!0,build(n,t){t(n,.95,.85,1.35,15657696,0,.78,0),t(n,.6,.6,.55,14603976,0,.95,.85);const e=[];for(const[i,r]of[[-.3,.45],[.3,.45],[-.3,-.45],[.3,-.45]])e.push(t(n,.22,.55,.22,4867648,i,.27,r));return e}},pig:{hw:.4,h:.95,spd:1.3,skittish:!1,build(n,t){t(n,.85,.7,1.2,14916250,0,.62,0),t(n,.55,.5,.45,14715530,0,.7,.78),t(n,.25,.22,.12,14187130,0,.62,1);const e=[];for(const[i,r]of[[-.28,.4],[.28,.4],[-.28,-.4],[.28,-.4]])e.push(t(n,.2,.4,.2,13134442,i,.2,r));return e}},chicken:{hw:.3,h:.7,spd:1.7,skittish:!0,build(n,t){t(n,.5,.5,.6,16052456,0,.5,0),t(n,.35,.35,.32,16315628,0,.78,.34),t(n,.14,.12,.18,15247408,0,.74,.55),t(n,.16,.18,.08,14168112,0,.96,.32);const e=[];for(const i of[-.13,.13])e.push(t(n,.08,.34,.08,15247408,i,.17,0));return e}}},__={hw:.3,h:1.8,spd:1.1,build(n,t){t(n,.52,.78,.34,9071178,0,.96,0),t(n,.38,.38,.38,14200968,0,1.54,0),t(n,.09,.16,.09,13146744,0,1.48,-.22),t(n,.56,.17,.2,8018494,0,1.16,-.16);const e=[];for(const i of[-.14,.14])e.push(t(n,.2,.58,.2,5916210,i,.29,0));return e}},v_={hw:.3,h:1.8,spd:1.4,build(n,t){t(n,.5,.72,.3,3828362,0,1,0),t(n,.4,.4,.4,5937746,0,1.56,0);for(const i of[-.26,.26])t(n,.16,.16,.62,5937746,i,1.24,-.38);const e=[];for(const i of[-.13,.13])e.push(t(n,.2,.62,.2,3493994,i,.31,0));return e}};function x_({scene:n,ctx:t,audio:e}){const i=[],r=new Set;let s=3,o=1;function a(f,E,v,_){const T=new ti,p=[],y=(b,L,F,$,D,B,z,q)=>{const H=new Ve({color:D}),O=new Le(new Xn(L,F,$),H);return O.position.set(B,z,q),b.add(O),p.push({mat:H,base:new Vt(D)}),O},P=v.build(T,y);n.add(T);const M={kind:f,type:E,def:v,group:T,legs:P,mats:p,hw:v.hw,h:v.h,pos:new G(_.x,_.y,_.z),vy:0,yaw:Math.random()*6.28,onGround:!1,walking:!1,timer:0,legPhase:0,flee:0,callT:2+Math.random()*8,cool:0,lightT:Math.random(),home:null};return i.push(M),M}function l(f){n.remove(f.group),f.group.traverse(v=>{v.isMesh&&(v.geometry.dispose(),v.material.dispose())});const E=i.indexOf(f);E>=0&&i.splice(E,1),f.home&&r.delete(f.home.key)}function c(f,E,v=60){for(let _=0;_<v;_++){const T=f+Math.floor((Math.random()-.5)*2*Xc),p=E+Math.floor((Math.random()-.5)*2*Xc);let y=qt-1;for(;y>0&&Yt(T,y,p)===de;)y--;const P=Yt(T,y,p);if(y>We&&(P===An||P===oi||P===kn))return{x:T,y,z:p}}return null}function u(f,E,v,_=9){for(let T=0;T<12;T++){const p=f+Math.floor((Math.random()-.5)*_),y=E+Math.floor((Math.random()-.5)*_);for(let P=Math.max(1,v-5);P<=Math.min(qt-2,v+6);P++)if(Yt(p,P,y)===de&&Yt(p,P+1,y)===de&&Ze(Yt(p,P-1,y)))return{x:p,y:P,z:y}}return null}function h(f,E){for(let v=0;v<10;v++){const _=Math.random()*Math.PI*2,T=qc+Math.random()*(c_-qc),p=Math.floor(f.x+Math.sin(_)*T),y=Math.floor(f.z+Math.cos(_)*T),P=Math.min(qt-2,Math.floor(f.y)+10),M=Math.max(2,Math.floor(f.y)-16);for(let b=P;b>=M;b--)if(m_(p,b,y,E))return{x:p,y:b,z:y}}return null}function d(f,E){for(;i.length;)l(i[0]);r.clear();const v=Math.floor(E?E.x:8),_=Math.floor(E?E.z:8),T=Object.keys(Yc);for(let p=0;p<f;p++){const y=c(v,_);if(!y)continue;const P=T[Math.floor(Math.random()*T.length)];a("animal",P,Yc[P],{x:y.x+.5,y:y.y+1.01,z:y.z+.5})}}function g(f){for(let v=i.length-1;v>=0;v--){const _=i[v];_.kind==="villager"&&Math.hypot(_.home.ax-f.x,_.home.az-f.z)>p_&&l(_)}if(!(i.filter(v=>v.kind==="villager").length>=h_))for(const v of g_(f.x,f.z,2)){if(r.has(v.key)||Math.hypot(v.ax-f.x,v.az-f.z)>90||Yt(v.ax,v.baseY,v.az)===de)continue;let _=0;for(let T=0;T<v.def.villagers;T++){const p=u(v.ax,v.az,v.baseY+1);if(!p)continue;const y=a("villager","villager",__,{x:p.x+.5,y:p.y+.01,z:p.z+.5});y.home={key:v.key,ax:v.ax,az:v.az},_++}_&&r.add(v.key)}}function x(f){if(!(t.curIsDay===!1||t.curUnderground)||i.filter(v=>v.kind==="zombie").length>=l_)return;const E=h(f,t.curIsDay);E&&a("zombie","zombie",v_,{x:E.x+.5,y:E.y+.01,z:E.z+.5})}function S(f,E){const v={hit:null,poofs:[]};o-=f,o<=0&&(o=2,g(E)),s-=f,s<=0&&(s=1.4,x(E));for(let T=i.length-1;T>=0;T--){const p=i[T];p.timer-=f,p.callT-=f,p.cool>0&&(p.cool-=f);const y=p.pos.x-E.x,P=p.pos.z-E.z,M=Math.hypot(y,P);let b=p.def.spd;if(p.kind==="animal")p.callT<=0&&(p.callT=5+Math.random()*10,M<22&&e.animalSound(p.type,M)),p.def.skittish&&M<5&&(p.flee=1.2,p.yaw=Math.atan2(y,P)),p.flee>0&&(p.flee-=f),p.timer<=0&&p.flee<=0&&(p.timer=1.5+Math.random()*3.5,Math.random()<.6?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1),p.flee>0&&(b*=1.8);else if(p.kind==="villager"){p.callT<=0&&(p.callT=6+Math.random()*12,M<7&&e.animalSound("villager",M));const D=Math.hypot(p.pos.x-(p.home.ax+.5),p.pos.z-(p.home.az+.5));M<4?(p.walking=!1,p.yaw=Math.atan2(y,P),p.timer=.6):D>d_?(p.walking=!0,p.yaw=Math.atan2(p.pos.x-(p.home.ax+.5),p.pos.z-(p.home.az+.5))):p.timer<=0&&(p.timer=2+Math.random()*4,Math.random()<.55?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1)}else{p.callT<=0&&(p.callT=4+Math.random()*7,M<22&&e.animalSound("zombie",M)),M<f_?(p.walking=!0,b*=2,p.yaw=Math.atan2(y,P)):p.timer<=0&&(p.timer=1.5+Math.random()*3,Math.random()<.5?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1);const D=E.y-p.pos.y;if(p.cool<=0&&M<1&&D>-1.5&&D<1.8){p.cool=1.2;const B=Math.max(M,.001);v.hit={dx:-y/B,dz:-P/B}}if(p.lightT-=f,p.lightT<=0){p.lightT=.8;const B=Tn(Math.floor(p.pos.x),Math.floor(p.pos.y+.5),Math.floor(p.pos.z))>>4;if(t.curIsDay&&B>=10){v.poofs.push([p.pos.x,p.pos.y+1,p.pos.z]),l(p);continue}if(M>u_){l(p);continue}}}const L=p.walking||p.flee>0;if(L){const D=-Math.sin(p.yaw)*b*f,B=-Math.cos(p.yaw)*b*f;let z=!1;const q=m(p.pos.x+D,p.pos.y,p.pos.z);!q&&!_i(p.pos.x+D,p.pos.y,p.pos.z,p.hw,p.h)?(p.pos.x+=D,z=!0):!q&&p.onGround&&!_i(p.pos.x+D,p.pos.y+1,p.pos.z,p.hw,p.h)&&(p.pos.x+=D,p.pos.y+=1,z=!0);const H=m(p.pos.x,p.pos.y,p.pos.z+B);!H&&!_i(p.pos.x,p.pos.y,p.pos.z+B,p.hw,p.h)?(p.pos.z+=B,z=!0):!H&&p.onGround&&!_i(p.pos.x,p.pos.y+1,p.pos.z+B,p.hw,p.h)&&(p.pos.z+=B,p.pos.y+=1,z=!0),z||(p.yaw+=2+Math.random(),p.timer=.4),p.kind==="animal"&&M>o_&&(p.yaw=Math.atan2(E.x-p.pos.x,E.z-p.pos.z)),p.legPhase+=f*b*5}p.vy=Math.max(p.vy-24*f,-30);const F=p.pos.y+p.vy*f;if(p.vy<0&&_i(p.pos.x,F,p.pos.z,p.hw,p.h)?(p.pos.y=Math.floor(F)+1,p.vy=0,p.onGround=!0):p.vy>0&&_i(p.pos.x,F,p.pos.z,p.hw,p.h)?p.vy=0:(p.pos.y=F,p.onGround=!1),p.pos.y<-10)if(p.kind==="animal"){const D=c(Math.floor(E.x),Math.floor(E.z));D?(p.pos.set(D.x+.5,D.y+1.01,D.z+.5),p.vy=0):(p.pos.y=qt,p.vy=0)}else if(p.kind==="villager"){const D=u(p.home.ax,p.home.az,40,5);if(D)p.pos.set(D.x+.5,D.y+.01,D.z+.5),p.vy=0;else{l(p);continue}}else{l(p);continue}p.group.position.copy(p.pos),p.group.rotation.y=p.yaw;const $=L?Math.sin(p.legPhase)*.5:0;for(let D=0;D<p.legs.length;D++)p.legs[D].rotation.x=D%2?-$:$}const _=Math.max(.35,t.dayBright);for(const T of i)for(const p of T.mats)p.mat.color.copy(p.base).multiplyScalar(_);return v}function m(f,E,v){const _=Math.floor(f),T=Math.floor(v),p=Math.floor(E);for(let y=p;y>=p-4&&y>=0;y--){const P=Yt(_,y,T);if(P===an)return!0;if(P!==de)return!1}return!1}return{spawnAnimals:d,update:S,animals:i}}const na=n=>Math.max(0,Math.min(1,n));function M_({scene:n,camera:t,materials:e,ctx:i,audio:r}){const s=new G,o=new ti;n.add(o);function a(O,V,Y){const k=document.createElement("canvas");k.width=k.height=64;const N=k.getContext("2d"),tt=N.createRadialGradient(32,32,4,32,32,32);tt.addColorStop(0,O),tt.addColorStop(Y,O),tt.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=tt,N.fillRect(0,0,64,64);const st=new Rg(new Iu({map:new kr(k),fog:!1,transparent:!0,depthWrite:!1}));return st.scale.set(V,V,1),o.add(st),st}const l=a("rgba(255,244,180,1)",40,.55),c=a("rgba(214,224,255,1)",26,.45),u=new Ee;function h(){const O=[],V=Ui(Di()^20901|0);for(let Y=0;Y<520;Y++){const k=V()*Math.PI*2,N=Math.acos(V()*2-1);O.push(280*Math.sin(N)*Math.cos(k),Math.abs(280*Math.cos(N)),280*Math.sin(N)*Math.sin(k))}u.setAttribute("position",new ve(O,3))}h();const d=new Zo({color:16777215,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0,depthWrite:!1});o.add(new zu(u,d));const g=new Vt(9422056),x=new Vt(461592),S=new Vt(15764554),m=new Vt(857136),f=new Vt,E=new ti;n.add(E);let v=null,_=0;function T(){v&&(E.remove(v),v.geometry.dispose());const O=[],V=[],Y=Ui(Di()^20817|0),k=48,N=8,tt=qt+10;for(let mt=0;mt<k;mt++)for(let vt=0;vt<k;vt++){if(Jr(mt*.18+1,vt*.18+1)<.56)continue;const U=(mt-k/2)*N,K=(vt-k/2)*N,w=N*.98,it=tt+Y()*2,W=O.length/3;O.push(U,it,K,U+w,it,K,U,it,K+w,U+w,it,K+w),O.push(U,it-2,K,U+w,it-2,K,U,it-2,K+w,U+w,it-2,K+w),V.push(W,W+1,W+2,W+2,W+1,W+3),V.push(W+4,W+6,W+5,W+5,W+6,W+7)}const st=new Ee;st.setAttribute("position",new ve(O,3)),st.setIndex(V);const pt=new Ve({color:16777215,transparent:!0,opacity:.82,fog:!0,side:rn});v=new Le(st,pt),E.add(v)}const p=420,y=new Ee,P=new Float32Array(p*6),M=[];for(let O=0;O<p;O++)M.push({x:0,y:0,z:0});y.setAttribute("position",new $e(P,3));const b=new Ra({color:10469608,transparent:!0,opacity:.5}),L=new Bu(y,b);L.visible=!1,n.add(L);let F=40;function $(O){for(let V=0;V<p;V++)M[V].x=O.x+(Math.random()-.5)*40,M[V].y=O.y+Math.random()*26+2,M[V].z=O.z+(Math.random()-.5)*40}function D(O,V){i.weather=O,O==="rain"?($(V),r.startRainSound()):r.stopRainSound()}function B(O,V){if(i.weather!=="rain"){L.visible=!1;return}L.visible=!0;for(let Y=0;Y<p;Y++){const k=M[Y];k.y-=34*V,k.x+=2*V,k.y<O.y-8&&(k.x=O.x+(Math.random()-.5)*40,k.z=O.z+(Math.random()-.5)*40,k.y=O.y+22+Math.random()*6),(Math.abs(k.x-O.x)>22||Math.abs(k.z-O.z)>22)&&(k.x=O.x+(Math.random()-.5)*40,k.z=O.z+(Math.random()-.5)*40);const N=Y*6;P[N]=k.x,P[N+1]=k.y,P[N+2]=k.z,P[N+3]=k.x-.1,P[N+4]=k.y-1.1,P[N+5]=k.z}y.attributes.position.needsUpdate=!0}function z(O,V){F-=O,F<=0&&(i.weather==="clear"?Math.random()<.4?(D("rain",V),F=25+Math.random()*40):F=30+Math.random()*60:(D("clear",V),F=50+Math.random()*70))}function q(O){i.timeOfDay=(i.timeOfDay+O/Dg*(i.keys.KeyN&&i.locked?40:1))%1;const V=i.timeOfDay*Math.PI*2,Y=Math.sin(V);i.curIsDay=Y>-.05;const k=new G(Math.cos(V),Y,.28).normalize();l.position.copy(k).multiplyScalar(260),c.position.copy(k).multiplyScalar(-260);const N=na((Y+.1)/.35),tt=Math.exp(-Math.pow(Y/.16,2))*.8;f.copy(x).lerp(g,N),f.lerp(Y>-.3?S:m,tt*(1-N*.4)),i.weather==="rain"&&f.multiplyScalar(.6),n.background.copy(f),n.fog.color.copy(f);let st=.22+.78*N;i.weather==="rain"&&(st*=.7),i.dayBright=st,Jg(st),v&&v.material.color.setScalar(.6+.4*st),b.color.setRGB(.62*st+.1,.75*st+.1,.9*st+.1),d.opacity=na((.18-Y)/.3),l.material.opacity=na((Y+.15)/.2),c.material.opacity=na((-Y+.15)/.2),t.getWorldPosition(s),o.position.copy(s),_+=O*.6,_>160&&(_-=160),E.position.set(s.x+_-80,0,s.z)}function H(){h(),T()}return{updateSky:q,buildSky:H,updateRain:B,tickWeather:z,setWeather:D}}const Kc="blockwelt4_save";function S_({player:n,ctx:t}){function e(){const c={};for(const[u,h]of Ti){const d=new Array(h.size*2);let g=0;for(const[x,S]of h)d[g++]=x,d[g++]=S;c[u]=d}return c}function i(){return{v:4,seed:Di(),t:t.timeOfDay,w:t.weather,p:[n.pos.x,n.pos.y,n.pos.z,n.yaw,n.pitch],e:e()}}function r(c){if(!c||c.v!==4)return!1;if(Xu(c.seed??Di()),qe.clear(),Ti.clear(),c.e)for(const u in c.e){const h=c.e[u],d=new Map;for(let g=0;g<h.length;g+=2)d.set(h[g],h[g+1]);Ti.set(u,d)}return t.timeOfDay=c.t??.3,t.weather=c.w??"clear",c.p??null}function s(){try{return localStorage.setItem(Kc,JSON.stringify(i())),!0}catch{return!1}}function o(){try{const c=localStorage.getItem(Kc);return c?r(JSON.parse(c)):!1}catch{return!1}}function a(){const c=new Blob([JSON.stringify(i())],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(c),u.download="meine-welt.blockwelt",u.click(),URL.revokeObjectURL(u.href)}function l(){}return{snapshot:i,applySnapshot:r,saveLocal:s,loadLocal:o,exportFile:a,invalidateWorld:l}}function y_({ctx:n}){const t=document.getElementById("hotbar"),e=document.getElementById("coords"),i=document.getElementById("biome"),r=document.getElementById("blockmenu");function s(c){const u=document.createElement("canvas");return u.width=16,u.height=16,u.getContext("2d").drawImage(la,Fn[c][1]*ce,0,ce,ce,0,0,16,16),u}function o(c){r.innerHTML="";const u=document.createElement("div");u.className="bm-title",u.textContent="Block wählen  ·  E schließt";const h=document.createElement("div");h.className="bm-grid",Wu.forEach(d=>{const g=document.createElement("div");g.className="bm-slot",g.title=aa[d]||"",g.appendChild(s(d));const x=document.createElement("span");x.textContent=aa[d]||"",g.appendChild(x),g.addEventListener("click",()=>c(d)),h.appendChild(g)}),r.appendChild(u),r.appendChild(h)}function a(){t.innerHTML="",De.forEach((c,u)=>{const h=document.createElement("div");h.className="slot"+(u===n.selected?" sel":"");const d=document.createElement("span");d.textContent=u+1,h.appendChild(s(c)),h.appendChild(d),h.title=aa[c],t.appendChild(h)})}function l(c,u){const h=Math.floor((n.timeOfDay+.25)%1*1440),d=String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0");e.textContent=`x ${c.pos.x.toFixed(1)}  y ${c.pos.y.toFixed(1)}  z ${c.pos.z.toFixed(1)}  ·  ${n.timeOfDay<.5?"🌞":"🌙"} ${d}${c.fly?"  ·  ✈":""}${n.weather==="rain"?"  ·  🌧":""}${u?"  ·  ♪":""}`,i.textContent="🌍 "+zg[n.curBiome]}return{renderHotbar:a,updateHUD:l,buildMenu:o}}const E_=n=>Math.max(0,Math.min(1,n));function T_({scene:n,camera:t,ctx:e}){let i=0;const r=new G,s=18,o=new Fu(new Xn(.7,.1,.22),new Ve({color:2106410}),s);o.frustumCulled=!1,o.instanceMatrix.setUsage(pu),n.add(o);const a=[];for(let v=0;v<s;v++)a.push({r:9+Math.random()*17,ph:Math.random()*Math.PI*2,spd:.22+Math.random()*.18,hy:24+Math.random()*14,wob:Math.random()*Math.PI*2});const l=new Pe,c=new G,u=80,h=22,d=8,g=new Ee,x=new Float32Array(u*3),S=[];for(let v=0;v<u;v++)x[v*3]=(Math.random()*2-1)*h,x[v*3+1]=Math.random()*d,x[v*3+2]=(Math.random()*2-1)*h,S.push({x:(Math.random()-.5)*.7,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.7});g.setAttribute("position",new $e(x,3));const m=new Zo({color:16769658,size:.5,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ro,fog:!1}),f=new zu(g,m);f.frustumCulled=!1,n.add(f);function E(v){i+=v;const _=E_((e.dayBright-.45)/.4),T=1-_;if(t.getWorldPosition(r),o.visible=_>.02&&!e.curUnderground&&!e.curHeadWater,o.visible){const p=r.x,y=r.z;for(let P=0;P<s;P++){const M=a[P],b=i*M.spd+M.ph,L=p+Math.cos(b)*M.r,F=y+Math.sin(b)*M.r,$=M.hy+Math.sin(i*.6+M.wob)*1.5;c.set(p+Math.cos(b+.06)*M.r,$,y+Math.sin(b+.06)*M.r),l.position.set(L,$,F),l.lookAt(c);const D=.5+Math.abs(Math.sin(i*9+M.ph))*.85;l.scale.set(D,1,1),l.updateMatrix(),o.setMatrixAt(P,l.matrix)}o.instanceMatrix.needsUpdate=!0}if(m.opacity=T*(.55+.45*Math.sin(i*2.5))*.9,f.visible=m.opacity>.02&&!e.curHeadWater,f.visible){for(let p=0;p<u;p++){const y=S[p];let P=x[p*3]+y.x*v,M=x[p*3+1]+y.y*v,b=x[p*3+2]+y.z*v;Math.random()<.02&&(y.x=(Math.random()-.5)*.7,y.y=(Math.random()-.5)*.3,y.z=(Math.random()-.5)*.7),P>h?P=-h:P<-h&&(P=h),b>h?b=-h:b<-h&&(b=h),M>d?M=.2:M<0&&(M=d),x[p*3]=P,x[p*3+1]=M,x[p*3+2]=b}g.attributes.position.needsUpdate=!0,f.position.set(r.x,r.y-1.2,r.z)}}return{update:E}}const ef="blockwelt_vr_settings",ae={speed:4.2,vignette:.8,turn:"snap45",teleport:!1};try{Object.assign(ae,JSON.parse(localStorage.getItem(ef))||{})}catch{}function $c(){try{localStorage.setItem(ef,JSON.stringify(ae))}catch{}}const b_=.6,A_=.3,or=.15,Zc=8,w_=2.2,wo=new G(0,1,0);function R_({renderer:n,camera:t,rig:e,scene:i,ctx:r,player:s,raycastFrom:o,onHotbarChange:a}){let l=0,c=!0,u=0,h=0,d=!1,g=!1,x=!1,S=!1,m=!1,f=!1,E=!1,v=!1,_=!1;const T={x:0,y:0,z:0},p=document.createElement("canvas");p.width=p.height=256;const y=p.getContext("2d"),P=y.createRadialGradient(128,128,0,128,128,128);P.addColorStop(0,"rgba(0,0,0,0)"),P.addColorStop(.45,"rgba(0,0,0,0)"),P.addColorStop(.75,"rgba(0,0,0,0.85)"),P.addColorStop(1,"rgba(0,0,0,1)"),y.fillStyle=P,y.fillRect(0,0,256,256);const M=new Ve({map:new kr(p),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1}),b=new Le(new dr(1.6,1.6),M);b.position.z=-.35,b.renderOrder=9999,b.visible=!1,t.add(b);let L=null,F=null,$=null;const D=[n.xr.getController(0),n.xr.getController(1)];for(const J of D)e.add(J),J.addEventListener("connected",Rt=>{Rt.data.handedness==="right"?(L=J,$=Rt.data,J.add(z)):Rt.data.handedness==="left"&&(F=J,J.add(st))}),J.addEventListener("disconnected",()=>{L===J&&(J.remove(z),L=null,$=null),F===J&&(J.remove(st),F=null)});const B=new Ee().setFromPoints([new G(0,0,0),new G(0,0,-1)]),z=new Ou(B,new Ra({color:16777215,transparent:!0,opacity:.55}));z.scale.z=8;const q=24,H=2,O=De.length*(q+H)+H,V=q+22,Y=document.createElement("canvas");Y.width=O,Y.height=V;const k=Y.getContext("2d"),N=new kr(Y);N.magFilter=Re;function tt(){k.clearRect(0,0,O,V),k.fillStyle="rgba(10,14,20,0.75)",k.fillRect(0,16,O,V-16);for(let J=0;J<De.length;J++){const Rt=De[J],It=H+J*(q+H),Tt=19,gt=(Fn[Rt]||[3,3,3])[1];k.imageSmoothingEnabled=!1,k.drawImage(la,gt*16,0,16,16,It,Tt,q,q),J===r.selected&&(k.strokeStyle="#fff",k.lineWidth=2,k.strokeRect(It-1,Tt-1,q+2,q+2))}k.fillStyle="#fff",k.font="bold 12px sans-serif",k.textAlign="center",k.fillText(aa[De[r.selected]]||"?",O/2,12),N.needsUpdate=!0}tt();const st=new Le(new dr(.18,.18*V/O),new Ve({map:N,transparent:!0,depthTest:!1,fog:!1}));st.renderOrder=9998,st.position.set(0,.06,.1),st.rotation.x=-Math.PI/3;function pt(J){r.selected=(r.selected+J+De.length)%De.length,tt(),a&&a()}function mt(J,Rt){try{$&&$.gamepad&&$.gamepad.hapticActuators&&$.gamepad.hapticActuators[0]&&$.gamepad.hapticActuators[0].pulse(J,Rt)}catch{}}const vt=new Le(new Jo(.35,.045,8,24),new Ve({color:4907146,transparent:!0,opacity:.85,depthTest:!1,fog:!1}));vt.rotation.x=-Math.PI/2,vt.renderOrder=9e3,vt.visible=!1,i.add(vt);const Z=560,U=520,K=document.createElement("canvas");K.width=Z,K.height=U;const w=K.getContext("2d"),it=new kr(K);it.magFilter=tn;const W=new Le(new dr(.72,.72*U/Z),new Ve({map:it,transparent:!0,depthTest:!1,fog:!1,side:rn}));W.renderOrder=9500;const rt=new Le(new jo(.008,8,8),new Ve({color:16769162,depthTest:!1,fog:!1}));rt.renderOrder=9600,rt.visible=!1,i.add(rt);let at=[];const wt=J=>(Math.round(J*10)/10).toFixed(1),yt=()=>ae.turn==="snap30"?"Snap 30°":ae.turn==="snap45"?"Snap 45°":"Weich";function C(){at=[],w.clearRect(0,0,Z,U),w.fillStyle="rgba(12,16,24,0.92)",w.fillRect(0,0,Z,U),w.strokeStyle="rgba(255,255,255,0.25)",w.lineWidth=2,w.strokeRect(1,1,Z-2,U-2),w.textAlign="center",w.fillStyle="#fff",w.font="bold 17px sans-serif",w.fillText("BLOCKWELT — Blöcke & Einstellungen",Z/2,24),w.imageSmoothingEnabled=!1;const J=44,Rt=8,It=(Z-(De.length*(J+Rt)-Rt))/2,Tt=38;for(let I=0;I<De.length;I++){const ht=It+I*(J+Rt),dt=(Fn[De[I]]||[3,3,3])[1];w.fillStyle="rgba(255,255,255,0.08)",w.fillRect(ht,Tt,J,J),w.drawImage(la,dt*16,0,16,16,ht+4,Tt+4,J-8,J-8),w.strokeStyle=I===r.selected?"#fff":"rgba(255,255,255,0.25)",w.lineWidth=I===r.selected?3:1,w.strokeRect(ht,Tt,J,J),w.fillStyle="rgba(255,255,255,0.7)",w.font="10px sans-serif",w.fillText(String(I+1),ht+J/2,Tt+J+11);const At=I;at.push({x:ht,y:Tt,w:J,h:J,fn:()=>{r.selected=At}})}const gt=44,Mt=8,Ft=7,Zt=(Z-(Ft*(gt+Mt)-Mt))/2,Qt=108;Wu.forEach((I,ht)=>{const dt=Zt+ht%Ft*(gt+Mt),At=Qt+Math.floor(ht/Ft)*(gt+Mt),Ct=(Fn[I]||[3,3,3])[1];w.fillStyle="rgba(255,255,255,0.06)",w.fillRect(dt,At,gt,gt),w.drawImage(la,Ct*16,0,16,16,dt+4,At+4,gt-8,gt-8),I===De[r.selected]&&(w.strokeStyle="#ffe08a",w.lineWidth=3,w.strokeRect(dt,At,gt,gt)),at.push({x:dt,y:At,w:gt,h:gt,fn:()=>{De[r.selected]=I,a&&a()}})}),w.textAlign="left",w.font="15px sans-serif";const Ot=[{label:"Gehtempo",value:wt(ae.speed),minus:()=>{ae.speed=Math.max(2.4,ae.speed-.6)},plus:()=>{ae.speed=Math.min(5.4,ae.speed+.6)}},{label:"Vignette",value:Math.round(ae.vignette*100)+"%",minus:()=>{ae.vignette=Math.max(0,ae.vignette-.2)},plus:()=>{ae.vignette=Math.min(1,ae.vignette+.2)}},{label:"Drehen",value:yt(),cycle:()=>{ae.turn=ae.turn==="snap30"?"snap45":ae.turn==="snap45"?"smooth":"snap30"}},{label:"Teleport (rechter Stick vor)",value:ae.teleport?"An":"Aus",cycle:()=>{ae.teleport=!ae.teleport}}];let ft=330;for(const I of Ot){w.fillStyle="#fff",w.fillText(I.label,30,ft+26);const ht=(dt,At,Ct,te)=>{w.fillStyle="rgba(255,255,255,0.12)",w.fillRect(dt,ft,At,38),w.strokeStyle="rgba(255,255,255,0.35)",w.lineWidth=1,w.strokeRect(dt,ft,At,38),w.fillStyle="#fff",w.textAlign="center",w.fillText(Ct,dt+At/2,ft+26),w.textAlign="left",at.push({x:dt,y:ft,w:At,h:38,fn:te})};I.cycle?ht(360,180,I.value,()=>{I.cycle()}):(ht(360,44,"−",()=>{I.minus()}),w.textAlign="center",w.fillStyle="#ffe08a",w.fillText(I.value,457,ft+26),w.textAlign="left",ht(496,44,"+",()=>{I.plus()})),ft+=46}w.fillStyle="rgba(255,255,255,0.55)",w.font="12px sans-serif",w.textAlign="center",w.fillText("Schließen: linken Stick drücken · Auswählen: Laser + Trigger",Z/2,U-8),it.needsUpdate=!0}function A(){C();const J=new G;t.getWorldPosition(J);const Rt=new G;t.getWorldDirection(Rt),Rt.y=0,Rt.lengthSq()<1e-6?Rt.set(0,0,-1):Rt.normalize(),W.position.copy(J).addScaledVector(Rt,1.05),W.position.y=J.y-.12,W.lookAt(J),i.add(W),E=!0}function j(){i.remove(W),rt.visible=!1,E=!1,$c()}const ut=new Pg;function ct(J){if(rt.visible=!1,!L)return;L.getWorldPosition(xt),L.getWorldQuaternion(Ut),St.set(0,0,-1).applyQuaternion(Ut),ut.set(xt,St);const Rt=ut.intersectObject(W,!1)[0];if(z.scale.z=Rt?Rt.distance:8,!Rt||!Rt.uv||(rt.position.copy(Rt.point),rt.visible=!0,!J))return;const It=Rt.uv.x*Z,Tt=(1-Rt.uv.y)*U;for(const gt of at)if(It>=gt.x&&It<=gt.x+gt.w&&Tt>=gt.y&&Tt<=gt.y+gt.h){gt.fn(),C(),tt(),$c(),mt(.3,30);return}}n.xr.addEventListener("sessionstart",()=>{l=0,c=!0,u=0,d=!1,g=x=S=m=f=!0,e.quaternion.identity(),s.fly=!1,r.keys={},b.visible=!0,tt()}),n.xr.addEventListener("sessionend",()=>{E&&j(),vt.visible=!1,v=!1,r.vrMove=null,r.keys={},e.quaternion.identity(),b.visible=!1,M.opacity=h=0});const lt=new G,bt=new G,xt=new G,St=new G,Ut=new Er;function Ht(J){if(!n.xr.isPresenting)return r.vrMove=null,null;const Rt=n.xr.getSession();let It=0,Tt=0,gt=0,Mt=0,Ft=!1,Zt=!1,Qt=!1,Ot=!1,ft=!1,I=!1,ht=!1,dt=0;for(const Jt of Rt.inputSources){const Dt=Jt.gamepad;if(!Dt||Dt.axes.length<4)continue;const ne=Dt.axes[2],se=Dt.axes[3];if(Jt.handedness==="left"){const hn=Math.hypot(ne,se);if(hn>or){const ds=(hn-or)/(1-or)/hn;It=ne*ds,Tt=se*ds}Dt.buttons[4]&&Dt.buttons[4].pressed&&(ft=!0),Dt.buttons[5]&&Dt.buttons[5].pressed&&(I=!0),Dt.buttons[3]&&Dt.buttons[3].pressed&&(ht=!0)}else Jt.handedness==="right"&&(gt=ne,dt=se,s.fly&&Math.abs(se)>.3&&(Mt=-(Math.abs(se)-.3)/.7*Math.sign(se)),Dt.buttons[0]&&Dt.buttons[0].pressed&&(Qt=!0),Dt.buttons[1]&&Dt.buttons[1].pressed&&(Ot=!0),Dt.buttons[4]&&Dt.buttons[4].pressed&&(Ft=!0),Dt.buttons[5]&&Dt.buttons[5].pressed&&(Zt=!0))}if(ht&&!f&&(E?j():A()),f=ht,E)return r.vrMove={x:0,y:0,z:0},r.keys.Space=!1,vt.visible=!1,v=!1,ct(Qt&&!g),g=Qt,x=Ot,h+=(0-h)*Math.min(1,J*Zc),M.opacity=h,{hit:null,doBreak:!1,doPlace:!1,fwdX:0,fwdZ:0};ft&&!S&&pt(1),I&&!m&&pt(-1),S=ft,m=I,Zt&&!d&&(s.fly=!s.fly,s.vel.y=0),d=Zt;let At=0;if(ae.turn==="smooth"){if(Math.abs(gt)>or){const Jt=(Math.abs(gt)-or)/(1-or)*Math.sign(gt);l-=Jt*w_*J,e.quaternion.setFromAxisAngle(wo,l),At=Math.abs(Jt)}}else c&&Math.abs(gt)>b_?(l-=Math.sign(gt)*(ae.turn==="snap30"?Math.PI/6:Math.PI/4),e.quaternion.setFromAxisAngle(wo,l),c=!1,u=1):!c&&Math.abs(gt)<A_&&(c=!0);if(It||Tt||Mt){t.getWorldDirection(lt),s.fly||(lt.y=0),lt.lengthSq()<1e-6?lt.set(0,0,-1):lt.normalize(),bt.set(lt.x,0,lt.z).normalize(),bt.crossVectors(bt,wo);const Jt=ae.speed/5.4;let Dt=lt.x*-Tt+bt.x*It,ne=s.fly?lt.y*-Tt+Mt:0,se=lt.z*-Tt+bt.z*It;const hn=Math.hypot(Dt,ne,se);hn>1&&(Dt/=hn,ne/=hn,se/=hn),r.vrMove={x:Dt*Jt,y:ne*Jt,z:se*Jt}}else r.vrMove={x:0,y:0,z:0};r.keys.Space=Ft;const Ct=Math.min(1,Math.max(Math.hypot(It,Tt),Math.abs(Mt))),te=Math.min(1,Math.max(0,(Math.abs(s.vel.y)-3)/6));let ee=Math.max(Ct,te,At)*ae.vignette;u>0&&(ee=Math.max(ee,u),u-=J*5),h+=(ee-h)*Math.min(1,J*Zc),M.opacity=h;const oe={hit:null,doBreak:!1,doPlace:!1,fwdX:0,fwdZ:0};if(L){L.getWorldPosition(xt),L.getWorldQuaternion(Ut),St.set(0,0,-1).applyQuaternion(Ut);const Jt=o(xt.x,xt.y,xt.z,St);if(oe.hit=Jt,z.scale.z=Jt?Math.max(Jt.dist,.05):8,oe.fwdX=St.x,oe.fwdZ=St.z,oe.doBreak=Qt&&!g,oe.doPlace=Ot&&!x,ae.teleport&&!s.fly)if(dt<-.5){if(v=!0,_=!1,Jt){const Dt=Jt.x,ne=Jt.y+1,se=Jt.z;ne+1<128&&!xa(Yt(Dt,ne,se))&&!xa(Yt(Dt,ne+1,se))&&(_=!0,T.x=Dt,T.y=ne,T.z=se,vt.position.set(Dt+.5,ne+.06,se+.5))}vt.visible=_}else v&&(v=!1,vt.visible=!1,_&&(s.pos.set(T.x+.5,T.y+.01,T.z+.5),s.vel.set(0,0,0),u=1,mt(.5,50)));else vt.visible=!1,v=!1}return g=Qt,x=Ot,oe}return{update:Ht,pulse:mt,refreshPanel:tt,openMenu:A,closeMenu:j,settings:ae,_regions:()=>at}}const zt={keys:{},selected:0,ready:!1,locked:!1,timeOfDay:.3,dayBright:1,curIsDay:!0,weather:"clear",curUnderground:!1,curHeadWater:!1,curBiome:1},bn=document.getElementById("c"),Ie=new Uu({canvas:bn,antialias:!1});Ie.setPixelRatio(Math.min(devicePixelRatio,2));const sn=new Ag,nf=new Vt(9422056);sn.background=nf.clone();const tl=(jn-.5)*ot,rf=tl*.5;sn.fog=new $o(nf.clone(),rf,tl);const ke=new un(72,2,.1,600);ke.rotation.order="YXZ";const Oa=new ti;Oa.add(ke);sn.add(Oa);Ie.xr.enabled=!0;const ia=new G,sf=Qg(),Cr=e_({scene:sn,materials:sf}),af=n_(),es=i_({mesher:Cr,light:af}),Bn=r_({camera:ke,ctx:zt}),Pt=Bn.player,Sa=s_({scene:sn}),ze=a_({ctx:zt,player:Pt}),of=x_({scene:sn,ctx:zt,audio:ze}),bi=M_({scene:sn,camera:ke,materials:sf,ctx:zt,audio:ze}),zn=S_({player:Pt,ctx:zt}),Ii=y_({ctx:zt}),C_=T_({scene:sn,camera:ke,ctx:zt}),ua=R_({renderer:Ie,camera:ke,rig:Oa,scene:sn,ctx:zt,player:Pt,raycastFrom:Bn.raycastFrom,onHotbarChange:()=>Ii.renderHotbar()}),qr=new Bu(new Lg(new Xn(1.002,1.002,1.002)),new Ra({color:0,transparent:!0,opacity:.6}));qr.visible=!1;sn.add(qr);Ii.renderHotbar();let ns=!1;const lf=document.getElementById("blockmenu");Ii.buildMenu(n=>{De[zt.selected]=n,Ii.renderHotbar(),ua.refreshPanel(),cf()});function L_(){ns=!0,lf.style.display="flex",zt.locked&&document.exitPointerLock()}function cf(n){ns=!1,lf.style.display="none",zt.ready&&bn.requestPointerLock()}const Ba=document.getElementById("overlay"),ur=document.getElementById("go-text"),Gn=document.getElementById("savehint"),P_=document.getElementById("water-tint"),jc=document.getElementById("hit-tint");let Jc=null,is=!1;const Sr=()=>{is=!0};function uf(n,t,e,i,r){const s=af.relight(n,t,e,i,r),o=Math.floor(n/ot),a=Math.floor(e/ot);s.add(_e(o,a));const l=(n%ot+ot)%ot,c=(e%ot+ot)%ot;l===0&&s.add(_e(o-1,a)),l===ot-1&&s.add(_e(o+1,a)),c===0&&s.add(_e(o,a-1)),c===ot-1&&s.add(_e(o,a+1));for(const u of s){const h=u.split(",").map(Number),d=Ue(h[0],h[1]);d&&d.state==="meshed"&&Cr.buildChunk(h[0],h[1])}}function Qc(n,t,e){return n<Pt.pos.x+Pt.W&&n+1>Pt.pos.x-Pt.W&&t<Pt.pos.y+Pt.H&&t+1>Pt.pos.y&&e<Pt.pos.z+Pt.W&&e+1>Pt.pos.z-Pt.W}const tu=n=>n===on?Li:n===Li?on:n===Vn?Rr:Vn;function D_(n,t,e,i=on){if(t+1>=qt||Ze(Yt(n,t,e))||Ze(Yt(n,t+1,e))||Qc(n,t,e)||Qc(n,t+1,e))return;const r=-Math.sin(Pt.yaw),s=-Math.cos(Pt.yaw),a=Math.abs(s)>Math.abs(r)?1:0;Wn(n,t,e,i,a),Wn(n,t+1,e,i,a|2),Cr.rebuildAt(n,e),ze.sndPlace(i),Sr()}function U_(n,t,e){const i=mr(n,t,e),r=i&2?t-1:t,s=Yt(n,r,e),o=Yt(n,r+1,e);$r(s)&&Wn(n,r,e,tu(s),mr(n,r,e)),$r(o)&&Wn(n,r+1,e,tu(o),mr(n,r+1,e)),Cr.rebuildAt(n,e),ze.sndPlace(s),Sr()}function I_(n,t,e){const i=mr(n,t,e),r=i&2?t-1:t;Wn(n,r,e,de,0),Wn(n,r+1,e,de,0),Cr.rebuildAt(n,e)}function el(n){Cr.disposeAll();const t=n?n[0]:8,e=n?n[2]:8;es.warmup(t,e),Bn.spawnPlayer(n||null),es.update(Pt.pos.x,Pt.pos.z),of.spawnAnimals(16,Pt.pos),bi.buildSky()}Ba.addEventListener("click",()=>{zt.ready&&(ze.audioInit(),zt.weather==="rain"&&bi.setWeather("rain",Pt.pos),bn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{zt.locked=document.pointerLockElement===bn,Ba.style.display=zt.locked||ns?"none":"flex",!zt.locked&&!ns&&zt.ready&&(zn.saveLocal(),is=!1,Gn.textContent="✔ Automatisch gespeichert")});document.addEventListener("mousemove",n=>{zt.locked&&(Pt.yaw-=n.movementX*.0024,Pt.pitch-=n.movementY*.0024,Pt.pitch=Math.max(-1.55,Math.min(1.55,Pt.pitch)))});document.addEventListener("keydown",n=>{if(zt.keys[n.code]=!0,n.code==="KeyE"&&zt.ready){ns?cf():L_();return}if(n.code==="KeyF"&&(Pt.fly=!Pt.fly,Pt.vel.y=0),n.code==="KeyM"&&ze.toggleMusic(),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<De.length&&(zt.selected=t,Ii.renderHotbar())}});document.addEventListener("keyup",n=>zt.keys[n.code]=!1);document.addEventListener("wheel",n=>{zt.locked&&(zt.selected=(zt.selected+(n.deltaY>0?1:-1)+De.length)%De.length,Ii.renderHotbar())});document.addEventListener("contextmenu",n=>n.preventDefault());function ff(n){const t=Yt(n.x,n.y,n.z);return t===an?!1:$r(t)?(I_(n.x,n.y,n.z),ze.sndBreak(t),Sa.spawn(n.x+.5,n.y+.5,n.z+.5,Bc[t]||8947848,10,3,1.5),Sr(),!0):(Wn(n.x,n.y,n.z,de),uf(n.x,n.y,n.z,t,de),ze.sndBreak(t),Sa.spawn(n.x+.5,n.y+.5,n.z+.5,Bc[t]||8947848,10,3,1.5),Sr(),!0)}function hf(n,t,e){const i=Yt(n.x,n.y,n.z);if($r(i))return U_(n.x,n.y,n.z),!0;const r=n.x+n.nx,s=n.y+n.ny,o=n.z+n.nz;if(!qu(r,s))return!1;const a=De[zt.selected];if(a===on||a===Vn)return D_(r,s,o,a),!0;const l=Yt(r,s,o);if(Ze(l))return!1;let c=0;return Ia(a)&&(c=Math.abs(e)>Math.abs(t)?e<0?0:2:t<0?3:1),Wn(r,s,o,a,c),Bn.boxCollides(Pt.pos)?(Wn(r,s,o,l),!1):(uf(r,s,o,l,a),ze.sndPlace(a),Sr(),!0)}document.addEventListener("mousedown",n=>{if(!zt.locked)return;const t=Bn.raycast();t&&(n.button===0?ff(t):n.button===2&&hf(t,-Math.sin(Pt.yaw),-Math.cos(Pt.yaw)))});document.getElementById("btn-export").addEventListener("click",n=>{n.stopPropagation(),zn.exportFile(),Gn.textContent="✔ Welt exportiert"});document.getElementById("btn-import").addEventListener("click",n=>{n.stopPropagation(),document.getElementById("file-import").click()});document.getElementById("file-import").addEventListener("click",n=>n.stopPropagation());document.getElementById("file-import").addEventListener("change",n=>{const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=()=>{try{const i=zn.applySnapshot(JSON.parse(e.result));i!==!1?(el(i),bi.setWeather(zt.weather,Pt.pos),zn.saveLocal(),Gn.textContent="✔ Welt geladen"):Gn.textContent="✘ Datei konnte nicht gelesen werden"}catch{Gn.textContent="✘ Ungültige Datei"}},e.readAsText(t),n.target.value=""});document.getElementById("btn-new").addEventListener("click",n=>{n.stopPropagation(),ur.textContent="⏳ Neue Welt wird erzeugt …",ur.classList.add("busy"),zt.ready=!1,setTimeout(()=>{const t=Math.random()*2147483648|0;Yu(t),el(null),zt.timeOfDay=.3,bi.setWeather("clear",Pt.pos),Sr(),zn.saveLocal(),Gn.textContent="✔ Neue Welt (Seed "+t+")",ur.textContent="▶ Klicken zum Spielen ◀",ur.classList.remove("busy"),zt.ready=!0},40)});function N_(){const n=Math.floor(Pt.pos.x),t=Math.floor(Pt.pos.z);for(let e=Math.ceil(Pt.pos.y+Pt.H);e<qt;e++)if(Ze(Yt(n,e,t)))return!0;return!1}const ya=[];let eu=performance.now();function F_(n){const t=Math.min((n-eu)/1e3,.05);eu=n,Ie.xr.isPresenting&&ya.push(t);const e=ua.update(t);if(zt.ready&&(zt.locked||Ie.xr.isPresenting)){const s=Bn.update(t);s.splash&&ze.sndSplash(),s.land!=null&&ze.sndLand(s.land),s.step!=null&&ze.sndStep(s.step)}if(Ie.xr.isPresenting?Oa.position.set(Pt.pos.x,Pt.pos.y,Pt.pos.z):(ke.position.set(Pt.pos.x,Pt.pos.y+Pt.EYE,Pt.pos.z),ke.rotation.set(Pt.pitch,Pt.yaw,0)),ke.getWorldPosition(ia),bi.updateSky(t),zt.ready){es.update(Pt.pos.x,Pt.pos.z);const s=of.update(t,Pt.pos);s.hit&&zt.locked&&(Bn.moveAxis("x",s.hit.dx*1.5),Bn.moveAxis("z",s.hit.dz*1.5),Pt.fly||(Pt.vel.y=3.5),ze.sndHit(),jc.style.display="block",clearTimeout(Jc),Jc=setTimeout(()=>{jc.style.display="none"},240));for(const o of s.poofs)Sa.spawn(o[0],o[1],o[2],5929554,14,2.5,2);Sa.update(t),C_.update(t),bi.tickWeather(t,Pt.pos),bi.updateRain(Pt.pos,t)}const i=zt.ready&&zt.locked?Bn.raycast():zt.ready&&e?e.hit:null;i?(qr.visible=!0,qr.position.set(i.x+.5,i.y+.5,i.z+.5)):qr.visible=!1,zt.ready&&e&&e.hit&&(e.doBreak?ff(e.hit)&&ua.pulse(.7,60):e.doPlace&&hf(e.hit,e.fwdX,e.fwdZ)&&ua.pulse(.4,40));const r=Yt(Math.floor(ia.x),Math.floor(ia.y),Math.floor(ia.z))===an;if(P_.style.display=r?"block":"none",sn.fog.near=r?4:rf,sn.fog.far=r?26:tl,ze.setMuffle(r),zt.curHeadWater=r,zt.curUnderground=!r&&N_(),zt.ready){const s=Math.floor(Pt.pos.x),o=Math.floor(Pt.pos.z);qu(s,0)&&(zt.curBiome=Qr(s,o,ju(s,o))),Ii.updateHUD(Pt,ze.isMusicOn())}if(!Ie.xr.isPresenting){const s=bn.clientWidth,o=bn.clientHeight;(bn.width!==(s*Ie.getPixelRatio()|0)||bn.height!==(o*Ie.getPixelRatio()|0))&&(Ie.setSize(s,o,!1),ke.aspect=s/o,ke.updateProjectionMatrix())}Ie.render(sn,ke)}const df=document.getElementById("btn-vr");navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported("immersive-vr").then(n=>{n&&(df.style.display="")}).catch(()=>{});df.addEventListener("click",async n=>{if(n.stopPropagation(),!(!zt.ready||Ie.xr.isPresenting)){ze.audioInit();try{const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor"]});Ie.xr.setReferenceSpaceType("local-floor"),await Ie.xr.setSession(t)}catch(t){Gn.textContent="✘ VR-Start fehlgeschlagen: "+t.message}}});Ie.xr.addEventListener("sessionstart",()=>{Ba.style.display="none",ya.length=0,es.setVRMode(!0)});Ie.xr.addEventListener("sessionend",()=>{es.setVRMode(!1),zn.saveLocal(),is=!1,ke.fov=72,ke.aspect=bn.clientWidth/bn.clientHeight,ke.updateProjectionMatrix(),Ba.style.display="flex";const n=ya.slice(Math.min(144,ya.length>>2));if(n.length>72){const t=n.reduce((r,s)=>r+s,0)/n.length,e=[...n].sort((r,s)=>s-r),i=e[Math.floor(e.length*.01)];Gn.textContent=`📊 VR: Ø ${(1/t).toFixed(1)} FPS · 1%-low ${(1/i).toFixed(1)} FPS · ${n.length} Frames`}});Ie.setAnimationLoop(F_);setTimeout(()=>{const n=zn.loadLocal();let t=null;n===!1&&(t=Math.random()*2**31|0,Yu(t)),el(n||null),setInterval(()=>{(is||document.pointerLockElement)&&(zn.saveLocal(),is=!1)},8e3),window.addEventListener("beforeunload",()=>zn.saveLocal()),zt.ready=!0,ur.textContent="▶ Klicken zum Spielen ◀",ur.classList.remove("busy"),Gn.textContent=n!==!1?"✔ Gespeicherte Welt geladen":"✔ Neue Welt (Seed "+t+")"},50);
