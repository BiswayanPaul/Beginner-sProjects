import React from 'react'
import Accordion from './Components/Accordion'
import { accordionData } from './Utils/content'

const App = () => {
  return (
    <div className='accordion'>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}

    </div>
  )
}

export default App