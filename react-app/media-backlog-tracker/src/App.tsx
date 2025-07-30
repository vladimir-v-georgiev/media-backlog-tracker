import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="add.html">Add</a></li>
        <li><a href="view.html">View</a></li>
        <li><a href="update.html">Update</a></li>
        <li><a href="remove.html">Remove</a></li>
      </ul>
      <p> Hi, this is my media backlog tracker.</p>
      <div id="responseBox"></div>
    </>
  )
}

export default App
