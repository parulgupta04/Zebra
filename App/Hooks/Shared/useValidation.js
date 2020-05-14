import ToastHandler from '../../Utilities/ToastHandler';

function useValidation(inputArray, form) {
  let validationStatus = true;

  function validateRequired(value = '') {
    if (value.trim()) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email = '') {
    let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword(password = '') {
    if (password.length >= 8 && password.length <= 16) {
      return true;
    } else {
      return false;
    }
  }

  function validateName(name = '') {
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regex.test(name)) {
      return true;
    } else {
      return false;
    }
  }

  function validateUrl(url = '') {
    let regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (regex.test(url)) {
      return true;
    } else {
      return false;
    }
  }

  function validationStatusFunction({ validationTypes, keyName, label }) {
    return validationTypes.every(type => {
      switch (type) {
        case 'required':
          if (!validateRequired(form[keyName])) {
            ToastHandler.errorToast(`${label} is required`);
            validationStatus = false;
            return false;
          }
          break;
        case 'email':
          if (!validateEmail(form[keyName])) {
            ToastHandler.errorToast(`${label} is invalid`);
            validationStatus = false;
            return false;
          }
          break;
        case 'password':
          if (!validatePassword(form[keyName])) {
            ToastHandler.errorToast(
              `Please enter minimum 8 character password`,
            );
            validationStatus = false;
            return false;
          }
          break;
        case 'confirmPassword':
          if (!validatePassword(form[keyName])) {
            ToastHandler.errorToast(`${label} is invalid`);
            validationStatus = false;
            return false;
          }
          break;
        default:
          break;
      }
      return true;
    });
  }

  inputArray.every(input => {
    if (typeof input === 'string') {
      return true;
    } else if (Array.isArray(input)) {
      return input.every(inp => validationStatusFunction(inp));
    }
    return validationStatusFunction(input);
  });
  return validationStatus;
}

export default useValidation;
