!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function l(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}let u;function f(t){u=t}function s(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const d=[],h=[],p=[],m=[],$=Promise.resolve();let g=!1;function b(t){p.push(t)}let y=!1;const w=new Set;function _(){if(!y){y=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];f(n),x(n.$$)}for(d.length=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];w.has(n)||(w.add(n),n())}p.length=0}while(d.length);for(;m.length;)m.pop()();g=!1,y=!1,w.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const k=new Set;function v(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,$.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(r,i,l,s,d,h,p=[-1]){const m=u;f(r);const $=i.props||{},g=r.$$={fragment:null,ctx:null,props:h,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:p};let y=!1;if(g.ctx=l?l(r,$,(t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&d(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),y&&v(r,t)),n}):[],g.update(),y=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();i.intro&&((w=r.$$.fragment)&&w.i&&(k.delete(w),w.i(x))),function(t,e,r){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),b(()=>{const e=a.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(b)}(r,i.target,i.anchor),_()}var w,x;f(m)}let L;function C(n){let e,c;return{c(){var n;n="main",e=document.createElement(n),e.innerHTML="<label>Label test</label>",this.c=t},m(t,r,a){i(t,e,r),n[3](e),a&&o(c),c=[l(e,"click",n[1]),l(e,"dblclick",S)]},p:t,i:t,o:t,d(t){t&&a(e),n[3](null),o(c)}}}function S(t){alert("I got double clicked")}function M(t,n,e){let o;function c(){return o.parentNode.host}return s(t=>{window.facadeService&&window.call_spkfacade(c().id,MyCoolLabel,window.facadeService)}),[o,function(t){alert("I got clicked and my id is "+c().id),window.facadeService&&window.call_spkfacade(c().id,MyCoolLabel,window.facadeService)},c,function(t){h[t?"unshift":"push"](()=>{e(0,o=t)})}]}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}});customElements.define("my-cool-label",class extends L{constructor(t){super(),E(this,{target:this.shadowRoot},M,C,r,{}),t&&t.target&&i(t.target,this,t.anchor)}})}();
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
			return target.style.textColor;
		target.style.textColor = value;
	}
	
	static linkColor(...args) {
		const [id, value] = args;
		const target = document.getElementById(id);
		if (value === undefined)
			return target.style.linkColor;
		target.style.linkColor = value;
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
			return target.style.borderSize;
		target.style.borderSize = value;
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
			return target.style.rows;
		target.style.rows = value;
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
			return target.style.colGap;
		target.style.colGap = value;
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
			"nodes": []
		}
	]
};
}
}
