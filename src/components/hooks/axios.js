import { useState, useEffect } from 'react';
import axios from 'axios';


async function getList(config) {

    const { data } = await axios(config);

    return data;

};


export default function useAxios(config) {

    const [list, setList] = useState(() => {

        return getList(config);

    });




    return [list, setList];

}
