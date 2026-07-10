(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="160",rf=0,jo=1,sf=2,Xc=1,af=2,Ln=3,ni=0,ke=1,sn=2,jn=0,ar=1,vo=2,Jo=3,Qo=4,of=5,pi=100,lf=101,cf=102,tl=103,el=104,uf=200,ff=201,hf=202,df=203,xo=204,Mo=205,pf=206,mf=207,gf=208,_f=209,vf=210,xf=211,Mf=212,Sf=213,yf=214,Ef=0,Tf=1,Af=2,na=3,bf=4,wf=5,Rf=6,Cf=7,qc=0,Lf=1,Pf=2,Jn=0,Df=1,Uf=2,If=3,Nf=4,Ff=5,Of=6,Yc=300,fr=301,hr=302,So=303,yo=304,da=306,Eo=1e3,dn=1001,To=1002,be=1003,nl=1004,Da=1005,nn=1006,Bf=1007,Hr=1008,Qn=1009,zf=1010,Gf=1011,Io=1012,Kc=1013,Yn=1014,Kn=1015,Vr=1016,$c=1017,Zc=1018,_i=1020,Hf=1021,pn=1023,Vf=1024,kf=1025,vi=1026,dr=1027,Wf=1028,jc=1029,Xf=1030,Jc=1031,Qc=1033,Ua=33776,Ia=33777,Na=33778,Fa=33779,il=35840,rl=35841,sl=35842,al=35843,tu=36196,ol=37492,ll=37496,cl=37808,ul=37809,fl=37810,hl=37811,dl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,Ml=37819,Sl=37820,yl=37821,Oa=36492,El=36494,Tl=36495,qf=36283,Al=36284,bl=36285,wl=36286,eu=3e3,xi=3001,Yf=3200,Kf=3201,$f=0,Zf=1,an="",ye="srgb",On="srgb-linear",No="display-p3",pa="display-p3-linear",ia="linear",ne="srgb",ra="rec709",sa="p3",Ii=7680,Rl=519,jf=512,Jf=513,Qf=514,nu=515,th=516,eh=517,nh=518,ih=519,Ao=35044,iu=35048,Cl="300 es",bo=1035,Un=2e3,aa=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,wo=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function rh(n,t){return(n%t+t)%t}function Ba(n,t,e){return(1-e)*n+e*t}function Ll(n){return(n&n-1)===0&&n!==0}function Ro(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,r,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],S=i[8],v=r[0],p=r[3],u=r[6],E=r[1],M=r[4],_=r[7],T=r[2],m=r[5],y=r[8];return s[0]=o*v+a*E+l*T,s[3]=o*p+a*M+l*m,s[6]=o*u+a*_+l*y,s[1]=c*v+f*E+h*T,s[4]=c*p+f*M+h*m,s[7]=c*u+f*_+h*y,s[2]=d*v+g*E+S*T,s[5]=d*p+g*M+S*m,s[8]=d*u+g*_+S*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,d=a*l-f*s,g=c*s-o*l,S=e*h+i*d+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return t[0]=h*v,t[1]=(r*c-f*i)*v,t[2]=(a*i-r*o)*v,t[3]=d*v,t[4]=(f*e-r*l)*v,t[5]=(r*s-a*e)*v,t[6]=g*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Xt;function ru(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sh(){const n=oa("canvas");return n.style.display="block",n}const Pl={};function Fr(n){n in Pl||(Pl[n]=!0,console.warn(n))}const Dl=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[On]:{transfer:ia,primaries:ra,toReference:n=>n,fromReference:n=>n},[ye]:{transfer:ne,primaries:ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pa]:{transfer:ia,primaries:sa,toReference:n=>n.applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Dl)},[No]:{transfer:ne,primaries:sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Dl).convertLinearToSRGB()}},ah=new Set([On,pa]),jt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ah.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=us[t].toReference,r=us[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return us[n].primaries},getTransfer:function(n){return n===an?ia:us[n].transfer}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=oa("canvas")),Ni.width=t.width,Ni.height=t.height;const i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oh=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ti(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;class We extends vr{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=dn,r=dn,s=nn,o=Hr,a=pn,l=Qn,c=We.DEFAULT_ANISOTROPY,f=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ti(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===xi?ye:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?xi:eu}set encoding(t){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xi?ye:an}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Yc;We.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],S=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(S-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(S+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(g+1)/2,T=(u+1)/2,m=(f+d)/4,y=(h+v)/4,D=(S+p)/4;return M>_&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=m/i,s=y/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=m/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=D/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-S)*(p-S)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(E)<.001&&(E=1),this.x=(p-S)/E,this.y=(h-v)/E,this.z=(d-f)/E,this.w=Math.acos((c+g+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ch extends vr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xi?ye:an),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new We(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends ch{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ou extends We{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends We{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],S=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=S,t[e+3]=v;return}if(h!==v||l!==d||c!==g||f!==S){let p=1-a;const u=l*d+c*g+f*S+h*v,E=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const T=Math.sqrt(M),m=Math.atan2(T,u*E);p=Math.sin(p*m)/T,a=Math.sin(a*m)/T}const _=a*E;if(l=l*p+d*_,c=c*p+g*_,f=f*p+S*_,h=h*p+v*_,p===1-a){const T=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=T,c*=T,f*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],S=s[o+3];return t[e]=a*S+f*h+l*g-c*d,t[e+1]=l*S+f*d+c*h-a*g,t[e+2]=c*S+f*g+a*d-l*h,t[e+3]=f*S-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*g*S,this._y=c*g*h-d*f*S,this._z=c*f*S+d*g*h,this._w=c*f*h-d*g*S;break;case"YXZ":this._x=d*f*h+c*g*S,this._y=c*g*h-d*f*S,this._z=c*f*S-d*g*h,this._w=c*f*h+d*g*S;break;case"ZXY":this._x=d*f*h-c*g*S,this._y=c*g*h+d*f*S,this._z=c*f*S+d*g*h,this._w=c*f*h-d*g*S;break;case"ZYX":this._x=d*f*h-c*g*S,this._y=c*g*h+d*f*S,this._z=c*f*S-d*g*h,this._w=c*f*h+d*g*S;break;case"YZX":this._x=d*f*h+c*g*S,this._y=c*g*h+d*f*S,this._z=c*f*S-d*g*h,this._w=c*f*h-d*g*S;break;case"XZY":this._x=d*f*h-c*g*S,this._y=c*g*h-d*f*S,this._z=c*f*S+d*g*h,this._w=c*f*h+d*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,d=Math.sin(e*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),f=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new G,Il=new Jr;class Li{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),hs.subVectors(this.max,br),Fi.subVectors(t.a,br),Oi.subVectors(t.b,br),Bi.subVectors(t.c,br),Hn.subVectors(Oi,Fi),Vn.subVectors(Bi,Oi),oi.subVectors(Fi,Bi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-oi.z,oi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,oi.z,0,-oi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-oi.y,oi.x,0];return!ka(e,Fi,Oi,Bi,hs)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Fi,Oi,Bi,hs))?!1:(ds.crossVectors(Hn,Vn),e=[ds.x,ds.y,ds.z],ka(e,Fi,Oi,Bi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new G,new G,new G,new G,new G,new G,new G,new G],ln=new G,fs=new Li,Fi=new G,Oi=new G,Bi=new G,Hn=new G,Vn=new G,oi=new G,br=new G,hs=new G,ds=new G,li=new G;function ka(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){li.fromArray(n,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),f=i.dot(li);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const fh=new Li,wr=new G,Wa=new G;class Pi{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(wr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Wa)),this.expandByPoint(wr.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new G,Xa=new G,ps=new G,kn=new G,qa=new G,ms=new G,Ya=new G;class Fo{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Xa.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Xa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ps),a=kn.dot(this.direction),l=-kn.dot(ps),c=kn.lengthSq(),f=Math.abs(1-o*o);let h,d,g,S;if(f>0)if(h=o*l-a,d=o*a-l,S=s*f,h>=0)if(d>=-S)if(d<=S){const v=1/f;h*=v,d*=v,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-S?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=S?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xa).addScaledVector(ps,d),g}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),f>=0?(s=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(s=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){qa.subVectors(e,t),ms.subVectors(i,t),Ya.crossVectors(qa,ms);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(ms.crossVectors(kn,ms));if(l<0)return null;const c=a*this.direction.dot(qa.cross(kn));if(c<0||l+c>o)return null;const f=-a*kn.dot(Ya);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,l,c,f,h,d,g,S,v,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,f,h,d,g,S,v,p)}set(t,e,i,r,s,o,a,l,c,f,h,d,g,S,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=S,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*f,g=o*h,S=a*f,v=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=g+S*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=S+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*f,g=l*h,S=c*f,v=c*h;e[0]=d+v*a,e[4]=S*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=g*a-S,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*f,g=l*h,S=c*f,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=S+g*a,e[1]=g+S*a,e[5]=o*f,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*f,g=o*h,S=a*f,v=a*h;e[0]=l*f,e[4]=S*c-g,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=g*c-S,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,S=a*l,v=a*c;e[0]=l*f,e[4]=v-d*h,e[8]=S*h+g,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=g*h+S,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,g=o*c,S=a*l,v=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=d*h+v,e[5]=o*f,e[9]=g*h-S,e[2]=S*h-g,e[6]=a*f,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hh,t,dh)}lookAt(t,e,i){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Wn.crossVectors(i,Ke),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Wn.crossVectors(i,Ke)),Wn.normalize(),gs.crossVectors(Ke,Wn),r[0]=Wn.x,r[4]=gs.x,r[8]=Ke.x,r[1]=Wn.y,r[5]=gs.y,r[9]=Ke.y,r[2]=Wn.z,r[6]=gs.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],S=i[2],v=i[6],p=i[10],u=i[14],E=i[3],M=i[7],_=i[11],T=i[15],m=r[0],y=r[4],D=r[8],x=r[12],A=r[1],P=r[5],I=r[9],j=r[13],L=r[2],O=r[6],B=r[10],q=r[14],V=r[3],z=r[7],k=r[11],K=r[15];return s[0]=o*m+a*A+l*L+c*V,s[4]=o*y+a*P+l*O+c*z,s[8]=o*D+a*I+l*B+c*k,s[12]=o*x+a*j+l*q+c*K,s[1]=f*m+h*A+d*L+g*V,s[5]=f*y+h*P+d*O+g*z,s[9]=f*D+h*I+d*B+g*k,s[13]=f*x+h*j+d*q+g*K,s[2]=S*m+v*A+p*L+u*V,s[6]=S*y+v*P+p*O+u*z,s[10]=S*D+v*I+p*B+u*k,s[14]=S*x+v*j+p*q+u*K,s[3]=E*m+M*A+_*L+T*V,s[7]=E*y+M*P+_*O+T*z,s[11]=E*D+M*I+_*B+T*k,s[15]=E*x+M*j+_*q+T*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],g=t[14],S=t[3],v=t[7],p=t[11],u=t[15];return S*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+v*(+e*l*g-e*c*d+s*o*d-r*o*g+r*c*f-s*l*f)+p*(+e*c*h-e*a*g-s*o*h+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-e*l*h+e*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],g=t[11],S=t[12],v=t[13],p=t[14],u=t[15],E=h*p*c-v*d*c+v*l*g-a*p*g-h*l*u+a*d*u,M=S*d*c-f*p*c-S*l*g+o*p*g+f*l*u-o*d*u,_=f*v*c-S*h*c+S*a*g-o*v*g-f*a*u+o*h*u,T=S*h*l-f*v*l-S*a*d+o*v*d+f*a*p-o*h*p,m=e*E+i*M+r*_+s*T;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=E*y,t[1]=(v*d*s-h*p*s-v*r*g+i*p*g+h*r*u-i*d*u)*y,t[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*y,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*y,t[4]=M*y,t[5]=(f*p*s-S*d*s+S*r*g-e*p*g-f*r*u+e*d*u)*y,t[6]=(S*l*s-o*p*s-S*r*c+e*p*c+o*r*u-e*l*u)*y,t[7]=(o*d*s-f*l*s+f*r*c-e*d*c-o*r*g+e*l*g)*y,t[8]=_*y,t[9]=(S*h*s-f*v*s-S*i*g+e*v*g+f*i*u-e*h*u)*y,t[10]=(o*v*s-S*a*s+S*i*c-e*v*c-o*i*u+e*a*u)*y,t[11]=(f*a*s-o*h*s-f*i*c+e*h*c+o*i*g-e*a*g)*y,t[12]=T*y,t[13]=(f*v*r-S*h*r+S*i*d-e*v*d-f*i*p+e*h*p)*y,t[14]=(S*a*r-o*v*r-S*i*l+e*v*l+o*i*p-e*a*p)*y,t[15]=(o*h*r-f*a*r+f*i*l-e*h*l-o*i*d+e*a*d)*y,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,h=a+a,d=s*c,g=s*f,S=s*h,v=o*f,p=o*h,u=a*h,E=l*c,M=l*f,_=l*h,T=i.x,m=i.y,y=i.z;return r[0]=(1-(v+u))*T,r[1]=(g+_)*T,r[2]=(S-M)*T,r[3]=0,r[4]=(g-_)*m,r[5]=(1-(d+u))*m,r[6]=(p+E)*m,r[7]=0,r[8]=(S+M)*y,r[9]=(p-E)*y,r[10]=(1-(d+v))*y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const o=zi.set(r[4],r[5],r[6]).length(),a=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const c=1/s,f=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Un){const l=this.elements,c=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let g,S;if(a===Un)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===aa)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Un){const l=this.elements,c=1/(e-t),f=1/(i-r),h=1/(o-s),d=(e+t)*c,g=(i+r)*f;let S,v;if(a===Un)S=(o+s)*h,v=-2*h;else if(a===aa)S=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new G,cn=new le,hh=new G(0,0,0),dh=new G(1,1,1),Wn=new G,gs=new G,Ke=new G,Nl=new le,Fl=new Jr;class ma{constructor(t=0,e=0,i=0,r=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ph=0;const Ol=new G,Gi=new Jr,wn=new le,_s=new G,Rr=new G,mh=new G,gh=new Jr,Bl=new G(1,0,0),zl=new G(0,1,0),Gl=new G(0,0,1),_h={type:"added"},vh={type:"removed"};class Ee extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new G,e=new ma,i=new Jr,r=new G(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_s.copy(t):_s.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Rr,_s,this.up):wn.lookAt(_s,Rr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(wn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_h)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),d=o(t.skeletons),g=o(t.animations),S=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new G(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new G,Rn=new G,Ka=new G,Cn=new G,Hi=new G,Vi=new G,Hl=new G,$a=new G,Za=new G,ja=new G;let vs=!1;class Ze{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),Rn.subVectors(i,e),Ka.subVectors(t,e);const o=un.dot(un),a=un.dot(Rn),l=un.dot(Ka),c=Rn.dot(Rn),f=Rn.dot(Ka),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*f)*d,S=(o*f-a*l)*d;return s.set(1-g-S,S,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,i,r,s,o,a,l){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),Rn.subVectors(t,e),un.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),Ze.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),Vi.subVectors(s,i),$a.subVectors(t,i);const l=Hi.dot($a),c=Vi.dot($a);if(l<=0&&c<=0)return e.copy(i);Za.subVectors(t,r);const f=Hi.dot(Za),h=Vi.dot(Za);if(f>=0&&h<=f)return e.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(Hi,o);ja.subVectors(t,s);const g=Hi.dot(ja),S=Vi.dot(ja);if(S>=0&&g<=S)return e.copy(s);const v=g*c-l*S;if(v<=0&&c>=0&&S<=0)return a=c/(c-S),e.copy(i).addScaledVector(Vi,a);const p=f*S-g*h;if(p<=0&&h-f>=0&&g-S>=0)return Hl.subVectors(s,r),a=(h-f)/(h-f+(g-S)),e.copy(r).addScaledVector(Hl,a);const u=1/(p+v+d);return o=v*u,a=d*u,e.copy(i).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=rh(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ja(o,s,t+1/3),this.g=Ja(o,s,t),this.b=Ja(o,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ge(Le.r*255,0,255))*65536+Math.round(Ge(Le.g*255,0,255))*256+Math.round(Ge(Le.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ye){jt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(xs);const i=Ba(Xn.h,xs.h,e),r=Ba(Xn.s,xs.s,e),s=Ba(Xn.l,xs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ot;Ot.NAMES=cu;let xh=0;class Di extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ar,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=Mo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mn extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new G,Ms=new Kt;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class uu extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fu extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Be extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mh=0;const en=new le,Qa=new Ee,ki=new G,$e=new Li,Cr=new Li,Se=new G;class De extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?fu:uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors($e.min,Cr.min),$e.expandByPoint(Se),Se.addVectors($e.max,Cr.max),$e.expandByPoint(Se)):($e.expandByPoint(Cr.min),$e.expandByPoint(Cr.max))}$e.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Se.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),Se.add(ki)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let A=0;A<a;A++)c[A]=new G,f[A]=new G;const h=new G,d=new G,g=new G,S=new Kt,v=new Kt,p=new Kt,u=new G,E=new G;function M(A,P,I){h.fromArray(r,A*3),d.fromArray(r,P*3),g.fromArray(r,I*3),S.fromArray(o,A*2),v.fromArray(o,P*2),p.fromArray(o,I*2),d.sub(h),g.sub(h),v.sub(S),p.sub(S);const j=1/(v.x*p.y-p.x*v.y);isFinite(j)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(g,-v.y).multiplyScalar(j),E.copy(g).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(j),c[A].add(u),c[P].add(u),c[I].add(u),f[A].add(E),f[P].add(E),f[I].add(E))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,P=_.length;A<P;++A){const I=_[A],j=I.start,L=I.count;for(let O=j,B=j+L;O<B;O+=3)M(i[O+0],i[O+1],i[O+2])}const T=new G,m=new G,y=new G,D=new G;function x(A){y.fromArray(s,A*3),D.copy(y);const P=c[A];T.copy(P),T.sub(y.multiplyScalar(y.dot(P))).normalize(),m.crossVectors(D,P);const j=m.dot(f[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=j}for(let A=0,P=_.length;A<P;++A){const I=_[A],j=I.start,L=I.count;for(let O=j,B=j+L;O<B;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,f=new G,h=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){const S=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let g=0,S=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*f;for(let u=0;u<f;u++)d[S++]=c[g++]}return new Xe(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=t(d,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new le,ci=new Fo,Ss=new Pi,kl=new G,Wi=new G,Xi=new G,qi=new G,to=new G,ys=new G,Es=new Kt,Ts=new Kt,As=new Kt,Wl=new G,Xl=new G,ql=new G,bs=new G,ws=new G;class He extends Ee{constructor(t=new De,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(to.fromBufferAttribute(h,t),o?ys.addScaledVector(to,f):ys.addScaledVector(to.sub(e),f))}e.add(ys)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Ss.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ss,kl)===null||ci.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Vl.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,v=d.length;S<v;S++){const p=d[S],u=o[p.materialIndex],E=Math.max(p.start,g.start),M=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let _=E,T=M;_<T;_+=3){const m=a.getX(_),y=a.getX(_+1),D=a.getX(_+2);r=Rs(this,u,t,i,c,f,h,m,y,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const S=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=S,u=v;p<u;p+=3){const E=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);r=Rs(this,o,t,i,c,f,h,E,M,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,v=d.length;S<v;S++){const p=d[S],u=o[p.materialIndex],E=Math.max(p.start,g.start),M=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let _=E,T=M;_<T;_+=3){const m=_,y=_+1,D=_+2;r=Rs(this,u,t,i,c,f,h,m,y,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const S=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=S,u=v;p<u;p+=3){const E=p,M=p+1,_=p+2;r=Rs(this,o,t,i,c,f,h,E,M,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Sh(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ni,a),l===null)return null;ws.copy(a),ws.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:n}}function Rs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Wi),n.getVertexPosition(l,Xi),n.getVertexPosition(c,qi);const f=Sh(n,t,e,i,Wi,Xi,qi,bs);if(f){r&&(Es.fromBufferAttribute(r,a),Ts.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),f.uv=Ze.getInterpolation(bs,Wi,Xi,qi,Es,Ts,As,new Kt)),s&&(Es.fromBufferAttribute(s,a),Ts.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),f.uv1=Ze.getInterpolation(bs,Wi,Xi,qi,Es,Ts,As,new Kt),f.uv2=f.uv1),o&&(Wl.fromBufferAttribute(o,a),Xl.fromBufferAttribute(o,l),ql.fromBufferAttribute(o,c),f.normal=Ze.getInterpolation(bs,Wi,Xi,qi,Wl,Xl,ql,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};Ze.getNormal(Wi,Xi,qi,h.normal),f.face=h}return f}class Gn extends De{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,g=0;S("z","y","x",-1,-1,i,e,t,o,s,0),S("z","y","x",1,-1,i,e,-t,o,s,1),S("x","z","y",1,1,t,i,e,r,o,2),S("x","z","y",1,-1,t,i,-e,r,o,3),S("x","y","z",1,-1,t,e,i,r,s,4),S("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function S(v,p,u,E,M,_,T,m,y,D,x){const A=_/y,P=T/D,I=_/2,j=T/2,L=m/2,O=y+1,B=D+1;let q=0,V=0;const z=new G;for(let k=0;k<B;k++){const K=k*P-j;for(let W=0;W<O;W++){const N=W*A-I;z[v]=N*E,z[p]=K*M,z[u]=L,c.push(z.x,z.y,z.z),z[v]=0,z[p]=0,z[u]=m>0?1:-1,f.push(z.x,z.y,z.z),h.push(W/y),h.push(1-k/D),q+=1}}for(let k=0;k<D;k++)for(let K=0;K<y;K++){const W=d+K+O*k,N=d+K+O*(k+1),Q=d+(K+1)+O*(k+1),rt=d+(K+1)+O*k;l.push(W,N,rt),l.push(N,Q,rt),V+=6}a.addGroup(g,V,x),g+=V,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=pr(n[e]);for(const r in i)t[r]=i[r]}return t}function yh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hu(n){return n.getRenderTarget()===null?n.outputColorSpace:jt.workingColorSpace}const Eh={clone:pr,merge:Fe};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class du extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends du{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Ki=1;class bh extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Yi,Ki,t,e);r.layers=this.layers,this.add(r);const s=new rn(Yi,Ki,t,e);s.layers=this.layers,this.add(s);const o=new rn(Yi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new rn(Yi,Ki,t,e);a.layers=this.layers,this.add(a);const l=new rn(Yi,Ki,t,e);l.layers=this.layers,this.add(l);const c=new rn(Yi,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,f),t.setRenderTarget(h,d,g),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class pu extends We{constructor(t,e,i,r,s,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wh extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xi?ye:an),this.texture=new pu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gn(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:jn});s.uniforms.tEquirect.value=e;const o=new He(r,s),a=e.minFilter;return e.minFilter===Hr&&(e.minFilter=nn),new bh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const eo=new G,Rh=new G,Ch=new Xt;class fi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=eo.subVectors(i,e).cross(Rh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(eo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ch.getNormalMatrix(t),r=this.coplanarPoint(eo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Pi,Cs=new G;class mu{constructor(t=new fi,e=new fi,i=new fi,r=new fi,s=new fi,o=new fi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],S=r[9],v=r[10],p=r[11],u=r[12],E=r[13],M=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,p-g,_-u).normalize(),i[1].setComponents(l+s,d+c,p+g,_+u).normalize(),i[2].setComponents(l+o,d+f,p+S,_+E).normalize(),i[3].setComponents(l-o,d-f,p-S,_-E).normalize(),i[4].setComponents(l-a,d-h,p-v,_-M).normalize(),e===Un)i[5].setComponents(l+a,d+h,p+v,_+M).normalize();else if(e===aa)i[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Cs.x=r.normal.x>0?t.max.x:t.min.x,Cs.y=r.normal.y>0?t.max.y:t.min.y,Cs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gu(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Lh(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,g=h.byteLength,S=n.createBuffer();n.bindBuffer(f,S),n.bufferData(f,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:S,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,h){const d=f.array,g=f._updateRange,S=f.updateRanges;if(n.bindBuffer(h,c),g.count===-1&&S.length===0&&n.bufferSubData(h,0,d),S.length!==0){for(let v=0,p=S.length;v<p;v++){const u=S[v];e?n.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):n.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(e?n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(n.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class ga extends De{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=t/a,d=e/l,g=[],S=[],v=[],p=[];for(let u=0;u<f;u++){const E=u*d-o;for(let M=0;M<c;M++){const _=M*h-s;S.push(_,-E,0),v.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){const M=E+c*u,_=E+c*(u+1),T=E+1+c*(u+1),m=E+1+c*u;g.push(M,_,m),g.push(_,T,m)}this.setIndex(g),this.setAttribute("position",new Be(S,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dh=`#ifdef USE_ALPHAHASH
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
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oh=`#ifdef USE_AOMAP
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
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Xh=`#ifdef USE_BUMPMAP
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nd=`vec3 transformedNormal = objectNormal;
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
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`
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
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Ld=`struct PhysicalMaterial {
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
}`,Pd=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xd=`#ifdef USE_MORPHNORMALS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,rm=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ph,alphahash_pars_fragment:Dh,alphamap_fragment:Uh,alphamap_pars_fragment:Ih,alphatest_fragment:Nh,alphatest_pars_fragment:Fh,aomap_fragment:Oh,aomap_pars_fragment:Bh,batching_pars_vertex:zh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Vh,bsdfs:kh,iridescence_fragment:Wh,bumpmap_pars_fragment:Xh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Yh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:$h,color_fragment:Zh,color_pars_fragment:jh,color_pars_vertex:Jh,color_vertex:Qh,common:td,cube_uv_reflection_fragment:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:rd,emissivemap_fragment:sd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:ud,envmap_pars_fragment:fd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Td,envmap_vertex:dd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:_d,gradientmap_pars_fragment:vd,lightmap_fragment:xd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:yd,lights_pars_begin:Ed,lights_toon_fragment:Ad,lights_toon_pars_fragment:bd,lights_phong_fragment:wd,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Pd,lights_fragment_maps:Dd,lights_fragment_end:Ud,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:Gd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:kd,morphcolor_vertex:Wd,morphnormal_vertex:Xd,morphtarget_pars_vertex:qd,morphtarget_vertex:Yd,normal_fragment_begin:Kd,normal_fragment_maps:$d,normal_pars_fragment:Zd,normal_pars_vertex:jd,normal_vertex:Jd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:rp,packing:sp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:dp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:vp,skinnormal_vertex:xp,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:yp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:bp,uv_pars_vertex:wp,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:Lp,background_frag:Pp,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Ip,cube_frag:Np,depth_vert:Fp,depth_frag:Op,distanceRGBA_vert:Bp,distanceRGBA_frag:zp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Vp,linedashed_frag:kp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:qp,meshlambert_frag:Yp,meshmatcap_vert:Kp,meshmatcap_frag:$p,meshnormal_vert:Zp,meshnormal_frag:jp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:rm,points_frag:sm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vn={basic:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Fe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Fe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Fe([pt.points,pt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Fe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Fe([pt.common,pt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Fe([pt.sprite,pt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Fe([pt.common,pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Fe([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};vn.physical={uniforms:Fe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ls={r:0,b:0,g:0};function um(n,t,e,i,r,s,o){const a=new Ot(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function S(p,u){let E=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?e:t).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),E=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===da)?(f===void 0&&(f=new He(new Gn(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:pr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,m,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,(h!==M||d!==M.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,g=n.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new He(new ga(2,2),new Ei({name:"BackgroundMaterial",uniforms:pr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,g=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(Ls,hu(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:S}}function fm(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(L,O,B,q,V){let z=!1;if(o){const k=v(q,B,O);c!==k&&(c=k,g(c.object)),z=u(L,q,B,V),z&&E(L,q,B,V)}else{const k=O.wireframe===!0;(c.geometry!==q.id||c.program!==B.id||c.wireframe!==k)&&(c.geometry=q.id,c.program=B.id,c.wireframe=k,z=!0)}V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,D(L,O,B,q),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function S(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,O,B){const q=B.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let z=V[O.id];z===void 0&&(z={},V[O.id]=z);let k=z[q];return k===void 0&&(k=p(d()),z[q]=k),k}function p(L){const O=[],B=[],q=[];for(let V=0;V<r;V++)O[V]=0,B[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,O,B,q){const V=c.attributes,z=O.attributes;let k=0;const K=B.getAttributes();for(const W in K)if(K[W].location>=0){const Q=V[W];let rt=z[W];if(rt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;k++}return c.attributesNum!==k||c.index!==q}function E(L,O,B,q){const V={},z=O.attributes;let k=0;const K=B.getAttributes();for(const W in K)if(K[W].location>=0){let Q=z[W];Q===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),V[W]=rt,k++}c.attributes=V,c.attributesNum=k,c.index=q}function M(){const L=c.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function _(L){T(L,0)}function T(L,O){const B=c.newAttributes,q=c.enabledAttributes,V=c.attributeDivisors;B[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),V[L]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),V[L]=O)}function m(){const L=c.newAttributes,O=c.enabledAttributes;for(let B=0,q=O.length;B<q;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function y(L,O,B,q,V,z,k){k===!0?n.vertexAttribIPointer(L,O,B,V,z):n.vertexAttribPointer(L,O,B,q,V,z)}function D(L,O,B,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const V=q.attributes,z=B.getAttributes(),k=O.defaultAttributeValues;for(const K in z){const W=z[K];if(W.location>=0){let N=V[K];if(N===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){const Q=N.normalized,rt=N.itemSize,ft=e.get(N);if(ft===void 0)continue;const ht=ft.buffer,vt=ft.type,et=ft.bytesPerElement,U=i.isWebGL2===!0&&(vt===n.INT||vt===n.UNSIGNED_INT||N.gpuType===Kc);if(N.isInterleavedBufferAttribute){const Y=N.data,C=Y.stride,nt=N.offset;if(Y.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)T(W.location+X,Y.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let X=0;X<W.locationSize;X++)_(W.location+X);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let X=0;X<W.locationSize;X++)y(W.location+X,rt/W.locationSize,vt,Q,C*et,(nt+rt/W.locationSize*X)*et,U)}else{if(N.isInstancedBufferAttribute){for(let Y=0;Y<W.locationSize;Y++)T(W.location+Y,N.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Y=0;Y<W.locationSize;Y++)_(W.location+Y);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Y=0;Y<W.locationSize;Y++)y(W.location+Y,rt/W.locationSize,vt,Q,rt*et,rt/W.locationSize*Y*et,U)}}else if(k!==void 0){const Q=k[K];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(W.location,Q);break;case 3:n.vertexAttrib3fv(W.location,Q);break;case 4:n.vertexAttrib4fv(W.location,Q);break;default:n.vertexAttrib1fv(W.location,Q)}}}}m()}function x(){I();for(const L in a){const O=a[L];for(const B in O){const q=O[B];for(const V in q)S(q[V].object),delete q[V];delete O[B]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const B in O){const q=O[B];for(const V in q)S(q[V].object),delete q[V];delete O[B]}delete a[L.id]}function P(L){for(const O in a){const B=a[O];if(B[L.id]===void 0)continue;const q=B[L.id];for(const V in q)S(q[V].object),delete q[V];delete B[L.id]}}function I(){j(),f=!0,c!==l&&(c=l,g(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:j,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:_,disableUnusedAttributes:m}}function hm(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){n.drawArrays(s,f,h),e.update(h,s,1)}function l(f,h,d){if(d===0)return;let g,S;if(r)g=n,S="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[S](s,f,h,d),e.update(h,s,d)}function c(f,h,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<d;S++)this.render(f[S],h[S]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,d);let S=0;for(let v=0;v<d;v++)S+=h[v];e.update(S,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function dm(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,_=o||t.has("OES_texture_float"),T=M&&_,m=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:m}}function pm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new fi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,g){const S=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!r||S===null||S.length===0||s&&!p)s?f(null):c();else{const E=s?0:i,M=E*4;let _=u.clippingState||null;l.value=_,_=f(S,d,M,g);for(let T=0;T!==M;++T)_[T]=e[T];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,d,g,S){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,S!==!0||p===null){const u=g+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,_=g;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function mm(n){let t=new WeakMap;function e(o,a){return a===So?o.mapping=fr:a===yo&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===So||a===yo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wh(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class gm extends du{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Yl=[.125,.215,.35,.446,.526,.582],mi=20,no=new gm,Kl=new Ot;let io=null,ro=0,so=0;const hi=(1+Math.sqrt(5))/2,$i=1/hi,$l=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,hi,$i),new G(0,hi,-$i),new G($i,0,hi),new G(-$i,0,hi),new G(hi,$i,0),new G(-hi,$i,0)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,ro,so),t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Vr,format:pn,colorSpace:On,depthBuffer:!1},r=jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=vm(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,i,r){const a=new rn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Kl),f.toneMapping=Jn,f.autoClear=!1;const g=new mn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),S=new He(new Gn,g);let v=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,v=!0):(g.color.copy(Kl),v=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const M=this._cubeSize;Ps(r,E*M,u>2?M:0,M,M),f.setRenderTarget(r),v&&f.render(S,a),f.render(t,a)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fr||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,no)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$l[(r-1)%$l.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new He(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mi-1),v=s/S,p=isFinite(s)?1+Math.floor(f*v):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const u=[];let E=0;for(let y=0;y<mi;++y){const D=y/v,x=Math.exp(-D*D/2);u.push(x),y===0?E+=x:y<p&&(E+=2*x)}for(let y=0;y<u.length;y++)u[y]=u[y]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=S,d.mipInt.value=M-i;const _=this._sizeLods[r],T=3*_*(r>M-ir?r-M+ir:0),m=4*(this._cubeSize-_);Ps(e,T,m,3*_,2*_),l.setRenderTarget(e),l.render(h,no)}}function _m(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+Yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ir?l=Yl[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,S=6,v=3,p=2,u=1,E=new Float32Array(v*S*g),M=new Float32Array(p*S*g),_=new Float32Array(u*S*g);for(let m=0;m<g;m++){const y=m%3*2/3-1,D=m>2?0:-1,x=[y,D,0,y+2/3,D,0,y+2/3,D+1,0,y,D,0,y+2/3,D+1,0,y,D+1,0];E.set(x,v*S*m),M.set(d,p*S*m);const A=[m,m,m,m,m,m];_.set(A,u*S*m)}const T=new De;T.setAttribute("position",new Xe(E,v)),T.setAttribute("uv",new Xe(M,p)),T.setAttribute("faceIndex",new Xe(_,u)),t.push(T),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jl(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function vm(n,t,e){const i=new Float32Array(mi),r=new G(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jl(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function xm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===yo,f=l===fr||l===hr;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Zl(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){e===null&&(e=new Zl(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Mm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sm(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const S in d.attributes)t.remove(d.attributes[S]);for(const S in d.morphAttributes){const v=d.morphAttributes[S];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(t.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const S in d)t.update(d[S],n.ARRAY_BUFFER);const g=h.morphAttributes;for(const S in g){const v=g[S];for(let p=0,u=v.length;p<u;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,S=h.attributes.position;let v=0;if(g!==null){const E=g.array;v=g.version;for(let M=0,_=E.length;M<_;M+=3){const T=E[M+0],m=E[M+1],y=E[M+2];d.push(T,m,m,y,y,T)}}else if(S!==void 0){const E=S.array;v=S.version;for(let M=0,_=E.length/3-1;M<_;M+=3){const T=M+0,m=M+1,y=M+2;d.push(T,m,m,y,y,T)}}else return;const p=new(ru(d)?fu:uu)(d,1);p.version=v;const u=s.get(h);u&&t.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function ym(n,t,e,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,S){n.drawElements(s,S,a,g*l),e.update(S,s,1)}function h(g,S,v){if(v===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,S,a,g*l,v),e.update(S,s,v)}function d(g,S,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(g[u]/l,S[u]);else{p.multiDrawElementsWEBGL(s,S,0,a,g,0,v);let u=0;for(let E=0;E<v;E++)u+=S[E];e.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function Em(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Tm(n,t){return n[0]-t[0]}function Am(n,t){return Math.abs(t[1])-Math.abs(n[1])}function bm(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=S!==void 0?S.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let O=function(){j.dispose(),s.delete(f),f.removeEventListener("dispose",O)};var g=O;p!==void 0&&p.texture.dispose();const M=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,m=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let x=0;M===!0&&(x=1),_===!0&&(x=2),T===!0&&(x=3);let A=f.attributes.position.count*x,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const I=new Float32Array(A*P*4*v),j=new ou(I,A,P,v);j.type=Kn,j.needsUpdate=!0;const L=x*4;for(let B=0;B<v;B++){const q=m[B],V=y[B],z=D[B],k=A*P*4*B;for(let K=0;K<q.count;K++){const W=K*L;M===!0&&(o.fromBufferAttribute(q,K),I[k+W+0]=o.x,I[k+W+1]=o.y,I[k+W+2]=o.z,I[k+W+3]=0),_===!0&&(o.fromBufferAttribute(V,K),I[k+W+4]=o.x,I[k+W+5]=o.y,I[k+W+6]=o.z,I[k+W+7]=0),T===!0&&(o.fromBufferAttribute(z,K),I[k+W+8]=o.x,I[k+W+9]=o.y,I[k+W+10]=o.z,I[k+W+11]=z.itemSize===4?o.w:1)}}p={count:v,texture:j,size:new Kt(A,P)},s.set(f,p),f.addEventListener("dispose",O)}let u=0;for(let M=0;M<d.length;M++)u+=d[M];const E=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const S=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==S){v=[];for(let _=0;_<S;_++)v[_]=[_,0];i[f.id]=v}for(let _=0;_<S;_++){const T=v[_];T[0]=_,T[1]=d[_]}v.sort(Am);for(let _=0;_<8;_++)_<S&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Tm);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let E=0;for(let _=0;_<8;_++){const T=a[_],m=T[0],y=T[1];m!==Number.MAX_SAFE_INTEGER&&y?(p&&f.getAttribute("morphTarget"+_)!==p[m]&&f.setAttribute("morphTarget"+_,p[m]),u&&f.getAttribute("morphNormal"+_)!==u[m]&&f.setAttribute("morphNormal"+_,u[m]),r[_]=y,E+=y):(p&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),u&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),r[_]=0)}const M=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function wm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class _u extends We{constructor(t,e,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:vi,f!==vi&&f!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vi&&(i=Yn),i===void 0&&f===dr&&(i=_i),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vu=new We,xu=new _u(1,1);xu.compareFunction=nu;const Mu=new ou,Su=new uh,yu=new pu,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _a(n,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),ve(e,i)}}function Um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;ic.set(i),n.uniformMatrix3fv(this.addr,!1,ic),ve(e,i)}}function Im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;nc.set(i),n.uniformMatrix4fv(this.addr,!1,nc),ve(e,i)}}function Nm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function zm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function Hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function km(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?xu:vu;e.setTexture2D(t||s,r)}function Wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Su,r)}function Xm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||yu,r)}function qm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Mu,r)}function Ym(n){switch(n){case 5126:return Rm;case 35664:return Cm;case 35665:return Lm;case 35666:return Pm;case 35674:return Dm;case 35675:return Um;case 35676:return Im;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Gm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Km(n,t){n.uniform1fv(this.addr,t)}function $m(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Zm(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function jm(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Jm(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qm(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function t0(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function e0(n,t){n.uniform1iv(this.addr,t)}function n0(n,t){n.uniform2iv(this.addr,t)}function i0(n,t){n.uniform3iv(this.addr,t)}function r0(n,t){n.uniform4iv(this.addr,t)}function s0(n,t){n.uniform1uiv(this.addr,t)}function a0(n,t){n.uniform2uiv(this.addr,t)}function o0(n,t){n.uniform3uiv(this.addr,t)}function l0(n,t){n.uniform4uiv(this.addr,t)}function c0(n,t,e){const i=this.cache,r=t.length,s=_a(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vu,s[o])}function u0(n,t,e){const i=this.cache,r=t.length,s=_a(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Su,s[o])}function f0(n,t,e){const i=this.cache,r=t.length,s=_a(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||yu,s[o])}function h0(n,t,e){const i=this.cache,r=t.length,s=_a(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Mu,s[o])}function d0(n){switch(n){case 5126:return Km;case 35664:return $m;case 35665:return Zm;case 35666:return jm;case 35674:return Jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return h0}}class p0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class m0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function sc(n,t){n.seq.push(t),n.map[t.id]=t}function _0(n,t,e){const i=n.name,r=i.length;for(ao.lastIndex=0;;){const s=ao.exec(i),o=ao.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sc(e,c===void 0?new p0(a,n,t):new m0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new g0(a),sc(e,h)),e=h}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);_0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ac(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const v0=37297;let x0=0;function M0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function S0(n){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(n);let i;switch(t===e?i="":t===sa&&e===ra?i="LinearDisplayP3ToLinearSRGB":t===ra&&e===sa&&(i="LinearSRGBToLinearDisplayP3"),n){case On:case pa:return[i,"LinearTransferOETF"];case ye:case No:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function oc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+M0(n.getShaderSource(t),o)}else return r}function y0(n,t){const e=S0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function E0(n,t){let e;switch(t){case Df:e="Linear";break;case Uf:e="Reinhard";break;case If:e="OptimizedCineon";break;case Nf:e="ACESFilmic";break;case Of:e="AgX";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function T0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function A0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rr).join(`
`)}function b0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function w0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function rr(n){return n!==""}function lc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(R0,L0)}const C0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function L0(n,t){let e=zt[t];if(e===void 0){const i=C0.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(P0,D0)}function D0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===af?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function F0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function O0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function B0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=U0(e),c=I0(e),f=N0(e),h=F0(e),d=O0(e),g=e.isWebGL2?"":T0(e),S=A0(e),v=b0(s),p=r.createProgram();let u,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rr).join(`
`),u.length>0&&(u+=`
`),E=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rr).join(`
`),E.length>0&&(E+=`
`)):(u=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),E=[g,fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Co(o),o=lc(o,e),o=cc(o,e),a=Co(a),a=lc(a,e),a=cc(a,e),o=uc(o),a=uc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const _=M+u+o,T=M+E+a,m=ac(r,r.VERTEX_SHADER,_),y=ac(r,r.FRAGMENT_SHADER,T);r.attachShader(p,m),r.attachShader(p,y),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(I){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(m).trim(),O=r.getShaderInfoLog(y).trim();let B=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,m,y);else{const V=oc(r,m,"vertex"),z=oc(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+V+`
`+z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||O==="")&&(q=!1);q&&(I.diagnostics={runnable:B,programLog:j,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:E}})}r.deleteShader(m),r.deleteShader(y),x=new Qs(r,p),A=w0(r,p)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,v0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=m,this.fragmentShader=y,this}let z0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new H0(t),e.set(t,i)),i}}class H0{constructor(t){this.id=z0++,this.code=t,this.usedTimes=0}}function V0(n,t,e,i,r,s,o){const a=new lu,l=new G0,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function p(x,A,P,I,j){const L=I.fog,O=j.geometry,B=x.isMeshStandardMaterial?I.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),V=q&&q.mapping===da?q.image.height:null,z=S[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const k=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=k!==void 0?k.length:0;let W=0;O.morphAttributes.position!==void 0&&(W=1),O.morphAttributes.normal!==void 0&&(W=2),O.morphAttributes.color!==void 0&&(W=3);let N,Q,rt,ft;if(z){const Ue=vn[z];N=Ue.vertexShader,Q=Ue.fragmentShader}else N=x.vertexShader,Q=x.fragmentShader,l.update(x),rt=l.getVertexShaderID(x),ft=l.getFragmentShaderID(x);const ht=n.getRenderTarget(),vt=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,U=!!x.map,Y=!!x.matcap,C=!!q,nt=!!x.aoMap,X=!!x.lightMap,it=!!x.bumpMap,st=!!x.normalMap,Et=!!x.displacementMap,Mt=!!x.emissiveMap,R=!!x.metalnessMap,b=!!x.roughnessMap,Z=x.anisotropy>0,ct=x.clearcoat>0,lt=x.iridescence>0,ut=x.sheen>0,Tt=x.transmission>0,_t=Z&&!!x.anisotropyMap,St=ct&&!!x.clearcoatMap,Lt=ct&&!!x.clearcoatNormalMap,Gt=ct&&!!x.clearcoatRoughnessMap,ot=lt&&!!x.iridescenceMap,Zt=lt&&!!x.iridescenceThicknessMap,qt=ut&&!!x.sheenColorMap,Ut=ut&&!!x.sheenRoughnessMap,wt=!!x.specularMap,yt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,$t=Tt&&!!x.transmissionMap,ce=Tt&&!!x.thicknessMap,kt=!!x.gradientMap,dt=!!x.alphaMap,F=x.alphaTest>0,mt=!!x.alphaHash,gt=!!x.extensions,Pt=!!O.attributes.uv1,Rt=!!O.attributes.uv2,Qt=!!O.attributes.uv3;let te=Jn;return x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:f,shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:N,fragmentShader:Q,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:et,instancing:vt,instancingColor:vt&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:On,map:U,matcap:Y,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:X,bumpMap:it,normalMap:st,displacementMap:d&&Et,emissiveMap:Mt,normalMapObjectSpace:st&&x.normalMapType===Zf,normalMapTangentSpace:st&&x.normalMapType===$f,metalnessMap:R,roughnessMap:b,anisotropy:Z,anisotropyMap:_t,clearcoat:ct,clearcoatMap:St,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Gt,iridescence:lt,iridescenceMap:ot,iridescenceThicknessMap:Zt,sheen:ut,sheenColorMap:qt,sheenRoughnessMap:Ut,specularMap:wt,specularColorMap:yt,specularIntensityMap:Bt,transmission:Tt,transmissionMap:$t,thicknessMap:ce,gradientMap:kt,opaque:x.transparent===!1&&x.blending===ar,alphaMap:dt,alphaTest:F,alphaHash:mt,combine:x.combine,mapUv:U&&v(x.map.channel),aoMapUv:nt&&v(x.aoMap.channel),lightMapUv:X&&v(x.lightMap.channel),bumpMapUv:it&&v(x.bumpMap.channel),normalMapUv:st&&v(x.normalMap.channel),displacementMapUv:Et&&v(x.displacementMap.channel),emissiveMapUv:Mt&&v(x.emissiveMap.channel),metalnessMapUv:R&&v(x.metalnessMap.channel),roughnessMapUv:b&&v(x.roughnessMap.channel),anisotropyMapUv:_t&&v(x.anisotropyMap.channel),clearcoatMapUv:St&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(x.sheenRoughnessMap.channel),specularMapUv:wt&&v(x.specularMap.channel),specularColorMapUv:yt&&v(x.specularColorMap.channel),specularIntensityMapUv:Bt&&v(x.specularIntensityMap.channel),transmissionMapUv:$t&&v(x.transmissionMap.channel),thicknessMapUv:ce&&v(x.thicknessMap.channel),alphaMapUv:dt&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(st||Z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Rt,vertexUv3s:Qt,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(U||dt),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:U&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:gt&&x.extensions.derivatives===!0,extensionFragDepth:gt&&x.extensions.fragDepth===!0,extensionDrawBuffers:gt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(E(A,x),M(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function E(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function _(x){const A=S[x.type];let P;if(A){const I=vn[A];P=Eh.clone(I.uniforms)}else P=x.uniforms;return P}function T(x,A){let P;for(let I=0,j=c.length;I<j;I++){const L=c[I];if(L.cacheKey===A){P=L,++P.usedTimes;break}}return P===void 0&&(P=new B0(n,A,x,s),c.push(P)),P}function m(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function y(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:_,acquireProgram:T,releaseProgram:m,releaseShaderCache:y,programs:c,dispose:D}}function k0(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function W0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,g,S,v,p){let u=n[t];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:S,renderOrder:h.renderOrder,z:v,group:p},n[t]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=S,u.renderOrder=h.renderOrder,u.z=v,u.group=p),t++,u}function a(h,d,g,S,v,p){const u=o(h,d,g,S,v,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):e.push(u)}function l(h,d,g,S,v,p){const u=o(h,d,g,S,v,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):e.unshift(u)}function c(h,d){e.length>1&&e.sort(h||W0),i.length>1&&i.sort(d||hc),r.length>1&&r.sort(d||hc)}function f(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function X0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new dc,n.set(i,[o])):r>=s.length?(o=new dc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function q0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Ot};break;case"SpotLight":e={position:new G,direction:new G,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function Y0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let K0=0;function $0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Z0(n,t){const e=new q0,i=Y0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new G);const s=new G,o=new le,a=new le;function l(f,h){let d=0,g=0,S=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let v=0,p=0,u=0,E=0,M=0,_=0,T=0,m=0,y=0,D=0,x=0;f.sort($0);const A=h===!0?Math.PI:1;for(let I=0,j=f.length;I<j;I++){const L=f[I],O=L.color,B=L.intensity,q=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*B*A,g+=O.g*B*A,S+=O.b*B*A;else if(L.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(L.sh.coefficients[z],B);x++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const k=L.shadow,K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.directionalShadow[v]=K,r.directionalShadowMap[v]=V,r.directionalShadowMatrix[v]=L.shadow.matrix,_++}r.directional[v]=z,v++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(O).multiplyScalar(B*A),z.distance=q,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,r.spot[u]=z;const k=L.shadow;if(L.map&&(r.spotLightMap[y]=L.map,y++,k.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[u]=k.matrix,L.castShadow){const K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=V,m++}u++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=z,E++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*A),z.distance=L.distance,z.decay=L.decay,L.castShadow){const k=L.shadow,K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=z,p++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(B*A),z.groundColor.copy(L.groundColor).multiplyScalar(B*A),r.hemi[M]=z,M++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=S;const P=r.hash;(P.directionalLength!==v||P.pointLength!==p||P.spotLength!==u||P.rectAreaLength!==E||P.hemiLength!==M||P.numDirectionalShadows!==_||P.numPointShadows!==T||P.numSpotShadows!==m||P.numSpotMaps!==y||P.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=E,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=m,r.spotShadowMap.length=m,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=m+y-D,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=x,P.directionalLength=v,P.pointLength=p,P.spotLength=u,P.rectAreaLength=E,P.hemiLength=M,P.numDirectionalShadows=_,P.numPointShadows=T,P.numSpotShadows=m,P.numSpotMaps=y,P.numLightProbes=x,r.version=K0++)}function c(f,h){let d=0,g=0,S=0,v=0,p=0;const u=h.matrixWorldInverse;for(let E=0,M=f.length;E<M;E++){const _=f[E];if(_.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),d++}else if(_.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),S++}else if(_.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),g++}else if(_.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function pc(n,t){const e=new Z0(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function j0(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new pc(n,t),e.set(s,[l])):o>=a.length?(l=new pc(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class J0 extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q0 extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`;function ng(n,t,e){let i=new mu;const r=new Kt,s=new Kt,o=new we,a=new J0({depthPacking:Kf}),l=new Q0,c={},f=e.maxTextureSize,h={[ni]:ke,[ke]:ni,[sn]:sn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const S=new De;S.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(S,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let u=this.type;this.render=function(m,y,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||m.length===0)return;const x=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(jn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const j=u!==Ln&&this.type===Ln,L=u===Ln&&this.type!==Ln;for(let O=0,B=m.length;O<B;O++){const q=m[O],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const z=V.getFrameExtents();if(r.multiply(z),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,V.mapSize.y=s.y)),V.map===null||j===!0||L===!0){const K=this.type!==Ln?{minFilter:be,magFilter:be}:{};V.map!==null&&V.map.dispose(),V.map=new yi(r.x,r.y,K),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const k=V.getViewportCount();for(let K=0;K<k;K++){const W=V.getViewport(K);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),I.viewport(o),V.updateMatrices(q,K),i=V.getFrustum(),_(y,D,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&E(V,D),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(x,A,P)};function E(m,y){const D=t.update(v);d.defines.VSM_SAMPLES!==m.blurSamples&&(d.defines.VSM_SAMPLES=m.blurSamples,g.defines.VSM_SAMPLES=m.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),m.mapPass===null&&(m.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=m.map.texture,d.uniforms.resolution.value=m.mapSize,d.uniforms.radius.value=m.radius,n.setRenderTarget(m.mapPass),n.clear(),n.renderBufferDirect(y,null,D,d,v,null),g.uniforms.shadow_pass.value=m.mapPass.texture,g.uniforms.resolution.value=m.mapSize,g.uniforms.radius.value=m.radius,n.setRenderTarget(m.map),n.clear(),n.renderBufferDirect(y,null,D,g,v,null)}function M(m,y,D,x){let A=null;const P=D.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(P!==void 0)A=P;else if(A=D.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=A.uuid,j=y.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let O=L[j];O===void 0&&(O=A.clone(),L[j]=O,y.addEventListener("dispose",T)),A=O}if(A.visible=y.visible,A.wireframe=y.wireframe,x===Ln?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:h[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,D.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=n.properties.get(A);I.light=D}return A}function _(m,y,D,x,A){if(m.visible===!1)return;if(m.layers.test(y.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&A===Ln)&&(!m.frustumCulled||i.intersectsObject(m))){m.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,m.matrixWorld);const j=t.update(m),L=m.material;if(Array.isArray(L)){const O=j.groups;for(let B=0,q=O.length;B<q;B++){const V=O[B],z=L[V.materialIndex];if(z&&z.visible){const k=M(m,z,x,A);m.onBeforeShadow(n,m,y,D,j,k,V),n.renderBufferDirect(D,null,j,k,m,V),m.onAfterShadow(n,m,y,D,j,k,V)}}}else if(L.visible){const O=M(m,L,x,A);m.onBeforeShadow(n,m,y,D,j,O,null),n.renderBufferDirect(D,null,j,O,m,null),m.onAfterShadow(n,m,y,D,j,O,null)}}const I=m.children;for(let j=0,L=I.length;j<L;j++)_(I[j],y,D,x,A)}function T(m){m.target.removeEventListener("dispose",T);for(const D in c){const x=c[D],A=m.target.uuid;A in x&&(x[A].dispose(),delete x[A])}}}function ig(n,t,e){const i=e.isWebGL2;function r(){let F=!1;const mt=new we;let gt=null;const Pt=new we(0,0,0,0);return{setMask:function(Rt){gt!==Rt&&!F&&(n.colorMask(Rt,Rt,Rt,Rt),gt=Rt)},setLocked:function(Rt){F=Rt},setClear:function(Rt,Qt,te,xe,Ue){Ue===!0&&(Rt*=xe,Qt*=xe,te*=xe),mt.set(Rt,Qt,te,xe),Pt.equals(mt)===!1&&(n.clearColor(Rt,Qt,te,xe),Pt.copy(mt))},reset:function(){F=!1,gt=null,Pt.set(-1,0,0,0)}}}function s(){let F=!1,mt=null,gt=null,Pt=null;return{setTest:function(Rt){Rt?et(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Rt){mt!==Rt&&!F&&(n.depthMask(Rt),mt=Rt)},setFunc:function(Rt){if(gt!==Rt){switch(Rt){case Ef:n.depthFunc(n.NEVER);break;case Tf:n.depthFunc(n.ALWAYS);break;case Af:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case bf:n.depthFunc(n.EQUAL);break;case wf:n.depthFunc(n.GEQUAL);break;case Rf:n.depthFunc(n.GREATER);break;case Cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Rt}},setLocked:function(Rt){F=Rt},setClear:function(Rt){Pt!==Rt&&(n.clearDepth(Rt),Pt=Rt)},reset:function(){F=!1,mt=null,gt=null,Pt=null}}}function o(){let F=!1,mt=null,gt=null,Pt=null,Rt=null,Qt=null,te=null,xe=null,Ue=null;return{setTest:function(ee){F||(ee?et(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(ee){mt!==ee&&!F&&(n.stencilMask(ee),mt=ee)},setFunc:function(ee,Ie,_n){(gt!==ee||Pt!==Ie||Rt!==_n)&&(n.stencilFunc(ee,Ie,_n),gt=ee,Pt=Ie,Rt=_n)},setOp:function(ee,Ie,_n){(Qt!==ee||te!==Ie||xe!==_n)&&(n.stencilOp(ee,Ie,_n),Qt=ee,te=Ie,xe=_n)},setLocked:function(ee){F=ee},setClear:function(ee){Ue!==ee&&(n.clearStencil(ee),Ue=ee)},reset:function(){F=!1,mt=null,gt=null,Pt=null,Rt=null,Qt=null,te=null,xe=null,Ue=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},g={},S=new WeakMap,v=[],p=null,u=!1,E=null,M=null,_=null,T=null,m=null,y=null,D=null,x=new Ot(0,0,0),A=0,P=!1,I=null,j=null,L=null,O=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=z>=2);let K=null,W={};const N=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),rt=new we().fromArray(N),ft=new we().fromArray(Q);function ht(F,mt,gt,Pt){const Rt=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(F,Qt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<gt;te++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(mt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(mt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Qt}const vt={};vt[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(vt[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),et(n.DEPTH_TEST),l.setFunc(na),Mt(!1),R(jo),et(n.CULL_FACE),st(jn);function et(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function U(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Y(F,mt){return g[F]!==mt?(n.bindFramebuffer(F,mt),g[F]=mt,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=mt),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=mt)),!0):!1}function C(F,mt){let gt=v,Pt=!1;if(F)if(gt=S.get(mt),gt===void 0&&(gt=[],S.set(mt,gt)),F.isWebGLMultipleRenderTargets){const Rt=F.texture;if(gt.length!==Rt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=Rt.length;Qt<te;Qt++)gt[Qt]=n.COLOR_ATTACHMENT0+Qt;gt.length=Rt.length,Pt=!0}}else gt[0]!==n.COLOR_ATTACHMENT0&&(gt[0]=n.COLOR_ATTACHMENT0,Pt=!0);else gt[0]!==n.BACK&&(gt[0]=n.BACK,Pt=!0);Pt&&(e.isWebGL2?n.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function nt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const X={[pi]:n.FUNC_ADD,[lf]:n.FUNC_SUBTRACT,[cf]:n.FUNC_REVERSE_SUBTRACT};if(i)X[tl]=n.MIN,X[el]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(X[tl]=F.MIN_EXT,X[el]=F.MAX_EXT)}const it={[uf]:n.ZERO,[ff]:n.ONE,[hf]:n.SRC_COLOR,[xo]:n.SRC_ALPHA,[vf]:n.SRC_ALPHA_SATURATE,[gf]:n.DST_COLOR,[pf]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[Mo]:n.ONE_MINUS_SRC_ALPHA,[_f]:n.ONE_MINUS_DST_COLOR,[mf]:n.ONE_MINUS_DST_ALPHA,[xf]:n.CONSTANT_COLOR,[Mf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(F,mt,gt,Pt,Rt,Qt,te,xe,Ue,ee){if(F===jn){u===!0&&(U(n.BLEND),u=!1);return}if(u===!1&&(et(n.BLEND),u=!0),F!==of){if(F!==E||ee!==P){if((M!==pi||m!==pi)&&(n.blendEquation(n.FUNC_ADD),M=pi,m=pi),ee)switch(F){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vo:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,T=null,y=null,D=null,x.set(0,0,0),A=0,E=F,P=ee}return}Rt=Rt||mt,Qt=Qt||gt,te=te||Pt,(mt!==M||Rt!==m)&&(n.blendEquationSeparate(X[mt],X[Rt]),M=mt,m=Rt),(gt!==_||Pt!==T||Qt!==y||te!==D)&&(n.blendFuncSeparate(it[gt],it[Pt],it[Qt],it[te]),_=gt,T=Pt,y=Qt,D=te),(xe.equals(x)===!1||Ue!==A)&&(n.blendColor(xe.r,xe.g,xe.b,Ue),x.copy(xe),A=Ue),E=F,P=!1}function Et(F,mt){F.side===sn?U(n.CULL_FACE):et(n.CULL_FACE);let gt=F.side===ke;mt&&(gt=!gt),Mt(gt),F.blending===ar&&F.transparent===!1?st(jn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Pt=F.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(F){I!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),I=F)}function R(F){F!==rf?(et(n.CULL_FACE),F!==j&&(F===jo?n.cullFace(n.BACK):F===sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),j=F}function b(F){F!==L&&(V&&n.lineWidth(F),L=F)}function Z(F,mt,gt){F?(et(n.POLYGON_OFFSET_FILL),(O!==mt||B!==gt)&&(n.polygonOffset(mt,gt),O=mt,B=gt)):U(n.POLYGON_OFFSET_FILL)}function ct(F){F?et(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function lt(F){F===void 0&&(F=n.TEXTURE0+q-1),K!==F&&(n.activeTexture(F),K=F)}function ut(F,mt,gt){gt===void 0&&(K===null?gt=n.TEXTURE0+q-1:gt=K);let Pt=W[gt];Pt===void 0&&(Pt={type:void 0,texture:void 0},W[gt]=Pt),(Pt.type!==F||Pt.texture!==mt)&&(K!==gt&&(n.activeTexture(gt),K=gt),n.bindTexture(F,mt||vt[F]),Pt.type=F,Pt.texture=mt)}function Tt(){const F=W[K];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _t(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(F){rt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function $t(F){ft.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ft.copy(F))}function ce(F,mt){let gt=h.get(mt);gt===void 0&&(gt=new WeakMap,h.set(mt,gt));let Pt=gt.get(F);Pt===void 0&&(Pt=n.getUniformBlockIndex(mt,F.name),gt.set(F,Pt))}function kt(F,mt){const Pt=h.get(mt).get(F);f.get(mt)!==Pt&&(n.uniformBlockBinding(mt,Pt,F.__bindingPointIndex),f.set(mt,Pt))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,W={},g={},S=new WeakMap,v=[],p=null,u=!1,E=null,M=null,_=null,T=null,m=null,y=null,D=null,x=new Ot(0,0,0),A=0,P=!1,I=null,j=null,L=null,O=null,B=null,rt.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:et,disable:U,bindFramebuffer:Y,drawBuffers:C,useProgram:nt,setBlending:st,setMaterial:Et,setFlipSided:Mt,setCullFace:R,setLineWidth:b,setPolygonOffset:Z,setScissorTest:ct,activeTexture:lt,bindTexture:ut,unbindTexture:Tt,compressedTexImage2D:_t,compressedTexImage3D:St,texImage2D:wt,texImage3D:yt,updateUBOMapping:ce,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:Ut,texSubImage2D:Lt,texSubImage3D:Gt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Zt,scissor:Bt,viewport:$t,reset:dt}}function rg(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,b){return g?new OffscreenCanvas(R,b):oa("canvas")}function v(R,b,Z,ct){let lt=1;if((R.width>ct||R.height>ct)&&(lt=ct/Math.max(R.width,R.height)),lt<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ut=b?Ro:Math.floor,Tt=ut(lt*R.width),_t=ut(lt*R.height);h===void 0&&(h=S(Tt,_t));const St=Z?S(Tt,_t):h;return St.width=Tt,St.height=_t,St.getContext("2d").drawImage(R,0,0,Tt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Tt+"x"+_t+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Ll(R.width)&&Ll(R.height)}function u(R){return a?!1:R.wrapS!==dn||R.wrapT!==dn||R.minFilter!==be&&R.minFilter!==nn}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==be&&R.minFilter!==nn}function M(R){n.generateMipmap(R)}function _(R,b,Z,ct,lt=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut=b;if(b===n.RED&&(Z===n.FLOAT&&(ut=n.R32F),Z===n.HALF_FLOAT&&(ut=n.R16F),Z===n.UNSIGNED_BYTE&&(ut=n.R8)),b===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ut=n.R8UI),Z===n.UNSIGNED_SHORT&&(ut=n.R16UI),Z===n.UNSIGNED_INT&&(ut=n.R32UI),Z===n.BYTE&&(ut=n.R8I),Z===n.SHORT&&(ut=n.R16I),Z===n.INT&&(ut=n.R32I)),b===n.RG&&(Z===n.FLOAT&&(ut=n.RG32F),Z===n.HALF_FLOAT&&(ut=n.RG16F),Z===n.UNSIGNED_BYTE&&(ut=n.RG8)),b===n.RGBA){const Tt=lt?ia:jt.getTransfer(ct);Z===n.FLOAT&&(ut=n.RGBA32F),Z===n.HALF_FLOAT&&(ut=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ut=Tt===ne?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function T(R,b,Z){return E(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==be&&R.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function m(R){return R===be||R===nl||R===Da?n.NEAREST:n.LINEAR}function y(R){const b=R.target;b.removeEventListener("dispose",y),x(b),b.isVideoTexture&&f.delete(b)}function D(R){const b=R.target;b.removeEventListener("dispose",D),P(b)}function x(R){const b=i.get(R);if(b.__webglInit===void 0)return;const Z=R.source,ct=d.get(Z);if(ct){const lt=ct[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(R),Object.keys(ct).length===0&&d.delete(Z)}i.remove(R)}function A(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const Z=R.source,ct=d.get(Z);delete ct[b.__cacheKey],o.memory.textures--}function P(R){const b=R.texture,Z=i.get(R),ct=i.get(b);if(ct.__webglTexture!==void 0&&(n.deleteTexture(ct.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(Z.__webglFramebuffer[lt]))for(let ut=0;ut<Z.__webglFramebuffer[lt].length;ut++)n.deleteFramebuffer(Z.__webglFramebuffer[lt][ut]);else n.deleteFramebuffer(Z.__webglFramebuffer[lt]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[lt])}else{if(Array.isArray(Z.__webglFramebuffer))for(let lt=0;lt<Z.__webglFramebuffer.length;lt++)n.deleteFramebuffer(Z.__webglFramebuffer[lt]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let lt=0;lt<Z.__webglColorRenderbuffer.length;lt++)Z.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[lt]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let lt=0,ut=b.length;lt<ut;lt++){const Tt=i.get(b[lt]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(b[lt])}i.remove(b),i.remove(R)}let I=0;function j(){I=0}function L(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function B(R,b){const Z=i.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Z,R,b);return}}e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+b)}function q(R,b){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){rt(Z,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+b)}function V(R,b){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){rt(Z,R,b);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+b)}function z(R,b){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ft(Z,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+b)}const k={[Eo]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},K={[be]:n.NEAREST,[nl]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Bf]:n.LINEAR_MIPMAP_NEAREST,[Hr]:n.LINEAR_MIPMAP_LINEAR},W={[jf]:n.NEVER,[ih]:n.ALWAYS,[Jf]:n.LESS,[nu]:n.LEQUAL,[Qf]:n.EQUAL,[nh]:n.GEQUAL,[th]:n.GREATER,[eh]:n.NOTEQUAL};function N(R,b,Z){if(Z?(n.texParameteri(R,n.TEXTURE_WRAP_S,k[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,k[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,k[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==dn||b.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,m(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,m(b.minFilter)),b.minFilter!==be&&b.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===be||b.minFilter!==Da&&b.minFilter!==Hr||b.type===Kn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Vr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Q(R,b){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",y));const ct=b.source;let lt=d.get(ct);lt===void 0&&(lt={},d.set(ct,lt));const ut=O(b);if(ut!==R.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),lt[ut].usedTimes++;const Tt=lt[R.__cacheKey];Tt!==void 0&&(lt[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&A(b)),R.__cacheKey=ut,R.__webglTexture=lt[ut].texture}return Z}function rt(R,b,Z){let ct=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=n.TEXTURE_3D);const lt=Q(R,b),ut=b.source;e.bindTexture(ct,R.__webglTexture,n.TEXTURE0+Z);const Tt=i.get(ut);if(ut.version!==Tt.__version||lt===!0){e.activeTexture(n.TEXTURE0+Z);const _t=jt.getPrimaries(jt.workingColorSpace),St=b.colorSpace===an?null:jt.getPrimaries(b.colorSpace),Lt=b.colorSpace===an||_t===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Gt=u(b)&&p(b.image)===!1;let ot=v(b.image,Gt,!1,r.maxTextureSize);ot=Mt(b,ot);const Zt=p(ot)||a,qt=s.convert(b.format,b.colorSpace);let Ut=s.convert(b.type),wt=_(b.internalFormat,qt,Ut,b.colorSpace,b.isVideoTexture);N(ct,b,Zt);let yt;const Bt=b.mipmaps,$t=a&&b.isVideoTexture!==!0&&wt!==tu,ce=Tt.__version===void 0||lt===!0,kt=T(b,ot,Zt);if(b.isDepthTexture)wt=n.DEPTH_COMPONENT,a?b.type===Kn?wt=n.DEPTH_COMPONENT32F:b.type===Yn?wt=n.DEPTH_COMPONENT24:b.type===_i?wt=n.DEPTH24_STENCIL8:wt=n.DEPTH_COMPONENT16:b.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===vi&&wt===n.DEPTH_COMPONENT&&b.type!==Io&&b.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yn,Ut=s.convert(b.type)),b.format===dr&&wt===n.DEPTH_COMPONENT&&(wt=n.DEPTH_STENCIL,b.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=_i,Ut=s.convert(b.type))),ce&&($t?e.texStorage2D(n.TEXTURE_2D,1,wt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,qt,Ut,null));else if(b.isDataTexture)if(Bt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,F=Bt.length;dt<F;dt++)yt=Bt[dt],$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,qt,Ut,yt.data);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,qt,Ut,ot.data)):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,qt,Ut,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,wt,Bt[0].width,Bt[0].height,ot.depth);for(let dt=0,F=Bt.length;dt<F;dt++)yt=Bt[dt],b.format!==pn?qt!==null?$t?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,yt.width,yt.height,ot.depth,qt,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,wt,yt.width,yt.height,ot.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,yt.width,yt.height,ot.depth,qt,Ut,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,wt,yt.width,yt.height,ot.depth,0,qt,Ut,yt.data)}else{$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,F=Bt.length;dt<F;dt++)yt=Bt[dt],b.format!==pn?qt!==null?$t?e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,yt.width,yt.height,qt,Ut,yt.data):e.texImage2D(n.TEXTURE_2D,dt,wt,yt.width,yt.height,0,qt,Ut,yt.data)}else if(b.isDataArrayTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,qt,Ut,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,ot.width,ot.height,ot.depth,0,qt,Ut,ot.data);else if(b.isData3DTexture)$t?(ce&&e.texStorage3D(n.TEXTURE_3D,kt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,qt,Ut,ot.data)):e.texImage3D(n.TEXTURE_3D,0,wt,ot.width,ot.height,ot.depth,0,qt,Ut,ot.data);else if(b.isFramebufferTexture){if(ce)if($t)e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height);else{let dt=ot.width,F=ot.height;for(let mt=0;mt<kt;mt++)e.texImage2D(n.TEXTURE_2D,mt,wt,dt,F,0,qt,Ut,null),dt>>=1,F>>=1}}else if(Bt.length>0&&Zt){$t&&ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,Bt[0].width,Bt[0].height);for(let dt=0,F=Bt.length;dt<F;dt++)yt=Bt[dt],$t?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,qt,Ut,yt):e.texImage2D(n.TEXTURE_2D,dt,wt,qt,Ut,yt);b.generateMipmaps=!1}else $t?(ce&&e.texStorage2D(n.TEXTURE_2D,kt,wt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,qt,Ut,ot)):e.texImage2D(n.TEXTURE_2D,0,wt,qt,Ut,ot);E(b,Zt)&&M(ct),Tt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ft(R,b,Z){if(b.image.length!==6)return;const ct=Q(R,b),lt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Z);const ut=i.get(lt);if(lt.version!==ut.__version||ct===!0){e.activeTexture(n.TEXTURE0+Z);const Tt=jt.getPrimaries(jt.workingColorSpace),_t=b.colorSpace===an?null:jt.getPrimaries(b.colorSpace),St=b.colorSpace===an||Tt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,Gt=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let dt=0;dt<6;dt++)!Lt&&!Gt?ot[dt]=v(b.image[dt],!1,!0,r.maxCubemapSize):ot[dt]=Gt?b.image[dt].image:b.image[dt],ot[dt]=Mt(b,ot[dt]);const Zt=ot[0],qt=p(Zt)||a,Ut=s.convert(b.format,b.colorSpace),wt=s.convert(b.type),yt=_(b.internalFormat,Ut,wt,b.colorSpace),Bt=a&&b.isVideoTexture!==!0,$t=ut.__version===void 0||ct===!0;let ce=T(b,Zt,qt);N(n.TEXTURE_CUBE_MAP,b,qt);let kt;if(Lt){Bt&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,yt,Zt.width,Zt.height);for(let dt=0;dt<6;dt++){kt=ot[dt].mipmaps;for(let F=0;F<kt.length;F++){const mt=kt[F];b.format!==pn?Ut!==null?Bt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,mt.width,mt.height,Ut,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,mt.width,mt.height,Ut,wt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,yt,mt.width,mt.height,0,Ut,wt,mt.data)}}}else{kt=b.mipmaps,Bt&&$t&&(kt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,yt,ot[0].width,ot[0].height));for(let dt=0;dt<6;dt++)if(Gt){Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ot[dt].width,ot[dt].height,Ut,wt,ot[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,ot[dt].width,ot[dt].height,0,Ut,wt,ot[dt].data);for(let F=0;F<kt.length;F++){const gt=kt[F].image[dt].image;Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,gt.width,gt.height,Ut,wt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,yt,gt.width,gt.height,0,Ut,wt,gt.data)}}else{Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ut,wt,ot[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,Ut,wt,ot[dt]);for(let F=0;F<kt.length;F++){const mt=kt[F];Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,Ut,wt,mt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,yt,Ut,wt,mt.image[dt])}}}E(b,qt)&&M(n.TEXTURE_CUBE_MAP),ut.__version=lt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ht(R,b,Z,ct,lt,ut){const Tt=s.convert(Z.format,Z.colorSpace),_t=s.convert(Z.type),St=_(Z.internalFormat,Tt,_t,Z.colorSpace);if(!i.get(b).__hasExternalTextures){const Gt=Math.max(1,b.width>>ut),ot=Math.max(1,b.height>>ut);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,ut,St,Gt,ot,b.depth,0,Tt,_t,null):e.texImage2D(lt,ut,St,Gt,ot,0,Tt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,lt,i.get(Z).__webglTexture,0,it(b)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,lt,i.get(Z).__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(R,b,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ct=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||st(b)){const lt=b.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Kn?ct=n.DEPTH_COMPONENT32F:lt.type===Yn&&(ct=n.DEPTH_COMPONENT24));const ut=it(b);st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,ct,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,ct,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ct,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ct=it(b);Z&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ct=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let lt=0;lt<ct.length;lt++){const ut=ct[lt],Tt=s.convert(ut.format,ut.colorSpace),_t=s.convert(ut.type),St=_(ut.internalFormat,Tt,_t,ut.colorSpace),Lt=it(b);Z&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,St,b.width,b.height):st(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,St,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,St,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function et(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const ct=i.get(b.depthTexture).__webglTexture,lt=it(b);if(b.depthTexture.format===vi)st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(b.depthTexture.format===dr)st(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function U(R){const b=i.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");et(b.__webglFramebuffer,R)}else if(Z){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]=n.createRenderbuffer(),vt(b.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),vt(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(R,b,Z){const ct=i.get(R);b!==void 0&&ht(ct.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&U(R)}function C(R){const b=R.texture,Z=i.get(R),ct=i.get(b);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=b.version,o.memory.textures++);const lt=R.isWebGLCubeRenderTarget===!0,ut=R.isWebGLMultipleRenderTargets===!0,Tt=p(R)||a;if(lt){Z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[_t]=[];for(let St=0;St<b.mipmaps.length;St++)Z.__webglFramebuffer[_t][St]=n.createFramebuffer()}else Z.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)Z.__webglFramebuffer[_t]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ut)if(r.drawBuffers){const _t=R.texture;for(let St=0,Lt=_t.length;St<Lt;St++){const Gt=i.get(_t[St]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&st(R)===!1){const _t=ut?b:[b];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let St=0;St<_t.length;St++){const Lt=_t[St];Z.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[St]);const Gt=s.convert(Lt.format,Lt.colorSpace),ot=s.convert(Lt.type),Zt=_(Lt.internalFormat,Gt,ot,Lt.colorSpace,R.isXRRenderTarget===!0),qt=it(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Zt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Z.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(Z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),N(n.TEXTURE_CUBE_MAP,b,Tt);for(let _t=0;_t<6;_t++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)ht(Z.__webglFramebuffer[_t][St],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else ht(Z.__webglFramebuffer[_t],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);E(b,Tt)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const _t=R.texture;for(let St=0,Lt=_t.length;St<Lt;St++){const Gt=_t[St],ot=i.get(Gt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),N(n.TEXTURE_2D,Gt,Tt),ht(Z.__webglFramebuffer,R,Gt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),E(Gt,Tt)&&M(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,ct.__webglTexture),N(_t,b,Tt),a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)ht(Z.__webglFramebuffer[St],R,b,n.COLOR_ATTACHMENT0,_t,St);else ht(Z.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,_t,0);E(b,Tt)&&M(_t),e.unbindTexture()}R.depthBuffer&&U(R)}function nt(R){const b=p(R)||a,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,lt=Z.length;ct<lt;ct++){const ut=Z[ct];if(E(ut,b)){const Tt=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(ut).__webglTexture;e.bindTexture(Tt,_t),M(Tt),e.unbindTexture()}}}function X(R){if(a&&R.samples>0&&st(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,ct=R.height;let lt=n.COLOR_BUFFER_BIT;const ut=[],Tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(R),St=R.isWebGLMultipleRenderTargets===!0;if(St)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){ut.push(n.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&ut.push(Tt);const Gt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Gt===!1&&(R.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]),Gt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),St){const ot=i.get(b[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,Z,ct,0,0,Z,ct,lt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]);const Gt=i.get(b[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function it(R){return Math.min(r.maxSamples,R.samples)}function st(R){const b=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(R){const b=o.render.frame;f.get(R)!==b&&(f.set(R,b),R.update())}function Mt(R,b){const Z=R.colorSpace,ct=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===bo||Z!==On&&Z!==an&&(jt.getTransfer(Z)===ne?a===!1?t.has("EXT_sRGB")===!0&&ct===pn?(R.format=bo,R.minFilter=nn,R.generateMipmaps=!1):b=su.sRGBToLinear(b):(ct!==pn||lt!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),b}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=Y,this.setupRenderTarget=C,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=st}function sg(n,t,e){const i=e.isWebGL2;function r(s,o=an){let a;const l=jt.getTransfer(o);if(s===Qn)return n.UNSIGNED_BYTE;if(s===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===zf)return n.BYTE;if(s===Gf)return n.SHORT;if(s===Io)return n.UNSIGNED_SHORT;if(s===Kc)return n.INT;if(s===Yn)return n.UNSIGNED_INT;if(s===Kn)return n.FLOAT;if(s===Vr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hf)return n.ALPHA;if(s===pn)return n.RGBA;if(s===Vf)return n.LUMINANCE;if(s===kf)return n.LUMINANCE_ALPHA;if(s===vi)return n.DEPTH_COMPONENT;if(s===dr)return n.DEPTH_STENCIL;if(s===bo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wf)return n.RED;if(s===jc)return n.RED_INTEGER;if(s===Xf)return n.RG;if(s===Jc)return n.RG_INTEGER;if(s===Qc)return n.RGBA_INTEGER;if(s===Ua||s===Ia||s===Na||s===Fa)if(l===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===il||s===rl||s===sl||s===al)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ol||s===ll)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ol)return l===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ll)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===Ml||s===Sl||s===yl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ul)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ml)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_l)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ml)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa||s===El||s===Tl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Oa)return l===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===El)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qf||s===Al||s===bl||s===wl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ag extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $n extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const og={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,S=.005;c.inputState.pinching&&d>g+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class lg extends vr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,S=null;const v=e.getContextAttributes();let p=null,u=null;const E=[],M=[],_=new Kt;let T=null;const m=new rn;m.layers.enable(1),m.viewport=new we;const y=new rn;y.layers.enable(2),y.viewport=new we;const D=[m,y],x=new ag;x.layers.enable(1),x.layers.enable(2);let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Q=E[N];return Q===void 0&&(Q=new oo,E[N]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(N){let Q=E[N];return Q===void 0&&(Q=new oo,E[N]=Q),Q.getGripSpace()},this.getHand=function(N){let Q=E[N];return Q===void 0&&(Q=new oo,E[N]=Q),Q.getHandSpace()};function I(N){const Q=M.indexOf(N.inputSource);if(Q===-1)return;const rt=E[Q];rt!==void 0&&(rt.update(N.inputSource,N.frame,c||o),rt.dispatchEvent({type:N.type,data:N.inputSource}))}function j(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",L);for(let N=0;N<E.length;N++){const Q=M[N];Q!==null&&(M[N]=null,E[N].disconnect(Q))}A=null,P=null,t.setRenderTarget(p),g=null,d=null,h=null,r=null,u=null,W.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",j),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new yi(g.framebufferWidth,g.framebufferHeight,{format:pn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Q=null,rt=null,ft=null;v.depth&&(ft=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=v.stencil?dr:vi,rt=v.stencil?_i:Yn);const ht={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(ht),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new yi(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new _u(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const vt=t.properties.get(u);vt.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(N){for(let Q=0;Q<N.removed.length;Q++){const rt=N.removed[Q],ft=M.indexOf(rt);ft>=0&&(M[ft]=null,E[ft].disconnect(rt))}for(let Q=0;Q<N.added.length;Q++){const rt=N.added[Q];let ft=M.indexOf(rt);if(ft===-1){for(let vt=0;vt<E.length;vt++)if(vt>=M.length){M.push(rt),ft=vt;break}else if(M[vt]===null){M[vt]=rt,ft=vt;break}if(ft===-1)break}const ht=E[ft];ht&&ht.connect(rt)}}const O=new G,B=new G;function q(N,Q,rt){O.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(rt.matrixWorld);const ft=O.distanceTo(B),ht=Q.projectionMatrix.elements,vt=rt.projectionMatrix.elements,et=ht[14]/(ht[10]-1),U=ht[14]/(ht[10]+1),Y=(ht[9]+1)/ht[5],C=(ht[9]-1)/ht[5],nt=(ht[8]-1)/ht[0],X=(vt[8]+1)/vt[0],it=et*nt,st=et*X,Et=ft/(-nt+X),Mt=Et*-nt;Q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Mt),N.translateZ(Et),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const R=et+Et,b=U+Et,Z=it-Mt,ct=st+(ft-Mt),lt=Y*U/b*R,ut=C*U/b*R;N.projectionMatrix.makePerspective(Z,ct,lt,ut,R,b),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function V(N,Q){Q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;x.near=y.near=m.near=N.near,x.far=y.far=m.far=N.far,(A!==x.near||P!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,P=x.far);const Q=N.parent,rt=x.cameras;V(x,Q);for(let ft=0;ft<rt.length;ft++)V(rt[ft],Q);rt.length===2?q(x,m,y):x.projectionMatrix.copy(m.projectionMatrix),z(N,x,Q)};function z(N,Q,rt){rt===null?N.matrix.copy(Q.matrixWorld):(N.matrix.copy(rt.matrixWorld),N.matrix.invert(),N.matrix.multiply(Q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Q.projectionMatrix),N.projectionMatrixInverse.copy(Q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=wo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=N)};let k=null;function K(N,Q){if(f=Q.getViewerPose(c||o),S=Q,f!==null){const rt=f.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let ft=!1;rt.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let ht=0;ht<rt.length;ht++){const vt=rt[ht];let et=null;if(g!==null)et=g.getViewport(vt);else{const Y=h.getViewSubImage(d,vt);et=Y.viewport,ht===0&&(t.setRenderTargetTextures(u,Y.colorTexture,d.ignoreDepthValues?void 0:Y.depthStencilTexture),t.setRenderTarget(u))}let U=D[ht];U===void 0&&(U=new rn,U.layers.enable(ht),U.viewport=new we,D[ht]=U),U.matrix.fromArray(vt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(vt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(et.x,et.y,et.width,et.height),ht===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(U)}}for(let rt=0;rt<E.length;rt++){const ft=M[rt],ht=E[rt];ft!==null&&ht!==void 0&&ht.update(ft,Q,c||o)}k&&k(N,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),S=null}const W=new gu;W.setAnimationLoop(K),this.setAnimationLoop=function(N){k=N},this.dispose=function(){}}}function cg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,hu(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,E,M,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,_)):u.isMeshMatcapMaterial?(s(p,u),S(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ke&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ke&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=t.get(u).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=M*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ke&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function S(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ug(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const _=M.program;i.uniformBlockBinding(E,_)}function c(E,M){let _=r[E.id];_===void 0&&(S(E),_=f(E),r[E.id]=_,E.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(E,T);const m=t.render.frame;s[E.id]!==m&&(d(E),s[E.id]=m)}function f(E){const M=h();E.__bindingPointIndex=M;const _=n.createBuffer(),T=E.__size,m=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,m),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=r[E.id],_=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let m=0,y=_.length;m<y;m++){const D=Array.isArray(_[m])?_[m]:[_[m]];for(let x=0,A=D.length;x<A;x++){const P=D[x];if(g(P,m,x,T)===!0){const I=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let O=0;O<j.length;O++){const B=j[O],q=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+L,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,M,_,T){const m=E.value,y=M+"_"+_;if(T[y]===void 0)return typeof m=="number"||typeof m=="boolean"?T[y]=m:T[y]=m.clone(),!0;{const D=T[y];if(typeof m=="number"||typeof m=="boolean"){if(D!==m)return T[y]=m,!0}else if(D.equals(m)===!1)return D.copy(m),!0}return!1}function S(E){const M=E.uniforms;let _=0;const T=16;for(let y=0,D=M.length;y<D;y++){const x=Array.isArray(M[y])?M[y]:[M[y]];for(let A=0,P=x.length;A<P;A++){const I=x[A],j=Array.isArray(I.value)?I.value:[I.value];for(let L=0,O=j.length;L<O;L++){const B=j[L],q=v(B),V=_%T;V!==0&&T-V<q.boundary&&(_+=T-V),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=q.storage}}}const m=_%T;return m>0&&(_+=T-m),E.__size=_,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Eu{constructor(t={}){const{canvas:e=sh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),S=new Int32Array(4);let v=null,p=null;const u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const M=this;let _=!1,T=0,m=0,y=null,D=-1,x=null;const A=new we,P=new we;let I=null;const j=new Ot(0);let L=0,O=e.width,B=e.height,q=1,V=null,z=null;const k=new we(0,0,O,B),K=new we(0,0,O,B);let W=!1;const N=new mu;let Q=!1,rt=!1,ft=null;const ht=new le,vt=new Kt,et=new G,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return y===null?q:1}let C=i;function nt(w,H){for(let J=0;J<w.length;J++){const tt=w[J],$=e.getContext(tt,H);if($!==null)return $}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",mt,!1),C===null){const H=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&H.shift(),C=nt(H,w),C===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let X,it,st,Et,Mt,R,b,Z,ct,lt,ut,Tt,_t,St,Lt,Gt,ot,Zt,qt,Ut,wt,yt,Bt,$t;function ce(){X=new Mm(C),it=new dm(C,X,t),X.init(it),yt=new sg(C,X,it),st=new ig(C,X,it),Et=new Em(C),Mt=new k0,R=new rg(C,X,st,Mt,it,yt,Et),b=new mm(M),Z=new xm(M),ct=new Lh(C,it),Bt=new fm(C,X,ct,it),lt=new Sm(C,ct,Et,Bt),ut=new wm(C,lt,ct,Et),qt=new bm(C,it,R),Gt=new pm(Mt),Tt=new V0(M,b,Z,X,it,Bt,Gt),_t=new cg(M,Mt),St=new X0,Lt=new j0(X,it),Zt=new um(M,b,Z,st,ut,d,l),ot=new ng(M,ut,it),$t=new ug(C,Et,it,st),Ut=new hm(C,X,Et,it),wt=new ym(C,X,Et,it),Et.programs=Tt.programs,M.capabilities=it,M.extensions=X,M.properties=Mt,M.renderLists=St,M.shadowMap=ot,M.state=st,M.info=Et}ce();const kt=new lg(M,C);this.xr=kt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=X.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=X.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(O,B,!1))},this.getSize=function(w){return w.set(O,B)},this.setSize=function(w,H,J=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,B=H,e.width=Math.floor(w*q),e.height=Math.floor(H*q),J===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(O*q,B*q).floor()},this.setDrawingBufferSize=function(w,H,J){O=w,B=H,q=J,e.width=Math.floor(w*J),e.height=Math.floor(H*J),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,H,J,tt){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,H,J,tt),st.viewport(A.copy(k).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,H,J,tt){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,H,J,tt),st.scissor(P.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){st.setScissorTest(W=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,H=!0,J=!0){let tt=0;if(w){let $=!1;if(y!==null){const xt=y.texture.format;$=xt===Qc||xt===Jc||xt===jc}if($){const xt=y.texture.type,At=xt===Qn||xt===Yn||xt===Io||xt===_i||xt===$c||xt===Zc,Ct=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Ht=Ct.r,Nt=Ct.g,Ft=Ct.b;At?(g[0]=Ht,g[1]=Nt,g[2]=Ft,g[3]=Dt,C.clearBufferuiv(C.COLOR,0,g)):(S[0]=Ht,S[1]=Nt,S[2]=Ft,S[3]=Dt,C.clearBufferiv(C.COLOR,0,S))}else tt|=C.COLOR_BUFFER_BIT}H&&(tt|=C.DEPTH_BUFFER_BIT),J&&(tt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),St.dispose(),Lt.dispose(),Mt.dispose(),b.dispose(),Z.dispose(),ut.dispose(),Bt.dispose(),$t.dispose(),Tt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ue),kt.removeEventListener("sessionend",ee),ft&&(ft.dispose(),ft=null),Ie.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const w=Et.autoReset,H=ot.enabled,J=ot.autoUpdate,tt=ot.needsUpdate,$=ot.type;ce(),Et.autoReset=w,ot.enabled=H,ot.autoUpdate=J,ot.needsUpdate=tt,ot.type=$}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function gt(w){const H=w.target;H.removeEventListener("dispose",gt),Pt(H)}function Pt(w){Rt(w),Mt.remove(w)}function Rt(w){const H=Mt.get(w).programs;H!==void 0&&(H.forEach(function(J){Tt.releaseProgram(J)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,J,tt,$,xt){H===null&&(H=U);const At=$.isMesh&&$.matrixWorld.determinant()<0,Ct=Qu(w,H,J,tt,$);st.setMaterial(tt,At);let Dt=J.index,Ht=1;if(tt.wireframe===!0){if(Dt=lt.getWireframeAttribute(J),Dt===void 0)return;Ht=2}const Nt=J.drawRange,Ft=J.attributes.position;let fe=Nt.start*Ht,Ye=(Nt.start+Nt.count)*Ht;xt!==null&&(fe=Math.max(fe,xt.start*Ht),Ye=Math.min(Ye,(xt.start+xt.count)*Ht)),Dt!==null?(fe=Math.max(fe,0),Ye=Math.min(Ye,Dt.count)):Ft!=null&&(fe=Math.max(fe,0),Ye=Math.min(Ye,Ft.count));const Me=Ye-fe;if(Me<0||Me===1/0)return;Bt.setup($,tt,Ct,J,Dt);let Tn,se=Ut;if(Dt!==null&&(Tn=ct.get(Dt),se=wt,se.setIndex(Tn)),$.isMesh)tt.wireframe===!0?(st.setLineWidth(tt.wireframeLinewidth*Y()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if($.isLine){let Wt=tt.linewidth;Wt===void 0&&(Wt=1),st.setLineWidth(Wt*Y()),$.isLineSegments?se.setMode(C.LINES):$.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else $.isPoints?se.setMode(C.POINTS):$.isSprite&&se.setMode(C.TRIANGLES);if($.isBatchedMesh)se.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)se.renderInstances(fe,Me,$.count);else if(J.isInstancedBufferGeometry){const Wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ra=Math.min(J.instanceCount,Wt);se.renderInstances(fe,Me,Ra)}else se.render(fe,Me)};function Qt(w,H,J){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,cs(w,H,J),w.side=ni,w.needsUpdate=!0,cs(w,H,J),w.side=sn):cs(w,H,J)}this.compile=function(w,H,J=null){J===null&&(J=w),p=Lt.get(J),p.init(),E.push(p),J.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),w!==J&&w.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(M._useLegacyLights);const tt=new Set;return w.traverse(function($){const xt=$.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const Ct=xt[At];Qt(Ct,J,$),tt.add(Ct)}else Qt(xt,J,$),tt.add(xt)}),E.pop(),p=null,tt},this.compileAsync=function(w,H,J=null){const tt=this.compile(w,H,J);return new Promise($=>{function xt(){if(tt.forEach(function(At){Mt.get(At).currentProgram.isReady()&&tt.delete(At)}),tt.size===0){$(w);return}setTimeout(xt,10)}X.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let te=null;function xe(w){te&&te(w)}function Ue(){Ie.stop()}function ee(){Ie.start()}const Ie=new gu;Ie.setAnimationLoop(xe),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(w){te=w,kt.setAnimationLoop(w),w===null?Ie.stop():Ie.start()},kt.addEventListener("sessionstart",Ue),kt.addEventListener("sessionend",ee),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,y),p=Lt.get(w,E.length),p.init(),E.push(p),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),N.setFromProjectionMatrix(ht),rt=this.localClippingEnabled,Q=Gt.init(this.clippingPlanes,rt),v=St.get(w,u.length),v.init(),u.push(v),_n(w,H,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(V,z),this.info.render.frame++,Q===!0&&Gt.beginShadows();const J=p.state.shadowsArray;if(ot.render(J,w,H),Q===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(v,w),p.setupLights(M._useLegacyLights),H.isArrayCamera){const tt=H.cameras;for(let $=0,xt=tt.length;$<xt;$++){const At=tt[$];Xo(v,w,At,At.viewport)}}else Xo(v,w,H);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(M,w,H),Bt.resetDefaultState(),D=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function _n(w,H,J,tt){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||N.intersectsSprite(w)){tt&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const At=ut.update(w),Ct=w.material;Ct.visible&&v.push(w,At,Ct,J,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||N.intersectsObject(w))){const At=ut.update(w),Ct=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),et.copy(At.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Ct)){const Dt=At.groups;for(let Ht=0,Nt=Dt.length;Ht<Nt;Ht++){const Ft=Dt[Ht],fe=Ct[Ft.materialIndex];fe&&fe.visible&&v.push(w,At,fe,J,et.z,Ft)}}else Ct.visible&&v.push(w,At,Ct,J,et.z,null)}}const xt=w.children;for(let At=0,Ct=xt.length;At<Ct;At++)_n(xt[At],H,J,tt)}function Xo(w,H,J,tt){const $=w.opaque,xt=w.transmissive,At=w.transparent;p.setupLightsView(J),Q===!0&&Gt.setGlobalState(M.clippingPlanes,J),xt.length>0&&Ju($,xt,H,J),tt&&st.viewport(A.copy(tt)),$.length>0&&ls($,H,J),xt.length>0&&ls(xt,H,J),At.length>0&&ls(At,H,J),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ju(w,H,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const xt=it.isWebGL2;ft===null&&(ft=new yi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Vr:Qn,minFilter:Hr,samples:xt?4:0})),M.getDrawingBufferSize(vt),xt?ft.setSize(vt.x,vt.y):ft.setSize(Ro(vt.x),Ro(vt.y));const At=M.getRenderTarget();M.setRenderTarget(ft),M.getClearColor(j),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Ct=M.toneMapping;M.toneMapping=Jn,ls(w,J,tt),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft);let Dt=!1;for(let Ht=0,Nt=H.length;Ht<Nt;Ht++){const Ft=H[Ht],fe=Ft.object,Ye=Ft.geometry,Me=Ft.material,Tn=Ft.group;if(Me.side===sn&&fe.layers.test(tt.layers)){const se=Me.side;Me.side=ke,Me.needsUpdate=!0,qo(fe,J,tt,Ye,Me,Tn),Me.side=se,Me.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft)),M.setRenderTarget(At),M.setClearColor(j,L),M.toneMapping=Ct}function ls(w,H,J){const tt=H.isScene===!0?H.overrideMaterial:null;for(let $=0,xt=w.length;$<xt;$++){const At=w[$],Ct=At.object,Dt=At.geometry,Ht=tt===null?At.material:tt,Nt=At.group;Ct.layers.test(J.layers)&&qo(Ct,H,J,Dt,Ht,Nt)}}function qo(w,H,J,tt,$,xt){w.onBeforeRender(M,H,J,tt,$,xt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(M,H,J,tt,w,xt),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=ke,$.needsUpdate=!0,M.renderBufferDirect(J,H,tt,$,w,xt),$.side=ni,$.needsUpdate=!0,M.renderBufferDirect(J,H,tt,$,w,xt),$.side=sn):M.renderBufferDirect(J,H,tt,$,w,xt),w.onAfterRender(M,H,J,tt,$,xt)}function cs(w,H,J){H.isScene!==!0&&(H=U);const tt=Mt.get(w),$=p.state.lights,xt=p.state.shadowsArray,At=$.state.version,Ct=Tt.getParameters(w,$.state,xt,H,J),Dt=Tt.getProgramCacheKey(Ct);let Ht=tt.programs;tt.environment=w.isMeshStandardMaterial?H.environment:null,tt.fog=H.fog,tt.envMap=(w.isMeshStandardMaterial?Z:b).get(w.envMap||tt.environment),Ht===void 0&&(w.addEventListener("dispose",gt),Ht=new Map,tt.programs=Ht);let Nt=Ht.get(Dt);if(Nt!==void 0){if(tt.currentProgram===Nt&&tt.lightsStateVersion===At)return Ko(w,Ct),Nt}else Ct.uniforms=Tt.getUniforms(w),w.onBuild(J,Ct,M),w.onBeforeCompile(Ct,M),Nt=Tt.acquireProgram(Ct,Dt),Ht.set(Dt,Nt),tt.uniforms=Ct.uniforms;const Ft=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Gt.uniform),Ko(w,Ct),tt.needsLights=ef(w),tt.lightsStateVersion=At,tt.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMap.value=$.state.directionalShadowMap,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotShadowMap.value=$.state.spotShadowMap,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMap.value=$.state.pointShadowMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),tt.currentProgram=Nt,tt.uniformsList=null,Nt}function Yo(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Qs.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Ko(w,H){const J=Mt.get(w);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Qu(w,H,J,tt,$){H.isScene!==!0&&(H=U),R.resetTextureUnits();const xt=H.fog,At=tt.isMeshStandardMaterial?H.environment:null,Ct=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:On,Dt=(tt.isMeshStandardMaterial?Z:b).get(tt.envMap||At),Ht=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Nt=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ft=!!J.morphAttributes.position,fe=!!J.morphAttributes.normal,Ye=!!J.morphAttributes.color;let Me=Jn;tt.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Me=M.toneMapping);const Tn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=Tn!==void 0?Tn.length:0,Wt=Mt.get(tt),Ra=p.state.lights;if(Q===!0&&(rt===!0||w!==x)){const tn=w===x&&tt.id===D;Gt.setState(tt,w,tn)}let ue=!1;tt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ra.state.version||Wt.outputColorSpace!==Ct||$.isBatchedMesh&&Wt.batching===!1||!$.isBatchedMesh&&Wt.batching===!0||$.isInstancedMesh&&Wt.instancing===!1||!$.isInstancedMesh&&Wt.instancing===!0||$.isSkinnedMesh&&Wt.skinning===!1||!$.isSkinnedMesh&&Wt.skinning===!0||$.isInstancedMesh&&Wt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Wt.instancingColor===!1&&$.instanceColor!==null||Wt.envMap!==Dt||tt.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Gt.numPlanes||Wt.numIntersection!==Gt.numIntersection)||Wt.vertexAlphas!==Ht||Wt.vertexTangents!==Nt||Wt.morphTargets!==Ft||Wt.morphNormals!==fe||Wt.morphColors!==Ye||Wt.toneMapping!==Me||it.isWebGL2===!0&&Wt.morphTargetsCount!==se)&&(ue=!0):(ue=!0,Wt.__version=tt.version);let si=Wt.currentProgram;ue===!0&&(si=cs(tt,H,$));let $o=!1,Ar=!1,Ca=!1;const Re=si.getUniforms(),ai=Wt.uniforms;if(st.useProgram(si.program)&&($o=!0,Ar=!0,Ca=!0),tt.id!==D&&(D=tt.id,Ar=!0),$o||x!==w){Re.setValue(C,"projectionMatrix",w.projectionMatrix),Re.setValue(C,"viewMatrix",w.matrixWorldInverse);const tn=Re.map.cameraPosition;tn!==void 0&&tn.setValue(C,et.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Re.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ar=!0,Ca=!0)}if($.isSkinnedMesh){Re.setOptional(C,$,"bindMatrix"),Re.setOptional(C,$,"bindMatrixInverse");const tn=$.skeleton;tn&&(it.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Re.setValue(C,"boneTexture",tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Re.setOptional(C,$,"batchingTexture"),Re.setValue(C,"batchingTexture",$._matricesTexture,R));const La=J.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&it.isWebGL2===!0)&&qt.update($,J,si),(Ar||Wt.receiveShadow!==$.receiveShadow)&&(Wt.receiveShadow=$.receiveShadow,Re.setValue(C,"receiveShadow",$.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ai.envMap.value=Dt,ai.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Ar&&(Re.setValue(C,"toneMappingExposure",M.toneMappingExposure),Wt.needsLights&&tf(ai,Ca),xt&&tt.fog===!0&&_t.refreshFogUniforms(ai,xt),_t.refreshMaterialUniforms(ai,tt,q,B,ft),Qs.upload(C,Yo(Wt),ai,R)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Qs.upload(C,Yo(Wt),ai,R),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(C,"center",$.center),Re.setValue(C,"modelViewMatrix",$.modelViewMatrix),Re.setValue(C,"normalMatrix",$.normalMatrix),Re.setValue(C,"modelMatrix",$.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const tn=tt.uniformsGroups;for(let Pa=0,nf=tn.length;Pa<nf;Pa++)if(it.isWebGL2){const Zo=tn[Pa];$t.update(Zo,si),$t.bind(Zo,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function tf(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function ef(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,H,J){Mt.get(w.texture).__webglTexture=H,Mt.get(w.depthTexture).__webglTexture=J;const tt=Mt.get(w);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=J===void 0,tt.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const J=Mt.get(w);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,J=0){y=w,T=H,m=J;let tt=!0,$=null,xt=!1,At=!1;if(w){const Dt=Mt.get(w);Dt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(C.FRAMEBUFFER,null),tt=!1):Dt.__webglFramebuffer===void 0?R.setupRenderTarget(w):Dt.__hasExternalTextures&&R.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Nt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[H])?$=Nt[H][J]:$=Nt[H],xt=!0):it.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?$=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?$=Nt[J]:$=Nt,A.copy(w.viewport),P.copy(w.scissor),I=w.scissorTest}else A.copy(k).multiplyScalar(q).floor(),P.copy(K).multiplyScalar(q).floor(),I=W;if(st.bindFramebuffer(C.FRAMEBUFFER,$)&&it.drawBuffers&&tt&&st.drawBuffers(w,$),st.viewport(A),st.scissor(P),st.setScissorTest(I),xt){const Dt=Mt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,J)}else if(At){const Dt=Mt.get(w.texture),Ht=H||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,J||0,Ht)}D=-1},this.readRenderTargetPixels=function(w,H,J,tt,$,xt,At){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){st.bindFramebuffer(C.FRAMEBUFFER,Ct);try{const Dt=w.texture,Ht=Dt.format,Nt=Dt.type;if(Ht!==pn&&yt.convert(Ht)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Nt===Vr&&(X.has("EXT_color_buffer_half_float")||it.isWebGL2&&X.has("EXT_color_buffer_float"));if(Nt!==Qn&&yt.convert(Nt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Kn&&(it.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-tt&&J>=0&&J<=w.height-$&&C.readPixels(H,J,tt,$,yt.convert(Ht),yt.convert(Nt),xt)}finally{const Dt=y!==null?Mt.get(y).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(w,H,J=0){const tt=Math.pow(2,-J),$=Math.floor(H.image.width*tt),xt=Math.floor(H.image.height*tt);R.setTexture2D(H,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,w.x,w.y,$,xt),st.unbindTexture()},this.copyTextureToTexture=function(w,H,J,tt=0){const $=H.image.width,xt=H.image.height,At=yt.convert(J.format),Ct=yt.convert(J.type);R.setTexture2D(J,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,J.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,J.unpackAlignment),H.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,w.x,w.y,$,xt,At,Ct,H.image.data):H.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,At,H.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,tt,w.x,w.y,At,Ct,H.image),tt===0&&J.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(w,H,J,tt,$=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=w.max.x-w.min.x+1,At=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,Dt=yt.convert(tt.format),Ht=yt.convert(tt.type);let Nt;if(tt.isData3DTexture)R.setTexture3D(tt,0),Nt=C.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)R.setTexture2DArray(tt,0),Nt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,tt.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,tt.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ye=C.getParameter(C.UNPACK_SKIP_PIXELS),Me=C.getParameter(C.UNPACK_SKIP_ROWS),Tn=C.getParameter(C.UNPACK_SKIP_IMAGES),se=J.isCompressedTexture?J.mipmaps[$]:J.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),J.isDataTexture||J.isData3DTexture?C.texSubImage3D(Nt,$,H.x,H.y,H.z,xt,At,Ct,Dt,Ht,se.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Nt,$,H.x,H.y,H.z,xt,At,Ct,Dt,se.data)):C.texSubImage3D(Nt,$,H.x,H.y,H.z,xt,At,Ct,Dt,Ht,se),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Me),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tn),$===0&&tt.generateMipmaps&&C.generateMipmap(Nt),st.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),st.unbindTexture()},this.resetState=function(){T=0,m=0,y=null,st.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===No?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?xi:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xi?ye:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class fg extends Eu{}fg.prototype.isWebGL1Renderer=!0;class Bo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new Bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new G;class la{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tu extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const Lr=new G,ji=new G,Ji=new G,Qi=new Kt,Pr=new Kt,Au=new le,Ds=new G,Dr=new G,Us=new G,mc=new Kt,lo=new Kt,gc=new Kt;class pg extends Ee{constructor(t=new Tu){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dg(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new la(i,3,0,!1)),Zi.setAttribute("uv",new la(i,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ji.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Is(Ds.set(-.5,-.5,0),Ji,o,ji,r,s),Is(Dr.set(.5,-.5,0),Ji,o,ji,r,s),Is(Us.set(.5,.5,0),Ji,o,ji,r,s),mc.set(0,0),lo.set(1,0),gc.set(1,1);let a=t.ray.intersectTriangle(Ds,Dr,Us,!1,Lr);if(a===null&&(Is(Dr.set(-.5,.5,0),Ji,o,ji,r,s),lo.set(0,1),a=t.ray.intersectTriangle(Ds,Us,Dr,!1,Lr),a===null))return;const l=t.ray.origin.distanceTo(Lr);l<t.near||l>t.far||e.push({distance:l,point:Lr.clone(),uv:Ze.getInterpolation(Lr,Ds,Dr,Us,mc,lo,gc,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Is(n,t,e,i,r,s){Qi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Pr.x=s*Qi.x-r*Qi.y,Pr.y=r*Qi.x+s*Qi.y):Pr.copy(Qi),n.copy(t),n.x+=Pr.x,n.y+=Pr.y,n.applyMatrix4(Au)}class _c extends Xe{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const tr=new le,vc=new le,Ns=[],xc=new Li,mg=new le,Ur=new He,Ir=new Pi;class bu extends He{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,mg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),xc.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,tr),Ir.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),t.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,tr),vc.multiplyMatrices(i,tr),Ur.matrixWorld=vc,Ur.raycast(t,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=s,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zo extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mc=new G,Sc=new G,yc=new le,co=new Fo,Fs=new Pi;class gg extends Ee{constructor(t=new De,e=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Mc.fromBufferAttribute(e,r-1),Sc.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Mc.distanceTo(Sc);t.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=s,t.ray.intersectsSphere(Fs)===!1)return;yc.copy(r).invert(),co.copy(t.ray).applyMatrix4(yc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,f=new G,h=new G,d=new G,g=this.isLineSegments?2:1,S=i.index,p=i.attributes.position;if(S!==null){const u=Math.max(0,o.start),E=Math.min(S.count,o.start+o.count);for(let M=u,_=E-1;M<_;M+=g){const T=S.getX(M),m=S.getX(M+1);if(c.fromBufferAttribute(p,T),f.fromBufferAttribute(p,m),co.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let M=u,_=E-1;M<_;M+=g){if(c.fromBufferAttribute(p,M),f.fromBufferAttribute(p,M+1),co.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(d);m<t.near||m>t.far||e.push({distance:m,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ec=new G,Tc=new G;class wu extends gg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ec.fromBufferAttribute(e,r),Tc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ec.distanceTo(Tc);t.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Go extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ac=new le,Lo=new Fo,Os=new Pi,Bs=new G;class Ru extends Ee{constructor(t=new De,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,t.ray.intersectsSphere(Os)===!1)return;Ac.copy(r).invert(),Lo.copy(t.ray).applyMatrix4(Ac);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let S=d,v=g;S<v;S++){const p=c.getX(S);Bs.fromBufferAttribute(h,p),bc(Bs,p,l,r,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=d,v=g;S<v;S++)Bs.fromBufferAttribute(h,S),bc(Bs,S,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bc(n,t,e,i,r,s,o){const a=Lo.distanceSqToPoint(n);if(a<e){const l=new G;Lo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Ho extends We{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zs=new G,Gs=new G,uo=new G,Hs=new Ze;class _g extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Js*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),d={},g=[];for(let S=0;S<l;S+=3){o?(c[0]=o.getX(S),c[1]=o.getX(S+1),c[2]=o.getX(S+2)):(c[0]=S,c[1]=S+1,c[2]=S+2);const{a:v,b:p,c:u}=Hs;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Hs.getNormal(uo),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const M=(E+1)%3,_=h[E],T=h[M],m=Hs[f[E]],y=Hs[f[M]],D=`${_}_${T}`,x=`${T}_${_}`;x in d&&d[x]?(uo.dot(d[x].normal)<=s&&(g.push(m.x,m.y,m.z),g.push(y.x,y.y,y.z)),d[x]=null):D in d||(d[D]={index0:c[E],index1:c[M],normal:uo.clone()})}}for(const S in d)if(d[S]){const{index0:v,index1:p}=d[S];zs.fromBufferAttribute(a,v),Gs.fromBufferAttribute(a,p),g.push(zs.x,zs.y,zs.z),g.push(Gs.x,Gs.y,Gs.z)}this.setAttribute("position",new Be(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const Vt=128,at=16,ze=20,vg=240,fo=typeof location<"u"?parseInt(new URLSearchParams(location.search).get("dist"),10):NaN,qn=fo>=2&&fo<=10?fo:6,xg=2,Mg=1,Sg=2,xn=48,yg=.5,oe=0,En=1,Ti=2,me=3,Bn=4,Mn=5,Ai=6,ei=7,Mr=8,Je=9,Sr=10,ii=11,Qr=12,ts=13,es=14,ns=15,is=16,ca=17,Cu=18,Lu=19,Pu=20,Vo=21,je=22,gn=23,Qe=24,bi=25,va=26,xa=27,Ma=28,Sa=29,ya=30,yr=31,zn=32,Er=33,rs=34,ss=35,as=36,Du=n=>n>=ca&&n<=Vo,kr=n=>n===Qe||n===bi||n===zn||n===Er,Ea=n=>n===rs||n===ss||n===as,Uu=n=>n!==oe&&n!==Je&&n!==gn&&n!==bi&&n!==Er&&!Du(n),hn=n=>Uu(n)&&n!==Ai&&n!==je&&n!==Qe&&n!==yr&&n!==zn&&!Ea(n),qe=Uu,ho=n=>n===gn?14:0,nr={[En]:[0,1,2],[Ti]:[2,2,2],[me]:[3,3,3],[Bn]:[4,4,4],[Mn]:[6,5,6],[Ai]:[7,7,7],[ei]:[8,8,8],[Mr]:[9,9,9],[Je]:[10,10,10],[Sr]:[11,11,11],[ii]:[11,23,2],[Qr]:[13,12,13],[ts]:[14,14,14],[es]:[15,15,15],[ns]:[16,16,16],[is]:[17,17,17],[je]:[24,24,24],[gn]:[25,25,25],[Qe]:[26,26,26],[bi]:[26,26,26],[va]:[27,27,27],[xa]:[28,28,28],[Ma]:[29,29,29],[Sa]:[30,30,30],[ya]:[31,31,31],[yr]:[32,32,32],[zn]:[33,33,33],[Er]:[33,33,33],[rs]:[3,3,3],[ss]:[8,8,8],[as]:[27,27,27]},Eg={[ca]:18,[Cu]:19,[Lu]:20,[Pu]:21,[Vo]:22},mr=[En,Ti,me,Mn,ei,je,gn,Qe,Mr],po={[En]:"Gras",[Ti]:"Erde",[me]:"Stein",[Bn]:"Sand",[Mn]:"Holz",[ei]:"Bretter",[Mr]:"Ziegel",[Sr]:"Schnee",[Ai]:"Laub",[ii]:"Schneegras",[Qr]:"Kaktus",[ts]:"Kohle",[es]:"Eisen",[ns]:"Gold",[is]:"Diamant",[je]:"Glas",[gn]:"Fackel",[Qe]:"Tür",[va]:"Steinziegel",[xa]:"Moosziegel",[Ma]:"Marmor",[Sa]:"Steinplatten",[ya]:"Dunkelholz",[yr]:"Eisengitter",[zn]:"Gittertür",[rs]:"Steintreppe",[ss]:"Holztreppe",[as]:"Ziegeltreppe"},Tg=[En,Ti,me,Bn,Mn,ei,Mr,Sr,Ai,ii,Qr,ts,es,ns,is,je,gn,Qe,va,xa,Ma,Sa,ya,yr,zn,rs,ss,as],wc={[En]:6986554,[Ti]:8018490,[me]:9079434,[Bn]:14208928,[Mn]:7034166,[Ai]:4880949,[ei]:12028498,[Mr]:10901578,[Sr]:15659766,[ii]:15659766,[Qr]:5212730,[ts]:3158064,[es]:13148282,[ns]:15255626,[is]:7332064,[Je]:3829456,[je]:12574954,[gn]:16757818,[Qe]:9071162,[bi]:9071162,[va]:8684680,[xa]:7308392,[Ma]:15265008,[Sa]:10132126,[ya]:5916210,[yr]:10134188,[zn]:10134188,[Er]:10134188,[rs]:9079434,[ss]:12028498,[as]:8684680},Ag=0,lr=1,Wr=2,wi=3,Xr=4,gr=5,bg=["Ozean","Ebene","Wald","Wüste","Schnee","Gebirge"],ie=16,Po=34;let Ta=20260612;const Ri=()=>Ta;function Iu(n){Ta=n|0}function Ci(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vs(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263)+Ta;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Pn(n,t,e){let i=Math.imul(n,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519)+Ta;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}const Or=n=>n*n*(3-2*n);function wg(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,o=Vs(e,i),a=Vs(e+1,i),l=Vs(e,i+1),c=Vs(e+1,i+1),f=Or(r),h=Or(s);return o+(a-o)*f+(l-o)*h+(o-a-l+c)*f*h}function qr(n,t){let e=0,i=.5,r=1;for(let s=0;s<4;s++)e+=i*wg(n*r,t*r),i*=.5,r*=2;return e}function Rg(n,t,e){const i=Math.floor(n),r=Math.floor(t),s=Math.floor(e),o=n-i,a=t-r,l=e-s,c=Or(o),f=Or(a),h=Or(l),d=(T,m,y)=>T+(m-T)*y,g=Pn(i,r,s),S=Pn(i+1,r,s),v=Pn(i,r+1,s),p=Pn(i+1,r+1,s),u=Pn(i,r,s+1),E=Pn(i+1,r,s+1),M=Pn(i,r+1,s+1),_=Pn(i+1,r+1,s+1);return d(d(d(g,S,c),d(v,p,c),f),d(d(u,E,c),d(M,_,c),f),h)}function mo(n,t,e){let i=0,r=.5,s=1;for(let o=0;o<3;o++)i+=r*Rg(n*s,t*s,e*s),r*=.5,s*=2;return i}const Do=[{name:"Hütte",r:2,h:5,flat:2,found:!0,villagers:2,biomes:[lr,Wr,Xr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,ei);const i=Math.abs(t)===2||Math.abs(e)===2,r=Math.abs(t)===2&&Math.abs(e)===2;for(let s=1;s<=3;s++)n(t,s,e,i?r?Mn:ei:oe);n(t,4,e,Mn)}n(-2,2,0,je),n(2,2,0,je),n(0,2,-2,je),n(0,1,2,Qe,1),n(0,2,2,Qe,3),n(1,1,-1,gn)}},{name:"Ruine",r:3,h:4,flat:3,found:!0,villagers:0,biomes:null,build(n,t){for(let e=-3;e<=3;e++)for(let i=-3;i<=3;i++)if(n(e,0,i,me),Math.abs(e)===3||Math.abs(i)===3)for(let s=1;s<=3;s++){const o=t()<.9-s*.25,a=t()<.3;o&&n(e,s,i,a?Mr:me)}else t()<.07&&n(e,1,i,me)}},{name:"Turm",r:2,h:8,flat:2,found:!0,villagers:1,biomes:[lr,wi,gr],build(n){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){n(t,0,e,me);const i=Math.abs(t)===2||Math.abs(e)===2;for(let r=1;r<=5;r++)n(t,r,e,i?me:oe);n(t,6,e,me)}n(0,1,2,oe),n(0,2,2,oe),n(-2,3,0,je),n(2,3,0,je),n(0,3,-2,je);for(const[t,e]of[[-2,-2],[2,-2],[-2,2],[2,2],[0,-2],[0,2],[-2,0],[2,0]])n(t,7,e,me);n(0,7,0,gn)}},{name:"Brunnen",r:1,h:4,flat:1,found:!1,villagers:1,biomes:[lr,Wr,wi],build(n){for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,0,e,t===0&&e===0?Je:me);n(0,-1,0,Je),n(0,-2,0,me);for(const[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n(t,1,e,Mn),n(t,2,e,Mn);for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)n(t,3,e,ei)}}],Cg=Math.max(...Do.map(n=>n.r)),go=at*at*Vt,ae=(n,t,e)=>t*at*at+e*at+n,he=(n,t)=>n+","+t,re=n=>Math.floor(n/at),ge=n=>(n%at+at)%at,Ve=new Map,Mi=new Map;function Te(n,t){return Ve.get(he(n,t))}function Lg(n,t){const e={cx:n,cz:t,vox:new Uint8Array(go),meta:new Uint8Array(go),light:new Uint8Array(go),state:"empty",dirty:!1};return Ve.set(he(n,t),e),e}function Yt(n,t,e){if(t<0||t>=Vt)return oe;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?oe:i.vox[ae(ge(n),t,ge(e))]}function Pg(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.vox[ae(ge(n),t,ge(e))]=i)}const Nu=(n,t,e)=>t>=0&&t<Vt;function cr(n,t,e){if(t<0||t>=Vt)return 0;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.meta[ae(ge(n),t,ge(e))]}function Dg(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.meta[ae(ge(n),t,ge(e))]=i)}function Sn(n,t,e){if(t>=Vt)return 240;if(t<0)return 0;const i=Ve.get(he(re(n),re(e)));return!i||i.state==="empty"?0:i.light[ae(ge(n),t,ge(e))]}function Rc(n,t,e,i){if(t<0||t>=Vt)return;const r=Ve.get(he(re(n),re(e)));r&&(r.light[ae(ge(n),t,ge(e))]=i)}function Ug(n,t,e,i,r=0){if(t<0||t>=Vt)return;const s=he(re(n),re(e));let o=Mi.get(s);o||(o=new Map,Mi.set(s,o)),o.set(ae(ge(n),t,ge(e)),i|r<<8)}function In(n,t,e,i,r=0){Pg(n,t,e,i),Dg(n,t,e,r),Ug(n,t,e,i,r)}function Ig(n){const t=Mi.get(he(n.cx,n.cz));if(t)for(const[e,i]of t)n.vox[e]=i&255,n.meta[e]=i>>8&255}function Fu(n){n!==void 0&&Iu(n),Ve.clear(),Mi.clear(),zu()}function Yr(n,t,e){if(e<=ze)return Ag;if(e>ze+22)return gr;const i=qr(n*.022+100,t*.022+100)/.9375,r=qr(n*.022+500,t*.022+500)/.9375;return i<.35?Xr:i>.62&&r<.5?wi:r>.55?Wr:lr}let Br=.42,ta=.64,Ou=NaN;const Bu=(n,t)=>qr(n*.0125+10,t*.0125+10);function zu(){const n=[];for(let t=0;t<320;t+=4)for(let e=0;e<320;e+=4)n.push(Bu(t,e));n.sort((t,e)=>t-e),Br=n[Math.floor(n.length*.3)],ta=n[Math.floor(n.length*.95)],ta-Br<.05&&(ta=Br+.05),Ou=Ri()}function Ng(){Ou!==Ri()&&zu()}function Gu(n,t){Ng();const e=Bu(n,t),i=Math.max(0,Math.min(1,(e-Br)/(ta-Br))),r=(qr(n*.06,t*.06)/.9375-.5)*7,s=i>.8?Math.pow((i-.8)/.2,1.3)*30:0;return Math.floor(ze+i*26+r+s)}function Kr(n,t){let e=Gu(n,t);return e<1&&(e=1),e>Vt-6&&(e=Vt-6),e}function Hu(n,t,e){return e||t===wi?Bn:t===Xr?ii:t===gr?n>ze+30?Sr:n>ze+20?me:En:En}function di(n,t,e,i,r){const s=Math.floor(n-i),o=Math.floor(n+i),a=Math.floor(t),l=Math.floor(t+r-.001),c=Math.floor(e-i),f=Math.floor(e+i);for(let h=s;h<=o;h++)for(let d=a;d<=l;d++)for(let g=c;g<=f;g++)if(qe(Yt(h,d,g)))return!0;return!1}function Fg(n){const t=n.vox;t.fill(oe);const e=n.cx*at,i=n.cz*at;for(let r=0;r<at;r++)for(let s=0;s<at;s++){const o=e+r,a=i+s,l=Kr(o,a),c=Yr(o,a,l),f=l<=ze+1&&c!==gr;for(let h=0;h<=l;h++){let d;h===l?d=Hu(l,c,f):h>l-3?d=c===wi||f?Bn:c===gr?me:Ti:d=me,t[ae(r,h,s)]=d}for(let h=l+1;h<=ze;h++)t[ae(r,h,s)]=Je}for(let r=0;r<at;r++)for(let s=0;s<at;s++){const o=e+r,a=i+s;let l=Vt-1;for(;l>0&&t[ae(r,l,s)]===oe;)l--;for(let c=2;c<l-1;c++){const f=t[ae(r,c,s)];if(f!==me&&f!==Ti)continue;const h=mo(o*.055,c*.085,a*.055),d=mo(o*.055+40,c*.085+40,a*.055+40),g=mo(o*.028+9,c*.05+9,a*.028+9);if(Math.abs(h-.5)<.066&&Math.abs(d-.5)<.066||g>.82){t[ae(r,c,s)]=oe;continue}if(f===me){const S=Pn(o*7,c*7,a*7);c<10&&S<.002?t[ae(r,c,s)]=is:c<18&&S<.005?t[ae(r,c,s)]=ns:c<32&&S<.009?t[ae(r,c,s)]=es:S<.015&&(t[ae(r,c,s)]=ts)}}}Bg(n),Og(n),Ig(n),n.state="generated",n.dirty=!1}function zr(n,t,e){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2246822519)^Ri()|0;return Ci(i)}function Nr(n,t,e,i,r,s){if(e<0||e>=Vt||re(t)!==n.cx||re(i)!==n.cz)return;const o=ae(ge(t),e,ge(i));s&&n.vox[o]!==oe||(n.vox[o]=r)}function Vu(n,t){const e=zr(n,t,9);if(e()>=yg)return null;const i=Do[Math.floor(e()*Do.length)],r=i.r+1,s=n*xn+r+Math.floor(e()*(xn-2*r)),o=t*xn+r+Math.floor(e()*(xn-2*r)),a=Kr(s,o);if(a<=ze+1||a+i.h>=Vt-1)return null;const l=Yr(s,o,a);if(i.biomes&&!i.biomes.includes(l))return null;let c=a,f=a;for(const[h,d]of[[-i.r,-i.r],[i.r,-i.r],[-i.r,i.r],[i.r,i.r]]){const g=Kr(s+h,o+d);g<c&&(c=g),g>f&&(f=g)}return f-c>i.flat||c<=ze?null:{def:i,ax:s,az:o,baseY:a}}function Og(n){const t=n.cx*at,e=n.cz*at,i=Cg,r=Math.floor((t-i)/xn),s=Math.floor((t+at-1+i)/xn),o=Math.floor((e-i)/xn),a=Math.floor((e+at-1+i)/xn);for(let l=r;l<=s;l++)for(let c=o;c<=a;c++){const f=Vu(l,c);if(!f)continue;const{def:h,ax:d,az:g,baseY:S}=f;if(d+h.r<t||d-h.r>=t+at||g+h.r<e||g-h.r>=e+at)continue;const v=(p,u,E,M,_=0)=>{const T=d+p,m=S+u,y=g+E;if(m<0||m>=Vt||re(T)!==n.cx||re(y)!==n.cz)return;const D=ae(ge(T),m,ge(y));n.vox[D]=M,n.meta[D]=_};if(h.build(v,zr(d,g,11)),h.found)for(let p=-h.r;p<=h.r;p++)for(let u=-h.r;u<=h.r;u++){const E=d+p,M=g+u;if(re(E)!==n.cx||re(M)!==n.cz)continue;const _=ge(E),T=ge(M);for(let m=1;m<=6;m++){const y=S-m;if(y<1)break;const D=ae(_,y,T);if(qe(n.vox[D]))break;n.vox[D]=me}}}}const ks=2;function Bg(n){const t=n.cx*at,e=n.cz*at;for(let i=t-ks;i<t+at+ks;i++)for(let r=e-ks;r<e+at+ks;r++){const s=Kr(i,r);if(s<=ze)continue;const o=Yr(i,r,s),a=s<=ze+1&&o!==gr,l=Hu(s,o,a);if(o===wi&&l===Bn){const S=zr(i,r,1);if(S()<.02){const v=2+Math.floor(S()*2);for(let p=1;p<=v;p++)Nr(n,i,s+p,r,Qr,!0)}continue}if(l!==En&&l!==ii)continue;const c=o===Wr?.02:o===lr?.004:o===Xr?.006:.0015,f=zr(i,r,1);if(f()>=c)continue;const h=o===Xr,d=4+Math.floor(f()*3);for(let S=1;S<=d;S++)Nr(n,i,s+S,r,Mn,!1);const g=s+d;for(let S=-2;S<=2;S++)for(let v=-2;v<=2;v++)for(let p=0;p<=2;p++){const u=Math.abs(S)+Math.abs(v)+p,E=f()>.08;u<=3&&!(S===0&&v===0&&p<1)&&E&&Nr(n,i+S,g+p,r+v,Ai,!0)}Nr(n,i,g+2,r,Ai,!0),h&&Nr(n,i,g+3,r,Sr,!0)}for(let i=0;i<at;i++)for(let r=0;r<at;r++){const s=t+i,o=e+r,a=Kr(s,o);if(a<=ze||n.vox[ae(i,a+1,r)]!==oe)continue;const l=n.vox[ae(i,a,r)],c=Yr(s,o,a);let f=0;const h=zr(s,o,2);if(l===En){const d=h();d<.1?f=ca:d<.13?f=Cu:d<.16?f=Lu:d<.175&&(f=Pu)}else l===ii?h()<.05&&(f=ca):l===Bn&&c===wi&&h()<.02&&(f=Vo);f&&(n.vox[ae(i,a+1,r)]=f)}}const ua=1337,os=document.createElement("canvas");os.width=ie*Po;os.height=ie;const Cc=os.getContext("2d"),ri=(n,t,e,i)=>{Cc.fillStyle=i,Cc.fillRect(n*ie+t,e,1,1)};function de(n,t,e,i){const r=Ci(ua+n*991);for(let s=0;s<ie;s++)for(let o=0;o<ie;o++){let[a,l,c]=t;if(c+=(r()-.5)*e,i){const f=i(o,s,r);if(f===null)continue;f&&(a=f[0],l=f[1],c=f[2]+(r()-.5)*e)}ri(n,o,s,`hsl(${a},${l}%,${c}%)`)}}function Aa(n,t){const e=Ci(ua+n*131);for(let r=0;r<ie;r++)for(let s=0;s<ie;s++)ri(n,s,r,`hsl(220,4%,${46+(e()-.5)*10}%)`);const i=Ci(ua+n*977);for(let r=0;r<11;r++){const s=1+Math.floor(i()*13),o=1+Math.floor(i()*13);for(const[a,l]of[[0,0],[1,0],[0,1],[1,1]])ri(n,s+a,o+l,t)}}function Ui(n,t){for(let e=0;e<ie;e++)for(let i=0;i<ie;i++){const r=t(i,e);r&&ri(n,i,e,r)}}de(0,[105,45,38],12);de(1,[28,42,32],10,(n,t,e)=>t<4?[105,45,36]:t<5&&e()<.5?[105,45,34]:0);de(2,[28,42,32],12);de(3,[220,4,46],10,(n,t,e)=>e()<.06?[220,4,30]:0);de(4,[48,55,72],8);de(5,[28,50,26],8,n=>n%5===0?[28,50,18]:0);de(6,[35,45,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))%3===0?[35,45,28]:0);de(7,[110,48,28],14,(n,t,e)=>e()<.1?[110,50,18]:0);de(8,[32,48,46],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[32,40,30]:0);de(9,[8,55,42],6,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[20,20,75]:0);de(10,[214,70,52],8);de(11,[205,25,93],4);de(23,[28,42,32],10,(n,t,e)=>t<5?[205,20,92]:t<7&&e()<.5?[205,20,88]:0);de(12,[110,40,36],8,n=>n===2||n===8||n===13?[110,45,26]:n===5||n===11?[110,38,44]:0);de(13,[110,42,40],6,(n,t)=>Math.max(Math.abs(n-8),Math.abs(t-8))>6?[110,45,30]:0);Aa(14,"#202024");Aa(15,"#c8a078");Aa(16,"#e8c84a");Aa(17,"#5fd8e0");Ui(18,(n,t)=>t<5?null:[3,6,8,11,13].includes(n)&&t>3+n*7%4?`hsl(100,45%,${30+n%3*6}%)`:null);Ui(19,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(0,70%,55%)":null);Ui(20,(n,t)=>n>=7&&n<=8&&t>=6?"hsl(120,45%,32%)":t>=3&&t<=6&&n>=5&&n<=10&&Math.abs(n-7.5)+Math.abs(t-4.5)<3?"hsl(50,85%,55%)":null);Ui(21,(n,t)=>n>=7&&n<=8&&t>=8?"hsl(40,15%,82%)":t>=4&&t<=8&&n>=4&&n<=11&&Math.abs(n-7.5)+Math.abs(t-6)<4?"hsl(0,55%,45%)":null);Ui(22,(n,t)=>{const e=Math.abs(n-8)+Math.abs(t-10)<5&&(n+t)%2===0;return t>5&&e?"hsl(30,40%,32%)":null});(()=>{for(let t=0;t<ie;t++)for(let e=0;e<ie;e++)e===0||t===0||e===ie-1||t===ie-1?ri(24,e,t,"hsl(200,28%,80%)"):(e-t===3||e-t===4)&&e<9&&ri(24,e,t,"hsl(200,45%,92%)")})();(()=>{const t=Ci(ua+3275);for(let e=0;e<ie;e++)for(let i=0;i<ie;i++)i>=6&&i<=9&&(e>=7?ri(25,i,e,`hsl(28,52%,${30+(t()-.5)*10}%)`):e>=2&&e<=6&&ri(25,i,e,`hsl(${34+t()*16},92%,${56+(t()-.5)*16}%)`))})();de(26,[30,46,38],8,(n,t)=>n<=1||n>=14||t<=1||t>=14||n>=6&&n<=9&&(t===7||t===8)?[30,40,26]:n===12&&t>=7&&t<=9?[44,25,78]:0);de(27,[220,5,52],8,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?[220,6,34]:0);de(28,[220,5,50],8,(n,t,e)=>t%4===0||(n+(Math.floor(t/4)%2?4:0))%8===0?e()<.3?[110,30,30]:[220,6,32]:e()<.16?[110,32,36]:0);de(29,[210,10,88],4,(n,t)=>(n+t*2)%13===0?[215,14,74]:(n*2+t)%11===0?[210,12,80]:0);de(30,[220,4,58],6,(n,t)=>n%8===0||t%8===0?[220,5,38]:0);de(31,[24,40,22],5,(n,t)=>t%4===0||(n+(Math.floor(t/4)%2?8:0))%16===0?[24,36,13]:0);Ui(32,(n,t)=>n===2||n===3||n===7||n===8||n===12||n===13||(t===7||t===8)?`hsl(210,6%,${52+(n*5+t*3)%3*4}%)`:null);Ui(33,(n,t)=>{const e=n<=1||n>=14||t<=1||t>=14,i=n===4||n===5||n===10||n===11||t===7||t===8;return e?"hsl(210,8%,42%)":i?`hsl(210,6%,${54+(n*5+t*3)%3*4}%)`:null});const zg=os,gi=new Ho(os);gi.magFilter=be;gi.minFilter=be;gi.colorSpace=ye;function ea(n,t,e){const i=(n*ie+.5)/(ie*Po),r=((n+1)*ie-.5)/(ie*Po),s=.5/ie,o=(ie-.5)/ie;return[i+(r-i)*t,s+(o-s)*e]}const ku={uDayBright:{value:1}};function Gg(n){ku.uDayBright.value=n}function Ws(n){return n.onBeforeCompile=t=>{t.uniforms.uDayBright=ku.uDayBright,t.fragmentShader=`uniform float uDayBright;
`+t.fragmentShader.replace("#include <color_fragment>",`#ifdef USE_COLOR
         float _sky = vColor.r, _blk = vColor.g, _ao = vColor.b;
         float _lit = max(_sky * uDayBright, _blk);
         _lit = max(_lit, 0.05);          // minimaler Ambient -> nie komplett schwarz
         diffuseColor.rgb *= _lit * _ao;
       #endif`)},n.customProgramCacheKey=()=>"bw-light-v1",n}function Hg(){const n=Ws(new mn({map:gi,vertexColors:!0})),t=Ws(new mn({map:gi,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1})),e=Ws(new mn({map:gi,vertexColors:!0,alphaTest:.5,side:sn})),i=Ws(new mn({map:gi,vertexColors:!0,alphaTest:.5,side:sn}));return{matSolid:n,matWater:t,matPlant:e,matGlass:i}}const Lc=[{dir:[-1,0,0],sh:.72,c:[[0,1,0,0,1],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,1,0]]},{dir:[1,0,0],sh:.72,c:[[1,1,1,0,1],[1,0,1,0,0],[1,1,0,1,1],[1,0,0,1,0]]},{dir:[0,-1,0],sh:.5,c:[[1,0,1,1,0],[0,0,1,0,0],[1,0,0,1,1],[0,0,0,0,1]]},{dir:[0,1,0],sh:1,c:[[0,1,1,1,1],[1,1,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]},{dir:[0,0,-1],sh:.86,c:[[1,0,0,0,0],[0,0,0,1,0],[1,1,0,0,1],[0,1,0,1,1]]},{dir:[0,0,1],sh:.86,c:[[0,0,1,0,0],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,1,1]]}],Pc=[.42,.62,.8,1],Vg=[[[0,0,0],[1,0,1],[0,1,0],[1,1,1]],[[1,0,0],[0,0,1],[1,1,0],[0,1,1]]];function Dc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,f=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[f]=r[f]?1:-1;const g=qe(Yt(s+h[0],o+h[1],a+h[2]))?1:0,S=qe(Yt(s+d[0],o+d[1],a+d[2]))?1:0,v=qe(Yt(s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]))?1:0;return g&&S?0:3-(g+S+v)}function Uc(n,t,e,i,r){const s=n+i[0],o=t+i[1],a=e+i[2],l=i[0]!==0?0:i[1]!==0?1:2,c=l===0?1:0,f=l===2?1:2,h=[0,0,0],d=[0,0,0];h[c]=r[c]?1:-1,d[f]=r[f]?1:-1;const g=[[s,o,a],[s+h[0],o+h[1],a+h[2]],[s+d[0],o+d[1],a+d[2]],[s+h[0]+d[0],o+h[1]+d[1],a+h[2]+d[2]]];let S=0,v=0,p=0;for(const[u,E,M]of g){if(hn(Yt(u,E,M)))continue;const _=Sn(u,E,M);S+=_>>4,v+=_&15,p++}if(p===0){const u=Sn(s,o,a);return[u>>4,u&15]}return[S/p,v/p]}const Xs=["solid","water","plant","glass"];function er(n,t,e,i,r,s,o,a,l){const c=n.p.length/3,f=[t,e,i,r],h=[[0,0],[1,0],[0,1],[1,1]];for(let d=0;d<4;d++){n.p.push(f[d][0],f[d][1],f[d][2]);const g=ea(s,h[d][0],h[d][1]);n.u.push(g[0],g[1]),n.c.push(o,a,l)}n.i.push(c,c+1,c+2,c+2,c+1,c+3)}function qs(n,t,e,i,r,s,o,a,l,c,f){const h=Sn(l,c,f),d=(h>>4)/15,g=(h&15)/15;er(n,[t,e,o],[r,e,o],[t,s,o],[r,s,o],a,d,g,.86),er(n,[r,e,i],[t,e,i],[r,s,i],[t,s,i],a,d,g,.86),er(n,[r,e,o],[r,e,i],[r,s,o],[r,s,i],a,d,g,.72),er(n,[t,e,i],[t,e,o],[t,s,i],[t,s,o],a,d,g,.72),er(n,[t,s,o],[r,s,o],[t,s,i],[r,s,i],a,d,g,1),er(n,[t,e,i],[r,e,i],[t,e,o],[r,e,o],a,d,g,.5)}function kg({scene:n,materials:t}){const{matSolid:e,matWater:i,matPlant:r,matGlass:s}=t,o={solid:e,water:i,plant:r,glass:s},a={};function l(g,S){const v=he(g,S),p=a[v];if(p)for(const u of Xs)p[u]&&(n.remove(p[u]),p[u].geometry.dispose());delete a[v]}function c(){for(const g in a){const S=a[g];for(const v of Xs)S[v]&&(n.remove(S[v]),S[v].geometry.dispose());delete a[g]}}function f(g,S){const v=he(g,S),p=a[v];if(p)for(const y of Xs)p[y]&&(n.remove(p[y]),p[y].geometry.dispose());const u=Te(g,S);if(!u||u.state==="empty"){delete a[v];return}const E=u.vox,M={solid:{p:[],u:[],c:[],i:[]},water:{p:[],u:[],c:[],i:[]},plant:{p:[],u:[],c:[],i:[]},glass:{p:[],u:[],c:[],i:[]}},_=g*at,T=S*at;for(let y=0;y<at;y++)for(let D=0;D<at;D++)for(let x=0;x<Vt;x++){const A=E[ae(y,x,D)];if(A===oe)continue;const P=_+y,I=T+D;if(Du(A)){const V=Eg[A],z=M.plant,k=Sn(P,x,I),K=(k>>4)/15,W=(k&15)/15;for(const N of Vg){const Q=z.p.length/3,rt=[[0,0],[1,0],[0,1],[1,1]];for(let ft=0;ft<4;ft++){const ht=N[ft];z.p.push(P+.04+ht[0]*.92,x+ht[1],I+.04+ht[2]*.92);const vt=ea(V,rt[ft][0],rt[ft][1]);z.u.push(vt[0],vt[1]),z.c.push(K,W,.9)}z.i.push(Q,Q+1,Q+2,Q+2,Q+1,Q+3)}continue}if(A===gn){qs(M.plant,P+.44,x,I+.44,P+.56,x+.62,I+.56,nr[gn][0],P,x,I);continue}if(kr(A)){const V=cr(P,x,I),z=(V&1)===1,k=A===bi||A===Er;let K,W,N,Q;k?z?(K=P,W=P+.18,N=I,Q=I+1):(N=I,Q=I+.18,K=P,W=P+1):z?(N=I+.41,Q=I+.59,K=P,W=P+1):(K=P+.41,W=P+.59,N=I,Q=I+1),qs(M.plant,K,x,N,W,x+1,Q,nr[A][0],P,x,I);continue}if(Ea(A)){const V=cr(P,x,I)&3,z=nr[A][1];qs(M.plant,P,x,I,P+1,x+.5,I+1,z,P,x,I);let k=P,K=P+1,W=I,N=I+1;V===0?N=I+.5:V===1?k=P+.5:V===2?W=I+.5:K=P+.5,qs(M.plant,k,x+.5,W,K,x+1,N,z,P,x,I);continue}if(A===je||A===yr){const V=M.glass,[z,k,K]=nr[A];for(let W=0;W<6;W++){const N=Lc[W],Q=Yt(P+N.dir[0],x+N.dir[1],I+N.dir[2]);if(hn(Q)||Q===A)continue;const rt=N.dir[1]===1?z:N.dir[1]===-1?K:k,ft=V.p.length/3,ht=[];for(const vt of N.c){V.p.push(P+vt[0],x+vt[1],I+vt[2]);const et=ea(rt,vt[3],vt[4]);V.u.push(et[0],et[1]);const U=Dc(P,x,I,N.dir,vt);ht.push(U);const Y=N.sh*Pc[U],[C,nt]=Uc(P,x,I,N.dir,vt);V.c.push(C/15,nt/15,Y)}ht[0]+ht[3]>ht[1]+ht[2]?V.i.push(ft,ft+1,ft+3,ft,ft+3,ft+2):V.i.push(ft,ft+1,ft+2,ft+2,ft+1,ft+3)}continue}const j=A===Je,L=j?M.water:M.solid,[O,B,q]=nr[A];for(let V=0;V<6;V++){const z=Lc[V],k=Yt(P+z.dir[0],x+z.dir[1],I+z.dir[2]);if(!(j?k===oe:!hn(k)&&k!==A))continue;const W=z.dir[1]===1?O:z.dir[1]===-1?q:B,N=L.p.length/3,Q=[];for(const rt of z.c){L.p.push(P+rt[0],x+rt[1],I+rt[2]);const ft=ea(W,rt[3],rt[4]);L.u.push(ft[0],ft[1]);const ht=j?3:Dc(P,x,I,z.dir,rt);Q.push(ht);const vt=z.sh*Pc[ht],[et,U]=Uc(P,x,I,z.dir,rt);L.c.push(et/15,U/15,vt)}Q[0]+Q[3]>Q[1]+Q[2]?L.i.push(N,N+1,N+3,N,N+3,N+2):L.i.push(N,N+1,N+2,N+2,N+1,N+3)}}const m={solid:null,water:null,plant:null,glass:null};for(const y of Xs){const D=M[y];if(!D.i.length)continue;const x=new De;x.setAttribute("position",new Be(D.p,3)),x.setAttribute("uv",new Be(D.u,2)),x.setAttribute("color",new Be(D.c,3)),x.setIndex(D.i);const A=new He(x,o[y]);n.add(A),m[y]=A}a[v]=m,u.state="meshed",u.dirty=!1}function h(g,S){const v=Te(g,S);v&&v.state==="meshed"&&f(g,S)}function d(g,S){const v=Math.floor(g/at),p=Math.floor(S/at);f(v,p);const u=(g%at+at)%at,E=(S%at+at)%at;u===0&&h(v-1,p),u===at-1&&h(v+1,p),E===0&&h(v,p-1),E===at-1&&h(v,p+1)}return{rebuildAt:d,buildChunk:f,disposeChunk:l,disposeAll:c,chunkMeshes:a}}const fn=15;function Wg(){let n=new Set;const t=(_,T)=>n.add(he(re(_),re(T))),e=(_,T,m)=>Sn(_,T,m)>>4,i=(_,T,m)=>Sn(_,T,m)&15,r=(_,T,m,y)=>Rc(_,T,m,y<<4|Sn(_,T,m)&15),s=(_,T,m,y)=>Rc(_,T,m,Sn(_,T,m)&240|y);let o=[],a=[],l=[];const c=(_,T)=>{const m=Te(re(_),re(T));return m&&m.state!=="empty"};function f(_,T,m,y){y<=0||T<0||T>=Vt||c(_,m)&&(hn(Yt(_,T,m))||e(_,T,m)>=y||(r(_,T,m,y),t(_,m),o.push(_),a.push(T),l.push(m)))}function h(){let _=0;for(;_<o.length;){const T=o[_],m=a[_],y=l[_];_++;const D=e(T,m,y);if(D<=1)continue;const x=D-1;f(T-1,m,y,x),f(T+1,m,y,x),f(T,m,y-1,x),f(T,m,y+1,x),f(T,m+1,y,x),f(T,m-1,y,D===fn?fn:x)}o=[],a=[],l=[]}function d(_,T,m,y){y<=0||T<0||T>=Vt||c(_,m)&&(hn(Yt(_,T,m))||i(_,T,m)>=y||(s(_,T,m,y),t(_,m),o.push(_),a.push(T),l.push(m)))}function g(){let _=0;for(;_<o.length;){const T=o[_],m=a[_],y=l[_];_++;const D=i(T,m,y)-1;d(T-1,m,y,D),d(T+1,m,y,D),d(T,m,y-1,D),d(T,m,y+1,D),d(T,m+1,y,D),d(T,m-1,y,D)}o=[],a=[],l=[]}function S(_,T){const m=Te(_,T);if(!m)return new Set;n=new Set,n.add(he(_,T));const y=_*at,D=T*at,x=new Array(9);for(let et=-1;et<=1;et++)for(let U=-1;U<=1;U++)x[(et+1)*3+(U+1)]=Te(_+U,T+et);const A=(et,U)=>{const Y=Math.floor(et/at)-_,C=Math.floor(U/at)-T;return Y<-1||Y>1||C<-1||C>1?null:x[(C+1)*3+(Y+1)]},P=(et,U,Y)=>U*at*at+(Y%at+at)%at*at+(et%at+at)%at,I=(et,U,Y)=>{if(U<0||U>=Vt)return U<0;const C=A(et,Y);return!C||C.state==="empty"?!0:hn(C.vox[P(et,U,Y)])},j=(et,U,Y)=>{if(U>=Vt)return fn;if(U<0)return 0;const C=A(et,Y);return!C||C.state==="empty"?0:C.light[P(et,U,Y)]>>4},L=(et,U,Y,C)=>{const nt=A(et,Y);if(!nt)return;const X=P(et,U,Y);nt.light[X]=nt.light[X]&15|C<<4,nt!==m&&n.add(he(nt.cx,nt.cz))},O=[],B=[],q=[],V=(et,U,Y,C)=>C>0&&U>=0&&U<Vt&&!I(et,U,Y)&&j(et,U,Y)<C,z=(et,U,Y,C)=>V(et-1,U,Y,C-1)||V(et+1,U,Y,C-1)||V(et,U,Y-1,C-1)||V(et,U,Y+1,C-1)||V(et,U+1,Y,C-1)||V(et,U-1,Y,C===fn?fn:C-1),k=at+2,K=new Int16Array(k*k).fill(-1),W=(et,U)=>(U+1)*k+(et+1);for(let et=0;et<at;et++)for(let U=0;U<at;U++){let Y=!0,C=-1;for(let nt=Vt-1;nt>=0;nt--){const X=nt*at*at+U*at+et;hn(m.vox[X])&&(Y=!1,C<0&&(C=nt)),m.light[X]=m.light[X]&15|(Y?fn:0)<<4}K[W(et,U)]=C}const N=(et,U)=>{const Y=y+et,C=D+U;let nt=-1;for(let X=Vt-1;X>=0;X--)if(I(Y,X,C)){nt=X;break}K[W(et,U)]=nt};for(let et=-1;et<=at;et++)N(et,-1),N(et,at);for(let et=0;et<at;et++)N(-1,et),N(at,et);let Q=-1;for(let et=0;et<at;et++)for(let U=0;U<at;U++){const Y=Math.max(K[W(et,U)],K[W(et-1,U)],K[W(et+1,U)],K[W(et,U-1)],K[W(et,U+1)]);Y>Q&&(Q=Y);const C=y+et,nt=D+U,X=Math.min(Y+1,Vt-1);for(let it=0;it<=X;it++){const st=m.light[it*at*at+U*at+et]>>4;st<=1||z(C,it,nt,st)&&(O.push(C),B.push(it),q.push(nt))}}const rt=Math.min(Q+1,Vt-1);for(let et=0;et<=rt;et++)for(let U=0;U<at;U++)ft(y-1,et,D+U,y,et,D+U),ft(y+at,et,D+U,y+at-1,et,D+U),ft(y+U,et,D-1,y+U,et,D),ft(y+U,et,D+at,y+U,et,D+at-1);function ft(et,U,Y,C,nt,X){if(I(et,U,Y))return;const it=j(et,U,Y);it<=1||I(C,nt,X)||j(C,nt,X)>=it-1||(O.push(et),B.push(U),q.push(Y))}const ht=(et,U,Y,C)=>{C<=0||U<0||U>=Vt||I(et,U,Y)||j(et,U,Y)>=C||(L(et,U,Y,C),O.push(et),B.push(U),q.push(Y))};let vt=0;for(;vt<O.length;){const et=O[vt],U=B[vt],Y=q[vt];vt++;const C=j(et,U,Y);if(C<=1)continue;const nt=C-1;ht(et-1,U,Y,nt),ht(et+1,U,Y,nt),ht(et,U,Y-1,nt),ht(et,U,Y+1,nt),ht(et,U+1,Y,nt),ht(et,U-1,Y,C===fn?fn:nt)}return n}function v(_,T){const m=Te(_,T);if(!m)return new Set;n=new Set,n.add(he(_,T));const y=_*at,D=T*at,x=at*at;for(let P=0;P<m.vox.length;P++){const I=ho(m.vox[P]);if(!I)continue;const j=P/x|0,L=P%x,O=y+L%at,B=D+(L/at|0);(m.light[P]&15)<I&&(m.light[P]=m.light[P]&240|I,o.push(O),a.push(j),l.push(B))}const A=(P,I,j,L,O)=>{if(!(!P||P.state==="empty"))for(let B=0;B<Vt;B++)for(let q=0;q<at;q++){const V=I(q),z=j(q),k=P.light[B*x+z*at+V]&15;if(k<=1)continue;const K=B*x+O(q)*at+L(q);(m.light[K]&15)>=k-1||hn(m.vox[K])||(o.push(P.cx*at+V),a.push(B),l.push(P.cz*at+z))}};return A(Te(_-1,T),()=>at-1,P=>P,()=>0,P=>P),A(Te(_+1,T),()=>0,P=>P,()=>at-1,P=>P),A(Te(_,T-1),P=>P,()=>at-1,P=>P,()=>0),A(Te(_,T+1),P=>P,()=>0,P=>P,()=>at-1),g(),n}function p(_,T,m){const y=e(_,T,m);if(y===0)return;r(_,T,m,0),t(_,m);const D=[_],x=[T],A=[m],P=[y],I=[],j=[],L=[];let O=0;for(;O<D.length;){const B=D[O],q=x[O],V=A[O],z=P[O];O++;const k=[[B-1,q,V,!1],[B+1,q,V,!1],[B,q,V-1,!1],[B,q,V+1,!1],[B,q+1,V,!1],[B,q-1,V,!0]];for(const[K,W,N,Q]of k){if(W<0||W>=Vt||!c(K,N))continue;const rt=e(K,W,N);rt!==0&&(rt<z||Q&&z===fn?(r(K,W,N,0),t(K,N),D.push(K),x.push(W),A.push(N),P.push(rt)):(I.push(K),j.push(W),L.push(N)))}}for(let B=0;B<I.length;B++)o.push(I[B]),a.push(j[B]),l.push(L[B]);h()}function u(_,T,m){let y=0;e(_,T+1,m)===fn&&!hn(Yt(_,T+1,m))&&(y=fn);for(const[D,x,A]of[[_-1,T,m],[_+1,T,m],[_,T,m-1],[_,T,m+1],[_,T+1,m],[_,T-1,m]]){const P=e(D,x,A)-1;P>y&&(y=P)}y>0&&(r(_,T,m,y),t(_,m),o.push(_),a.push(T),l.push(m),h())}function E(_,T,m){const y=i(_,T,m);if(y===0)return;s(_,T,m,0),t(_,m);const D=[_],x=[T],A=[m],P=[y],I=[],j=[],L=[];let O=0;for(;O<D.length;){const B=D[O],q=x[O],V=A[O],z=P[O];O++;for(const[k,K,W]of[[B-1,q,V],[B+1,q,V],[B,q,V-1],[B,q,V+1],[B,q+1,V],[B,q-1,V]]){if(K<0||K>=Vt||!c(k,W))continue;const N=i(k,K,W);N!==0&&(N<z?(s(k,K,W,0),t(k,W),D.push(k),x.push(K),A.push(W),P.push(N)):(I.push(k),j.push(K),L.push(W)))}}for(let B=0;B<I.length;B++)o.push(I[B]),a.push(j[B]),l.push(L[B]);g()}function M(_,T,m,y,D){n=new Set;const x=hn(y),A=hn(D);A&&!x?p(_,T,m):!A&&x&&u(_,T,m);const P=ho(y),I=ho(D);if(I>P?(s(_,T,m,I),t(_,m),o.push(_),a.push(T),l.push(m),g()):I<P&&E(_,T,m),!A&&x){let j=0;for(const[L,O,B]of[[_-1,T,m],[_+1,T,m],[_,T,m-1],[_,T,m+1],[_,T+1,m],[_,T-1,m]]){const q=i(L,O,B)-1;q>j&&(j=q)}j>i(_,T,m)&&(s(_,T,m,j),t(_,m),o.push(_),a.push(T),l.push(m),g())}return n}return{computeChunkSkylight:S,seedChunkBlocklight:v,relight:M,getSky:e,getBlk:i}}function Xg({mesher:n,light:t}){const e=E=>Math.floor(E/at),i=(E,M,_,T)=>Math.max(Math.abs(E-_),Math.abs(M-T));let r=[],s=NaN,o=NaN,a=!1;const l=E=>{a=E};function c(E,M){let _=Te(E,M);_||(_=Lg(E,M)),_.state==="empty"&&Fg(_)}function f(E,M){const _=Te(E,M);if(!_||_.state!=="generated")return;const T=t.computeChunkSkylight(E,M),m=t.seedChunkBlocklight(E,M);_.state="lit";for(const y of[T,m])for(const D of y){const x=Ve.get(D);x&&x.state==="meshed"&&(x.dirty=!0)}}const h=E=>E&&(E.state==="lit"||E.state==="meshed");function d(E,M){for(let _=-1;_<=1;_++)for(let T=-1;T<=1;T++)if(!h(Te(E+_,M+T)))return!1;return!0}function g(E,M){const _=e(E),T=e(M);s=_,o=T;for(const[y,D]of Ve)i(D.cx,D.cz,_,T)>qn+2&&(n.disposeChunk(D.cx,D.cz),Ve.delete(y));const m=qn+1;r=[];for(let y=_-m;y<=_+m;y++)for(let D=T-m;D<=T+m;D++){const x=Te(y,D);(!x||x.state==="empty")&&r.push([y,D])}r.sort((y,D)=>i(y[0],y[1],_,T)-i(D[0],D[1],_,T))}function S(E,M){const _=e(E),T=e(M),m=qn+1;let y=a?1:1/0,D=0;for(;r.length&&D<xg&&y>0;){const[P,I]=r.shift();c(P,I),D++,y--}const x=[];for(let P=_-m;P<=_+m;P++)for(let I=T-m;I<=T+m;I++){const j=Te(P,I);j&&j.state==="generated"&&x.push([P,I])}x.sort((P,I)=>i(P[0],P[1],_,T)-i(I[0],I[1],_,T));for(let P=0;P<Mg&&P<x.length&&y>0;P++)f(x[P][0],x[P][1]),y--;const A=[];for(let P=_-qn;P<=_+qn;P++)for(let I=T-qn;I<=T+qn;I++){const j=Te(P,I);!j||j.state==="empty"||j.state==="generated"||(j.state==="lit"||j.dirty)&&d(P,I)&&A.push([P,I])}A.sort((P,I)=>i(P[0],P[1],_,T)-i(I[0],I[1],_,T));for(let P=0;P<Sg&&P<A.length&&y>0;P++)n.buildChunk(A[P][0],A[P][1]),y--}function v(E,M){const _=e(E),T=e(M);(_!==s||T!==o)&&g(E,M),S(E,M)}function p(E,M,_=3){const T=e(E),m=e(M);for(let y=T-_-1;y<=T+_+1;y++)for(let D=m-_-1;D<=m+_+1;D++)c(y,D);for(let y=T-_-1;y<=T+_+1;y++)for(let D=m-_-1;D<=m+_+1;D++)f(y,D);for(let y=T-_;y<=T+_;y++)for(let D=m-_;D<=m+_;D++)d(y,D)&&n.buildChunk(y,D);s=NaN}return{update:v,ensureAround:g,tick:S,warmup:p,loadedCount:()=>Ve.size,setVRMode:l}}const Ys=8,Ks=8;function qg({camera:n,ctx:t}){const e={pos:new G(Ys+.5,Vt,Ks+.5),vel:new G,yaw:Math.PI*.25,pitch:-.1,onGround:!1,fly:!1,W:.3,H:1.8,EYE:1.62};let i=0,r=!1,s=0,o=!1,a=!1;const l=v=>di(v.x,v.y,v.z,e.W,e.H);function c(){const v=Math.floor(e.pos.y),p=Math.floor(e.pos.x-e.W),u=Math.floor(e.pos.x+e.W),E=Math.floor(e.pos.z-e.W),M=Math.floor(e.pos.z+e.W);for(let _=p;_<=u;_++)for(let T=E;T<=M;T++)if(Ea(Yt(_,v,T)))return!0;return!1}function f(v,p){if(p)if(e.pos[v]+=p,l(e.pos)){if(v!=="y"&&!e.fly&&(e.onGround&&c()||a)){const E=e.pos.y;if(e.pos.y=Math.floor(E)+1.001,!l(e.pos)){e.vel.y=0;return}e.pos.y=E}const u=Math.sign(p);v==="x"&&(e.pos.x=u>0?Math.floor(e.pos.x+e.W)-e.W-.001:Math.floor(e.pos.x-e.W)+1+e.W+.001),v==="z"&&(e.pos.z=u>0?Math.floor(e.pos.z+e.W)-e.W-.001:Math.floor(e.pos.z-e.W)+1+e.W+.001),v==="y"&&(u>0?e.pos.y=Math.floor(e.pos.y+e.H)-e.H-.001:(e.pos.y=Math.floor(e.pos.y)+1.001,e.onGround=!0),e.vel.y=0)}else v==="y"&&p<0&&(e.onGround=!1)}function h(){for(let p=0;p<=48;p++)for(let u=-p;u<=p;u++)for(let E=-p;E<=p;E++){if(Math.max(Math.abs(u),Math.abs(E))!==p)continue;const M=Ys+u,_=Ks+E;let T=Vt-1;for(;T>0&&Yt(M,T,_)===0;)T--;if(T>ze&&qe(Yt(M,T,_)))return{x:M,y:T,z:_}}let v=Vt-1;for(;v>0&&Yt(Ys,v,Ks)===0;)v--;return{x:Ys,y:v,z:Ks}}function d(v){if(v){e.pos.set(v[0],v[1],v[2]),e.yaw=v[3]??e.yaw,e.pitch=v[4]??e.pitch,e.vel.set(0,0,0);return}const p=h();e.pos.set(p.x+.5,p.y+1.01,p.z+.5),e.vel.set(0,0,0)}function g(v){const p={step:null,land:null,splash:!1},u=t.keys,E=e.fly?12:5.4;let M=0,_=0;u.KeyW&&(_-=1),u.KeyS&&(_+=1),u.KeyA&&(M-=1),u.KeyD&&(M+=1);const T=Math.hypot(M,_)||1,m=Math.sin(e.yaw),y=Math.cos(e.yaw);let D=(M*y+_*m)/T*E,x=(_*y-M*m)/T*E;if(t.vrMove&&(D=t.vrMove.x*E,x=t.vrMove.z*E),e.fly){e.vel.y=0;const A=Math.cos(e.pitch),P=Math.sin(e.pitch),I=-_/T,j=M/T;let L=(I*-m*A+j*y)*E,O=(I*-y*A-j*m)*E,B=I*P*E;t.vrMove&&(L=t.vrMove.x*E,B=(t.vrMove.y||0)*E,O=t.vrMove.z*E),u.Space&&(B=E),(u.ShiftLeft||u.ShiftRight)&&(B=-E),f("x",L*v),f("z",O*v),f("y",B*v)}else{s=e.vel.y,o=e.onGround,e.vel.y-=28*v,u.Space&&e.onGround&&(e.vel.y=8.6,e.onGround=!1);const A=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y+.5),Math.floor(e.pos.z))===Je;A&&!r&&s<-3&&(p.splash=!0),r=A,a=A,A&&(e.vel.y=Math.max(e.vel.y,-3),u.Space&&(e.vel.y=3.2)),f("x",D*v*(A?.6:1)),f("z",x*v*(A?.6:1)),f("y",e.vel.y*v),!o&&e.onGround&&s<-7&&(p.land=-s-7),e.onGround&&(D||x)&&!A?(i+=Math.hypot(D,x)*v,i>2.2&&(i=0,p.step=Yt(Math.floor(e.pos.x),Math.floor(e.pos.y-.5),Math.floor(e.pos.z)))):i=0,e.pos.y<-20&&d(null)}return p}function S(){const v=new G(0,0,-1).applyEuler(n.rotation);let p=Math.floor(n.position.x),u=Math.floor(n.position.y),E=Math.floor(n.position.z);const M=Math.sign(v.x),_=Math.sign(v.y),T=Math.sign(v.z),m=Math.abs(1/v.x),y=Math.abs(1/v.y),D=Math.abs(1/v.z);let x=(M>0?p+1-n.position.x:n.position.x-p)*m,A=(_>0?u+1-n.position.y:n.position.y-u)*y,P=(T>0?E+1-n.position.z:n.position.z-E)*D,I=0,j=0,L=0;for(let O=0;O<140;O++){if(x<A&&x<P){if(x>8)break;p+=M,I=-M,j=0,L=0,x+=m}else if(A<P){if(A>8)break;u+=_,j=-_,I=0,L=0,A+=y}else{if(P>8)break;E+=T,L=-T,I=0,j=0,P+=D}const B=Yt(p,u,E);if(B!==0&&B!==Je&&!(B>=17&&B<=21))return{x:p,y:u,z:E,nx:I,ny:j,nz:L}}return null}return{player:e,update:g,raycast:S,spawnPlayer:d,moveAxis:f,boxCollides:l}}const $s=220;function Yg({scene:n}){const t=new Ee,e=new bu(new Gn(.16,.16,.16),new mn({vertexColors:!1}),$s);e.instanceMatrix.setUsage(iu),n.add(e);const i=[];for(let o=0;o<$s;o++)i.push({life:0,x:0,y:0,z:0,vx:0,vy:0,vz:0}),t.scale.set(0,0,0),t.position.set(0,-999,0),t.updateMatrix(),e.setMatrixAt(o,t.matrix),e.setColorAt(o,new Ot(16777215));e.instanceMatrix.needsUpdate=!0;function r(o,a,l,c,f,h,d){const g=new Ot(c);let S=0;for(let v=0;v<$s&&S<f;v++){if(i[v].life>0)continue;const p=i[v];p.life=.5+Math.random()*.4,p.x=o,p.y=a,p.z=l,p.vx=(Math.random()-.5)*h,p.vz=(Math.random()-.5)*h,p.vy=d+Math.random()*d,e.setColorAt(v,g),S++}e.instanceColor.needsUpdate=!0}function s(o){let a=!1;for(let l=0;l<$s;l++){const c=i[l];if(!(c.life<=0)){if(a=!0,c.life-=o,c.vy-=14*o,c.x+=c.vx*o,c.y+=c.vy*o,c.z+=c.vz*o,qe(Yt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(c.vy=Math.abs(c.vy)*.3,c.y+=.02,c.vx*=.5,c.vz*=.5),c.life<=0)t.position.set(0,-999,0),t.scale.set(0,0,0);else{const f=Math.min(1,c.life*3);t.position.set(c.x,c.y,c.z),t.scale.set(f,f,f)}t.updateMatrix(),e.setMatrixAt(l,t.matrix)}}a&&(e.instanceMatrix.needsUpdate=!0)}return{spawn:r,update:s}}function Kg({ctx:n,player:t}){let e=null,i=null,r=null,s=null,o=!1,a=null,l=null,c=null,f=null,h=null,d=!0,g=0,S=null;const v=()=>r||e.destination;function p(){if(e){e.state==="suspended"&&e.resume();return}try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}e&&(i=e.createBiquadFilter(),i.type="lowpass",i.frequency.value=2e4,i.connect(e.destination),r=e.createGain(),r.gain.value=1,r.connect(i),s=e.createGain(),s.gain.value=1,s.connect(i),I())}const u=U=>{const Y=e.sampleRate*U,C=e.createBuffer(1,Y,e.sampleRate),nt=C.getChannelData(0);for(let X=0;X<Y;X++)nt[X]=Math.random()*2-1;return C};function E(U,Y,C,nt){if(!e)return;const X=e.sampleRate*U,it=e.createBuffer(1,X,e.sampleRate),st=it.getChannelData(0);for(let b=0;b<X;b++)st[b]=(Math.random()*2-1)*(1-b/X);const Et=e.createBufferSource();Et.buffer=it;const Mt=e.createBiquadFilter();Mt.type="bandpass",Mt.frequency.value=Y,Mt.Q.value=nt||1;const R=e.createGain();R.gain.value=C,Et.connect(Mt),Mt.connect(R),R.connect(v()),Et.start()}function M(U,Y,C){if(!e)return;const nt=e.createOscillator(),X=e.createGain();nt.type="triangle",nt.frequency.setValueAtTime(U,e.currentTime),nt.frequency.exponentialRampToValueAtTime(U*.55,e.currentTime+Y),X.gain.setValueAtTime(C,e.currentTime),X.gain.exponentialRampToValueAtTime(.001,e.currentTime+Y),nt.connect(X),X.connect(v()),nt.start(),nt.stop(e.currentTime+Y)}const _={3:1400,8:1400,4:500,2:420,1:480,11:520,10:600,5:800,7:800,6:2200,12:900,13:1300,14:1500,15:1500,16:1700,26:1400,27:1350,28:1550,29:1400,30:800,31:2600,32:2400,33:2400,34:1400,35:800,36:1400},T=U=>{E(.13,_[U]||700,.45,1.2),M((_[U]||700)*.25,.08,.12)},m=U=>{M(170,.09,.3),E(.05,(_[U]||700)*.8,.15,2)},y=U=>{E(.06,(_[U]||500)*.6+Math.random()*120,.12,.8)},D=U=>{E(.12,300,Math.min(.5,.1+U*.04),.7),M(90,.1,.2)},x=()=>{E(.25,900,.3,.5),E(.35,400,.2,.5)};function A(){if(!e||S)return;const U=e.createBufferSource();U.buffer=u(2),U.loop=!0;const Y=e.createBiquadFilter();Y.type="lowpass",Y.frequency.value=2600;const C=e.createGain();C.gain.value=.05,U.connect(Y),Y.connect(C),C.connect(s),U.start(),S=U}function P(){if(S){try{S.stop()}catch{}S=null}}function I(){if(!e||o)return;const U=e.createBufferSource();U.buffer=u(3),U.loop=!0,l=e.createBiquadFilter(),l.type="lowpass",l.frequency.value=440,a=e.createGain(),a.gain.value=.04,U.connect(l),l.connect(a),a.connect(s),U.start();const Y=e.createOscillator();Y.frequency.value=.07;const C=e.createGain();C.gain.value=.03,Y.connect(C),C.connect(a.gain),Y.start(),c=e.createGain(),c.gain.value=0,c.connect(s);const nt=e.createOscillator();nt.type="sine",nt.frequency.value=62;const X=e.createOscillator();X.type="sine",X.frequency.value=65.5,nt.connect(c),X.connect(c),nt.start(),X.start(),h=e.createDelay(),h.delayTime.value=.3;const it=e.createGain();it.gain.value=.36,h.connect(it),it.connect(h),h.connect(s),f=e.createGain(),f.gain.value=d?.5:0,f.connect(s),o=!0,setInterval(ft,260)}function j(){const U=e.currentTime,Y=2200+Math.random()*1500,C=2+(Math.random()*3|0);for(let nt=0;nt<C;nt++){const X=e.createOscillator(),it=e.createGain(),st=U+nt*.085,Et=Y*(1+(Math.random()-.35)*.35);X.type="sine",X.frequency.setValueAtTime(Et,st),X.frequency.exponentialRampToValueAtTime(Et*1.5,st+.05),it.gain.setValueAtTime(1e-4,st),it.gain.linearRampToValueAtTime(.11,st+.012),it.gain.exponentialRampToValueAtTime(8e-4,st+.09),X.connect(it),it.connect(s),X.start(st),X.stop(st+.11)}}function L(){const U=e.currentTime,Y=4200+Math.random()*900;for(let C=0;C<3;C++){const nt=e.createOscillator(),X=e.createGain(),it=U+C*.07;nt.type="square",nt.frequency.value=Y,X.gain.setValueAtTime(1e-4,it),X.gain.linearRampToValueAtTime(.035,it+.005),X.gain.exponentialRampToValueAtTime(8e-4,it+.03),nt.connect(X),X.connect(s),nt.start(it),nt.stop(it+.04)}}function O(){const U=e.currentTime,Y=e.createOscillator(),C=e.createGain(),nt=e.createBiquadFilter();nt.type="bandpass",nt.frequency.value=1400,nt.Q.value=3,Y.type="sine",Y.frequency.setValueAtTime(1700,U),Y.frequency.exponentialRampToValueAtTime(700,U+.12),C.gain.setValueAtTime(1e-4,U),C.gain.linearRampToValueAtTime(.16,U+.008),C.gain.exponentialRampToValueAtTime(8e-4,U+.13),Y.connect(nt),nt.connect(C),C.connect(s),h&&C.connect(h),Y.start(U),Y.stop(U+.15)}function B(){const U=e.currentTime,Y=e.createOscillator(),C=e.createGain();Y.type="sine",Y.frequency.setValueAtTime(300+Math.random()*200,U),Y.frequency.exponentialRampToValueAtTime(900,U+.12),C.gain.setValueAtTime(1e-4,U),C.gain.linearRampToValueAtTime(.06,U+.02),C.gain.exponentialRampToValueAtTime(8e-4,U+.13),Y.connect(C),C.connect(s),Y.start(U),Y.stop(U+.15)}function q(){const U=e.currentTime,Y=e.createBufferSource();Y.buffer=u(1.4);const C=e.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(400,U),C.frequency.exponentialRampToValueAtTime(90,U+1.3);const nt=e.createGain();nt.gain.setValueAtTime(1e-4,U),nt.gain.linearRampToValueAtTime(.5,U+.08),nt.gain.exponentialRampToValueAtTime(8e-4,U+1.4),Y.connect(C),C.connect(nt),nt.connect(s),Y.start(U),Y.stop(U+1.5)}function V(U,Y){if(!e)return;const C=.5*(1-Y/22);if(C<=.02)return;const nt=e.currentTime;if(U==="sheep"){const X=e.createOscillator(),it=e.createGain(),st=e.createOscillator(),Et=e.createGain();X.type="sawtooth",X.frequency.setValueAtTime(360,nt),X.frequency.linearRampToValueAtTime(300,nt+.45),st.frequency.value=18,Et.gain.value=14,st.connect(Et),Et.connect(X.frequency),st.start(nt),st.stop(nt+.5);const Mt=e.createBiquadFilter();Mt.type="lowpass",Mt.frequency.value=1100,it.gain.setValueAtTime(1e-4,nt),it.gain.linearRampToValueAtTime(C*.5,nt+.04),it.gain.exponentialRampToValueAtTime(8e-4,nt+.5),X.connect(Mt),Mt.connect(it),it.connect(s),X.start(nt),X.stop(nt+.52)}else if(U==="pig")for(let X=0;X<2;X++){const it=nt+X*.13,st=e.createBufferSource();st.buffer=u(.12);const Et=e.createBiquadFilter();Et.type="lowpass",Et.frequency.value=320;const Mt=e.createGain();Mt.gain.setValueAtTime(1e-4,it),Mt.gain.linearRampToValueAtTime(C*.6,it+.01),Mt.gain.exponentialRampToValueAtTime(8e-4,it+.1),st.connect(Et),Et.connect(Mt),Mt.connect(s),st.start(it),st.stop(it+.12)}else if(U==="zombie"){const X=e.createOscillator(),it=e.createGain(),st=e.createBiquadFilter();X.type="sawtooth",X.frequency.setValueAtTime(105,nt),X.frequency.linearRampToValueAtTime(68,nt+.7);const Et=e.createOscillator(),Mt=e.createGain();Et.frequency.value=9,Mt.gain.value=16,Et.connect(Mt),Mt.connect(X.frequency),Et.start(nt),Et.stop(nt+.8),st.type="lowpass",st.frequency.value=360,it.gain.setValueAtTime(1e-4,nt),it.gain.linearRampToValueAtTime(C*.6,nt+.09),it.gain.exponentialRampToValueAtTime(8e-4,nt+.75),X.connect(st),st.connect(it),it.connect(s),X.start(nt),X.stop(nt+.8)}else if(U==="villager")for(let X=0;X<2;X++){const it=nt+X*.17,st=e.createOscillator(),Et=e.createGain(),Mt=e.createBiquadFilter();st.type="triangle",st.frequency.setValueAtTime(X?185:235,it),st.frequency.linearRampToValueAtTime(X?160:210,it+.12),Mt.type="lowpass",Mt.frequency.value=700,Et.gain.setValueAtTime(1e-4,it),Et.gain.linearRampToValueAtTime(C*.4,it+.03),Et.gain.exponentialRampToValueAtTime(8e-4,it+.16),st.connect(Mt),Mt.connect(Et),Et.connect(s),st.start(it),st.stop(it+.18)}else for(let X=0;X<3;X++){const it=nt+X*.08,st=e.createOscillator(),Et=e.createGain();st.type="triangle",st.frequency.setValueAtTime(1600-X*250,it),Et.gain.setValueAtTime(1e-4,it),Et.gain.linearRampToValueAtTime(C*.4,it+.008),Et.gain.exponentialRampToValueAtTime(8e-4,it+.05),st.connect(Et),Et.connect(s),st.start(it),st.stop(it+.06)}}const z=()=>{M(110,.16,.5),E(.16,420,.35,.8)},k=[0,2,4,7,9,12,14,16],K=174.6,W=U=>K*Math.pow(2,U/12);function N(U,Y,C){const nt=e.currentTime,X=e.createOscillator(),it=e.createBiquadFilter(),st=e.createGain();X.type="triangle",X.frequency.value=W(U),it.type="lowpass",it.frequency.value=850,st.gain.setValueAtTime(1e-4,nt),st.gain.linearRampToValueAtTime(C,nt+1.6),st.gain.linearRampToValueAtTime(1e-4,nt+Y),X.connect(it),it.connect(st),st.connect(f),X.start(nt),X.stop(nt+Y+.1)}function Q(U,Y){const C=e.currentTime,nt=e.createOscillator(),X=e.createGain();nt.type="sine",nt.frequency.value=W(U),X.gain.setValueAtTime(1e-4,C),X.gain.linearRampToValueAtTime(Y,C+.03),X.gain.exponentialRampToValueAtTime(8e-4,C+.9),nt.connect(X),X.connect(f),nt.start(C),nt.stop(C+1)}function rt(){if(d){if(g++,g%30===0){const U=k[Math.random()*3|0];N(U,9,.05),N(U+(Math.random()<.5?4:7),9,.045),N(U+12,9,.03)}g%6===0&&Math.random()<.45&&Q(k[Math.random()*k.length|0]+12,.05)}}function ft(){if(!e||!o||!n.locked)return;const U=e.currentTime,Y=n.curHeadWater?0:n.curUnderground?.012:(.04+Math.max(0,t.pos.y-ze)*.0016)*(n.weather==="rain"?1.5:1);a.gain.setTargetAtTime(Math.max(0,Math.min(.13,Y)),U,.6),l.frequency.setTargetAtTime(n.curUnderground?180:n.weather==="rain"?950:460,U,.6),c.gain.setTargetAtTime(n.curUnderground?.05:0,U,.9),!n.curUnderground&&!n.curHeadWater&&(n.curIsDay&&(n.curBiome===Wr||n.curBiome===lr)&&n.weather!=="rain"&&Math.random()<.1&&j(),!n.curIsDay&&Math.random()<.15&&L(),n.weather==="rain"&&Math.random()<.014&&q()),n.curUnderground&&Math.random()<.05&&O(),n.curHeadWater&&Math.random()<.16&&B(),rt()}function ht(){d=!d,f&&f.gain.setTargetAtTime(d?.5:0,e.currentTime,.3)}function vt(U){i&&i.frequency.setTargetAtTime(U?700:2e4,e.currentTime,.25)}return{audioInit:p,sndBreak:T,sndPlace:m,sndStep:y,sndLand:D,sndSplash:x,sndHit:z,startRainSound:A,stopRainSound:P,animalSound:V,toggleMusic:ht,setMuffle:vt,isMusicOn:()=>d}}const Ic=30,$g=70,Zg=8,Nc=12,jg=34,Jg=70,Qg=18,t_=14,e_=10,n_=140;function i_(n,t,e,i){const r=l=>!qe(l)&&l!==Je;if(!r(Yt(n,t,e))||!r(Yt(n,t+1,e))||!qe(Yt(n,t-1,e)))return!1;const s=Sn(n,t,e),o=s>>4;return(s&15)<4&&(o<6||!i)}function r_(n,t,e=2){const i=Math.floor(n/xn),r=Math.floor(t/xn),s=[];for(let o=i-e;o<=i+e;o++)for(let a=r-e;a<=r+e;a++){const l=Vu(o,a);l&&l.def.villagers>0&&s.push({key:o+","+a,...l})}return s}const Fc={sheep:{hw:.42,h:1.2,spd:1.5,skittish:!0,build(n,t){t(n,.95,.85,1.35,15657696,0,.78,0),t(n,.6,.6,.55,14603976,0,.95,.85);const e=[];for(const[i,r]of[[-.3,.45],[.3,.45],[-.3,-.45],[.3,-.45]])e.push(t(n,.22,.55,.22,4867648,i,.27,r));return e}},pig:{hw:.4,h:.95,spd:1.3,skittish:!1,build(n,t){t(n,.85,.7,1.2,14916250,0,.62,0),t(n,.55,.5,.45,14715530,0,.7,.78),t(n,.25,.22,.12,14187130,0,.62,1);const e=[];for(const[i,r]of[[-.28,.4],[.28,.4],[-.28,-.4],[.28,-.4]])e.push(t(n,.2,.4,.2,13134442,i,.2,r));return e}},chicken:{hw:.3,h:.7,spd:1.7,skittish:!0,build(n,t){t(n,.5,.5,.6,16052456,0,.5,0),t(n,.35,.35,.32,16315628,0,.78,.34),t(n,.14,.12,.18,15247408,0,.74,.55),t(n,.16,.18,.08,14168112,0,.96,.32);const e=[];for(const i of[-.13,.13])e.push(t(n,.08,.34,.08,15247408,i,.17,0));return e}}},s_={hw:.3,h:1.8,spd:1.1,build(n,t){t(n,.52,.78,.34,9071178,0,.96,0),t(n,.38,.38,.38,14200968,0,1.54,0),t(n,.09,.16,.09,13146744,0,1.48,-.22),t(n,.56,.17,.2,8018494,0,1.16,-.16);const e=[];for(const i of[-.14,.14])e.push(t(n,.2,.58,.2,5916210,i,.29,0));return e}},a_={hw:.3,h:1.8,spd:1.4,build(n,t){t(n,.5,.72,.3,3828362,0,1,0),t(n,.4,.4,.4,5937746,0,1.56,0);for(const i of[-.26,.26])t(n,.16,.16,.62,5937746,i,1.24,-.38);const e=[];for(const i of[-.13,.13])e.push(t(n,.2,.62,.2,3493994,i,.31,0));return e}};function o_({scene:n,ctx:t,audio:e}){const i=[],r=new Set;let s=3,o=1;function a(u,E,M,_){const T=new $n,m=[],y=(A,P,I,j,L,O,B,q)=>{const V=new mn({color:L}),z=new He(new Gn(P,I,j),V);return z.position.set(O,B,q),A.add(z),m.push({mat:V,base:new Ot(L)}),z},D=M.build(T,y);n.add(T);const x={kind:u,type:E,def:M,group:T,legs:D,mats:m,hw:M.hw,h:M.h,pos:new G(_.x,_.y,_.z),vy:0,yaw:Math.random()*6.28,onGround:!1,walking:!1,timer:0,legPhase:0,flee:0,callT:2+Math.random()*8,cool:0,lightT:Math.random(),home:null};return i.push(x),x}function l(u){n.remove(u.group),u.group.traverse(M=>{M.isMesh&&(M.geometry.dispose(),M.material.dispose())});const E=i.indexOf(u);E>=0&&i.splice(E,1),u.home&&r.delete(u.home.key)}function c(u,E,M=60){for(let _=0;_<M;_++){const T=u+Math.floor((Math.random()-.5)*2*Ic),m=E+Math.floor((Math.random()-.5)*2*Ic);let y=Vt-1;for(;y>0&&Yt(T,y,m)===oe;)y--;const D=Yt(T,y,m);if(y>ze&&(D===En||D===ii||D===Bn))return{x:T,y,z:m}}return null}function f(u,E,M,_=9){for(let T=0;T<12;T++){const m=u+Math.floor((Math.random()-.5)*_),y=E+Math.floor((Math.random()-.5)*_);for(let D=Math.max(1,M-5);D<=Math.min(Vt-2,M+6);D++)if(Yt(m,D,y)===oe&&Yt(m,D+1,y)===oe&&qe(Yt(m,D-1,y)))return{x:m,y:D,z:y}}return null}function h(u,E){for(let M=0;M<10;M++){const _=Math.random()*Math.PI*2,T=Nc+Math.random()*(jg-Nc),m=Math.floor(u.x+Math.sin(_)*T),y=Math.floor(u.z+Math.cos(_)*T),D=Math.min(Vt-2,Math.floor(u.y)+10),x=Math.max(2,Math.floor(u.y)-16);for(let A=D;A>=x;A--)if(i_(m,A,y,E))return{x:m,y:A,z:y}}return null}function d(u,E){for(;i.length;)l(i[0]);r.clear();const M=Math.floor(E?E.x:8),_=Math.floor(E?E.z:8),T=Object.keys(Fc);for(let m=0;m<u;m++){const y=c(M,_);if(!y)continue;const D=T[Math.floor(Math.random()*T.length)];a("animal",D,Fc[D],{x:y.x+.5,y:y.y+1.01,z:y.z+.5})}}function g(u){for(let M=i.length-1;M>=0;M--){const _=i[M];_.kind==="villager"&&Math.hypot(_.home.ax-u.x,_.home.az-u.z)>n_&&l(_)}if(!(i.filter(M=>M.kind==="villager").length>=t_))for(const M of r_(u.x,u.z,2)){if(r.has(M.key)||Math.hypot(M.ax-u.x,M.az-u.z)>90||Yt(M.ax,M.baseY,M.az)===oe)continue;let _=0;for(let T=0;T<M.def.villagers;T++){const m=f(M.ax,M.az,M.baseY+1);if(!m)continue;const y=a("villager","villager",s_,{x:m.x+.5,y:m.y+.01,z:m.z+.5});y.home={key:M.key,ax:M.ax,az:M.az},_++}_&&r.add(M.key)}}function S(u){if(!(t.curIsDay===!1||t.curUnderground)||i.filter(M=>M.kind==="zombie").length>=Zg)return;const E=h(u,t.curIsDay);E&&a("zombie","zombie",a_,{x:E.x+.5,y:E.y+.01,z:E.z+.5})}function v(u,E){const M={hit:null,poofs:[]};o-=u,o<=0&&(o=2,g(E)),s-=u,s<=0&&(s=1.4,S(E));for(let T=i.length-1;T>=0;T--){const m=i[T];m.timer-=u,m.callT-=u,m.cool>0&&(m.cool-=u);const y=m.pos.x-E.x,D=m.pos.z-E.z,x=Math.hypot(y,D);let A=m.def.spd;if(m.kind==="animal")m.callT<=0&&(m.callT=5+Math.random()*10,x<22&&e.animalSound(m.type,x)),m.def.skittish&&x<5&&(m.flee=1.2,m.yaw=Math.atan2(y,D)),m.flee>0&&(m.flee-=u),m.timer<=0&&m.flee<=0&&(m.timer=1.5+Math.random()*3.5,Math.random()<.6?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1),m.flee>0&&(A*=1.8);else if(m.kind==="villager"){m.callT<=0&&(m.callT=6+Math.random()*12,x<7&&e.animalSound("villager",x));const L=Math.hypot(m.pos.x-(m.home.ax+.5),m.pos.z-(m.home.az+.5));x<4?(m.walking=!1,m.yaw=Math.atan2(y,D),m.timer=.6):L>e_?(m.walking=!0,m.yaw=Math.atan2(m.pos.x-(m.home.ax+.5),m.pos.z-(m.home.az+.5))):m.timer<=0&&(m.timer=2+Math.random()*4,Math.random()<.55?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1)}else{m.callT<=0&&(m.callT=4+Math.random()*7,x<22&&e.animalSound("zombie",x)),x<Qg?(m.walking=!0,A*=2,m.yaw=Math.atan2(y,D)):m.timer<=0&&(m.timer=1.5+Math.random()*3,Math.random()<.5?(m.walking=!0,m.yaw=Math.random()*6.28):m.walking=!1);const L=E.y-m.pos.y;if(m.cool<=0&&x<1&&L>-1.5&&L<1.8){m.cool=1.2;const O=Math.max(x,.001);M.hit={dx:-y/O,dz:-D/O}}if(m.lightT-=u,m.lightT<=0){m.lightT=.8;const O=Sn(Math.floor(m.pos.x),Math.floor(m.pos.y+.5),Math.floor(m.pos.z))>>4;if(t.curIsDay&&O>=10){M.poofs.push([m.pos.x,m.pos.y+1,m.pos.z]),l(m);continue}if(x>Jg){l(m);continue}}}const P=m.walking||m.flee>0;if(P){const L=-Math.sin(m.yaw)*A*u,O=-Math.cos(m.yaw)*A*u;let B=!1;const q=p(m.pos.x+L,m.pos.y,m.pos.z);!q&&!di(m.pos.x+L,m.pos.y,m.pos.z,m.hw,m.h)?(m.pos.x+=L,B=!0):!q&&m.onGround&&!di(m.pos.x+L,m.pos.y+1,m.pos.z,m.hw,m.h)&&(m.pos.x+=L,m.pos.y+=1,B=!0);const V=p(m.pos.x,m.pos.y,m.pos.z+O);!V&&!di(m.pos.x,m.pos.y,m.pos.z+O,m.hw,m.h)?(m.pos.z+=O,B=!0):!V&&m.onGround&&!di(m.pos.x,m.pos.y+1,m.pos.z+O,m.hw,m.h)&&(m.pos.z+=O,m.pos.y+=1,B=!0),B||(m.yaw+=2+Math.random(),m.timer=.4),m.kind==="animal"&&x>$g&&(m.yaw=Math.atan2(E.x-m.pos.x,E.z-m.pos.z)),m.legPhase+=u*A*5}m.vy=Math.max(m.vy-24*u,-30);const I=m.pos.y+m.vy*u;if(m.vy<0&&di(m.pos.x,I,m.pos.z,m.hw,m.h)?(m.pos.y=Math.floor(I)+1,m.vy=0,m.onGround=!0):m.vy>0&&di(m.pos.x,I,m.pos.z,m.hw,m.h)?m.vy=0:(m.pos.y=I,m.onGround=!1),m.pos.y<-10)if(m.kind==="animal"){const L=c(Math.floor(E.x),Math.floor(E.z));L?(m.pos.set(L.x+.5,L.y+1.01,L.z+.5),m.vy=0):(m.pos.y=Vt,m.vy=0)}else if(m.kind==="villager"){const L=f(m.home.ax,m.home.az,40,5);if(L)m.pos.set(L.x+.5,L.y+.01,L.z+.5),m.vy=0;else{l(m);continue}}else{l(m);continue}m.group.position.copy(m.pos),m.group.rotation.y=m.yaw;const j=P?Math.sin(m.legPhase)*.5:0;for(let L=0;L<m.legs.length;L++)m.legs[L].rotation.x=L%2?-j:j}const _=Math.max(.35,t.dayBright);for(const T of i)for(const m of T.mats)m.mat.color.copy(m.base).multiplyScalar(_);return M}function p(u,E,M){const _=Math.floor(u),T=Math.floor(M),m=Math.floor(E);for(let y=m;y>=m-4&&y>=0;y--){const D=Yt(_,y,T);if(D===Je)return!0;if(D!==oe)return!1}return!1}return{spawnAnimals:d,update:v,animals:i}}const Zs=n=>Math.max(0,Math.min(1,n));function l_({scene:n,camera:t,materials:e,ctx:i,audio:r}){const s=new G,o=new $n;n.add(o);function a(z,k,K){const W=document.createElement("canvas");W.width=W.height=64;const N=W.getContext("2d"),Q=N.createRadialGradient(32,32,4,32,32,32);Q.addColorStop(0,z),Q.addColorStop(K,z),Q.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=Q,N.fillRect(0,0,64,64);const rt=new pg(new Tu({map:new Ho(W),fog:!1,transparent:!0,depthWrite:!1}));return rt.scale.set(k,k,1),o.add(rt),rt}const l=a("rgba(255,244,180,1)",40,.55),c=a("rgba(214,224,255,1)",26,.45),f=new De;function h(){const z=[],k=Ci(Ri()^20901|0);for(let K=0;K<520;K++){const W=k()*Math.PI*2,N=Math.acos(k()*2-1);z.push(280*Math.sin(N)*Math.cos(W),Math.abs(280*Math.cos(N)),280*Math.sin(N)*Math.sin(W))}f.setAttribute("position",new Be(z,3))}h();const d=new Go({color:16777215,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0,depthWrite:!1});o.add(new Ru(f,d));const g=new Ot(9422056),S=new Ot(461592),v=new Ot(15764554),p=new Ot(857136),u=new Ot,E=new $n;n.add(E);let M=null,_=0;function T(){M&&(E.remove(M),M.geometry.dispose());const z=[],k=[],K=Ci(Ri()^20817|0),W=48,N=8,Q=Vt+10;for(let ht=0;ht<W;ht++)for(let vt=0;vt<W;vt++){if(qr(ht*.18+1,vt*.18+1)<.56)continue;const U=(ht-W/2)*N,Y=(vt-W/2)*N,C=N*.98,nt=Q+K()*2,X=z.length/3;z.push(U,nt,Y,U+C,nt,Y,U,nt,Y+C,U+C,nt,Y+C),z.push(U,nt-2,Y,U+C,nt-2,Y,U,nt-2,Y+C,U+C,nt-2,Y+C),k.push(X,X+1,X+2,X+2,X+1,X+3),k.push(X+4,X+6,X+5,X+5,X+6,X+7)}const rt=new De;rt.setAttribute("position",new Be(z,3)),rt.setIndex(k);const ft=new mn({color:16777215,transparent:!0,opacity:.82,fog:!0,side:sn});M=new He(rt,ft),E.add(M)}const m=420,y=new De,D=new Float32Array(m*6),x=[];for(let z=0;z<m;z++)x.push({x:0,y:0,z:0});y.setAttribute("position",new Xe(D,3));const A=new zo({color:10469608,transparent:!0,opacity:.5}),P=new wu(y,A);P.visible=!1,n.add(P);let I=40;function j(z){for(let k=0;k<m;k++)x[k].x=z.x+(Math.random()-.5)*40,x[k].y=z.y+Math.random()*26+2,x[k].z=z.z+(Math.random()-.5)*40}function L(z,k){i.weather=z,z==="rain"?(j(k),r.startRainSound()):r.stopRainSound()}function O(z,k){if(i.weather!=="rain"){P.visible=!1;return}P.visible=!0;for(let K=0;K<m;K++){const W=x[K];W.y-=34*k,W.x+=2*k,W.y<z.y-8&&(W.x=z.x+(Math.random()-.5)*40,W.z=z.z+(Math.random()-.5)*40,W.y=z.y+22+Math.random()*6),(Math.abs(W.x-z.x)>22||Math.abs(W.z-z.z)>22)&&(W.x=z.x+(Math.random()-.5)*40,W.z=z.z+(Math.random()-.5)*40);const N=K*6;D[N]=W.x,D[N+1]=W.y,D[N+2]=W.z,D[N+3]=W.x-.1,D[N+4]=W.y-1.1,D[N+5]=W.z}y.attributes.position.needsUpdate=!0}function B(z,k){I-=z,I<=0&&(i.weather==="clear"?Math.random()<.4?(L("rain",k),I=25+Math.random()*40):I=30+Math.random()*60:(L("clear",k),I=50+Math.random()*70))}function q(z){i.timeOfDay=(i.timeOfDay+z/vg*(i.keys.KeyN&&i.locked?40:1))%1;const k=i.timeOfDay*Math.PI*2,K=Math.sin(k);i.curIsDay=K>-.05;const W=new G(Math.cos(k),K,.28).normalize();l.position.copy(W).multiplyScalar(260),c.position.copy(W).multiplyScalar(-260);const N=Zs((K+.1)/.35),Q=Math.exp(-Math.pow(K/.16,2))*.8;u.copy(S).lerp(g,N),u.lerp(K>-.3?v:p,Q*(1-N*.4)),i.weather==="rain"&&u.multiplyScalar(.6),n.background.copy(u),n.fog.color.copy(u);let rt=.22+.78*N;i.weather==="rain"&&(rt*=.7),i.dayBright=rt,Gg(rt),M&&M.material.color.setScalar(.6+.4*rt),A.color.setRGB(.62*rt+.1,.75*rt+.1,.9*rt+.1),d.opacity=Zs((.18-K)/.3),l.material.opacity=Zs((K+.15)/.2),c.material.opacity=Zs((-K+.15)/.2),t.getWorldPosition(s),o.position.copy(s),_+=z*.6,_>160&&(_-=160),E.position.set(s.x+_-80,0,s.z)}function V(){h(),T()}return{updateSky:q,buildSky:V,updateRain:O,tickWeather:B,setWeather:L}}const Oc="blockwelt4_save";function c_({player:n,ctx:t}){function e(){const c={};for(const[f,h]of Mi){const d=new Array(h.size*2);let g=0;for(const[S,v]of h)d[g++]=S,d[g++]=v;c[f]=d}return c}function i(){return{v:4,seed:Ri(),t:t.timeOfDay,w:t.weather,p:[n.pos.x,n.pos.y,n.pos.z,n.yaw,n.pitch],e:e()}}function r(c){if(!c||c.v!==4)return!1;if(Iu(c.seed??Ri()),Ve.clear(),Mi.clear(),c.e)for(const f in c.e){const h=c.e[f],d=new Map;for(let g=0;g<h.length;g+=2)d.set(h[g],h[g+1]);Mi.set(f,d)}return t.timeOfDay=c.t??.3,t.weather=c.w??"clear",c.p??null}function s(){try{return localStorage.setItem(Oc,JSON.stringify(i())),!0}catch{return!1}}function o(){try{const c=localStorage.getItem(Oc);return c?r(JSON.parse(c)):!1}catch{return!1}}function a(){const c=new Blob([JSON.stringify(i())],{type:"application/json"}),f=document.createElement("a");f.href=URL.createObjectURL(c),f.download="meine-welt.blockwelt",f.click(),URL.revokeObjectURL(f.href)}function l(){}return{snapshot:i,applySnapshot:r,saveLocal:s,loadLocal:o,exportFile:a,invalidateWorld:l}}function u_({ctx:n}){const t=document.getElementById("hotbar"),e=document.getElementById("coords"),i=document.getElementById("biome"),r=document.getElementById("blockmenu");function s(c){const f=document.createElement("canvas");return f.width=16,f.height=16,f.getContext("2d").drawImage(zg,nr[c][1]*ie,0,ie,ie,0,0,16,16),f}function o(c){r.innerHTML="";const f=document.createElement("div");f.className="bm-title",f.textContent="Block wählen  ·  E schließt";const h=document.createElement("div");h.className="bm-grid",Tg.forEach(d=>{const g=document.createElement("div");g.className="bm-slot",g.title=po[d]||"",g.appendChild(s(d));const S=document.createElement("span");S.textContent=po[d]||"",g.appendChild(S),g.addEventListener("click",()=>c(d)),h.appendChild(g)}),r.appendChild(f),r.appendChild(h)}function a(){t.innerHTML="",mr.forEach((c,f)=>{const h=document.createElement("div");h.className="slot"+(f===n.selected?" sel":"");const d=document.createElement("span");d.textContent=f+1,h.appendChild(s(c)),h.appendChild(d),h.title=po[c],t.appendChild(h)})}function l(c,f){const h=Math.floor((n.timeOfDay+.25)%1*1440),d=String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0");e.textContent=`x ${c.pos.x.toFixed(1)}  y ${c.pos.y.toFixed(1)}  z ${c.pos.z.toFixed(1)}  ·  ${n.timeOfDay<.5?"🌞":"🌙"} ${d}${c.fly?"  ·  ✈":""}${n.weather==="rain"?"  ·  🌧":""}${f?"  ·  ♪":""}`,i.textContent="🌍 "+bg[n.curBiome]}return{renderHotbar:a,updateHUD:l,buildMenu:o}}const f_=n=>Math.max(0,Math.min(1,n));function h_({scene:n,camera:t,ctx:e}){let i=0;const r=new G,s=18,o=new bu(new Gn(.7,.1,.22),new mn({color:2106410}),s);o.frustumCulled=!1,o.instanceMatrix.setUsage(iu),n.add(o);const a=[];for(let M=0;M<s;M++)a.push({r:9+Math.random()*17,ph:Math.random()*Math.PI*2,spd:.22+Math.random()*.18,hy:24+Math.random()*14,wob:Math.random()*Math.PI*2});const l=new Ee,c=new G,f=80,h=22,d=8,g=new De,S=new Float32Array(f*3),v=[];for(let M=0;M<f;M++)S[M*3]=(Math.random()*2-1)*h,S[M*3+1]=Math.random()*d,S[M*3+2]=(Math.random()*2-1)*h,v.push({x:(Math.random()-.5)*.7,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.7});g.setAttribute("position",new Xe(S,3));const p=new Go({color:16769658,size:.5,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:vo,fog:!1}),u=new Ru(g,p);u.frustumCulled=!1,n.add(u);function E(M){i+=M;const _=f_((e.dayBright-.45)/.4),T=1-_;if(t.getWorldPosition(r),o.visible=_>.02&&!e.curUnderground&&!e.curHeadWater,o.visible){const m=r.x,y=r.z;for(let D=0;D<s;D++){const x=a[D],A=i*x.spd+x.ph,P=m+Math.cos(A)*x.r,I=y+Math.sin(A)*x.r,j=x.hy+Math.sin(i*.6+x.wob)*1.5;c.set(m+Math.cos(A+.06)*x.r,j,y+Math.sin(A+.06)*x.r),l.position.set(P,j,I),l.lookAt(c);const L=.5+Math.abs(Math.sin(i*9+x.ph))*.85;l.scale.set(L,1,1),l.updateMatrix(),o.setMatrixAt(D,l.matrix)}o.instanceMatrix.needsUpdate=!0}if(p.opacity=T*(.55+.45*Math.sin(i*2.5))*.9,u.visible=p.opacity>.02&&!e.curHeadWater,u.visible){for(let m=0;m<f;m++){const y=v[m];let D=S[m*3]+y.x*M,x=S[m*3+1]+y.y*M,A=S[m*3+2]+y.z*M;Math.random()<.02&&(y.x=(Math.random()-.5)*.7,y.y=(Math.random()-.5)*.3,y.z=(Math.random()-.5)*.7),D>h?D=-h:D<-h&&(D=h),A>h?A=-h:A<-h&&(A=h),x>d?x=.2:x<0&&(x=d),S[m*3]=D,S[m*3+1]=x,S[m*3+2]=A}g.attributes.position.needsUpdate=!0,u.position.set(r.x,r.y-1.2,r.z)}}return{update:E}}const d_=4.2,p_=Math.PI/4,m_=.6,g_=.3,_o=.15,__=.8,v_=8,Bc=new G(0,1,0);function x_({renderer:n,camera:t,rig:e,ctx:i,player:r}){let s=0,o=!0,a=0,l=0,c=!1;const f=document.createElement("canvas");f.width=f.height=256;const h=f.getContext("2d"),d=h.createRadialGradient(128,128,0,128,128,128);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.45,"rgba(0,0,0,0)"),d.addColorStop(.75,"rgba(0,0,0,0.85)"),d.addColorStop(1,"rgba(0,0,0,1)"),h.fillStyle=d,h.fillRect(0,0,256,256);const g=new mn({map:new Ho(f),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1}),S=new He(new ga(1.6,1.6),g);S.position.z=-.35,S.renderOrder=9999,S.visible=!1,t.add(S),n.xr.addEventListener("sessionstart",()=>{s=0,o=!0,a=0,c=!1,e.quaternion.identity(),r.fly=!1,i.keys={},S.visible=!0}),n.xr.addEventListener("sessionend",()=>{i.vrMove=null,i.keys={},e.quaternion.identity(),S.visible=!1,g.opacity=l=0});const v=new G,p=new G;function u(E){if(!n.xr.isPresenting){i.vrMove=null;return}const M=n.xr.getSession();let _=0,T=0,m=0,y=0,D=!1,x=!1;for(const j of M.inputSources){const L=j.gamepad;if(!L||L.axes.length<4)continue;const O=L.axes[2],B=L.axes[3];if(j.handedness==="left"){const q=Math.hypot(O,B);if(q>_o){const V=(q-_o)/(1-_o)/q;_=O*V,T=B*V}}else j.handedness==="right"&&(m=O,r.fly&&Math.abs(B)>.3&&(y=-(Math.abs(B)-.3)/.7*Math.sign(B)),L.buttons[4]&&L.buttons[4].pressed&&(D=!0),L.buttons[5]&&L.buttons[5].pressed&&(x=!0))}if(x&&!c&&(r.fly=!r.fly,r.vel.y=0),c=x,o&&Math.abs(m)>m_?(s-=Math.sign(m)*p_,e.quaternion.setFromAxisAngle(Bc,s),o=!1,a=1):!o&&Math.abs(m)<g_&&(o=!0),_||T||y){t.getWorldDirection(v),r.fly||(v.y=0),v.lengthSq()<1e-6?v.set(0,0,-1):v.normalize(),p.set(v.x,0,v.z).normalize(),p.crossVectors(p,Bc);const j=d_/5.4;let L=v.x*-T+p.x*_,O=r.fly?v.y*-T+y:0,B=v.z*-T+p.z*_;const q=Math.hypot(L,O,B);q>1&&(L/=q,O/=q,B/=q),i.vrMove={x:L*j,y:O*j,z:B*j}}else i.vrMove={x:0,y:0,z:0};i.keys.Space=D;const A=Math.min(1,Math.max(Math.hypot(_,T),Math.abs(y))),P=Math.min(1,Math.max(0,(Math.abs(r.vel.y)-3)/6));let I=Math.max(A,P)*__;a>0&&(I=Math.max(I,a),a-=E*5),l+=(I-l)*Math.min(1,E*v_),g.opacity=l}return{update:u}}const It={keys:{},selected:0,ready:!1,locked:!1,timeOfDay:.3,dayBright:1,curIsDay:!0,weather:"clear",curUnderground:!1,curHeadWater:!1,curBiome:1},yn=document.getElementById("c"),Ae=new Eu({canvas:yn,antialias:!1});Ae.setPixelRatio(Math.min(devicePixelRatio,2));const on=new hg,Wu=new Ot(9422056);on.background=Wu.clone();const ko=(qn-.5)*at,Xu=ko*.5;on.fog=new Bo(Wu.clone(),Xu,ko);const Oe=new rn(72,2,.1,600);Oe.rotation.order="YXZ";const ba=new $n;ba.add(Oe);on.add(ba);Ae.xr.enabled=!0;const js=new G,qu=Hg(),Tr=kg({scene:on,materials:qu}),Yu=Wg(),$r=Xg({mesher:Tr,light:Yu}),Zn=qg({camera:Oe,ctx:It}),bt=Zn.player,fa=Yg({scene:on}),Pe=Kg({ctx:It,player:bt}),Ku=o_({scene:on,ctx:It,audio:Pe}),Si=l_({scene:on,camera:Oe,materials:qu,ctx:It,audio:Pe}),Nn=c_({player:bt,ctx:It}),_r=u_({ctx:It}),M_=h_({scene:on,camera:Oe,ctx:It}),S_=x_({renderer:Ae,camera:Oe,rig:ba,ctx:It,player:bt}),Gr=new wu(new _g(new Gn(1.002,1.002,1.002)),new zo({color:0,transparent:!0,opacity:.6}));Gr.visible=!1;on.add(Gr);_r.renderHotbar();let Zr=!1;const $u=document.getElementById("blockmenu");_r.buildMenu(n=>{mr[It.selected]=n,_r.renderHotbar(),Zu()});function y_(){Zr=!0,$u.style.display="flex",It.locked&&document.exitPointerLock()}function Zu(n){Zr=!1,$u.style.display="none",It.ready&&yn.requestPointerLock()}const wa=document.getElementById("overlay"),sr=document.getElementById("go-text"),Fn=document.getElementById("savehint"),E_=document.getElementById("water-tint"),zc=document.getElementById("hit-tint");let Gc=null,jr=!1;const ur=()=>{jr=!0};function Hc(n,t,e,i,r){const s=Yu.relight(n,t,e,i,r),o=Math.floor(n/at),a=Math.floor(e/at);s.add(he(o,a));const l=(n%at+at)%at,c=(e%at+at)%at;l===0&&s.add(he(o-1,a)),l===at-1&&s.add(he(o+1,a)),c===0&&s.add(he(o,a-1)),c===at-1&&s.add(he(o,a+1));for(const f of s){const h=f.split(",").map(Number),d=Te(h[0],h[1]);d&&d.state==="meshed"&&Tr.buildChunk(h[0],h[1])}}function Vc(n,t,e){return n<bt.pos.x+bt.W&&n+1>bt.pos.x-bt.W&&t<bt.pos.y+bt.H&&t+1>bt.pos.y&&e<bt.pos.z+bt.W&&e+1>bt.pos.z-bt.W}const kc=n=>n===Qe?bi:n===bi?Qe:n===zn?Er:zn;function T_(n,t,e,i=Qe){if(t+1>=Vt||qe(Yt(n,t,e))||qe(Yt(n,t+1,e))||Vc(n,t,e)||Vc(n,t+1,e))return;const r=-Math.sin(bt.yaw),s=-Math.cos(bt.yaw),a=Math.abs(s)>Math.abs(r)?1:0;In(n,t,e,i,a),In(n,t+1,e,i,a|2),Tr.rebuildAt(n,e),Pe.sndPlace(i),ur()}function A_(n,t,e){const i=cr(n,t,e),r=i&2?t-1:t,s=Yt(n,r,e),o=Yt(n,r+1,e);kr(s)&&In(n,r,e,kc(s),cr(n,r,e)),kr(o)&&In(n,r+1,e,kc(o),cr(n,r+1,e)),Tr.rebuildAt(n,e),Pe.sndPlace(s),ur()}function b_(n,t,e){const i=cr(n,t,e),r=i&2?t-1:t;In(n,r,e,oe,0),In(n,r+1,e,oe,0),Tr.rebuildAt(n,e)}function Wo(n){Tr.disposeAll();const t=n?n[0]:8,e=n?n[2]:8;$r.warmup(t,e),Zn.spawnPlayer(n||null),$r.update(bt.pos.x,bt.pos.z),Ku.spawnAnimals(16,bt.pos),Si.buildSky()}wa.addEventListener("click",()=>{It.ready&&(Pe.audioInit(),It.weather==="rain"&&Si.setWeather("rain",bt.pos),yn.requestPointerLock())});document.addEventListener("pointerlockchange",()=>{It.locked=document.pointerLockElement===yn,wa.style.display=It.locked||Zr?"none":"flex",!It.locked&&!Zr&&It.ready&&(Nn.saveLocal(),jr=!1,Fn.textContent="✔ Automatisch gespeichert")});document.addEventListener("mousemove",n=>{It.locked&&(bt.yaw-=n.movementX*.0024,bt.pitch-=n.movementY*.0024,bt.pitch=Math.max(-1.55,Math.min(1.55,bt.pitch)))});document.addEventListener("keydown",n=>{if(It.keys[n.code]=!0,n.code==="KeyE"&&It.ready){Zr?Zu():y_();return}if(n.code==="KeyF"&&(bt.fly=!bt.fly,bt.vel.y=0),n.code==="KeyM"&&Pe.toggleMusic(),n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<mr.length&&(It.selected=t,_r.renderHotbar())}});document.addEventListener("keyup",n=>It.keys[n.code]=!1);document.addEventListener("wheel",n=>{It.locked&&(It.selected=(It.selected+(n.deltaY>0?1:-1)+mr.length)%mr.length,_r.renderHotbar())});document.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("mousedown",n=>{if(!It.locked)return;const t=Zn.raycast();if(t){if(n.button===0){const e=Yt(t.x,t.y,t.z);if(e===Je)return;if(kr(e)){b_(t.x,t.y,t.z),Pe.sndBreak(e),fa.spawn(t.x+.5,t.y+.5,t.z+.5,wc[e]||8947848,10,3,1.5),ur();return}In(t.x,t.y,t.z,oe),Hc(t.x,t.y,t.z,e,oe),Pe.sndBreak(e),fa.spawn(t.x+.5,t.y+.5,t.z+.5,wc[e]||8947848,10,3,1.5),ur()}else if(n.button===2){const e=Yt(t.x,t.y,t.z);if(kr(e)){A_(t.x,t.y,t.z);return}const i=t.x+t.nx,r=t.y+t.ny,s=t.z+t.nz;if(!Nu(i,r))return;const o=mr[It.selected];if(o===Qe||o===zn){T_(i,r,s,o);return}const a=Yt(i,r,s);if(qe(a))return;let l=0;if(Ea(o)){const c=-Math.sin(bt.yaw),f=-Math.cos(bt.yaw);l=Math.abs(f)>Math.abs(c)?f<0?0:2:c<0?3:1}if(In(i,r,s,o,l),Zn.boxCollides(bt.pos)){In(i,r,s,a);return}Hc(i,r,s,a,o),Pe.sndPlace(o),ur()}}});document.getElementById("btn-export").addEventListener("click",n=>{n.stopPropagation(),Nn.exportFile(),Fn.textContent="✔ Welt exportiert"});document.getElementById("btn-import").addEventListener("click",n=>{n.stopPropagation(),document.getElementById("file-import").click()});document.getElementById("file-import").addEventListener("click",n=>n.stopPropagation());document.getElementById("file-import").addEventListener("change",n=>{const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=()=>{try{const i=Nn.applySnapshot(JSON.parse(e.result));i!==!1?(Wo(i),Si.setWeather(It.weather,bt.pos),Nn.saveLocal(),Fn.textContent="✔ Welt geladen"):Fn.textContent="✘ Datei konnte nicht gelesen werden"}catch{Fn.textContent="✘ Ungültige Datei"}},e.readAsText(t),n.target.value=""});document.getElementById("btn-new").addEventListener("click",n=>{n.stopPropagation(),sr.textContent="⏳ Neue Welt wird erzeugt …",sr.classList.add("busy"),It.ready=!1,setTimeout(()=>{const t=Math.random()*2147483648|0;Fu(t),Wo(null),It.timeOfDay=.3,Si.setWeather("clear",bt.pos),ur(),Nn.saveLocal(),Fn.textContent="✔ Neue Welt (Seed "+t+")",sr.textContent="▶ Klicken zum Spielen ◀",sr.classList.remove("busy"),It.ready=!0},40)});function w_(){const n=Math.floor(bt.pos.x),t=Math.floor(bt.pos.z);for(let e=Math.ceil(bt.pos.y+bt.H);e<Vt;e++)if(qe(Yt(n,e,t)))return!0;return!1}const ha=[];let Wc=performance.now();function R_(n){const t=Math.min((n-Wc)/1e3,.05);if(Wc=n,Ae.xr.isPresenting&&ha.push(t),S_.update(t),It.ready&&(It.locked||Ae.xr.isPresenting)){const r=Zn.update(t);r.splash&&Pe.sndSplash(),r.land!=null&&Pe.sndLand(r.land),r.step!=null&&Pe.sndStep(r.step)}if(Ae.xr.isPresenting?ba.position.set(bt.pos.x,bt.pos.y,bt.pos.z):(Oe.position.set(bt.pos.x,bt.pos.y+bt.EYE,bt.pos.z),Oe.rotation.set(bt.pitch,bt.yaw,0)),Oe.getWorldPosition(js),Si.updateSky(t),It.ready){$r.update(bt.pos.x,bt.pos.z);const r=Ku.update(t,bt.pos);r.hit&&It.locked&&(Zn.moveAxis("x",r.hit.dx*1.5),Zn.moveAxis("z",r.hit.dz*1.5),bt.fly||(bt.vel.y=3.5),Pe.sndHit(),zc.style.display="block",clearTimeout(Gc),Gc=setTimeout(()=>{zc.style.display="none"},240));for(const s of r.poofs)fa.spawn(s[0],s[1],s[2],5929554,14,2.5,2);fa.update(t),M_.update(t),Si.tickWeather(t,bt.pos),Si.updateRain(bt.pos,t)}const e=It.ready&&It.locked?Zn.raycast():null;e?(Gr.visible=!0,Gr.position.set(e.x+.5,e.y+.5,e.z+.5)):Gr.visible=!1;const i=Yt(Math.floor(js.x),Math.floor(js.y),Math.floor(js.z))===Je;if(E_.style.display=i?"block":"none",on.fog.near=i?4:Xu,on.fog.far=i?26:ko,Pe.setMuffle(i),It.curHeadWater=i,It.curUnderground=!i&&w_(),It.ready){const r=Math.floor(bt.pos.x),s=Math.floor(bt.pos.z);Nu(r,0)&&(It.curBiome=Yr(r,s,Gu(r,s))),_r.updateHUD(bt,Pe.isMusicOn())}if(!Ae.xr.isPresenting){const r=yn.clientWidth,s=yn.clientHeight;(yn.width!==(r*Ae.getPixelRatio()|0)||yn.height!==(s*Ae.getPixelRatio()|0))&&(Ae.setSize(r,s,!1),Oe.aspect=r/s,Oe.updateProjectionMatrix())}Ae.render(on,Oe)}const ju=document.getElementById("btn-vr");navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported("immersive-vr").then(n=>{n&&(ju.style.display="")}).catch(()=>{});ju.addEventListener("click",async n=>{if(n.stopPropagation(),!(!It.ready||Ae.xr.isPresenting)){Pe.audioInit();try{const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor"]});Ae.xr.setReferenceSpaceType("local-floor"),await Ae.xr.setSession(t)}catch(t){Fn.textContent="✘ VR-Start fehlgeschlagen: "+t.message}}});Ae.xr.addEventListener("sessionstart",()=>{wa.style.display="none",ha.length=0,$r.setVRMode(!0)});Ae.xr.addEventListener("sessionend",()=>{$r.setVRMode(!1),Nn.saveLocal(),jr=!1,Oe.fov=72,Oe.aspect=yn.clientWidth/yn.clientHeight,Oe.updateProjectionMatrix(),wa.style.display="flex";const n=ha.slice(Math.min(144,ha.length>>2));if(n.length>72){const t=n.reduce((r,s)=>r+s,0)/n.length,e=[...n].sort((r,s)=>s-r),i=e[Math.floor(e.length*.01)];Fn.textContent=`📊 VR: Ø ${(1/t).toFixed(1)} FPS · 1%-low ${(1/i).toFixed(1)} FPS · ${n.length} Frames`}});Ae.setAnimationLoop(R_);setTimeout(()=>{const n=Nn.loadLocal();let t=null;n===!1&&(t=Math.random()*2**31|0,Fu(t)),Wo(n||null),setInterval(()=>{(jr||document.pointerLockElement)&&(Nn.saveLocal(),jr=!1)},8e3),window.addEventListener("beforeunload",()=>Nn.saveLocal()),It.ready=!0,sr.textContent="▶ Klicken zum Spielen ◀",sr.classList.remove("busy"),Fn.textContent=n!==!1?"✔ Gespeicherte Welt geladen":"✔ Neue Welt (Seed "+t+")"},50);
