import {Toast} from 'native-base';

function normalToast(msg) {
  return Toast.show({
    text: msg,
    duration: 2000,
  });
}

function successToast(msg) {
  return Toast.show({
    text: msg,
    type: 'success',
    duration: 2000,
  });
}

function warningToast(msg) {
  return Toast.show({
    text: msg,
    type: 'warning',
    duration: 2000,
  });
}

function errorToast(msg) {
  return Toast.show({
    text: msg,
    type: 'danger',
    duration: 2000,
  });
}

const ToastHandler = {
  normalToast,
  warningToast,
  successToast,
  errorToast,
};

export default ToastHandler;
