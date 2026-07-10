(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="160",cf=0,Jo=1,uf=2,Xc=1,ff=2,Pn=3,ii=0,ke=1,an=2,Jn=0,lr=1,So=2,Qo=3,tl=4,hf=5,mi=100,df=101,pf=102,el=103,nl=104,mf=200,gf=201,_f=202,vf=203,yo=204,Eo=205,xf=206,Mf=207,Sf=208,yf=209,Ef=210,Tf=211,Af=212,bf=213,wf=214,Rf=0,Cf=1,Lf=2,sa=3,Pf=4,Df=5,Uf=6,If=7,qc=0,Nf=1,Ff=2,Qn=0,Of=1,Bf=2,zf=3,Gf=4,Hf=5,Vf=6,Yc=300,hr=301,dr=302,To=303,Ao=304,_a=306,bo=1e3,mn=1001,wo=1002,ye=1003,il=1004,Fa=1005,nn=1006,kf=1007,Vr=1008,ti=1009,Wf=1010,Xf=1011,Oo=1012,Kc=1013,$n=1014,Zn=1015,kr=1016,$c=1017,Zc=1018,xi=1020,qf=1021,gn=1023,Yf=1024,Kf=1025,Mi=1026,pr=1027,$f=1028,jc=1029,Zf=1030,Jc=1031,Qc=1033,Oa=33776,Ba=33777,za=33778,Ga=33779,rl=35840,sl=35841,al=35842,ol=35843,tu=36196,ll=37492,cl=37496,ul=37808,fl=37809,hl=37810,dl=37811,pl=37812,ml=37813,gl=37814,_l=37815,vl=37816,xl=37817,Ml=37818,Sl=37819,yl=37820,El=37821,Ha=36492,Tl=36494,Al=36495,jf=36283,bl=36284,wl=36285,Rl=36286,eu=3e3,Si=3001,Jf=3200,Qf=3201,th=0,eh=1,on="",Ee="srgb",Bn="srgb-linear",Bo="display-p3",va="display-p3-linear",aa="linear",ne="srgb",oa="rec709",la="p3",Oi=7680,Cl=519,nh=512,ih=513,rh=514,nu=515,sh=516,ah=517,oh=518,lh=519,Ro=35044,iu=35048,Ll="300 es",Co=1035,In=2e3,ca=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Lo=180/Math.PI;function ei(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function ch(n,t){return(n%t+t)%t}function Va(n,t,e){return(1-e)*n+e*t}function Pl(n){return(n&n-1)===0&&n!==0}function Po(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,r,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],g=i[5],M=i[8],y=r[0],m=r[3],f=r[6],E=r[1],v=r[4],_=r[7],T=r[2],p=r[5],S=r[8];return s[0]=o*y+a*E+l*T,s[3]=o*m+a*v+l*p,s[6]=o*f+a*_+l*S,s[1]=c*y+u*E+h*T,s[4]=c*m+u*v+h*p,s[7]=c*f+u*_+h*S,s[2]=d*y+g*E+M*T,s[5]=d*m+g*v+M*p,s[8]=d*f+g*_+M*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,g=c*s-o*l,M=e*h+i*d+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return t[0]=h*y,t[1]=(r*c-u*i)*y,t[2]=(a*i-r*o)*y,t[3]=d*y,t[4]=(u*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=g*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Xt;function ru(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uh(){const n=ua("canvas");return n.style.display="block",n}const Dl={};function Or(n){n in Dl||(Dl[n]=!0,console.warn(n))}const Ul=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[Bn]:{transfer:aa,primaries:oa,toReference:n=>n,fromReference:n=>n},[Ee]:{transfer:ne,primaries:oa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[va]:{transfer:aa,primaries:la,toReference:n=>n.applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ul)},[Bo]:{transfer:ne,primaries:la,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ul).convertLinearToSRGB()}},fh=new Set([Bn,va]),jt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=fs[t].toReference,r=fs[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return fs[n].primaries},getTransfer:function(n){return n===on?aa:fs[n].transfer}};function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=ua("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cr(e[i]/255)*255):e[i]=cr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xa(r[o].image)):s.push(Xa(r[o]))}else s=Xa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class We extends vr{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=mn,r=mn,s=nn,o=Vr,a=gn,l=ti,c=We.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ei(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Si?Ee:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Si:eu}set encoding(t){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Si?Ee:on}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Yc;We.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],M=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(M-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(M+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(g+1)/2,T=(f+1)/2,p=(u+d)/4,S=(h+y)/4,P=(M+m)/4;return v>_&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=p/i,s=S/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=p/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=S/s,r=P/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-M)*(m-M)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-M)/E,this.y=(h-y)/E,this.z=(d-u)/E,this.w=Math.acos((c+g+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends vr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Si?Ee:on),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new We(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ou extends We{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends We{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],M=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=M,t[e+3]=y;return}if(h!==y||l!==d||c!==g||u!==M){let m=1-a;const f=l*d+c*g+u*M+h*y,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),p=Math.atan2(T,f*E);m=Math.sin(m*p)/T,a=Math.sin(a*p)/T}const _=a*E;if(l=l*m+d*_,c=c*m+g*_,u=u*m+M*_,h=h*m+y*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],g=s[o+2],M=s[o+3];return t[e]=a*M+u*h+l*g-c*d,t[e+1]=l*M+u*d+c*h-a*g,t[e+2]=c*M+u*g+a*d-l*h,t[e+3]=u*M-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*g*M,this._y=c*g*h-d*u*M,this._z=c*u*M+d*g*h,this._w=c*u*h-d*g*M;break;case"YXZ":this._x=d*u*h+c*g*M,this._y=c*g*h-d*u*M,this._z=c*u*M-d*g*h,this._w=c*u*h+d*g*M;break;case"ZXY":this._x=d*u*h-c*g*M,this._y=c*g*h+d*u*M,this._z=c*u*M+d*g*h,this._w=c*u*h-d*g*M;break;case"ZYX":this._x=d*u*h-c*g*M,this._y=c*g*h+d*u*M,this._z=c*u*M-d*g*h,this._w=c*u*h+d*g*M;break;case"YZX":this._x=d*u*h+c*g*M,this._y=c*g*h+d*u*M,this._z=c*u*M-d*g*h,this._w=c*u*h-d*g*M;break;case"XZY":this._x=d*u*h-c*g*M,this._y=c*g*h-d*u*M,this._z=c*u*M+d*g*h,this._w=c*u*h+d*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new G,Nl=new xr;class Ui{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),ds.subVectors(this.max,wr),zi.subVectors(t.a,wr),Gi.subVectors(t.b,wr),Hi.subVectors(t.c,wr),kn.subVectors(Gi,zi),Wn.subVectors(Hi,Gi),li.subVectors(zi,Hi);let e=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!Ya(e,zi,Gi,Hi,ds)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,zi,Gi,Hi,ds))?!1:(ps.crossVectors(kn,Wn),e=[ps.x,ps.y,ps.z],Ya(e,zi,Gi,Hi,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new G,new G,new G,new G,new G,new G,new G,new G],un=new G,hs=new Ui,zi=new G,Gi=new G,Hi=new G,kn=new G,Wn=new G,li=new G,wr=new G,ds=new G,ps=new G,ci=new G;function Ya(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ci.fromArray(n,s);const a=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gh=new Ui,Rr=new G,Ka=new G;class Ii{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Ka)),this.expandByPoint(Rr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new G,$a=new G,ms=new G,Xn=new G,Za=new G,gs=new G,ja=new G;class zo{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){$a.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub($a);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ms),a=Xn.dot(this.direction),l=-Xn.dot(ms),c=Xn.lengthSq(),u=Math.abs(1-o*o);let h,d,g,M;if(u>0)if(h=o*l-a,d=o*a-l,M=s*u,h>=0)if(d>=-M)if(d<=M){const y=1/u;h*=y,d*=y,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-M?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=M?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($a).addScaledVector(ms,d),g}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,i,r,s){Za.subVectors(e,t),gs.subVectors(i,t),ja.crossVectors(Za,gs);let o=this.direction.dot(ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const l=a*this.direction.dot(gs.crossVectors(Xn,gs));if(l<0)return null;const c=a*this.direction.dot(Za.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(ja);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,l,c,u,h,d,g,M,y,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,d,g,M,y,m)}set(t,e,i,r,s,o,a,l,c,u,h,d,g,M,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=M,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,g=o*h,M=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=g+M*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=M+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,g=l*h,M=c*u,y=c*h;e[0]=d+y*a,e[4]=M*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=g*a-M,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,g=l*h,M=c*u,y=c*h;e[0]=d-y*a,e[4]=-o*h,e[8]=M+g*a,e[1]=g+M*a,e[5]=o*u,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,g=o*h,M=a*u,y=a*h;e[0]=l*u,e[4]=M*c-g,e[8]=d*c+y,e[1]=l*h,e[5]=y*c+d,e[9]=g*c-M,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,M=a*l,y=a*c;e[0]=l*u,e[4]=y-d*h,e[8]=M*h+g,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*h+M,e[10]=d-y*h}else if(t.order==="XZY"){const d=o*l,g=o*c,M=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+y,e[5]=o*u,e[9]=g*h-M,e[2]=M*h-g,e[6]=a*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,i){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),qn.crossVectors(i,Ke),qn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),qn.crossVectors(i,Ke)),qn.normalize(),_s.crossVectors(Ke,qn),r[0]=qn.x,r[4]=_s.x,r[8]=Ke.x,r[1]=qn.y,r[5]=_s.y,r[9]=Ke.y,r[2]=qn.z,r[6]=_s.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],g=i[13],M=i[2],y=i[6],m=i[10],f=i[14],E=i[3],v=i[7],_=i[11],T=i[15],p=r[0],S=r[4],P=r[8],x=r[12],A=r[1],L=r[5],N=r[9],$=r[13],D=r[2],B=r[6],O=r[10],Y=r[14],H=r[3],z=r[7],k=r[11],K=r[15];return s[0]=o*p+a*A+l*D+c*H,s[4]=o*S+a*L+l*B+c*z,s[8]=o*P+a*N+l*O+c*k,s[12]=o*x+a*$+l*Y+c*K,s[1]=u*p+h*A+d*D+g*H,s[5]=u*S+h*L+d*B+g*z,s[9]=u*P+h*N+d*O+g*k,s[13]=u*x+h*$+d*Y+g*K,s[2]=M*p+y*A+m*D+f*H,s[6]=M*S+y*L+m*B+f*z,s[10]=M*P+y*N+m*O+f*k,s[14]=M*x+y*$+m*Y+f*K,s[3]=E*p+v*A+_*D+T*H,s[7]=E*S+v*L+_*B+T*z,s[11]=E*P+v*N+_*O+T*k,s[15]=E*x+v*$+_*Y+T*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],g=t[14],M=t[3],y=t[7],m=t[11],f=t[15];return M*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+y*(+e*l*g-e*c*d+s*o*d-r*o*g+r*c*u-s*l*u)+m*(+e*c*h-e*a*g-s*o*h+i*o*g+s*a*u-i*c*u)+f*(-r*a*u-e*l*h+e*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],g=t[11],M=t[12],y=t[13],m=t[14],f=t[15],E=h*m*c-y*d*c+y*l*g-a*m*g-h*l*f+a*d*f,v=M*d*c-u*m*c-M*l*g+o*m*g+u*l*f-o*d*f,_=u*y*c-M*h*c+M*a*g-o*y*g-u*a*f+o*h*f,T=M*h*l-u*y*l-M*a*d+o*y*d+u*a*m-o*h*m,p=e*E+i*v+r*_+s*T;if(p===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/p;return t[0]=E*S,t[1]=(y*d*s-h*m*s-y*r*g+i*m*g+h*r*f-i*d*f)*S,t[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*S,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*S,t[4]=v*S,t[5]=(u*m*s-M*d*s+M*r*g-e*m*g-u*r*f+e*d*f)*S,t[6]=(M*l*s-o*m*s-M*r*c+e*m*c+o*r*f-e*l*f)*S,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*g+e*l*g)*S,t[8]=_*S,t[9]=(M*h*s-u*y*s-M*i*g+e*y*g+u*i*f-e*h*f)*S,t[10]=(o*y*s-M*a*s+M*i*c-e*y*c-o*i*f+e*a*f)*S,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*g-e*a*g)*S,t[12]=T*S,t[13]=(u*y*r-M*h*r+M*i*d-e*y*d-u*i*m+e*h*m)*S,t[14]=(M*a*r-o*y*r-M*i*l+e*y*l+o*i*m-e*a*m)*S,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*d+e*a*d)*S,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,g=s*u,M=s*h,y=o*u,m=o*h,f=a*h,E=l*c,v=l*u,_=l*h,T=i.x,p=i.y,S=i.z;return r[0]=(1-(y+f))*T,r[1]=(g+_)*T,r[2]=(M-v)*T,r[3]=0,r[4]=(g-_)*p,r[5]=(1-(d+f))*p,r[6]=(m+E)*p,r[7]=0,r[8]=(M+v)*S,r[9]=(m-E)*S,r[10]=(1-(d+y))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const o=Vi.set(r[4],r[5],r[6]).length(),a=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const c=1/s,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=In){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let g,M;if(a===In)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===ca)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=In){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*c,g=(i+r)*u;let M,y;if(a===In)M=(o+s)*h,y=-2*h;else if(a===ca)M=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vi=new G,fn=new le,_h=new G(0,0,0),vh=new G(1,1,1),qn=new G,_s=new G,Ke=new G,Fl=new le,Ol=new xr;class xa{constructor(t=0,e=0,i=0,r=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const Bl=new G,ki=new xr,Rn=new le,vs=new G,Cr=new G,Mh=new G,Sh=new xr,zl=new G(1,0,0),Gl=new G(0,1,0),Hl=new G(0,0,1),yh={type:"added"},Eh={type:"removed"};class Te extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new G,e=new xa,i=new xr,r=new G(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vs.copy(t):vs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Cr,vs,this.up):Rn.lookAt(vs,Cr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Rn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),g=o(t.animations),M=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Te.DEFAULT_UP=new G(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new G,Cn=new G,Ja=new G,Ln=new G,Wi=new G,Xi=new G,Vl=new G,Qa=new G,to=new G,eo=new G;let xs=!1;class Ze{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Cn.subVectors(i,e),Ja.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Cn),l=hn.dot(Ja),c=Cn.dot(Cn),u=Cn.dot(Ja),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,M=(o*u-a*l)*d;return s.set(1-g-M,M,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,i,r,s,o,a,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Cn.subVectors(t,e),hn.cross(Cn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),hn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),Ze.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Wi.subVectors(r,i),Xi.subVectors(s,i),Qa.subVectors(t,i);const l=Wi.dot(Qa),c=Xi.dot(Qa);if(l<=0&&c<=0)return e.copy(i);to.subVectors(t,r);const u=Wi.dot(to),h=Xi.dot(to);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Wi,o);eo.subVectors(t,s);const g=Wi.dot(eo),M=Xi.dot(eo);if(M>=0&&g<=M)return e.copy(s);const y=g*c-l*M;if(y<=0&&c>=0&&M<=0)return a=c/(c-M),e.copy(i).addScaledVector(Xi,a);const m=u*M-g*h;if(m<=0&&h-u>=0&&g-M>=0)return Vl.subVectors(s,r),a=(h-u)/(h-u+(g-M)),e.copy(r).addScaledVector(Vl,a);const f=1/(m+y+d);return o=y*f,a=d*f,e.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function no(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=ch(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=no(o,s,t+1/3),this.g=no(o,s,t),this.b=no(o,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(He(Pe.r*255,0,255))*65536+Math.round(He(Pe.g*255,0,255))*256+Math.round(He(Pe.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Pe.copy(this),e);const i=Pe.r,r=Pe.g,s=Pe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,i=Pe.g,r=Pe.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Ms);const i=Va(Yn.h,Ms.h,e),r=Va(Yn.s,Ms.s,e),s=Va(Yn.l,Ms.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Bt;Bt.NAMES=cu;let Th=0;class Ni extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=lr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Eo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==Eo&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ln extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new G,Ss=new Kt;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ro,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Un(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}}class uu extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fu extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ze extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ah=0;const en=new le,io=new Te,qi=new G,$e=new Ui,Lr=new Ui,Se=new G;class Re extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?fu:uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors($e.min,Lr.min),$e.expandByPoint(Se),Se.addVectors($e.max,Lr.max),$e.expandByPoint(Se)):($e.expandByPoint(Lr.min),$e.expandByPoint(Lr.max))}$e.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Se.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),Se.add(qi)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new G,u[A]=new G;const h=new G,d=new G,g=new G,M=new Kt,y=new Kt,m=new Kt,f=new G,E=new G;function v(A,L,N){h.fromArray(r,A*3),d.fromArray(r,L*3),g.fromArray(r,N*3),M.fromArray(o,A*2),y.fromArray(o,L*2),m.fromArray(o,N*2),d.sub(h),g.sub(h),y.sub(M),m.sub(M);const $=1/(y.x*m.y-m.x*y.y);isFinite($)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar($),E.copy(g).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar($),c[A].add(f),c[L].add(f),c[N].add(f),u[A].add(E),u[L].add(E),u[N].add(E))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,L=_.length;A<L;++A){const N=_[A],$=N.start,D=N.count;for(let B=$,O=$+D;B<O;B+=3)v(i[B+0],i[B+1],i[B+2])}const T=new G,p=new G,S=new G,P=new G;function x(A){S.fromArray(s,A*3),P.copy(S);const L=c[A];T.copy(L),T.sub(S.multiplyScalar(S.dot(L))).normalize(),p.crossVectors(P,L);const $=p.dot(u[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=$}for(let A=0,L=_.length;A<L;++A){const N=_[A],$=N.start,D=N.count;for(let B=$,O=$+D;B<O;B+=3)x(i[B+0]),x(i[B+1]),x(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){const M=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,M=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*u;for(let f=0;f<u;f++)d[M++]=c[g++]}return new Xe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=t(d,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new le,ui=new zo,ys=new Ii,Wl=new G,Yi=new G,Ki=new G,$i=new G,ro=new G,Es=new G,Ts=new Kt,As=new Kt,bs=new Kt,Xl=new G,ql=new G,Yl=new G,ws=new G,Rs=new G;class Be extends Te{constructor(t=new Re,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ro.fromBufferAttribute(h,t),o?Es.addScaledVector(ro,u):Es.addScaledVector(ro.sub(e),u))}e.add(Es)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(ys.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ys,Wl)===null||ui.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(kl.copy(s).invert(),ui.copy(t.ray).applyMatrix4(kl),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,y=d.length;M<y;M++){const m=d[M],f=o[m.materialIndex],E=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let _=E,T=v;_<T;_+=3){const p=a.getX(_),S=a.getX(_+1),P=a.getX(_+2);r=Cs(this,f,t,i,c,u,h,p,S,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const M=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=M,f=y;m<f;m+=3){const E=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Cs(this,o,t,i,c,u,h,E,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,y=d.length;M<y;M++){const m=d[M],f=o[m.materialIndex],E=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let _=E,T=v;_<T;_+=3){const p=_,S=_+1,P=_+2;r=Cs(this,f,t,i,c,u,h,p,S,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const M=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=M,f=y;m<f;m+=3){const E=m,v=m+1,_=m+2;r=Cs(this,o,t,i,c,u,h,E,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function bh(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ii,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Yi),n.getVertexPosition(l,Ki),n.getVertexPosition(c,$i);const u=bh(n,t,e,i,Yi,Ki,$i,ws);if(u){r&&(Ts.fromBufferAttribute(r,a),As.fromBufferAttribute(r,l),bs.fromBufferAttribute(r,c),u.uv=Ze.getInterpolation(ws,Yi,Ki,$i,Ts,As,bs,new Kt)),s&&(Ts.fromBufferAttribute(s,a),As.fromBufferAttribute(s,l),bs.fromBufferAttribute(s,c),u.uv1=Ze.getInterpolation(ws,Yi,Ki,$i,Ts,As,bs,new Kt),u.uv2=u.uv1),o&&(Xl.fromBufferAttribute(o,a),ql.fromBufferAttribute(o,l),Yl.fromBufferAttribute(o,c),u.normal=Ze.getInterpolation(ws,Yi,Ki,$i,Xl,ql,Yl,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};Ze.getNormal(Yi,Ki,$i,h.normal),u.face=h}return u}class Vn extends Re{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;M("z","y","x",-1,-1,i,e,t,o,s,0),M("z","y","x",1,-1,i,e,-t,o,s,1),M("x","z","y",1,1,t,i,e,r,o,2),M("x","z","y",1,-1,t,i,-e,r,o,3),M("x","y","z",1,-1,t,e,i,r,s,4),M("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(h,2));function M(y,m,f,E,v,_,T,p,S,P,x){const A=_/S,L=T/P,N=_/2,$=T/2,D=p/2,B=S+1,O=P+1;let Y=0,H=0;const z=new G;for(let k=0;k<O;k++){const K=k*L-$;for(let V=0;V<B;V++){const I=V*A-N;z[y]=I*E,z[m]=K*v,z[f]=D,c.push(z.x,z.y,z.z),z[y]=0,z[m]=0,z[f]=p>0?1:-1,u.push(z.x,z.y,z.z),h.push(V/S),h.push(1-k/P),Y+=1}}for(let k=0;k<P;k++)for(let K=0;K<S;K++){const V=d+K+B*k,I=d+K+B*(k+1),Q=d+(K+1)+B*(k+1),rt=d+(K+1)+B*k;l.push(V,I,rt),l.push(I,Q,rt),H+=6}a.addGroup(g,H,x),g+=H,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const r in i)t[r]=i[r]}return t}function wh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hu(n){return n.getRenderTarget()===null?n.outputColorSpace:jt.workingColorSpace}const Rh={clone:mr,merge:Fe};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class du extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends du{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,ji=1;class Ph extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Zi,ji,t,e);r.layers=this.layers,this.add(r);const s=new rn(Zi,ji,t,e);s.layers=this.layers,this.add(s);const o=new rn(Zi,ji,t,e);o.layers=this.layers,this.add(o);const a=new rn(Zi,ji,t,e);a.layers=this.layers,this.add(a);const l=new rn(Zi,ji,t,e);l.layers=this.layers,this.add(l);const c=new rn(Zi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,g),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class pu extends We{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dh extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Si?Ee:on),this.texture=new pu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vn(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Jn});s.uniforms.tEquirect.value=e;const o=new Be(r,s),a=e.minFilter;return e.minFilter===Vr&&(e.minFilter=nn),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const so=new G,Uh=new G,Ih=new Xt;class hi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=so.subVectors(i,e).cross(Uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(so),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ih.getNormalMatrix(t),r=this.coplanarPoint(so).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ii,Ls=new G;class mu{constructor(t=new hi,e=new hi,i=new hi,r=new hi,s=new hi,o=new hi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],g=r[8],M=r[9],y=r[10],m=r[11],f=r[12],E=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,m-g,_-f).normalize(),i[1].setComponents(l+s,d+c,m+g,_+f).normalize(),i[2].setComponents(l+o,d+u,m+M,_+E).normalize(),i[3].setComponents(l-o,d-u,m-M,_-E).normalize(),i[4].setComponents(l-a,d-h,m-y,_-v).normalize(),e===In)i[5].setComponents(l+a,d+h,m+y,_+v).normalize();else if(e===ca)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ls.x=r.normal.x>0?t.max.x:t.min.x,Ls.y=r.normal.y>0?t.max.y:t.min.y,Ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gu(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Nh(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,g=h.byteLength,M=n.createBuffer();n.bindBuffer(u,M),n.bufferData(u,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:M,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,u,h){const d=u.array,g=u._updateRange,M=u.updateRanges;if(n.bindBuffer(h,c),g.count===-1&&M.length===0&&n.bufferSubData(h,0,d),M.length!==0){for(let y=0,m=M.length;y<m;y++){const f=M[y];e?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}g.count!==-1&&(e?n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Wr extends Re{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,g=[],M=[],y=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let v=0;v<c;v++){const _=v*h-s;M.push(_,-E,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const v=E+c*f,_=E+c*(f+1),T=E+1+c*(f+1),p=E+1+c*f;g.push(v,_,p),g.push(_,T,p)}this.setIndex(g),this.setAttribute("position",new ze(M,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`
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
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Nd=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,om=`#define TOON
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
}`,lm=`#define TOON
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
}`,cm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Fh,alphahash_pars_fragment:Oh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:Gh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:kh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:Kh,iridescence_fragment:$h,bumpmap_pars_fragment:Zh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:rd,common:sd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:ud,emissivemap_pars_fragment:fd,colorspace_fragment:hd,colorspace_pars_fragment:dd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Cd,envmap_vertex:vd,fog_vertex:xd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:yd,gradientmap_pars_fragment:Ed,lightmap_fragment:Td,lightmap_pars_fragment:Ad,lights_lambert_fragment:bd,lights_lambert_pars_fragment:wd,lights_pars_begin:Rd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Pd,lights_phong_fragment:Dd,lights_phong_pars_fragment:Ud,lights_physical_fragment:Id,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:kd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Kd,morphcolor_vertex:$d,morphnormal_vertex:Zd,morphtarget_pars_vertex:jd,morphtarget_vertex:Jd,normal_fragment_begin:Qd,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:up,premultiplied_alpha_fragment:fp,project_vertex:hp,dithering_fragment:dp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:vp,shadowmap_vertex:xp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:yp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Lp,uv_pars_fragment:Pp,uv_pars_vertex:Dp,uv_vertex:Up,worldpos_vertex:Ip,background_vert:Np,background_frag:Fp,backgroundCube_vert:Op,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Gp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:kp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Kp,meshbasic_vert:$p,meshbasic_frag:Zp,meshlambert_vert:jp,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:um,shadow_vert:fm,shadow_frag:hm,sprite_vert:dm,sprite_frag:pm},gt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},xn={basic:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Fe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Fe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Fe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Fe([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Fe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Fe([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Fe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Fe([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Fe([gt.common,gt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Fe([gt.lights,gt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};xn.physical={uniforms:Fe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ps={r:0,b:0,g:0};function mm(n,t,e,i,r,s,o){const a=new Bt(0);let l=s===!0?0:1,c,u,h=null,d=0,g=null;function M(m,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),E=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_a)?(u===void 0&&(u=new Be(new Vn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:mr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,p,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,(h!==v||d!==v.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Be(new Wr(2,2),new Ai({name:"BackgroundMaterial",uniforms:mr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(Ps,hu(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:M}}function gm(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,B,O,Y,H){let z=!1;if(o){const k=y(Y,O,B);c!==k&&(c=k,g(c.object)),z=f(D,Y,O,H),z&&E(D,Y,O,H)}else{const k=B.wireframe===!0;(c.geometry!==Y.id||c.program!==O.id||c.wireframe!==k)&&(c.geometry=Y.id,c.program=O.id,c.wireframe=k,z=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,P(D,B,O,Y),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function M(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,B,O){const Y=O.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let z=H[B.id];z===void 0&&(z={},H[B.id]=z);let k=z[Y];return k===void 0&&(k=m(d()),z[Y]=k),k}function m(D){const B=[],O=[],Y=[];for(let H=0;H<r;H++)B[H]=0,O[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,B,O,Y){const H=c.attributes,z=B.attributes;let k=0;const K=O.getAttributes();for(const V in K)if(K[V].location>=0){const Q=H[V];let rt=z[V];if(rt===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;k++}return c.attributesNum!==k||c.index!==Y}function E(D,B,O,Y){const H={},z=B.attributes;let k=0;const K=O.getAttributes();for(const V in K)if(K[V].location>=0){let Q=z[V];Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),H[V]=rt,k++}c.attributes=H,c.attributesNum=k,c.index=Y}function v(){const D=c.newAttributes;for(let B=0,O=D.length;B<O;B++)D[B]=0}function _(D){T(D,0)}function T(D,B){const O=c.newAttributes,Y=c.enabledAttributes,H=c.attributeDivisors;O[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),H[D]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),H[D]=B)}function p(){const D=c.newAttributes,B=c.enabledAttributes;for(let O=0,Y=B.length;O<Y;O++)B[O]!==D[O]&&(n.disableVertexAttribArray(O),B[O]=0)}function S(D,B,O,Y,H,z,k){k===!0?n.vertexAttribIPointer(D,B,O,H,z):n.vertexAttribPointer(D,B,O,Y,H,z)}function P(D,B,O,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const H=Y.attributes,z=O.getAttributes(),k=B.defaultAttributeValues;for(const K in z){const V=z[K];if(V.location>=0){let I=H[K];if(I===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){const Q=I.normalized,rt=I.itemSize,ht=e.get(I);if(ht===void 0)continue;const dt=ht.buffer,ft=ht.type,Z=ht.bytesPerElement,U=i.isWebGL2===!0&&(ft===n.INT||ft===n.UNSIGNED_INT||I.gpuType===Kc);if(I.isInterleavedBufferAttribute){const q=I.data,C=q.stride,nt=I.offset;if(q.isInstancedInterleavedBuffer){for(let X=0;X<V.locationSize;X++)T(V.location+X,q.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let X=0;X<V.locationSize;X++)_(V.location+X);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let X=0;X<V.locationSize;X++)S(V.location+X,rt/V.locationSize,ft,Q,C*Z,(nt+rt/V.locationSize*X)*Z,U)}else{if(I.isInstancedBufferAttribute){for(let q=0;q<V.locationSize;q++)T(V.location+q,I.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let q=0;q<V.locationSize;q++)_(V.location+q);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let q=0;q<V.locationSize;q++)S(V.location+q,rt/V.locationSize,ft,Q,rt*Z,rt/V.locationSize*q*Z,U)}}else if(k!==void 0){const Q=k[K];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(V.location,Q);break;case 3:n.vertexAttrib3fv(V.location,Q);break;case 4:n.vertexAttrib4fv(V.location,Q);break;default:n.vertexAttrib1fv(V.location,Q)}}}}p()}function x(){N();for(const D in a){const B=a[D];for(const O in B){const Y=B[O];for(const H in Y)M(Y[H].object),delete Y[H];delete B[O]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const O in B){const Y=B[O];for(const H in Y)M(Y[H].object),delete Y[H];delete B[O]}delete a[D.id]}function L(D){for(const B in a){const O=a[B];if(O[D.id]===void 0)continue;const Y=O[D.id];for(const H in Y)M(Y[H].object),delete Y[H];delete O[D.id]}}function N(){$(),u=!0,c!==l&&(c=l,g(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:_,disableUnusedAttributes:p}}function _m(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let g,M;if(r)g=n,M="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[M](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<d;M++)this.render(u[M],h[M]);else{g.multiDrawArraysWEBGL(s,u,0,h,0,d);let M=0;for(let y=0;y<d;y++)M+=h[y];e.update(M,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function vm(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=o||t.has("OES_texture_float"),T=v&&_,p=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:p}}function xm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new hi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,g){const M=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||M===null||M.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,v=E*4;let _=f.clippingState||null;l.value=_,_=u(M,d,v,g);for(let T=0;T!==v;++T)_[T]=e[T];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,g,M){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,M!==!0||m===null){const f=g+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=g;v!==y;++v,_+=4)o.copy(h[v]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Mm(n){let t=new WeakMap;function e(o,a){return a===To?o.mapping=hr:a===Ao&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dh(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Sm extends du{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,Kl=[.125,.215,.35,.446,.526,.582],gi=20,ao=new Sm,$l=new Bt;let oo=null,lo=0,co=0;const di=(1+Math.sqrt(5))/2,Ji=1/di,Zl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,di,Ji),new G(0,di,-Ji),new G(Ji,0,di),new G(-Ji,0,di),new G(di,Ji,0),new G(-di,Ji,0)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,lo,co),t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:kr,format:gn,colorSpace:Bn,depthBuffer:!1},r=Jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(s)),this._blurMaterial=Em(s,t,e)}return r}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,i,r){const a=new rn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($l),u.toneMapping=Qn,u.autoClear=!1;const g=new ln({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),M=new Be(new Vn,g);let y=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,y=!0):(g.color.copy($l),y=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Ds(r,E*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(M,a),u.render(t,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===hr||t.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ao)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zl[(r-1)%Zl.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Be(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*gi-1),y=s/M,m=isFinite(s)?1+Math.floor(u*y):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let E=0;for(let S=0;S<gi;++S){const P=S/y,x=Math.exp(-P*P/2);f.push(x),S===0?E+=x:S<m&&(E+=2*x)}for(let S=0;S<f.length;S++)f[S]=f[S]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=M,d.mipInt.value=v-i;const _=this._sizeLods[r],T=3*_*(r>v-sr?r-v+sr:0),p=4*(this._cubeSize-_);Ds(e,T,p,3*_,2*_),l.setRenderTarget(e),l.render(h,ao)}}function ym(n){const t=[],e=[],i=[];let r=n;const s=n-sr+1+Kl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-sr?l=Kl[o-n+sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,M=6,y=3,m=2,f=1,E=new Float32Array(y*M*g),v=new Float32Array(m*M*g),_=new Float32Array(f*M*g);for(let p=0;p<g;p++){const S=p%3*2/3-1,P=p>2?0:-1,x=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];E.set(x,y*M*p),v.set(d,m*M*p);const A=[p,p,p,p,p,p];_.set(A,f*M*p)}const T=new Re;T.setAttribute("position",new Xe(E,y)),T.setAttribute("uv",new Xe(v,m)),T.setAttribute("faceIndex",new Xe(_,f)),t.push(T),r>sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jl(n,t,e){const i=new Ti(n,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Em(n,t,e){const i=new Float32Array(gi),r=new G(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function tc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function Tm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===To||l===Ao,u=l===hr||l===dr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new jl(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new jl(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Am(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bm(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const M in d.attributes)t.remove(d.attributes[M]);for(const M in d.morphAttributes){const y=d.morphAttributes[M];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(t.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const M in d)t.update(d[M],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const M in g){const y=g[M];for(let m=0,f=y.length;m<f;m++)t.update(y[m],n.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,M=h.attributes.position;let y=0;if(g!==null){const E=g.array;y=g.version;for(let v=0,_=E.length;v<_;v+=3){const T=E[v+0],p=E[v+1],S=E[v+2];d.push(T,p,p,S,S,T)}}else if(M!==void 0){const E=M.array;y=M.version;for(let v=0,_=E.length/3-1;v<_;v+=3){const T=v+0,p=v+1,S=v+2;d.push(T,p,p,S,S,T)}}else return;const m=new(ru(d)?fu:uu)(d,1);m.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wm(n,t,e,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,M){n.drawElements(s,M,a,g*l),e.update(M,s,1)}function h(g,M,y){if(y===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,M,a,g*l,y),e.update(M,s,y)}function d(g,M,y){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(g[f]/l,M[f]);else{m.multiDrawElementsWEBGL(s,M,0,a,g,0,y);let f=0;for(let E=0;E<y;E++)f+=M[E];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Rm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Cm(n,t){return n[0]-t[0]}function Lm(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Pm(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const M=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=M!==void 0?M.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let B=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var g=B;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,p=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),_===!0&&(x=2),T===!0&&(x=3);let A=u.attributes.position.count*x,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const N=new Float32Array(A*L*4*y),$=new ou(N,A,L,y);$.type=Zn,$.needsUpdate=!0;const D=x*4;for(let O=0;O<y;O++){const Y=p[O],H=S[O],z=P[O],k=A*L*4*O;for(let K=0;K<Y.count;K++){const V=K*D;v===!0&&(o.fromBufferAttribute(Y,K),N[k+V+0]=o.x,N[k+V+1]=o.y,N[k+V+2]=o.z,N[k+V+3]=0),_===!0&&(o.fromBufferAttribute(H,K),N[k+V+4]=o.x,N[k+V+5]=o.y,N[k+V+6]=o.z,N[k+V+7]=0),T===!0&&(o.fromBufferAttribute(z,K),N[k+V+8]=o.x,N[k+V+9]=o.y,N[k+V+10]=o.z,N[k+V+11]=z.itemSize===4?o.w:1)}}m={count:y,texture:$,size:new Kt(A,L)},s.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const M=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==M){y=[];for(let _=0;_<M;_++)y[_]=[_,0];i[u.id]=y}for(let _=0;_<M;_++){const T=y[_];T[0]=_,T[1]=d[_]}y.sort(Lm);for(let _=0;_<8;_++)_<M&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Cm);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let _=0;_<8;_++){const T=a[_],p=T[0],S=T[1];p!==Number.MAX_SAFE_INTEGER&&S?(m&&u.getAttribute("morphTarget"+_)!==m[p]&&u.setAttribute("morphTarget"+_,m[p]),f&&u.getAttribute("morphNormal"+_)!==f[p]&&u.setAttribute("morphNormal"+_,f[p]),r[_]=S,E+=S):(m&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const v=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Dm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class _u extends We{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mi&&(i=$n),i===void 0&&u===pr&&(i=xi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vu=new We,xu=new _u(1,1);xu.compareFunction=nu;const Mu=new ou,Su=new mh,yu=new pu,ec=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function Mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ec[r];if(s===void 0&&(s=new Float32Array(r),ec[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ma(n,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Um(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Om(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),ve(e,i)}}function Bm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;rc.set(i),n.uniformMatrix3fv(this.addr,!1,rc),ve(e,i)}}function zm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),ve(e,i)}}function Gm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function Wm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function Ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function Km(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?xu:vu;e.setTexture2D(t||s,r)}function $m(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Su,r)}function Zm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||yu,r)}function jm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Mu,r)}function Jm(n){switch(n){case 5126:return Um;case 35664:return Im;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return km;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return jm}}function Qm(n,t){n.uniform1fv(this.addr,t)}function t0(n,t){const e=Mr(t,this.size,2);n.uniform2fv(this.addr,e)}function e0(n,t){const e=Mr(t,this.size,3);n.uniform3fv(this.addr,e)}function n0(n,t){const e=Mr(t,this.size,4);n.uniform4fv(this.addr,e)}function i0(n,t){const e=Mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r0(n,t){const e=Mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function s0(n,t){const e=Mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function a0(n,t){n.uniform1iv(this.addr,t)}function o0(n,t){n.uniform2iv(this.addr,t)}function l0(n,t){n.uniform3iv(this.addr,t)}function c0(n,t){n.uniform4iv(this.addr,t)}function u0(n,t){n.uniform1uiv(this.addr,t)}function f0(n,t){n.uniform2uiv(this.addr,t)}function h0(n,t){n.uniform3uiv(this.addr,t)}function d0(n,t){n.uniform4uiv(this.addr,t)}function p0(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vu,s[o])}function m0(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Su,s[o])}function g0(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||yu,s[o])}function _0(n,t,e){const i=this.cache,r=t.length,s=Ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Mu,s[o])}function v0(n){switch(n){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return f0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}class x0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jm(e.type)}}class M0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}}class S0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function ac(n,t){n.seq.push(t),n.map[t.id]=t}function y0(n,t,e){const i=n.name,r=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),o=uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ac(e,c===void 0?new x0(a,n,t):new M0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new S0(a),ac(e,h)),e=h}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);y0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const E0=37297;let T0=0;function A0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function b0(n){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(n);let i;switch(t===e?i="":t===la&&e===oa?i="LinearDisplayP3ToLinearSRGB":t===oa&&e===la&&(i="LinearSRGBToLinearDisplayP3"),n){case Bn:case va:return[i,"LinearTransferOETF"];case Ee:case Bo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+A0(n.getShaderSource(t),o)}else return r}function w0(n,t){const e=b0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function R0(n,t){let e;switch(t){case Of:e="Linear";break;case Bf:e="Reinhard";break;case zf:e="OptimizedCineon";break;case Gf:e="ACESFilmic";break;case Vf:e="AgX";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function C0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function L0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ar).join(`
`)}function P0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function D0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ar(n){return n!==""}function cc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(U0,N0)}const I0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N0(n,t){let e=Gt[t];if(e===void 0){const i=I0.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(F0,O0)}function O0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ff?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function z0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case dr:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function H0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Ff:t="ENVMAP_BLENDING_ADD";break}return t}function V0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function k0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=B0(e),c=z0(e),u=G0(e),h=H0(e),d=V0(e),g=e.isWebGL2?"":C0(e),M=L0(e),y=P0(s),m=r.createProgram();let f,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ar).join(`
`),f.length>0&&(f+=`
`),E=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ar).join(`
`),E.length>0&&(E+=`
`)):(f=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),E=[g,hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?R0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,w0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=Do(o),o=cc(o,e),o=uc(o,e),a=Do(a),a=cc(a,e),a=uc(a,e),o=fc(o),a=fc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const _=v+f+o,T=v+E+a,p=oc(r,r.VERTEX_SHADER,_),S=oc(r,r.FRAGMENT_SHADER,T);r.attachShader(m,p),r.attachShader(m,S),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(N){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(p).trim(),B=r.getShaderInfoLog(S).trim();let O=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,p,S);else{const H=lc(r,p,"vertex"),z=lc(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+H+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||B==="")&&(Y=!1);Y&&(N.diagnostics={runnable:O,programLog:$,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:E}})}r.deleteShader(p),r.deleteShader(S),x=new ta(r,m),A=D0(r,m)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(m,E0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=p,this.fragmentShader=S,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new q0(t),e.set(t,i)),i}}class q0{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}}function Y0(n,t,e,i,r,s,o){const a=new lu,l=new X0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function m(x,A,L,N,$){const D=N.fog,B=$.geometry,O=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||O),H=Y&&Y.mapping===_a?Y.image.height:null,z=M[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=k!==void 0?k.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let I,Q,rt,ht;if(z){const Ue=xn[z];I=Ue.vertexShader,Q=Ue.fragmentShader}else I=x.vertexShader,Q=x.fragmentShader,l.update(x),rt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const dt=n.getRenderTarget(),ft=$.isInstancedMesh===!0,Z=$.isBatchedMesh===!0,U=!!x.map,q=!!x.matcap,C=!!Y,nt=!!x.aoMap,X=!!x.lightMap,it=!!x.bumpMap,st=!!x.normalMap,Tt=!!x.displacementMap,St=!!x.emissiveMap,R=!!x.metalnessMap,b=!!x.roughnessMap,j=x.anisotropy>0,ct=x.clearcoat>0,lt=x.iridescence>0,at=x.sheen>0,_t=x.transmission>0,pt=j&&!!x.anisotropyMap,Mt=ct&&!!x.clearcoatMap,At=ct&&!!x.clearcoatNormalMap,Nt=ct&&!!x.clearcoatRoughnessMap,ut=lt&&!!x.iridescenceMap,Zt=lt&&!!x.iridescenceThicknessMap,qt=at&&!!x.sheenColorMap,It=at&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,Et=!!x.specularColorMap,zt=!!x.specularIntensityMap,$t=_t&&!!x.transmissionMap,ce=_t&&!!x.thicknessMap,kt=!!x.gradientMap,mt=!!x.alphaMap,F=x.alphaTest>0,vt=!!x.alphaHash,xt=!!x.extensions,Pt=!!B.attributes.uv1,Ct=!!B.attributes.uv2,Qt=!!B.attributes.uv3;let te=Qn;return x.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:u,shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:I,fragmentShader:Q,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Z,instancing:ft,instancingColor:ft&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Bn,map:U,matcap:q,envMap:C,envMapMode:C&&Y.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:X,bumpMap:it,normalMap:st,displacementMap:d&&Tt,emissiveMap:St,normalMapObjectSpace:st&&x.normalMapType===eh,normalMapTangentSpace:st&&x.normalMapType===th,metalnessMap:R,roughnessMap:b,anisotropy:j,anisotropyMap:pt,clearcoat:ct,clearcoatMap:Mt,clearcoatNormalMap:At,clearcoatRoughnessMap:Nt,iridescence:lt,iridescenceMap:ut,iridescenceThicknessMap:Zt,sheen:at,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:Et,specularIntensityMap:zt,transmission:_t,transmissionMap:$t,thicknessMap:ce,gradientMap:kt,opaque:x.transparent===!1&&x.blending===lr,alphaMap:mt,alphaTest:F,alphaHash:vt,combine:x.combine,mapUv:U&&y(x.map.channel),aoMapUv:nt&&y(x.aoMap.channel),lightMapUv:X&&y(x.lightMap.channel),bumpMapUv:it&&y(x.bumpMap.channel),normalMapUv:st&&y(x.normalMap.channel),displacementMapUv:Tt&&y(x.displacementMap.channel),emissiveMapUv:St&&y(x.emissiveMap.channel),metalnessMapUv:R&&y(x.metalnessMap.channel),roughnessMapUv:b&&y(x.roughnessMap.channel),anisotropyMapUv:pt&&y(x.anisotropyMap.channel),clearcoatMapUv:Mt&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:At&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(x.sheenRoughnessMap.channel),specularMapUv:Rt&&y(x.specularMap.channel),specularColorMapUv:Et&&y(x.specularColorMap.channel),specularIntensityMapUv:zt&&y(x.specularIntensityMap.channel),transmissionMapUv:$t&&y(x.transmissionMap.channel),thicknessMapUv:ce&&y(x.thicknessMap.channel),alphaMapUv:mt&&y(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(st||j),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Ct,vertexUv3s:Qt,pointsUvs:$.isPoints===!0&&!!B.attributes.uv&&(U||mt),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:V,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:U&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:xt&&x.extensions.derivatives===!0,extensionFragDepth:xt&&x.extensions.fragDepth===!0,extensionDrawBuffers:xt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(E(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function E(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function _(x){const A=M[x.type];let L;if(A){const N=xn[A];L=Rh.clone(N.uniforms)}else L=x.uniforms;return L}function T(x,A){let L;for(let N=0,$=c.length;N<$;N++){const D=c[N];if(D.cacheKey===A){L=D,++L.usedTimes;break}}return L===void 0&&(L=new k0(n,A,x,s),c.push(L)),L}function p(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:p,releaseShaderCache:S,programs:c,dispose:P}}function K0(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function $0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function dc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,g,M,y,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:M,renderOrder:h.renderOrder,z:y,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=M,f.renderOrder=h.renderOrder,f.z=y,f.group=m),t++,f}function a(h,d,g,M,y,m){const f=o(h,d,g,M,y,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):e.push(f)}function l(h,d,g,M,y,m){const f=o(h,d,g,M,y,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||$0),i.length>1&&i.sort(d||dc),r.length>1&&r.sort(d||dc)}function u(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Z0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new pc,n.set(i,[o])):r>=s.length?(o=new pc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function j0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Bt};break;case"SpotLight":e={position:new G,direction:new G,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function J0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Q0=0;function tg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eg(n,t){const e=new j0,i=J0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new le,a=new le;function l(u,h){let d=0,g=0,M=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,m=0,f=0,E=0,v=0,_=0,T=0,p=0,S=0,P=0,x=0;u.sort(tg);const A=h===!0?Math.PI:1;for(let N=0,$=u.length;N<$;N++){const D=u[N],B=D.color,O=D.intensity,Y=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*O*A,g+=B.g*O*A,M+=B.b*O*A;else if(D.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(D.sh.coefficients[z],O);x++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const k=D.shadow,K=i.get(D);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=D.shadow.matrix,_++}r.directional[y]=z,y++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(B).multiplyScalar(O*A),z.distance=Y,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,r.spot[f]=z;const k=D.shadow;if(D.map&&(r.spotLightMap[S]=D.map,S++,k.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[f]=k.matrix,D.castShadow){const K=i.get(D);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=H,p++}f++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=z,E++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*A),z.distance=D.distance,z.decay=D.decay,D.castShadow){const k=D.shadow,K=i.get(D);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=D.shadow.matrix,T++}r.point[m]=z,m++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(O*A),z.groundColor.copy(D.groundColor).multiplyScalar(O*A),r.hemi[v]=z,v++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_FLOAT_1,r.rectAreaLTC2=gt.LTC_FLOAT_2):(r.rectAreaLTC1=gt.LTC_HALF_1,r.rectAreaLTC2=gt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_FLOAT_1,r.rectAreaLTC2=gt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=gt.LTC_HALF_1,r.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=M;const L=r.hash;(L.directionalLength!==y||L.pointLength!==m||L.spotLength!==f||L.rectAreaLength!==E||L.hemiLength!==v||L.numDirectionalShadows!==_||L.numPointShadows!==T||L.numSpotShadows!==p||L.numSpotMaps!==S||L.numLightProbes!==x)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=p,r.spotShadowMap.length=p,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=p+S-P,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=x,L.directionalLength=y,L.pointLength=m,L.spotLength=f,L.rectAreaLength=E,L.hemiLength=v,L.numDirectionalShadows=_,L.numPointShadows=T,L.numSpotShadows=p,L.numSpotMaps=S,L.numLightProbes=x,r.version=Q0++)}function c(u,h){let d=0,g=0,M=0,y=0,m=0;const f=h.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const _=u[E];if(_.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(_.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),M++}else if(_.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(_.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),g++}else if(_.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function mc(n,t){const e=new eg(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ng(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new mc(n,t),e.set(s,[l])):o>=a.length?(l=new mc(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class ig extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(n,t,e){let i=new mu;const r=new Kt,s=new Kt,o=new we,a=new ig({depthPacking:Qf}),l=new rg,c={},u=e.maxTextureSize,h={[ii]:ke,[ke]:ii,[an]:an},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:sg,fragmentShader:ag}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const M=new Re;M.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Be(M,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let f=this.type;this.render=function(p,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||p.length===0)return;const x=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Jn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const $=f!==Pn&&this.type===Pn,D=f===Pn&&this.type!==Pn;for(let B=0,O=p.length;B<O;B++){const Y=p[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const z=H.getFrameExtents();if(r.multiply(z),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,H.mapSize.y=s.y)),H.map===null||$===!0||D===!0){const K=this.type!==Pn?{minFilter:ye,magFilter:ye}:{};H.map!==null&&H.map.dispose(),H.map=new Ti(r.x,r.y,K),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const k=H.getViewportCount();for(let K=0;K<k;K++){const V=H.getViewport(K);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),N.viewport(o),H.updateMatrices(Y,K),i=H.getFrustum(),_(S,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&E(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,A,L)};function E(p,S){const P=t.update(y);d.defines.VSM_SAMPLES!==p.blurSamples&&(d.defines.VSM_SAMPLES=p.blurSamples,g.defines.VSM_SAMPLES=p.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new Ti(r.x,r.y)),d.uniforms.shadow_pass.value=p.map.texture,d.uniforms.resolution.value=p.mapSize,d.uniforms.radius.value=p.radius,n.setRenderTarget(p.mapPass),n.clear(),n.renderBufferDirect(S,null,P,d,y,null),g.uniforms.shadow_pass.value=p.mapPass.texture,g.uniforms.resolution.value=p.mapSize,g.uniforms.radius.value=p.radius,n.setRenderTarget(p.map),n.clear(),n.renderBufferDirect(S,null,P,g,y,null)}function v(p,S,P,x){let A=null;const L=P.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(L!==void 0)A=L;else if(A=P.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=A.uuid,$=S.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let B=D[$];B===void 0&&(B=A.clone(),D[$]=B,S.addEventListener("dispose",T)),A=B}if(A.visible=S.visible,A.wireframe=S.wireframe,x===Pn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:h[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const N=n.properties.get(A);N.light=P}return A}function _(p,S,P,x,A){if(p.visible===!1)return;if(p.layers.test(S.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&A===Pn)&&(!p.frustumCulled||i.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,p.matrixWorld);const $=t.update(p),D=p.material;if(Array.isArray(D)){const B=$.groups;for(let O=0,Y=B.length;O<Y;O++){const H=B[O],z=D[H.materialIndex];if(z&&z.visible){const k=v(p,z,x,A);p.onBeforeShadow(n,p,S,P,$,k,H),n.renderBufferDirect(P,null,$,k,p,H),p.onAfterShadow(n,p,S,P,$,k,H)}}}else if(D.visible){const B=v(p,D,x,A);p.onBeforeShadow(n,p,S,P,$,B,null),n.renderBufferDirect(P,null,$,B,p,null),p.onAfterShadow(n,p,S,P,$,B,null)}}const N=p.children;for(let $=0,D=N.length;$<D;$++)_(N[$],S,P,x,A)}function T(p){p.target.removeEventListener("dispose",T);for(const P in c){const x=c[P],A=p.target.uuid;A in x&&(x[A].dispose(),delete x[A])}}}function lg(n,t,e){const i=e.isWebGL2;function r(){let F=!1;const vt=new we;let xt=null;const Pt=new we(0,0,0,0);return{setMask:function(Ct){xt!==Ct&&!F&&(n.colorMask(Ct,Ct,Ct,Ct),xt=Ct)},setLocked:function(Ct){F=Ct},setClear:function(Ct,Qt,te,xe,Ue){Ue===!0&&(Ct*=xe,Qt*=xe,te*=xe),vt.set(Ct,Qt,te,xe),Pt.equals(vt)===!1&&(n.clearColor(Ct,Qt,te,xe),Pt.copy(vt))},reset:function(){F=!1,xt=null,Pt.set(-1,0,0,0)}}}function s(){let F=!1,vt=null,xt=null,Pt=null;return{setTest:function(Ct){Ct?Z(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Ct){vt!==Ct&&!F&&(n.depthMask(Ct),vt=Ct)},setFunc:function(Ct){if(xt!==Ct){switch(Ct){case Rf:n.depthFunc(n.NEVER);break;case Cf:n.depthFunc(n.ALWAYS);break;case Lf:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case Pf:n.depthFunc(n.EQUAL);break;case Df:n.depthFunc(n.GEQUAL);break;case Uf:n.depthFunc(n.GREATER);break;case If:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ct}},setLocked:function(Ct){F=Ct},setClear:function(Ct){Pt!==Ct&&(n.clearDepth(Ct),Pt=Ct)},reset:function(){F=!1,vt=null,xt=null,Pt=null}}}function o(){let F=!1,vt=null,xt=null,Pt=null,Ct=null,Qt=null,te=null,xe=null,Ue=null;return{setTest:function(ee){F||(ee?Z(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(ee){vt!==ee&&!F&&(n.stencilMask(ee),vt=ee)},setFunc:function(ee,Ie,vn){(xt!==ee||Pt!==Ie||Ct!==vn)&&(n.stencilFunc(ee,Ie,vn),xt=ee,Pt=Ie,Ct=vn)},setOp:function(ee,Ie,vn){(Qt!==ee||te!==Ie||xe!==vn)&&(n.stencilOp(ee,Ie,vn),Qt=ee,te=Ie,xe=vn)},setLocked:function(ee){F=ee},setClear:function(ee){Ue!==ee&&(n.clearStencil(ee),Ue=ee)},reset:function(){F=!1,vt=null,xt=null,Pt=null,Ct=null,Qt=null,te=null,xe=null,Ue=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},g={},M=new WeakMap,y=[],m=null,f=!1,E=null,v=null,_=null,T=null,p=null,S=null,P=null,x=new Bt(0,0,0),A=0,L=!1,N=null,$=null,D=null,B=null,O=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=z>=2);let K=null,V={};const I=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),rt=new we().fromArray(I),ht=new we().fromArray(Q);function dt(F,vt,xt,Pt){const Ct=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(F,Qt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<xt;te++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(vt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(vt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return Qt}const ft={};ft[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ft[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(n.DEPTH_TEST),l.setFunc(sa),St(!1),R(Jo),Z(n.CULL_FACE),st(Jn);function Z(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function U(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function q(F,vt){return g[F]!==vt?(n.bindFramebuffer(F,vt),g[F]=vt,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=vt),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=vt)),!0):!1}function C(F,vt){let xt=y,Pt=!1;if(F)if(xt=M.get(vt),xt===void 0&&(xt=[],M.set(vt,xt)),F.isWebGLMultipleRenderTargets){const Ct=F.texture;if(xt.length!==Ct.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=Ct.length;Qt<te;Qt++)xt[Qt]=n.COLOR_ATTACHMENT0+Qt;xt.length=Ct.length,Pt=!0}}else xt[0]!==n.COLOR_ATTACHMENT0&&(xt[0]=n.COLOR_ATTACHMENT0,Pt=!0);else xt[0]!==n.BACK&&(xt[0]=n.BACK,Pt=!0);Pt&&(e.isWebGL2?n.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function nt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const X={[mi]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};if(i)X[el]=n.MIN,X[nl]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(X[el]=F.MIN_EXT,X[nl]=F.MAX_EXT)}const it={[mf]:n.ZERO,[gf]:n.ONE,[_f]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[Ef]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[Eo]:n.ONE_MINUS_SRC_ALPHA,[yf]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[Tf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[bf]:n.CONSTANT_ALPHA,[wf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(F,vt,xt,Pt,Ct,Qt,te,xe,Ue,ee){if(F===Jn){f===!0&&(U(n.BLEND),f=!1);return}if(f===!1&&(Z(n.BLEND),f=!0),F!==hf){if(F!==E||ee!==L){if((v!==mi||p!==mi)&&(n.blendEquation(n.FUNC_ADD),v=mi,p=mi),ee)switch(F){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,T=null,S=null,P=null,x.set(0,0,0),A=0,E=F,L=ee}return}Ct=Ct||vt,Qt=Qt||xt,te=te||Pt,(vt!==v||Ct!==p)&&(n.blendEquationSeparate(X[vt],X[Ct]),v=vt,p=Ct),(xt!==_||Pt!==T||Qt!==S||te!==P)&&(n.blendFuncSeparate(it[xt],it[Pt],it[Qt],it[te]),_=xt,T=Pt,S=Qt,P=te),(xe.equals(x)===!1||Ue!==A)&&(n.blendColor(xe.r,xe.g,xe.b,Ue),x.copy(xe),A=Ue),E=F,L=!1}function Tt(F,vt){F.side===an?U(n.CULL_FACE):Z(n.CULL_FACE);let xt=F.side===ke;vt&&(xt=!xt),St(xt),F.blending===lr&&F.transparent===!1?st(Jn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Pt=F.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),j(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function R(F){F!==cf?(Z(n.CULL_FACE),F!==$&&(F===Jo?n.cullFace(n.BACK):F===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),$=F}function b(F){F!==D&&(H&&n.lineWidth(F),D=F)}function j(F,vt,xt){F?(Z(n.POLYGON_OFFSET_FILL),(B!==vt||O!==xt)&&(n.polygonOffset(vt,xt),B=vt,O=xt)):U(n.POLYGON_OFFSET_FILL)}function ct(F){F?Z(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function lt(F){F===void 0&&(F=n.TEXTURE0+Y-1),K!==F&&(n.activeTexture(F),K=F)}function at(F,vt,xt){xt===void 0&&(K===null?xt=n.TEXTURE0+Y-1:xt=K);let Pt=V[xt];Pt===void 0&&(Pt={type:void 0,texture:void 0},V[xt]=Pt),(Pt.type!==F||Pt.texture!==vt)&&(K!==xt&&(n.activeTexture(xt),K=xt),n.bindTexture(F,vt||ft[F]),Pt.type=F,Pt.texture=vt)}function _t(){const F=V[K];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function pt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(F){rt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function $t(F){ht.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ht.copy(F))}function ce(F,vt){let xt=h.get(vt);xt===void 0&&(xt=new WeakMap,h.set(vt,xt));let Pt=xt.get(F);Pt===void 0&&(Pt=n.getUniformBlockIndex(vt,F.name),xt.set(F,Pt))}function kt(F,vt){const Pt=h.get(vt).get(F);u.get(vt)!==Pt&&(n.uniformBlockBinding(vt,Pt,F.__bindingPointIndex),u.set(vt,Pt))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,V={},g={},M=new WeakMap,y=[],m=null,f=!1,E=null,v=null,_=null,T=null,p=null,S=null,P=null,x=new Bt(0,0,0),A=0,L=!1,N=null,$=null,D=null,B=null,O=null,rt.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:U,bindFramebuffer:q,drawBuffers:C,useProgram:nt,setBlending:st,setMaterial:Tt,setFlipSided:St,setCullFace:R,setLineWidth:b,setPolygonOffset:j,setScissorTest:ct,activeTexture:lt,bindTexture:at,unbindTexture:_t,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Rt,texImage3D:Et,updateUBOMapping:ce,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:It,texSubImage2D:At,texSubImage3D:Nt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:zt,viewport:$t,reset:mt}}function cg(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,b){return g?new OffscreenCanvas(R,b):ua("canvas")}function y(R,b,j,ct){let lt=1;if((R.width>ct||R.height>ct)&&(lt=ct/Math.max(R.width,R.height)),lt<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const at=b?Po:Math.floor,_t=at(lt*R.width),pt=at(lt*R.height);h===void 0&&(h=M(_t,pt));const Mt=j?M(_t,pt):h;return Mt.width=_t,Mt.height=pt,Mt.getContext("2d").drawImage(R,0,0,_t,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_t+"x"+pt+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Pl(R.width)&&Pl(R.height)}function f(R){return a?!1:R.wrapS!==mn||R.wrapT!==mn||R.minFilter!==ye&&R.minFilter!==nn}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==ye&&R.minFilter!==nn}function v(R){n.generateMipmap(R)}function _(R,b,j,ct,lt=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=b;if(b===n.RED&&(j===n.FLOAT&&(at=n.R32F),j===n.HALF_FLOAT&&(at=n.R16F),j===n.UNSIGNED_BYTE&&(at=n.R8)),b===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(at=n.R8UI),j===n.UNSIGNED_SHORT&&(at=n.R16UI),j===n.UNSIGNED_INT&&(at=n.R32UI),j===n.BYTE&&(at=n.R8I),j===n.SHORT&&(at=n.R16I),j===n.INT&&(at=n.R32I)),b===n.RG&&(j===n.FLOAT&&(at=n.RG32F),j===n.HALF_FLOAT&&(at=n.RG16F),j===n.UNSIGNED_BYTE&&(at=n.RG8)),b===n.RGBA){const _t=lt?aa:jt.getTransfer(ct);j===n.FLOAT&&(at=n.RGBA32F),j===n.HALF_FLOAT&&(at=n.RGBA16F),j===n.UNSIGNED_BYTE&&(at=_t===ne?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function T(R,b,j){return E(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==ye&&R.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function p(R){return R===ye||R===il||R===Fa?n.NEAREST:n.LINEAR}function S(R){const b=R.target;b.removeEventListener("dispose",S),x(b),b.isVideoTexture&&u.delete(b)}function P(R){const b=R.target;b.removeEventListener("dispose",P),L(b)}function x(R){const b=i.get(R);if(b.__webglInit===void 0)return;const j=R.source,ct=d.get(j);if(ct){const lt=ct[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(R),Object.keys(ct).length===0&&d.delete(j)}i.remove(R)}function A(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const j=R.source,ct=d.get(j);delete ct[b.__cacheKey],o.memory.textures--}function L(R){const b=R.texture,j=i.get(R),ct=i.get(b);if(ct.__webglTexture!==void 0&&(n.deleteTexture(ct.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(j.__webglFramebuffer[lt]))for(let at=0;at<j.__webglFramebuffer[lt].length;at++)n.deleteFramebuffer(j.__webglFramebuffer[lt][at]);else n.deleteFramebuffer(j.__webglFramebuffer[lt]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[lt])}else{if(Array.isArray(j.__webglFramebuffer))for(let lt=0;lt<j.__webglFramebuffer.length;lt++)n.deleteFramebuffer(j.__webglFramebuffer[lt]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let lt=0;lt<j.__webglColorRenderbuffer.length;lt++)j.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[lt]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let lt=0,at=b.length;lt<at;lt++){const _t=i.get(b[lt]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),o.memory.textures--),i.remove(b[lt])}i.remove(b),i.remove(R)}let N=0;function $(){N=0}function D(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function B(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const j=i.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(j,R,b);return}}e.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+b)}function Y(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){rt(j,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+b)}function H(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){rt(j,R,b);return}e.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+b)}function z(R,b){const j=i.get(R);if(R.version>0&&j.__version!==R.version){ht(j,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+b)}const k={[bo]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},K={[ye]:n.NEAREST,[il]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[kf]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},V={[nh]:n.NEVER,[lh]:n.ALWAYS,[ih]:n.LESS,[nu]:n.LEQUAL,[rh]:n.EQUAL,[oh]:n.GEQUAL,[sh]:n.GREATER,[ah]:n.NOTEQUAL};function I(R,b,j){if(j?(n.texParameteri(R,n.TEXTURE_WRAP_S,k[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,k[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,k[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==mn||b.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,p(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,p(b.minFilter)),b.minFilter!==ye&&b.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===ye||b.minFilter!==Fa&&b.minFilter!==Vr||b.type===Zn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===kr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Q(R,b){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));const ct=b.source;let lt=d.get(ct);lt===void 0&&(lt={},d.set(ct,lt));const at=B(b);if(at!==R.__cacheKey){lt[at]===void 0&&(lt[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),lt[at].usedTimes++;const _t=lt[R.__cacheKey];_t!==void 0&&(lt[R.__cacheKey].usedTimes--,_t.usedTimes===0&&A(b)),R.__cacheKey=at,R.__webglTexture=lt[at].texture}return j}function rt(R,b,j){let ct=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=n.TEXTURE_3D);const lt=Q(R,b),at=b.source;e.bindTexture(ct,R.__webglTexture,n.TEXTURE0+j);const _t=i.get(at);if(at.version!==_t.__version||lt===!0){e.activeTexture(n.TEXTURE0+j);const pt=jt.getPrimaries(jt.workingColorSpace),Mt=b.colorSpace===on?null:jt.getPrimaries(b.colorSpace),At=b.colorSpace===on||pt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Nt=f(b)&&m(b.image)===!1;let ut=y(b.image,Nt,!1,r.maxTextureSize);ut=St(b,ut);const Zt=m(ut)||a,qt=s.convert(b.format,b.colorSpace);let It=s.convert(b.type),Rt=_(b.internalFormat,qt,It,b.colorSpace,b.isVideoTexture);I(ct,b,Zt);let Et;const zt=b.mipmaps,$t=a&&b.isVideoTexture!==!0&&Rt!==tu,ce=_t.__version===void 0||lt===!0,kt=T(b,ut,Zt);if(b.isDepthTexture)Rt=n.DEPTH_COMPONENT,a?b.type===Zn?Rt=n.DEPTH_COMPONENT32F:b.type===$n?Rt=n.DEPTH_COMPONENT24:b.type===xi?Rt=n.DEPTH24_STENCIL8:Rt=n.DEPTH_COMPONENT16:b.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mi&&Rt===n.DEPTH_COMPONENT&&b.type!==Oo&&b.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=$n,It=s.convert(b.type)),b.format===pr&&Rt===n.DEPTH_COMPONENT&&(Rt=n.DEPTH_STENCIL,b.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xi,It=s.convert(b.type))),ce&&($t?e.texStorage2D(n.TEXTURE_2D,1,Rt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,qt,It,null));else if(b.isDataTexture)if(zt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,Rt,zt[0].width,zt[0].height);for(let mt=0,F=zt.length;mt<F;mt++)Et=zt[mt],$t?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Et.width,Et.height,qt,It,Et.data):e.texImage2D(n.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,qt,It,Et.data);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,Rt,ut.width,ut.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,qt,It,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,qt,It,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Rt,zt[0].width,zt[0].height,ut.depth);for(let mt=0,F=zt.length;mt<F;mt++)Et=zt[mt],b.format!==gn?qt!==null?$t?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,ut.depth,qt,Et.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,Rt,Et.width,Et.height,ut.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,ut.depth,qt,It,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,Rt,Et.width,Et.height,ut.depth,0,qt,It,Et.data)}else{$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,Rt,zt[0].width,zt[0].height);for(let mt=0,F=zt.length;mt<F;mt++)Et=zt[mt],b.format!==gn?qt!==null?$t?e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,Et.width,Et.height,qt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Et.width,Et.height,qt,It,Et.data):e.texImage2D(n.TEXTURE_2D,mt,Rt,Et.width,Et.height,0,qt,It,Et.data)}else if(b.isDataArrayTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Rt,ut.width,ut.height,ut.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,qt,It,ut.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,ut.width,ut.height,ut.depth,0,qt,It,ut.data);else if(b.isData3DTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_3D,kt,Rt,ut.width,ut.height,ut.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,qt,It,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,ut.width,ut.height,ut.depth,0,qt,It,ut.data);else if(b.isFramebufferTexture){if(ce)if($t)e.texStorage2D(n.TEXTURE_2D,kt,Rt,ut.width,ut.height);else{let mt=ut.width,F=ut.height;for(let vt=0;vt<kt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Rt,mt,F,0,qt,It,null),mt>>=1,F>>=1}}else if(zt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,Rt,zt[0].width,zt[0].height);for(let mt=0,F=zt.length;mt<F;mt++)Et=zt[mt],$t?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,qt,It,Et):e.texImage2D(n.TEXTURE_2D,mt,Rt,qt,It,Et);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,Rt,ut.width,ut.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,qt,It,ut)):e.texImage2D(n.TEXTURE_2D,0,Rt,qt,It,ut);E(b,Zt)&&v(ct),_t.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ht(R,b,j){if(b.image.length!==6)return;const ct=Q(R,b),lt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+j);const at=i.get(lt);if(lt.version!==at.__version||ct===!0){e.activeTexture(n.TEXTURE0+j);const _t=jt.getPrimaries(jt.workingColorSpace),pt=b.colorSpace===on?null:jt.getPrimaries(b.colorSpace),Mt=b.colorSpace===on||_t===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const At=b.isCompressedTexture||b.image[0].isCompressedTexture,Nt=b.image[0]&&b.image[0].isDataTexture,ut=[];for(let mt=0;mt<6;mt++)!At&&!Nt?ut[mt]=y(b.image[mt],!1,!0,r.maxCubemapSize):ut[mt]=Nt?b.image[mt].image:b.image[mt],ut[mt]=St(b,ut[mt]);const Zt=ut[0],qt=m(Zt)||a,It=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),Et=_(b.internalFormat,It,Rt,b.colorSpace),zt=a&&b.isVideoTexture!==!0,$t=at.__version===void 0||ct===!0;let ce=T(b,Zt,qt);I(n.TEXTURE_CUBE_MAP,b,qt);let kt;if(At){zt&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Et,Zt.width,Zt.height);for(let mt=0;mt<6;mt++){kt=ut[mt].mipmaps;for(let F=0;F<kt.length;F++){const vt=kt[F];b.format!==gn?It!==null?zt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,vt.width,vt.height,It,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,Et,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,vt.width,vt.height,It,Rt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,Et,vt.width,vt.height,0,It,Rt,vt.data)}}}else{kt=b.mipmaps,zt&&$t&&(kt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Et,ut[0].width,ut[0].height));for(let mt=0;mt<6;mt++)if(Nt){zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ut[mt].width,ut[mt].height,It,Rt,ut[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,ut[mt].width,ut[mt].height,0,It,Rt,ut[mt].data);for(let F=0;F<kt.length;F++){const xt=kt[F].image[mt].image;zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,xt.width,xt.height,It,Rt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,Et,xt.width,xt.height,0,It,Rt,xt.data)}}else{zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,It,Rt,ut[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,It,Rt,ut[mt]);for(let F=0;F<kt.length;F++){const vt=kt[F];zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,It,Rt,vt.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,Et,It,Rt,vt.image[mt])}}}E(b,qt)&&v(n.TEXTURE_CUBE_MAP),at.__version=lt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,j,ct,lt,at){const _t=s.convert(j.format,j.colorSpace),pt=s.convert(j.type),Mt=_(j.internalFormat,_t,pt,j.colorSpace);if(!i.get(b).__hasExternalTextures){const Nt=Math.max(1,b.width>>at),ut=Math.max(1,b.height>>at);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,Mt,Nt,ut,b.depth,0,_t,pt,null):e.texImage2D(lt,at,Mt,Nt,ut,0,_t,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,lt,i.get(j).__webglTexture,0,it(b)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,lt,i.get(j).__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(R,b,j){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ct=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||st(b)){const lt=b.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Zn?ct=n.DEPTH_COMPONENT32F:lt.type===$n&&(ct=n.DEPTH_COMPONENT24));const at=it(b);st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,ct,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ct,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ct,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ct=it(b);j&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ct=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let lt=0;lt<ct.length;lt++){const at=ct[lt],_t=s.convert(at.format,at.colorSpace),pt=s.convert(at.type),Mt=_(at.internalFormat,_t,pt,at.colorSpace),At=it(b);j&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Mt,b.width,b.height):st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,Mt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const ct=i.get(b.depthTexture).__webglTexture,lt=it(b);if(b.depthTexture.format===Mi)st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(b.depthTexture.format===pr)st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function U(R){const b=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,R)}else if(j){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]=n.createRenderbuffer(),ft(b.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ft(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(R,b,j){const ct=i.get(R);b!==void 0&&dt(ct.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&U(R)}function C(R){const b=R.texture,j=i.get(R),ct=i.get(b);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=b.version,o.memory.textures++);const lt=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,_t=m(R)||a;if(lt){j.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(a&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)j.__webglFramebuffer[pt][Mt]=n.createFramebuffer()}else j.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)j.__webglFramebuffer[pt]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(at)if(r.drawBuffers){const pt=R.texture;for(let Mt=0,At=pt.length;Mt<At;Mt++){const Nt=i.get(pt[Mt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&st(R)===!1){const pt=at?b:[b];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Mt=0;Mt<pt.length;Mt++){const At=pt[Mt];j.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Mt]);const Nt=s.convert(At.format,At.colorSpace),ut=s.convert(At.type),Zt=_(At.internalFormat,Nt,ut,At.colorSpace,R.isXRRenderTarget===!0),qt=it(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Zt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,j.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(j.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),I(n.TEXTURE_CUBE_MAP,b,_t);for(let pt=0;pt<6;pt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)dt(j.__webglFramebuffer[pt][Mt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else dt(j.__webglFramebuffer[pt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);E(b,_t)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const pt=R.texture;for(let Mt=0,At=pt.length;Mt<At;Mt++){const Nt=pt[Mt],ut=i.get(Nt);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),I(n.TEXTURE_2D,Nt,_t),dt(j.__webglFramebuffer,R,Nt,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),E(Nt,_t)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,ct.__webglTexture),I(pt,b,_t),a&&b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)dt(j.__webglFramebuffer[Mt],R,b,n.COLOR_ATTACHMENT0,pt,Mt);else dt(j.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,pt,0);E(b,_t)&&v(pt),e.unbindTexture()}R.depthBuffer&&U(R)}function nt(R){const b=m(R)||a,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,lt=j.length;ct<lt;ct++){const at=j[ct];if(E(at,b)){const _t=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pt=i.get(at).__webglTexture;e.bindTexture(_t,pt),v(_t),e.unbindTexture()}}}function X(R){if(a&&R.samples>0&&st(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ct=R.height;let lt=n.COLOR_BUFFER_BIT;const at=[],_t=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(R),Mt=R.isWebGLMultipleRenderTargets===!0;if(Mt)for(let At=0;At<b.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let At=0;At<b.length;At++){at.push(n.COLOR_ATTACHMENT0+At),R.depthBuffer&&at.push(_t);const Nt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Nt===!1&&(R.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Mt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[At]),Nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_t]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_t])),Mt){const ut=i.get(b[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,j,ct,0,0,j,ct,lt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<b.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,pt.__webglColorRenderbuffer[At]);const Nt=i.get(b[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function it(R){return Math.min(r.maxSamples,R.samples)}function st(R){const b=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function St(R,b){const j=R.colorSpace,ct=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Co||j!==Bn&&j!==on&&(jt.getTransfer(j)===ne?a===!1?t.has("EXT_sRGB")===!0&&ct===gn?(R.format=Co,R.minFilter=nn,R.generateMipmaps=!1):b=su.sRGBToLinear(b):(ct!==gn||lt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=q,this.setupRenderTarget=C,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=st}function ug(n,t,e){const i=e.isWebGL2;function r(s,o=on){let a;const l=jt.getTransfer(o);if(s===ti)return n.UNSIGNED_BYTE;if(s===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Wf)return n.BYTE;if(s===Xf)return n.SHORT;if(s===Oo)return n.UNSIGNED_SHORT;if(s===Kc)return n.INT;if(s===$n)return n.UNSIGNED_INT;if(s===Zn)return n.FLOAT;if(s===kr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qf)return n.ALPHA;if(s===gn)return n.RGBA;if(s===Yf)return n.LUMINANCE;if(s===Kf)return n.LUMINANCE_ALPHA;if(s===Mi)return n.DEPTH_COMPONENT;if(s===pr)return n.DEPTH_STENCIL;if(s===Co)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$f)return n.RED;if(s===jc)return n.RED_INTEGER;if(s===Zf)return n.RG;if(s===Jc)return n.RG_INTEGER;if(s===Qc)return n.RGBA_INTEGER;if(s===Oa||s===Ba||s===za||s===Ga)if(l===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rl||s===sl||s===al||s===ol)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===al)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ll||s===cl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ll)return l===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===Ml||s===Sl||s===yl||s===El)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ul)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ml)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_l)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ml)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===El)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ha||s===Tl||s===Al)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ha)return l===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jf||s===bl||s===wl||s===Rl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ha)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class fg extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,M=.005;c.inputState.pinching&&d>g+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class dg extends vr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,M=null;const y=e.getContextAttributes();let m=null,f=null;const E=[],v=[],_=new Kt;let T=null;const p=new rn;p.layers.enable(1),p.viewport=new we;const S=new rn;S.layers.enable(2),S.viewport=new we;const P=[p,S],x=new fg;x.layers.enable(1),x.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let Q=E[I];return Q===void 0&&(Q=new fo,E[I]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(I){let Q=E[I];return Q===void 0&&(Q=new fo,E[I]=Q),Q.getGripSpace()},this.getHand=function(I){let Q=E[I];return Q===void 0&&(Q=new fo,E[I]=Q),Q.getHandSpace()};function N(I){const Q=v.indexOf(I.inputSource);if(Q===-1)return;const rt=E[Q];rt!==void 0&&(rt.update(I.inputSource,I.frame,c||o),rt.dispatchEvent({type:I.type,data:I.inputSource}))}function $(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",D);for(let I=0;I<E.length;I++){const Q=v[I];Q!==null&&(v[I]=null,E[I].disconnect(Q))}A=null,L=null,t.setRenderTarget(m),g=null,d=null,h=null,r=null,f=null,V.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",$),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Ti(g.framebufferWidth,g.framebufferHeight,{format:gn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,rt=null,ht=null;y.depth&&(ht=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=y.stencil?pr:Mi,rt=y.stencil?xi:$n);const dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(dt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Ti(d.textureWidth,d.textureHeight,{format:gn,type:ti,depthTexture:new _u(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const ft=t.properties.get(f);ft.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(I){for(let Q=0;Q<I.removed.length;Q++){const rt=I.removed[Q],ht=v.indexOf(rt);ht>=0&&(v[ht]=null,E[ht].disconnect(rt))}for(let Q=0;Q<I.added.length;Q++){const rt=I.added[Q];let ht=v.indexOf(rt);if(ht===-1){for(let ft=0;ft<E.length;ft++)if(ft>=v.length){v.push(rt),ht=ft;break}else if(v[ft]===null){v[ft]=rt,ht=ft;break}if(ht===-1)break}const dt=E[ht];dt&&dt.connect(rt)}}const B=new G,O=new G;function Y(I,Q,rt){B.setFromMatrixPosition(Q.matrixWorld),O.setFromMatrixPosition(rt.matrixWorld);const ht=B.distanceTo(O),dt=Q.projectionMatrix.elements,ft=rt.projectionMatrix.elements,Z=dt[14]/(dt[10]-1),U=dt[14]/(dt[10]+1),q=(dt[9]+1)/dt[5],C=(dt[9]-1)/dt[5],nt=(dt[8]-1)/dt[0],X=(ft[8]+1)/ft[0],it=Z*nt,st=Z*X,Tt=ht/(-nt+X),St=Tt*-nt;Q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(St),I.translateZ(Tt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const R=Z+Tt,b=U+Tt,j=it-St,ct=st+(ht-St),lt=q*U/b*R,at=C*U/b*R;I.projectionMatrix.makePerspective(j,ct,lt,at,R,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function H(I,Q){Q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;x.near=S.near=p.near=I.near,x.far=S.far=p.far=I.far,(A!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,L=x.far);const Q=I.parent,rt=x.cameras;H(x,Q);for(let ht=0;ht<rt.length;ht++)H(rt[ht],Q);rt.length===2?Y(x,p,S):x.projectionMatrix.copy(p.projectionMatrix),z(I,x,Q)};function z(I,Q,rt){rt===null?I.matrix.copy(Q.matrixWorld):(I.matrix.copy(rt.matrixWorld),I.matrix.invert(),I.matrix.multiply(Q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(Q.projectionMatrix),I.projectionMatrixInverse.copy(Q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Lo*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let k=null;function K(I,Q){if(u=Q.getViewerPose(c||o),M=Q,u!==null){const rt=u.views;g!==null&&(t.setRenderTargetFramebuffer(f,g.framebuffer),t.setRenderTarget(f));let ht=!1;rt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let dt=0;dt<rt.length;dt++){const ft=rt[dt];let Z=null;if(g!==null)Z=g.getViewport(ft);else{const q=h.getViewSubImage(d,ft);Z=q.viewport,dt===0&&(t.setRenderTargetTextures(f,q.colorTexture,d.ignoreDepthValues?void 0:q.depthStencilTexture),t.setRenderTarget(f))}let U=P[dt];U===void 0&&(U=new rn,U.layers.enable(dt),U.viewport=new we,P[dt]=U),U.matrix.fromArray(ft.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(ft.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Z.x,Z.y,Z.width,Z.height),dt===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(U)}}for(let rt=0;rt<E.length;rt++){const ht=v[rt],dt=E[rt];ht!==null&&dt!==void 0&&dt.update(ht,Q,c||o)}k&&k(I,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),M=null}const V=new gu;V.setAnimationLoop(K),this.setAnimationLoop=function(I){k=I},this.dispose=function(){}}}function pg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,hu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),M(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mg(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const _=v.program;i.uniformBlockBinding(E,_)}function c(E,v){let _=r[E.id];_===void 0&&(M(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(E,T);const p=t.render.frame;s[E.id]!==p&&(d(E),s[E.id]=p)}function u(E){const v=h();E.__bindingPointIndex=v;const _=n.createBuffer(),T=E.__size,p=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,p),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=r[E.id],_=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let p=0,S=_.length;p<S;p++){const P=Array.isArray(_[p])?_[p]:[_[p]];for(let x=0,A=P.length;x<A;x++){const L=P[x];if(g(L,p,x,T)===!0){const N=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let B=0;B<$.length;B++){const O=$[B],Y=y(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,N+D,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,v,_,T){const p=E.value,S=v+"_"+_;if(T[S]===void 0)return typeof p=="number"||typeof p=="boolean"?T[S]=p:T[S]=p.clone(),!0;{const P=T[S];if(typeof p=="number"||typeof p=="boolean"){if(P!==p)return T[S]=p,!0}else if(P.equals(p)===!1)return P.copy(p),!0}return!1}function M(E){const v=E.uniforms;let _=0;const T=16;for(let S=0,P=v.length;S<P;S++){const x=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,L=x.length;A<L;A++){const N=x[A],$=Array.isArray(N.value)?N.value:[N.value];for(let D=0,B=$.length;D<B;D++){const O=$[D],Y=y(O),H=_%T;H!==0&&T-H<Y.boundary&&(_+=T-H),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Y.storage}}}const p=_%T;return p>0&&(_+=T-p),E.__size=_,E.__cache={},this}function y(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Eu{constructor(t={}){const{canvas:e=uh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),M=new Int32Array(4);let y=null,m=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const v=this;let _=!1,T=0,p=0,S=null,P=-1,x=null;const A=new we,L=new we;let N=null;const $=new Bt(0);let D=0,B=e.width,O=e.height,Y=1,H=null,z=null;const k=new we(0,0,B,O),K=new we(0,0,B,O);let V=!1;const I=new mu;let Q=!1,rt=!1,ht=null;const dt=new le,ft=new Kt,Z=new G,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return S===null?Y:1}let C=i;function nt(w,W){for(let tt=0;tt<w.length;tt++){const et=w[tt],J=e.getContext(et,W);if(J!==null)return J}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",vt,!1),C===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),C=nt(W,w),C===null)throw nt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let X,it,st,Tt,St,R,b,j,ct,lt,at,_t,pt,Mt,At,Nt,ut,Zt,qt,It,Rt,Et,zt,$t;function ce(){X=new Am(C),it=new vm(C,X,t),X.init(it),Et=new ug(C,X,it),st=new lg(C,X,it),Tt=new Rm(C),St=new K0,R=new cg(C,X,st,St,it,Et,Tt),b=new Mm(v),j=new Tm(v),ct=new Nh(C,it),zt=new gm(C,X,ct,it),lt=new bm(C,ct,Tt,zt),at=new Dm(C,lt,ct,Tt),qt=new Pm(C,it,R),Nt=new xm(St),_t=new Y0(v,b,j,X,it,zt,Nt),pt=new pg(v,St),Mt=new Z0,At=new ng(X,it),Zt=new mm(v,b,j,st,at,d,l),ut=new og(v,at,it),$t=new mg(C,Tt,it,st),It=new _m(C,X,Tt,it),Rt=new wm(C,X,Tt,it),Tt.programs=_t.programs,v.capabilities=it,v.extensions=X,v.properties=St,v.renderLists=Mt,v.shadowMap=ut,v.state=st,v.info=Tt}ce();const kt=new dg(v,C);this.xr=kt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=X.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=X.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(B,O,!1))},this.getSize=function(w){return w.set(B,O)},this.setSize=function(w,W,tt=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,O=W,e.width=Math.floor(w*Y),e.height=Math.floor(W*Y),tt===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(B*Y,O*Y).floor()},this.setDrawingBufferSize=function(w,W,tt){B=w,O=W,Y=tt,e.width=Math.floor(w*tt),e.height=Math.floor(W*tt),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,W,tt,et){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,W,tt,et),st.viewport(A.copy(k).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,W,tt,et){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,W,tt,et),st.scissor(L.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){st.setScissorTest(V=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,W=!0,tt=!0){let et=0;if(w){let J=!1;if(S!==null){const yt=S.texture.format;J=yt===Qc||yt===Jc||yt===jc}if(J){const yt=S.texture.type,bt=yt===ti||yt===$n||yt===Oo||yt===xi||yt===$c||yt===Zc,Lt=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Ht=Lt.r,Ft=Lt.g,Ot=Lt.b;bt?(g[0]=Ht,g[1]=Ft,g[2]=Ot,g[3]=Dt,C.clearBufferuiv(C.COLOR,0,g)):(M[0]=Ht,M[1]=Ft,M[2]=Ot,M[3]=Dt,C.clearBufferiv(C.COLOR,0,M))}else et|=C.COLOR_BUFFER_BIT}W&&(et|=C.DEPTH_BUFFER_BIT),tt&&(et|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),At.dispose(),St.dispose(),b.dispose(),j.dispose(),at.dispose(),zt.dispose(),$t.dispose(),_t.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ue),kt.removeEventListener("sessionend",ee),ht&&(ht.dispose(),ht=null),Ie.stop()};function mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const w=Tt.autoReset,W=ut.enabled,tt=ut.autoUpdate,et=ut.needsUpdate,J=ut.type;ce(),Tt.autoReset=w,ut.enabled=W,ut.autoUpdate=tt,ut.needsUpdate=et,ut.type=J}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const W=w.target;W.removeEventListener("dispose",xt),Pt(W)}function Pt(w){Ct(w),St.remove(w)}function Ct(w){const W=St.get(w).programs;W!==void 0&&(W.forEach(function(tt){_t.releaseProgram(tt)}),w.isShaderMaterial&&_t.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,tt,et,J,yt){W===null&&(W=U);const bt=J.isMesh&&J.matrixWorld.determinant()<0,Lt=sf(w,W,tt,et,J);st.setMaterial(et,bt);let Dt=tt.index,Ht=1;if(et.wireframe===!0){if(Dt=lt.getWireframeAttribute(tt),Dt===void 0)return;Ht=2}const Ft=tt.drawRange,Ot=tt.attributes.position;let fe=Ft.start*Ht,Ye=(Ft.start+Ft.count)*Ht;yt!==null&&(fe=Math.max(fe,yt.start*Ht),Ye=Math.min(Ye,(yt.start+yt.count)*Ht)),Dt!==null?(fe=Math.max(fe,0),Ye=Math.min(Ye,Dt.count)):Ot!=null&&(fe=Math.max(fe,0),Ye=Math.min(Ye,Ot.count));const Me=Ye-fe;if(Me<0||Me===1/0)return;zt.setup(J,et,Lt,tt,Dt);let An,se=It;if(Dt!==null&&(An=ct.get(Dt),se=Rt,se.setIndex(An)),J.isMesh)et.wireframe===!0?(st.setLineWidth(et.wireframeLinewidth*q()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(J.isLine){let Wt=et.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*q()),J.isLineSegments?se.setMode(C.LINES):J.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else J.isPoints?se.setMode(C.POINTS):J.isSprite&&se.setMode(C.TRIANGLES);if(J.isBatchedMesh)se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)se.renderInstances(fe,Me,J.count);else if(tt.isInstancedBufferGeometry){const Wt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Da=Math.min(tt.instanceCount,Wt);se.renderInstances(fe,Me,Da)}else se.render(fe,Me)};function Qt(w,W,tt){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,us(w,W,tt),w.side=ii,w.needsUpdate=!0,us(w,W,tt),w.side=an):us(w,W,tt)}this.compile=function(w,W,tt=null){tt===null&&(tt=w),m=At.get(tt),m.init(),E.push(m),tt.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),w!==tt&&w.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(v._useLegacyLights);const et=new Set;return w.traverse(function(J){const yt=J.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){const Lt=yt[bt];Qt(Lt,tt,J),et.add(Lt)}else Qt(yt,tt,J),et.add(yt)}),E.pop(),m=null,et},this.compileAsync=function(w,W,tt=null){const et=this.compile(w,W,tt);return new Promise(J=>{function yt(){if(et.forEach(function(bt){St.get(bt).currentProgram.isReady()&&et.delete(bt)}),et.size===0){J(w);return}setTimeout(yt,10)}X.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let te=null;function xe(w){te&&te(w)}function Ue(){Ie.stop()}function ee(){Ie.start()}const Ie=new gu;Ie.setAnimationLoop(xe),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(w){te=w,kt.setAnimationLoop(w),w===null?Ie.stop():Ie.start()},kt.addEventListener("sessionstart",Ue),kt.addEventListener("sessionend",ee),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(W),W=kt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,S),m=At.get(w,E.length),m.init(),E.push(m),dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),I.setFromProjectionMatrix(dt),rt=this.localClippingEnabled,Q=Nt.init(this.clippingPlanes,rt),y=Mt.get(w,f.length),y.init(),f.push(y),vn(w,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(H,z),this.info.render.frame++,Q===!0&&Nt.beginShadows();const tt=m.state.shadowsArray;if(ut.render(tt,w,W),Q===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(y,w),m.setupLights(v._useLegacyLights),W.isArrayCamera){const et=W.cameras;for(let J=0,yt=et.length;J<yt;J++){const bt=et[J];qo(y,w,bt,bt.viewport)}}else qo(y,w,W);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(v,w,W),zt.resetDefaultState(),P=-1,x=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function vn(w,W,tt,et){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||I.intersectsSprite(w)){et&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const bt=at.update(w),Lt=w.material;Lt.visible&&y.push(w,bt,Lt,tt,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||I.intersectsObject(w))){const bt=at.update(w),Lt=w.material;if(et&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Z.copy(bt.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Lt)){const Dt=bt.groups;for(let Ht=0,Ft=Dt.length;Ht<Ft;Ht++){const Ot=Dt[Ht],fe=Lt[Ot.materialIndex];fe&&fe.visible&&y.push(w,bt,fe,tt,Z.z,Ot)}}else Lt.visible&&y.push(w,bt,Lt,tt,Z.z,null)}}const yt=w.children;for(let bt=0,Lt=yt.length;bt<Lt;bt++)vn(yt[bt],W,tt,et)}function qo(w,W,tt,et){const J=w.opaque,yt=w.transmissive,bt=w.transparent;m.setupLightsView(tt),Q===!0&&Nt.setGlobalState(v.clippingPlanes,tt),yt.length>0&&rf(J,yt,W,tt),et&&st.viewport(A.copy(et)),J.length>0&&cs(J,W,tt),yt.length>0&&cs(yt,W,tt),bt.length>0&&cs(bt,W,tt),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function rf(w,W,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const yt=it.isWebGL2;ht===null&&(ht=new Ti(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?kr:ti,minFilter:Vr,samples:yt?4:0})),v.getDrawingBufferSize(ft),yt?ht.setSize(ft.x,ft.y):ht.setSize(Po(ft.x),Po(ft.y));const bt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor($),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Lt=v.toneMapping;v.toneMapping=Qn,cs(w,tt,et),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht);let Dt=!1;for(let Ht=0,Ft=W.length;Ht<Ft;Ht++){const Ot=W[Ht],fe=Ot.object,Ye=Ot.geometry,Me=Ot.material,An=Ot.group;if(Me.side===an&&fe.layers.test(et.layers)){const se=Me.side;Me.side=ke,Me.needsUpdate=!0,Yo(fe,tt,et,Ye,Me,An),Me.side=se,Me.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht)),v.setRenderTarget(bt),v.setClearColor($,D),v.toneMapping=Lt}function cs(w,W,tt){const et=W.isScene===!0?W.overrideMaterial:null;for(let J=0,yt=w.length;J<yt;J++){const bt=w[J],Lt=bt.object,Dt=bt.geometry,Ht=et===null?bt.material:et,Ft=bt.group;Lt.layers.test(tt.layers)&&Yo(Lt,W,tt,Dt,Ht,Ft)}}function Yo(w,W,tt,et,J,yt){w.onBeforeRender(v,W,tt,et,J,yt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(v,W,tt,et,w,yt),J.transparent===!0&&J.side===an&&J.forceSinglePass===!1?(J.side=ke,J.needsUpdate=!0,v.renderBufferDirect(tt,W,et,J,w,yt),J.side=ii,J.needsUpdate=!0,v.renderBufferDirect(tt,W,et,J,w,yt),J.side=an):v.renderBufferDirect(tt,W,et,J,w,yt),w.onAfterRender(v,W,tt,et,J,yt)}function us(w,W,tt){W.isScene!==!0&&(W=U);const et=St.get(w),J=m.state.lights,yt=m.state.shadowsArray,bt=J.state.version,Lt=_t.getParameters(w,J.state,yt,W,tt),Dt=_t.getProgramCacheKey(Lt);let Ht=et.programs;et.environment=w.isMeshStandardMaterial?W.environment:null,et.fog=W.fog,et.envMap=(w.isMeshStandardMaterial?j:b).get(w.envMap||et.environment),Ht===void 0&&(w.addEventListener("dispose",xt),Ht=new Map,et.programs=Ht);let Ft=Ht.get(Dt);if(Ft!==void 0){if(et.currentProgram===Ft&&et.lightsStateVersion===bt)return $o(w,Lt),Ft}else Lt.uniforms=_t.getUniforms(w),w.onBuild(tt,Lt,v),w.onBeforeCompile(Lt,v),Ft=_t.acquireProgram(Lt,Dt),Ht.set(Dt,Ft),et.uniforms=Lt.uniforms;const Ot=et.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=Nt.uniform),$o(w,Lt),et.needsLights=of(w),et.lightsStateVersion=bt,et.needsLights&&(Ot.ambientLightColor.value=J.state.ambient,Ot.lightProbe.value=J.state.probe,Ot.directionalLights.value=J.state.directional,Ot.directionalLightShadows.value=J.state.directionalShadow,Ot.spotLights.value=J.state.spot,Ot.spotLightShadows.value=J.state.spotShadow,Ot.rectAreaLights.value=J.state.rectArea,Ot.ltc_1.value=J.state.rectAreaLTC1,Ot.ltc_2.value=J.state.rectAreaLTC2,Ot.pointLights.value=J.state.point,Ot.pointLightShadows.value=J.state.pointShadow,Ot.hemisphereLights.value=J.state.hemi,Ot.directionalShadowMap.value=J.state.directionalShadowMap,Ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ot.spotShadowMap.value=J.state.spotShadowMap,Ot.spotLightMatrix.value=J.state.spotLightMatrix,Ot.spotLightMap.value=J.state.spotLightMap,Ot.pointShadowMap.value=J.state.pointShadowMap,Ot.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=Ft,et.uniformsList=null,Ft}function Ko(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ta.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function $o(w,W){const tt=St.get(w);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function sf(w,W,tt,et,J){W.isScene!==!0&&(W=U),R.resetTextureUnits();const yt=W.fog,bt=et.isMeshStandardMaterial?W.environment:null,Lt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Bn,Dt=(et.isMeshStandardMaterial?j:b).get(et.envMap||bt),Ht=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Ft=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ot=!!tt.morphAttributes.position,fe=!!tt.morphAttributes.normal,Ye=!!tt.morphAttributes.color;let Me=Qn;et.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Me=v.toneMapping);const An=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,se=An!==void 0?An.length:0,Wt=St.get(et),Da=m.state.lights;if(Q===!0&&(rt===!0||w!==x)){const tn=w===x&&et.id===P;Nt.setState(et,w,tn)}let ue=!1;et.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Da.state.version||Wt.outputColorSpace!==Lt||J.isBatchedMesh&&Wt.batching===!1||!J.isBatchedMesh&&Wt.batching===!0||J.isInstancedMesh&&Wt.instancing===!1||!J.isInstancedMesh&&Wt.instancing===!0||J.isSkinnedMesh&&Wt.skinning===!1||!J.isSkinnedMesh&&Wt.skinning===!0||J.isInstancedMesh&&Wt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Wt.instancingColor===!1&&J.instanceColor!==null||Wt.envMap!==Dt||et.fog===!0&&Wt.fog!==yt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Nt.numPlanes||Wt.numIntersection!==Nt.numIntersection)||Wt.vertexAlphas!==Ht||Wt.vertexTangents!==Ft||Wt.morphTargets!==Ot||Wt.morphNormals!==fe||Wt.morphColors!==Ye||Wt.toneMapping!==Me||it.isWebGL2===!0&&Wt.morphTargetsCount!==se)&&(ue=!0):(ue=!0,Wt.__version=et.version);let ai=Wt.currentProgram;ue===!0&&(ai=us(et,W,J));let Zo=!1,br=!1,Ua=!1;const Ce=ai.getUniforms(),oi=Wt.uniforms;if(st.useProgram(ai.program)&&(Zo=!0,br=!0,Ua=!0),et.id!==P&&(P=et.id,br=!0),Zo||x!==w){Ce.setValue(C,"projectionMatrix",w.projectionMatrix),Ce.setValue(C,"viewMatrix",w.matrixWorldInverse);const tn=Ce.map.cameraPosition;tn!==void 0&&tn.setValue(C,Z.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Ce.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ce.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,br=!0,Ua=!0)}if(J.isSkinnedMesh){Ce.setOptional(C,J,"bindMatrix"),Ce.setOptional(C,J,"bindMatrixInverse");const tn=J.skeleton;tn&&(it.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ce.setValue(C,"boneTexture",tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Ce.setOptional(C,J,"batchingTexture"),Ce.setValue(C,"batchingTexture",J._matricesTexture,R));const Ia=tt.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0&&it.isWebGL2===!0)&&qt.update(J,tt,ai),(br||Wt.receiveShadow!==J.receiveShadow)&&(Wt.receiveShadow=J.receiveShadow,Ce.setValue(C,"receiveShadow",J.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(oi.envMap.value=Dt,oi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),br&&(Ce.setValue(C,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&af(oi,Ua),yt&&et.fog===!0&&pt.refreshFogUniforms(oi,yt),pt.refreshMaterialUniforms(oi,et,Y,O,ht),ta.upload(C,Ko(Wt),oi,R)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ta.upload(C,Ko(Wt),oi,R),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ce.setValue(C,"center",J.center),Ce.setValue(C,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(C,"normalMatrix",J.normalMatrix),Ce.setValue(C,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const tn=et.uniformsGroups;for(let Na=0,lf=tn.length;Na<lf;Na++)if(it.isWebGL2){const jo=tn[Na];$t.update(jo,ai),$t.bind(jo,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function af(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function of(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,W,tt){St.get(w.texture).__webglTexture=W,St.get(w.depthTexture).__webglTexture=tt;const et=St.get(w);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const tt=St.get(w);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,tt=0){S=w,T=W,p=tt;let et=!0,J=null,yt=!1,bt=!1;if(w){const Dt=St.get(w);Dt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(C.FRAMEBUFFER,null),et=!1):Dt.__webglFramebuffer===void 0?R.setupRenderTarget(w):Dt.__hasExternalTextures&&R.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Ft=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[W])?J=Ft[W][tt]:J=Ft[W],yt=!0):it.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?J=St.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?J=Ft[tt]:J=Ft,A.copy(w.viewport),L.copy(w.scissor),N=w.scissorTest}else A.copy(k).multiplyScalar(Y).floor(),L.copy(K).multiplyScalar(Y).floor(),N=V;if(st.bindFramebuffer(C.FRAMEBUFFER,J)&&it.drawBuffers&&et&&st.drawBuffers(w,J),st.viewport(A),st.scissor(L),st.setScissorTest(N),yt){const Dt=St.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,tt)}else if(bt){const Dt=St.get(w.texture),Ht=W||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,tt||0,Ht)}P=-1},this.readRenderTargetPixels=function(w,W,tt,et,J,yt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){st.bindFramebuffer(C.FRAMEBUFFER,Lt);try{const Dt=w.texture,Ht=Dt.format,Ft=Dt.type;if(Ht!==gn&&Et.convert(Ht)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Ft===kr&&(X.has("EXT_color_buffer_half_float")||it.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ft!==ti&&Et.convert(Ft)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Zn&&(it.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-et&&tt>=0&&tt<=w.height-J&&C.readPixels(W,tt,et,J,Et.convert(Ht),Et.convert(Ft),yt)}finally{const Dt=S!==null?St.get(S).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(w,W,tt=0){const et=Math.pow(2,-tt),J=Math.floor(W.image.width*et),yt=Math.floor(W.image.height*et);R.setTexture2D(W,0),C.copyTexSubImage2D(C.TEXTURE_2D,tt,0,0,w.x,w.y,J,yt),st.unbindTexture()},this.copyTextureToTexture=function(w,W,tt,et=0){const J=W.image.width,yt=W.image.height,bt=Et.convert(tt.format),Lt=Et.convert(tt.type);R.setTexture2D(tt,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,tt.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,tt.unpackAlignment),W.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,et,w.x,w.y,J,yt,bt,Lt,W.image.data):W.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,et,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,bt,W.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,et,w.x,w.y,bt,Lt,W.image),et===0&&tt.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(w,W,tt,et,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=w.max.x-w.min.x+1,bt=w.max.y-w.min.y+1,Lt=w.max.z-w.min.z+1,Dt=Et.convert(et.format),Ht=Et.convert(et.type);let Ft;if(et.isData3DTexture)R.setTexture3D(et,0),Ft=C.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)R.setTexture2DArray(et,0),Ft=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,et.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,et.unpackAlignment);const Ot=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ye=C.getParameter(C.UNPACK_SKIP_PIXELS),Me=C.getParameter(C.UNPACK_SKIP_ROWS),An=C.getParameter(C.UNPACK_SKIP_IMAGES),se=tt.isCompressedTexture?tt.mipmaps[J]:tt.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),tt.isDataTexture||tt.isData3DTexture?C.texSubImage3D(Ft,J,W.x,W.y,W.z,yt,bt,Lt,Dt,Ht,se.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Ft,J,W.x,W.y,W.z,yt,bt,Lt,Dt,se.data)):C.texSubImage3D(Ft,J,W.x,W.y,W.z,yt,bt,Lt,Dt,Ht,se),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Me),C.pixelStorei(C.UNPACK_SKIP_IMAGES,An),J===0&&et.generateMipmaps&&C.generateMipmap(Ft),st.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),st.unbindTexture()},this.resetState=function(){T=0,p=0,S=null,st.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bo?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Si:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Si?Ee:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gg extends Eu{}gg.prototype.isWebGL1Renderer=!0;class Ho{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=i}clone(){return new Ho(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _g extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ro,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new G;class fa{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tu extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Pr=new G,tr=new G,er=new G,nr=new Kt,Dr=new Kt,Au=new le,Us=new G,Ur=new G,Is=new G,gc=new Kt,ho=new Kt,_c=new Kt;class xg extends Te{constructor(t=new Tu){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vg(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new fa(i,3,0,!1)),Qi.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ns(Us.set(-.5,-.5,0),er,o,tr,r,s),Ns(Ur.set(.5,-.5,0),er,o,tr,r,s),Ns(Is.set(.5,.5,0),er,o,tr,r,s),gc.set(0,0),ho.set(1,0),_c.set(1,1);let a=t.ray.intersectTriangle(Us,Ur,Is,!1,Pr);if(a===null&&(Ns(Ur.set(-.5,.5,0),er,o,tr,r,s),ho.set(0,1),a=t.ray.intersectTriangle(Us,Is,Ur,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Ze.getInterpolation(Pr,Us,Ur,Is,gc,ho,_c,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ns(n,t,e,i,r,s){nr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Dr.x=s*nr.x-r*nr.y,Dr.y=r*nr.x+s*nr.y):Dr.copy(nr),n.copy(t),n.x+=Dr.x,n.y+=Dr.y,n.applyMatrix4(Au)}class vc extends Xe{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ir=new le,xc=new le,Fs=[],Mc=new Ui,Mg=new le,Ir=new Be,Nr=new Ii;class bu extends Be{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Mg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),Mc.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),Nr.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(i),t.ray.intersectsSphere(Nr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ir),xc.multiplyMatrices(i,ir),Ir.matrixWorld=xc,Ir.raycast(t,Fs);for(let o=0,a=Fs.length;o<a;o++){const l=Fs[o];l.instanceId=s,l.object=this,e.push(l)}Fs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sa extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sc=new G,yc=new G,Ec=new le,po=new zo,Os=new Ii;class wu extends Te{constructor(t=new Re,e=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Sc.fromBufferAttribute(e,r-1),yc.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Sc.distanceTo(yc);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,t.ray.intersectsSphere(Os)===!1)return;Ec.copy(r).invert(),po.copy(t.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,u=new G,h=new G,d=new G,g=this.isLineSegments?2:1,M=i.index,m=i.attributes.position;if(M!==null){const f=Math.max(0,o.start),E=Math.min(M.count,o.start+o.count);for(let v=f,_=E-1;v<_;v+=g){const T=M.getX(v),p=M.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,p),po.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=f,_=E-1;v<_;v+=g){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),po.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const p=t.ray.origin.distanceTo(d);p<t.near||p>t.far||e.push({distance:p,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Tc=new G,Ac=new G;class Ru extends wu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Tc.fromBufferAttribute(e,r),Ac.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tc.distanceTo(Ac);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vo extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bc=new le,Uo=new zo,Bs=new Ii,zs=new G;class Cu extends Te{constructor(t=new Re,e=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;bc.copy(r).invert(),Uo.copy(t.ray).applyMatrix4(bc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let M=d,y=g;M<y;M++){const m=c.getX(M);zs.fromBufferAttribute(h,m),wc(zs,m,l,r,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=d,y=g;M<y;M++)zs.fromBufferAttribute(h,M),wc(zs,M,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wc(n,t,e,i,r,s,o){const a=Uo.distanceSqToPoint(n);if(a<e){const l=new G;Uo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class ha extends We{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Gs=new G,Hs=new G,mo=new G,Vs=new Ze;class Sg extends Re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Qs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},g=[];for(let M=0;M<l;M+=3){o?(c[0]=o.getX(M),c[1]=o.getX(M+1),c[2]=o.getX(M+2)):(c[0]=M,c[1]=M+1,c[2]=M+2);const{a:y,b:m,c:f}=Vs;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Vs.getNormal(mo),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const v=(E+1)%3,_=h[E],T=h[v],p=Vs[u[E]],S=Vs[u[v]],P=`${_}_${T}`,x=`${T}_${_}`;x in d&&d[x]?(mo.dot(d[x].normal)<=s&&(g.push(p.x,p.y,p.z),g.push(S.x,S.y,S.z)),d[x]=null):P in d||(d[P]={index0:c[E],index1:c[v],normal:mo.clone()})}}for(const M in d)if(d[M]){const{index0:y,index1:m}=d[M];Gs.fromBufferAttribute(a,y),Hs.fromBufferAttribute(a,m),g.push(Gs.x,Gs.y,Gs.z),g.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new ze(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const Vt=128,ot=16,Ge=20,yg=240,go=typeof location<"u"?parseInt(new URLSearchParams(location.search).get("dist"),10):NaN,Kn=go>=2&&go<=10?go:6,Eg=2,Tg=1,Ag=2,Mn=48,bg=.5,oe=0,Tn=1,bi=2,me=3,zn=4,Sn=5,wi=6,ni=7,Sr=8,Je=9,yr=10,ri=11,ts=12,es=13,ns=14,is=15,rs=16,da=17,Lu=18,Pu=19,Du=20,ko=21,je=22,_n=23,Qe=24,Ri=25,ya=26,Ea=27,Ta=28,Aa=29,ba=30,Er=31,Gn=32,Tr=33,ss=34,as=35,os=36,Uu=n=>n>=da&&n<=ko,Xr=n=>n===Qe||n===Ri||n===Gn||n===Tr,wa=n=>n===ss||n===as||n===os,Iu=n=>n!==oe&&n!==Je&&n!==_n&&n!==Ri&&n!==Tr&&!Uu(n),pn=n=>Iu(n)&&n!==wi&&n!==je&&n!==Qe&&n!==Er&&n!==Gn&&!wa(n),qe=Iu,_o=n=>n===_n?14:0,_i={[Tn]:[0,1,2],[bi]:[2,2,2],[me]:[3,3,3],[zn]:[4,4,4],[Sn]:[6,5,6],[wi]:[7,7,7],[ni]:[8,8,8],[Sr]:[9,9,9],[Je]:[10,10,10],[yr]:[11,11,11],[ri]:[11,23,2],[ts]:[13,12,13],[es]:[14,14,14],[ns]:[15,15,15],[is]:[16,16,16],[rs]:[17,17,17],[je]:[24,24,24],[_n]:[25,25,25],[Qe]:[26,26,26],[Ri]:[26,26,26],[ya]:[27,27,27],[Ea]:[28,28,28],[Ta]:[29,29,29],[Aa]:[30,30,30],[ba]:[31,31,31],[Er]:[32,32,32],[Gn]:[33,33,33],[Tr]:[33,33,33],[ss]:[3,3,3],[as]:[8,8,8],[os]:[27,27,27]},wg={[da]:18,[Lu]:19,[Pu]:20,[Du]:21,[ko]:22},sn=[Tn,bi,me,Sn,ni,je,_n,Qe,Sr],ea={[Tn]:"Gras",[bi]:"Erde",[me]:"Stein",[zn]:"Sand",[Sn]:"Holz",[ni]:"Bretter",[Sr]:"Ziegel",[yr]:"Schnee",[wi]:"Laub",[ri]:"Schneegras",[ts]:"Kaktus",[es]:"Kohle",[ns]:"Eisen",[is]:"Gold",[rs]:"Diamant",[je]:"Glas",[_n]:"Fackel",[Qe]:"Tür",[ya]:"Steinziegel",[Ea]:"Moosziegel",[Ta]:"Marmor",[Aa]:"Steinplatten",[ba]:"Dunkelholz",[Er]:"Eisengitter",[Gn]:"Gittertür",[ss]:"Steintreppe",[as]:"Holztreppe",[os]:"Ziegeltreppe"},Rg=[Tn,bi,me,zn,Sn,ni,Sr,yr,wi,ri,ts,es,ns,is,rs,je,_n,Qe,ya,Ea,Ta,Aa,ba,Er,Gn,ss,as,os],Rc={[Tn]:6986554,[bi]:8018490,[me]:9079434,[zn]:14208928,[Sn]:7034166,[wi]:4880949,[ni]:12028498,[Sr]:10901578,[yr]:15659766,[ri]:15659766,[ts]:5212730,[es]:3158064,[ns]:13148282,[is]:15255626,[rs]:7332064,[Je]:3829456,[je]:12574954,[_n]:16757818,[Qe]:9071162,[Ri]:9071162,[ya]:8684680,[Ea]:7308392,[Ta]:15265008,[Aa]:10132126,[ba]:5916210,[Er]:10134188,[Gn]:10134188,[Tr]:10134188,[ss]:9079434,[as]:12028498,[os]:8684680},Cg=0,ur=1,qr=2,Ci=3,Yr=4,gr=5,Lg=["Ozean","Ebene","Wald","Wüste","Schnee","Gebirge"],ie=16,Io=34;let Ra=20260612;const Li=()=>Ra;function Nu(n){Ra=n|0}function Pi(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ks(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)+Ra;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Dn(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519)+Ra;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}const Br=n=>n*n*(3-2*n);function Pg(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=ks(e,i),a=ks(e+1,i),l=ks(e,i+1),c=ks(e+1,i+1),u=Br(r),h=Br(s);return o+(a-o)*u+(l-o)*h+(o-a-l+c)*u*h}function Kr(n,t){let e=0,i=.5,r=1;for(let s=0;s<4;s++)e+=i*Pg(n*r,t*r),i*=.5,r*=2;return e}function Dg(n,t,e){const i=Math.floor(n),r=Math.floor(t),s=Math.floor(e),o=n-i,a=t-r,l=e-s,c=Br(o),u=Br(a),h=Br(l),d=(T,p,S)=>T+(p-T)*S,g=Dn(i,r,s),M=Dn(i+1,r,s),y=Dn(i,r+1,s),m=Dn(i+1,r+1,s),f=Dn(i,r,s+1),E=Dn(i+1,r,s+1),v=Dn(i,r+1,s+1),_=Dn(i+1,r+1,s+1);return d(d(d(g,M,c),d(y,m,c),u),d(d(f,E,c),d(v,_,c),u),h)}function vo(n,t,e){let i=0,r=.5,s=1;for(let o=0;o<3;o++)i+=r*Dg(n*s,t*s,e*s),r*=.5,s*=2;return i}const No=[{name:"Hütte",r:2,h:5,flat:2,found:!0,villagers:2,biomes:[ur,qr,Yr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,ni);const i=Math.abs(t)===2||Math.abs(e)===2,r=Math.abs(t)===2&&Math.abs(e)===2;for(let s=1;s<=3;s++)n(t,s,e,i?r?Sn:ni:oe);n(t,4,e,Sn)}n(-2,2,0,je),n(2,2,0,je),n(0,2,-2,je),n(0,1,2,Qe,1),n(0,2,2,Qe,3),n(1,1,-1,_n)}},{name:"Ruine",r:3,h:4,flat:3,found:!0,villagers:0,biomes:null,build(n,t){for(let e=-3;e<=3;e++)for(let i=-3;i<=3;i++)if(n(e,0,i,me),Math.abs(e)===3||Math.abs(i)===3)for(let s=1;s<=3;s++){const o=t()<.9-s*.25,a=t()<.3;o&&n(e,s,i,a?Sr:me)}else t()<.07&&n(e,1,i,me)}},{name:"Turm",r:2,h:8,flat:2,found:!0,villagers:1,biomes:[ur,Ci,gr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,me);const i=Math.abs(t)===2||Math.abs(e)===2;for(let r=1;r<=5;r++)n(t,r,e,i?me:oe);n(t,6,e,me)}n(0,1,2,oe),n(0,2,2,oe),n(-2,3,0,je),n(2,3,0,je),n(0,3,-2,je);for(const[t,e]of[[-2,-2],[2,-2],[-2,2],[2,2],[0,-2],[0,2],[-2,0],[2,0]])n(t,7,e,me);n(0,7,0,_n)}},{name:"Brunnen",r:1,h:4,flat:1,found:!1,villagers:1,biomes:[ur,qr,Ci],build(n){for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,0,e,t===0&&e===0?Je:me);n(0,-1,0,Je),n(0,-2,0,me);for(const[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n(t,1,e,Sn),n(t,2,e,Sn);for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,3,e,ni)}}],Ug=Math.max(...No.map(n=>n.r)),xo=ot*ot*Vt,ae=(n,t,e)=>t*ot*ot+e*ot+n,he=(n,t)=>n+","+t,re=n=>Math.floor(n/ot),ge=n=>(n%ot+ot)%ot,Ve=new Map,yi=new Map;function Ae(n,t){return Ve.get(he(n,t))}function Ig(n,t){const e={cx:n,cz:t,vox:new Uint8Array(xo),meta:new Uint8Array(xo),light:new Uint8Array(xo),state:"empty",dirty:!1};return Ve.set(he(n,t),e),e}function Yt(n,t,e){if(t<0||t>=Vt)return oe;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?oe:i.vox[ae(ge(n),t,ge(e))]}function Ng(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.vox[ae(ge(n),t,ge(e))]=i)}const Fu=(n,t,e)=>t>=0&&t<Vt;function fr(n,t,e){if(t<0||t>=Vt)return 0;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.meta[ae(ge(n),t,ge(e))]}function Fg(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.meta[ae(ge(n),t,ge(e))]=i)}function yn(n,t,e){if(t>=Vt)return 240;if(t<0)return 0;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.light[ae(ge(n),t,ge(e))]}function Cc(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.light[ae(ge(n),t,ge(e))]=i)}function Og(n,t,e,i,r=0){if(t<0||t>=Vt)return;const s=he(re(n),re(e));let o=yi.get(s);o||(o=new Map,yi.set(s,o)),o.set(ae(ge(n),t,ge(e)),i|r<<8)}function Hn(n,t,e,i,r=0){Ng(n,t,e,i),Fg(n,t,e,r),Og(n,t,e,i,r)}function Bg(n){const t=yi.get(he(n.cx,n.cz));if(t)for(const[e,i]of t)n.vox[e]=i&255,n.meta[e]=i>>8&255}function Ou(n){n!==void 0&&Nu(n),Ve.clear(),yi.clear(),Gu()}function $r(n,t,e){if(e<=Ge)return Cg;if(e>Ge+22)return gr;const i=Kr(n*.022+100,t*.022+100)/.9375,r=Kr(n*.022+500,t*.022+500)/.9375;return i<.35?Yr:i>.62&&r<.5?Ci:r>.55?qr:ur}let zr=.42,na=.64,Bu=NaN;const zu=(n,t)=>Kr(n*.0125+10,t*.0125+10);function Gu(){const n=[];for(let t=0;t<320;t+=4)for(let e=0;e<320;e+=4)n.push(zu(t,e));n.sort((t,e)=>t-e),zr=n[Math.floor(n.length*.3)],na=n[Math.floor(n.length*.95)],na-zr<.05&&(na=zr+.05),Bu=Li()}function zg(){Bu!==Li()&&Gu()}function Hu(n,t){zg();const e=zu(n,t),i=Math.max(0,Math.min(1,(e-zr)/(na-zr))),r=(Kr(n*.06,t*.06)/.9375-.5)*7,s=i>.8?Math.pow((i-.8)/.2,1.3)*30:0;return Math.floor(Ge+i*26+r+s)}function Zr(n,t){let e=Hu(n,t);return e<1&&(e=1),e>Vt-6&&(e=Vt-6),e}function Vu(n,t,e){return e||t===Ci?zn:t===Yr?ri:t===gr?n>Ge+30?yr:n>Ge+20?me:Tn:Tn}function pi(n,t,e,i,r){const s=Math.floor(n-i),o=Math.floor(n+i),a=Math.floor(t),l=Math.floor(t+r-.001),c=Math.floor(e-i),u=Math.floor(e+i);for(let h=s;h<=o;h++)for(let d=a;d<=l;d++)for(let g=c;g<=u;g++)if(qe(Yt(h,d,g)))return!0;return!1}function Gg(n){const t=n.vox;t.fill(oe);const e=n.cx*ot,i=n.cz*ot;for(let r=0;r<ot;r++)for(let s=0;s<ot;s++){const o=e+r,a=i+s,l=Zr(o,a),c=$r(o,a,l),u=l<=Ge+1&&c!==gr;for(let h=0;h<=l;h++){let d;h===l?d=Vu(l,c,u):h>l-3?d=c===Ci||u?zn:c===gr?me:bi:d=me,t[ae(r,h,s)]=d}for(let h=l+1;h<=Ge;h++)t[ae(r,h,s)]=Je}for(let r=0;r<ot;r++)for(let s=0;s<ot;s++){const o=e+r,a=i+s;let l=Vt-1;for(;l>0&&t[ae(r,l,s)]===oe;)l--;for(let c=2;c<l-1;c++){const u=t[ae(r,c,s)];if(u!==me&&u!==bi)continue;const h=vo(o*.055,c*.085,a*.055),d=vo(o*.055+40,c*.085+40,a*.055+40),g=vo(o*.028+9,c*.05+9,a*.028+9);if(Math.abs(h-.5)<.066&&Math.abs(d-.5)<.066||g>.82){t[ae(r,c,s)]=oe;continue}if(u===me){const M=Dn(o*7,c*7,a*7);c<10&&M<.002?t[ae(r,c,s)]=rs:c<18&&M<.005?t[ae(r,c,s)]=is:c<32&&M<.009?t[ae(r,c,s)]=ns:M<.015&&(t[ae(r,c,s)]=es)}}}Vg(n),Hg(n),Bg(n),n.state="generated",n.dirty=!1}function Gr(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2246822519)^Li()|0;return Pi(i)}function Fr(n,t,e,i,r,s){if(e<0||e>=Vt||re(t)!==n.cx||re(i)!==n.cz)return;const o=ae(ge(t),e,ge(i));s&&n.vox[o]!==oe||(n.vox[o]=r)}function ku(n,t){const e=Gr(n,t,9);if(e()>=bg)return null;const i=No[Math.floor(e()*No.length)],r=i.r+1,s=n*Mn+r+Math.floor(e()*(Mn-2*r)),o=t*Mn+r+Math.floor(e()*(Mn-2*r)),a=Zr(s,o);if(a<=Ge+1||a+i.h>=Vt-1)return null;const l=$r(s,o,a);if(i.biomes&&!i.biomes.includes(l))return null;let c=a,u=a;for(const[h,d]of[[-i.r,-i.r],[i.r,-i.r],[-i.r,i.r],[i.r,i.r]]){const g=Zr(s+h,o+d);g<c&&(c=g),g>u&&(u=g)}return u-c>i.flat||c<=Ge?null:{def:i,ax:s,az:o,baseY:a}}function Hg(n){const t=n.cx*ot,e=n.cz*ot,i=Ug,r=Math.floor((t-i)/Mn),s=Math.floor((t+ot-1+i)/Mn),o=Math.floor((e-i)/Mn),a=Math.floor((e+ot-1+i)/Mn);for(let l=r;l<=s;l++)for(let c=o;c<=a;c++){const u=ku(l,c);if(!u)continue;const{def:h,ax:d,az:g,baseY:M}=u;if(d+h.r<t||d-h.r>=t+ot||g+h.r<e||g-h.r>=e+ot)continue;const y=(m,f,E,v,_=0)=>{const T=d+m,p=M+f,S=g+E;if(p<0||p>=Vt||re(T)!==n.cx||re(S)!==n.cz)return;const P=ae(ge(T),p,ge(S));n.vox[P]=v,n.meta[P]=_};if(h.build(y,Gr(d,g,11)),h.found)for(let m=-h.r;m<=h.r;m++)for(let f=-h.r;f<=h.r;f++){const E=d+m,v=g+f;if(re(E)!==n.cx||re(v)!==n.cz)continue;const _=ge(E),T=ge(v);for(let p=1;p<=6;p++){const S=M-p;if(S<1)break;const P=ae(_,S,T);if(qe(n.vox[P]))break;n.vox[P]=me}}}}const Ws=2;function Vg(n){const t=n.cx*ot,e=n.cz*ot;for(let i=t-Ws;i<t+ot+Ws;i++)for(let r=e-Ws;r<e+ot+Ws;r++){const s=Zr(i,r);if(s<=Ge)continue;const o=$r(i,r,s),a=s<=Ge+1&&o!==gr,l=Vu(s,o,a);if(o===Ci&&l===zn){const M=Gr(i,r,1);if(M()<.02){const y=2+Math.floor(M()*2);for(let m=1;m<=y;m++)Fr(n,i,s+m,r,ts,!0)}continue}if(l!==Tn&&l!==ri)continue;const c=o===qr?.02:o===ur?.004:o===Yr?.006:.0015,u=Gr(i,r,1);if(u()>=c)continue;const h=o===Yr,d=4+Math.floor(u()*3);for(let M=1;M<=d;M++)Fr(n,i,s+M,r,Sn,!1);const g=s+d;for(let M=-2;M<=2;M++)for(let y=-2;y<=2;y++)for(let m=0;m<=2;m++){const f=Math.abs(M)+Math.abs(y)+m,E=u()>.08;f<=3&&!(M===0&&y===0&&m<1)&&E&&Fr(n,i+M,g+m,r+y,wi,!0)}Fr(n,i,g+2,r,wi,!0),h&&Fr(n,i,g+3,r,yr,!0)}for(let i=0;i<ot;i++)for(let r=0;r<ot;r++){const s=t+i,o=e+r,a=Zr(s,o);if(a<=Ge||n.vox[ae(i,a+1,r)]!==oe)continue;const l=n.vox[ae(i,a,r)],c=$r(s,o,a);let u=0;const h=Gr(s,o,2);if(l===Tn){const d=h();d<.1?u=da:d<.13?u=Lu:d<.16?u=Pu:d<.175&&(u=Du)}else l===ri?h()<.05&&(u=da):l===zn&&c===Ci&&h()<.02&&(u=ko);u&&(n.vox[ae(i,a+1,r)]=u)}}const pa=1337,ls=document.createElement("canvas");ls.width=ie*Io;ls.height=ie;const Lc=ls.getContext("2d"),si=(n,t,e,i)=>{Lc.fillStyle=i,Lc.fillRect(n*ie+t,e,1,1)};function de(n,t,e,i){const r=Pi(pa+n*991);for(let s=0;s<ie;s++)for(let o=0;o<ie;o++){let[a,l,c]=t;if(c+=(r()-.5)*e,i){const u=i(o,s,r);if(u===null)continue;u&&(a=u[0],l=u[1],c=u[2]+(r()-.5)*e)}si(n,o,s,`hsl(${a},${l}%,${c}%)`)}}function Ca(n,t){const e=Pi(pa+n*131);for(let r=0;r<ie;r++)for(let s=0;s<ie;s++)si(n,s,r,`hsl(220,4%,${46+(e()-.5)*10}%)`);const i=Pi(pa+n*977);for(let r=0;r<11;r++){const s=1+Math.floor(i()*13),o=1+Math.floor(i()*13);for(const[a,l]of[[0,0],[1,0],[0,1],[1,1]])si(n,s+a,o+l,t)}}function Fi(n,t){for(let e=0;e<ie;e++)for(let i=0;i<ie;i++){const r=t(i,e);r&&si(n,i,e,r)}}de(0,[105,45,38],12);de(1,[28,42,32],10,(n,t,e)=>t<4?[105,45,36]:t<5&&e()<.5?[105,45,34]:0);de(2,[28,42,32],12);de(3,[220,4,46],10,(n,t,e)=>e()<.06?[220,4,30]:0);de(4,[48,55,72],8);de(5,[28,50,26],8,n=>n%5===0?[28,50,18]:0);de(6,[35,45,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))%3===0?[35,45,28]:0);de(7,[110,48,28],14,(n,t,e)=>e()<.1?[110,50,18]:0);de(8,[32,48,46],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[32,40,30]:0);de(9,[8,55,42],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[20,20,75]:0);de(10,[214,70,52],8);de(11,[205,25,93],4);de(23,[28,42,32],10,(n,t,e)=>t<5?[205,20,92]:t<7&&e()<.5?[205,20,88]:0);de(12,[110,40,36],8,n=>n===2||n===8||n===13?[110,45,26]:n===5||n===11?[110,38,44]:0);de(13,[110,42,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))>6?[110,45,30]:0);Ca(14,"#202024");Ca(15,"#c8a078");Ca(16,"#e8c84a");Ca(17,"#5fd8e0");Fi(18,(n,t)=>t<5?null:[3,6,8,11,13].includes(n)&&t>3+n*7%4?`hsl(100,45%,${30+n%3*6}%)`:null);Fi(19,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(0,70%,55%)":null);Fi(20,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(50,85%,55%)":null);Fi(21,(n,t)=>n>=7&&n<=8&&t>=8?"hsl(40,15%,82%)":t>=4&&t<=8&&n>=4&&n<=11&&Math.abs(n-7.5)+Math.abs(t-6)<4?"hsl(0,55%,45%)":null);Fi(22,(n,t)=>{const e=Math.abs(n-8)+Math.abs(t-10)<5&&(n+t)%2===0;return t>5&&e?"hsl(30,40%,32%)":null});(()=>{for(let t=0;t<ie;t++)for(let e=0;e<ie;e++)e===0||t===0||e===ie-1||t===ie-1?si(24,e,t,"hsl(200,28%,80%)"):(e-t===3||e-t===4)&&e<9&&si(24,e,t,"hsl(200,45%,92%)")})();(()=>{const t=Pi(pa+3275);for(let e=0;e<ie;e++)for(let i=0;i<ie;i++)i>=6&&i<=9&&(e>=7?si(25,i,e,`hsl(28,52%,${30+(t()-.5)*10}%)`):e>=2&&e<=6&&si(25,i,e,`hsl(${34+t()*16},92%,${56+(t()-.5)*16}%)`))})();de(26,[30,46,38],8,(n,t)=>n<=1||n>=14||t<=1||t>=14||n>=6&&n<=9&&(t===7||t===8)?[30,40,26]:n===12&&t>=7&&t<=9?[44,25,78]:0);de(27,[220,5,52],8,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[220,6,34]:0);de(28,[220,5,50],8,(n,t,e)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?e()<.3?[110,30,30]:[220,6,32]:e()<.16?[110,32,36]:0);de(29,[210,10,88],4,(n,t)=>(n+t*2)%13===0?[215,14,74]:(n*2+t)%11===0?[210,12,80]:0);de(30,[220,4,58],6,(n,t)=>n%8===0||t%8===0?[220,5,38]:0);de(31,[24,40,22],5,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[24,36,13]:0);Fi(32,(n,t)=>n===2||n===3||n===7||n===8||n===12||n===13||(t===7||t===8)?`hsl(210,6%,${52+(n*5+t*3)%3*4}%)`:null);Fi(33,(n,t)=>{const e=n<=1||n>=14||t<=1||t>=14,i=n===4||n===5||n===10||n===11||t===7||t===8;return e?"hsl(210,8%,42%)":i?`hsl(210,6%,${54+(n*5+t*3)%3*4}%)`:null});const Wu=ls,vi=new ha(ls);vi.magFilter=ye;vi.minFilter=ye;vi.colorSpace=Ee;function ia(n,t,e){const i=(n*ie+.5)/(ie*Io),r=((n+1)*ie-.5)/(ie*Io),s=.5/ie,o=(ie-.5)/ie;return[i+(r-i)*t,s+(o-s)*e]}const Xu={uDayBright:{value:1}};function kg(n){Xu.uDayBright.value=n}function Xs(n){return n.onBeforeCompile=t=>{t.uniforms.uDayBright=Xu.uDayBright,t.fragmentShader=`uniform float uDayBright;
`+t.fragmentShader.replace("#include <color_fragment>",`#ifdef USE_COLOR
         float _sky = vColor.r, _blk = vColor.g, _ao = vColor.b;
         float _lit = max(_sky * uDayBright, _blk);
         _lit = max(_lit, 0.05);          // minimaler Ambient -> nie komplett schwarz
         diffuseColor.rgb *= _lit * _ao;
       #endif`)},n.customProgramCacheKey=()=>"bw-light-v1",n}function Wg(){const n=Xs(new ln({map:vi,vertexColors:!0})),t=Xs(new ln({map:vi,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1})),e=Xs(new ln({map:vi,vertexColors:!0,alphaTest:.5,side:an})),i=Xs(new ln({map:vi,vertexColors:!0,alphaTest:.5,side:an}));return{matSolid:n,matWater:t,matPlant:e,matGlass:i}}const Pc=[{dir:[-1,0,0],sh:.72,c:[[0,1,0,0,1],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,1,0]]},{dir:[1,0,0],sh:.72,c:[[1,1,1,0,1],[1,0,1,0,0],[1,1,0,1,1],[1,0,0,1,0]]},{dir:[0,-1,0],sh:.5,c:[[1,0,1,1,0],[0,0,1,0,0],[1,0,0,1,1],[0,0,0,0,1]]},{dir:[0,1,0],sh:1,c:[[0,1,1,1,1],[1,1,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]},{dir:[0,0,-1],sh:.86,c:[[1,0,0,0,0],[0,0,0,1,0],[1,1,0,0,1],[0,1,0,1,1]]},{dir:[0,0,1],sh:.86,c:[[0,0,1,0,0],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,1,1]]}],Dc=[.42,.62,.8,1],Xg=[[[0,0,0],[1,0,1],[0,1,0],[1,1,1]],[[1,0,0],[0,0,1],[1,1,0],[0,1,1]]];function Uc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,u=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[u]=r[u]?1:-1;const g=qe(Yt(s+h[0],o+h[1],a+h[2]))?1:0,M=qe(Yt(s+d[0],o+d[1],a+d[2]))?1:0,y=qe(Yt(s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]))?1:0;return g&&M?0:3-(g+M+y)}function Ic(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,u=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[u]=r[u]?1:-1;const g=[[s,o,a],[s+h[0],o+h[1],a+h[2]],[s+d[0],o+d[1],a+d[2]],[s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]]];let M=0,y=0,m=0;for(const[f,E,v]of g){if(pn(Yt(f,E,v)))continue;const _=yn(f,E,v);M+=_>>4,y+=_&15,m++}if(m===0){const f=yn(s,o,a);return[f>>4,f&15]}return[M/m,y/m]}const qs=["solid","water","plant","glass"];function rr(n,t,e,i,r,s,o,a,l){const c=n.p.length/3,u=[t,e,i,r],h=[[0,0],[1,0],[0,1],[1,1]];for(let d=0;d<4;d++){n.p.push(u[d][0],u[d][1],u[d][2]);const g=ia(s,h[d][0],h[d][1]);n.u.push(g[0],g[1]),n.c.push(o,a,l)}n.i.push(c,c+1,c+2,c+2,c+1,c+3)}function Ys(n,t,e,i,r,s,o,a,l,c,u){const h=yn(l,c,u),d=(h>>4)/15,g=(h&15)/15;rr(n,[t,e,o],[r,e,o],[t,s,o],[r,s,o],a,d,g,.86),rr(n,[r,e,i],[t,e,i],[r,s,i],[t,s,i],a,d,g,.86),rr(n,[r,e,o],[r,e,i],[r,s,o],[r,s,i],a,d,g,.72),rr(n,[t,e,i],[t,e,o],[t,s,i],[t,s,o],a,d,g,.72),rr(n,[t,s,o],[r,s,o],[t,s,i],[r,s,i],a,d,g,1),rr(n,[t,e,i],[r,e,i],[t,e,o],[r,e,o],a,d,g,.5)}function qg({scene:n,materials:t}){const{matSolid:e,matWater:i,matPlant:r,matGlass:s}=t,o={solid:e,water:i,plant:r,glass:s},a={};function l(g,M){const y=he(g,M),m=a[y];if(m)for(const f of qs)m[f]&&(n.remove(m[f]),m[f].geometry.dispose());delete a[y]}function c(){for(const g in a){const M=a[g];for(const y of qs)M[y]&&(n.remove(M[y]),M[y].geometry.dispose());delete a[g]}}function u(g,M){const y=he(g,M),m=a[y];if(m)for(const S of qs)m[S]&&(n.remove(m[S]),m[S].geometry.dispose());const f=Ae(g,M);if(!f||f.state==="empty"){delete a[y];return}const E=f.vox,v={solid:{p:[],u:[],c:[],i:[]},water:{p:[],u:[],c:[],i:[]},plant:{p:[],u:[],c:[],i:[]},glass:{p:[],u:[],c:[],i:[]}},_=g*ot,T=M*ot;for(let S=0;S<ot;S++)for(let P=0;P<ot;P++)for(let x=0;x<Vt;x++){const A=E[ae(S,x,P)];if(A===oe)continue;const L=_+S,N=T+P;if(Uu(A)){const H=wg[A],z=v.plant,k=yn(L,x,N),K=(k>>4)/15,V=(k&15)/15;for(const I of Xg){const Q=z.p.length/3,rt=[[0,0],[1,0],[0,1],[1,1]];for(let ht=0;ht<4;ht++){const dt=I[ht];z.p.push(L+.04+dt[0]*.92,x+dt[1],N+.04+dt[2]*.92);const ft=ia(H,rt[ht][0],rt[ht][1]);z.u.push(ft[0],ft[1]),z.c.push(K,V,.9)}z.i.push(Q,Q+1,Q+2,Q+2,Q+1,Q+3)}continue}if(A===_n){Ys(v.plant,L+.44,x,N+.44,L+.56,x+.62,N+.56,_i[_n][0],L,x,N);continue}if(Xr(A)){const H=fr(L,x,N),z=(H&1)===1,k=A===Ri||A===Tr;let K,V,I,Q;k?z?(K=L,V=L+.18,I=N,Q=N+1):(I=N,Q=N+.18,K=L,V=L+1):z?(I=N+.41,Q=N+.59,K=L,V=L+1):(K=L+.41,V=L+.59,I=N,Q=N+1),Ys(v.plant,K,x,I,V,x+1,Q,_i[A][0],L,x,N);continue}if(wa(A)){const H=fr(L,x,N)&3,z=_i[A][1];Ys(v.plant,L,x,N,L+1,x+.5,N+1,z,L,x,N);let k=L,K=L+1,V=N,I=N+1;H===0?I=N+.5:H===1?k=L+.5:H===2?V=N+.5:K=L+.5,Ys(v.plant,k,x+.5,V,K,x+1,I,z,L,x,N);continue}if(A===je||A===Er){const H=v.glass,[z,k,K]=_i[A];for(let V=0;V<6;V++){const I=Pc[V],Q=Yt(L+I.dir[0],x+I.dir[1],N+I.dir[2]);if(pn(Q)||Q===A)continue;const rt=I.dir[1]===1?z:I.dir[1]===-1?K:k,ht=H.p.length/3,dt=[];for(const ft of I.c){H.p.push(L+ft[0],x+ft[1],N+ft[2]);const Z=ia(rt,ft[3],ft[4]);H.u.push(Z[0],Z[1]);const U=Uc(L,x,N,I.dir,ft);dt.push(U);const q=I.sh*Dc[U],[C,nt]=Ic(L,x,N,I.dir,ft);H.c.push(C/15,nt/15,q)}dt[0]+dt[3]>dt[1]+dt[2]?H.i.push(ht,ht+1,ht+3,ht,ht+3,ht+2):H.i.push(ht,ht+1,ht+2,ht+2,ht+1,ht+3)}continue}const $=A===Je,D=$?v.water:v.solid,[B,O,Y]=_i[A];for(let H=0;H<6;H++){const z=Pc[H],k=Yt(L+z.dir[0],x+z.dir[1],N+z.dir[2]);if(!($?k===oe:!pn(k)&&k!==A))continue;const V=z.dir[1]===1?B:z.dir[1]===-1?Y:O,I=D.p.length/3,Q=[];for(const rt of z.c){D.p.push(L+rt[0],x+rt[1],N+rt[2]);const ht=ia(V,rt[3],rt[4]);D.u.push(ht[0],ht[1]);const dt=$?3:Uc(L,x,N,z.dir,rt);Q.push(dt);const ft=z.sh*Dc[dt],[Z,U]=Ic(L,x,N,z.dir,rt);D.c.push(Z/15,U/15,ft)}Q[0]+Q[3]>Q[1]+Q[2]?D.i.push(I,I+1,I+3,I,I+3,I+2):D.i.push(I,I+1,I+2,I+2,I+1,I+3)}}const p={solid:null,water:null,plant:null,glass:null};for(const S of qs){const P=v[S];if(!P.i.length)continue;const x=new Re;x.setAttribute("position",new ze(P.p,3)),x.setAttribute("uv",new ze(P.u,2)),x.setAttribute("color",new ze(P.c,3)),x.setIndex(P.i);const A=new Be(x,o[S]);n.add(A),p[S]=A}a[y]=p,f.state="meshed",f.dirty=!1}function h(g,M){const y=Ae(g,M);y&&y.state==="meshed"&&u(g,M)}function d(g,M){const y=Math.floor(g/ot),m=Math.floor(M/ot);u(y,m);const f=(g%ot+ot)%ot,E=(M%ot+ot)%ot;f===0&&h(y-1,m),f===ot-1&&h(y+1,m),E===0&&h(y,m-1),E===ot-1&&h(y,m+1)}return{rebuildAt:d,buildChunk:u,disposeChunk:l,disposeAll:c,chunkMeshes:a}}const dn=15;function Yg(){let n=new Set;const t=(_,T)=>n.add(he(re(_),re(T))),e=(_,T,p)=>yn(_,T,p)>>4,i=(_,T,p)=>yn(_,T,p)&15,r=(_,T,p,S)=>Cc(_,T,p,S<<4|yn(_,T,p)&15),s=(_,T,p,S)=>Cc(_,T,p,yn(_,T,p)&240|S);let o=[],a=[],l=[];const c=(_,T)=>{const p=Ae(re(_),re(T));return p&&p.state!=="empty"};function u(_,T,p,S){S<=0||T<0||T>=Vt||c(_,p)&&(pn(Yt(_,T,p))||e(_,T,p)>=S||(r(_,T,p,S),t(_,p),o.push(_),a.push(T),l.push(p)))}function h(){let _=0;for(;_<o.length;){const T=o[_],p=a[_],S=l[_];_++;const P=e(T,p,S);if(P<=1)continue;const x=P-1;u(T-1,p,S,x),u(T+1,p,S,x),u(T,p,S-1,x),u(T,p,S+1,x),u(T,p+1,S,x),u(T,p-1,S,P===dn?dn:x)}o=[],a=[],l=[]}function d(_,T,p,S){S<=0||T<0||T>=Vt||c(_,p)&&(pn(Yt(_,T,p))||i(_,T,p)>=S||(s(_,T,p,S),t(_,p),o.push(_),a.push(T),l.push(p)))}function g(){let _=0;for(;_<o.length;){const T=o[_],p=a[_],S=l[_];_++;const P=i(T,p,S)-1;d(T-1,p,S,P),d(T+1,p,S,P),d(T,p,S-1,P),d(T,p,S+1,P),d(T,p+1,S,P),d(T,p-1,S,P)}o=[],a=[],l=[]}function M(_,T){const p=Ae(_,T);if(!p)return new Set;n=new Set,n.add(he(_,T));const S=_*ot,P=T*ot,x=new Array(9);for(let Z=-1;Z<=1;Z++)for(let U=-1;U<=1;U++)x[(Z+1)*3+(U+1)]=Ae(_+U,T+Z);const A=(Z,U)=>{const q=Math.floor(Z/ot)-_,C=Math.floor(U/ot)-T;return q<-1||q>1||C<-1||C>1?null:x[(C+1)*3+(q+1)]},L=(Z,U,q)=>U*ot*ot+(q%ot+ot)%ot*ot+(Z%ot+ot)%ot,N=(Z,U,q)=>{if(U<0||U>=Vt)return U<0;const C=A(Z,q);return!C||C.state==="empty"?!0:pn(C.vox[L(Z,U,q)])},$=(Z,U,q)=>{if(U>=Vt)return dn;if(U<0)return 0;const C=A(Z,q);return!C||C.state==="empty"?0:C.light[L(Z,U,q)]>>4},D=(Z,U,q,C)=>{const nt=A(Z,q);if(!nt)return;const X=L(Z,U,q);nt.light[X]=nt.light[X]&15|C<<4,nt!==p&&n.add(he(nt.cx,nt.cz))},B=[],O=[],Y=[],H=(Z,U,q,C)=>C>0&&U>=0&&U<Vt&&!N(Z,U,q)&&$(Z,U,q)<C,z=(Z,U,q,C)=>H(Z-1,U,q,C-1)||H(Z+1,U,q,C-1)||H(Z,U,q-1,C-1)||H(Z,U,q+1,C-1)||H(Z,U+1,q,C-1)||H(Z,U-1,q,C===dn?dn:C-1),k=ot+2,K=new Int16Array(k*k).fill(-1),V=(Z,U)=>(U+1)*k+(Z+1);for(let Z=0;Z<ot;Z++)for(let U=0;U<ot;U++){let q=!0,C=-1;for(let nt=Vt-1;nt>=0;nt--){const X=nt*ot*ot+U*ot+Z;pn(p.vox[X])&&(q=!1,C<0&&(C=nt)),p.light[X]=p.light[X]&15|(q?dn:0)<<4}K[V(Z,U)]=C}const I=(Z,U)=>{const q=S+Z,C=P+U;let nt=-1;for(let X=Vt-1;X>=0;X--)if(N(q,X,C)){nt=X;break}K[V(Z,U)]=nt};for(let Z=-1;Z<=ot;Z++)I(Z,-1),I(Z,ot);for(let Z=0;Z<ot;Z++)I(-1,Z),I(ot,Z);let Q=-1;for(let Z=0;Z<ot;Z++)for(let U=0;U<ot;U++){const q=Math.max(K[V(Z,U)],K[V(Z-1,U)],K[V(Z+1,U)],K[V(Z,U-1)],K[V(Z,U+1)]);q>Q&&(Q=q);const C=S+Z,nt=P+U,X=Math.min(q+1,Vt-1);for(let it=0;it<=X;it++){const st=p.light[it*ot*ot+U*ot+Z]>>4;st<=1||z(C,it,nt,st)&&(B.push(C),O.push(it),Y.push(nt))}}const rt=Math.min(Q+1,Vt-1);for(let Z=0;Z<=rt;Z++)for(let U=0;U<ot;U++)ht(S-1,Z,P+U,S,Z,P+U),ht(S+ot,Z,P+U,S+ot-1,Z,P+U),ht(S+U,Z,P-1,S+U,Z,P),ht(S+U,Z,P+ot,S+U,Z,P+ot-1);function ht(Z,U,q,C,nt,X){if(N(Z,U,q))return;const it=$(Z,U,q);it<=1||N(C,nt,X)||$(C,nt,X)>=it-1||(B.push(Z),O.push(U),Y.push(q))}const dt=(Z,U,q,C)=>{C<=0||U<0||U>=Vt||N(Z,U,q)||$(Z,U,q)>=C||(D(Z,U,q,C),B.push(Z),O.push(U),Y.push(q))};let ft=0;for(;ft<B.length;){const Z=B[ft],U=O[ft],q=Y[ft];ft++;const C=$(Z,U,q);if(C<=1)continue;const nt=C-1;dt(Z-1,U,q,nt),dt(Z+1,U,q,nt),dt(Z,U,q-1,nt),dt(Z,U,q+1,nt),dt(Z,U+1,q,nt),dt(Z,U-1,q,C===dn?dn:nt)}return n}function y(_,T){const p=Ae(_,T);if(!p)return new Set;n=new Set,n.add(he(_,T));const S=_*ot,P=T*ot,x=ot*ot;for(let L=0;L<p.vox.length;L++){const N=_o(p.vox[L]);if(!N)continue;const $=L/x|0,D=L%x,B=S+D%ot,O=P+(D/ot|0);(p.light[L]&15)<N&&(p.light[L]=p.light[L]&240|N,o.push(B),a.push($),l.push(O))}const A=(L,N,$,D,B)=>{if(!(!L||L.state==="empty"))for(let O=0;O<Vt;O++)for(let Y=0;Y<ot;Y++){const H=N(Y),z=$(Y),k=L.light[O*x+z*ot+H]&15;if(k<=1)continue;const K=O*x+B(Y)*ot+D(Y);(p.light[K]&15)>=k-1||pn(p.vox[K])||(o.push(L.cx*ot+H),a.push(O),l.push(L.cz*ot+z))}};return A(Ae(_-1,T),()=>ot-1,L=>L,()=>0,L=>L),A(Ae(_+1,T),()=>0,L=>L,()=>ot-1,L=>L),A(Ae(_,T-1),L=>L,()=>ot-1,L=>L,()=>0),A(Ae(_,T+1),L=>L,()=>0,L=>L,()=>ot-1),g(),n}function m(_,T,p){const S=e(_,T,p);if(S===0)return;r(_,T,p,0),t(_,p);const P=[_],x=[T],A=[p],L=[S],N=[],$=[],D=[];let B=0;for(;B<P.length;){const O=P[B],Y=x[B],H=A[B],z=L[B];B++;const k=[[O-1,Y,H,!1],[O+1,Y,H,!1],[O,Y,H-1,!1],[O,Y,H+1,!1],[O,Y+1,H,!1],[O,Y-1,H,!0]];for(const[K,V,I,Q]of k){if(V<0||V>=Vt||!c(K,I))continue;const rt=e(K,V,I);rt!==0&&(rt<z||Q&&z===dn?(r(K,V,I,0),t(K,I),P.push(K),x.push(V),A.push(I),L.push(rt)):(N.push(K),$.push(V),D.push(I)))}}for(let O=0;O<N.length;O++)o.push(N[O]),a.push($[O]),l.push(D[O]);h()}function f(_,T,p){let S=0;e(_,T+1,p)===dn&&!pn(Yt(_,T+1,p))&&(S=dn);for(const[P,x,A]of[[_-1,T,p],[_+1,T,p],[_,T,p-1],[_,T,p+1],[_,T+1,p],[_,T-1,p]]){const L=e(P,x,A)-1;L>S&&(S=L)}S>0&&(r(_,T,p,S),t(_,p),o.push(_),a.push(T),l.push(p),h())}function E(_,T,p){const S=i(_,T,p);if(S===0)return;s(_,T,p,0),t(_,p);const P=[_],x=[T],A=[p],L=[S],N=[],$=[],D=[];let B=0;for(;B<P.length;){const O=P[B],Y=x[B],H=A[B],z=L[B];B++;for(const[k,K,V]of[[O-1,Y,H],[O+1,Y,H],[O,Y,H-1],[O,Y,H+1],[O,Y+1,H],[O,Y-1,H]]){if(K<0||K>=Vt||!c(k,V))continue;const I=i(k,K,V);I!==0&&(I<z?(s(k,K,V,0),t(k,V),P.push(k),x.push(K),A.push(V),L.push(I)):(N.push(k),$.push(K),D.push(V)))}}for(let O=0;O<N.length;O++)o.push(N[O]),a.push($[O]),l.push(D[O]);g()}function v(_,T,p,S,P){n=new Set;const x=pn(S),A=pn(P);A&&!x?m(_,T,p):!A&&x&&f(_,T,p);const L=_o(S),N=_o(P);if(N>L?(s(_,T,p,N),t(_,p),o.push(_),a.push(T),l.push(p),g()):N<L&&E(_,T,p),!A&&x){let $=0;for(const[D,B,O]of[[_-1,T,p],[_+1,T,p],[_,T,p-1],[_,T,p+1],[_,T+1,p],[_,T-1,p]]){const Y=i(D,B,O)-1;Y>$&&($=Y)}$>i(_,T,p)&&(s(_,T,p,$),t(_,p),o.push(_),a.push(T),l.push(p),g())}return n}return{computeChunkSkylight:M,seedChunkBlocklight:y,relight:v,getSky:e,getBlk:i}}function Kg({mesher:n,light:t}){const e=E=>Math.floor(E/ot),i=(E,v,_,T)=>Math.max(Math.abs(E-_),Math.abs(v-T));let r=[],s=NaN,o=NaN,a=!1;const l=E=>{a=E};function c(E,v){let _=Ae(E,v);_||(_=Ig(E,v)),_.state==="empty"&&Gg(_)}function u(E,v){const _=Ae(E,v);if(!_||_.state!=="generated")return;const T=t.computeChunkSkylight(E,v),p=t.seedChunkBlocklight(E,v);_.state="lit";for(const S of[T,p])for(const P of S){const x=Ve.get(P);x&&x.state==="meshed"&&(x.dirty=!0)}}const h=E=>E&&(E.state==="lit"||E.state==="meshed");function d(E,v){for(let _=-1;_<=1;_++)for(let T=-1;T<=1;T++)if(!h(Ae(E+_,v+T)))return!1;return!0}function g(E,v){const _=e(E),T=e(v);s=_,o=T;for(const[S,P]of Ve)i(P.cx,P.cz,_,T)>Kn+2&&(n.disposeChunk(P.cx,P.cz),Ve.delete(S));const p=Kn+1;r=[];for(let S=_-p;S<=_+p;S++)for(let P=T-p;P<=T+p;P++){const x=Ae(S,P);(!x||x.state==="empty")&&r.push([S,P])}r.sort((S,P)=>i(S[0],S[1],_,T)-i(P[0],P[1],_,T))}function M(E,v){const _=e(E),T=e(v),p=Kn+1;let S=a?1:1/0,P=0;for(;r.length&&P<Eg&&S>0;){const[L,N]=r.shift();c(L,N),P++,S--}const x=[];for(let L=_-p;L<=_+p;L++)for(let N=T-p;N<=T+p;N++){const $=Ae(L,N);$&&$.state==="generated"&&x.push([L,N])}x.sort((L,N)=>i(L[0],L[1],_,T)-i(N[0],N[1],_,T));for(let L=0;L<Tg&&L<x.length&&S>0;L++)u(x[L][0],x[L][1]),S--;const A=[];for(let L=_-Kn;L<=_+Kn;L++)for(let N=T-Kn;N<=T+Kn;N++){const $=Ae(L,N);!$||$.state==="empty"||$.state==="generated"||($.state==="lit"||$.dirty)&&d(L,N)&&A.push([L,N])}A.sort((L,N)=>i(L[0],L[1],_,T)-i(N[0],N[1],_,T));for(let L=0;L<Ag&&L<A.length&&S>0;L++)n.buildChunk(A[L][0],A[L][1]),S--}function y(E,v){const _=e(E),T=e(v);(_!==s||T!==o)&&g(E,v),M(E,v)}function m(E,v,_=3){const T=e(E),p=e(v);for(let S=T-_-1;S<=T+_+1;S++)for(let P=p-_-1;P<=p+_+1;P++)c(S,P);for(let S=T-_-1;S<=T+_+1;S++)for(let P=p-_-1;P<=p+_+1;P++)u(S,P);for(let S=T-_;S<=T+_;S++)for(let P=p-_;P<=p+_;P++)d(S,P)&&n.buildChunk(S,P);s=NaN}return{update:y,ensureAround:g,tick:M,warmup:m,loadedCount:()=>Ve.size,setVRMode:l}}const Ks=8,$s=8;function $g({camera:n,ctx:t}){const e={pos:new G(Ks+.5,Vt,$s+.5),vel:new G,yaw:Math.PI*.25,pitch:-.1,onGround:!1,fly:!1,W:.3,H:1.8,EYE:1.62};let i=0,r=!1,s=0,o=!1,a=!1;const l=E=>pi(E.x,E.y,E.z,e.W,e.H);function c(){const E=Math.floor(e.pos.y),v=Math.floor(e.pos.x-e.W),_=Math.floor(e.pos.x+e.W),T=Math.floor(e.pos.z-e.W),p=Math.floor(e.pos.z+e.W);for(let S=v;S<=_;S++)for(let P=T;P<=p;P++)if(wa(Yt(S,E,P)))return!0;return!1}function u(E,v){if(v)if(e.pos[E]+=v,l(e.pos)){if(E!=="y"&&!e.fly&&(e.onGround&&c()||a)){const T=e.pos.y;if(e.pos.y=Math.floor(T)+1.001,!l(e.pos)){e.vel.y=0;return}e.pos.y=T}const _=Math.sign(v);E==="x"&&(e.pos.x=_>0?Math.floor(e.pos.x+e.W)-e.W-.001:Math.floor(e.pos.x-e.W)+1+e.W+.001),E==="z"&&(e.pos.z=_>0?Math.floor(e.pos.z+e.W)-e.W-.001:Math.floor(e.pos.z-e.W)+1+e.W+.001),E==="y"&&(_>0?e.pos.y=Math.floor(e.pos.y+e.H)-e.H-.001:(e.pos.y=Math.floor(e.pos.y)+1.001,e.onGround=!0),e.vel.y=0)}else E==="y"&&v<0&&(e.onGround=!1)}function h(){for(let v=0;v<=48;v++)for(let _=-v;_<=v;_++)for(let T=-v;T<=v;T++){if(Math.max(Math.abs(_),Math.abs(T))!==v)continue;const p=Ks+_,S=$s+T;let P=Vt-1;for(;P>0&&Yt(p,P,S)===0;)P--;if(P>Ge&&qe(Yt(p,P,S)))return{x:p,y:P,z:S}}let E=Vt-1;for(;E>0&&Yt(Ks,E,$s)===0;)E--;return{x:Ks,y:E,z:$s}}function d(E){if(E){e.pos.set(E[0],E[1],E[2]),e.yaw=E[3]??e.yaw,e.pitch=E[4]??e.pitch,e.vel.set(0,0,0);return}const v=h();e.pos.set(v.x+.5,v.y+1.01,v.z+.5),e.vel.set(0,0,0)}function g(E){const v={step:null,land:null,splash:!1},_=t.keys,T=e.fly?12:5.4;let p=0,S=0;_.KeyW&&(S-=1),_.KeyS&&(S+=1),_.KeyA&&(p-=1),_.KeyD&&(p+=1);const P=Math.hypot(p,S)||1,x=Math.sin(e.yaw),A=Math.cos(e.yaw);let L=(p*A+S*x)/P*T,N=(S*A-p*x)/P*T;if(t.vrMove&&(L=t.vrMove.x*T,N=t.vrMove.z*T),e.fly){e.vel.y=0;const $=Math.cos(e.pitch),D=Math.sin(e.pitch),B=-S/P,O=p/P;let Y=(B*-x*$+O*A)*T,H=(B*-A*$-O*x)*T,z=B*D*T;t.vrMove&&(Y=t.vrMove.x*T,z=(t.vrMove.y||0)*T,H=t.vrMove.z*T),_.Space&&(z=T),(_.ShiftLeft||_.ShiftRight)&&(z=-T),u("x",Y*E),u("z",H*E),u("y",z*E)}else{s=e.vel.y,o=e.onGround,e.vel.y-=28*E,_.Space&&e.onGround&&(e.vel.y=8.6,e.onGround=!1);const $=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y+.5),Math.floor(e.pos.z))===Je;$&&!r&&s<-3&&(v.splash=!0),r=$,a=$,$&&(e.vel.y=Math.max(e.vel.y,-3),_.Space&&(e.vel.y=3.2)),u("x",L*E*($?.6:1)),u("z",N*E*($?.6:1)),u("y",e.vel.y*E),!o&&e.onGround&&s<-7&&(v.land=-s-7),e.onGround&&(L||N)&&!$?(i+=Math.hypot(L,N)*E,i>2.2&&(i=0,v.step=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y-.5),Math.floor(e.pos.z)))):i=0,e.pos.y<-20&&d(null)}return v}function M(E,v,_,T){let p=Math.floor(E),S=Math.floor(v),P=Math.floor(_);const x=Math.sign(T.x),A=Math.sign(T.y),L=Math.sign(T.z),N=Math.abs(1/T.x),$=Math.abs(1/T.y),D=Math.abs(1/T.z);let B=(x>0?p+1-E:E-p)*N,O=(A>0?S+1-v:v-S)*$,Y=(L>0?P+1-_:_-P)*D,H=0,z=0,k=0,K=0;for(let V=0;V<140;V++){if(B<O&&B<Y){if(B>8)break;K=B,p+=x,H=-x,z=0,k=0,B+=N}else if(O<Y){if(O>8)break;K=O,S+=A,z=-A,H=0,k=0,O+=$}else{if(Y>8)break;K=Y,P+=L,k=-L,H=0,z=0,Y+=D}const I=Yt(p,S,P);if(I!==0&&I!==Je&&!(I>=17&&I<=21))return{x:p,y:S,z:P,nx:H,ny:z,nz:k,dist:K}}return null}const y=new G,m=new G;function f(){return n.getWorldPosition(y),n.getWorldDirection(m),M(y.x,y.y,y.z,m)}return{player:e,update:g,raycast:f,raycastFrom:M,spawnPlayer:d,moveAxis:u,boxCollides:l}}const Zs=220;function Zg({scene:n}){const t=new Te,e=new bu(new Vn(.16,.16,.16),new ln({vertexColors:!1}),Zs);e.instanceMatrix.setUsage(iu),n.add(e);const i=[];for(let o=0;o<Zs;o++)i.push({life:0,x:0,y:0,z:0,vx:0,vy:0,vz:0}),t.scale.set(0,0,0),t.position.set(0,-999,0),t.updateMatrix(),e.setMatrixAt(o,t.matrix),e.setColorAt(o,new Bt(16777215));e.instanceMatrix.needsUpdate=!0;function r(o,a,l,c,u,h,d){const g=new Bt(c);let M=0;for(let y=0;y<Zs&&M<u;y++){if(i[y].life>0)continue;const m=i[y];m.life=.5+Math.random()*.4,m.x=o,m.y=a,m.z=l,m.vx=(Math.random()-.5)*h,m.vz=(Math.random()-.5)*h,m.vy=d+Math.random()*d,e.setColorAt(y,g),M++}e.instanceColor.needsUpdate=!0}function s(o){let a=!1;for(let l=0;l<Zs;l++){const c=i[l];if(!(c.life<=0)){if(a=!0,c.life-=o,c.vy-=14*o,c.x+=c.vx*o,c.y+=c.vy*o,c.z+=c.vz*o,qe(Yt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(c.vy=Math.abs(c.vy)*.3,c.y+=.02,c.vx*=.5,c.vz*=.5),c.life<=0)t.position.set(0,-999,0),t.scale.set(0,0,0);else{const u=Math.min(1,c.life*3);t.position.set(c.x,c.y,c.z),t.scale.set(u,u,u)}t.updateMatrix(),e.setMatrixAt(l,t.matrix)}}a&&(e.instanceMatrix.needsUpdate=!0)}return{spawn:r,update:s}}function jg({ctx:n,player:t}){let e=null,i=null,r=null,s=null,o=!1,a=null,l=null,c=null,u=null,h=null,d=!0,g=0,M=null;const y=()=>r||e.destination;function m(){if(e){e.state==="suspended"&&e.resume();return}try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}e&&(i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=2e4,i.connect(e.destination),r=e.createGain(),r.gain.value=1,r.connect(i),s=e.createGain(),s.gain.value=1,s.connect(i),N())}const f=U=>{const q=e.sampleRate*U,C=e.createBuffer(1,q,e.sampleRate),nt=C.getChannelData(0);for(let X=0;X<q;X++)nt[X]=Math.random()*2-1;return C};function E(U,q,C,nt){if(!e)return;const X=e.sampleRate*U,it=e.createBuffer(1,X,e.sampleRate),st=it.getChannelData(0);for(let b=0;b<X;b++)st[b]=(Math.random()*2-1)*(1-b/X);const Tt=e.createBufferSource();Tt.buffer=it;const St=e.createBiquadFilter();St.type="bandpass",St.frequency.value=q,St.Q.value=nt||1;const R=e.createGain();R.gain.value=C,Tt.connect(St),St.connect(R),R.connect(y()),Tt.start()}function v(U,q,C){if(!e)return;const nt=e.createOscillator(),X=e.createGain();nt.type="triangle",nt.frequency.setValueAtTime(U,e.currentTime),nt.frequency.exponentialRampToValueAtTime(U*.55,e.currentTime+q),X.gain.setValueAtTime(C,e.currentTime),X.gain.exponentialRampToValueAtTime(.001,e.currentTime+q),nt.connect(X),X.connect(y()),nt.start(),nt.stop(e.currentTime+q)}const _={3:1400,8:1400,4:500,2:420,1:480,11:520,10:600,5:800,7:800,6:2200,12:900,13:1300,14:1500,15:1500,16:1700,26:1400,27:1350,28:1550,29:1400,30:800,31:2600,32:2400,33:2400,34:1400,35:800,36:1400},T=U=>{E(.13,_[U]||700,.45,1.2),v((_[U]||700)*.25,.08,.12)},p=U=>{v(170,.09,.3),E(.05,(_[U]||700)*.8,.15,2)},S=U=>{E(.06,(_[U]||500)*.6+Math.random()*120,.12,.8)},P=U=>{E(.12,300,Math.min(.5,.1+U*.04),.7),v(90,.1,.2)},x=()=>{E(.25,900,.3,.5),E(.35,400,.2,.5)};function A(){if(!e||M)return;const U=e.createBufferSource();U.buffer=f(2),U.loop=!0;const q=e.createBiquadFilter();q.type="lowpass",q.frequency.value=2600;const C=e.createGain();C.gain.value=.05,U.connect(q),q.connect(C),C.connect(s),U.start(),M=U}function L(){if(M){try{M.stop()}catch{}M=null}}function N(){if(!e||o)return;const U=e.createBufferSource();U.buffer=f(3),U.loop=!0,l=e.createBiquadFilter(),l.type="lowpass",l.frequency.value=440,a=e.createGain(),a.gain.value=.04,U.connect(l),l.connect(a),a.connect(s),U.start();const q=e.createOscillator();q.frequency.value=.07;const C=e.createGain();C.gain.value=.03,q.connect(C),C.connect(a.gain),q.start(),c=e.createGain(),c.gain.value=0,c.connect(s);const nt=e.createOscillator();nt.type="sine",nt.frequency.value=62;const X=e.createOscillator();X.type="sine",X.frequency.value=65.5,nt.connect(c),X.connect(c),nt.start(),X.start(),h=e.createDelay(),h.delayTime.value=.3;const it=e.createGain();it.gain.value=.36,h.connect(it),it.connect(h),h.connect(s),u=e.createGain(),u.gain.value=d?.5:0,u.connect(s),o=!0,setInterval(ht,260)}function $(){const U=e.currentTime,q=2200+Math.random()*1500,C=2+(Math.random()*3|0);for(let nt=0;nt<C;nt++){const X=e.createOscillator(),it=e.createGain(),st=U+nt*.085,Tt=q*(1+(Math.random()-.35)*.35);X.type="sine",X.frequency.setValueAtTime(Tt,st),X.frequency.exponentialRampToValueAtTime(Tt*1.5,st+.05),it.gain.setValueAtTime(1e-4,st),it.gain.linearRampToValueAtTime(.11,st+.012),it.gain.exponentialRampToValueAtTime(8e-4,st+.09),X.connect(it),it.connect(s),X.start(st),X.stop(st+.11)}}function D(){const U=e.currentTime,q=4200+Math.random()*900;for(let C=0;C<3;C++){const nt=e.createOscillator(),X=e.createGain(),it=U+C*.07;nt.type="square",nt.frequency.value=q,X.gain.setValueAtTime(1e-4,it),X.gain.linearRampToValueAtTime(.035,it+.005),X.gain.exponentialRampToValueAtTime(8e-4,it+.03),nt.connect(X),X.connect(s),nt.start(it),nt.stop(it+.04)}}function B(){const U=e.currentTime,q=e.createOscillator(),C=e.createGain(),nt=e.createBiquadFilter();nt.type="bandpass",nt.frequency.value=1400,nt.Q.value=3,q.type="sine",q.frequency.setValueAtTime(1700,U),q.frequency.exponentialRampToValueAtTime(700,U+.12),C.gain.setValueAtTime(1e-4,U),C.gain.linearRampToValueAtTime(.16,U+.008),C.gain.exponentialRampToValueAtTime(8e-4,U+.13),q.connect(nt),nt.connect(C),C.connect(s),h&&C.connect(h),q.start(U),q.stop(U+.15)}function O(){const U=e.currentTime,q=e.createOscillator(),C=e.createGain();q.type="sine",q.frequency.setValueAtTime(300+Math.random()*200,U),q.frequency.exponentialRampToValueAtTime(900,U+.12),C.gain.setValueAtTime(1e-4,U),C.gain.linearRampToValueAtTime(.06,U+.02),C.gain.exponentialRampToValueAtTime(8e-4,U+.13),q.connect(C),C.connect(s),q.start(U),q.stop(U+.15)}function Y(){const U=e.currentTime,q=e.createBufferSource();q.buffer=f(1.4);const C=e.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(400,U),C.frequency.exponentialRampToValueAtTime(90,U+1.3);const nt=e.createGain();nt.gain.setValueAtTime(1e-4,U),nt.gain.linearRampToValueAtTime(.5,U+.08),nt.gain.exponentialRampToValueAtTime(8e-4,U+1.4),q.connect(C),C.connect(nt),nt.connect(s),q.start(U),q.stop(U+1.5)}function H(U,q){if(!e)return;const C=.5*(1-q/22);if(C<=.02)return;const nt=e.currentTime;if(U==="sheep"){const X=e.createOscillator(),it=e.createGain(),st=e.createOscillator(),Tt=e.createGain();X.type="sawtooth",X.frequency.setValueAtTime(360,nt),X.frequency.linearRampToValueAtTime(300,nt+.45),st.frequency.value=18,Tt.gain.value=14,st.connect(Tt),Tt.connect(X.frequency),st.start(nt),st.stop(nt+.5);const St=e.createBiquadFilter();St.type="lowpass",St.frequency.value=1100,it.gain.setValueAtTime(1e-4,nt),it.gain.linearRampToValueAtTime(C*.5,nt+.04),it.gain.exponentialRampToValueAtTime(8e-4,nt+.5),X.connect(St),St.connect(it),it.connect(s),X.start(nt),X.stop(nt+.52)}else if(U==="pig")for(let X=0;X<2;X++){const it=nt+X*.13,st=e.createBufferSource();st.buffer=f(.12);const Tt=e.createBiquadFilter();Tt.type="lowpass",Tt.frequency.value=320;const St=e.createGain();St.gain.setValueAtTime(1e-4,it),St.gain.linearRampToValueAtTime(C*.6,it+.01),St.gain.exponentialRampToValueAtTime(8e-4,it+.1),st.connect(Tt),Tt.connect(St),St.connect(s),st.start(it),st.stop(it+.12)}else if(U==="zombie"){const X=e.createOscillator(),it=e.createGain(),st=e.createBiquadFilter();X.type="sawtooth",X.frequency.setValueAtTime(105,nt),X.frequency.linearRampToValueAtTime(68,nt+.7);const Tt=e.createOscillator(),St=e.createGain();Tt.frequency.value=9,St.gain.value=16,Tt.connect(St),St.connect(X.frequency),Tt.start(nt),Tt.stop(nt+.8),st.type="lowpass",st.frequency.value=360,it.gain.setValueAtTime(1e-4,nt),it.gain.linearRampToValueAtTime(C*.6,nt+.09),it.gain.exponentialRampToValueAtTime(8e-4,nt+.75),X.connect(st),st.connect(it),it.connect(s),X.start(nt),X.stop(nt+.8)}else if(U==="villager")for(let X=0;X<2;X++){const it=nt+X*.17,st=e.createOscillator(),Tt=e.createGain(),St=e.createBiquadFilter();st.type="triangle",st.frequency.setValueAtTime(X?185:235,it),st.frequency.linearRampToValueAtTime(X?160:210,it+.12),St.type="lowpass",St.frequency.value=700,Tt.gain.setValueAtTime(1e-4,it),Tt.gain.linearRampToValueAtTime(C*.4,it+.03),Tt.gain.exponentialRampToValueAtTime(8e-4,it+.16),st.connect(St),St.connect(Tt),Tt.connect(s),st.start(it),st.stop(it+.18)}else for(let X=0;X<3;X++){const it=nt+X*.08,st=e.createOscillator(),Tt=e.createGain();st.type="triangle",st.frequency.setValueAtTime(1600-X*250,it),Tt.gain.setValueAtTime(1e-4,it),Tt.gain.linearRampToValueAtTime(C*.4,it+.008),Tt.gain.exponentialRampToValueAtTime(8e-4,it+.05),st.connect(Tt),Tt.connect(s),st.start(it),st.stop(it+.06)}}const z=()=>{v(110,.16,.5),E(.16,420,.35,.8)},k=[0,2,4,7,9,12,14,16],K=174.6,V=U=>K*Math.pow(2,U/12);function I(U,q,C){const nt=e.currentTime,X=e.createOscillator(),it=e.createBiquadFilter(),st=e.createGain();X.type="triangle",X.frequency.value=V(U),it.type="lowpass",it.frequency.value=850,st.gain.setValueAtTime(1e-4,nt),st.gain.linearRampToValueAtTime(C,nt+1.6),st.gain.linearRampToValueAtTime(1e-4,nt+q),X.connect(it),it.connect(st),st.connect(u),X.start(nt),X.stop(nt+q+.1)}function Q(U,q){const C=e.currentTime,nt=e.createOscillator(),X=e.createGain();nt.type="sine",nt.frequency.value=V(U),X.gain.setValueAtTime(1e-4,C),X.gain.linearRampToValueAtTime(q,C+.03),X.gain.exponentialRampToValueAtTime(8e-4,C+.9),nt.connect(X),X.connect(u),nt.start(C),nt.stop(C+1)}function rt(){if(d){if(g++,g%30===0){const U=k[Math.random()*3|0];I(U,9,.05),I(U+(Math.random()<.5?4:7),9,.045),I(U+12,9,.03)}g%6===0&&Math.random()<.45&&Q(k[Math.random()*k.length|0]+12,.05)}}function ht(){if(!e||!o||!n.locked)return;const U=e.currentTime,q=n.curHeadWater?0:n.curUnderground?.012:(.04+Math.max(0,t.pos.y-Ge)*.0016)*(n.weather==="rain"?1.5:1);a.gain.setTargetAtTime(Math.max(0,Math.min(.13,q)),U,.6),l.frequency.setTargetAtTime(n.curUnderground?180:n.weather==="rain"?950:460,U,.6),c.gain.setTargetAtTime(n.curUnderground?.05:0,U,.9),!n.curUnderground&&!n.curHeadWater&&(n.curIsDay&&(n.curBiome===qr||n.curBiome===ur)&&n.weather!=="rain"&&Math.random()<.1&&$(),!n.curIsDay&&Math.random()<.15&&D(),n.weather==="rain"&&Math.random()<.014&&Y()),n.curUnderground&&Math.random()<.05&&B(),n.curHeadWater&&Math.random()<.16&&O(),rt()}function dt(){d=!d,u&&u.gain.setTargetAtTime(d?.5:0,e.currentTime,.3)}function ft(U){i&&i.frequency.setTargetAtTime(U?700:2e4,e.currentTime,.25)}return{audioInit:m,sndBreak:T,sndPlace:p,sndStep:S,sndLand:P,sndSplash:x,sndHit:z,startRainSound:A,stopRainSound:L,animalSound:H,toggleMusic:dt,setMuffle:ft,isMusicOn:()=>d}}const Nc=30,Jg=70,Qg=8,Fc=12,t_=34,e_=70,n_=18,i_=14,r_=10,s_=140;function a_(n,t,e,i){const r=l=>!qe(l)&&l!==Je;if(!r(Yt(n,t,e))||!r(Yt(n,t+1,e))||!qe(Yt(n,t-1,e)))return!1;const s=yn(n,t,e),o=s>>4;return(s&15)<4&&(o<6||!i)}function o_(n,t,e=2){const i=Math.floor(n/Mn),r=Math.floor(t/Mn),s=[];for(let o=i-e;o<=i+e;o++)for(let a=r-e;a<=r+e;a++){const l=ku(o,a);l&&l.def.villagers>0&&s.push({key:o+","+a,...l})}return s}const Oc={sheep:{hw:.42,h:1.2,spd:1.5,skittish:!0,build(n,t){t(n,.95,.85,1.35,15657696,0,.78,0),t(n,.6,.6,.55,14603976,0,.95,.85);const e=[];for(const[i,r]of[[-.3,.45],[.3,.45],[-.3,-.45],[.3,-.45]])e.push(t(n,.22,.55,.22,4867648,i,.27,r));return e}},pig:{hw:.4,h:.95,spd:1.3,skittish:!1,build(n,t){t(n,.85,.7,1.2,14916250,0,.62,0),t(n,.55,.5,.45,14715530,0,.7,.78),t(n,.25,.22,.12,14187130,0,.62,1);const e=[];for(const[i,r]of[[-.28,.4],[.28,.4],[-.28,-.4],[.28,-.4]])e.push(t(n,.2,.4,.2,13134442,i,.2,r));return e}},chicken:{hw:.3,h:.7,spd:1.7,skittish:!0,build(n,t){t(n,.5,.5,.6,16052456,0,.5,0),t(n,.35,.35,.32,16315628,0,.78,.34),t(n,.14,.12,.18,15247408,0,.74,.55),t(n,.16,.18,.08,14168112,0,.96,.32);const e=[];for(const i of[-.13,.13])e.push(t(n,.08,.34,.08,15247408,i,.17,0));return e}}},l_={hw:.3,h:1.8,spd:1.1,build(n,t){t(n,.52,.78,.34,9071178,0,.96,0),t(n,.38,.38,.38,14200968,0,1.54,0),t(n,.09,.16,.09,13146744,0,1.48,-.22),t(n,.56,.17,.2,8018494,0,1.16,-.16);const e=[];for(const i of[-.14,.14])e.push(t(n,.2,.58,.2,5916210,i,.29,0));return e}},c_={hw:.3,h:1.8,spd:1.4,build(n,t){t(n,.5,.72,.3,3828362,0,1,0),t(n,.4,.4,.4,5937746,0,1.56,0);for(const i of[-.26,.26])t(n,.16,.16,.62,5937746,i,1.24,-.38);const e=[];for(const i of[-.13,.13])e.push(t(n,.2,.62,.2,3493994,i,.31,0));return e}};function u_({scene:n,ctx:t,audio:e}){const i=[],r=new Set;let s=3,o=1;function a(f,E,v,_){const T=new jn,p=[],S=(A,L,N,$,D,B,O,Y)=>{const H=new ln({color:D}),z=new Be(new Vn(L,N,$),H);return z.position.set(B,O,Y),A.add(z),p.push({mat:H,base:new Bt(D)}),z},P=v.build(T,S);n.add(T);const x={kind:f,type:E,def:v,group:T,legs:P,mats:p,hw:v.hw,h:v.h,pos:new G(_.x,_.y,_.z),vy:0,yaw:Math.random()*6.28,onGround:!1,walking:!1,timer:0,legPhase:0,flee:0,callT:2+Math.random()*8,cool:0,lightT:Math.random(),home:null};return i.push(x),x}function l(f){n.remove(f.group),f.group.traverse(v=>{v.isMesh&&(v.geometry.dispose(),v.material.dispose())});const E=i.indexOf(f);E>=0&&i.splice(E,1),f.home&&r.delete(f.home.key)}function c(f,E,v=60){for(let _=0;_<v;_++){const T=f+Math.floor((Math.random()-.5)*2*Nc),p=E+Math.floor((Math.random()-.5)*2*Nc);let S=Vt-1;for(;S>0&&Yt(T,S,p)===oe;)S--;const P=Yt(T,S,p);if(S>Ge&&(P===Tn||P===ri||P===zn))return{x:T,y:S,z:p}}return null}function u(f,E,v,_=9){for(let T=0;T<12;T++){const p=f+Math.floor((Math.random()-.5)*_),S=E+Math.floor((Math.random()-.5)*_);for(let P=Math.max(1,v-5);P<=Math.min(Vt-2,v+6);P++)if(Yt(p,P,S)===oe&&Yt(p,P+1,S)===oe&&qe(Yt(p,P-1,S)))return{x:p,y:P,z:S}}return null}function h(f,E){for(let v=0;v<10;v++){const _=Math.random()*Math.PI*2,T=Fc+Math.random()*(t_-Fc),p=Math.floor(f.x+Math.sin(_)*T),S=Math.floor(f.z+Math.cos(_)*T),P=Math.min(Vt-2,Math.floor(f.y)+10),x=Math.max(2,Math.floor(f.y)-16);for(let A=P;A>=x;A--)if(a_(p,A,S,E))return{x:p,y:A,z:S}}return null}function d(f,E){for(;i.length;)l(i[0]);r.clear();const v=Math.floor(E?E.x:8),_=Math.floor(E?E.z:8),T=Object.keys(Oc);for(let p=0;p<f;p++){const S=c(v,_);if(!S)continue;const P=T[Math.floor(Math.random()*T.length)];a("animal",P,Oc[P],{x:S.x+.5,y:S.y+1.01,z:S.z+.5})}}function g(f){for(let v=i.length-1;v>=0;v--){const _=i[v];_.kind==="villager"&&Math.hypot(_.home.ax-f.x,_.home.az-f.z)>s_&&l(_)}if(!(i.filter(v=>v.kind==="villager").length>=i_))for(const v of o_(f.x,f.z,2)){if(r.has(v.key)||Math.hypot(v.ax-f.x,v.az-f.z)>90||Yt(v.ax,v.baseY,v.az)===oe)continue;let _=0;for(let T=0;T<v.def.villagers;T++){const p=u(v.ax,v.az,v.baseY+1);if(!p)continue;const S=a("villager","villager",l_,{x:p.x+.5,y:p.y+.01,z:p.z+.5});S.home={key:v.key,ax:v.ax,az:v.az},_++}_&&r.add(v.key)}}function M(f){if(!(t.curIsDay===!1||t.curUnderground)||i.filter(v=>v.kind==="zombie").length>=Qg)return;const E=h(f,t.curIsDay);E&&a("zombie","zombie",c_,{x:E.x+.5,y:E.y+.01,z:E.z+.5})}function y(f,E){const v={hit:null,poofs:[]};o-=f,o<=0&&(o=2,g(E)),s-=f,s<=0&&(s=1.4,M(E));for(let T=i.length-1;T>=0;T--){const p=i[T];p.timer-=f,p.callT-=f,p.cool>0&&(p.cool-=f);const S=p.pos.x-E.x,P=p.pos.z-E.z,x=Math.hypot(S,P);let A=p.def.spd;if(p.kind==="animal")p.callT<=0&&(p.callT=5+Math.random()*10,x<22&&e.animalSound(p.type,x)),p.def.skittish&&x<5&&(p.flee=1.2,p.yaw=Math.atan2(S,P)),p.flee>0&&(p.flee-=f),p.timer<=0&&p.flee<=0&&(p.timer=1.5+Math.random()*3.5,Math.random()<.6?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1),p.flee>0&&(A*=1.8);else if(p.kind==="villager"){p.callT<=0&&(p.callT=6+Math.random()*12,x<7&&e.animalSound("villager",x));const D=Math.hypot(p.pos.x-(p.home.ax+.5),p.pos.z-(p.home.az+.5));x<4?(p.walking=!1,p.yaw=Math.atan2(S,P),p.timer=.6):D>r_?(p.walking=!0,p.yaw=Math.atan2(p.pos.x-(p.home.ax+.5),p.pos.z-(p.home.az+.5))):p.timer<=0&&(p.timer=2+Math.random()*4,Math.random()<.55?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1)}else{p.callT<=0&&(p.callT=4+Math.random()*7,x<22&&e.animalSound("zombie",x)),x<n_?(p.walking=!0,A*=2,p.yaw=Math.atan2(S,P)):p.timer<=0&&(p.timer=1.5+Math.random()*3,Math.random()<.5?(p.walking=!0,p.yaw=Math.random()*6.28):p.walking=!1);const D=E.y-p.pos.y;if(p.cool<=0&&x<1&&D>-1.5&&D<1.8){p.cool=1.2;const B=Math.max(x,.001);v.hit={dx:-S/B,dz:-P/B}}if(p.lightT-=f,p.lightT<=0){p.lightT=.8;const B=yn(Math.floor(p.pos.x),Math.floor(p.pos.y+.5),Math.floor(p.pos.z))>>4;if(t.curIsDay&&B>=10){v.poofs.push([p.pos.x,p.pos.y+1,p.pos.z]),l(p);continue}if(x>e_){l(p);continue}}}const L=p.walking||p.flee>0;if(L){const D=-Math.sin(p.yaw)*A*f,B=-Math.cos(p.yaw)*A*f;let O=!1;const Y=m(p.pos.x+D,p.pos.y,p.pos.z);!Y&&!pi(p.pos.x+D,p.pos.y,p.pos.z,p.hw,p.h)?(p.pos.x+=D,O=!0):!Y&&p.onGround&&!pi(p.pos.x+D,p.pos.y+1,p.pos.z,p.hw,p.h)&&(p.pos.x+=D,p.pos.y+=1,O=!0);const H=m(p.pos.x,p.pos.y,p.pos.z+B);!H&&!pi(p.pos.x,p.pos.y,p.pos.z+B,p.hw,p.h)?(p.pos.z+=B,O=!0):!H&&p.onGround&&!pi(p.pos.x,p.pos.y+1,p.pos.z+B,p.hw,p.h)&&(p.pos.z+=B,p.pos.y+=1,O=!0),O||(p.yaw+=2+Math.random(),p.timer=.4),p.kind==="animal"&&x>Jg&&(p.yaw=Math.atan2(E.x-p.pos.x,E.z-p.pos.z)),p.legPhase+=f*A*5}p.vy=Math.max(p.vy-24*f,-30);const N=p.pos.y+p.vy*f;if(p.vy<0&&pi(p.pos.x,N,p.pos.z,p.hw,p.h)?(p.pos.y=Math.floor(N)+1,p.vy=0,p.onGround=!0):p.vy>0&&pi(p.pos.x,N,p.pos.z,p.hw,p.h)?p.vy=0:(p.pos.y=N,p.onGround=!1),p.pos.y<-10)if(p.kind==="animal"){const D=c(Math.floor(E.x),Math.floor(E.z));D?(p.pos.set(D.x+.5,D.y+1.01,D.z+.5),p.vy=0):(p.pos.y=Vt,p.vy=0)}else if(p.kind==="villager"){const D=u(p.home.ax,p.home.az,40,5);if(D)p.pos.set(D.x+.5,D.y+.01,D.z+.5),p.vy=0;else{l(p);continue}}else{l(p);continue}p.group.position.copy(p.pos),p.group.rotation.y=p.yaw;const $=L?Math.sin(p.legPhase)*.5:0;for(let D=0;D<p.legs.length;D++)p.legs[D].rotation.x=D%2?-$:$}const _=Math.max(.35,t.dayBright);for(const T of i)for(const p of T.mats)p.mat.color.copy(p.base).multiplyScalar(_);return v}function m(f,E,v){const _=Math.floor(f),T=Math.floor(v),p=Math.floor(E);for(let S=p;S>=p-4&&S>=0;S--){const P=Yt(_,S,T);if(P===Je)return!0;if(P!==oe)return!1}return!1}return{spawnAnimals:d,update:y,animals:i}}const js=n=>Math.max(0,Math.min(1,n));function f_({scene:n,camera:t,materials:e,ctx:i,audio:r}){const s=new G,o=new jn;n.add(o);function a(z,k,K){const V=document.createElement("canvas");V.width=V.height=64;const I=V.getContext("2d"),Q=I.createRadialGradient(32,32,4,32,32,32);Q.addColorStop(0,z),Q.addColorStop(K,z),Q.addColorStop(1,"rgba(0,0,0,0)"),I.fillStyle=Q,I.fillRect(0,0,64,64);const rt=new xg(new Tu({map:new ha(V),fog:!1,transparent:!0,depthWrite:!1}));return rt.scale.set(k,k,1),o.add(rt),rt}const l=a("rgba(255,244,180,1)",40,.55),c=a("rgba(214,224,255,1)",26,.45),u=new Re;function h(){const z=[],k=Pi(Li()^20901|0);for(let K=0;K<520;K++){const V=k()*Math.PI*2,I=Math.acos(k()*2-1);z.push(280*Math.sin(I)*Math.cos(V),Math.abs(280*Math.cos(I)),280*Math.sin(I)*Math.sin(V))}u.setAttribute("position",new ze(z,3))}h();const d=new Vo({color:16777215,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0,depthWrite:!1});o.add(new Cu(u,d));const g=new Bt(9422056),M=new Bt(461592),y=new Bt(15764554),m=new Bt(857136),f=new Bt,E=new jn;n.add(E);let v=null,_=0;function T(){v&&(E.remove(v),v.geometry.dispose());const z=[],k=[],K=Pi(Li()^20817|0),V=48,I=8,Q=Vt+10;for(let dt=0;dt<V;dt++)for(let ft=0;ft<V;ft++){if(Kr(dt*.18+1,ft*.18+1)<.56)continue;const U=(dt-V/2)*I,q=(ft-V/2)*I,C=I*.98,nt=Q+K()*2,X=z.length/3;z.push(U,nt,q,U+C,nt,q,U,nt,q+C,U+C,nt,q+C),z.push(U,nt-2,q,U+C,nt-2,q,U,nt-2,q+C,U+C,nt-2,q+C),k.push(X,X+1,X+2,X+2,X+1,X+3),k.push(X+4,X+6,X+5,X+5,X+6,X+7)}const rt=new Re;rt.setAttribute("position",new ze(z,3)),rt.setIndex(k);const ht=new ln({color:16777215,transparent:!0,opacity:.82,fog:!0,side:an});v=new Be(rt,ht),E.add(v)}const p=420,S=new Re,P=new Float32Array(p*6),x=[];for(let z=0;z<p;z++)x.push({x:0,y:0,z:0});S.setAttribute("position",new Xe(P,3));const A=new Sa({color:10469608,transparent:!0,opacity:.5}),L=new Ru(S,A);L.visible=!1,n.add(L);let N=40;function $(z){for(let k=0;k<p;k++)x[k].x=z.x+(Math.random()-.5)*40,x[k].y=z.y+Math.random()*26+2,x[k].z=z.z+(Math.random()-.5)*40}function D(z,k){i.weather=z,z==="rain"?($(k),r.startRainSound()):r.stopRainSound()}function B(z,k){if(i.weather!=="rain"){L.visible=!1;return}L.visible=!0;for(let K=0;K<p;K++){const V=x[K];V.y-=34*k,V.x+=2*k,V.y<z.y-8&&(V.x=z.x+(Math.random()-.5)*40,V.z=z.z+(Math.random()-.5)*40,V.y=z.y+22+Math.random()*6),(Math.abs(V.x-z.x)>22||Math.abs(V.z-z.z)>22)&&(V.x=z.x+(Math.random()-.5)*40,V.z=z.z+(Math.random()-.5)*40);const I=K*6;P[I]=V.x,P[I+1]=V.y,P[I+2]=V.z,P[I+3]=V.x-.1,P[I+4]=V.y-1.1,P[I+5]=V.z}S.attributes.position.needsUpdate=!0}function O(z,k){N-=z,N<=0&&(i.weather==="clear"?Math.random()<.4?(D("rain",k),N=25+Math.random()*40):N=30+Math.random()*60:(D("clear",k),N=50+Math.random()*70))}function Y(z){i.timeOfDay=(i.timeOfDay+z/yg*(i.keys.KeyN&&i.locked?40:1))%1;const k=i.timeOfDay*Math.PI*2,K=Math.sin(k);i.curIsDay=K>-.05;const V=new G(Math.cos(k),K,.28).normalize();l.position.copy(V).multiplyScalar(260),c.position.copy(V).multiplyScalar(-260);const I=js((K+.1)/.35),Q=Math.exp(-Math.pow(K/.16,2))*.8;f.copy(M).lerp(g,I),f.lerp(K>-.3?y:m,Q*(1-I*.4)),i.weather==="rain"&&f.multiplyScalar(.6),n.background.copy(f),n.fog.color.copy(f);let rt=.22+.78*I;i.weather==="rain"&&(rt*=.7),i.dayBright=rt,kg(rt),v&&v.material.color.setScalar(.6+.4*rt),A.color.setRGB(.62*rt+.1,.75*rt+.1,.9*rt+.1),d.opacity=js((.18-K)/.3),l.material.opacity=js((K+.15)/.2),c.material.opacity=js((-K+.15)/.2),t.getWorldPosition(s),o.position.copy(s),_+=z*.6,_>160&&(_-=160),E.position.set(s.x+_-80,0,s.z)}function H(){h(),T()}return{updateSky:Y,buildSky:H,updateRain:B,tickWeather:O,setWeather:D}}const Bc="blockwelt4_save";function h_({player:n,ctx:t}){function e(){const c={};for(const[u,h]of yi){const d=new Array(h.size*2);let g=0;for(const[M,y]of h)d[g++]=M,d[g++]=y;c[u]=d}return c}function i(){return{v:4,seed:Li(),t:t.timeOfDay,w:t.weather,p:[n.pos.x,n.pos.y,n.pos.z,n.yaw,n.pitch],e:e()}}function r(c){if(!c||c.v!==4)return!1;if(Nu(c.seed??Li()),Ve.clear(),yi.clear(),c.e)for(const u in c.e){const h=c.e[u],d=new Map;for(let g=0;g<h.length;g+=2)d.set(h[g],h[g+1]);yi.set(u,d)}return t.timeOfDay=c.t??.3,t.weather=c.w??"clear",c.p??null}function s(){try{return localStorage.setItem(Bc,JSON.stringify(i())),!0}catch{return!1}}function o(){try{const c=localStorage.getItem(Bc);return c?r(JSON.parse(c)):!1}catch{return!1}}function a(){const c=new Blob([JSON.stringify(i())],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(c),u.download="meine-welt.blockwelt",u.click(),URL.revokeObjectURL(u.href)}function l(){}return{snapshot:i,applySnapshot:r,saveLocal:s,loadLocal:o,exportFile:a,invalidateWorld:l}}function d_({ctx:n}){const t=document.getElementById("hotbar"),e=document.getElementById("coords"),i=document.getElementById("biome"),r=document.getElementById("blockmenu");function s(c){const u=document.createElement("canvas");return u.width=16,u.height=16,u.getContext("2d").drawImage(Wu,_i[c][1]*ie,0,ie,ie,0,0,16,16),u}function o(c){r.innerHTML="";const u=document.createElement("div");u.className="bm-title",u.textContent="Block wählen  ·  E schließt";const h=document.createElement("div");h.className="bm-grid",Rg.forEach(d=>{const g=document.createElement("div");g.className="bm-slot",g.title=ea[d]||"",g.appendChild(s(d));const M=document.createElement("span");M.textContent=ea[d]||"",g.appendChild(M),g.addEventListener("click",()=>c(d)),h.appendChild(g)}),r.appendChild(u),r.appendChild(h)}function a(){t.innerHTML="",sn.forEach((c,u)=>{const h=document.createElement("div");h.className="slot"+(u===n.selected?" sel":"");const d=document.createElement("span");d.textContent=u+1,h.appendChild(s(c)),h.appendChild(d),h.title=ea[c],t.appendChild(h)})}function l(c,u){const h=Math.floor((n.timeOfDay+.25)%1*1440),d=String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0");e.textContent=`x ${c.pos.x.toFixed(1)}  y ${c.pos.y.toFixed(1)}  z ${c.pos.z.toFixed(1)}  ·  ${n.timeOfDay<.5?"🌞":"🌙"} ${d}${c.fly?"  ·  ✈":""}${n.weather==="rain"?"  ·  🌧":""}${u?"  ·  ♪":""}`,i.textContent="🌍 "+Lg[n.curBiome]}return{renderHotbar:a,updateHUD:l,buildMenu:o}}const p_=n=>Math.max(0,Math.min(1,n));function m_({scene:n,camera:t,ctx:e}){let i=0;const r=new G,s=18,o=new bu(new Vn(.7,.1,.22),new ln({color:2106410}),s);o.frustumCulled=!1,o.instanceMatrix.setUsage(iu),n.add(o);const a=[];for(let v=0;v<s;v++)a.push({r:9+Math.random()*17,ph:Math.random()*Math.PI*2,spd:.22+Math.random()*.18,hy:24+Math.random()*14,wob:Math.random()*Math.PI*2});const l=new Te,c=new G,u=80,h=22,d=8,g=new Re,M=new Float32Array(u*3),y=[];for(let v=0;v<u;v++)M[v*3]=(Math.random()*2-1)*h,M[v*3+1]=Math.random()*d,M[v*3+2]=(Math.random()*2-1)*h,y.push({x:(Math.random()-.5)*.7,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.7});g.setAttribute("position",new Xe(M,3));const m=new Vo({color:16769658,size:.5,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:So,fog:!1}),f=new Cu(g,m);f.frustumCulled=!1,n.add(f);function E(v){i+=v;const _=p_((e.dayBright-.45)/.4),T=1-_;if(t.getWorldPosition(r),o.visible=_>.02&&!e.curUnderground&&!e.curHeadWater,o.visible){const p=r.x,S=r.z;for(let P=0;P<s;P++){const x=a[P],A=i*x.spd+x.ph,L=p+Math.cos(A)*x.r,N=S+Math.sin(A)*x.r,$=x.hy+Math.sin(i*.6+x.wob)*1.5;c.set(p+Math.cos(A+.06)*x.r,$,S+Math.sin(A+.06)*x.r),l.position.set(L,$,N),l.lookAt(c);const D=.5+Math.abs(Math.sin(i*9+x.ph))*.85;l.scale.set(D,1,1),l.updateMatrix(),o.setMatrixAt(P,l.matrix)}o.instanceMatrix.needsUpdate=!0}if(m.opacity=T*(.55+.45*Math.sin(i*2.5))*.9,f.visible=m.opacity>.02&&!e.curHeadWater,f.visible){for(let p=0;p<u;p++){const S=y[p];let P=M[p*3]+S.x*v,x=M[p*3+1]+S.y*v,A=M[p*3+2]+S.z*v;Math.random()<.02&&(S.x=(Math.random()-.5)*.7,S.y=(Math.random()-.5)*.3,S.z=(Math.random()-.5)*.7),P>h?P=-h:P<-h&&(P=h),A>h?A=-h:A<-h&&(A=h),x>d?x=.2:x<0&&(x=d),M[p*3]=P,M[p*3+1]=x,M[p*3+2]=A}g.attributes.position.needsUpdate=!0,f.position.set(r.x,r.y-1.2,r.z)}}return{update:E}}const g_=4.2,__=Math.PI/4,v_=.6,x_=.3,Mo=.15,M_=.8,S_=8,zc=new G(0,1,0);function y_({renderer:n,camera:t,rig:e,ctx:i,player:r,raycastFrom:s,onHotbarChange:o}){let a=0,l=!0,c=0,u=0,h=!1,d=!1,g=!1,M=!1,y=!1;const m=document.createElement("canvas");m.width=m.height=256;const f=m.getContext("2d"),E=f.createRadialGradient(128,128,0,128,128,128);E.addColorStop(0,"rgba(0,0,0,0)"),E.addColorStop(.45,"rgba(0,0,0,0)"),E.addColorStop(.75,"rgba(0,0,0,0.85)"),E.addColorStop(1,"rgba(0,0,0,1)"),f.fillStyle=E,f.fillRect(0,0,256,256);const v=new ln({map:new ha(m),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1}),_=new Be(new Wr(1.6,1.6),v);_.position.z=-.35,_.renderOrder=9999,_.visible=!1,t.add(_);let T=null,p=null,S=null;const P=[n.xr.getController(0),n.xr.getController(1)];for(const ft of P)e.add(ft),ft.addEventListener("connected",Z=>{Z.data.handedness==="right"?(T=ft,S=Z.data,ft.add(A)):Z.data.handedness==="left"&&(p=ft,ft.add(z))}),ft.addEventListener("disconnected",()=>{T===ft&&(ft.remove(A),T=null,S=null),p===ft&&(ft.remove(z),p=null)});const x=new Re().setFromPoints([new G(0,0,0),new G(0,0,-1)]),A=new wu(x,new Sa({color:16777215,transparent:!0,opacity:.55}));A.scale.z=8;const L=24,N=2,$=sn.length*(L+N)+N,D=L+22,B=document.createElement("canvas");B.width=$,B.height=D;const O=B.getContext("2d"),Y=new ha(B);Y.magFilter=ye;function H(){O.clearRect(0,0,$,D),O.fillStyle="rgba(10,14,20,0.75)",O.fillRect(0,16,$,D-16);for(let ft=0;ft<sn.length;ft++){const Z=sn[ft],U=N+ft*(L+N),q=19,C=(_i[Z]||[3,3,3])[1];O.imageSmoothingEnabled=!1,O.drawImage(Wu,C*16,0,16,16,U,q,L,L),ft===i.selected&&(O.strokeStyle="#fff",O.lineWidth=2,O.strokeRect(U-1,q-1,L+2,L+2))}O.fillStyle="#fff",O.font="bold 12px sans-serif",O.textAlign="center",O.fillText(ea[sn[i.selected]]||"?",$/2,12),Y.needsUpdate=!0}H();const z=new Be(new Wr(.18,.18*D/$),new ln({map:Y,transparent:!0,depthTest:!1,fog:!1}));z.renderOrder=9998,z.position.set(0,.06,.1),z.rotation.x=-Math.PI/3;function k(ft){i.selected=(i.selected+ft+sn.length)%sn.length,H(),o&&o()}function K(ft,Z){try{S&&S.gamepad&&S.gamepad.hapticActuators&&S.gamepad.hapticActuators[0]&&S.gamepad.hapticActuators[0].pulse(ft,Z)}catch{}}n.xr.addEventListener("sessionstart",()=>{a=0,l=!0,c=0,h=!1,d=g=M=y=!0,e.quaternion.identity(),r.fly=!1,i.keys={},_.visible=!0,H()}),n.xr.addEventListener("sessionend",()=>{i.vrMove=null,i.keys={},e.quaternion.identity(),_.visible=!1,v.opacity=u=0});const V=new G,I=new G,Q=new G,rt=new G,ht=new xr;function dt(ft){if(!n.xr.isPresenting)return i.vrMove=null,null;const Z=n.xr.getSession();let U=0,q=0,C=0,nt=0,X=!1,it=!1,st=!1,Tt=!1,St=!1,R=!1;for(const at of Z.inputSources){const _t=at.gamepad;if(!_t||_t.axes.length<4)continue;const pt=_t.axes[2],Mt=_t.axes[3];if(at.handedness==="left"){const At=Math.hypot(pt,Mt);if(At>Mo){const Nt=(At-Mo)/(1-Mo)/At;U=pt*Nt,q=Mt*Nt}_t.buttons[4]&&_t.buttons[4].pressed&&(St=!0),_t.buttons[5]&&_t.buttons[5].pressed&&(R=!0)}else at.handedness==="right"&&(C=pt,r.fly&&Math.abs(Mt)>.3&&(nt=-(Math.abs(Mt)-.3)/.7*Math.sign(Mt)),_t.buttons[0]&&_t.buttons[0].pressed&&(st=!0),_t.buttons[1]&&_t.buttons[1].pressed&&(Tt=!0),_t.buttons[4]&&_t.buttons[4].pressed&&(X=!0),_t.buttons[5]&&_t.buttons[5].pressed&&(it=!0))}if(St&&!M&&k(1),R&&!y&&k(-1),M=St,y=R,it&&!h&&(r.fly=!r.fly,r.vel.y=0),h=it,l&&Math.abs(C)>v_?(a-=Math.sign(C)*__,e.quaternion.setFromAxisAngle(zc,a),l=!1,c=1):!l&&Math.abs(C)<x_&&(l=!0),U||q||nt){t.getWorldDirection(V),r.fly||(V.y=0),V.lengthSq()<1e-6?V.set(0,0,-1):V.normalize(),I.set(V.x,0,V.z).normalize(),I.crossVectors(I,zc);const at=g_/5.4;let _t=V.x*-q+I.x*U,pt=r.fly?V.y*-q+nt:0,Mt=V.z*-q+I.z*U;const At=Math.hypot(_t,pt,Mt);At>1&&(_t/=At,pt/=At,Mt/=At),i.vrMove={x:_t*at,y:pt*at,z:Mt*at}}else i.vrMove={x:0,y:0,z:0};i.keys.Space=X;const b=Math.min(1,Math.max(Math.hypot(U,q),Math.abs(nt))),j=Math.min(1,Math.max(0,(Math.abs(r.vel.y)-3)/6));let ct=Math.max(b,j)*M_;c>0&&(ct=Math.max(ct,c),c-=ft*5),u+=(ct-u)*Math.min(1,ft*S_),v.opacity=u;const lt={hit:null,doBreak:!1,doPlace:!1,fwdX:0,fwdZ:0};if(T){T.getWorldPosition(Q),T.getWorldQuaternion(ht),rt.set(0,0,-1).applyQuaternion(ht);const at=s(Q.x,Q.y,Q.z,rt);lt.hit=at,A.scale.z=at?Math.max(at.dist,.05):8,lt.fwdX=rt.x,lt.fwdZ=rt.z,lt.doBreak=st&&!d,lt.doPlace=Tt&&!g}return d=st,g=Tt,lt}return{update:dt,pulse:K,refreshPanel:H}}const Ut={keys:{},selected:0,ready:!1,locked:!1,timeOfDay:.3,dayBright:1,curIsDay:!0,weather:"clear",curUnderground:!1,curHeadWater:!1,curBiome:1},En=document.getElementById("c"),be=new Eu({canvas:En,antialias:!1});be.setPixelRatio(Math.min(devicePixelRatio,2));const cn=new _g,qu=new Bt(9422056);cn.background=qu.clone();const Wo=(Kn-.5)*ot,Yu=Wo*.5;cn.fog=new Ho(qu.clone(),Yu,Wo);const Oe=new rn(72,2,.1,600);Oe.rotation.order="YXZ";const La=new jn;La.add(Oe);cn.add(La);be.xr.enabled=!0;const Js=new G,Ku=Wg(),Ar=qg({scene:cn,materials:Ku}),$u=Yg(),jr=Kg({mesher:Ar,light:$u}),Nn=$g({camera:Oe,ctx:Ut}),wt=Nn.player,ma=Zg({scene:cn}),De=jg({ctx:Ut,player:wt}),Zu=u_({scene:cn,ctx:Ut,audio:De}),Ei=f_({scene:cn,camera:Oe,materials:Ku,ctx:Ut,audio:De}),Fn=h_({player:wt,ctx:Ut}),Di=d_({ctx:Ut}),E_=m_({scene:cn,camera:Oe,ctx:Ut}),ra=y_({renderer:be,camera:Oe,rig:La,ctx:Ut,player:wt,raycastFrom:Nn.raycastFrom,onHotbarChange:()=>Di.renderHotbar()}),Hr=new Ru(new Sg(new Vn(1.002,1.002,1.002)),new Sa({color:0,transparent:!0,opacity:.6}));Hr.visible=!1;cn.add(Hr);Di.renderHotbar();let Jr=!1;const ju=document.getElementById("blockmenu");Di.buildMenu(n=>{sn[Ut.selected]=n,Di.renderHotbar(),ra.refreshPanel(),Ju()});function T_(){Jr=!0,ju.style.display="flex",Ut.locked&&document.exitPointerLock()}function Ju(n){Jr=!1,ju.style.display="none",Ut.ready&&En.requestPointerLock()}const Pa=document.getElementById("overlay"),or=document.getElementById("go-text"),On=document.getElementById("savehint"),A_=document.getElementById("water-tint"),Gc=document.getElementById("hit-tint");let Hc=null,Qr=!1;const _r=()=>{Qr=!0};function Qu(n,t,e,i,r){const s=$u.relight(n,t,e,i,r),o=Math.floor(n/ot),a=Math.floor(e/ot);s.add(he(o,a));const l=(n%ot+ot)%ot,c=(e%ot+ot)%ot;l===0&&s.add(he(o-1,a)),l===ot-1&&s.add(he(o+1,a)),c===0&&s.add(he(o,a-1)),c===ot-1&&s.add(he(o,a+1));for(const u of s){const h=u.split(",").map(Number),d=Ae(h[0],h[1]);d&&d.state==="meshed"&&Ar.buildChunk(h[0],h[1])}}function Vc(n,t,e){return n<wt.pos.x+wt.W&&n+1>wt.pos.x-wt.W&&t<wt.pos.y+wt.H&&t+1>wt.pos.y&&e<wt.pos.z+wt.W&&e+1>wt.pos.z-wt.W}const kc=n=>n===Qe?Ri:n===Ri?Qe:n===Gn?Tr:Gn;function b_(n,t,e,i=Qe){if(t+1>=Vt||qe(Yt(n,t,e))||qe(Yt(n,t+1,e))||Vc(n,t,e)||Vc(n,t+1,e))return;const r=-Math.sin(wt.yaw),s=-Math.cos(wt.yaw),a=Math.abs(s)>Math.abs(r)?1:0;Hn(n,t,e,i,a),Hn(n,t+1,e,i,a|2),Ar.rebuildAt(n,e),De.sndPlace(i),_r()}function w_(n,t,e){const i=fr(n,t,e),r=i&2?t-1:t,s=Yt(n,r,e),o=Yt(n,r+1,e);Xr(s)&&Hn(n,r,e,kc(s),fr(n,r,e)),Xr(o)&&Hn(n,r+1,e,kc(o),fr(n,r+1,e)),Ar.rebuildAt(n,e),De.sndPlace(s),_r()}function R_(n,t,e){const i=fr(n,t,e),r=i&2?t-1:t;Hn(n,r,e,oe,0),Hn(n,r+1,e,oe,0),Ar.rebuildAt(n,e)}function Xo(n){Ar.disposeAll();const t=n?n[0]:8,e=n?n[2]:8;jr.warmup(t,e),Nn.spawnPlayer(n||null),jr.update(wt.pos.x,wt.pos.z),Zu.spawnAnimals(16,wt.pos),Ei.buildSky()}Pa.addEventListener("click",()=>{Ut.ready&&(De.audioInit(),Ut.weather==="rain"&&Ei.setWeather("rain",wt.pos),En.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{Ut.locked=document.pointerLockElement===En,Pa.style.display=Ut.locked||Jr?"none":"flex",!Ut.locked&&!Jr&&Ut.ready&&(Fn.saveLocal(),Qr=!1,On.textContent="✔ Automatisch gespeichert")});document.addEventListener("mousemove",n=>{Ut.locked&&(wt.yaw-=n.movementX*.0024,wt.pitch-=n.movementY*.0024,wt.pitch=Math.max(-1.55,Math.min(1.55,wt.pitch)))});document.addEventListener("keydown",n=>{if(Ut.keys[n.code]=!0,n.code==="KeyE"&&Ut.ready){Jr?Ju():T_();return}if(n.code==="KeyF"&&(wt.fly=!wt.fly,wt.vel.y=0),n.code==="KeyM"&&De.toggleMusic(),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<sn.length&&(Ut.selected=t,Di.renderHotbar())}});document.addEventListener("keyup",n=>Ut.keys[n.code]=!1);document.addEventListener("wheel",n=>{Ut.locked&&(Ut.selected=(Ut.selected+(n.deltaY>0?1:-1)+sn.length)%sn.length,Di.renderHotbar())});document.addEventListener("contextmenu",n=>n.preventDefault());function tf(n){const t=Yt(n.x,n.y,n.z);return t===Je?!1:Xr(t)?(R_(n.x,n.y,n.z),De.sndBreak(t),ma.spawn(n.x+.5,n.y+.5,n.z+.5,Rc[t]||8947848,10,3,1.5),_r(),!0):(Hn(n.x,n.y,n.z,oe),Qu(n.x,n.y,n.z,t,oe),De.sndBreak(t),ma.spawn(n.x+.5,n.y+.5,n.z+.5,Rc[t]||8947848,10,3,1.5),_r(),!0)}function ef(n,t,e){const i=Yt(n.x,n.y,n.z);if(Xr(i))return w_(n.x,n.y,n.z),!0;const r=n.x+n.nx,s=n.y+n.ny,o=n.z+n.nz;if(!Fu(r,s))return!1;const a=sn[Ut.selected];if(a===Qe||a===Gn)return b_(r,s,o,a),!0;const l=Yt(r,s,o);if(qe(l))return!1;let c=0;return wa(a)&&(c=Math.abs(e)>Math.abs(t)?e<0?0:2:t<0?3:1),Hn(r,s,o,a,c),Nn.boxCollides(wt.pos)?(Hn(r,s,o,l),!1):(Qu(r,s,o,l,a),De.sndPlace(a),_r(),!0)}document.addEventListener("mousedown",n=>{if(!Ut.locked)return;const t=Nn.raycast();t&&(n.button===0?tf(t):n.button===2&&ef(t,-Math.sin(wt.yaw),-Math.cos(wt.yaw)))});document.getElementById("btn-export").addEventListener("click",n=>{n.stopPropagation(),Fn.exportFile(),On.textContent="✔ Welt exportiert"});document.getElementById("btn-import").addEventListener("click",n=>{n.stopPropagation(),document.getElementById("file-import").click()});document.getElementById("file-import").addEventListener("click",n=>n.stopPropagation());document.getElementById("file-import").addEventListener("change",n=>{const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=()=>{try{const i=Fn.applySnapshot(JSON.parse(e.result));i!==!1?(Xo(i),Ei.setWeather(Ut.weather,wt.pos),Fn.saveLocal(),On.textContent="✔ Welt geladen"):On.textContent="✘ Datei konnte nicht gelesen werden"}catch{On.textContent="✘ Ungültige Datei"}},e.readAsText(t),n.target.value=""});document.getElementById("btn-new").addEventListener("click",n=>{n.stopPropagation(),or.textContent="⏳ Neue Welt wird erzeugt …",or.classList.add("busy"),Ut.ready=!1,setTimeout(()=>{const t=Math.random()*2147483648|0;Ou(t),Xo(null),Ut.timeOfDay=.3,Ei.setWeather("clear",wt.pos),_r(),Fn.saveLocal(),On.textContent="✔ Neue Welt (Seed "+t+")",or.textContent="▶ Klicken zum Spielen ◀",or.classList.remove("busy"),Ut.ready=!0},40)});function C_(){const n=Math.floor(wt.pos.x),t=Math.floor(wt.pos.z);for(let e=Math.ceil(wt.pos.y+wt.H);e<Vt;e++)if(qe(Yt(n,e,t)))return!0;return!1}const ga=[];let Wc=performance.now();function L_(n){const t=Math.min((n-Wc)/1e3,.05);Wc=n,be.xr.isPresenting&&ga.push(t);const e=ra.update(t);if(Ut.ready&&(Ut.locked||be.xr.isPresenting)){const s=Nn.update(t);s.splash&&De.sndSplash(),s.land!=null&&De.sndLand(s.land),s.step!=null&&De.sndStep(s.step)}if(be.xr.isPresenting?La.position.set(wt.pos.x,wt.pos.y,wt.pos.z):(Oe.position.set(wt.pos.x,wt.pos.y+wt.EYE,wt.pos.z),Oe.rotation.set(wt.pitch,wt.yaw,0)),Oe.getWorldPosition(Js),Ei.updateSky(t),Ut.ready){jr.update(wt.pos.x,wt.pos.z);const s=Zu.update(t,wt.pos);s.hit&&Ut.locked&&(Nn.moveAxis("x",s.hit.dx*1.5),Nn.moveAxis("z",s.hit.dz*1.5),wt.fly||(wt.vel.y=3.5),De.sndHit(),Gc.style.display="block",clearTimeout(Hc),Hc=setTimeout(()=>{Gc.style.display="none"},240));for(const o of s.poofs)ma.spawn(o[0],o[1],o[2],5929554,14,2.5,2);ma.update(t),E_.update(t),Ei.tickWeather(t,wt.pos),Ei.updateRain(wt.pos,t)}const i=Ut.ready&&Ut.locked?Nn.raycast():Ut.ready&&e?e.hit:null;i?(Hr.visible=!0,Hr.position.set(i.x+.5,i.y+.5,i.z+.5)):Hr.visible=!1,Ut.ready&&e&&e.hit&&(e.doBreak?tf(e.hit)&&ra.pulse(.7,60):e.doPlace&&ef(e.hit,e.fwdX,e.fwdZ)&&ra.pulse(.4,40));const r=Yt(Math.floor(Js.x),Math.floor(Js.y),Math.floor(Js.z))===Je;if(A_.style.display=r?"block":"none",cn.fog.near=r?4:Yu,cn.fog.far=r?26:Wo,De.setMuffle(r),Ut.curHeadWater=r,Ut.curUnderground=!r&&C_(),Ut.ready){const s=Math.floor(wt.pos.x),o=Math.floor(wt.pos.z);Fu(s,0)&&(Ut.curBiome=$r(s,o,Hu(s,o))),Di.updateHUD(wt,De.isMusicOn())}if(!be.xr.isPresenting){const s=En.clientWidth,o=En.clientHeight;(En.width!==(s*be.getPixelRatio()|0)||En.height!==(o*be.getPixelRatio()|0))&&(be.setSize(s,o,!1),Oe.aspect=s/o,Oe.updateProjectionMatrix())}be.render(cn,Oe)}const nf=document.getElementById("btn-vr");navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported("immersive-vr").then(n=>{n&&(nf.style.display="")}).catch(()=>{});nf.addEventListener("click",async n=>{if(n.stopPropagation(),!(!Ut.ready||be.xr.isPresenting)){De.audioInit();try{const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor"]});be.xr.setReferenceSpaceType("local-floor"),await be.xr.setSession(t)}catch(t){On.textContent="✘ VR-Start fehlgeschlagen: "+t.message}}});be.xr.addEventListener("sessionstart",()=>{Pa.style.display="none",ga.length=0,jr.setVRMode(!0)});be.xr.addEventListener("sessionend",()=>{jr.setVRMode(!1),Fn.saveLocal(),Qr=!1,Oe.fov=72,Oe.aspect=En.clientWidth/En.clientHeight,Oe.updateProjectionMatrix(),Pa.style.display="flex";const n=ga.slice(Math.min(144,ga.length>>2));if(n.length>72){const t=n.reduce((r,s)=>r+s,0)/n.length,e=[...n].sort((r,s)=>s-r),i=e[Math.floor(e.length*.01)];On.textContent=`📊 VR: Ø ${(1/t).toFixed(1)} FPS · 1%-low ${(1/i).toFixed(1)} FPS · ${n.length} Frames`}});be.setAnimationLoop(L_);setTimeout(()=>{const n=Fn.loadLocal();let t=null;n===!1&&(t=Math.random()*2**31|0,Ou(t)),Xo(n||null),setInterval(()=>{(Qr||document.pointerLockElement)&&(Fn.saveLocal(),Qr=!1)},8e3),window.addEventListener("beforeunload",()=>Fn.saveLocal()),Ut.ready=!0,or.textContent="▶ Klicken zum Spielen ◀",or.classList.remove("busy"),On.textContent=n!==!1?"✔ Gespeicherte Welt geladen":"✔ Neue Welt (Seed "+t+")"},50);
