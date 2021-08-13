import React from 'react';
import './HeaderMain.css'
import Slider from "react-slick"; 
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section>
            <div>
                <Slider {...settings}>
                    <div className="headerSlider-container">
                        <h3 style={{color: '#f5f5f5', fontWeight: 'bold' }}>Welcome to University</h3>
                        <h1 className="mt-4" style={{color: '#f5f5f5', fontWeight: 'bold',fontSize: '55px'}}>Master the skills to<br/>Drive your Carrier</h1>
                        <p className="text-light mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa eius molestias<br/>blanditiis expedita dolor. Delectus, autem esse? Vel, explicabo commodi labore deleniti soluta voluptatum!</p>
                        <button className="contactBtn"><a href="#contact" style={{textDecoration:'none',color:'#4C1864'}}>Contact Us</a></button>
                        <button className="getStartedBtn ms-4" ><a href="#popularCourse" style={{textDecoration:'none',color:'#4C1864'}}>Get Started</a></button>
                    </div>
                    <div className="headerSlider-container">
                        <h3 style={{color: '#f5f5f5', fontWeight: 'bold' }}>Welcome to University</h3>
                        <h1 className="mt-4" style={{color: '#f5f5f5', fontWeight: 'bold',fontSize: '55px'}}>Master the skills to<br/>Drive your Appointment</h1>
                        <p className="text-light mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa eius molestias<br/>blanditiis expedita dolor. Delectus, autem esse? Vel, explicabo commodi labore deleniti soluta voluptatum!</p>
                        <button className="contactBtn"><a href="#contact" style={{textDecoration:'none',color:'#4C1864'}}>Contact Us</a></button>
                        <button className="getStartedBtn ms-4" ><a href="#popularCourse" style={{textDecoration:'none',color:'#4C1864'}}>Get Started</a></button>
                    </div>
                    <div className="headerSlider-container">
                        <h3 style={{color: '#f5f5f5', fontWeight: 'bold' }}>Welcome to University</h3>
                        <h1 className="mt-4" style={{color: '#f5f5f5', fontWeight: 'bold',fontSize: '55px'}}>Learn your Skills<br/>to Build a Carrier</h1>
                        <p className="text-light mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa eius molestias<br/>blanditiis expedita dolor. Delectus, autem esse? Vel, explicabo commodi labore deleniti soluta voluptatum!</p>
                        <button className="contactBtn"><a href="#contact" style={{textDecoration:'none',color:'#4C1864'}}>Contact Us</a></button>
                        <button className="getStartedBtn ms-4" ><a href="#popularCourse" style={{textDecoration:'none',color:'#4C1864'}}>Get Started</a></button>
                    </div>
                    <div className="headerSlider-container">
                        <h3 style={{color: '#f5f5f5', fontWeight: 'bold' }}>Welcome to University</h3>
                        <h1 className="mt-4" style={{color: '#f5f5f5', fontWeight: 'bold',fontSize: '55px'}}>Learn your Skills<br/>to Build a Carrier</h1>
                        <p className="text-light mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa eius molestias<br/>blanditiis expedita dolor. Delectus, autem esse? Vel, explicabo commodi labore deleniti soluta voluptatum!</p>
                        <button className="contactBtn"><a href="#contact" style={{textDecoration:'none',color:'#4C1864'}}>Contact Us</a></button>
                        <button className="getStartedBtn ms-4" ><a href="#popularCourse" style={{textDecoration:'none',color:'#4C1864'}}>Get Started</a></button>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default HeaderMain;