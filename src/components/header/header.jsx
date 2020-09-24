import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './header.scss'

export default props => (

    <header>

        <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
            </Nav>

            <Form inline>
                <FormControl type='text' placeholder='Username' className='mr-sm-2' />
                <FormControl type='text' placeholder='Password' className='mr-sm-2' />
                <Button variant='dark'>
                    Login
                </Button>
            </Form>

        </Navbar>

    </header>

)
