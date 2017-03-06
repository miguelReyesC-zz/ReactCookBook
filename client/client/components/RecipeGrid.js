import React from 'react';
import Recipe from './Recipe';
import Photo from './Photo';

const RecipeGrid = React.createClass({
	componentWillMount(){
		this.props.showReceipes()
	},
	render(){
		return(
			<div>
				<div className="photo-grid">
					{this.props.receipes && this.props.receipes.map((recipe, id) =>
						<Recipe {...this.props} key={id} i={id} recipe={recipe}/>
					)}
				</div>
			</div>
		)
	}
});
export default RecipeGrid;