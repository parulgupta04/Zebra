import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../Redux/appAction';
import HttpClient from '../../Utilities/HttpClient';

function useHTTP() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function modalLoadingFunction(state) {
    dispatch(updateAppState('loadingModal', state));
  }

  async function initiateRequest(
    endPoint,
    method,
    body,
    isAuth,
    postSuccessFunction,
    loadingStatus,
    postErrorFunction,
    noToast,
    customMessage,
  ) {
    try {
      if (!loadingStatus) {
        setLoading(true);
      }
      if (loadingStatus === 1) {
        modalLoadingFunction(true);
      }

      const responseData = await HttpClient.request(endPoint, method, body);
      HttpClient.successHandler(
        endPoint,
        isAuth || false,
        responseData,
        postSuccessFunction,
        noToast,
      );
      if (loadingStatus === 1) {
        modalLoadingFunction(false);
      }
      if (!loadingStatus) {
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      if (!loadingStatus) {
        setError(true);
        setLoading(false);
      }
      if (loadingStatus === 1) {
        modalLoadingFunction(false);
      }
      HttpClient.errorHandler(error, postErrorFunction, customMessage);
    }
  }
  async function initiateAuthenticatedRequest(
    endPoint,
    method,
    body,
    isAuth,
    postSuccessFunction,
    loadingStatus,
    postErrorFunction,
    noToast,
    customMessage,
    token,
  ) {
    try {
      if (!loadingStatus) {
        setLoading(true);
      }
      if (loadingStatus === 1) {
        modalLoadingFunction(true);
      }

      const responseData = await HttpClient.requestAuthorized(
        endPoint,
        method,
        body,
        token,
      );
      HttpClient.successHandler(
        endPoint,
        isAuth || false,
        responseData,
        postSuccessFunction,
        noToast,
      );
      if (loadingStatus === 1) {
        modalLoadingFunction(false);
      }
      if (!loadingStatus) {
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      if (!loadingStatus) {
        setError(true);
        setLoading(false);
      }
      if (loadingStatus === 1) {
        modalLoadingFunction(false);
      }
      HttpClient.errorHandler(error, postErrorFunction, customMessage);
    }
  }
  return {initiateRequest, initiateAuthenticatedRequest, loading, error};
}

export default useHTTP;
