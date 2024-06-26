import axios from 'axios'
import { endPoint } from '../Constants/constant';


const instance = axios.create({
    baseURL: endPoint
})

export default instance;