import React,{useState,useEffect} from 'react'; 
import './AdminHome.css'
const AdminHome = () => {
    const [enrollCourse ,setEnrollCourse] = useState([]); 
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getPayWithEnrollCourse')
        .then(res=>res.json())
        .then(data =>{
            setEnrollCourse(data)
        })
    }, [enrollCourse])
    const deleteCourse = (id) => {
        console.log(id)
        fetch(`https://afternoon-tundra-12169.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <section className="admin-bg">
            <div className="container">
            <div className="courseDetails-table py-5">
                <h2 className="py-3 text-light">User Enroll Course</h2> 
                    <table class="table table-secondary text-center table shadow">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">SL.No</th>
                                <th scope="col">COURSE_NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">COURSE-TYPE</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {
                                enrollCourse.map((value, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.CourseName}</td>
                                        <td>${value.CoursePricing}</td>
                                        <td>{value.CourseTitle}</td>
                                        <td>{value.email}</td>
                                        <td>
                                        <button onClick={() => deleteCourse(value._id)} className="btn btn-danger ms-2">Delete</button>
                                        </td>

                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;