import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});


// Add a response interceptor
http.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default http;
