import React from 'react';
import './InstitutionCard.css'
const InstitutionCard = ({ data }) => {
    const { image, title, description } = data;
    // console.log(data)
    return (
        <section>
            <div className="institution-area">
                <div class="col">
                    <div class="card h-100">
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 style={{color:'#3B285A', fontWeight:'bold' }} class="card-title">{title}</h5>
                            <p class="card-text text-muted">{description}</p>
                        </div>
                        <div className="card-footer card-f">
                            <button className="  instition-btn ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionCard;