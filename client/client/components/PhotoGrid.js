import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render(){
		return(
			<div className="photo-grid">
				{this.props.posts.map((post, id) => <Photo {...this.props} key={id} i={id} post={post}/>)}
			</div>
		)
	}
});

export default PhotoGrid;