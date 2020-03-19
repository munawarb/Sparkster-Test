class MyCoolButton extends HTMLElement {constructor() {
super();
this.shadow = this.attachShadow({mode: "open"});

this.onClick = this.onClick.bind(this);

}

	static verticalAlign(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.verticalAlign;
		target.style.verticalAlign = value;
	}
	
	static animationName(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.animationName;
		target.style.animationName = value;
	}
	
	static animationDuration(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.animationDuration;
		target.style.animationDuration = value;
	}
	
	static textColor(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.textColor;
		target.style.textColor = value;
	}
	
	static linkColor(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.linkColor;
		target.style.linkColor = value;
	}
	
	static opacity(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.opacity;
		target.style.opacity = value;
	}
	
	static backgroundColor(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.backgroundColor;
		target.style.backgroundColor = value;
	}
	
	static backgroundImage(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.backgroundImage;
		target.style.backgroundImage = value;
	}
	
	static backgroundPosition(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.backgroundPosition;
		target.style.backgroundPosition = value;
	}
	
	static backgroundRepeat(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.backgroundRepeat;
		target.style.backgroundRepeat = value;
	}
	
	static backgroundAttachment(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.backgroundAttachment;
		target.style.backgroundAttachment = value;
	}
	
	static borderColor(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.borderColor;
		target.style.borderColor = value;
	}
	
	static borderSize(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.borderSize;
		target.style.borderSize = value;
	}
	
	static borderStyle(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.borderStyle;
		target.style.borderStyle = value;
	}
	
	static borderRadius(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.borderRadius;
		target.style.borderRadius = value;
	}
	
	static boxShadow(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.boxShadow;
		target.style.boxShadow = value;
	}
	
	static position(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.position;
		target.style.position = value;
	}
	
	static top(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.top;
		target.style.top = value;
	}
	
	static left(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.left;
		target.style.left = value;
	}
	
	static transform(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.transform;
		target.style.transform = value;
	}
	
	static height(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.height;
		target.style.height = value;
	}
	
	static width(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.width;
		target.style.width = value;
	}
	
	static zIndex(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.zIndex;
		target.style.zIndex = value;
	}
	
	static margin(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.margin;
		target.style.margin = value;
	}
	
	static padding(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.padding;
		target.style.padding = value;
	}
	
	static rows(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.rows;
		target.style.rows = value;
	}
	
	static columns(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.columns;
		target.style.columns = value;
	}
	
	static rowGap(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.rowGap;
		target.style.rowGap = value;
	}
	
	static colGap(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.colGap;
		target.style.colGap = value;
	}
	
	static fontFamily(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.fontFamily;
		target.style.fontFamily = value;
	}
	
	static letterSpacing(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.letterSpacing;
		target.style.letterSpacing = value;
	}
	
	static fontSize(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.fontSize;
		target.style.fontSize = value;
	}
	
	static fontStyle(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.fontStyle;
		target.style.fontStyle = value;
	}
	
	static textAlign(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.textAlign;
		target.style.textAlign = value;
	}
	
	static fontStretch(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.fontStretch;
		target.style.fontStretch = value;
	}
	
	static lineHeight(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.lineHeight;
		target.style.lineHeight = value;
	}
	
	static letterSpacing(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style.letterSpacing;
		target.style.letterSpacing = value;
	}
	
	static html(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.shadow.innerHTML;
		target.shadow.innerHTML = value;
	}
	
	static css(id, value) {
		const target = (arguments.length === 0)?this: document.getElementById(id);
		// We'll return the value of the property if no arguments have been passed in.
		// This is a different case from supplying undefined explicitly in which case the value undefined will be set to the property value.
		// If only the id is supplied, we want to return a value.
		// The id defaults to this.
		if (arguments.length < 2)
			return target.style;
		target.style = value;
	}
	static getSchema() {
	return {};
}

render() {
	this.shadow.innerHTML = `<button>My Cool Button!</button>`;
}

connectedCallback() {
this.addEventListener("click", this.onClick);
this.render();

window["call_spkfacade"](event.target.id, MyCoolButton,window.facadeService);
}

onClick() {
window["call_spkfacade"](event.target.id, MyCoolButton,window.facadeService);
}

}
(function() {
window.customElements.define("my-cool-button", MyCoolButton); // Auto-generated.
})();
