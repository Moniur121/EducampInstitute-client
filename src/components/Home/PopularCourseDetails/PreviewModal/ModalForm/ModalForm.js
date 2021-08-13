import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '80%',
        height:'50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const ModalForm = ({ modalIsOpen, closeModal, courseName, lecture, quizzes, duration, skillLevel, students, assessments, description }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = () => {
        closeModal();
    }
    return (
        <section>
            <div >
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}

                    contentLabel="Example Modal"

                >
                    <div className="   " >
                        <h2 className="text-center  text-warning mb-3">{courseName}</h2>
                        <div className="modal-border"></div>
                        <div className="row p-5">
                            <div className="col-md-7 ">
                                <h4 style={{ fontWeight: 'bold' }}>OverView</h4>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6>Lectures </h6>
                                        <h6>{lecture}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                    <div className="d-flex justify-content-between">
                                        <h6>Quizzes </h6>
                                        <h6>{quizzes}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                    <div className="d-flex justify-content-between">
                                        <h6>Duration </h6>
                                        <h6>{duration}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                    <div className="d-flex justify-content-between">
                                        <h6>Skill level </h6>
                                        <h6>{skillLevel}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                    <div className="d-flex justify-content-between">
                                        <h6>Students </h6>
                                        <h6>{students}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                    <div className="d-flex justify-content-between">
                                        <h6>Assessments </h6>
                                        <h6>{assessments}</h6>

                                    </div>
                                    <hr style={{ marginTop: '-5px' }} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h4 style={{ fontWeight: 'bold' }}>Course Description</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                        <button onClick={closeModal} className="btn btn-dark text-light"  style={{marginLeft:'50%'}}>!Oky,Back?</button>
                    </div>
                </Modal>
            </div>
        </section>
    );
};

export default ModalForm;