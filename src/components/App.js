import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage1 from "./courses/CoursesPage1";
import CoursesPage2 from "./courses/CoursesPage2";
import ManageCoursePage from "./courses/ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // function getPage() {
  //   const route = windows.location.pathname;
  //   if (route === "/courses") return <CoursePage/>
  //   if (route === "/about") return <AboutPage/>
  //   return <HomePage/>;
  // }
  // replaced by react route below:

  return (
    <div className="container-fluid">
      <ToastContainer autoClose ={3000} hideProgressBar/>
      <Header />
      {/* {getPage()} */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/courses" to="/courses1" />
        <Route path="/courses1" component={CoursesPage1} />
        <Route path="/courses2" component={CoursesPage2} />
        {/* it's important to place the more specific route on top of less specific route */}
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
