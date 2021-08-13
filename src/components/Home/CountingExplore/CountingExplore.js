import React from 'react';
import { CountUp } from 'use-count-up'
import './CountingExplore.css'
const CountingExplore = () => {
    return (
        <section className="CountingExplore mb-5">
            <div className="container py-5 ">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col text-center">
                        <h1 style={{ fontWeight: 'bold',color:'#3B285A'}}>
                            <CountUp isCounting end={3000} duration={3.2} />+
                        </h1>
                        <h5>Completed Projects</h5>
                    </div>
                    <div className="col text-center">
                        <h1 style={{ fontWeight: 'bold',color:'#3B285A'}}>
                            <CountUp isCounting end={2500} duration={3.2} />+
                        </h1>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className="col text-center">
                        <h1 style={{ fontWeight: 'bold',color:'#3B285A'}}>
                            <CountUp isCounting end={1500} duration={3.2} />+
                        </h1>
                        <h5>Questions Answered</h5>
                    </div>
                    <div className="col text-center">
                        <h1 style={{ fontWeight: 'bold',color:'#3B285A'}}>
                            <CountUp isCounting end={1000} duration={3.2} />+
                        </h1>
                        <h5>Ordered Coffee's</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountingExplore;