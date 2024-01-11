import React, { useState } from 'react'
import Base from './Base'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, NavLink } from 'react-router-dom';

const Register = () => {

    const [data,setData]= useState({
        name:'',
        email:'',
        password:'',
        cnfpassword:'',
        about:'',
        gender:''
    })


    const handleChange = (newValue ,fieldName ) => {
        setData( (data )=> ({
            ...data,
            [fieldName]:newValue
        }))

    }

    const clearData = () =>{
        setData({
            name:'',
            email:'',
            password:'',
            cnfpassword:'',
            about:'',
            gender:''
        }

        )
    }
    

    let styleComponent = {
        width: 600,
        backgroundColor: 'gray',
        marginTop: '-50px'

    }

    const registrtnFrm = () => {
        return (
            <Container fluid >
                <Row>   {JSON.stringify(data)}
                    <Col sm={{ span: 6, offset: 3}}>

                        <Card className=' border-0 shadow p-5'>
                            <Card.Body>
                                <h3 className='text-center'>SignUp Here</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Enter your name </Form.Label>
                                        <Form.Control
                                         type="text"
                                          placeholder="Enter Name"
                                          value={data.name}
                                          onChange={ (event) =>handleChange(event.target.value,"name")}
                                        />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                         type="email"
                                         placeholder="Enter email"
                                         value={data.email}
                                         onChange={ (event) =>handleChange(event.target.value,"email")} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPasswrd">
                                        <Form.Label>Passwrd</Form.Label>
                                        <Form.Control
                                         type="password"
                                         placeholder="Enter password"
                                         value={data.password}
                                         onChange={ (event) =>handleChange(event.target.value,"password")} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRePasswrd">
                                        <Form.Label>Re-enter Password</Form.Label>
                                        <Form.Control 
                                        type="password"
                                        placeholder="Enter password"
                                        value={data.cnfpassword}
                                        onChange={ (event) =>handleChange(event.target.value,"cnfpassword")}  />

                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Seect gender </Form.Label>
                                        <div>
                                            <Form.Check
                                                inline
                                                label="Male"
                                                name="gender"
                                                type="radio"
                                                id={`inline-${"type"}-1`}
                                                value={"m"}
                                                checked={data.gender==='m'}
                                                onChange={ (event) =>handleChange(event.target.value,"gender")}
                                            />

                                            <Form.Check
                                                inline
                                                label="Female"
                                                name="gender"
                                                type="radio"
                                                id={`inline-${"type"}-1`}
                                                value={"f"}
                                                checked={data.gender==='f'}
                                                onChange={ (event) =>handleChange(event.target.value,"gender")}
                                            />
                                        </div>

                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                    <Form.Label> Tell use something about yourself  </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '200px' }}
                                            value={data.about}
                                            onChange={ (event) =>handleChange(event.target.value,"about")}
                                        />
                                    </Form.Group>

                                    <Container>
                                    <p className='text-center'>Already Registered | <Link to="/login">Login</Link> </p>

                                    </Container>

                                    <Container  className='text-center'>
                                        <Button inline className=' m-1 '>signup</Button>
                                        <Button inline onClick={clearData}>reset</Button>
                                    </Container>

                                </Form>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>
        )
    }



    return (
        <Base title='Register page'>
            {registrtnFrm()}
        </Base>
    )
}

export default Register