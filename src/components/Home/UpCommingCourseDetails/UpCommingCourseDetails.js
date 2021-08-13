import React from 'react';
import './UpCommingCourseDetails.css'
const UpCommingCourseDetails = ({data}) => {
    const{imgUrl,courseName,courseTitle,dateDays,dateMonth,location,description,time} = data;
    return (
        <section>
            <div>
                <div class="col">
                    <div class="card h-100">
                        <div className="cardImage">
                        <img src={imgUrl} class="card-img-top  card-imgage" alt="..." />
                        </div>
                        <div className="card-address">
                            <span style={{fontSize:'20px', fontWeight:'bold'}}>{dateDays}</span><br/>
                            <span>{dateMonth}</span>
                        </div>
                        <div class="card-body">
                            <div className="d-flex">
                                <p>{time}</p>
                                <p className="ms-5">{location}</p>
                            </div>
                            <hr className="card-margin"/>
                            <h5 class="card-title" style={{color:'#3B285A', fontWeight: 'bold' }}>{courseName}</h5>
                            <p style={{color:'#3B285A', fontWeight: 'bold' }}>{courseTitle}</p>
                            <p class="card-text text-muted">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpCommingCourseDetails;