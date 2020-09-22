import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

import TodoForm from './form.js';
import TodoList from './list.js';
import useAxios from '../hooks/axios.js';

import './todo.scss';

export default function ToDo() {

    const [list, setList] = useState([]);

    useEffect(() => {

        async function axiosCall() {

            const { data } = await axios({
                method: 'get',
                url: 'http://localhost:3001/api/v1/todolist',
                data: {}
            });

            setList(data);
        }

        axiosCall()


        //     // setList([

        //     //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
        //     //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
        //     //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
        //     //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
        //     //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },

        //     // ]);

    }, []);

    const addItem = (item) => {


        // console.log(item);

        // item._id = uuidv4();
        // item.complete = false;

        // setList(prevState => {

        //     return [...prevState, item];

        // });

        async function axiosCall() {

            const body = {
                text: item.text,
                difficulty: item.difficulty ? item.difficulty : 1,
                assignee: item.assignee ? item.assignee : ''
            }

            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/todolist',
                data: body
            });

            setList(prevList => {

                return [...prevList, data]

            });
        }

        axiosCall()



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
                            <Navbar.Brand>
                                <h3>
                                    To Do List Manager ({list.filter(item => !item.complete).length})
                                </h3>
                            </Navbar.Brand>
                        </Navbar>
                    </header>
                </Col>
            </Row>


            <Row>
                <Col md={4}>
                    <div>
                        <TodoForm handleSubmit={addItem} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <TodoList
                            list={list}
                            handleComplete={toggleComplete}
                        />
                    </div>
                </Col>
            </Row>

        </Container>

    );

};
