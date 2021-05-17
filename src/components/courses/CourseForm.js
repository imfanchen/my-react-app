import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";
import Select from "react-select";

function CourseForm(props) {
  
  return (
    <form onSubmit={props.onSubmit}>
      {/* <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
            onChange={props.onChange}
          />
        </div>
      </div> */}
      {/* replace by below: */}
      <TextInput
        id="title"
        label="Title"
        onChange={props.onTextChange}
        name="title"        
        value={props.course.title}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        {/* <div className="field">
          <select
            id="author"
            name="authorId"
            className="form-control"
            value={props.course.authorId || ""}
            onChange={props.onChange}
          >
            <option value="" />
            <option value="101">David Sirin</option>
            <option value="102">Fan Chen</option>
            <option value="103">Kevin Schraml</option>
            <option value="104">Kyle Stahley</option>
          </select>
        </div> */}
        {/* replaced by below: */}
        <Select
          id="author"
          name="authorId"
          options={props.authors}
          placeholder={""}
          value={"" || props.authors.filter(a => a.value === props.course.authorId)}
          onChange={props.onSelectionChange}
          isSearchable
        />
        {props.errors.authorId && (
          <div className="alert alert-danger"> {props.errors.authorId}</div>
        )}
      </div>

      {/* <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
            onChange={props.onChange}
          />
        </div>        
      </div> */}
      {/* replace by below: */}
      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        error={props.errors.category}
        onChange={props.onTextChange}
      />
      <TextInput
        id="description"
        label="Description"
        name="description"
        value={props.course.description}
        error={props.errors.description}
        onChange={props.onTextChange}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
