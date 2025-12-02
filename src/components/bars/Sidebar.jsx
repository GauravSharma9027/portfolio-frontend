import React from 'react'
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdMiscellaneousServices, MdOutlineContactPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const navItems = [{ label: "Home", path: "/", icon: <FaHome /> },
    { label: "About", path: "about", icon: <FaUserGraduate /> },
    { label: "Projects", path: "projects", icon: <FaDiagramProject /> },
    { label: "Services", path: "services", icon: <MdMiscellaneousServices /> },
    { label: "Contact", path: "contact", icon: <MdOutlineContactPhone /> }
    ];

    return (
        <div className='hidden sm:fixed h-screen bg-white p-10 sm:flex flex-col items-center shadow-xl shadow-gray-200 
                w-64 md:w-64 sm:w-56'>
            <div className='overflow-hidden mb-6'>
                <img src="src/assets/Logo.png" className='h-36 w-36 object-cover' alt="" />
            </div>
            <ul className='space-y-2 w-full'>
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                    shadow-sm
                    ${isActive
                                ? "bg-blue-500 text-white shadow-md scale-[1.02]"         // Active
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 hover:scale-[1.01]" // Inactive + Hover
                            }`
                        }
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
