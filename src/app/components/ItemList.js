import React, { PropTypes } from 'react';

const ItemRow = React.createClass({
	propTypes: {
		item: PropTypes.object.isRequired,
		deleteHandler: PropTypes.func.isRequired
	},

	onDelete() {
		this.props.deleteHandler(this.props.item);
	},

	render() {
		const { item } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<button style={{marginRight: 10}} type="button" className="btn btn-danger btn-sm" onClick={this.onDelete}>X</button>
					{item.text} ({item.id})
				</div>
			</div>
		);
	}
});

const ItemList = React.createClass({
	propTypes: {
		items: PropTypes.array.isRequired,
		onRemoveItem: PropTypes.func.isRequired
	},

	render() {
		const { items, onRemoveItem } = this.props;

		return (
			<div className="panel panel-default">
				<div className="panel-heading">Our Items</div>
				<div className="panel-body">
					{items.map(( item ) => (
						<ItemRow key={item.id} item={item} deleteHandler={onRemoveItem}/>
					))}
				</div>
			</div>
		);
	}
});

export default ItemList;
