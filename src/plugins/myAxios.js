import axios from "axios"
import {showLoadingToast, showToast, closeToast} from "vant";

const myAxios = axios.create({
    baseURL: "http://localhost:8080/api",
});
myAxios.defaults.withCredentials = true

myAxios.interceptors.request.use(function (request) {
    showLoadingToast({
        duration: 0,
        forbidClick: true,
    });
    return request
})

myAxios.interceptors.response.use(function (response) {
    closeToast();
    return response.data.data
}, function (error) {
    showToast({
        message: error.response.data.message,
    });
    return Promise.reject(error)
})
export default myAxios;