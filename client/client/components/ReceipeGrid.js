import React from 'react';
import Receipe from './Receipe';
import Photo from './Photo';

const ReceipeGrid = React.createClass({
	componentWillMount(){
		this.props.showReceipes()
	},
	render(){
		return(
			<div>
				<div className="photo-grid">
					{this.props.receipes.map((recipe, id) => 
						<Receipe {...this.props} key={id} i={id} recipe={recipe}/>
					)}
				</div>
				<div className="photo-grid">
					{this.props.posts.map((post, id) => 
						<Photo {...this.props} key={id} i={id} post={post}/>
					)}
				</div>
			</div>
		)
	}
});

/*const ReceipeGrid = React.createClass({
	componentWillMount(){
		this.props.showReceipes()
	},
	renderReceipesList(){
		return this.props.receipes.map((receipe) => {
			console.log(receipe);
			return(
				<div key={receipe._id}>{receipe.recipeName}</div>
			)
		})
	},
	render(){
		return(
			<div>
				{this.renderReceipesList() }
			</div>
		)
	}
});*/

export default ReceipeGrid;