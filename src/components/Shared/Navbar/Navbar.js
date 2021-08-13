import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaBookReader, FaCartPlus } from 'react-icons/fa';
import { UserContext } from '../../../App';
import firebaseConfig from '../../LogIn/LogIn/firebase.config';
import "firebase/auth";
import firebase from "firebase/app";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [loggedInUser.email])
    console.log(admin)
    console.log(loggedInUser)
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <section >
            <div className="slider-area   ">
                <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
                    <div class="container">
                        <div className="d-flex ">
                            <span className="bookReader"><FaBookReader /></span>
                            <div>
                                <span style={{ fontSize: '30px', color: '#f5f5f5', fontWeight: 'bold' }}>Educamp</span><br />
                                <span style={{ fontSize: '15px', color: '#f5f5f5', fontWeight: 'bold' }}>Education & Courses</span>
                            </div>
                        </div>
                        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <Link to="/home" className="nav-link   text-light me-3  ">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light me-3" href="#popularCourse">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light me-3" href="#UpcomingCourse">UpcomingCourse</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light me-3 " href="#contact">ContactUs</a>
                                </li>
                                {
                                    loggedInUser.email &&
                                    <>
                                    {!admin && <li class="nav-item">
                                        <Link to="/dashboard" className="nav-link text-light me-3">Dashboard</Link>
                                    </li>}
                                   {admin && <li class="nav-item">
                                        <Link to="/admin" className="nav-link text-light me-3">Admin</Link>
                                    </li>}
                                </>
                                }

                                {
                                    loggedInUser.email ? <li class="nav-item">
                                        <Link to="/logIn" className="nav-link px-3"><button className="logIn-btn" onClick={handleLogout}>LogOut</button></Link>
                                    </li> : <li class="nav-item">
                                        <Link to="/logIn" className="nav-link px-3"><button className="logIn-btn">LogIn</button></Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;