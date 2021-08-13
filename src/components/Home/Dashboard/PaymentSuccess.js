import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        backgroundColor: '#8ADBCA',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const PaymentSuccess = ({ modalIsOpen, closeModal}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        closeModal();
    }
    return (
        <section>
            <div className="container">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="success-area text-center" >
                            <h1>Congratulations!</h1>
                            <p>Happy Shopping</p>
                        </div>
                        <button type='submit' class="btn btn-dark text-center " style={{marginLeft:'30%'}}><Link to="/home">Back to Home</Link></button>
                    </form>
                </Modal >
            </div>
        </section>
    );
};

export default PaymentSuccess;