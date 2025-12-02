import React from 'react'
import Sidebar from '../components/bars/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='overflow-hidden'>
            <Sidebar/>
            <div className="ml-0 mt-10 lg:mt-0 lg:ml-64">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout
