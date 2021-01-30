import { Post } from "../Post";

const Posts = ({ posts = [] }) => {
  if (!posts.length) {
    return <p>Постов нет</p>;
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

export { Posts };
