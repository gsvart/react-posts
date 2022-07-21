import React, {useState} from "react";
import PostForm from "./Components/PostForm";
import PostsList from "./Components/PostsList";
import MainSelect from "./Components/UI/select/MainSelect";

import './Styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Javascript most popular programming language.'},
    {id: 2, title: 'Python', body: 'The best laguage for data science is a Python'},
    {id: 3, title: 'C# or C++', body: 'Kings of creating multiplatform apps'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = target => {
    setPosts(posts.filter(post => post.id !== target.id));
  }

  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}} />
      <div>
        <MainSelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Сортировка по'}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      <hr style={{margin: "15px 0"}} />
      {
        posts.length !== 0
        ? <PostsList remove={removePost} posts={posts} title={'Posts about Javascript'}/>
        : <h1 className='empty-box'>Ooops, nothing to read!</h1> 
      }
    </div>
  );
}

export default App;
