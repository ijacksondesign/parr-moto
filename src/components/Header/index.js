import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import headerImage from '../../assets/header-image/header-image.jpg';

function Header() {
    return(
        <Container id='home' as='header' fluid className='Jumbotron d-flex flex-column justify-content-center align-items-center' >
            <Row className='text-center justify-content-center'>
                <Col xs={12} md={8}>
                    <h1>
                        driving retail forward
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-center w-100'>
                <Nav className='my-4 justify-content-center'>
                    <Nav.Item>
                        <Nav.Link active={true} href='#what-we-do' className='mx-2 btn btn-primary btn-slant'>
                            <p className='unslant-text mb-0'>what we do</p>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={false} href='#our-work' className='mx-2 btn btn-outline-primary btn-slant'>
                            <p className='unslant-text mb-0'>our work</p>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
        </Container>
    );
}

export default Header;