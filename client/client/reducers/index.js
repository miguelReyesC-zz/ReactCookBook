import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import { showUsers } from "./users";

const rootReducer = combineReducers({posts, comments, user: showUsers, routing: routerReducer});

export default rootReducer;