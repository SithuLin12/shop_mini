import React from 'react'
import Master from '../layouts/Master'

function About({card,setCard}) {
  return (
    <Master card={card} setCard={setCard}>
        <div>About</div>
    </Master>
  )
}

export default About