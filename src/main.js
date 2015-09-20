
// /** @jsx React.DOM */	
$ = jQuery = require('jquery');
var TextBox = require("./textboxComponent");
var React = require('react');
var Router = require('react-router');
var ProjectStore = require('./stores.js');
var LatestProjectStore = require('./LatestProjectStore.js');
var ProjectActions = require('./actions.js');
var SingleProjItem = require("./singleProjComponent.js");
var toastr = require('toastr');

ProjectActions.loadAllProjects();

var PageComp = React.createClass({
	emptyProject: function() {
		return {
				"projectName": "",
				"clientName": "",
				"hasMgrApproval": "2",
				"teamLead": ""
			};
	},
	getInitialState: function() {
			return {
				project: this.emptyProject(),
				approvalOps: {
					"1": "Yes",
					"2": "No"
				},
				projects: [],
				latestProject: this.emptyProject()
			};
	},
	componentWillMount: function() {
		ProjectStore.addChangeListener(this._onChange);
		LatestProjectStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		ProjectStore.removeChangeListener(this._onChange);
		LatestProjectStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ 
			projects: ProjectStore.getAllProjects(),
			latestProject: LatestProjectStore.getLatestProject()
		});
	},

	componentDidMount: function(){
		this.setState({projects: ProjectStore.getAllProjects()});
	},
	onInputChange: function(event){
		//console.log("in input on change");
		var field = event.target.name;
		var value = event.target.value;
		//console.log(field+" "+value);
		this.state.project[field] = value;
		return this.setState({
			project: this.state.project
		})
	},
	handleProjSubmit: function(event){
		var self = this;
		event.preventDefault();
		toastr.success('Successfully Submitted !!');
		ProjectActions.createProject(this.state.project);
		return this.setState({
			project: this.emptyProject()
		});
	},
    render: function () {
    	return (
			<div className="well">
				<div className="well">
				<TitleComp title="New Project"/>
				<form onSubmit={this.handleProjSubmit}>
					<TextBox value={this.state.project.projectName} labelName="Project Name" name="projectName" onChange={this.onInputChange}/>
					<TextBox value={this.state.project.clientName} labelName="Client Name" name="clientName" onChange={this.onInputChange}/>
					<TextBox value={this.state.project.teamLead} labelName="Team Lead" name="teamLead" onChange={this.onInputChange}/>
					<SelectComponent labelName="Have Proj Mgr Approval ?" name="hasMgrApproval" hasDefault={true} allOptions={this.state.approvalOps} selectedOption={this.state.project.hasMgrApproval} onChange={this.onInputChange} />
					<input type="Submit" value="Submit" className="btn btn-primary"/>
				</form>
				</div>
				<div className="well">
					<LatestProjectComp project={this.state.latestProject} />
				</div>
				<div className="well" style={{"height": "200px", "overflow-y": "auto"}}>
					<ProjectListComp projects={this.state.projects} />
				</div>
			</div>
		);
	}	
});

var TitleComp = React.createClass ({
	PropTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function(){
		return React.createElement('h4', {}, this.props.title);
	}
});

var SelectComponent = React.createClass({
	PropTypes: {
		allOptions: React.PropTypes.object,
		selectedOption: React.PropTypes.string,
		hasDefault: React.PropTypes.bool.isRequired,
		onChange: React.PropTypes.func.isRequired
	},
	render: function(){
		var self = this;
		var optionsGen = function(){
			var optionsText = [];
			if(self.props.hasDefault){
				optionsText.push(<option value="">Select</option>);
			}
			for(var i in self.props.allOptions) {
				optionsText.push(
					<option value={i}>{self.props.allOptions[i]}</option>
				);
			}
			return optionsText;
		};
		return (	
			<div className="form-group">
				{React.createElement('label',{},this.props.labelName)}
				<select name={this.props.name} onChange={this.props.onChange} className="form-control" value={this.props.selectedOption}>
					{optionsGen()}
				</select>
			</div>
		);
	}
});


var ProjectListComp = React.createClass({
	PropTypes: {
		projects: React.PropTypes.array.isRequired
	},
	render: function(){
		var projectsList = [];
		for(var i in this.props.projects ){
			projectsList.push(<SingleProjItem project={this.props.projects[i]}/>);
		}
		return (
			<div>
				<TitleComp title="Project List "/>
				<ul className="list-group">
					{projectsList}
				</ul>
			</div>
		);
	}
});

var LatestProjectComp = React.createClass({
	render: function(){
		return (
			<div>
				<table className="table table-bordered">
					<tbody>
						<tr>
							<td>Project ID</td>
							<td>{this.props.project.id}</td>
						</tr>
						<tr>
							<td>Proj Name</td>
							<td>{this.props.project.projectName}</td>
						</tr>
						<tr>
							<td>Client Name</td>
							<td>{this.props.project.clientName}</td>
						</tr>
						<tr>
							<td>Team Lead</td>
							<td>{this.props.project.teamLead}</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		);
	}
});


React.render(<PageComp />,document.getElementById("wrapper"));
