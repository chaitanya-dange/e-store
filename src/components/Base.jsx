import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Footer from './Footer'
import Button from 'react-bootstrap/esm/Button'
import { Link, NavLink } from 'react-router-dom'

const Base = ({title="Default title", desc="Welcome to store",buttonEnable=false, buttonText="Shop Now",buttonType="success",to,children}) => {
    
    let styleContainer={
        height:"250px"
    }

  return (
    <div>
        <Container fluid className='text-center bg-dark p-5 text-white ' style={styleContainer}  >
            <h3>{title}</h3>
            <p>{desc&&desc}</p>
            {/* {buttonEnable && <Button variant={buttonType}>{buttonText}</Button> } */}

            {buttonEnable && (
                <Link to={to}><Button variant={buttonType}>{buttonText}</Button></Link>
            )}

            {/* {buttonEnable && <a as={NavLink} to={to}><Button variant={buttonType}>{buttonText}</Button></a> } */}
           
        </Container>

        {children}

        <Footer/>

    </div>
  )
}

export default Base