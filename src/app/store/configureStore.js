import { applyMiddleware, createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import { createHistory } from 'history';
import routes from '../routes';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
