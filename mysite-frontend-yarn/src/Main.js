import React, { Component } from 'react';

// STYLES

// PACKAGES
import { Link } from 'react-router-dom'

import AboutMe from './AboutMe'

class DefaultSplash extends Component {

  handleImageChange = () => {
    console.log('in the handle image change')
    
  }
  render() {
    return (
      <div>
            <p>The future site for Briana Baker.</p>
            <p>I'm a Full Stack Software Engineer living in NYC. I used to travel around the world, chasing sunshine and exotic food, and now I'm in love with this city and here to stay.</p>
            <p>
              <Link to='/resume'>Resume</Link> | <a href="https://github.com/brianabaker/">Github</a> | <a href="https://medium.com/@brianaclairbaker/">Medium</a> | <a href="https://twitter.com/brianacodes">Twitter</a> | <a href="https://www.linkedin.com/in/brianaclairbaker/">LinkedIn</a>
            </p>
      </div>
    );
  }
}

export default DefaultSplash;
