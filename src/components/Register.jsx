import React from 'react'
import Base from './Base'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Register = () => {

    let styleComponent={
        width: 600, 
        backgroundColor: 'gray', 
        marginTop: '-50px' 

    }



    return (
        <Base title='Register page'>
            <Container fluid className='text-start p-5  rounded-2' style={styleComponent}>

                <Form.Label htmlFor="inputName">Enter your Name</Form.Label>
                <Form.Control
                    type="text"
                    id="inputName"
                    aria-describedby="nameHelpBlock"
                />

                <Form.Label htmlFor="inputEmail">Enter your Email</Form.Label>
                <Form.Control
                    type="email"
                    id="inputEmail"
                    aria-describedby="emailHelpBlock"
                />

                <Form.Label htmlFor="inputPassword5">Enter your password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />

                <Form.Label >Select the gender </Form.Label>
                <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        id="inline-radio-1"
                        value={"male"}
                    // onChange={genderOnChangeHandler}
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        id="inline-radio-2"
                        value={"female"}
                    />

                </div>

                <Form.Label >Write something about yourself ..</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                

            </Container>
        </Base>
    )
}

export default Register