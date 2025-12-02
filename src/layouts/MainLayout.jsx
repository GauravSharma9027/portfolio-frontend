import React from 'react'
import Sidebar from '../components/bars/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='overflow-hidden'>
            <Sidebar/>
            <div className="ml-0 md:ml-64 sm:ml-56">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout
