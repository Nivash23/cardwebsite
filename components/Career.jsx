import React from 'react'
import Card from './Card'
import career from './images/career.jpeg'

function Career() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='Career' image={career } />
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../components/images/career1.jpeg'/>
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../components/images/career2.png' />
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../components/images/career3.jpeg' />
        </div>
      </div>
      
    </div>

  )
}

export default Career