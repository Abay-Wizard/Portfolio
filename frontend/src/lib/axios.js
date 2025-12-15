import axios from 'axios'
const axiosInstance=axios.create({
    baseURL:'http://localhost:5000/api',  //https://portfolio-1-on6a.onrender.com
    withCredentials:true
})

export default axiosInstance