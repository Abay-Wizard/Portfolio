import axios from 'axios'
const axiosInstance=axios.create({
    baseURL:'https://portabay.onrender.com/api',  //https://portabay.onrender.com
    withCredentials:true
})

export default axiosInstance