/*
 * index.js is the starting point for the gulp build.
 * From here it figures out what else it needs to import and build and puts it all into a file
 * named 'app.min.js' which is included into index.html
 */

// Need React in all files with react components.
import React from 'react';

// render is used to get the react app into the DOM
import { render } from 'react-dom';

// This is our top level react component that we render to the DOM.
// Normally this will be from react-router but for our simple app this will work.
import App from './components/App';

// "target" is just an id to a div defined in index.html
render(<App />, document.getElementById('target'));
