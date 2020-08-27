import React from 'react';
import fakeData from '../../fakeData/courses';
import Single from '../SingleCourse/Single';
import { useState } from 'react';
import Header from '../Header/Header';

const Courses = () => {
    const [courses, setCourses] = useState(fakeData)
    const [enroll, setEnroll] = useState([]);
    const handleEnroll = (course) => {
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
        console.log(newEnroll);
    }
    return (
    <div>
        <Header enroll={enroll}></Header>
        <div className="container">
         <div className="row">
            {
                courses.map(course => <Single course={course} handleEnroll={handleEnroll}></Single>)
            }
         </div>
      </div>
    </div>
    );
};

export default Courses;