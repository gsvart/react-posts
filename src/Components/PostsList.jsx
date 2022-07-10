import React from 'react'
import PostItem from './PostItem'

export default function PostsList({posts, title}) {
  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>
        {title}
      </h1>
      {posts.map(item => {
        return <PostItem post={item} key={item.id}/>
      })}
    </div>
  )
}
