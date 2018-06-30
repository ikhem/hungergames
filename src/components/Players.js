import React from 'react';
import { Button, Input } from 'semantic-ui-react';

export default function Players(props){
  return(
    <div className="PickPlayer">
      <h1>Tributes</h1>

      <Input value={props.input} onChange={(e) => props.handleChange( e.target.value, 'player')} />

      <div className="controls">
        <Button
          size='huge'
          color='black'
          onClick={props.addPlayer}
        >
          Add Tribute
        </Button>
      </div>


      {
        props.players.map((player, i) => {
          return <p key={i}>{player}</p>
        })
      }
      
    </div>    
  )
}