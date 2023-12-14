import React from 'react'

function Content({part}) {
  return(
    <li key={part.id}>{part.name}: {part.exercises}</li>
  )
}

export default Content