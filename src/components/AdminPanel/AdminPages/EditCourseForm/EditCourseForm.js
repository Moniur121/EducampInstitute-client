import axios from 'axios';
import React, { useState,Fragment, useEffect  } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const EditCourseForm = ({ modalIsOpen, closeModal,courseDetails}) => {
    
    const [updated, setUpdated] = useState(false)
    const [user, setUser] = useState({name: ''})
    const [editCourse, setEditCourse] = useState([])
    const [imgUrl, setImgUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const editData = {
            id: courseDetails._id,
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
        fetch(`https://afternoon-tundra-12169.herokuapp.com/courseUpdate`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editData)
        })
            .then(res => res.json())
            .then(data => {
                 closeModal();
                 toast.success('!Yea. Data Update Successfully');

            })
    }

        useEffect(() => {
            fetch('https://afternoon-tundra-12169.herokuapp.com/getPopularCourse')
                .then(res => res.json())
                .then(data => {
                    setEditCourse(data)
                })
        }, [editCourse])
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
                    
                })
        }
    return (
        <section>
            <div className="modal-area"> 
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input className="form-control"   type="text"   name="CourseName" defaultValue={courseDetails.CourseName}    {...register("courseName", { required: true })}    />
                        </div>
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input className="form-control" type="text" name="courseTitle"  defaultValue={courseDetails.CourseTitle}  {...register("courseTitle", { required: true })}/>
                            </div>
                            <div className="col-4">
                                <input className="form-control" type="text" name="instructorName" defaultValue={courseDetails.instructorName} {...register("instructorName", { required: true })} />
                            </div>
                            <div className="col-4">
                                <input className="form-control" type="number" name="CoursePricing"  defaultValue={courseDetails.CoursePricing} {...register("CoursePricing", { required: true })}/> 
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input name="lecture" className="form-control"  type="number"defaultValue={courseDetails.lecture}  {...register("lecture", { required: true })}/>
                            </div>
                            <div className="col-4">
                                <input name="quizzes"className="form-control"  type="number" defaultValue={courseDetails.quizzes} {...register("quizzes", { required: true })}/>
                            </div>
                            <div className="col-4">
                                <input className="form-control" name="duration"   type="number" defaultValue={courseDetails.duration} {...register("duration", { required: true })}/>
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <div className="col-4">
                                <input name="skillLevel"  className="form-control"   type="text" defaultValue={courseDetails.skillLevel} {...register("skillLevel", { required: true })}/>
                            </div>
                            <div className="col-4">
                                <input name="students"  className="form-control"  type="number" defaultValue={courseDetails.students} {...register("students", { required: true })}/> 
                            </div>
                            <div className="col-4">
                                <input className="form-control" name="assessments"  type="text" defaultValue={courseDetails.assessments}{...register("assessments", { required: true })}/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" {...register("description", { required: true })} name="description" defaultValue={courseDetails.description} rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <input className="form-control w-25" {...register("doctorImage")}  type="file" name="doctorImage"onChange={(e) => imgUpload(e.target.files)} />
                        </div>
                        <input className="btn btn-dark" type="submit" />
                    </form>
                </Modal> 
            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default EditCourseForm;