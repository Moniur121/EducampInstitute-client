import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home'
import Admin from './components/AdminPanel/Admin/Admin';
import AdminHome from './components/AdminPanel/AdminPages/AdminHome/AdminHome'
import AddCourse from './components/AdminPanel/AdminPages/AddCourse/AddCourse'; 
import Navbar from './components/Shared/Navbar/Navbar';
import Dashboard from './components/Home/Dashboard/Dashboard';
import MyCourse from './components/AdminPanel/AdminPages/MyCourse/MyCourse';
import MakeAdmin from './components/AdminPanel/AdminPages/MakeAdmin/MakeAdmin';
import LogIn from './components/LogIn/LogIn/LogIn';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
             <Navbar navbar-bg={true}/>
            <Dashboard/>
          </PrivateRoute>
          <Route path="/logIn">
            <Navbar navbar-bg={true}/>
            <LogIn/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          {/* <<<<<< Admin Section Routing >>>>>> */}
          <Route path="/makeAdmin">
            <Admin/>
            <MakeAdmin/>
          </Route>
          <Route path="/myCourse">
            <Admin/>
            <MyCourse/>
          </Route>
          <Route path="/addPopularCourse">
            <Admin />
            <AddCourse />
          </Route>
          <Route path="/">
            <Admin />
            <AdminHome />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
