import React, { PropTypes } from 'react';

const AddItemForm = React.createClass({
	propTypes: {
		addHandler: PropTypes.func.isRequired
	},

	onAdd( e ) {
		e.preventDefault();

		this.props.addHandler(this.refs.item.value);

		// This could also be done with state.
		this.refs.item.value = null;
	},

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.onAdd}>
				<div className="form-group">
					<div className="col-xs-11">
						<input ref="item" type="text" className="form-control" id="itemText" placeholder="Item Text"/>
					</div>
					<div className="col-xs-1">
						<button type="submit" className="btn btn-primary btn-block">Add</button>
					</div>
				</div>
			</form>
		);
	}
});

export default AddItemForm;
