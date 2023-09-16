
import { Comment, Loader, FriendsList, CreatePost, Post } from '../components';
import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import { useAuth, usePosts } from '../hooks';

const Home = () => {

  const posts = usePosts();
  const auth = useAuth();

  

  if (posts.loading) {
    return <Loader />;
  }


  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        < CreatePost/>
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`}/>
        ))}
      </div>
      {auth.user && < FriendsList />}
    </div>
  );
};

// Home.propTypes = {
//     posts: PropTypes.array.isRequired,
// }



export default Home;
