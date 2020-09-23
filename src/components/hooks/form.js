import { useState } from 'react';


export default function useForm(callback, defaultConfig) {


    const defaultValue = defaultConfig ? defaultConfig : {};

    const [values, setValue] = useState(defaultValue);

    const handleSubmit = (event) => {

        if (event) event.preventDefault();
        callback(values);
        setValue(defaultValue);
    };


    const handleChange = (event) => {

        event.persist();

        setValue((prevValues) => {

            return {
                ...prevValues, [event.target.name]: event.target.value
            };

        });

    };


    return [
        handleSubmit,
        handleChange,
        values,
    ];

};
