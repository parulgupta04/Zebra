import {useState} from 'react';
import {StyleSheet} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';
import useForm from '../../Hooks/Shared/useForm';
import useValidation from '../../Hooks/Shared/useValidation';
import useHTTP from '../../Hooks/Shared/useHTTP';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import {useSelector} from 'react-redux';
import ToastHandler from '../../Utilities/ToastHandler';

function useChangePasswordScreen({navigation}) {
  const [rememberMe, setRememberMe] = useState(true);
  const {form, updateForm} = useForm();
  const {initiateAuthenticatedRequest} = useHTTP();
  const appState = useSelector(state => state);
  const {userData} = appState;
  useBackHandler(navigation, true);

  const formBuilderData = [
    {
      inputType: 'password',
      label: 'Old Password',
      placeholder: 'Enter Old Password',
      keyName: 'oldPassword',
      validationTypes: ['required'],
    },
    {
      inputType: 'password',
      label: 'New Password',
      placeholder: 'Enter New Password',
      keyName: 'newPassword',
      validationTypes: ['required', 'password'],
    },
    {
      inputType: 'password',
      label: 'Confirm Password',
      placeholder: 'Enter Confirm Password',
      keyName: 'confirmPassword',
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
      user_id: userData.id,
      access_token: userData.token,
      old_password: form.oldPassword,
      new_password: form.newPassword,
      confirm_new_password: form.confirmPassword,
    };

    function postSuccessFunction(responseData) {
      console.log(responseData);
      navigation.goBack();
    }

    initiateAuthenticatedRequest(
      '/changePassword',
      'POST',
      requestBody,
      false,
      postSuccessFunction,
      1,
      () => {},
      false,
      null,
      (userData || {}).token,
    );
  }

  function changePassword() {
    const validationStatus = useValidation(formBuilderData, form);
    if (validationStatus) {
      if (form.newPassword !== form.confirmPassword) {
        return ToastHandler.errorToast("Passwords don't match");
      }
      apiCall();
    }
  }

  const styles = StyleSheet.create({
    contentStyles: {
      paddingHorizontal: getPerfectSize(50),
    },
    rememberMe: {flex: 4, alignItems: 'flex-start'},
    forgetPassword: {flex: 4},
    rowVerticalCenter: {alignItems: 'center'},
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
    changePassword,
    languagePage,
    form,
  };
}

export default useChangePasswordScreen;
