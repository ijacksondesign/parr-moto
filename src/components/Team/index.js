import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Team() {
    const [team] = useState([
        {
            name: 'david grant',
            title: 'title'
        },
        {
            name: 'tiana perez',
            title: 'title'
        },
        {
            name: 'carrie de phillip',
            title: 'title'
        },
        {
            name: 'summer rogers',
            title: 'title'
        },
        {
            name: 'ian jackson',
            title: 'title'
        },
        {
            name: 'cia sherman',
            title: 'title'
        },
        {
            name: 'morgan mcmahon',
            title: 'title'
        },
        {
            name: 'lauren tolan',
            title: 'title'
        },
    ]);

    return(
        <Container id='team' className='flex-column justify-content-center'  fluid>
            <Row className='flex-column justify-content-center'>
                <Col className='d-flex flex-column justify-content-center'>
                    <h2 className='text-secondary text-center'>
                        meet the team
                    </h2>
                    <hr className='mt-2 mb-4 mx-auto' />
                </Col>
            </Row>
            <Row className='px-3 justify-content-center'>
                {team.map((member) => (
                    <Col xs={12} md={3} className='m-2' style={{ backgroundColor: '#b0b3b2', height:'300px' }}>
                        <p className='text-light'>{member.name}</p>
                        <p className='text-light'>{member.title}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Team;