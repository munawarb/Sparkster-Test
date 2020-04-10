!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}let s;function f(t){s=t}function d(t){(function(){if(!s)throw new Error("Function called outside component initialization");return s})().$$.on_mount.push(t)}const h=[],p=[],$=[],m=[],g=Promise.resolve();let b=!1;function x(t){$.push(t)}let y=!1;const w=new Set;function _(){if(!y){y=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];f(e),v(e.$$)}for(h.length=0;p.length;)p.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];w.has(e)||(w.add(e),e())}$.length=0}while(h.length);for(;m.length;)m.pop()();b=!1,y=!1,w.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const k=new Set;function E(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,g.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(i,c,u,l,d,h,p=[-1]){const $=s;f(i);const m=c.props||{},g=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:p};let b=!1;if(g.ctx=u?u(i,m,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),b&&E(i,t)),e}):[],g.update(),b=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();c.intro&&((y=i.$$.fragment)&&y.i&&(k.delete(y),y.i(w))),function(t,n,i){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,i),x(()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(x)}(i,c.target,c.anchor),_()}var y,w;f($)}let M;function C(e){let n,r,i;return{c(){var o,i,c;n=u("main"),r=u("label"),this.c=t,o=r,i="contenteditable",null==(c="true")?o.removeAttribute(i):o.getAttribute(i)!==c&&o.setAttribute(i,c),void 0===e[0]&&x(()=>e[5].call(r))},m(t,a,u){c(t,n,a),function(t,e){t.appendChild(e)}(n,r),void 0!==e[0]&&(r.innerHTML=e[0]),e[6](n),u&&o(i),i=[l(r,"input",e[5]),l(n,"click",e[2]),l(n,"dblclick",S)]},p(t,[e]){1&e&&t[0]!==r.innerHTML&&(r.innerHTML=t[0])},i:t,o:t,d(t){t&&a(n),e[6](null),o(i)}}}function S(t){alert("I got double clicked")}function H(t,e,n){let o,r,{text:i="test label"}=e;function c(){return o.parentNode.host}return d(t=>{window.facadeService&&window.call_spkfacade(c().id,MyCoolLabel,window.facadeService)}),t.$set=t=>{"text"in t&&n(0,i=t.text)},t.$$.update=()=>{1&t.$$.dirty&&(r={text:i})},[i,o,function(t){alert("I got clicked and my id is "+c().id),window.facadeService&&window.call_spkfacade(c().id,MyCoolLabel,window.facadeService)},r,c,function(){i=this.innerHTML,n(0,i)},function(t){p[t?"unshift":"push"](()=>{n(1,o=t)})}]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("my-cool-label",class extends M{constructor(t){super(),L(this,{target:this.shadowRoot},H,C,i,{text:0}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["text"]}get text(){return this.$$.ctx[0]}set text(t){this.$set({text:t}),_()}})}();
//# sourceMappingURL=bundle.js.map
class MyCoolLabel {
	
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
					"name": "text",
					"type": "string",
					"value": "\"test label\""
				}
			]
		}
	]
};
}
}
