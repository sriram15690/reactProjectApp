//var React = require('react/addons');
//var SingleProjItem = React.createClass({
require('./testdom')('<html><body></body></html>');
var expect = require("chai").expect;
var mocha = require("mocha");
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var jsdom = require('mocha-jsdom');

describe("sample mocha test", function(){
	it ("sample it ", function(){
		expect(true).to.be.true;
	});
});


describe("Sample Test Case", function() {
	it("sample test", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		console.log("In sample Single Proj test Case");
		expect(true).to.be.true;
	});
	
});



describe("Single Project Item", function() {
	//jsdom();

	it("to check if Li is rendered", function() {
		var SingleProjItem = require("../src/singleProjComponent.js");
		$ = jQuery = require('jquery');
		var project = {
					    "id": 1,
					    "projectName": "Hoegh VMS",
					    "clientName": "Hoegh  Autoliners",
					    "hasMgrApproval": "1",
					    "teamLead": "Sriram R"
					  };
		var singleProjEle = TestUtils.renderIntoDocument(
			<SingleProjItem project={project} />
		);
		singleProjNode = TestUtils.findRenderedDOMComponentWithTag(singleProjEle,"li");
		singleProjDOMNode = React.findDOMNode(singleProjNode);
		expect(singleProjDOMNode.textContent).to.eql("Hoegh VMS");
	});

	it("to check if Li is rendered", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		var SingleProjItem = require("../src/singleProjComponent.js");
		$ = jQuery = require('jquery');
		var project = {
					    "id": 1,
					    "projectName": "Hoegh VMS",
					    "clientName": "Hoegh  Autoliners",
					    "hasMgrApproval": "1",
					    "teamLead": "Sriram R"
					  };
		var singleProjEle = TestUtils.renderIntoDocument(
			<SingleProjItem project={project} />
		);
		
		/*
		singleProjNode = TestUtils.findRenderedDOMComponentWithTag(singleProjEle,"li");
		singleProjDOMNode = React.findDOMNode(singleProjNode);
		expect(singleProjDOMNode.textContent).toEqual("Hoegh VMS");
		TestUtils.Simulate.click(singleProjDOMNode);
		*/
		
		singleProjEle = TestUtils.scryRenderedDOMComponentsWithClass(singleProjEle,"list-group-item");
		var domele =singleProjEle[0].getDOMNode().textContent;
		expect(domele).to.eql("Hoegh VMS");
	});

});
	