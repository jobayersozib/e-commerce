import React from 'react'
import './Homepage.css.scss'

const Homepage =()=>{
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
              <h1 className="title">Title One</h1>
              <h3 className="sub-title">Sub-Title One</h3> 
          </div>
          <div className="content">
              <h1 className="title">Title Two</h1>
              <h3 className="sub-title">Sub-Title Two</h3> 
          </div>
          <div className="content">
              <h1 className="title">Title Three</h1>
              <h3 className="sub-title">Sub-Title Three</h3> 
          </div>
          <div className="content">
              <h1 className="title">Title Four</h1>
              <h3 className="sub-title">Sub-Title Four</h3> 
          </div>
          <div className="content">
              <h1 className="title">Title Five</h1>
              <h3 className="sub-title">Sub-Title Five</h3> 
          </div>
        </div>
      </div>
    </div>
  )
}


export {Homepage}
