const initialState = {
	list : []
}

export function getCategories(state = initialState, action){
	switch(action.type){
		case "GET_CATEGORIES":
			return Object.assign({}, state, {list: action.payload})
		default:
			return state;
	}
}