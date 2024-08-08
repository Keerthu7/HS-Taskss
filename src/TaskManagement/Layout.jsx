import React from 'react'
import TaskList from './TaskList'
import MenuBar from './MenuBar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
       
       <MenuBar/>
        <TaskList/>
        <Outlet/>
    </div>
  )
}

export default Layout;