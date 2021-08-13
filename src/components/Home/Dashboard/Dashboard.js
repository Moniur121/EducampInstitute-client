import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Dashboard.css'
import PaymentProcess from './PaymentProcess/PaymentProcess';
const Dashboard = () => {
    const [courseData, setCourseData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState(null)
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getEnrollCourse')
            .then(res => res.json())
            .then(data => {
                setCourseData(data)

            })
    }, [courseData])
    const deleteProduct = (id) => {
        fetch(`https://afternoon-tundra-12169.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => data)
    }
    return (
        <section className="dashboard-container">
            <div className="container py-4">
                {
                    courseData.length?
                    <>
                       <h1 className="py-4 text-light">Shop your Book! Please pay for Card</h1>
                       <div>
                           <div className="row">
                               <div className="col-md-6">
                                   {
                                       courseData.map((item, index) => (
                                           <div className="d-flex justify-content-between align-items-center shopCart-area  p-3 py-4 m-3">
                                               <div className="card-details">
   
                                                   <img src={item.imgUrl} alt="" />
                                                   <p style={{fontWeight:'bold'}}>{item.CourseName}</p>
                                               </div>
                                               <div>
                                                   <h3 style={{ fontWeight: 'bold' }}>${item.CoursePricing}</h3>
                                               </div>
                                               <div className="deleteBtn">
                                                   <button className="btn btn-danger" onClick={() => deleteProduct(item._id)}>Delete</button>
                                               </div>
                                           </div>
                                       ))
                                   }
                               </div>
                               <div className="col-md-5 mt-3">
                                   <PaymentProcess courseData={courseData} />
                               </div>
                           </div>
                       </div>
                   </>
                   : 
                     <div className="text-light text-center">
                         <h1>Opps! Item not Found</h1>
                         <h4 >Please Shop your item</h4>
                     </div>
                }
            </div>
        </section >
    );
};

export default Dashboard;