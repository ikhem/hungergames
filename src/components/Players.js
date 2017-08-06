import React from 'react';

export default function Players(props){
  return(
    <div className="PickPlayer">
      <h1>Tributes</h1>

      <input value={props.input} onChange={(e) => props.handleChange( e.target.value, 'player')} />

      <button onClick={props.addPlayer}>Add Tribute</button>

      {
        props.players.map((player, i) => {
          return <p key={i}>{player}</p>
        })
      }
      
    </div>    
  )
}