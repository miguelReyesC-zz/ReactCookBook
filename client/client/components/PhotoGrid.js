import React from 'react';
import Receipe from './Receipe';

const PhotoGrid = React.createClass({
	render(){
		return(
			<div className="photo-grid">
				{this.props.posts.map((post, id) => <Receipe {...this.props} key={id} i={id} post={post}/>)}
			</div>
		)
	}
});

export default PhotoGrid;