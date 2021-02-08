import React from 'react';
import './image-display.css';
import {NavLink} from "react-router-dom"

const Creatures = ({ data, name}) => {

  const creatureImages = data.map(creature => {
    const { id, image } = creature;
    return <NavLink to={`/puppies/${id}`}>
        <img src={image} key={id} id={id} className="app-img"/>
        </NavLink>
  });
  return (
    <>
      <h1>I fucking love {name}!</h1>
      {creatureImages}
    </>
  )

}

export default Creatures;
