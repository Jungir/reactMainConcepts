import React, {Component} from 'react'
import {connect} from 'react-redux';
import {deletePost} from '../actions/postAction';
class Post extends Component {
  //connecting ro redux store
  handleClick = () =>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
    render(){
        console.log(this.props);
        
        const post = this.props.post ? 
        (<div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className="center">
                <button onClick={this.handleClick} className="btn grey">Delete Post</button>
            </div>
        </div>) 
        : (<div className="center">Loading post...</div>);
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{ 
    let id = parseInt(ownProps.match.params.post_id);
    return {
        post : state.posts.find(post => {
            return post.id === id;
        })
    };
}
const mapDispatchToProps = function(dispatch){
    return {
        deletePost: function (id) {
            // returns a command/action to give to the reducer;
            return dispatch(deletePost(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);