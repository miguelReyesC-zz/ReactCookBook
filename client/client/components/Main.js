import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h1>
							<Link to="/recipes"> MiguelCookBook </Link>
						</h1>
					</div>
					<div className="col-xs-12">
						<ul className="nav nav-pills">
						  <li role="home"  className="active">
						  		<Link to="/recipes">Home</Link>
						  </li>
						  <li role="addRecipe">
						  		<Link to="/addrecipe">Add recipe</Link>
						  </li>
						  <li role="myRecipes">
						  		<Link to="/myrecipes?chef=Miguel%20Reyes">My recipes</Link>
						  </li>					  
						</ul>
					</div>
				</div>				
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;