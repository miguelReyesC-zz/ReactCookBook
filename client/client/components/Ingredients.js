import React from 'react';
var ingredient = {};
const Ingredients = React.createClass({
  renderIngredient(ingredient, i) {
    console.log("render");
    console.log(ingredient);
    console.log(i);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{ingredient.name}</strong>
          {ingredient.quantity}
          <strong className="remove-comment delete" onClick={this.removeIngredient.bind(null, i)}>&nbsp;&nbsp;&times;</strong>
        </p>
      </div>
    )
  },
  removeIngredient(i){
  	console.log("Removing the ingredient #" + i);
    console.log(this.props);
    this.props.removeIngredient(i);
    this.forceUpdate();
  },
  addIngredient(e){
    e.preventDefault();
    console.log("this");
    console.log(this);
    if(this.refs.ingredient.value == "" || this.refs.cantidad.value == ""){
        alert("There are empty values to add the ingredient");
    }else{
        console.log("Adding the ingredient!");
        ingredient = {
          name : this.refs.ingredient.value,
          quantity : this.refs.cantidad.value
        };
        //this.props.recipe.ingredients.push(ingredient);
        this.props.addIngredient(ingredient);
        //this.props.recipeToAdd.ingredients.push(ingredient);
        this.refs.ingredient.value = "";
        this.refs.cantidad.value = "";
    }
    console.log("props:");
    console.log(this.props);
    this.forceUpdate();
  },
  render() {
    console.log("state:");
    console.log(this);
    return (
      <div className="form-inline">
        {this.props.recipeToAdd.ingredients.map(this.renderIngredient)}
        <div className="row">
          <div className="form-group col-md-4">
            <input type="text" ref="ingredient" placeholder="Ingrediente" className="form-control"/>
          </div>
          <div className="form-group col-md-4">
            <input type="text" ref="cantidad" placeholder="Cantidad" className="form-control"/>
          </div>
          <div className="form-group col-md-4">
            <button type="button" className="btn btn-info" onClick={this.addIngredient}>Add Ingredient</button>
          </div>
        </div>
      </div>
    )
  }
});

export default Ingredients;