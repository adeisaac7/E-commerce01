import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://craftshub-backend.onrender.com',
});

export default instance;