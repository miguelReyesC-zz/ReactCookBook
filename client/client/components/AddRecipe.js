var React = require('react');

var AddRecipe = React.createClass({
	componentWillMount(){
		this.props.getCategories()
		console.log("*****---------*********");
		console.log(this.props);
		console.log("*****---------*********");
	},
	save() {
		var recipe = {
			recipeName: this.refs.recipeName.value,
			category: this.refs.category.value,
			chef: this.refs.chef.value,
			preparation: this.refs.preparation.value
		};
		console.log(recipe);
		this.props.addRecipe(recipe);
	},

	render() {
		return (
			<div className="container">
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
				<button className="btn btn-primary">Save</button>

			</form>
			</div>
		);
	}

});

module.exports = AddRecipe;