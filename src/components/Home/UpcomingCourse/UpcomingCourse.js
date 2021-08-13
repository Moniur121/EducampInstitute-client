import React, { useState } from 'react';
import Slider from "react-slick";

import UpcomingCourseDAta from '../../FakeData/UpcomingCourse.json'
import UpCommingCourseDetails from '../UpCommingCourseDetails/UpCommingCourseDetails';

const UpcomingCourse = () => {
    const [data, setData] = useState(UpcomingCourseDAta)

    return (
        <section id="UpcomingCourse">
            <div className="container" >
            <div className="py-4 d-flex">
                    <div className="common-border"></div>
                    <div className="ms-3">
                        <h2><span className="text-warning">Educamp </span>UpComing Courses</h2>
                        <p>It is a long established fact that a reader will be distracted<br /> by the readable content of a page</p>
                    </div>
                </div>
                <div className="clients-logo slider container py-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            data.map(data => <UpCommingCourseDetails data={data}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingCourse;