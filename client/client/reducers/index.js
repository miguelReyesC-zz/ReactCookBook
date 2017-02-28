import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import { showUsers } from "./users";
import { showReceipes } from "./receipes";
import { getCategories } from "./categories";

const rootReducer = combineReducers(
	{	posts, comments, 
		user: showUsers, 
		receipe: showReceipes, 
		category: getCategories,
		routing: routerReducer
	});

export default rootReducer;