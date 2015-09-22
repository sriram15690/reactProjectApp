jest.dontMock("../src/ProjListComponent.js");
jest.dontMock("../src/singleProjComponent.js");

describe("Sample Test Case", function() {
	it("sample test", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		console.log("In sample Proj List Component test Case");
		expect(true).toBe(true);
	});
	
});

describe("ProjListComponent", function() {
	it("to check if ul is rendered", function() {
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		var ProjectListComp = require("../src/ProjListComponent.js");
		var SingleProjItem = require("../src/singleProjComponent.js");
		$ = jQuery = require('jquery');
		var projects = [{
					    "id": 1,
					    "projectName": "Sample 1 ",
					    "clientName": "Sample clientNam",
					    "hasMgrApproval": "1",
					    "teamLead": "Sriram R"
					  },
					  {
					    "id": 2,
					    "projectName": "Sample 2",
					    "clientName": "Sample 2 clientNam",
					    "hasMgrApproval": "1",
					    "teamLead": "Sriram R"
					  }];
		var projectListEle = TestUtils.renderIntoDocument(
			<ProjectListComp projects={projects} />
		);


		//expect ul to be present
		expect(TestUtils.scryRenderedDOMComponentsWithClass(projectListEle,"list-group").length).toEqual(1);

		//expect the number of project to be 2
		expect(TestUtils.scryRenderedDOMComponentsWithClass(projectListEle,"list-group-item").length).toEqual(projects.length);

		//expect each project item to be in a Li
		expect(TestUtils.scryRenderedDOMComponentsWithClass(projectListEle,"list-group-item")[0].getDOMNode().textContent).toEqual(projects[0].projectName);

		// Using find Renderered componenet with tag - to be used when we know we need to find only one Ele
		projListNode = TestUtils.findRenderedDOMComponentWithTag(projectListEle,"ul");
	
		
		//should be a composite component i.e should be create using React.createClass 
		expect(TestUtils.isCompositeComponent(projectListEle)).toBeTruthy();

		//to check if the rendered component is of the type PProject list comp
		expect(TestUtils.isCompositeComponentWithType(projectListEle,ProjectListComp)).toBeTruthy();

		//expect all the projects which have be given as param to be received by the proj list comp 
		expect(projListNode.props.children.length).toEqual(projects.length);

		//expect the each project to be of type projListNode.props.children[0].type.displayName
		expect(projListNode.props.children[0].type.displayName).toEqual("SingleProjItem")
		
		expect(true).toBeTruthy();
		
	});

});