import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    return(
      <div className='Home'>
        <h1>Rules:</h1>

        <ol>
          <li>"Pick" your volunteers</li>
          <li>Choose your venue of choice</li>
          <li>Winner treats everyone to the venue of choice</li>
        </ol>

        <Link to='/Game'>
          <Button size='massive' color='black'>Start</Button>
        </Link>
      </div>
    )
  }
}