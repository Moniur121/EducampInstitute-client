import React from 'react';
import Institution from '../Institution/Institution';
import Navbar from '../../Shared/Navbar/Navbar';
import PopularCourse from '../PopularCourse/PopularCourse';
import './Home.css'
import UpcomingCourse from '../UpcomingCourse/UpcomingCourse'
import ClientsReview from '../ClientsReview/ClientsReview';
import OnlineSkill from '../OnlineSkill/OnlineSkill';
import CountingExplore from '../CountingExplore/CountingExplore';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
 const Home = () => {
    return (
        <div className="home-container" id="home">
            <Navbar/>
            <Header/>
            <Institution/>
            <PopularCourse/>
            <CountingExplore/>
            <UpcomingCourse/>
             
            <ClientsReview/>
            <OnlineSkill/>
            <Footer/>
        </div>
    );
};

export default Home;