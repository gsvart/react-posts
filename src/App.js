import React, {useState} from "react";
import PostForm from "./Components/PostForm";
import PostsList from "./Components/PostsList";

import './Styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Some description'},
    {id: 2, title: 'Javascript 2', body: 'Some description'},
    {id: 3, title: 'Javascript 3', body: 'Some description'},
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = target => {
    setPosts(posts.filter(post => post.id !== target.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostsList remove={removePost} posts={posts} title={'Posts about Javascript'}/>
    </div>
  );
}

export default App;
