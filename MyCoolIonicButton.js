!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function l(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function m(t){p=t}function h(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],g=[],y=[],j=[],b=Promise.resolve();let v=!1;function w(t){y.push(t)}let x=!1;const k=new Set;function _(){if(!x){x=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),E(e.$$)}for($.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while($.length);for(;j.length;)j.pop()();v=!1,x=!1,k.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const C=new Set;function M(t,e){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,b.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(i,r,s,a,u,l,f=[-1]){const h=p;m(i);const $=r.props||{},g=i.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:f};let y=!1;if(g.ctx=s?s(i,$,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),y&&M(i,t)),e}):[],g.update(),y=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();r.intro&&((j=i.$$.fragment)&&j.i&&(C.delete(j),j.i(b))),function(t,n,i){const{fragment:r,on_mount:s,on_destroy:d,after_update:a}=t.$$;r&&r.m(n,i),w(()=>{const n=s.map(e).filter(c);d?d.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(w)}(i,r.target,r.anchor),_()}var j,b;m(h)}let A;function L(e){let n,c,i,p,m,h,$,g,y,j,b,v,w,x,k,_,E,C,M,S,A;return{c(){n=a("script"),i=a("script"),m=a("script"),$=a("script"),y=a("script"),b=a("script"),w=a("link"),x=a("link"),k=a("link"),_=u(" "),E=a("main"),C=a("ion-app"),M=a("ion-button"),S=u(e[1]),this.c=t,n.src!==(c="js/materialize.min.js")&&f(n,"src","js/materialize.min.js"),i.src!==(p="js/react.development.js")&&f(i,"src","js/react.development.js"),m.src!==(h="js/react-dom.development.js")&&f(m,"src","js/react-dom.development.js"),$.src!==(g="js/kendo.all.min.js")&&f($,"src","js/kendo.all.min.js"),f(y,"type","module"),y.src!==(j="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js")&&f(y,"src","https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"),b.noModule=!0,b.src!==(v="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js")&&f(b,"src","https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"),f(w,"rel","stylesheet"),f(w,"href","https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"),f(x,"rel","stylesheet"),f(x,"type","text/css"),f(x,"href","css/materialize.min.css"),f(k,"rel","stylesheet"),f(k,"type","text/css"),f(k,"href","css/kendo.common.min.css")},m(t,c,d){r(document.head,n),r(document.head,i),r(document.head,m),r(document.head,$),r(document.head,y),r(document.head,b),r(document.head,w),r(document.head,x),r(document.head,k),s(t,_,c),s(t,E,c),r(E,C),r(C,M),r(M,S),e[7](M),e[8](E),d&&o(A),A=[l(E,"click",e[3]),l(E,"dblclick",z)]},p(t,[e]){2&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(S,t[1])},i:t,o:t,d(t){d(n),d(i),d(m),d($),d(y),d(b),d(w),d(x),d(k),t&&d(_),t&&d(E),e[7](null),e[8](null),o(A)}}}function z(t){alert("I got double clicked")}function I(t,e,n){let o,c,i,r="default";function s(){return o.parentNode.host}return h(t=>{window.facadeService&&window.call_spkfacade(s().id,MyCoolIonicButton,window.facadeService)}),t.$$.update=()=>{6&t.$$.dirty&&i&&n(2,i.innerHTML=r,i)},c={},[o,r,i,function(t){alert("I got clicked and my id is "+s().id),window.facadeService&&window.call_spkfacade(s().id,MyCoolIonicButton,window.facadeService)},function(t){if(!t)return r;n(1,r=t)},c,s,function(t){g[t?"unshift":"push"](()=>{n(2,i=t)})},function(t){g[t?"unshift":"push"](()=>{n(0,o=t)})}]}"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("my-cool-ionic-button",class extends A{constructor(t){super(),S(this,{target:this.shadowRoot},I,L,i,{text:4}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["text"]}get text(){return this.$$.ctx[4]}})}();
//# sourceMappingURL=bundle.js.map
class MyCoolIonicButton {
	
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
					"name": "bText",
					"type": "string"
				}
			],
			"code": "export function text (bText) {\nif (!bText)\nreturn buttonText;\nbuttonText = bText;\n}"
		}
	},
	"properties": [
		{
			"name": "tabs",
			"type": null,
			"value": null,
			"nodes": []
		}
	]
};
}
}
