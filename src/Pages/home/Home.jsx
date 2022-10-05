import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__section">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home
