import React from 'react'

const About = ({title,...props}) => {
  return (
    <div>
      About
    {props.descs}
    {props.desc}
    </div>
  )
}

export default About