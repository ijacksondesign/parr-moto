import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import whatWeDoImage from '../../assets/what-we-do/what-we-do.jpg';

function WhatWeDo() {
    const [services] = useState([
        {
            service:'service 1'
        },
        {
            service:'service 2'
        },
        {
            service:'service 3'
        },
        {
            service:'service 4'
        },
        {
            service:'service 5'
        },
        {
            service:'service 6'
        },
        {
            service:'service 7'
        },
        {
            service:'service 8'
        },
    ]);

    return(
        <Container id='what-we-do' as='section' className='py-4 py-md-5 position-relative' style={{ backgroundColor: 'white' }} fluid>
            <Row className='justify-content-center position-relative z-index-2'>
                <Col xs={12} md={6}>
                    <Image src={whatWeDoImage} className='w-100' />
                </Col>
                <Col xs={12} md={4} className='d-flex flex-column justify-content-center align-items-start mt-5 mt-md-0 px-3 px-md-5'>
                    <h2 className='text-secondary'>
                        what we do
                    </h2>
                    <hr className='mt-2 mb-3' />
                    <p className='text-dark'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className='text-dark w-100'>
                        <ul className='ps-4' style={{ columnCount: 2 }}>
                            {services.map((service) => (
                                <li>{service.service}</li>
                            ))}
                        </ul>
                    </p>
                </Col>
            </Row>
            <Row className='w-50 h-100 position-absolute top-0 start-0 z-index-1 slanted-background-left' style={{ height: '200px', backgroundColor: '#cc9f53' }} />
        </Container>
    );
}

export default WhatWeDo;