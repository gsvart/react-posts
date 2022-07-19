import React, {useState} from 'react';
import MainInput from './UI/input/MainInput';
import MainButton from './UI/button/MainButton';

export default function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = e => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    }

    create(newPost);

    setPost({title: '', body: ''});
  }

  return (
    <form>
        <MainInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})} 
          type="text" 
          placeholder="Post title"
        />
        <MainInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})} 
          type="text" 
          placeholder="Post text"
        />
        <MainButton onClick={addNewPost}>Create</MainButton>
      </form>
  )
}
