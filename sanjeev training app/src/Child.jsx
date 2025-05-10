import React from 'react'
import GrandChild from './GrandChild'

export default function Child(props) {
  return (
    <div>Child
        <GrandChild count={props.count} setCount={props.setCount} />
    </div>
  )
}
