import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage2() {
  const [courses, setCourses] = useState([]);  

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []); // dependency array tells react only update when state changes

  return (
    <>
      <h2>Courses Page using Function Component</h2>
      <Link to="/course" className="btn btn-primary">
            Add Course
      </Link>
      <CourseList courses={courses}/>
    </>
  );
}

export default CoursesPage2;
