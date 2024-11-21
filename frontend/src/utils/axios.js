import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://craftshub-backend.onrender.com',
    withCredentials:true,
});

export default instance;