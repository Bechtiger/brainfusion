var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,ee=1027,O=1028,k=1029,te=1030,ne=1031,A=1033,re=33776,ie=33777,j=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,M=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,N=36286,Ie=2300,Le=2301,Re=2302,P=2303,ze=2400,F=2401,I=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,L(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var pt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ht.copy(this).projectOnVector(e),this.sub(ht)}reflect(e){return this.sub(ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ht=new B,gt=new mt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_t.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new V,vt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var xt=bt();function St(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ct(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wt,Tt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wt===void 0&&(wt=Xe(`canvas`)),wt.width=e.width,wt.height=e.height;let t=wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=St(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(St(t[e]/255)*255):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}else return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Et=0,Dt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ot(r[t].image)):e.push(Ot(r[t]))}else e=Ot(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Tt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var kt=0,At=new B,jt=class e extends it{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=ct(),this.name=``,this.source=new Dt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(At).x}get height(){return this.source.getSize(At).y}get depth(){return this.source.getSize(At).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=300,jt.DEFAULT_ANISOTROPY=1;var Mt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=new jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pt=class extends Nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ft=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},It=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Rt.setFromMatrixColumn(e,0).length(),i=1/Rt.setFromMatrixColumn(e,1).length(),a=1/Rt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bt,e,Vt)}lookAt(e,t,n){let r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ht.crossVectors(n,Wt),Ht.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ht.crossVectors(n,Wt)),Ht.normalize(),Ut.crossVectors(Wt,Ht),r[0]=Ht.x,r[4]=Ut.x,r[8]=Wt.x,r[1]=Ht.y,r[5]=Ut.y,r[9]=Wt.y,r[2]=Ht.z,r[6]=Ut.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*O+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*ee+s*ne+c*j,i[1]=l*x+u*T+d*O+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*ee+d*ne+f*j,i[2]=p*x+m*T+h*O+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*ee+h*ne+g*j,i[3]=_*x+v*T+y*O+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*ee+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Rt.set(r[0],r[1],r[2]).length(),o=Rt.set(r[4],r[5],r[6]).length(),s=Rt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),zt.copy(this);let c=1/a,l=1/o,u=1/s;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=l,zt.elements[5]*=l,zt.elements[6]*=l,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rt=new B,zt=new Lt,Bt=new B(0,0,0),Vt=new B(1,1,1),Ht=new B,Ut=new B,Wt=new B,Gt=new Lt,Kt=new mt,qt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kt.setFromEuler(this),this.setFromQuaternion(Kt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER=`XYZ`;var Jt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Yt=0,Xt=new B,Zt=new mt,Qt=new Lt,$t=new B,en=new B,tn=new B,nn=new mt,rn=new B(1,0,0),an=new B(0,1,0),on=new B(0,0,1),sn={type:`added`},cn={type:`removed`},ln={type:`childadded`,child:null},un={type:`childremoved`,child:null},dn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new qt,r=new mt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new V}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.multiply(Zt),this}rotateOnWorldAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.premultiply(Zt),this}rotateX(e){return this.rotateOnAxis(rn,e)}rotateY(e){return this.rotateOnAxis(an,e)}rotateZ(e){return this.rotateOnAxis(on,e)}translateOnAxis(e,t){return Xt.copy(e).applyQuaternion(this.quaternion),this.position.add(Xt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rn,e)}translateY(e){return this.translateOnAxis(an,e)}translateZ(e){return this.translateOnAxis(on,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$t.copy(e):$t.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(en,$t,this.up):Qt.lookAt($t,en,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Zt.setFromRotationMatrix(Qt),this.quaternion.premultiply(Zt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,e,tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};dn.DEFAULT_UP=new B(0,1,0),dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pn={type:`move`},mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},_n={h:0,s:0,l:0};function vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=lt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=vn(i,r,e+1/3),this.g=vn(i,r,e),this.b=vn(i,r,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=hn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return xt.workingToColorSpace(yn.copy(this),e),Math.round(z(yn.r*255,0,255))*65536+Math.round(z(yn.g*255,0,255))*256+Math.round(z(yn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,i=yn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Ve){xt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(_n);let n=ut(gn.h,_n.h,t),r=ut(gn.s,_n.s,t),i=ut(gn.l,_n.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new H;H.NAMES=hn;var bn=class extends dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new B,Sn=new B,Cn=new B,wn=new B,Tn=new B,En=new B,Dn=new B,On=new B,kn=new B,An=new B,jn=new Mt,Mn=new Mt,Nn=new Mt,Pn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xn.subVectors(r,t),Sn.subVectors(n,t),Cn.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Sn),s=xn.dot(Cn),c=Sn.dot(Sn),l=Sn.dot(Cn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,wn.x),s.addScaledVector(a,wn.y),s.addScaledVector(o,wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return jn.setScalar(0),Mn.setScalar(0),Nn.setScalar(0),jn.fromBufferAttribute(e,t),Mn.fromBufferAttribute(e,n),Nn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jn,i.x),a.addScaledVector(Mn,i.y),a.addScaledVector(Nn,i.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Sn.subVectors(e,t),xn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),xn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Tn.subVectors(r,n),En.subVectors(i,n),On.subVectors(e,n);let s=Tn.dot(On),c=En.dot(On);if(s<=0&&c<=0)return t.copy(n);kn.subVectors(e,r);let l=Tn.dot(kn),u=En.dot(kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Tn,a);An.subVectors(e,i);let f=Tn.dot(An),p=En.dot(An);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(En,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Dn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Dn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Tn,a).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ln):Ln.fromBufferAttribute(r,t),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Rn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Rn.copy(e.boundingBox)),Rn.applyMatrix4(e.matrixWorld),this.union(Rn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gn),Kn.subVectors(this.max,Gn),zn.subVectors(e.a,Gn),Bn.subVectors(e.b,Gn),Vn.subVectors(e.c,Gn),Hn.subVectors(Bn,zn),Un.subVectors(Vn,Bn),Wn.subVectors(zn,Vn);let t=[0,-Hn.z,Hn.y,0,-Un.z,Un.y,0,-Wn.z,Wn.y,Hn.z,0,-Hn.x,Un.z,0,-Un.x,Wn.z,0,-Wn.x,-Hn.y,Hn.x,0,-Un.y,Un.x,0,-Wn.y,Wn.x,0];return!Yn(t,zn,Bn,Vn,Kn)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,zn,Bn,Vn,Kn))?!1:(qn.crossVectors(Hn,Un),t=[qn.x,qn.y,qn.z],Yn(t,zn,Bn,Vn,Kn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,Rn=new Fn,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B;function Yn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Jn.fromArray(e,a);let o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),s=t.dot(Jn),c=n.dot(Jn),l=r.dot(Jn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xn=new B,Zn=new pt,Qn=0,$n=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXY(t,Zn.x,Zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},er=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}},tr=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nr=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}},rr=new Fn,ir=new B,ar=new B,or=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ar)),this.expandByPoint(ir.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=0,cr=new Lt,lr=new dn,ur=new B,dr=new Fn,fr=new Fn,pr=new B,mr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Je(e)?tr:er)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new nr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(pr),pr.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(pr)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(dr.min,fr.min),dr.expandByPoint(pr),pr.addVectors(dr.max,fr.max),dr.expandByPoint(pr)):(dr.expandByPoint(fr.min),dr.expandByPoint(fr.max))}dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pr.fromBufferAttribute(a,t),o&&(ur.fromBufferAttribute(e,t),pr.add(ur)),r=Math.max(r,n.distanceToSquared(pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new pt,f=new pt,p=new pt,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pr.fromBufferAttribute(e,t),pr.normalize(),e.setXYZ(t,pr.x,pr.y,pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new $n(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},hr=0,gr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new pt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},_r=new B,vr=new B,yr=new B,br=new B,xr=new B,Sr=new B,Cr=new B,wr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vr.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),br.copy(this.origin).sub(vr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=br.dot(this.direction),s=-br.dot(yr),c=br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(vr).addScaledVector(yr,d),f}intersectSphere(e,t){_r.subVectors(e.center,this.origin);let n=_r.dot(this.direction),r=_r.dot(_r)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,n,r,i){xr.subVectors(t,e),Sr.subVectors(n,e),Cr.crossVectors(xr,Sr);let a=this.direction.dot(Cr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;br.subVectors(this.origin,e);let s=o*this.direction.dot(Sr.crossVectors(br,Sr));if(s<0)return null;let c=o*this.direction.dot(xr.cross(br));if(c<0||s+c>a)return null;let l=-o*br.dot(Cr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tr=class extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Er=new Lt,Dr=new wr,Or=new or,kr=new B,Ar=new B,jr=new B,Mr=new B,Nr=new B,Pr=new B,Fr=new B,Ir=new B,U=class extends dn{constructor(e=new mr,t=new Tr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Pr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Nr.fromBufferAttribute(s,e),a?Pr.addScaledVector(Nr,r):Pr.addScaledVector(Nr.sub(t),r))}t.add(Pr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Dr.copy(e.ray).recast(e.near),!(Or.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Or,kr)===null||Dr.origin.distanceToSquared(kr)>(e.far-e.near)**2))&&(Er.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(Er),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Rr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Rr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Rr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Rr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Lr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ir.copy(s),Ir.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ir);return l<n.near||l>n.far?null:{distance:l,point:Ir.clone(),object:e}}function Rr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ar),e.getVertexPosition(c,jr),e.getVertexPosition(l,Mr);let u=Lr(e,t,n,r,Ar,jr,Mr,Fr);if(u){let e=new B;Pn.getBarycoord(Fr,Ar,jr,Mr,e),i&&(u.uv=Pn.getInterpolatedAttribute(i,s,c,l,e,new pt)),a&&(u.uv1=Pn.getInterpolatedAttribute(a,s,c,l,e,new pt)),o&&(u.normal=Pn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Pn.getNormal(Ar,jr,Mr,t.normal),u.face=t,u.barycoord=e}return u}var zr=class extends jt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Br=class extends $n{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Lt,Hr=new Lt,Ur=[],Wr=new Fn,Gr=new Lt,Kr=new U,qr=new or,Jr=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Gr)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Wr.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Wr)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),qr.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Vr),Hr.multiplyMatrices(n,Vr),Kr.matrixWorld=Hr,Kr.raycast(e,Ur);for(let e=0,n=Ur.length;e<n;e++){let n=Ur[e];n.instanceId=i,n.object=this,t.push(n)}Ur.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(r*this.count),r,this.count,O,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yr=new B,Xr=new B,Zr=new V,Qr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yr.subVectors(n,t).cross(Xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zr.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$r=new or,ei=new pt(.5,.5),ti=new B,ni=class{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,i=new Qr,a=new Qr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476+ei.distanceTo(e.center),$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ti.x=r.normal.x>0?e.max.x:e.min.x,ti.y=r.normal.y>0?e.max.y:e.min.y,ti.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ti)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ri=class extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ii=new Lt,ai=new wr,oi=new or,si=new B,ci=class extends dn{constructor(e=new mr,t=new ri){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oi.copy(n.boundingSphere),oi.applyMatrix4(r),oi.radius+=i,e.ray.intersectsSphere(oi)===!1)return;ii.copy(r).invert(),ai.copy(e.ray).applyMatrix4(ii);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);si.fromBufferAttribute(l,n),li(si,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)si.fromBufferAttribute(l,a),li(si,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function li(e,t,n,r,i,a,o){let s=ai.distanceSqToPoint(e);if(s<n){let n=new B;ai.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class extends jt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pi=class extends fi{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mi=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class e extends mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},gi=class e extends mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new pt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new nr(a,3)),this.setAttribute(`normal`,new nr(o,3)),this.setAttribute(`uv`,new nr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_i=class e extends mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new nr(u,3)),this.setAttribute(`normal`,new nr(d,3)),this.setAttribute(`uv`,new nr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new pt,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vi=class e extends mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},yi=class e extends mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bi=class e extends mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function xi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ci(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Ci(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Si(e){let t={};for(let n=0;n<e.length;n++){let r=xi(e[n]);for(let e in r)t[e]=r[e]}return t}function Ci(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ti(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}var Ei={clone:xi,merge:Si},Di=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ki=class extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Di,this.fragmentShader=Oi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=wi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new pt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ai=class extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ji=class extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mi=class extends gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ni=class extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pi=class extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Ii=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Li=class extends Ii{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ri=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zi=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bi=class extends Ii{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Vi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ri(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Li(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case P:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return P}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Vi.prototype.ValueTypeName=``,Vi.prototype.TimeBufferType=Float32Array,Vi.prototype.ValueBufferType=Float32Array,Vi.prototype.DefaultInterpolation=Le;var Hi=class extends Vi{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName=`bool`,Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=Ie,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}};Ui.prototype.ValueTypeName=`color`;var Wi=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}};Wi.prototype.ValueTypeName=`number`;var Gi=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ki=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gi(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName=`quaternion`,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Vi{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName=`string`,qi.prototype.ValueBufferType=Array,qi.prototype.DefaultInterpolation=Ie,qi.prototype.InterpolantFactoryMethodLinear=void 0,qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}};Ji.prototype.ValueTypeName=`vector`;var Yi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Xi(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Xi(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Xi(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Zi=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Qi=class{constructor(e){this.manager=e===void 0?Zi:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qi.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var $i=new WeakMap,ea=class extends Qi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=$i.get(a);e===void 0&&(e=[],$i.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Xe(`img`);function s(){l(),t&&t(this);let n=$i.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}$i.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Yi.remove(`image:${e}`);let n=$i.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}$i.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yi.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ta=class extends Qi{constructor(e){super(e)}load(e,t,n,r){let i=new jt,a=new ea(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},na=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ra=class extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ia=new Lt,aa=new B,oa=new B,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ni,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(aa),oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oa),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ca=new B,la=new mt,ua=new B,da=class extends dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,la,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ua.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ca,la,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fa=new B,pa=new pt,ma=new pt,ha=class extends da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fa.x,fa.y).multiplyScalar(-e/fa.z),fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fa.x,fa.y).multiplyScalar(-e/fa.z)}getViewSize(e,t){return this.getViewBounds(e,pa,ma),t.subVectors(ma,pa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ga=class extends sa{constructor(){super(new ha(90,1,.5,500)),this.isPointLightShadow=!0}},_a=class extends na{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ga}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},va=class extends da{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ya=class extends sa{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new ya}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xa=-90,Sa=1,Ca=class extends dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ha(xa,Sa,e,t);r.layers=this.layers,this.add(r);let i=new ha(xa,Sa,e,t);i.layers=this.layers,this.add(i);let a=new ha(xa,Sa,e,t);a.layers=this.layers,this.add(a);let o=new ha(xa,Sa,e,t);o.layers=this.layers,this.add(o);let s=new ha(xa,Sa,e,t);s.layers=this.layers,this.add(s);let c=new ha(xa,Sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wa=class extends ha{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ta=`\\[\\]\\.:\\/`,Ea=RegExp(`[\\[\\]\\.:\\/]`,`g`),Da=`[^\\[\\]\\.:\\/]`,Oa=`[^`+Ta.replace(`\\.`,``)+`]`,ka=`((?:WC+[\\/:])*)`.replace(`WC`,Da),Aa=`(WCOD+)?`.replace(`WCOD`,Oa),ja=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Da),Ma=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Da),Na=RegExp(`^`+ka+Aa+ja+Ma+`$`),Pa=[`material`,`materials`,`bones`,`map`],Fa=class{constructor(e,t,n){let r=n||Ia.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ia=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ea,``)}static parseTrackName(e){let t=Na.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Pa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ia.Composite=Fa,Ia.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ia.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ia.prototype.GetterByBindingType=[Ia.prototype._getValue_direct,Ia.prototype._getValue_array,Ia.prototype._getValue_arrayElement,Ia.prototype._getValue_toArray],Ia.prototype.SetterByBindingTypeAndVersioning=[[Ia.prototype._setValue_direct,Ia.prototype._setValue_direct_setNeedsUpdate,Ia.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_array,Ia.prototype._setValue_array_setNeedsUpdate,Ia.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_arrayElement,Ia.prototype._setValue_arrayElement_setNeedsUpdate,Ia.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ia.prototype._setValue_fromArray,Ia.prototype._setValue_fromArray_setNeedsUpdate,Ia.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function La(e,t,n,r){let i=Ra(r);switch(n){case w:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case N:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ra(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function za(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ba(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Va={basic:{uniforms:Si([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Si([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Si([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Si([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Si([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Si([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Si([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Si([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Si([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Si([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Si([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:Si([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:Si([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};Va.physical={uniforms:Si([Va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var Ha={r:0,b:0,g:0},Ua=new Lt,Wa=new V;Wa.set(-1,0,0,0,1,0,0,0,1);function Ga(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new U(new hi(1,1,1),new ki({name:`BackgroundCubeMaterial`,uniforms:xi(Va.backgroundCube.uniforms),vertexShader:Va.backgroundCube.vertexShader,fragmentShader:Va.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ua.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wa),l.material.toneMapped=xt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new vi(2,2),new ki({name:`BackgroundMaterial`,uniforms:xi(Va.background.uniforms),vertexShader:Va.background.vertexShader,fragmentShader:Va.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=xt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ha,Ti(e)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ka(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function qa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ja(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ya(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Xa=4,Za=[.125,.215,.35,.446,.526,.582],Qa=20,$a=256,eo=new va,to=new H,no=null,ro=0,io=0,ao=!1,oo=new B,so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=oo}=i;no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(no,ro,io),this._renderer.xr.enabled=ao,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:He,depthBuffer:!1},r=lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=co(r)),this._blurMaterial=po(r,e,t),this._ggxMaterial=fo(r,e,t)}return r}_compileMaterial(e){let t=new U(new mr,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,r,i){let a=new ha(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(to),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new hi,new Tr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(to),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;uo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;uo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Xa?n-d+Xa:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,uo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,eo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,uo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,eo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&R(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Qa-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Qa;m>Qa&&L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qa}`);let h=[],g=0;for(let e=0;e<Qa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];uo(t,3*v*(r>_-Xa?r-_+Xa:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,eo)}};function co(e){let t=[],n=[],r=[],i=e,a=e-Xa+1+Za.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Xa?s=Za[o-e+Xa-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new mr;h.setAttribute(`position`,new $n(f,3)),h.setAttribute(`uv`,new $n(p,2)),h.setAttribute(`faceIndex`,new $n(m,1)),r.push(new U(h,null)),i>Xa&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function lo(e,t,n){let r=new Pt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function uo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function fo(e,t,n){return new ki({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:$a,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(e,t,n){let r=new Float32Array(Qa),i=new B(0,1,0);return new ki({name:`SphericalGaussianBlur`,defines:{n:Qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new ki({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ho(){return new ki({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}var _o=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ui(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),i=new ki({name:`CubemapFromEquirect`,uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function vo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new _o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function yo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function bo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?tr:er)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function xo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function So(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Co(e,t,n){let r=new WeakMap,i=new Mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ft(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new pt(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function wo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var To={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Eo(e,t,n,r,i,a){let o=new Pt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new fi(t,n):void 0}),s=new Pt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new mr;c.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new nr([0,2,0,0,2,0],2));let l=new Ai({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new U(c,l),d=new va(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,y=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},xt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=To[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Do=new jt,Oo=new fi(1,1),ko=new Ft,Ao=new It,jo=new ui,Mo=[],No=[],Po=new Float32Array(16),Fo=new Float32Array(9),Io=new Float32Array(4);function Lo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Mo[i];if(a===void 0&&(a=new Float32Array(i),Mo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ro(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function zo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Bo(e,t){let n=No[t];n===void 0&&(n=new Int32Array(t),No[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Vo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2fv(this.addr,t),zo(n,t)}}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ro(n,t))return;e.uniform3fv(this.addr,t),zo(n,t)}}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4fv(this.addr,t),zo(n,t)}}function Go(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Io.set(r),e.uniformMatrix2fv(this.addr,!1,Io),zo(n,r)}}function Ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Fo.set(r),e.uniformMatrix3fv(this.addr,!1,Fo),zo(n,r)}}function qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Po.set(r),e.uniformMatrix4fv(this.addr,!1,Po),zo(n,r)}}function Jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2iv(this.addr,t),zo(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3iv(this.addr,t),zo(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4iv(this.addr,t),zo(n,t)}}function Qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2uiv(this.addr,t),zo(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3uiv(this.addr,t),zo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4uiv(this.addr,t),zo(n,t)}}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Oo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Oo):a=Do,n.setTexture2D(t||a,i)}function rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ao,i)}function is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||jo,i)}function as(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ko,i)}function os(e){switch(e){case 5126:return Vo;case 35664:return Ho;case 35665:return Uo;case 35666:return Wo;case 35674:return Go;case 35675:return Ko;case 35676:return qo;case 5124:case 35670:return Jo;case 35667:case 35671:return Yo;case 35668:case 35672:return Xo;case 35669:case 35673:return Zo;case 5125:return Qo;case 36294:return $o;case 36295:return es;case 36296:return ts;case 35678:case 36198:case 36298:case 36306:case 35682:return ns;case 35679:case 36299:case 36307:return rs;case 35680:case 36300:case 36308:case 36293:return is;case 36289:case 36303:case 36311:case 36292:return as}}function ss(e,t){e.uniform1fv(this.addr,t)}function cs(e,t){let n=Lo(t,this.size,2);e.uniform2fv(this.addr,n)}function ls(e,t){let n=Lo(t,this.size,3);e.uniform3fv(this.addr,n)}function us(e,t){let n=Lo(t,this.size,4);e.uniform4fv(this.addr,n)}function ds(e,t){let n=Lo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fs(e,t){let n=Lo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ps(e,t){let n=Lo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ms(e,t){e.uniform1iv(this.addr,t)}function hs(e,t){e.uniform2iv(this.addr,t)}function gs(e,t){e.uniform3iv(this.addr,t)}function _s(e,t){e.uniform4iv(this.addr,t)}function vs(e,t){e.uniform1uiv(this.addr,t)}function ys(e,t){e.uniform2uiv(this.addr,t)}function bs(e,t){e.uniform3uiv(this.addr,t)}function xs(e,t){e.uniform4uiv(this.addr,t)}function Ss(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Oo:Do;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Cs(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ao,a[e])}function ws(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||jo,a[e])}function Ts(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ko,a[e])}function Es(e){switch(e){case 5126:return ss;case 35664:return cs;case 35665:return ls;case 35666:return us;case 35674:return ds;case 35675:return fs;case 35676:return ps;case 5124:case 35670:return ms;case 35667:case 35671:return hs;case 35668:case 35672:return gs;case 35669:case 35673:return _s;case 5125:return vs;case 36294:return ys;case 36295:return bs;case 36296:return xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ss;case 35679:case 36299:case 36307:return Cs;case 35680:case 36300:case 36308:case 36293:return ws;case 36289:case 36303:case 36311:case 36292:return Ts}}var Ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=os(t.type)}},Os=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Es(t.type)}},ks=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},As=/(\w+)(\])?(\[|\.)?/g;function js(e,t){e.seq.push(t),e.map[t.id]=t}function Ms(e,t,n){let r=e.name,i=r.length;for(As.lastIndex=0;;){let a=As.exec(r),o=As.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){js(n,l===void 0?new Ds(s,e,t):new Os(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ks(s),js(n,e)),n=e}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ms(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ps(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Fs=37297,Is=0;function Ls(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Rs=new V;function zs(e){xt._getMatrix(Rs,xt.workingColorSpace,e);let t=`mat3( ${Rs.elements.map(e=>e.toFixed(4))} )`;switch(xt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Bs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ls(e.getShaderSource(t),r)}else return i}function Vs(e,t){let n=zs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Hs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Us(e,t){let n=Hs[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ws=new B;function Gs(){return xt.getLuminanceCoefficients(Ws),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ws.x.toFixed(4)}, ${Ws.y.toFixed(4)}, ${Ws.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ks(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ys).join(`
`)}function qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Js(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ys(e){return e!==``}function Xs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qs=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(e){return e.replace(Qs,tc)}var ec=new Map;function tc(e,t){let n=W[t];if(n===void 0){let e=ec.get(t);if(e!==void 0)n=W[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return $s(n)}var nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(e){return e.replace(nc,ic)}function ic(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ac(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var oc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function sc(e){return oc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var cc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function lc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:cc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var uc={302:`ENVMAP_MODE_REFRACTION`};function dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:uc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var fc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:fc[e.combine]||`ENVMAP_BLENDING_NONE`}function mc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function hc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=sc(n),l=lc(n),u=dc(n),d=pc(n),f=mc(n),p=Ks(n),m=qs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(g=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ys).join(`
`),_=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:Us(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,Vs(`linearToOutputTexel`,n.outputColorSpace),Gs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ys).join(`
`)),o=$s(o),o=Xs(o,n),o=Zs(o,n),s=$s(s),s=Xs(s,n),s=Zs(s,n),o=rc(o),s=rc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ps(i,i.VERTEX_SHADER,y),S=Ps(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Bs(i,x,`vertex`),n=Bs(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ns(i,h),T=Js(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Fs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Is++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var gc=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vc(e),t.set(e,n)),n}},vc=class{constructor(e){this.id=gc++,this.code=e,this.usedTimes=0}};function yc(e){return e===1030||e===37490||e===36285}function bc(e,t,n,r,i,a){let o=new Jt,s=new _c,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Va[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,N=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&yc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&xt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&xt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Va[t];n=Ei.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new hc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function xc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Sc),r.length>1&&r.sort(t||Cc),i.length>1&&i.sort(t||Cc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Tc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new wc,e.set(t,[i])):n>=r.length?(i=new wc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ec(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function Dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Oc=0;function kc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ac(e){let t=new Ec,n=Dc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new Lt,o=new Lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(kc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Oc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function jc(e){let t=new Ac(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Mc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new jc(e),t.set(n,[a])):r>=i.length?(a=new jc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pc=`uniform sampler2D shadow_pass;
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
}`,Fc=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Ic=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Lc=new Lt,Rc=new B,zc=new B;function Bc(e,t,n){let r=new ni,i=new pt,o=new pt,s=new Mt,l=new Ni,u=new Pi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Nc,fragmentShader:Pc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new mr;y.setAttribute(`position`,new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new U(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Pt(i.x,i.y,{format:te,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new fi(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new _o(i.x),p.map.depthTexture=new pi(i.x,g)):(p.map=new Pt(i.x,i.y),p.map.depthTexture=new fi(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Rc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Rc),zc.copy(e.position),zc.add(Fc[t]),e.up.copy(Ic[t]),e.lookAt(zc),e.updateMatrixWorld(),n.makeTranslation(-Rc.x,-Rc.y,-Rc.z),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Pt(i.x,i.y,{format:te,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Vc(e,t){function n(){let t=!1,n=new Mt,r=null,i=new Mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Mt().fromArray(oe),le=new Mt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==O&&(A&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function I(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:I,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Be}}function Hc(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new pt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ue:xt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ge={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=xt.getPrimaries(xt.workingColorSpace),r=n.colorSpace===``?null:xt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=La(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=La(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=xt.getPrimaries(xt.workingColorSpace),s=n.colorSpace===``?null:xt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,A)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,re);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(xt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Uc(e,t){function n(n,r=``){let i,a=xt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Wc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gc=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ki({vertexShader:Wc,fragmentShader:Gc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Kc,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new pt,O=null,k=new ha;k.viewport=new Mt;let te=new ha;te.viewport=new Mt;let ne=[k,te],A=new wa,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,ie=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new fi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Pt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=te.near=k.near=t,A.far=te.far=k.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,k.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,k,te):A.projectionMatrix.copy(k.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let M=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new ha,o.layers.enable(n),o.viewport=new Mt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new mi,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new za;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},Jc=new Lt,Yc=new V;Yc.set(-1,0,0,0,1,0,0,0,1);function Xc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ti(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Jc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Yc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Zc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Qc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$c=null;function el(){return $c===null&&($c=new zr(Qc,16,16,te,v),$c.name=`DFG_LUT`,$c.minFilter=c,$c.magFilter=c,$c.wrapS=r,$c.wrapT=r,$c.generateMipmaps=!1,$c.needsUpdate=!0),$c}var tl=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([A,ne,k]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,ee=null,O=null,te=[],re=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Mt,he=new Mt,ge=null,_e=new H(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Mt(0,0,ye,be),Te=new Mt(0,0,ye,be),Ee=!1,De=new ni,Oe=!1,ke=!1,Ae=new Lt,je=new B,Me=new Mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw R(`WebGLRenderer: `+e.message),e}let Le,Re,P,ze,F,I,Be,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st;function ct(){Le=new yo(N),Le.init(),at=new Uc(N,Le),Re=new Ja(N,Le,e,at),P=new Vc(N,Le),Re.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new So(N),F=new xc,I=new Hc(N,Le,P,F,Re,at,ze),Be=new vo(j),He=new Ba(N),ot=new Ka(N,He),Ue=new bo(N,He,ze,ot),We=new wo(N,Ue,He,ot,ze),tt=new Co(N,Re,I),Xe=new Ya(F),Ge=new bc(j,Be,Le,Re,ot,Xe),Ke=new Xc(j,F),Je=new Tc,Ye=new Mc(Le),et=new Ga(j,Be,P,We,_,s),Qe=new Bc(j,We,Re),st=new Zc(N,ze,Re,P),rt=new qa(N,Le,ze),it=new xo(N,Le,ze),ze.programs=Ge.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Je,j.shadowMap=Qe,j.state=P,j.info=ze}ct(),S!==1009&&(ie=new Eo(S,t.width,t.height,o,r,i));let z=new qc(j,N);this.xr=z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(z.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et.dispose(),Je.dispose(),Ye.dispose(),F.dispose(),Be.dispose(),We.dispose(),ot.dispose(),st.dispose(),Ge.dispose(),z.dispose(),z.removeEventListener(`sessionstart`,_t),z.removeEventListener(`sessionend`,vt),yt.stop()};function lt(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),ae=!0}function ut(){$e(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;ct(),ze.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function dt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),F.remove(e)}function mt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh)if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,n),e.side=0,e.needsUpdate=!0,Et(e,t,n),e.side=2):Et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Ye.get(n),O.init(t),re.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ht(a,n,e),r.add(a)}else ht(t,n,e),r.add(t)}),O=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function V(e){gt&&gt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new za;yt.setAnimationLoop(V),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,z.setAnimationLoop(e),e===null?yt.stop():yt.start()},z.addEventListener(`sessionstart`,_t),z.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=z.enabled===!0&&z.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(t),t=z.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),O=Ye.get(e,re.length),O.init(t),O.state.textureUnits=I.getTextureUnits(),re.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,qe,t.reversedDepth),ke=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,ke),ee=Je.get(e,te.length),ee.init(),te.push(ee),z.enabled===!0&&z.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),ee.finish(),j.sortObjects===!0&&ee.sort(Se,Ce,t.reversedDepth),Pe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Pe&&et.addToRenderList(ee,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Xe.beginShadows();let i=O.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Xe.endShadows(),(r&&ie.hasRenderPass())===!1){let n=ee.opaque,r=ee.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(ee,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&et.render(e),St(ee,e,t)}M!==null&&de===0&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ot.resetDefaultState(),fe=-1,pe=null,re.pop(),re.length>0?(O=re[re.length-1],I.setTextureUnits(O.state.textureUnits),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,te.pop(),ee=te.length>0?te[te.length-1]:null,oe!==null&&oe.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=We.update(e),i=e.material;i.visible&&ee.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&ee.push(e,t,s,n,Me.z,o)}}else i.visible&&ee.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new Pt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&et.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,r),wt(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ge.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Ot(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ns.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ne),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:xt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=O.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=kt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,I),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,I),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=el()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,xe,be,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ns.upload(N,Dt(v),E,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ns.upload(N,Dt(v),E,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}else if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,at.convert(l),at.convert(u),0);let f=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await nt(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},nl=class extends bn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new hi;e.deleteAttribute(`uv`);let t=new ji({side:1}),n=new ji,r=new _a(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new U(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Jr(e,n,6),o=new dn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new U(e,rl(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new U(e,rl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new U(e,rl(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new U(e,rl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new U(e,rl(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new U(e,rl(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rl(e){return new Mi({color:0,emissive:16777215,emissiveIntensity:e})}var il=1/240,al=.1,ol={x:0,y:-9.81,z:0},sl=6.5*Math.PI/180,cl={x:.28,y:.01,z:.56},ll=.2,ul=.2,dl=.0135,fl=.08,pl=.3,ml=.2,hl=.2,gl=.2,_l=.025,vl=.008,yl=.075,bl=.011,xl=.15,Sl=4e4,Cl=.6,wl=.3,Tl=1.6,El=3.4,Dl=1.2,Ol=.25,kl=.025,Al=.85,jl=1.8,Ml=1.2,Nl=.4,Pl=1.6,Fl=5e3,Il={x:.125,z:-.27},Ll=1e3,Rl=3e3,zl=.35,Bl=.35,Vl=5e4,Hl=5e4,Ul=.8,Wl=.9,Gl=class{renderer;scene;camera;playerRig;onFixedStep=()=>{};onBeforeRender=()=>{};accumulator=0;last=performance.now()/1e3;frameCount=0;fpsWindowStart=performance.now()/1e3;_fps=0;constructor(e){this.renderer=new tl({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.scene=new bn,this.scene.background=new H(854536);let t=new so(this.renderer);this.scene.environment=t.fromScene(new nl,.04).texture,this.scene.environmentIntensity=.5,t.dispose(),this.camera=new ha(50,window.innerWidth/window.innerHeight,.01,50),this.playerRig=new fn,this.playerRig.add(this.camera),this.scene.add(this.playerRig),window.addEventListener(`resize`,()=>this.onResize())}get fps(){return this._fps}start(){this.last=performance.now()/1e3,this.renderer.setAnimationLoop(()=>this.tick())}tick(){let e=performance.now()/1e3;for(this.accumulator+=Math.min(e-this.last,al),this.last=e;this.accumulator>=il;)this.onFixedStep(il),this.accumulator-=il;this.onBeforeRender(),this.renderer.render(this.scene,this.camera),this.frameCount++,e-this.fpsWindowStart>=.5&&(this._fps=this.frameCount/(e-this.fpsWindowStart),this.frameCount=0,this.fpsWindowStart=e)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},Kl=``+new URL(`rapier_wasm3d_bg-bb0TTxsO.wasm`,import.meta.url).href,ql=async(e={},t)=>{let n;if(t.startsWith(`data:`)){let r=t.replace(/^data:.*?base64,/,``),i;if(typeof Buffer==`function`&&typeof Buffer.from==`function`)i=Buffer.from(r,`base64`);else if(typeof atob==`function`){let e=atob(r);i=new Uint8Array(e.length);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t)}else throw Error(`Cannot decode base64-encoded data URL`);n=await WebAssembly.instantiate(i,e)}else{let r=await fetch(t),i=r.headers.get(`Content-Type`)||``;if(`instantiateStreaming`in WebAssembly&&i.startsWith(`application/wasm`))n=await WebAssembly.instantiateStreaming(r,e);else{let t=await r.arrayBuffer();n=await WebAssembly.instantiate(t,e)}}return n.instance.exports},K;function Jl(e){K=e}var Yl=Array(128).fill(void 0);Yl.push(void 0,null,!0,!1);function q(e){return Yl[e]}var Xl=Yl.length;function Zl(e){Xl===Yl.length&&Yl.push(Yl.length+1);let t=Xl;return Xl=Yl[t],Yl[t]=e,t}function Ql(e,t){try{return e.apply(this,t)}catch(e){K.__wbindgen_export_0(Zl(e))}}var $l=new(typeof TextDecoder>`u`?(0,module.require)(`util`).TextDecoder:TextDecoder)(`utf-8`,{ignoreBOM:!0,fatal:!0});$l.decode();var eu=null;function tu(){return(eu===null||eu.byteLength===0)&&(eu=new Uint8Array(K.memory.buffer)),eu}function nu(e,t){return e>>>=0,$l.decode(tu().subarray(e,e+t))}function J(e){return e==null}var ru=null;function iu(){return(ru===null||ru.buffer.detached===!0||ru.buffer.detached===void 0&&ru.buffer!==K.memory.buffer)&&(ru=new DataView(K.memory.buffer)),ru}function au(e){e<132||(Yl[e]=Xl,Xl=e)}function ou(e){let t=q(e);return au(e),t}function Y(e,t){if(!(e instanceof t))throw Error(`expected instance of ${t.name}`)}var su=128;function cu(e){if(su==1)throw Error(`out of js stack`);return Yl[--su]=e,su}var lu=null;function uu(){return(lu===null||lu.byteLength===0)&&(lu=new Int32Array(K.memory.buffer)),lu}function du(e,t){return e>>>=0,uu().subarray(e/4,e/4+t)}var fu=null;function pu(){return(fu===null||fu.byteLength===0)&&(fu=new Float32Array(K.memory.buffer)),fu}function mu(e,t){return e>>>=0,pu().subarray(e/4,e/4+t)}var hu=null;function gu(){return(hu===null||hu.byteLength===0)&&(hu=new Uint32Array(K.memory.buffer)),hu}function _u(e,t){return e>>>=0,gu().subarray(e/4,e/4+t)}var vu=0;function yu(e,t){let n=t(e.length*4,4)>>>0;return gu().set(e,n/4),vu=e.length,n}function bu(e,t){let n=t(e.length*4,4)>>>0;return pu().set(e,n/4),vu=e.length,n}Object.freeze({Vertex:0,0:`Vertex`,Edge:1,1:`Edge`,Face:2,2:`Face`,Unknown:3,3:`Unknown`});var xu=Object.freeze({LinX:0,0:`LinX`,LinY:1,1:`LinY`,LinZ:2,2:`LinZ`,AngX:3,3:`AngX`,AngY:4,4:`AngY`,AngZ:5,5:`AngZ`}),Su=Object.freeze({Revolute:0,0:`Revolute`,Fixed:1,1:`Fixed`,Prismatic:2,2:`Prismatic`,Rope:3,3:`Rope`,Spring:4,4:`Spring`,Spherical:5,5:`Spherical`,Generic:6,6:`Generic`});Object.freeze({AccelerationBased:0,0:`AccelerationBased`,ForceBased:1,1:`ForceBased`}),Object.freeze({Dynamic:0,0:`Dynamic`,Fixed:1,1:`Fixed`,KinematicPositionBased:2,2:`KinematicPositionBased`,KinematicVelocityBased:3,3:`KinematicVelocityBased`});var Cu=Object.freeze({Ball:0,0:`Ball`,Cuboid:1,1:`Cuboid`,Capsule:2,2:`Capsule`,Segment:3,3:`Segment`,Polyline:4,4:`Polyline`,Triangle:5,5:`Triangle`,TriMesh:6,6:`TriMesh`,HeightField:7,7:`HeightField`,Compound:8,8:`Compound`,ConvexPolyhedron:9,9:`ConvexPolyhedron`,Cylinder:10,10:`Cylinder`,Cone:11,11:`Cone`,RoundCuboid:12,12:`RoundCuboid`,RoundTriangle:13,13:`RoundTriangle`,RoundCylinder:14,14:`RoundCylinder`,RoundCone:15,15:`RoundCone`,RoundConvexPolyhedron:16,16:`RoundConvexPolyhedron`,HalfSpace:17,17:`HalfSpace`,Voxels:18,18:`Voxels`}),wu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawbroadphase_free(e>>>0,1)),Tu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,wu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,wu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawbroadphase_free(e,0)}constructor(){let e=K.rawbroadphase_new();return this.__wbg_ptr=e>>>0,wu.register(this,this.__wbg_ptr,this),this}castRay(e,t,n,r,i,a,o,s,c,l,u,d){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,Z);let f=K.rawbroadphase_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,o,s,J(c)?4294967297:c>>>0,!J(l),J(l)?0:l,!J(u),J(u)?0:u,cu(d));return f===0?void 0:_d.__wrap(f)}finally{Yl[su++]=void 0}}castRayAndGetNormal(e,t,n,r,i,a,o,s,c,l,u,d){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,Z);let f=K.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,o,s,J(c)?4294967297:c>>>0,!J(l),J(l)?0:l,!J(u),J(u)?0:u,cu(d));return f===0?void 0:yd.__wrap(f)}finally{Yl[su++]=void 0}}intersectionsWithRay(e,t,n,r,i,a,o,s,c,l,u,d,f){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,Z),K.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,o,cu(s),c,J(l)?4294967297:l>>>0,!J(u),J(u)?0:u,!J(d),J(d)?0:d,cu(f))}finally{Yl[su++]=void 0,Yl[su++]=void 0}}intersectionWithShape(e,t,n,r,i,a,o,s,c,l,u){try{let p=K.__wbindgen_add_to_stack_pointer(-16);Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,X),Y(a,Ad),K.rawbroadphase_intersectionWithShape(p,this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o,J(s)?4294967297:s>>>0,!J(c),J(c)?0:c,!J(l),J(l)?0:l,cu(u));var d=iu().getInt32(p+0,!0),f=iu().getFloat64(p+8,!0);return d===0?void 0:f}finally{K.__wbindgen_add_to_stack_pointer(16),Yl[su++]=void 0}}projectPoint(e,t,n,r,i,a,o,s,c,l){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z);let u=K.rawbroadphase_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,a,J(o)?4294967297:o>>>0,!J(s),J(s)?0:s,!J(c),J(c)?0:c,cu(l));return u===0?void 0:pd.__wrap(u)}finally{Yl[su++]=void 0}}projectPointAndGetFeature(e,t,n,r,i,a,o,s,c){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z);let l=K.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,J(a)?4294967297:a>>>0,!J(o),J(o)?0:o,!J(s),J(s)?0:s,cu(c));return l===0?void 0:pd.__wrap(l)}finally{Yl[su++]=void 0}}intersectionsWithPoint(e,t,n,r,i,a,o,s,c,l){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),K.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,cu(i),a,J(o)?4294967297:o>>>0,!J(s),J(s)?0:s,!J(c),J(c)?0:c,cu(l))}finally{Yl[su++]=void 0,Yl[su++]=void 0}}castShape(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,X),Y(a,Z),Y(o,Ad);let h=K.rawbroadphase_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s,c,l,u,J(d)?4294967297:d>>>0,!J(f),J(f)?0:f,!J(p),J(p)?0:p,cu(m));return h===0?void 0:Nu.__wrap(h)}finally{Yl[su++]=void 0}}intersectionsWithShape(e,t,n,r,i,a,o,s,c,l,u,d){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,X),Y(a,Ad),K.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,cu(o),s,J(c)?4294967297:c>>>0,!J(l),J(l)?0:l,!J(u),J(u)?0:u,cu(d))}finally{Yl[su++]=void 0,Yl[su++]=void 0}}collidersWithAabbIntersectingAabb(e,t,n,r,i,a){try{Y(e,sd),Y(t,Cd),Y(n,ju),Y(r,Z),Y(i,Z),K.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,cu(a))}finally{Yl[su++]=void 0}}},Eu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawccdsolver_free(e>>>0,1)),Du=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Eu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawccdsolver_free(e,0)}constructor(){let e=K.rawccdsolver_new();return this.__wbg_ptr=e>>>0,Eu.register(this,this.__wbg_ptr,this),this}},Ou=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcharactercollision_free(e>>>0,1)),ku=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ou.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcharactercollision_free(e,0)}constructor(){let e=K.rawcharactercollision_new();return this.__wbg_ptr=e>>>0,Ou.register(this,this.__wbg_ptr,this),this}handle(){return K.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){let e=K.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return Z.__wrap(e)}translationDeltaRemaining(){let e=K.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return Z.__wrap(e)}toi(){return K.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){let e=K.rawcharactercollision_worldWitness1(this.__wbg_ptr);return Z.__wrap(e)}worldWitness2(){let e=K.rawcharactercollision_worldWitness2(this.__wbg_ptr);return Z.__wrap(e)}worldNormal1(){let e=K.rawcharactercollision_worldNormal1(this.__wbg_ptr);return Z.__wrap(e)}worldNormal2(){let e=K.rawcharactercollision_worldNormal2(this.__wbg_ptr);return Z.__wrap(e)}},Au=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcolliderset_free(e>>>0,1)),ju=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Au.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Au.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcolliderset_free(e,0)}coTranslation(e){let t=K.rawcolliderset_coTranslation(this.__wbg_ptr,e);return Z.__wrap(t)}coRotation(e){let t=K.rawcolliderset_coRotation(this.__wbg_ptr,e);return X.__wrap(t)}coTranslationWrtParent(e){let t=K.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}coRotationWrtParent(e){let t=K.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,e);return t===0?void 0:X.__wrap(t)}coSetTranslation(e,t,n,r){K.rawcolliderset_coSetTranslation(this.__wbg_ptr,e,t,n,r)}coSetTranslationWrtParent(e,t,n,r){K.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,e,t,n,r)}coSetRotation(e,t,n,r,i){K.rawcolliderset_coSetRotation(this.__wbg_ptr,e,t,n,r,i)}coSetRotationWrtParent(e,t,n,r,i){K.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,e,t,n,r,i)}coIsSensor(e){return K.rawcolliderset_coIsSensor(this.__wbg_ptr,e)!==0}coShapeType(e){return K.rawcolliderset_coShapeType(this.__wbg_ptr,e)}coHalfspaceNormal(e){let t=K.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}coHalfExtents(e){let t=K.rawcolliderset_coHalfExtents(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}coSetHalfExtents(e,t){Y(t,Z),K.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,e,t.__wbg_ptr)}coRadius(e){let t=K.rawcolliderset_coRadius(this.__wbg_ptr,e);return t===4294967297?void 0:t}coSetRadius(e,t){K.rawcolliderset_coSetRadius(this.__wbg_ptr,e,t)}coHalfHeight(e){let t=K.rawcolliderset_coHalfHeight(this.__wbg_ptr,e);return t===4294967297?void 0:t}coSetHalfHeight(e,t){K.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,e,t)}coRoundRadius(e){let t=K.rawcolliderset_coRoundRadius(this.__wbg_ptr,e);return t===4294967297?void 0:t}coSetRoundRadius(e,t){K.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,e,t)}coVoxelData(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawcolliderset_coVoxelData(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getInt32(r+4,!0);let i;return t!==0&&(i=du(t,n).slice(),K.__wbindgen_export_1(t,n*4,4)),i}finally{K.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(e){let t=K.rawcolliderset_coVoxelSize(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}coSetVoxel(e,t,n,r,i){K.rawcolliderset_coSetVoxel(this.__wbg_ptr,e,t,n,r,i)}coPropagateVoxelChange(e,t,n,r,i,a,o,s){K.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,e,t,n,r,i,a,o,s)}coCombineVoxelStates(e,t,n,r,i){K.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,e,t,n,r,i)}coVertices(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawcolliderset_coVertices(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getInt32(r+4,!0);let i;return t!==0&&(i=mu(t,n).slice(),K.__wbindgen_export_1(t,n*4,4)),i}finally{K.__wbindgen_add_to_stack_pointer(16)}}coIndices(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawcolliderset_coIndices(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getInt32(r+4,!0);let i;return t!==0&&(i=_u(t,n).slice(),K.__wbindgen_export_1(t,n*4,4)),i}finally{K.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(e){let t=K.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,e);return t===4294967297?void 0:t}coHeightFieldFlags(e){let t=K.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,e);return t===4294967297?void 0:t}coHeightfieldHeights(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getInt32(r+4,!0);let i;return t!==0&&(i=mu(t,n).slice(),K.__wbindgen_export_1(t,n*4,4)),i}finally{K.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(e){let t=K.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}coHeightfieldNRows(e){let t=K.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,e);return t===4294967297?void 0:t}coHeightfieldNCols(e){let t=K.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,e);return t===4294967297?void 0:t}coParent(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawcolliderset_coParent(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getFloat64(r+8,!0);return t===0?void 0:n}finally{K.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(e,t){K.rawcolliderset_coSetEnabled(this.__wbg_ptr,e,t)}coIsEnabled(e){return K.rawcolliderset_coIsEnabled(this.__wbg_ptr,e)!==0}coSetContactSkin(e,t){K.rawcolliderset_coSetContactSkin(this.__wbg_ptr,e,t)}coContactSkin(e){return K.rawcolliderset_coContactSkin(this.__wbg_ptr,e)}coFriction(e){return K.rawcolliderset_coFriction(this.__wbg_ptr,e)}coRestitution(e){return K.rawcolliderset_coRestitution(this.__wbg_ptr,e)}coDensity(e){return K.rawcolliderset_coDensity(this.__wbg_ptr,e)}coMass(e){return K.rawcolliderset_coMass(this.__wbg_ptr,e)}coVolume(e){return K.rawcolliderset_coVolume(this.__wbg_ptr,e)}coCollisionGroups(e){return K.rawcolliderset_coCollisionGroups(this.__wbg_ptr,e)>>>0}coSolverGroups(e){return K.rawcolliderset_coSolverGroups(this.__wbg_ptr,e)>>>0}coActiveHooks(e){return K.rawcolliderset_coActiveHooks(this.__wbg_ptr,e)>>>0}coActiveCollisionTypes(e){return K.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,e)}coActiveEvents(e){return K.rawcolliderset_coActiveEvents(this.__wbg_ptr,e)>>>0}coContactForceEventThreshold(e){return K.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,e)}coContainsPoint(e,t){return Y(t,Z),K.rawcolliderset_coContainsPoint(this.__wbg_ptr,e,t.__wbg_ptr)!==0}coCastShape(e,t,n,r,i,a,o,s,c){Y(t,Z),Y(n,Ad),Y(r,Z),Y(i,X),Y(a,Z);let l=K.rawcolliderset_coCastShape(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o,s,c);return l===0?void 0:Md.__wrap(l)}coCastCollider(e,t,n,r,i,a,o){Y(t,Z),Y(r,Z);let s=K.rawcolliderset_coCastCollider(this.__wbg_ptr,e,t.__wbg_ptr,n,r.__wbg_ptr,i,a,o);return s===0?void 0:Nu.__wrap(s)}coIntersectsShape(e,t,n,r){return Y(t,Ad),Y(n,Z),Y(r,X),K.rawcolliderset_coIntersectsShape(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(e,t,n,r,i){Y(t,Ad),Y(n,Z),Y(r,X);let a=K.rawcolliderset_coContactShape(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i);return a===0?void 0:Pd.__wrap(a)}coContactCollider(e,t,n){let r=K.rawcolliderset_coContactCollider(this.__wbg_ptr,e,t,n);return r===0?void 0:Pd.__wrap(r)}coProjectPoint(e,t,n){Y(t,Z);let r=K.rawcolliderset_coProjectPoint(this.__wbg_ptr,e,t.__wbg_ptr,n);return hd.__wrap(r)}coIntersectsRay(e,t,n,r){return Y(t,Z),Y(n,Z),K.rawcolliderset_coIntersectsRay(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(e,t,n,r,i){return Y(t,Z),Y(n,Z),K.rawcolliderset_coCastRay(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r,i)}coCastRayAndGetNormal(e,t,n,r,i){Y(t,Z),Y(n,Z);let a=K.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r,i);return a===0?void 0:xd.__wrap(a)}coSetSensor(e,t){K.rawcolliderset_coSetSensor(this.__wbg_ptr,e,t)}coSetRestitution(e,t){K.rawcolliderset_coSetRestitution(this.__wbg_ptr,e,t)}coSetFriction(e,t){K.rawcolliderset_coSetFriction(this.__wbg_ptr,e,t)}coFrictionCombineRule(e){return K.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,e)>>>0}coSetFrictionCombineRule(e,t){K.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,e,t)}coRestitutionCombineRule(e){return K.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,e)>>>0}coSetRestitutionCombineRule(e,t){K.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,e,t)}coSetCollisionGroups(e,t){K.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,e,t)}coSetSolverGroups(e,t){K.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,e,t)}coSetActiveHooks(e,t){K.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,e,t)}coSetActiveEvents(e,t){K.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,e,t)}coSetActiveCollisionTypes(e,t){K.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,e,t)}coSetShape(e,t){Y(t,Ad),K.rawcolliderset_coSetShape(this.__wbg_ptr,e,t.__wbg_ptr)}coSetContactForceEventThreshold(e,t){K.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,e,t)}coSetDensity(e,t){K.rawcolliderset_coSetDensity(this.__wbg_ptr,e,t)}coSetMass(e,t){K.rawcolliderset_coSetMass(this.__wbg_ptr,e,t)}coSetMassProperties(e,t,n,r,i){Y(n,Z),Y(r,Z),Y(i,X),K.rawcolliderset_coSetMassProperties(this.__wbg_ptr,e,t,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr)}constructor(){let e=K.rawcolliderset_new();return this.__wbg_ptr=e>>>0,Au.register(this,this.__wbg_ptr,this),this}len(){return K.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return K.rawcolliderset_contains(this.__wbg_ptr,e)!==0}createCollider(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w){try{let D=K.__wbindgen_add_to_stack_pointer(-16);Y(t,Ad),Y(n,Z),Y(r,X),Y(o,Z),Y(s,Z),Y(c,X),Y(w,Cd),K.rawcolliderset_createCollider(D,this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,a,o.__wbg_ptr,s.__wbg_ptr,c.__wbg_ptr,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w.__wbg_ptr);var T=iu().getInt32(D+0,!0),E=iu().getFloat64(D+8,!0);return T===0?void 0:E}finally{K.__wbindgen_add_to_stack_pointer(16)}}remove(e,t,n,r){Y(t,td),Y(n,Cd),K.rawcolliderset_remove(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(e){return K.rawcolliderset_contains(this.__wbg_ptr,e)!==0}forEachColliderHandle(e){try{K.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}},Mu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcollidershapecasthit_free(e>>>0,1)),Nu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Mu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Mu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcollidershapecasthit_free(e,0)}colliderHandle(){return K.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){let e=K.rawcollidershapecasthit_witness1(this.__wbg_ptr);return Z.__wrap(e)}witness2(){let e=K.rawcollidershapecasthit_witness2(this.__wbg_ptr);return Z.__wrap(e)}normal1(){let e=K.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return Z.__wrap(e)}normal2(){let e=K.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return Z.__wrap(e)}},Pu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcontactforceevent_free(e>>>0,1)),Fu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Pu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Pu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcontactforceevent_free(e,0)}collider1(){return K.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return K.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){let e=K.rawcontactforceevent_total_force(this.__wbg_ptr);return Z.__wrap(e)}total_force_magnitude(){return K.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){let e=K.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return Z.__wrap(e)}max_force_magnitude(){return K.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}},Iu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcontactmanifold_free(e>>>0,1)),Lu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Iu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Iu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcontactmanifold_free(e,0)}normal(){let e=K.rawcontactmanifold_normal(this.__wbg_ptr);return Z.__wrap(e)}local_n1(){let e=K.rawcontactmanifold_local_n1(this.__wbg_ptr);return Z.__wrap(e)}local_n2(){let e=K.rawcontactmanifold_local_n2(this.__wbg_ptr);return Z.__wrap(e)}subshape1(){return K.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return K.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return K.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(e){let t=K.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}contact_local_p2(e){let t=K.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}contact_dist(e){return K.rawcontactmanifold_contact_dist(this.__wbg_ptr,e)}contact_fid1(e){return K.rawcontactmanifold_contact_fid1(this.__wbg_ptr,e)>>>0}contact_fid2(e){return K.rawcontactmanifold_contact_fid2(this.__wbg_ptr,e)>>>0}contact_impulse(e){return K.rawcontactmanifold_contact_impulse(this.__wbg_ptr,e)}contact_tangent_impulse_x(e){return K.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,e)}contact_tangent_impulse_y(e){return K.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,e)}num_solver_contacts(){return K.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(e){let t=K.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}solver_contact_dist(e){return K.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,e)}solver_contact_friction(e){return K.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,e)}solver_contact_restitution(e){return K.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,e)}solver_contact_tangent_velocity(e){let t=K.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,e);return Z.__wrap(t)}},Ru=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawcontactpair_free(e>>>0,1)),zu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Ru.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ru.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawcontactpair_free(e,0)}collider1(){return K.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return K.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return K.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(e){let t=K.rawcontactpair_contactManifold(this.__wbg_ptr,e);return t===0?void 0:Lu.__wrap(t)}},Bu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawdebugrenderpipeline_free(e>>>0,1)),Vu=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Bu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawdebugrenderpipeline_free(e,0)}constructor(){let e=K.rawdebugrenderpipeline_new();return this.__wbg_ptr=e>>>0,Bu.register(this,this.__wbg_ptr,this),this}vertices(){return ou(K.rawdebugrenderpipeline_vertices(this.__wbg_ptr))}colors(){return ou(K.rawdebugrenderpipeline_colors(this.__wbg_ptr))}render(e,t,n,r,i,a,o){try{Y(e,Cd),Y(t,ju),Y(n,Zu),Y(r,ad),Y(i,sd),K.rawdebugrenderpipeline_render(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,cu(o))}finally{Yl[su++]=void 0}}},Hu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawdeserializedworld_free(e>>>0,1)),Uu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Hu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Hu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawdeserializedworld_free(e,0)}takeGravity(){let e=K.rawdeserializedworld_takeGravity(this.__wbg_ptr);return e===0?void 0:Z.__wrap(e)}takeIntegrationParameters(){let e=K.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return e===0?void 0:$u.__wrap(e)}takeIslandManager(){let e=K.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return e===0?void 0:td.__wrap(e)}takeBroadPhase(){let e=K.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return e===0?void 0:Tu.__wrap(e)}takeNarrowPhase(){let e=K.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return e===0?void 0:sd.__wrap(e)}takeBodies(){let e=K.rawdeserializedworld_takeBodies(this.__wbg_ptr);return e===0?void 0:Cd.__wrap(e)}takeColliders(){let e=K.rawdeserializedworld_takeColliders(this.__wbg_ptr);return e===0?void 0:ju.__wrap(e)}takeImpulseJoints(){let e=K.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return e===0?void 0:Zu.__wrap(e)}takeMultibodyJoints(){let e=K.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return e===0?void 0:ad.__wrap(e)}},Wu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawdynamicraycastvehiclecontroller_free(e>>>0,1)),Gu=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Wu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawdynamicraycastvehiclecontroller_free(e,0)}constructor(e){let t=K.rawdynamicraycastvehiclecontroller_new(e);return this.__wbg_ptr=t>>>0,Wu.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return K.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return K.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return K.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(e){K.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}index_forward_axis(){return K.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(e){K.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,e)}add_wheel(e,t,n,r,i){Y(e,Z),Y(t,Z),Y(n,Z),K.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r,i)}num_wheels(){return K.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(e,t,n,r,i,a,o,s){try{Y(t,Tu),Y(n,sd),Y(r,Cd),Y(i,ju),K.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,J(o)?4294967297:o>>>0,cu(s))}finally{Yl[su++]=void 0}}wheel_chassis_connection_point_cs(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}set_wheel_chassis_connection_point_cs(e,t){Y(t,Z),K.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_suspension_rest_length(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_suspension_rest_length(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,e,t)}wheel_max_suspension_travel(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_max_suspension_travel(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,e,t)}wheel_radius(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_radius(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,e,t)}wheel_suspension_stiffness(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_suspension_stiffness(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,e,t)}wheel_suspension_compression(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_suspension_compression(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,e,t)}wheel_suspension_relaxation(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_suspension_relaxation(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,e,t)}wheel_max_suspension_force(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_max_suspension_force(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,e,t)}wheel_brake(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_brake(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,e,t)}wheel_steering(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_steering(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,e,t)}wheel_engine_force(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_engine_force(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,e,t)}wheel_direction_cs(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}set_wheel_direction_cs(e,t){Y(t,Z),K.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_axle_cs(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}set_wheel_axle_cs(e,t){Y(t,Z),K.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_friction_slip(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_friction_slip(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,e,t)}wheel_side_friction_stiffness(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,e);return t===4294967297?void 0:t}set_wheel_side_friction_stiffness(e,t){K.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,e,t)}wheel_rotation(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,e);return t===4294967297?void 0:t}wheel_forward_impulse(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,e);return t===4294967297?void 0:t}wheel_side_impulse(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,e);return t===4294967297?void 0:t}wheel_suspension_force(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,e);return t===4294967297?void 0:t}wheel_contact_normal_ws(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}wheel_contact_point_ws(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}wheel_suspension_length(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,e);return t===4294967297?void 0:t}wheel_hard_point_ws(e){let t=K.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,e);return t===0?void 0:Z.__wrap(t)}wheel_is_in_contact(e){return K.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,e)!==0}wheel_ground_object(e){try{let r=K.__wbindgen_add_to_stack_pointer(-16);K.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,e);var t=iu().getInt32(r+0,!0),n=iu().getFloat64(r+8,!0);return t===0?void 0:n}finally{K.__wbindgen_add_to_stack_pointer(16)}}},Ku=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_raweventqueue_free(e>>>0,1)),qu=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ku.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_raweventqueue_free(e,0)}constructor(e){let t=K.raweventqueue_new(e);return this.__wbg_ptr=t>>>0,Ku.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(e){try{K.raweventqueue_drainCollisionEvents(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}drainContactForceEvents(e){try{K.raweventqueue_drainContactForceEvents(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}clear(){K.raweventqueue_clear(this.__wbg_ptr)}},Ju=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawgenericjoint_free(e>>>0,1)),Yu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Ju.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ju.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawgenericjoint_free(e,0)}static generic(t,n,r,i){Y(t,Z),Y(n,Z),Y(r,Z);let a=K.rawgenericjoint_generic(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i);return a===0?void 0:e.__wrap(a)}static spring(t,n,r,i,a){Y(i,Z),Y(a,Z);let o=K.rawgenericjoint_spring(t,n,r,i.__wbg_ptr,a.__wbg_ptr);return e.__wrap(o)}static rope(t,n,r){Y(n,Z),Y(r,Z);let i=K.rawgenericjoint_rope(t,n.__wbg_ptr,r.__wbg_ptr);return e.__wrap(i)}static spherical(t,n){Y(t,Z),Y(n,Z);let r=K.rawgenericjoint_spherical(t.__wbg_ptr,n.__wbg_ptr);return e.__wrap(r)}static prismatic(t,n,r,i,a,o){Y(t,Z),Y(n,Z),Y(r,Z);let s=K.rawgenericjoint_prismatic(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,a,o);return s===0?void 0:e.__wrap(s)}static fixed(t,n,r,i){Y(t,Z),Y(n,X),Y(r,Z),Y(i,X);let a=K.rawgenericjoint_fixed(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr);return e.__wrap(a)}static revolute(t,n,r){Y(t,Z),Y(n,Z),Y(r,Z);let i=K.rawgenericjoint_revolute(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return i===0?void 0:e.__wrap(i)}},Xu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawimpulsejointset_free(e>>>0,1)),Zu=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Xu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Xu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawimpulsejointset_free(e,0)}jointType(e){return K.rawimpulsejointset_jointType(this.__wbg_ptr,e)}jointBodyHandle1(e){return K.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,e)}jointBodyHandle2(e){return K.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,e)}jointFrameX1(e){let t=K.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,e);return X.__wrap(t)}jointFrameX2(e){let t=K.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,e);return X.__wrap(t)}jointAnchor1(e){let t=K.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,e);return Z.__wrap(t)}jointAnchor2(e){let t=K.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,e);return Z.__wrap(t)}jointSetAnchor1(e,t){Y(t,Z),K.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,e,t.__wbg_ptr)}jointSetAnchor2(e,t){Y(t,Z),K.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,e,t.__wbg_ptr)}jointContactsEnabled(e){return K.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){K.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return K.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return K.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return K.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,e,t)}jointSetLimits(e,t,n,r){K.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,e,t,n,r)}jointConfigureMotorModel(e,t,n){K.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,e,t,n)}jointConfigureMotorVelocity(e,t,n,r){K.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,e,t,n,r)}jointConfigureMotorPosition(e,t,n,r,i){K.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,e,t,n,r,i)}jointConfigureMotor(e,t,n,r,i,a){K.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,e,t,n,r,i,a)}constructor(){let e=K.rawimpulsejointset_new();return this.__wbg_ptr=e>>>0,Xu.register(this,this.__wbg_ptr,this),this}createJoint(e,t,n,r){return Y(e,Yu),K.rawimpulsejointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,n,r)}remove(e,t){K.rawimpulsejointset_remove(this.__wbg_ptr,e,t)}len(){return K.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(e){return K.rawimpulsejointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{K.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{K.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,cu(t))}finally{Yl[su++]=void 0}}},Qu=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawintegrationparameters_free(e>>>0,1)),$u=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Qu.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Qu.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawintegrationparameters_free(e,0)}constructor(){let e=K.rawintegrationparameters_new();return this.__wbg_ptr=e>>>0,Qu.register(this,this.__wbg_ptr,this),this}get dt(){return K.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return K.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return K.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return K.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return K.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return K.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return K.rawintegrationparameters_minIslandSize(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return K.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return K.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(e){K.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}set contact_natural_frequency(e){K.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,e)}set normalizedAllowedLinearError(e){K.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,e)}set normalizedPredictionDistance(e){K.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,e)}set numSolverIterations(e){K.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,e)}set numInternalPgsIterations(e){K.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}set minIslandSize(e){K.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,e)}set maxCcdSubsteps(e){K.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,e)}set lengthUnit(e){K.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,e)}},ed=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawislandmanager_free(e>>>0,1)),td=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,ed.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,ed.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawislandmanager_free(e,0)}constructor(){let e=K.rawislandmanager_new();return this.__wbg_ptr=e>>>0,ed.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(e){try{K.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}},nd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawkinematiccharactercontroller_free(e>>>0,1)),rd=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,nd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawkinematiccharactercontroller_free(e,0)}constructor(e){let t=K.rawkinematiccharactercontroller_new(e);return this.__wbg_ptr=t>>>0,nd.register(this,this.__wbg_ptr,this),this}up(){let e=K.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return Z.__wrap(e)}setUp(e){Y(e,Z),K.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,e.__wbg_ptr)}normalNudgeFactor(){return K.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(e){K.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,e)}offset(){return K.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setOffset(e){K.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,e)}slideEnabled(){return K.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(e){K.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,e)}autostepMaxHeight(){let e=K.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return e===4294967297?void 0:e}autostepMinWidth(){let e=K.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return e===4294967297?void 0:e}autostepIncludesDynamicBodies(){let e=K.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return K.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(e,t,n){K.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,e,t,n)}disableAutostep(){K.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return K.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(e){K.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,e)}minSlopeSlideAngle(){return K.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(e){K.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,e)}snapToGroundDistance(){let e=K.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return e===4294967297?void 0:e}enableSnapToGround(e){K.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,e)}disableSnapToGround(){K.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return K.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(e,t,n,r,i,a,o,s,c,l,u,d){try{Y(t,Tu),Y(n,sd),Y(r,Cd),Y(i,ju),Y(o,Z),K.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a,o.__wbg_ptr,s,J(c)?4294967297:Math.fround(c),l,J(u)?4294967297:u>>>0,cu(d))}finally{Yl[su++]=void 0}}computedMovement(){let e=K.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return Z.__wrap(e)}computedGrounded(){return K.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return K.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(e,t){return Y(t,ku),K.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,e,t.__wbg_ptr)!==0}},id=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawmultibodyjointset_free(e>>>0,1)),ad=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,id.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,id.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawmultibodyjointset_free(e,0)}jointType(e){return K.rawmultibodyjointset_jointType(this.__wbg_ptr,e)}jointFrameX1(e){let t=K.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,e);return X.__wrap(t)}jointFrameX2(e){let t=K.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,e);return X.__wrap(t)}jointAnchor1(e){let t=K.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,e);return Z.__wrap(t)}jointAnchor2(e){let t=K.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,e);return Z.__wrap(t)}jointContactsEnabled(e){return K.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){K.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return K.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return K.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return K.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,e,t)}constructor(){let e=K.rawmultibodyjointset_new();return this.__wbg_ptr=e>>>0,id.register(this,this.__wbg_ptr,this),this}createJoint(e,t,n,r){return Y(e,Yu),K.rawmultibodyjointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,n,r)}remove(e,t){K.rawmultibodyjointset_remove(this.__wbg_ptr,e,t)}contains(e){return K.rawmultibodyjointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{K.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{K.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,cu(t))}finally{Yl[su++]=void 0}}},od=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawnarrowphase_free(e>>>0,1)),sd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,od.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,od.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawnarrowphase_free(e,0)}constructor(){let e=K.rawnarrowphase_new();return this.__wbg_ptr=e>>>0,od.register(this,this.__wbg_ptr,this),this}contact_pairs_with(e,t){K.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,e,Zl(t))}contact_pair(e,t){let n=K.rawnarrowphase_contact_pair(this.__wbg_ptr,e,t);return n===0?void 0:zu.__wrap(n)}intersection_pairs_with(e,t){K.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,e,Zl(t))}intersection_pair(e,t){return K.rawnarrowphase_intersection_pair(this.__wbg_ptr,e,t)!==0}},cd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawphysicspipeline_free(e>>>0,1)),ld=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,cd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawphysicspipeline_free(e,0)}constructor(){let e=K.rawphysicspipeline_new();return this.__wbg_ptr=e>>>0,cd.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(e){K.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,e)}is_profiler_enabled(){return K.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}timing_step(){return K.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_collision_detection(){return K.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_broad_phase(){return K.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_narrow_phase(){return K.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return K.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_velocity_assembly(){return K.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return K.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return K.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return K.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}timing_ccd(){return K.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_toi_computation(){return K.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_ccd_broad_phase(){return K.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return K.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return K.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_island_construction(){return K.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_user_changes(){return K.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}step(e,t,n,r,i,a,o,s,c,l){Y(e,Z),Y(t,$u),Y(n,td),Y(r,Tu),Y(i,sd),Y(a,Cd),Y(o,ju),Y(s,Zu),Y(c,ad),Y(l,Du),K.rawphysicspipeline_step(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr)}stepWithEvents(e,t,n,r,i,a,o,s,c,l,u,d,f,p){Y(e,Z),Y(t,$u),Y(n,td),Y(r,Tu),Y(i,sd),Y(a,Cd),Y(o,ju),Y(s,Zu),Y(c,ad),Y(l,Du),Y(u,qu),K.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,Zl(d),Zl(f),Zl(p))}},ud=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawpidcontroller_free(e>>>0,1)),dd=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,ud.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawpidcontroller_free(e,0)}constructor(e,t,n,r){let i=K.rawpidcontroller_new(e,t,n,r);return this.__wbg_ptr=i>>>0,ud.register(this,this.__wbg_ptr,this),this}set_kp(e,t){K.rawpidcontroller_set_kp(this.__wbg_ptr,e,t)}set_ki(e,t){K.rawpidcontroller_set_ki(this.__wbg_ptr,e,t)}set_kd(e,t){K.rawpidcontroller_set_kd(this.__wbg_ptr,e,t)}set_axes_mask(e){K.rawpidcontroller_set_axes_mask(this.__wbg_ptr,e)}reset_integrals(){K.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(e,t,n,r,i){Y(t,Cd),Y(r,Z),Y(i,Z),K.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,e,t.__wbg_ptr,n,r.__wbg_ptr,i.__wbg_ptr)}apply_angular_correction(e,t,n,r,i){Y(t,Cd),Y(r,X),Y(i,Z),K.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,e,t.__wbg_ptr,n,r.__wbg_ptr,i.__wbg_ptr)}linear_correction(e,t,n,r,i){Y(t,Cd),Y(r,Z),Y(i,Z);let a=K.rawpidcontroller_linear_correction(this.__wbg_ptr,e,t.__wbg_ptr,n,r.__wbg_ptr,i.__wbg_ptr);return Z.__wrap(a)}angular_correction(e,t,n,r,i){Y(t,Cd),Y(r,X),Y(i,Z);let a=K.rawpidcontroller_angular_correction(this.__wbg_ptr,e,t.__wbg_ptr,n,r.__wbg_ptr,i.__wbg_ptr);return Z.__wrap(a)}},fd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawpointcolliderprojection_free(e>>>0,1)),pd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,fd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,fd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawpointcolliderprojection_free(e,0)}colliderHandle(){return K.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){let e=K.rawpointcolliderprojection_point(this.__wbg_ptr);return Z.__wrap(e)}isInside(){return K.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return K.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){let e=K.rawpointcolliderprojection_featureId(this.__wbg_ptr);return e===4294967297?void 0:e}},md=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawpointprojection_free(e>>>0,1)),hd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,md.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,md.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawpointprojection_free(e,0)}point(){let e=K.rawpointprojection_point(this.__wbg_ptr);return Z.__wrap(e)}isInside(){return K.rawpointprojection_isInside(this.__wbg_ptr)!==0}},gd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawraycolliderhit_free(e>>>0,1)),_d=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,gd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,gd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawraycolliderhit_free(e,0)}colliderHandle(){return K.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}},vd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawraycolliderintersection_free(e>>>0,1)),yd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,vd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,vd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawraycolliderintersection_free(e,0)}colliderHandle(){return K.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){let e=K.rawcollidershapecasthit_witness1(this.__wbg_ptr);return Z.__wrap(e)}time_of_impact(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return K.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){let e=K.rawpointcolliderprojection_featureId(this.__wbg_ptr);return e===4294967297?void 0:e}},bd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawrayintersection_free(e>>>0,1)),xd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,bd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,bd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawrayintersection_free(e,0)}normal(){let e=K.rawcollidershapecasthit_witness1(this.__wbg_ptr);return Z.__wrap(e)}time_of_impact(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return K.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){let e=K.rawpointcolliderprojection_featureId(this.__wbg_ptr);return e===4294967297?void 0:e}},Sd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawrigidbodyset_free(e>>>0,1)),Cd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Sd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Sd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawrigidbodyset_free(e,0)}rbTranslation(e){let t=K.rawrigidbodyset_rbTranslation(this.__wbg_ptr,e);return Z.__wrap(t)}rbRotation(e){let t=K.rawrigidbodyset_rbRotation(this.__wbg_ptr,e);return X.__wrap(t)}rbSleep(e){K.rawrigidbodyset_rbSleep(this.__wbg_ptr,e)}rbIsSleeping(e){return K.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,e)!==0}rbIsMoving(e){return K.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,e)!==0}rbNextTranslation(e){let t=K.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,e);return Z.__wrap(t)}rbNextRotation(e){let t=K.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,e);return X.__wrap(t)}rbSetTranslation(e,t,n,r,i){K.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,e,t,n,r,i)}rbSetRotation(e,t,n,r,i,a){K.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,e,t,n,r,i,a)}rbSetLinvel(e,t,n){Y(t,Z),K.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbSetAngvel(e,t,n){Y(t,Z),K.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbSetNextKinematicTranslation(e,t,n,r){K.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,e,t,n,r)}rbSetNextKinematicRotation(e,t,n,r,i){K.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,e,t,n,r,i)}rbRecomputeMassPropertiesFromColliders(e,t){Y(t,ju),K.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,e,t.__wbg_ptr)}rbSetAdditionalMass(e,t,n){K.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,e,t,n)}rbSetAdditionalMassProperties(e,t,n,r,i,a){Y(n,Z),Y(r,Z),Y(i,X),K.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,e,t,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a)}rbLinvel(e){let t=K.rawrigidbodyset_rbLinvel(this.__wbg_ptr,e);return Z.__wrap(t)}rbAngvel(e){let t=K.rawrigidbodyset_rbAngvel(this.__wbg_ptr,e);return Z.__wrap(t)}rbVelocityAtPoint(e,t){Y(t,Z);let n=K.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,e,t.__wbg_ptr);return Z.__wrap(n)}rbLockTranslations(e,t,n){K.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,e,t,n)}rbSetEnabledTranslations(e,t,n,r,i){K.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,e,t,n,r,i)}rbLockRotations(e,t,n){K.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,e,t,n)}rbSetEnabledRotations(e,t,n,r,i){K.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,e,t,n,r,i)}rbDominanceGroup(e){return K.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,e)}rbSetDominanceGroup(e,t){K.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,e,t)}rbEnableCcd(e,t){K.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,e,t)}rbSetSoftCcdPrediction(e,t){K.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,e,t)}rbMass(e){return K.rawrigidbodyset_rbMass(this.__wbg_ptr,e)}rbInvMass(e){return K.rawrigidbodyset_rbInvMass(this.__wbg_ptr,e)}rbEffectiveInvMass(e){let t=K.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,e);return Z.__wrap(t)}rbLocalCom(e){let t=K.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,e);return Z.__wrap(t)}rbWorldCom(e){let t=K.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,e);return Z.__wrap(t)}rbInvPrincipalInertia(e){let t=K.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,e);return Z.__wrap(t)}rbPrincipalInertiaLocalFrame(e){let t=K.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,e);return X.__wrap(t)}rbPrincipalInertia(e){let t=K.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,e);return Z.__wrap(t)}rbEffectiveWorldInvInertia(e){let t=K.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,e);return Ed.__wrap(t)}rbEffectiveAngularInertia(e){let t=K.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,e);return Ed.__wrap(t)}rbWakeUp(e){K.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,e)}rbIsCcdEnabled(e){return K.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,e)!==0}rbSoftCcdPrediction(e){return K.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,e)}rbNumColliders(e){return K.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,e)>>>0}rbCollider(e,t){return K.rawrigidbodyset_rbCollider(this.__wbg_ptr,e,t)}rbBodyType(e){return K.rawrigidbodyset_rbBodyType(this.__wbg_ptr,e)}rbSetBodyType(e,t,n){K.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,e,t,n)}rbIsFixed(e){return K.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,e)!==0}rbIsKinematic(e){return K.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,e)!==0}rbIsDynamic(e){return K.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,e)!==0}rbLinearDamping(e){return K.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,e)}rbAngularDamping(e){return K.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,e)}rbSetLinearDamping(e,t){K.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,e,t)}rbSetAngularDamping(e,t){K.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,e,t)}rbSetEnabled(e,t){K.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,e,t)}rbIsEnabled(e){return K.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,e)!==0}rbGravityScale(e){return K.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,e)}rbSetGravityScale(e,t,n){K.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,e,t,n)}rbResetForces(e,t){K.rawrigidbodyset_rbResetForces(this.__wbg_ptr,e,t)}rbResetTorques(e,t){K.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,e,t)}rbAddForce(e,t,n){Y(t,Z),K.rawrigidbodyset_rbAddForce(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbApplyImpulse(e,t,n){Y(t,Z),K.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbAddTorque(e,t,n){Y(t,Z),K.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbApplyTorqueImpulse(e,t,n){Y(t,Z),K.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,e,t.__wbg_ptr,n)}rbAddForceAtPoint(e,t,n,r){Y(t,Z),Y(n,Z),K.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(e,t,n,r){Y(t,Z),Y(n,Z),K.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(e){return K.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,e)>>>0}rbSetAdditionalSolverIterations(e,t){K.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,e,t)}rbUserData(e){return K.rawrigidbodyset_rbUserData(this.__wbg_ptr,e)>>>0}rbSetUserData(e,t){K.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,e,t)}rbUserForce(e){let t=K.rawrigidbodyset_rbUserForce(this.__wbg_ptr,e);return Z.__wrap(t)}rbUserTorque(e){let t=K.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,e);return Z.__wrap(t)}constructor(){let e=K.rawrigidbodyset_new();return this.__wbg_ptr=e>>>0,Sd.register(this,this.__wbg_ptr,this),this}createRigidBody(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T){return Y(t,Z),Y(n,X),Y(o,Z),Y(s,Z),Y(c,Z),Y(l,Z),Y(u,X),K.rawrigidbodyset_createRigidBody(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r,i,a,o.__wbg_ptr,s.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,u.__wbg_ptr,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T)}remove(e,t,n,r,i){Y(t,td),Y(n,ju),Y(r,Zu),Y(i,ad),K.rawrigidbodyset_remove(this.__wbg_ptr,e,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr)}len(){return K.rawrigidbodyset_len(this.__wbg_ptr)>>>0}contains(e){return K.rawrigidbodyset_contains(this.__wbg_ptr,e)!==0}forEachRigidBodyHandle(e){try{K.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,cu(e))}finally{Yl[su++]=void 0}}propagateModifiedBodyPositionsToColliders(e){Y(e,ju),K.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,e.__wbg_ptr)}},wd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawrotation_free(e>>>0,1)),X=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,wd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,wd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawrotation_free(e,0)}constructor(e,t,n,r){let i=K.rawrotation_new(e,t,n,r);return this.__wbg_ptr=i>>>0,wd.register(this,this.__wbg_ptr,this),this}static identity(){let t=K.rawrotation_identity();return e.__wrap(t)}get x(){return K.rawintegrationparameters_dt(this.__wbg_ptr)}get y(){return K.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}get z(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return K.rawrotation_w(this.__wbg_ptr)}},Td=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawsdpmatrix3_free(e>>>0,1)),Ed=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Td.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Td.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawsdpmatrix3_free(e,0)}elements(){return ou(K.rawsdpmatrix3_elements(this.__wbg_ptr))}},Dd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawserializationpipeline_free(e>>>0,1)),Od=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Dd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawserializationpipeline_free(e,0)}constructor(){let e=K.rawccdsolver_new();return this.__wbg_ptr=e>>>0,Dd.register(this,this.__wbg_ptr,this),this}serializeAll(e,t,n,r,i,a,o,s,c){return Y(e,Z),Y(t,$u),Y(n,td),Y(r,Tu),Y(i,sd),Y(a,Cd),Y(o,ju),Y(s,Zu),Y(c,ad),ou(K.rawserializationpipeline_serializeAll(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,c.__wbg_ptr))}deserializeAll(e){let t=K.rawserializationpipeline_deserializeAll(this.__wbg_ptr,Zl(e));return t===0?void 0:Uu.__wrap(t)}},kd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawshape_free(e>>>0,1)),Ad=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,kd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,kd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawshape_free(e,0)}static cuboid(t,n,r){let i=K.rawshape_cuboid(t,n,r);return e.__wrap(i)}static roundCuboid(t,n,r,i){let a=K.rawshape_roundCuboid(t,n,r,i);return e.__wrap(a)}static ball(t){let n=K.rawshape_ball(t);return e.__wrap(n)}static halfspace(t){Y(t,Z);let n=K.rawshape_halfspace(t.__wbg_ptr);return e.__wrap(n)}static capsule(t,n){let r=K.rawshape_capsule(t,n);return e.__wrap(r)}static cylinder(t,n){let r=K.rawshape_cylinder(t,n);return e.__wrap(r)}static roundCylinder(t,n,r){let i=K.rawshape_roundCylinder(t,n,r);return e.__wrap(i)}static cone(t,n){let r=K.rawshape_cone(t,n);return e.__wrap(r)}static roundCone(t,n,r){let i=K.rawshape_roundCone(t,n,r);return e.__wrap(i)}static voxels(t,n){Y(t,Z);let r=yu(n,K.__wbindgen_export_2),i=vu,a=K.rawshape_voxels(t.__wbg_ptr,r,i);return e.__wrap(a)}static voxelsFromPoints(t,n){Y(t,Z);let r=bu(n,K.__wbindgen_export_2),i=vu,a=K.rawshape_voxelsFromPoints(t.__wbg_ptr,r,i);return e.__wrap(a)}static polyline(t,n){let r=bu(t,K.__wbindgen_export_2),i=vu,a=yu(n,K.__wbindgen_export_2),o=vu,s=K.rawshape_polyline(r,i,a,o);return e.__wrap(s)}static trimesh(t,n,r){let i=bu(t,K.__wbindgen_export_2),a=vu,o=yu(n,K.__wbindgen_export_2),s=vu,c=K.rawshape_trimesh(i,a,o,s,r);return c===0?void 0:e.__wrap(c)}static heightfield(t,n,r,i,a){let o=bu(r,K.__wbindgen_export_2),s=vu;Y(i,Z);let c=K.rawshape_heightfield(t,n,o,s,i.__wbg_ptr,a);return e.__wrap(c)}static segment(t,n){Y(t,Z),Y(n,Z);let r=K.rawshape_segment(t.__wbg_ptr,n.__wbg_ptr);return e.__wrap(r)}static triangle(t,n,r){Y(t,Z),Y(n,Z),Y(r,Z);let i=K.rawshape_triangle(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return e.__wrap(i)}static roundTriangle(t,n,r,i){Y(t,Z),Y(n,Z),Y(r,Z);let a=K.rawshape_roundTriangle(t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i);return e.__wrap(a)}static convexHull(t){let n=bu(t,K.__wbindgen_export_2),r=vu,i=K.rawshape_convexHull(n,r);return i===0?void 0:e.__wrap(i)}static roundConvexHull(t,n){let r=bu(t,K.__wbindgen_export_2),i=vu,a=K.rawshape_roundConvexHull(r,i,n);return a===0?void 0:e.__wrap(a)}static convexMesh(t,n){let r=bu(t,K.__wbindgen_export_2),i=vu,a=yu(n,K.__wbindgen_export_2),o=vu,s=K.rawshape_convexMesh(r,i,a,o);return s===0?void 0:e.__wrap(s)}static roundConvexMesh(t,n,r){let i=bu(t,K.__wbindgen_export_2),a=vu,o=yu(n,K.__wbindgen_export_2),s=vu,c=K.rawshape_roundConvexMesh(i,a,o,s,r);return c===0?void 0:e.__wrap(c)}castShape(t,n,r,i,a,o,s,c,l,u){Y(t,Z),Y(n,X),Y(r,Z),Y(i,e),Y(a,Z),Y(o,X),Y(s,Z);let d=K.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,c,l,u);return d===0?void 0:Md.__wrap(d)}intersectsShape(t,n,r,i,a){return Y(t,Z),Y(n,X),Y(r,e),Y(i,Z),Y(a,X),K.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr)!==0}contactShape(t,n,r,i,a,o){Y(t,Z),Y(n,X),Y(r,e),Y(i,Z),Y(a,X);let s=K.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i.__wbg_ptr,a.__wbg_ptr,o);return s===0?void 0:Pd.__wrap(s)}containsPoint(e,t,n){return Y(e,Z),Y(t,X),Y(n,Z),K.rawshape_containsPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(e,t,n,r){Y(e,Z),Y(t,X),Y(n,Z);let i=K.rawshape_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r);return hd.__wrap(i)}intersectsRay(e,t,n,r,i){return Y(e,Z),Y(t,X),Y(n,Z),Y(r,Z),K.rawshape_intersectsRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i)!==0}castRay(e,t,n,r,i,a){return Y(e,Z),Y(t,X),Y(n,Z),Y(r,Z),K.rawshape_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,a)}castRayAndGetNormal(e,t,n,r,i,a){Y(e,Z),Y(t,X),Y(n,Z),Y(r,Z);let o=K.rawshape_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,i,a);return o===0?void 0:xd.__wrap(o)}},jd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawshapecasthit_free(e>>>0,1)),Md=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,jd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,jd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawshapecasthit_free(e,0)}time_of_impact(){return K.rawintegrationparameters_dt(this.__wbg_ptr)}witness1(){let e=K.rawshapecasthit_witness1(this.__wbg_ptr);return Z.__wrap(e)}witness2(){let e=K.rawcontactforceevent_total_force(this.__wbg_ptr);return Z.__wrap(e)}normal1(){let e=K.rawshapecasthit_normal1(this.__wbg_ptr);return Z.__wrap(e)}normal2(){let e=K.rawshapecasthit_normal2(this.__wbg_ptr);return Z.__wrap(e)}},Nd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawshapecontact_free(e>>>0,1)),Pd=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Nd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Nd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawshapecontact_free(e,0)}distance(){return K.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){let e=K.rawpointprojection_point(this.__wbg_ptr);return Z.__wrap(e)}point2(){let e=K.rawcollidershapecasthit_witness1(this.__wbg_ptr);return Z.__wrap(e)}normal1(){let e=K.rawcollidershapecasthit_witness2(this.__wbg_ptr);return Z.__wrap(e)}normal2(){let e=K.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return Z.__wrap(e)}},Fd=typeof FinalizationRegistry>`u`?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>K.__wbg_rawvector_free(e>>>0,1)),Z=class e{static __wrap(t){t>>>=0;let n=Object.create(e.prototype);return n.__wbg_ptr=t,Fd.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Fd.unregister(this),e}free(){let e=this.__destroy_into_raw();K.__wbg_rawvector_free(e,0)}static zero(){let t=K.rawvector_zero();return e.__wrap(t)}constructor(e,t,n){let r=K.rawvector_new(e,t,n);return this.__wbg_ptr=r>>>0,Fd.register(this,this.__wbg_ptr,this),this}get x(){return K.rawintegrationparameters_dt(this.__wbg_ptr)}set x(e){K.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}get y(){return K.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}set y(e){K.rawvector_set_y(this.__wbg_ptr,e)}get z(){return K.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(e){K.rawvector_set_z(this.__wbg_ptr,e)}xyz(){let t=K.rawvector_xyz(this.__wbg_ptr);return e.__wrap(t)}yxz(){let t=K.rawvector_yxz(this.__wbg_ptr);return e.__wrap(t)}zxy(){let t=K.rawvector_zxy(this.__wbg_ptr);return e.__wrap(t)}xzy(){let t=K.rawvector_xzy(this.__wbg_ptr);return e.__wrap(t)}yzx(){let t=K.rawvector_yzx(this.__wbg_ptr);return e.__wrap(t)}zyx(){let t=K.rawvector_zyx(this.__wbg_ptr);return e.__wrap(t)}};function Id(e,t,n,r){return Zl(q(e).bind(q(t),q(n),q(r)))}function Ld(e){let t=q(e).buffer;return Zl(t)}function Rd(){return Ql(function(e,t){return Zl(q(e).call(q(t)))},arguments)}function zd(){return Ql(function(e,t,n){return Zl(q(e).call(q(t),q(n)))},arguments)}function Bd(){return Ql(function(e,t,n,r){return Zl(q(e).call(q(t),q(n),q(r)))},arguments)}function Vd(){return Ql(function(e,t,n,r,i){return Zl(q(e).call(q(t),q(n),q(r),q(i)))},arguments)}function Hd(e){return q(e).length}function Ud(e){return q(e).length}function Wd(e){return Zl(new Uint8Array(q(e)))}function Gd(e,t){return Zl(Function(nu(e,t)))}function Kd(e,t,n){return Zl(new Uint8Array(q(e),t>>>0,n>>>0))}function qd(e,t,n){return Zl(new Float32Array(q(e),t>>>0,n>>>0))}function Jd(e){return Zl(new Float32Array(e>>>0))}function Yd(e){return q(e).now()}function Xd(e){let t=q(e).performance;return Zl(t)}function Zd(e){return Zl(Fu.__wrap(e))}function Qd(e){return Zl(yd.__wrap(e))}function $d(e,t,n){q(e).set(q(t),n>>>0)}function ef(e,t,n){q(e).set(q(t),n>>>0)}function tf(){let e=typeof global>`u`?null:global;return J(e)?0:Zl(e)}function nf(){let e=typeof globalThis>`u`?null:globalThis;return J(e)?0:Zl(e)}function rf(){let e=typeof self>`u`?null:self;return J(e)?0:Zl(e)}function af(){let e=typeof window>`u`?null:window;return J(e)?0:Zl(e)}function of(e){let t=q(e);return typeof t==`boolean`?+!!t:2}function sf(e){return typeof q(e)==`function`}function cf(e){return q(e)===void 0}function lf(){let e=K.memory;return Zl(e)}function uf(e,t){let n=q(t),r=typeof n==`number`?n:void 0;iu().setFloat64(e+8,J(r)?0:r,!0),iu().setInt32(e+0,!J(r),!0)}function df(e){return Zl(e)}function ff(e){return Zl(q(e))}function pf(e){ou(e)}function mf(e,t){throw Error(nu(e,t))}var hf=t({__wbg_rawbroadphase_free:()=>Qg,__wbg_rawccdsolver_free:()=>um,__wbg_rawcharactercollision_free:()=>Kf,__wbg_rawcolliderset_free:()=>jv,__wbg_rawcollidershapecasthit_free:()=>sb,__wbg_rawcontactforceevent_free:()=>jb,__wbg_rawcontactmanifold_free:()=>Gv,__wbg_rawcontactpair_free:()=>nS,__wbg_rawdebugrenderpipeline_free:()=>Tb,__wbg_rawdeserializedworld_free:()=>lx,__wbg_rawdynamicraycastvehiclecontroller_free:()=>pp,__wbg_raweventqueue_free:()=>Ab,__wbg_rawgenericjoint_free:()=>ih,__wbg_rawimpulsejointset_free:()=>Am,__wbg_rawintegrationparameters_free:()=>Rm,__wbg_rawislandmanager_free:()=>th,__wbg_rawkinematiccharactercontroller_free:()=>vf,__wbg_rawmultibodyjointset_free:()=>Sh,__wbg_rawnarrowphase_free:()=>zv,__wbg_rawphysicspipeline_free:()=>Vb,__wbg_rawpidcontroller_free:()=>np,__wbg_rawpointcolliderprojection_free:()=>yy,__wbg_rawpointprojection_free:()=>gy,__wbg_rawraycolliderhit_free:()=>Ey,__wbg_rawraycolliderintersection_free:()=>rS,__wbg_rawrayintersection_free:()=>Ty,__wbg_rawrigidbodyset_free:()=>Wg,__wbg_rawrotation_free:()=>iS,__wbg_rawsdpmatrix3_free:()=>oS,__wbg_rawserializationpipeline_free:()=>sS,__wbg_rawshape_free:()=>Dy,__wbg_rawshapecasthit_free:()=>rb,__wbg_rawshapecontact_free:()=>Rv,__wbg_rawvector_free:()=>aS,__wbindgen_add_to_stack_pointer:()=>dS,__wbindgen_export_0:()=>uS,__wbindgen_export_1:()=>fS,__wbindgen_export_2:()=>pS,memory:()=>gf,rawbroadphase_castRay:()=>e_,rawbroadphase_castRayAndGetNormal:()=>t_,rawbroadphase_castShape:()=>s_,rawbroadphase_collidersWithAabbIntersectingAabb:()=>l_,rawbroadphase_intersectionWithShape:()=>r_,rawbroadphase_intersectionsWithPoint:()=>o_,rawbroadphase_intersectionsWithRay:()=>n_,rawbroadphase_intersectionsWithShape:()=>c_,rawbroadphase_new:()=>$g,rawbroadphase_projectPoint:()=>i_,rawbroadphase_projectPointAndGetFeature:()=>a_,rawccdsolver_new:()=>cS,rawcharactercollision_handle:()=>Jf,rawcharactercollision_new:()=>qf,rawcharactercollision_toi:()=>Zf,rawcharactercollision_translationDeltaApplied:()=>Yf,rawcharactercollision_translationDeltaRemaining:()=>Xf,rawcharactercollision_worldNormal1:()=>ep,rawcharactercollision_worldNormal2:()=>tp,rawcharactercollision_worldWitness1:()=>Qf,rawcharactercollision_worldWitness2:()=>$f,rawcolliderset_coActiveCollisionTypes:()=>tv,rawcolliderset_coActiveEvents:()=>nv,rawcolliderset_coActiveHooks:()=>ev,rawcolliderset_coCastCollider:()=>ov,rawcolliderset_coCastRay:()=>fv,rawcolliderset_coCastRayAndGetNormal:()=>pv,rawcolliderset_coCastShape:()=>av,rawcolliderset_coCollisionGroups:()=>Q_,rawcolliderset_coCombineVoxelStates:()=>N_,rawcolliderset_coContactCollider:()=>lv,rawcolliderset_coContactForceEventThreshold:()=>rv,rawcolliderset_coContactShape:()=>cv,rawcolliderset_coContactSkin:()=>K_,rawcolliderset_coContainsPoint:()=>iv,rawcolliderset_coDensity:()=>Y_,rawcolliderset_coFriction:()=>q_,rawcolliderset_coFrictionCombineRule:()=>_v,rawcolliderset_coHalfExtents:()=>x_,rawcolliderset_coHalfHeight:()=>T_,rawcolliderset_coHalfspaceNormal:()=>b_,rawcolliderset_coHeightFieldFlags:()=>L_,rawcolliderset_coHeightfieldHeights:()=>R_,rawcolliderset_coHeightfieldNCols:()=>V_,rawcolliderset_coHeightfieldNRows:()=>B_,rawcolliderset_coHeightfieldScale:()=>z_,rawcolliderset_coIndices:()=>F_,rawcolliderset_coIntersectsRay:()=>dv,rawcolliderset_coIntersectsShape:()=>sv,rawcolliderset_coIsEnabled:()=>W_,rawcolliderset_coIsSensor:()=>v_,rawcolliderset_coMass:()=>X_,rawcolliderset_coParent:()=>H_,rawcolliderset_coProjectPoint:()=>uv,rawcolliderset_coPropagateVoxelChange:()=>M_,rawcolliderset_coRadius:()=>C_,rawcolliderset_coRestitution:()=>J_,rawcolliderset_coRestitutionCombineRule:()=>yv,rawcolliderset_coRotation:()=>d_,rawcolliderset_coRotationWrtParent:()=>p_,rawcolliderset_coRoundRadius:()=>D_,rawcolliderset_coSetActiveCollisionTypes:()=>Tv,rawcolliderset_coSetActiveEvents:()=>wv,rawcolliderset_coSetActiveHooks:()=>Cv,rawcolliderset_coSetCollisionGroups:()=>xv,rawcolliderset_coSetContactForceEventThreshold:()=>Dv,rawcolliderset_coSetContactSkin:()=>G_,rawcolliderset_coSetDensity:()=>Ov,rawcolliderset_coSetEnabled:()=>U_,rawcolliderset_coSetFriction:()=>gv,rawcolliderset_coSetFrictionCombineRule:()=>vv,rawcolliderset_coSetHalfExtents:()=>S_,rawcolliderset_coSetHalfHeight:()=>E_,rawcolliderset_coSetMass:()=>kv,rawcolliderset_coSetMassProperties:()=>Av,rawcolliderset_coSetRadius:()=>w_,rawcolliderset_coSetRestitution:()=>hv,rawcolliderset_coSetRestitutionCombineRule:()=>bv,rawcolliderset_coSetRotation:()=>g_,rawcolliderset_coSetRotationWrtParent:()=>__,rawcolliderset_coSetRoundRadius:()=>O_,rawcolliderset_coSetSensor:()=>mv,rawcolliderset_coSetShape:()=>Ev,rawcolliderset_coSetSolverGroups:()=>Sv,rawcolliderset_coSetTranslation:()=>m_,rawcolliderset_coSetTranslationWrtParent:()=>h_,rawcolliderset_coSetVoxel:()=>j_,rawcolliderset_coShapeType:()=>y_,rawcolliderset_coSolverGroups:()=>$_,rawcolliderset_coTranslation:()=>u_,rawcolliderset_coTranslationWrtParent:()=>f_,rawcolliderset_coTriMeshFlags:()=>I_,rawcolliderset_coVertices:()=>P_,rawcolliderset_coVolume:()=>Z_,rawcolliderset_coVoxelData:()=>k_,rawcolliderset_coVoxelSize:()=>A_,rawcolliderset_contains:()=>Pv,rawcolliderset_createCollider:()=>Fv,rawcolliderset_forEachColliderHandle:()=>Lv,rawcolliderset_isHandleValid:()=>xx,rawcolliderset_len:()=>Nv,rawcolliderset_new:()=>Mv,rawcolliderset_remove:()=>Iv,rawcollidershapecasthit_colliderHandle:()=>Kx,rawcollidershapecasthit_normal1:()=>Px,rawcollidershapecasthit_normal2:()=>Fx,rawcollidershapecasthit_time_of_impact:()=>cb,rawcollidershapecasthit_witness1:()=>lb,rawcollidershapecasthit_witness2:()=>ub,rawcontactforceevent_collider1:()=>eS,rawcontactforceevent_collider2:()=>Mb,rawcontactforceevent_max_force_direction:()=>Fb,rawcontactforceevent_max_force_magnitude:()=>Ib,rawcontactforceevent_total_force:()=>Nb,rawcontactforceevent_total_force_magnitude:()=>Pb,rawcontactmanifold_contact_dist:()=>iy,rawcontactmanifold_contact_fid1:()=>ay,rawcontactmanifold_contact_fid2:()=>oy,rawcontactmanifold_contact_impulse:()=>sy,rawcontactmanifold_contact_local_p1:()=>ny,rawcontactmanifold_contact_local_p2:()=>ry,rawcontactmanifold_contact_tangent_impulse_x:()=>cy,rawcontactmanifold_contact_tangent_impulse_y:()=>ly,rawcontactmanifold_local_n1:()=>Zv,rawcontactmanifold_local_n2:()=>Qv,rawcontactmanifold_normal:()=>Xv,rawcontactmanifold_num_contacts:()=>ty,rawcontactmanifold_num_solver_contacts:()=>uy,rawcontactmanifold_solver_contact_dist:()=>fy,rawcontactmanifold_solver_contact_friction:()=>py,rawcontactmanifold_solver_contact_point:()=>dy,rawcontactmanifold_solver_contact_restitution:()=>my,rawcontactmanifold_solver_contact_tangent_velocity:()=>hy,rawcontactmanifold_subshape1:()=>$v,rawcontactmanifold_subshape2:()=>ey,rawcontactpair_collider1:()=>Kv,rawcontactpair_collider2:()=>qv,rawcontactpair_contactManifold:()=>Yv,rawcontactpair_numContactManifolds:()=>Jv,rawdebugrenderpipeline_colors:()=>Ob,rawdebugrenderpipeline_new:()=>Eb,rawdebugrenderpipeline_render:()=>kb,rawdebugrenderpipeline_vertices:()=>Db,rawdeserializedworld_takeBodies:()=>hx,rawdeserializedworld_takeBroadPhase:()=>px,rawdeserializedworld_takeColliders:()=>gx,rawdeserializedworld_takeGravity:()=>ux,rawdeserializedworld_takeImpulseJoints:()=>_x,rawdeserializedworld_takeIntegrationParameters:()=>dx,rawdeserializedworld_takeIslandManager:()=>fx,rawdeserializedworld_takeMultibodyJoints:()=>vx,rawdeserializedworld_takeNarrowPhase:()=>mx,rawdynamicraycastvehiclecontroller_add_wheel:()=>xp,rawdynamicraycastvehiclecontroller_chassis:()=>gp,rawdynamicraycastvehiclecontroller_current_vehicle_speed:()=>hp,rawdynamicraycastvehiclecontroller_index_forward_axis:()=>yp,rawdynamicraycastvehiclecontroller_index_up_axis:()=>_p,rawdynamicraycastvehiclecontroller_new:()=>mp,rawdynamicraycastvehiclecontroller_num_wheels:()=>Sp,rawdynamicraycastvehiclecontroller_set_index_forward_axis:()=>bp,rawdynamicraycastvehiclecontroller_set_index_up_axis:()=>vp,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:()=>Yp,rawdynamicraycastvehiclecontroller_set_wheel_brake:()=>Vp,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:()=>Tp,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:()=>qp,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:()=>Gp,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:()=>Zp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:()=>zp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:()=>kp,rawdynamicraycastvehiclecontroller_set_wheel_radius:()=>jp,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:()=>$p,rawdynamicraycastvehiclecontroller_set_wheel_steering:()=>Up,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:()=>Fp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:()=>Lp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:()=>Dp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:()=>Np,rawdynamicraycastvehiclecontroller_update_vehicle:()=>Cp,rawdynamicraycastvehiclecontroller_wheel_axle_cs:()=>Jp,rawdynamicraycastvehiclecontroller_wheel_brake:()=>Bp,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:()=>wp,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:()=>im,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:()=>am,rawdynamicraycastvehiclecontroller_wheel_direction_cs:()=>Kp,rawdynamicraycastvehiclecontroller_wheel_engine_force:()=>Wp,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:()=>tm,rawdynamicraycastvehiclecontroller_wheel_friction_slip:()=>Xp,rawdynamicraycastvehiclecontroller_wheel_ground_object:()=>lm,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:()=>sm,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:()=>cm,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:()=>Rp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:()=>Op,rawdynamicraycastvehiclecontroller_wheel_radius:()=>Ap,rawdynamicraycastvehiclecontroller_wheel_rotation:()=>em,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:()=>Qp,rawdynamicraycastvehiclecontroller_wheel_side_impulse:()=>nm,rawdynamicraycastvehiclecontroller_wheel_steering:()=>Hp,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:()=>Pp,rawdynamicraycastvehiclecontroller_wheel_suspension_force:()=>rm,rawdynamicraycastvehiclecontroller_wheel_suspension_length:()=>om,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:()=>Ip,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:()=>Ep,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:()=>Mp,raweventqueue_clear:()=>Bb,raweventqueue_drainCollisionEvents:()=>Rb,raweventqueue_drainContactForceEvents:()=>zb,raweventqueue_new:()=>Lb,rawgenericjoint_fixed:()=>uh,rawgenericjoint_generic:()=>ah,rawgenericjoint_prismatic:()=>lh,rawgenericjoint_revolute:()=>dh,rawgenericjoint_rope:()=>sh,rawgenericjoint_spherical:()=>ch,rawgenericjoint_spring:()=>oh,rawimpulsejointset_contains:()=>Fm,rawimpulsejointset_createJoint:()=>Mm,rawimpulsejointset_forEachJointAttachedToRigidBody:()=>Lm,rawimpulsejointset_forEachJointHandle:()=>Im,rawimpulsejointset_jointAnchor1:()=>gm,rawimpulsejointset_jointAnchor2:()=>_m,rawimpulsejointset_jointBodyHandle1:()=>fm,rawimpulsejointset_jointBodyHandle2:()=>pm,rawimpulsejointset_jointConfigureMotor:()=>km,rawimpulsejointset_jointConfigureMotorModel:()=>Em,rawimpulsejointset_jointConfigureMotorPosition:()=>Om,rawimpulsejointset_jointConfigureMotorVelocity:()=>Dm,rawimpulsejointset_jointContactsEnabled:()=>bm,rawimpulsejointset_jointFrameX1:()=>mm,rawimpulsejointset_jointFrameX2:()=>hm,rawimpulsejointset_jointLimitsEnabled:()=>Sm,rawimpulsejointset_jointLimitsMax:()=>wm,rawimpulsejointset_jointLimitsMin:()=>Cm,rawimpulsejointset_jointSetAnchor1:()=>vm,rawimpulsejointset_jointSetAnchor2:()=>ym,rawimpulsejointset_jointSetContactsEnabled:()=>xm,rawimpulsejointset_jointSetLimits:()=>Tm,rawimpulsejointset_jointType:()=>dm,rawimpulsejointset_len:()=>Pm,rawimpulsejointset_new:()=>jm,rawimpulsejointset_remove:()=>Nm,rawintegrationparameters_contact_erp:()=>Vm,rawintegrationparameters_dt:()=>Bm,rawintegrationparameters_lengthUnit:()=>tS,rawintegrationparameters_maxCcdSubsteps:()=>Km,rawintegrationparameters_minIslandSize:()=>Gm,rawintegrationparameters_new:()=>zm,rawintegrationparameters_normalizedAllowedLinearError:()=>Hm,rawintegrationparameters_normalizedPredictionDistance:()=>Um,rawintegrationparameters_numInternalPgsIterations:()=>Lx,rawintegrationparameters_numSolverIterations:()=>Wm,rawintegrationparameters_set_contact_natural_frequency:()=>Jm,rawintegrationparameters_set_dt:()=>qm,rawintegrationparameters_set_lengthUnit:()=>eh,rawintegrationparameters_set_maxCcdSubsteps:()=>$m,rawintegrationparameters_set_minIslandSize:()=>Qm,rawintegrationparameters_set_normalizedAllowedLinearError:()=>Ym,rawintegrationparameters_set_normalizedPredictionDistance:()=>Xm,rawintegrationparameters_set_numInternalPgsIterations:()=>wx,rawintegrationparameters_set_numSolverIterations:()=>Zm,rawislandmanager_forEachActiveRigidBodyHandle:()=>rh,rawislandmanager_new:()=>nh,rawkinematiccharactercontroller_autostepEnabled:()=>Af,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:()=>kf,rawkinematiccharactercontroller_autostepMaxHeight:()=>Df,rawkinematiccharactercontroller_autostepMinWidth:()=>Of,rawkinematiccharactercontroller_computeColliderMovement:()=>Vf,rawkinematiccharactercontroller_computedCollision:()=>Gf,rawkinematiccharactercontroller_computedGrounded:()=>Uf,rawkinematiccharactercontroller_computedMovement:()=>Hf,rawkinematiccharactercontroller_disableAutostep:()=>Mf,rawkinematiccharactercontroller_disableSnapToGround:()=>zf,rawkinematiccharactercontroller_enableAutostep:()=>jf,rawkinematiccharactercontroller_enableSnapToGround:()=>Rf,rawkinematiccharactercontroller_maxSlopeClimbAngle:()=>Nf,rawkinematiccharactercontroller_minSlopeSlideAngle:()=>Ff,rawkinematiccharactercontroller_new:()=>yf,rawkinematiccharactercontroller_normalNudgeFactor:()=>xf,rawkinematiccharactercontroller_numComputedCollisions:()=>Wf,rawkinematiccharactercontroller_offset:()=>Cf,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:()=>Pf,rawkinematiccharactercontroller_setMinSlopeSlideAngle:()=>If,rawkinematiccharactercontroller_setNormalNudgeFactor:()=>Sf,rawkinematiccharactercontroller_setOffset:()=>wf,rawkinematiccharactercontroller_setSlideEnabled:()=>Ef,rawkinematiccharactercontroller_setUp:()=>bf,rawkinematiccharactercontroller_slideEnabled:()=>Tf,rawkinematiccharactercontroller_snapToGroundDistance:()=>Lf,rawkinematiccharactercontroller_snapToGroundEnabled:()=>Bf,rawkinematiccharactercontroller_up:()=>Dx,rawmultibodyjointset_contains:()=>Eh,rawmultibodyjointset_createJoint:()=>wh,rawmultibodyjointset_forEachJointAttachedToRigidBody:()=>Oh,rawmultibodyjointset_forEachJointHandle:()=>Dh,rawmultibodyjointset_jointAnchor1:()=>hh,rawmultibodyjointset_jointAnchor2:()=>gh,rawmultibodyjointset_jointContactsEnabled:()=>_h,rawmultibodyjointset_jointFrameX1:()=>ph,rawmultibodyjointset_jointFrameX2:()=>mh,rawmultibodyjointset_jointLimitsEnabled:()=>yh,rawmultibodyjointset_jointLimitsMax:()=>xh,rawmultibodyjointset_jointLimitsMin:()=>bh,rawmultibodyjointset_jointSetContactsEnabled:()=>vh,rawmultibodyjointset_jointType:()=>fh,rawmultibodyjointset_new:()=>Ch,rawmultibodyjointset_remove:()=>Th,rawnarrowphase_contact_pair:()=>Hv,rawnarrowphase_contact_pairs_with:()=>Vv,rawnarrowphase_intersection_pair:()=>Wv,rawnarrowphase_intersection_pairs_with:()=>Uv,rawnarrowphase_new:()=>Bv,rawphysicspipeline_is_profiler_enabled:()=>Wb,rawphysicspipeline_new:()=>Hb,rawphysicspipeline_set_profiler_enabled:()=>Ub,rawphysicspipeline_step:()=>sx,rawphysicspipeline_stepWithEvents:()=>cx,rawphysicspipeline_timing_broad_phase:()=>qb,rawphysicspipeline_timing_ccd:()=>ex,rawphysicspipeline_timing_ccd_broad_phase:()=>nx,rawphysicspipeline_timing_ccd_narrow_phase:()=>rx,rawphysicspipeline_timing_ccd_solver:()=>ix,rawphysicspipeline_timing_ccd_toi_computation:()=>tx,rawphysicspipeline_timing_collision_detection:()=>Kb,rawphysicspipeline_timing_island_construction:()=>ax,rawphysicspipeline_timing_narrow_phase:()=>Jb,rawphysicspipeline_timing_solver:()=>Yb,rawphysicspipeline_timing_step:()=>Gb,rawphysicspipeline_timing_user_changes:()=>ox,rawphysicspipeline_timing_velocity_assembly:()=>Xb,rawphysicspipeline_timing_velocity_resolution:()=>Zb,rawphysicspipeline_timing_velocity_update:()=>Qb,rawphysicspipeline_timing_velocity_writeback:()=>$b,rawpidcontroller_angular_correction:()=>fp,rawpidcontroller_apply_angular_correction:()=>up,rawpidcontroller_apply_linear_correction:()=>lp,rawpidcontroller_linear_correction:()=>dp,rawpidcontroller_new:()=>rp,rawpidcontroller_reset_integrals:()=>cp,rawpidcontroller_set_axes_mask:()=>sp,rawpidcontroller_set_kd:()=>op,rawpidcontroller_set_ki:()=>ap,rawpidcontroller_set_kp:()=>ip,rawpointcolliderprojection_colliderHandle:()=>by,rawpointcolliderprojection_featureId:()=>wy,rawpointcolliderprojection_featureType:()=>Cy,rawpointcolliderprojection_isInside:()=>Sy,rawpointcolliderprojection_point:()=>xy,rawpointprojection_isInside:()=>vy,rawpointprojection_point:()=>_y,rawraycolliderhit_colliderHandle:()=>Ux,rawraycolliderhit_timeOfImpact:()=>qx,rawraycolliderintersection_colliderHandle:()=>Bx,rawraycolliderintersection_featureId:()=>Cx,rawraycolliderintersection_featureType:()=>Hx,rawraycolliderintersection_normal:()=>Mx,rawraycolliderintersection_time_of_impact:()=>Wx,rawrayintersection_featureId:()=>Sx,rawrayintersection_featureType:()=>zx,rawrayintersection_normal:()=>jx,rawrayintersection_time_of_impact:()=>Vx,rawrigidbodyset_contains:()=>Yg,rawrigidbodyset_createRigidBody:()=>Kg,rawrigidbodyset_forEachRigidBodyHandle:()=>Xg,rawrigidbodyset_len:()=>Jg,rawrigidbodyset_new:()=>Gg,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:()=>Zg,rawrigidbodyset_rbAddForce:()=>Mg,rawrigidbodyset_rbAddForceAtPoint:()=>Ig,rawrigidbodyset_rbAddTorque:()=>Pg,rawrigidbodyset_rbAdditionalSolverIterations:()=>Rg,rawrigidbodyset_rbAngularDamping:()=>Cg,rawrigidbodyset_rbAngvel:()=>Kh,rawrigidbodyset_rbApplyImpulse:()=>Ng,rawrigidbodyset_rbApplyImpulseAtPoint:()=>Lg,rawrigidbodyset_rbApplyTorqueImpulse:()=>Fg,rawrigidbodyset_rbBodyType:()=>_g,rawrigidbodyset_rbCollider:()=>gg,rawrigidbodyset_rbDominanceGroup:()=>Qh,rawrigidbodyset_rbEffectiveAngularInertia:()=>dg,rawrigidbodyset_rbEffectiveInvMass:()=>ig,rawrigidbodyset_rbEffectiveWorldInvInertia:()=>ug,rawrigidbodyset_rbEnableCcd:()=>eg,rawrigidbodyset_rbGravityScale:()=>Og,rawrigidbodyset_rbInvMass:()=>rg,rawrigidbodyset_rbInvPrincipalInertia:()=>sg,rawrigidbodyset_rbIsCcdEnabled:()=>pg,rawrigidbodyset_rbIsDynamic:()=>xg,rawrigidbodyset_rbIsEnabled:()=>Dg,rawrigidbodyset_rbIsFixed:()=>yg,rawrigidbodyset_rbIsKinematic:()=>bg,rawrigidbodyset_rbIsMoving:()=>Nh,rawrigidbodyset_rbIsSleeping:()=>Mh,rawrigidbodyset_rbLinearDamping:()=>Sg,rawrigidbodyset_rbLinvel:()=>Gh,rawrigidbodyset_rbLocalCom:()=>ag,rawrigidbodyset_rbLockRotations:()=>Xh,rawrigidbodyset_rbLockTranslations:()=>Jh,rawrigidbodyset_rbMass:()=>ng,rawrigidbodyset_rbNextRotation:()=>Fh,rawrigidbodyset_rbNextTranslation:()=>Ph,rawrigidbodyset_rbNumColliders:()=>hg,rawrigidbodyset_rbPrincipalInertia:()=>lg,rawrigidbodyset_rbPrincipalInertiaLocalFrame:()=>cg,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:()=>Hh,rawrigidbodyset_rbResetForces:()=>Ag,rawrigidbodyset_rbResetTorques:()=>jg,rawrigidbodyset_rbRotation:()=>Ah,rawrigidbodyset_rbSetAdditionalMass:()=>Uh,rawrigidbodyset_rbSetAdditionalMassProperties:()=>Wh,rawrigidbodyset_rbSetAdditionalSolverIterations:()=>zg,rawrigidbodyset_rbSetAngularDamping:()=>Tg,rawrigidbodyset_rbSetAngvel:()=>zh,rawrigidbodyset_rbSetBodyType:()=>vg,rawrigidbodyset_rbSetDominanceGroup:()=>$h,rawrigidbodyset_rbSetEnabled:()=>Eg,rawrigidbodyset_rbSetEnabledRotations:()=>Zh,rawrigidbodyset_rbSetEnabledTranslations:()=>Yh,rawrigidbodyset_rbSetGravityScale:()=>kg,rawrigidbodyset_rbSetLinearDamping:()=>wg,rawrigidbodyset_rbSetLinvel:()=>Rh,rawrigidbodyset_rbSetNextKinematicRotation:()=>Vh,rawrigidbodyset_rbSetNextKinematicTranslation:()=>Bh,rawrigidbodyset_rbSetRotation:()=>Lh,rawrigidbodyset_rbSetSoftCcdPrediction:()=>tg,rawrigidbodyset_rbSetTranslation:()=>Ih,rawrigidbodyset_rbSetUserData:()=>Vg,rawrigidbodyset_rbSleep:()=>jh,rawrigidbodyset_rbSoftCcdPrediction:()=>mg,rawrigidbodyset_rbTranslation:()=>kh,rawrigidbodyset_rbUserData:()=>Bg,rawrigidbodyset_rbUserForce:()=>Hg,rawrigidbodyset_rbUserTorque:()=>Ug,rawrigidbodyset_rbVelocityAtPoint:()=>qh,rawrigidbodyset_rbWakeUp:()=>fg,rawrigidbodyset_rbWorldCom:()=>og,rawrigidbodyset_remove:()=>qg,rawrotation_identity:()=>fb,rawrotation_new:()=>db,rawrotation_w:()=>pb,rawrotation_x:()=>Jx,rawrotation_y:()=>Yx,rawrotation_z:()=>Xx,rawsdpmatrix3_elements:()=>wb,rawserializationpipeline_deserializeAll:()=>bx,rawserializationpipeline_new:()=>lS,rawserializationpipeline_serializeAll:()=>yx,rawshape_ball:()=>Ay,rawshape_capsule:()=>My,rawshape_castRay:()=>tb,rawshape_castRayAndGetNormal:()=>nb,rawshape_castShape:()=>Yy,rawshape_cone:()=>Fy,rawshape_contactShape:()=>Zy,rawshape_containsPoint:()=>Qy,rawshape_convexHull:()=>Gy,rawshape_convexMesh:()=>qy,rawshape_cuboid:()=>Oy,rawshape_cylinder:()=>Ny,rawshape_halfspace:()=>jy,rawshape_heightfield:()=>Vy,rawshape_intersectsRay:()=>eb,rawshape_intersectsShape:()=>Xy,rawshape_polyline:()=>zy,rawshape_projectPoint:()=>$y,rawshape_roundCone:()=>Iy,rawshape_roundConvexHull:()=>Ky,rawshape_roundConvexMesh:()=>Jy,rawshape_roundCuboid:()=>ky,rawshape_roundCylinder:()=>Py,rawshape_roundTriangle:()=>Wy,rawshape_segment:()=>Hy,rawshape_triangle:()=>Uy,rawshape_trimesh:()=>By,rawshape_voxels:()=>Ly,rawshape_voxelsFromPoints:()=>Ry,rawshapecasthit_normal1:()=>ab,rawshapecasthit_normal2:()=>ob,rawshapecasthit_time_of_impact:()=>Gx,rawshapecasthit_witness1:()=>ib,rawshapecasthit_witness2:()=>Ix,rawshapecontact_distance:()=>Rx,rawshapecontact_normal1:()=>Nx,rawshapecontact_normal2:()=>Ox,rawshapecontact_point1:()=>kx,rawshapecontact_point2:()=>Ax,rawvector_new:()=>hb,rawvector_set_x:()=>Tx,rawvector_set_y:()=>gb,rawvector_set_z:()=>_b,rawvector_x:()=>Zx,rawvector_xyz:()=>vb,rawvector_xzy:()=>xb,rawvector_y:()=>Qx,rawvector_yxz:()=>yb,rawvector_yzx:()=>Sb,rawvector_z:()=>$x,rawvector_zero:()=>mb,rawvector_zxy:()=>bb,rawvector_zyx:()=>Cb,reserve_memory:()=>Ex,version:()=>_f});URL=globalThis.URL;var{memory:gf,version:_f,__wbg_rawkinematiccharactercontroller_free:vf,rawkinematiccharactercontroller_new:yf,rawkinematiccharactercontroller_setUp:bf,rawkinematiccharactercontroller_normalNudgeFactor:xf,rawkinematiccharactercontroller_setNormalNudgeFactor:Sf,rawkinematiccharactercontroller_offset:Cf,rawkinematiccharactercontroller_setOffset:wf,rawkinematiccharactercontroller_slideEnabled:Tf,rawkinematiccharactercontroller_setSlideEnabled:Ef,rawkinematiccharactercontroller_autostepMaxHeight:Df,rawkinematiccharactercontroller_autostepMinWidth:Of,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:kf,rawkinematiccharactercontroller_autostepEnabled:Af,rawkinematiccharactercontroller_enableAutostep:jf,rawkinematiccharactercontroller_disableAutostep:Mf,rawkinematiccharactercontroller_maxSlopeClimbAngle:Nf,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:Pf,rawkinematiccharactercontroller_minSlopeSlideAngle:Ff,rawkinematiccharactercontroller_setMinSlopeSlideAngle:If,rawkinematiccharactercontroller_snapToGroundDistance:Lf,rawkinematiccharactercontroller_enableSnapToGround:Rf,rawkinematiccharactercontroller_disableSnapToGround:zf,rawkinematiccharactercontroller_snapToGroundEnabled:Bf,rawkinematiccharactercontroller_computeColliderMovement:Vf,rawkinematiccharactercontroller_computedMovement:Hf,rawkinematiccharactercontroller_computedGrounded:Uf,rawkinematiccharactercontroller_numComputedCollisions:Wf,rawkinematiccharactercontroller_computedCollision:Gf,__wbg_rawcharactercollision_free:Kf,rawcharactercollision_new:qf,rawcharactercollision_handle:Jf,rawcharactercollision_translationDeltaApplied:Yf,rawcharactercollision_translationDeltaRemaining:Xf,rawcharactercollision_toi:Zf,rawcharactercollision_worldWitness1:Qf,rawcharactercollision_worldWitness2:$f,rawcharactercollision_worldNormal1:ep,rawcharactercollision_worldNormal2:tp,__wbg_rawpidcontroller_free:np,rawpidcontroller_new:rp,rawpidcontroller_set_kp:ip,rawpidcontroller_set_ki:ap,rawpidcontroller_set_kd:op,rawpidcontroller_set_axes_mask:sp,rawpidcontroller_reset_integrals:cp,rawpidcontroller_apply_linear_correction:lp,rawpidcontroller_apply_angular_correction:up,rawpidcontroller_linear_correction:dp,rawpidcontroller_angular_correction:fp,__wbg_rawdynamicraycastvehiclecontroller_free:pp,rawdynamicraycastvehiclecontroller_new:mp,rawdynamicraycastvehiclecontroller_current_vehicle_speed:hp,rawdynamicraycastvehiclecontroller_chassis:gp,rawdynamicraycastvehiclecontroller_index_up_axis:_p,rawdynamicraycastvehiclecontroller_set_index_up_axis:vp,rawdynamicraycastvehiclecontroller_index_forward_axis:yp,rawdynamicraycastvehiclecontroller_set_index_forward_axis:bp,rawdynamicraycastvehiclecontroller_add_wheel:xp,rawdynamicraycastvehiclecontroller_num_wheels:Sp,rawdynamicraycastvehiclecontroller_update_vehicle:Cp,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:wp,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:Tp,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:Ep,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:Dp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:Op,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:kp,rawdynamicraycastvehiclecontroller_wheel_radius:Ap,rawdynamicraycastvehiclecontroller_set_wheel_radius:jp,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:Mp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:Np,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:Pp,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:Fp,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:Ip,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:Lp,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:Rp,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:zp,rawdynamicraycastvehiclecontroller_wheel_brake:Bp,rawdynamicraycastvehiclecontroller_set_wheel_brake:Vp,rawdynamicraycastvehiclecontroller_wheel_steering:Hp,rawdynamicraycastvehiclecontroller_set_wheel_steering:Up,rawdynamicraycastvehiclecontroller_wheel_engine_force:Wp,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:Gp,rawdynamicraycastvehiclecontroller_wheel_direction_cs:Kp,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:qp,rawdynamicraycastvehiclecontroller_wheel_axle_cs:Jp,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:Yp,rawdynamicraycastvehiclecontroller_wheel_friction_slip:Xp,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:Zp,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:Qp,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:$p,rawdynamicraycastvehiclecontroller_wheel_rotation:em,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:tm,rawdynamicraycastvehiclecontroller_wheel_side_impulse:nm,rawdynamicraycastvehiclecontroller_wheel_suspension_force:rm,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:im,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:am,rawdynamicraycastvehiclecontroller_wheel_suspension_length:om,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:sm,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:cm,rawdynamicraycastvehiclecontroller_wheel_ground_object:lm,__wbg_rawccdsolver_free:um,rawimpulsejointset_jointType:dm,rawimpulsejointset_jointBodyHandle1:fm,rawimpulsejointset_jointBodyHandle2:pm,rawimpulsejointset_jointFrameX1:mm,rawimpulsejointset_jointFrameX2:hm,rawimpulsejointset_jointAnchor1:gm,rawimpulsejointset_jointAnchor2:_m,rawimpulsejointset_jointSetAnchor1:vm,rawimpulsejointset_jointSetAnchor2:ym,rawimpulsejointset_jointContactsEnabled:bm,rawimpulsejointset_jointSetContactsEnabled:xm,rawimpulsejointset_jointLimitsEnabled:Sm,rawimpulsejointset_jointLimitsMin:Cm,rawimpulsejointset_jointLimitsMax:wm,rawimpulsejointset_jointSetLimits:Tm,rawimpulsejointset_jointConfigureMotorModel:Em,rawimpulsejointset_jointConfigureMotorVelocity:Dm,rawimpulsejointset_jointConfigureMotorPosition:Om,rawimpulsejointset_jointConfigureMotor:km,__wbg_rawimpulsejointset_free:Am,rawimpulsejointset_new:jm,rawimpulsejointset_createJoint:Mm,rawimpulsejointset_remove:Nm,rawimpulsejointset_len:Pm,rawimpulsejointset_contains:Fm,rawimpulsejointset_forEachJointHandle:Im,rawimpulsejointset_forEachJointAttachedToRigidBody:Lm,__wbg_rawintegrationparameters_free:Rm,rawintegrationparameters_new:zm,rawintegrationparameters_dt:Bm,rawintegrationparameters_contact_erp:Vm,rawintegrationparameters_normalizedAllowedLinearError:Hm,rawintegrationparameters_normalizedPredictionDistance:Um,rawintegrationparameters_numSolverIterations:Wm,rawintegrationparameters_minIslandSize:Gm,rawintegrationparameters_maxCcdSubsteps:Km,rawintegrationparameters_set_dt:qm,rawintegrationparameters_set_contact_natural_frequency:Jm,rawintegrationparameters_set_normalizedAllowedLinearError:Ym,rawintegrationparameters_set_normalizedPredictionDistance:Xm,rawintegrationparameters_set_numSolverIterations:Zm,rawintegrationparameters_set_minIslandSize:Qm,rawintegrationparameters_set_maxCcdSubsteps:$m,rawintegrationparameters_set_lengthUnit:eh,__wbg_rawislandmanager_free:th,rawislandmanager_new:nh,rawislandmanager_forEachActiveRigidBodyHandle:rh,__wbg_rawgenericjoint_free:ih,rawgenericjoint_generic:ah,rawgenericjoint_spring:oh,rawgenericjoint_rope:sh,rawgenericjoint_spherical:ch,rawgenericjoint_prismatic:lh,rawgenericjoint_fixed:uh,rawgenericjoint_revolute:dh,rawmultibodyjointset_jointType:fh,rawmultibodyjointset_jointFrameX1:ph,rawmultibodyjointset_jointFrameX2:mh,rawmultibodyjointset_jointAnchor1:hh,rawmultibodyjointset_jointAnchor2:gh,rawmultibodyjointset_jointContactsEnabled:_h,rawmultibodyjointset_jointSetContactsEnabled:vh,rawmultibodyjointset_jointLimitsEnabled:yh,rawmultibodyjointset_jointLimitsMin:bh,rawmultibodyjointset_jointLimitsMax:xh,__wbg_rawmultibodyjointset_free:Sh,rawmultibodyjointset_new:Ch,rawmultibodyjointset_createJoint:wh,rawmultibodyjointset_remove:Th,rawmultibodyjointset_contains:Eh,rawmultibodyjointset_forEachJointHandle:Dh,rawmultibodyjointset_forEachJointAttachedToRigidBody:Oh,rawrigidbodyset_rbTranslation:kh,rawrigidbodyset_rbRotation:Ah,rawrigidbodyset_rbSleep:jh,rawrigidbodyset_rbIsSleeping:Mh,rawrigidbodyset_rbIsMoving:Nh,rawrigidbodyset_rbNextTranslation:Ph,rawrigidbodyset_rbNextRotation:Fh,rawrigidbodyset_rbSetTranslation:Ih,rawrigidbodyset_rbSetRotation:Lh,rawrigidbodyset_rbSetLinvel:Rh,rawrigidbodyset_rbSetAngvel:zh,rawrigidbodyset_rbSetNextKinematicTranslation:Bh,rawrigidbodyset_rbSetNextKinematicRotation:Vh,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:Hh,rawrigidbodyset_rbSetAdditionalMass:Uh,rawrigidbodyset_rbSetAdditionalMassProperties:Wh,rawrigidbodyset_rbLinvel:Gh,rawrigidbodyset_rbAngvel:Kh,rawrigidbodyset_rbVelocityAtPoint:qh,rawrigidbodyset_rbLockTranslations:Jh,rawrigidbodyset_rbSetEnabledTranslations:Yh,rawrigidbodyset_rbLockRotations:Xh,rawrigidbodyset_rbSetEnabledRotations:Zh,rawrigidbodyset_rbDominanceGroup:Qh,rawrigidbodyset_rbSetDominanceGroup:$h,rawrigidbodyset_rbEnableCcd:eg,rawrigidbodyset_rbSetSoftCcdPrediction:tg,rawrigidbodyset_rbMass:ng,rawrigidbodyset_rbInvMass:rg,rawrigidbodyset_rbEffectiveInvMass:ig,rawrigidbodyset_rbLocalCom:ag,rawrigidbodyset_rbWorldCom:og,rawrigidbodyset_rbInvPrincipalInertia:sg,rawrigidbodyset_rbPrincipalInertiaLocalFrame:cg,rawrigidbodyset_rbPrincipalInertia:lg,rawrigidbodyset_rbEffectiveWorldInvInertia:ug,rawrigidbodyset_rbEffectiveAngularInertia:dg,rawrigidbodyset_rbWakeUp:fg,rawrigidbodyset_rbIsCcdEnabled:pg,rawrigidbodyset_rbSoftCcdPrediction:mg,rawrigidbodyset_rbNumColliders:hg,rawrigidbodyset_rbCollider:gg,rawrigidbodyset_rbBodyType:_g,rawrigidbodyset_rbSetBodyType:vg,rawrigidbodyset_rbIsFixed:yg,rawrigidbodyset_rbIsKinematic:bg,rawrigidbodyset_rbIsDynamic:xg,rawrigidbodyset_rbLinearDamping:Sg,rawrigidbodyset_rbAngularDamping:Cg,rawrigidbodyset_rbSetLinearDamping:wg,rawrigidbodyset_rbSetAngularDamping:Tg,rawrigidbodyset_rbSetEnabled:Eg,rawrigidbodyset_rbIsEnabled:Dg,rawrigidbodyset_rbGravityScale:Og,rawrigidbodyset_rbSetGravityScale:kg,rawrigidbodyset_rbResetForces:Ag,rawrigidbodyset_rbResetTorques:jg,rawrigidbodyset_rbAddForce:Mg,rawrigidbodyset_rbApplyImpulse:Ng,rawrigidbodyset_rbAddTorque:Pg,rawrigidbodyset_rbApplyTorqueImpulse:Fg,rawrigidbodyset_rbAddForceAtPoint:Ig,rawrigidbodyset_rbApplyImpulseAtPoint:Lg,rawrigidbodyset_rbAdditionalSolverIterations:Rg,rawrigidbodyset_rbSetAdditionalSolverIterations:zg,rawrigidbodyset_rbUserData:Bg,rawrigidbodyset_rbSetUserData:Vg,rawrigidbodyset_rbUserForce:Hg,rawrigidbodyset_rbUserTorque:Ug,__wbg_rawrigidbodyset_free:Wg,rawrigidbodyset_new:Gg,rawrigidbodyset_createRigidBody:Kg,rawrigidbodyset_remove:qg,rawrigidbodyset_len:Jg,rawrigidbodyset_contains:Yg,rawrigidbodyset_forEachRigidBodyHandle:Xg,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:Zg,__wbg_rawbroadphase_free:Qg,rawbroadphase_new:$g,rawbroadphase_castRay:e_,rawbroadphase_castRayAndGetNormal:t_,rawbroadphase_intersectionsWithRay:n_,rawbroadphase_intersectionWithShape:r_,rawbroadphase_projectPoint:i_,rawbroadphase_projectPointAndGetFeature:a_,rawbroadphase_intersectionsWithPoint:o_,rawbroadphase_castShape:s_,rawbroadphase_intersectionsWithShape:c_,rawbroadphase_collidersWithAabbIntersectingAabb:l_,rawcolliderset_coTranslation:u_,rawcolliderset_coRotation:d_,rawcolliderset_coTranslationWrtParent:f_,rawcolliderset_coRotationWrtParent:p_,rawcolliderset_coSetTranslation:m_,rawcolliderset_coSetTranslationWrtParent:h_,rawcolliderset_coSetRotation:g_,rawcolliderset_coSetRotationWrtParent:__,rawcolliderset_coIsSensor:v_,rawcolliderset_coShapeType:y_,rawcolliderset_coHalfspaceNormal:b_,rawcolliderset_coHalfExtents:x_,rawcolliderset_coSetHalfExtents:S_,rawcolliderset_coRadius:C_,rawcolliderset_coSetRadius:w_,rawcolliderset_coHalfHeight:T_,rawcolliderset_coSetHalfHeight:E_,rawcolliderset_coRoundRadius:D_,rawcolliderset_coSetRoundRadius:O_,rawcolliderset_coVoxelData:k_,rawcolliderset_coVoxelSize:A_,rawcolliderset_coSetVoxel:j_,rawcolliderset_coPropagateVoxelChange:M_,rawcolliderset_coCombineVoxelStates:N_,rawcolliderset_coVertices:P_,rawcolliderset_coIndices:F_,rawcolliderset_coTriMeshFlags:I_,rawcolliderset_coHeightFieldFlags:L_,rawcolliderset_coHeightfieldHeights:R_,rawcolliderset_coHeightfieldScale:z_,rawcolliderset_coHeightfieldNRows:B_,rawcolliderset_coHeightfieldNCols:V_,rawcolliderset_coParent:H_,rawcolliderset_coSetEnabled:U_,rawcolliderset_coIsEnabled:W_,rawcolliderset_coSetContactSkin:G_,rawcolliderset_coContactSkin:K_,rawcolliderset_coFriction:q_,rawcolliderset_coRestitution:J_,rawcolliderset_coDensity:Y_,rawcolliderset_coMass:X_,rawcolliderset_coVolume:Z_,rawcolliderset_coCollisionGroups:Q_,rawcolliderset_coSolverGroups:$_,rawcolliderset_coActiveHooks:ev,rawcolliderset_coActiveCollisionTypes:tv,rawcolliderset_coActiveEvents:nv,rawcolliderset_coContactForceEventThreshold:rv,rawcolliderset_coContainsPoint:iv,rawcolliderset_coCastShape:av,rawcolliderset_coCastCollider:ov,rawcolliderset_coIntersectsShape:sv,rawcolliderset_coContactShape:cv,rawcolliderset_coContactCollider:lv,rawcolliderset_coProjectPoint:uv,rawcolliderset_coIntersectsRay:dv,rawcolliderset_coCastRay:fv,rawcolliderset_coCastRayAndGetNormal:pv,rawcolliderset_coSetSensor:mv,rawcolliderset_coSetRestitution:hv,rawcolliderset_coSetFriction:gv,rawcolliderset_coFrictionCombineRule:_v,rawcolliderset_coSetFrictionCombineRule:vv,rawcolliderset_coRestitutionCombineRule:yv,rawcolliderset_coSetRestitutionCombineRule:bv,rawcolliderset_coSetCollisionGroups:xv,rawcolliderset_coSetSolverGroups:Sv,rawcolliderset_coSetActiveHooks:Cv,rawcolliderset_coSetActiveEvents:wv,rawcolliderset_coSetActiveCollisionTypes:Tv,rawcolliderset_coSetShape:Ev,rawcolliderset_coSetContactForceEventThreshold:Dv,rawcolliderset_coSetDensity:Ov,rawcolliderset_coSetMass:kv,rawcolliderset_coSetMassProperties:Av,__wbg_rawcolliderset_free:jv,rawcolliderset_new:Mv,rawcolliderset_len:Nv,rawcolliderset_contains:Pv,rawcolliderset_createCollider:Fv,rawcolliderset_remove:Iv,rawcolliderset_forEachColliderHandle:Lv,__wbg_rawshapecontact_free:Rv,__wbg_rawnarrowphase_free:zv,rawnarrowphase_new:Bv,rawnarrowphase_contact_pairs_with:Vv,rawnarrowphase_contact_pair:Hv,rawnarrowphase_intersection_pairs_with:Uv,rawnarrowphase_intersection_pair:Wv,__wbg_rawcontactmanifold_free:Gv,rawcontactpair_collider1:Kv,rawcontactpair_collider2:qv,rawcontactpair_numContactManifolds:Jv,rawcontactpair_contactManifold:Yv,rawcontactmanifold_normal:Xv,rawcontactmanifold_local_n1:Zv,rawcontactmanifold_local_n2:Qv,rawcontactmanifold_subshape1:$v,rawcontactmanifold_subshape2:ey,rawcontactmanifold_num_contacts:ty,rawcontactmanifold_contact_local_p1:ny,rawcontactmanifold_contact_local_p2:ry,rawcontactmanifold_contact_dist:iy,rawcontactmanifold_contact_fid1:ay,rawcontactmanifold_contact_fid2:oy,rawcontactmanifold_contact_impulse:sy,rawcontactmanifold_contact_tangent_impulse_x:cy,rawcontactmanifold_contact_tangent_impulse_y:ly,rawcontactmanifold_num_solver_contacts:uy,rawcontactmanifold_solver_contact_point:dy,rawcontactmanifold_solver_contact_dist:fy,rawcontactmanifold_solver_contact_friction:py,rawcontactmanifold_solver_contact_restitution:my,rawcontactmanifold_solver_contact_tangent_velocity:hy,__wbg_rawpointprojection_free:gy,rawpointprojection_point:_y,rawpointprojection_isInside:vy,__wbg_rawpointcolliderprojection_free:yy,rawpointcolliderprojection_colliderHandle:by,rawpointcolliderprojection_point:xy,rawpointcolliderprojection_isInside:Sy,rawpointcolliderprojection_featureType:Cy,rawpointcolliderprojection_featureId:wy,__wbg_rawrayintersection_free:Ty,__wbg_rawraycolliderhit_free:Ey,__wbg_rawshape_free:Dy,rawshape_cuboid:Oy,rawshape_roundCuboid:ky,rawshape_ball:Ay,rawshape_halfspace:jy,rawshape_capsule:My,rawshape_cylinder:Ny,rawshape_roundCylinder:Py,rawshape_cone:Fy,rawshape_roundCone:Iy,rawshape_voxels:Ly,rawshape_voxelsFromPoints:Ry,rawshape_polyline:zy,rawshape_trimesh:By,rawshape_heightfield:Vy,rawshape_segment:Hy,rawshape_triangle:Uy,rawshape_roundTriangle:Wy,rawshape_convexHull:Gy,rawshape_roundConvexHull:Ky,rawshape_convexMesh:qy,rawshape_roundConvexMesh:Jy,rawshape_castShape:Yy,rawshape_intersectsShape:Xy,rawshape_contactShape:Zy,rawshape_containsPoint:Qy,rawshape_projectPoint:$y,rawshape_intersectsRay:eb,rawshape_castRay:tb,rawshape_castRayAndGetNormal:nb,__wbg_rawshapecasthit_free:rb,rawshapecasthit_witness1:ib,rawshapecasthit_normal1:ab,rawshapecasthit_normal2:ob,__wbg_rawcollidershapecasthit_free:sb,rawcollidershapecasthit_time_of_impact:cb,rawcollidershapecasthit_witness1:lb,rawcollidershapecasthit_witness2:ub,rawrotation_new:db,rawrotation_identity:fb,rawrotation_w:pb,rawvector_zero:mb,rawvector_new:hb,rawvector_set_y:gb,rawvector_set_z:_b,rawvector_xyz:vb,rawvector_yxz:yb,rawvector_zxy:bb,rawvector_xzy:xb,rawvector_yzx:Sb,rawvector_zyx:Cb,rawsdpmatrix3_elements:wb,__wbg_rawdebugrenderpipeline_free:Tb,rawdebugrenderpipeline_new:Eb,rawdebugrenderpipeline_vertices:Db,rawdebugrenderpipeline_colors:Ob,rawdebugrenderpipeline_render:kb,__wbg_raweventqueue_free:Ab,__wbg_rawcontactforceevent_free:jb,rawcontactforceevent_collider2:Mb,rawcontactforceevent_total_force:Nb,rawcontactforceevent_total_force_magnitude:Pb,rawcontactforceevent_max_force_direction:Fb,rawcontactforceevent_max_force_magnitude:Ib,raweventqueue_new:Lb,raweventqueue_drainCollisionEvents:Rb,raweventqueue_drainContactForceEvents:zb,raweventqueue_clear:Bb,__wbg_rawphysicspipeline_free:Vb,rawphysicspipeline_new:Hb,rawphysicspipeline_set_profiler_enabled:Ub,rawphysicspipeline_is_profiler_enabled:Wb,rawphysicspipeline_timing_step:Gb,rawphysicspipeline_timing_collision_detection:Kb,rawphysicspipeline_timing_broad_phase:qb,rawphysicspipeline_timing_narrow_phase:Jb,rawphysicspipeline_timing_solver:Yb,rawphysicspipeline_timing_velocity_assembly:Xb,rawphysicspipeline_timing_velocity_resolution:Zb,rawphysicspipeline_timing_velocity_update:Qb,rawphysicspipeline_timing_velocity_writeback:$b,rawphysicspipeline_timing_ccd:ex,rawphysicspipeline_timing_ccd_toi_computation:tx,rawphysicspipeline_timing_ccd_broad_phase:nx,rawphysicspipeline_timing_ccd_narrow_phase:rx,rawphysicspipeline_timing_ccd_solver:ix,rawphysicspipeline_timing_island_construction:ax,rawphysicspipeline_timing_user_changes:ox,rawphysicspipeline_step:sx,rawphysicspipeline_stepWithEvents:cx,__wbg_rawdeserializedworld_free:lx,rawdeserializedworld_takeGravity:ux,rawdeserializedworld_takeIntegrationParameters:dx,rawdeserializedworld_takeIslandManager:fx,rawdeserializedworld_takeBroadPhase:px,rawdeserializedworld_takeNarrowPhase:mx,rawdeserializedworld_takeBodies:hx,rawdeserializedworld_takeColliders:gx,rawdeserializedworld_takeImpulseJoints:_x,rawdeserializedworld_takeMultibodyJoints:vx,rawserializationpipeline_serializeAll:yx,rawserializationpipeline_deserializeAll:bx,rawcolliderset_isHandleValid:xx,rawrayintersection_featureId:Sx,rawraycolliderintersection_featureId:Cx,rawintegrationparameters_set_numInternalPgsIterations:wx,rawvector_set_x:Tx,reserve_memory:Ex,rawkinematiccharactercontroller_up:Dx,rawshapecontact_normal2:Ox,rawshapecontact_point1:kx,rawshapecontact_point2:Ax,rawrayintersection_normal:jx,rawraycolliderintersection_normal:Mx,rawshapecontact_normal1:Nx,rawcollidershapecasthit_normal1:Px,rawcollidershapecasthit_normal2:Fx,rawshapecasthit_witness2:Ix,rawintegrationparameters_numInternalPgsIterations:Lx,rawshapecontact_distance:Rx,rawrayintersection_featureType:zx,rawraycolliderintersection_colliderHandle:Bx,rawrayintersection_time_of_impact:Vx,rawraycolliderintersection_featureType:Hx,rawraycolliderhit_colliderHandle:Ux,rawraycolliderintersection_time_of_impact:Wx,rawshapecasthit_time_of_impact:Gx,rawcollidershapecasthit_colliderHandle:Kx,rawraycolliderhit_timeOfImpact:qx,rawrotation_x:Jx,rawrotation_y:Yx,rawrotation_z:Xx,rawvector_x:Zx,rawvector_y:Qx,rawvector_z:$x,rawcontactforceevent_collider1:eS,rawintegrationparameters_lengthUnit:tS,__wbg_rawcontactpair_free:nS,__wbg_rawraycolliderintersection_free:rS,__wbg_rawrotation_free:iS,__wbg_rawvector_free:aS,__wbg_rawsdpmatrix3_free:oS,__wbg_rawserializationpipeline_free:sS,rawccdsolver_new:cS,rawserializationpipeline_new:lS,__wbindgen_export_0:uS,__wbindgen_add_to_stack_pointer:dS,__wbindgen_export_1:fS,__wbindgen_export_2:pS}=await ql({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:df,__wbindgen_boolean_get:of,__wbindgen_object_drop_ref:pf,__wbindgen_number_get:uf,__wbindgen_is_function:sf,__wbg_rawraycolliderintersection_new:Qd,__wbg_rawcontactforceevent_new:Zd,__wbg_performance_7a3ffd0b17f663ad:Xd,__wbindgen_is_undefined:cf,__wbg_now_2c95c9de01293173:Yd,__wbindgen_object_clone_ref:ff,__wbg_newnoargs_105ed471475aaf50:Gd,__wbg_call_672a4d21634d4a24:Rd,__wbg_call_7cccdd69e0791ae2:zd,__wbg_call_833bed5770ea2041:Bd,__wbg_call_b8adc8b1d0a0d8eb:Vd,__wbg_bind_c8359b1cba058168:Id,__wbg_buffer_609cc3eee51ed158:Ld,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:nf,__wbg_static_accessor_SELF_37c5d418e4bf5819:rf,__wbg_static_accessor_WINDOW_5de37043a91a9c40:af,__wbg_static_accessor_GLOBAL_88a902d13a557d07:tf,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Kd,__wbg_new_a12002a7f91c75be:Wd,__wbg_set_65595bdd868b3009:ef,__wbg_length_a446193dc22c12f8:Ud,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:qd,__wbg_set_10bad9bee0e9c58b:$d,__wbg_length_3b4f022188ae8db6:Hd,__wbg_newwithlength_5a5efe313cfd59f1:Jd,__wbindgen_throw:mf,__wbindgen_memory:lf}},Kl);Jl(hf);var mS=class{constructor(e,t,n){this.x=e,this.y=t,this.z=n}},Q=class e{static new(e,t,n){return new mS(e,t,n)}static intoRaw(e){return new Z(e.x,e.y,e.z)}static zeros(){return e.new(0,0,0)}static fromRaw(t){if(!t)return null;let n=e.new(t.x,t.y,t.z);return t.free(),n}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}},hS=class{constructor(e,t,n,r){this.x=e,this.y=t,this.z=n,this.w=r}},$=class{static identity(){return new hS(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new hS(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new X(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}},gS=class{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(e){this.elements=e}},_S=class{static fromRaw(e){let t=new gS(e.elements());return e.free(),t}},vS;(function(e){e[e.Dynamic=0]=`Dynamic`,e[e.Fixed=1]=`Fixed`,e[e.KinematicPositionBased=2]=`KinematicPositionBased`,e[e.KinematicVelocityBased=3]=`KinematicVelocityBased`})(vS||={});var yS=class{constructor(e,t,n){this.rawSet=e,this.colliderSet=t,this.handle=n}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,n,r)}restrictTranslations(e,t,n,r){this.setEnabledTranslations(e,t,n,r)}setEnabledRotations(e,t,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,n,r)}restrictRotations(e,t,n,r){this.setEnabledRotations(e,t,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(e){this.rawSet.rbSetAdditionalSolverIterations(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}setSoftCcdPrediction(e){this.rawSet.rbSetSoftCcdPrediction(this.handle,e)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let e=this.rawSet.rbTranslation(this.handle);return Q.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return $.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return Q.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return $.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let n=Q.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,n,t),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let n=Q.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,n,t),n.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return Q.fromRaw(this.rawSet.rbLinvel(this.handle))}velocityAtPoint(e){let t=Q.intoRaw(e),n=Q.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle,t));return t.free(),n}angvel(){return Q.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return Q.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return Q.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return Q.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertia(){return Q.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle))}principalInertia(){return Q.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return $.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertia(){return _S.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle))}effectiveAngularInertia(){return _S.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,n,r,i){let a=Q.intoRaw(t),o=Q.intoRaw(n),s=$.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,a,o,s,i),a.free(),o.free(),s.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){let n=Q.intoRaw(e);this.rawSet.rbAddForce(this.handle,n,t),n.free()}applyImpulse(e,t){let n=Q.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,n,t),n.free()}addTorque(e,t){let n=Q.intoRaw(e);this.rawSet.rbAddTorque(this.handle,n,t),n.free()}applyTorqueImpulse(e,t){let n=Q.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,n,t),n.free()}addForceAtPoint(e,t,n){let r=Q.intoRaw(e),i=Q.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,r,i,n),r.free(),i.free()}applyImpulseAtPoint(e,t,n){let r=Q.intoRaw(e),i=Q.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,i,n),r.free(),i.free()}userForce(){return Q.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return Q.fromRaw(this.rawSet.rbUserTorque(this.handle))}},bS=class e{constructor(e){this.enabled=!0,this.status=e,this.translation=Q.zeros(),this.rotation=$.identity(),this.gravityScale=1,this.linvel=Q.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=Q.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=Q.zeros(),this.principalAngularInertia=Q.zeros(),this.angularInertiaLocalFrame=$.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new e(vS.Dynamic)}static kinematicPositionBased(){return new e(vS.KinematicPositionBased)}static kinematicVelocityBased(){return new e(vS.KinematicVelocityBased)}static fixed(){return new e(vS.Fixed)}static newDynamic(){return new e(vS.Dynamic)}static newKinematicPositionBased(){return new e(vS.KinematicPositionBased)}static newKinematicVelocityBased(){return new e(vS.KinematicVelocityBased)}static newStatic(){return new e(vS.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setAdditionalSolverIterations(e){return this.additionalSolverIterations=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,n){if(typeof e!=`number`||typeof t!=`number`||typeof n!=`number`)throw TypeError(`The translation components must be numbers.`);return this.translation={x:e,y:t,z:n},this}setRotation(e){return $.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,n){if(typeof e!=`number`||typeof t!=`number`||typeof n!=`number`)throw TypeError(`The linvel components must be numbers.`);return this.linvel={x:e,y:t,z:n},this}setAngvel(e){return Q.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,n,r){return this.mass=e,Q.copy(this.centerOfMass,t),Q.copy(this.principalAngularInertia,n),$.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(e,t,n){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=n,this}restrictTranslations(e,t,n){return this.enabledTranslations(e,t,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,n){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=n,this}restrictRotations(e,t,n){return this.enabledRotations(e,t,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setSoftCcdPrediction(e){return this.softCcdPrediction=e,this}setUserData(e){return this.userData=e,this}},xS=class{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=[],this.size=0}set(e,t){let n=this.index(e);for(;this.data.length<=n;)this.data.push(null);this.data[n]??(this.size+=1),this.data[n]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&--this.size,this.data[t]=null)}clear(){this.data=[]}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(let t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}},SS=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(e){this.raw=e||new Cd,this.map=new xS,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new yS(e,null,t))})}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let n=Q.intoRaw(t.translation),r=$.intoRaw(t.rotation),i=Q.intoRaw(t.linvel),a=Q.intoRaw(t.centerOfMass),o=Q.intoRaw(t.angvel),s=Q.intoRaw(t.principalAngularInertia),c=$.intoRaw(t.angularInertiaLocalFrame),l=this.raw.createRigidBody(t.enabled,n,r,t.gravityScale,t.mass,t.massOnly,a,i,o,s,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.softCcdPrediction,t.ccdEnabled,t.dominanceGroup,t.additionalSolverIterations);n.free(),r.free(),i.free(),a.free(),o.free(),s.free(),c.free();let u=new yS(this.raw,e,l);return u.userData=t.userData,this.map.set(l,u),u}remove(e,t,n,r,i){for(let t=0;t<this.raw.rbNumColliders(e);t+=1)n.unmap(this.raw.rbCollider(e,t));r.forEachJointHandleAttachedToRigidBody(e,e=>r.unmap(e)),i.forEachJointHandleAttachedToRigidBody(e,e=>i.unmap(e)),this.raw.remove(e,t.raw,n.raw,r.raw,i.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(e=>{t(this.get(e))})}getAll(){return this.map.getAll()}},CS=class{constructor(e){this.raw=e||new $u}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set contact_natural_frequency(e){this.raw.contact_natural_frequency=e}set lengthUnit(e){this.raw.lengthUnit=e}set normalizedAllowedLinearError(e){this.raw.normalizedAllowedLinearError=e}set normalizedPredictionDistance(e){this.raw.normalizedPredictionDistance=e}set numSolverIterations(e){this.raw.numSolverIterations=e}set numInternalPgsIterations(e){this.raw.numInternalPgsIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}},wS;(function(e){e[e.Revolute=0]=`Revolute`,e[e.Fixed=1]=`Fixed`,e[e.Prismatic=2]=`Prismatic`,e[e.Rope=3]=`Rope`,e[e.Spring=4]=`Spring`,e[e.Spherical=5]=`Spherical`,e[e.Generic=6]=`Generic`})(wS||={});var TS;(function(e){e[e.AccelerationBased=0]=`AccelerationBased`,e[e.ForceBased=1]=`ForceBased`})(TS||={});var ES;(function(e){e[e.LinX=1]=`LinX`,e[e.LinY=2]=`LinY`,e[e.LinZ=4]=`LinZ`,e[e.AngX=8]=`AngX`,e[e.AngY=16]=`AngY`,e[e.AngZ=32]=`AngZ`})(ES||={});var DS=class e{constructor(e,t,n){this.rawSet=e,this.bodySet=t,this.handle=n}static newTyped(t,n,r){switch(t.jointType(r)){case Su.Revolute:return new NS(t,n,r);case Su.Prismatic:return new MS(t,n,r);case Su.Fixed:return new kS(t,n,r);case Su.Spring:return new jS(t,n,r);case Su.Rope:return new AS(t,n,r);case Su.Spherical:return new FS(t,n,r);case Su.Generic:return new PS(t,n,r);default:return new e(t,n,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return $.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return $.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return Q.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return Q.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){let t=Q.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){let t=Q.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},OS=class extends DS{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,n)}configureMotor(e,t,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,n,r)}},kS=class extends DS{},AS=class extends DS{},jS=class extends DS{},MS=class extends OS{rawAxis(){return xu.LinX}},NS=class extends OS{rawAxis(){return xu.AngX}},PS=class extends DS{},FS=class extends DS{},IS=class e{constructor(){}static fixed(t,n,r,i){let a=new e;return a.anchor1=t,a.anchor2=r,a.frame1=n,a.frame2=i,a.jointType=wS.Fixed,a}static spring(t,n,r,i,a){let o=new e;return o.anchor1=i,o.anchor2=a,o.length=t,o.stiffness=n,o.damping=r,o.jointType=wS.Spring,o}static rope(t,n,r){let i=new e;return i.anchor1=n,i.anchor2=r,i.length=t,i.jointType=wS.Rope,i}static generic(t,n,r,i){let a=new e;return a.anchor1=t,a.anchor2=n,a.axis=r,a.axesMask=i,a.jointType=wS.Generic,a}static spherical(t,n){let r=new e;return r.anchor1=t,r.anchor2=n,r.jointType=wS.Spherical,r}static prismatic(t,n,r){let i=new e;return i.anchor1=t,i.anchor2=n,i.axis=r,i.jointType=wS.Prismatic,i}static revolute(t,n,r){let i=new e;return i.anchor1=t,i.anchor2=n,i.axis=r,i.jointType=wS.Revolute,i}intoRaw(){let e=Q.intoRaw(this.anchor1),t=Q.intoRaw(this.anchor2),n,r,i=!1,a=0,o=0;switch(this.jointType){case wS.Fixed:let s=$.intoRaw(this.frame1),c=$.intoRaw(this.frame2);r=Yu.fixed(e,s,t,c),s.free(),c.free();break;case wS.Spring:r=Yu.spring(this.length,this.stiffness,this.damping,e,t);break;case wS.Rope:r=Yu.rope(this.length,e,t);break;case wS.Prismatic:n=Q.intoRaw(this.axis),this.limitsEnabled&&(i=!0,a=this.limits[0],o=this.limits[1]),r=Yu.prismatic(e,t,n,i,a,o),n.free();break;case wS.Generic:n=Q.intoRaw(this.axis);let l=this.axesMask;r=Yu.generic(e,t,n,l);break;case wS.Spherical:r=Yu.spherical(e,t);break;case wS.Revolute:n=Q.intoRaw(this.axis),r=Yu.revolute(e,t,n),n.free();break}return e.free(),t.free(),r}},LS=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(e){this.raw=e||new Zu,this.map=new xS,e&&e.forEachJointHandle(t=>{this.map.set(t,DS.newTyped(e,null,t))})}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,n,r,i){let a=t.intoRaw(),o=this.raw.createJoint(a,n,r,i);a.free();let s=DS.newTyped(this.raw,e,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}},RS=class e{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(t,n){switch(t.jointType(n)){case Su.Revolute:return new HS(t,n);case Su.Prismatic:return new VS(t,n);case Su.Fixed:return new BS(t,n);case Su.Spherical:return new US(t,n);default:return new e(t,n)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},zS=class extends RS{},BS=class extends RS{},VS=class extends zS{rawAxis(){return xu.LinX}},HS=class extends zS{rawAxis(){return xu.AngX}},US=class extends RS{},WS=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(e){this.raw=e||new ad,this.map=new xS,e&&e.forEachJointHandle(e=>{this.map.set(e,RS.newTyped(this.raw,e))})}createJoint(e,t,n,r){let i=e.intoRaw(),a=this.raw.createJoint(i,t,n,r);i.free();let o=RS.newTyped(this.raw,a);return this.map.set(a,o),o}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}},GS;(function(e){e[e.Average=0]=`Average`,e[e.Min=1]=`Min`,e[e.Multiply=2]=`Multiply`,e[e.Max=3]=`Max`})(GS||={});var KS=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new Du}},qS=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new td}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}},JS;(function(e){e[e.Vertex=0]=`Vertex`,e[e.Edge=1]=`Edge`,e[e.Face=2]=`Face`,e[e.Unknown=3]=`Unknown`})(JS||={});var YS=class e{constructor(e,t,n,r){this.featureType=JS.Unknown,this.featureId=void 0,this.timeOfImpact=e,this.normal=t,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;let n=new e(t.time_of_impact(),Q.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),n}},XS=class e{constructor(e,t,n,r,i){this.featureType=JS.Unknown,this.featureId=void 0,this.collider=e,this.timeOfImpact=t,this.normal=n,i!==void 0&&(this.featureId=i),r!==void 0&&(this.featureType=r)}static fromRaw(t,n){if(!n)return null;let r=new e(t.get(n.colliderHandle()),n.time_of_impact(),Q.fromRaw(n.normal()),n.featureType(),n.featureId());return n.free(),r}},ZS=class e{constructor(e,t){this.collider=e,this.timeOfImpact=t}static fromRaw(t,n){if(!n)return null;let r=new e(t.get(n.colliderHandle()),n.timeOfImpact());return n.free(),r}},QS=class e{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(t){if(!t)return null;let n=new e(Q.fromRaw(t.point()),t.isInside());return t.free(),n}},$S=class e{constructor(e,t,n,r,i){this.featureType=JS.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=n,i!==void 0&&(this.featureId=i),r!==void 0&&(this.featureType=r)}static fromRaw(t,n){if(!n)return null;let r=new e(t.get(n.colliderHandle()),Q.fromRaw(n.point()),n.isInside(),n.featureType(),n.featureId());return n.free(),r}},eC=class e{constructor(e,t,n,r,i){this.time_of_impact=e,this.witness1=t,this.witness2=n,this.normal1=r,this.normal2=i}static fromRaw(t,n){if(!n)return null;let r=new e(n.time_of_impact(),Q.fromRaw(n.witness1()),Q.fromRaw(n.witness2()),Q.fromRaw(n.normal1()),Q.fromRaw(n.normal2()));return n.free(),r}},tC=class e extends eC{constructor(e,t,n,r,i,a){super(t,n,r,i,a),this.collider=e}static fromRaw(t,n){if(!n)return null;let r=new e(t.get(n.colliderHandle()),n.time_of_impact(),Q.fromRaw(n.witness1()),Q.fromRaw(n.witness2()),Q.fromRaw(n.normal1()),Q.fromRaw(n.normal2()));return n.free(),r}},nC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new Tu}castRay(e,t,n,r,i,a,o,s,c,l,u){let d=Q.intoRaw(r.origin),f=Q.intoRaw(r.dir),p=ZS.fromRaw(n,this.raw.castRay(e.raw,t.raw,n.raw,d,f,i,a,o,s,c,l,u));return d.free(),f.free(),p}castRayAndGetNormal(e,t,n,r,i,a,o,s,c,l,u){let d=Q.intoRaw(r.origin),f=Q.intoRaw(r.dir),p=XS.fromRaw(n,this.raw.castRayAndGetNormal(e.raw,t.raw,n.raw,d,f,i,a,o,s,c,l,u));return d.free(),f.free(),p}intersectionsWithRay(e,t,n,r,i,a,o,s,c,l,u,d){let f=Q.intoRaw(r.origin),p=Q.intoRaw(r.dir);this.raw.intersectionsWithRay(e.raw,t.raw,n.raw,f,p,i,a,e=>o(XS.fromRaw(n,e)),s,c,l,u,d),f.free(),p.free()}intersectionWithShape(e,t,n,r,i,a,o,s,c,l,u){let d=Q.intoRaw(r),f=$.intoRaw(i),p=a.intoRaw(),m=this.raw.intersectionWithShape(e.raw,t.raw,n.raw,d,f,p,o,s,c,l,u);return d.free(),f.free(),p.free(),m}projectPoint(e,t,n,r,i,a,o,s,c,l){let u=Q.intoRaw(r),d=$S.fromRaw(n,this.raw.projectPoint(e.raw,t.raw,n.raw,u,i,a,o,s,c,l));return u.free(),d}projectPointAndGetFeature(e,t,n,r,i,a,o,s,c){let l=Q.intoRaw(r),u=$S.fromRaw(n,this.raw.projectPointAndGetFeature(e.raw,t.raw,n.raw,l,i,a,o,s,c));return l.free(),u}intersectionsWithPoint(e,t,n,r,i,a,o,s,c,l){let u=Q.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,n.raw,u,i,a,o,s,c,l),u.free()}castShape(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){let h=Q.intoRaw(r),g=$.intoRaw(i),_=Q.intoRaw(a),v=o.intoRaw(),y=tC.fromRaw(n,this.raw.castShape(e.raw,t.raw,n.raw,h,g,_,v,s,c,l,u,d,f,p,m));return h.free(),g.free(),_.free(),v.free(),y}intersectionsWithShape(e,t,n,r,i,a,o,s,c,l,u,d){let f=Q.intoRaw(r),p=$.intoRaw(i),m=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,n.raw,f,p,m,o,s,c,l,u,d),f.free(),p.free(),m.free()}collidersWithAabbIntersectingAabb(e,t,n,r,i,a){let o=Q.intoRaw(r),s=Q.intoRaw(i);this.raw.collidersWithAabbIntersectingAabb(e.raw,t.raw,n.raw,o,s,a),o.free(),s.free()}},rC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new sd,this.tempManifold=new iC(null)}contactPairsWith(e,t){this.raw.contact_pairs_with(e,t)}intersectionPairsWith(e,t){this.raw.intersection_pairs_with(e,t)}contactPair(e,t,n){let r=this.raw.contact_pair(e,t);if(r){let t=r.collider1()!=e,i;for(i=0;i<r.numContactManifolds();++i)this.tempManifold.raw=r.contactManifold(i),this.tempManifold.raw&&n(this.tempManifold,t),this.tempManifold.free();r.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}},iC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e}normal(){return Q.fromRaw(this.raw.normal())}localNormal1(){return Q.fromRaw(this.raw.local_n1())}localNormal2(){return Q.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return Q.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return Q.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return Q.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return Q.fromRaw(this.raw.solver_contact_tangent_velocity(e))}},aC=class e{constructor(e,t,n,r,i){this.distance=e,this.point1=t,this.point2=n,this.normal1=r,this.normal2=i}static fromRaw(t){if(!t)return null;let n=new e(t.distance(),Q.fromRaw(t.point1()),Q.fromRaw(t.point2()),Q.fromRaw(t.normal1()),Q.fromRaw(t.normal2()));return t.free(),n}},oC=class{static fromRaw(e,t){let n=e.coShapeType(t),r,i,a,o,s,c,l;switch(n){case Cu.Ball:return new uC(e.coRadius(t));case Cu.Cuboid:return r=e.coHalfExtents(t),new fC(r.x,r.y,r.z);case Cu.RoundCuboid:return r=e.coHalfExtents(t),i=e.coRoundRadius(t),new pC(r.x,r.y,r.z,i);case Cu.Capsule:return s=e.coHalfHeight(t),c=e.coRadius(t),new mC(s,c);case Cu.Segment:return a=e.coVertices(t),new hC(Q.new(a[0],a[1],a[2]),Q.new(a[3],a[4],a[5]));case Cu.Polyline:return a=e.coVertices(t),o=e.coIndices(t),new vC(a,o);case Cu.Triangle:return a=e.coVertices(t),new gC(Q.new(a[0],a[1],a[2]),Q.new(a[3],a[4],a[5]),Q.new(a[6],a[7],a[8]));case Cu.RoundTriangle:return a=e.coVertices(t),i=e.coRoundRadius(t),new _C(Q.new(a[0],a[1],a[2]),Q.new(a[3],a[4],a[5]),Q.new(a[6],a[7],a[8]),i);case Cu.HalfSpace:return l=Q.fromRaw(e.coHalfspaceNormal(t)),new dC(l);case Cu.Voxels:return new yC(e.coVoxelData(t),e.coVoxelSize(t));case Cu.TriMesh:a=e.coVertices(t),o=e.coIndices(t);let u=e.coTriMeshFlags(t);return new bC(a,o,u);case Cu.HeightField:let d=e.coHeightfieldScale(t),f=e.coHeightfieldHeights(t);return new CC(e.coHeightfieldNRows(t),e.coHeightfieldNCols(t),f,d,e.coHeightFieldFlags(t));case Cu.ConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),new xC(a,o);case Cu.RoundConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),i=e.coRoundRadius(t),new SC(a,o,i);case Cu.Cylinder:return s=e.coHalfHeight(t),c=e.coRadius(t),new wC(s,c);case Cu.RoundCylinder:return s=e.coHalfHeight(t),c=e.coRadius(t),i=e.coRoundRadius(t),new TC(s,c,i);case Cu.Cone:return s=e.coHalfHeight(t),c=e.coRadius(t),new EC(s,c);case Cu.RoundCone:return s=e.coHalfHeight(t),c=e.coRadius(t),i=e.coRoundRadius(t),new DC(s,c,i);default:throw Error(`unknown shape type: `+n)}}castShape(e,t,n,r,i,a,o,s,c,l){let u=Q.intoRaw(e),d=$.intoRaw(t),f=Q.intoRaw(n),p=Q.intoRaw(i),m=$.intoRaw(a),h=Q.intoRaw(o),g=this.intoRaw(),_=r.intoRaw(),v=eC.fromRaw(null,g.castShape(u,d,f,_,p,m,h,s,c,l));return u.free(),d.free(),f.free(),p.free(),m.free(),h.free(),g.free(),_.free(),v}intersectsShape(e,t,n,r,i){let a=Q.intoRaw(e),o=$.intoRaw(t),s=Q.intoRaw(r),c=$.intoRaw(i),l=this.intoRaw(),u=n.intoRaw(),d=l.intersectsShape(a,o,u,s,c);return a.free(),o.free(),s.free(),c.free(),l.free(),u.free(),d}contactShape(e,t,n,r,i,a){let o=Q.intoRaw(e),s=$.intoRaw(t),c=Q.intoRaw(r),l=$.intoRaw(i),u=this.intoRaw(),d=n.intoRaw(),f=aC.fromRaw(u.contactShape(o,s,d,c,l,a));return o.free(),s.free(),c.free(),l.free(),u.free(),d.free(),f}containsPoint(e,t,n){let r=Q.intoRaw(e),i=$.intoRaw(t),a=Q.intoRaw(n),o=this.intoRaw(),s=o.containsPoint(r,i,a);return r.free(),i.free(),a.free(),o.free(),s}projectPoint(e,t,n,r){let i=Q.intoRaw(e),a=$.intoRaw(t),o=Q.intoRaw(n),s=this.intoRaw(),c=QS.fromRaw(s.projectPoint(i,a,o,r));return i.free(),a.free(),o.free(),s.free(),c}intersectsRay(e,t,n,r){let i=Q.intoRaw(t),a=$.intoRaw(n),o=Q.intoRaw(e.origin),s=Q.intoRaw(e.dir),c=this.intoRaw(),l=c.intersectsRay(i,a,o,s,r);return i.free(),a.free(),o.free(),s.free(),c.free(),l}castRay(e,t,n,r,i){let a=Q.intoRaw(t),o=$.intoRaw(n),s=Q.intoRaw(e.origin),c=Q.intoRaw(e.dir),l=this.intoRaw(),u=l.castRay(a,o,s,c,r,i);return a.free(),o.free(),s.free(),c.free(),l.free(),u}castRayAndGetNormal(e,t,n,r,i){let a=Q.intoRaw(t),o=$.intoRaw(n),s=Q.intoRaw(e.origin),c=Q.intoRaw(e.dir),l=this.intoRaw(),u=YS.fromRaw(l.castRayAndGetNormal(a,o,s,c,r,i));return a.free(),o.free(),s.free(),c.free(),l.free(),u}},sC;(function(e){e[e.Ball=0]=`Ball`,e[e.Cuboid=1]=`Cuboid`,e[e.Capsule=2]=`Capsule`,e[e.Segment=3]=`Segment`,e[e.Polyline=4]=`Polyline`,e[e.Triangle=5]=`Triangle`,e[e.TriMesh=6]=`TriMesh`,e[e.HeightField=7]=`HeightField`,e[e.ConvexPolyhedron=9]=`ConvexPolyhedron`,e[e.Cylinder=10]=`Cylinder`,e[e.Cone=11]=`Cone`,e[e.RoundCuboid=12]=`RoundCuboid`,e[e.RoundTriangle=13]=`RoundTriangle`,e[e.RoundCylinder=14]=`RoundCylinder`,e[e.RoundCone=15]=`RoundCone`,e[e.RoundConvexPolyhedron=16]=`RoundConvexPolyhedron`,e[e.HalfSpace=17]=`HalfSpace`,e[e.Voxels=18]=`Voxels`})(sC||={});var cC;(function(e){e[e.FIX_INTERNAL_EDGES=1]=`FIX_INTERNAL_EDGES`})(cC||={});var lC;(function(e){e[e.DELETE_BAD_TOPOLOGY_TRIANGLES=4]=`DELETE_BAD_TOPOLOGY_TRIANGLES`,e[e.ORIENTED=8]=`ORIENTED`,e[e.MERGE_DUPLICATE_VERTICES=16]=`MERGE_DUPLICATE_VERTICES`,e[e.DELETE_DEGENERATE_TRIANGLES=32]=`DELETE_DEGENERATE_TRIANGLES`,e[e.DELETE_DUPLICATE_TRIANGLES=64]=`DELETE_DUPLICATE_TRIANGLES`,e[e.FIX_INTERNAL_EDGES=144]=`FIX_INTERNAL_EDGES`})(lC||={});var uC=class extends oC{constructor(e){super(),this.type=sC.Ball,this.radius=e}intoRaw(){return Ad.ball(this.radius)}},dC=class extends oC{constructor(e){super(),this.type=sC.HalfSpace,this.normal=e}intoRaw(){let e=Q.intoRaw(this.normal),t=Ad.halfspace(e);return e.free(),t}},fC=class extends oC{constructor(e,t,n){super(),this.type=sC.Cuboid,this.halfExtents=Q.new(e,t,n)}intoRaw(){return Ad.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}},pC=class extends oC{constructor(e,t,n,r){super(),this.type=sC.RoundCuboid,this.halfExtents=Q.new(e,t,n),this.borderRadius=r}intoRaw(){return Ad.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}},mC=class extends oC{constructor(e,t){super(),this.type=sC.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Ad.capsule(this.halfHeight,this.radius)}},hC=class extends oC{constructor(e,t){super(),this.type=sC.Segment,this.a=e,this.b=t}intoRaw(){let e=Q.intoRaw(this.a),t=Q.intoRaw(this.b),n=Ad.segment(e,t);return e.free(),t.free(),n}},gC=class extends oC{constructor(e,t,n){super(),this.type=sC.Triangle,this.a=e,this.b=t,this.c=n}intoRaw(){let e=Q.intoRaw(this.a),t=Q.intoRaw(this.b),n=Q.intoRaw(this.c),r=Ad.triangle(e,t,n);return e.free(),t.free(),n.free(),r}},_C=class extends oC{constructor(e,t,n,r){super(),this.type=sC.RoundTriangle,this.a=e,this.b=t,this.c=n,this.borderRadius=r}intoRaw(){let e=Q.intoRaw(this.a),t=Q.intoRaw(this.b),n=Q.intoRaw(this.c),r=Ad.roundTriangle(e,t,n,this.borderRadius);return e.free(),t.free(),n.free(),r}},vC=class extends oC{constructor(e,t){super(),this.type=sC.Polyline,this.vertices=e,this.indices=t??new Uint32Array}intoRaw(){return Ad.polyline(this.vertices,this.indices)}},yC=class extends oC{constructor(e,t){super(),this.type=sC.Voxels,this.data=e,this.voxelSize=t}intoRaw(){let e=Q.intoRaw(this.voxelSize),t;return t=this.data instanceof Int32Array?Ad.voxels(e,this.data):Ad.voxelsFromPoints(e,this.data),e.free(),t}},bC=class extends oC{constructor(e,t,n){super(),this.type=sC.TriMesh,this.vertices=e,this.indices=t,this.flags=n}intoRaw(){return Ad.trimesh(this.vertices,this.indices,this.flags)}},xC=class extends oC{constructor(e,t){super(),this.type=sC.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Ad.convexMesh(this.vertices,this.indices):Ad.convexHull(this.vertices)}},SC=class extends oC{constructor(e,t,n){super(),this.type=sC.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=n}intoRaw(){return this.indices?Ad.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Ad.roundConvexHull(this.vertices,this.borderRadius)}},CC=class extends oC{constructor(e,t,n,r,i){super(),this.type=sC.HeightField,this.nrows=e,this.ncols=t,this.heights=n,this.scale=r,this.flags=i}intoRaw(){let e=Q.intoRaw(this.scale),t=Ad.heightfield(this.nrows,this.ncols,this.heights,e,this.flags);return e.free(),t}},wC=class extends oC{constructor(e,t){super(),this.type=sC.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Ad.cylinder(this.halfHeight,this.radius)}},TC=class extends oC{constructor(e,t,n){super(),this.type=sC.RoundCylinder,this.borderRadius=n,this.halfHeight=e,this.radius=t}intoRaw(){return Ad.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}},EC=class extends oC{constructor(e,t){super(),this.type=sC.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Ad.cone(this.halfHeight,this.radius)}},DC=class extends oC{constructor(e,t,n){super(),this.type=sC.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=n}intoRaw(){return Ad.roundCone(this.halfHeight,this.radius,this.borderRadius)}},OC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new ld}step(e,t,n,r,i,a,o,s,c,l,u,d){let f=Q.intoRaw(e);u?this.raw.stepWithEvents(f,t.raw,n.raw,r.raw,i.raw,a.raw,o.raw,s.raw,c.raw,l.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(f,t.raw,n.raw,r.raw,i.raw,a.raw,o.raw,s.raw,c.raw,l.raw),f.free()}},kC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(e){this.raw=e||new Od}serializeAll(e,t,n,r,i,a,o,s,c){let l=Q.intoRaw(e),u=this.raw.serializeAll(l,t.raw,n.raw,r.raw,i.raw,a.raw,o.raw,s.raw,c.raw);return l.free(),u}deserializeAll(e){return LC.fromRaw(this.raw.deserializeAll(e))}},AC=class{constructor(e,t){this.vertices=e,this.colors=t}},jC=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(e){this.raw=e||new Vu}render(e,t,n,r,i,a,o){this.raw.render(e.raw,t.raw,n.raw,r.raw,i.raw,a,t.castClosure(o)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}},MC=class{},NC=class{constructor(e,t,n,r,i,a){this.params=t,this.bodies=i,this.colliders=a,this.broadPhase=n,this.narrowPhase=r,this.raw=new rd(e),this.rawCharacterCollision=new ku,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=Q.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(e){this.raw.setNormalNudgeFactor(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,n){this.raw.enableAutostep(e,t,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,n,r,i){let a=Q.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(i)),a.free()}computedMovement(){return Q.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let e=this.rawCharacterCollision;return t??=new MC,t.translationDeltaApplied=Q.fromRaw(e.translationDeltaApplied()),t.translationDeltaRemaining=Q.fromRaw(e.translationDeltaRemaining()),t.toi=e.toi(),t.witness1=Q.fromRaw(e.worldWitness1()),t.witness2=Q.fromRaw(e.worldWitness2()),t.normal1=Q.fromRaw(e.worldNormal1()),t.normal2=Q.fromRaw(e.worldNormal2()),t.collider=this.colliders.get(e.handle()),t}else return null}},PC;(function(e){e[e.None=0]=`None`,e[e.LinX=1]=`LinX`,e[e.LinY=2]=`LinY`,e[e.LinZ=4]=`LinZ`,e[e.AngX=8]=`AngX`,e[e.AngY=16]=`AngY`,e[e.AngZ=32]=`AngZ`,e[e.AllLin=7]=`AllLin`,e[e.AllAng=56]=`AllAng`,e[e.All=63]=`All`})(PC||={});var FC=class{constructor(e,t,n,r,i,a){this.params=e,this.bodies=t,this.raw=new dd(n,r,i,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(e,t){this.raw.set_kp(e,t)}setKi(e,t){this.raw.set_kp(e,t)}setKd(e,t){this.raw.set_kp(e,t)}setAxes(e){this.raw.set_axes_mask(e)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(e,t,n){let r=Q.intoRaw(t),i=Q.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,e.handle,r,i),r.free(),i.free()}applyAngularCorrection(e,t,n){let r=$.intoRaw(t),i=Q.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,e.handle,r,i),r.free(),i.free()}linearCorrection(e,t,n){let r=Q.intoRaw(t),i=Q.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,e.handle,r,i);return r.free(),i.free(),Q.fromRaw(a)}angularCorrection(e,t,n){let r=$.intoRaw(t),i=Q.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,e.handle,r,i);return r.free(),i.free(),Q.fromRaw(a)}},IC=class{constructor(e,t,n,r,i){this.raw=new Gu(e.handle),this.broadPhase=t,this.narrowPhase=n,this.bodies=r,this.colliders=i,this._chassis=e}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(e,t,n,r){this.raw.update_vehicle(e,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(e){this.raw.set_index_up_axis(e)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(e){this.raw.set_index_forward_axis(e)}addWheel(e,t,n,r,i){let a=Q.intoRaw(e),o=Q.intoRaw(t),s=Q.intoRaw(n);this.raw.add_wheel(a,o,s,r,i),a.free(),o.free(),s.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(e){return Q.fromRaw(this.raw.wheel_chassis_connection_point_cs(e))}setWheelChassisConnectionPointCs(e,t){let n=Q.intoRaw(t);this.raw.set_wheel_chassis_connection_point_cs(e,n),n.free()}wheelSuspensionRestLength(e){return this.raw.wheel_suspension_rest_length(e)}setWheelSuspensionRestLength(e,t){this.raw.set_wheel_suspension_rest_length(e,t)}wheelMaxSuspensionTravel(e){return this.raw.wheel_max_suspension_travel(e)}setWheelMaxSuspensionTravel(e,t){this.raw.set_wheel_max_suspension_travel(e,t)}wheelRadius(e){return this.raw.wheel_radius(e)}setWheelRadius(e,t){this.raw.set_wheel_radius(e,t)}wheelSuspensionStiffness(e){return this.raw.wheel_suspension_stiffness(e)}setWheelSuspensionStiffness(e,t){this.raw.set_wheel_suspension_stiffness(e,t)}wheelSuspensionCompression(e){return this.raw.wheel_suspension_compression(e)}setWheelSuspensionCompression(e,t){this.raw.set_wheel_suspension_compression(e,t)}wheelSuspensionRelaxation(e){return this.raw.wheel_suspension_relaxation(e)}setWheelSuspensionRelaxation(e,t){this.raw.set_wheel_suspension_relaxation(e,t)}wheelMaxSuspensionForce(e){return this.raw.wheel_max_suspension_force(e)}setWheelMaxSuspensionForce(e,t){this.raw.set_wheel_max_suspension_force(e,t)}wheelBrake(e){return this.raw.wheel_brake(e)}setWheelBrake(e,t){this.raw.set_wheel_brake(e,t)}wheelSteering(e){return this.raw.wheel_steering(e)}setWheelSteering(e,t){this.raw.set_wheel_steering(e,t)}wheelEngineForce(e){return this.raw.wheel_engine_force(e)}setWheelEngineForce(e,t){this.raw.set_wheel_engine_force(e,t)}wheelDirectionCs(e){return Q.fromRaw(this.raw.wheel_direction_cs(e))}setWheelDirectionCs(e,t){let n=Q.intoRaw(t);this.raw.set_wheel_direction_cs(e,n),n.free()}wheelAxleCs(e){return Q.fromRaw(this.raw.wheel_axle_cs(e))}setWheelAxleCs(e,t){let n=Q.intoRaw(t);this.raw.set_wheel_axle_cs(e,n),n.free()}wheelFrictionSlip(e){return this.raw.wheel_friction_slip(e)}setWheelFrictionSlip(e,t){this.raw.set_wheel_friction_slip(e,t)}wheelSideFrictionStiffness(e){return this.raw.wheel_side_friction_stiffness(e)}setWheelSideFrictionStiffness(e,t){this.raw.set_wheel_side_friction_stiffness(e,t)}wheelRotation(e){return this.raw.wheel_rotation(e)}wheelForwardImpulse(e){return this.raw.wheel_forward_impulse(e)}wheelSideImpulse(e){return this.raw.wheel_side_impulse(e)}wheelSuspensionForce(e){return this.raw.wheel_suspension_force(e)}wheelContactNormal(e){return Q.fromRaw(this.raw.wheel_contact_normal_ws(e))}wheelContactPoint(e){return Q.fromRaw(this.raw.wheel_contact_point_ws(e))}wheelSuspensionLength(e){return this.raw.wheel_suspension_length(e)}wheelHardPoint(e){return Q.fromRaw(this.raw.wheel_hard_point_ws(e))}wheelIsInContact(e){return this.raw.wheel_is_in_contact(e)}wheelGroundObject(e){return this.colliders.get(this.raw.wheel_ground_object(e))}},LC=class e{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.pidControllers.forEach(e=>e.free()),this.vehicleControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f){this.gravity=e,this.integrationParameters=new CS(t),this.islands=new qS(n),this.broadPhase=new nC(r),this.narrowPhase=new rC(i),this.bodies=new SS(a),this.colliders=new JC(o),this.impulseJoints=new LS(s),this.multibodyJoints=new WS(c),this.ccdSolver=new KS(l),this.physicsPipeline=new OC(u),this.serializationPipeline=new kC(d),this.debugRenderPipeline=new jC(f),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new e(Q.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new kC().deserializeAll(e)}debugRender(e,t){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase,e,t),new AC(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(e){this.integrationParameters.lengthUnit=e}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(e){this.integrationParameters.numSolverIterations=e}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(e){this.integrationParameters.numInternalPgsIterations=e}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(e){this.integrationParameters.maxCcdSubsteps=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new NC(e,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createPidController(e,t,n,r){let i=new FC(this.integrationParameters,this.bodies,e,t,n,r);return this.pidControllers.add(i),i}removePidController(e){this.pidControllers.delete(e),e.free()}createVehicleController(e){let t=new IC(e,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(t),t}removeVehicleController(e){this.vehicleControllers.delete(e),e.free()}createCollider(e,t){let n=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,n)}createImpulseJoint(e,t,n,r){return this.impulseJoints.createJoint(this.bodies,e,t.handle,n.handle,r)}createMultibodyJoint(e,t,n,r){return this.multibodyJoints.createJoint(e,t.handle,n.handle,r)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,n,r,i,a,o,s){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castRayAndGetNormal(e,t,n,r,i,a,o,s){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}intersectionsWithRay(e,t,n,r,i,a,o,s,c){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,n,r,i,a,o,s){let c=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s));return c==null?null:this.colliders.get(c)}projectPoint(e,t,n,r,i,a,o){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i?i.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(e,t,n,r,i,a){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,e,t,n,r?r.handle:null,i?i.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(e,t,n,r,i,a,o){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,e,this.colliders.castClosure(t),n,r,i?i.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(e,t,n,r,i,a,o,s,c,l,u,d){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,e,t,n,r,i,a,o,s,c,l?l.handle:null,u?u.handle:null,this.colliders.castClosure(d))}intersectionsWithShape(e,t,n,r,i,a,o,s,c){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,e,t,n,this.colliders.castClosure(r),i,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,n){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,e,t,this.colliders.castClosure(n))}contactPairsWith(e,t){this.narrowPhase.contactPairsWith(e.handle,this.colliders.castClosure(t))}intersectionPairsWith(e,t){this.narrowPhase.intersectionPairsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,n){this.narrowPhase.contactPair(e.handle,t.handle,n)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}set profilerEnabled(e){this.physicsPipeline.raw.set_profiler_enabled(e)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}},RC;(function(e){e[e.NONE=0]=`NONE`,e[e.COLLISION_EVENTS=1]=`COLLISION_EVENTS`,e[e.CONTACT_FORCE_EVENTS=2]=`CONTACT_FORCE_EVENTS`})(RC||={});var zC=class{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return Q.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return Q.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}},BC=class{constructor(e,t){this.raw=t||new qu(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new zC;this.raw.drainContactForceEvents(n=>{t.raw=n,e(t),t.free()})}clear(){this.raw.clear()}},VC;(function(e){e[e.NONE=0]=`NONE`,e[e.FILTER_CONTACT_PAIRS=1]=`FILTER_CONTACT_PAIRS`,e[e.FILTER_INTERSECTION_PAIRS=2]=`FILTER_INTERSECTION_PAIRS`})(VC||={});var HC;(function(e){e[e.EMPTY=0]=`EMPTY`,e[e.COMPUTE_IMPULSE=1]=`COMPUTE_IMPULSE`})(HC||={});var UC;(function(e){e[e.EXCLUDE_FIXED=1]=`EXCLUDE_FIXED`,e[e.EXCLUDE_KINEMATIC=2]=`EXCLUDE_KINEMATIC`,e[e.EXCLUDE_DYNAMIC=4]=`EXCLUDE_DYNAMIC`,e[e.EXCLUDE_SENSORS=8]=`EXCLUDE_SENSORS`,e[e.EXCLUDE_SOLIDS=16]=`EXCLUDE_SOLIDS`,e[e.ONLY_DYNAMIC=3]=`ONLY_DYNAMIC`,e[e.ONLY_KINEMATIC=5]=`ONLY_KINEMATIC`,e[e.ONLY_FIXED=6]=`ONLY_FIXED`})(UC||={});var WC;(function(e){e[e.DYNAMIC_DYNAMIC=1]=`DYNAMIC_DYNAMIC`,e[e.DYNAMIC_KINEMATIC=12]=`DYNAMIC_KINEMATIC`,e[e.DYNAMIC_FIXED=2]=`DYNAMIC_FIXED`,e[e.KINEMATIC_KINEMATIC=52224]=`KINEMATIC_KINEMATIC`,e[e.KINEMATIC_FIXED=8704]=`KINEMATIC_FIXED`,e[e.FIXED_FIXED=32]=`FIXED_FIXED`,e[e.DEFAULT=15]=`DEFAULT`,e[e.ALL=60943]=`ALL`})(WC||={});var GC=class{constructor(e,t,n,r){this.colliderSet=e,this.handle=t,this._parent=n,this._shape=r}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||=oC.fromRaw(this.colliderSet.raw,this.handle)}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return Q.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}translationWrtParent(){return Q.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle))}rotation(){return $.fromRaw(this.colliderSet.raw.coRotation(this.handle))}rotationWrtParent(){return $.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(e){return this.colliderSet.raw.coSetContactSkin(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,n,r){let i=Q.intoRaw(t),a=Q.intoRaw(n),o=$.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,e,i,a,o),i.free(),a.free(),o.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return Q.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){let t=Q.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}setVoxel(e,t,n,r){this.colliderSet.raw.coSetVoxel(this.handle,e,t,n,r),this._shape=null}propagateVoxelChange(e,t,n,r,i,a,o){this.colliderSet.raw.coPropagateVoxelChange(this.handle,e.handle,t,n,r,i,a,o),this._shape=null}combineVoxelStates(e,t,n,r){this.colliderSet.raw.coCombineVoxelStates(this.handle,e.handle,t,n,r),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return Q.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=Q.intoRaw(e),n=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),n}projectPoint(e,t){let n=Q.intoRaw(e),r=QS.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,t));return n.free(),r}intersectsRay(e,t){let n=Q.intoRaw(e.origin),r=Q.intoRaw(e.dir),i=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,t);return n.free(),r.free(),i}castShape(e,t,n,r,i,a,o,s){let c=Q.intoRaw(e),l=Q.intoRaw(n),u=$.intoRaw(r),d=Q.intoRaw(i),f=t.intoRaw(),p=eC.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,f,l,u,d,a,o,s));return c.free(),l.free(),u.free(),d.free(),f.free(),p}castCollider(e,t,n,r,i,a){let o=Q.intoRaw(e),s=Q.intoRaw(n),c=tC.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,s,r,i,a));return o.free(),s.free(),c}intersectsShape(e,t,n){let r=Q.intoRaw(t),i=$.intoRaw(n),a=e.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,i);return r.free(),i.free(),a.free(),o}contactShape(e,t,n,r){let i=Q.intoRaw(t),a=$.intoRaw(n),o=e.intoRaw(),s=aC.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,i,a,r));return i.free(),a.free(),o.free(),s}contactCollider(e,t){return aC.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,n){let r=Q.intoRaw(e.origin),i=Q.intoRaw(e.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,i,t,n);return r.free(),i.free(),a}castRayAndGetNormal(e,t,n){let r=Q.intoRaw(e.origin),i=Q.intoRaw(e.dir),a=YS.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,i,t,n));return r.free(),i.free(),a}},KC;(function(e){e[e.Density=0]=`Density`,e[e.Mass=1]=`Mass`,e[e.MassProps=2]=`MassProps`})(KC||={});var qC=class e{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=KC.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=$.identity(),this.translation=Q.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=GS.Average,this.restitutionCombineRule=GS.Average,this.activeCollisionTypes=WC.DEFAULT,this.activeEvents=RC.NONE,this.activeHooks=VC.NONE,this.mass=0,this.centerOfMass=Q.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=Q.zeros(),this.angularInertiaLocalFrame=$.identity()}static ball(t){let n=new uC(t);return new e(n)}static capsule(t,n){let r=new mC(t,n);return new e(r)}static segment(t,n){let r=new hC(t,n);return new e(r)}static triangle(t,n,r){let i=new gC(t,n,r);return new e(i)}static roundTriangle(t,n,r,i){let a=new _C(t,n,r,i);return new e(a)}static polyline(t,n){let r=new vC(t,n);return new e(r)}static voxels(t,n){let r=new yC(t,n);return new e(r)}static trimesh(t,n,r){let i=new bC(t,n,r);return new e(i)}static cuboid(t,n,r){let i=new fC(t,n,r);return new e(i)}static roundCuboid(t,n,r,i){let a=new pC(t,n,r,i);return new e(a)}static heightfield(t,n,r,i,a){let o=new CC(t,n,r,i,a);return new e(o)}static cylinder(t,n){let r=new wC(t,n);return new e(r)}static roundCylinder(t,n,r){let i=new TC(t,n,r);return new e(i)}static cone(t,n){let r=new EC(t,n);return new e(r)}static roundCone(t,n,r){let i=new DC(t,n,r);return new e(i)}static convexHull(t){let n=new xC(t,null);return new e(n)}static convexMesh(t,n){let r=new xC(t,n);return new e(r)}static roundConvexHull(t,n){let r=new SC(t,null,n);return new e(r)}static roundConvexMesh(t,n,r){let i=new SC(t,n,r);return new e(i)}setTranslation(e,t,n){if(typeof e!=`number`||typeof t!=`number`||typeof n!=`number`)throw TypeError(`The translation components must be numbers.`);return this.translation={x:e,y:t,z:n},this}setRotation(e){return $.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setContactSkin(e){return this.contactSkin=e,this}setDensity(e){return this.massPropsMode=KC.Density,this.density=e,this}setMass(e){return this.massPropsMode=KC.Mass,this.mass=e,this}setMassProperties(e,t,n,r){return this.massPropsMode=KC.MassProps,this.mass=e,Q.copy(this.centerOfMass,t),Q.copy(this.principalAngularInertia,n),$.copy(this.angularInertiaLocalFrame,r),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}},JC=class{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(e){this.raw=e||new ju,this.map=new xS,e&&e.forEachColliderHandle(e=>{this.map.set(e,new GC(this,e,null))})}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error(`Cannot create a collider with a parent rigid-body handle that is not a number.`);let i=t.shape.intoRaw(),a=Q.intoRaw(t.translation),o=$.intoRaw(t.rotation),s=Q.intoRaw(t.centerOfMass),c=Q.intoRaw(t.principalAngularInertia),l=$.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,i,a,o,t.massPropsMode,t.mass,s,c,l,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,t.contactSkin,r,r?n:0,e.raw);i.free(),a.free(),o.free(),s.free(),c.free(),l.free();let d=r?e.get(n):null,f=new GC(this,u,d,t.shape);return this.map.set(u,f),f}remove(e,t,n,r){this.raw.remove(e,t.raw,n.raw,r),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}},YC=class{world;eventQueue;hitHandlers=new Map;constructor(){this.world=new LC(ol),this.eventQueue=new BC(!0)}step(e){this.world.timestep=e,this.world.step(this.eventQueue),this.eventQueue.drainCollisionEvents((e,t,n)=>{n&&(this.hitHandlers.get(e)?.(t),this.hitHandlers.get(t)?.(e))})}onHit(e,t){e.setActiveEvents(RC.COLLISION_EVENTS),this.hitHandlers.set(e.handle,t)}createFixedCuboid(e,t,n,r){let i=this.world.createRigidBody(bS.fixed().setTranslation(t.x,t.y,t.z).setRotation(n));return this.world.createCollider(qC.cuboid(e.x,e.y,e.z).setFriction(r.friction).setRestitution(r.restitution),i),i}createBall(e,t,n,r){let i=this.world.createRigidBody(bS.dynamic().setTranslation(n.x,n.y,n.z).setCcdEnabled(!0));return this.world.createCollider(qC.ball(e).setMass(t).setFriction(r.friction).setRestitution(r.restitution),i),i}resetBody(e,t){e.setTranslation(t,!0),e.setRotation({x:0,y:0,z:0,w:1},!0),e.setLinvel({x:0,y:0,z:0},!0),e.setAngvel({x:0,y:0,z:0},!0)}},XC=class{renderer;playerRig;constructor(e,t){this.renderer=e,this.playerRig=t}init(){this.renderer,this.playerRig}},ZC={ArrowLeft:`flipperLeft`,ShiftLeft:`flipperLeft`,ArrowRight:`flipperRight`,ShiftRight:`flipperRight`,Space:`plunger`,ArrowDown:`plunger`,KeyR:`restart`,ArrowUp:`nudge`,KeyN:`nudge`},QC=class{down=new Set;constructor(){window.addEventListener(`keydown`,e=>{let t=ZC[e.code];t&&(e.preventDefault(),this.down.add(t))}),window.addEventListener(`keyup`,e=>{let t=ZC[e.code];t&&(e.preventDefault(),this.down.delete(t))}),window.addEventListener(`blur`,()=>this.down.clear()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.down.clear()})}isDown(e){return this.down.has(e)}},$C=`./`,ew={playfield:`${$C}images/playfield.png`,backglass:`${$C}images/backglass.png`,bumperCap:`${$C}images/bumper_cap_star.png`,cabinetSide:`${$C}images/cabinet_side_art.png`,woodFloor:`${$C}images/tex_wood_floor.png`,jadeWall:`${$C}images/tex_jade_stone_wall.png`,woodenDummy:`${$C}images/tex_wooden_dummy.png`,logo:`${$C}images/logo.png`,dmd:{bigDipper:`${$C}images/dmd_big_dipper.png`,cicada:`${$C}images/dmd_cicada.png`,mantis:`${$C}images/dmd_mantis.png`,rankDizi:`${$C}images/dmd_rank_dizi.png`,rankTudi:`${$C}images/dmd_rank_tudi.png`,rankShixiong:`${$C}images/dmd_rank_shixiong.png`,rankShifu:`${$C}images/dmd_rank_shifu.png`}},tw={music:{attract:`${$C}audio/music_attract.mp3`,play:`${$C}audio/music_play.mp3`,multiball:`${$C}audio/music_multiball.mp3`,wizard:`${$C}audio/music_wizard.mp3`},sfx:{flipper:`${$C}audio/sfx_flipper.mp3`,bumper:`${$C}audio/sfx_bumper.mp3`,star:`${$C}audio/sfx_star.mp3`,hook:`${$C}audio/sfx_hook.mp3`,drain:`${$C}audio/sfx_drain.mp3`,launch:`${$C}audio/sfx_launch.mp3`,cicada:`${$C}audio/sfx_cicada.mp3`,stingerHurryup:`${$C}audio/sfx_stinger_hurryup.mp3`},callouts:{bengbu:`${$C}audio/bengbu.mp3`,mantisFaengtZikade:`${$C}audio/mantis_fangt_zikade.mp3`,sterneInEinerLinie:`${$C}audio/sterne_in_einer_linie.mp3`,stehWiederAuf:`${$C}audio/steh_wieder_auf.mp3`,zeigMirDeinenWeg:`${$C}audio/zeig_mir_deinen_weg.mp3`,ununterbrochenWieMantis:`${$C}audio/ununterbrochen_wie_mantis.mp3`,wahreKaempfer:`${$C}audio/jetzt_zeigt_sich_wahre_kaempfer.mp3`}},nw=new ta,rw=new Map;function iw(e,t){let r=t?.repeat?`${e}@${t.repeat.join(`x`)}`:e,i=rw.get(r);if(i)return i;let a=nw.load(e);return a.colorSpace=Ve,a.anisotropy=8,t?.repeat&&(a.wrapS=n,a.wrapT=n,a.repeat.set(t.repeat[0],t.repeat[1])),rw.set(r,a),a}var aw={centerX:.2415,spawnZ:.5,minX:.22,minZ:.4},ow=[{cx:0,cz:-.55,halfLen:.28,yawDeg:90},{cx:-.27,cz:0,halfLen:.56,yawDeg:0},{cx:.27,cz:0,halfLen:.56,yawDeg:0},{cx:-.1675,cz:.55,halfLen:.0925,yawDeg:90},{cx:.1675,cz:.55,halfLen:.0925,yawDeg:90},{cx:.215,cz:.095,halfLen:.455,yawDeg:0},{cx:.195,cz:-.485,halfLen:.092,yawDeg:45},{cx:-.19,cz:.436,halfLen:.1025,yawDeg:51.3},{cx:.1665,cz:.436,halfLen:.0853,yawDeg:-41.4}],sw=class{group;tiltQuat;invTiltQuat;constructor(e,t){this.tiltQuat=new mt().setFromEuler(new qt(sl,0,0)),this.invTiltQuat=this.tiltQuat.clone().invert(),this.group=new fn,this.group.quaternion.copy(this.tiltQuat),e.add(this.group),this.buildFloor(t);for(let e of ow)this.buildWall(t,e)}localToWorld(e){return e.clone().applyQuaternion(this.tiltQuat)}worldToLocal(e){return new B(e.x,e.y,e.z).applyQuaternion(this.invTiltQuat)}localYawToWorld(e){let t=new mt().setFromEuler(new qt(0,e,0));return this.tiltQuat.clone().multiply(t)}get surfaceY(){return cl.y}buildFloor(e){e.createFixedCuboid(cl,{x:0,y:0,z:0},this.tiltQuat,{friction:ll,restitution:ul});let t=new U(new hi(cl.x*2,cl.y*2,cl.z*2),new ji({map:iw(ew.woodFloor),roughness:.85}));t.receiveShadow=!0,this.group.add(t);let n=new U(new vi(cl.x*2,cl.z*2),new ji({map:iw(ew.playfield),roughness:.55}));n.rotation.x=-Math.PI/2,n.position.y=this.surfaceY+4e-4,n.receiveShadow=!0,this.group.add(n);let r=new U(new hi(cl.x*2+.05,.09,cl.z*2+.05),new ji({map:iw(ew.woodFloor),roughness:.85}));r.position.y=-.055,this.group.add(r);for(let e of[-1,1]){let t=new U(new vi(cl.z*2+.05,.09),new ji({map:iw(ew.cabinetSide),roughness:.7}));t.position.set(e*(cl.x+.0255),-.055,0),t.rotation.y=e*Math.PI/2,this.group.add(t)}}buildWall(e,t){let n=t.yawDeg*Math.PI/180,r=new B(t.cx,this.surfaceY+_l,t.cz),i={x:vl,y:_l,z:t.halfLen};e.createFixedCuboid(i,this.localToWorld(r),this.localYawToWorld(n),{friction:hl,restitution:gl});let a=new U(new hi(i.x*2,i.y*2,i.z*2),new ji({map:iw(ew.jadeWall,{repeat:[Math.max(1,t.halfLen*16),.4]}),roughness:.6}));a.position.copy(r),a.rotation.y=n,a.castShadow=!0,a.receiveShadow=!0,this.group.add(a)}},cw=Math.PI/180,lw=class{side;body;mesh;joint;invTiltQuat;restAngle;upAngle;pressed=!1;constructor(e,t,n,r,i){this.side=r,this.invTiltQuat=n.tiltQuat.clone().invert();let a=r===`left`?1:-1;this.restAngle=-a*28*cw,this.upAngle=a*20*cw;let o=n.localToWorld(new B(i.x,n.surfaceY+bl+.001,i.z)),s=n.localYawToWorld(this.restAngle),c=e.world.createRigidBody(bS.fixed().setTranslation(o.x,o.y,o.z).setRotation(n.tiltQuat));this.body=e.world.createRigidBody(bS.dynamic().setTranslation(o.x,o.y,o.z).setRotation(s).setCcdEnabled(!0));let l=yl/2,u=new mt().setFromEuler(new qt(0,0,Math.PI/2));e.world.createCollider(qC.capsule(l,bl).setTranslation(a*l,0,0).setRotation(u).setMass(xl).setFriction(Cl).setRestitution(wl),this.body);let d=IS.revolute({x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:1,z:0});this.joint=e.world.createImpulseJoint(d,c,this.body,!0),this.joint.setLimits(Math.min(this.restAngle,this.upAngle)-.02,Math.max(this.restAngle,this.upAngle)+.02),this.applyMotor(),this.mesh=new fn;let f=new U(new hi(yl,bl*2,.02),new ji({color:9051935,roughness:.35,metalness:.1}));f.position.x=a*l,f.castShadow=!0;let p=new U(new _i(.014,.014,bl*2,16),new ji({color:13214247,metalness:.85,roughness:.3}));p.castShadow=!0,this.mesh.add(f,p),t.add(this.mesh)}setPressed(e){e!==this.pressed&&(this.pressed=e,this.applyMotor())}get angle(){let e=this.body.rotation(),t=this.invTiltQuat.clone().multiply(new mt(e.x,e.y,e.z,e.w));return 2*Math.atan2(t.y,t.w)}applyMotor(){this.joint.configureMotorPosition(this.pressed?this.upAngle:this.restAngle,Sl,150),this.body.wakeUp()}},uw=class{table;balls;charge=0;onFire;wasHeld=!1;mesh;meshBaseZ=.545;launchDirWorld;constructor(e,t){this.table=e,this.balls=t,this.launchDirWorld=e.localToWorld(new B(0,0,-1)).normalize(),this.mesh=new U(new hi(.026,.024,.04),new ji({color:11569726,metalness:.8,roughness:.35})),this.mesh.position.set(aw.centerX,e.surfaceY+.012,this.meshBaseZ),this.mesh.castShadow=!0,e.group.add(this.mesh)}update(e,t){t?this.charge=Math.min(1,this.charge+e/Dl):this.wasHeld&&(this.fire(),this.charge=0),this.wasHeld=t,this.mesh.position.z=this.meshBaseZ+this.charge*.025}fire(){let e=this.ballInLane();if(!e)return;let t=Tl+this.charge*(El-Tl),n=this.launchDirWorld.clone().multiplyScalar(fl*t);e.body.applyImpulse(n,!0),this.onFire?.(this.charge)}ballInLane(){return this.balls.list.find(e=>{let t=this.table.worldToLocal(e.body.translation());return t.x>aw.minX&&t.z>aw.minZ})}},dw=class{balls;cooldown=0;flash=0;capMaterial;centerWorld;tableNormal;constructor(e,t,n,r,i){this.balls=r;let a=new B(n.x,t.surfaceY+.02,n.z);this.centerWorld=t.localToWorld(a),this.tableNormal=t.localToWorld(new B(0,1,0)).normalize();let o=e.world.createRigidBody(bS.fixed().setTranslation(this.centerWorld.x,this.centerWorld.y,this.centerWorld.z).setRotation(t.tiltQuat)),s=e.world.createCollider(qC.cylinder(.02,kl).setRestitution(Al).setFriction(.1),o);e.onHit(s,e=>{let t=this.balls.byCollider(e);!t||this.cooldown>0||(this.cooldown=Ol,this.flash=1,this.kick(t),i(t.body.translation()))}),this.capMaterial=new ji({color:8003359,emissive:16763989,emissiveIntensity:0,roughness:.45});let c=new U(new _i(kl,kl,.03,24),new ji({color:11569726,metalness:.8,roughness:.35}));c.position.copy(a),c.castShadow=!0;let l=new U(new _i(kl*1.35,kl*1.1,.012,24),this.capMaterial);l.position.copy(a).y+=.022,l.castShadow=!0;let u=new U(new gi(kl*1.28,24),new ji({map:iw(ew.bumperCap),roughness:.4}));u.rotation.x=-Math.PI/2,u.position.copy(a).y+=.0285,t.group.add(c,l,u)}kick(e){let t=e.body.translation(),n=new B(t.x-this.centerWorld.x,t.y-this.centerWorld.y,t.z-this.centerWorld.z);n.addScaledVector(this.tableNormal,-n.dot(this.tableNormal)),!(n.lengthSq()<1e-10)&&(n.normalize().multiplyScalar(fl*jl),e.body.applyImpulse(n,!0))}update(e){this.cooldown>0&&(this.cooldown-=e),this.flash>0&&(this.flash=Math.max(0,this.flash-e*6),this.capMaterial.emissiveIntensity=this.flash*2.5)}},fw=class{balls;cooldown=0;flash=0;material;kickImpulse;kickDir;constructor(e,t,n,r,i,a,o,s){this.balls=o;let c=i*Math.PI/180,l=new B(n.x,t.surfaceY+_l,n.z);this.kickDir=t.localToWorld(new B(a.x,0,a.z)).normalize(),this.kickImpulse=this.kickDir.clone().multiplyScalar(fl*Ml);let u=t.localToWorld(l),d=e.world.createRigidBody(bS.fixed().setTranslation(u.x,u.y,u.z).setRotation(t.localYawToWorld(c))),f=e.world.createCollider(qC.cuboid(.006,_l,r).setRestitution(Nl).setFriction(.2),d);e.onHit(f,e=>{let t=this.balls.byCollider(e);!t||this.cooldown>0||-t.prevVel.dot(this.kickDir)<.5||(this.cooldown=Ol,this.flash=1,t.body.applyImpulse(this.kickImpulse,!0),s(t.body.translation()))}),this.material=new ji({color:7216156,emissive:8382112,emissiveIntensity:0,roughness:.7});let p=new U(new hi(.012,_l*2,r*2),this.material);p.position.copy(l),p.rotation.y=c,p.castShadow=!0,t.group.add(p)}update(e){this.cooldown>0&&(this.cooldown-=e),this.flash>0&&(this.flash=Math.max(0,this.flash-e*6),this.material.emissiveIntensity=this.flash*2)}},pw=[{x:-.24,z:-.37,name:`Alkaid`},{x:-.18,z:-.42,name:`Mizar`},{x:-.12,z:-.46,name:`Alioth`},{x:-.05,z:-.49,name:`Megrez`},{x:0,z:-.41,name:`Phecda`},{x:.07,z:-.43,name:`Merak`},{x:.06,z:-.5,name:`Dubhe`}],mw={x:.011,y:.015,z:.004},hw=class{onStarHit;onComplete;lit=pw.map(()=>!1);materials=[];centersWorld=[];constructor(e,t,n,r){this.onStarHit=n,this.onComplete=r,pw.forEach((n,r)=>{let i=new B(n.x,t.surfaceY+mw.y,n.z),a=t.localToWorld(i);this.centersWorld.push(a);let o=e.world.createRigidBody(bS.fixed().setTranslation(a.x,a.y,a.z).setRotation(t.tiltQuat)),s=e.world.createCollider(qC.cuboid(mw.x,mw.y,mw.z).setRestitution(gl).setFriction(hl),o);e.onHit(s,()=>this.handleHit(r));let c=new ji({color:13214247,metalness:.75,roughness:.3,emissive:16767334,emissiveIntensity:0});this.materials.push(c);let l=new U(new hi(mw.x*2,mw.y*2,mw.z*2),c);l.position.copy(i),l.castShadow=!0,t.group.add(l)})}handleHit(e){let t=this.lit[e];t||(this.lit[e]=!0,this.materials[e].emissiveIntensity=2),this.onStarHit(e,pw[e].name,t),!t&&this.lit.every(Boolean)&&this.onComplete()}lightStar(e){this.lit[e]||this.handleHit(e)}worldPos(e){return this.centersWorld[e]}get litCount(){return this.lit.filter(Boolean).length}get isComplete(){return this.lit.every(Boolean)}resetAll(){this.lit.fill(!1);for(let e of this.materials)e.emissiveIntensity=0}},gw=class e{table;body;mesh;angle=0;cooldown=0;flash=0;trunkMaterial;centerWorld;static ARM_HALF_LEN=.032;static ARM_OFFSET=.05;static ARM_HALF={x:.008,y:.012};constructor(t,n,r,i,a){this.table=r;let o=new B(i.x,r.surfaceY+.014,i.z);this.centerWorld=r.localToWorld(o),this.body=t.world.createRigidBody(bS.kinematicPositionBased().setTranslation(this.centerWorld.x,this.centerWorld.y,this.centerWorld.z).setRotation(r.tiltQuat));let s=e=>t.onHit(e,()=>{this.cooldown>0||(this.cooldown=Ol,this.flash=1,a())});s(t.world.createCollider(qC.cylinder(.035,.018).setTranslation(0,.02,0).setRestitution(.3).setFriction(.3),this.body));for(let n=0;n<3;n++){let r=n*2*Math.PI/3,i=new mt().setFromEuler(new qt(0,r,0)),a=new B(e.ARM_OFFSET,0,0).applyQuaternion(i);s(t.world.createCollider(qC.cuboid(e.ARM_HALF_LEN,e.ARM_HALF.y,e.ARM_HALF.x).setTranslation(a.x,a.y,a.z).setRotation(i).setRestitution(.4).setFriction(.3),this.body))}this.trunkMaterial=new ji({map:iw(ew.woodenDummy),emissive:16746564,emissiveIntensity:0,roughness:.65}),this.mesh=new fn;let c=new U(new _i(.018,.02,.09,20),this.trunkMaterial);c.position.y=.025,c.castShadow=!0,this.mesh.add(c);let l=new ji({map:iw(ew.woodenDummy),roughness:.7});for(let t=0;t<3;t++){let n=t*2*Math.PI/3,r=new U(new hi(e.ARM_HALF_LEN*2,e.ARM_HALF.y*2,e.ARM_HALF.x*2),l);r.position.set(Math.cos(n)*e.ARM_OFFSET,0,-Math.sin(n)*e.ARM_OFFSET),r.rotation.y=n,r.castShadow=!0,this.mesh.add(r)}n.add(this.mesh)}update(e){this.angle+=Pl*e;let t=this.table.localYawToWorld(this.angle);this.body.setNextKinematicRotation(t),this.cooldown>0&&(this.cooldown-=e),this.flash>0&&(this.flash=Math.max(0,this.flash-e*5),this.trunkMaterial.emissiveIntensity=this.flash*1.5)}},_w=class e{table;balls;cooldown=0;flash=0;markerMaterial;static EJECT_POS={x:Il.x-.01,z:Il.z+.06};static EJECT_DIR={x:-.45,z:.89};static EJECT_SPEED=1;constructor(e,t,n,r){this.table=t,this.balls=n;let i=[{cx:Il.x,cz:Il.z-.028,halfLen:.034,yawDeg:60},{cx:Il.x-.03,cz:Il.z-.008,halfLen:.04,yawDeg:0},{cx:Il.x+.03,cz:Il.z+.0085,halfLen:.0235,yawDeg:0}];for(let n of i){let r=n.yawDeg*Math.PI/180,i=new B(n.cx,t.surfaceY+_l,n.cz);e.createFixedCuboid({x:vl,y:_l,z:n.halfLen},t.localToWorld(i),t.localYawToWorld(r),{friction:hl,restitution:gl});let a=new U(new hi(vl*2,_l*2,n.halfLen*2),new ji({color:4156239,roughness:.45,metalness:.2}));a.position.copy(i),a.rotation.y=r,a.castShadow=!0,t.group.add(a)}let a=new B(Il.x,t.surfaceY+.015,Il.z-.01),o=t.localToWorld(a),s=e.world.createRigidBody(bS.fixed().setTranslation(o.x,o.y,o.z).setRotation(t.tiltQuat)),c=e.world.createCollider(qC.cylinder(.02,.014).setSensor(!0),s);e.onHit(c,e=>{let t=this.balls.byCollider(e);!t||this.cooldown>0||(this.cooldown=1,this.flash=1,r(t))}),this.markerMaterial=new ji({color:11569726,metalness:.85,roughness:.3,emissive:6750088,emissiveIntensity:0});let l=new U(new bi(.016,.005,10,20,Math.PI*1.3),this.markerMaterial);l.position.set(Il.x,t.surfaceY+.05,Il.z-.02),l.rotation.z=Math.PI*.9,t.group.add(l)}eject(t){let n=this.table.localToWorld(new B(e.EJECT_POS.x,this.table.surfaceY+.016,e.EJECT_POS.z));t.body.setTranslation(n,!0);let r=this.table.localToWorld(new B(e.EJECT_DIR.x,0,e.EJECT_DIR.z)).normalize().multiplyScalar(e.EJECT_SPEED);t.body.setLinvel(r,!0)}releaseSpawn(){return{pos:this.table.localToWorld(new B(e.EJECT_POS.x,this.table.surfaceY+.016,e.EJECT_POS.z)),vel:this.table.localToWorld(new B(e.EJECT_DIR.x,0,e.EJECT_DIR.z)).normalize().multiplyScalar(e.EJECT_SPEED)}}update(e){this.cooldown>0&&(this.cooldown-=e),this.flash>0&&(this.flash=Math.max(0,this.flash-e*4),this.markerMaterial.emissiveIntensity=this.flash*2)}},vw=class{physics;scene;table;balls=[];byHandle=new Map;geometry;material;constructor(e,t,n){this.physics=e,this.scene=t,this.table=n,this.geometry=new yi(dl,32,24),this.material=new ji({color:16777215,metalness:1,roughness:.08,envMapIntensity:1.3})}get count(){return this.balls.length}get list(){return this.balls}byCollider(e){return this.byHandle.get(e)}spawnWorld(e,t){let n=this.physics.createBall(dl,fl,e,{friction:ml,restitution:pl});t&&n.setLinvel(t,!0);let r=n.collider(0),i=new U(this.geometry,this.material);i.castShadow=!0,this.scene.add(i);let a={body:n,collider:r,mesh:i,prevVel:new B};return this.balls.push(a),this.byHandle.set(r.handle,a),a}spawnInLane(){return this.spawnWorld(this.table.localToWorld(new B(aw.centerX,this.table.surfaceY+dl+.002,aw.spawnZ)))}remove(e){let t=this.balls.indexOf(e);t<0||(this.balls.splice(t,1),this.byHandle.delete(e.collider.handle),this.physics.world.removeRigidBody(e.body),this.scene.remove(e.mesh))}clearAll(){for(let e of[...this.balls])this.remove(e)}snapshotVelocities(){for(let e of this.balls){let t=e.body.linvel();e.prevVel.set(t.x,t.y,t.z)}}drainSweep(){let e=0;for(let t of[...this.balls]){let n=t.body.translation().y;(n<-.3||Number.isNaN(n))&&(this.remove(t),e++)}return e}syncMeshes(){for(let e of this.balls){let t=e.body.translation(),n=e.body.rotation();e.mesh.position.set(t.x,t.y,t.z),e.mesh.quaternion.set(n.x,n.y,n.z,n.w)}}},yw=class{hooks;phase=`attract`;ballsLeft=0;multiball=!1;drainTimer=-1;constructor(e){this.hooks=e}get ballNumber(){return Math.max(1,3-this.ballsLeft+1)}startGame(){this.ballsLeft=3,this.multiball=!1,this.drainTimer=-1,this.hooks.spawnBall(),this.setPhase(`ballLaunch`)}ballLaunched(){this.phase===`ballLaunch`&&this.setPhase(`play`)}lockServed(){this.hooks.spawnBall(),this.setPhase(`ballLaunch`)}allBallsLost(){this.phase!==`play`&&this.phase!==`ballLaunch`||(this.multiball=!1,this.drainTimer=Wl,this.setPhase(`drain`))}update(e){this.phase===`drain`&&(this.drainTimer-=e,!(this.drainTimer>=0)&&(this.ballsLeft--,this.ballsLeft>0?(this.hooks.spawnBall(),this.setPhase(`ballLaunch`)):this.setPhase(`gameOver`)))}toAttract(){this.setPhase(`attract`)}setPhase(e){e!==this.phase&&(this.phase=e,this.hooks.onPhaseChange(e))}},bw=class{score=0;chain=0;comboTimeLeft=0;get multiplier(){return Math.min(1+Math.floor(this.chain/3),5)}hit(e){this.chain=this.comboTimeLeft>0?this.chain+1:1,this.comboTimeLeft=2;let t=e*this.multiplier;return this.score+=t,t}addBonus(e){this.score+=e}update(e){this.comboTimeLeft>0&&(this.comboTimeLeft-=e,this.comboTimeLeft<=0&&this.breakCombo())}breakCombo(){this.chain=0,this.comboTimeLeft=0}reset(){this.score=0,this.breakCombo()}},xw=[{id:`bengbu`,title:`BENGBU`,cn:`崩步`,duration:45,goal:3,award:8e3},{id:`cicada`,title:`CICADA HUNT`,cn:`螳螂捕蝉`,duration:30,goal:6,award:1e4},{id:`seven`,title:`SEVEN STARS`,cn:`七星連珠`,duration:75,goal:7,award:25e3},{id:`hookpull`,title:`HOOK & PULL`,cn:`勾摟採掛`,duration:40,goal:1,award:12e3},{id:`iron`,title:`IRON BODY`,cn:`鐵布衫`,duration:25,goal:1,award:0}],Sw=2e4,Cw=800,ww=2e3,Tw=class{score;cb;completed=new Set;active=null;timeLeft=0;progress=0;ironValue=0;constructor(e,t){this.score=e,this.cb=t}get activeId(){return this.active?.id??null}get completedCount(){return this.completed.size}get allCompleted(){return this.completed.size>=xw.length}tryStartNext(){if(this.active)return!1;let e=xw.find(e=>!this.completed.has(e.id));return e?(this.active=e,this.timeLeft=e.duration,this.progress=0,this.ironValue=Sw,this.cb.onStart(this.info()),!0):!1}handleEvent(e){if(!this.active)return;let t=this.active.id;t===`bengbu`&&e===`dummy`||t===`cicada`&&e===`bumper`||t===`hookpull`&&e===`hook`?(this.progress++,this.progress>=this.active.goal&&this.succeed()):t===`iron`&&e===`dummy`&&this.succeed()}handleStarHit(e){this.active?.id===`seven`&&(e===this.progress?(this.progress++,this.progress>=this.active.goal&&this.succeed()):e>this.progress&&this.progress>0?(this.progress=0,this.cb.onSequenceBroken()):e!==0&&this.progress===0&&this.cb.onSequenceBroken())}update(e){if(this.active&&(this.active.id===`iron`&&(this.ironValue=Math.max(ww,this.ironValue-Cw*e)),this.timeLeft-=e,this.timeLeft<=0)){let e=this.info();this.active=null,this.cb.onFail(e)}}info(){if(!this.active)return null;let e=this.active,t=e.id===`bengbu`?`HOLZMANN ${this.progress}/${e.goal}`:e.id===`cicada`?`ZIKADEN ${this.progress}/${e.goal}`:e.id===`seven`?`STERN ${this.progress+1}/7 IN FOLGE`:e.id===`hookpull`?`TRIFF DEN HAKEN`:`${Math.round(this.ironValue)} — HOLZMANN!`;return{id:e.id,title:e.title,cn:e.cn,detail:t,timeLeft:this.timeLeft}}resetAll(){this.completed.clear(),this.active=null}succeed(){let e=this.active,t=e.id===`iron`?Math.round(this.ironValue):e.award,n=this.info();this.score.addBonus(t),this.completed.add(e.id),this.active=null,this.cb.onSuccess(n,t),e.id===`hookpull`&&this.cb.onAddBall()}},Ew={dizi:{cn:`弟子`,title:`DIZI`,dmdImage:ew.dmd.rankDizi},tudi:{cn:`徒弟`,title:`TUDI`,dmdImage:ew.dmd.rankTudi},shixiong:{cn:`師兄`,title:`SHIXIONG`,dmdImage:ew.dmd.rankShixiong},shifu:{cn:`師父`,title:`SIFU`,dmdImage:ew.dmd.rankShifu}},Dw=[`dizi`,`tudi`,`shixiong`,`shifu`],Ow=class{onRankUp;rank=`dizi`;constructor(e){this.onRankUp=e}get info(){return Ew[this.rank]}setModesCompleted(e){e>=5?this.promoteTo(`shixiong`):e>=2&&this.promoteTo(`tudi`)}wizardWon(){this.promoteTo(`shifu`)}reset(){this.rank=`dizi`}promoteTo(e){Dw.indexOf(e)<=Dw.indexOf(this.rank)||(this.rank=e,this.onRankUp(e))}},kw=`sevenstar.highscores`,Aw=10,jw=class{entries=[];constructor(){try{let e=localStorage.getItem(kw);e&&(this.entries=JSON.parse(e))}catch{this.entries=[]}}get best(){return this.entries[0]?.score??0}get list(){return this.entries}submit(e,t){if(e<=0)return null;let n={score:e,rank:t,date:new Date().toISOString().slice(0,10)};this.entries.push(n),this.entries.sort((e,t)=>t.score-e.score),this.entries=this.entries.slice(0,Aw);let r=this.entries.indexOf(n);try{localStorage.setItem(kw,JSON.stringify(this.entries))}catch{}return r>=0?r+1:null}},Mw=class{el;constructor(e){this.el=e}render(e){let t=`★`.repeat(e.starsLit).padEnd(7,`☆`),n=e.chain>1?`x${e.multiplier} (${e.chain})  ${Nw(e.comboTimeLeft/2)}`:`—`,r=e.phase===`attract`?`ATTRACT — Leertaste startet`:e.phase===`gameOver`?`GAME OVER — R für Neustart`:(e.tilted?`TILT! `:``)+`Ball ${e.ballNumber}/3`+(e.multiball?`   MULTIBALL (${e.ballsInPlay})`:``)+(e.locks>0?`   Locks ${e.locks}/3`:``),i=e.mode&&e.mode.timeLeft>0?` · ${Math.ceil(e.mode.timeLeft)}s`:``,a=e.mode?`Form: ${e.mode.cn} ${e.mode.title} · ${e.mode.detail}${i}`:`Formen: ${e.completedModes}/5 · alle 7 Sterne schalten die nächste frei`;this.el.textContent=`SEVEN STAR\nScore ${e.score.toLocaleString(`de-CH`)}   ${r}\nRang ${e.rankCn} ${e.rankTitle}   七星 ${t}\nCombo ${n}\n${a}\nPlunger ${Nw(e.plungerCharge)}   ${e.fps.toFixed(0)} fps`}};function Nw(e){let t=Math.max(0,Math.min(10,Math.round(e*10)));return`█`.repeat(t).padEnd(10,`░`)}var Pw=128,Fw=32,Iw=5,Lw=class{mesh;src;sctx;out;octx;texture;clock=0;flashLines=null;flashImg=null;flashUntil=0;attractImages=[];imageCache=new Map;constructor(){this.src=document.createElement(`canvas`),this.src.width=Pw,this.src.height=Fw,this.sctx=this.src.getContext(`2d`,{willReadFrequently:!0}),this.out=document.createElement(`canvas`),this.out.width=Pw*Iw,this.out.height=Fw*Iw,this.octx=this.out.getContext(`2d`),this.texture=new di(this.out),this.texture.colorSpace=Ve,this.mesh=new fn;let e=new U(new vi(.56,.14),new Tr({map:this.texture,toneMapped:!1})),t=new U(new hi(.6,.175,.02),new ji({color:2500140,roughness:.9}));t.position.z=-.011,this.mesh.add(t,e)}setAttractImages(e){this.attractImages=e.map(e=>{let t=new Image;return t.src=e,t})}flash(e,t=1.6){this.flashLines=e,this.flashImg=null,this.flashUntil=this.clock+t}flashImage(e,t=2.5){let n=this.imageCache.get(e);n||(n=new Image,n.src=e,this.imageCache.set(e,n)),this.flashImg=n,this.flashLines=null,this.flashUntil=this.clock+t}update(e,t){this.clock+=e;let n=this.sctx;n.fillStyle=`#000`,n.fillRect(0,0,Pw,Fw),n.fillStyle=`#fff`,n.textBaseline=`middle`,this.clock<this.flashUntil&&(this.flashLines||this.flashImg)?this.flashImg?this.drawImageFit(this.flashImg):this.drawCentered(this.flashLines):(this.flashLines=null,this.flashImg=null,this.drawPhase(t)),this.renderDots()}drawPhase(e){let t=this.sctx;switch(e.phase){case`attract`:{let n=2+this.attractImages.length,r=Math.floor(this.clock/4)%n,i=r>0&&r<=this.attractImages.length?this.attractImages[r-1]:null;i&&i.complete&&i.naturalWidth>0?this.drawImageFit(i):r===n-1&&e.bestScore>0?(t.font=`9px monospace`,t.textAlign=`center`,t.fillText(`BESTER MEISTER`,Pw/2,8),t.font=`bold 13px monospace`,t.fillText(e.bestScore.toLocaleString(`de-CH`),Pw/2,20)):(t.font=`bold 14px monospace`,t.textAlign=`center`,t.fillText(`SEVEN STAR`,Pw/2,9),t.font=`9px monospace`,t.fillText(`七星螳螂拳`,Pw/2,20)),Math.floor(this.clock*1.6)%2==0&&(t.font=`8px monospace`,t.textAlign=`center`,t.fillText(`LEERTASTE = START`,Pw/2,28));break}case`ballLaunch`:t.font=`bold 12px monospace`,t.textAlign=`center`,t.fillText(`BALL ${e.ballNumber}/3`,Pw/2,10),t.font=`8px monospace`,t.fillText(`PLUNGER ZIEHEN`,Pw/2,24);break;case`play`:{if(e.tilted){t.font=`bold 16px monospace`,t.textAlign=`center`,t.fillText(`T I L T !`,Pw/2,12),t.font=`8px monospace`,t.fillText(`WARTE AUF DEN NÄCHSTEN BALL`,Pw/2,26);break}t.font=`bold 13px monospace`,t.textAlign=`right`,t.fillText(e.score.toLocaleString(`de-CH`),Pw-2,8),t.font=`8px monospace`,t.textAlign=`left`;let n=`*`.repeat(e.starsLit).padEnd(7,`.`);if(t.fillText(n,2,8),e.mode){t.textAlign=`left`;let n=e.mode.timeLeft>0?` ${Math.ceil(e.mode.timeLeft)}s`:``;t.fillText(`${e.mode.title}${n}`,2,19),t.fillText(e.mode.detail,2,28)}else e.multiball&&Math.floor(this.clock*2)%2==0?t.fillText(`MULTIBALL!`,2,19):e.locks>0&&t.fillText(`LOCK ${e.locks}/3`,2,19),e.comboMult>1&&(t.font=`bold 10px monospace`,t.fillText(`COMBO x${e.comboMult}`,2,28));break}case`drain`:this.drawCentered([`BALL VERLOREN`]);break;case`gameOver`:t.font=`bold 11px monospace`,t.textAlign=`center`,t.fillText(`GAME OVER`,Pw/2,7),t.font=`9px monospace`,t.fillText(e.score.toLocaleString(`de-CH`),Pw/2,18),t.font=`8px monospace`,t.fillText(`RANG: ${e.rankCn}`,Pw/2,28);break}}drawImageFit(e){if(!e.complete||e.naturalWidth===0)return;let t=Fw/e.naturalHeight,n=e.naturalWidth*t;this.sctx.drawImage(e,(Pw-n)/2,0,n,Fw)}drawCentered(e){let t=this.sctx;t.textAlign=`center`;let n=Fw/(e.length+1);e.forEach((e,r)=>{this.fitFont(e,r===0?13:9,r===0),t.fillText(e,Pw/2,n*(r+1))})}fitFont(e,t,n){let r=this.sctx;for(let i=t;i>=6;i--)if(r.font=`${n?`bold `:``}${i}px monospace`,r.measureText(e).width<=Pw-4)return}renderDots(){let e=this.sctx.getImageData(0,0,Pw,Fw).data,t=this.octx;t.fillStyle=`#140a02`,t.fillRect(0,0,this.out.width,this.out.height);for(let n=0;n<Fw;n++)for(let r=0;r<Pw;r++){let i=e[(n*Pw+r)*4]/255;i<.04||(t.fillStyle=`rgba(255, ${Math.round(140+60*i)}, 30, ${.25+.75*i})`,t.beginPath(),t.arc(r*Iw+Iw/2,n*Iw+Iw/2,Iw*.38,0,Math.PI*2),t.fill())}this.texture.needsUpdate=!0}},Rw=.45,zw=.9,Bw=1,Vw=1.2,Hw=class{ctx=null;musicGain;sfxGain;voiceGain;buffers=new Map;current=null;desiredState=`attract`;voiceSource=null;get debugInfo(){return{unlocked:!!this.ctx,buffersLoaded:this.buffers.size,musicState:this.current?.state??null}}unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}this.ctx=new AudioContext;let e=this.ctx.createGain();e.gain.value=.9,e.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=Rw,this.musicGain.connect(e),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=zw,this.sfxGain.connect(e),this.voiceGain=this.ctx.createGain(),this.voiceGain.gain.value=Bw,this.voiceGain.connect(e),this.preload()}setMusicState(e){this.desiredState=e,this.applyMusic()}playSfx(e,t){if(!this.ctx)return;let n=this.buffers.get(tw.sfx[e]);if(!n)return;let r=this.ctx.createBufferSource();r.buffer=n,r.playbackRate.value=(t?.rate??1)*(.96+Math.random()*.08);let i=this.ctx.createGain();i.gain.value=t?.volume??1,r.connect(i),i.connect(this.sfxGain),r.start()}playCallout(e){if(!this.ctx)return;let t=this.buffers.get(tw.callouts[e]);if(!t)return;if(this.voiceSource)try{this.voiceSource.stop()}catch{}let n=this.ctx.createBufferSource();n.buffer=t,n.connect(this.voiceGain),n.start(),this.voiceSource=n,n.onended=()=>{this.voiceSource===n&&(this.voiceSource=null)}}async preload(){let e=[...Object.values(tw.music),...Object.values(tw.sfx),...Object.values(tw.callouts)];await Promise.all(e.map(async e=>{try{let t=await(await fetch(e)).arrayBuffer();this.buffers.set(e,await this.ctx.decodeAudioData(t))}catch{console.warn(`AudioManager: konnte ${e} nicht laden`)}})),this.applyMusic()}applyMusic(){if(!this.ctx||this.current?.state===this.desiredState)return;let e=this.desiredState===`wizard`?tw.music.wizard:tw.music[this.desiredState],t=this.buffers.get(e);if(!t)return;let n=this.ctx.currentTime;if(this.current){let e=this.current;e.gain.gain.setValueAtTime(e.gain.gain.value,n),e.gain.gain.linearRampToValueAtTime(0,n+Vw),e.source.stop(n+Vw+.05)}let r=this.ctx.createBufferSource();r.buffer=t,r.loop=!0;let i=this.ctx.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(1,n+Vw),r.connect(i),i.connect(this.musicGain),r.start(n),this.current={state:this.desiredState,source:r,gain:i}}},Uw=class{particles=[];max;gravity;geometry;positions;colors;dirty=!1;constructor(e,t={}){this.max=t.max??256,this.gravity=t.gravity??2.5,this.positions=new Float32Array(this.max*3),this.colors=new Float32Array(this.max*3),this.geometry=new mr,this.geometry.setAttribute(`position`,new $n(this.positions,3)),this.geometry.setAttribute(`color`,new $n(this.colors,3)),this.geometry.setDrawRange(0,0);let n=new ri({size:t.size??.006,vertexColors:!0,transparent:!0,opacity:.9,blending:2,depthWrite:!1}),r=new ci(this.geometry,n);r.frustumCulled=!1,e.add(r)}burst(e,t,n=14,r=.5,i=.5){let a=new H(t);for(let t=0;t<n;t++){this.particles.length>=this.max&&this.particles.shift();let t=new B(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize();this.particles.push({pos:new B(e.x,e.y,e.z),vel:t.multiplyScalar(r*(.4+Math.random()*.8)),life:i*(.6+Math.random()*.6),maxLife:i,color:a.clone()})}}update(e){if(this.particles.length!==0){for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];if(n.life-=e,n.life<=0){this.particles.splice(t,1);continue}n.vel.y-=this.gravity*e,n.pos.addScaledVector(n.vel,e)}this.dirty=!0}}upload(){if(this.dirty){this.dirty=!1;for(let e=0;e<this.particles.length;e++){let t=this.particles[e];this.positions[e*3]=t.pos.x,this.positions[e*3+1]=t.pos.y,this.positions[e*3+2]=t.pos.z;let n=Math.max(0,t.life/t.maxLife);this.colors[e*3]=t.color.r*n,this.colors[e*3+1]=t.color.g*n,this.colors[e*3+2]=t.color.b*n}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.setDrawRange(0,this.particles.length)}}},Ww=document.querySelector(`#app`),Gw=document.querySelector(`#hud`),Kw=new Gl(Ww),qw=new YC,Jw=new QC;new XC(Kw.renderer,Kw.playerRig).init(),Kw.camera.position.set(0,.95,1.15),Kw.camera.lookAt(0,.05,-.05);var Yw=new ra(16771268,2365970,.55);Kw.scene.add(Yw);var Xw=new ba(16773597,1.7);Xw.position.set(.6,1.5,.4),Xw.castShadow=!0,Xw.shadow.mapSize.set(2048,2048),Xw.shadow.camera.near=.1,Xw.shadow.camera.far=4,Xw.shadow.camera.left=-.8,Xw.shadow.camera.right=.8,Xw.shadow.camera.top=.8,Xw.shadow.camera.bottom=-.8,Kw.scene.add(Xw);var Zw=new sw(Kw.scene,qw),Qw=new vw(qw,Kw.scene,Zw),$w=new lw(qw,Kw.scene,Zw,`left`,{x:-.095,z:.52}),eT=new lw(qw,Kw.scene,Zw,`right`,{x:.095,z:.52}),tT=new uw(Zw,Qw),nT=new bw,rT=new Mw(Gw),iT=new fn,aT=new U(new hi(.62,.56,.06),new ji({map:iw(ew.woodFloor),roughness:.85})),oT=new U(new vi(.58,.32),new ji({map:iw(ew.backglass),emissive:16777215,emissiveMap:iw(ew.backglass),emissiveIntensity:.35,roughness:.6}));oT.position.set(0,.115,.031),iT.add(aT,oT),iT.position.set(0,.35,-.65),Kw.scene.add(iT);var sT=new Lw;sT.mesh.position.set(0,.21,-.58),sT.mesh.rotation.x=-.18,sT.setAttractImages([ew.dmd.bigDipper,ew.dmd.mantis]),Kw.scene.add(sT.mesh);var cT=new Hw;window.addEventListener(`keydown`,()=>cT.unlock(),{once:!0}),window.addEventListener(`pointerdown`,()=>cT.unlock(),{once:!0});var lT=new Uw(Kw.scene,{max:256,size:.007}),uT=new Uw(Kw.scene,{max:192,size:.004,gravity:0}),dT=0,fT=0;function pT(e){fT=Math.max(fT,e)}var mT=0,hT=1,gT=new jw,_T=new Ow(e=>{let t=Ew[e];sT.flashImage(t.dmdImage,2.8),cT.playSfx(`star`,{rate:1.5}),pT(.6),OT(`rank:${e}`)}),vT=0,yT=!1,bT=!1,xT=!1,ST=0,CT=-1;function wT(){xT=!0,ST=nT.score,kT.multiball=!0,MT=Math.max(0,6-Qw.count),NT=.4,sT.flash([`會師父`,`DIE PRÜFUNG DES MEISTERS`],3),cT.playCallout(`wahreKaempfer`),pT(1),OT(`wizard:start`)}function TT(e){xT=!1,kT.multiball=!1,e?(nT.addBonus(Hl),_T.wizardWon(),sT.flash([`DU BIST SIFU!`,`+${Hl.toLocaleString(`de-CH`)}`],3.5),cT.playSfx(`star`,{rate:1.6}),pT(1),OT(`wizard:won`)):(sT.flash([`DER MEISTER WARTET`,`VERSUCHE ES ERNEUT`],2.5),OT(`wizard:failed`)),AT.resetAll()}function ET(){return xT?{title:`HUI SHIFU`,cn:`會師父`,detail:`${(nT.score-ST).toLocaleString(`de-CH`)} / ${Vl.toLocaleString(`de-CH`)}`,timeLeft:0}:null}var DT=[];function OT(e){DT.push(e),DT.length>40&&DT.shift()}var kT=new yw({spawnBall:()=>{yT=!1,vT=0,Qw.spawnInLane()},onPhaseChange:e=>{if(e===`drain`&&(sT.flash([`BALL VERLOREN`],1.2),cT.playSfx(`drain`),cT.playCallout(`stehWiederAuf`),pT(.5)),e===`gameOver`){cT.playCallout(`wahreKaempfer`);let e=gT.submit(nT.score,_T.rank);e===1?(sT.flash([`NEUER REKORD!`,nT.score.toLocaleString(`de-CH`)],3),cT.playSfx(`star`,{rate:1.5})):e&&sT.flash([`PLATZ ${e}`,`IN DER HALLE DER MEISTER`],2.5),OT(`gameOver`)}}}),AT=new Tw(nT,{onStart:e=>{sT.flash([`${e.title}`,`${e.cn} — FORM BEGINNT`],2.2),e.id===`bengbu`&&cT.playCallout(`bengbu`),e.id===`seven`&&cT.playCallout(`sterneInEinerLinie`),e.id===`cicada`&&cT.playSfx(`cicada`),e.id===`iron`&&cT.playSfx(`stingerHurryup`),OT(`mode:start:${e.id}`)},onSuccess:(e,t)=>{sT.flash([`FORM GEMEISTERT`,`${e.cn} +${t.toLocaleString(`de-CH`)}`],2.5),cT.playSfx(`star`,{rate:1.3}),pT(.6),OT(`mode:success:${e.id}`),_T.setModesCompleted(AT.completedCount),AT.allCompleted&&(CT=2.6)},onFail:e=>{sT.flash([`ZEIT ABGELAUFEN`,`${e.cn} — übe weiter`],2),OT(`mode:fail:${e.id}`)},onAddBall:()=>{if(kT.phase===`play`||kT.phase===`ballLaunch`){let{pos:e,vel:t}=FT.releaseSpawn();Qw.spawnWorld(e,t),sT.flash([`ADD-A-BALL!`],1.6),OT(`addABall`)}},onSequenceBroken:()=>sT.flash([`REIHENFOLGE GEBROCHEN`],1.2)}),jT=0,MT=0,NT=0;function PT(){jT=0,kT.multiball=!0,MT=3,NT=.4,sT.flash([`MULTIBALL!`,`螳螂捕蝉 — DIE MANTIS PACKT ZU`],2.5),cT.playCallout(`mantisFaengtZikade`),pT(.8),OT(`multiball:start`)}var FT=new _w(qw,Zw,Qw,e=>{cT.playSfx(`hook`),lT.burst(e.body.translation(),8382112,18,.6),AT.activeId===`hookpull`?(nT.hit(Ll),AT.handleEvent(`hook`),FT.eject(e),OT(`hook:mode`)):kT.multiball?(nT.addBonus(Rl),sT.flash([`JACKPOT!`,`+${Rl.toLocaleString(`de-CH`)}`],1.6),cT.playSfx(`star`,{rate:1.4}),FT.eject(e),OT(`hook:jackpot`)):(Qw.remove(e),jT++,nT.addBonus(Ll),OT(`hook:lock${jT}`),jT>=3?PT():(sT.flash([`LOCK ${jT}/3`,`DIE MANTIS HÄLT FEST`],1.8),kT.lockServed()))}),IT=[{x:-.1,z:-.25},{x:.04,z:-.3},{x:-.03,z:-.16}].map(e=>new dw(qw,Zw,e,Qw,e=>{nT.hit(100),AT.handleEvent(`bumper`),cT.playSfx(`bumper`),lT.burst(e,16763989,12,.5),OT(`bumper`)})),LT=[new fw(qw,Zw,{x:-.192,z:.43},.0777,57.9,{x:.35,z:-.94},Qw,e=>{nT.hit(50),cT.playSfx(`bumper`,{rate:.75,volume:.7}),lT.burst(e,8382112,8,.4),OT(`slingshot`)}),new fw(qw,Zw,{x:.1548,z:.4451},.0507,-51.5,{x:-.35,z:-.94},Qw,e=>{nT.hit(50),cT.playSfx(`bumper`,{rate:.75,volume:.7}),lT.burst(e,8382112,8,.4),OT(`slingshot`)})],RT=-1,zT=!1,BT=new hw(qw,Zw,(e,t,n)=>{n||nT.hit(500),AT.handleStarHit(e),cT.playSfx(`star`),lT.burst(BT.worldPos(e),16767334,n?6:16,.55),OT(`star:${t}`)},()=>{nT.addBonus(Fl),sT.flash([`七星 KOMPLETT!`,`+${Fl.toLocaleString(`de-CH`)}`],2),cT.playSfx(`star`,{rate:1.25}),pT(.5),OT(`stars:complete`),RT=1.5,zT=!0}),VT=Zw.localToWorld(new B(0,.04,-.02)),HT=new gw(qw,Kw.scene,Zw,{x:0,z:-.02},()=>{nT.hit(250),AT.handleEvent(`dummy`),cT.playSfx(`bumper`,{rate:.55,volume:.8}),lT.burst(VT,13212245,10,.45),OT(`dummy`)});tT.onFire=e=>{cT.playSfx(`launch`,{volume:.5+e*.5}),OT(`launch`)};function UT(){DT.length=0,Qw.clearAll(),nT.reset(),BT.resetAll(),AT.resetAll(),_T.reset(),jT=0,MT=0,RT=-1,zT=!1,xT=!1,CT=-1,yT=!1,vT=0,kT.startGame(),sT.flash([`DIE ZIKADE ERSCHEINT`,`BALL 1`],2),cT.playCallout(`zeigMirDeinenWeg`)}var WT=!0,GT=!1,KT=!1,qT=0,JT=!1,YT=1,XT=new Map,ZT=1;function QT(){if(yT)return;YT=-YT;let e=Zw.localToWorld(new B(.3*YT,0,-.95)).normalize().multiplyScalar(fl*zl);for(let t of Qw.list)t.body.applyImpulse(e,!0);pT(1),cT.playSfx(`flipper`,{rate:.5,volume:.5}),OT(`nudge`),vT+=1,vT>=4.5?(yT=!0,bT=!1,sT.flash([`TILT!`,`BALL VERWIRKT`],2.2),cT.playSfx(`drain`,{rate:.7}),OT(`tilt`)):vT>=2.5&&!bT&&(bT=!0,sT.flash([`ACHTUNG — TILT!`],1.2),cT.playSfx(`bumper`,{rate:.5,volume:.6}),OT(`tilt:warn`))}Kw.onFixedStep=e=>{let t=kT.phase===`play`||kT.phase===`ballLaunch`;Jw.isDown(`plunger`)||(WT=!0),vT>0&&(vT=Math.max(0,vT-Ul*e));let n=t&&!yT&&Jw.isDown(`flipperLeft`),r=t&&!yT&&Jw.isDown(`flipperRight`);n&&!GT&&cT.playSfx(`flipper`),r&&!KT&&cT.playSfx(`flipper`),GT=n,KT=r,$w.setPressed(n),eT.setPressed(r),tT.update(e,t&&WT&&Jw.isDown(`plunger`)),HT.update(e),qT>0&&(qT-=e);let i=Jw.isDown(`nudge`);t&&i&&!JT&&qT<=0&&(QT(),qT=Bl),JT=i,fT>0&&(fT=Math.max(0,fT-e*6)),Qw.snapshotVelocities(),qw.step(e),kT.update(e),nT.update(e),AT.update(e),FT.update(e);for(let t of IT)t.update(e);for(let t of LT)t.update(e);if(CT>=0&&(CT-=e,CT<0&&t&&wT()),xT&&nT.score-ST>=5e4&&TT(!0),cT.setMusicState(kT.phase===`attract`||kT.phase===`gameOver`?`attract`:xT?`wizard`:kT.multiball?`multiball`:`play`),lT.update(e),uT.update(e),dT++,dT%4==0)for(let e of Qw.list){let t=e.body.linvel();t.x*t.x+t.y*t.y+t.z*t.z>1.2&&uT.burst(e.body.translation(),16757596,1,0,.28)}mT>0&&(mT-=e);let a=nT.multiplier;if(a>=3&&a>hT&&mT<=0&&(cT.playCallout(`ununterbrochenWieMantis`),mT=25),hT=a,RT>=0&&(RT-=e,RT<0&&(BT.resetAll(),zT&&(zT=!1,AT.tryStartNext()))),MT>0&&(NT-=e,NT<=0)){let{pos:e,vel:t}=FT.releaseSpawn();Qw.spawnWorld(e,t),MT--,NT=.8}kT.phase===`attract`&&Jw.isDown(`plunger`)&&(UT(),WT=!1),kT.phase===`gameOver`&&Jw.isDown(`restart`)&&UT(),kT.phase===`ballLaunch`&&Qw.list.some(e=>{let t=Zw.worldToLocal(e.body.translation());return t.z<aw.minZ-.02||t.x<aw.minX-.02})&&kT.ballLaunched();for(let t of Qw.list){let n=t.body.linvel(),r=n.x*n.x+n.y*n.y+n.z*n.z,i=Zw.worldToLocal(t.body.translation()),a=i.x>aw.minX&&i.z>aw.minZ,o=t.body.handle;if(kT.phase===`play`&&!a&&r<4e-4){let n=(XT.get(o)??0)+e;if(n>4){XT.set(o,0),ZT=-ZT;let e=Zw.localToWorld(new B(ZT*.7,0,-.6)).normalize().multiplyScalar(fl*zl);t.body.applyImpulse(e,!0),OT(`autoNudge`)}else XT.set(o,n)}else XT.delete(o)}Qw.drainSweep()>0&&(nT.breakCombo(),Qw.count===1&&MT===0&&(xT?TT(nT.score-ST>=Vl):kT.multiball&&(kT.multiball=!1,sT.flash([`MULTIBALL ENDE`],1.5),OT(`multiball:end`))),Qw.count===0&&MT===0&&(xT&&TT(!1),kT.allBallsLost()))},Kw.onBeforeRender=()=>{Kw.playerRig.position.x=fT>0?Math.sin(fT*25)*.004*fT*YT:0,lT.upload(),uT.upload(),Qw.syncMeshes();for(let e of[$w,eT]){let t=e.body.translation(),n=e.body.rotation();e.mesh.position.set(t.x,t.y,t.z),e.mesh.quaternion.set(n.x,n.y,n.z,n.w)}let e=HT.body.translation(),t=HT.body.rotation();HT.mesh.position.set(e.x,e.y,e.z),HT.mesh.quaternion.set(t.x,t.y,t.z,t.w)},Kw.start(),setInterval(()=>{let e={phase:kT.phase,score:nT.score,ballNumber:kT.ballNumber,ballsInPlay:Qw.count,multiball:kT.multiball,locks:jT,starsLit:BT.litCount,chain:nT.chain,multiplier:nT.multiplier,comboTimeLeft:nT.comboTimeLeft,plungerCharge:tT.charge,mode:ET()??AT.info(),completedModes:AT.completedCount,rankCn:_T.info.cn,rankTitle:_T.info.title,tilted:yT,fps:Kw.fps};rT.render(e),sT.update(.1,{phase:kT.phase,score:nT.score,ballNumber:kT.ballNumber,multiball:kT.multiball,locks:jT,starsLit:BT.litCount,comboMult:nT.multiplier,mode:ET()??AT.info(),tilted:yT,bestScore:gT.best,rankCn:_T.info.cn})},100),window.__sevenstar={phase:()=>kT.phase,balls:()=>Qw.count,locks:()=>jT,ballState:()=>{let e=Qw.list[0];return e?{pos:e.body.translation(),linvel:e.body.linvel(),local:Zw.worldToLocal(e.body.translation())}:null},flipperAngles:()=>({left:$w.angle,right:eT.angle}),fps:()=>Kw.fps,score:()=>({score:nT.score,chain:nT.chain,multiplier:nT.multiplier}),starsLit:()=>BT.litCount,lightStar:e=>BT.lightStar(e),hitStar:e=>BT.handleHit(e),mode:()=>AT.info(),completedModes:()=>AT.completedCount,hitLog:()=>[...DT],startGame:()=>UT(),audioDebug:()=>cT.debugInfo,rank:()=>_T.rank,wizard:()=>({active:xT,progress:xT?nT.score-ST:0}),tiltState:()=>({heat:vT,tilted:yT}),highscoreBest:()=>gT.best,placeBallLocal:(e,t)=>{let n=Qw.list[0],r=Zw.localToWorld(new B(e,Zw.surfaceY+dl+.002,t));n?qw.resetBody(n.body,r):Qw.spawnWorld(r)},kickBallLocal:(e,t,n)=>{let r=Qw.list[0];if(!r)return;let i=Zw.localToWorld(new B(e,0,t)).normalize().multiplyScalar(n);r.body.setLinvel(i,!0)},reviveBalls:()=>{Qw.list.forEach((e,t)=>{qw.resetBody(e.body,Zw.localToWorld(new B(-.18+t*.055,Zw.surfaceY+dl+.002,-.33)))})},step:e=>{let t=Math.round(e/il);for(let e=0;e<t;e++)Kw.onFixedStep(il)}};