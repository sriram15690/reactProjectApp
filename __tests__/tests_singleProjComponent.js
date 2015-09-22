jest.dontMock("../src/singleProjComponent.js");

describe("Sample Test Case", function() {
	it("sample test", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		console.log("In sample Single Proj test Case");
		expect(true).toBe(true);
	});
	
});

describe("Single Project Item", function() {
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
		singleProjNode = TestUtils.findRenderedDOMComponentWithTag(singleProjEle,"li");
		singleProjDOMNode = React.findDOMNode(singleProjNode);
		expect(singleProjDOMNode.textContent).toEqual("Hoegh VMS");
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
		
		//Using scry Rendered dom component
		var domNode = TestUtils.scryRenderedDOMComponentsWithClass(singleProjEle,"list-group-item")
		expect(domNode.length).toEqual(1);
		console.log(domNode[0].getDOMNode().textContent);
		expect(domNode[0].getDOMNode().textContent).toEqual(project.projectName);

		//using findRenderedDOMComponentWithTag
		singleProjNode = TestUtils.findRenderedDOMComponentWithTag(singleProjEle,"li");
		singleProjDOMNode = React.findDOMNode(singleProjNode);
		expect(singleProjDOMNode.textContent).toEqual("Hoegh VMS");
		TestUtils.Simulate.click(singleProjDOMNode);
	});

});
