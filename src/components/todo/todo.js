import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

export default function ToDo() {

    const [list, setList] = useState([]);


    useEffect(() => {

        setList([

            { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
            { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
            { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
            { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
            { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },

        ]);

    }, []);

    const addItem = (item) => {

        item._id = uuidv4();
        item.complete = false;

        setList(prevState => {

            return [...prevState, item];

        });

    };


    const toggleComplete = (id) => {

        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {

            item.complete = !item.complete;

            setList(prevState => {

                return list.map(listItem => {

                    return listItem._id === item._id ? item : listItem;

                });

            });

        };

    };


    return (

        <Container>

            <Row>
                <Col>
                    <header>
                        <Navbar bg='dark' variant='dark'>
                            <Nav>
                                <h3>
                                    To Do List Manager ({list.filter(item => !item.complete).length})
                                </h3>
                            </Nav>
                        </Navbar>
                    </header>
                </Col>
            </Row>


            <Row>
                <Col>
                    <section className="todo">

                        <div>
                            <TodoForm handleSubmit={addItem} />
                        </div>

                        <div>
                            <TodoList
                                list={list}
                                handleComplete={toggleComplete}
                            />
                        </div>
                    </section>
                </Col>
            </Row>

        </Container>

    );

};
