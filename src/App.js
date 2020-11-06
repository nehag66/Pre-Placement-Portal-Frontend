import React from 'react';
import './App.css';

// import StudentLogin from './containers/StudentLogin/StudentLogin';
import StudentDashboard from './containers/StudentDashboard/StudentDashboard';
import FacultyDashboard from './containers/FacultyDashboard/FacultyDashboard';
import StudentEditProfile from './containers/StudentEditProfile/StudentEditProfile';
import FacultyEditProfile from './containers/FacultyEditProfile/FacultyEditProfile';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './containers/Main/Main';
import FileUploadTest from './containers/FileUploadTest/FileUploadTest';
import ViewResources from './containers/ViewResources/ViewResources';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

const app = () => {

  let routes = (
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route path="/studentlogin" component={StudentLogin} />  */}
      <Route path="/studentdashboard" component={StudentDashboard} />
      <Route path="/facultydashboard" component={FacultyDashboard} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/studenteditprofile" component={StudentEditProfile} />
      <Route path="/facultyeditprofile" component={FacultyEditProfile} />
      <Route path="/fileuploadtest" component={FileUploadTest} />

      <Route path="/testpaper">
        <ViewResources category="testpaper" />
      </Route>
      <Route path="/notes">
        <ViewResources category="notes" />
      </Route>
      <Route path="/assignment">
        <ViewResources category="assignment" />
      </Route>
      <Route path="/ppt">
        <ViewResources category="ppt" />
      </Route>
      <Route path="/video">
        <ViewResources category="video" />
      </Route>

      <Redirect to="/"/>
    </Switch>
  );

  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default withRouter(app);
