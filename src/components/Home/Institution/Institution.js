import React, { useState } from 'react';
import './Institution.css'
import InstitutionData from '../../FakeData/Institution.json'
import InstitutionCard from '../InstitutionCard/InstitutionCard'
const Institution = () => {
    const [data, setData] = useState(InstitutionData)
    return (
        <section>
            <div className="institution-area py-5 container">
                <div className="py-4 d-flex">
                    <div className="common-border"></div>
                    <div className="ms-3">
                        <h2><span className="text-warning">Why Choose</span> Our Institution</h2>
                        <p>It is a long established fact that a reader will be distracted<br /> by the readable content of a page</p>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        data.map(data => <InstitutionCard data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Institution;