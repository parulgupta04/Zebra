import axios from 'axios';
import ToastHandler from './ToastHandler';
import {API_URL} from '../Config/Contants';
import DataStore from './DataStore';
import NavigationService from './NavigationService';

class HttpClient {
  constructor() {
    this.api_url = API_URL;
  }

  //   generateHeader() {
  //     const headers = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*'
  //       }
  //     };
  //     return headers;
  //   }

  async generateAuthenticatedHeader() {
    const userDataString = await DataStore.get('userData');
    const userData = JSON.parse(userDataString);
    this.headers = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + (userData ? userData.token : null),
      },
    };
    return this.headers;
  }

  async successHandler(
    apiName,
    isAuth,
    responseData,
    postSuccessAction,
    noToast,
  ) {
    console.log(`${apiName} Response:`, responseData);
    const {status} = responseData;
    const {data, message} = responseData.data;
    if (status === 200 || status === 201) {
      if (!noToast) {
        ToastHandler.successToast(message);
      }
      if (isAuth) {
        await DataStore.clear();
        DataStore.store('userData', JSON.stringify(data));
        NavigationService.navigate('AuthStack');
      }
    } else {
      ToastHandler.errorToast(message);
    }
    postSuccessAction ? postSuccessAction(data) : null;
  }

  async errorHandler(error, postErrorAction, customMessage) {
    console.log(error);
    console.log(error.response);
    if (error.response) {
      const {status} = error.response;
      if (status === 401) {
        return ToastHandler.errorToast('Invalid Credentials');
      }

      ToastHandler.errorToast(
        (error.response.data ? error.response.data.message : null) ||
          customMessage ||
          'Server Error',
      );
    } else {
      ToastHandler.errorToast('Failed to connect with server');
    }
    postErrorAction ? postErrorAction() : null;
  }

  async request(endpoint, method, body) {
    switch (method) {
      case 'GET':
        return await axios.get(this.api_url + endpoint);
      case 'POST':
        return await axios.post(this.api_url + endpoint, body);
      case 'PUT':
        return await axios.put(this.api_url + endpoint, body);
    }
  }

  async requestAuthorized(endpoint, method, body, token) {
    switch (method) {
      case 'GET':
        return await axios.get(this.api_url + endpoint, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer ' + token,
          },
        });
      case 'POST':
        return await axios.post(this.api_url + endpoint, body, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer ' + token,
          },
        });
      case 'PUT':
        return await axios.put(this.api_url + endpoint, body, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'Bearer ' + token,
          },
        });
    }
  }
}

export default new HttpClient();
