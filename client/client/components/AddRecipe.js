import React from 'react';
import Ingredients from './Ingredients';

const AddRecipe = React.createClass({
	getInitialState: function() {
	    return {	
	    	recipeToAdd: {
				recipeName: "",
				category: "",
				chef: "",
				preparation: "",	    		
				ingredients: []
			}};
  	},
	componentWillMount(){
		this.props.getCategories();
	},
	save() {
		this.state.recipeToAdd.recipeName = this.refs.recipeName.value,
		this.state.recipeToAdd.category = this.refs.category.value,
		this.state.recipeToAdd.chef = this.refs.chef.value,
		this.state.recipeToAdd.preparation = this.refs.preparation.value,
		console.log("bug@@");
		console.log(this.state.recipeToAdd);
		this.props.addRecipe(this.state.recipeToAdd);
	},
	onAddIngredient(ingredient){
		this.state.recipeToAdd.ingredients.push(ingredient);
	},
	removeIngredient(i){
		this.state.recipeToAdd.ingredients.splice(i, 1);
	},
	render() {
		return (
			<div className="container">
			<br />
			<form action="javascript:void(0)" onSubmit={this.save}>
				
				<label>Recipe Name</label>
				<input ref="recipeName"
					   className="form-control"
				       placeholder="Enter a recipe Name..."
				       required />

				<br />
				<label>Category</label>
				<select ref="category" className="form-control" required >
	            {
	                this.props.categories.map(function(cat) {
	                    return <option value={cat._id} key={cat._id}>{cat.name}</option>
	                })
	            }
				 </ select>      

				 <br />
				<label>Chef</label>
				<input ref="chef"
					   className="form-control"
				       placeholder="Chef's name..."
				       required />		

				<br />
				<label>Preparation</label>
				<textarea ref="preparation" rows="4" cols="50"
					   className="form-control"
				       placeholder="Describe the preparation..."
				       required />	       

				<br />
				<label>Ingredients</label>
				<Ingredients removeIngredient={this.removeIngredient} addIngredient={this.onAddIngredient} {...this.props}  recipeToAdd={this.state.recipeToAdd}/>

				<br />
				<button className="btn btn-primary">Save</button>
				<br />
				<br />
			</form>
			</div>
		);
	}

});

module.exports = AddRecipe;