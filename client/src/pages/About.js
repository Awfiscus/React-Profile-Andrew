import React from "react";
import ProfilePic from "../images/Profile pic maybe (2).jpg";
import "./About.css";

function About() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <section className="container" id="profile">
        <div className="row justify-content-between">
          <div className="col-sm-4">
            <img
              src={ProfilePic}
              className="img-fluid"
              id="bioPic"
              alt="profile-picture"
            />
          </div>
          <div className="col-sm-7" id="bio">
            <p>
              Hello. I'm Andrew Fiscus. Thank you for taking the time to visit
              my page. I am currently working towards getting my bachelors in
              computer science from Colorado State Univerisity - Global Campus.
              During this time I am working as a junior developer. Currently I
              am based out of Denver, Colorado. If you like what you see under
              the portfolio tab contact me through the methods below.
            </p>
            <br />
            <h4>Contact Info</h4>
            <ul>
              <li>Email: Awfiscus@comcast.net</li>
              <li>Phone: 303-898-1134</li>
            </ul>
            <br />
            <h3>Links: </h3>
            <a
              onClick={() => handleClick(`https://github.com/Awfiscus`)}
              href=""
              style={{ color: "#e76f51" }}
              id="github"
            >
              My Github Account
            </a>
            <br />
            <a
              onClick={() =>
                handleClick(
                  `https://www.linkedin.com/in/andrew-fiscus-1bb3a4206/`
                )
              }
              href=""
              style={{ color: "#e76f51" }}
              id="linkedin"
            >
              My LinkedIn Profile
            </a>
            <br />
            <a
              onClick={() =>
                handleClick(
                  `https://docs.google.com/document/d/1H57__vOj2dL9kXxX8z83TjkEfZOeng3BmfeRkUClHkQ/edit?usp=sharing`
                )
              }
              href=""
              style={{ color: "#e76f51" }}
              id="resume"
            >
              Andrew Fiscus Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
