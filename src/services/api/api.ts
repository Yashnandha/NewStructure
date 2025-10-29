import { store } from '@redux/store';
import { clearAction } from '@redux/userReducer/reducer';
import { navigateAndSimpleReset } from '@utility/navigationService';
import { Toast } from '@utility/toast';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import constant from '../config/constant';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
let isLoggedIn = true;
let isForbidden = false;
const axiosInstance = axios.create({
  baseURL: constant.baseURL,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const { token } = store.getState().userReducer;
    if (token) {
      config.headers.set('auth', `${token}`);
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Relogin the user if the token expires
axiosInstance.interceptors.response.use(
  async response => response,
  async function (error) {
    if (error?.response?.status == 401 && isLoggedIn) {
      navigateAndSimpleReset('login', 0);
      store.dispatch(clearAction());
      isLoggedIn = false;
      Toast('Session Expired! Please login again.');
      // source.cancel('Operation becouse of status code 401');
    } else if (error?.response?.status == 403 && !isForbidden) {
      isForbidden = true;
      navigateAndSimpleReset('accountForbidden', 0);
      Toast('Your account is Restricted! Please contact admin.');
    } else if (
      error?.response?.status == 500 &&
      error?.response?.data?.message == 'Internal server error'
    ) {
      Snackbar.show({
        text: 'Please update your app',
      });
    } else if (error?.response?.status === 422) {
      Snackbar.show({
        text:
          error?.response?.data?.error?.[
            Object.keys(error?.response?.data?.error)[0]
          ][0] ?? 'Somthing went wrong! Please try again.',
      });
    }

    return Promise.reject(error.response);
  },
);

export { axiosInstance };
