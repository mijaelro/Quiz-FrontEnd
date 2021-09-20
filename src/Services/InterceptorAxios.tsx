import axios from 'axios';
import store from '../Redux/store';

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {
    request.headers = {
        "authorization": store.getState().authState.client?.token
    };

    return request;
});

export default tokenAxios;