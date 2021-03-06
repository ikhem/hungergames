import React, { Component } from 'react';
import { getLocation } from './../locate';
import { getLatLong } from './../locate';
import { Link } from 'react-router-dom';

export default class Reviews extends Component {
  constructor(props){
    super(props)

    this.state = {
      winner: 'Free For All',
      name: 'AnyWhere',
      location: [],
      img: 'In-n-Out',
      lat: 40.2338,
      long: -111.6585
    }
  }

  componentWillMount(){
    getLatLong().then(response => {
      this.setState({
        lat: response.lat,
        long: response.lon
      })
    })
  }

  componentDidMount(){
    const winner = this.props.match.params.name
    const venue = this.props.match.params.Restaurant

    getLocation(winner, venue, this.state.lat, this.state.long).then(response => {
      if(!response){
        this.setState({
          winner: winner,
          name: venue,
          location: [],
      })
      } else {
        this.setState({
          winner: winner,
          name: venue,
          location: response.location.formattedAddress,
          img: venue
        })
      }
    })
  }

  render(){

    return(
      <div className='Reviews'>
        <h1>Winner</h1>

        <div className='winner'>
          <p>{this.state.winner}</p>
        </div>

        <div className='venue'>
          <p>{this.state.name}</p>
        </div>

        <img src={`https://logo.clearbit.com/${this.state.img.replace(' ', '')}.com`} alt={this.state.name}/>

        <div className='location'>
        {
          this.state.location.map((item, i) => {
            return <p key={i}>{item}</p>
        })}
        </div>

        <Link to='/'><button>Play Again</button></Link>
      </div>
    )
  }
}