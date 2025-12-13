import axios from 'axios'
const axiosInstance=axios.create({
    baseURL:'https://portfolio-1-on6a.onrender.com/api',    //https://portfolio-1-on6a.onrender.com
    withCredentials:true
})

export default axiosInstance