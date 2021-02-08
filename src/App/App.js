import React, { Component } from 'react';
import './App.css';
import {Switch, Route, NavLink} from "react-router-dom"
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import CreatureDetails from '../Creatures/CreatureDetails'
import Home from '../Home/Home';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Shart</NavLink>
        </nav>
        <h1>Puppies or Shart?</h1>
        <Route exact path="/" component={Home}/>
        <Route exact path="/puppies" 
            render={() => <Creatures name="puppies" data={puppies} />} />
        <Route path="/sharks" 
            render={() => <Creatures name="sharks" data={sharks} />} />
        <Route path="/puppies/:id" exact 
            render={({match}) => {
              const { id } = match.params;
              const creatureToRender = puppies.find(creature => creature.id === parseInt(id))
              return <CreatureDetails {...creatureToRender} />
              }} />
      </main>
    );
  }
}
