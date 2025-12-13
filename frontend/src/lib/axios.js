import axios from 'axios'
const axiosInstance=axios.create({
    baseURL:'https://portfolio-dm5d.onrender.com/api',   
    withCredentials:true
})

export default axiosInstance