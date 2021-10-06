import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

function Contact() {
    return(
        <Container id='contact' as='section' className='py-5 px-0 position-relative' style={{ backgroundColor: 'white' }} fluid>
            <Row className='px-4 px-lg-5 position-relative justify-content-around z-index-2'>
                <Col xs={12} md={3} className='d-flex flex-column justify-content-center align-items-start mx-5'>
                    <h2 className='text-secondary'>
                        contact
                    </h2>
                    <hr className='mt-2 mb-3' />
                    <p className='text-dark'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col xs={12} md={6} className='p-3 p-lg-4' style={{ backgroundColor: '#003764' }}>
                    <Form>
                        <Container fluid className='p-0'>
                            <Row>
                                <Col xs={12} md={6}>
                                    <FloatingLabel
                                        controlId='floatingName'
                                        label='Name'
                                        className='m-3 text-dark'
                                    >
                                        <Form.Control type='text' placeholder='Enter Name' />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={12} md={6}>
                                    <FloatingLabel
                                        controlId='floatingEmail'
                                        label='Email Address'
                                        className='m-3 text-dark'
                                    >
                                        <Form.Control type='email' placeholder='email@example.com' />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={12}>
                                    <FloatingLabel
                                        controlId='floatingSubject'
                                        label='Subject Line'
                                        className='m-3 text-dark'
                                    >
                                        <Form.Control type='text' placeholder='Subject Line' />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={12}>
                                    <FloatingLabel
                                        controlId='floatingMessage'
                                        label='Message'
                                        className='m-3 text-dark'
                                    >
                                        <Form.Control as='textarea' placeholder='Write your message here' style={{ height: '200px' }} />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={12} className='p-3'>
                                    <Button variant='primary' type='submit' className='w-100'>
                                        send message
                                    </Button>
                                </Col>
                            </Row>
                        </Container>  
                    </Form>
                </Col>
            </Row>
            <Row className='w-50 h-100 position-absolute top-0 end-0 z-index-1 slanted-background-right' style={{ height: '200px', backgroundColor: '#b45b38' }} />
        </Container>
    );
}

export default Contact;