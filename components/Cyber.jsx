import React from 'react'
import Card from '../components/Card'

function Cyber() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-4">
          <Card title='What Is Hacking? Types of Hacking & More' image='../cyber.jpeg' description='Have you ever wondered what hacking is all about? It’s a big deal in today’s' url='https://www.guvi.in/blog/what-is-hacking/' />
        </div>
        <div className="col-md-4">
          <Card title='Cybersecurity Vs Ethical Hacking: Top 10 Differences' image='../c1.jpg' description='Cybersecurity & Ethical hacking and have been key in making sure that your data online' url='https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/' />
        </div>
        <div className="col-md-4">
          <Card title='What is Cybersecurity? Importance and its uses & the growing challenges in 2023!

' image='../c2.jpg' description='Look around today, you will witness that we are more reliant on technology and devices

' url='https://www.guvi.in/blog/what-is-cybersecurity/'/>
        </div>
        <div className="col-md-4">
          <Card title='Top 10 Ethical Hacking Books for Beginner to Advanced

' image='../c3.jpg' description='Did you know that according to the University of Maryland hackers attack every 39 seconds

' url='https://www.guvi.in/blog/best-ethical-hacking-books/'/>
        </div>
      </div>
      
    </div>
  )
}

export default Cyber