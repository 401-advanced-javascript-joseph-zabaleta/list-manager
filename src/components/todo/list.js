import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


import './todo.scss';


export default function TodoList(props) {

    let style = {

        'margin-bottom': '25px',
        'box-shadow': '5px 5px 12px 0px grey',

    }

    return (

        <ListGroup>
            {props.list.map(item => (
                // <ListGroup.Item variant={item.complete ? 'success' : 'danger'} key={item._id}>
                //     <span onClick={() => props.handleComplete(item._id)}>
                //         {item.text}
                //     </span>
                // </ListGroup.Item>
                <Card style={style}>
                    <Card.Header>
                        <span onClick={() => props.handleComplete(item._id)}>
                            <Badge pill variant={item.complete ? 'success' : 'warning'}>
                                {item.complete ? 'Complete' : 'Pending'}
                            </Badge>
                        </span>
                        <span>
                            {item.assignee}
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
