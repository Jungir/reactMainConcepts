import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect} from 'react-redux';
class Home extends Component {
   //now storing data & getting them through redux
    render(){
        // console.log(this.props);
        
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="pokeball"/>
                    <div className="card-content">  
                        <Link to={`/${post.id}`}>
                        <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>)
            })
        ) : (<div className="center">No posts yet</div>);
        return (
        <div className="container home">
            <h4>Home</h4>
            {postList}
        </div>)
    }
}
const mapPieceOfStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapPieceOfStateToProps)(Home);
