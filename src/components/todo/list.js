import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


export default function TodoList(props) {

    return (

        // <ul>
        //     {props.list.map(item => (
        //         <li
        //             className={`complete-${item.complete.toString()}`}
        //             key={item._id}
        //         >
        //             <span onClick={() => props.handleComplete(item._id)}>
        //                 {item.text}
        //             </span>
        //         </li>
        //     ))}
        // </ul>

        <ListGroup>
            {props.list.map(item => (
                <ListGroup.Item variant={item.complete ? 'success' : 'danger'} key={item._id}>
                    <span onClick={() => props.handleComplete(item._id)}>
                        {item.text}
                    </span>
                </ListGroup.Item>
            ))}
        </ListGroup>

    );


};
