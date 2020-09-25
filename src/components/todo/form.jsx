import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/form.js';


export default function TodoForm(props) {

    const [handleSubmit, handleChange, values] = useForm(formHandler, {
        text: '',
        assignee: '',
        difficulty: '1',
    })

    function formHandler(data) {

        data.difficulty = parseInt(data.difficulty)
        props.handleSubmit(data);

    };


    let style = {
        'fontWeight': '500',
    };

    return (

        <Card>
            <Card.Body>
                <Card.Title>
                    Add To Do Item
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label style={style}>
                            To Do Item
                        </Form.Label>
                        <Form.Control onChange={handleChange} value={values.text} type='text' name='text' placeholder='Item Details' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={style}>
                            Assigned To
                    </Form.Label>
                        <Form.Control onChange={handleChange} value={values.assignee} type='text' name='assignee' placeholder='Assignee Name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={style}>
                            Difficulty
                    </Form.Label>
                        <Form.Control onChange={handleChange} value={values.difficulty} type='range' name='difficulty' min='1' max='5' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Add Item
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );

};
