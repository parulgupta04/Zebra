import {createStackNavigator, createAppContainer} from 'react-navigation';
import LanguageScreen from '../Screens/LanguageScreen/LanguageScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignUpChooserScreen from '../Screens/SignUpChooserScreen/SignUpChooserScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import ForgerPasswordScreen from '../Screens/ForgetPasswordScreen/ForgerPasswordScreen';
import AlertSettingns from '../Screens/AlertSettings/AlertSettingns';

const RootStackNavigator = createStackNavigator(
  {
    Language: {
      screen: LanguageScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SignUpChooser: {
      screen: SignUpChooserScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    ForgetPassword: {
      screen: ForgerPasswordScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Language',
  },
);

export default createAppContainer(RootStackNavigator);
