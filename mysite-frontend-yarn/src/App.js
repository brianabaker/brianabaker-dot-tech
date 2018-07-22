import React, { Component } from 'react';

// STYLES

// PACKAGES
import { Link } from 'react-router-dom'

const ProfessionalPhoto = require('./images/professional-circle-crop802.png')
const FlowerPhoto = require('./images/flower-crown-circle.png')

// import AboutMe from './AboutMe'

class App extends Component {

  state = {
    img: FlowerPhoto
  }

  render() {
    return (
      <div className="wrapper">
      <nav role="navigation">
        <a href="https://github.com/brianabaker/">Github</a>
        <a href="https://medium.com/@brianaclairbaker/">Medium</a>
        <a href="https://twitter.com/brianacodes">Twitter</a>
        <a href="https://www.linkedin.com/in/brianaclairbaker/">LinkedIn</a>
        <a href="https://learn.co/brianabaker/resume">Resume</a>
      </nav>
      <div className= "main-container">
        <div className="column" id="left-column">
          <div id="banner-text">
            Hey, I'm Briana.
          </div>
          <img src={this.state.img} alt="headshot" id="headshot"/>
        </div>
        <div className="column" id="right-column">
          <p>Returning to tech after 8 years and 24 countries abroad.</p>
          <p>Miami >> Everywhere >> NYC</p>
          <p>I want to collaborate to make good products and try to make this world a little bit better.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
