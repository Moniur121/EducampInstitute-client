import React from 'react';
import './PaymentProcess.css'
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from './SplitForm';
// import SplitForm from '../../Dashboard/SplitForm';
const stripePromise = loadStripe('pk_test_51Ie1L6DJGTm3SWx8UWYDTla8YgPzFgHuac3K24xEMPD5GeFvfZA45spUYTLBlvOTp6gRPl1DJn82pF0UDB3VEC1t00ioTVIRss');
const PaymentProcess = ({ courseData }) => {
    // const totalPrice = courseData.length > 0 && courseData.reduce((price, value) => price + value.CoursePricing)
    // console.log(totalPrice)
    let totalPrice =0;
    for (let i = 0; i < courseData.length; i++) {
        totalPrice += +courseData[i].CoursePricing;
        
    }
    // console.log(totalPrice)
    // console.log(courseData)
    return (
        <div className="payment">
            <Elements stripe={stripePromise}>
                <SplitForm courseData={courseData} totalPrice={totalPrice}/>
            </Elements>
        </div>
    );
};

export default PaymentProcess;