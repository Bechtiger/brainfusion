(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="160",ef=0,$o=1,nf=2,Vc=1,rf=2,Ln=3,ni=0,Ve=1,sn=2,Zn=0,ar=1,po=2,Zo=3,jo=4,sf=5,pi=100,af=101,of=102,Jo=103,Qo=104,lf=200,cf=201,uf=202,ff=203,mo=204,go=205,hf=206,df=207,pf=208,mf=209,gf=210,_f=211,vf=212,xf=213,Mf=214,Sf=0,yf=1,Ef=2,ta=3,Tf=4,Af=5,bf=6,wf=7,kc=0,Rf=1,Cf=2,jn=0,Lf=1,Pf=2,Df=3,Uf=4,If=5,Nf=6,Wc=300,fr=301,hr=302,_o=303,vo=304,ha=306,xo=1e3,dn=1001,Mo=1002,Ae=1003,tl=1004,Ca=1005,nn=1006,Ff=1007,Hr=1008,Jn=1009,Of=1010,Bf=1011,Po=1012,Xc=1013,qn=1014,Yn=1015,Vr=1016,qc=1017,Yc=1018,_i=1020,zf=1021,pn=1023,Gf=1024,Hf=1025,vi=1026,dr=1027,Vf=1028,Kc=1029,kf=1030,$c=1031,Zc=1033,La=33776,Pa=33777,Da=33778,Ua=33779,el=35840,nl=35841,il=35842,rl=35843,jc=36196,sl=37492,al=37496,ol=37808,ll=37809,cl=37810,ul=37811,fl=37812,hl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,xl=37820,Ml=37821,Ia=36492,Sl=36494,yl=36495,Wf=36283,El=36284,Tl=36285,Al=36286,Jc=3e3,xi=3001,Xf=3200,qf=3201,Yf=0,Kf=1,an="",ye="srgb",Fn="srgb-linear",Do="display-p3",da="display-p3-linear",ea="linear",ne="srgb",na="rec709",ia="p3",Ii=7680,bl=519,$f=512,Zf=513,jf=514,Qc=515,Jf=516,Qf=517,th=518,eh=519,So=35044,tu=35048,wl="300 es",yo=1035,Un=2e3,ra=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Eo=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function nh(n,t){return(n%t+t)%t}function Na(n,t,e){return(1-e)*n+e*t}function Rl(n){return(n&n-1)===0&&n!==0}function To(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,r,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],p=i[2],g=i[5],_=i[8],S=r[0],d=r[3],u=r[6],y=r[1],v=r[4],M=r[7],T=r[2],m=r[5],E=r[8];return s[0]=o*S+a*y+c*T,s[3]=o*d+a*v+c*m,s[6]=o*u+a*M+c*E,s[1]=l*S+f*y+h*T,s[4]=l*d+f*v+h*m,s[7]=l*u+f*M+h*E,s[2]=p*S+g*y+_*T,s[5]=p*d+g*v+_*m,s[8]=p*u+g*M+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=f*o-a*l,p=a*c-f*s,g=l*s-o*c,_=e*h+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=h*S,t[1]=(r*l-f*i)*S,t[2]=(a*i-r*o)*S,t[3]=p*S,t[4]=(f*e-r*c)*S,t[5]=(r*s-a*e)*S,t[6]=g*S,t[7]=(i*c-l*e)*S,t[8]=(o*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Xt;function eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ih(){const n=sa("canvas");return n.style.display="block",n}const Cl={};function Fr(n){n in Cl||(Cl[n]=!0,console.warn(n))}const Ll=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Fn]:{transfer:ea,primaries:na,toReference:n=>n,fromReference:n=>n},[ye]:{transfer:ne,primaries:na,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:ea,primaries:ia,toReference:n=>n.applyMatrix3(Pl),fromReference:n=>n.applyMatrix3(Ll)},[Do]:{transfer:ne,primaries:ia,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pl),fromReference:n=>n.applyMatrix3(Ll).convertLinearToSRGB()}},rh=new Set([Fn,da]),jt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ls[t].toReference,r=ls[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ls[n].primaries},getTransfer:function(n){return n===an?ea:ls[n].transfer}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=sa("canvas")),Ni.width=t.width,Ni.height=t.height;const i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sh=0;class iu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ba(r[o].image)):s.push(Ba(r[o]))}else s=Ba(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ah=0;class ke extends vr{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=dn,r=dn,s=nn,o=Hr,a=pn,c=Jn,l=ke.DEFAULT_ANISOTROPY,f=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Qn(),this.name="",this.source=new iu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===xi?ye:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?xi:Jc}set encoding(t){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xi?ye:an}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Wc;ke.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],f=c[4],h=c[8],p=c[1],g=c[5],_=c[9],S=c[2],d=c[6],u=c[10];if(Math.abs(f-p)<.01&&Math.abs(h-S)<.01&&Math.abs(_-d)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+S)<.1&&Math.abs(_+d)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(g+1)/2,T=(u+1)/2,m=(f+p)/4,E=(h+S)/4,L=(_+d)/4;return v>M&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=m/i,s=E/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=m/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=E/s,r=L/s),this.set(i,r,s,e),this}let y=Math.sqrt((d-_)*(d-_)+(h-S)*(h-S)+(p-f)*(p-f));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(h-S)/y,this.z=(p-f)/y,this.w=Math.acos((l+g+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends vr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xi?ye:an),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new iu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends oh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ru extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lh extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3];const p=s[o+0],g=s[o+1],_=s[o+2],S=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=S;return}if(h!==S||c!==p||l!==g||f!==_){let d=1-a;const u=c*p+l*g+f*_+h*S,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const T=Math.sqrt(v),m=Math.atan2(T,u*y);d=Math.sin(d*m)/T,a=Math.sin(a*m)/T}const M=a*y;if(c=c*d+p*M,l=l*d+g*M,f=f*d+_*M,h=h*d+S*M,d===1-a){const T=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=T,l*=T,f*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=s[o],p=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+f*h+c*g-l*p,t[e+1]=c*_+f*p+l*h-a*g,t[e+2]=l*_+f*g+a*p-c*h,t[e+3]=f*_-a*h-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(s/2),p=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*f*h+l*g*_,this._y=l*g*h-p*f*_,this._z=l*f*_+p*g*h,this._w=l*f*h-p*g*_;break;case"YXZ":this._x=p*f*h+l*g*_,this._y=l*g*h-p*f*_,this._z=l*f*_-p*g*h,this._w=l*f*h+p*g*_;break;case"ZXY":this._x=p*f*h-l*g*_,this._y=l*g*h+p*f*_,this._z=l*f*_+p*g*h,this._w=l*f*h-p*g*_;break;case"ZYX":this._x=p*f*h-l*g*_,this._y=l*g*h+p*f*_,this._z=l*f*_-p*g*h,this._w=l*f*h+p*g*_;break;case"YZX":this._x=p*f*h+l*g*_,this._y=l*g*h+p*f*_,this._z=l*f*_-p*g*h,this._w=l*f*h-p*g*_;break;case"XZY":this._x=p*f*h-l*g*_,this._y=l*g*h-p*f*_,this._z=l*f*_+p*g*h,this._w=l*f*h+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],f=e[6],h=e[10],p=i+a+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-e)*f)/l,p=Math.sin(e*f)/l;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),f=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*f,this.y=i+c*f+a*l-s*h,this.z=r+c*h+s*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new G,Dl=new Zr;class Li{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),us.subVectors(this.max,br),Fi.subVectors(t.a,br),Oi.subVectors(t.b,br),Bi.subVectors(t.c,br),Gn.subVectors(Oi,Fi),Hn.subVectors(Bi,Oi),oi.subVectors(Fi,Bi);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-oi.y,oi.x,0];return!Ga(e,Fi,Oi,Bi,us)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Fi,Oi,Bi,us))?!1:(fs.crossVectors(Gn,Hn),e=[fs.x,fs.y,fs.z],Ga(e,Fi,Oi,Bi,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new G,new G,new G,new G,new G,new G,new G,new G],ln=new G,cs=new Li,Fi=new G,Oi=new G,Bi=new G,Gn=new G,Hn=new G,oi=new G,br=new G,us=new G,fs=new G,li=new G;function Ga(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){li.fromArray(n,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),f=i.dot(li);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const ch=new Li,wr=new G,Ha=new G;class Pi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ch.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(wr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Ha)),this.expandByPoint(wr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new G,Va=new G,hs=new G,Vn=new G,ka=new G,ds=new G,Wa=new G;class Uo{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Va.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Va);const s=t.distanceTo(e)*.5,o=-this.direction.dot(hs),a=Vn.dot(this.direction),c=-Vn.dot(hs),l=Vn.lengthSq(),f=Math.abs(1-o*o);let h,p,g,_;if(f>0)if(h=o*c-a,p=o*a-c,_=s*f,h>=0)if(p>=-_)if(p<=_){const S=1/f;h*=S,p*=S,g=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+l);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Va).addScaledVector(hs,p),g}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),f>=0?(s=(t.min.y-p.y)*f,o=(t.max.y-p.y)*f):(s=(t.max.y-p.y)*f,o=(t.min.y-p.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-p.z)*h,c=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,c=(t.min.z-p.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){ka.subVectors(e,t),ds.subVectors(i,t),Wa.crossVectors(ka,ds);let o=this.direction.dot(Wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(ds.crossVectors(Vn,ds));if(c<0)return null;const l=a*this.direction.dot(ka.cross(Vn));if(l<0||c+l>o)return null;const f=-a*Vn.dot(Wa);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,c,l,f,h,p,g,_,S,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,f,h,p,g,_,S,d)}set(t,e,i,r,s,o,a,c,l,f,h,p,g,_,S,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=f,u[10]=h,u[14]=p,u[3]=g,u[7]=_,u[11]=S,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=o*f,g=o*h,_=a*f,S=a*h;e[0]=c*f,e[4]=-c*h,e[8]=l,e[1]=g+_*l,e[5]=p-S*l,e[9]=-a*c,e[2]=S-p*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*f,g=c*h,_=l*f,S=l*h;e[0]=p+S*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=g*a-_,e[6]=S+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*f,g=c*h,_=l*f,S=l*h;e[0]=p-S*a,e[4]=-o*h,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*f,e[9]=S-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*f,g=o*h,_=a*f,S=a*h;e[0]=c*f,e[4]=_*l-g,e[8]=p*l+S,e[1]=c*h,e[5]=S*l+p,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,_=a*c,S=a*l;e[0]=c*f,e[4]=S-p*h,e[8]=_*h+g,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=g*h+_,e[10]=p-S*h}else if(t.order==="XZY"){const p=o*c,g=o*l,_=a*c,S=a*l;e[0]=c*f,e[4]=-h,e[8]=l*f,e[1]=p*h+S,e[5]=o*f,e[9]=g*h-_,e[2]=_*h-g,e[6]=a*f,e[10]=S*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uh,t,fh)}lookAt(t,e,i){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),kn.crossVectors(i,Ye),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),kn.crossVectors(i,Ye)),kn.normalize(),ps.crossVectors(Ye,kn),r[0]=kn.x,r[4]=ps.x,r[8]=Ye.x,r[1]=kn.y,r[5]=ps.y,r[9]=Ye.y,r[2]=kn.z,r[6]=ps.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],p=i[9],g=i[13],_=i[2],S=i[6],d=i[10],u=i[14],y=i[3],v=i[7],M=i[11],T=i[15],m=r[0],E=r[4],L=r[8],x=r[12],A=r[1],U=r[5],O=r[9],nt=r[13],P=r[2],F=r[6],z=r[10],Z=r[14],k=r[3],B=r[7],V=r[11],Y=r[15];return s[0]=o*m+a*A+c*P+l*k,s[4]=o*E+a*U+c*F+l*B,s[8]=o*L+a*O+c*z+l*V,s[12]=o*x+a*nt+c*Z+l*Y,s[1]=f*m+h*A+p*P+g*k,s[5]=f*E+h*U+p*F+g*B,s[9]=f*L+h*O+p*z+g*V,s[13]=f*x+h*nt+p*Z+g*Y,s[2]=_*m+S*A+d*P+u*k,s[6]=_*E+S*U+d*F+u*B,s[10]=_*L+S*O+d*z+u*V,s[14]=_*x+S*nt+d*Z+u*Y,s[3]=y*m+v*A+M*P+T*k,s[7]=y*E+v*U+M*F+T*B,s[11]=y*L+v*O+M*z+T*V,s[15]=y*x+v*nt+M*Z+T*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],f=t[2],h=t[6],p=t[10],g=t[14],_=t[3],S=t[7],d=t[11],u=t[15];return _*(+s*c*h-r*l*h-s*a*p+i*l*p+r*a*g-i*c*g)+S*(+e*c*g-e*l*p+s*o*p-r*o*g+r*l*f-s*c*f)+d*(+e*l*h-e*a*g-s*o*h+i*o*g+s*a*f-i*l*f)+u*(-r*a*f-e*c*h+e*a*p+r*o*h-i*o*p+i*c*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],h=t[9],p=t[10],g=t[11],_=t[12],S=t[13],d=t[14],u=t[15],y=h*d*l-S*p*l+S*c*g-a*d*g-h*c*u+a*p*u,v=_*p*l-f*d*l-_*c*g+o*d*g+f*c*u-o*p*u,M=f*S*l-_*h*l+_*a*g-o*S*g-f*a*u+o*h*u,T=_*h*c-f*S*c-_*a*p+o*S*p+f*a*d-o*h*d,m=e*y+i*v+r*M+s*T;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/m;return t[0]=y*E,t[1]=(S*p*s-h*d*s-S*r*g+i*d*g+h*r*u-i*p*u)*E,t[2]=(a*d*s-S*c*s+S*r*l-i*d*l-a*r*u+i*c*u)*E,t[3]=(h*c*s-a*p*s-h*r*l+i*p*l+a*r*g-i*c*g)*E,t[4]=v*E,t[5]=(f*d*s-_*p*s+_*r*g-e*d*g-f*r*u+e*p*u)*E,t[6]=(_*c*s-o*d*s-_*r*l+e*d*l+o*r*u-e*c*u)*E,t[7]=(o*p*s-f*c*s+f*r*l-e*p*l-o*r*g+e*c*g)*E,t[8]=M*E,t[9]=(_*h*s-f*S*s-_*i*g+e*S*g+f*i*u-e*h*u)*E,t[10]=(o*S*s-_*a*s+_*i*l-e*S*l-o*i*u+e*a*u)*E,t[11]=(f*a*s-o*h*s-f*i*l+e*h*l+o*i*g-e*a*g)*E,t[12]=T*E,t[13]=(f*S*r-_*h*r+_*i*p-e*S*p-f*i*d+e*h*d)*E,t[14]=(_*a*r-o*S*r-_*i*c+e*S*c+o*i*d-e*a*d)*E,t[15]=(o*h*r-f*a*r+f*i*c-e*h*c-o*i*p+e*a*p)*E,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,f=o+o,h=a+a,p=s*l,g=s*f,_=s*h,S=o*f,d=o*h,u=a*h,y=c*l,v=c*f,M=c*h,T=i.x,m=i.y,E=i.z;return r[0]=(1-(S+u))*T,r[1]=(g+M)*T,r[2]=(_-v)*T,r[3]=0,r[4]=(g-M)*m,r[5]=(1-(p+u))*m,r[6]=(d+y)*m,r[7]=0,r[8]=(_+v)*E,r[9]=(d-y)*E,r[10]=(1-(p+S))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const o=zi.set(r[4],r[5],r[6]).length(),a=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,f=1/o,h=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Un){const c=this.elements,l=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(a===Un)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ra)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Un){const c=this.elements,l=1/(e-t),f=1/(i-r),h=1/(o-s),p=(e+t)*l,g=(i+r)*f;let _,S;if(a===Un)_=(o+s)*h,S=-2*h;else if(a===ra)_=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=S,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new G,cn=new le,uh=new G(0,0,0),fh=new G(1,1,1),kn=new G,ps=new G,Ye=new G,Ul=new le,Il=new Zr;class pa{constructor(t=0,e=0,i=0,r=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],h=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hh=0;const Nl=new G,Gi=new Zr,wn=new le,ms=new G,Rr=new G,dh=new G,ph=new Zr,Fl=new G(1,0,0),Ol=new G(0,1,0),Bl=new G(0,0,1),mh={type:"added"},gh={type:"removed"};class Ee extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new G,e=new pa,i=new Zr,r=new G(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Rr,ms,this.up):wn.lookAt(ms,Rr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(wn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),f=o(t.images),h=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new G(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new G,Rn=new G,Xa=new G,Cn=new G,Hi=new G,Vi=new G,zl=new G,qa=new G,Ya=new G,Ka=new G;let gs=!1;class $e{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),Rn.subVectors(i,e),Xa.subVectors(t,e);const o=un.dot(un),a=un.dot(Rn),c=un.dot(Xa),l=Rn.dot(Rn),f=Rn.dot(Xa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(l*c-a*f)*p,_=(o*f-a*c)*p;return s.set(1-g-_,_,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,i,r,s,o,a,c){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(t,e,i,r,s,o,a,c)}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c)}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),Rn.subVectors(t,e),un.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),$e.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Vi.subVectors(s,i),qa.subVectors(t,i);const c=Hi.dot(qa),l=Vi.dot(qa);if(c<=0&&l<=0)return e.copy(i);Ya.subVectors(t,r);const f=Hi.dot(Ya),h=Vi.dot(Ya);if(f>=0&&h<=f)return e.copy(r);const p=c*h-f*l;if(p<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(i).addScaledVector(Hi,o);Ka.subVectors(t,s);const g=Hi.dot(Ka),_=Vi.dot(Ka);if(_>=0&&g<=_)return e.copy(s);const S=g*l-c*_;if(S<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Vi,a);const d=f*_-g*h;if(d<=0&&h-f>=0&&g-_>=0)return zl.subVectors(s,r),a=(h-f)/(h-f+(g-_)),e.copy(r).addScaledVector(zl,a);const u=1/(d+S+p);return o=S*u,a=p*u,e.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function $a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=nh(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=$a(o,s,t+1/3),this.g=$a(o,s,t),this.b=$a(o,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=au[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ze(Ce.r*255,0,255))*65536+Math.round(ze(Ce.g*255,0,255))*256+Math.round(ze(Ce.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=f<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ye){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(_s);const i=Na(Wn.h,_s.h,e),r=Na(Wn.s,_s.s,e),s=Na(Wn.l,_s.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Ot;Ot.NAMES=au;let _h=0;class Di extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=ar,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mo&&(i.blendSrc=this.blendSrc),this.blendDst!==go&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vn extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new G,vs=new Kt;class We{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}}class ou extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class lu extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}}let vh=0;const en=new le,Za=new Ee,ki=new G,Ke=new Li,Cr=new Li,Se=new G;class Pe extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?lu:ou)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ke.min,Cr.min),Ke.expandByPoint(Se),Se.addVectors(Ke.max,Cr.max),Ke.expandByPoint(Se)):(Ke.expandByPoint(Cr.min),Ke.expandByPoint(Cr.max))}Ke.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Se.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Se.add(ki)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let A=0;A<a;A++)l[A]=new G,f[A]=new G;const h=new G,p=new G,g=new G,_=new Kt,S=new Kt,d=new Kt,u=new G,y=new G;function v(A,U,O){h.fromArray(r,A*3),p.fromArray(r,U*3),g.fromArray(r,O*3),_.fromArray(o,A*2),S.fromArray(o,U*2),d.fromArray(o,O*2),p.sub(h),g.sub(h),S.sub(_),d.sub(_);const nt=1/(S.x*d.y-d.x*S.y);isFinite(nt)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(g,-S.y).multiplyScalar(nt),y.copy(g).multiplyScalar(S.x).addScaledVector(p,-d.x).multiplyScalar(nt),l[A].add(u),l[U].add(u),l[O].add(u),f[A].add(y),f[U].add(y),f[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,U=M.length;A<U;++A){const O=M[A],nt=O.start,P=O.count;for(let F=nt,z=nt+P;F<z;F+=3)v(i[F+0],i[F+1],i[F+2])}const T=new G,m=new G,E=new G,L=new G;function x(A){E.fromArray(s,A*3),L.copy(E);const U=l[A];T.copy(U),T.sub(E.multiplyScalar(E.dot(U))).normalize(),m.crossVectors(L,U);const nt=m.dot(f[A])<0?-1:1;c[A*4]=T.x,c[A*4+1]=T.y,c[A*4+2]=T.z,c[A*4+3]=nt}for(let A=0,U=M.length;A<U;++A){const O=M[A],nt=O.start,P=O.count;for(let F=nt,z=nt+P;F<z;F+=3)x(i[F+0]),x(i[F+1]),x(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,f=new G,h=new G;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),S=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,d),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,d),a.add(f),c.add(f),l.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,f=a.itemSize,h=a.normalized,p=new l.constructor(c.length*f);let g=0,_=0;for(let S=0,d=c.length;S<d;S++){a.isInterleavedBufferAttribute?g=c[S]*a.data.stride+a.offset:g=c[S]*f;for(let u=0;u<f;u++)p[_++]=l[g++]}return new We(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,h=l.length;f<h;f++){const p=l[f],g=t(p,i);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,p=l.length;h<p;h++){const g=l[h];f.push(g.toJSON(t.data))}f.length>0&&(r[c]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(e))}const s=t.morphAttributes;for(const l in s){const f=[],h=s[l];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,f=o.length;l<f;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new le,ci=new Uo,xs=new Pi,Hl=new G,Wi=new G,Xi=new G,qi=new G,ja=new G,Ms=new G,Ss=new Kt,ys=new Kt,Es=new Kt,Vl=new G,kl=new G,Wl=new G,Ts=new G,As=new G;class je extends Ee{constructor(t=new Pe,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],h=s[c];f!==0&&(ja.fromBufferAttribute(h,t),o?Ms.addScaledVector(ja,f):Ms.addScaledVector(ja.sub(e),f))}e.add(Ms)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(xs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(xs,Hl)===null||ci.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Gl.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=p.length;_<S;_++){const d=p[_],u=o[d.materialIndex],y=Math.max(d.start,g.start),v=Math.min(a.count,Math.min(d.start+d.count,g.start+g.count));for(let M=y,T=v;M<T;M+=3){const m=a.getX(M),E=a.getX(M+1),L=a.getX(M+2);r=bs(this,u,t,i,l,f,h,m,E,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let d=_,u=S;d<u;d+=3){const y=a.getX(d),v=a.getX(d+1),M=a.getX(d+2);r=bs(this,o,t,i,l,f,h,y,v,M),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=p.length;_<S;_++){const d=p[_],u=o[d.materialIndex],y=Math.max(d.start,g.start),v=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let M=y,T=v;M<T;M+=3){const m=M,E=M+1,L=M+2;r=bs(this,u,t,i,l,f,h,m,E,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let d=_,u=S;d<u;d+=3){const y=d,v=d+1,M=d+2;r=bs(this,o,t,i,l,f,h,y,v,M),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function xh(n,t,e,i,r,s,o,a){let c;if(t.side===Ve?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===ni,a),c===null)return null;As.copy(a),As.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(As);return l<e.near||l>e.far?null:{distance:l,point:As.clone(),object:n}}function bs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Wi),n.getVertexPosition(c,Xi),n.getVertexPosition(l,qi);const f=xh(n,t,e,i,Wi,Xi,qi,Ts);if(f){r&&(Ss.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,c),Es.fromBufferAttribute(r,l),f.uv=$e.getInterpolation(Ts,Wi,Xi,qi,Ss,ys,Es,new Kt)),s&&(Ss.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,c),Es.fromBufferAttribute(s,l),f.uv1=$e.getInterpolation(Ts,Wi,Xi,qi,Ss,ys,Es,new Kt),f.uv2=f.uv1),o&&(Vl.fromBufferAttribute(o,a),kl.fromBufferAttribute(o,c),Wl.fromBufferAttribute(o,l),f.normal=$e.getInterpolation(Ts,Wi,Xi,qi,Vl,kl,Wl,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new G,materialIndex:0};$e.getNormal(Wi,Xi,qi,h.normal),f.face=h}return f}class zn extends Pe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let p=0,g=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function _(S,d,u,y,v,M,T,m,E,L,x){const A=M/E,U=T/L,O=M/2,nt=T/2,P=m/2,F=E+1,z=L+1;let Z=0,k=0;const B=new G;for(let V=0;V<z;V++){const Y=V*U-nt;for(let W=0;W<F;W++){const I=W*A-O;B[S]=I*y,B[d]=Y*v,B[u]=P,l.push(B.x,B.y,B.z),B[S]=0,B[d]=0,B[u]=m>0?1:-1,f.push(B.x,B.y,B.z),h.push(W/E),h.push(1-V/L),Z+=1}}for(let V=0;V<L;V++)for(let Y=0;Y<E;Y++){const W=p+Y+F*V,I=p+Y+F*(V+1),J=p+(Y+1)+F*(V+1),rt=p+(Y+1)+F*V;c.push(W,I,rt),c.push(I,J,rt),k+=6}a.addGroup(g,k,x),g+=k,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=pr(n[e]);for(const r in i)t[r]=i[r]}return t}function Mh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cu(n){return n.getRenderTarget()===null?n.outputColorSpace:jt.workingColorSpace}const Sh={clone:pr,merge:Ne};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Mh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class uu extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends uu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Ki=1;class Th extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Yi,Ki,t,e);r.layers=this.layers,this.add(r);const s=new rn(Yi,Ki,t,e);s.layers=this.layers,this.add(s);const o=new rn(Yi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new rn(Yi,Ki,t,e);a.layers=this.layers,this.add(a);const c=new rn(Yi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new rn(Yi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(e,f),t.setRenderTarget(h,p,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fu extends ke{constructor(t,e,i,r,s,o,a,c,l,f){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,i,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ah extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xi?ye:an),this.texture=new fu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zn(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Zn});s.uniforms.tEquirect.value=e;const o=new je(r,s),a=e.minFilter;return e.minFilter===Hr&&(e.minFilter=nn),new Th(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ja=new G,bh=new G,wh=new Xt;class fi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ja.subVectors(i,e).cross(bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ja),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wh.getNormalMatrix(t),r=this.coplanarPoint(Ja).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Pi,ws=new G;class hu{constructor(t=new fi,e=new fi,i=new fi,r=new fi,s=new fi,o=new fi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],f=r[5],h=r[6],p=r[7],g=r[8],_=r[9],S=r[10],d=r[11],u=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(c-s,p-l,d-g,M-u).normalize(),i[1].setComponents(c+s,p+l,d+g,M+u).normalize(),i[2].setComponents(c+o,p+f,d+_,M+y).normalize(),i[3].setComponents(c-o,p-f,d-_,M-y).normalize(),i[4].setComponents(c-a,p-h,d-S,M-v).normalize(),e===Un)i[5].setComponents(c+a,p+h,d+S,M+v).normalize();else if(e===ra)i[5].setComponents(a,h,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ws.x=r.normal.x>0?t.max.x:t.min.x,ws.y=r.normal.y>0?t.max.y:t.min.y,ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Rh(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,f){const h=l.array,p=l.usage,g=h.byteLength,_=n.createBuffer();n.bindBuffer(f,_),n.bufferData(f,h,p),l.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function s(l,f,h){const p=f.array,g=f._updateRange,_=f.updateRanges;if(n.bindBuffer(h,l),g.count===-1&&_.length===0&&n.bufferSubData(h,0,p),_.length!==0){for(let S=0,d=_.length;S<d;S++){const u=_[S];e?n.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(e?n.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(n.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,f));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,f),h.version=l.version}}return{get:o,remove:a,update:c}}class Io extends Pe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,h=t/a,p=e/c,g=[],_=[],S=[],d=[];for(let u=0;u<f;u++){const y=u*p-o;for(let v=0;v<l;v++){const M=v*h-s;_.push(M,-y,0),S.push(0,0,1),d.push(v/a),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){const v=y+l*u,M=y+l*(u+1),T=y+1+l*(u+1),m=y+1+l*u;g.push(v,M,m),g.push(M,T,m)}this.setIndex(g),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(S,3)),this.setAttribute("uv",new Oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
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
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
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
#endif`,kh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`
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
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Rd=`struct PhysicalMaterial {
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
}`,Cd=`
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,$p=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,om=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ch,alphahash_pars_fragment:Lh,alphamap_fragment:Ph,alphamap_pars_fragment:Dh,alphatest_fragment:Uh,alphatest_pars_fragment:Ih,aomap_fragment:Nh,aomap_pars_fragment:Fh,batching_pars_vertex:Oh,batching_vertex:Bh,begin_vertex:zh,beginnormal_vertex:Gh,bsdfs:Hh,iridescence_fragment:Vh,bumpmap_pars_fragment:kh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Yh,color_fragment:Kh,color_pars_fragment:$h,color_pars_vertex:Zh,color_vertex:jh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:rd,colorspace_fragment:sd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:yd,envmap_vertex:fd,fog_vertex:hd,fog_pars_vertex:dd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_fragment:_d,lightmap_pars_fragment:vd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:Ed,lights_toon_pars_fragment:Td,lights_phong_fragment:Ad,lights_phong_pars_fragment:bd,lights_physical_fragment:wd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Cd,lights_fragment_maps:Ld,lights_fragment_end:Pd,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:Vd,morphnormal_vertex:kd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Kd,normal_pars_vertex:$d,normal_vertex:Zd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:rp,project_vertex:sp,dithering_fragment:ap,dithering_pars_fragment:op,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:hp,shadowmask_pars_fragment:dp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:xp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:yp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:bp,worldpos_vertex:wp,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Lp,backgroundCube_frag:Pp,cube_vert:Dp,cube_frag:Up,depth_vert:Ip,depth_frag:Np,distanceRGBA_vert:Fp,distanceRGBA_frag:Op,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:Gp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:kp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Kp,meshnormal_frag:$p,meshphong_vert:Zp,meshphong_frag:jp,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:rm,shadow_frag:sm,sprite_vert:am,sprite_frag:om},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},_n={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};_n.physical={uniforms:Ne([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Rs={r:0,b:0,g:0};function lm(n,t,e,i,r,s,o){const a=new Ot(0);let c=s===!0?0:1,l,f,h=null,p=0,g=null;function _(d,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?S(a,c):v&&v.isColor&&(S(v,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ha)?(f===void 0&&(f=new je(new zn(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:pr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,m,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,(h!==v||p!==v.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,h=v,p=v.version,g=n.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new je(new Io(2,2),new Ei({name:"BackgroundMaterial",uniforms:pr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,g=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function S(d,u){d.getRGB(Rs,cu(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),c=u,S(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,S(a,c)},render:_}}function cm(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=d(null);let l=c,f=!1;function h(P,F,z,Z,k){let B=!1;if(o){const V=S(Z,z,F);l!==V&&(l=V,g(l.object)),B=u(P,Z,z,k),B&&y(P,Z,z,k)}else{const V=F.wireframe===!0;(l.geometry!==Z.id||l.program!==z.id||l.wireframe!==V)&&(l.geometry=Z.id,l.program=z.id,l.wireframe=V,B=!0)}k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,L(P,F,z,Z),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function S(P,F,z){const Z=z.wireframe===!0;let k=a[P.id];k===void 0&&(k={},a[P.id]=k);let B=k[F.id];B===void 0&&(B={},k[F.id]=B);let V=B[Z];return V===void 0&&(V=d(p()),B[Z]=V),V}function d(P){const F=[],z=[],Z=[];for(let k=0;k<r;k++)F[k]=0,z[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:Z,object:P,attributes:{},index:null}}function u(P,F,z,Z){const k=l.attributes,B=F.attributes;let V=0;const Y=z.getAttributes();for(const W in Y)if(Y[W].location>=0){const J=k[W];let rt=B[W];if(rt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;V++}return l.attributesNum!==V||l.index!==Z}function y(P,F,z,Z){const k={},B=F.attributes;let V=0;const Y=z.getAttributes();for(const W in Y)if(Y[W].location>=0){let J=B[W];J===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),k[W]=rt,V++}l.attributes=k,l.attributesNum=V,l.index=Z}function v(){const P=l.newAttributes;for(let F=0,z=P.length;F<z;F++)P[F]=0}function M(P){T(P,0)}function T(P,F){const z=l.newAttributes,Z=l.enabledAttributes,k=l.attributeDivisors;z[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),k[P]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),k[P]=F)}function m(){const P=l.newAttributes,F=l.enabledAttributes;for(let z=0,Z=F.length;z<Z;z++)F[z]!==P[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function E(P,F,z,Z,k,B,V){V===!0?n.vertexAttribIPointer(P,F,z,k,B):n.vertexAttribPointer(P,F,z,Z,k,B)}function L(P,F,z,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const k=Z.attributes,B=z.getAttributes(),V=F.defaultAttributeValues;for(const Y in B){const W=B[Y];if(W.location>=0){let I=k[Y];if(I===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),I!==void 0){const J=I.normalized,rt=I.itemSize,ft=e.get(I);if(ft===void 0)continue;const ht=ft.buffer,vt=ft.type,tt=ft.bytesPerElement,D=i.isWebGL2===!0&&(vt===n.INT||vt===n.UNSIGNED_INT||I.gpuType===Xc);if(I.isInterleavedBufferAttribute){const q=I.data,C=q.stride,et=I.offset;if(q.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)T(W.location+X,q.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let X=0;X<W.locationSize;X++)M(W.location+X);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let X=0;X<W.locationSize;X++)E(W.location+X,rt/W.locationSize,vt,J,C*tt,(et+rt/W.locationSize*X)*tt,D)}else{if(I.isInstancedBufferAttribute){for(let q=0;q<W.locationSize;q++)T(W.location+q,I.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let q=0;q<W.locationSize;q++)M(W.location+q);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let q=0;q<W.locationSize;q++)E(W.location+q,rt/W.locationSize,vt,J,rt*tt,rt/W.locationSize*q*tt,D)}}else if(V!==void 0){const J=V[Y];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(W.location,J);break;case 3:n.vertexAttrib3fv(W.location,J);break;case 4:n.vertexAttrib4fv(W.location,J);break;default:n.vertexAttrib1fv(W.location,J)}}}}m()}function x(){O();for(const P in a){const F=a[P];for(const z in F){const Z=F[z];for(const k in Z)_(Z[k].object),delete Z[k];delete F[z]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const z in F){const Z=F[z];for(const k in Z)_(Z[k].object),delete Z[k];delete F[z]}delete a[P.id]}function U(P){for(const F in a){const z=a[F];if(z[P.id]===void 0)continue;const Z=z[P.id];for(const k in Z)_(Z[k].object),delete Z[k];delete z[P.id]}}function O(){nt(),f=!0,l!==c&&(l=c,g(l.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:nt,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:M,disableUnusedAttributes:m}}function um(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){n.drawArrays(s,f,h),e.update(h,s,1)}function c(f,h,p){if(p===0)return;let g,_;if(r)g=n,_="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,h,p),e.update(h,s,p)}function l(f,h,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(f[_],h[_]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function fm(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,M=o||t.has("OES_texture_float"),T=v&&M,m=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:m}}function hm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new fi,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||i!==0||r;return r=p,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=f(h,p,0)},this.setState=function(h,p,g){const _=h.clippingPlanes,S=h.clipIntersection,d=h.clipShadows,u=n.get(h);if(!r||_===null||_.length===0||s&&!d)s?f(null):l();else{const y=s?0:i,v=y*4;let M=u.clippingState||null;c.value=M,M=f(_,p,v,g);for(let T=0;T!==v;++T)M[T]=e[T];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,p,g,_){const S=h!==null?h.length:0;let d=null;if(S!==0){if(d=c.value,_!==!0||d===null){const u=g+S*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,M=g;v!==S;++v,M+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,d}}function dm(n){let t=new WeakMap;function e(o,a){return a===_o?o.mapping=fr:a===vo&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_o||a===vo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ah(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class pm extends uu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Xl=[.125,.215,.35,.446,.526,.582],mi=20,Qa=new pm,ql=new Ot;let to=null,eo=0,no=0;const hi=(1+Math.sqrt(5))/2,$i=1/hi,Yl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,hi,$i),new G(0,hi,-$i),new G($i,0,hi),new G(-$i,0,hi),new G(hi,$i,0),new G(-hi,$i,0)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Vr,format:pn,colorSpace:Fn,depthBuffer:!1},r=$l(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(s)),this._blurMaterial=gm(s,t,e)}return r}_compileMaterial(t){const e=new je(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,i,r){const a=new rn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(ql),f.toneMapping=jn,f.autoClear=!1;const g=new vn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new je(new zn,g);let S=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,S=!0):(g.color.copy(ql),S=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const v=this._cubeSize;Cs(r,y*v,u>2?v:0,v,v),f.setRenderTarget(r),S&&f.render(_,a),f.render(t,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fr||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Cs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Qa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yl[(r-1)%Yl.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new je(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mi-1),S=s/_,d=isFinite(s)?1+Math.floor(f*S):mi;d>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mi}`);const u=[];let y=0;for(let E=0;E<mi;++E){const L=E/S,x=Math.exp(-L*L/2);u.push(x),E===0?y+=x:E<d&&(y+=2*x)}for(let E=0;E<u.length;E++)u[E]=u[E]/y;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const M=this._sizeLods[r],T=3*M*(r>v-ir?r-v+ir:0),m=4*(this._cubeSize-M);Cs(e,T,m,3*M,2*M),c.setRenderTarget(e),c.render(h,Qa)}}function mm(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+Xl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ir?c=Xl[o-n+ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),f=-l,h=1+l,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,_=6,S=3,d=2,u=1,y=new Float32Array(S*_*g),v=new Float32Array(d*_*g),M=new Float32Array(u*_*g);for(let m=0;m<g;m++){const E=m%3*2/3-1,L=m>2?0:-1,x=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(x,S*_*m),v.set(p,d*_*m);const A=[m,m,m,m,m,m];M.set(A,u*_*m)}const T=new Pe;T.setAttribute("position",new We(y,S)),T.setAttribute("uv",new We(v,d)),T.setAttribute("faceIndex",new We(M,u)),t.push(T),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $l(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function gm(n,t,e){const i=new Float32Array(mi),r=new G(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:No(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Zl(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jl(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function _m(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===_o||c===vo,f=c===fr||c===hr;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Kl(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||f&&h&&r(h)){e===null&&(e=new Kl(n));const p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function vm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xm(n,t,e,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const S=p.morphAttributes[_];for(let d=0,u=S.length;d<u;d++)t.remove(S[d])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)t.update(p[_],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const S=g[_];for(let d=0,u=S.length;d<u;d++)t.update(S[d],n.ARRAY_BUFFER)}}function l(h){const p=[],g=h.index,_=h.attributes.position;let S=0;if(g!==null){const y=g.array;S=g.version;for(let v=0,M=y.length;v<M;v+=3){const T=y[v+0],m=y[v+1],E=y[v+2];p.push(T,m,m,E,E,T)}}else if(_!==void 0){const y=_.array;S=_.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const T=v+0,m=v+1,E=v+2;p.push(T,m,m,E,E,T)}}else return;const d=new(eu(p)?lu:ou)(p,1);d.version=S;const u=s.get(h);u&&t.remove(u),s.set(h,d)}function f(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Mm(n,t,e,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function f(g,_){n.drawElements(s,_,a,g*c),e.update(_,s,1)}function h(g,_,S){if(S===0)return;let d,u;if(r)d=n,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](s,_,a,g*c,S),e.update(_,s,S)}function p(g,_,S){if(S===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<S;u++)this.render(g[u]/c,_[u]);else{d.multiDrawElementsWEBGL(s,_,0,a,g,0,S);let u=0;for(let y=0;y<S;y++)u+=_[y];e.update(u,s,1)}}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function Sm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ym(n,t){return n[0]-t[0]}function Em(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Tm(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,h){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let d=s.get(f);if(d===void 0||d.count!==S){let F=function(){nt.dispose(),s.delete(f),f.removeEventListener("dispose",F)};var g=F;d!==void 0&&d.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,m=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),T===!0&&(x=3);let A=f.attributes.position.count*x,U=1;A>t.maxTextureSize&&(U=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const O=new Float32Array(A*U*4*S),nt=new ru(O,A,U,S);nt.type=Yn,nt.needsUpdate=!0;const P=x*4;for(let z=0;z<S;z++){const Z=m[z],k=E[z],B=L[z],V=A*U*4*z;for(let Y=0;Y<Z.count;Y++){const W=Y*P;v===!0&&(o.fromBufferAttribute(Z,Y),O[V+W+0]=o.x,O[V+W+1]=o.y,O[V+W+2]=o.z,O[V+W+3]=0),M===!0&&(o.fromBufferAttribute(k,Y),O[V+W+4]=o.x,O[V+W+5]=o.y,O[V+W+6]=o.z,O[V+W+7]=0),T===!0&&(o.fromBufferAttribute(B,Y),O[V+W+8]=o.x,O[V+W+9]=o.y,O[V+W+10]=o.z,O[V+W+11]=B.itemSize===4?o.w:1)}}d={count:S,texture:nt,size:new Kt(A,U)},s.set(f,d),f.addEventListener("dispose",F)}let u=0;for(let v=0;v<p.length;v++)u+=p[v];const y=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const _=p===void 0?0:p.length;let S=i[f.id];if(S===void 0||S.length!==_){S=[];for(let M=0;M<_;M++)S[M]=[M,0];i[f.id]=S}for(let M=0;M<_;M++){const T=S[M];T[0]=M,T[1]=p[M]}S.sort(Em);for(let M=0;M<8;M++)M<_&&S[M][1]?(a[M][0]=S[M][0],a[M][1]=S[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ym);const d=f.morphAttributes.position,u=f.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const T=a[M],m=T[0],E=T[1];m!==Number.MAX_SAFE_INTEGER&&E?(d&&f.getAttribute("morphTarget"+M)!==d[m]&&f.setAttribute("morphTarget"+M,d[m]),u&&f.getAttribute("morphNormal"+M)!==u[m]&&f.setAttribute("morphNormal"+M,u[m]),r[M]=E,y+=E):(d&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Am(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class pu extends ke{constructor(t,e,i,r,s,o,a,c,l,f){if(f=f!==void 0?f:vi,f!==vi&&f!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vi&&(i=qn),i===void 0&&f===dr&&(i=_i),super(null,r,s,o,a,c,f,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mu=new ke,gu=new pu(1,1);gu.compareFunction=Qc;const _u=new ru,vu=new lh,xu=new fu,Jl=[],Ql=[],tc=new Float32Array(16),ec=new Float32Array(9),nc=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function bm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),ve(e,i)}}function Pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;ec.set(i),n.uniformMatrix3fv(this.addr,!1,ec),ve(e,i)}}function Dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;tc.set(i),n.uniformMatrix4fv(this.addr,!1,tc),ve(e,i)}}function Um(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function Om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function Hm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?gu:mu;e.setTexture2D(t||s,r)}function Vm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||vu,r)}function km(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||xu,r)}function Wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||_u,r)}function Xm(n){switch(n){case 5126:return bm;case 35664:return wm;case 35665:return Rm;case 35666:return Cm;case 35674:return Lm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Im;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(n,t){n.uniform1fv(this.addr,t)}function Ym(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Km(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function $m(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Zm(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jm(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Jm(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qm(n,t){n.uniform1iv(this.addr,t)}function t0(n,t){n.uniform2iv(this.addr,t)}function e0(n,t){n.uniform3iv(this.addr,t)}function n0(n,t){n.uniform4iv(this.addr,t)}function i0(n,t){n.uniform1uiv(this.addr,t)}function r0(n,t){n.uniform2uiv(this.addr,t)}function s0(n,t){n.uniform3uiv(this.addr,t)}function a0(n,t){n.uniform4uiv(this.addr,t)}function o0(n,t,e){const i=this.cache,r=t.length,s=ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||mu,s[o])}function l0(n,t,e){const i=this.cache,r=t.length,s=ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||vu,s[o])}function c0(n,t,e){const i=this.cache,r=t.length,s=ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xu,s[o])}function u0(n,t,e){const i=this.cache,r=t.length,s=ma(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||_u,s[o])}function f0(n){switch(n){case 5126:return qm;case 35664:return Ym;case 35665:return Km;case 35666:return $m;case 35674:return Zm;case 35675:return jm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}class h0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}}class d0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function ic(n,t){n.seq.push(t),n.map[t.id]=t}function m0(n,t,e){const i=n.name,r=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ic(e,l===void 0?new h0(a,n,t):new d0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new p0(a),ic(e,h)),e=h}}}class js{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);m0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function rc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const g0=37297;let _0=0;function v0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function x0(n){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(n);let i;switch(t===e?i="":t===ia&&e===na?i="LinearDisplayP3ToLinearSRGB":t===na&&e===ia&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case da:return[i,"LinearTransferOETF"];case ye:case Do:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+v0(n.getShaderSource(t),o)}else return r}function M0(n,t){const e=x0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S0(n,t){let e;switch(t){case Lf:e="Linear";break;case Pf:e="Reinhard";break;case Df:e="OptimizedCineon";break;case Uf:e="ACESFilmic";break;case Nf:e="AgX";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function y0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rr).join(`
`)}function T0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function rr(n){return n!==""}function ac(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(b0,R0)}const w0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function R0(n,t){let e=zt[t];if(e===void 0){const i=w0.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(n){return n.replace(C0,L0)}function L0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function P0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function I0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function N0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function F0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=P0(e),l=D0(e),f=U0(e),h=I0(e),p=N0(e),g=e.isWebGL2?"":y0(e),_=E0(e),S=T0(s),d=r.createProgram();let u,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(rr).join(`
`),u.length>0&&(u+=`
`),y=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(rr).join(`
`),y.length>0&&(y+=`
`)):(u=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),y=[g,cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?zt.tonemapping_pars_fragment:"",e.toneMapping!==jn?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Ao(o),o=ac(o,e),o=oc(o,e),a=Ao(a),a=ac(a,e),a=oc(a,e),o=lc(o),a=lc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=v+u+o,T=v+y+a,m=rc(r,r.VERTEX_SHADER,M),E=rc(r,r.FRAGMENT_SHADER,T);r.attachShader(d,m),r.attachShader(d,E),e.index0AttributeName!==void 0?r.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function L(O){if(n.debug.checkShaderErrors){const nt=r.getProgramInfoLog(d).trim(),P=r.getShaderInfoLog(m).trim(),F=r.getShaderInfoLog(E).trim();let z=!0,Z=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,d,m,E);else{const k=sc(r,m,"vertex"),B=sc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+k+`
`+B)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(P===""||F==="")&&(Z=!1);Z&&(O.diagnostics={runnable:z,programLog:nt,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:y}})}r.deleteShader(m),r.deleteShader(E),x=new js(r,d),A=A0(r,d)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(d,g0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=m,this.fragmentShader=E,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new z0(t),e.set(t,i)),i}}class z0{constructor(t){this.id=O0++,this.code=t,this.usedTimes=0}}function G0(n,t,e,i,r,s,o){const a=new su,c=new B0,l=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return x===0?"uv":`uv${x}`}function d(x,A,U,O,nt){const P=O.fog,F=nt.geometry,z=x.isMeshStandardMaterial?O.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),k=Z&&Z.mapping===ha?Z.image.height:null,B=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Y=V!==void 0?V.length:0;let W=0;F.morphAttributes.position!==void 0&&(W=1),F.morphAttributes.normal!==void 0&&(W=2),F.morphAttributes.color!==void 0&&(W=3);let I,J,rt,ft;if(B){const De=_n[B];I=De.vertexShader,J=De.fragmentShader}else I=x.vertexShader,J=x.fragmentShader,c.update(x),rt=c.getVertexShaderID(x),ft=c.getFragmentShaderID(x);const ht=n.getRenderTarget(),vt=nt.isInstancedMesh===!0,tt=nt.isBatchedMesh===!0,D=!!x.map,q=!!x.matcap,C=!!Z,et=!!x.aoMap,X=!!x.lightMap,it=!!x.bumpMap,st=!!x.normalMap,Et=!!x.displacementMap,Mt=!!x.emissiveMap,R=!!x.metalnessMap,b=!!x.roughnessMap,$=x.anisotropy>0,ct=x.clearcoat>0,lt=x.iridescence>0,ut=x.sheen>0,Tt=x.transmission>0,_t=$&&!!x.anisotropyMap,St=ct&&!!x.clearcoatMap,Lt=ct&&!!x.clearcoatNormalMap,Gt=ct&&!!x.clearcoatRoughnessMap,ot=lt&&!!x.iridescenceMap,Zt=lt&&!!x.iridescenceThicknessMap,qt=ut&&!!x.sheenColorMap,Ut=ut&&!!x.sheenRoughnessMap,wt=!!x.specularMap,yt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,$t=Tt&&!!x.transmissionMap,ce=Tt&&!!x.thicknessMap,kt=!!x.gradientMap,dt=!!x.alphaMap,N=x.alphaTest>0,mt=!!x.alphaHash,gt=!!x.extensions,Pt=!!F.attributes.uv1,Rt=!!F.attributes.uv2,Qt=!!F.attributes.uv3;let te=jn;return x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:f,shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:I,fragmentShader:J,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:tt,instancing:vt,instancingColor:vt&&nt.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Fn,map:D,matcap:q,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:X,bumpMap:it,normalMap:st,displacementMap:p&&Et,emissiveMap:Mt,normalMapObjectSpace:st&&x.normalMapType===Kf,normalMapTangentSpace:st&&x.normalMapType===Yf,metalnessMap:R,roughnessMap:b,anisotropy:$,anisotropyMap:_t,clearcoat:ct,clearcoatMap:St,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Gt,iridescence:lt,iridescenceMap:ot,iridescenceThicknessMap:Zt,sheen:ut,sheenColorMap:qt,sheenRoughnessMap:Ut,specularMap:wt,specularColorMap:yt,specularIntensityMap:Bt,transmission:Tt,transmissionMap:$t,thicknessMap:ce,gradientMap:kt,opaque:x.transparent===!1&&x.blending===ar,alphaMap:dt,alphaTest:N,alphaHash:mt,combine:x.combine,mapUv:D&&S(x.map.channel),aoMapUv:et&&S(x.aoMap.channel),lightMapUv:X&&S(x.lightMap.channel),bumpMapUv:it&&S(x.bumpMap.channel),normalMapUv:st&&S(x.normalMap.channel),displacementMapUv:Et&&S(x.displacementMap.channel),emissiveMapUv:Mt&&S(x.emissiveMap.channel),metalnessMapUv:R&&S(x.metalnessMap.channel),roughnessMapUv:b&&S(x.roughnessMap.channel),anisotropyMapUv:_t&&S(x.anisotropyMap.channel),clearcoatMapUv:St&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&S(x.sheenRoughnessMap.channel),specularMapUv:wt&&S(x.specularMap.channel),specularColorMapUv:yt&&S(x.specularColorMap.channel),specularIntensityMapUv:Bt&&S(x.specularIntensityMap.channel),transmissionMapUv:$t&&S(x.transmissionMap.channel),thicknessMapUv:ce&&S(x.thicknessMap.channel),alphaMapUv:dt&&S(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(st||$),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Rt,vertexUv3s:Qt,pointsUvs:nt.isPoints===!0&&!!F.attributes.uv&&(D||dt),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:nt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:D&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:gt&&x.extensions.derivatives===!0,extensionFragDepth:gt&&x.extensions.fragDepth===!0,extensionDrawBuffers:gt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(y(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function y(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){const A=_[x.type];let U;if(A){const O=_n[A];U=Sh.clone(O.uniforms)}else U=x.uniforms;return U}function T(x,A){let U;for(let O=0,nt=l.length;O<nt;O++){const P=l[O];if(P.cacheKey===A){U=P,++U.usedTimes;break}}return U===void 0&&(U=new F0(n,A,x,s),l.push(U)),U}function m(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function E(x){c.remove(x)}function L(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:m,releaseShaderCache:E,programs:l,dispose:L}}function H0(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function V0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function uc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,p,g,_,S,d){let u=n[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:g,groupOrder:_,renderOrder:h.renderOrder,z:S,group:d},n[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=g,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=d),t++,u}function a(h,p,g,_,S,d){const u=o(h,p,g,_,S,d);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):e.push(u)}function c(h,p,g,_,S,d){const u=o(h,p,g,_,S,d);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):e.unshift(u)}function l(h,p){e.length>1&&e.sort(h||V0),i.length>1&&i.sort(p||uc),r.length>1&&r.sort(p||uc)}function f(){for(let h=t,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function k0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new fc,n.set(i,[o])):r>=s.length?(o=new fc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function W0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Ot};break;case"SpotLight":e={position:new G,direction:new G,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function X0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let q0=0;function Y0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function K0(n,t){const e=new W0,i=X0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new G);const s=new G,o=new le,a=new le;function c(f,h){let p=0,g=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let S=0,d=0,u=0,y=0,v=0,M=0,T=0,m=0,E=0,L=0,x=0;f.sort(Y0);const A=h===!0?Math.PI:1;for(let O=0,nt=f.length;O<nt;O++){const P=f[O],F=P.color,z=P.intensity,Z=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=F.r*z*A,g+=F.g*z*A,_+=F.b*z*A;else if(P.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(P.sh.coefficients[B],z);x++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const V=P.shadow,Y=i.get(P);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=k,r.directionalShadowMatrix[S]=P.shadow.matrix,M++}r.directional[S]=B,S++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(F).multiplyScalar(z*A),B.distance=Z,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,r.spot[u]=B;const V=P.shadow;if(P.map&&(r.spotLightMap[E]=P.map,E++,V.updateMatrices(P),P.castShadow&&L++),r.spotLightMatrix[u]=V.matrix,P.castShadow){const Y=i.get(P);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=k,m++}u++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(F).multiplyScalar(z),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=B,y++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*A),B.distance=P.distance,B.decay=P.decay,P.castShadow){const V=P.shadow,Y=i.get(P);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,r.pointShadow[d]=Y,r.pointShadowMap[d]=k,r.pointShadowMatrix[d]=P.shadow.matrix,T++}r.point[d]=B,d++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(z*A),B.groundColor.copy(P.groundColor).multiplyScalar(z*A),r.hemi[v]=B,v++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==S||U.pointLength!==d||U.spotLength!==u||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==M||U.numPointShadows!==T||U.numSpotShadows!==m||U.numSpotMaps!==E||U.numLightProbes!==x)&&(r.directional.length=S,r.spot.length=u,r.rectArea.length=y,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=m,r.spotShadowMap.length=m,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=m+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=x,U.directionalLength=S,U.pointLength=d,U.spotLength=u,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=M,U.numPointShadows=T,U.numSpotShadows=m,U.numSpotMaps=E,U.numLightProbes=x,r.version=q0++)}function l(f,h){let p=0,g=0,_=0,S=0,d=0;const u=h.matrixWorldInverse;for(let y=0,v=f.length;y<v;y++){const M=f[y];if(M.isDirectionalLight){const T=r.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),p++}else if(M.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const T=r.rectArea[S];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),d++}}}return{setup:c,setupView:l,state:r}}function hc(n,t){const e=new K0(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){e.setup(i,h)}function l(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function $0(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new hc(n,t),e.set(s,[c])):o>=a.length?(c=new hc(n,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:i,dispose:r}}class Z0 extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function tg(n,t,e){let i=new hu;const r=new Kt,s=new Kt,o=new be,a=new Z0({depthPacking:qf}),c=new j0,l={},f=e.maxTextureSize,h={[ni]:Ve,[Ve]:ni,[sn]:sn},p=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:J0,fragmentShader:Q0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Pe;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new je(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let u=this.type;this.render=function(m,E,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||m.length===0)return;const x=n.getRenderTarget(),A=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const nt=u!==Ln&&this.type===Ln,P=u===Ln&&this.type!==Ln;for(let F=0,z=m.length;F<z;F++){const Z=m[F],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const B=k.getFrameExtents();if(r.multiply(B),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,k.mapSize.y=s.y)),k.map===null||nt===!0||P===!0){const Y=this.type!==Ln?{minFilter:Ae,magFilter:Ae}:{};k.map!==null&&k.map.dispose(),k.map=new yi(r.x,r.y,Y),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const V=k.getViewportCount();for(let Y=0;Y<V;Y++){const W=k.getViewport(Y);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),O.viewport(o),k.updateMatrices(Z,Y),i=k.getFrustum(),M(E,L,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Ln&&y(k,L),k.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(x,A,U)};function y(m,E){const L=t.update(S);p.defines.VSM_SAMPLES!==m.blurSamples&&(p.defines.VSM_SAMPLES=m.blurSamples,g.defines.VSM_SAMPLES=m.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),m.mapPass===null&&(m.mapPass=new yi(r.x,r.y)),p.uniforms.shadow_pass.value=m.map.texture,p.uniforms.resolution.value=m.mapSize,p.uniforms.radius.value=m.radius,n.setRenderTarget(m.mapPass),n.clear(),n.renderBufferDirect(E,null,L,p,S,null),g.uniforms.shadow_pass.value=m.mapPass.texture,g.uniforms.resolution.value=m.mapSize,g.uniforms.radius.value=m.radius,n.setRenderTarget(m.map),n.clear(),n.renderBufferDirect(E,null,L,g,S,null)}function v(m,E,L,x){let A=null;const U=L.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(U!==void 0)A=U;else if(A=L.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=A.uuid,nt=E.uuid;let P=l[O];P===void 0&&(P={},l[O]=P);let F=P[nt];F===void 0&&(F=A.clone(),P[nt]=F,E.addEventListener("dispose",T)),A=F}if(A.visible=E.visible,A.wireframe=E.wireframe,x===Ln?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:h[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const O=n.properties.get(A);O.light=L}return A}function M(m,E,L,x,A){if(m.visible===!1)return;if(m.layers.test(E.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&A===Ln)&&(!m.frustumCulled||i.intersectsObject(m))){m.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,m.matrixWorld);const nt=t.update(m),P=m.material;if(Array.isArray(P)){const F=nt.groups;for(let z=0,Z=F.length;z<Z;z++){const k=F[z],B=P[k.materialIndex];if(B&&B.visible){const V=v(m,B,x,A);m.onBeforeShadow(n,m,E,L,nt,V,k),n.renderBufferDirect(L,null,nt,V,m,k),m.onAfterShadow(n,m,E,L,nt,V,k)}}}else if(P.visible){const F=v(m,P,x,A);m.onBeforeShadow(n,m,E,L,nt,F,null),n.renderBufferDirect(L,null,nt,F,m,null),m.onAfterShadow(n,m,E,L,nt,F,null)}}const O=m.children;for(let nt=0,P=O.length;nt<P;nt++)M(O[nt],E,L,x,A)}function T(m){m.target.removeEventListener("dispose",T);for(const L in l){const x=l[L],A=m.target.uuid;A in x&&(x[A].dispose(),delete x[A])}}}function eg(n,t,e){const i=e.isWebGL2;function r(){let N=!1;const mt=new be;let gt=null;const Pt=new be(0,0,0,0);return{setMask:function(Rt){gt!==Rt&&!N&&(n.colorMask(Rt,Rt,Rt,Rt),gt=Rt)},setLocked:function(Rt){N=Rt},setClear:function(Rt,Qt,te,xe,De){De===!0&&(Rt*=xe,Qt*=xe,te*=xe),mt.set(Rt,Qt,te,xe),Pt.equals(mt)===!1&&(n.clearColor(Rt,Qt,te,xe),Pt.copy(mt))},reset:function(){N=!1,gt=null,Pt.set(-1,0,0,0)}}}function s(){let N=!1,mt=null,gt=null,Pt=null;return{setTest:function(Rt){Rt?tt(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(Rt){mt!==Rt&&!N&&(n.depthMask(Rt),mt=Rt)},setFunc:function(Rt){if(gt!==Rt){switch(Rt){case Sf:n.depthFunc(n.NEVER);break;case yf:n.depthFunc(n.ALWAYS);break;case Ef:n.depthFunc(n.LESS);break;case ta:n.depthFunc(n.LEQUAL);break;case Tf:n.depthFunc(n.EQUAL);break;case Af:n.depthFunc(n.GEQUAL);break;case bf:n.depthFunc(n.GREATER);break;case wf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Rt}},setLocked:function(Rt){N=Rt},setClear:function(Rt){Pt!==Rt&&(n.clearDepth(Rt),Pt=Rt)},reset:function(){N=!1,mt=null,gt=null,Pt=null}}}function o(){let N=!1,mt=null,gt=null,Pt=null,Rt=null,Qt=null,te=null,xe=null,De=null;return{setTest:function(ee){N||(ee?tt(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(ee){mt!==ee&&!N&&(n.stencilMask(ee),mt=ee)},setFunc:function(ee,Ue,gn){(gt!==ee||Pt!==Ue||Rt!==gn)&&(n.stencilFunc(ee,Ue,gn),gt=ee,Pt=Ue,Rt=gn)},setOp:function(ee,Ue,gn){(Qt!==ee||te!==Ue||xe!==gn)&&(n.stencilOp(ee,Ue,gn),Qt=ee,te=Ue,xe=gn)},setLocked:function(ee){N=ee},setClear:function(ee){De!==ee&&(n.clearStencil(ee),De=ee)},reset:function(){N=!1,mt=null,gt=null,Pt=null,Rt=null,Qt=null,te=null,xe=null,De=null}}}const a=new r,c=new s,l=new o,f=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,S=[],d=null,u=!1,y=null,v=null,M=null,T=null,m=null,E=null,L=null,x=new Ot(0,0,0),A=0,U=!1,O=null,nt=null,P=null,F=null,z=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=B>=2);let Y=null,W={};const I=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),rt=new be().fromArray(I),ft=new be().fromArray(J);function ht(N,mt,gt,Pt){const Rt=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(N,Qt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<gt;te++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(mt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(mt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Qt}const vt={};vt[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(vt[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),tt(n.DEPTH_TEST),c.setFunc(ta),Mt(!1),R($o),tt(n.CULL_FACE),st(Zn);function tt(N){p[N]!==!0&&(n.enable(N),p[N]=!0)}function D(N){p[N]!==!1&&(n.disable(N),p[N]=!1)}function q(N,mt){return g[N]!==mt?(n.bindFramebuffer(N,mt),g[N]=mt,i&&(N===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=mt),N===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=mt)),!0):!1}function C(N,mt){let gt=S,Pt=!1;if(N)if(gt=_.get(mt),gt===void 0&&(gt=[],_.set(mt,gt)),N.isWebGLMultipleRenderTargets){const Rt=N.texture;if(gt.length!==Rt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=Rt.length;Qt<te;Qt++)gt[Qt]=n.COLOR_ATTACHMENT0+Qt;gt.length=Rt.length,Pt=!0}}else gt[0]!==n.COLOR_ATTACHMENT0&&(gt[0]=n.COLOR_ATTACHMENT0,Pt=!0);else gt[0]!==n.BACK&&(gt[0]=n.BACK,Pt=!0);Pt&&(e.isWebGL2?n.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function et(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const X={[pi]:n.FUNC_ADD,[af]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};if(i)X[Jo]=n.MIN,X[Qo]=n.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(X[Jo]=N.MIN_EXT,X[Qo]=N.MAX_EXT)}const it={[lf]:n.ZERO,[cf]:n.ONE,[uf]:n.SRC_COLOR,[mo]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[hf]:n.DST_ALPHA,[ff]:n.ONE_MINUS_SRC_COLOR,[go]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[vf]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[Mf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(N,mt,gt,Pt,Rt,Qt,te,xe,De,ee){if(N===Zn){u===!0&&(D(n.BLEND),u=!1);return}if(u===!1&&(tt(n.BLEND),u=!0),N!==sf){if(N!==y||ee!==U){if((v!==pi||m!==pi)&&(n.blendEquation(n.FUNC_ADD),v=pi,m=pi),ee)switch(N){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case po:n.blendFunc(n.ONE,n.ONE);break;case Zo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case po:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,T=null,E=null,L=null,x.set(0,0,0),A=0,y=N,U=ee}return}Rt=Rt||mt,Qt=Qt||gt,te=te||Pt,(mt!==v||Rt!==m)&&(n.blendEquationSeparate(X[mt],X[Rt]),v=mt,m=Rt),(gt!==M||Pt!==T||Qt!==E||te!==L)&&(n.blendFuncSeparate(it[gt],it[Pt],it[Qt],it[te]),M=gt,T=Pt,E=Qt,L=te),(xe.equals(x)===!1||De!==A)&&(n.blendColor(xe.r,xe.g,xe.b,De),x.copy(xe),A=De),y=N,U=!1}function Et(N,mt){N.side===sn?D(n.CULL_FACE):tt(n.CULL_FACE);let gt=N.side===Ve;mt&&(gt=!gt),Mt(gt),N.blending===ar&&N.transparent===!1?st(Zn):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const Pt=N.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(N){O!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),O=N)}function R(N){N!==ef?(tt(n.CULL_FACE),N!==nt&&(N===$o?n.cullFace(n.BACK):N===nf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),nt=N}function b(N){N!==P&&(k&&n.lineWidth(N),P=N)}function $(N,mt,gt){N?(tt(n.POLYGON_OFFSET_FILL),(F!==mt||z!==gt)&&(n.polygonOffset(mt,gt),F=mt,z=gt)):D(n.POLYGON_OFFSET_FILL)}function ct(N){N?tt(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function lt(N){N===void 0&&(N=n.TEXTURE0+Z-1),Y!==N&&(n.activeTexture(N),Y=N)}function ut(N,mt,gt){gt===void 0&&(Y===null?gt=n.TEXTURE0+Z-1:gt=Y);let Pt=W[gt];Pt===void 0&&(Pt={type:void 0,texture:void 0},W[gt]=Pt),(Pt.type!==N||Pt.texture!==mt)&&(Y!==gt&&(n.activeTexture(gt),Y=gt),n.bindTexture(N,mt||vt[N]),Pt.type=N,Pt.texture=mt)}function Tt(){const N=W[Y];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _t(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(N){rt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function $t(N){ft.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ft.copy(N))}function ce(N,mt){let gt=h.get(mt);gt===void 0&&(gt=new WeakMap,h.set(mt,gt));let Pt=gt.get(N);Pt===void 0&&(Pt=n.getUniformBlockIndex(mt,N.name),gt.set(N,Pt))}function kt(N,mt){const Pt=h.get(mt).get(N);f.get(mt)!==Pt&&(n.uniformBlockBinding(mt,Pt,N.__bindingPointIndex),f.set(mt,Pt))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},Y=null,W={},g={},_=new WeakMap,S=[],d=null,u=!1,y=null,v=null,M=null,T=null,m=null,E=null,L=null,x=new Ot(0,0,0),A=0,U=!1,O=null,nt=null,P=null,F=null,z=null,rt.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:tt,disable:D,bindFramebuffer:q,drawBuffers:C,useProgram:et,setBlending:st,setMaterial:Et,setFlipSided:Mt,setCullFace:R,setLineWidth:b,setPolygonOffset:$,setScissorTest:ct,activeTexture:lt,bindTexture:ut,unbindTexture:Tt,compressedTexImage2D:_t,compressedTexImage3D:St,texImage2D:wt,texImage3D:yt,updateUBOMapping:ce,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:Ut,texSubImage2D:Lt,texSubImage3D:Gt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Zt,scissor:Bt,viewport:$t,reset:dt}}function ng(n,t,e,i,r,s,o){const a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return g?new OffscreenCanvas(R,b):sa("canvas")}function S(R,b,$,ct){let lt=1;if((R.width>ct||R.height>ct)&&(lt=ct/Math.max(R.width,R.height)),lt<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ut=b?To:Math.floor,Tt=ut(lt*R.width),_t=ut(lt*R.height);h===void 0&&(h=_(Tt,_t));const St=$?_(Tt,_t):h;return St.width=Tt,St.height=_t,St.getContext("2d").drawImage(R,0,0,Tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Tt+"x"+_t+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function d(R){return Rl(R.width)&&Rl(R.height)}function u(R){return a?!1:R.wrapS!==dn||R.wrapT!==dn||R.minFilter!==Ae&&R.minFilter!==nn}function y(R,b){return R.generateMipmaps&&b&&R.minFilter!==Ae&&R.minFilter!==nn}function v(R){n.generateMipmap(R)}function M(R,b,$,ct,lt=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut=b;if(b===n.RED&&($===n.FLOAT&&(ut=n.R32F),$===n.HALF_FLOAT&&(ut=n.R16F),$===n.UNSIGNED_BYTE&&(ut=n.R8)),b===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ut=n.R8UI),$===n.UNSIGNED_SHORT&&(ut=n.R16UI),$===n.UNSIGNED_INT&&(ut=n.R32UI),$===n.BYTE&&(ut=n.R8I),$===n.SHORT&&(ut=n.R16I),$===n.INT&&(ut=n.R32I)),b===n.RG&&($===n.FLOAT&&(ut=n.RG32F),$===n.HALF_FLOAT&&(ut=n.RG16F),$===n.UNSIGNED_BYTE&&(ut=n.RG8)),b===n.RGBA){const Tt=lt?ea:jt.getTransfer(ct);$===n.FLOAT&&(ut=n.RGBA32F),$===n.HALF_FLOAT&&(ut=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ut=Tt===ne?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function T(R,b,$){return y(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==Ae&&R.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function m(R){return R===Ae||R===tl||R===Ca?n.NEAREST:n.LINEAR}function E(R){const b=R.target;b.removeEventListener("dispose",E),x(b),b.isVideoTexture&&f.delete(b)}function L(R){const b=R.target;b.removeEventListener("dispose",L),U(b)}function x(R){const b=i.get(R);if(b.__webglInit===void 0)return;const $=R.source,ct=p.get($);if(ct){const lt=ct[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(R),Object.keys(ct).length===0&&p.delete($)}i.remove(R)}function A(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const $=R.source,ct=p.get($);delete ct[b.__cacheKey],o.memory.textures--}function U(R){const b=R.texture,$=i.get(R),ct=i.get(b);if(ct.__webglTexture!==void 0&&(n.deleteTexture(ct.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray($.__webglFramebuffer[lt]))for(let ut=0;ut<$.__webglFramebuffer[lt].length;ut++)n.deleteFramebuffer($.__webglFramebuffer[lt][ut]);else n.deleteFramebuffer($.__webglFramebuffer[lt]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[lt])}else{if(Array.isArray($.__webglFramebuffer))for(let lt=0;lt<$.__webglFramebuffer.length;lt++)n.deleteFramebuffer($.__webglFramebuffer[lt]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let lt=0;lt<$.__webglColorRenderbuffer.length;lt++)$.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[lt]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let lt=0,ut=b.length;lt<ut;lt++){const Tt=i.get(b[lt]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(b[lt])}i.remove(b),i.remove(R)}let O=0;function nt(){O=0}function P(){const R=O;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function F(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function z(R,b){const $=i.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt($,R,b);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+b)}function Z(R,b){const $=i.get(R);if(R.version>0&&$.__version!==R.version){rt($,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+b)}function k(R,b){const $=i.get(R);if(R.version>0&&$.__version!==R.version){rt($,R,b);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+b)}function B(R,b){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ft($,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+b)}const V={[xo]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},Y={[Ae]:n.NEAREST,[tl]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Ff]:n.LINEAR_MIPMAP_NEAREST,[Hr]:n.LINEAR_MIPMAP_LINEAR},W={[$f]:n.NEVER,[eh]:n.ALWAYS,[Zf]:n.LESS,[Qc]:n.LEQUAL,[jf]:n.EQUAL,[th]:n.GEQUAL,[Jf]:n.GREATER,[Qf]:n.NOTEQUAL};function I(R,b,$){if($?(n.texParameteri(R,n.TEXTURE_WRAP_S,V[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,V[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,V[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Y[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Y[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==dn||b.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,m(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,m(b.minFilter)),b.minFilter!==Ae&&b.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ae||b.minFilter!==Ca&&b.minFilter!==Hr||b.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Vr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function J(R,b){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const ct=b.source;let lt=p.get(ct);lt===void 0&&(lt={},p.set(ct,lt));const ut=F(b);if(ut!==R.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),lt[ut].usedTimes++;const Tt=lt[R.__cacheKey];Tt!==void 0&&(lt[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&A(b)),R.__cacheKey=ut,R.__webglTexture=lt[ut].texture}return $}function rt(R,b,$){let ct=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=n.TEXTURE_3D);const lt=J(R,b),ut=b.source;e.bindTexture(ct,R.__webglTexture,n.TEXTURE0+$);const Tt=i.get(ut);if(ut.version!==Tt.__version||lt===!0){e.activeTexture(n.TEXTURE0+$);const _t=jt.getPrimaries(jt.workingColorSpace),St=b.colorSpace===an?null:jt.getPrimaries(b.colorSpace),Lt=b.colorSpace===an||_t===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Gt=u(b)&&d(b.image)===!1;let ot=S(b.image,Gt,!1,r.maxTextureSize);ot=Mt(b,ot);const Zt=d(ot)||a,qt=s.convert(b.format,b.colorSpace);let Ut=s.convert(b.type),wt=M(b.internalFormat,qt,Ut,b.colorSpace,b.isVideoTexture);I(ct,b,Zt);let yt;const Bt=b.mipmaps,$t=a&&b.isVideoTexture!==!0&&wt!==jc,ce=Tt.__version===void 0||lt===!0,kt=T(b,ot,Zt);if(b.isDepthTexture)wt=n.DEPTH_COMPONENT,a?b.type===Yn?wt=n.DEPTH_COMPONENT32F:b.type===qn?wt=n.DEPTH_COMPONENT24:b.type===_i?wt=n.DEPTH24_STENCIL8:wt=n.DEPTH_COMPONENT16:b.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===vi&&wt===n.DEPTH_COMPONENT&&b.type!==Po&&b.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=qn,Ut=s.convert(b.type)),b.format===dr&&wt===n.DEPTH_COMPONENT&&(wt=n.DEPTH_STENCIL,b.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=_i,Ut=s.convert(b.type))),ce&&($t?e.texStorage2D(n.TEXTURE_2D,1,wt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,qt,Ut,null));else if(b.isDataTexture)if(Bt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,N=Bt.length;dt<N;dt++)yt=Bt[dt],$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,qt,Ut,yt.data);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,qt,Ut,ot.data)):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,qt,Ut,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,wt,Bt[0].width,Bt[0].height,ot.depth);for(let dt=0,N=Bt.length;dt<N;dt++)yt=Bt[dt],b.format!==pn?qt!==null?$t?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,yt.width,yt.height,ot.depth,qt,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,wt,yt.width,yt.height,ot.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,yt.width,yt.height,ot.depth,qt,Ut,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,wt,yt.width,yt.height,ot.depth,0,qt,Ut,yt.data)}else{$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,N=Bt.length;dt<N;dt++)yt=Bt[dt],b.format!==pn?qt!==null?$t?e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,qt,Ut,yt.data)}else if(b.isDataArrayTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,qt,Ut,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,ot.width,ot.height,ot.depth,0,qt,Ut,ot.data);else if(b.isData3DTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_3D,kt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,qt,Ut,ot.data)):e.texImage3D(n.TEXTURE_3D,0,wt,ot.width,ot.height,ot.depth,0,qt,Ut,ot.data);else if(b.isFramebufferTexture){if(ce)if($t)e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height);else{let dt=ot.width,N=ot.height;for(let mt=0;mt<kt;mt++)e.texImage2D(n.TEXTURE_2D,mt,wt,dt,N,0,qt,Ut,null),dt>>=1,N>>=1}}else if(Bt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,N=Bt.length;dt<N;dt++)yt=Bt[dt],$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,qt,Ut,yt):e.texImage2D(n.TEXTURE_2D,dt,wt,qt,Ut,yt);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,qt,Ut,ot)):e.texImage2D(n.TEXTURE_2D,0,wt,qt,Ut,ot);y(b,Zt)&&v(ct),Tt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ft(R,b,$){if(b.image.length!==6)return;const ct=J(R,b),lt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);const ut=i.get(lt);if(lt.version!==ut.__version||ct===!0){e.activeTexture(n.TEXTURE0+$);const Tt=jt.getPrimaries(jt.workingColorSpace),_t=b.colorSpace===an?null:jt.getPrimaries(b.colorSpace),St=b.colorSpace===an||Tt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,Gt=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let dt=0;dt<6;dt++)!Lt&&!Gt?ot[dt]=S(b.image[dt],!1,!0,r.maxCubemapSize):ot[dt]=Gt?b.image[dt].image:b.image[dt],ot[dt]=Mt(b,ot[dt]);const Zt=ot[0],qt=d(Zt)||a,Ut=s.convert(b.format,b.colorSpace),wt=s.convert(b.type),yt=M(b.internalFormat,Ut,wt,b.colorSpace),Bt=a&&b.isVideoTexture!==!0,$t=ut.__version===void 0||ct===!0;let ce=T(b,Zt,qt);I(n.TEXTURE_CUBE_MAP,b,qt);let kt;if(Lt){Bt&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,yt,Zt.width,Zt.height);for(let dt=0;dt<6;dt++){kt=ot[dt].mipmaps;for(let N=0;N<kt.length;N++){const mt=kt[N];b.format!==pn?Ut!==null?Bt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N,0,0,mt.width,mt.height,Ut,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N,0,0,mt.width,mt.height,Ut,wt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N,yt,mt.width,mt.height,0,Ut,wt,mt.data)}}}else{kt=b.mipmaps,Bt&&$t&&(kt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,yt,ot[0].width,ot[0].height));for(let dt=0;dt<6;dt++)if(Gt){Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ot[dt].width,ot[dt].height,Ut,wt,ot[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,ot[dt].width,ot[dt].height,0,Ut,wt,ot[dt].data);for(let N=0;N<kt.length;N++){const gt=kt[N].image[dt].image;Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N+1,0,0,gt.width,gt.height,Ut,wt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N+1,yt,gt.width,gt.height,0,Ut,wt,gt.data)}}else{Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ut,wt,ot[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,Ut,wt,ot[dt]);for(let N=0;N<kt.length;N++){const mt=kt[N];Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N+1,0,0,Ut,wt,mt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,N+1,yt,Ut,wt,mt.image[dt])}}}y(b,qt)&&v(n.TEXTURE_CUBE_MAP),ut.__version=lt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ht(R,b,$,ct,lt,ut){const Tt=s.convert($.format,$.colorSpace),_t=s.convert($.type),St=M($.internalFormat,Tt,_t,$.colorSpace);if(!i.get(b).__hasExternalTextures){const Gt=Math.max(1,b.width>>ut),ot=Math.max(1,b.height>>ut);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,ut,St,Gt,ot,b.depth,0,Tt,_t,null):e.texImage2D(lt,ut,St,Gt,ot,0,Tt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),st(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,lt,i.get($).__webglTexture,0,it(b)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,lt,i.get($).__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(R,b,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ct=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||st(b)){const lt=b.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Yn?ct=n.DEPTH_COMPONENT32F:lt.type===qn&&(ct=n.DEPTH_COMPONENT24));const ut=it(b);st(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,ct,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,ct,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ct,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ct=it(b);$&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):st(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ct=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let lt=0;lt<ct.length;lt++){const ut=ct[lt],Tt=s.convert(ut.format,ut.colorSpace),_t=s.convert(ut.type),St=M(ut.internalFormat,Tt,_t,ut.colorSpace),Lt=it(b);$&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,St,b.width,b.height):st(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,St,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,St,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function tt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const ct=i.get(b.depthTexture).__webglTexture,lt=it(b);if(b.depthTexture.format===vi)st(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(b.depthTexture.format===dr)st(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function D(R){const b=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");tt(b.__webglFramebuffer,R)}else if($){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]=n.createRenderbuffer(),vt(b.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),vt(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(R,b,$){const ct=i.get(R);b!==void 0&&ht(ct.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&D(R)}function C(R){const b=R.texture,$=i.get(R),ct=i.get(b);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=b.version,o.memory.textures++);const lt=R.isWebGLCubeRenderTarget===!0,ut=R.isWebGLMultipleRenderTargets===!0,Tt=d(R)||a;if(lt){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let St=0;St<b.mipmaps.length;St++)$.__webglFramebuffer[_t][St]=n.createFramebuffer()}else $.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)$.__webglFramebuffer[_t]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(ut)if(r.drawBuffers){const _t=R.texture;for(let St=0,Lt=_t.length;St<Lt;St++){const Gt=i.get(_t[St]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&st(R)===!1){const _t=ut?b:[b];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let St=0;St<_t.length;St++){const Lt=_t[St];$.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[St]);const Gt=s.convert(Lt.format,Lt.colorSpace),ot=s.convert(Lt.type),Zt=M(Lt.internalFormat,Gt,ot,Lt.colorSpace,R.isXRRenderTarget===!0),qt=it(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Zt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,$.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),vt($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),I(n.TEXTURE_CUBE_MAP,b,Tt);for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)ht($.__webglFramebuffer[_t][St],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else ht($.__webglFramebuffer[_t],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(b,Tt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const _t=R.texture;for(let St=0,Lt=_t.length;St<Lt;St++){const Gt=_t[St],ot=i.get(Gt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),I(n.TEXTURE_2D,Gt,Tt),ht($.__webglFramebuffer,R,Gt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),y(Gt,Tt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,ct.__webglTexture),I(_t,b,Tt),a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)ht($.__webglFramebuffer[St],R,b,n.COLOR_ATTACHMENT0,_t,St);else ht($.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,_t,0);y(b,Tt)&&v(_t),e.unbindTexture()}R.depthBuffer&&D(R)}function et(R){const b=d(R)||a,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,lt=$.length;ct<lt;ct++){const ut=$[ct];if(y(ut,b)){const Tt=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(ut).__webglTexture;e.bindTexture(Tt,_t),v(Tt),e.unbindTexture()}}}function X(R){if(a&&R.samples>0&&st(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,ct=R.height;let lt=n.COLOR_BUFFER_BIT;const ut=[],Tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(R),St=R.isWebGLMultipleRenderTargets===!0;if(St)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){ut.push(n.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&ut.push(Tt);const Gt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Gt===!1&&(R.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]),Gt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),St){const ot=i.get(b[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,$,ct,0,0,$,ct,lt,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]);const Gt=i.get(b[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function it(R){return Math.min(r.maxSamples,R.samples)}function st(R){const b=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(R){const b=o.render.frame;f.get(R)!==b&&(f.set(R,b),R.update())}function Mt(R,b){const $=R.colorSpace,ct=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===yo||$!==Fn&&$!==an&&(jt.getTransfer($)===ne?a===!1?t.has("EXT_sRGB")===!0&&ct===pn?(R.format=yo,R.minFilter=nn,R.generateMipmaps=!1):b=nu.sRGBToLinear(b):(ct!==pn||lt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}this.allocateTextureUnit=P,this.resetTextureUnits=nt,this.setTexture2D=z,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=q,this.setupRenderTarget=C,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=st}function ig(n,t,e){const i=e.isWebGL2;function r(s,o=an){let a;const c=jt.getTransfer(o);if(s===Jn)return n.UNSIGNED_BYTE;if(s===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Of)return n.BYTE;if(s===Bf)return n.SHORT;if(s===Po)return n.UNSIGNED_SHORT;if(s===Xc)return n.INT;if(s===qn)return n.UNSIGNED_INT;if(s===Yn)return n.FLOAT;if(s===Vr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zf)return n.ALPHA;if(s===pn)return n.RGBA;if(s===Gf)return n.LUMINANCE;if(s===Hf)return n.LUMINANCE_ALPHA;if(s===vi)return n.DEPTH_COMPONENT;if(s===dr)return n.DEPTH_STENCIL;if(s===yo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vf)return n.RED;if(s===Kc)return n.RED_INTEGER;if(s===kf)return n.RG;if(s===$c)return n.RG_INTEGER;if(s===Zc)return n.RGBA_INTEGER;if(s===La||s===Pa||s===Da||s===Ua)if(c===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===nl||s===il||s===rl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===el)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sl||s===al)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sl)return c===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===al)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ol||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===Ml)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ol)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ll)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ml)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_l)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xl)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ml)return c===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ia||s===Sl||s===yl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ia)return c===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wf||s===El||s===Tl||s===Al)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(s===El)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Al)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class rg extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kn extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const d=e.getJointPose(S,i),u=this._getHandJoint(l,S);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ag extends vr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,h=null,p=null,g=null,_=null;const S=e.getContextAttributes();let d=null,u=null;const y=[],v=[],M=new Kt;let T=null;const m=new rn;m.layers.enable(1),m.viewport=new be;const E=new rn;E.layers.enable(2),E.viewport=new be;const L=[m,E],x=new rg;x.layers.enable(1),x.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let J=y[I];return J===void 0&&(J=new ro,y[I]=J),J.getTargetRaySpace()},this.getControllerGrip=function(I){let J=y[I];return J===void 0&&(J=new ro,y[I]=J),J.getGripSpace()},this.getHand=function(I){let J=y[I];return J===void 0&&(J=new ro,y[I]=J),J.getHandSpace()};function O(I){const J=v.indexOf(I.inputSource);if(J===-1)return;const rt=y[J];rt!==void 0&&(rt.update(I.inputSource,I.frame,l||o),rt.dispatchEvent({type:I.type,data:I.inputSource}))}function nt(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",nt),r.removeEventListener("inputsourceschange",P);for(let I=0;I<y.length;I++){const J=v[I];J!==null&&(v[I]=null,y[I].disconnect(J))}A=null,U=null,t.setRenderTarget(d),g=null,p=null,h=null,r=null,u=null,W.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",nt),r.addEventListener("inputsourceschange",P),S.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new yi(g.framebufferWidth,g.framebufferHeight,{format:pn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let J=null,rt=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=S.stencil?dr:vi,rt=S.stencil?_i:qn);const ht={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(r,e),p=h.createProjectionLayer(ht),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new yi(p.textureWidth,p.textureHeight,{format:pn,type:Jn,depthTexture:new pu(p.textureWidth,p.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0});const vt=t.properties.get(u);vt.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(I){for(let J=0;J<I.removed.length;J++){const rt=I.removed[J],ft=v.indexOf(rt);ft>=0&&(v[ft]=null,y[ft].disconnect(rt))}for(let J=0;J<I.added.length;J++){const rt=I.added[J];let ft=v.indexOf(rt);if(ft===-1){for(let vt=0;vt<y.length;vt++)if(vt>=v.length){v.push(rt),ft=vt;break}else if(v[vt]===null){v[vt]=rt,ft=vt;break}if(ft===-1)break}const ht=y[ft];ht&&ht.connect(rt)}}const F=new G,z=new G;function Z(I,J,rt){F.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(rt.matrixWorld);const ft=F.distanceTo(z),ht=J.projectionMatrix.elements,vt=rt.projectionMatrix.elements,tt=ht[14]/(ht[10]-1),D=ht[14]/(ht[10]+1),q=(ht[9]+1)/ht[5],C=(ht[9]-1)/ht[5],et=(ht[8]-1)/ht[0],X=(vt[8]+1)/vt[0],it=tt*et,st=tt*X,Et=ft/(-et+X),Mt=Et*-et;J.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Mt),I.translateZ(Et),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const R=tt+Et,b=D+Et,$=it-Mt,ct=st+(ft-Mt),lt=q*D/b*R,ut=C*D/b*R;I.projectionMatrix.makePerspective($,ct,lt,ut,R,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function k(I,J){J===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(J.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;x.near=E.near=m.near=I.near,x.far=E.far=m.far=I.far,(A!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,U=x.far);const J=I.parent,rt=x.cameras;k(x,J);for(let ft=0;ft<rt.length;ft++)k(rt[ft],J);rt.length===2?Z(x,m,E):x.projectionMatrix.copy(m.projectionMatrix),B(I,x,J)};function B(I,J,rt){rt===null?I.matrix.copy(J.matrixWorld):(I.matrix.copy(rt.matrixWorld),I.matrix.invert(),I.matrix.multiply(J.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(J.projectionMatrix),I.projectionMatrixInverse.copy(J.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Eo*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(I){c=I,p!==null&&(p.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let V=null;function Y(I,J){if(f=J.getViewerPose(l||o),_=J,f!==null){const rt=f.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let ft=!1;rt.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let ht=0;ht<rt.length;ht++){const vt=rt[ht];let tt=null;if(g!==null)tt=g.getViewport(vt);else{const q=h.getViewSubImage(p,vt);tt=q.viewport,ht===0&&(t.setRenderTargetTextures(u,q.colorTexture,p.ignoreDepthValues?void 0:q.depthStencilTexture),t.setRenderTarget(u))}let D=L[ht];D===void 0&&(D=new rn,D.layers.enable(ht),D.viewport=new be,L[ht]=D),D.matrix.fromArray(vt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(vt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(tt.x,tt.y,tt.width,tt.height),ht===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(D)}}for(let rt=0;rt<y.length;rt++){const ft=v[rt],ht=y[rt];ft!==null&&ht!==void 0&&ht.update(ft,J,l||o)}V&&V(I,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const W=new du;W.setAnimationLoop(Y),this.setAnimationLoop=function(I){V=I},this.dispose=function(){}}}function og(n,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,cu(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,y,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),h(d,u)):u.isMeshPhongMaterial?(s(d,u),f(d,u)):u.isMeshStandardMaterial?(s(d,u),p(d,u),u.isMeshPhysicalMaterial&&g(d,u,M)):u.isMeshMatcapMaterial?(s(d,u),_(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),S(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?c(d,u,y,v):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Ve&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Ve&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const y=t.get(u).envMap;if(y&&(d.envMap.value=y,d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,y,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*y,d.scale.value=v*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function f(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function h(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),t.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,y){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,u){u.matcap&&(d.matcap.value=u.matcap)}function S(d,u){const y=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lg(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const M=v.program;i.uniformBlockBinding(y,M)}function l(y,v){let M=r[y.id];M===void 0&&(_(y),M=f(y),r[y.id]=M,y.addEventListener("dispose",d));const T=v.program;i.updateUBOMapping(y,T);const m=t.render.frame;s[y.id]!==m&&(p(y),s[y.id]=m)}function f(y){const v=h();y.__bindingPointIndex=v;const M=n.createBuffer(),T=y.__size,m=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,m),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const v=r[y.id],M=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let m=0,E=M.length;m<E;m++){const L=Array.isArray(M[m])?M[m]:[M[m]];for(let x=0,A=L.length;x<A;x++){const U=L[x];if(g(U,m,x,T)===!0){const O=U.__offset,nt=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let F=0;F<nt.length;F++){const z=nt[F],Z=S(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+P,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(y,v,M,T){const m=y.value,E=v+"_"+M;if(T[E]===void 0)return typeof m=="number"||typeof m=="boolean"?T[E]=m:T[E]=m.clone(),!0;{const L=T[E];if(typeof m=="number"||typeof m=="boolean"){if(L!==m)return T[E]=m,!0}else if(L.equals(m)===!1)return L.copy(m),!0}return!1}function _(y){const v=y.uniforms;let M=0;const T=16;for(let E=0,L=v.length;E<L;E++){const x=Array.isArray(v[E])?v[E]:[v[E]];for(let A=0,U=x.length;A<U;A++){const O=x[A],nt=Array.isArray(O.value)?O.value:[O.value];for(let P=0,F=nt.length;P<F;P++){const z=nt[P],Z=S(z),k=M%T;k!==0&&T-k<Z.boundary&&(M+=T-k),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Z.storage}}}const m=M%T;return m>0&&(M+=T-m),y.__size=M,y.__cache={},this}function S(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Mu{constructor(t={}){const{canvas:e=ih(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,d=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const v=this;let M=!1,T=0,m=0,E=null,L=-1,x=null;const A=new be,U=new be;let O=null;const nt=new Ot(0);let P=0,F=e.width,z=e.height,Z=1,k=null,B=null;const V=new be(0,0,F,z),Y=new be(0,0,F,z);let W=!1;const I=new hu;let J=!1,rt=!1,ft=null;const ht=new le,vt=new Kt,tt=new G,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return E===null?Z:1}let C=i;function et(w,H){for(let j=0;j<w.length;j++){const Q=w[j],K=e.getContext(Q,H);if(K!==null)return K}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lo}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",mt,!1),C===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),C=et(H,w),C===null)throw et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let X,it,st,Et,Mt,R,b,$,ct,lt,ut,Tt,_t,St,Lt,Gt,ot,Zt,qt,Ut,wt,yt,Bt,$t;function ce(){X=new vm(C),it=new fm(C,X,t),X.init(it),yt=new ig(C,X,it),st=new eg(C,X,it),Et=new Sm(C),Mt=new H0,R=new ng(C,X,st,Mt,it,yt,Et),b=new dm(v),$=new _m(v),ct=new Rh(C,it),Bt=new cm(C,X,ct,it),lt=new xm(C,ct,Et,Bt),ut=new Am(C,lt,ct,Et),qt=new Tm(C,it,R),Gt=new hm(Mt),Tt=new G0(v,b,$,X,it,Bt,Gt),_t=new og(v,Mt),St=new k0,Lt=new $0(X,it),Zt=new lm(v,b,$,st,ut,p,c),ot=new tg(v,ut,it),$t=new lg(C,Et,it,st),Ut=new um(C,X,Et,it),wt=new Mm(C,X,Et,it),Et.programs=Tt.programs,v.capabilities=it,v.extensions=X,v.properties=Mt,v.renderLists=St,v.shadowMap=ot,v.state=st,v.info=Et}ce();const kt=new ag(v,C);this.xr=kt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=X.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=X.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,H,j=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=H,e.width=Math.floor(w*Z),e.height=Math.floor(H*Z),j===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(F*Z,z*Z).floor()},this.setDrawingBufferSize=function(w,H,j){F=w,z=H,Z=j,e.width=Math.floor(w*j),e.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,H,j,Q){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,H,j,Q),st.viewport(A.copy(V).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,H,j,Q){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,H,j,Q),st.scissor(U.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){st.setScissorTest(W=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,H=!0,j=!0){let Q=0;if(w){let K=!1;if(E!==null){const xt=E.texture.format;K=xt===Zc||xt===$c||xt===Kc}if(K){const xt=E.texture.type,At=xt===Jn||xt===qn||xt===Po||xt===_i||xt===qc||xt===Yc,Ct=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Ht=Ct.r,It=Ct.g,Ft=Ct.b;At?(g[0]=Ht,g[1]=It,g[2]=Ft,g[3]=Dt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ht,_[1]=It,_[2]=Ft,_[3]=Dt,C.clearBufferiv(C.COLOR,0,_))}else Q|=C.COLOR_BUFFER_BIT}H&&(Q|=C.DEPTH_BUFFER_BIT),j&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),St.dispose(),Lt.dispose(),Mt.dispose(),b.dispose(),$.dispose(),ut.dispose(),Bt.dispose(),$t.dispose(),Tt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",De),kt.removeEventListener("sessionend",ee),ft&&(ft.dispose(),ft=null),Ue.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Et.autoReset,H=ot.enabled,j=ot.autoUpdate,Q=ot.needsUpdate,K=ot.type;ce(),Et.autoReset=w,ot.enabled=H,ot.autoUpdate=j,ot.needsUpdate=Q,ot.type=K}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function gt(w){const H=w.target;H.removeEventListener("dispose",gt),Pt(H)}function Pt(w){Rt(w),Mt.remove(w)}function Rt(w){const H=Mt.get(w).programs;H!==void 0&&(H.forEach(function(j){Tt.releaseProgram(j)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,Q,K,xt){H===null&&(H=D);const At=K.isMesh&&K.matrixWorld.determinant()<0,Ct=ju(w,H,j,Q,K);st.setMaterial(Q,At);let Dt=j.index,Ht=1;if(Q.wireframe===!0){if(Dt=lt.getWireframeAttribute(j),Dt===void 0)return;Ht=2}const It=j.drawRange,Ft=j.attributes.position;let fe=It.start*Ht,qe=(It.start+It.count)*Ht;xt!==null&&(fe=Math.max(fe,xt.start*Ht),qe=Math.min(qe,(xt.start+xt.count)*Ht)),Dt!==null?(fe=Math.max(fe,0),qe=Math.min(qe,Dt.count)):Ft!=null&&(fe=Math.max(fe,0),qe=Math.min(qe,Ft.count));const Me=qe-fe;if(Me<0||Me===1/0)return;Bt.setup(K,Q,Ct,j,Dt);let Tn,se=Ut;if(Dt!==null&&(Tn=ct.get(Dt),se=wt,se.setIndex(Tn)),K.isMesh)Q.wireframe===!0?(st.setLineWidth(Q.wireframeLinewidth*q()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(K.isLine){let Wt=Q.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*q()),K.isLineSegments?se.setMode(C.LINES):K.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else K.isPoints?se.setMode(C.POINTS):K.isSprite&&se.setMode(C.TRIANGLES);if(K.isBatchedMesh)se.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)se.renderInstances(fe,Me,K.count);else if(j.isInstancedBufferGeometry){const Wt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Aa=Math.min(j.instanceCount,Wt);se.renderInstances(fe,Me,Aa)}else se.render(fe,Me)};function Qt(w,H,j){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,os(w,H,j),w.side=ni,w.needsUpdate=!0,os(w,H,j),w.side=sn):os(w,H,j)}this.compile=function(w,H,j=null){j===null&&(j=w),d=Lt.get(j),d.init(),y.push(d),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),w!==j&&w.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights(v._useLegacyLights);const Q=new Set;return w.traverse(function(K){const xt=K.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const Ct=xt[At];Qt(Ct,j,K),Q.add(Ct)}else Qt(xt,j,K),Q.add(xt)}),y.pop(),d=null,Q},this.compileAsync=function(w,H,j=null){const Q=this.compile(w,H,j);return new Promise(K=>{function xt(){if(Q.forEach(function(At){Mt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){K(w);return}setTimeout(xt,10)}X.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let te=null;function xe(w){te&&te(w)}function De(){Ue.stop()}function ee(){Ue.start()}const Ue=new du;Ue.setAnimationLoop(xe),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(w){te=w,kt.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},kt.addEventListener("sessionstart",De),kt.addEventListener("sessionend",ee),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,H,E),d=Lt.get(w,y.length),d.init(),y.push(d),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),I.setFromProjectionMatrix(ht),rt=this.localClippingEnabled,J=Gt.init(this.clippingPlanes,rt),S=St.get(w,u.length),S.init(),u.push(S),gn(w,H,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(k,B),this.info.render.frame++,J===!0&&Gt.beginShadows();const j=d.state.shadowsArray;if(ot.render(j,w,H),J===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(S,w),d.setupLights(v._useLegacyLights),H.isArrayCamera){const Q=H.cameras;for(let K=0,xt=Q.length;K<xt;K++){const At=Q[K];ko(S,w,At,At.viewport)}}else ko(S,w,H);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,H),Bt.resetDefaultState(),L=-1,x=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function gn(w,H,j,Q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||I.intersectsSprite(w)){Q&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const At=ut.update(w),Ct=w.material;Ct.visible&&S.push(w,At,Ct,j,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||I.intersectsObject(w))){const At=ut.update(w),Ct=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),tt.copy(At.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Ct)){const Dt=At.groups;for(let Ht=0,It=Dt.length;Ht<It;Ht++){const Ft=Dt[Ht],fe=Ct[Ft.materialIndex];fe&&fe.visible&&S.push(w,At,fe,j,tt.z,Ft)}}else Ct.visible&&S.push(w,At,Ct,j,tt.z,null)}}const xt=w.children;for(let At=0,Ct=xt.length;At<Ct;At++)gn(xt[At],H,j,Q)}function ko(w,H,j,Q){const K=w.opaque,xt=w.transmissive,At=w.transparent;d.setupLightsView(j),J===!0&&Gt.setGlobalState(v.clippingPlanes,j),xt.length>0&&Zu(K,xt,H,j),Q&&st.viewport(A.copy(Q)),K.length>0&&as(K,H,j),xt.length>0&&as(xt,H,j),At.length>0&&as(At,H,j),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Zu(w,H,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const xt=it.isWebGL2;ft===null&&(ft=new yi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Vr:Jn,minFilter:Hr,samples:xt?4:0})),v.getDrawingBufferSize(vt),xt?ft.setSize(vt.x,vt.y):ft.setSize(To(vt.x),To(vt.y));const At=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(nt),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=jn,as(w,j,Q),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft);let Dt=!1;for(let Ht=0,It=H.length;Ht<It;Ht++){const Ft=H[Ht],fe=Ft.object,qe=Ft.geometry,Me=Ft.material,Tn=Ft.group;if(Me.side===sn&&fe.layers.test(Q.layers)){const se=Me.side;Me.side=Ve,Me.needsUpdate=!0,Wo(fe,j,Q,qe,Me,Tn),Me.side=se,Me.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft)),v.setRenderTarget(At),v.setClearColor(nt,P),v.toneMapping=Ct}function as(w,H,j){const Q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,xt=w.length;K<xt;K++){const At=w[K],Ct=At.object,Dt=At.geometry,Ht=Q===null?At.material:Q,It=At.group;Ct.layers.test(j.layers)&&Wo(Ct,H,j,Dt,Ht,It)}}function Wo(w,H,j,Q,K,xt){w.onBeforeRender(v,H,j,Q,K,xt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,H,j,Q,w,xt),K.transparent===!0&&K.side===sn&&K.forceSinglePass===!1?(K.side=Ve,K.needsUpdate=!0,v.renderBufferDirect(j,H,Q,K,w,xt),K.side=ni,K.needsUpdate=!0,v.renderBufferDirect(j,H,Q,K,w,xt),K.side=sn):v.renderBufferDirect(j,H,Q,K,w,xt),w.onAfterRender(v,H,j,Q,K,xt)}function os(w,H,j){H.isScene!==!0&&(H=D);const Q=Mt.get(w),K=d.state.lights,xt=d.state.shadowsArray,At=K.state.version,Ct=Tt.getParameters(w,K.state,xt,H,j),Dt=Tt.getProgramCacheKey(Ct);let Ht=Q.programs;Q.environment=w.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(w.isMeshStandardMaterial?$:b).get(w.envMap||Q.environment),Ht===void 0&&(w.addEventListener("dispose",gt),Ht=new Map,Q.programs=Ht);let It=Ht.get(Dt);if(It!==void 0){if(Q.currentProgram===It&&Q.lightsStateVersion===At)return qo(w,Ct),It}else Ct.uniforms=Tt.getUniforms(w),w.onBuild(j,Ct,v),w.onBeforeCompile(Ct,v),It=Tt.acquireProgram(Ct,Dt),Ht.set(Dt,It),Q.uniforms=Ct.uniforms;const Ft=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Gt.uniform),qo(w,Ct),Q.needsLights=Qu(w),Q.lightsStateVersion=At,Q.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.directionalShadowMap.value=K.state.directionalShadowMap,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotShadowMap.value=K.state.spotShadowMap,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMap.value=K.state.pointShadowMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=It,Q.uniformsList=null,It}function Xo(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=js.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function qo(w,H){const j=Mt.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function ju(w,H,j,Q,K){H.isScene!==!0&&(H=D),R.resetTextureUnits();const xt=H.fog,At=Q.isMeshStandardMaterial?H.environment:null,Ct=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fn,Dt=(Q.isMeshStandardMaterial?$:b).get(Q.envMap||At),Ht=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,It=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ft=!!j.morphAttributes.position,fe=!!j.morphAttributes.normal,qe=!!j.morphAttributes.color;let Me=jn;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,se=Tn!==void 0?Tn.length:0,Wt=Mt.get(Q),Aa=d.state.lights;if(J===!0&&(rt===!0||w!==x)){const tn=w===x&&Q.id===L;Gt.setState(Q,w,tn)}let ue=!1;Q.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Aa.state.version||Wt.outputColorSpace!==Ct||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||Wt.envMap!==Dt||Q.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Gt.numPlanes||Wt.numIntersection!==Gt.numIntersection)||Wt.vertexAlphas!==Ht||Wt.vertexTangents!==It||Wt.morphTargets!==Ft||Wt.morphNormals!==fe||Wt.morphColors!==qe||Wt.toneMapping!==Me||it.isWebGL2===!0&&Wt.morphTargetsCount!==se)&&(ue=!0):(ue=!0,Wt.__version=Q.version);let si=Wt.currentProgram;ue===!0&&(si=os(Q,H,K));let Yo=!1,Ar=!1,ba=!1;const we=si.getUniforms(),ai=Wt.uniforms;if(st.useProgram(si.program)&&(Yo=!0,Ar=!0,ba=!0),Q.id!==L&&(L=Q.id,Ar=!0),Yo||x!==w){we.setValue(C,"projectionMatrix",w.projectionMatrix),we.setValue(C,"viewMatrix",w.matrixWorldInverse);const tn=we.map.cameraPosition;tn!==void 0&&tn.setValue(C,tt.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&we.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&we.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ar=!0,ba=!0)}if(K.isSkinnedMesh){we.setOptional(C,K,"bindMatrix"),we.setOptional(C,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(it.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),we.setValue(C,"boneTexture",tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(we.setOptional(C,K,"batchingTexture"),we.setValue(C,"batchingTexture",K._matricesTexture,R));const wa=j.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&it.isWebGL2===!0)&&qt.update(K,j,si),(Ar||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,we.setValue(C,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ai.envMap.value=Dt,ai.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Ar&&(we.setValue(C,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Ju(ai,ba),xt&&Q.fog===!0&&_t.refreshFogUniforms(ai,xt),_t.refreshMaterialUniforms(ai,Q,Z,z,ft),js.upload(C,Xo(Wt),ai,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(js.upload(C,Xo(Wt),ai,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&we.setValue(C,"center",K.center),we.setValue(C,"modelViewMatrix",K.modelViewMatrix),we.setValue(C,"normalMatrix",K.normalMatrix),we.setValue(C,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const tn=Q.uniformsGroups;for(let Ra=0,tf=tn.length;Ra<tf;Ra++)if(it.isWebGL2){const Ko=tn[Ra];$t.update(Ko,si),$t.bind(Ko,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function Ju(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Qu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,H,j){Mt.get(w.texture).__webglTexture=H,Mt.get(w.depthTexture).__webglTexture=j;const Q=Mt.get(w);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const j=Mt.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,j=0){E=w,T=H,m=j;let Q=!0,K=null,xt=!1,At=!1;if(w){const Dt=Mt.get(w);Dt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(C.FRAMEBUFFER,null),Q=!1):Dt.__webglFramebuffer===void 0?R.setupRenderTarget(w):Dt.__hasExternalTextures&&R.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const It=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[H])?K=It[H][j]:K=It[H],xt=!0):it.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?K=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?K=It[j]:K=It,A.copy(w.viewport),U.copy(w.scissor),O=w.scissorTest}else A.copy(V).multiplyScalar(Z).floor(),U.copy(Y).multiplyScalar(Z).floor(),O=W;if(st.bindFramebuffer(C.FRAMEBUFFER,K)&&it.drawBuffers&&Q&&st.drawBuffers(w,K),st.viewport(A),st.scissor(U),st.setScissorTest(O),xt){const Dt=Mt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,j)}else if(At){const Dt=Mt.get(w.texture),Ht=H||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,j||0,Ht)}L=-1},this.readRenderTargetPixels=function(w,H,j,Q,K,xt,At){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){st.bindFramebuffer(C.FRAMEBUFFER,Ct);try{const Dt=w.texture,Ht=Dt.format,It=Dt.type;if(Ht!==pn&&yt.convert(Ht)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=It===Vr&&(X.has("EXT_color_buffer_half_float")||it.isWebGL2&&X.has("EXT_color_buffer_float"));if(It!==Jn&&yt.convert(It)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===Yn&&(it.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Q&&j>=0&&j<=w.height-K&&C.readPixels(H,j,Q,K,yt.convert(Ht),yt.convert(It),xt)}finally{const Dt=E!==null?Mt.get(E).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(w,H,j=0){const Q=Math.pow(2,-j),K=Math.floor(H.image.width*Q),xt=Math.floor(H.image.height*Q);R.setTexture2D(H,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,w.x,w.y,K,xt),st.unbindTexture()},this.copyTextureToTexture=function(w,H,j,Q=0){const K=H.image.width,xt=H.image.height,At=yt.convert(j.format),Ct=yt.convert(j.type);R.setTexture2D(j,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,j.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,w.x,w.y,K,xt,At,Ct,H.image.data):H.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,At,H.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,Q,w.x,w.y,At,Ct,H.image),Q===0&&j.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(w,H,j,Q,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=w.max.x-w.min.x+1,At=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,Dt=yt.convert(Q.format),Ht=yt.convert(Q.type);let It;if(Q.isData3DTexture)R.setTexture3D(Q,0),It=C.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),It=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Q.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qe=C.getParameter(C.UNPACK_SKIP_PIXELS),Me=C.getParameter(C.UNPACK_SKIP_ROWS),Tn=C.getParameter(C.UNPACK_SKIP_IMAGES),se=j.isCompressedTexture?j.mipmaps[K]:j.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?C.texSubImage3D(It,K,H.x,H.y,H.z,xt,At,Ct,Dt,Ht,se.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(It,K,H.x,H.y,H.z,xt,At,Ct,Dt,se.data)):C.texSubImage3D(It,K,H.x,H.y,H.z,xt,At,Ct,Dt,Ht,se),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Me),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tn),K===0&&Q.generateMipmaps&&C.generateMipmap(It),st.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),st.unbindTexture()},this.resetState=function(){T=0,m=0,E=null,st.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Do?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===da?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?xi:Jc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xi?ye:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class cg extends Mu{}cg.prototype.isWebGL1Renderer=!0;class Fo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new Fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ug extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new G;class aa{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Su extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const Lr=new G,ji=new G,Ji=new G,Qi=new Kt,Pr=new Kt,yu=new le,Ls=new G,Dr=new G,Ps=new G,dc=new Kt,so=new Kt,pc=new Kt;class hg extends Ee{constructor(t=new Su){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fg(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new aa(i,3,0,!1)),Zi.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ji.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ds(Ls.set(-.5,-.5,0),Ji,o,ji,r,s),Ds(Dr.set(.5,-.5,0),Ji,o,ji,r,s),Ds(Ps.set(.5,.5,0),Ji,o,ji,r,s),dc.set(0,0),so.set(1,0),pc.set(1,1);let a=t.ray.intersectTriangle(Ls,Dr,Ps,!1,Lr);if(a===null&&(Ds(Dr.set(-.5,.5,0),Ji,o,ji,r,s),so.set(0,1),a=t.ray.intersectTriangle(Ls,Ps,Dr,!1,Lr),a===null))return;const c=t.ray.origin.distanceTo(Lr);c<t.near||c>t.far||e.push({distance:c,point:Lr.clone(),uv:$e.getInterpolation(Lr,Ls,Dr,Ps,dc,so,pc,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ds(n,t,e,i,r,s){Qi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Pr.x=s*Qi.x-r*Qi.y,Pr.y=r*Qi.x+s*Qi.y):Pr.copy(Qi),n.copy(t),n.x+=Pr.x,n.y+=Pr.y,n.applyMatrix4(yu)}class mc extends We{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const tr=new le,gc=new le,Us=[],_c=new Li,dg=new le,Ur=new je,Ir=new Pi;class Eu extends je{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),_c.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(_c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),Ir.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),t.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,tr),gc.multiplyMatrices(i,tr),Ur.matrixWorld=gc,Ur.raycast(t,Us);for(let o=0,a=Us.length;o<a;o++){const c=Us[o];c.instanceId=s,c.object=this,e.push(c)}Us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Oo extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vc=new G,xc=new G,Mc=new le,ao=new Uo,Is=new Pi;class pg extends Ee{constructor(t=new Pe,e=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)vc.fromBufferAttribute(e,r-1),xc.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=vc.distanceTo(xc);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,t.ray.intersectsSphere(Is)===!1)return;Mc.copy(r).invert(),ao.copy(t.ray).applyMatrix4(Mc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new G,f=new G,h=new G,p=new G,g=this.isLineSegments?2:1,_=i.index,d=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=u,M=y-1;v<M;v+=g){const T=_.getX(v),m=_.getX(v+1);if(l.fromBufferAttribute(d,T),f.fromBufferAttribute(d,m),ao.distanceSqToSegment(l,f,p,h)>c)continue;p.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(p);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let v=u,M=y-1;v<M;v+=g){if(l.fromBufferAttribute(d,v),f.fromBufferAttribute(d,v+1),ao.distanceSqToSegment(l,f,p,h)>c)continue;p.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(p);m<t.near||m>t.far||e.push({distance:m,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Sc=new G,yc=new G;class Tu extends pg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Sc.fromBufferAttribute(e,r),yc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Sc.distanceTo(yc);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bo extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ec=new le,bo=new Uo,Ns=new Pi,Fs=new G;class Au extends Ee{constructor(t=new Pe,e=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;Ec.copy(r).invert(),bo.copy(t.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=p,S=g;_<S;_++){const d=l.getX(_);Fs.fromBufferAttribute(h,d),Tc(Fs,d,c,r,t,e,this)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,S=g;_<S;_++)Fs.fromBufferAttribute(h,_),Tc(Fs,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tc(n,t,e,i,r,s,o){const a=bo.distanceSqToPoint(n);if(a<e){const c=new G;bo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class bu extends ke{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Os=new G,Bs=new G,oo=new G,zs=new $e;class mg extends Pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Zs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],f=["a","b","c"],h=new Array(3),p={},g=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:S,b:d,c:u}=zs;if(S.fromBufferAttribute(a,l[0]),d.fromBufferAttribute(a,l[1]),u.fromBufferAttribute(a,l[2]),zs.getNormal(oo),h[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,h[1]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,M=h[y],T=h[v],m=zs[f[y]],E=zs[f[v]],L=`${M}_${T}`,x=`${T}_${M}`;x in p&&p[x]?(oo.dot(p[x].normal)<=s&&(g.push(m.x,m.y,m.z),g.push(E.x,E.y,E.z)),p[x]=null):L in p||(p[L]={index0:l[y],index1:l[v],normal:oo.clone()})}}for(const _ in p)if(p[_]){const{index0:S,index1:d}=p[_];Os.fromBufferAttribute(a,S),Bs.fromBufferAttribute(a,d),g.push(Os.x,Os.y,Os.z),g.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new Oe(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const Vt=128,at=16,Be=20,gg=240,lo=typeof location<"u"?parseInt(new URLSearchParams(location.search).get("dist"),10):NaN,Xn=lo>=2&&lo<=10?lo:6,_g=2,vg=1,xg=2,xn=48,Mg=.5,oe=0,En=1,Ti=2,me=3,On=4,Mn=5,Ai=6,ti=7,Mr=8,Je=9,Sr=10,ii=11,jr=12,Jr=13,Qr=14,ts=15,es=16,oa=17,wu=18,Ru=19,Cu=20,zo=21,Ze=22,mn=23,Qe=24,bi=25,ga=26,_a=27,va=28,xa=29,Ma=30,yr=31,Bn=32,Er=33,ns=34,is=35,rs=36,Lu=n=>n>=oa&&n<=zo,kr=n=>n===Qe||n===bi||n===Bn||n===Er,Sa=n=>n===ns||n===is||n===rs,Pu=n=>n!==oe&&n!==Je&&n!==mn&&n!==bi&&n!==Er&&!Lu(n),hn=n=>Pu(n)&&n!==Ai&&n!==Ze&&n!==Qe&&n!==yr&&n!==Bn&&!Sa(n),Xe=Pu,co=n=>n===mn?14:0,nr={[En]:[0,1,2],[Ti]:[2,2,2],[me]:[3,3,3],[On]:[4,4,4],[Mn]:[6,5,6],[Ai]:[7,7,7],[ti]:[8,8,8],[Mr]:[9,9,9],[Je]:[10,10,10],[Sr]:[11,11,11],[ii]:[11,23,2],[jr]:[13,12,13],[Jr]:[14,14,14],[Qr]:[15,15,15],[ts]:[16,16,16],[es]:[17,17,17],[Ze]:[24,24,24],[mn]:[25,25,25],[Qe]:[26,26,26],[bi]:[26,26,26],[ga]:[27,27,27],[_a]:[28,28,28],[va]:[29,29,29],[xa]:[30,30,30],[Ma]:[31,31,31],[yr]:[32,32,32],[Bn]:[33,33,33],[Er]:[33,33,33],[ns]:[3,3,3],[is]:[8,8,8],[rs]:[27,27,27]},Sg={[oa]:18,[wu]:19,[Ru]:20,[Cu]:21,[zo]:22},mr=[En,Ti,me,Mn,ti,Ze,mn,Qe,Mr],uo={[En]:"Gras",[Ti]:"Erde",[me]:"Stein",[On]:"Sand",[Mn]:"Holz",[ti]:"Bretter",[Mr]:"Ziegel",[Sr]:"Schnee",[Ai]:"Laub",[ii]:"Schneegras",[jr]:"Kaktus",[Jr]:"Kohle",[Qr]:"Eisen",[ts]:"Gold",[es]:"Diamant",[Ze]:"Glas",[mn]:"Fackel",[Qe]:"Tür",[ga]:"Steinziegel",[_a]:"Moosziegel",[va]:"Marmor",[xa]:"Steinplatten",[Ma]:"Dunkelholz",[yr]:"Eisengitter",[Bn]:"Gittertür",[ns]:"Steintreppe",[is]:"Holztreppe",[rs]:"Ziegeltreppe"},yg=[En,Ti,me,On,Mn,ti,Mr,Sr,Ai,ii,jr,Jr,Qr,ts,es,Ze,mn,Qe,ga,_a,va,xa,Ma,yr,Bn,ns,is,rs],Ac={[En]:6986554,[Ti]:8018490,[me]:9079434,[On]:14208928,[Mn]:7034166,[Ai]:4880949,[ti]:12028498,[Mr]:10901578,[Sr]:15659766,[ii]:15659766,[jr]:5212730,[Jr]:3158064,[Qr]:13148282,[ts]:15255626,[es]:7332064,[Je]:3829456,[Ze]:12574954,[mn]:16757818,[Qe]:9071162,[bi]:9071162,[ga]:8684680,[_a]:7308392,[va]:15265008,[xa]:10132126,[Ma]:5916210,[yr]:10134188,[Bn]:10134188,[Er]:10134188,[ns]:9079434,[is]:12028498,[rs]:8684680},Eg=0,lr=1,Wr=2,wi=3,Xr=4,gr=5,Tg=["Ozean","Ebene","Wald","Wüste","Schnee","Gebirge"],ie=16,wo=34;let ya=20260612;const Ri=()=>ya;function Du(n){ya=n|0}function Ci(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gs(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)+ya;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Pn(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519)+ya;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}const Or=n=>n*n*(3-2*n);function Ag(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=Gs(e,i),a=Gs(e+1,i),c=Gs(e,i+1),l=Gs(e+1,i+1),f=Or(r),h=Or(s);return o+(a-o)*f+(c-o)*h+(o-a-c+l)*f*h}function qr(n,t){let e=0,i=.5,r=1;for(let s=0;s<4;s++)e+=i*Ag(n*r,t*r),i*=.5,r*=2;return e}function bg(n,t,e){const i=Math.floor(n),r=Math.floor(t),s=Math.floor(e),o=n-i,a=t-r,c=e-s,l=Or(o),f=Or(a),h=Or(c),p=(T,m,E)=>T+(m-T)*E,g=Pn(i,r,s),_=Pn(i+1,r,s),S=Pn(i,r+1,s),d=Pn(i+1,r+1,s),u=Pn(i,r,s+1),y=Pn(i+1,r,s+1),v=Pn(i,r+1,s+1),M=Pn(i+1,r+1,s+1);return p(p(p(g,_,l),p(S,d,l),f),p(p(u,y,l),p(v,M,l),f),h)}function fo(n,t,e){let i=0,r=.5,s=1;for(let o=0;o<3;o++)i+=r*bg(n*s,t*s,e*s),r*=.5,s*=2;return i}const Ro=[{name:"Hütte",r:2,h:5,flat:2,found:!0,villagers:2,biomes:[lr,Wr,Xr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,ti);const i=Math.abs(t)===2||Math.abs(e)===2,r=Math.abs(t)===2&&Math.abs(e)===2;for(let s=1;s<=3;s++)n(t,s,e,i?r?Mn:ti:oe);n(t,4,e,Mn)}n(-2,2,0,Ze),n(2,2,0,Ze),n(0,2,-2,Ze),n(0,1,2,Qe,1),n(0,2,2,Qe,3),n(1,1,-1,mn)}},{name:"Ruine",r:3,h:4,flat:3,found:!0,villagers:0,biomes:null,build(n,t){for(let e=-3;e<=3;e++)for(let i=-3;i<=3;i++)if(n(e,0,i,me),Math.abs(e)===3||Math.abs(i)===3)for(let s=1;s<=3;s++){const o=t()<.9-s*.25,a=t()<.3;o&&n(e,s,i,a?Mr:me)}else t()<.07&&n(e,1,i,me)}},{name:"Turm",r:2,h:8,flat:2,found:!0,villagers:1,biomes:[lr,wi,gr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,me);const i=Math.abs(t)===2||Math.abs(e)===2;for(let r=1;r<=5;r++)n(t,r,e,i?me:oe);n(t,6,e,me)}n(0,1,2,oe),n(0,2,2,oe),n(-2,3,0,Ze),n(2,3,0,Ze),n(0,3,-2,Ze);for(const[t,e]of[[-2,-2],[2,-2],[-2,2],[2,2],[0,-2],[0,2],[-2,0],[2,0]])n(t,7,e,me);n(0,7,0,mn)}},{name:"Brunnen",r:1,h:4,flat:1,found:!1,villagers:1,biomes:[lr,Wr,wi],build(n){for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,0,e,t===0&&e===0?Je:me);n(0,-1,0,Je),n(0,-2,0,me);for(const[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n(t,1,e,Mn),n(t,2,e,Mn);for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,3,e,ti)}}],wg=Math.max(...Ro.map(n=>n.r)),ho=at*at*Vt,ae=(n,t,e)=>t*at*at+e*at+n,he=(n,t)=>n+","+t,re=n=>Math.floor(n/at),ge=n=>(n%at+at)%at,He=new Map,Mi=new Map;function Te(n,t){return He.get(he(n,t))}function Rg(n,t){const e={cx:n,cz:t,vox:new Uint8Array(ho),meta:new Uint8Array(ho),light:new Uint8Array(ho),state:"empty",dirty:!1};return He.set(he(n,t),e),e}function Yt(n,t,e){if(t<0||t>=Vt)return oe;const i=He.get(he(re(n),re(e)));return!i||i.state==="empty"?oe:i.vox[ae(ge(n),t,ge(e))]}function Cg(n,t,e,i){if(t<0||t>=Vt)return;const r=He.get(he(re(n),re(e)));r&&(r.vox[ae(ge(n),t,ge(e))]=i)}const Uu=(n,t,e)=>t>=0&&t<Vt;function cr(n,t,e){if(t<0||t>=Vt)return 0;const i=He.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.meta[ae(ge(n),t,ge(e))]}function Lg(n,t,e,i){if(t<0||t>=Vt)return;const r=He.get(he(re(n),re(e)));r&&(r.meta[ae(ge(n),t,ge(e))]=i)}function Sn(n,t,e){if(t>=Vt)return 240;if(t<0)return 0;const i=He.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.light[ae(ge(n),t,ge(e))]}function bc(n,t,e,i){if(t<0||t>=Vt)return;const r=He.get(he(re(n),re(e)));r&&(r.light[ae(ge(n),t,ge(e))]=i)}function Pg(n,t,e,i,r=0){if(t<0||t>=Vt)return;const s=he(re(n),re(e));let o=Mi.get(s);o||(o=new Map,Mi.set(s,o)),o.set(ae(ge(n),t,ge(e)),i|r<<8)}function In(n,t,e,i,r=0){Cg(n,t,e,i),Lg(n,t,e,r),Pg(n,t,e,i,r)}function Dg(n){const t=Mi.get(he(n.cx,n.cz));if(t)for(const[e,i]of t)n.vox[e]=i&255,n.meta[e]=i>>8&255}function Iu(n){n!==void 0&&Du(n),He.clear(),Mi.clear(),Ou()}function Yr(n,t,e){if(e<=Be)return Eg;if(e>Be+22)return gr;const i=qr(n*.022+100,t*.022+100)/.9375,r=qr(n*.022+500,t*.022+500)/.9375;return i<.35?Xr:i>.62&&r<.5?wi:r>.55?Wr:lr}let Br=.42,Js=.64,Nu=NaN;const Fu=(n,t)=>qr(n*.0125+10,t*.0125+10);function Ou(){const n=[];for(let t=0;t<320;t+=4)for(let e=0;e<320;e+=4)n.push(Fu(t,e));n.sort((t,e)=>t-e),Br=n[Math.floor(n.length*.3)],Js=n[Math.floor(n.length*.95)],Js-Br<.05&&(Js=Br+.05),Nu=Ri()}function Ug(){Nu!==Ri()&&Ou()}function Bu(n,t){Ug();const e=Fu(n,t),i=Math.max(0,Math.min(1,(e-Br)/(Js-Br))),r=(qr(n*.06,t*.06)/.9375-.5)*7,s=i>.8?Math.pow((i-.8)/.2,1.3)*30:0;return Math.floor(Be+i*26+r+s)}function Kr(n,t){let e=Bu(n,t);return e<1&&(e=1),e>Vt-6&&(e=Vt-6),e}function zu(n,t,e){return e||t===wi?On:t===Xr?ii:t===gr?n>Be+30?Sr:n>Be+20?me:En:En}function di(n,t,e,i,r){const s=Math.floor(n-i),o=Math.floor(n+i),a=Math.floor(t),c=Math.floor(t+r-.001),l=Math.floor(e-i),f=Math.floor(e+i);for(let h=s;h<=o;h++)for(let p=a;p<=c;p++)for(let g=l;g<=f;g++)if(Xe(Yt(h,p,g)))return!0;return!1}function Ig(n){const t=n.vox;t.fill(oe);const e=n.cx*at,i=n.cz*at;for(let r=0;r<at;r++)for(let s=0;s<at;s++){const o=e+r,a=i+s,c=Kr(o,a),l=Yr(o,a,c),f=c<=Be+1&&l!==gr;for(let h=0;h<=c;h++){let p;h===c?p=zu(c,l,f):h>c-3?p=l===wi||f?On:l===gr?me:Ti:p=me,t[ae(r,h,s)]=p}for(let h=c+1;h<=Be;h++)t[ae(r,h,s)]=Je}for(let r=0;r<at;r++)for(let s=0;s<at;s++){const o=e+r,a=i+s;let c=Vt-1;for(;c>0&&t[ae(r,c,s)]===oe;)c--;for(let l=2;l<c-1;l++){const f=t[ae(r,l,s)];if(f!==me&&f!==Ti)continue;const h=fo(o*.055,l*.085,a*.055),p=fo(o*.055+40,l*.085+40,a*.055+40),g=fo(o*.028+9,l*.05+9,a*.028+9);if(Math.abs(h-.5)<.066&&Math.abs(p-.5)<.066||g>.82){t[ae(r,l,s)]=oe;continue}if(f===me){const _=Pn(o*7,l*7,a*7);l<10&&_<.002?t[ae(r,l,s)]=es:l<18&&_<.005?t[ae(r,l,s)]=ts:l<32&&_<.009?t[ae(r,l,s)]=Qr:_<.015&&(t[ae(r,l,s)]=Jr)}}}Fg(n),Ng(n),Dg(n),n.state="generated",n.dirty=!1}function zr(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2246822519)^Ri()|0;return Ci(i)}function Nr(n,t,e,i,r,s){if(e<0||e>=Vt||re(t)!==n.cx||re(i)!==n.cz)return;const o=ae(ge(t),e,ge(i));s&&n.vox[o]!==oe||(n.vox[o]=r)}function Gu(n,t){const e=zr(n,t,9);if(e()>=Mg)return null;const i=Ro[Math.floor(e()*Ro.length)],r=i.r+1,s=n*xn+r+Math.floor(e()*(xn-2*r)),o=t*xn+r+Math.floor(e()*(xn-2*r)),a=Kr(s,o);if(a<=Be+1||a+i.h>=Vt-1)return null;const c=Yr(s,o,a);if(i.biomes&&!i.biomes.includes(c))return null;let l=a,f=a;for(const[h,p]of[[-i.r,-i.r],[i.r,-i.r],[-i.r,i.r],[i.r,i.r]]){const g=Kr(s+h,o+p);g<l&&(l=g),g>f&&(f=g)}return f-l>i.flat||l<=Be?null:{def:i,ax:s,az:o,baseY:a}}function Ng(n){const t=n.cx*at,e=n.cz*at,i=wg,r=Math.floor((t-i)/xn),s=Math.floor((t+at-1+i)/xn),o=Math.floor((e-i)/xn),a=Math.floor((e+at-1+i)/xn);for(let c=r;c<=s;c++)for(let l=o;l<=a;l++){const f=Gu(c,l);if(!f)continue;const{def:h,ax:p,az:g,baseY:_}=f;if(p+h.r<t||p-h.r>=t+at||g+h.r<e||g-h.r>=e+at)continue;const S=(d,u,y,v,M=0)=>{const T=p+d,m=_+u,E=g+y;if(m<0||m>=Vt||re(T)!==n.cx||re(E)!==n.cz)return;const L=ae(ge(T),m,ge(E));n.vox[L]=v,n.meta[L]=M};if(h.build(S,zr(p,g,11)),h.found)for(let d=-h.r;d<=h.r;d++)for(let u=-h.r;u<=h.r;u++){const y=p+d,v=g+u;if(re(y)!==n.cx||re(v)!==n.cz)continue;const M=ge(y),T=ge(v);for(let m=1;m<=6;m++){const E=_-m;if(E<1)break;const L=ae(M,E,T);if(Xe(n.vox[L]))break;n.vox[L]=me}}}}const Hs=2;function Fg(n){const t=n.cx*at,e=n.cz*at;for(let i=t-Hs;i<t+at+Hs;i++)for(let r=e-Hs;r<e+at+Hs;r++){const s=Kr(i,r);if(s<=Be)continue;const o=Yr(i,r,s),a=s<=Be+1&&o!==gr,c=zu(s,o,a);if(o===wi&&c===On){const _=zr(i,r,1);if(_()<.02){const S=2+Math.floor(_()*2);for(let d=1;d<=S;d++)Nr(n,i,s+d,r,jr,!0)}continue}if(c!==En&&c!==ii)continue;const l=o===Wr?.02:o===lr?.004:o===Xr?.006:.0015,f=zr(i,r,1);if(f()>=l)continue;const h=o===Xr,p=4+Math.floor(f()*3);for(let _=1;_<=p;_++)Nr(n,i,s+_,r,Mn,!1);const g=s+p;for(let _=-2;_<=2;_++)for(let S=-2;S<=2;S++)for(let d=0;d<=2;d++){const u=Math.abs(_)+Math.abs(S)+d,y=f()>.08;u<=3&&!(_===0&&S===0&&d<1)&&y&&Nr(n,i+_,g+d,r+S,Ai,!0)}Nr(n,i,g+2,r,Ai,!0),h&&Nr(n,i,g+3,r,Sr,!0)}for(let i=0;i<at;i++)for(let r=0;r<at;r++){const s=t+i,o=e+r,a=Kr(s,o);if(a<=Be||n.vox[ae(i,a+1,r)]!==oe)continue;const c=n.vox[ae(i,a,r)],l=Yr(s,o,a);let f=0;const h=zr(s,o,2);if(c===En){const p=h();p<.1?f=oa:p<.13?f=wu:p<.16?f=Ru:p<.175&&(f=Cu)}else c===ii?h()<.05&&(f=oa):c===On&&l===wi&&h()<.02&&(f=zo);f&&(n.vox[ae(i,a+1,r)]=f)}}const la=1337,ss=document.createElement("canvas");ss.width=ie*wo;ss.height=ie;const wc=ss.getContext("2d"),ri=(n,t,e,i)=>{wc.fillStyle=i,wc.fillRect(n*ie+t,e,1,1)};function de(n,t,e,i){const r=Ci(la+n*991);for(let s=0;s<ie;s++)for(let o=0;o<ie;o++){let[a,c,l]=t;if(l+=(r()-.5)*e,i){const f=i(o,s,r);if(f===null)continue;f&&(a=f[0],c=f[1],l=f[2]+(r()-.5)*e)}ri(n,o,s,`hsl(${a},${c}%,${l}%)`)}}function Ea(n,t){const e=Ci(la+n*131);for(let r=0;r<ie;r++)for(let s=0;s<ie;s++)ri(n,s,r,`hsl(220,4%,${46+(e()-.5)*10}%)`);const i=Ci(la+n*977);for(let r=0;r<11;r++){const s=1+Math.floor(i()*13),o=1+Math.floor(i()*13);for(const[a,c]of[[0,0],[1,0],[0,1],[1,1]])ri(n,s+a,o+c,t)}}function Ui(n,t){for(let e=0;e<ie;e++)for(let i=0;i<ie;i++){const r=t(i,e);r&&ri(n,i,e,r)}}de(0,[105,45,38],12);de(1,[28,42,32],10,(n,t,e)=>t<4?[105,45,36]:t<5&&e()<.5?[105,45,34]:0);de(2,[28,42,32],12);de(3,[220,4,46],10,(n,t,e)=>e()<.06?[220,4,30]:0);de(4,[48,55,72],8);de(5,[28,50,26],8,n=>n%5===0?[28,50,18]:0);de(6,[35,45,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))%3===0?[35,45,28]:0);de(7,[110,48,28],14,(n,t,e)=>e()<.1?[110,50,18]:0);de(8,[32,48,46],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[32,40,30]:0);de(9,[8,55,42],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[20,20,75]:0);de(10,[214,70,52],8);de(11,[205,25,93],4);de(23,[28,42,32],10,(n,t,e)=>t<5?[205,20,92]:t<7&&e()<.5?[205,20,88]:0);de(12,[110,40,36],8,n=>n===2||n===8||n===13?[110,45,26]:n===5||n===11?[110,38,44]:0);de(13,[110,42,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))>6?[110,45,30]:0);Ea(14,"#202024");Ea(15,"#c8a078");Ea(16,"#e8c84a");Ea(17,"#5fd8e0");Ui(18,(n,t)=>t<5?null:[3,6,8,11,13].includes(n)&&t>3+n*7%4?`hsl(100,45%,${30+n%3*6}%)`:null);Ui(19,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(0,70%,55%)":null);Ui(20,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(50,85%,55%)":null);Ui(21,(n,t)=>n>=7&&n<=8&&t>=8?"hsl(40,15%,82%)":t>=4&&t<=8&&n>=4&&n<=11&&Math.abs(n-7.5)+Math.abs(t-6)<4?"hsl(0,55%,45%)":null);Ui(22,(n,t)=>{const e=Math.abs(n-8)+Math.abs(t-10)<5&&(n+t)%2===0;return t>5&&e?"hsl(30,40%,32%)":null});(()=>{for(let t=0;t<ie;t++)for(let e=0;e<ie;e++)e===0||t===0||e===ie-1||t===ie-1?ri(24,e,t,"hsl(200,28%,80%)"):(e-t===3||e-t===4)&&e<9&&ri(24,e,t,"hsl(200,45%,92%)")})();(()=>{const t=Ci(la+3275);for(let e=0;e<ie;e++)for(let i=0;i<ie;i++)i>=6&&i<=9&&(e>=7?ri(25,i,e,`hsl(28,52%,${30+(t()-.5)*10}%)`):e>=2&&e<=6&&ri(25,i,e,`hsl(${34+t()*16},92%,${56+(t()-.5)*16}%)`))})();de(26,[30,46,38],8,(n,t)=>n<=1||n>=14||t<=1||t>=14||n>=6&&n<=9&&(t===7||t===8)?[30,40,26]:n===12&&t>=7&&t<=9?[44,25,78]:0);de(27,[220,5,52],8,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[220,6,34]:0);de(28,[220,5,50],8,(n,t,e)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?e()<.3?[110,30,30]:[220,6,32]:e()<.16?[110,32,36]:0);de(29,[210,10,88],4,(n,t)=>(n+t*2)%13===0?[215,14,74]:(n*2+t)%11===0?[210,12,80]:0);de(30,[220,4,58],6,(n,t)=>n%8===0||t%8===0?[220,5,38]:0);de(31,[24,40,22],5,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[24,36,13]:0);Ui(32,(n,t)=>n===2||n===3||n===7||n===8||n===12||n===13||(t===7||t===8)?`hsl(210,6%,${52+(n*5+t*3)%3*4}%)`:null);Ui(33,(n,t)=>{const e=n<=1||n>=14||t<=1||t>=14,i=n===4||n===5||n===10||n===11||t===7||t===8;return e?"hsl(210,8%,42%)":i?`hsl(210,6%,${54+(n*5+t*3)%3*4}%)`:null});const Og=ss,gi=new bu(ss);gi.magFilter=Ae;gi.minFilter=Ae;gi.colorSpace=ye;function Qs(n,t,e){const i=(n*ie+.5)/(ie*wo),r=((n+1)*ie-.5)/(ie*wo),s=.5/ie,o=(ie-.5)/ie;return[i+(r-i)*t,s+(o-s)*e]}const Hu={uDayBright:{value:1}};function Bg(n){Hu.uDayBright.value=n}function Vs(n){return n.onBeforeCompile=t=>{t.uniforms.uDayBright=Hu.uDayBright,t.fragmentShader=`uniform float uDayBright;
`+t.fragmentShader.replace("#include <color_fragment>",`#ifdef USE_COLOR
         float _sky = vColor.r, _blk = vColor.g, _ao = vColor.b;
         float _lit = max(_sky * uDayBright, _blk);
         _lit = max(_lit, 0.05);          // minimaler Ambient -> nie komplett schwarz
         diffuseColor.rgb *= _lit * _ao;
       #endif`)},n.customProgramCacheKey=()=>"bw-light-v1",n}function zg(){const n=Vs(new vn({map:gi,vertexColors:!0})),t=Vs(new vn({map:gi,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1})),e=Vs(new vn({map:gi,vertexColors:!0,alphaTest:.5,side:sn})),i=Vs(new vn({map:gi,vertexColors:!0,alphaTest:.5,side:sn}));return{matSolid:n,matWater:t,matPlant:e,matGlass:i}}const Rc=[{dir:[-1,0,0],sh:.72,c:[[0,1,0,0,1],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,1,0]]},{dir:[1,0,0],sh:.72,c:[[1,1,1,0,1],[1,0,1,0,0],[1,1,0,1,1],[1,0,0,1,0]]},{dir:[0,-1,0],sh:.5,c:[[1,0,1,1,0],[0,0,1,0,0],[1,0,0,1,1],[0,0,0,0,1]]},{dir:[0,1,0],sh:1,c:[[0,1,1,1,1],[1,1,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]},{dir:[0,0,-1],sh:.86,c:[[1,0,0,0,0],[0,0,0,1,0],[1,1,0,0,1],[0,1,0,1,1]]},{dir:[0,0,1],sh:.86,c:[[0,0,1,0,0],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,1,1]]}],Cc=[.42,.62,.8,1],Gg=[[[0,0,0],[1,0,1],[0,1,0],[1,1,1]],[[1,0,0],[0,0,1],[1,1,0],[0,1,1]]];function Lc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],c=i[0]!==0?0:i[1]!==0?1:2,l=c===0?1:0,f=c===2?1:2,h=[0,0,0],p=[0,0,0];h[l]=r[l]?1:-1,p[f]=r[f]?1:-1;const g=Xe(Yt(s+h[0],o+h[1],a+h[2]))?1:0,_=Xe(Yt(s+p[0],o+p[1],a+p[2]))?1:0,S=Xe(Yt(s+h[0]+p[0],o+h[1]+p[1],a+h[2]+p[2]))?1:0;return g&&_?0:3-(g+_+S)}function Pc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],c=i[0]!==0?0:i[1]!==0?1:2,l=c===0?1:0,f=c===2?1:2,h=[0,0,0],p=[0,0,0];h[l]=r[l]?1:-1,p[f]=r[f]?1:-1;const g=[[s,o,a],[s+h[0],o+h[1],a+h[2]],[s+p[0],o+p[1],a+p[2]],[s+h[0]+p[0],o+h[1]+p[1],a+h[2]+p[2]]];let _=0,S=0,d=0;for(const[u,y,v]of g){if(hn(Yt(u,y,v)))continue;const M=Sn(u,y,v);_+=M>>4,S+=M&15,d++}if(d===0){const u=Sn(s,o,a);return[u>>4,u&15]}return[_/d,S/d]}const ks=["solid","water","plant","glass"];function er(n,t,e,i,r,s,o,a,c){const l=n.p.length/3,f=[t,e,i,r],h=[[0,0],[1,0],[0,1],[1,1]];for(let p=0;p<4;p++){n.p.push(f[p][0],f[p][1],f[p][2]);const g=Qs(s,h[p][0],h[p][1]);n.u.push(g[0],g[1]),n.c.push(o,a,c)}n.i.push(l,l+1,l+2,l+2,l+1,l+3)}function Ws(n,t,e,i,r,s,o,a,c,l,f){const h=Sn(c,l,f),p=(h>>4)/15,g=(h&15)/15;er(n,[t,e,o],[r,e,o],[t,s,o],[r,s,o],a,p,g,.86),er(n,[r,e,i],[t,e,i],[r,s,i],[t,s,i],a,p,g,.86),er(n,[r,e,o],[r,e,i],[r,s,o],[r,s,i],a,p,g,.72),er(n,[t,e,i],[t,e,o],[t,s,i],[t,s,o],a,p,g,.72),er(n,[t,s,o],[r,s,o],[t,s,i],[r,s,i],a,p,g,1),er(n,[t,e,i],[r,e,i],[t,e,o],[r,e,o],a,p,g,.5)}function Hg({scene:n,materials:t}){const{matSolid:e,matWater:i,matPlant:r,matGlass:s}=t,o={solid:e,water:i,plant:r,glass:s},a={};function c(g,_){const S=he(g,_),d=a[S];if(d)for(const u of ks)d[u]&&(n.remove(d[u]),d[u].geometry.dispose());delete a[S]}function l(){for(const g in a){const _=a[g];for(const S of ks)_[S]&&(n.remove(_[S]),_[S].geometry.dispose());delete a[g]}}function f(g,_){const S=he(g,_),d=a[S];if(d)for(const E of ks)d[E]&&(n.remove(d[E]),d[E].geometry.dispose());const u=Te(g,_);if(!u||u.state==="empty"){delete a[S];return}const y=u.vox,v={solid:{p:[],u:[],c:[],i:[]},water:{p:[],u:[],c:[],i:[]},plant:{p:[],u:[],c:[],i:[]},glass:{p:[],u:[],c:[],i:[]}},M=g*at,T=_*at;for(let E=0;E<at;E++)for(let L=0;L<at;L++)for(let x=0;x<Vt;x++){const A=y[ae(E,x,L)];if(A===oe)continue;const U=M+E,O=T+L;if(Lu(A)){const k=Sg[A],B=v.plant,V=Sn(U,x,O),Y=(V>>4)/15,W=(V&15)/15;for(const I of Gg){const J=B.p.length/3,rt=[[0,0],[1,0],[0,1],[1,1]];for(let ft=0;ft<4;ft++){const ht=I[ft];B.p.push(U+.04+ht[0]*.92,x+ht[1],O+.04+ht[2]*.92);const vt=Qs(k,rt[ft][0],rt[ft][1]);B.u.push(vt[0],vt[1]),B.c.push(Y,W,.9)}B.i.push(J,J+1,J+2,J+2,J+1,J+3)}continue}if(A===mn){Ws(v.plant,U+.44,x,O+.44,U+.56,x+.62,O+.56,nr[mn][0],U,x,O);continue}if(kr(A)){const k=cr(U,x,O),B=(k&1)===1,V=A===bi||A===Er;let Y,W,I,J;V?B?(Y=U,W=U+.18,I=O,J=O+1):(I=O,J=O+.18,Y=U,W=U+1):B?(I=O+.41,J=O+.59,Y=U,W=U+1):(Y=U+.41,W=U+.59,I=O,J=O+1),Ws(v.plant,Y,x,I,W,x+1,J,nr[A][0],U,x,O);continue}if(Sa(A)){const k=cr(U,x,O)&3,B=nr[A][1];Ws(v.plant,U,x,O,U+1,x+.5,O+1,B,U,x,O);let V=U,Y=U+1,W=O,I=O+1;k===0?I=O+.5:k===1?V=U+.5:k===2?W=O+.5:Y=U+.5,Ws(v.plant,V,x+.5,W,Y,x+1,I,B,U,x,O);continue}if(A===Ze||A===yr){const k=v.glass,[B,V,Y]=nr[A];for(let W=0;W<6;W++){const I=Rc[W],J=Yt(U+I.dir[0],x+I.dir[1],O+I.dir[2]);if(hn(J)||J===A)continue;const rt=I.dir[1]===1?B:I.dir[1]===-1?Y:V,ft=k.p.length/3,ht=[];for(const vt of I.c){k.p.push(U+vt[0],x+vt[1],O+vt[2]);const tt=Qs(rt,vt[3],vt[4]);k.u.push(tt[0],tt[1]);const D=Lc(U,x,O,I.dir,vt);ht.push(D);const q=I.sh*Cc[D],[C,et]=Pc(U,x,O,I.dir,vt);k.c.push(C/15,et/15,q)}ht[0]+ht[3]>ht[1]+ht[2]?k.i.push(ft,ft+1,ft+3,ft,ft+3,ft+2):k.i.push(ft,ft+1,ft+2,ft+2,ft+1,ft+3)}continue}const nt=A===Je,P=nt?v.water:v.solid,[F,z,Z]=nr[A];for(let k=0;k<6;k++){const B=Rc[k],V=Yt(U+B.dir[0],x+B.dir[1],O+B.dir[2]);if(!(nt?V===oe:!hn(V)&&V!==A))continue;const W=B.dir[1]===1?F:B.dir[1]===-1?Z:z,I=P.p.length/3,J=[];for(const rt of B.c){P.p.push(U+rt[0],x+rt[1],O+rt[2]);const ft=Qs(W,rt[3],rt[4]);P.u.push(ft[0],ft[1]);const ht=nt?3:Lc(U,x,O,B.dir,rt);J.push(ht);const vt=B.sh*Cc[ht],[tt,D]=Pc(U,x,O,B.dir,rt);P.c.push(tt/15,D/15,vt)}J[0]+J[3]>J[1]+J[2]?P.i.push(I,I+1,I+3,I,I+3,I+2):P.i.push(I,I+1,I+2,I+2,I+1,I+3)}}const m={solid:null,water:null,plant:null,glass:null};for(const E of ks){const L=v[E];if(!L.i.length)continue;const x=new Pe;x.setAttribute("position",new Oe(L.p,3)),x.setAttribute("uv",new Oe(L.u,2)),x.setAttribute("color",new Oe(L.c,3)),x.setIndex(L.i);const A=new je(x,o[E]);n.add(A),m[E]=A}a[S]=m,u.state="meshed",u.dirty=!1}function h(g,_){const S=Te(g,_);S&&S.state==="meshed"&&f(g,_)}function p(g,_){const S=Math.floor(g/at),d=Math.floor(_/at);f(S,d);const u=(g%at+at)%at,y=(_%at+at)%at;u===0&&h(S-1,d),u===at-1&&h(S+1,d),y===0&&h(S,d-1),y===at-1&&h(S,d+1)}return{rebuildAt:p,buildChunk:f,disposeChunk:c,disposeAll:l,chunkMeshes:a}}const fn=15;function Vg(){let n=new Set;const t=(M,T)=>n.add(he(re(M),re(T))),e=(M,T,m)=>Sn(M,T,m)>>4,i=(M,T,m)=>Sn(M,T,m)&15,r=(M,T,m,E)=>bc(M,T,m,E<<4|Sn(M,T,m)&15),s=(M,T,m,E)=>bc(M,T,m,Sn(M,T,m)&240|E);let o=[],a=[],c=[];const l=(M,T)=>{const m=Te(re(M),re(T));return m&&m.state!=="empty"};function f(M,T,m,E){E<=0||T<0||T>=Vt||l(M,m)&&(hn(Yt(M,T,m))||e(M,T,m)>=E||(r(M,T,m,E),t(M,m),o.push(M),a.push(T),c.push(m)))}function h(){let M=0;for(;M<o.length;){const T=o[M],m=a[M],E=c[M];M++;const L=e(T,m,E);if(L<=1)continue;const x=L-1;f(T-1,m,E,x),f(T+1,m,E,x),f(T,m,E-1,x),f(T,m,E+1,x),f(T,m+1,E,x),f(T,m-1,E,L===fn?fn:x)}o=[],a=[],c=[]}function p(M,T,m,E){E<=0||T<0||T>=Vt||l(M,m)&&(hn(Yt(M,T,m))||i(M,T,m)>=E||(s(M,T,m,E),t(M,m),o.push(M),a.push(T),c.push(m)))}function g(){let M=0;for(;M<o.length;){const T=o[M],m=a[M],E=c[M];M++;const L=i(T,m,E)-1;p(T-1,m,E,L),p(T+1,m,E,L),p(T,m,E-1,L),p(T,m,E+1,L),p(T,m+1,E,L),p(T,m-1,E,L)}o=[],a=[],c=[]}function _(M,T){const m=Te(M,T);if(!m)return new Set;n=new Set,n.add(he(M,T));const E=M*at,L=T*at,x=new Array(9);for(let tt=-1;tt<=1;tt++)for(let D=-1;D<=1;D++)x[(tt+1)*3+(D+1)]=Te(M+D,T+tt);const A=(tt,D)=>{const q=Math.floor(tt/at)-M,C=Math.floor(D/at)-T;return q<-1||q>1||C<-1||C>1?null:x[(C+1)*3+(q+1)]},U=(tt,D,q)=>D*at*at+(q%at+at)%at*at+(tt%at+at)%at,O=(tt,D,q)=>{if(D<0||D>=Vt)return D<0;const C=A(tt,q);return!C||C.state==="empty"?!0:hn(C.vox[U(tt,D,q)])},nt=(tt,D,q)=>{if(D>=Vt)return fn;if(D<0)return 0;const C=A(tt,q);return!C||C.state==="empty"?0:C.light[U(tt,D,q)]>>4},P=(tt,D,q,C)=>{const et=A(tt,q);if(!et)return;const X=U(tt,D,q);et.light[X]=et.light[X]&15|C<<4,et!==m&&n.add(he(et.cx,et.cz))},F=[],z=[],Z=[],k=(tt,D,q,C)=>C>0&&D>=0&&D<Vt&&!O(tt,D,q)&&nt(tt,D,q)<C,B=(tt,D,q,C)=>k(tt-1,D,q,C-1)||k(tt+1,D,q,C-1)||k(tt,D,q-1,C-1)||k(tt,D,q+1,C-1)||k(tt,D+1,q,C-1)||k(tt,D-1,q,C===fn?fn:C-1),V=at+2,Y=new Int16Array(V*V).fill(-1),W=(tt,D)=>(D+1)*V+(tt+1);for(let tt=0;tt<at;tt++)for(let D=0;D<at;D++){let q=!0,C=-1;for(let et=Vt-1;et>=0;et--){const X=et*at*at+D*at+tt;hn(m.vox[X])&&(q=!1,C<0&&(C=et)),m.light[X]=m.light[X]&15|(q?fn:0)<<4}Y[W(tt,D)]=C}const I=(tt,D)=>{const q=E+tt,C=L+D;let et=-1;for(let X=Vt-1;X>=0;X--)if(O(q,X,C)){et=X;break}Y[W(tt,D)]=et};for(let tt=-1;tt<=at;tt++)I(tt,-1),I(tt,at);for(let tt=0;tt<at;tt++)I(-1,tt),I(at,tt);let J=-1;for(let tt=0;tt<at;tt++)for(let D=0;D<at;D++){const q=Math.max(Y[W(tt,D)],Y[W(tt-1,D)],Y[W(tt+1,D)],Y[W(tt,D-1)],Y[W(tt,D+1)]);q>J&&(J=q);const C=E+tt,et=L+D,X=Math.min(q+1,Vt-1);for(let it=0;it<=X;it++){const st=m.light[it*at*at+D*at+tt]>>4;st<=1||B(C,it,et,st)&&(F.push(C),z.push(it),Z.push(et))}}const rt=Math.min(J+1,Vt-1);for(let tt=0;tt<=rt;tt++)for(let D=0;D<at;D++)ft(E-1,tt,L+D,E,tt,L+D),ft(E+at,tt,L+D,E+at-1,tt,L+D),ft(E+D,tt,L-1,E+D,tt,L),ft(E+D,tt,L+at,E+D,tt,L+at-1);function ft(tt,D,q,C,et,X){if(O(tt,D,q))return;const it=nt(tt,D,q);it<=1||O(C,et,X)||nt(C,et,X)>=it-1||(F.push(tt),z.push(D),Z.push(q))}const ht=(tt,D,q,C)=>{C<=0||D<0||D>=Vt||O(tt,D,q)||nt(tt,D,q)>=C||(P(tt,D,q,C),F.push(tt),z.push(D),Z.push(q))};let vt=0;for(;vt<F.length;){const tt=F[vt],D=z[vt],q=Z[vt];vt++;const C=nt(tt,D,q);if(C<=1)continue;const et=C-1;ht(tt-1,D,q,et),ht(tt+1,D,q,et),ht(tt,D,q-1,et),ht(tt,D,q+1,et),ht(tt,D+1,q,et),ht(tt,D-1,q,C===fn?fn:et)}return n}function S(M,T){const m=Te(M,T);if(!m)return new Set;n=new Set,n.add(he(M,T));const E=M*at,L=T*at,x=at*at;for(let U=0;U<m.vox.length;U++){const O=co(m.vox[U]);if(!O)continue;const nt=U/x|0,P=U%x,F=E+P%at,z=L+(P/at|0);(m.light[U]&15)<O&&(m.light[U]=m.light[U]&240|O,o.push(F),a.push(nt),c.push(z))}const A=(U,O,nt,P,F)=>{if(!(!U||U.state==="empty"))for(let z=0;z<Vt;z++)for(let Z=0;Z<at;Z++){const k=O(Z),B=nt(Z),V=U.light[z*x+B*at+k]&15;if(V<=1)continue;const Y=z*x+F(Z)*at+P(Z);(m.light[Y]&15)>=V-1||hn(m.vox[Y])||(o.push(U.cx*at+k),a.push(z),c.push(U.cz*at+B))}};return A(Te(M-1,T),()=>at-1,U=>U,()=>0,U=>U),A(Te(M+1,T),()=>0,U=>U,()=>at-1,U=>U),A(Te(M,T-1),U=>U,()=>at-1,U=>U,()=>0),A(Te(M,T+1),U=>U,()=>0,U=>U,()=>at-1),g(),n}function d(M,T,m){const E=e(M,T,m);if(E===0)return;r(M,T,m,0),t(M,m);const L=[M],x=[T],A=[m],U=[E],O=[],nt=[],P=[];let F=0;for(;F<L.length;){const z=L[F],Z=x[F],k=A[F],B=U[F];F++;const V=[[z-1,Z,k,!1],[z+1,Z,k,!1],[z,Z,k-1,!1],[z,Z,k+1,!1],[z,Z+1,k,!1],[z,Z-1,k,!0]];for(const[Y,W,I,J]of V){if(W<0||W>=Vt||!l(Y,I))continue;const rt=e(Y,W,I);rt!==0&&(rt<B||J&&B===fn?(r(Y,W,I,0),t(Y,I),L.push(Y),x.push(W),A.push(I),U.push(rt)):(O.push(Y),nt.push(W),P.push(I)))}}for(let z=0;z<O.length;z++)o.push(O[z]),a.push(nt[z]),c.push(P[z]);h()}function u(M,T,m){let E=0;e(M,T+1,m)===fn&&!hn(Yt(M,T+1,m))&&(E=fn);for(const[L,x,A]of[[M-1,T,m],[M+1,T,m],[M,T,m-1],[M,T,m+1],[M,T+1,m],[M,T-1,m]]){const U=e(L,x,A)-1;U>E&&(E=U)}E>0&&(r(M,T,m,E),t(M,m),o.push(M),a.push(T),c.push(m),h())}function y(M,T,m){const E=i(M,T,m);if(E===0)return;s(M,T,m,0),t(M,m);const L=[M],x=[T],A=[m],U=[E],O=[],nt=[],P=[];let F=0;for(;F<L.length;){const z=L[F],Z=x[F],k=A[F],B=U[F];F++;for(const[V,Y,W]of[[z-1,Z,k],[z+1,Z,k],[z,Z,k-1],[z,Z,k+1],[z,Z+1,k],[z,Z-1,k]]){if(Y<0||Y>=Vt||!l(V,W))continue;const I=i(V,Y,W);I!==0&&(I<B?(s(V,Y,W,0),t(V,W),L.push(V),x.push(Y),A.push(W),U.push(I)):(O.push(V),nt.push(Y),P.push(W)))}}for(let z=0;z<O.length;z++)o.push(O[z]),a.push(nt[z]),c.push(P[z]);g()}function v(M,T,m,E,L){n=new Set;const x=hn(E),A=hn(L);A&&!x?d(M,T,m):!A&&x&&u(M,T,m);const U=co(E),O=co(L);if(O>U?(s(M,T,m,O),t(M,m),o.push(M),a.push(T),c.push(m),g()):O<U&&y(M,T,m),!A&&x){let nt=0;for(const[P,F,z]of[[M-1,T,m],[M+1,T,m],[M,T,m-1],[M,T,m+1],[M,T+1,m],[M,T-1,m]]){const Z=i(P,F,z)-1;Z>nt&&(nt=Z)}nt>i(M,T,m)&&(s(M,T,m,nt),t(M,m),o.push(M),a.push(T),c.push(m),g())}return n}return{computeChunkSkylight:_,seedChunkBlocklight:S,relight:v,getSky:e,getBlk:i}}function kg({mesher:n,light:t}){const e=d=>Math.floor(d/at),i=(d,u,y,v)=>Math.max(Math.abs(d-y),Math.abs(u-v));let r=[],s=NaN,o=NaN;function a(d,u){let y=Te(d,u);y||(y=Rg(d,u)),y.state==="empty"&&Ig(y)}function c(d,u){const y=Te(d,u);if(!y||y.state!=="generated")return;const v=t.computeChunkSkylight(d,u),M=t.seedChunkBlocklight(d,u);y.state="lit";for(const T of[v,M])for(const m of T){const E=He.get(m);E&&E.state==="meshed"&&(E.dirty=!0)}}const l=d=>d&&(d.state==="lit"||d.state==="meshed");function f(d,u){for(let y=-1;y<=1;y++)for(let v=-1;v<=1;v++)if(!l(Te(d+y,u+v)))return!1;return!0}function h(d,u){const y=e(d),v=e(u);s=y,o=v;for(const[T,m]of He)i(m.cx,m.cz,y,v)>Xn+2&&(n.disposeChunk(m.cx,m.cz),He.delete(T));const M=Xn+1;r=[];for(let T=y-M;T<=y+M;T++)for(let m=v-M;m<=v+M;m++){const E=Te(T,m);(!E||E.state==="empty")&&r.push([T,m])}r.sort((T,m)=>i(T[0],T[1],y,v)-i(m[0],m[1],y,v))}function p(d,u){const y=e(d),v=e(u),M=Xn+1;let T=0;for(;r.length&&T<_g;){const[L,x]=r.shift();a(L,x),T++}const m=[];for(let L=y-M;L<=y+M;L++)for(let x=v-M;x<=v+M;x++){const A=Te(L,x);A&&A.state==="generated"&&m.push([L,x])}m.sort((L,x)=>i(L[0],L[1],y,v)-i(x[0],x[1],y,v));for(let L=0;L<vg&&L<m.length;L++)c(m[L][0],m[L][1]);const E=[];for(let L=y-Xn;L<=y+Xn;L++)for(let x=v-Xn;x<=v+Xn;x++){const A=Te(L,x);!A||A.state==="empty"||A.state==="generated"||(A.state==="lit"||A.dirty)&&f(L,x)&&E.push([L,x])}E.sort((L,x)=>i(L[0],L[1],y,v)-i(x[0],x[1],y,v));for(let L=0;L<xg&&L<E.length;L++)n.buildChunk(E[L][0],E[L][1])}function g(d,u){const y=e(d),v=e(u);(y!==s||v!==o)&&h(d,u),p(d,u)}function _(d,u,y=3){const v=e(d),M=e(u);for(let T=v-y-1;T<=v+y+1;T++)for(let m=M-y-1;m<=M+y+1;m++)a(T,m);for(let T=v-y-1;T<=v+y+1;T++)for(let m=M-y-1;m<=M+y+1;m++)c(T,m);for(let T=v-y;T<=v+y;T++)for(let m=M-y;m<=M+y;m++)f(T,m)&&n.buildChunk(T,m);s=NaN}return{update:g,ensureAround:h,tick:p,warmup:_,loadedCount:()=>He.size}}const Xs=8,qs=8;function Wg({camera:n,ctx:t}){const e={pos:new G(Xs+.5,Vt,qs+.5),vel:new G,yaw:Math.PI*.25,pitch:-.1,onGround:!1,fly:!1,W:.3,H:1.8,EYE:1.62};let i=0,r=!1,s=0,o=!1;const a=_=>di(_.x,_.y,_.z,e.W,e.H);function c(){const _=Math.floor(e.pos.y),S=Math.floor(e.pos.x-e.W),d=Math.floor(e.pos.x+e.W),u=Math.floor(e.pos.z-e.W),y=Math.floor(e.pos.z+e.W);for(let v=S;v<=d;v++)for(let M=u;M<=y;M++)if(Sa(Yt(v,_,M)))return!0;return!1}function l(_,S){if(S)if(e.pos[_]+=S,a(e.pos)){if(_!=="y"&&e.onGround&&!e.fly&&c()){const u=e.pos.y;if(e.pos.y=Math.floor(u)+1.001,!a(e.pos)){e.vel.y=0;return}e.pos.y=u}const d=Math.sign(S);_==="x"&&(e.pos.x=d>0?Math.floor(e.pos.x+e.W)-e.W-.001:Math.floor(e.pos.x-e.W)+1+e.W+.001),_==="z"&&(e.pos.z=d>0?Math.floor(e.pos.z+e.W)-e.W-.001:Math.floor(e.pos.z-e.W)+1+e.W+.001),_==="y"&&(d>0?e.pos.y=Math.floor(e.pos.y+e.H)-e.H-.001:(e.pos.y=Math.floor(e.pos.y)+1.001,e.onGround=!0),e.vel.y=0)}else _==="y"&&S<0&&(e.onGround=!1)}function f(){for(let S=0;S<=48;S++)for(let d=-S;d<=S;d++)for(let u=-S;u<=S;u++){if(Math.max(Math.abs(d),Math.abs(u))!==S)continue;const y=Xs+d,v=qs+u;let M=Vt-1;for(;M>0&&Yt(y,M,v)===0;)M--;if(M>Be&&Xe(Yt(y,M,v)))return{x:y,y:M,z:v}}let _=Vt-1;for(;_>0&&Yt(Xs,_,qs)===0;)_--;return{x:Xs,y:_,z:qs}}function h(_){if(_){e.pos.set(_[0],_[1],_[2]),e.yaw=_[3]??e.yaw,e.pitch=_[4]??e.pitch,e.vel.set(0,0,0);return}const S=f();e.pos.set(S.x+.5,S.y+1.01,S.z+.5),e.vel.set(0,0,0)}function p(_){const S={step:null,land:null,splash:!1},d=t.keys,u=e.fly?12:5.4;let y=0,v=0;d.KeyW&&(v-=1),d.KeyS&&(v+=1),d.KeyA&&(y-=1),d.KeyD&&(y+=1);const M=Math.hypot(y,v)||1,T=Math.sin(e.yaw),m=Math.cos(e.yaw),E=(y*m+v*T)/M*u,L=(v*m-y*T)/M*u;if(e.fly){e.vel.y=0;const x=Math.cos(e.pitch),A=Math.sin(e.pitch),U=-v/M,O=y/M;let nt=(U*-T*x+O*m)*u,P=(U*-m*x-O*T)*u,F=U*A*u;d.Space&&(F=u),(d.ShiftLeft||d.ShiftRight)&&(F=-u),l("x",nt*_),l("z",P*_),l("y",F*_)}else{s=e.vel.y,o=e.onGround,e.vel.y-=28*_,d.Space&&e.onGround&&(e.vel.y=8.6,e.onGround=!1);const x=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y+.5),Math.floor(e.pos.z))===Je;x&&!r&&s<-3&&(S.splash=!0),r=x,x&&(e.vel.y=Math.max(e.vel.y,-3),d.Space&&(e.vel.y=3.2)),l("x",E*_*(x?.6:1)),l("z",L*_*(x?.6:1)),l("y",e.vel.y*_),!o&&e.onGround&&s<-7&&(S.land=-s-7),e.onGround&&(E||L)&&!x?(i+=Math.hypot(E,L)*_,i>2.2&&(i=0,S.step=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y-.5),Math.floor(e.pos.z)))):i=0,e.pos.y<-20&&h(null)}return S}function g(){const _=new G(0,0,-1).applyEuler(n.rotation);let S=Math.floor(n.position.x),d=Math.floor(n.position.y),u=Math.floor(n.position.z);const y=Math.sign(_.x),v=Math.sign(_.y),M=Math.sign(_.z),T=Math.abs(1/_.x),m=Math.abs(1/_.y),E=Math.abs(1/_.z);let L=(y>0?S+1-n.position.x:n.position.x-S)*T,x=(v>0?d+1-n.position.y:n.position.y-d)*m,A=(M>0?u+1-n.position.z:n.position.z-u)*E,U=0,O=0,nt=0;for(let P=0;P<140;P++){if(L<x&&L<A){if(L>8)break;S+=y,U=-y,O=0,nt=0,L+=T}else if(x<A){if(x>8)break;d+=v,O=-v,U=0,nt=0,x+=m}else{if(A>8)break;u+=M,nt=-M,U=0,O=0,A+=E}const F=Yt(S,d,u);if(F!==0&&F!==Je&&!(F>=17&&F<=21))return{x:S,y:d,z:u,nx:U,ny:O,nz:nt}}return null}return{player:e,update:p,raycast:g,spawnPlayer:h,moveAxis:l,boxCollides:a}}const Ys=220;function Xg({scene:n}){const t=new Ee,e=new Eu(new zn(.16,.16,.16),new vn({vertexColors:!1}),Ys);e.instanceMatrix.setUsage(tu),n.add(e);const i=[];for(let o=0;o<Ys;o++)i.push({life:0,x:0,y:0,z:0,vx:0,vy:0,vz:0}),t.scale.set(0,0,0),t.position.set(0,-999,0),t.updateMatrix(),e.setMatrixAt(o,t.matrix),e.setColorAt(o,new Ot(16777215));e.instanceMatrix.needsUpdate=!0;function r(o,a,c,l,f,h,p){const g=new Ot(l);let _=0;for(let S=0;S<Ys&&_<f;S++){if(i[S].life>0)continue;const d=i[S];d.life=.5+Math.random()*.4,d.x=o,d.y=a,d.z=c,d.vx=(Math.random()-.5)*h,d.vz=(Math.random()-.5)*h,d.vy=p+Math.random()*p,e.setColorAt(S,g),_++}e.instanceColor.needsUpdate=!0}function s(o){let a=!1;for(let c=0;c<Ys;c++){const l=i[c];if(!(l.life<=0)){if(a=!0,l.life-=o,l.vy-=14*o,l.x+=l.vx*o,l.y+=l.vy*o,l.z+=l.vz*o,Xe(Yt(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(l.vy=Math.abs(l.vy)*.3,l.y+=.02,l.vx*=.5,l.vz*=.5),l.life<=0)t.position.set(0,-999,0),t.scale.set(0,0,0);else{const f=Math.min(1,l.life*3);t.position.set(l.x,l.y,l.z),t.scale.set(f,f,f)}t.updateMatrix(),e.setMatrixAt(c,t.matrix)}}a&&(e.instanceMatrix.needsUpdate=!0)}return{spawn:r,update:s}}function qg({ctx:n,player:t}){let e=null,i=null,r=null,s=null,o=!1,a=null,c=null,l=null,f=null,h=null,p=!0,g=0,_=null;const S=()=>r||e.destination;function d(){if(e){e.state==="suspended"&&e.resume();return}try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}e&&(i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=2e4,i.connect(e.destination),r=e.createGain(),r.gain.value=1,r.connect(i),s=e.createGain(),s.gain.value=1,s.connect(i),O())}const u=D=>{const q=e.sampleRate*D,C=e.createBuffer(1,q,e.sampleRate),et=C.getChannelData(0);for(let X=0;X<q;X++)et[X]=Math.random()*2-1;return C};function y(D,q,C,et){if(!e)return;const X=e.sampleRate*D,it=e.createBuffer(1,X,e.sampleRate),st=it.getChannelData(0);for(let b=0;b<X;b++)st[b]=(Math.random()*2-1)*(1-b/X);const Et=e.createBufferSource();Et.buffer=it;const Mt=e.createBiquadFilter();Mt.type="bandpass",Mt.frequency.value=q,Mt.Q.value=et||1;const R=e.createGain();R.gain.value=C,Et.connect(Mt),Mt.connect(R),R.connect(S()),Et.start()}function v(D,q,C){if(!e)return;const et=e.createOscillator(),X=e.createGain();et.type="triangle",et.frequency.setValueAtTime(D,e.currentTime),et.frequency.exponentialRampToValueAtTime(D*.55,e.currentTime+q),X.gain.setValueAtTime(C,e.currentTime),X.gain.exponentialRampToValueAtTime(.001,e.currentTime+q),et.connect(X),X.connect(S()),et.start(),et.stop(e.currentTime+q)}const M={3:1400,8:1400,4:500,2:420,1:480,11:520,10:600,5:800,7:800,6:2200,12:900,13:1300,14:1500,15:1500,16:1700,26:1400,27:1350,28:1550,29:1400,30:800,31:2600,32:2400,33:2400,34:1400,35:800,36:1400},T=D=>{y(.13,M[D]||700,.45,1.2),v((M[D]||700)*.25,.08,.12)},m=D=>{v(170,.09,.3),y(.05,(M[D]||700)*.8,.15,2)},E=D=>{y(.06,(M[D]||500)*.6+Math.random()*120,.12,.8)},L=D=>{y(.12,300,Math.min(.5,.1+D*.04),.7),v(90,.1,.2)},x=()=>{y(.25,900,.3,.5),y(.35,400,.2,.5)};function A(){if(!e||_)return;const D=e.createBufferSource();D.buffer=u(2),D.loop=!0;const q=e.createBiquadFilter();q.type="lowpass",q.frequency.value=2600;const C=e.createGain();C.gain.value=.05,D.connect(q),q.connect(C),C.connect(s),D.start(),_=D}function U(){if(_){try{_.stop()}catch{}_=null}}function O(){if(!e||o)return;const D=e.createBufferSource();D.buffer=u(3),D.loop=!0,c=e.createBiquadFilter(),c.type="lowpass",c.frequency.value=440,a=e.createGain(),a.gain.value=.04,D.connect(c),c.connect(a),a.connect(s),D.start();const q=e.createOscillator();q.frequency.value=.07;const C=e.createGain();C.gain.value=.03,q.connect(C),C.connect(a.gain),q.start(),l=e.createGain(),l.gain.value=0,l.connect(s);const et=e.createOscillator();et.type="sine",et.frequency.value=62;const X=e.createOscillator();X.type="sine",X.frequency.value=65.5,et.connect(l),X.connect(l),et.start(),X.start(),h=e.createDelay(),h.delayTime.value=.3;const it=e.createGain();it.gain.value=.36,h.connect(it),it.connect(h),h.connect(s),f=e.createGain(),f.gain.value=p?.5:0,f.connect(s),o=!0,setInterval(ft,260)}function nt(){const D=e.currentTime,q=2200+Math.random()*1500,C=2+(Math.random()*3|0);for(let et=0;et<C;et++){const X=e.createOscillator(),it=e.createGain(),st=D+et*.085,Et=q*(1+(Math.random()-.35)*.35);X.type="sine",X.frequency.setValueAtTime(Et,st),X.frequency.exponentialRampToValueAtTime(Et*1.5,st+.05),it.gain.setValueAtTime(1e-4,st),it.gain.linearRampToValueAtTime(.11,st+.012),it.gain.exponentialRampToValueAtTime(8e-4,st+.09),X.connect(it),it.connect(s),X.start(st),X.stop(st+.11)}}function P(){const D=e.currentTime,q=4200+Math.random()*900;for(let C=0;C<3;C++){const et=e.createOscillator(),X=e.createGain(),it=D+C*.07;et.type="square",et.frequency.value=q,X.gain.setValueAtTime(1e-4,it),X.gain.linearRampToValueAtTime(.035,it+.005),X.gain.exponentialRampToValueAtTime(8e-4,it+.03),et.connect(X),X.connect(s),et.start(it),et.stop(it+.04)}}function F(){const D=e.currentTime,q=e.createOscillator(),C=e.createGain(),et=e.createBiquadFilter();et.type="bandpass",et.frequency.value=1400,et.Q.value=3,q.type="sine",q.frequency.setValueAtTime(1700,D),q.frequency.exponentialRampToValueAtTime(700,D+.12),C.gain.setValueAtTime(1e-4,D),C.gain.linearRampToValueAtTime(.16,D+.008),C.gain.exponentialRampToValueAtTime(8e-4,D+.13),q.connect(et),et.connect(C),C.connect(s),h&&C.connect(h),q.start(D),q.stop(D+.15)}function z(){const D=e.currentTime,q=e.createOscillator(),C=e.createGain();q.type="sine",q.frequency.setValueAtTime(300+Math.random()*200,D),q.frequency.exponentialRampToValueAtTime(900,D+.12),C.gain.setValueAtTime(1e-4,D),C.gain.linearRampToValueAtTime(.06,D+.02),C.gain.exponentialRampToValueAtTime(8e-4,D+.13),q.connect(C),C.connect(s),q.start(D),q.stop(D+.15)}function Z(){const D=e.currentTime,q=e.createBufferSource();q.buffer=u(1.4);const C=e.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(400,D),C.frequency.exponentialRampToValueAtTime(90,D+1.3);const et=e.createGain();et.gain.setValueAtTime(1e-4,D),et.gain.linearRampToValueAtTime(.5,D+.08),et.gain.exponentialRampToValueAtTime(8e-4,D+1.4),q.connect(C),C.connect(et),et.connect(s),q.start(D),q.stop(D+1.5)}function k(D,q){if(!e)return;const C=.5*(1-q/22);if(C<=.02)return;const et=e.currentTime;if(D==="sheep"){const X=e.createOscillator(),it=e.createGain(),st=e.createOscillator(),Et=e.createGain();X.type="sawtooth",X.frequency.setValueAtTime(360,et),X.frequency.linearRampToValueAtTime(300,et+.45),st.frequency.value=18,Et.gain.value=14,st.connect(Et),Et.connect(X.frequency),st.start(et),st.stop(et+.5);const Mt=e.createBiquadFilter();Mt.type="lowpass",Mt.frequency.value=1100,it.gain.setValueAtTime(1e-4,et),it.gain.linearRampToValueAtTime(C*.5,et+.04),it.gain.exponentialRampToValueAtTime(8e-4,et+.5),X.connect(Mt),Mt.connect(it),it.connect(s),X.start(et),X.stop(et+.52)}else if(D==="pig")for(let X=0;X<2;X++){const it=et+X*.13,st=e.createBufferSource();st.buffer=u(.12);const Et=e.createBiquadFilter();Et.type="lowpass",Et.frequency.value=320;const Mt=e.createGain();Mt.gain.setValueAtTime(1e-4,it),Mt.gain.linearRampToValueAtTime(C*.6,it+.01),Mt.gain.exponentialRampToValueAtTime(8e-4,it+.1),st.connect(Et),Et.connect(Mt),Mt.connect(s),st.start(it),st.stop(it+.12)}else if(D==="zombie"){const X=e.createOscillator(),it=e.createGain(),st=e.createBiquadFilter();X.type="sawtooth",X.frequency.setValueAtTime(105,et),X.frequency.linearRampToValueAtTime(68,et+.7);const Et=e.createOscillator(),Mt=e.createGain();Et.frequency.value=9,Mt.gain.value=16,Et.connect(Mt),Mt.connect(X.frequency),Et.start(et),Et.stop(et+.8),st.type="lowpass",st.frequency.value=360,it.gain.setValueAtTime(1e-4,et),it.gain.linearRampToValueAtTime(C*.6,et+.09),it.gain.exponentialRampToValueAtTime(8e-4,et+.75),X.connect(st),st.connect(it),it.connect(s),X.start(et),X.stop(et+.8)}else if(D==="villager")for(let X=0;X<2;X++){const it=et+X*.17,st=e.createOscillator(),Et=e.createGain(),Mt=e.createBiquadFilter();st.type="triangle",st.frequency.setValueAtTime(X?185:235,it),st.frequency.linearRampToValueAtTime(X?160:210,it+.12),Mt.type="lowpass",Mt.frequency.value=700,Et.gain.setValueAtTime(1e-4,it),Et.gain.linearRampToValueAtTime(C*.4,it+.03),Et.gain.exponentialRampToValueAtTime(8e-4,it+.16),st.connect(Mt),Mt.connect(Et),Et.connect(s),st.start(it),st.stop(it+.18)}else for(let X=0;X<3;X++){const it=et+X*.08,st=e.createOscillator(),Et=e.createGain();st.type="triangle",st.frequency.setValueAtTime(1600-X*250,it),Et.gain.setValueAtTime(1e-4,it),Et.gain.linearRampToValueAtTime(C*.4,it+.008),Et.gain.exponentialRampToValueAtTime(8e-4,it+.05),st.connect(Et),Et.connect(s),st.start(it),st.stop(it+.06)}}const B=()=>{v(110,.16,.5),y(.16,420,.35,.8)},V=[0,2,4,7,9,12,14,16],Y=174.6,W=D=>Y*Math.pow(2,D/12);function I(D,q,C){const et=e.currentTime,X=e.createOscillator(),it=e.createBiquadFilter(),st=e.createGain();X.type="triangle",X.frequency.value=W(D),it.type="lowpass",it.frequency.value=850,st.gain.setValueAtTime(1e-4,et),st.gain.linearRampToValueAtTime(C,et+1.6),st.gain.linearRampToValueAtTime(1e-4,et+q),X.connect(it),it.connect(st),st.connect(f),X.start(et),X.stop(et+q+.1)}function J(D,q){const C=e.currentTime,et=e.createOscillator(),X=e.createGain();et.type="sine",et.frequency.value=W(D),X.gain.setValueAtTime(1e-4,C),X.gain.linearRampToValueAtTime(q,C+.03),X.gain.exponentialRampToValueAtTime(8e-4,C+.9),et.connect(X),X.connect(f),et.start(C),et.stop(C+1)}function rt(){if(p){if(g++,g%30===0){const D=V[Math.random()*3|0];I(D,9,.05),I(D+(Math.random()<.5?4:7),9,.045),I(D+12,9,.03)}g%6===0&&Math.random()<.45&&J(V[Math.random()*V.length|0]+12,.05)}}function ft(){if(!e||!o||!n.locked)return;const D=e.currentTime,q=n.curHeadWater?0:n.curUnderground?.012:(.04+Math.max(0,t.pos.y-Be)*.0016)*(n.weather==="rain"?1.5:1);a.gain.setTargetAtTime(Math.max(0,Math.min(.13,q)),D,.6),c.frequency.setTargetAtTime(n.curUnderground?180:n.weather==="rain"?950:460,D,.6),l.gain.setTargetAtTime(n.curUnderground?.05:0,D,.9),!n.curUnderground&&!n.curHeadWater&&(n.curIsDay&&(n.curBiome===Wr||n.curBiome===lr)&&n.weather!=="rain"&&Math.random()<.1&&nt(),!n.curIsDay&&Math.random()<.15&&P(),n.weather==="rain"&&Math.random()<.014&&Z()),n.curUnderground&&Math.random()<.05&&F(),n.curHeadWater&&Math.random()<.16&&z(),rt()}function ht(){p=!p,f&&f.gain.setTargetAtTime(p?.5:0,e.currentTime,.3)}function vt(D){i&&i.frequency.setTargetAtTime(D?700:2e4,e.currentTime,.25)}return{audioInit:d,sndBreak:T,sndPlace:m,sndStep:E,sndLand:L,sndSplash:x,sndHit:B,startRainSound:A,stopRainSound:U,animalSound:k,toggleMusic:ht,setMuffle:vt,isMusicOn:()=>p}}const Dc=30,Yg=70,Kg=8,Uc=12,$g=34,Zg=70,jg=18,Jg=14,Qg=10,t_=140;function e_(n,t,e,i){const r=c=>!Xe(c)&&c!==Je;if(!r(Yt(n,t,e))||!r(Yt(n,t+1,e))||!Xe(Yt(n,t-1,e)))return!1;const s=Sn(n,t,e),o=s>>4;return(s&15)<4&&(o<6||!i)}function n_(n,t,e=2){const i=Math.floor(n/xn),r=Math.floor(t/xn),s=[];for(let o=i-e;o<=i+e;o++)for(let a=r-e;a<=r+e;a++){const c=Gu(o,a);c&&c.def.villagers>0&&s.push({key:o+","+a,...c})}return s}const Ic={sheep:{hw:.42,h:1.2,spd:1.5,skittish:!0,build(n,t){t(n,.95,.85,1.35,15657696,0,.78,0),t(n,.6,.6,.55,14603976,0,.95,.85);const e=[];for(const[i,r]of[[-.3,.45],[.3,.45],[-.3,-.45],[.3,-.45]])e.push(t(n,.22,.55,.22,4867648,i,.27,r));return e}},pig:{hw:.4,h:.95,spd:1.3,skittish:!1,build(n,t){t(n,.85,.7,1.2,14916250,0,.62,0),t(n,.55,.5,.45,14715530,0,.7,.78),t(n,.25,.22,.12,14187130,0,.62,1);const e=[];for(const[i,r]of[[-.28,.4],[.28,.4],[-.28,-.4],[.28,-.4]])e.push(t(n,.2,.4,.2,13134442,i,.2,r));return e}},chicken:{hw:.3,h:.7,spd:1.7,skittish:!0,build(n,t){t(n,.5,.5,.6,16052456,0,.5,0),t(n,.35,.35,.32,16315628,0,.78,.34),t(n,.14,.12,.18,15247408,0,.74,.55),t(n,.16,.18,.08,14168112,0,.96,.32);const e=[];for(const i of[-.13,.13])e.push(t(n,.08,.34,.08,15247408,i,.17,0));return e}}},i_={hw:.3,h:1.8,spd:1.1,build(n,t){t(n,.52,.78,.34,9071178,0,.96,0),t(n,.38,.38,.38,14200968,0,1.54,0),t(n,.09,.16,.09,13146744,0,1.48,-.22),t(n,.56,.17,.2,8018494,0,1.16,-.16);const e=[];for(const i of[-.14,.14])e.push(t(n,.2,.58,.2,5916210,i,.29,0));return e}},r_={hw:.3,h:1.8,spd:1.4,build(n,t){t(n,.5,.72,.3,3828362,0,1,0),t(n,.4,.4,.4,5937746,0,1.56,0);for(const i of[-.26,.26])t(n,.16,.16,.62,5937746,i,1.24,-.38);const e=[];for(const i of[-.13,.13])e.push(t(n,.2,.62,.2,3493994,i,.31,0));return e}};function s_({scene:n,ctx:t,audio:e}){const i=[],r=new Set;let s=3,o=1;function a(u,y,v,M){const T=new Kn,m=[],E=(A,U,O,nt,P,F,z,Z)=>{const k=new vn({color:P}),B=new je(new zn(U,O,nt),k);return B.position.set(F,z,Z),A.add(B),m.push({mat:k,base:new Ot(P)}),B},L=v.build(T,E);n.add(T);const x={kind:u,type:y,def:v,group:T,legs:L,mats:m,hw:v.hw,h:v.h,pos:new G(M.x,M.y,M.z),vy:0,yaw:Math.random()*6.28,onGround:!1,walking:!1,timer:0,legPhase:0,flee:0,callT:2+Math.random()*8,cool:0,lightT:Math.random(),home:null};return i.push(x),x}function c(u){n.remove(u.group),u.group.traverse(v=>{v.isMesh&&(v.geometry.dispose(),v.material.dispose())});const y=i.indexOf(u);y>=0&&i.splice(y,1),u.home&&r.delete(u.home.key)}function l(u,y,v=60){for(let M=0;M<v;M++){const T=u+Math.floor((Math.random()-.5)*2*Dc),m=y+Math.floor((Math.random()-.5)*2*Dc);let E=Vt-1;for(;E>0&&Yt(T,E,m)===oe;)E--;const L=Yt(T,E,m);if(E>Be&&(L===En||L===ii||L===On))return{x:T,y:E,z:m}}return null}function f(u,y,v,M=9){for(let T=0;T<12;T++){const m=u+Math.floor((Math.random()-.5)*M),E=y+Math.floor((Math.random()-.5)*M);for(let L=Math.max(1,v-5);L<=Math.min(Vt-2,v+6);L++)if(Yt(m,L,E)===oe&&Yt(m,L+1,E)===oe&&Xe(Yt(m,L-1,E)))return{x:m,y:L,z:E}}return null}function h(u,y){for(let v=0;v<10;v++){const M=Math.random()*Math.PI*2,T=Uc+Math.random()*($g-Uc),m=Math.floor(u.x+Math.sin(M)*T),E=Math.floor(u.z+Math.cos(M)*T),L=Math.min(Vt-2,Math.floor(u.y)+10),x=Math.max(2,Math.floor(u.y)-16);for(let A=L;A>=x;A--)if(e_(m,A,E,y))return{x:m,y:A,z:E}}return null}function p(u,y){for(;i.length;)c(i[0]);r.clear();const v=Math.floor(y?y.x:8),M=Math.floor(y?y.z:8),T=Object.keys(Ic);for(let m=0;m<u;m++){const E=l(v,M);if(!E)continue;const L=T[Math.floor(Math.random()*T.length)];a("animal",L,Ic[L],{x:E.x+.5,y:E.y+1.01,z:E.z+.5})}}function g(u){for(let v=i.length-1;v>=0;v--){const M=i[v];M.kind==="villager"&&Math.hypot(M.home.ax-u.x,M.home.az-u.z)>t_&&c(M)}if(!(i.filter(v=>v.kind==="villager").length>=Jg))for(const v of n_(u.x,u.z,2)){if(r.has(v.key)||Math.hypot(v.ax-u.x,v.az-u.z)>90||Yt(v.ax,v.baseY,v.az)===oe)continue;let M=0;for(let T=0;T<v.def.villagers;T++){const m=f(v.ax,v.az,v.baseY+1);if(!m)continue;const E=a("villager","villager",i_,{x:m.x+.5,y:m.y+.01,z:m.z+.5});E.home={key:v.key,ax:v.ax,az:v.az},M++}M&&r.add(v.key)}}function _(u){if(!(t.curIsDay===!1||t.curUnderground)||i.filter(v=>v.kind==="zombie").length>=Kg)return;const y=h(u,t.curIsDay);y&&a("zombie","zombie",r_,{x:y.x+.5,y:y.y+.01,z:y.z+.5})}function S(u,y){const v={hit:null,poofs:[]};o-=u,o<=0&&(o=2,g(y)),s-=u,s<=0&&(s=1.4,_(y));for(let T=i.length-1;T>=0;T--){const m=i[T];m.timer-=u,m.callT-=u,m.cool>0&&(m.cool-=u);const E=m.pos.x-y.x,L=m.pos.z-y.z,x=Math.hypot(E,L);let A=m.def.spd;if(m.kind==="animal")m.callT<=0&&(m.callT=5+Math.random()*10,x<22&&e.animalSound(m.type,x)),m.def.skittish&&x<5&&(m.flee=1.2,m.yaw=Math.atan2(E,L)),m.flee>0&&(m.flee-=u),m.timer<=0&&m.flee<=0&&(m.timer=1.5+Math.random()*3.5,Math.random()<.6?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1),m.flee>0&&(A*=1.8);else if(m.kind==="villager"){m.callT<=0&&(m.callT=6+Math.random()*12,x<7&&e.animalSound("villager",x));const P=Math.hypot(m.pos.x-(m.home.ax+.5),m.pos.z-(m.home.az+.5));x<4?(m.walking=!1,m.yaw=Math.atan2(E,L),m.timer=.6):P>Qg?(m.walking=!0,m.yaw=Math.atan2(m.pos.x-(m.home.ax+.5),m.pos.z-(m.home.az+.5))):m.timer<=0&&(m.timer=2+Math.random()*4,Math.random()<.55?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1)}else{m.callT<=0&&(m.callT=4+Math.random()*7,x<22&&e.animalSound("zombie",x)),x<jg?(m.walking=!0,A*=2,m.yaw=Math.atan2(E,L)):m.timer<=0&&(m.timer=1.5+Math.random()*3,Math.random()<.5?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1);const P=y.y-m.pos.y;if(m.cool<=0&&x<1&&P>-1.5&&P<1.8){m.cool=1.2;const F=Math.max(x,.001);v.hit={dx:-E/F,dz:-L/F}}if(m.lightT-=u,m.lightT<=0){m.lightT=.8;const F=Sn(Math.floor(m.pos.x),Math.floor(m.pos.y+.5),Math.floor(m.pos.z))>>4;if(t.curIsDay&&F>=10){v.poofs.push([m.pos.x,m.pos.y+1,m.pos.z]),c(m);continue}if(x>Zg){c(m);continue}}}const U=m.walking||m.flee>0;if(U){const P=-Math.sin(m.yaw)*A*u,F=-Math.cos(m.yaw)*A*u;let z=!1;const Z=d(m.pos.x+P,m.pos.y,m.pos.z);!Z&&!di(m.pos.x+P,m.pos.y,m.pos.z,m.hw,m.h)?(m.pos.x+=P,z=!0):!Z&&m.onGround&&!di(m.pos.x+P,m.pos.y+1,m.pos.z,m.hw,m.h)&&(m.pos.x+=P,m.pos.y+=1,z=!0);const k=d(m.pos.x,m.pos.y,m.pos.z+F);!k&&!di(m.pos.x,m.pos.y,m.pos.z+F,m.hw,m.h)?(m.pos.z+=F,z=!0):!k&&m.onGround&&!di(m.pos.x,m.pos.y+1,m.pos.z+F,m.hw,m.h)&&(m.pos.z+=F,m.pos.y+=1,z=!0),z||(m.yaw+=2+Math.random(),m.timer=.4),m.kind==="animal"&&x>Yg&&(m.yaw=Math.atan2(y.x-m.pos.x,y.z-m.pos.z)),m.legPhase+=u*A*5}m.vy=Math.max(m.vy-24*u,-30);const O=m.pos.y+m.vy*u;if(m.vy<0&&di(m.pos.x,O,m.pos.z,m.hw,m.h)?(m.pos.y=Math.floor(O)+1,m.vy=0,m.onGround=!0):m.vy>0&&di(m.pos.x,O,m.pos.z,m.hw,m.h)?m.vy=0:(m.pos.y=O,m.onGround=!1),m.pos.y<-10)if(m.kind==="animal"){const P=l(Math.floor(y.x),Math.floor(y.z));P?(m.pos.set(P.x+.5,P.y+1.01,P.z+.5),m.vy=0):(m.pos.y=Vt,m.vy=0)}else if(m.kind==="villager"){const P=f(m.home.ax,m.home.az,40,5);if(P)m.pos.set(P.x+.5,P.y+.01,P.z+.5),m.vy=0;else{c(m);continue}}else{c(m);continue}m.group.position.copy(m.pos),m.group.rotation.y=m.yaw;const nt=U?Math.sin(m.legPhase)*.5:0;for(let P=0;P<m.legs.length;P++)m.legs[P].rotation.x=P%2?-nt:nt}const M=Math.max(.35,t.dayBright);for(const T of i)for(const m of T.mats)m.mat.color.copy(m.base).multiplyScalar(M);return v}function d(u,y,v){const M=Math.floor(u),T=Math.floor(v),m=Math.floor(y);for(let E=m;E>=m-4&&E>=0;E--){const L=Yt(M,E,T);if(L===Je)return!0;if(L!==oe)return!1}return!1}return{spawnAnimals:p,update:S,animals:i}}const Ks=n=>Math.max(0,Math.min(1,n));function a_({scene:n,camera:t,materials:e,ctx:i,audio:r}){const s=new G,o=new Kn;n.add(o);function a(B,V,Y){const W=document.createElement("canvas");W.width=W.height=64;const I=W.getContext("2d"),J=I.createRadialGradient(32,32,4,32,32,32);J.addColorStop(0,B),J.addColorStop(Y,B),J.addColorStop(1,"rgba(0,0,0,0)"),I.fillStyle=J,I.fillRect(0,0,64,64);const rt=new hg(new Su({map:new bu(W),fog:!1,transparent:!0,depthWrite:!1}));return rt.scale.set(V,V,1),o.add(rt),rt}const c=a("rgba(255,244,180,1)",40,.55),l=a("rgba(214,224,255,1)",26,.45),f=new Pe;function h(){const B=[],V=Ci(Ri()^20901|0);for(let Y=0;Y<520;Y++){const W=V()*Math.PI*2,I=Math.acos(V()*2-1);B.push(280*Math.sin(I)*Math.cos(W),Math.abs(280*Math.cos(I)),280*Math.sin(I)*Math.sin(W))}f.setAttribute("position",new Oe(B,3))}h();const p=new Bo({color:16777215,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0,depthWrite:!1});o.add(new Au(f,p));const g=new Ot(9422056),_=new Ot(461592),S=new Ot(15764554),d=new Ot(857136),u=new Ot,y=new Kn;n.add(y);let v=null,M=0;function T(){v&&(y.remove(v),v.geometry.dispose());const B=[],V=[],Y=Ci(Ri()^20817|0),W=48,I=8,J=Vt+10;for(let ht=0;ht<W;ht++)for(let vt=0;vt<W;vt++){if(qr(ht*.18+1,vt*.18+1)<.56)continue;const D=(ht-W/2)*I,q=(vt-W/2)*I,C=I*.98,et=J+Y()*2,X=B.length/3;B.push(D,et,q,D+C,et,q,D,et,q+C,D+C,et,q+C),B.push(D,et-2,q,D+C,et-2,q,D,et-2,q+C,D+C,et-2,q+C),V.push(X,X+1,X+2,X+2,X+1,X+3),V.push(X+4,X+6,X+5,X+5,X+6,X+7)}const rt=new Pe;rt.setAttribute("position",new Oe(B,3)),rt.setIndex(V);const ft=new vn({color:16777215,transparent:!0,opacity:.82,fog:!0,side:sn});v=new je(rt,ft),y.add(v)}const m=420,E=new Pe,L=new Float32Array(m*6),x=[];for(let B=0;B<m;B++)x.push({x:0,y:0,z:0});E.setAttribute("position",new We(L,3));const A=new Oo({color:10469608,transparent:!0,opacity:.5}),U=new Tu(E,A);U.visible=!1,n.add(U);let O=40;function nt(B){for(let V=0;V<m;V++)x[V].x=B.x+(Math.random()-.5)*40,x[V].y=B.y+Math.random()*26+2,x[V].z=B.z+(Math.random()-.5)*40}function P(B,V){i.weather=B,B==="rain"?(nt(V),r.startRainSound()):r.stopRainSound()}function F(B,V){if(i.weather!=="rain"){U.visible=!1;return}U.visible=!0;for(let Y=0;Y<m;Y++){const W=x[Y];W.y-=34*V,W.x+=2*V,W.y<B.y-8&&(W.x=B.x+(Math.random()-.5)*40,W.z=B.z+(Math.random()-.5)*40,W.y=B.y+22+Math.random()*6),(Math.abs(W.x-B.x)>22||Math.abs(W.z-B.z)>22)&&(W.x=B.x+(Math.random()-.5)*40,W.z=B.z+(Math.random()-.5)*40);const I=Y*6;L[I]=W.x,L[I+1]=W.y,L[I+2]=W.z,L[I+3]=W.x-.1,L[I+4]=W.y-1.1,L[I+5]=W.z}E.attributes.position.needsUpdate=!0}function z(B,V){O-=B,O<=0&&(i.weather==="clear"?Math.random()<.4?(P("rain",V),O=25+Math.random()*40):O=30+Math.random()*60:(P("clear",V),O=50+Math.random()*70))}function Z(B){i.timeOfDay=(i.timeOfDay+B/gg*(i.keys.KeyN&&i.locked?40:1))%1;const V=i.timeOfDay*Math.PI*2,Y=Math.sin(V);i.curIsDay=Y>-.05;const W=new G(Math.cos(V),Y,.28).normalize();c.position.copy(W).multiplyScalar(260),l.position.copy(W).multiplyScalar(-260);const I=Ks((Y+.1)/.35),J=Math.exp(-Math.pow(Y/.16,2))*.8;u.copy(_).lerp(g,I),u.lerp(Y>-.3?S:d,J*(1-I*.4)),i.weather==="rain"&&u.multiplyScalar(.6),n.background.copy(u),n.fog.color.copy(u);let rt=.22+.78*I;i.weather==="rain"&&(rt*=.7),i.dayBright=rt,Bg(rt),v&&v.material.color.setScalar(.6+.4*rt),A.color.setRGB(.62*rt+.1,.75*rt+.1,.9*rt+.1),p.opacity=Ks((.18-Y)/.3),c.material.opacity=Ks((Y+.15)/.2),l.material.opacity=Ks((-Y+.15)/.2),t.getWorldPosition(s),o.position.copy(s),M+=B*.6,M>160&&(M-=160),y.position.set(s.x+M-80,0,s.z)}function k(){h(),T()}return{updateSky:Z,buildSky:k,updateRain:F,tickWeather:z,setWeather:P}}const Nc="blockwelt4_save";function o_({player:n,ctx:t}){function e(){const l={};for(const[f,h]of Mi){const p=new Array(h.size*2);let g=0;for(const[_,S]of h)p[g++]=_,p[g++]=S;l[f]=p}return l}function i(){return{v:4,seed:Ri(),t:t.timeOfDay,w:t.weather,p:[n.pos.x,n.pos.y,n.pos.z,n.yaw,n.pitch],e:e()}}function r(l){if(!l||l.v!==4)return!1;if(Du(l.seed??Ri()),He.clear(),Mi.clear(),l.e)for(const f in l.e){const h=l.e[f],p=new Map;for(let g=0;g<h.length;g+=2)p.set(h[g],h[g+1]);Mi.set(f,p)}return t.timeOfDay=l.t??.3,t.weather=l.w??"clear",l.p??null}function s(){try{return localStorage.setItem(Nc,JSON.stringify(i())),!0}catch{return!1}}function o(){try{const l=localStorage.getItem(Nc);return l?r(JSON.parse(l)):!1}catch{return!1}}function a(){const l=new Blob([JSON.stringify(i())],{type:"application/json"}),f=document.createElement("a");f.href=URL.createObjectURL(l),f.download="meine-welt.blockwelt",f.click(),URL.revokeObjectURL(f.href)}function c(){}return{snapshot:i,applySnapshot:r,saveLocal:s,loadLocal:o,exportFile:a,invalidateWorld:c}}function l_({ctx:n}){const t=document.getElementById("hotbar"),e=document.getElementById("coords"),i=document.getElementById("biome"),r=document.getElementById("blockmenu");function s(l){const f=document.createElement("canvas");return f.width=16,f.height=16,f.getContext("2d").drawImage(Og,nr[l][1]*ie,0,ie,ie,0,0,16,16),f}function o(l){r.innerHTML="";const f=document.createElement("div");f.className="bm-title",f.textContent="Block wählen  ·  E schließt";const h=document.createElement("div");h.className="bm-grid",yg.forEach(p=>{const g=document.createElement("div");g.className="bm-slot",g.title=uo[p]||"",g.appendChild(s(p));const _=document.createElement("span");_.textContent=uo[p]||"",g.appendChild(_),g.addEventListener("click",()=>l(p)),h.appendChild(g)}),r.appendChild(f),r.appendChild(h)}function a(){t.innerHTML="",mr.forEach((l,f)=>{const h=document.createElement("div");h.className="slot"+(f===n.selected?" sel":"");const p=document.createElement("span");p.textContent=f+1,h.appendChild(s(l)),h.appendChild(p),h.title=uo[l],t.appendChild(h)})}function c(l,f){const h=Math.floor((n.timeOfDay+.25)%1*1440),p=String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0");e.textContent=`x ${l.pos.x.toFixed(1)}  y ${l.pos.y.toFixed(1)}  z ${l.pos.z.toFixed(1)}  ·  ${n.timeOfDay<.5?"🌞":"🌙"} ${p}${l.fly?"  ·  ✈":""}${n.weather==="rain"?"  ·  🌧":""}${f?"  ·  ♪":""}`,i.textContent="🌍 "+Tg[n.curBiome]}return{renderHotbar:a,updateHUD:c,buildMenu:o}}const c_=n=>Math.max(0,Math.min(1,n));function u_({scene:n,camera:t,ctx:e}){let i=0;const r=new G,s=18,o=new Eu(new zn(.7,.1,.22),new vn({color:2106410}),s);o.frustumCulled=!1,o.instanceMatrix.setUsage(tu),n.add(o);const a=[];for(let v=0;v<s;v++)a.push({r:9+Math.random()*17,ph:Math.random()*Math.PI*2,spd:.22+Math.random()*.18,hy:24+Math.random()*14,wob:Math.random()*Math.PI*2});const c=new Ee,l=new G,f=80,h=22,p=8,g=new Pe,_=new Float32Array(f*3),S=[];for(let v=0;v<f;v++)_[v*3]=(Math.random()*2-1)*h,_[v*3+1]=Math.random()*p,_[v*3+2]=(Math.random()*2-1)*h,S.push({x:(Math.random()-.5)*.7,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.7});g.setAttribute("position",new We(_,3));const d=new Bo({color:16769658,size:.5,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:po,fog:!1}),u=new Au(g,d);u.frustumCulled=!1,n.add(u);function y(v){i+=v;const M=c_((e.dayBright-.45)/.4),T=1-M;if(t.getWorldPosition(r),o.visible=M>.02&&!e.curUnderground&&!e.curHeadWater,o.visible){const m=r.x,E=r.z;for(let L=0;L<s;L++){const x=a[L],A=i*x.spd+x.ph,U=m+Math.cos(A)*x.r,O=E+Math.sin(A)*x.r,nt=x.hy+Math.sin(i*.6+x.wob)*1.5;l.set(m+Math.cos(A+.06)*x.r,nt,E+Math.sin(A+.06)*x.r),c.position.set(U,nt,O),c.lookAt(l);const P=.5+Math.abs(Math.sin(i*9+x.ph))*.85;c.scale.set(P,1,1),c.updateMatrix(),o.setMatrixAt(L,c.matrix)}o.instanceMatrix.needsUpdate=!0}if(d.opacity=T*(.55+.45*Math.sin(i*2.5))*.9,u.visible=d.opacity>.02&&!e.curHeadWater,u.visible){for(let m=0;m<f;m++){const E=S[m];let L=_[m*3]+E.x*v,x=_[m*3+1]+E.y*v,A=_[m*3+2]+E.z*v;Math.random()<.02&&(E.x=(Math.random()-.5)*.7,E.y=(Math.random()-.5)*.3,E.z=(Math.random()-.5)*.7),L>h?L=-h:L<-h&&(L=h),A>h?A=-h:A<-h&&(A=h),x>p?x=.2:x<0&&(x=p),_[m*3]=L,_[m*3+1]=x,_[m*3+2]=A}g.attributes.position.needsUpdate=!0,u.position.set(r.x,r.y-1.2,r.z)}}return{update:y}}const Nt={keys:{},selected:0,ready:!1,locked:!1,timeOfDay:.3,dayBright:1,curIsDay:!0,weather:"clear",curUnderground:!1,curHeadWater:!1,curBiome:1},yn=document.getElementById("c"),Fe=new Mu({canvas:yn,antialias:!1});Fe.setPixelRatio(Math.min(devicePixelRatio,2));const on=new ug,Vu=new Ot(9422056);on.background=Vu.clone();const Go=(Xn-.5)*at,ku=Go*.5;on.fog=new Fo(Vu.clone(),ku,Go);const Ge=new rn(72,2,.1,600);Ge.rotation.order="YXZ";const Ho=new Kn;Ho.add(Ge);on.add(Ho);Fe.xr.enabled=!0;const $s=new G,Wu=zg(),Tr=Hg({scene:on,materials:Wu}),Xu=Vg(),Co=kg({mesher:Tr,light:Xu}),$n=Wg({camera:Ge,ctx:Nt}),bt=$n.player,ca=Xg({scene:on}),Le=qg({ctx:Nt,player:bt}),qu=s_({scene:on,ctx:Nt,audio:Le}),Si=a_({scene:on,camera:Ge,materials:Wu,ctx:Nt,audio:Le}),ei=o_({player:bt,ctx:Nt}),_r=l_({ctx:Nt}),f_=u_({scene:on,camera:Ge,ctx:Nt}),Gr=new Tu(new mg(new zn(1.002,1.002,1.002)),new Oo({color:0,transparent:!0,opacity:.6}));Gr.visible=!1;on.add(Gr);_r.renderHotbar();let $r=!1;const Yu=document.getElementById("blockmenu");_r.buildMenu(n=>{mr[Nt.selected]=n,_r.renderHotbar(),Ku()});function h_(){$r=!0,Yu.style.display="flex",Nt.locked&&document.exitPointerLock()}function Ku(n){$r=!1,Yu.style.display="none",Nt.ready&&yn.requestPointerLock()}const Ta=document.getElementById("overlay"),sr=document.getElementById("go-text"),Nn=document.getElementById("savehint"),d_=document.getElementById("water-tint"),Fc=document.getElementById("hit-tint");let Oc=null,ua=!1;const ur=()=>{ua=!0};function Bc(n,t,e,i,r){const s=Xu.relight(n,t,e,i,r),o=Math.floor(n/at),a=Math.floor(e/at);s.add(he(o,a));const c=(n%at+at)%at,l=(e%at+at)%at;c===0&&s.add(he(o-1,a)),c===at-1&&s.add(he(o+1,a)),l===0&&s.add(he(o,a-1)),l===at-1&&s.add(he(o,a+1));for(const f of s){const h=f.split(",").map(Number),p=Te(h[0],h[1]);p&&p.state==="meshed"&&Tr.buildChunk(h[0],h[1])}}function zc(n,t,e){return n<bt.pos.x+bt.W&&n+1>bt.pos.x-bt.W&&t<bt.pos.y+bt.H&&t+1>bt.pos.y&&e<bt.pos.z+bt.W&&e+1>bt.pos.z-bt.W}const Gc=n=>n===Qe?bi:n===bi?Qe:n===Bn?Er:Bn;function p_(n,t,e,i=Qe){if(t+1>=Vt||Xe(Yt(n,t,e))||Xe(Yt(n,t+1,e))||zc(n,t,e)||zc(n,t+1,e))return;const r=-Math.sin(bt.yaw),s=-Math.cos(bt.yaw),a=Math.abs(s)>Math.abs(r)?1:0;In(n,t,e,i,a),In(n,t+1,e,i,a|2),Tr.rebuildAt(n,e),Le.sndPlace(i),ur()}function m_(n,t,e){const i=cr(n,t,e),r=i&2?t-1:t,s=Yt(n,r,e),o=Yt(n,r+1,e);kr(s)&&In(n,r,e,Gc(s),cr(n,r,e)),kr(o)&&In(n,r+1,e,Gc(o),cr(n,r+1,e)),Tr.rebuildAt(n,e),Le.sndPlace(s),ur()}function g_(n,t,e){const i=cr(n,t,e),r=i&2?t-1:t;In(n,r,e,oe,0),In(n,r+1,e,oe,0),Tr.rebuildAt(n,e)}function Vo(n){Tr.disposeAll();const t=n?n[0]:8,e=n?n[2]:8;Co.warmup(t,e),$n.spawnPlayer(n||null),Co.update(bt.pos.x,bt.pos.z),qu.spawnAnimals(16,bt.pos),Si.buildSky()}Ta.addEventListener("click",()=>{Nt.ready&&(Le.audioInit(),Nt.weather==="rain"&&Si.setWeather("rain",bt.pos),yn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{Nt.locked=document.pointerLockElement===yn,Ta.style.display=Nt.locked||$r?"none":"flex",!Nt.locked&&!$r&&Nt.ready&&(ei.saveLocal(),ua=!1,Nn.textContent="✔ Automatisch gespeichert")});document.addEventListener("mousemove",n=>{Nt.locked&&(bt.yaw-=n.movementX*.0024,bt.pitch-=n.movementY*.0024,bt.pitch=Math.max(-1.55,Math.min(1.55,bt.pitch)))});document.addEventListener("keydown",n=>{if(Nt.keys[n.code]=!0,n.code==="KeyE"&&Nt.ready){$r?Ku():h_();return}if(n.code==="KeyF"&&(bt.fly=!bt.fly,bt.vel.y=0),n.code==="KeyM"&&Le.toggleMusic(),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<mr.length&&(Nt.selected=t,_r.renderHotbar())}});document.addEventListener("keyup",n=>Nt.keys[n.code]=!1);document.addEventListener("wheel",n=>{Nt.locked&&(Nt.selected=(Nt.selected+(n.deltaY>0?1:-1)+mr.length)%mr.length,_r.renderHotbar())});document.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("mousedown",n=>{if(!Nt.locked)return;const t=$n.raycast();if(t){if(n.button===0){const e=Yt(t.x,t.y,t.z);if(e===Je)return;if(kr(e)){g_(t.x,t.y,t.z),Le.sndBreak(e),ca.spawn(t.x+.5,t.y+.5,t.z+.5,Ac[e]||8947848,10,3,1.5),ur();return}In(t.x,t.y,t.z,oe),Bc(t.x,t.y,t.z,e,oe),Le.sndBreak(e),ca.spawn(t.x+.5,t.y+.5,t.z+.5,Ac[e]||8947848,10,3,1.5),ur()}else if(n.button===2){const e=Yt(t.x,t.y,t.z);if(kr(e)){m_(t.x,t.y,t.z);return}const i=t.x+t.nx,r=t.y+t.ny,s=t.z+t.nz;if(!Uu(i,r))return;const o=mr[Nt.selected];if(o===Qe||o===Bn){p_(i,r,s,o);return}const a=Yt(i,r,s);if(Xe(a))return;let c=0;if(Sa(o)){const l=-Math.sin(bt.yaw),f=-Math.cos(bt.yaw);c=Math.abs(f)>Math.abs(l)?f<0?0:2:l<0?3:1}if(In(i,r,s,o,c),$n.boxCollides(bt.pos)){In(i,r,s,a);return}Bc(i,r,s,a,o),Le.sndPlace(o),ur()}}});document.getElementById("btn-export").addEventListener("click",n=>{n.stopPropagation(),ei.exportFile(),Nn.textContent="✔ Welt exportiert"});document.getElementById("btn-import").addEventListener("click",n=>{n.stopPropagation(),document.getElementById("file-import").click()});document.getElementById("file-import").addEventListener("click",n=>n.stopPropagation());document.getElementById("file-import").addEventListener("change",n=>{const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=()=>{try{const i=ei.applySnapshot(JSON.parse(e.result));i!==!1?(Vo(i),Si.setWeather(Nt.weather,bt.pos),ei.saveLocal(),Nn.textContent="✔ Welt geladen"):Nn.textContent="✘ Datei konnte nicht gelesen werden"}catch{Nn.textContent="✘ Ungültige Datei"}},e.readAsText(t),n.target.value=""});document.getElementById("btn-new").addEventListener("click",n=>{n.stopPropagation(),sr.textContent="⏳ Neue Welt wird erzeugt …",sr.classList.add("busy"),Nt.ready=!1,setTimeout(()=>{const t=Math.random()*2147483648|0;Iu(t),Vo(null),Nt.timeOfDay=.3,Si.setWeather("clear",bt.pos),ur(),ei.saveLocal(),Nn.textContent="✔ Neue Welt (Seed "+t+")",sr.textContent="▶ Klicken zum Spielen ◀",sr.classList.remove("busy"),Nt.ready=!0},40)});function __(){const n=Math.floor(bt.pos.x),t=Math.floor(bt.pos.z);for(let e=Math.ceil(bt.pos.y+bt.H);e<Vt;e++)if(Xe(Yt(n,e,t)))return!0;return!1}const fa=[];let Hc=performance.now();function v_(n){const t=Math.min((n-Hc)/1e3,.05);if(Hc=n,Fe.xr.isPresenting&&fa.push(t),Nt.ready&&Nt.locked){const r=$n.update(t);r.splash&&Le.sndSplash(),r.land!=null&&Le.sndLand(r.land),r.step!=null&&Le.sndStep(r.step)}if(Fe.xr.isPresenting?Ho.position.set(bt.pos.x,bt.pos.y,bt.pos.z):(Ge.position.set(bt.pos.x,bt.pos.y+bt.EYE,bt.pos.z),Ge.rotation.set(bt.pitch,bt.yaw,0)),Ge.getWorldPosition($s),Si.updateSky(t),Nt.ready){Co.update(bt.pos.x,bt.pos.z);const r=qu.update(t,bt.pos);r.hit&&Nt.locked&&($n.moveAxis("x",r.hit.dx*1.5),$n.moveAxis("z",r.hit.dz*1.5),bt.fly||(bt.vel.y=3.5),Le.sndHit(),Fc.style.display="block",clearTimeout(Oc),Oc=setTimeout(()=>{Fc.style.display="none"},240));for(const s of r.poofs)ca.spawn(s[0],s[1],s[2],5929554,14,2.5,2);ca.update(t),f_.update(t),Si.tickWeather(t,bt.pos),Si.updateRain(bt.pos,t)}const e=Nt.ready&&Nt.locked?$n.raycast():null;e?(Gr.visible=!0,Gr.position.set(e.x+.5,e.y+.5,e.z+.5)):Gr.visible=!1;const i=Yt(Math.floor($s.x),Math.floor($s.y),Math.floor($s.z))===Je;if(d_.style.display=i?"block":"none",on.fog.near=i?4:ku,on.fog.far=i?26:Go,Le.setMuffle(i),Nt.curHeadWater=i,Nt.curUnderground=!i&&__(),Nt.ready){const r=Math.floor(bt.pos.x),s=Math.floor(bt.pos.z);Uu(r,0)&&(Nt.curBiome=Yr(r,s,Bu(r,s))),_r.updateHUD(bt,Le.isMusicOn())}if(!Fe.xr.isPresenting){const r=yn.clientWidth,s=yn.clientHeight;(yn.width!==(r*Fe.getPixelRatio()|0)||yn.height!==(s*Fe.getPixelRatio()|0))&&(Fe.setSize(r,s,!1),Ge.aspect=r/s,Ge.updateProjectionMatrix())}Fe.render(on,Ge)}const $u=document.getElementById("btn-vr");navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported("immersive-vr").then(n=>{n&&($u.style.display="")}).catch(()=>{});$u.addEventListener("click",async n=>{if(n.stopPropagation(),!(!Nt.ready||Fe.xr.isPresenting)){Le.audioInit();try{const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor"]});Fe.xr.setReferenceSpaceType("local-floor"),await Fe.xr.setSession(t)}catch(t){Nn.textContent="✘ VR-Start fehlgeschlagen: "+t.message}}});Fe.xr.addEventListener("sessionstart",()=>{Ta.style.display="none",fa.length=0});Fe.xr.addEventListener("sessionend",()=>{Ge.fov=72,Ge.aspect=yn.clientWidth/yn.clientHeight,Ge.updateProjectionMatrix(),Ta.style.display="flex";const n=fa.slice(Math.min(144,fa.length>>2));if(n.length>72){const t=n.reduce((r,s)=>r+s,0)/n.length,e=[...n].sort((r,s)=>s-r),i=e[Math.floor(e.length*.01)];Nn.textContent=`📊 VR: Ø ${(1/t).toFixed(1)} FPS · 1%-low ${(1/i).toFixed(1)} FPS · ${n.length} Frames`}});Fe.setAnimationLoop(v_);setTimeout(()=>{const n=ei.loadLocal();let t=null;n===!1&&(t=Math.random()*2**31|0,Iu(t)),Vo(n||null),setInterval(()=>{(ua||document.pointerLockElement)&&(ei.saveLocal(),ua=!1)},8e3),window.addEventListener("beforeunload",()=>ei.saveLocal()),Nt.ready=!0,sr.textContent="▶ Klicken zum Spielen ◀",sr.classList.remove("busy"),Nn.textContent=n!==!1?"✔ Gespeicherte Welt geladen":"✔ Neue Welt (Seed "+t+")"},50);
