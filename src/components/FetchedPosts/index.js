import { Post } from "../Post";

const FetchedPosts = ({ posts = [] }) => {
  if (!posts.length) {
    return <button>Загрузить посты</button>;
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

export { FetchedPosts };
