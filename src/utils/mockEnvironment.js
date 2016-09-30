import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

global.imodEm = {
	EmailReporting: {
		BaseImagePath: '/emImages',
		BaseUrl: 'https://mockapi:8052',
		AuthHeader: 'Bearer AUTHHEADERSTUFF'
	}
};

Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});
