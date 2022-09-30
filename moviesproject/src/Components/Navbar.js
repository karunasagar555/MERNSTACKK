import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
    <div style = {{display: 'flex', background: 'white', padding: '1rem', alignItems:'center', justifyContent:'center'}}>
      <h2 style = {{color: "#bf0000"}}>Movies App</h2>
      <h2 style = {{color: "#bf0000", marginLeft:'2rem'}}>Favourites</h2>
      </div>
    );
  }
}
