require('./testdom')('<html><body></body></html>');
var expect = require("chai").expect;
var mocha = require("mocha");
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var jsdom = require('mocha-jsdom');


describe("Sample Test Case", function() {
	it("sample test", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		console.log("In sample test");
		expect(true).to.be.true;
	});
	
});

describe("TextBox", function() {
	it("to check if textbox is rendered", function() {
		var TextBox = require('../src/textboxComponent.js');
		$ = jQuery = require('jquery');
		var textBoxEle = TestUtils.renderIntoDocument(
			<TextBox value="123" labelName="Project Name" name="projectName" />
		);
		textBoxNode = TestUtils.findRenderedDOMComponentWithTag(textBoxEle,"input");
		textBoxDOMNode = React.findDOMNode(textBoxNode);
		expect(textBoxDOMNode.value).to.be.eql('123');
		expect(textBoxDOMNode.className).to.be.eql('form-control');
		expect(textBoxDOMNode.name).to.be.eql('projectName');
	});
	
	it("to check if Label is assigned the correct text", function() {
		var TextBox = require('../src/textboxComponent.js');
		$ = jQuery = require('jquery');
		var textBoxEle = TestUtils.renderIntoDocument(
			<TextBox value="123" labelName="Project Name" name="projectName" />
		);
		labelNode = TestUtils.findRenderedDOMComponentWithTag(textBoxEle,"label");
		expect(React.findDOMNode(labelNode).textContent).to.be.eql('Project Name');
	});
});
