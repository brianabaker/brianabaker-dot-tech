import React, { Component } from 'react';

// STYLES

// PACKAGES
import { Link } from 'react-router-dom'

const FlowerPhoto = require('./images/flower-crown-circle.png')
const LinkedIn = require('./images/linkedinblue.ico')
const Medium = require('./images/mark-medium-32px.png')
const Github = require('./images/mark-github-32px.png')
const Twitter = require('./images/mark-twitter-32px.png')
const Resume = require('./images/resume-small.png')
class App extends Component {

  state = {
    img: FlowerPhoto
  }

  render() {
    return (
      <div className="wrapper">
      <div id="was-navigation">
      </div>
      <div className= "banner">
        <div className="column" id="main-left-column">
            Hey, I'm Briana.
        <div id="sub-heading">
          I'm a Full Stack Software Engineer.
        </div>
          <img src={this.state.img} alt="headshot" id="headshot"/>
        </div>
        <div className="column" id="main-right-column">
          <p>Returning to tech after 8 years and 24 countries abroad.</p>
          <p>Miami >> Everywhere >> NYC</p>
          <p>I want to collaborate to make good products and try to make this world a little bit better.</p>
          <a href="https://learn.co/brianabaker/resume"><div id="resume"><i class="far fa-file"></i>   Resume</div></a>
          <a href="https://www.linkedin.com/in/brianaclairbaker/"><img src={LinkedIn} title="LinkedIn"  alt="LinkedIn Link" className="logos"/></a>
          <a href="https://github.com/brianabaker/"><img src={Github} alt="Github Link" title="Github"  className="logos"/></a>
          <a href="https://medium.com/@brianaclairbaker/"><img src={Medium} title="Medium" alt="Medium Blog Link" className="logos"/></a>
          <a href="https://twitter.com/brianacodes"><img src={Twitter} title="Twitter" alt="Twitter Link" className="logos"/></a>

        </div>
      </div>
      </div>
    );
  }
}

export default App;
