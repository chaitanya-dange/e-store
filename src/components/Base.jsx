import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Footer from './Footer'

const Base = ({title="Default title", desc="Welcome to store",children}) => {
    

  return (
    <div>
        <Container fluid className='text-center bg-dark p-5 text-white' >
            <h3>{title}</h3>
            <p>{desc&&desc}</p>
        </Container>

        {children}

        <Footer/>

    </div>
  )
}

export default Base