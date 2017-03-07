import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Recipe = React.createClass({
	render() {
		const { recipe, i} = this.props;
		console.log("@@@@@@@@@@@");
		console.log(recipe);
		return (
			<figure className='grid-figure'>

				<div className="grid-photo-wrap">
					<Link to={`/viewrecipe/${recipe._id}`}>
				      {(() => {
				        switch (recipe.category) {
				          case "pastas":   return <img src={require('./../imgs/pastas.jpg')} alt={recipe.category}  className="grid-photo"/>;
				          case "desserts":   return <img src={require('./../imgs/desserts.jpg')} alt={recipe.category}  className="grid-photo"/>;
				          case "meats":   return <img src={require('./../imgs/meat.jpg')}  className="grid-photo"/>;
				          case "salads":   return <img src={require('./../imgs/salad.png')} alt={recipe.category}  className="grid-photo"/>;
				          default:      return <img src={require('./../imgs/pastas.jpg')} alt="..."  className="grid-photo"/>;
				        }
				      })()}						
					</Link>
					<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					<span key={recipe._id} className="likes-heart">{recipe._id}</span>
					</CSSTransitionGroup>
				</div>
				<figcaption>
				  <p>{recipe.recipeName}</p>
				  <div className="control-buttons">
				    <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {recipe.recipeName}</button>
				    <Link className="button" to={`/viewrecipe/${recipe._jd}`}>
				      <span className="comment-count">
				        <span className="speech-bubble"></span>
				        0
				      </span>
				    </Link>
				  </div>
				</figcaption>

			</figure>
		)
	}
});

export default Recipe;