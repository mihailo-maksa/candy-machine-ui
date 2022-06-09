import React from 'react'
import spinner from '../assets/spinner.gif'
import './layout.css'

const Spinner = () => {
  return (
    <div className="">
      <br />
      <br />
      <img src={spinner} alt="Spinner" className="spinner" />
      <div className="loading">Please wait...</div>
    </div>
  )
}

export default Spinner
