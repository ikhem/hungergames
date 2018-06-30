import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import header from './header.png'
import './App.css'

import Home from './components/Home';
import Game from './components/Game';
import Reviews from './components/Reviews';

export default (
  <Router>
    <div className="main">
      <img className='header' src={header} alt='hunger games logo'/>  
      <Route exact path='/' component={Home} />  
      <Route path='/game' component={Game} />
      <Route path='/reviews/:restaurant/:name' component={Reviews} />
    </div>
  </Router>
)