import React from 'react';
import { FaHome,FaEdit,FaQrcode,FaUserMd,FaCartPlus} from "react-icons/fa";
 
export const adminData=[
    {
        title: 'Home',
        path: '/',
        icon: <FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <FaQrcode/>,
        cName: 'nav-text'
    },
    {
        title: 'My Courses',
        path: '/myCourse',
        icon: <FaEdit/>,
        cName: 'nav-text'
    },
   
    {
        title: 'Add Course',
        path: '/addPopularCourse',
        icon: <FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Add Admin',
        path: '/makeAdmin',
        icon: <FaUserMd/>,
        cName: 'nav-text'
    } 
]