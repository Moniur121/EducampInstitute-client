import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './LogIn.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FaGooglePlus } from 'react-icons/fa';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
};

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photoUrl: '',
        error: '',
        success: false
    })

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        console.log('hello')
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name)
                    history.replace(from);
                    setLoggedInUser(newUserInfo)
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res.user)
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }
        const updateUserName = (name) => {
            const user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: name,
                photoURL: user.photo
            }).then(res => {
                // Update successful
                console.log('user name updated successfully')
                // ...
            }).catch(error => {
                // An error occurred
                // ...
            });
        }
    }
    const googleSignProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleSignProvider)
            .then(res => {
                const { photoUrl, email, password, displayName } = res.user;
                const singnedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoUrl
                }
                setLoggedInUser(singnedInUser)
                history.replace(from);

            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
            // console.log(isEmailValid)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <section className="dashboard-container">
            <div className="container " style={{ paddingTop: '70px' }}>

                <div className="logIn-formArea">
                    <h3 className="text-center text-light" style={{ fontWeight: 'bold' }}>Educamp LogIn</h3>
                    <div className="logIn-border"></div>
                    <div className="form-area mt-2">
                        <form onSubmit={handleSubmit(onSubmit)}  >
                            {
                                newUser &&
                                <div className="mb-3">
                                    <label className="text-light py-2" style={{ fontWeight: 'bold' }}>Full Name</label>
                                    <input className="form-control" type="text" name="name" onBlur={handleBlur} required placeholder="Enter your Name" />
                                </div>
                            }
                            <div className="mb-3">
                                <label className="text-light py-2" style={{ fontWeight: 'bold' }}>Email / UserName</label>
                                <input onBlur={handleBlur} required className="form-control" type="text" name="email" placeholder="Enter Email" />

                            </div>
                            <div className="mb-3">
                                <label className="text-light py-2" style={{ fontWeight: 'bold' }}>Your Password</label>
                                <input className="form-control" type="password" name="password" placeholder="Enter Password" onBlur={handleBlur} required />
                            </div>
                            {
                                newUser ? <button type="submit" className="form-submitBtn"  >Sign Up</button> : <button type="submit" className="form-submitBtn ">SignIn</button>
                            }
                        </form>
                        <div class="form-check  text-light text-bolder py-3">
                            <input onChange={()=> setNewUser(!newUser)} class="form-check-input chcek-box" type="checkbox" value="" name="newUser" id="flexCheckDefault" />
                            <label class="form-check-label" for="newUser">
                            Sign up for new Account
                            </label>
                        </div>
                        <p className="text-danger text-center">{user.error}</p>
                        {
                            user.success && <p className="text-success">User {newUser ? 'created' : 'Logged In'}Successfully</p>
                        }
                        <div className="text-center">
                            <h3>Or</h3>
                            <hr />
                            <button className="googleSignIn"onClick={handleGoogleSignIn}  >
                                <div className="d-flex justify-content-between">
                                    <p>Google SignIn</p>
                                    <span className=" google-icon" style={{color:'red'}}>< FaGooglePlus/></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;