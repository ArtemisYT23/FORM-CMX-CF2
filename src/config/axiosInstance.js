import axios from "axios";

export const CoreInstance =  axios.create({
    baseURL:`http://108.161.128.141:9090/api/FillForm/`,
    // baseURL:`http://localhost:9393/api/FillForm/`, 
    // baseURL:`http://localhost:9090/api/FillForm/`,
});

export const DocumentInstance = 'http://108.161.128.141:9090/api/'
// export const DocumentInstance = 'http://localhost:9393/api/'
// export const DocumentInstance = 'http://localhost:9090/api/'

export const FileInstance =  'http://108.161.128.141:9092/api/';
// export const FileInstance =  'https://localhost:5001/api/';
// export const FileInstance =  'http://localhost:9092/api/';

