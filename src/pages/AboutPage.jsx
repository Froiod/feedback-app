import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <p>This Project is based on Traversy react course</p>
      <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage