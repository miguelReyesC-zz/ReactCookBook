const initialState = {
	list : []
}

export function showReceipes(state = initialState, action){
	switch(action.type){
		case "SHOW_RECEIPES":
			return Object.assign({}, state, {list: action.payload})
		default:
			return state;
	}
}