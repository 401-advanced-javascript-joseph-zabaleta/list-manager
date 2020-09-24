import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './todo.scss';


export default function TodoList(props) {

    let style = {

        card: {
            'marginBottom': '25px',
            'boxShadow': '5px 5px 12px 0px grey',
        },

        spanDelete: {

            'textAlign': 'center',
            'fontWeight': '700',
            'fontSize': '1em',
            'float': 'right',
            'cursor': 'pointer'

        },

        spanBadge: {

            'paddingRight': '10px'

        }

    }

    return (

        <ListGroup>
            {props.list.map(item => (

                <Card style={style.card} key={item._id}>
                    <Card.Header>
                        <span style={style.spanBadge} onClick={() => props.handleComplete(item._id)}>
                            <Badge pill variant={item.complete ? 'success' : 'warning'}>
                                {item.complete ? 'Complete' : 'Pending'}
                            </Badge>
                        </span>
                        <span>
                            {item.assignee}
                        </span>
                        <span style={style.spanDelete} onClick={() => props.handleDelete(item._id)}>
                            X
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.text}
                        </Card.Text>
                        <Card.Text className='text-right'>
                            Difficulty: {item.difficulty}
                        </Card.Text>

                    </Card.Body>
                </Card>

            ))}
        </ListGroup>

    );


};
