import React from 'react'
import { render } from 'react-dom'

function App() {
  return (
    <div>
      <h1>Hello World from React!</h1>
    </div>
  )
}

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
