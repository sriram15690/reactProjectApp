var React = require('react/addons');
var SingleProjItem = require("./singleProjComponent.js");
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
				<ul className="list-group">
					{projectsList}
				</ul>
			</div>
		);
	}
});

module.exports = ProjectListComp;

/* <TitleComp title="Project List "/>*/