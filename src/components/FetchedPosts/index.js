import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, showLoader } from "../../redux/actionCreators";

import Loader from "../Loader";
import { Post } from "../Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const bLoading = useSelector(state => state.app.loading);

  const clickHandler = () => {
    dispatch(showLoader());
    dispatch(fetchPosts());
  };

  if (bLoading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button className="btn btn-info" onClick={clickHandler}>
        Загрузить посты
      </button>
    );
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

export default FetchedPosts;
