!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function m(t){p=t}function $(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const g=[],b=[],x=[],w=[],y=Promise.resolve();let _=!1;function v(t){x.push(t)}let T=!1;const k=new Set;function E(){if(!T){T=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];m(e),C(e.$$)}for(g.length=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];k.has(e)||(k.add(e),e())}x.length=0}while(g.length);for(;w.length;)w.pop()();_=!1,T=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const S=new Set;const j="undefined"!=typeof window?window:global;function M(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,c,a,u,s,d,f=[-1]){const h=p;m(i);const $=c.props||{},g=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:f};let b=!1;if(g.ctx=a?a(i,$,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),b&&M(i,t)),e}):[],g.update(),b=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();c.intro&&((x=i.$$.fragment)&&x.i&&(S.delete(x),x.i(w))),function(t,n,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,i),v(()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(v)}(i,c.target,c.anchor),E()}var x,w;m(h)}let I;"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});const{document:L}=j;function z(e){let n,r,i,p,m,$,g,b,x,w;return{c(){n=u("script"),i=u("link"),p=d(),m=u("main"),$=u("label"),g=s(e[0]),b=d(),x=u("select"),this.c=t,n.src!==(r="js/materialize.min.js")&&h(n,"src","js/materialize.min.js"),h(i,"rel","stylesheet"),h(i,"type","text/css"),h(i,"href","css/materialize.min.css"),h($,"for","dropdown"),h(x,"id","dropdown")},m(t,r,l){c(L.head,n),c(L.head,i),a(t,p,r),a(t,m,r),c(m,$),c($,g),e[9]($),c(m,b),c(m,x),e[10](x),e[11](m),l&&o(w),w=[f(m,"click",e[4]),f(m,"dblclick",N)]},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(g,t[0])},i:t,o:t,d(t){l(n),l(i),t&&l(p),t&&l(m),e[9](null),e[10](null),e[11](null),o(w)}}}function N(t){alert("I got double clicked")}function D(t,e,n){let o,r,i,c,{labelText:a="Dropdown:"}=e;function l(){return o.parentNode.host}return $(t=>{window.facadeService&&window.call_spkfacade(l().id,MyCoolDropdown,window.facadeService)}),t.$set=t=>{"labelText"in t&&n(0,a=t.labelText)},t.$$.update=()=>{1&t.$$.dirty&&(r={labelText:a}),5&t.$$.dirty&&i&&n(2,i.innerHTML=a,i)},[a,o,i,c,function(t){alert("I got clicked and my id is "+l().id),window.facadeService&&window.call_spkfacade(l().id,MyCoolDropdown,window.facadeService)},function(t){if(!t)return a;n(0,a=t)},function(t,e,n){const o=document.createElement("option");o.text=t,o.value=e,c.add(o,n)},r,l,function(t){b[t?"unshift":"push"](()=>{n(2,i=t)})},function(t){b[t?"unshift":"push"](()=>{n(3,c=t)})},function(t){b[t?"unshift":"push"](()=>{n(1,o=t)})}]}customElements.define("my-cool-dropdown",class extends I{constructor(t){super(),A(this,{target:this.shadowRoot},D,z,i,{labelText:0,text:5,addItem:6}),t&&(t.target&&a(t.target,this,t.anchor),t.props&&(this.$set(t.props),E()))}static get observedAttributes(){return["labelText","text","addItem"]}get labelText(){return this.$$.ctx[0]}set labelText(t){this.$set({labelText:t}),E()}get text(){return this.$$.ctx[5]}get addItem(){return this.$$.ctx[6]}})}();
//# sourceMappingURL=bundle.js.map
class MyCoolDropdown {
	
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
	"functions": {
		"text": {
			"parameters": [
				{
					"name": "lText",
					"type": "string"
				}
			],
			"code": "export function text (lText) {\nif (!lText)\nreturn labelText;\nlabelText = lText;\n}"
		},
		"addItem": {
			"parameters": [
				{
					"name": "text",
					"type": "string"
				},
				{
					"name": "value",
					"type": "string"
				},
				{
					"name": "position",
					"type": "int"
				}
			],
			"code": "export function addItem (text, value, position) {\nconst option = document.createElement(\"option\");\noption.text = text;\noption.value = value;\ndropdownElement.add(option, position);\n}\n"
		}
	},
	"properties": [
		{
			"name": "tabs",
			"type": null,
			"value": null,
			"nodes": [
				{
					"name": "labelText",
					"type": "string",
					"value": "\"Dropdown:\""
				}
			]
		}
	]
};
}
}
