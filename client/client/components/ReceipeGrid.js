import React from 'react';
import Receipe from './Receipe';

/*const ReceipeGrid = React.createClass({
	render(){
		return(
			<div className="photo-grid">
				{this.props.posts.map((post, id) => 
					<Receipe {...this.props} key={id} i={id} post={post}/>
				)}
			</div>
		)
	}
});*/

const ReceipeGrid = React.createClass({
	componentWillMount(){
		this.props.showUsers()
	},
	renderUsersList(){
		return this.props.users.map((user) => {
			console.log(user);
			return(
				<div key={user._id}>{user.name}</div>
			)
		})
	},
	render(){
		return(
			<div>
				{this.renderUsersList() }
			</div>
		)
	}
});

export default ReceipeGrid;