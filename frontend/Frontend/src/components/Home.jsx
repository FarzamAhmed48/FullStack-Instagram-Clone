import React from 'react'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import SiderightBar from './SiderightBar'
import useGetAllPosts from '@/hooks/useGetAllPosts'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUser'
import useGetAllMessages from '@/hooks/useGetAllMessages'

const Home = () => {
  
  useGetAllPosts();
  useGetSuggestedUsers();
  return (
    <div className='flex'>
      <div className='flex-grow'>
        <Feed/>
        <Outlet/>
      </div>
      <SiderightBar/>
    </div>
  )
}

export default Home
