import React from 'react';
import Receipe from './Receipe';
import Comments from './Comments';

const Single = React.createClass({
	render(){
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];
		return(
			<div className="single-photo">
				<Receipe i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
});

export default Single;