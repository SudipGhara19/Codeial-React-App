import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import { getPosts } from '../api';
import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings } from '../pages';
import { Loader, Navbar, Comment } from './';


const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={< Home />} />

          <Route exact path='/login' element={<Login/>}/>

          <Route exact path="/about" element={<About/>}/>

          <Route exact path="/user/adsd" element={<UserInfo/>}/>

          <Route path='*' element={<Page404/>}/>

          <Route exact path="/register" element={<Signup/>}/>

          <Route exact path="/settings" element={<Settings/>}/>

        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
