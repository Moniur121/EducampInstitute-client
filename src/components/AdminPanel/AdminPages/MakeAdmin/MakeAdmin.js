import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import './MakeAdmin.css'
import "react-toastify/dist/ReactToastify.css";
const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const makingAdmin = {
            name: data.name,
            email: data.email,
        }
        fetch(' https://afternoon-tundra-12169.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(makingAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    e.target.reset();
                    toast.success('!Yea. Make Admin Successfully');
                }

            })
    }
    return (
        <section className="admin-bg">
            <div className="container py-5">
                <h1 className="mb-3 text-light">Make your Admin</h1>
                <div className="admin-formArea">
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-4">
                            <input type="text" name="name"  {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="email" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group text-right">
                            <button type="submit" className="addCourse-btn">Make Admin</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default MakeAdmin;