import React, { Component } from 'react'
import './Shop.css'

export default class Shop extends Component {
  render() {
    return (
      <div className='bg-dark d-flex align-items-center justify-content-center flex-column' style={{ height: "100vh"}}>
        <h1 className='text-center text-white'>This layout is in the process of development</h1>

        <div id="wrapper text-center">
          <div class="gears" id="two-gears">
            <div class="gears-container">
              <div class="gear-rotate"></div>
              <div class="gear-rotate-left"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
