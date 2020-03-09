class MyComponent extends HTMLElement {constructor() {
super();
this.add = this.add.bind(this);


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
	static getSchema() {
	return {
	"add": {
		"parameters": [
			{
				"name": "a",
				"type": "int"
			},
			{
				"name": "b",
				"type": "int"
			}
		],
		"code": "add (a, b) {\n\n}"
	}
};
}

add (a, b) {

}

}

( function () {
	window.customElements.define("my-component", MyComponent); // Auto-generated.
})();