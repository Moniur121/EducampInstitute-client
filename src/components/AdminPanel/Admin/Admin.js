import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { adminData } from './AdminData';
import './Admin.css'
const Admin = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar-icon">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={showSidebar} className="text-light"  ></FaBars>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu-bar active' : 'nav-menu-bar'} onClick={showSidebar}>
                <ul className="nav-menuItems">
                    <li className="navbarToggle">
                        <Link to="#" className="menu-bars">
                            <FaTimes className="text-light"></FaTimes>
                        </Link>
                    </li>
                    {
                        adminData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </>
    );
};

export default Admin;