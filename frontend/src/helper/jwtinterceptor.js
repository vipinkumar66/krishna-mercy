import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const jwtinterceptor = () => {

    const jwtAxios = axios.create({baseURL: `http://127.0.0.1:8000`})
    // const navigate = useNavigate()
    jwtAxios.interceptors.response.use(
        (response) =>{
            return response
        },
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 || 403 ){
                // navigate('/')
                throw error;
            }

        }
    )

  return jwtAxios;
}

export default jwtinterceptor;