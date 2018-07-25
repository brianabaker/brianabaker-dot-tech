
import React from "react";

const ProfessionalPhoto = require('./images/briana-compressed.jpg')

const Resume = (props) => {

  return(
    <div className="wrapper">
      <nav role="navigation">
        <a href="https://github.com/brianabaker/">Github</a>
        <a href="https://medium.com/@brianaclairbaker/">Medium</a>
        <a href="https://twitter.com/brianacodes">Twitter</a>
        <a href="https://www.linkedin.com/in/brianaclairbaker/">LinkedIn</a>
        <a href="https://learn.co/brianabaker/resume">Resume</a>
      </nav>
      <div className= "banner">
        <div id="resume-left-column">
          <img src={ProfessionalPhoto} alt="headshot" id="smaller-headshot"/>
          <h1>Briana Baker</h1>
          <h3>Brooklyn, NYC</h3>
          <h3>brianaclairbaker@gmail.com</h3>
        </div>
        {/* <div className="column" id="resume-right-column">
          <h1>Briana Baker</h1>
          <h3>Brooklyn, NYC</h3>
          <h3>brianaclairbaker@gmail.com</h3>
        </div> */}
      </div>
      <div className= "main-container">
        <h2>Work History</h2>
        <h2><strong>Girls Who Code</strong></h2>
        <h3>Summer Immersion Program Instructor</h3>
        <p><em>Summer 2018</em></p>
        <div className="sub-container">
          <p>Lead Instructor at GWC's Summer Immersion Program, a 7 week program aimed at empowering high school girls to pursue their interests in tech. Taught in over 60 locations in the United States, I lead the team at Facebook HQ in Menlo Park.</p>
          <p>A competitive program to get into, the 7 week program is organized as follows: Week 1: Scratch, Week 2: Python, Week 3: Robotics, Week 4: HTML/CSS/JavaScript, Week 5: Data Science, Week 6 & 7: Capstone Projects</p>
          <ul>
            <li>Lead a teaching including myself and two TA's</li>
            <li>Main point of contact with the team at Facebook for classroom logistics</li>
            <li>Organized lesson plans, designed code-alongs</li>
            <li>Lectured each day on the subject matters of the week</li>
            <li>Maintained classroom energy and safety of 20 high school girls</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
