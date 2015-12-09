import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';
import routes from './routes';
const store = configureStore();

render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			{routes}
		</Router>
	</Provider>,
	document.getElementById('app')
);
