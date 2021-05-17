import React from "react";
import { getCourses } from "../../api/courseApi";

class CoursesPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", courses: [], filteredCourses: [] };
    this.onChange = this.onChange.bind(this);
  }

  // state = {name: ""} // or use this line to avoid writing constructor

  componentDidMount() {
    // getCourses().then(function (_courses) {
    //   this.setState({ courses: _courses });
    // });
    // getCourses().then((_courses) => {
    //   this.setState({ courses: _courses });
    // });
    // replaced by lambda expression below:
    getCourses().then((_courses) => this.setState({ courses: _courses }));
  }

  onChange(event) {
    this.setState({
      name: event.target.value,
      filteredCourses: this.state.courses.filter((c) =>
        c.title.includes(event.target.value)
      ),
    });
  }

  renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    let filtering = this.state.name !== "";
    let dataGrid;
    if (filtering) {
      dataGrid = (
        <tbody> {this.state.filteredCourses.map(this.renderRow)}</tbody>
      );
    } else {
      dataGrid = <tbody> {this.state.courses.map(this.renderRow)}</tbody>;
    }

    return (
      <>
        <h2>Courses Page using Class Component</h2>
        <label for="filter">Filter: &nbsp;</label>
        <input id="filter" onChange={this.onChange} value={this.state.name} />

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          {/* <tbody>
            { this.state.courses.map(c => {
              return <tr>
                <td>{c.title}</td>
                <td>{c.authorId}</td>
                <td>{c.category}</td>
              </tr>
            })}
          </tbody> */}
          {/* replaced by below: */}
          {dataGrid}
        </table>
      </>
    );
  }
}

export default CoursesPage1;
