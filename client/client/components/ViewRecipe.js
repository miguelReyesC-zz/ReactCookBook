import React from 'react';
import axios from 'axios';

var recipe = {};

const ViewRecipe = React.createClass({
	getInitialState: function() {
	    return {	
	    	recipe: {
				recipeName: "",
				category: "",
				chef: "",
				preparation: "",	    		
				ingredients: []
			}};
  	},
	componentDidMount: function() {
    var _this = this;
	const { recipeId } = this.props.params;
	console.log(recipeId);
	axios.get("http://localhost:3000/receipes/" + recipeId)
		.then(function (response) {
			console.log("Response >");
			recipe = response.data;
			_this.setState({
            	recipe: response.data
          	});
		})
		.catch(function (error) {
			console.log("Response error >");
			console.log(error);
		});
	},
	render(){
		this.recipe = recipe;
		console.log(this.recipe);
		return(
			<div className="container">
				<div>
					<label>Recipe Name</label>
					<p>{this.recipe.recipeName}</p>
					<br />
				</div>
				<div>
					<label>Chef</label>
					<p>{this.recipe.chef}</p>
				<br />
				</div>
				<div>
					<label>Category</label>
					<p className="category">{this.recipe.category}</p>
					<br />
				</div>
				<div>
					<label>Preparation</label>
					<p>{this.recipe.preparation}</p>
					<br />
				</div>
				<div>
					<label>Ingredients</label>
					{this.recipe.ingredients && this.recipe.ingredients.map((ingredient, index) => 
						<p key={index}> <strong>{ingredient.name} : </strong>  <span>{ingredient.quantity}</span></p>
					)}
					<br />
				</div>
				<div className="recipe-detail">
				{(() => {
				switch (this.recipe.category) {
				  case "pastas":   return <img src={require('./../imgs/pastas.jpg')} alt={recipe.category} />;
				  case "desserts":   return <img src={require('./../imgs/desserts.jpg')} alt={recipe.category} />;
				  case "meats":   return <img src={require('./../imgs/meat.jpg')} />;
				  case "salads":   return <img src={require('./../imgs/salad.png')} alt={recipe.category} />;
				  default:      return <img src={require('./../imgs/pastas.jpg')} alt="..." />;
				}
				})()}
				</div>
			</div>
		)
	}
});

export default ViewRecipe;