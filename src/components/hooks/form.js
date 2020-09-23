import { useState } from 'react';


export default function useForm(callback) {


    const [values, setValue] = useState({});

    const handleSubmit = (event) => {

        if (event) event.preventDefault();
        callback(values);

    };


    const handleChange = (event) => {

        event.persist();

        setValue((values) => {

            return {
                ...values, [event.target.name]: event.target.value
            };

        });

    };


    return [
        handleSubmit,
        handleChange,
        values,
    ];

};
