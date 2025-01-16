import axios from 'axios';
import { toast } from 'react-toastify';
require('dotenv').config()

if (process.env.REACT_APP_MODE === 'development' ) {
  axios.defaults.baseURL = 'http://localhost:3000/'
} else {
  axios.defaults.baseURL = 'http://localhost:3000/'
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response) {
    if (error.response.status === 401 ) {
      toast.dismiss()
      toast.info("لطفا وارد شوید" , {position: 'bottom-right',className: 'foo-bar'})
      window.location = '/login';
    } else {
      return Promise.reject(error);
    }
  }
});
