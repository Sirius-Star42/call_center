import React from 'react'

import { v4 as uuidv4 } from 'uuid';
console.log('first', uuidv4())
fetch('/users')
  .then(res=> {console.log('res', res)})
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
