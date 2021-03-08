import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <React.Fragment>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
        tempore non fugiat assumenda numquam officia ipsum veritatis est vero
        quam.
      </p>
      <button className='btn' onClick={() => history.push('/')}>Back to main</button>
    </React.Fragment>
  )
}

export default AboutPage
