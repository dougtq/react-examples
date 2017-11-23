import React from 'react'
import Members from './member'

export default props => (
  <div>
    {React.cloneElement(props.children, props)}
    <Members name='Douglas' lastName='Alves' age='21' />
    <Members name='Vander' lastName='Alves' age='55' />
    <Members name='Enzo' lastName='Alves' age='1' />
    <Members name='Kanye' lastName='Alves' age='46' />
    <Members name='Donda' lastName='Alves' age='3' />
  </div>
)
