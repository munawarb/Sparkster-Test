!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o||n[o]&&n[o].set?t[o]=e[o]:l(t,o,e[o])}let h;function g(t){h=t}function p(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],m=[],w=[],y=[],b=Promise.resolve();let _=!1;function x(t){w.push(t)}let v=!1;const k=new Set;function E(){if(!v){v=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];g(e),C(e.$$)}for($.length=0;m.length;)m.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];k.has(e)||(k.add(e),e())}w.length=0}while($.length);for(;y.length;)y.pop()();_=!1,v=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const S=new Set;function A(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,c,s,a,f,l,d=[-1]){const p=h;g(e);const $=c.props||{},m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:o(),dirty:d};let w=!1;if(m.ctx=s?s(e,$,(t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&f(m.ctx[t],m.ctx[t]=r)&&(m.bound[t]&&m.bound[t](r),w&&A(e,t)),n}):[],m.update(),w=!0,r(m.before_update),m.fragment=!!a&&a(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();c.intro&&((y=e.$$.fragment)&&y.i&&(S.delete(y),y.i(b))),function(t,e,o){const{fragment:c,on_mount:s,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,o),x(()=>{const e=s.map(n).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(x)}(e,c.target,c.anchor),E()}var y,b;g(p)}let I;function L(n){let o,i,c,l=[n[1]],h={};for(let t=0;t<l.length;t+=1)h=e(h,l[t]);return{c(){o=a("main"),i=a("img"),this.c=t,d(i,h)},m(t,e,u){s(t,o,e),function(t,e){t.appendChild(e)}(o,i),n[7](o),u&&r(c),c=[f(o,"click",n[2]),f(o,"dblclick",O)]},p(t,[e]){d(i,function(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=e[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(l,[2&e&&t[1]]))},i:t,o:t,d(t){t&&u(o),n[7](null),r(c)}}}function O(t){alert("I got double clicked")}function j(t,e,n){let o,r,{width:i=50}=e,{height:c=50}=e,{src:s=""}=e;function u(){return o.parentNode.host}return p(t=>{window.facadeService&&window.call_spkfacade(u().id,MyCoolImage,window.facadeService)}),t.$set=t=>{"width"in t&&n(3,i=t.width),"height"in t&&n(4,c=t.height),"src"in t&&n(5,s=t.src)},t.$$.update=()=>{56&t.$$.dirty&&n(1,r={width:i,height:c,src:s})},[o,r,function(t){alert("I got clicked and my id is "+u().id),window.facadeService&&window.call_spkfacade(u().id,MyCoolImage,window.facadeService)},i,c,s,u,function(t){m[t?"unshift":"push"](()=>{n(0,o=t)})}]}"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("my-cool-image",class extends I{constructor(t){super(),M(this,{target:this.shadowRoot},j,L,c,{width:3,height:4,src:5}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),E()))}static get observedAttributes(){return["width","height","src"]}get width(){return this.$$.ctx[3]}set width(t){this.$set({width:t}),E()}get height(){return this.$$.ctx[4]}set height(t){this.$set({height:t}),E()}get src(){return this.$$.ctx[5]}set src(t){this.$set({src:t}),E()}})}();
//# sourceMappingURL=bundle.js.map
class MyCoolImage {
	
	static verticalAlign(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.verticalAlign;
		target.style.verticalAlign = value;
	}
	
	static animationName(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.animationName;
		target.style.animationName = value;
	}
	
	static animationDuration(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.animationDuration;
		target.style.animationDuration = value;
	}
	
	static textColor(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.color;
		target.style.color = value;
	}
	
	static linkColor(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.color;
		target.style.color = value;
	}
	
	static opacity(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.opacity;
		target.style.opacity = value;
	}
	
	static backgroundColor(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.backgroundColor;
		target.style.backgroundColor = value;
	}
	
	static backgroundImage(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.backgroundImage;
		target.style.backgroundImage = value;
	}
	
	static backgroundPosition(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.backgroundPosition;
		target.style.backgroundPosition = value;
	}
	
	static backgroundRepeat(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.backgroundRepeat;
		target.style.backgroundRepeat = value;
	}
	
	static backgroundAttachment(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.backgroundAttachment;
		target.style.backgroundAttachment = value;
	}
	
	static borderColor(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.borderColor;
		target.style.borderColor = value;
	}
	
	static borderSize(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.borderWidths;
		target.style.borderWidths = value;
	}
	
	static borderStyle(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.borderStyle;
		target.style.borderStyle = value;
	}
	
	static borderRadius(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.borderRadius;
		target.style.borderRadius = value;
	}
	
	static boxShadow(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.boxShadow;
		target.style.boxShadow = value;
	}
	
	static position(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.position;
		target.style.position = value;
	}
	
	static top(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.top;
		target.style.top = value;
	}
	
	static left(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.left;
		target.style.left = value;
	}
	
	static transform(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.transform;
		target.style.transform = value;
	}
	
	static height(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.height;
		target.style.height = value;
	}
	
	static width(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.width;
		target.style.width = value;
	}
	
	static zIndex(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.zIndex;
		target.style.zIndex = value;
	}
	
	static margin(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.margin;
		target.style.margin = value;
	}
	
	static padding(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.padding;
		target.style.padding = value;
	}
	
	static rows(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style["grid-row"];
		target.style["grid-row"] = value;
	}
	
	static columns(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.columns;
		target.style.columns = value;
	}
	
	static rowGap(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.rowGap;
		target.style.rowGap = value;
	}
	
	static colGap(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.columnGap;
		target.style.columnGap = value;
	}
	
	static fontFamily(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.fontFamily;
		target.style.fontFamily = value;
	}
	
	static letterSpacing(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.letterSpacing;
		target.style.letterSpacing = value;
	}
	
	static fontSize(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.fontSize;
		target.style.fontSize = value;
	}
	
	static fontStyle(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.fontStyle;
		target.style.fontStyle = value;
	}
	
	static textAlign(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.textAlign;
		target.style.textAlign = value;
	}
	
	static fontStretch(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.fontStretch;
		target.style.fontStretch = value;
	}
	
	static lineHeight(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.lineHeight;
		target.style.lineHeight = value;
	}
	
	static letterSpacing(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.letterSpacing;
		target.style.letterSpacing = value;
	}
	
	static html(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.shadowRoot.innerHTML;
		target.shadowRoot.innerHTML = value;
	}
	
	static css(...args) {
		const [id, styleName, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return window.getComputedStyle(target);
		target.style[styleName] = value;
	}
	static getSchema() {
	return {
	"functions": {},
	"properties": [
		{
			"name": "tabs",
			"type": null,
			"value": null,
			"nodes": [
				{
					"name": "appearance",
					"type": "",
					"value": "",
					"nodes": [
						{
							"name": "width",
							"type": "int",
							"value": "50"
						},
						{
							"name": "height",
							"type": "int",
							"value": "50"
						},
						{
							"name": "src",
							"type": "string",
							"value": "\"\""
						}
					]
				}
			]
		}
	]
};
}
}
