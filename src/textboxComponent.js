var React = require('react/addons');
var TextBox = React.createClass({
	propTypes: {
		labelName: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired
		
	},
	render: function(){
		return(
				<div className="form-group">
				
				<label htmlFor={this.props.name}>
					{this.props.labelName}
				</label>
				<input type="text" className="form-control" ref={this.props.name} name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
				
				</div>
			);
	}
});
module.exports = TextBox;
