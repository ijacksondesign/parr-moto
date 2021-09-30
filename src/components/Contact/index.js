import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

function Contact() {
    return(
        <Container id='contact' as='section' className='p-5' style={{ backgroundColor: 'white' }} fluid>
            <Row className='px-5 justify-content-center'>
                <Col xs={12} md={4} className='d-flex flex-column justify-content-center align-items-start mx-5'>
                    <h2 className='text-secondary'>
                        contact
                    </h2>
                    <hr className='mt-2 mb-3' />
                    <p className='text-dark'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col xs={12} md={6} className='p-4' style={{ backgroundColor: '#003764' }}>
                    <Form>
                        <FloatingLabel
                            controlId='floatingName'
                            label='Name'
                            className='m-3 text-dark'
                        >
                            <Form.Control type='text' placeholder='Enter Name' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId='floatingEmail'
                            label='Email Address'
                            className='m-3 text-dark'
                        >
                            <Form.Control type='email' placeholder='email@example.com' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId='floatingSubject'
                            label='Subject Line'
                            className='m-3 text-dark'
                        >
                            <Form.Control type='text' placeholder='Subject Line' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId='floatingMessage'
                            label='Message'
                            className='m-3 text-dark'
                        >
                            <Form.Control as='textarea' placeholder='Write your message here' style={{ height: '200px' }} />
                        </FloatingLabel>

                        
                        <Button variant='primary' type='submit' className='m-3'>
                            send message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;