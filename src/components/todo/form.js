import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

export default function TodoForm(props) {

    const [state, setState] = useState(() => {

        return {
            item: {}
        };

    });


    const handleSubmit = (e) => {

        e.preventDefault();
        e.target.reset();

        props.handleSubmit(state.item);
        const item = {};

        setState(() => {

            return {
                item: item,
            };

        });

    };


    const handleInputChange = (e) => {

        setState({
            item: { ...state.item, [e.target.name]: e.target.value }
        })

    };


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    <h4>Add To Do Item</h4>
                </Card.Title>

                <form onSubmit={handleSubmit}>
                    <label>
                        <span>To Do Item</span>
                        <input
                            name="text"
                            placeholder="Add To Do List Item"
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <span>Assigned To</span>
                        <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
                    </label>
                    <label>
                        <span>Difficulty Rating</span>
                        <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
                    </label>
                    <button>Add Item</button>
                </form>

            </Card.Body>
        </Card>
    );


};
