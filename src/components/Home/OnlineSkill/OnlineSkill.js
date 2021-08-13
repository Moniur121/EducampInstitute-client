import React from 'react';
import { CountUp } from 'use-count-up'
import OurPhilosopy from '../../img/OurPhilosopy.png';
import Kingstar from '../../img/kingstar.png';
import Success from '../../img/success.png';
import Philosopy from '../../img/pholosopy.png'
const OnlineSkill = () => {
    return (
        <section>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h1><span style={{ color: '#FFCA2C' }}>Learn A New</span> Skill online</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            +<CountUp isCounting end={1320} duration={3.2} /><span style={{ color: '#FFCA2C' }}  >Online Courses</span>
                        </p>
                        <button className="instition-btn">JOIN NOW</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 py-4">
                                <img width="50px" height="50px" src={OurPhilosopy} alt="" />
                                <h6 style={{ fontWeight: 'bold' }}>Our Philosophy</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="col-md-6">
                                <img width="50px" height="50px" src={Kingstar} alt="" />
                                <h6 style={{ fontWeight: 'bold' }}>Kingster's Principle</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="col-md-6">
                                <img width="50px" height="50px" src={Success} alt="" />
                                <h6 style={{ fontWeight: 'bold' }}>Key Of Success</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="col-md-6">
                                <img width="50px" height="50px" src={Philosopy} alt="" />
                                <h6 style={{ fontWeight: 'bold' }}>Our Philosophy</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineSkill;