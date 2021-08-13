import React from 'react';
import './Footer.css'
import { FaBookReader, FaCartPlus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const Footer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        e.target.reset();
    }
    return (
        <section className="footer-area" id="contact">
            <div className="container py-4">
                <div className="footer-title d-flex justify-content-between">
                    <div className="d-flex ">
                        <span className="bookReader"><FaBookReader /></span>
                        <div>
                            <span style={{ fontSize: '30px', color: '#f5f5f5', fontWeight: 'bold' }}>Educamp</span><br />
                            <span style={{ fontSize: '15px', color: '#f5f5f5', fontWeight: 'bold' }}>Education & Courses</span>
                        </div>
                    </div>
                    <div>
                        <button className="instition-btn">JOIN NOW</button>
                    </div>
                </div>
                <div className="hr-border"></div>
                {/* <hr className="hr-border"/> */}
                <div className="footer-main py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{ color: '#f5f5f5' }}>Sign Up For A Newsletter</h5>
                            <hr style={{ color: '#f5f5f5', width: '150px' }} />
                            <p style={{ color: '#f5f5f5', }}>Weekly Breaking News Analysis And Cutting Edge<br /> Advices On Job Searching.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input className="form-control" type="email" name="email" placeholder="Enter Email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <input className="btn btn-warning" type="submit" />
                            </form>
                        </div>
                        <div className="col-md-2">
                            <h5 style={{ color: '#f5f5f5' }}>Company</h5>
                            <hr style={{ color: '#f5f5f5', width: '100px' }} />
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                        </div>
                        <div className="col-md-2">
                            <h5 style={{ color: '#f5f5f5' }}>Get it Touch</h5>
                            <hr style={{ color: '#f5f5f5', width: '100px' }} />
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                        </div>
                        <div className="col-md-2">
                            <h5 style={{ color: '#f5f5f5' }}>Courses</h5>
                            <hr style={{ color: '#f5f5f5', width: '100px' }} />
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                            <p className="text-light">Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
                <hr style={{color:'#f5f5f5'}}/>
                <div className="created-by text-light text-center">
                    <p>Crated by & Moniur Rahman Shimul</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;