import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
import thunk from 'redux-thunk';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

// Add Redux web tools
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

//const store = createStore(rootReducer, defaultState, enhancers);

const createStoreWithMiddleware = 
  applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;