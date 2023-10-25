import React from 'react'
import Card from '../components/Card'

function Fullstack() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='Full stack' image='../images/fullstack/full-stack-web-development.jpeg' />
        </div>
        <div className="col-md-3">
          <Card title='Full stack' image='../images/fullstack/fullstack1.png' />
        </div>
        <div className="col-md-3">
          <Card title='Full stack' image='../images/fullstack/fullstack2.avif'/>
        </div>
        <div className="col-md-3">
          <Card title='Full stack' image='../images/fullstack/full-stack3.png'/>
        </div>
      </div>
      
    </div>
  )
}

export default Fullstack