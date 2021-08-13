import React, { useEffect, useState } from 'react';
import EditCourseForm from '../EditCourseForm/EditCourseForm';
import './MyCourse.css'
const MyCourse = () => {
    const [courseDetails, setCourseDetails] = useState({})
    const [course, setCourse] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getPopularCourse')
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [course])

    const deleteCourse = (id) => {
        console.log(id)
        fetch(`https://afternoon-tundra-12169.herokuapp.com/deleteCourse/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const editBtn = (id) => {
        // console.log(id)
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section className="admin-bg">
            <div className="container py-4">
                <div className="courseDetails-table py-5">
                <h2 className="py-3 text-light">My All Course</h2> 
                    <table class="table table-secondary text-center table shadow">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">SL.No</th>
                                <th scope="col">COURSE_NAME</th>
                                <th scope="col">COURSE_TYPE</th>
                                <th scope="col">INS.NAME</th>
                                <th scope="col">PRICING</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {
                                course.map((value, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.CourseName}</td>
                                        <td>{value.CourseTitle}</td>
                                        <td>{value.instructorName}</td>
                                        <td>{value.CoursePricing}</td>

                                        <td>
                                            <button onClick={()=>editBtn(value._id)} className="btn btn-info" onClick={()=>{openModal();setCourseDetails(value)} } >Edit</button>
                                            <button onClick={() => deleteCourse(value._id)} className="btn btn-danger ms-2">Delete</button>
                                        </td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <EditCourseForm  courseDetails={courseDetails}  closeModal={closeModal} modalIsOpen={modalIsOpen}/>
        </section>
    );
};

export default MyCourse;