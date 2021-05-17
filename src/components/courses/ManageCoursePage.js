import React, { useState, useEffect } from "react";
import { Prompt } from "react-router";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi";
import * as authorApi from "../../api/authorApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  // debugger;
  const [prompt, setPrompt] = useState(false);
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState([]);
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
    description: "",
  });

  useEffect(() => {
    authorApi.getAuthors().then((_authors) => setAuthors(_authors));
  }, []); // dependency array tells react only update when state changes

  useEffect(() => {
    const slug = props.match.params.slug; // from the path "/courses/:slug"
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  // function handleChange(event) {
  //   const updatedCourse = {
  //     ...course,
  //     [event.target.name]: event.target.value,
  //   }; // use spread operator to create a copy
  //   setCourse(updatedCourse);
  // } // replaced by below:

  function handleTextChange({ target }) {
    // { target } is destructing of the event
    setPrompt(true);
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function handleSelectionChange(event) {
    // event is an author object
    const updatedCourse = {
      ...course,
      authorId: event.value,
    };
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault(); // this will prevent the page from posting back to the server
    if (!isFormValid()) return;
    courseApi.saveCourse(course).then(() => {
      setPrompt(false);
      props.history.push("/courses"); // this go back the courses page using the history
      toast.success("Course saved.");
    });
  }

  function isFormValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";
    if (!course.description) _errors.description = "Description is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0; // form is valid if the errors object has not properties
  }

  return (
    <>
      <h2>Manage Course</h2>
      <p>{props.match.params.slug}</p>
      <CourseForm
        course={course}
        errors={errors}
        onTextChange={handleTextChange}
        onSelectionChange={handleSelectionChange}
        onSubmit={handleSubmit}
        authors={authors}
      />
      <Prompt
        when={prompt}
        message="Are you sure you want to leave this page without saving?"
      />
    </>
  );
};

export default ManageCoursePage;
