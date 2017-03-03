const initialState = {
	list : []
}

export function showReceipes(state = initialState, action){
	switch(action.type){
		case "SHOW_RECEIPES":
			return Object.assign({}, state, {list: action.payload})
		case "ADD_RECIPE":
			console.log("action:::::");
			console.log(action);
			return [...state,{
				recipeName: action.recipeName,
				category: action.category,
				chef: action.chef,
				preparation: action.preparation,
				ingredients: action.ingredients
			}];
		default:
			return state;
	}
}