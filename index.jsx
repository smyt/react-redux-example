import React from 'react'
import ReactDOM from 'react-dom'

// Save a reference to the root element for reuse
const rootEl = document.getElementById('root') // eslint-disable-line

// Create a reusable render method that we can call more than once
const render = () => {
  // Dynamically import our main App component, and render it
  const MainApp = require('./App').default // eslint-disable-line
  ReactDOM.render(
    <MainApp />,
    rootEl,
  )
}

// Hot reloading
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line
    render(
      <NextApp />,
      rootEl,
    )
  })
}

render()
