import React, { useEffect, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import PaymentSuccess from "../PaymentSuccess";



// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
    // const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitForm = ({ totalPrice, courseData }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [payDisable, setPayDisable] = useState(false);
    const [updatingData, setUpdatingData] = useState(false);
    const [valueAbleData, setValueAbleData] = useState([])
    const [enrollCourse ,setEnrollCourse] = useState([]); 
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getPayWithEnrollCourse')
        .then(res=>res.json())
        .then(data =>{
            setEnrollCourse(data)
        })
    }, [enrollCourse])
    useEffect(() => {
        fetch(`https://afternoon-tundra-12169.herokuapp.com/courseUpdatingData`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(valueAbleData)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data+'updated')
                setValueAbleData(data)
            })
    }, [valueAbleData])
    let courseId =enrollCourse.find(value=>value._id);
    // console.log(courseId._id)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {

        event.preventDefault();
        console.log('hello')

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        let payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
        setErrorMessage(payload)
    };
    const paymentSuccess = (id) => {
        fetch(`https://afternoon-tundra-12169.herokuapp.com/paymentSuccess/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => data)
        // closeModal()
    }

    return (

        <form onSubmit={handleSubmit}> 
            <p style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>Please Pay</p>
            <label className="input-field  mb-3">
                Name
                <input   onChange={e => setInputVal(e.target.value)} type="text" name="name" className="form-control text-input" id="" />
            </label>
            <br />
            <label className="input-field  mb-3">
                Email
                <input   onChange={e => setInputVal(e.target.value)} type="email" name="email" className="form-control text-input" id="" />
            </label>
            <br />
            <label className="input-field mb-3">
                Card number
                <CardNumberElement 
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    
                    onChange={event => {
                        // console.log('hello event',event.complete)
                        setPayDisable(event.complete)
                        // console.log("CardNumberElement [change]", event);
                        
                    }}
                    
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <label className="input-field mb-3">
                Expiration date
                <CardExpiryElement
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        setPayDisable(event.complete)
                        // console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <label className="input-field mb-3">
                CVC
                <CardCvcElement
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        setPayDisable(event.complete)
                        // console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <button onClick={() => { openModal(); paymentSuccess();setValueAbleData({ paid: "paid", id: courseId._id }) }} disabled={!payDisable}  className="pay-btn" type="submit"   >
                ${totalPrice} Pay
            </button>
            <PaymentSuccess closeModal={closeModal} modalIsOpen={modalIsOpen} />
        </form>
    );
};
export default SplitForm;