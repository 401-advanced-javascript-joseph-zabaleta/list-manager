import { useState, useEffect } from 'react';
import axios from 'axios';

const defaultData = {};

export default function useAxios(method, url, data = defaultData) {

    const [values, setValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchData() {
            setIsLoading(true);
            const response = await axios({
                method,
                url,
                data: data ? data : {}
            });
            const results = response.data;
            setValues(results);
            setIsLoading(false);
        }

        fetchData();
    }, [method, url, data]);


    return {
        values,
        isLoading,
    };

};
