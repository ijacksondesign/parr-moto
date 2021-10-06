import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Project() {
    return(
        <Container id='our-work' as='section' className='px-5 justify-content-center' style={{ paddingTop: '200px' }}>
            <Row className='justify-content-center align-items-center' fluid>
                <Col xs={12}>
                    <h2 className='text-secondary'>
                        project title
                    </h2>
                    <hr className='mt-2 mb-3' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className='w-100 fst-italic'>
                        Service 1, Service 2, Service 3, Service 4
                    </p>
                </Col>
                <Col xs={12} className='m-2' style={{ backgroundColor: '#b0b3b2', height:'500px' }}>
                </Col>
                <Col xs={12} className='m-2' style={{ backgroundColor: '#b0b3b2', height:'500px' }}>
                </Col>
                <Col xs={12} className='m-2' style={{ backgroundColor: '#b0b3b2', height:'500px' }}>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;