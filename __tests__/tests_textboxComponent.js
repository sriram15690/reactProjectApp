jest.dontMock("../src/textboxComponent.js");

describe("Sample Test Case", function() {
	it("sample test", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		console.log("In sample test");
		expect(true).toBe(true);
	});
	
});

describe("TextBox", function() {
	it("to check if textbox is rendered", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		var TextBox = require('../src/textboxComponent.js');
		$ = jQuery = require('jquery');
		var textBoxEle = TestUtils.renderIntoDocument(
			<TextBox value="123" labelName="Project Name" name="projectName" />
		);
		textBoxNode = TestUtils.findRenderedDOMComponentWithTag(textBoxEle,"input");
		textBoxDOMNode = React.findDOMNode(textBoxNode);
		expect(textBoxDOMNode.value).toEqual('123');
		expect(textBoxDOMNode.className).toEqual('form-control');
		expect(textBoxDOMNode.name).toEqual('projectName');
	});
	
	it("to check if Label is assigned the correct text", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		var TextBox = require('../src/textboxComponent.js');
		$ = jQuery = require('jquery');
		var textBoxEle = TestUtils.renderIntoDocument(
			<TextBox value="123" labelName="Project Name" name="projectName" />
		);
		labelNode = TestUtils.findRenderedDOMComponentWithTag(textBoxEle,"label");
		expect(React.findDOMNode(labelNode).textContent).toEqual('Project Name');
	});
});