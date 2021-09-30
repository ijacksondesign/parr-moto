import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function OurWork() {
    const [portfolio] = useState([
        {
            name: 'project 1'
        },
        {
            name: 'project 2'
        },
        {
            name: 'project 3'
        },
        {
            name: 'project 4'
        },
        {
            name: 'project 5'
        },
        {
            name: 'project 6'
        },
        {
            name: 'project 7'
        },
        {
            name: 'project 8'
        },
        {
            name: 'project 9'
        },
    ]);

    return(
        <Container id='our-work' as='section' className='p-5' fluid>
            <Row className='px-5 justify-content-center align-items-center'>
                <Col xs={12} md={3} className='d-flex flex-column justify-content-center align-items-start'>
                    <h2 className='text-secondary'>
                        our work
                    </h2>
                    <hr className='mt-2 mb-3' />
                    <p className='text-light'>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col xs={12} md={9}>
                    <Container fluid>
                        <Row className='w-100 justify-content-center'>
                            {portfolio.map((project) => (
                                <Col xs={12} md={3} className='m-2' style={{ backgroundColor: '#b0b3b2', height:'300px' }}>
                                    <p className='text-light'>{project.name}</p>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default OurWork;