import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import App from '../App';
import AddItemForm from '../AddItemForm';

describe('App', () => {
	let AppDom;

	before(() => {
		// Make sure this happens inside a "before" or "it" to avoid potential issues.
		AppDom = shallow(<App />);
	});

	it('should have an h1 with text "This is the App"', () => {
		const form = AppDom.find(AddItemForm);

		assert.lengthOf(form, 1);
		assert.isFunction(form.props().addHandler);
	});
});
