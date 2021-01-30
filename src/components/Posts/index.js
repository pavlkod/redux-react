import { Post } from "../Post";

import { connect } from "react-redux";

const Posts = ({ posts = [] }) => {
  if (!posts.length) {
    return <p>Постов нет</p>;
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Posts);
