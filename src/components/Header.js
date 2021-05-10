import React from 'react'
import logo from '../piano.svg'

export default function header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KEYBOARD SIMULATOR
        </p>
      </header>
    </div>
  )
}
