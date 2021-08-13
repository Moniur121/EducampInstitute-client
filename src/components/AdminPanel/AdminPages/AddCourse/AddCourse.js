import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import './AddCourse.css'
const AddCourse = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    // <<<<< form data upload here>>>>>
    const onSubmit = (data, e) => {
        console.log(data)
        const addPopularCourse = {
            CourseName: data.courseName,
            CourseTitle: data.courseTitle,
            instructorName: data.instructorName,
            CoursePricing: data.CoursePricing,
            lecture: data.lecture,
            quizzes: data.quizzes,
            duration: data.duration,
            skillLevel: data.skillLevel,
            students: data.students,
            assessments: data.assessments,
            description: data.description,
            imgUrl: imgUrl
        }
        fetch(' https://afternoon-tundra-12169.herokuapp.com/popularCourses', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addPopularCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    console.log(data)
                    toast.success('!Yea. Course Added successfully');
                }

            })
    }
    // <<<<< form data upload end here>>>>>
    // <<<<<< File Upload Start here >>>>>
    const imgUpload = (file) => {
        console.log(file)
        const imgData = new FormData();
        imgData.set('key', 'fa0671d09ed646de7785a0b91b3d0f5d')
        imgData.append('image', file[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // <<<<<< File Upload End here >>>>>
    return (
        <section className="admin-bg">
            <div className="container py-5">
                <div className="popularCourse-form ">
                    <div className="py-3 text-dark" style={{fontWeight: "bold"}}>
                        <h3>Add  Another Course</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input   className="form-control" type="text" name="courseName" placeholder="Enter CourseName" {...register("courseName", { required: true })} />
                            {errors.courseName && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input className="form-control" type="text" name="courseTitle" placeholder="Enter Course Title" {...register("courseTitle", { required: true })} />
                                {errors.courseTitle && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input className="form-control" type="text" name="instructorName" placeholder="Enter Instructor Name" {...register("instructorName", { required: true })} />
                                {errors.instructorName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input className="form-control" type="number" name="CoursePricing" placeholder="Enter Course Pricing" {...register("CoursePricing", { required: true })} />
                                {errors.CoursePricing && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input name="lecture" {...register("lecture", { required: true })} className="form-control" placeholder="Enter Lectures" type="number" />
                                {errors.lecture && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input name="quizzes" {...register("quizzes", { required: true })} className="form-control" placeholder="Enter Quizzes" type="number" />
                                {errors.quizzes && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input {...register("duration", { required: true })} className="form-control" name="duration" placeholder="Enter Duration" type="number" />
                                {errors.duration && <span className="text-danger">This field is required</span>}
                            </div>
                        </div> 
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input name="skillLevel" {...register("skillLevel", { required: true })} className="form-control" placeholder="Enter SkillLevel" type="text" />
                                {errors.skillLevel && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input name="students" {...register("students", { required: true })} className="form-control" placeholder="Enter Students" type="number" />
                                {errors.students && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input {...register("assessments", { required: true })} className="form-control" name="assessments" placeholder="Enter Assessments" type="text" />
                                {errors.assessments && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" placeholder="Enter Description Here" rows="3" {...register("description", { required: true })}></textarea>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <input className="form-control w-25" onChange={(e) => imgUpload(e.target.files)} type="file" name="doctorImage" />
                        </div>

                        <input className="addCourse-btn" type="submit" />
                    </form>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default AddCourse;