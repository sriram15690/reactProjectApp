var React = require('react/addons');
var SingleProjItem = React.createClass({
	PropTypes: {
		project: React.PropTypes.object.isRequired
	},
	showDetails: function(event){
		console.log("in 1 single click");
	},
	render: function(project){
		return (
			<li ref="singleProj" key={this.props.project.id} className="list-group-item" onClick={this.showDetails}>{this.props.project.projectName}</li>
		);
	}
});

module.exports = SingleProjItem;

