import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

import TodoForm from './form.jsx';
import TodoList from './list.jsx';
import Pagination from '../pagination/pagination.js';
import './todo.scss';


export default function ToDo() {

    const [list, setList] = useState([]);
    const [itemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    async function axiosGetCall() {

        const { data } = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/v1/todolist',
            data: {}
        });

        setList(data);
    }

    const addItem = (item) => {

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


    const deleteItem = (id) => {

        async function axiosCall() {

            let item = list.filter(i => i._id === id)[0] || {};

            if (item._id) {

                await axios({
                    method: 'delete',
                    url: 'http://localhost:3001/api/v1/todolist/' + item._id,
                })

                axiosGetCall()

            }

        };

        axiosCall();

    };


    const toggleComplete = (id) => {

        async function axiosCall() {

            let item = list.filter(i => i._id === id)[0] || {};

            if (item._id) {

                item.complete = !item.complete;

                let body = {
                    complete: Boolean(item.complete),
                }

                await axios({
                    method: 'put',
                    url: 'http://localhost:3001/api/v1/todolist/' + item._id,
                    data: body
                })

                setList(prevState => {

                    return list.map(listItem => {

                        return listItem._id === item._id ? item : listItem;

                    });

                });

            }

        };

        axiosCall();

    };

    const updateActivePage = (page) => {
        setCurrentPage(page)
    };


    useEffect(() => {

        axiosGetCall()

    }, []);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = indexOfLastItem - itemsPerPage;
    const currentList = list.slice(indexofFirstItem, indexOfLastItem);


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
                            list={currentList}
                            handleComplete={toggleComplete}
                            handleDelete={deleteItem}
                        />
                        <Pagination itemsPerPage={itemsPerPage} totalItems={list.length} updateActivePage={updateActivePage} />
                    </div>
                </Col>
            </Row>

        </Container>

    );

};
