import React, { useState } from 'react';
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdMiscellaneousServices, MdOutlineContactPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../../assets/Logo.png"
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Home", path: "/", icon: <FaHome /> },
        { label: "About", path: "about", icon: <FaUserGraduate /> },
        { label: "Projects", path: "projects", icon: <FaDiagramProject /> },
        { label: "Services", path: "services", icon: <MdMiscellaneousServices /> },
        { label: "Contact", path: "contact", icon: <MdOutlineContactPhone /> }
    ];

    return (
        <>
            {/* Sidebar for lg and above */}
            <div className="hidden lg:fixed h-screen bg-white p-10 lg:flex flex-col items-center shadow-xl shadow-gray-200 w-64">
                <div className="overflow-hidden mb-6">
                    <img src={logoImg} className="h-36 w-36 object-cover" alt="Logo" />
                </div>
                <ul className="space-y-2 w-full">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm
                ${isActive
                                    ? "bg-blue-500 text-white shadow-md scale-[1.02]"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 hover:scale-[1.01]"}`
                            }
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </ul>
            </div>

            {/* Navbar for smaller screens */}
            <div className={`lg:hidden fixed top-0 left-0 w-full bg-white ${open ? "shadow-md" : "shadow-md"} flex items-center justify-between px-6 py-2 z-40`}>
                <img src={logoImg} className="h-12 w-12 object-cover" alt="Logo" />
                <button onClick={() => setOpen(!open)} className="text-2xl text-gray-700">
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-full sm:w-72 shadow-md bg-white transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6">
                    <div className='flex justify-end items-center sm:hidden'>
                        <button onClick={() => setOpen(!open)} className="text-2xl text-gray-700">
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div className='mb-6 w-full flex justify-center items-center'>
                        <img src={logoImg} className="h-30 w-30 object-cover" alt="Logo" />
                    </div>

                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                onClick={() => setOpen(false)} // close drawer on navigation
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm
                  ${isActive
                                        ? "bg-blue-500 text-white shadow-md scale-[1.02]"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 hover:scale-[1.01]"}`
                                }
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
