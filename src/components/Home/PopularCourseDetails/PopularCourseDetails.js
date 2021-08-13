import React, { useContext, useState } from 'react';
import './PopularCourseDetails.css'
import ModalForm from './PreviewModal/ModalForm/ModalForm';
import { UserContext } from '../../../App';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const PopularCourseDetails = ({ courseData }) => {
    const { CourseName, CourseTitle, instructorName, CoursePricing, lecture, quizzes, duration, skillLevel, students, assessments, description, imgUrl } = courseData;
    const [modalIsOpen, setIsOpen] = useState(false);
    let history =useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleCourse = (data, e) => {

      if(loggedInUser.isSignIn){
        delete data._id
        data.email = loggedInUser.email;
         
         
        fetch(' https://afternoon-tundra-12169.herokuapp.com/addEnrollCourse', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    console.log(data)
                    toast.success('Thank You for your Enrolling Course');
                }

            })
      }else{
          history.push('/logIn')
      }
    }
    const handlePayCourse =(data)=>{
        if (loggedInUser.isSignIn) {
            data.paymentStatus ='unpaid'
            fetch(' https://afternoon-tundra-12169.herokuapp.com/payWithEnrollCourse', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        }
        else{
            history.push('/logIn')
        }
    }
    return (
        <section>
            <div className="institution-area">

                <div class="col card-effect">
                    <div class="card h-100">
                        <div className="shop-img">
                            <img src={imgUrl} class="card-img-top  card-imgage" alt="..." />
                            <div className="pricing-area">
                                <h6 className="coursePricing">$ {CoursePricing}</h6>
                            </div>
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title" style={{ color: '#3B285A',fontWeight: 'bold' }}>{CourseName}</h5>
                            <div className="card-commonBorder"></div>
                            <p className="courseTitle">{CourseTitle}</p>
                            <p ><span style={{ color: '#FFCA2C', fontWeight: 'bold',marginLeft:'-3px' }}>Author:</span><span style={{ color: '#3B285A', fontWeight: 'bold' }}>{instructorName}</span></p>
                        </div>
                        <div className="card-footer text-center card-f " >
                            <button onClick={openModal} className=" previewBtn">Preview</button>
                            <button onClick={() => {handleCourse(courseData); handlePayCourse(courseData)}} className=" buyNowBtn  ">Enroll Course</button>
                        </div>
                        <ModalForm modalIsOpen={modalIsOpen} courseName={CourseName} lecture={lecture} quizzes={quizzes} duration={duration} skillLevel={skillLevel} students={students} assessments={assessments} description={description} closeModal={closeModal} />
                    </div>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default PopularCourseDetails;