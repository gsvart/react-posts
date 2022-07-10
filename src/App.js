import React, {useState} from "react";
import PostsList from "./Components/PostsList";

import './Styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Some description'},
    {id: 2, title: 'Javascript 2', body: 'Some description'},
    {id: 3, title: 'Javascript 3', body: 'Some description'},
  ]);

  return (
    <div className="App">
      <PostsList posts={posts} title={'Posts about Javascript'}/>
    </div>
  );
}

export default App;
