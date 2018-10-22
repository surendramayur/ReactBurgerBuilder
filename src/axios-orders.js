import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-c073f.firebaseio.com/'
});

export default instance;