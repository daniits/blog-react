import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/SinglePost/SinglePost'
import "./postdetails.css"

const PostDetails = () => {
  return (
    <div className='postdetails__section'>
      <SinglePost />
      <SideBar />
    </div>
  )
}

export default PostDetails