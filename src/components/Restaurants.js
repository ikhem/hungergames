import React from 'react';

export default function Restaurants(props){
  return(
    <div className="PickRestaurant">
      <h1>District</h1>

      <input value={props.input} onChange={(e) => props.handleChange( e.target.value, 'restaurants')} />

      <button onClick={props.addRestaurant}>Add District</button>

      {
        props.restaurants.map((restaurant, i) => {
          return <p key={i}>{restaurant}</p>
        })
      }

    </div>
  )
} 