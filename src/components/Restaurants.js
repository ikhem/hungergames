import React from 'react';
import { Button, Input } from 'semantic-ui-react';

export default function Restaurants(props){
  return(
    <div className="PickRestaurant">
      <h1>District</h1>

      <Input value={props.input} onChange={(e) => props.handleChange( e.target.value, 'restaurants')} />

      <div className='controls'>
        <Button
          size='huge'
          color='black'
          onClick={props.addRestaurant}
        >
          Add District
        </Button>
      </div>

      {
        props.restaurants.map((restaurant, i) => {
          return <p key={i}>{restaurant}</p>
        })
      }

    </div>
  )
} 