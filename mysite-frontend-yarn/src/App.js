import React, { Component } from 'react';

// STYLES

// PACKAGES
import { Link } from 'react-router-dom'

const FlowerPhoto = require('./images/flower-crown-circle.png')

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
        <a href="/resume">Resume</a>
      </nav>
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
        </div>
      </div>
      </div>
    );
  }
}

export default App;
