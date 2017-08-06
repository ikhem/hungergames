import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    return(
      <div className='Home'>
        <h1>Rules:</h1>

        <p>"Pick" your volunteers</p>
        <p>Choose your venues of choice</p>
        <p>Winner treats everyone to the venue of choice</p>

        <Link to='/Game'><button className='Start'>Start</button></Link>
      </div>
    )
  }
}