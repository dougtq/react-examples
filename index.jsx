import React from 'react'
import ReactDOM from 'react-dom'
import { First, Second } from './components'
import Families from './family'

ReactDOM.render(
  <div>
    <First value='Meu primeiro component com props' />
    <Second value='Meu segundo component com props' />
    <Families />
  </div>,
  document.getElementById('root')
)
