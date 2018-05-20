import React, { Component } from 'react';

// STYLES
import { Grid } from 'semantic-ui-react'

// PACKAGES
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Grid textAlign={"center"}>
          <Grid.Column width={9}>
            <p>The future site for Briana Baker.</p>
            <p>I'm a FullStack Web Developer living in NYC. I used to travel around the world, chasing sunshine and exotic food, and now I'm in love with this city and here to stay. In my free time I thrift shop, coffee shop, and picnic.</p>
            <p>
              <Link to='/resume'>Resume</Link> | <a href="https://github.com/brianabaker/">Github</a> | <a href="https://medium.com/@brianaclairbaker/">Medium</a> | <a href="https://twitter.com/brianacodes">Twitter</a> | <a href="https://www.linkedin.com/in/brianaclairbaker/">LinkedIn</a>
            </p>
          </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
