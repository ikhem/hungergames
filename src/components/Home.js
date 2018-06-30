import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    return(
      <div className='Home'>
        <h1>Rules:</h1>

        <p>"Pick" your volunteers</p>
        <p>Choose your venues of choice</p>
        <p>Winner treats everyone to the venue of choice</p>

        <Link to='/Game'>
          <Button size='massive' color='black'>Start</Button>
        </Link>
      </div>
    )
  }
}