import React, { useEffect, useState } from 'react';
import PopularCourseDetails from '../PopularCourseDetails/PopularCourseDetails';
import './PopularCourse.css'
const PopularCourse = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-tundra-12169.herokuapp.com/getPopularCourse')
            .then(res => res.json())
            .then(data => {
                setCourse(data)
                
            })
    }, [course])
    return (
        <section id="popularCourse">
            <div className="course-area py-5 container">
                <div className="py-4 d-flex">
                    <div className="common-border"></div>
                    <div className="ms-3">
                        <h2><span className="text-warning">Our Popular Course</span> of Institution</h2>
                        <p>It is a long established fact that a reader will be distracted<br /> by the readable content of a page</p>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {
                        course.map((courseData, index) => <PopularCourseDetails   courseData={courseData} />)
                    }
                   
                </div>
            </div>
        </section>
    );
};

export default PopularCourse;