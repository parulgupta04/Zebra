import { StyleSheet } from 'react-native';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import { updateAppState } from '../../Redux/appAction';
import { useSelector, useDispatch } from 'react-redux';


function useSignUpChooserScreen({ navigation }) {
  const dispatch = useDispatch();
  useBackHandler(navigation, true);

  function nextPagePersonal() {
    navigation.navigate('SignUp', { page: 'personal' });
    dispatch(updateAppState('userType', 'personal'));
  }

  function nextPageBusiness() {
    navigation.navigate('SignUp', { page: 'business' });
    dispatch(updateAppState('userType', 'business'));
  }

  function goToLogin() {
    navigation.navigate('Login');
  }

  function goBack() {
    navigation.goBack();
  }

  const styles = StyleSheet.create({
    contentStyles: {
      paddingHorizontal: getPerfectSize(40),
    },
    backArrowStyle: {
      paddingHorizontal: getPerfectSize(40),

    },
    rowEnd: { alignItems: 'flex-end' },
    rowVerticalCenter: { alignItems: 'center' },
  });
  return { styles, nextPagePersonal, nextPageBusiness, goToLogin, goBack };
}

export default useSignUpChooserScreen;
