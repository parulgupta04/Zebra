import { useState } from 'react';
import { StyleSheet } from 'react-native';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import useForm from '../../Hooks/Shared/useForm';
import useValidation from '../../Hooks/Shared/useValidation';
import useHTTP from '../../Hooks/Shared/useHTTP';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../Redux/appAction';
import { useSelector } from 'react-redux';

function useLoginScreen({ navigation }) {
  const [rememberMe, setRememberMe] = useState(true);
  const { form, updateForm } = useForm();
  const { initiateRequest } = useHTTP();
  const dispatch = useDispatch();
  useBackHandler(navigation, false);
  const appState = useSelector(state => state);
  const { appLanguage } = appState;

  const formBuilderData = [
    {
      inputType: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      keyName: 'email',
      validationTypes: ['required', 'email'],
    },
    {
      inputType: 'password',
      label: 'Your Password',
      placeholder: 'Enter Password',
      keyName: 'password',
      validationTypes: ['required'],
    },
  ];

  function nextPage() {
    navigation.navigate('Login');
  }

  function languagePage() {
    navigation.navigate('Language');
  }

  function goToSignUp() {
    navigation.navigate('SignUpChooser');
  }

  function toggleRememberMe() {
    setRememberMe(!rememberMe);
  }

  function apiCall() {
    const requestBody = {
      email: form.email,
      password: form.password,
    };

    function postSuccessFunction(responseData) {
      console.log(responseData);
      dispatch(updateAppState('userData', responseData));
    }

    initiateRequest(
      '/signin',
      'POST',
      requestBody,
      true,
      postSuccessFunction,
      1,
    );
  }

  function login() {
    const validationStatus = useValidation(formBuilderData, form);
    if (validationStatus) {
      apiCall();
    }
  }

  const styles = StyleSheet.create({
    contentStyles: {
      paddingHorizontal: getPerfectSize(50),
      direction: appLanguage === 'ar' ? 'rtl' : 'ltr'
    },
    rememberMe: { flex: 4, alignItems: 'flex-start' },
    forgetPassword: { flex: 4 },
    rowVerticalCenter: { alignItems: 'center' },
    flex1: {
      flex: 1,
    },
    transparentBg: {
      backgroundColor: 'transparent',
    },
  });
  return {
    styles,
    nextPage,
    goToSignUp,
    rememberMe,
    toggleRememberMe,
    formBuilderData,
    updateForm,
    login,
    languagePage,
    form,
  };
}

export default useLoginScreen;
