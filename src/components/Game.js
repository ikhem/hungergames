import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import Players from '../components/Players';
import Restaurants from '../components/Restaurants';

export default class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      players: [],
      restaurants: [],
      winner: '',
      venue: '',
      tribute: '',
      district: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
    this.addRestaurant = this.addRestaurant.bind(this)
    this.random = this.random.bind(this)
    this.play = this.play.bind(this)
  }

  handleChange(e, flag){
    if(flag === 'player'){
      this.setState({
        tribute: e
      })
    } else{
      this.setState({
        district: e
      })
    }
  }

  addPlayer(){
    if(this.state.tribute){
      this.setState({
      players: [...this.state.players, this.state.tribute],
      tribute: ''
    })
    }
  }

  addRestaurant(){
    this.setState({
      restaurants: [...this.state.restaurants, this.state.district],
      district: ''
    })
  }

  play(){
    let winner = this.state.players[this.random(0, this.state.players.length - 1)]

    let venue = this.state.restaurants[this.random(0, this.state.restaurants.length - 1)]

    this.setState({
      winner: winner,
      venue: venue
    })

    if(!venue || !winner){
      winner = "Not Im"
      venue = "In-N-Out"
    }

    this.props.history.push(`/Reviews/${venue}/${winner}`)
  }  

  random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }  
  
  render(){
    const { players, restaurants } = this.state;

    return(
      <div className='Game'>

        <Button 
          size='massive'
          color='black'
          onClick={this.play}
          disabled={players.length < 2 || restaurants.length < 1}
        >
          Play
        </Button>

        <div className='row'>
          
        <Players 
          input={this.state.tribute}
          players={this.state.players}
          handleChange={this.handleChange}
          addPlayer={this.addPlayer}
        />

        <Restaurants
          input={this.state.district}
          restaurants={this.state.restaurants}
          handleChange={this.handleChange}
          addRestaurant={this.addRestaurant}
        />

        </div>
      </div>
    )
  }

}