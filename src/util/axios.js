import axios from 'axios';

export default async function executeAxios(config) {

    const { data } = await axios(config);

    console.log(data);

    return data;

}
