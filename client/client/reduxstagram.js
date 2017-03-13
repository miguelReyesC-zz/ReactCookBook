import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import css from './styles/style.styl';

//Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import RecipeGrid from './components/RecipeGrid';
import AddRecipe from './components/AddRecipe';
import ViewRecipe from './components/ViewRecipe';
import MyRecipes from './components/MyRecipes';

//React router
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
				<Route path="/recipes" component={RecipeGrid}></Route>
				<Route path="/addrecipe" component={AddRecipe}></Route>
				<Route path="/viewrecipe/:recipeId" component={ViewRecipe}></Route>
				<Route path="/myrecipes" component={MyRecipes}></Route>
			</Route>		
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));