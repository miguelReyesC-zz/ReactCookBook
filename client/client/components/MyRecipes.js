import React from 'react';
import axios from 'axios';
import Recipe from './Recipe';

var recipes = [];

const RecipeGrid = React.createClass({
	getInitialState: function() {
	    return {	
	    	recipes: []
	    };
  	},
	componentDidMount: function() {
	console.log(this);
    var _this = this;
	const { chef } = this.props.location.query;
	console.log(chef);
	axios.get("http://localhost:3000/myreceipes?chef=" + chef)
		.then(function (response) {
			console.log("Response >");
			recipes = response.data;
			_this.setState({
            	recipes: response.data
          	});
		})
		.catch(function (error) {
			console.log("Response error >");
			console.log(error);
		});
	},
	render(){
		console.log(recipes);
		return(
			<div className="row">
				<br />
				<div className="photo-grid">
					{recipes && recipes.map((recipe, id) =>
						<Recipe {...this.props} key={id} i={id} recipe={recipe}/>
					)}
				</div>
			</div>
		)
	}
});
export default RecipeGrid;