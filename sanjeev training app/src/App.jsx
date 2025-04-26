import React from 'react'
import Card from './Card'
import "./App.css"

export default function App() {

  

  return (
    <div>
      <Card Name="Sanjeev" Role="Dev"/>
      <p className='para' style={{backgroundColor:"red"}}>Hello</p>
      <Card Name="Saala" Role="Dev"/>
    </div>
  )
}
