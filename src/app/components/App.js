import React from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import _ from 'lodash';

function ID() {
	return Math.random().toString(36).substr(2, 9);
}

// All react components must start with a capital letter.
const App = React.createClass({
	getInitialState() {
		return {
			items: []
		};
	},

	componentWillMount() {
		// Called just before the component is added to the DOM
		// Only called once
	},

	componentDidMount() {
		// Called after the component is added to the DOM
	},

	componentWillUnmount() {
		// Called when it is decided the component will be removed from the DOM
	},

	onAdd( newValue ) {
		let items = this.state.items;
		items.push({ id: ID(), text: newValue });
		this.setState({ items });
	},

	onDelete( item ) {
		const items = _.filter(this.state.items, (i) => i.id !== item.id);
		this.setState({ items });
	},

	render() {
		const { items } = this.state;

		return (
			<div className="container-fluid" style={{ paddingTop: 10 }}>
				<AddItemForm addHandler={this.onAdd}/>
				<ItemList items={items} onRemoveItem={this.onDelete}/>
			</div>
		);
	}
});

export default App;
