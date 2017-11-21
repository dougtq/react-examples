import React from 'react'

export default props => (
  <div>
    <h2>
      {props.name} <strong>{props.lastName}</strong>, {props.age}
    </h2>
  </div>
)
