import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
// import './FacultyMenu.scss';
import "./AddContent.scss";

function AddContent() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <Breadcrumb className="bread">
          <BreadcrumbItem className="bread__item">
            <Link to="/" className="text-color3">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Add Content </BreadcrumbItem>
        </Breadcrumb>
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/addfile")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Study material</h3>
              <p>
                Here you can add Notes, Video Lectures, Assignments Or Sample
                Test Papers
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/addexternallink")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Online Resources</h3>
              <p>Here you can add any weblink or any other link.</p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/addtest")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Online Mock Tests</h3>
              <p>Link for any kind of test can be added here.</p>
            </div>
          </div>
          <div class="icard" onClick={() => history.push("/addjob")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Post Jobs</h3>
              <p>
                You can add the description such as company, salary, eligibility
                requirements for job availabilities here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default AddContent;
