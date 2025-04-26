import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.Image} alt="" />

      <div>
        <h3>Name: {props.Name}</h3>
        <h3>Team: {props.Team}</h3>
        <h3>Trophies: {props.Trop}</h3>
      </div>
    </div>
  )
}
