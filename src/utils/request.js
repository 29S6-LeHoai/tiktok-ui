import axios from 'axios';

const request = axios.create({
    // // cách 1
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    // cách 2 là chạy theo môi trường
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
