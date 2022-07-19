import React from 'react'
import PostItem from './PostItem'

export default function PostsList({posts, title, remove}) {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>
        {title}
      </h1>
      {posts.map((item, index) => {
        return <PostItem remove={remove} post={item} number={index + 1} key={item.id}/>
      })}
    </div>
  )
}
